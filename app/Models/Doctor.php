<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Doctor extends Model
{
    use HasFactory;

    public function images()
    {
        return $this->morphMany(Image::class, 'model');
    }
    public function meta()
    {
        return $this->morphOne(Meta::class, 'model');
    }
}
