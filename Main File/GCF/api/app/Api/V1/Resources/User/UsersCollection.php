<?php

namespace App\Api\V1\Resources\User;

use Illuminate\Http\Resources\Json\ResourceCollection;

use App\Api\V1\Resources\User\UserResource;

class UsersCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $partern = UserResource::collection($this->collection);
        return  $partern;
       
    }
}
