<?php
return [
    'failed' => 'These credentials do not match our records.',
    'throttle' => 'Too many login attempts. Please try again in :seconds seconds.',

    'email' => [
        'welcome' => [
            'content' => 'Thanks for registering with ShopnShipbd!. Now, you will hear about all the latest promotions, be able to manage your orders better and periodically get discount voucher codes for our campaigns. To get all access you need confirmation. Please click below link for confirmation',
            'footer' => 'For more please come to visit our <a href="' . config('app.url') . '">Contact Us</a> for the latest tips and frequently asked questions. Should you want to contact us.',
            'confirm_button' => 'Confirm Now'
        ],

        'reverify_email' => [
            'content' => 'Seems you have missed your first verification email!!! No problem, you can verify your email again by resending the link again.  Click the below link for getting the verification link again. ',
            'footer' => 'The link will be expired within 2 hours.  Don\'t forget to verify your link this time. Stay with.<a href="' . config('app.url') . ' ">' . config('app.name') . '</a>',
            'verify_button' => 'Verify Email',
        ],
        'forgetPassword' => 'Seems like you forgot your password. No need to worry. To reset your password, click the button below.
                         Reset Password.',
        'forget_password_button' => 'Reset Password',
        'browserVerification' => 'Someone just used your password to try to login to your shopnshipbd account from an unrecognized device. If this was you, please verify yourself by clicking the following condition. “I was the person who tries to log in from another device.” If this was not you, please secure your account, as someone else may be accessing it. Thanks.',
        'browser_verify_button' => 'Browser Verify'

    ],
    'login' => [
        'user_not_register' => 'Seems you are not registered with us, please register yourself first!',
        'not_match' => 'User email or password incorrect!',
        'notify_email_verify_first' => 'A verification link is sent to your email. Please verify your email first then proceed.',
        'notify_browser_first' => 'We have detected a login into your account from an unrecognized device. For security purpose, an email has been sent to the address on file regarding this login. Please verify the security email.',
        'login_success' => 'You are successfully logged in.',
        'not_verify_email_login' => 'Please verify your email first, then continue to login.',
        'not_verify_browser_login' => 'Please check your email to verify your browser, then continue to login.',
        'email_verified_login' => 'Your email is verified and you\'re successfully logged in.',
        'browser_verified_login' => 'Your browser is verified and you\'re successfully logged in.',
        'resend_verify_email' => 'A verification link has been sent to your email for verifying your account.',
        'email_verified' => 'Your Email is already verified',
        'is_admin' => 'Only admin can access here!',
        'browser_verified' => 'Your Browser has been verified',
        'logout'=>'You are successfully logged out'
    ],
    'registration' => [
        'notify_verify_email' => 'A verification link has been sent to your email address. Please click on the link that has just been sent to your email account to verify your email and continue the login process.',

    ],
    'password' => [
        'reset' => [
            'success' => 'Your password is changed successfully.',
            'incorrect' => 'Your previous password is incorrect.',
            'send_email' => 'A verification link has been sent to your email to reset your password!',
            'resend_email' => 'Please check your email again to reset your password.',
            'repeat_send_email' => 'A verification link has been sent to your email already, Please check your email.',
            'browser_verified' => 'Your Browser has been verified',
            'email_verified' => 'Your Email has been verified',

        ],
        'changed' => [
            'success' => 'Your password is changed successfully.'
        ]

    ],
    'browser' => [

    ],
    'token_expired' => 'Your verification time is already expired, please resend it again!',

    'orderConfirmation' => 'Your order is confirmed. Your order has been received and is now being processed. Your order details are shown below for your reference. View your order details Item ordered Item details with image Subtotal: Shipping: Sales Tax: Order Total: Order & Shipping Info Order Details Order No: Shipping method: Order date: Shipping Address User address We are here to help (Call-0000 or visit us online for expert assistance.) Our guarantee (Your satisfaction is 100% guaranteed. See our Returns and Exchanges policy.). ',
    'newsletter' => 'WELCOME
                    Thank you for signing up to our newsletter.
					Now you will be first to hear about our latest arrivals, new collections, exclusive promotions and so much more.
					Stay with us and enjoy your shopping. Happy Shopping.
					Shop Now.',
    'latestProduct' => 'GRAB THE LATEST TRENDS TODAY
	                    NEW SHIPNSHOP COLLECTION				
						Shop Online
						New for this season.',
    'subscription' => 'Welcome
                       Thank you for your subscription.
					   Now you will be first to hear about our latest arrivals, new collections, exclusive promotions and so much more.
					   Stay with us and enjoy your shopping. Happy Shopping.
					   Shop Now.',
    'unsubscription' => 'You have successfully unsubscribed.
	                     You have successfully unsubscribed from email communication of ShipnShopbd.
						 If you did this in error, you may re-subscribe by checking the below button.
						 Re-subscribe.',
    'offer' => 'Great online shopping festival!!!
                Make this Diwali even more special and colorful	
			    Enjoy the festival season with special offers
 				Drive into the collection of our most versatile store.	
				Shop now
				More exciting offers for you
				Use code:0000, get 25%extra.
				Apply code-shop now.',
    'confirmation' => 'Help us to secure your ShopnShipBD.com account by verifying your email address. 		
                       Please click below to verify your email address.
					   Verify My Email Address 
					   You\'re receiving this email because you recently created an account or changed your email address at 
					   ShopnShipBD . com . If this wasn\'t you, you can safely ignore this email.',
    'orderStatus' => 'Dear user,
                      Order Number:
 					  Order Date:
                      Payment Method:
					  Order Status:
					  The status of your order has been updated, as shown above.
					  You can check on the status of your order at any time by going to My Orders or (order option on website) in your account. 
					  If you have any questions regarding to this order, or the items relates to, please contact at info@shopnshipbd.com .',
    'priceIncrease' => 'We regret that rapidly rising costs for taxes and weight of your products necessitate our raising the price of your product 10%. We have made every attempt to avoid the increase, but we refuse to compromise on quality. This is our only resource. We think you will agree that the quality of Shipnshopbd should not be sacrificed. We look forward to another year of association with you.				  
                        Your previous order status:
						Subtotal:
						Shipping:
						Sales Tax:
						Order Total:
						Your current order status:
						Subtotal:
						Shipping:
						Sales Tax:
						Order Total:',
];
