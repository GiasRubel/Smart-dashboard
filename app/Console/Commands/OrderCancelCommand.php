<?php

namespace App\Console\Commands;

use App\Models\Order;
use App\Models\Status;
use App\Notifications\OrderCancelStatusNotification;
use Carbon\Carbon;
use Illuminate\Console\Command;

class OrderCancelCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'order:cancel';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will cancel unpaid review complete order';

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
        $orders = Order::with('')->whereHas('lastStatusCreatedAt', function ($query) use ($status_id) {
            $query->whereRaw("TIMESTAMPDIFF(HOUR, `created_at`, '" . Carbon::now() . "') > 120");
            $query->where('status_id', '=', $status_id);
        })->get();
        $status_id = Status::where('alias', '=', 'cancel')->first()->id;
        foreach ($orders as $key => $order) {
            $order->last_status_id = $status_id;
            $order->save();
            $order->status()->attach($status_id);
            $order->user->notify((new OrderCancelStatusNotification($order))->delay(5));
        }
    }
}
