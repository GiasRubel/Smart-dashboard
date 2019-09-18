<?php

namespace App\Traits;

trait Authorized
{

    public function newFromBuilder($attributes = array(), $connection = NULL)
    {
        $instance = parent::newFromBuilder( $attributes );

        $instance->fireModelEvent( 'loaded' );

        return $instance;
    }

    public static function loaded($callback, $priority = 0)
    {
        static::registerModelEvent( 'loaded', $callback, $priority );
    }

    public function isAuthorize($namespace, $controller, $method, $action)
    {

        return $this->roles->filter( function ($value, $key) use ($namespace, $controller, $method, $action) {

                if ($value->pivot->role_id === 1) {
                    return true;
                }

                $permission = $value->permissions->where( 'namespace', $namespace )
                    ->where( 'controller', $controller )
                    ->where( 'method', $method )
                    ->where( 'action', $action );
                if (count( $permission ) > 0) {
                    return true;
                }

            } )->count() > 0;

    }
}