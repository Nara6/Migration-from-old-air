<?php

namespace App\Api\V1\Resources\Package;

use Illuminate\Http\Resources\Json\ResourceCollection;

use App\Api\V1\Resources\Package\PackageResource;

class PackagesCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $partern = PackageResource::collection($this->collection);
        
        return  $partern;
       
    }
}
