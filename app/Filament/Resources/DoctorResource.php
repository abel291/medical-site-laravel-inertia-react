<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DoctorResource\Pages;
use App\Filament\Resources\DoctorResource\RelationManagers;
use App\Models\Doctor;
use App\Models\Specialty;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Support\Enums\FontWeight;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class DoctorResource extends Resource
{
    protected static ?string $model = Doctor::class;

    protected static ?string $navigationIcon = 'heroicon-O-user-group';

    public static ?string $label = 'Doctor';
    protected static ?string $pluralModelLabel  = 'Doctores';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
        //             name
        // slug
        // email
        // email2
        // phone
        // phone2
        // entry
        // description
        // address
        // image
        // thumb
        // active
        // start_date
        // specialty_id
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')
                    ->label('Imagen')
                    ->checkFileExistence(false),

                TextColumn::make('name')
                    ->color('primary')
                    ->weight(FontWeight::Medium)
                    ->url(fn (Doctor $record): string => route('doctor', $record->slug))
                    ->openUrlInNewTab()
                    ->description(fn (Doctor $record): string => $record->slug)->label('Nombre')->wrap(),

                // TextColumn::make('specialty.name')
                //     ->color('primary')
                //     ->weight(FontWeight::Medium)
                //     ->label('Principal Especialidad')
                //     ->url(fn (Doctor $record): string => route('specialty', $record->specialty->slug))
                //     ->openUrlInNewTab(),

                TextColumn::make('surgeries.name')
                    ->label('Especialidades')
                    ->badge()
                    ->color('success'),
                IconColumn::make('active')
                    ->label('Activo')
                    ->boolean(),
                TextColumn::make('created_at')
                    ->label('Modificado')
                    ->since(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make()->icon(null)->color('info'),
                Tables\Actions\DeleteAction::make()->icon(null),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])->defaultSort('id', 'desc');
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDoctors::route('/'),
            'create' => Pages\CreateDoctor::route('/create'),
            'edit' => Pages\EditDoctor::route('/{record}/edit'),
        ];
    }
}
