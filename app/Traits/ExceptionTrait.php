<?php

namespace App\Traits;

use BadMethodCallException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\Exceptions\ThrottleRequestsException;
use Symfony\Component\Debug\Exception\FatalThrowableError;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

trait ExceptionTrait
{
    use ApiResponse;

    /**
     * @param $request
     * @note all api exception check
     * @param $e
     * @return \Illuminate\Http\JsonResponse
     */
    public function apiException($request, $e)
    {
        /*if (env( 'APP_ENV' ) === 'local')
            return $e;*/
        if ($e instanceof BadMethodCallException)
            return $this->errorResponse( $e->getMessage(), 500 );

        if ($e instanceof ThrottleRequestsException)
            return $this->errorResponse( $e->getMessage(), 500 );

        if ($e instanceof ValidationException)
            return $this->convertValidationExceptionToResponse( $e, $request );


        if ($e instanceof ModelNotFoundException) {
            $modelName = strtolower( class_basename( $e->getModel() ) );
            return $this->errorResponse( "Does not exist {$modelName} method with the specific Identification", 404 );
        }
        if ($e instanceof AuthorizationException)
            return $this->unauthenticated( $request, $e->getMessage() );

        if ($e instanceof AuthenticationException)
            return $this->errorResponse( $e->getMessage(), 403 );

        if ($e instanceof NotFoundHttpException)
            return $this->errorResponse( 'The specified url not found.', 404 );

        if ($e instanceof MethodNotAllowedHttpException)
            return $this->errorResponse( 'The specified method for the request is invalid.', 405 );

        if ($e instanceof HttpException)
            return $this->errorResponse($e->getMessage(), $e->getStatusCode());

        if ($e instanceof QueryException) {
            $errorcode = $e->errorInfo[1];
            if ($errorcode === 1451) {
                return $this->errorResponse( 'Cannot Remove the resource permanently. It is the related any other resource.', 409 );
            }
        }
        if ($e instanceof FatalThrowableError)
            return $this->errorResponse( $e->getMessage(), 500 );

        return $this->errorResponse( $e->getMessage(), 500 );


    }

    /**
     * @param ValidationException $e
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    protected function convertValidationExceptionToResponse(ValidationException $e, $request)
    {
        $errors = $e->validator->errors()->getMessages();
        return $this->errorResponse( $errors, 400 );
    }

    protected function unauthenticated($request, $exception)
    {
        return $this->errorResponse( 'Unauthenticated', '404' );
    }
}
