<?php

namespace App\Console\Commands;

use App\Models\Address;
use App\Models\District;
use Illuminate\Console\Command;

class UpdateDistrictColomnForAddress extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'address:district';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $results = Address::withTrashed()->get();
        $results->map(function ($address){
            $this->info("I am working. Wait for me");
            $district = District::whereStateId($address->state_id)->first();
            if (!is_null($district)){
                $address->district_id = $district->id;
                $address->save();
            }
        });
        $this->info("I am done. You can go ahead");
    }
}
