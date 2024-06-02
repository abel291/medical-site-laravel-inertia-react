<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Post extends Model
{
    use HasFactory;

    protected $casts = [
        'published_at' => 'datetime',
    ];
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }
    public function meta()
    {
        return $this->morphOne(Meta::class, 'model');
    }
    public function author()
    {
        return $this->belongsTo(Author::class);
    }
}
