<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\AdminMenu;
use App\Models\Currency;
use App\Models\Permission;
use App\Models\Status;
use App\Models\User;
use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Route;

class DashboardController extends Controller
{
    public function index(){
        $order = new Order;
        $data["users"] = User::all()->count();
        $data["admin"] = User::admins()->count();
        $data["members"] = User::users()->count();
        $orders = collect($order->get());
        $data["orders"] = $orders->count();
        $status_array = [];
        $statuses = Status::all();
        foreach ($statuses as $key => $status){
            array_push($status_array, Redis::scard("status.{$status->alias}"));
        }
        $total = array_sum($status_array);
        if ($total == 0){
            $statuses = Status::with('lastOrders')->orderBy('index', 'ASC')->get();
            $statuses->flatMap(function ($status){
                if(!$status->lastOrders->count()) {
                    Redis::sadd("status.{$status->alias}", '');
                };
                $status->lastOrders->flatMap(function ($order) use($status){
                    Redis::sadd("status.{$status->alias}", $order->id);
                    $order->items->flatMap(function ($item) use($order){
                        if (!is_null($item->status)){
                            $in_redis = Redis::smembers("status.{$item->status->alias}") ?? [];
                            if (!in_array($order->id, $in_redis)){
                                Redis::sadd("status.{$item->status->alias}", $order->id);
                            }
                        }
                    });
                });
            });
        }
        $data["statuses"] = [];
        $data["st"] = [];
        foreach (Redis::keys("status.*") as $key => $statusKeys){
            $alias = explode(".", $statusKeys)[1];
            $status = Status::whereAlias($alias)->first();
            $redis_array = Redis::smembers($statusKeys);
            if (count($redis_array) > 1){
                Redis::srem($statusKeys, "");
                $redis_array = Redis::smembers($statusKeys);
            }
            $data["st"][] = [
                'title' => $status->title,
                'id' => $status->id,
                'alias' => $status->alias,
                'order' => $status->index,
                'last_orders_count' => (in_array('', $redis_array) && count($redis_array) == 1) ?
                    0 : count($redis_array)
            ];
        }

        uasort($data['st'], function ($a, $b){
            if($a["order"] == $b["order"]){
                return 0;
            }
            return ($a['order'] < $b['order']) ? -1 : 1;
        });

        foreach ($data["st"] as $key => $status){
            $data["statuses"][] = $status;
        }
        return response()->json($data);
    }

    public function orderDataSet($orders){
        $orderMonth = [];
        $ordersCounter = [];
        $groupedOrder = $orders->reverse()->groupBy(function ($order){
            return substr($order->order_date, 5, 2);
        })->slice(0, 12);
        foreach ($groupedOrder as $index => $orders){
            $orderMonth[] = Carbon::createFromFormat('!m', $index)->format('F');
            $ordersCounter[] = $orders->count();
        }
        return response()->json(['orderMonth' => $orderMonth, 'ordersCounter' => $ordersCounter]);
    }

    public function memberDataSet($members){
        $memberDataMonth = [];
        $memberDataCounter = [];
        $groupedMember = $members->reverse()->groupBy(function ($member){
            return substr($member->created_at, 5, 2);
        })->slice(0, 12);
        foreach ($groupedMember as $index => $members){
            $memberDataMonth[] = Carbon::createFromFormat('!m', $index)->format('F');
            $memberDataCounter[] = $members->count();
        }
        return response()->json(['memberDataMonth' => $memberDataMonth, 'memberDataCounter' => $memberDataCounter]);
    }

    public function currencies(){
        return Currency::all();
    }

    public function getPermittedMenu()
    {
        $sidebarMenus = AdminMenu::where( 'menu_types', 'sidebar_menu' )->whereStatus( true )->get();
        $permittedMenus = [];
        $authUser = auth()->user();
        $roles = $authUser->roles->pluck( 'id' )->toArray();
        $permissions = Permission::whereIn( 'role_id', $roles )
            ->where( 'allowed', 1 )
            ->get( ['namespace', 'controller', 'action'] );

        if (in_array( 1, $roles )) {
            return response()->json([
                "menus" => $sidebarMenus, 'super_user' => true
            ]);
        } else {
            foreach ($sidebarMenus as $sidebarMenu) {
                if ($sidebarMenu->route != 'Null') {
                    $checkPermission = $this->checkAccessThisUserRole( $sidebarMenu->route, $permissions );
                    if ($checkPermission == true) {
                        $permittedMenus[] = $sidebarMenu;
                    }
                }
            }
            return response()->json([
                'menus' => $permittedMenus,
                'super_user' => false
            ]);
        }

    }

    protected function checkAccessThisUserRole($route = 'dashboard/', $permissions)
    {

        foreach ($permissions as $permission) {
            $getPermissionsController[] = $permission->namespace . '\\' . $permission->controller . '@' . $permission->action;
        }

        if (Route::getRoutes()->getByName( $route ) != null) {
            $controller = Route::getRoutes()->getByName( $route )->getAction()['controller'];
            if (in_array( $controller, $getPermissionsController )) {
                return true;
            }
        }

    }

    public function statusReport($alias) {
        $data["orders"] = Order::whereIn('id', Redis::smembers('status.'.$alias))->get();

//            Status::with('lastOrders')
//            ->where('alias', '=', $alias)
//            ->whereHas('lastOrders', function ($query) use ($alias){
//                $query->whereIn('id', Redis::smembers('status.'.$alias));
//            })
//            ->first();
        \PDF::setOptions( ['dpi' => 150, 'defaultFont' => 'sans-serif'] );
        return $pdf = \PDF::loadView( 'dashboard.status.status_order', $data )->stream( 'order-status-report.pdf' );
    }
}
