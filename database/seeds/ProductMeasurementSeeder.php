<?php

use Illuminate\Database\Seeder;

class ProductMeasurementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $orders = \App\Models\Order::with('items')->get();
        foreach ($orders as $order){
            $items = $order->items;
            foreach ($items as $item){
                factory(App\Models\ProductMeasurement::class,1)->create([
                    'sku' => $item->sku,
                    'title' => $item->title
                ]);
            }
        }
    }
}
