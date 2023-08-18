<?php

namespace App\Api\V1\Resources\Country;

use Illuminate\Http\Resources\Json\Resource;

use App\Http\Resources\ActivityImage\ActivityImageResource;

class CountryResource extends Resource
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
        $img = json_decode($this->flag,true);
        $partern['flag'] = asset($img['xs']);
        // $partern['image'] = asset($this->image);
        return $partern;
    }
}
