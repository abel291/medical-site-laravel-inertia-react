<?php

namespace App\Filament\Widgets;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Specialty;
use Carbon\Carbon;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsDashboardOverview extends BaseWidget
{
    protected function getStats(): array
    {
        $appointments = Appointment::select('id', 'created_at', 'subscribed')->where('created_at', '>', now()->subDays(30))
            ->orderBy('created_at', 'DESC')->get();

        $appointmentsPerDays = $appointments->groupBy(function ($appointment) {
            return (int) $appointment->created_at->format('d');
        })->map(function ($item) {
            return $item->count();
        });

        $suscribedPerDays = $appointments->where('subscribed', true)->count();

        $specialties = Specialty::select('id')->where('active', 1)->with('surgeries:id,specialty_id')->get();
        $surgeries = $specialties->pluck('surgeries')->collapse();
        // dd($surgeries);
        return [
            Stat::make('Consultas ultimos 30 dias', $appointments->count())
                ->description($suscribedPerDays . ' nuevas suscripciones')
                ->chart($appointmentsPerDays->toArray()),

            Stat::make('N° Especialidades disponible', $specialties->count() . ' Especialidades')
                ->description($surgeries->count() . ' Cirugias disponibles'),
            Stat::make('N° Medicos disponbles', Doctor::select('id')->count())

        ];
    }
}
