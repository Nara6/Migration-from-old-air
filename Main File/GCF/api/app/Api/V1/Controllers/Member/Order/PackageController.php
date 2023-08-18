<?php

namespace App\Api\V1\Controllers\Member\Order;

use Dingo\Api\Routing\Helpers;
use App\Api\V1\Controllers\ApiController;

use App\Model\Product\Package; 



class PackageController extends ApiController
{
    use Helpers;
   
    function listPackage(){

        $packages = Package::select('*')
        ->get();

        return $packages; 
    }
   
}
