<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word,
            'short_description' => $this->faker->sentence,
            'description' => $this->faker->sentence,
            'image_url' => $this->faker->imageUrl(640, 480, 'product', true, 'Faker'), 
            'category' => $this->faker->randomElement(['haut', 'bas', 'accessoires']),
            'quantity' => $this->faker->numberBetween(1, 300),
            'size' => json_encode($this->faker->randomElements(['S', 'M', 'L', 'XL'], $this->faker->numberBetween(1, 4))),
            'price' => $this->faker->randomFloat(2, 1, 100),        
        ];
    }
}
