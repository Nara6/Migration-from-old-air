<?php

namespace App\Api\V1\Resources\Product;

use Illuminate\Http\Resources\Json\Resource;

use App\Http\Resources\ActivityImage\ActivityImageResource;

class ProductImageResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $partern = parent::toArray($request);
        // $img = json_decode($this->img,true);
        // $partern['img'] = asset($img['xs']);
        $partern['image'] = asset($this->image);
        return $partern;
    }
}
