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
                                                        <strong style=" float: left; padding: 10px 0;">Dear {{ $user->name }}</strong><br>
                                                        <p>
                                                            @if($gateWay != "CASH")
                                                                Thank you for your payment. We have successfully received your payment.
                                                            @else
                                                                Thank you for your shopping from ShopNShipBD. To confirm your partial payment, please submit the cash receipt.

                                                            @endif
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
                                                        {{
                                                        isset($charge["bank_tran_id"]) ?
                                                         substr($charge["bank_tran_id"], -4)
                                                         : substr($charge["id"], -4)
                                                          }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600; text-align: center;">Total partial amount</td>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600;text-align: center; ">
                                                        {{ $currency }}{{ number_format($total_custom_amount * $convertion_rate, 2, '.', '') }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600; text-align: center;">Gateway charge amount</td>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600;text-align: center; ">
                                                        {{ $currency }}{{ number_format(!empty($gateWayCharge) ? $gateWayCharge : 0.00, 2, '.', '') }}
                                                    </td>
                                                </tr>
                                                @php
                                                    $devider = $gateWay == 'STRIPE' ? 100 : 1;
                                                @endphp
                                                <tr>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600; text-align: center;">Total paid</td>
                                                    <td colspan="2" style="padding: 5px 10px; font-weight: 600;text-align: center; ">
                                                        {{ $currency }}{{ number_format(($charge["amount"]/$devider), 2, '.', '') }}
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <!--End Message -->
                                        @endif

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