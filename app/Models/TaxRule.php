<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaxRule extends Models
{
    public $timestamps=false;

    protected $table='tax_rules';
    protected $fillable = ['title', 'priority', 'applicable_for_subtotal','contain_title','contain_type','contain_unit','unit_min','unit_max','tax_price'];

    public function taxgrouprule()
    {
        return $this->belongsToMany(Group::class,'group_tax_rules','tax_rule_id','group_id');
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
