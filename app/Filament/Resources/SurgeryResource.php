<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SurgeryResource\Pages;
use App\Filament\Resources\SurgeryResource\RelationManagers;
use App\Models\Specialty;
use App\Models\Surgery;
use Filament\Forms;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
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
use Illuminate\Support\Facades\Storage;

class SurgeryResource extends Resource
{
    protected static ?string $model = Surgery::class;
    protected static ?string $navigationGroup  = 'Dashboard';
    protected static ?string $navigationIcon = 'heroicon-o-heart';
    public static ?string $label = 'Cirugia';
    protected static ?string $pluralModelLabel  = 'Cirugias';

    protected static ?string $recordTitleAttribute = 'name';
    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->required()
                            ->maxLength(255)
                            ->label('Titulo'),

                        Forms\Components\TextInput::make('slug')
                            ->required()
                            ->maxLength(255)
                            ->label('Url')
                            ->prefix(url('/surgery') . '/')
                            ->suffix('.com')->columnSpanFull(),

                        Forms\Components\Textarea::make('entry')
                            ->required()
                            ->maxLength(255)
                            ->columnSpan(2)
                            ->label('Pequeña descripcion'),

                        // Select::make('doctors')
                        //     ->relationship(name: 'doctors', titleAttribute: 'name')
                        //     ->multiple()
                        //     ->preload()
                        //     ->label('Doctores'),


                        Select::make('specialty_id')
                            ->relationship(name: 'specialty', titleAttribute: 'name')
                            ->preload()
                            ->label('Especialidad'),

                        Forms\Components\Toggle::make('active')
                            ->inline(false)
                            ->label('Activo'),
                        Forms\Components\CheckboxList::make('doctors')
                            ->relationship(titleAttribute: 'name')
                            ->label('Doctores')->columns(3)
                            ->columnSpanFull(),

                        Forms\Components\RichEditor::make('description')
                            ->required()
                            ->disableToolbarButtons([
                                'attachFiles',
                                'strike',
                            ])->columnSpan(2)
                            ->label('Descripcion amplia'),

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

                        Fieldset::make('Metadata')
                            ->relationship('meta')
                            ->schema([
                                TextInput::make('title')->label('titulo'),
                                Textarea::make('desc')->label('descripcion'),
                                Textarea::make('extra')->label('Extra metadata')->columnSpan(2),

                            ])
                    ])
                    ->columns(2)
                    ->columnSpan(['lg' => fn (?Surgery $record) => $record === null ? 3 : 2]),


                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\Placeholder::make('created_at')
                            ->label('Creado')
                            ->content(fn (Surgery $record): ?string => $record->created_at?->diffForHumans()),

                        Forms\Components\Placeholder::make('updated_at')
                            ->label('Ultima modificacion')
                            ->content(fn (Surgery $record): ?string => $record->updated_at?->diffForHumans()),

                    ])
                    ->columnSpan(['lg' => 1])
                    ->hidden(fn (?Surgery $record) => $record === null),
            ])
            ->columns(3);
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
                    ->url(fn (surgery $record): string => route('surgery', $record->slug))
                    ->openUrlInNewTab()
                    ->description(fn (surgery $record): string => $record->slug)->label('Nombre - Url'),

                TextColumn::make('specialty.name')
                    ->color('primary')
                    ->weight(FontWeight::Medium)
                    ->label('Especialidad')
                    ->url(fn (Surgery $record): string => route('specialty', $record->specialty->slug))
                    ->openUrlInNewTab(),

                TextColumn::make('doctors.name')
                    ->label('Doctores')
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
                Tables\Actions\DeleteAction::make()->icon(null)
                    ->successNotificationTitle('Registro Eliminado')
                    ->after(function (Surgery $record) {

                        // delete single
                        if ($record->image) {
                            Storage::disk('public')->delete($record->image);
                        }
                        if ($record->thumb) {
                            Storage::disk('public')->delete($record->thumb);
                        }
                        // delete multiple
                        if ($record->images) {
                            foreach ($record->images as $image) Storage::disk('public')->delete($image->img);
                        }
                    }),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    //
                ]),
            ])->defaultSort('id', 'desc');;
    }


    public static function getRelations(): array
    {
        return [
            ImageResource\RelationManagers\ImagesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSurgeries::route('/'),
            'create' => Pages\CreateSurgery::route('/create'),
            'edit' => Pages\EditSurgery::route('/{record}/edit'),
        ];
    }
}
