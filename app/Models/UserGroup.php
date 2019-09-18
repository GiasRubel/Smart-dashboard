<?php

namespace App\Models;

use App\Models\TaxRule;
use Illuminate\Database\Eloquent\Model;

class UserGroup extends Model
{
    protected $table='user_group';
    public $timestamps=false;

   /*public function taxApplyGroup(){
       return $this->belongsToMany(TaxRule::class,'group_tax_rules','tax_rules_id','user_group_id');
   }*/
}
