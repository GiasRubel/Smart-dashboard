<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\Dashboard\AdminMenuRequest;
use App\Models\AdminMenu;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

//use File;


class AdminMenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return AdminMenu::orderby('id', 'desc')
            ->filter($this->filter)
            ->paginate($request->per_page);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response()->json( $this->adminRoutes() );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param AdminMenuRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdminMenuRequest $request, AdminMenu $adminMenu)
    {
        $cm_exploded = explode('^', $request->component_name);
        if ($request->image != "") {
            $exploded = explode( ',', $request->image );

            $decoded = base64_decode( $exploded[1] );

            if (str_contains( $exploded[0], ['jpeg', 'jpg'] )) {
                $extention = 'jpg';
            } elseif (str_contains( $exploded[0], 'gif' )) {
                $extention = 'gif';
            } elseif (str_contains( $exploded[0], 'png' )) {
                $extention = 'png';
            } else {
                return response()->json( ["warning" => "Enter valid Image"] );
            }

            $filename = str_random() . '.' . $extention;

            $path = public_path( '/img/admin-menu' ) . '/' . $filename;

            file_put_contents( $path, $decoded );
            $adminMenu->fill($request->except( 'image', 'parent_component' ));
            $adminMenu->icon_img = $filename;
        } else {
            $adminMenu->fill($request->except( 'image', 'parent_component' ));
        }
        $adminMenu->component_name = $cm_exploded[0] == $cm_exploded[1] ? 0  : $cm_exploded[1];
        $adminMenu->parent_component = $cm_exploded[0];
        $adminMenu->save();
        return response()->json( ["success" => "Admin menu added"] );
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return void
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
        return AdminMenu::find( $id );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param AdminMenuRequest $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(AdminMenuRequest $request, $id)
    {
        $cm_exploded = explode('^', $request->component_name);
        $admin = AdminMenu::find($id);
        if ($request->image != "")
        {
            $exploded = explode(',', $request->image);

            $decoded = base64_decode($exploded[1]);

            if(str_contains($exploded[0], ['jpeg','jpg']))
            {
                $extention = 'jpg';
            }elseif (str_contains($exploded[0], 'gif'))
            {
                $extention = 'gif';
            }
            elseif (str_contains($exploded[0], 'png'))
            {
                $extention = 'png';
            }
            else{
                return response()->json(["warning" => "Enter valid Image"]);
            }

            $filename = str_random().'.'.$extention;

            $path = public_path('/img/admin-menu').'/'.$filename;

            file_put_contents($path, $decoded);

            $image_delete = $admin->icon_img;

            if (str_contains($image_delete, ['jpeg','jpg','png','gif']))
            {
             unlink(public_path('img/admin-menu/'.$image_delete));
            }

//            File::delete(public_path('img/admin-menu'.$image_delete));

            $admin->fill($request->except('image'));

            $admin->icon_img = $filename;
        }
        else{
            $admin->fill($request->except('image'));
        }

        $admin->component_name = $cm_exploded[0] == $cm_exploded[1] ? 0  : $cm_exploded[1];
        $admin->parent_component = $cm_exploded[0];
        $admin->save();
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

        $admin_menu = AdminMenu::find($id);

        $admin_menu->whereIn('id', $ids)->delete();

        return response()->json(['success' => 'Data Deleted']);
    }

    /**
     * @return array
     * return route list of dashboard
     */
    public function adminRoutes()
    {
        $adminRoutes = collect( Route::getRoutes()->getRoutesByName() )->filter( function ($route) {
            return $route->getPrefix() == ('dashboard/');
        } );
        $routes = [];
        foreach ($adminRoutes as $key => $value) {
            $routes[str_slug( title_case( explode( ".", $key, 2 )[0] ) )][$key] = title_case( explode( ".", $key, 2 )[0] ) . ' ' . title_case( explode( ".", $key, 2 )[1] );
        }
        return $routes;
    }
}
