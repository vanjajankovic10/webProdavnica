<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProductResource::collection(Product::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' =>  'required' , 
                'description' => 'required|string|max:100', 
                'price' => 'required',
                'category_id' => 'required'  ,
                'image' =>'  '

            ]
        );
        if ($validator->fails()) 
            return response()->json($validator->errors());


         
            

        $p = Product::create([
                'name' =>   $request->name, 
                'description' => $request->description, 
                'price' =>  $request->price,                
                'category_id' =>  $request->category_id, 
                'image' =>  $request->image, 
                 
           
        ]);
        return response()->json(["Uspesno kreiran proizvod",$p]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ProductResource(Product::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' =>  'required' , 
                'description' => 'required|string|max:250', 
                'price' => 'required',
                'category_id' => 'required'  ,
                'image' =>'  '

            ]
        );
        if ($validator->fails()) 
            return response()->json($validator->errors());


        $l=Product::find($id);
        if($l){
            $l->name = $request->name;
            $l->description = $request->description;
            $l->price = $request->price;
            $l->category_id  = $request->category_id;
            $l->image = $request->image; 
            $l->save();
            return response()->json(['Proizvod uspesno izmenjen!', new ProductResource($l)]);
        }else{
            return response()->json('Trazeni objekat ne postoji u bazi');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $p = Product::find($id);
        if($p){ 
            $p->delete();
            return response()->json("uspesno obrisano!" );
        } else {

            return response()->json([
                'message' => 'Ne postoji u bazi.',
            ], 400);
        }
    }
}
