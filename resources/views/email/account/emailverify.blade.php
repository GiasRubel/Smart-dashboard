@extends('email.layout.account')

@section('image')
    <img src="{{asset('email/images/profile.png')}}" alt="#"
         border="0"
         width="160"
         style="display:block;border:0;width:100%;max-width: 450px;margin: 15px 0;">
@endsection

@section('heading')
    {{__('Email reverification email.')}}
@endsection

@section('message')
    <p style="display: block !important;">
        <singleline>
            {!! __('account.email.reverify_email.content') !!}
        </singleline>
    </p>
@endsection

@section('button')
    <a href="{{ $redirect?$redirect.'?token='.$token:route('user.verify',['token'=>$token])}}"
       target="_blank"
       style="color:#FFFFFF;text-decoration:none;">
        <singleline>{{__('account.email.reverify_email.verify_button')}}</singleline>
    </a>
@endsection

@section('footer')
    <p style="display: block !important; padding-top:20px !important;">
        <singleline>
            {!! __('account.email.reverify_email.footer') !!}
        </singleline>
    </p>
@endsection

