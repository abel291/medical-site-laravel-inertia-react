<?php

namespace App\Filament\Widgets;

use App\Models\Appointment;
use Filament\Widgets\ChartWidget;

class SubscribedChart extends ChartWidget
{
    protected static ?string $heading = 'Suscripciones';

    protected function getData(): array
    {
        $appointments = Appointment::select('id', 'created_at', 'subscribed')
            ->where('created_at', '>', now()->subMonths(12))
            ->where('subscribed', true)
            ->orderBy('created_at', 'asc')->get();

        $appointmentsPerMonth = $appointments->groupBy(function ($user, $key) {
            return ucfirst($user->created_at->isoFormat('MMMM'));
        })->map(function ($item) {
            return $item->count();
        });
        // dd($appointmentsPerMonth);
        return [
            'datasets' => [
                [
                    'label' => 'Suscripciones hechas los ultimos 12 meses',
                    'data' => $appointmentsPerMonth->values()->toArray(),
                    'fill' => 'start',
                ],
            ],
            'labels' => $appointmentsPerMonth->keys()->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }
}
