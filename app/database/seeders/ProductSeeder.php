<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = Category::all();

        $products = [
            [
                'name' => 'Eucerin oil control spf 50+',
                'description' => 'Eucerin Oil control za zastitu masne koze od sunca SPF 30 je preparat za zastitu koze lica.',
                'price' => 2000,
                'category_id' => $categories->get(4)->id,
                'image' => 'https://www.apotekasrbotrade.rs/imgProducts/5561/1-eucerin-sun-oil-control-spf30-50ml-srbotrade.jpg',
            ],
            [
                'name' => 'Toleriane sensitive fluid moisturiser',
                'description' => 'Hidratantna nega za mesovitu do masnu osetljivu kozu. Hidrira. Umiruje. Stiti. 0% parfema i alkohola.',
                'price' => 1750,
                'category_id' => $categories->get(3)->id,
                'image' => 'https://www.apotekasrbotrade.rs/imgProducts/5775/3337875588676_1-srbotrade.jpg',
            ],
            [
                'name' => 'The Ordinary Hyaluronic Acid 2% + B5',
                'description' => 'Ova formulacija kombinuje nisku, srednju i visoku molekularnu tezinu hijaluronske kiseline.',
                'price' => 1400,
                'category_id' => $categories->get(3)->id,
                'image' => 'https://www.metropoliten.rs/v2/wp-content/uploads/2018/11/The-Ordinary-Hyaluronic-Acid-2-B5-30ml.jpg',
            ],
            [
                'name' => 'Avene Cleanance Comedomed koncentrat',
                'description' => 'Za kozu sklonu aknama. Smanjuje bubuljice i mitesere.',
                'price' => 2550,
                'category_id' => $categories->get(1)->id,
                'image' => 'https://www.apotekasrbotrade.rs/imgProducts/5297/avene-cleanance-comedomed-srbotrade.jpg',
            ],
            [
                'name' => 'CeraVe Blemish Cleanser',
                'description' => 'Cerave gel za cisenje koze sklone nepravilnostima.',
                'price' => 1100,
                'category_id' => $categories->get(0)->id,
                'image' => 'https://www.apotekasrbotrade.rs/imgProducts/9749/cerave-blemish-control-cleanser-236ml-srbotrade.jpg',
            ]
        ];

        Product::insert($products);
    }
}
