<?php

namespace App\Api\V1\Resources\Subscription;

use Illuminate\Http\Resources\Json\Resource;

use App\Http\Resources\ActivityImage\ActivityImageResource;

class SubscriptionResource extends Resource
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
        $img = json_decode($this->icon,true);
        $partern['icon'] = asset($img['xs']);
        $partern['icon'] = asset($this->icon);
        //$partern['avatar'] = asset($this->avatar);
        return $partern;
    }
}
