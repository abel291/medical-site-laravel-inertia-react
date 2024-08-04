<?php

namespace App\Filament\Resources\SpecialtyResource\RelationManagers;

use App\Filament\Resources\SurgeryResource;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SurgeriesRelationManager extends RelationManager
{
    protected static string $relationship = 'surgeries';

    public static ?string $label = 'Cirugia';
    protected static ?string $pluralModelLabel  = 'Cirugias';
    protected static ?string $title = 'Cirugias';

    public function form(Form $form): Form
    {
        return $form->schema(SurgeryResource::formSurgery(showSelectSpecialty: false));
    }

    public function table(Table $table): Table
    {
        return SurgeryResource::table($table)->headerActions([
            Tables\Actions\CreateAction::make(),
        ]);
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                // Tables\Columns\TextColumn::make('specialty.name')->label('Especialidad')->sortable(),
                Tables\Columns\TextColumn::make('name')->label('Nombre cirugia'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                // Tables\Actions\BulkActionGroup::make([]),
            ]);
    }
}
