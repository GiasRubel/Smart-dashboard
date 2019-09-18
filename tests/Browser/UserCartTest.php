<?php

namespace Tests\Browser;

use App\Models\BrowserVerify;
use App\Models\Country;
use App\Models\State;
use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class UserCartTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     * @test
     * @return void
     */
    public function user_cart_test()
    {
        $user = User::find(env('TEST_USER_ID'));

        $this->browse(function (Browser $browser) use ($user) {

            $browser->visit('/login')
                ->waitForText('Sign in');

            $browser->assertsee('Sign in')
                ->type('emailOrPhone', $user->email)
                ->type('password', 'secret')
                ->press('Sign in')
                ->waitForText('Continue', env('TEST_WAITING_TIME'))
                ->pause('2000');

            $verify = BrowserVerify::where('user_id', $user->id)->latest()->first();
            $verify->is_verify = 1;
            $verify->save();
               $browser->press('Continue')
                ->assertsee('STAY CONNECTED')
                ->click('.add-to-cart')
                ->visit('/cart')
                ->waitForText('Cart Items')
                ->assertsee('Cart Items')
                ->click('#shop-test-minus')
                ->click('#shop-test-plus')
                ->assertsee('Cart Items')
                ->check('gift')
                ->uncheck('gift')
                ->check('insurance')
                ->uncheck('insurance')
                ->assertsee('Cart Items')
                ->click('#shop-test-remove')
                ->assertPathIs('/cart');
        });
    }

    /**
     * @test
     */
    public function user_cart_payment_option_check()
    {

        $this->browse(function (Browser $browser)  {
               $browser ->click('.add-to-cart')
                ->visit('/cart')
                ->waitForText('By Credit Card')
                ->assertsee('By Credit Card')
                ->radio('gateway', '2')
                ->pause('2000')
                ->clickLink('Add new')
                ->pause('1000')
                ->type('card_number', '4000000760000002')
                ->type('cvc', '120')
                ->keys('#shop-test-date', '10', '{ARROW_RIGHT}', '2017')
                ->assertsee('Save')
                ->clickLink('Save')
                ->pause('8000')
                ->assertPathIs('/cart')
                ->radio('payment', '2')
                ->type('phone', '5632542')
                ->type('full_name', 'nasim')
                ->type('address', 'dakota')
                ->type('city', 'asoka')
                ->type('zip_code', '1205');

                $country = Country::get()->first();

            $browser->select('country', $country->id)
                     ->waitFor('#shop-test-state');

            $state_id = State::where('country_id', $country->id)->first();

            $browser->select('state', $state_id->id)
                ->assertSee('You may decide to cancel your order after it is reviewed');
        });
    }
}
