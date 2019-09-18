<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductMeasurementCategory extends Models
{
    protected $table = "product_measurement_category";
    protected $fillable = [
        'title',
        'volumetric_weight',
        'parent_id'
    ];

    /**
     *
     */
    public function parent(){
        return $this->belongsTo(ProductMeasurementCategory::class, 'parent_id');
    }
}
