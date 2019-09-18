<?php

use Illuminate\Database\Seeder;

class ProhibitedItemSeeder extends Seeder
{
    public function run()
    {
        factory(App\Models\ProhibitedItem::class,10)->create();
    }
}
