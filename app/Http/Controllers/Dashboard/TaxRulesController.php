<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\Dashboard\TaxRulesRequest;
use App\Models\Group;
use App\Models\TaxRule;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TaxRulesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return TaxRule::with('taxgrouprule')
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
        return Group::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(TaxRulesRequest $request)
    {
        if ($request->applicable_for_subtotal == true) {
            $permision = 1;
        } else {
            $permision = 0;
        }

        $taxrule=TaxRule::create($request->all());
        $taxrule->taxgrouprule()->sync($request->taxgrouprule);

        return response()->json(['success' => 'Data Stored']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return TaxRule::with('taxgrouprule')->find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(TaxRulesRequest $request, $id)
    {
        if ($request->applicable_for_subtotal == true) {
            $permision = 1;
        } else {
            $permision = 0;
        }

        $taxrule = TaxRule::find($id);

//        $taxrule->title = $request->title;
//        $taxrule->priority = $request->priority;
//        $taxrule->applicable_for_subtotal = $permision;
//
//        $taxrule->save();

        $taxrule->fill($request->all())->save();
        $taxrule->taxgrouprule()->sync($request->taxgrouprule);


        return response()->json(['success' => 'Data Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */


    public function destroy($id)
    {
        $ids = explode(",", $id);

        $taxclass = TaxRule::find($id);

        $taxclass->taxgrouprule()->whereIn('id', $ids)->detach();

        $taxclass->whereIn('id', $ids)->delete();

        return response()->json(['success' => 'Data Deleted']);
    }
}
