<?php

namespace App\Filament\Widgets;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Specialty;
use App\Models\Subscription;
use Carbon\Carbon;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsDashboardOverview extends BaseWidget
{
    protected function getStats(): array
    {

        $lastMonth = now()->subMonths(6);

        $appointments = Appointment::select('id', 'created_at', 'subscribed')->where('created_at', '>', $lastMonth)
            ->orderBy('created_at', 'DESC')->get();

        $appointmentsPerDays = $appointments->groupBy(function ($appointment) {
            return (int) $appointment->created_at->format('d');
        })->map(function ($item) {
            return $item->count();
        });

        $specialties = Specialty::select('id')->where('active', 1)->with('surgeries:id,specialty_id')->get();
        $surgeries = $specialties->pluck('surgeries')->collapse();

        $subscriptions = Subscription::select('id', 'created_at')->where('created_at', '>', $lastMonth)
            ->orderBy('created_at', 'DESC')->get();

        $subscriptionsPerDay = $subscriptions->groupBy(function ($subscription) {
            return (int) $subscription->created_at->format('d');
        })->map(function ($item) {
            return $item->count();
        });
        // dd($subscriptionsPerDay);

        return [
            Stat::make('Consultas ultimos 6 meses', $appointments->count())
                ->chart($appointmentsPerDays->toArray()),

            Stat::make('N° Especialidades disponible', $specialties->count() . ' Especialidades')
                ->description($surgeries->count() . ' Cirugias disponibles'),

            Stat::make('Total suscripciones ultimos 6 meses', $subscriptions->count())
                ->chart($subscriptionsPerDay->toArray()),

        ];
    }
}
