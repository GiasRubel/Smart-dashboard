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
                                                            A new order has been proceeded by {{ $customer->name }} <br>
                                                            Order number: {{ $order->order_number }}
                                                        </h3><br>
                                                        {{--<strong style=" float: left; padding: 10px 0;">Dear Willies</strong>--}}
                                                        <p>Customer email: {{ $customer->email  }}</p>
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
                                                <th style="padding: 5px 10px;text-align: center;">Weight</th>
                                                <th style="padding: 5px 10px;text-align: center;">Quantity</th>
                                                <th style="padding: 5px 10px;text-align: right;">Price</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($order->items as $item)
                                            <tr>
                                                <td style="padding: 5px 10px;text-align: left;">
                                                    {{  $item->title ?? $item->url }}
                                                </td>
                                                <td style="padding: 5px 10px;text-align: center;">{{ $item->item_weight_kg }} kg</td>
                                                <td style="padding: 5px 10px;text-align: center;">{{  optional($item->itemPrice)->quantity }}</td>
                                                <td style="padding: 5px 10px;text-align: right;">${{ number_format(optional($item->itemPrice)->price, 2, '.', '') }}</td>
                                            </tr>
                                            @endforeach
                                            <tr>
                                                <td colspan="3" style="padding: 5px 10px; font-weight: 600; text-align: center;">Product Cost </td>
                                                <td colspan="1" style="padding: 5px 10px; font-weight: 600;text-align: center;">${{ number_format($order->total_price, 2, '.', '') }}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" style="padding: 5px 10px; font-weight: 600; text-align: center;">US Taxes</td>
                                                <td colspan="1" style="padding: 5px 10px; font-weight: 600;text-align: center;">${{ number_format($order->tax_usa, 2, '.', '') }}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" style="padding: 5px 10px; font-weight: 600; text-align: center;">International Shipping </td>
                                                <td colspan="1" style="padding: 5px 10px; font-weight: 600;text-align: center;">${{ number_format($order->shipping_cost, 2, '.', '') }}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" style="padding: 5px 10px; font-weight: 600; text-align: center;">Local Customs and Taxes </td>
                                                <td colspan="1" style="padding: 5px 10px; font-weight: 600;text-align: center;">${{ number_format($order->tax_bd, 2, '.', '') }}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" style="padding: 5px 10px; font-weight: 600; text-align: center;">Service Charge </td>
                                                <td colspan="1" style="padding: 5px 10px; font-weight: 600;text-align: center;">${{ number_format($order->service_charge, 2, '.', '') }}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" style="padding: 5px 10px; font-weight: 600; text-align: center; border-top: 1px solid #e4425c;">Grand price</td>
                                                <td colspan="1" style="padding: 5px 10px; font-weight: 600;text-align: center; border-top: 1px solid #e4425c;">${{ number_format($order->master_price, 2, '.', '') }}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <!--End Message -->

                                        <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0"
                                               style="width:100%;max-width:100%;">
                                            <tr>
                                                <td align="center" valign="middle" height="80"
                                                    style="font-size:30px;line-height:40px;">&nbsp;</td>
                                            </tr>
                                        </table>
                                        <!-- Space Close -->

                                        <table class="row" width="500" border="0" cellpadding="0" cellspacing="0"
                                               align="center" style="width:500px;max-width:500px;">
                                            <tr>
                                                <td align="center" valign="middle" style="">
                                                    <table class="centerFloat" border="0" align="center" cellpadding="0"
                                                           cellspacing="0">
                                                        <tr>
                                                            <td align="center"
                                                                style="font-family:'Open Sans',Arial,Helvetica,sans-serif;color:#FFFFFF;font-size:12px;line-height:20px;font-weight:700;letter-spacing:0.5px;text-align:center;background-color:#aed138;border-radius:45px;padding: 8px 30px 8px 30px;display:inline-block;">
                                                                <a href="{{ url("dashboard/orders/list/show/$order->id") }}"
                                                                   style="text-decoration:none; padding: 8px 15px; background:#e4425c; color: #fff; border-radius: 15px;">View
                                                                    details</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>


                                        <!-- Space Open -->
                                        <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0"
                                               style="width:100%;max-width:100%;">
                                            <tr>
                                                <td align="center" valign="middle" height="20"
                                                    style="font-size:2px;line-height:30px;">&nbsp;</td>
                                            </tr>
                                        </table>
                                        <!-- Space Close -->

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