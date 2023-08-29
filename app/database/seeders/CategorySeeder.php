<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            ['name' => 'Cleanser'],
            ['name' => 'Treatment'],
            ['name' => 'Toner'],
            ['name' => 'Moisturiser'],
            ['name' => 'Sun protection'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
