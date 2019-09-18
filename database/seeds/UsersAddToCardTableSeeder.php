<?php

use Illuminate\Database\Seeder;
use App\Models as Models;

class UsersAddToCardTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory( Models\Item::class, 25 )->create()->each( function ($item) {
            $item->itemAdminOperationInfo()->save( factory( Models\ItemAdminOperation::class )->make() );
            $item->itemPrice()->save( factory( Models\ItemPrice::class )->make() );

        } );
    }
}
