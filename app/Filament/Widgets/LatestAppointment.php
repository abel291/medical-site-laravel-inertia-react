<?php

namespace App\Filament\Widgets;

use App\Filament\Resources\AppointmentResource;
use App\Models\Appointment;
use Filament\Forms\Components\Section;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Filament\Infolists\Infolist;
use Filament\Infolists;
use Filament\Infolists\Components\Group;

class LatestAppointment extends BaseWidget
{
    protected static ?string $heading = 'Ultimas Consultas';
    protected int | string | array $columnSpan = 'full';
    public function table(Table $table): Table
    {

        return $table
            ->query(AppointmentResource::getEloquentQuery())
            ->defaultPaginationPageOption(8)
            ->defaultSort('id', 'desc')
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nombre Email')
                    ->description(fn (Appointment $record) => $record->email),

                Tables\Columns\TextColumn::make('specialty.name')->placeholder('Sin Especialidad')
                    ->description(fn (Appointment $record) => $record ? $record?->surgery?->name : '')
                    ->label('Especialidad - Cirugia'),

                Tables\Columns\TextColumn::make('message')
                    ->searchable()
                    ->lineClamp(2)
                    ->wrap()
                    ->color('gray'),
                // Tables\Columns\TextColumn::make('customer.name')
                //     ->searchable()
                //     ->sortable(),
                // Tables\Columns\TextColumn::make('status')
                //     ->badge(),
                // Tables\Columns\TextColumn::make('currency')
                //     ->getStateUsing(fn ($record): ?string => Currency::find($record->currency)?->name ?? null)
                //     ->searchable()
                //     ->sortable(),
                // Tables\Columns\TextColumn::make('total_price')
                //     ->searchable()
                //     ->sortable(),
                // Tables\Columns\TextColumn::make('shipping_price')
                //     ->label('Shipping cost')
                //     ->searchable()
                //     ->sortable(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make()->infolist([
                    Infolists\Components\Group::make()->schema([
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


                    ])->columns(2),
                ])
            ])
            ->recordUrl(null);
    }
}
