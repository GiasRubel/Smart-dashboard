@extends('email.layout.master')
@section('content')
    <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0" style="width:100%;max-width:100%;">
        <tr>
            <td class="bodyBgColor" align="center" valign="top" bgcolor="#F9F9F9">
                <!-- Bg Color Open // -->
                <table class="row" border="0" width="700" align="center" cellpadding="0" cellspacing="0"
                       style="width:700px;max-width:700px;">
                    <tr>
                        <td class="whiteBgColor" align="center" valign="top" bgcolor="#FFFFFF">
                            <!-- E-mail Container Section Open // -->
                            <table class="row" width="600" align="center" border="0" cellpadding="0" cellspacing="0"
                                   style="width:600px;max-width:600px;">
                                <tr>
                                    <td class="containerPadding" align="center" valign="top">
                                        <!-- Title -->
                                        <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0"
                                               style="width:100%;max-width:100%;">
                                            <tr>
                                                <td class="imgResponsive" align="center" valign="middle" style="padding:0;">
                                                    <singleline style="text-align: left;">
                                                        <h3 style="text-align: center; padding: 15px 0;">
                                                            <p style="padding: 30px;line-height: 1.5;">
                                                                Dear {{ $user->name }},<br>
                                                                Order Number: <a href="{{ config('configuration.front_end_url') ."/user/$order->user_id/order-details/$order->id" }}">#{{ $order->order_number ?? '#1' }}</a><br>
                                                            </p>
                                                            <br>
                                                        </h3>
                                                        {{--<strong style=" float: left; padding: 10px 0;">Dear Willies</strong>--}}
                                                        <p>The status of your items has been updated.</p>
                                                    </singleline>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- End Title -->
                                        <!-- Message -->
                                        <table style="margin: 30px 0; width: 100%;" border="1">
                                            <thead>
                                            <tr>
                                                <th style="padding: 5px 10px;text-align: left;">Item Name</th>
                                                <th style="padding: 5px 10px;text-align: center;">Item status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($items as $item)
                                                @if(!is_null($item->status))
                                                <tr>
                                                    <td style="padding: 5px 10px;text-align: left;"> {{  $item->title != "" ? $item->title : $item->url }} </td>
                                                    <td style="padding: 5px 10px;text-align: center;">{{ optional($item->status)->title  }}</td>
                                                </tr>
                                                @endif
                                            @endforeach
                                            </tbody>
                                        </table>

                                        <table class="row" width="500" border="0" cellpadding="0" cellspacing="0"
                                               align="center" style="width:500px;max-width:500px;">
                                            <tr>
                                                <td align="center" valign="middle" style="">
                                                    <table class="centerFloat" border="0" align="center" cellpadding="0"
                                                           cellspacing="0">
                                                        <tr>
                                                            <td class="contBtn" align="center"
                                                                style="font-family:'Open Sans',Arial,Helvetica,sans-serif;color:#FFFFFF;font-size:12px;line-height:20px;font-weight:700;letter-spacing:0.5px;text-align:center;background-color:#aed138;border-radius:45px;padding: 8px 30px 8px 30px;display:inline-block;">
                                                                <a href="{{ config('configuration.front_end_url') . "/user/$order->user_id/order-details/$order->id" }}"
                                                                   style="text-decoration:none; padding: 8px 15px; color: #fff; border-radius: 15px;">View
                                                                    details</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>

                                        <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0" style="width:100%;max-width:100%;">
                                            <tr>
                                                <td align="center" valign="middle">&nbsp;</td>
                                            </tr>
                                        </table>

                                        <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0" style="width:100%;max-width:100%;">
                                            <tr>
                                                <td class="imgResponsive" align="center" valign="middle" style="padding:0;">
                                                    <singleline style="text-align: left;">
                                                        <p style="line-height: 1.4; font-weight: normal">We are here to help (Call-  +88 096 1770 7707 or visit us online for expert assistance).
                                                            Our guarantee (Your satisfaction is 100% guaranteed. See our Returns and Exchanges policy)</p>
                                                    </singleline>
                                                </td>
                                            </tr>
                                        </table>


                                    </td>
                                </tr>
                            </table>
                            <!-- E-mail Container Section Close // -->
                        </td>
                    </tr>
                </table>
                <!-- Bg Color Close // -->
            </td>
        </tr>
    </table>
    <!-- Image Column Section Close // -->
@endsection

<style>
    .items table tr th{
        border: 1px solid #ddd;
    }
    .items tr td{
        border: 1px solid #ddd;
    }
</style>