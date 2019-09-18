<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Models
{
    public $timestamps = false;

    protected $table = 'groups';

    protected $fillable = ['title'];

    public function taxApplyGroup()
    {
        return $this->belongsToMany( TaxRule::class, 'group_tax_rules', 'group_id', 'tax_rule_id' );
    }

    public function users(){
        return $this->belongsToMany(User::class,'user_group','group_id','user_id');

    }
}
