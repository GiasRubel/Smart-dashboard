<?php

use Illuminate\Database\Seeder;
use App\Models as Models;

class OrderTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = Faker\Factory::create();
        factory( Models\Order::class, 25 )->create()->each( function ($order) use ($faker) {
            $order->items()->saveMany( factory( Models\Item::class, rand( 1, 7 ) )->make() )->each( function ($item) {
                $item->itemAdminOperationInfo()->save(factory(Models\ItemAdminOperation::class)->make());
                $item->itemPrice()->save(factory(Models\ItemPrice::class)->make());
            } );
            $order->payments()->saveMany( factory( Models\OrderPayment::class, rand( 1, 2 ) )->make() );
            $order->status()->attach( $faker->randomElements( Models\Status::pluck( 'id' )->toArray(), rand( 1, 10 ) ) );
        } );

    }
}
