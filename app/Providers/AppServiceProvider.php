<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Http\Resources\Json\Resource;
use Laravel\Dusk\DuskServiceProvider;
use Laravel\Passport\Passport;
use App\Models\Configuration;
use App\Traits\OAC;

class AppServiceProvider extends ServiceProvider
{
    use OAC;

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength( 191 );
        //dd(strpos(php_sapi_name(), 'cli'));
        if (!app()->runningInConsole()) {
            Resource::withoutWrapping();
            if (!config( "settings.expire_time" )) {
                if (Schema::hasTable( 'configurations' )) {
                    $configurations = Configuration::all();
                    $configurations->flatMap( function ($config) {
                        config()->set( 'settings.' . $config->alias, $config->status );
                    } );
                }
            }
            $result = $this->currencyRate()->getData();
            if (!config( 'settings.' . $result->currency )) {
                config()->set( 'settings.' . $result->currency, $result->value );
            }

            $result = $this->currencyRate('PKR')->getData();
            if (!config( 'settings.' . $result->currency )) {
                config()->set( 'settings.' . $result->currency, $result->value );
            }
        }

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Original
        if ($this->app->environment( 'local', 'testing' )) {
            $this->app->register( DuskServiceProvider::class );
        }

//        if ($this->app->environment('local', 'testing')) {
//            $this->app->register(\Staudenmeir\DuskUpdater\DuskServiceProvider::class);
//        }
    }
}
