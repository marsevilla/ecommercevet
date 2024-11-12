<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{

    public function index()
    {
        $products = Product::all();
        return response()->json($products, 200); 
    }


    public function store(Request $request)
    {
        if (!Auth::user()->isAdmin()) {
            return response()->json(['error' => 'Access denied. Admins only.'], 403); 
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'short_description' => 'nullable|string',
            'description' => 'nullable|string',
            'image_url' => 'nullable|string',
            'category' => 'required|in:haut,bas,accessoires',
            'quantity' => 'required|integer|min:0',
            'price' => 'required|numeric|min:0',
            'size' => 'nullable|array',
        ]);

        if ($request->has('size')) {
            $validated['size'] = json_encode($validated['size']);
        }

        $product = Product::create($validated);

        return response()->json($product, 201); 
    }


    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404); 
        }

        return response()->json($product, 200); 
    }


    public function update(Request $request, $id)
    {
        if (!Auth::user()->isAdmin()) {
            return response()->json(['error' => 'Access denied. Admins only.'], 403); 
        }

        $product = Product::find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404); 
        }

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'short_description' => 'nullable|string',
            'description' => 'nullable|string',
            'image_url' => 'nullable|string',
            'category' => 'required|in:haut,bas,accessoires',
            'quantity' => 'sometimes|required|integer|min:0',
            'price' => 'required|numeric|min:0',
            'size' => 'nullable|array'
        ]);

        if ($request->has('size')) {
            $validated['size'] = json_encode($validated['size']);
        }

        $product->update($validated);

        return response()->json($product, 200); 
    }


    public function destroy($id)
    {
        if (!Auth::user()->isAdmin()) {
            return response()->json(['error' => 'Access denied. Admins only.'], 403); 
        }

        $product = Product::find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404); 
        }

        $product->delete();

        return response()->json(['message' => 'Product deleted successfully'], 200); 
    }

    public function filterByCategory($category)
{
    $validCategories = ['haut', 'bas', 'accessoires'];
    if (!in_array($category, $validCategories)) {
        return response()->json(['error' => 'Invalid category'], 400);
    }
    $products = Product::where('category', $category)->get();
    return response()->json($products, 200);
}

}
