<?php

namespace Tests\Browser;

use App\Models\Address;
use App\Models\BrowserVerify;
use App\Models\Country;
use App\Models\State;
use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class AdressTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *@test
     * @return void
     */


    public function add_address_to_user_view()
    {
        $user = User::find(env('TEST_USER_ID'));

        $address = factory(Address::class)->create();

        $this->browse(function (Browser $browser) use($user, $address){

            $browser->visit('/login');

            $browser->waitForText('Sign in')
                ->type('emailOrPhone', $user->email)
                ->type('password', 'secret')
                ->press('Sign in')
                ->waitForText('Continue',env('TEST_WAITING_TIME'));

            $verify = BrowserVerify::where('user_id', $user->id)->latest()->first();
            $verify->is_verify = 1;
            $verify->save();

            $browser->cookie('browser_id', $verify->browser_id)
                ->assertHasCookie('browser_id')
                ->press('Continue')
                ->assertsee('BDT')
                ->click('#dusk-test')
                ->clickLink('Address')
                ->pause('1000')
                ->assertSeeLink('Add Address')
                ->clickLink('Add Address')
                ->assertsee('Add or Update Address')
                ->type('full_name', $address->full_name)
                ->type('address', $address->address)
                ->type('city', $address->city);

            $country = Country::get()->first();

            $browser->select('country',$country->id)
                ->waitFor('#select-state');

            $state_id = State::where('country_id', $country->id)->pluck('title','id')->first();

            $browser->select('state', '1')
                ->type('zip_code', $address->zip_code)
                ->type('phone', $address->phone)
                ->press('Submit Address')
                ->pause('1000')
                ->assertsee($address->full_name)
                ->click('#shop-test-delete-address')
                ->assertsee('Dashboard');

        });
    }
}
