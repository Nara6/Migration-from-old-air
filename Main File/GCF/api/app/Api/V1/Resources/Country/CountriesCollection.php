<?php

namespace App\Api\V1\Resources\Country;

use Illuminate\Http\Resources\Json\ResourceCollection;

use App\Api\V1\Resources\Country\CountryResource;

class CountriesCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $partern = CountryResource::collection($this->collection);
        return  $partern;
       
    }
}
