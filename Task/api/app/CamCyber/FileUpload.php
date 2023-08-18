<?php

namespace App\CamCyber;


use Illuminate\Http\Request;
use Image;

class FileUpload{

    public static function upload($file, $folder, $resize){


        $data = [
                    'project'               => 'Minimart_POS',
                    'file'                  => $file,
                    'folder'                => $folder,
                    'resize'                => $resize,
                    'is_return_full_url'    => 0
                ];       

        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => env('FILE_URL')."/api/attach/image",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => $data,
        CURLOPT_FAILONERROR => true,
        CURLOPT_HTTPHEADER => array(
            "Authorization: Basic ZmlsZXVzZXI6RiFMRVdRMTI="
        ),
        ));

        $response = curl_exec($curl);
        if (curl_errno($curl)) {
            return   ['url' => ''];
            //$error_msg = curl_error($curl);
        }
        curl_close($curl);

        
        return   json_decode( $response, true );

    }
  
}
