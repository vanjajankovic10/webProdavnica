<?php

namespace Database\Seeders;

use App\Models\OrderItem;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        

         User::factory(10)->create();
         (new CategorySeeder())->run();

         (new ProductSeeder())->run();
         (new OrderSeeder())->run();
         (new OrderItemSeeder())->run();
 



    }
}
