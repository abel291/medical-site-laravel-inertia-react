<?php

namespace App\Filament\Resources\SurgeryResource\Pages;

use App\Filament\Resources\SurgeryResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSurgery extends EditRecord
{
    protected static string $resource = SurgeryResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
    protected function getSavedNotificationTitle(): ?string
    {
        return 'Registro guardado';
    }
    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
