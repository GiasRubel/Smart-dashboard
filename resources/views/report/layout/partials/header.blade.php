<html>
<head>
    <title>Sales Report</title>
    <meta charset="utf-8" >
    <style>
        .wraper{
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
            background-color: #f05561;
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
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        #table td, #table th {
            border: 1px solid #fff;
            padding: 5px;
        }


        #table tr:hover {background-color: #ddd;}

        #table th {
            padding-top: 8px;
            padding-bottom: 8px;
            text-align: left;
            background-color: #f05561;
            color: white;
            font-size: 14px;
        }
        .bdd{
            border: 0.001px solid #f05561;
        }
    </style>
</head>
<body style="font-family: Quicksand">
<div class="wraper" style="padding: 20px; height: 120px;">
    <div class="col-7">
        <div class="lg-title">Shop and Ship BD</div>
        <div class="font-default">
            {!! nl2br("128 Millet Street N
            Dix Hills, NY 11746 US
            (718)454-5500") !!}
        </div>
    </div>
    <div class="col-5">
        <img src="{{ asset("img/logo.png") }}" style="height: 66px;">
        <div class="pull-right">
            <h4>Sales Report For <br>
                11.10.18 - 12.10.18</h4>
        </div>
    </div>
</div>

