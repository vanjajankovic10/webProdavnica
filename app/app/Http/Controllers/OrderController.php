<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OrderResource::collection(Order::all());
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
                'user_id' => 'required',
                'total_price' => '',
                'order_date' => 'required',
                'order_items' => 'required|array|min:1',
                'order_items.*.product_id' => 'required|integer',
                'order_items.*.quantity' => 'required|integer|min:1',
                'order_items.*.price' => 'required|numeric|min:0'
            ]
        );
    
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $orderDate = date('Y-m-d H:i:s', strtotime($request->order_date));
        $order = new Order();
        $order->user_id = $request->user_id;
        $order->total_price = $request->total_price;
        $order->order_date = $orderDate;
        $order->save();
    
        $order_items = $request->order_items;
        foreach ($order_items as $order_item) {
            $order_item_model = new OrderItem();
            $order_item_model->order_id = $order->id;
            $order_item_model->product_id = $order_item['product_id'];
            $order_item_model->quantity = $order_item['quantity'];
            $order_item_model->save();
        }
    
        return response()->json(["Uspesno!",new OrderResource(  $order)]);
    }
    

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = Order::with('orderItems.product')->findOrFail($id);
        return new OrderResource($order);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
