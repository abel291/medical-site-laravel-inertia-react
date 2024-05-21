<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DoctorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'slug' => $this->slug,
            'email' => $this->email,
            'email2' => $this->email2,
            'phone' => $this->phone,
            'phone2' => $this->phone2,
            'entry' => $this->entry,
            'description' => $this->description,
            'image' => $this->image,
            'thumb' => $this->thumb,
            'active' => $this->active,
            // 'start_date' => $this->start_date,
            'startYear' => $this->startYear,
            'updateDate' => $this->updated_at->isoFormat('LL'),
            'specialty' => new SpecialtyResource($this->whenLoaded('specialty')),

        ];
    }
}
