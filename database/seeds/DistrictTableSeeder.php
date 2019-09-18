<?php

use App\Models\District;
use App\Models\State;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class DistrictTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //bangladesh
        Schema::disableForeignKeyConstraints();
        \Illuminate\Support\Facades\DB::table('districts')->truncate();
        $dhaka      = State::whereTitle('Dhaka')->first();
        $chattagram = State::whereTitle('Chattagram')->first();
        $sylhet     = State::whereTitle('Sylhet')->first();
        $rangpur    = State::whereTitle('Rangpur')->first();
        $rajsahi    = State::whereTitle('Rajshahi')->first();
        $maymensing = State::whereTitle('Mymensingh')->first();
        $barisal    = State::whereTitle('Barisal')->first();
        $khulna     = State::whereTitle('Khulna')->first();

        //pakistan
        $balochistan = State::whereTitle('Balochistan')->first();
        $sindh       = State::whereTitle('Sindh')->first();
        $punjab      = State::whereTitle('Punjab')->first();
        $khyber      = State::whereTitle('Khyber-Pakhtunkhwa')->first();

        District::insert( [
            [
                "country_id" => 1,
                "state_id" => $dhaka->id,
                "title" => "Dhaka",
            ],
            [
                "country_id" => 1,
                "state_id" => $dhaka->id,
                "title" => "Faridpur",
            ],

            [
                "country_id" => 1,
                "state_id" => $dhaka->id,
                "title" => "Gazipur",
            ],
            [
                "country_id" => 1,
                "state_id" => $dhaka->id,
                "title" => "Kishoreganj",
            ],
            [
                "country_id" => 1,
                "state_id" => $dhaka->id,
                "title" => "Madaripur",
            ],
            [
                "country_id" => 1,
                "state_id" => $dhaka->id,
                "title" => "Manikganj",
            ],
            [
                "country_id" => 1,
                "state_id" => $dhaka->id,
                "title" => "Munshiganj",
            ],

            [
                "country_id" => 1,
                "state_id" => $dhaka->id,
                "title" => "Gopalganj",
            ],
            [
                "country_id" => 1,
                "state_id" => $dhaka->id,
                "title" => "Narayanganj",
            ],
            [
                "country_id" => 1,
                "state_id" => $dhaka->id,
                "title" => "Narsingdi",
            ],
            [
                "country_id" => 1,
                "state_id" => $dhaka->id,
                "title" => "Rajbari",
            ],
            [
                "country_id" => 1,
                "state_id" => $dhaka->id,
                "title" => "Shariatpur",
            ],
            [
                "country_id" => 1,
                "state_id" => $dhaka->id,
                "title" => "Tangail",
            ],
            [
                "country_id" => 1,
                "state_id" => $chattagram->id,
                "title" => "Bandarban",
            ],
            [
                "country_id" => 1,
                "state_id" => $chattagram->id,
                "title" => "Brahmanbaria",
            ],
            [
                "country_id" => 1,
                "state_id" => $chattagram->id,
                "title" => "Chandpur",
            ],
            [
                "country_id" => 1,
                "state_id" => $chattagram->id,
                "title" => "Chattogram",
            ],
            [
                "country_id" => 1,
                "state_id" => $chattagram->id,
                "title" => "Cumilla",
            ],
            [
                "country_id" => 1,
                "state_id" => $chattagram->id,
                "title" => "Cox's Bazar",
            ],
            [
                "country_id" => 1,
                "state_id" => $chattagram->id,
                "title" => "Feni",
            ],
            [
                "country_id" => 1,
                "state_id" => $chattagram->id,
                "title" => "Khagrachari",
            ],
            [
                "country_id" => 1,
                "state_id" => $chattagram->id,
                "title" => "Lakshmipur",
            ],
            [
                "country_id" => 1,
                "state_id" => $chattagram->id,
                "title" => "Noakhali",
            ],
            [
                "country_id" => 1,
                "state_id" => $chattagram->id,
                "title" => "Rangamati",
            ],
            [
                "country_id" => 1,
                "state_id" => $maymensing->id,
                "title" => "Jamalpur",
            ],
            [
                "country_id" => 1,
                "state_id" => $maymensing->id,
                "title" => "Mymensingh",
            ],
            [
                "country_id" => 1,
                "state_id" => $maymensing->id,
                "title" => "Netrokona",
            ],
            [
                "country_id" => 1,
                "state_id" => $maymensing->id,
                "title" => "Sherpur",
            ],
            [
                "country_id" => 1,
                "state_id" => $rajsahi->id,
                "title" => "Bogura",
            ],
            [
                "country_id" => 1,
                "state_id" => $rajsahi->id,
                "title" => "Joypurhat",
            ],
            [
                "country_id" => 1,
                "state_id" => $rajsahi->id,
                "title" => "Naogaon",
            ],
            [
                "country_id" => 1,
                "state_id" => $rajsahi->id,
                "title" => "Natore",
            ],
            [
                "country_id" => 1,
                "state_id" => $rajsahi->id,
                "title" => "Nawabganj",
            ],
            [
                "country_id" => 1,
                "state_id" => $rajsahi->id,
                "title" => "Pabna",
            ],
            [
                "country_id" => 1,
                "state_id" => $rajsahi->id,
                "title" => "Rajshahi",
            ],
            [
                "country_id" => 1,
                "state_id" => $rajsahi->id,
                "title" => "Sirajgonj",
            ],
            [
                "country_id" => 1,
                "state_id" => $rangpur->id,
                "title" => "Dinajpur",
            ],
            [
                "country_id" => 1,
                "state_id" => $rangpur->id,
                "title" => "Gaibandha",
            ],
            [
                "country_id" => 1,
                "state_id" => $rangpur->id,
                "title" => "Kurigram",
            ],
            [
                "country_id" => 1,
                "state_id" => $rangpur->id,
                "title" => "Lalmonirhat",
            ],
            [
                "country_id" => 1,
                "state_id" => $rangpur->id,
                "title" => "Nilphamari",
            ],
            [
                "country_id" => 1,
                "state_id" => $rangpur->id,
                "title" => "Panchagarh",
            ],
            [
                "country_id" => 1,
                "state_id" => $rangpur->id,
                "title" => "Rangpur",
            ],
            [
                "country_id" => 1,
                "state_id" => $rangpur->id,
                "title" => "Thakurgaon",
            ],
            [
                "country_id" => 1,
                "state_id" => $barisal->id,
                "title" => "Barguna",
            ],
            [
                "country_id" => 1,
                "state_id" => $barisal->id,
                "title" => "Barishal",
            ],
            [
                "country_id" => 1,
                "state_id" => $barisal->id,
                "title" => "Bhola",
            ],
            [
                "country_id" => 1,
                "state_id" => $barisal->id,
                "title" => "Jhalokati",
            ],
            [
                "country_id" => 1,
                "state_id" => $barisal->id,
                "title" => "Patuakhali",
            ],
            [
                "country_id" => 1,
                "state_id" => $barisal->id,
                "title" => "Pirojpur",
            ],

            [
                "country_id" => 1,
                "state_id" => $sylhet->id,
                "title" => "Habiganj",
            ],
            [
                "country_id" => 1,
                "state_id" => $sylhet->id,
                "title" => "Maulvibazar",
            ],
            [
                "country_id" => 1,
                "state_id" => $sylhet->id,
                "title" => "Sunamganj",
            ],
            [
                "country_id" => 1,
                "state_id" => $sylhet->id,
                "title" => "Sylhet",
            ],
            [
                "country_id" => 1,
                "state_id" => $khulna->id,
                "title" => "Bagerhat",
            ],
            [
                "country_id" => 1,
                "state_id" => $khulna->id,
                "title" => "Chuadanga",
            ],
            [
                "country_id" => 1,
                "state_id" => $khulna->id,
                "title" => "Jashore",
            ],
            [
                "country_id" => 1,
                "state_id" => $khulna->id,
                "title" => "Jhenaidah",
            ],
            [
                "country_id" => 1,
                "state_id" => $khulna->id,
                "title" => "Khulna",
            ],
            [
                "country_id" => 1,
                "state_id" => $khulna->id,
                "title" => "Kushtia",
            ],
            [
                "country_id" => 1,
                "state_id" => $khulna->id,
                "title" => "Magura",
            ],
            [
                "country_id" => 1,
                "state_id" => $khulna->id,
                "title" => "Meherpur",
            ],
            [
                "country_id" => 1,
                "state_id" => $khulna->id,
                "title" => "Narail",
            ],
            [
                "country_id" => 1,
                "state_id" => $khulna->id,
                "title" => "Satkhira",
            ],

            //$balochistan
            [
                "country_id" => 3,
                "state_id" => $balochistan->id,
                "title" => "Awaran",
            ],
            [
                "country_id" => 3,
                "state_id" => $balochistan->id,
                "title" => "Barkhan",
            ],
            [
                "country_id" => 3,
                "state_id" => $balochistan->id,
                "title" => "Bolan",
            ],
            [
                "country_id" => 3,
                "state_id" => $balochistan->id,
                "title" => "Dera Bugti",
            ],

            //$sindh
            [
                "country_id" => 3,
                "state_id" => $sindh->id,
                "title" => "Badin",
            ],
            [
                "country_id" => 3,
                "state_id" => $sindh->id,
                "title" => "Dadu",
            ],
            [
                "country_id" => 3,
                "state_id" => $sindh->id,
                "title" => "Ghotki",
            ],
            [
                "country_id" => 3,
                "state_id" => $sindh->id,
                "title" => "Hyderabad",
            ],
            [
                "country_id" => 3,
                "state_id" => $sindh->id,
                "title" => "Jacobabad",
            ],
            //$punjab
            [
                "country_id" => 3,
                "state_id" => $punjab->id,
                "title" => "Attock",
            ],
            [
                "country_id" => 3,
                "state_id" => $punjab->id,
                "title" => "Bahawalnagar",
            ],
            [
                "country_id" => 3,
                "state_id" => $punjab->id,
                "title" => "Bahawalpur",
            ],
            [
                "country_id" => 3,
                "state_id" => $punjab->id,
                "title" => "Bhakkar",
            ],
            [
                "country_id" => 3,
                "state_id" => $punjab->id,
                "title" => "Chakwal",
            ],
            //$khyber
            [
                "country_id" => 3,
                "state_id" => $khyber->id,
                "title" => "Abbottabad",
            ],
            [
                "country_id" => 3,
                "state_id" => $khyber->id,
                "title" => "Bannu",
            ],
            [
                "country_id" => 3,
                "state_id" => $khyber->id,
                "title" => "Battagram",
            ],
            [
                "country_id" => 3,
                "state_id" => $khyber->id,
                "title" => "Buner",
            ],
            [
                "country_id" => 3,
                "state_id" => $khyber->id,
                "title" => "Charsadda",
            ],
        ] );
    }
}
