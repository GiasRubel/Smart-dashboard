<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <!--[if (gte mso 9)|(IE)]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="date=no">
    <meta name="format-detection" content="address=no">
    <meta name="format-detection" content="email=no">
    <title>{{config('app.name')}}</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>

    <style type="text/css">
        body{
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        /*------ Client-Specific Style ------ */
        @-ms-viewport {
            width: device-width;
        }

        table {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        table td {
            border-collapse: collapse;
        }

        img {
            -ms-interpolation-mode: bicubic;
            display: block;
            width: auto;
            max-width: auto;
            height: auto;
            margin: auto;
        }

        p, a, li, td, blockquote {
            mso-line-height-rule: exactly;
        }

        p, a, li, td, body, table, blockquote {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        #outlook a {
            padding: 0;
        }

        .ReadMsgBody {
            width: 100%;
            background-color: #ffffff;
        }

        .ExternalClass {
            width: 100%;
        }

        .ExternalClass, .ExternalClass div, .ExternalClass font, .ExternalClass p, .ExternalClass span, .ExternalClass td, img {
            line-height: 100%;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        u + #body a {
            color: inherit;
            font-family: inherit;
            text-decoration: none;
            font-size: inherit;
            font-weight: inherit;
            line-height: inherit;
        }

        .mcnPreviewText {
            display: none !important;
        }

        /*------ Reset Style ------ */
        table {
            border-spacing: 0 !important;
        }

        h1, h2, h3, h4, h5, h6 {
            display: block;
            Margin: 0;
            padding: 0;
        }

        strong {
            font-weight: bold !important;
        }

        p {
            margin: 0 !important;
            padding: 0 !important;
            display: inline-block !important;
            font-family: inherit !important;
        }

        img, a img {
            border: 0;
            height: auto;
            outline: none;
            text-decoration: none !important;
        }

        body, #bodyTable, #bodyCell {
            margin: 0px !important;
            padding: 0px !important;
            display: block !important;
            min-width: 100% !important;
            width: 100% !important;
            -webkit-text-size-adjust: none;
            -webkit-text-resize: 100%;
            text-resize: 100%;
        }

        .appleLinks a {
            color: #c2c2c2 !important;
            text-decoration: none !important;
        }

        span.preheader {
            display: none !important;
        }
    </style>

    <style type="text/css">

        @media screen and(max-width: 767px) {
            .minimize-space{
                margin-top: -20px;
            }
        }

        /*------ Media Width 599px ------ */
        /*Responsive*/
        @media screen and (max-width: 599px) {
            table.hideMobile, tr.hideMobile, td.hideMobile, br.hideMobile {
                display: none !important;
            }

            table.mobilePadding {
                margin: 15px 0 !important;
            }

            table.row, div.row {
                width: 100% !important;
                max-width: 100% !important;
            }

            table.centerFloat, td.centerFloat {
                float: none !important;
            }

            td.menuContainer {
                text-align: center !important;
            }

            td.autoHeight {
                height: auto !important;
            }

            td.height200 {
                height: 200px !important;
            }

            td.borderRounded {
                border-radius: 6px !important;
            }

            td.borderNone {
                border: none !important;
            }

            td.imgResponsive img {
                width: 150px !important;
                max-width: 100% !important;
                height: auto !important;
                margin: auto;
            }

            td.centerText {
                text-align: center !important;
            }

            td.containerPadding {
                width: 100% !important;
                padding-left: 15px !important;
                padding-right: 15px !important;
            }

            td.spaceControl {
                height: 15px !important;
                font-size: 15px !important;
                line-height: 15px !important;
            }
        }
    </style>
</head>

<body style="margin-top:0; margin-bottom:0;padding-top:0;padding-bottom:0;width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">

<!-- Top Msg Section Open //-->
@include('email.layout.partials.top-message')
<!-- Top Msg Section Close //-->

<!-- Header Light Section Open // -->
@include('email.layout.partials.header')
<!-- Header Light Section Close // -->

<!-- Image Column Section Open // -->
@yield('content')
<!-- Image Column Section Close // -->

<!-- Fotter Light Section Open // -->
@include('email.layout.partials.footer')
<!-- Fotter Light Section Close // -->

</body>
</html>
