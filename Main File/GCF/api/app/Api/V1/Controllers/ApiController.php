<?php
namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;
use Dingo\Api\Exception\ValidationHttpException;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;


class ApiController extends BaseController
{
    use DispatchesJobs, ValidatesRequests;
    public function validate(Request $request, array $rules, array $messages = [], array $customAttributes = []) {
        $validator = $this->getValidationFactory()->make($request->all(), $rules, $messages, $customAttributes);
        if ($validator->fails()) {
            throw new ValidationHttpException($validator->errors());
        }
    }

   
    
}