<?php
/**
 * Created by PhpStorm.
 * User: Xorent
 * Date: 11/20/2018
 * Time: 4:40 PM
 */

namespace App\Filters;


use Carbon\Carbon;
use Illuminate\Support\Facades\Redis;

class OrderFilter extends DataFilter
{
    protected $filed = 'order_number';
    /**
     * @param int $days
     * @return mixed
     */
    public function days($days = 8)
    {
        $start = Carbon::now();
        $end = Carbon::now()->subDays($days);
        return $this->builder->whereBetween($this->field(), [$end, $start]);
    }

    /**
     * @param string $field_name
     * @return string
     */
    public function field($field_name = 'order_date'){
        return $field_name;
    }

    /*used for global search*/

    public function fields($filed = 'order_number')
    {
        $this->filed = $filed;
    }

    public function q($title = '')
    {
        return $this->builder->where($this->filed, 'like', '%' . $title . '%');
    }

    public function title($title)
    {
        return $this->builder->where('order_number', 'like', '%' . $title . '%');
    }

    public function between($date){
        $dates = explode(',', $date);
        $end = date('Y-m-d', strtotime(trim($dates[0]. '+ 2 day')));
        $start = date('Y-m-d', strtotime($dates[1]));
        return $this->dateBetween([$end, $start], $this->field());
    }
    public function statuses($status = false){
        return $this->builder->when($status, function ($query) use($status) {
            $ids = Redis::smembers("status.{$status}");
            $query->whereIn('id', $ids);
        });
    }
    public function orders($status = 'pending'){
        return $this->builder->whereHas("lastStatus", function ($query){
            $query->whereIn('alias', ['pending', 'cash-pending', 'review-complete', 'pending-for-review', 'partial-payment-pending', 'partial-payment-cash-pending']);
        });
    }

    public function order_status($status = 'all'){
        return $this->builder->when($status!='all', function ($query) use ($status){
            $query->whereHas("lastStatus", function ($query) use($status){
                return $query->where('alias', '=', $status);
            });
        });
    }

    public function queryOrder($order){
        return $this->builder->when($order, function ($query) use($order){
            $orderBY = explode(',', $order);
            return $query->orderBy($orderBY[0], $orderBY[1]);
        });
    }

    public function search($searchText = '')
    {
        return $this->builder->when($searchText != '', function ($query) use($searchText){
            $query->where('order_number', 'like', "%{$searchText}%")
                ->orWhere('order_date', "like", "%{$searchText}%")
                ->orWhereHas('user', function ($query) use($searchText){
                    $query->where('email', 'like', "%{$searchText}%");
                    $query->orWhere('name', 'like', "%{$searchText}%");
                    $query->orWhere('mobile', 'like', "%{$searchText}%");
                })
                ->orWhereHas('address.country', function ($query) use ($searchText){
                    $query->where('title', 'like', "%{$searchText}%");
                    $query->orWhere('country_code', 'like', "%{$searchText}%");
                })
                ->orWhereHas('address.state', function ($query) use ($searchText){
                    $query->where('title', 'like', "%{$searchText}%");
                })
                ->orWhereHas('address', function ($query) use($searchText){
                    $query->where('city', 'like', "%{$searchText}%");
                    $query->orWhere('full_name', 'like', "%{$searchText}%");
                    $query->orWhere('phone', 'like', "%{$searchText}%");
                })
                ->orWhereHas('lastStatus', function ($query) use($searchText){
                    $query->where('title', 'like', "%{$searchText}%");
                    $query->orWhere('alias', 'like', "%{$searchText}%");
                })
                ->orWhereHas('items.status', function ($query) use($searchText){
                    $query->where('title', 'like', "%{$searchText}%");
                });
        });
    }

}