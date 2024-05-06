<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Surgery extends Model
{
    use HasFactory;

    public function specialty(): BelongsTo
    {
        return $this->belongsTo(Specialty::class);
    }
    public function doctors(): BelongsToMany
    {
        return $this->belongsToMany(Doctor::class);
    }
    public function images()
    {
        return $this->morphMany(Image::class, 'model');
    }
    public function meta()
    {
        return $this->morphOne(Meta::class, 'model');
    }
}
