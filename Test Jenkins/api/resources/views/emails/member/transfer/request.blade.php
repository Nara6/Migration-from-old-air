@extends('emails.layout.master')
 @section ('content')
 <tbody>
    <tr>
        <td style="font-size:0;padding:30px 30px 18px;" align="left">
            <div class="mj-content" style="cursor:auto;color:#000000;font-family:Proxima Nova, Arial, Arial, Helvetica, sans-serif;font-size:24px;line-height:22px;">New Transfer Request</div>
        </td>
    </tr>
    <tr>
        <td style="font-size:0;padding:0 30px 16px;" align="left">
            <div class="mj-content" style="cursor:auto;color:#000000;font-family:Proxima Nova, Arial, Arial, Helvetica, sans-serif;font-size:15px;line-height:22px;">Dear <b>{{$data['senderName']}}</b></div>
        </td>
    </tr>
   
    <tr>
        <td style="font-size:0;padding:0 30px 16px;" align="left">
            <div class="mj-content" style="cursor:auto;color:#000000;font-family:Proxima Nova, Arial, Arial, Helvetica, sans-serif;font-size:15px;line-height:22px;">
              
              <p>
               You have requested new transfer amount: {{$data['amount']}}.00 $ to {{$data['receiverName']}}.
                
              </p>
          </div>
        </td>
    </tr>
     <tr>
        <td style="font-size:0;padding:0 30px 16px;" align="left">
            <div class="mj-content" style="cursor:auto;color:#000000;font-family:Proxima Nova, Arial, Arial, Helvetica, sans-serif;font-size:15px;line-height:22px;">Best Regards, <br /> <b>Richy Support Team</b></div>
        </td>
    </tr>
   
</tbody>
@endsection