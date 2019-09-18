<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Support\Facades\Input;

use App\Models\Banner;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use File;
use Storage;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Banner::with('country')->filter($this->filter)
            ->orderby('id', 'desc')
            ->paginate(request()->per_page);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        //return $request->country_id;
        $this->validate($request, [
            'type' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $banner = new Banner;

        if ($request->has('image')) {
            $image = $request->file('image');
            $fileName = time() . $image->getClientOriginalName();
            Storage::disk('public')->put('banner/'.$fileName, File::get($image));
        }

        if ($request->default_img == 1) {
            $banners = Banner::where('default_img', '=', 1)
                ->where('type', '=', $request->type)
                ->where('country_id', $request->country_id)
                ->get();
            foreach ($banners as $deactivate)
            {
                $deactivate_img = Banner::find($deactivate->id);
                $deactivate_img->default_img = 0;
                $deactivate_img->save();
            }
            $banner->default_img = $request->default_img;
        } else {
            $banner->default_img = $request->default_img;
        }

        $banner->image =  Storage::url("banner/".$fileName);
        $banner->type = $request->type;
        $banner->title = $request->title;
        $banner->status = $request->status;
        $banner->activated_at = $request->activated_at;
        $banner->expire_at = $request->expire_at;
        $banner->country_id = $request->country_id;

        $banner->save();

        return response()->json(['success' => 'Data stored']);
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
        return Banner::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {
        //return $request->default_img;
        $this->validate($request, [
            'type' => 'required',
        ]);
        if ($request->hasFile('image'))
            $this->validate($request, [
                'image' => 'sometimes|mimes:jpeg,bmp,png,jpg,svg|max:2000'
            ]);

        $banner = Banner::find($id);

        if ($request->hasFile('image')) {
            Storage::delete(str_replace('/storage/banner', 'public/banner', $banner->image));
            $image = $request->file('image');
            $fileName = time() . $image->getClientOriginalName();
            Storage::disk('public')->put('banner/'.$fileName, File::get($image));
            $banner->image =  Storage::url("banner/".$fileName);
        }

        if ($request->default_img == 1) {
            $banners = Banner::where('default_img', '=', 1)
                ->where('id', '!=', $banner->id)
                ->where('type', '=', $request->type)
                ->where('country_id', $request->country_id)
                ->get();
            foreach ($banners as $deactivate)
            {
                $deactivate_img = Banner::find($deactivate->id);
                $deactivate_img->default_img = 0;
                $deactivate_img->save();
            }
            $banner->default_img = $request->default_img;
        } else {
            $banner->default_img = $request->default_img;
        }

        $banner->type = $request->type;
        $banner->country_id = $request->country_id;
        $banner->title = $request->title;
        $banner->status = $request->status;
        $banner->activated_at = $request->activated_at;
        $banner->expire_at = $request->expire_at;

        $banner->save();

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
        foreach ($ids as $id) {
            $banner = Banner::find($id);
            Storage::delete(str_replace('/storage/banner', 'public/banner', $banner->image));
        }
        $banner->whereIn('id', $ids)->delete();
        return response()->json(['success' => 'Data Deleted']);
    }
}
