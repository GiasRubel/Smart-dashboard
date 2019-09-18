@extends('email.layout.account')

@section('image')
    <img src="{{asset('email/images/notification-password.png')}}"
         alt="Notification Password" border="0"
         width="450"
         style="display:block;border:0; width:100%; max-width: 450px; margin: 15px 0;">
@endsection

@section('heading')
    {{__('Verify Your Browser')}}?
@endsection

@section('message')
    <singleline>
        <strong>{{__('Hello')}}
            ! {{$user['name']}}</strong>, {!! __('account.email.browserVerification') !!}
    </singleline>
@endsection

@section('button')
    <a href="{{$redirect?$redirect.'?token='.$token.'&user='.$user->id.'&browser='.$browser->id:route('user.verify.browser',['token'=>$token,'user'=>$user,'browser'=>$browser])}}"
       target="_blank"
       style="color:#fff;text-decoration:none;font-size: 14px;">
        <singleline>{{__('account.email.browser_verify_button')}}</singleline>
    </a>
@endsection

