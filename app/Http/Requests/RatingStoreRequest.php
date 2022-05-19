<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RatingStoreRequest extends FormRequest
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
            'film_id' => ['required', 'integer'],
            'rating' => ['required', 'integer'],
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
