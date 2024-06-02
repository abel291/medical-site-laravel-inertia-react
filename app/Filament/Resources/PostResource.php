<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostResource\Pages;
use App\Filament\Resources\PostResource\RelationManagers;
use App\Models\Post;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;
use Filament\Infolists;
use Filament\Infolists\Components\Section;
use Filament\Infolists\Infolist;
use Filament\Pages\Page;
use Illuminate\Support\HtmlString;

class PostResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $navigationIcon = 'heroicon-o-newspaper';
    protected static ?string $navigationGroup  = 'Blog';

    public static ?string $label = 'Post';
    protected static ?string $pluralModelLabel  = 'Posts';
    protected static ?string $recordTitleAttribute = 'name';
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->label('Titulo')
                    ->required()
                    ->maxLength(255)
                    ->live(onBlur: true)
                    ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                        $set('slug', Str::slug($state));
                    }),

                Forms\Components\TextInput::make('slug')
                    ->label('Url')
                    ->disabled()
                    ->dehydrated()
                    ->required()
                    ->maxLength(255)
                    ->unique(Post::class, 'slug', ignoreRecord: true),

                Forms\Components\Select::make('author_id')
                    ->relationship(name: 'author', titleAttribute: 'name')
                    ->preload()
                    ->label('Author'),

                Forms\Components\DatePicker::make('published_at')
                    ->label('Fecha de publicacion')
                    ->required()
                    ->native(false),
                Forms\Components\Toggle::make('active')
                    ->inline(false)
                    ->label('Activo'),

                Forms\Components\Select::make('tags')
                    ->relationship(name: 'tags', titleAttribute: 'name')
                    ->preload()
                    ->multiple()
                    ->label('Tags'),

                Forms\Components\TextInput::make('entry')
                    ->maxLength(255)
                    ->label('Descricion pequeña')
                    ->columnSpan('full'),

                Forms\Components\RichEditor::make('description')
                    ->label('Descricion amplia')
                    ->columnSpan('full'),


                Forms\Components\FileUpload::make('image')
                    ->required()
                    ->directory('/img/surgeries')
                    ->image()
                    ->maxSize(1024)
                    ->label('Imagen'),

                Forms\Components\FileUpload::make('thumb')
                    ->required()
                    ->directory('/img/surgeries')
                    ->image()
                    ->maxSize(1024)
                    ->label('Miniatura'),

                Forms\Components\Fieldset::make('Metadata')
                    ->relationship('meta')
                    ->schema([
                        Forms\Components\TextInput::make('title')->label('Titulo'),
                        Forms\Components\Textarea::make('desc')->label('Descripcion'),
                        Forms\Components\Textarea::make('extra')->label('Extra metadata')->columnSpan(2),

                    ])->columnSpanFull()
            ])->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')
                    ->label('Imagen')
                    ->checkFileExistence(false),

                Tables\Columns\TextColumn::make('title')
                    ->label('Titulo')
                    ->searchable()
                    ->description(fn (Post $record): string => $record->slug)
                    ->sortable()
                    ->wrap(),

                Tables\Columns\TextColumn::make('tags.name')
                    ->label('Tags')
                    ->badge()
                    ->color('success'),
                Tables\Columns\TextColumn::make('author.name')
                    ->label('Autor'),

                Tables\Columns\IconColumn::make('active')->label('Activo')->boolean(),
                Tables\Columns\TextColumn::make('published_at')
                    ->label('Fecha de publicacion')
                    ->date(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Modificado')
                    ->since(),


            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make()->icon(null),
                Tables\Actions\EditAction::make()->icon(null)->color('info'),
                Tables\Actions\DeleteAction::make()->icon(null),
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
                Infolists\Components\TextEntry::make('title'),
                Infolists\Components\TextEntry::make('slug'),
                Infolists\Components\TextEntry::make('author.name'),
                Infolists\Components\TextEntry::make('published_at')->icon('heroicon-o-calendar-days')
                    ->badge()
                    ->date()
                    ->color('info'),
                Infolists\Components\TextEntry::make('tags.name')->badge()->color('success'),
                Infolists\Components\IconEntry::make('active')
                    ->icon(fn (string $state): string => match ($state) {
                        '1' => 'heroicon-o-check-circle',
                        '0' => 'heroicon-o-x-circle',
                    })
                    ->color(fn (string $state): string => match ($state) {
                        '1' => 'success',
                        '0' => 'danger',
                        default => 'gray',
                    }),
                Infolists\Components\TextEntry::make('entry')
                    ->columnSpanFull(),

                // Infolists\Components\TextEntry::make('description')
                //     ->formatStateUsing(fn (string $state): HtmlString => new HtmlString($state))
                //     ->columnSpanFull(),
                Infolists\Components\ImageEntry::make('image'),
                Infolists\Components\ImageEntry::make('thumb')
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
            'index' => Pages\ListPosts::route('/'),
            'create' => Pages\CreatePost::route('/create'),
            'edit' => Pages\EditPost::route('/{record}/edit'),
            // 'view' => Pages\ViewPost::route('/{record}'),
        ];
    }
}
