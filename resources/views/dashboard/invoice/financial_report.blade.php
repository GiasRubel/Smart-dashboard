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
            width: 100%;
        }

        #table > tr > td{
            font-size: 10px;
        }

        #table td, #table th {
            border: 1px solid #dddddd;
            padding: 5px;
            font-style: bold;
        }

        /*#table td:last-child, #table th:last-child{*/
            /*border-right: none;*/
        /*}*/


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
        <img src="{{ public_path("images/logo/logo.png") }}" style="height: 66px;">
    </div>
</div>

<div class="spacer-md"></div>
<br>
<br>
<div class="wraper" style="padding: 20px;">
    <table id="table">
        <tr>
            <td width="40%">Total order</td>
            <td>{{ $report["totalOrder"] }}</td>
        </tr>
        <tr>
            <td>Total order cost</td>
            <td>${{ number_format($report["totalOrderCost"], 2, '.', '') }}</td>
        </tr>
        <tr>
            <td>Total shipping cost</td>
            <td>${{ number_format($report["totalShippingCost"], 2, '.', '') }}</td>
        </tr>
        <tr>
            <td>Total product cost</td>
            <td>${{ number_format($report["totalProductCost"], 2, '.', '') }}</td>
        </tr>
        <tr>
            <td>Total gift amount</td>
            <td>${{ number_format($report["totalGiftCost"], 2, '.', '') }}</td>
        </tr>
        <tr>
            <td>Total insurannce amount</td>
            <td>${{ number_format($report["totalInsuranceCost"], 2, '.', '') }}</td>
        </tr>
        <tr>
            <td>Total service charge</td>
            <td>${{ number_format($report["totalServiceChargeCost"], 2, '.', '') }}</td>
        </tr>
        <tr>
            <td>Total gateway charge amount</td>
            <td>${{ number_format($report["totalGateChargeAmount"], 2, '.', '') }}</td>
        </tr>
    </table>
</div>
<div class="wraper" style="padding: 10px; height: 10px;"></div>
</body>
</html>