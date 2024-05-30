<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
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
            'title' => $this->title,
            'slug' => $this->slug,
            'entry' => $this->entry,
            'image' => $this->image,
            'thumb' => $this->thumb,
            'description' => $this->description,
            'meta' => new MetaResource($this->whenLoaded('meta')),
            'updateDate' => $this->when($this->updated_at, function () {
                return $this->updated_at->isoFormat('LL');
            }),
            'tags' => $this->whenLoaded('tags'),
        ];
    }
}
