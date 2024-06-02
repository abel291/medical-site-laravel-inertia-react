<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AddressResource\RelationManagers\AdresssesRelationManager;
use App\Filament\Resources\DoctorResource\Pages;
use App\Filament\Resources\DoctorResource\RelationManagers;
use App\Filament\Resources\SurgeryResource\RelationManagers\SurgeriesRelationManager;
use App\Models\Doctor;
use App\Models\Specialty;
use App\Models\Surgery;
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
use Illuminate\Support\Str;

class DoctorResource extends Resource
{
    protected static ?string $model = Doctor::class;
    protected static ?string $navigationIcon = 'heroicon-O-user-group';
    public static ?string $label = 'Doctor';
    protected static ?string $navigationGroup  = 'Dashboard';
    protected static ?string $pluralModelLabel  = 'Doctores';
    protected static ?string $recordTitleAttribute = 'name';


    public static function form(Form $form): Form
    {

        $checkboxListGroup = [];
        foreach (Specialty::with('surgeries:id,name')->get() as $key => $specialty) {
            $checkboxListGroup[] =
                Forms\Components\Section::make($specialty->name)
                ->schema([
                    Forms\Components\CheckboxList::make("surgeries")
                        ->label('')
                        ->relationship(
                            titleAttribute: 'name',
                            modifyQueryUsing: fn (Builder $query) => $query->where('specialty_id', $specialty->id),
                        )
                        ->columns(2)
                ])->columnSpan(1);
        }

        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make()
                            ->schema([
                                Forms\Components\TextInput::make('name')
                                    ->label('Nombre')
                                    ->required()
                                    ->maxLength(255)
                                    ->live(onBlur: true)
                                    ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                                        // if ($operation !== 'create') {
                                        //     return;
                                        // }

                                        $set('slug', Str::slug($state));
                                    }),

                                Forms\Components\TextInput::make('slug')
                                    ->label('Url')
                                    ->disabled()
                                    ->dehydrated()
                                    ->required()
                                    ->maxLength(255)
                                    ->unique(Doctor::class, 'slug', ignoreRecord: true),

                                Forms\Components\Select::make('specialty_id')
                                    ->relationship(name: 'specialty', titleAttribute: 'name')
                                    ->preload()
                                    ->label('Especialidad Principal'),

                                Forms\Components\DatePicker::make('start_date')
                                    ->label('Fecha de inicio')
                                    ->prefix('Trabajando desde:')
                                    ->required()
                                    ->native(false)
                                    ->helperText('Con esta fecha se calcula cuantos años tiene de contratacion ')
                                // ->displayFormat('Y')
                                ,
                                Forms\Components\Toggle::make('active')
                                    ->inline(false)
                                    ->label('Activo')
                                    ->columnSpanFull(),

                                Forms\Components\Textarea::make('entry')
                                    ->rows(4)
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

                            ])->columns(2),
                    ])->columnSpan(2),
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Datos de contacto')
                            ->schema([
                                Forms\Components\TextInput::make('email')
                                    ->required()
                                    ->email()
                                    ->maxLength(255),
                                Forms\Components\TextInput::make('email2')
                                    ->required()
                                    ->email()
                                    ->maxLength(255),
                                Forms\Components\TextInput::make('phone')
                                    ->required()
                                    ->tel()
                                    ->maxLength(255),
                                Forms\Components\TextInput::make('phone2')
                                    ->required()
                                    ->tel()
                                    ->maxLength(255),
                            ]),
                        // Forms\Components\Section::make('Cirugias asociadas')
                        //     ->schema([
                        //         Forms\Components\Select::make('surgeries')
                        //             ->label('')
                        //             ->relationship(
                        //                 titleAttribute: 'name',
                        //                 modifyQueryUsing: fn (Builder $query) => $query->with('specialty:id,name'),
                        //             )
                        //             ->searchable()
                        //             ->multiple()
                        //             ->preload(true)
                        //             ->noSearchResultsMessage('Cirugia no encontrada')
                        //             ->getOptionLabelFromRecordUsing(fn (Surgery $record) => "{$record->specialty->name} -> {$record->name}")
                        //             ->searchable(['name'])





                        //     ]),
                    ])
            ])->columns(3);
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
                    ->label('Nombre')
                    ->sortable()
                    ->searchable(isIndividual: true),
                // ->description(fn (Doctor $record): string => $record->slug)->label('Nombre')->wrap(),

                TextColumn::make('email')
                    ->description(fn (Doctor $record): string => $record->email2)->label('Email')
                    ->searchable(isIndividual: true)
                    ->sortable(),

                TextColumn::make('phone')
                    ->description(fn (Doctor $record): string => $record->phone2)->label('Telefono')
                    ->sortable(),


                // TextColumn::make('surgeries.name')
                //     ->label('Especialidades')
                //     ->badge()
                //     ->color('success'),
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
            SurgeriesRelationManager::class,
            ImageResource\RelationManagers\ImagesRelationManager::class,
            AdresssesRelationManager::class,

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
    public static function getGloballySearchableAttributes(): array
    {
        return ['name', 'email'];
    }
}
