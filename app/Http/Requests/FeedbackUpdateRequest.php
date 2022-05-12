<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FeedbackUpdateRequest extends FormRequest
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
            'username' => ['required', 'string', 'min:3', 'max:50'],
            'film_id' => ['required', 'integer'],
            'rating' => ['nullable'],
            'text' => ['required', 'string', 'min:3', 'max:700'],
            'status' => ['required', 'string'],
            //'created_at' => ['nullable', 'timestamp'],
        ];
    }
}
