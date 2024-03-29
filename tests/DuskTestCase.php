<?php

namespace Tests;

use Laravel\Dusk\Browser;
use Laravel\Dusk\TestCase as BaseTestCase;
use Facebook\WebDriver\Chrome\ChromeOptions;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\Remote\DesiredCapabilities;

abstract class DuskTestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * Prepare for Dusk test execution.
     *
     * @beforeClass
     * @return void
     */
    public static function prepare()
    {
        static::startChromeDriver();

    }

    /**
     * Create the RemoteWebDriver instance.
     *
     * @return \Facebook\WebDriver\Remote\RemoteWebDriver
     */
    protected function driver()
    {
        $options = (new ChromeOptions)->addArguments([
            '--window-size=1920,1920', //increase size of window
            '--disable-gpu',
//            '--headless'
        ]);

        return RemoteWebDriver::create(
            'http://localhost:9515', DesiredCapabilities::chrome()->setCapability(
                ChromeOptions::CAPABILITY, $options
            )
        );
//        return RemoteWebDriver::create(
//            'http://shopnshipbd.test/wd/hub', DesiredCapabilities::firefox()
//            ->setCapability('acceptInsecureCerts', true)
//            ->setCapability('enablePassThrough', false)
//        );

//        return RemoteWebDriver::create(
//            'http://shopnshipbd.test:4444/wd/hub', DesiredCapabilities::phantomjs()
//        );
    }
}
