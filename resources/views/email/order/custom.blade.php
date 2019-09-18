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
                                                        <h3 style="text-align:center; padding: 15px 30px !important;">{{ $data["title"] }}</h3>
                                                        <p style="padding: 0 30px !important;; margin: 10px 0 !important;">
                                                            {!!  nl2br($data["message"]) !!}
                                                        </p>
                                                        <br><br>
                                                    </singleline>
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