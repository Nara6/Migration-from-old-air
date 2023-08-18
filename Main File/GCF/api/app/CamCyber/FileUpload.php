<?php

namespace App\CamCyber;

class FileUpload{
    

    public static function uploadFile($file, $folder, $resize){

        $data = [
                    'project'               => env('APP_NAME'),
                    'file'                  => $file,
                    'folder'                => $folder,
                    'resize'                => $resize,
                    'is_return_full_url'    => 0
                ];

        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => env('FILE_URL')."/api/attach/file",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => $data,
        CURLOPT_HTTPHEADER => array(
            "Authorization: Basic ZmlsZXVzZXI6RiFMRVdRMTI="
        ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        return   json_decode( $response, true );

    }

    public static function forward($file = '', $folder = ''){ 
        $base = env('FILE_URL');
        $url = $base.'/api/attach/file'; 
      
        $fields = array(
            'project' => 'GCF-INVESTMENT', 
            'file' => urlencode($file), 
            'folder'=> $folder
        );

        $fieldStr = '';
        foreach($fields as $key=>$value) { $fieldStr .= $key.'='.$value.'&'; }
        rtrim($fieldStr, '&');
        $curl = curl_init();

        curl_setopt_array($curl, array(
                CURLOPT_URL => $url,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_SSL_VERIFYPEER => 0,
                CURLOPT_SSL_VERIFYHOST => false,
                CURLOPT_CUSTOMREQUEST => "POST",
                CURLOPT_HTTPHEADER => array(
                    "Accept: application/json",
                    "Accept-Encoding: gzip, deflate",
                    "Cache-Control: no-cache",
                    "Connection: keep-alive",
                    "cache-control: no-cache"
                ),
                CURLOPT_POST => count($fields), 
                CURLOPT_POSTFIELDS => $fieldStr
            )
        );

        $res = curl_exec($curl);
        $err = curl_error($curl);
        $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        $info = curl_getinfo($curl);
        curl_close($curl);

        // echo '<pre>';
        // print_r($res); 
        // echo '</pre>';

        if( $status == 200 ){
            if (!$err) {

               
                $res = json_decode($res);
                
                
                return $res; 

            }else{
                return null; 
            }

        }else{

            $res = json_decode($res);
            //dd($err); 
            $message = ''; 
            if($res){
                if(isset($res->message)){
                    $message = $res->message; 
                }
            }
            if($status == 0){
                $message = 'Connection timed out after 30001 milliseconds'; 
            }

            $res = json_decode('{"status":0,"status_code":'.$status.', "message":"'.$message.'"}');
            return $res; 

        }

        
        
        
    }


    public static function uploadFileV2($file, $folder, $resize){

        $data = [
                    'project'               => 'GCF-INVESTMENT',
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

    public static function uploadPDF($file, $folder, $resize){

        $data = [
                    'project'               => 'GCF-INVESTMENT',
                    'file'                  => $file,
                    'folder'                => $folder,
                    'resize'                => $resize,
                    'is_return_full_url'    => 0
                ];

        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => env('FILE_URL')."/api/attach/file",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => $data,
        CURLOPT_HTTPHEADER => array(
            "Authorization: Basic ZmlsZXVzZXI6RiFMRVdRMTI="
        ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        return   json_decode( $response, true );

    }

    public static function uploadAudio($file, $folder, $resize){

        $data = [
                    'project'               => 'GCF-INVESTMENT',
                    'file'                  => $file,
                    'folder'                => $folder,
                    'resize'                => $resize,
                    'is_return_full_url'    => 0
                ];

        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => env('FILE_URL')."/api/attach/voice",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => $data,
        CURLOPT_HTTPHEADER => array(
            "Authorization: Basic ZmlsZXVzZXI6RiFMRVdRMTI="
        ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        return   json_decode( $response, true );

    }

    static function getExtensionFile($file){
        $info = substr($file, 5, strpos($file, ';')-5);
        $extension = explode("/", $info);
        if(isset($extension[1])){
            $ext = strtolower($extension[1]);
            if (strpos($ext, '+') !== false) {
               $result =  explode("+", $ext);
               return $result[0];
            }else{
                return $ext;
            }
        }
        return '';
    }

    public static function uploadFileResize($file, $folder, $resize){

        $data = [
                    'project'               => 'GCF-INVESTMENT',
                    'file'                  => $file,
                    'folder'                => $folder,
                    'resize'                => $resize,
                    'is_return_full_url'    => 0
                ];

        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => env('FILE_URL')."/api/attach/image-resize",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => $data,
        CURLOPT_HTTPHEADER => array(
            "Authorization: Basic ZmlsZXVzZXI6RiFMRVdRMTI="
        ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        return   json_decode( $response, true );

    }
  
}
