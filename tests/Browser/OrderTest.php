<?php

namespace Tests\Browser;

use App\Models\BrowserVerify;
use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class OrderTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     * @test
     * @return void
     */
    public function user_order_tests()
    {
        $user = User::find(env('TEST_USER_ID'));

        $this->browse(function (Browser $browser) use($user){

            $browser->visit('/login')
                    ->waitForText('Sign in');

            $browser->assertsee('Sign in')
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
                ->pause('2000')
                ->assertsee('BDT')
                ->click('#dusk-test')
//                ->assertsee($user->name)
                ->clickLink('Orders')
                ->assertsee('All Orders')
                ->select('select-order')
                ->assertsee('All Orders');
//                ->clickLink('View')
//                ->assertsee('Shipping Address')
//                ->press('Print Invoice')
//                ->assertsee('Invoice to');

        });
    }
}
