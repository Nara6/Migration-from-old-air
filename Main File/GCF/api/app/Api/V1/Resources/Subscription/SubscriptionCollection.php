<?php

namespace App\Api\V1\Resources\Subscription;

use Illuminate\Http\Resources\Json\ResourceCollection;

use App\Api\V1\Resources\Subscription\SubscriptionResource;

class SubscriptionCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $partern = SubscriptionResource::collection($this->collection);
        return  $partern;
       
    }
}
