<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Database\Seeder;

class OrderItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $order1 = Order::find(1);
        $order2 = Order::find(2);
        $order3 = Order::find(3);

        $product1 = Product::find(1);
        $product2 = Product::find(2);
        $product3 = Product::find(3);
        $product4 = Product::find(4);
        $product5 = Product::find(5);

        OrderItem::create([
            'order_id' => $order1->id,
            'product_id' => $product1->id,
            'quantity' => 2,
        ]);

        OrderItem::create([
            'order_id' => $order1->id,
            'product_id' => $product2->id,
            'quantity' => 1,
        ]);

        OrderItem::create([
            'order_id' => $order2->id,
            'product_id' => $product2->id,
            'quantity' => 1,
        ]);

        OrderItem::create([
            'order_id' => $order2->id,
            'product_id' => $product4->id,
            'quantity' => 2,
        ]);

        OrderItem::create([
            'order_id' => $order3->id,
            'product_id' => $product3->id,
            'quantity' => 1,
        ]);

        OrderItem::create([
            'order_id' => $order3->id,
            'product_id' => $product5->id,
            'quantity' => 1,
        ]);
    }
}
