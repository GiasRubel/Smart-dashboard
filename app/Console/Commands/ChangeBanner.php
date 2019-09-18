<?php

namespace App\Console\Commands;

use App\Models\Banner;
use Carbon\Carbon;
use Illuminate\Console\Command;

class ChangeBanner extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'change:banner';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Change the Banner In a time Period';

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
        $time = Carbon::now();
        $banner = Banner::where('status', '=', 1)
            ->where('activated_at', '<=', $time)
            ->where('expire_at', '>=', $time)
            ->orderBy('created_at', 'desc')->first();
        if ($banner) {
            $active_status = Banner::where('id', '!=', $banner->id)
                ->where('status', '=', 1)
                ->get();
            foreach ($active_status as $status) {
                $status->status = 0;
                $status->save();
            }
        } else {
            $banner = Banner::where('default_img', '=', 1)->orderBy('created_at', 'desc')->first();
            if ($banner) {
                $banner->status = 1;
                $banner->save();
            } else {
                $banner = Banner::orderBy('created_at', 'desc')->first();
                $banner->status = 1;
                $banner->default_img = 1;
                $banner->save();
            }
        }
    }
}
