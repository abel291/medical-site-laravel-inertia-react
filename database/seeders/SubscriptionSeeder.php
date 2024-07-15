<?php

namespace Database\Seeders;

use App\Models\Subscription;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Subscription::truncate();
        // Subscription::factory()->count(rand(2000, 5000))->create();

        for ($i = 0; $i < rand(5000, 8000); $i++) {
            $subscriptions[$i] = Subscription::factory()->make([
                'created_at' => now(),
                'updated_at' => now(),
            ])->toArray();
        }
        foreach (array_chunk($subscriptions, 1000) as $value) {
            Subscription::insert($value);
        }
    }
}
