<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;

class Store
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user         = JWTAuth::parseToken()->authenticate();
       
        if ($user && $user->customer && $user->customer->store) {

            //return $user->customer->staff->branch; 
            
            return $next($request);

        }else{
            return response()->json([
                'status' => 'error',
                'message' => "Access denied", 
                
            ], 401);
        }

       
    }
}
