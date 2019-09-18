@extends('email.layout.account')

@section('image')
    <img src="{{asset('email/images/notification-password.png')}}"
         alt="Notification Password" border="0"
         width="450"
         style="display:block;border:0;width:100%;max-width: 450px;margin: 15px 0;">
@endsection

@section('heading')
    {{__('Forgot Your Password')}}?
@endsection

@section('message')
    <singleline>
        <strong>{{__('Hello')}}
            ! {{$user['name']}}</strong>, {!! __('account.email.forgetPassword') !!}
    </singleline>
@endsection

@section('button')
    <a href="{{url()->to($redirect.'?token='.$user->verifyUser()->orderBy('id','desc')->first()->token.'&uid='.$user->id)}}"
       target="_blank"
       style="color:#FFFFFF;text-decoration:none;">
        <singleline>{{__('account.email.forget_password_button')}}</singleline>
    </a>
@endsection
