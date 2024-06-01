<?php

namespace App\Filament\Resources\SurgeryResource\RelationManagers;

use App\Models\Specialty;
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
    protected static ?string $title = 'Cirugias';
    public function form(Form $form): Form
    {
        $checkboxListGroup = [];
        foreach (Specialty::with('surgeries:id,name')->get() as $key => $specialty) {
            $checkboxListGroup[] = Forms\Components\CheckboxList::make('')
                ->label($specialty->name)
                ->relationship(
                    titleAttribute: 'name',
                    modifyQueryUsing: fn (Builder $query) => $query->where('specialty_id', $specialty->id),
                );
        }
        // dd($checkboxListGroup);
        return $form
            ->schema($checkboxListGroup);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                Tables\Columns\TextColumn::make('specialty.name')->label('Especialidad')->sortable(),
                Tables\Columns\TextColumn::make('name')->label('Nombre cirugia'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\AttachAction::make()->multiple(),
            ])
            ->actions([
                Tables\Actions\DetachAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([]),
            ]);
    }
}
