<?php

namespace App\Http\Controllers\Dashboard\User;

use App\Models\Role;
use App\Models\Permission;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

class PermissionController extends Controller
{
    public function index()
    {
        $roles = Role::where( 'id', '>', 1 )->pluck( 'title', 'id' );
        $actions = $this->getRoutes();
        return ['roles' => $roles, 'actions' => $actions];
    }

    private function getRoutes()
    {
        $actions = [];
        $routes = Route::getRoutes();
        foreach ($routes as $route) {

            if (preg_match( "/^App(.*)/i", trim( $route->getActionName() ) ) == 0 ||
                preg_match( "/^App\\\\Http\\\\Controllers\\\\Auth(.*)/i", trim( $route->getActionName() ) ) > 0 ||
                preg_match( "/^App\\\\Http\\\\Controllers\\\\Dashboard(.*)/i", trim( $route->getActionName() ) ) == 0 ||
                preg_match( "/^App\\\\Http\\\\Controllers\\\\API(.*)/i", trim( $route->getActionName() ) ) > 0
            ) {
                continue;
            }
            $actionName = $route->getActionName();
            $method = $route->methods()[0];
            $action = substr( $actionName, strpos( $actionName, '@' ) + 1 );
            $namespace = substr( $actionName, 0, strrpos( $actionName, '\\' ) );
            $controller = substr( $actionName, strrpos( $actionName, '\\' ) + 1, -(strlen( $action ) + 1) );
            $actions[$namespace][$controller][$method][] = $action;
        }
        ksort( $actions );
        return $actions;
    }


    public function update(Request $request)
    {
        $role_id = $request->input( 'role_id', 0 );
        $actions = $request->input( 'actions' );
        $data = [];
        if (count( $actions ) > 0) {
            foreach ($actions as $key => $action) {
                $parts = explode( '-', $key );
                if ($action === true && count($parts)===4) {
                    $data[] = new Permission( [
                        'namespace' => $parts[0],
                        'controller' => $parts[1],
                        'method' => $parts[2],
                        'action' => $parts[3],
                        'allowed' => 1
                    ] );
                }

            }
        }
        $role = Role::findOrFail( $role_id );
        $role->permissions()->delete();
        $role->permissions()->saveMany( $data );

        return response( ['message' => 'Update Successfully'] );
    }

    public function rolePermission(Request $request)
    {
        if ($request->ajax()) {
            $role_id = $request->role_id;
            $selected = Role::findOrFail( $role_id )->permissions()->select( 'namespace', 'controller', 'method', 'action' )->get()->toArray();
            $selectedPermission = [];
            foreach ($selected as $action) {
                $selectedPermission[] = $action['namespace'] . '-' . $action['controller'] . '-' . $action['method'] . '-' . $action['action'];
            }
            return response()->json( compact( 'selectedPermission' ) );
        }
        return response()->json( [
            'responseText' => 'Not a ajax request'
        ], 500 );
    }
}
