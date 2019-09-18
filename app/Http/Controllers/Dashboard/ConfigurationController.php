<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\ConfigurationRequest as Request;
use App\Http\Controllers\Controller;
use App\Models\Configuration;

class ConfigurationController extends Controller
{
    public function index(){
        return Configuration::with("user")
            ->filter($this->filter)
            ->orderby('id','DESC')
            ->paginate(request()->per_page);
    }
    public function store(Request $request, Configuration $configuration){
        $configuration->fill($request->all());
        $configuration->updatedBy = \Auth::id();
        $configuration->save();
        return response()->json(['status' => true, 'message' => trans('api.config')." ".trans('api.added')]);
    }
    public function show($id){
        return Configuration::findOrFail($id);
    }
    public function update(Request $request, $id){
        $configuration = Configuration::find($id);
        $configuration->fill($request->except('updatedBy'));
        $configuration->updatedBy = auth()->id();
        $configuration->save();
        return response()->json(['status' => true, 'message' => trans('api.config')." ".trans('api.updated')]);
    }
    public function destroy($id){
        $configuration = Configuration::findOrFail($id);
        $configuration->delete();
        return response()->json(['status' => true, 'message' => trans('api.config')." ".trans('api.deleted')]);
    }
}
