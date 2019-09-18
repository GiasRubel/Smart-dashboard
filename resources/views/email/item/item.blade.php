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
                                                        <p style="padding: 30px;font-weight: bold;">
                                                            Dear {{ $user->name }}
                                                        </p>
                                                        <h5 style="padding: 30px 0;font-size: 16px;font-weight: normal;">
                                                            We have received your order. But your ordered item’s specification has been changed. Your updated item’s
                                                            specification is given below:
                                                        </h5>
                                                        <h3 style="text-align:center;">The status of your order has been updated, as shown above.</h3>
                                                        <br><br>
                                                    </singleline>
                                                </td>
                                            </tr>
                                            <tr>
                                                <table style="margin: 30px 0;width: 100%;" border="1">
                                                    <thead>
                                                    <div class="items">
                                                        <tr>
                                                            <th colspan="2" style="text-align:left;padding: 5px 10px;">Item name</th>
                                                            <th style="text-align:center;padding: 5px 10px;">Item weight</th>
                                                            <th style="text-align:center;padding: 5px 10px;">Quantity</th>
                                                            <th style="text-align:right;padding: 5px 10px;">Price</th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2" style="text-align:left;padding: 5px 10px;">{{ $items->title ?? $items->url  }}</td>
                                                            <td style="text-align:center;padding: 5px 10px;">{{ $items->item_weight_kg  }} kg</td>
                                                            <td style="text-align:center;padding: 5px 10px;">{{ optional($items->itemPrice)->quantity }}</td>
                                                            <td style="text-align:right;padding: 5px 10px;">${{ number_format(optional($items->itemPrice)->price, 2, '.', '') }}</td>
                                                        </tr>
                                                    </div>
                                                    </thead>
                                                </table>
                                            </tr>
                                            <br><br>
                                            <tr>
                                                <td>
                                                    <singleline>
                                                        <p style="padding: 30px; margin: 10px 0 !important;">
                                                            We are here to help (Call- +88 096 1770 7707 or visit us online for expert assistance).
                                                            Our guarantee (Your satisfaction is 100% guaranteed. See our Returns and Exchanges policy).
                                                        </p>
                                                    </singleline>
                                                </td>
                                            </tr>
                                            <tr style="margin: 30px 0;">
                                                <td style="margin-bottom:50px; clear:both;padding: 0 0 30px;">
                                                    <singleline>
                                                        <p style="padding: 30px; margin-bottom: 50px;">
                                                            You can check on the status of your order at any time by going to My Orders or (Orders) in your account dashboard.
                                                            If you have any questions regarding to this order, or the items relates to, please contact at
                                                            info@shopnshipbd.com.
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

<style scoped>
    .items table tr th{
        border: 1px solid #ddd;
    }
    .items tr td{
        border: 1px solid #ddd;
    }
</style>