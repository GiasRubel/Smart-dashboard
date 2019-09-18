<?php

namespace App\Http\Resources\Order;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $cancelArray = [
            'pending',
            'cash-pending',
            'review-complete',
            'pending-for-review'
        ];
        $custom_amount = $this->lastStatus->alias == 'partial-payment-pending' ? $this->items->sum("itemAdminOperationInfo.custom_amount") : 0;
        return [
            'id' => $this->id,
            'order_number' => $this->order_number,
            'master_price' => $this->master_price,
            'total_price' => $this->total_price,
            'shipment_cost' => $this->shipping_cost,
            'tax_usa' => $this->tax_usa,
            'tax_bd' => $this->tax_bd,
            'payments' => $this->payments,
            'pay_by' => $this->paymentmethod,
            'currency' => optional($this->currencies)->title,
            'address' => (new InvoiceResource($this->address)),
            'purchase_invoice_number' => $this->purchase_invoice_number,
            'order_date' => $this->order_date,
            'items' => (ItemResource::collection($this->items)),
            'status' => $this->lastStatus,
            'statuses' => (OrderStatusResource::collection($this->status)),
            'is_cancelable' => (isset($this->lastStatus->alias) && in_array($this->lastStatus->alias, $cancelArray)) ? true : false,
            'details' => url("order/user/$this->id"),
            'cancel_url' => url("order/user/cancel/$this->id"),
            'royalty_charge' => $this->service_charge,
            'receipt_image' => (ReceiptResource::collection($this->moneyReceipt)),
            'total_custom_amount' => $custom_amount,
            'items_shipping_cost' => $this->items_shipping_cost,
            'cancel_reasons' => $this->reasons,
            'total_insurance' => $this->total_insurance,
            'total_gift' => $this->total_gift
        ];
    }
}
