<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppointmentFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|max:255',
            'phone' => 'required|max:255',
            'email' => 'required|max:255|confirmed',
            'message' => 'required|max:1000',
            'specialty_id' => 'required|exists:specialties,id',
            'surgery_id' => 'exists:surgeries,id',
            'type' => 'required|in:form,modal',
            'subscribed' => 'required|boolean',
        ];
    }
    protected function prepareForValidation(): void
    {
        $this->merge([
            'subscribed' => $this->boolean('subscribed'),
        ]);
    }
}
