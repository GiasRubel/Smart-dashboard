<?php

namespace Tests\Browser;

use App\Models\BrowserVerify;
use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
//use Illuminate\Foundation\Testing\DatabaseMigrations;

use Facebook\WebDriver\Chrome\ChromeOptions;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\Cookie;
use Facebook\WebDriver\WebDriverOptions;
use Laravel\Dusk\Chrome\ChromeProcess;

class ApiLoginTest extends DuskTestCase
{
//    use DatabaseMigrations;
    /**
     * A Dusk test example.
     * @test
     * @return void
     */
    public function api_login_check_for_user()
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
                        ->clickLink('Sign out')
                        ->pause('1000')
                        ->assertpathIs('/');

//            ->waitUsing(3, 5, function() use ($browser){
//                return $browser->assertpathIs('/');
//            }, 'Path not match!');
        });
    }





}
