<?php

use Illuminate\Database\Seeder;
use App\Models as Models;

class GroupsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory( Models\Group::class, 5 )->create();
    }
}
