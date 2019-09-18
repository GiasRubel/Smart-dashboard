@extends('email.layout.master')
@section('content')
    <!-- Body Section // -->
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
                                                        <strong style=" float: left; padding: 10px 0;">Dear {{ $user->name }}</strong><br>
                                                        <p style="padding: 15px 0;font-size: 16px;font-weight: normal;">
                                                            Thank you for your shopping from ShopNShipBD.  We have received your payment for cash payment.
                                                        </p>
                                                    </singleline>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- End Title -->
                                    @if($gateWay != "CASH")
                                        <!-- Message -->
                                            <table style="margin: 30px 0; width: 100%;" border="1">
                                                <tbody>
                                                <tr>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600; text-align: center;">Transaction ID</td>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600;text-align: center; ">
                                                        {{ substr($charge->getTransId(), -4) }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600; text-align: center;">Order subtotal</td>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600;text-align: center; ">
                                                        {{ $currency }}{{ number_format(($order->total_price - $order->total_insurance) * 1, 2, '.', '') }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600; text-align: center;">Total US tax</td>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600;text-align: center; ">
                                                        {{ $currency }}{{ number_format($order->tax_usa * 1, 2, '.', '') }}
                                                    </td>
                                                </tr>
                                                @if($order->total_insurance > 0)
                                                    <tr>
                                                        <td colspan="2" style="padding: 5px 10px; font-weight: 600; text-align: center;">Total insurance</td>
                                                        <td colspan="2" style="padding: 5px 10px; font-weight: 600;text-align: center; ">
                                                            {{ $currency }}{{ number_format($order->total_insurance * 1, 2, '.', '') }}
                                                        </td>
                                                    </tr>
                                                @endif
                                                @if($order->total_gift > 0)
                                                    <tr>
                                                        <td colspan="2" style="padding: 5px 10px; font-weight: 600; text-align: center;">Total gift</td>
                                                        <td colspan="2" style="padding: 5px 10px; font-weight: 600;text-align: center; ">
                                                            {{ $currency }}{{ number_format($order->total_gift * 1, 2, '.', '') }}
                                                        </td>
                                                    </tr>
                                                @endif
                                                <tr>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600; text-align: center;">Shipping cost</td>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600;text-align: center; ">
                                                        {{ $currency }}{{ number_format($order->shipping_cost * 1, 2, '.', '') }}
                                                    </td>
                                                </tr>
                                                @if($order->items_shipping_cost > 0)
                                                    <tr>
                                                        <td colspan="2" style="padding: 5px 10px; font-weight: 600; text-align: center;">Items shipping cost</td>
                                                        <td colspan="2" style="padding: 5px 10px; font-weight: 600;text-align: center; ">
                                                            {{ $currency }}{{ number_format($order->items_shipping_cost * 1, 2, '.', '') }}
                                                        </td>
                                                    </tr>
                                                @endif
                                                <tr>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600; text-align: center;">Service charge</td>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600;text-align: center; ">
                                                        {{ $currency }}{{ number_format($order->service_charge * 1, 2, '.', '') }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600; text-align: center;">Gateway charge amount</td>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600;text-align: center; ">
                                                        {{ $currency }}{{ number_format($gateWayCharge, 2, '.', '') }}
                                                    </td>
                                                </tr>
                                                @php $devider = $gateWay == 'STRIPE' ? 100 : 1; @endphp
                                                <tr>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600; text-align: center;">Total paid</td>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600;text-align: center; ">
                                                        {{ $currency }}{{ number_format($order->total_price + $gateWayCharge, 2, '.', '') }}
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <!--End Message -->
                                    @endif
                                    <!--End Message -->

                                        <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0"
                                               style="width:100%;max-width:100%;">
                                            <tr>
                                                <td align="center" valign="middle" >
                                                    <a href="{{ url()->to(config('configuration.front_end_url') ."/user/$order->user_id/order-details/$order->id") }}" style="text-decoration:none; padding: 8px 15px; background:#e4425c; color: #fff; border-radius: 15px;">View full details</a>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- Space Close -->
                                        <!-- Space Open -->
                                        <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0"
                                               style="width:100%;max-width:100%;">
                                            <tr>
                                                <td align="center" valign="middle" >&nbsp;</td>
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
    <!-- End Body Section // -->
@endsection

<style scoped>
    .items table tr th{
        border: 1px solid #ddd;
    }
    .items tr td{
        border: 1px solid #ddd;
    }
</style>