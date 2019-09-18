<?php

namespace App\Models;

class ProductMeasurement extends Models
{
    protected $table = "product_measurement";
    protected $fillable = [
        'store_id',
        'title',
        'sku',
        'weight',
        'volumetric_weight',
        'dimension',
        'approved_by'
    ];

    protected $appends = ['approved_weight', 'review_weight'];

    public function users()
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    public function stores()
    {
        return $this->belongsTo(Store::class, 'store_id');
    }

    public function reviews()
    {
        return $this->hasMany(ProductMeasurementReview::class, 'measurement_id', 'id');
    }


    public function item()
    {
        return $this->belongsTo(Item::class, 'sku', 'sku');
    }

    public function getApprovedWeightAttribute()
    {

        $weight = 0;
        foreach ($this->reviews as $review) {
            $weight += explode(' ', $review->item_from_volumetric_weight)[0];
        }
        $weight = $this->reviews->count() > 0 ? $weight : $this->volumetric_weight;
        return $weight;
    }

    public function getReviewWeightAttribute()
    {
        $weight = 0;
        foreach ($this->reviews as $review) {
            $spliter = preg_split('/([0-9]+)/', $review->item_from_weight);
            $spliter = isset($spliter[1]) ? $spliter[1] : '';
            $weight += str_replace($spliter, '', $review->item_from_weight);
        }
        $weight = $this->reviews->count() > 0 ? $weight : $this->weight;
        return $weight;
    }


}
