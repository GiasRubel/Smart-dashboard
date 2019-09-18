<?php

namespace Tests\Browser;

use App\Models\BrowserVerify;
use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class PaymentOptionsTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     * @test
     * @return void
     */
    public function user_payment_option()
    {
        $user = User::find(env('TEST_USER_ID'));

        $this->browse(function (Browser $browser) use($user){

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
                ->clickLink('Payment Options')
//                ->pause('1000')
//                ->assertsee('Save')
//                ->click('.close')
                ->assertSeeLink('Add payment')
                ->clickLink('Add payment')
                ->assertsee('Save')
                ->type('card_number', '4000000760000002')
                ->type('cvc', '120')
                ->keys('#dusk_date', '10','{ARROW_RIGHT}','2017')
                ->clickLink('Save')
//                ->waitForText('4000000760000002',10)
                ->assertsee('Card Number');

        });
    }
}
