<?php
/**
 * Created by PhpStorm.
 * User: Xorent
 * Date: 1/2/2019
 * Time: 3:30 PM
 */

namespace App\Repo;

use App\Models\{
    Order, Address
};
use App\Traits\OAC;
use Carbon\Carbon;
use App\Models\Status;
use App\Models\Currency;

class OrderRepository
{
    use OAC;
    /**
     * @param $user_address
     * @return Address
     * store order address info to database
     */
    public function address($user_address)
    {
        $address = isset( $user_address['id'] ) ? Address::find( $user_address['id'] ) : new Address;
        $address->user_id = auth()->guard( 'api' )->id();
        $address->country_id = $user_address['country_id'] ?? null;
        $address->state_id = $user_address['state_id'] ?? null;
        $address->district_id = $user_address['district_id'] ?? null;
        $address->full_name = $user_address['full_name'] ?? "";
        $address->address = $user_address['address'] ?? "";
        $address->address_2 = $user_address['address_2'] ?? "";
        $address->city = $user_address['city'] ?? 0;
        $address->zip_code = $user_address['zip_code'] ?? 0;
        $address->is_default = $user_address['is_default'] ?? false;
        $address->phone = $user_address['phones'] ?? 0;
        $address->save();

        return $address;
    }

    /**
     * @param $address
     * @param $paymentMethod
     * @param $calculationResult
     * @return Order
     * @throws \Exception
     */
    public function order($address, $paymentMethod, $calculationResult) {
        $now = Carbon::now();
        $alias = $paymentMethod->is_online ? 'pending' : 'cash-pending';
        $status = Status::where('alias', $alias )->first()->id;
        $orderCurrency = Currency::where('code', 'usd')->first();
        $order = new Order;
        $order->order_number = $now->year . $now->month . random_int( 100000, 9999999 );
        $order->shipping_address_id = $address;
        $order->payment_method_id = $paymentMethod->id;
        $order->tax_usa = $calculationResult["tax_usa"];
        $order->tax_bd = $calculationResult["tax_bd"];
        $order->user_id = auth()->id();
        $order->order_date = Carbon::now();
        $order->currency = $orderCurrency->id;
        $order->service_charge = $calculationResult["royalty_charge"];
        $order->shipping_cost = $calculationResult["shipping_cost"];
        $order->last_status_id = $status;
        $order->save();
        //updating items table with user id
        $order->status()->attach($status);
        return $order;
    }
}