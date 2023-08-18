<?php

namespace App\Api\V1\Resources\Product;

use Illuminate\Http\Resources\Json\ResourceCollection;

use App\Api\V1\Resources\Product\ProductImageResource;

class ProductImageCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $partern = ProductImageResource::collection($this->collection);
        return  $partern;
       
    }
}
