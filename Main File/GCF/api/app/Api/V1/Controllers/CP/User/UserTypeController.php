<?php

namespace App\Api\V1\Controllers\CP\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\CamCyber\FileUpload;
use App\Api\V1\Controllers\ApiController;
use App\Model\User\Type;
use App\Model\User\Permission;
use App\Model\User\PermissionType;
use JWTAuth;

class UserTypeController extends ApiController
{

    function get(Request $request){
        $user = JWTAuth::parseToken()->authenticate();
        $data = Type::with('permissions')->withCount([
            'users as n_of_users', 
            'permissions as n_of_permissions'
        ])->get();
        return response()->json(['data' => $data], 200);
    }

    function listing($request, $typeId = 0){
       

        $data       = Permission::select('id', 'name', 'slug');
        
        if($typeId != 0){
            $data = $data->whereHas('permissionTypes', function($query) use ($typeId){
                    $query->where('user_type_id', $typeId); 
            }); 
        }

        if($request->permission_id ){
            $data = $data->where('permission_id', $request->permission_id);
        }

        $data = $data->get(); 

        return  $data;
    }


    function permissions(Request $request, $typeId = 0){
        $permissions        = $this->listing($request); 
        $userPermissions    = $this->listing($request, $typeId); 
        $data = []; 
        foreach($permissions as $permission){
            
            foreach($userPermissions as $userPermission){
                if($permission->id == $userPermission->id){
                    $permission->enable = 1;
                }
            }

            $data[] = $permission; 
        }

        return response()->json($data, 200);
    }

    function setPermission(Request $request){

        $this->validate($request, [
            'type' => 'required|exists:users_type,id',
            'permission' => 'required|exists:permissions,id'

        ]);
        
    
        $data = [
            'user_type_id' => $request->type, 
            'permission_id' => $request->permission
        ]; 

        $message = ""; 
        $enable = 0; 

        $check = PermissionType::where($data)->first(); 
        if($check){
            $check->delete();
            $message = 'Permission has been removed'; 
        }else{
            PermissionType::insert($data); 
            $enable = 1; 
            $message = 'Permission has been added'; 
        }

        return [
            'status'    => 'success', 
            'message'   => $message, 
            'enable'    => $enable
        ];
    }

}
