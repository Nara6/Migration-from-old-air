<?php

namespace App\Api\V1\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

use App\Api\V1\Controllers\ApiController;
use App\BH\Account;

use App\Model\User\Main as User;

class CreateAccountController extends ApiController
{

    public function create(Request $request) {
      
        $this->validate($request, [
         
            'name'      => 'required|max:60',
           
            'phone'     =>  [
                            'required',  
                             Rule::unique('user', 'phone')
                        ],
            'email'     =>   [
                           
                            'email', 
                            'max:100', 
                            Rule::unique('user', 'email')
                        ],
          
        ], [

            'phone.unique'=>'លេខទូរស័ព្ទនេះត្រូវបានយករួចហើយ។ សូមព្យាយាមមួយផ្សេងទៀត។', 
            'phone.regex'=>'លេខទូរស័ព្ទមិនត្រឹមត្រូវ។ សូមព្យាយាមមួយផ្សេងទៀត។', 
            'phone.required'=>'លេខទូរស័ព្ទត្រូវបានទាមទារ។', 

            // 'email.required'=>'E-mail is required.', 
            'email.unique'=>'អ៊ីមែលត្រូវបានយករួចហើយ។',
            
          
        ]);

            //====================================>> Create New user
            $user = new User();
            $user->uid          = Account::generateUid();
            $user->name_kh      = $request->input('name_kh');
            $user->name         = $request->input('name');
            $user->phone        = $request->input('phone');
            $user->email        = $request->input('email');
            $user->is_active    = 0;
            $user->is_phone_verified	    = 1;
            $user->password             = bcrypt('123456'); // TODO
            $user->save();
   
            return response()->json([
                'status'        => 'success',
                'message'       => 'គណនីត្រូវបានបង្កើតដោយជោគជ័យ។', 
                'data'          => $user,
            ], 200); 
        }
   
}
