<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;

class Customer
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
        return $user;
        
        if ($user) { // TODO
            
            return $next($request);

        }else{
            return response()->json([
                'status' => 'error',
                'message' => "Access denied", 
                
            ], 401);
        }

       
    }
}
