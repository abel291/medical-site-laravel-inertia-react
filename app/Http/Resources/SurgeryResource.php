<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SurgeryResource extends JsonResource
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
            'entry' => $this->entry,
            'image' => $this->image,
            'thumb' => $this->thumb,
            'description' => $this->description,
            'doctors' => DoctorResource::collection($this->whenLoaded('doctors')),
            'specialty' => new SpecialtyResource($this->whenLoaded('specialty')),
            'meta' => new MetaResource($this->whenLoaded('meta')),
            'images' => $this->whenLoaded('images'),
            'updateDate' => $this->updated_at->isoFormat('LL'),
        ];
    }
}
