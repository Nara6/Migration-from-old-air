<?php

namespace App\Api\V1\Controllers\CP;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use App\Api\V1\Controllers\CP\OrderController;
use App\Model\Order\Order; 
use Dingo\Api\Routing\Helpers;
use JWTAuth;

use App\Api\V1\Controllers\ApiController;

class JsReportController extends OrderController
{
    use Helpers;

	private $response;
    
    function generateDocument(Request $req){
        
        $curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, 'http://159.223.69.158:5488/api/report');
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($curl, CURLOPT_ENCODING, "");
		curl_setopt($curl, CURLOPT_MAXREDIRS, 10);
		curl_setopt($curl, CURLOPT_TIMEOUT, 30);
		curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
		curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
		curl_setopt($curl, CURLOPT_POSTFIELDS, $this->getData($req));
		curl_setopt($curl, CURLOPT_HTTPHEADER, $this->getHeader());
        $response = curl_exec($curl);
        // return $response;

        return [
            'file_base64' => base64_encode($response),
        ];

    }

    public function getData(Request $req){
        
		if($req->receipt_number && $req->receipt_number !=""){

            $order       = Order::select('*')
            ->where('receipt_number', $req->receipt_number)
            ->with([
                'cashier',
                'details',
                'details.product:id,unit_id,name,image',
                'details.product.unit:id,name',
                'status',
                'customer'
            ])->first();

            $data = [];

            if($order){

                $totalPrice = 0;

                foreach($order->details as $detail){
                    $totalPrice += $detail->unit_price * $detail->qty;
                }

                $template = [
                    "name"  => "invoice-main"
                ];

                $data['template'] = $template;
                $data['data'] = $order;
                $data['total_amount'] = number_format($totalPrice);


                return json_encode($data);
            
            }else{
                return response()->json([
                    'status'    => 'error',
                    'message'   => 'Invalid Student Number.'
                ],400);
            }

        }else{
            return response()->json([
                'status'    => 'error',
                'message'   => 'Invalid Student Number.'
            ],400);
        }
		
	}
	
	public function getHeader(){
        $token = 'YWRtaW46MTIzNDU2';

		$header = array(
			"Authorization: Basic ".$token,
			"Cache-Control: no-cache",
			"Content-type: application/json"
		);
		return $header;
	}
    
}
