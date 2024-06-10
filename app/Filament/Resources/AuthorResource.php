<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AuthorResource\Pages;
use App\Filament\Resources\AuthorResource\RelationManagers;
use App\Models\Author;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Support\Enums\FontWeight;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AuthorResource extends Resource
{
    protected static ?string $model = Author::class;

    protected static ?string $navigationIcon = 'heroicon-o-users';
    protected static ?string $recordTitleAttribute = 'name';
    protected static ?int $navigationSort = 8;
    protected static ?string $navigationGroup = 'Blog';
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),

                Forms\Components\TextInput::make('email')
                    ->label('Email address')
                    ->required()
                    ->maxLength(255)
                    ->email()
                    ->unique(Author::class, 'email', ignoreRecord: true),

                Forms\Components\MarkdownEditor::make('bio')->disableToolbarButtons([
                    'attachFiles',
                    'strike',
                ])
                    ->columnSpan('full'),

                Forms\Components\TextInput::make('github_handle')
                    ->label('GitHub handle')
                    ->maxLength(255),

                Forms\Components\TextInput::make('twitter_handle')
                    ->label('Twitter handle')
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->color('primary')
                    ->weight(FontWeight::Medium)
                    ->description(fn (Author $record): string => $record->email)->label('Nombre Email'),

                Tables\Columns\TextColumn::make('github_handle')
                    ->icon('icon-github')
                    ->label('GitHub'),

                Tables\Columns\TextColumn::make('twitter_handle')
                    ->icon('icon-twitter')
                    ->label('Twitter'),

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
                    // Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageAuthors::route('/'),
        ];
    }
}
