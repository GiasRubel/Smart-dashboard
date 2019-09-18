<html>
<head>
    <title>Order Status Report</title>
    <meta charset="utf-8" >
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
            width: 95%;
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
        <div class="lg-title">{{ config('app.name') }}</div>
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
                        <b>Dhaka Address : </b><br>
                        {!! nl2br('House No 79,
                        Shah-Makhdum Avenue. Sector 12.
                         Uttara-1230 Dhaka, Bangladesh
                         accounts@shopnshipbd.com,
            info@shopnshipbd.com
            www.shopnshipbd.com') !!}
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="col-5">
        <img src="{{ public_path("/images/logo.png") }}" style="height: 66px;">
    </div>
</div>

<div class="spacer-md"></div>

<div class="wraper" style="padding: 20px;">
    <table id="table">
        <tr>
            <th style="width: 20%;">Order number</th>
            <th style="width: 20%;">Grand price</th>
            <th style="width: 8%;">Shipping cost</th>
            <th style="width: 7%;">Service charge</th>
            <th style="width: 37%;">Shipping address</th>
            <th style="width: 8%;">Item sub-total</th>
        </tr>
        @php
            $master_price = 0;
            $shipping_cost = 0;
            $item_subtotal = 0;
            $item_shipping_cost = 0;
            $visible = true;
            $service_charge = 0;
        @endphp
        @forelse($orders as $key => $order)
            @php
                $master_price += $order->master_price;
                $shipping_cost += ($order->shipping_cost + $order->items_shipping_cost);
                $item_subtotal += $order->total_price;
                $service_charge += $order->service_charge;
            @endphp
                <tr>
                    <td style="width: 20%;">
                        {{ $order->order_number }}
                    </td>
                    <td style="width: 10%;">
                        ${{ number_format($order->master_price, 2, '.', '') }}
                    </td>
                    <td style="width: 10%;">
                        ${{ number_format($order->shipping_cost + $order->items_shipping_cost, 2, '.', '') }}
                    </td>
                    <td style="width: 10%;">
                        ${{ number_format($order->service_charge, 2, '.', '') }}
                    </td>
                    <td style="width: 40%;">
                       @if(optional($order->user)->name != '') <b>{{  optional($order->user)->name }}</b>,@endif
                           {{ optional($order->address)->address }}
                           {{ optional($order->address)->address_2 != '' ? ", ".optional($order->address)->address_2 : '' }}
                    </td>
                    <td style="width: 10%;">${{ number_format($order->total_price, 2, '.', '') }}</td>
                </tr>
        @empty
            @php
                $visible = false;
            @endphp
            <tr>
                <td colspan="5">No order found</td>
            </tr>
        @endforelse
        @if($visible)
        <tr>
            <td style="border-top: 1px solid #ccc;"><b>Total</b></td>
            <td style="border-top: 1px solid #ccc;"><b>${{ number_format($master_price, 2, '.', '') }}</b></td>
            <td style="border-top: 1px solid #ccc;"><b>${{ number_format($shipping_cost, 2, '.', '') }}</b></td>
            <td style="border-top: 1px solid #ccc;"><b>${{ number_format($service_charge, 2, '.', '') }}</b></td>
            <td style="border-top: 1px solid #ccc;"></td>
            <td style="border-top: 1px solid #ccc;"><b>${{ number_format($item_subtotal, 2, '.', '') }}</b></td>
        </tr>
        @endif
    </table>
</div>
<div class="wraper" style="padding: 10px; height: 10px;"></div>
</body>
</html>