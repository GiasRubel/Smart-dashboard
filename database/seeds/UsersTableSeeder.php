<?php

use Illuminate\Database\Seeder;
use App\Models as Models;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory( Models\User::class, 50 )->create()->each( function ($user) {
            $faker = Faker\Factory::create();
            $user->paymentCards()->saveMany( factory( Models\UserPaymentCart::class, rand( 1, 4 ) )->make() );
            $user->browsers()->saveMany( factory( Models\BrowserVerify::class, rand( 1, 7 ) )->make() );
            $user->roles()->attach( $faker->randomElements( Models\Role::pluck( 'id' )->toArray(), rand( 1, 3 ) ) );
            $user->groups()->attach( $faker->randomElements( Models\Group::pluck( 'id' )->toArray(), rand( 1, 2 ) ) );
            $user->items()->saveMany( factory( Models\Item::class, rand( 1, 7 ) )->make() )->each( function ($item) {
                $item->itemAdminOperationInfo()->save(factory(Models\ItemAdminOperation::class)->make());
                $item->itemPrice()->save(factory(Models\ItemPrice::class)->make());
            } );
        } );
        /*factory(Models\Role::class, 5)->create();
        factory(Models\Group::class, 5)->create();
        factory(Models\Country::class, 5)->create();

        Models\Store::insert([
            ['store_name' => 'Ebay'],
            ['store_name' => 'Amazon'],
            ['store_name' => 'Overstock']
        ]);

        $user = Models\User::all();
        $roles = Models\Role::all();
        $group = Models\Group::all();
        $country = Models\Country::all();

        $user->each(function ($u) use ($roles, $group) {
            $u->roles()->attach(
                $roles->random(rand(1, 3))->pluck('id')->toArray()
            );
            $u->groups()->attach(
                $group->random(rand(1, 3))->pluck('id')->toArray()
            );
        });

        $user->each(function ($u) {
            $u->browsers()->saveMany(factory(Models\BrowserVerify::class, 5)->create([
                'user_id' => $u->id
            ]));
        });

        $browser = Models\BrowserVerify::all();

        $browser->each(function ($b) {
            factory(Models\Login::class, 3)->create(['browser_id' => $b->id]);
        });

        $login = Models\Login::all();

        $login->each(function ($l) {
            factory(Models\LoginActivities::class, 3)->create(['login_id' => $l->id]);
        });

        $country->each(function ($c) {
            factory(Models\State::class, 3)->create(['country_id' => $c->id]);
        });

        $state = Models\State::all();

        factory(Models\Address::class, count($user))->create([
            'country_id' => $country->random(rand(1, 2))->pluck('id')->first(),
            'state_id' => $state->random(rand(1, 2))->pluck('id')->first(),
            'user_id' => $user->random(rand(1, 2))->pluck('id')->first(),
        ]);

        factory(Models\Currency::class, 2)->create();

        factory(Models\TaxZoneRate::class, 5)->create([
            'country_id' => $country->random(rand(1, 2))->pluck('id')->first(),
            'state_id' => $state->random(rand(1, 2))->pluck('id')->first(),
        ]);

        factory(Models\TaxRule::class, 5)->create();

        $tcr = Models\TaxRule::all();

        $ugroup = Models\UserGroup::all();

        factory(Models\ShipmentRate::class, 5)->create([
            'country_id' => $country->random(rand(1, 2))->pluck('id')->first(),
            'state_id' => $state->random(rand(1, 2))->pluck('id')->first()
        ]);

        Models\PaymentMethod::insert([
            [
                'title' => 'Cash on Delivery',
                'is_online' => 0,
                'is_card_applicable' => 0
            ],
            [
                'title' => 'Card Payment',
                'is_online' => 1,
                'is_card_applicable' => 1
            ]
        ]);
        Models\PaymentOnline::insert([
            [
                'payment_method_id' => 2,
                'title' => "SSLCommerz",
                'secret_token' => "xoren5bdeaa66bab8f",
                'secret_id' => "xoren5bdeaa66bab8f@ssl",
                'applicable_country' => 'Bangladesh',
                'alias' => 'sslcommerz',
                'others' => "DDD",
            ],
            [
                'payment_method_id' => 2,
                'title' => "STRIPE",
                'secret_token' => "pk_test_uNXDpH4dYevytS36Q0dBOOUs",
                'secret_id' => "sk_test_clhU1fDlN8tXlgUAcSajr1Ha",
                'applicable_country' => 'Bangladesh',
                'others' => "DDD",
                'alias' => 'stripe'
            ]
        ]);
        factory(Models\UserPaymentCart::class, 5)->create();

        factory(Models\Status::class, 15)->create();
        $ugroup->each(function ($ug) use ($tcr) {
            /*$ug->taxApplyGroup()->attach(
                $tcr->random(rand(1, 3))->pluck('id')->toArray()
            );
    });*/

    }
}
