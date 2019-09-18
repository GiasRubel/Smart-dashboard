<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\StoreSettings;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSettingRequest as Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class StoreSettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        return StoreSettings::with('store')
            ->filter($this->filter)
            ->orderBy('id', 'DESC')
            ->paginate(request()->per_page);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @param StoreSettings $storeSettings
     * @return Illuminate\Http\Response
     */
    public function store(Request $request, StoreSettings $storeSettings)
    {
        $data = $request->all();
        $storeSettings->fill($data);
        $storeSettings->updated_by = \Auth::id();
        $storeSettings->save();
        return response()->json(['status' => true, 'message' => trans('api.storeSettings')." ".trans('api.added')]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\StoreSettings  $storeSettings
     * @return StoreSettings
     */
    public function show($id)
    {
        return $storeSettings = StoreSettings::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StoreSettings  $storeSettings
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $storeSettings = StoreSettings::find($id);
        $storeSettings->fill($request->all());
        $storeSettings->updated_by = \Auth::id();
        $storeSettings->save();
        return response()->json(['status' => true, 'message' => trans('api.storeSettings')." ".trans('api.updated')]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StoreSettings  $storeSettings
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ids = explode(",", $id);
        $storeSettings = StoreSettings::find($id);
        try{
            $storeSettings->whereIn('id', $ids)->delete();
        }catch (ModelNotFoundException $exception){
            return response()->json(['status' => true, 'message' => trans('api.storeSettings')." ".trans('api.notFound')]);
        }
        return response()->json(['success' => 'Data Deleted']);
    }
}
