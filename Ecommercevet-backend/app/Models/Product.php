<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'short_description',
        'description',
        'image_url',
        'category',
        'quantity',
        'size',
    ];

    public function orderProducts()
    {
        return $this->hasMany(OrderProduct::class);
    }
}
