<?php

use Illuminate\Database\Seeder;
use App\Models as Models;
use Illuminate\Support\Facades\Schema;

class CountryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        \Illuminate\Support\Facades\DB::table("countries")->truncate();
        Models\Country::insert( [
            [
                'title' => "Bangladesh",
                'country_code' => "BD",
                'default_currency' => "1",
                'domain_url' => 'https://shopnshipbd.com'
            ],
            [
                'title' => "United States",
                'country_code' => "USA",
                'default_currency' => "2"
            ],
            [
                'title' => "Pakistan",
                'country_code' => "PK",
                'default_currency' => "3",
                'domain_url' => 'https://shopnshippk.com'
            ]
        ] );

        \Illuminate\Support\Facades\DB::table("states")->truncate();

        Models\State::insert( [
            [
                'country_id' => "1",
                'title' => "Dhaka",
            ],
            [
                'country_id' => "1",
                'title' => "Chattagram",
            ],
            [
                'country_id' => "1",
                'title' => "Khulna",
            ],
            [
                'country_id' => "1",
                'title' => "Barisal",
            ],

            [
                'country_id' => "1",
                'title' => "Rangpur",
            ],

            [
                'country_id' => "1",
                'title' => "Rajshahi",
            ],

            [
                'country_id' => "1",
                'title' => "Mymensingh",
            ],

            [
                'country_id' => "1",
                'title' => "Sylhet",
            ],

            [
                "country_id" => 2,
                "title" => "Alabama"
            ],
            [
                "country_id" => 2,
                "title" => "Alaska"
            ],
            [
                "country_id" => 2,
                "title" => "American Samoa"
            ],
            [
                "country_id" => 2,
                "title" => "Arizona"
            ],
            [
                "country_id" => 2,
                "title" => "Arkansas"
            ],
            [
                "country_id" => 2,
                "title" => "California"
            ],
            [
                "country_id" => 2,
                "title" => "Colorado"
            ],
            [
                "country_id" => 2,
                "title" => "Connecticut"
            ],
            [
                "country_id" => 2,
                "title" => "Delaware"
            ],
            [
                "country_id" => 2,
                "title" => "District Of Columbia"
            ],
            [
                "country_id" => 2,
                "title" => "Federated States Of Micronesia"
            ],
            [
                "country_id" => 2,
                "title" => "Florida"
            ],
            [
                "country_id" => 2,
                "title" => "Georgia"
            ],
            [
                "country_id" => 2,
                "title" => "Guam"
            ],
            [
                "country_id" => 2,
                "title" => "Hawaii"
            ],
            [
                "country_id" => 2,
                "title" => "Idaho"
            ],
            [
                "country_id" => 2,
                "title" => "Illinois"
            ],
            [
                "country_id" => 2,
                "title" => "Indiana"
            ],
            [
                "country_id" => 2,
                "title" => "Iowa"
            ],
            [
                "country_id" => 2,
                "title" => "Kansas"
            ],
            [
                "country_id" => 2,
                "title" => "Kentucky"
            ],
            [
                "country_id" => 2,
                "title" => "Louisiana"
            ],
            [
                "country_id" => 2,
                "title" => "Maine"
            ],
            [
                "country_id" => 2,
                "title" => "Marshall Islands"
            ],
            [
                "country_id" => 2,
                "title" => "Maryland"
            ],
            [
                "country_id" => 2,
                "title" => "Massachusetts"
            ],
            [
                "country_id" => 2,
                "title" => "Michigan"
            ],
            [
                "country_id" => 2,
                "title" => "Minnesota"
            ],
            [
                "country_id" => 2,
                "title" => "Mississippi"
            ],
            [
                "country_id" => 2,
                "title" => "Missouri"
            ],
            [
                "country_id" => 2,
                "title" => "Montana"
            ],
            [
                "country_id" => 2,
                "title" => "Nebraska"
            ],
            [
                "country_id" => 2,
                "title" => "Nevada"
            ],
            [
                "country_id" => 2,
                "title" => "New Hampshire"
            ],
            [
                "country_id" => 2,
                "title" => "New Jersey"
            ],
            [
                "country_id" => 2,
                "title" => "New Mexico"
            ],
            [
                "country_id" => 2,
                "title" => "New York"
            ],
            [
                "country_id" => 2,
                "title" => "North Carolina"
            ],
            [
                "country_id" => 2,
                "title" => "North Dakota"
            ],
            [
                "country_id" => 2,
                "title" => "Northern Mariana Islands"
            ],
            [
                "country_id" => 2,
                "title" => "Ohio"
            ],
            [
                "country_id" => 2,
                "title" => "Oklahoma"
            ],
            [
                "country_id" => 2,
                "title" => "Oregon"
            ],
            [
                "country_id" => 2,
                "title" => "Palau"
            ],
            [
                "country_id" => 2,
                "title" => "Pennsylvania"
            ],
            [
                "country_id" => 2,
                "title" => "Puerto Rico"
            ],
            [
                "country_id" => 2,
                "title" => "Rhode Island"
            ],
            [
                "country_id" => 2,
                "title" => "South Carolina"
            ],
            [
                "country_id" => 2,
                "title" => "South Dakota"
            ],
            [
                "country_id" => 2,
                "title" => "Tennessee"
            ],
            [
                "country_id" => 2,
                "title" => "Texas"
            ],
            [
                "country_id" => 2,
                "title" => "Utah"
            ],
            [
                "country_id" => 2,
                "title" => "Vermont"
            ],
            [
                "country_id" => 2,
                "title" => "Virgin Islands"
            ],
            [
                "country_id" => 2,
                "title" => "Virginia"
            ],
            [
                "country_id" => 2,
                "title" => "Washington"
            ],
            [
                "country_id" => 2,
                "title" => "West Virginia"
            ],
            [
                "country_id" => 2,
                "title" => "Wisconsin"
            ],
            [
                "country_id" => 2,
                "title" => "Wyoming"
            ],
            [
                "country_id" => 3,
                "title" => "Punjab"
            ],
            [
                "country_id" => 3,
                "title" => "Khyber-Pakhtunkhwa"
            ],
            [
                "country_id" => 3,
                "title" => "Sindh"
            ],
            [
                "country_id" => 3,
                "title" => "Balochistan"
            ],
            [
                "country_id" => 3,
                "title" => "Islamabad Capital Territory"
            ]


        ] );
    }
}




























































