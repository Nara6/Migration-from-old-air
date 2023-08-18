<?php

namespace App\Api\V1\Resources\User;

use Illuminate\Http\Resources\Json\Resource;

use App\Http\Resources\ActivityImage\ActivityImageResource;

class UserResource extends Resource
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
        $img = json_decode($this->avatar,true);
        $partern['avatar'] = asset($img['xs']);
        $partern['avatar'] = asset($this->avatar);
        //$partern['avatar'] = asset($this->avatar);
        return $partern;
    }
}
