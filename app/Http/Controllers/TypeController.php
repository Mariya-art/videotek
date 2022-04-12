<?php declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\Type;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    public function show(int $id) {
        /*
        $types = Type::query()->get();
        $oneType = Type::findOrFail($id);

        $films = Film::query()->select(Film::$availableFields)
                            ->where('type_id', $id)
                            ->paginate(6);
        */
        return view('films.show'/*, [
            'types' => $types,
            'films' => $films,
            'oneType' => $oneType,
        ]*/);
    }
}
