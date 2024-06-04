<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AppointmentResource\Pages;
use App\Filament\Resources\AppointmentResource\RelationManagers;
use App\Models\Appointment;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Infolists\Infolist;
use Filament\Infolists;

class AppointmentResource extends Resource
{
    protected static ?string $model = Appointment::class;
    protected static ?string $navigationGroup  = 'Dashboard';
    protected static ?string $navigationIcon = 'heroicon-o-book-open';
    public static ?string $label = 'Consulta';
    protected static ?string $pluralModelLabel  = 'Consultas';
    protected static ?int $navigationSort = 5;
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
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->label('Nombre'),

                Tables\Columns\TextColumn::make('phone')
                    ->description(fn (Appointment $record): string => $record->email)->label('Telefono - Email')


                    ->sortable(),
                Tables\Columns\TextColumn::make('specialty.name')->placeholder('Sin Especialidad')
                    ->description(fn (Appointment $record) => $record ? $record?->surgery?->name : '')
                    ->label('Especialidad - Cirugia'),

                Tables\Columns\TextColumn::make('type')
                    ->label('Tipo de form')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'form' => 'warning',
                        'modal' => 'info',
                    }),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Enviado')
                    ->date()


            ])
            ->filters([
                //
            ])
            ->actions([
                // Tables\Actions\EditAction::make(),
                Tables\Actions\ViewAction::make()->icon(null)->label('Ver Consulta'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    // Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                Infolists\Components\TextEntry::make('name')->label('Nombre'),
                Infolists\Components\TextEntry::make('email')->label('Email'),
                Infolists\Components\TextEntry::make('phone')->label('Telefono'),
                Infolists\Components\TextEntry::make('type')->badge()->color('info')->label('Tipo de form'),
                Infolists\Components\TextEntry::make('specialty.name')->badge()->label('Especialidad'),
                Infolists\Components\TextEntry::make('surgery.name')->badge()->label('Cirugia'),
                Infolists\Components\IconEntry::make('subscribed')->label('Suscrito al boletin')
                    ->icon(fn (string $state): string => match ($state) {
                        '1' => 'heroicon-o-check-circle',
                        '0' => 'heroicon-o-x-circle',
                    })
                    ->color(fn (string $state): string => match ($state) {
                        '1' => 'success',
                        '0' => 'danger',
                        default => 'gray',
                    }),
                Infolists\Components\TextEntry::make('updated_at')->date()->label('Fecha de creacion'),
                Infolists\Components\TextEntry::make('message')->label('Consulta')
                    ->columnSpanFull(),


            ]);
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
            'index' => Pages\ListAppointments::route('/'),
            'create' => Pages\CreateAppointment::route('/create'),
            'edit' => Pages\EditAppointment::route('/{record}/edit'),
        ];
    }
}
