<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

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
    public function surgeries(): BelongsToMany
    {
        return $this->belongsToMany(Surgery::class);
    }
    public function surgery()
    {
        return $this->belongsToMany(Surgery::class)->wherePivot('primary', true)->first();
    }
    public function specialty(): HasOne
    {
        return $this->hasOne(Specialty::class);
    }
}
