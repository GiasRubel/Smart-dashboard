@extends('email.layout.master')
@section('content')
    <!-- Image Column Section Open // -->
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

                                        <table>
                                            <tr>
                                                <td>
                                                    <singleline>
                                                        <p style="padding: 30px;line-height: 1.5;">
                                                            Dear {{ $user->name }},<br>
                                                            Order Number: <a
                                                                    href="{{ url()->to(config('configuration.front_end_url') ."/user/$order->user_id/order-details/$order->id") }}">#{{ $order->order_number ?? '#1' }}</a><br>
                                                            Order
                                                            Date: {{ date('F jS, Y', strtotime($order->order_date ?? date('Y-m-d'))) }}
                                                            <br>
                                                            Payment Method: {{ optional($order->paymentmethod)->title }}
                                                            <br>
                                                            <strong style="color: #e4425c; font-weight: bold">
                                                                Order Status: {{ $status->title }}
                                                            </strong>
                                                        </p>
                                                        <br><br>
                                                        <h3 style="text-align:left; padding: 15px 0 !important;">The
                                                            status of your order has been updated, as shown above.</h3>
                                                        <br>
                                                    </singleline>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center">
                                                    <a href="{{ url()->to(config('configuration.front_end_url') . "/user/$order->user_id/order-details/$order->id") }}"
                                                       style="text-decoration:none; padding: 8px 15px; background:#e4425c; color: #fff; border-radius: 15px;">View
                                                        details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <singleline>
                                                        <p style="padding: 15px 0 !important;; margin: 10px 0 !important;">
                                                            You can check on the status of your order at any time by
                                                            going to Order's section in your
                                                            account.
                                                            If you have any questions regarding to this order, or the
                                                            items relates to, please contact at info@shopnshipbd.com.
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