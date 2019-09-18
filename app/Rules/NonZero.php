<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class NonZero implements Rule
{
    protected $include;

    /**
     * Create a new rule instance.
     *
     * @param bool $include
     */
    public function __construct($include = true)
    {
        $this->include = $include;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        if ($this->include == 'yes'){
            if ($value > 0){
                return true;
            }else{
                return false;
            }
        }else if ($this->include == 'no'){
            return true;
        }
        if ($this->include){
            if ($value > 0){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute must be greater than 0.';
    }
}
