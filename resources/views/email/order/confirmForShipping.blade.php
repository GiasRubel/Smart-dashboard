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
                                                        {{--<h3 style="text-align: center; padding: 15px 0;">The status of your order has been updated.</h3>--}}
                                                        <strong style=" float: left; padding: 10px 0;">Dear {{ $user->name }}</strong><br>
                                                        <p>Thanks for your order. We have received your cash payment regarding your order. Your order will be delivered to you within our estimated delivery time.</p>
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
                                                <th style="padding: 5px 10px;text-align: center;">Product price</th>
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
                                                    <td style="padding: 5px 10px;text-align: center;">{{  optional($item->itemPrice)->price }}</td>
                                                </tr>
                                                @endforeach
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
                                                    <td colspan="3" style="padding: 5px 10px; font-weight: 600; text-align: center;">Grand price </td>
                                                    <td colspan="1" style="padding: 5px 10px; font-weight: 600;text-align: center;">${{ number_format($order->master_price, 2, '.', '') }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--End Message -->

                                        <table class="row" width="500" border="0" cellpadding="0" cellspacing="0"
                                               align="center" style="width:500px;max-width:500px;">
                                            <tr>
                                                <td class="contDescription centerText" align="center" valign="middle"
                                                    style="font-family:'Montserrat',Arial,Helvetica,sans-serif;color:#191919;line-height:36px;font-weight:700;letter-spacing:0px;padding:0;padding-bottom:20px;">
                                                    <singleline>
                                                        <a href="{{ config('configuration.front_end_url') ."/user/$order->user_id/order-details/$order->id" }}" style="text-decoration:none; padding: 8px 15px; background:#e4425c; font-size: 16px; color: #fff; border-radius: 15px;">View full details</a>
                                                    </singleline>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="contDescription centerText" align="center" valign="middle"
                                                    style="font-family:'Open Sans',Arial,Helvetica,sans-serif;color:#939393;font-size:14px;line-height:22px;font-weight:400;letter-spacing:0px;padding:0;padding-bottom:40px;">
                                                    <singleline>
                                                        We are here to help (Call-  +88 096 1770 7707 or visit us online for expert assistance).
                                                        Our guarantee (Your satisfaction is 100% guaranteed. See our Returns and Exchanges policy).
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

<style scoped>
    .items table tr th{
        border: 1px solid #ddd;
    }
    .items tr td{
        border: 1px solid #ddd;
    }
</style>