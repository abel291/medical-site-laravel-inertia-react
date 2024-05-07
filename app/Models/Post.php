<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Post extends Model
{
    use HasFactory;
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }
    public function meta()
    {
        return $this->morphOne(Meta::class, 'model');
    }
}