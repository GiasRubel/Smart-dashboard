<?php

namespace App\Exceptions;

use App\Traits\ExceptionTrait;
use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    use ExceptionTrait;
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        \Illuminate\Auth\AuthenticationException::class,
        \Illuminate\Auth\Access\AuthorizationException::class,
        \Symfony\Component\HttpKernel\Exception\HttpException::class,
        \Illuminate\Database\Eloquent\ModelNotFoundException::class,
        \Illuminate\Session\TokenMismatchException::class,
        \Illuminate\Validation\ValidationException::class,
        \League\OAuth2\Server\Exception\OAuthServerException::class,

    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];


    public function report(Exception $exception)
    {
        parent::report( $exception );
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Exception $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {

        if ($request->expectsJson()) {
            return $this->apiException( $request, $exception );
        }

        return parent::render( $request, $exception );
    }

    protected function convertValidationExceptionToResponse(ValidationException $e, $request)
    {
        $errors = $e->validator->errors()->getMessages();
        if ($this->isFontEnd( $request )) {
            return $request->ajax() ? \response()->json( $errors, 422 ) : redirect()
                ->back()
                ->withInput( $request->input() )
                ->withErrors( $errors );
        }
        return $this->errorResponse( $errors, 400 );
    }

    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if ($this->isFontEnd( $request )) {
            return redirect()->guest( '/login' );
        }
        return $this->errorResponse( 'Unauthenticated', '404' );
    }

    private function isFontEnd($request)
    {
        return $request->acceptsHtml() && collect( $request->route()->middleware() )->contains( 'web' );
    }
}
