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
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'email' => $this->email,
            'email2' => $this->email2,
            'phone' => $this->phone,
            'phone2' => $this->phone2,
            'address' => $this->address,
            'entry' => $this->entry,
            'description' => $this->description,
            'image' => $this->image,
            'thumb' => $this->thumb,
            'active' => $this->active,
            'meta' => new MetaResource($this->whenLoaded('meta')),
            'startYear' => $this->start_date->format('Y'),
            'updateDate' => $this->updated_at->isoFormat('LL'),
            'specialty' => new SpecialtyResource($this->whenLoaded('specialty')),
            'specialties' => SpecialtyResource::collection($this->whenLoaded('specialties')),
            'surgeries' => SurgeryResource::collection($this->whenLoaded('surgeries')),

        ];
    }
}
