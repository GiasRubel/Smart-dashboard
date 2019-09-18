<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\Dashboard\PaymentByCardRequest;

use App\Models\PaymentMethod;
use App\Models\PaymentOnline;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class paymentByCardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index(Request $request)
    {
        return PaymentOnline::with('paymentmethod', 'country')
            ->filter($this->filter)
            ->orderby('id', 'desc')
            ->paginate($request->per_page);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return PaymentMethod::pluck('title','id');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PaymentByCardRequest $request)
    {
        PaymentOnline::create($request->all());

        return response()->json(['success' => 'Data Stored']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return PaymentOnline::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PaymentByCardRequest $request, $id)
    {
        $paymentOnline = PaymentOnline::find($id);
        $paymentOnline->fill($request->all())->save();

        return response()->json(['success' => 'Data Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ids = explode(",", $id);

        $payOnline = PaymentOnline::find($id);

        $payOnline->whereIn('id', $ids)->delete();

        return response()->json(['success' => 'Data deleted']);
    }
}
