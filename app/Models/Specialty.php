<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Specialty extends Model
{
    use HasFactory;

    public function images()
    {
        return $this->morphMany(Image::class, 'model');
    }
    public function surgeries(): HasMany
    {
        return $this->hasMany(Surgery::class);
    }
    public function meta()
    {
        return $this->morphOne(Meta::class, 'model');
    }
    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }
}
