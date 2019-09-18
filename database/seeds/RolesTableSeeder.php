<?php

use Illuminate\Database\Seeder;
use App\Models as Models;

class RolesTableSeeder extends Seeder
{

    public function run()
    {

        Models\Role::insert( [
            [
                'title' => "Super admin",
                'alias' => "superadmin",
            ]
        ] );

        factory( Models\Role::class, 8 )->create();

    }
}
