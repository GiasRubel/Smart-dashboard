@extends('layouts.app')

@section('content')
    <div class="card-group mb-0">
        <div class="card p-4">
            <div class="card-body dashboard-login">
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>

                @if(!$errors->isEmpty())
                    <span role="alert" style="color: red" >
                        @foreach($errors->all() as $error)
                            <strong>{{$error}}</strong>
                        @endforeach
                    </span>
                @endif

                <form method="POST" action="{{ route('login') }}">
                    <div class="input-group mb-3">
                        <span class="input-group-addon"><i class="icon-user"></i></span>
                        <input type="text" name="emailOrMobile" class="form-control" placeholder="email">
                    </div>

                    <div class="input-group mb-4">
                        <span class="input-group-addon"><i class="icon-lock"></i></span>
                        <input type="password" name="password" class="form-control" placeholder="Password">
                        @if ($errors->has('password'))
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                        @endif
                    </div>
                    <div class="input-group mb-4">
                        <input class="input-group-addon" type="checkbox" name="remember"
                               id="remember" {{ old('remember') ? 'checked' : '' }}>

                        <label for="remember">
                            {{ __('Remember Me') }}
                        </label>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <button type="submit" class="btn btn-primary px-4"> {{ __('Login') }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
            <div class="card-body text-center">
                <div>
                    {{--<h2>Sign up</h2>--}}
                    {{--<a href="{{route('register') }}">--}}
                        {{--<button type="button" class="btn btn-primary active mt-3">Register Now!</button>--}}
                    {{--</a>--}}
                    <a href="https://shopnshipbd.com/">
                        <img src="{{ asset('images/logo/logo.png') }}" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
@endsection
