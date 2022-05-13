<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FeedbackStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => ['required', 'string', 'min:1', 'max:50'],
            'film_id' => ['required', 'integer'],
            'text' => ['required', 'string', 'min:3', 'max:700'],
        ];
    }
/*
    public function messages(): array
    {
        return parent::messages();
    }

    public function attributes(): array
    {
        return parent::attributes();
    }*/
}
