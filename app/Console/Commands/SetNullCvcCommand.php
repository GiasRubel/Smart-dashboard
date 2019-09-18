<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class SetNullCvcCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'card:cvc_null';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This is command will set null to all card cvc in database';

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
        DB::table("user_payment_cards")->update([
           'cvc' => ''
        ]);
        $this->info("All card cvc has been set to null");
    }
}
