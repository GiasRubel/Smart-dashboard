<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemAdminOperation extends Model
{
    protected $table = "item_admin_operation";
    protected $fillable = [
        'item_id',
        'purchase_invoice_number',
        'custom_amount',
        'custom_amount_reason',
        'updated_by'
    ];
    public function item(){
        return $this->belongsTo(Item::class, 'item_id', 'id');
    }
}
