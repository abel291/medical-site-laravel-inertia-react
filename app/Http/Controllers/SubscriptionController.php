<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubscriptionController extends Controller
{
    public function create(Request $request)
    {
        $dataValidated = Validator::make($request->all(), [
            'name' => 'max:255',
            'email' => 'required|max:255|email',
        ])->validate();

        Subscription::insertOrIgnore($dataValidated);

        return redirect()->back();
    }
}
