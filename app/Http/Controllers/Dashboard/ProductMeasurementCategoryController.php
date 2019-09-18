<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\ProductMeasurementCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductMeasurementCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        return ProductMeasurementCategory::with("parent")
            ->filter($this->filter)
            ->orderBy('id', 'DESC')
            ->paginate(request()->per_page);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param ProductMeasurementCategory $product
     * @return json
     */
    public function store(Request $request, ProductMeasurementCategory $product)
    {
        $request->validate([
            'title' => 'required',
            'volumetric_weight' => 'required|numeric',
            'parent_id' => 'nullable|numeric'
        ]);
        $product->fill($request->all());
        $product->save();
        return response()->json(["status" => true, 'message' => "Product measurement category " . trans('api.added')]);
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return ProductMeasurementCategory|ProductMeasurementCategory[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model
     */
    public function show($id)
    {
        return ProductMeasurementCategory::with('parent')->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProductMeasurementCategory $productMeasurementCategory
     * @return void
     */
    public function edit(ProductMeasurementCategory $productMeasurementCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'volumetric_weight' => 'required|numeric',
            'parent_id' => 'nullable|numeric'
        ]);
        $product = ProductMeasurementCategory::find($id);
        $product->fill($request->all());
        $product->save();
        return response()->json(["status" => true, 'message' => "Product measurement category " . trans('api.updated')]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ids = explode(",", $id);

        $catagory = ProductMeasurementCategory::find($id);
        $catagory->whereIn('id', $ids)->delete();

        return response()->json(['status' => true, "message" => 'Product measurement category ' . trans('api.deleted')]);
    }

    public function parent($text = false)
    {
        return ProductMeasurementCategory::when($text, function ($query) use ($text) {
            $query->where('title', 'like', "%{$text}%");
        })->latest()->take(50)->get();
    }
}
