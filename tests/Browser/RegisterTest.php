<?php

namespace Tests\Browser;

use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class RegisterTest extends DuskTestCase
{
    public $user;

    /**
     * A Dusk test example.
     * @test
     * @return void
     */


    public function user_registration_check()
    {
//        $this->user = factory(User::class)->create() ;

        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                ->waitForText('BDT')
                ->clickLink('Login')
                ->assertpathIs('/login')
                ->waitForText('Sign in')
                ->press('Create your ShopnShipbd account')
                ->assertsee('Create Account')
                ->type('name', 'Habul')
                ->type('email', 'gias.rasuam@gmail.com')
                ->type('password', 'gias11')
                ->type('confirm_password', 'Gias11')
                ->press('Create Your ShopnShipbd Account')
                ->assertSee('The confirm password confirmation does not match')
                ->type('password', 'Gias11')
                ->press('Create Your ShopnShipbd Account')
                ->waitForText('Continue',10);

                  $user = User::where('email', 'gias.rasuam@gmail.com')->first();
                  $user->is_email_verify = 1;
                  $user->save();

                  $browser->press('Continue')
                    ->assertsee('BDT');
//                    ->assertpathIs('/');
        });

    }
}
