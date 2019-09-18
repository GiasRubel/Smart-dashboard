<html>
<head>
    <title>Delivery note</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <style>
        .wraper{
            width: 100%;
            height: auto;
        }
        .col-12{
            width: 100%;
            height: auto;
        }
        .col-7{
            width: 65%;
            height: auto;
            float: left;
            clear: right;
        }
        .col-5{
            width: 35%;
            height: auto;
            float: right;
        }
        .lg-title{
            font-size: 16px;
            font-weight: bold;
            line-height: 35px;
        }
        .font-default{
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
        }
        .font-default-15{
            font-size: 15px;
            font-weight: 400;
        }
        .font-18{
            font-size: 18px;
            color: #fff;
            font-weight: bold;
        }
        .bg-cayan{
            background-color: #ddd;
            color: #000;
            border-radius: 3px;
        }
        .pd-10{
            padding: 10px;
        }
        .mgt-5{
            margin-top: 8px;
        }
        .pd-7{
            padding: 7px;
        }
        .pd-5{
            padding: 5px;
        }
        .mgt-10{
            margin-top: 15px;
        }
        .font-16{
            font-size: 16px;
            color: #fff;
            font-weight: bold;
        }
        .font-14{
            font-size: 14px;
            color: #fff;
            font-weight: bold;
        }
        .spacer-md{
            height: 20px;
        }
        #table {
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        #table > tr > td{
            font-size: 10px;
        }

        #table td, #table th {
            /*border-right: 1px solid #dddddd;*/
            padding: 5px;
        }

        #table td:last-child, #table th:last-child{
            border-right: none;
        }


        #table tr:hover {background-color: #ddd;}

        #table th {
            padding-top: 8px;
            padding-bottom: 8px;
            text-align: left;
            background-color: #ddd;
            color: #000;
            font-size: 14px;
        }
        .bdd{
            padding: 10px;
            border: 0.001px solid #ddd;
        }
        .grand-total{
            padding: 5px 0;
        }
        .address{
            position: relative;
        }
        .address tr > td:last-child{
            position: absolute;
            top: 0;
            padding-top: 0;
            margin-top: 0;
        }
        .page-break {
            page-break-after: always;
        }
    </style>
</head>
<body style="font-family: Quicksand">
<div class="wraper" style="padding: 20px; height: 140px;">
    <div class="col-7">
        <div class="lg-title">
            @if(optional($order->address->country)->country_code == 'BD')
                ShopNShipBD
            @elseif(optional($order->address->country)->country_code == 'PK')
                ShopNShipPK
            @endif
        </div>
        <div>
            <table class="table address">
                <tr>
                    <td style="font-size: 14px; line-height: 20px; font-weight: 500; border-right: 1px #ddd solid; padding-right: 10px;">
                        {!! nl2br("<b>USA Address</b><br>734 Walt Whitman Road. Suite 102
Melville, NY 11747
Tel: +1 7184545500
            accounts@shopnshipbd.com,
            info@shopnshipbd.com
            www.shopnshipbd.com") !!}
                    </td>
                    <td style="padding-left: 10px; font-size: 14px; font-weight: 500; margin-top: -50px; line-height: 20px;">
                        @if(optional($order->address->country)->country_code == 'BD')
                            <b>Dhaka Address : </b><br>
                            {!! config('settings.bangladesh_local_address') !!}
                        @elseif(optional($order->address->country)->country_code == 'PK')
                            <b>Islamabad Address : </b><br>
                            {!! config('settings.pakistan_local_address') !!}
                        @endif
                        {!!
                            nl2br('
                                accounts@shopnshipbd.com,
                                info@shopnshipbd.com
                                www.shopnshipbd.com'
                                )
                        !!}
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="col-5">
        @if(optional($order->address->country)->country_code == 'BD')
            <img src="{{ public_path("images/logo/logo.png") }}" style="height: 66px;">
        @elseif(optional($order->address->country)->country_code == 'PK')
            <img src="{{ public_path("images/logo/shopnshippk.png") }}" style="height: 66px;">
        @endif
    </div>
</div>
<div class="wraper" style="padding: 20px; height: 90px;">
    <div class="col-7">
        <div class="lg-title">ADDRESS</div>
        <div class="font-default">
            {{ optional($order->address)->full_name  }}<br>

            {!! nl2br(isset($order->address->address) ? $order->address->address : '') !!}
            {{ optional($order->address)->address_2 != '' ? ", ".optional($order->address)->address_2 : '' }}
            <br>
            {{ optional($order->address->state)->title }}, {{ optional($order->address->country)->title }}<br>
            @if(is_array($order->address->phones))
                @foreach(optional($order->address)->phones as $phone)
                    {{ optional($phone)->phone }},&nbsp;
                @endforeach
            @else
                {{ optional($order->address)->phone }}
            @endif
        </div>
    </div>
    <div class="col-5">
        <div class="pd-7 bg-cayan font-16" style="color: #000;">ORDER {{ $order->order_number }}</div>
        <div class="pd-7 bg-cayan font-16 mgt-5" style="color: #000;">DATE: {{ date('m-d-Y', strtotime($order->order_date)) }}</div>
        <div class="pd-7 bg-cayan font-16 mgt-5" style="color: #000;">DELIVERY DATE: {{ date('m-d-Y', strtotime(\Carbon\Carbon::now())) }}</div>
    </div>
</div>


<div class="wraper" style="padding: 20px;">
    <table id="table">
        <tr>
            <th>SL.</th>
            <th>ITEM INFO</th>
            <th>QTY</th>
        </tr>
        @foreach($order->items as $key => $item)
            <tr>
                <td>{{ ++$key }}</td>
                <td>{{ $item->title != "" ? str_limit($item->title, 120) : str_limit($item->url, 70) }}</td>
                <td>{{ $item->itemPrice->quantity  }}</td>
            </tr>
        @endforeach

    </table>
</div>
@if($order->items->count() < 18)
    <div class="wraper" style=" padding: 10px; height: 20px; margin-top: 10px; position: fixed; bottom: 0px;">
        <div class="col-7" style="padding-left: 20px;">
            <div style="width: 30%; border-top: dashed #000 1px">
                <div style="text-align: center; width: 100%; padding-top: 5px; ">Accepted By</div>
            </div>
        </div>
        <div class="col-5" align="right" style="padding-right: 20px;">
            <div style="width: 50%; border-top: dashed #000 1px; float: right; clear: left">
                <div style="text-align: center; width: 100%; padding-top: 5px; ">Accepted Date</div>
            </div>
        </div>
    </div>
@else
    <br>
    <div class="wraper" style=" padding: 10px; height: 20px; margin-top: 10px; bottom: 0px;">
        <div class="col-7" style="padding-left: 20px;">
            <div style="width: 30%; border-top: dashed #000 1px">
                <div style="text-align: center; width: 100%; padding-top: 5px; ">Accepted By</div>
            </div>
        </div>
        <div class="col-5" align="right" style="padding-right: 20px;">
            <div style="width: 50%; border-top: dashed #000 1px; float: right; clear: left">
                <div style="text-align: center; width: 100%; padding-top: 5px; ">Accepted Date</div>
            </div>
        </div>
    </div>
@endif
</body>
</html>