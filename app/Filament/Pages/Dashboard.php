<?php

namespace App\Filament\Pages;

use App\Filament\Widgets\AppointmentChart;
use App\Filament\Widgets\LatestAppointment;
use App\Filament\Widgets\StatsDashboardOverview;
use App\Filament\Widgets\SubscribedChart;
use Filament\Facades\Filament;
use Filament\Pages\Page;
use Filament\Widgets\FilamentInfoWidget;

class Dashboard extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-home';

    protected static string $view = 'filament.pages.dashboard';

    protected static ?int $navigationSort = -2;

    public static function getNavigationLabel(): string
    {
        return 'Tablero';
    }


    protected function getHeaderWidgets(): array
    {
        return [
            StatsDashboardOverview::class,
            AppointmentChart::class,
            SubscribedChart::class,
            LatestAppointment::class,
        ];
    }
}
