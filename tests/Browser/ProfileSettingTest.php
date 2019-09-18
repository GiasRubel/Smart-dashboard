<?php

namespace Tests\Browser;

use App\Models\BrowserVerify;
use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ProfileSettingTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     * @test
     * @return void
     */
    public function user_profile_setting_test()
    {
        $user = User::find(env('TEST_USER_ID'));

        $this->browse(function (Browser $browser) use($user){

            $browser->visit('/login');

            $browser->waitForText('Sign in')
                ->type('emailOrPhone', $user->email)
                ->type('password', 'secret')
                ->press('Sign in')
                ->waitForText('Continue',env('TEST_WAITING_TIME'));

            $verify = BrowserVerify::where('user_id',  $user->id)->latest()->first();
            $verify->is_verify = 1;
            $verify->save();

            $browser->cookie('browser_id', $verify->browser_id)
                ->assertHasCookie('browser_id')
                ->press('Continue')
                ->assertsee('BDT')
                ->click('#dusk-test')
                ->clickLink('Profile Settings')
                ->pause('1000')
                ->assertsee('Name')
                ->click('.edit-button')
                ->assertsee('Email')
                ->type('name','omuk' )
                ->type('mobile', '0173189825561')
                ->press('Submit')
                ->assertsee('omuk');

        });
    }

}
