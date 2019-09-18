<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Reason;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReasonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Reason::orderBy('order', 'ASC')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Reason $reason
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, Reason $reason)
    {
        $request->validate([
            'title' => 'required|min:2|max:255',
            'order' => 'required|numeric|min:0'
        ]);
        $reason->fill($request->all());
        $reason->save();
        if ($reason){
            return response()->json([
                'status' => true,
                'message' => 'Reason added'
            ]);
        }
        return response()->json([
            'status' => false,
            'message' => 'Reason added failed'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Reason $reason
     * @return Reason
     */
    public function show(Reason $reason)
    {
        return $reason;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Reason $reason
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Reason $reason)
    {
        $request->validate([
            'title' => 'required|min:2|max:255',
            'order' => 'required|numeric|min:0'
        ]);

        $reason->fill($request->all());
        $reason->save();
        if ($reason){
            return response()->json([
                'status' => true,
                'message' => 'Reason updated'
            ]);
        }
        return response()->json([
            'status' => false,
            'message' => 'Reason update failed'
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Reason $reason
     */
    public function destroy(Reason $reason)
    {
        if($reason->delete()){
            return response()->json([
                'status' => true,
                'message' => 'Deleted successfully'
            ]);
        }
        return response()->json([
            'status' => false,
            'message' => 'Failed'
        ]);
    }
}
