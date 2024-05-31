<?php

namespace App\Filament\Resources\SpecialtyResource\Pages;

use App\Filament\Resources\SpecialtyResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;
use Filament\Support\Enums\MaxWidth;

class CreateSpecialty extends CreateRecord
{
    protected static string $resource = SpecialtyResource::class;
    public function getMaxContentWidth(): MaxWidth
    {
        return MaxWidth::FourExtraLarge;
    }
}
