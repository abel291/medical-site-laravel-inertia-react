<?php

namespace App\Filament\Resources\ImageResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ImagesRelationManager extends RelationManager
{
    protected static string $relationship = 'images';

    public static ?string $label = 'Imagen';
    protected static ?string $pluralModelLabel  = 'Imagenes';

    protected static ?string $title = 'Imagenes';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255)
                    ->label('Titulo')
                    ->columnSpan(2),

                Forms\Components\TextInput::make('alt')
                    ->required()
                    ->maxLength(255),

                Forms\Components\TextInput::make('sort')
                    ->required()
                    ->numeric()
                    ->step(1)
                    ->maxLength(100)
                    ->label('orden'),

                Forms\Components\FileUpload::make('img')
                    ->required()
                    ->directory('/img')
                    ->image()
                    ->maxSize(1024)
                    ->label('Imagen'),

                Forms\Components\FileUpload::make('thumb')
                    ->required()
                    ->directory('/img')
                    ->image()
                    ->maxSize(1024)
                    ->label('Miniatura'),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('img')
            ->columns([
                ImageColumn::make('img')
                    ->label('Imagen')
                    ->checkFileExistence(false),
                ImageColumn::make('thumb')
                    ->label('Miniatura')
                    ->checkFileExistence(false),
                TextColumn::make('alt')->label('alt')->wrap(),
                TextColumn::make('title')->label('title')->wrap(),
                TextColumn::make('sort')->label('orden'),
                IconColumn::make('active')->label('Activo')->boolean(),
            ])
            ->filters([])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    // Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])->defaultSort('id', 'desc');
    }
}
