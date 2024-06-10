<?php

namespace App\Filament\Widgets;

use App\Models\Appointment;
use Filament\Widgets\ChartWidget;

class AppointmentChart extends ChartWidget
{
    protected static ?string $heading = 'Consultas';
    public ?string $filter = '6';
    protected function getFilters(): ?array
    {
        return [
            'today' => 'Este mes',
            '1' => 'Mes Pasado',
            '6' => 'Ultimos 6 meses',
            '12' => 'Ultimos 12 meses',
        ];
    }
    protected function getData(): array
    {
        $activeFilter = $this->filter;

        $filterMonth = match ($activeFilter) {
            'today' => now(),
            '1' => now()->subMonths(1),
            '6' => now()->subMonths(6),
            '12' => now()->subMonths(12),
        };
        $appointments = Appointment::select('id', 'created_at', 'subscribed')
            ->whereDate('created_at', '>', $filterMonth->startOfMonth())
            ->orderBy('created_at', 'asc')->get();

        self::$heading = $this->getHeading() . " (" . $appointments->count() . ")";

        $appointmentsPerMonth = $appointments->groupBy(function ($user, $key) {
            return ucfirst($user->created_at->isoFormat('MMMM YYYY'));
        })->map(function ($item) {
            return $item->count();
        });
        // dd($appointmentsPerMonth);
        return [
            'datasets' => [
                [
                    'label' => 'Consultas',
                    'data' => $appointmentsPerMonth->values()->toArray(),
                    // 'fill' => 'start',
                ],
            ],
            'labels' => $appointmentsPerMonth->keys()->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
