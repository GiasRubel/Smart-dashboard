<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /*if (Auth::user()) {
            if (Auth::user()->is_admin != true) {
                return Redirect::to( '/' );

            }
        }*/

        $actionName = $request->route()->getActionName();
        $method = $request->route()->methods()[0];
        $action = substr( $actionName, strpos( $actionName, '@' ) + 1 );
        $namespace = substr( $actionName, 0, strrpos( $actionName, '\\' ) );
        $controller = substr( $actionName, strrpos( $actionName, '\\' ) + 1, -(strlen( $action ) + 1) );
        if (auth()->user()->isAuthorize( $namespace, $controller, $method, $action )) {
            return $next( $request );
        }

        abort( 403, 'Unauthorized action.' );
    }
}
