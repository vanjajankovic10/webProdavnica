<?php

namespace Database\Seeders;

use App\Models\Order;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $orders = [
            [
                'user_id' => 1,
                'total_price' => 5750,
                'order_date' => now(),
            ],
            [
                'user_id' => 2,
                'total_price' => 6850,
                'order_date' => now()->subDays(2),
            ],
            [
                'user_id' => 3,
                'total_price' => 2500,
                'order_date' => now()->subDays(5),
            ],
        ];

        foreach ($orders as $order) {
            Order::create($order);
        }
    }
}
