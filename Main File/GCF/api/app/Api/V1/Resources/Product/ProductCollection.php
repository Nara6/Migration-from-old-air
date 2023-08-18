<?php

namespace App\Api\V1\Resources\Product;

use Illuminate\Http\Resources\Json\ResourceCollection;

use App\Api\V1\Resources\Product\ProductResource;

class ProductCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $partern = ProductResource::collection($this->collection);
        return  $partern;
       
    }
}
