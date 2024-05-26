<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Appointment extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function specialty(): BelongsTo
    {
        return $this->belongsTo(Specialty::class);
    }

    public function surgery(): BelongsTo
    {
        return $this->belongsTo(Surgery::class);
    }
}
