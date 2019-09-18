@extends('email.layout.account')

@section('image')
    <img src="{{asset('email/images/profile.png')}}" alt="#"
         border="0"
         width="160"
         style="display:block;border:0;width:100%;max-width:160px">
@endsection

@section('heading')
    {{__('Welcome')}}! {{$user['name']}}
@endsection

@section('message')
    <p style="display: block !important;">
        <singleline>
            {!! __('account.email.welcome.content') !!}
        </singleline>
    </p>
@endsection

@section('button')
    <a href="{{ $redirect?$redirect.'?token='.$token:route('user.verify',['token'=>$token])}}"
       target="_blank"
       style="color:#FFFFFF;text-decoration:none;">
        <singleline>{{__('account.email.welcome.confirm_button')}}</singleline>
    </a>
@endsection

@section('footer')
    <p style="display: block !important; padding-top:20px !important;">
        <singleline>
            {!! __('account.email.welcome.footer') !!}
        </singleline>
    </p>
@endsection

