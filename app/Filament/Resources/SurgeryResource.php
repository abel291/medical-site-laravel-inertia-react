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
use Filament\Forms\Set;
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
use Illuminate\Support\Str;

class SurgeryResource extends Resource
{
    protected static ?string $model = Surgery::class;
    protected static ?string $navigationGroup  = 'Dashboard';
    protected static ?string $navigationIcon = 'heroicon-o-heart';
    public static ?string $label = 'Cirugia';
    protected static ?string $pluralModelLabel  = 'Cirugias';

    protected static ?string $recordTitleAttribute = 'name';
    protected static ?int $navigationSort = 2;

    public static function form(Form $form, $visibleSpecialty = true): Form
    {
        return $form

            ->schema([
                SpecialtyResource::formPlaceholderDate(),

                Forms\Components\Section::make()
                    ->schema(self::formSurgery())
                    ->columns(2)



            ]);
    }

    public static function formSurgery($showSelectSpecialty = true)
    {
        return [
            Forms\Components\TextInput::make('name')
                ->required()
                ->maxLength(255)
                ->label('Titulo'),

            Forms\Components\TextInput::make('slug')
                ->required()
                ->maxLength(255)
                ->label('Url')
                ->prefix(url('/surgery') . '/')
                ->suffix('.com')
                ->live(debounce: 300)
                ->afterStateUpdated(fn ($state, Set $set) => $set('slug', Str::slug($state))),


            Select::make('specialty_id')
                ->relationship(name: 'specialty', titleAttribute: 'name')
                ->preload()
                ->visible($showSelectSpecialty)
                ->label('Especialidad'),

            Forms\Components\Toggle::make('active')->label('Visible')
                ->inline(false),
            Forms\Components\Textarea::make('entry')
                ->required()
                ->maxLength(255)
                ->columnSpan(2)
                ->label('Pequeña descripcion'),

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
                    TextInput::make('title')->label('Titulo'),
                    Textarea::make('desc')->label('Descripcion'),
                    Textarea::make('extra')->label('Extra metadata')->columnSpan(2),

                ])
        ];
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
                    ->visible(false)
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
            ->filters([])

            ->actions([

                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
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
            ]);
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
