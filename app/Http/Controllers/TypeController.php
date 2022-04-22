<?php declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\TypeResource;
use App\Models\Type;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    public function index()
    {
        return TypeResource::collection(Type::with('films')->get());
    }

    public function show(int $id)
    {
        return new TypeResource(Type::with('films')->findOrFail($id));
    }
}
