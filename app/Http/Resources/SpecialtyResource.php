<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SpecialtyResource extends JsonResource
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
            'entry' => $this->entry,
            'image' => $this->image,
            'thumb' => $this->thumb,
            'description' => $this->description,
            'doctors' => DoctorResource::collection($this->whenLoaded('doctors')),
            'meta' => new MetaResource($this->whenLoaded('meta')),
            'surgeries' => $this->whenLoaded('surgeries'),
            'images' => $this->whenLoaded('images'),
            'updateDate' => $this->updated_at->isoFormat('LL'),
        ];
    }
}
