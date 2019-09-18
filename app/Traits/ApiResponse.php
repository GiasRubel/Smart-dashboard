<?php

namespace App\Traits;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

trait ApiResponse
{
    private function apiResponse($data, $code)
    {
        return response()->json( $data, $code );
    }

    protected function showAll(Collection $collection, $code = 200)
    {
        if ($collection->count() > 0) {
            return $this->apiResponse( ['result' => $collection], $code );
        }
        return response( '', 204 );
    }

    protected function pagination($data, $code = 200)
    {
        return $this->apiResponse( ['result' => $data], $code );
    }

    protected function showOne(Model $model, $code = 200)
    {
        return response()->json( ['result' => $model], $code );
    }

    protected function errorResponse($message, $code = 400)
    {
        return $this->apiResponse( ['errors' => $message, 'code' => $code], $code );
    }

    protected function showMessage($message, $code = 200)
    {
        return $this->apiResponse( ['result' => $message], $code );
    }

    public function notifyMessage($data, $message = 'Success', $code)
    {
        return $this->apiResponse( ['result' => $data, 'success' => $message], $code );
    }

    public function createdSuccess($data, $message = 'successfully created.', $code = 201)
    {
        return $this->notifyMessage( ['result' => $data, 'success' => $message], $code );
    }

    public function updatedSuccess($data, $message = 'successfully updated.', $code = 201)
    {
        return $this->notifyMessage( ['result' => $data, 'success' => $message], $code );
    }

    public function deletedSuccess($data, $message = 'successfully delete.', $code = 201)
    {
        return $this->notifyMessage( ['result' => $data, 'success' => $message], $code );
    }

}