<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class Doctor extends Model
{
    use HasFactory;

    protected $casts = [
        'start_date' => 'datetime',
    ];
    protected function startYear(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->start_date->format('Y'),
        );
    }

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

    public function specialties(): BelongsToMany
    {
        return $this->belongsToMany(Specialty::class);
    }
    public function specialty(): BelongsTo
    {
        return $this->belongsTo(Specialty::class);
    }
}
