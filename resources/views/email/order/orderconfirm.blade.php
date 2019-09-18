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
                                        @if($order && $order->items->count()>0)
                                            @foreach($order->items as $item)
                                                <table class="row" width="600" border="0" cellpadding="0"
                                                       cellspacing="0"
                                                       align="center"
                                                       style="width:600px;max-width:600px; margin: 0 0 30px 0;">
                                                    <tbody>
                                                    <tr>
                                                        <td align="center" valign="middle"
                                                            style="font-size:0;padding:0">

                                                            <!--[if (gte mso 9)|(IE)]>
                                                            <table border="0" cellpadding="0" cellspacing="0">
                                                                <tr>
                                                                    <td valign="middle"><![endif]-->

                                                            <div class="row"
                                                                 style="display:inline-block;max-width:290px;vertical-align:top;width:100%">

                                                                <!-- Image 1 Column // -->
                                                                <table class="row" border="0" width="290" align="left"
                                                                       cellpadding="0" cellspacing="0"
                                                                       style="width:290px;max-width:290px;">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td align="center" valign="middle">

                                                                            <table border="0" width="100%"
                                                                                   align="center"
                                                                                   cellpadding="0" cellspacing="0"
                                                                                   style="width:100%;max-width:100%;">
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td class="imgResponsive"
                                                                                        align="center"
                                                                                        valign="middle">
                                                                                        <a href="{{$item->url}}"
                                                                                           style="text-decoration:none;border:0;">
                                                                                            <img src="{{$item->imageUrl}}"
                                                                                                 alt="#" border="0"
                                                                                                 width="150"
                                                                                                 style="display:block;border:0;width:100%;max-width:150px">
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>

                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>

                                                            </div>

                                                            <!--[if (gte mso 9)|(IE)]></td>
                                                            <td valign="middle"><![endif]-->

                                                            <div class="row"
                                                                 style="display:inline-block;max-width:20px;vertical-align:top;width:100%">

                                                                <!-- Gap Section Open // -->
                                                                <table class="row" width="20" border="0" cellpadding="0"
                                                                       cellspacing="0" align="left"
                                                                       style="width:20px;max-width:20px;">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td align="center" valign="middle" height="30"
                                                                            style="font-size:30px;line-height:30px;">
                                                                            &nbsp;
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>

                                                            </div>

                                                            <!--[if (gte mso 9)|(IE)]></td>
                                                            <td valign="middle"><![endif]-->

                                                            <div class="row"
                                                                 style="display:inline-block;max-width:290px;vertical-align:top;width:100%">

                                                                <!-- Text 2 Column // -->
                                                                <table class="row" border="0" width="290" align="left"
                                                                       cellpadding="0" cellspacing="0"
                                                                       style="width:290px;max-width:290px;">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td align="center" valign="middle">

                                                                            <table border="0" width="100%"
                                                                                   align="center"
                                                                                   cellpadding="0" cellspacing="0"
                                                                                   style="width:100%;max-width:100%;">
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td class="contTitle centerText"
                                                                                        align="left" valign="middle"
                                                                                        style="font-family:'Montserrat',Arial,Helvetica,sans-serif;color:#191919;font-size:18px;line-height:26px;font-weight:600;letter-spacing:0;padding:0;padding-bottom:20px;">
                                                                                        {{$item->title}}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="contDescription centerText"
                                                                                        align="left" valign="middle"
                                                                                        style="font-family:'Open Sans',Arial,Helvetica,sans-serif;color:#939393;font-size:14px;line-height:22px;font-weight:400;letter-spacing:0;padding:0;padding-bottom:20px">
                                                                                        <h3 style="color: #e4425c">
                                                                                            Price: {{$order->currencies->sign}}{{$item->itemPrice->item_price}}</h3>
                                                                                        <h4>Quantity: {{$item->qty}}</h4>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" valign="middle">
                                                                                        <table class="centerFloat"
                                                                                               border="0"
                                                                                               align="left"
                                                                                               cellpadding="0"
                                                                                               cellspacing="0">
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td class="contLink"
                                                                                                    align="center"
                                                                                                    style="font-family:'Open Sans',Arial,Helvetica,sans-serif;color:#1DD2F0;font-size:12px;line-height:20px;font-weight:700;letter-spacing:0.5px;text-align:center;text-decoration:none;background-color:transparent;display:inline-block;">
                                                                                                    <a href="{{$item->url}}"
                                                                                                       target="_blank"
                                                                                                       style="color:#1DD2F0;text-decoration:none;">Read
                                                                                                        more</a>
                                                                                                </td>
                                                                                            </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>

                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>

                                                            </div>

                                                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->

                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                        @endforeach
                                    @endif

                                    <!-- Space Open -->
                                        <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0"
                                               style="width:100%;max-width:100%;">
                                            <tr>
                                                <td align="center" valign="middle" height="80"
                                                    style="font-size:80px;line-height:80px;">&nbsp;
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- Space Close -->

                                        <table class="row" width="500" border="0" cellpadding="0" cellspacing="0"
                                               align="center" style="width:500px;max-width:500px;">
                                            <tr>
                                                <td class="contDescription centerText" align="center" valign="middle"
                                                    style="font-family:'Montserrat',Arial,Helvetica,sans-serif;color:#191919;font-size:28px;line-height:36px;font-weight:700;letter-spacing:0;padding:0;padding-bottom:20px;">
                                                    <singleline>
                                                        Your order is confirmed.
                                                    </singleline>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="contDescription centerText" align="center" valign="middle"
                                                    style="font-family:'Open Sans',Arial,Helvetica,sans-serif;color:#939393;font-size:14px;line-height:22px;font-weight:400;letter-spacing:0;padding:0;padding-bottom:40px;">
                                                    <singleline>
                                                        Your order has been received and is now being processed. Your
                                                        order
                                                        details are shown below for your reference.
                                                    </singleline>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" valign="middle" style="">
                                                    <table class="centerFloat" border="0" align="center" cellpadding="0"
                                                           cellspacing="0">
                                                        <tr>
                                                            <td class="contBtn" align="center"
                                                                style="font-family:'Open Sans',Arial,Helvetica,sans-serif;color:#FFFFFF;font-size:12px;line-height:20px;font-weight:700;letter-spacing:0.5px;text-align:center;background-color:#aed138;border-radius:45px;padding: 8px 30px 8px 30px;display:inline-block;">
                                                                <a href="http://example.com" target="_blank"
                                                                   style="color:#FFFFFF;text-decoration:none;">
                                                                    <singleline>VIEW INVOICE</singleline>
                                                                </a>
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
                                                <td align="center" valign="middle" height="80"
                                                    style="font-size:80px;line-height:80px;">&nbsp;
                                                </td>
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
@endsection