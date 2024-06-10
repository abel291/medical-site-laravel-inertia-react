<?php

namespace App\Filament\Widgets;

use App\Models\Appointment;
use App\Models\Subscription;
use Filament\Widgets\ChartWidget;

class SubscribedChart extends ChartWidget
{
    protected static ?string $heading = 'Suscripciones';

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
        // dd($filterMonth);
        // $lastMonth = now()->subMonths(6);

        $subscriptions = Subscription::select('id', 'created_at')
            ->whereDate('created_at', '>=', $filterMonth)
            ->orderBy('created_at', 'asc')->orderBy('created_at', 'asc')->get();

        self::$heading = $this->getHeading() . " (" . $subscriptions->count() . ")";

        $subscriptionsPerMonth = $subscriptions->groupBy(function ($user, $key) {
            return ucfirst($user->created_at->isoFormat('MMMM YYYY'));
        })->map(function ($item) {
            return $item->count();
        });
        // dd($subscriptionsPerMonth);
        return [
            'datasets' => [
                [
                    'label' => 'Suscripciones',
                    'data' => $subscriptionsPerMonth->values()->toArray(),
                    'fill' => 'start',
                ],
            ],
            'labels' => $subscriptionsPerMonth->keys()->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }
}
