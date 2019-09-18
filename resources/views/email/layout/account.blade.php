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

                                        <!-- Image Section -->
                                        <table border="0" width="100%" align="center" cellpadding="0"
                                               cellspacing="0"
                                               style="width:100%;max-width:100%; margin-top: -15px;">
                                            <tr>
                                                <td class="imgResponsive" align="center" valign="middle"
                                                    style="padding:0;">
                                                    <a href="{{ config('configuration.front_end_url') }}"
                                                       style="text-decoration:none;border:0">
                                                        @yield('image')
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Space Open -->
                                        <table border="0" width="100%" align="center" cellpadding="0"
                                               cellspacing="0"
                                               style="width:100%;max-width:100%;">
                                            <tr>
                                                <td align="center" valign="middle" height="10"
                                                    style="font-size:80px;line-height:10px;">&nbsp;
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- Space Close -->

                                        <table class="row" width="500" border="0" cellpadding="0" cellspacing="0"
                                               align="center" style="width:500px;max-width:500px;">
                                            <tr>
                                                <td class="contDescription centerText" align="center"
                                                    valign="middle"
                                                    style="font-family:'Montserrat',Arial,Helvetica,sans-serif;color:#191919;font-size:28px;line-height:36px;font-weight:700;letter-spacing:0;padding:0;padding-bottom:20px;">
                                                    <singleline>
                                                        @yield('heading')
                                                    </singleline>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="contDescription centerText" align="center"
                                                    valign="middle"
                                                    style="font-family:'Open Sans',Arial,Helvetica,sans-serif;color:#939393;font-size:14px;line-height:22px;font-weight:400;letter-spacing:0;padding:0;padding-bottom:30px;">
                                                    @yield('message')
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" valign="middle" style="">
                                                    <table class="centerFloat" border="0" align="center"
                                                           cellpadding="0"
                                                           cellspacing="0">
                                                        <tr>
                                                            <td class="contBtn" align="center"
                                                                style="font-family:'Open Sans',Arial,Helvetica,sans-serif;color:#FFFFFF;font-size:12px;line-height:20px;font-weight:700;letter-spacing:0.5px;text-align:center;background-color:#aed138;border-radius:45px;padding: 8px 30px 8px 30px;display:inline-block;">
                                                                @yield('button')
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>

                                            </tr>
                                            <tr>
                                                <td class="contDescription centerText" align="center"
                                                    valign="middle"
                                                    style="font-family:'Open Sans',Arial,Helvetica,sans-serif;color:#939393;font-size:14px;line-height:22px;font-weight:400;letter-spacing:0;padding:0;padding-bottom:40px;">
                                                    @yield('footer')
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
@endsection