@extends('email.layout.master')
@section('content')
    <!-- Image Column Section Open // -->
    <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0" style="width:100%;max-width:100%;"
           xmlns="">
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

                                        <table>
                                            <tr>
                                                <td>
                                                    <singleline>
                                                        <p style="padding: 0 30px 0 !important;; margin: 10px 0 !important;">
                                                            Dear {{ $user->name }}
                                                        </p>
                                                        <h3 style="text-align:center; padding: 15px 30px !important;">Your order has been canceled</h3>
                                                        <p style="padding: 0 30px !important;; margin: 10px 0 !important;">
                                                            We did not receive any payment for your ordered items within 5 days. For that reason, your order has been canceled automatically
                                                        </p>
                                                        <br><br>
                                                    </singleline>
                                                </td>
                                            </tr>
                                            <br><br>
                                            <tr>
                                                <td align="center" style="padding-bottom: 10px;">
                                                    <a href="{{ url()->to(config('configuration.front_end_url') ."/user/$order->user_id/order-details/$order->id") }}" style="text-decoration:none; padding: 8px 15px; background:#e4425c; color: #fff; border-radius: 15px;">View full details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <singleline>
                                                        <p style="padding: 0 30px 30px 0px !important;; margin: 10px 0 !important;">
                                                            We are here to help (Call - +88 096 1770 7707  or visit us online for expert assistance).
                                                            Our guarantee (Your satisfaction is 100% guaranteed. See our Returns and Exchanges policy).
                                                        </p>
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