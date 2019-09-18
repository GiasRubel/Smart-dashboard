<?php

namespace App\Console\Commands;

use App\Models\Order;
use App\Models\Status;
use App\Notifications\OrderReviewNotification;
use Carbon\Carbon;
use Illuminate\Console\Command;

class OrderCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'order:status';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will execute for updating order status';

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
        $status_id = Status::where('alias', '=', 'review-complete')->first()->id;
        $orders = Order::whereHas('lastStatusCreatedAt', function ($query) use($status_id){
            $query->whereRaw("TIMESTAMPDIFF(HOUR, `created_at`, '".Carbon::now()."') > 47 AND TIMESTAMPDIFF(HOUR, `created_at`, '".Carbon::now()."') < 71");
            $query->where('status_id', '=', $status_id);
        })->get();
        foreach ($orders as $key => $order){
            $order->user->notify((new OrderReviewNotification($order, ['database','mail', 'broadcast']))->delay(5));
        }
    }
}
