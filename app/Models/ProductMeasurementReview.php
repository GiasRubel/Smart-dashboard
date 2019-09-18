<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductMeasurementReview extends Model
{
    protected $table = "review_product_measurement";
    protected $fillable = [
        'measurement_id',
        'item_from_weight',
        'item_from_dimension',
        'item_from_volumetric_weight'
    ];
}
