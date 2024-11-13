<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => 'Test123*'
        ]);

        $products = [
            [
                'name' => 'T-shirt en coton',
                'short_description' => 'Un t-shirt confortable en coton biologique.',
                'description' => 'Ce t-shirt en coton biologique est parfait pour un usage quotidien grâce à son confort et sa douceur.',
                'image_url' => 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fHwy',
                'category' => 'haut',
                'quantity' => 150,
                'size' => json_encode(['S', 'M', 'L']),
                'price' => 19.99,
            ],
            [
                'name' => 'Jean slim',
                'short_description' => 'Jean slim ajusté pour un look moderne.',
                'description' => 'Ce jean slim offre un ajustement parfait et un look moderne pour toutes les occasions.',
                'image_url' => 'https://images.unsplash.com/photo-1495298599282-d8920eb5009b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVhbiUyMHNsaW18ZW58MHx8MHx8fDI%3D',
                'category' => 'bas',
                'quantity' => 100,
                'size' => json_encode(['M', 'L', 'XL']),
                'price' => 39.99,
            ],
            [
                'name' => 'Écharpe en laine',
                'short_description' => 'Écharpe chaude en laine mérinos.',
                'description' => 'Restez au chaud cet hiver avec cette écharpe en laine mérinos, douce et confortable.',
                'image_url' => 'https://images.unsplash.com/photo-1678801868975-32786ae5aeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUMzJUE5Y2hhcnBlJTIwZW4lMjBsYWluZXxlbnwwfHwwfHx8Mg%3D%3D',
                'category' => 'accessoires',
                'quantity' => 50,
                'size' => json_encode(['S', 'M']),
                'price' => 29.99,
            ],
            [
                'name' => 'Chemise en lin',
                'short_description' => 'Chemise légère en lin pour l\'été.',
                'description' => 'Cette chemise en lin est parfaite pour les journées chaudes grâce à sa légèreté et sa respirabilité.',
                'image_url' => 'https://images.unsplash.com/photo-1646237216919-0101bc10bbee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoZW1pc2UlMjBlbiUyMGxpbnxlbnwwfHwwfHx8Mg%3D%3D',
                'category' => 'haut',
                'quantity' => 80,
                'size' => json_encode(['S', 'M', 'L', 'XL']),
                'price' => 49.99,
            ],
            [
                'name' => 'Chapeau en paille',
                'short_description' => 'Chapeau en paille pour un look estival.',
                'description' => 'Complétez votre look estival avec ce chapeau en paille, parfait pour se protéger du soleil.',
                'image_url' => 'https://images.unsplash.com/photo-1592657231589-ea0567892bcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYXBlYXUlMjBwYWlsbGV8ZW58MHx8MHx8fDI%3D',
                'category' => 'accessoires',
                'quantity' => 40,
                'price' => 15.99,
            ],
            [
                'name' => 'Veste en cuir',
                'short_description' => 'Veste en cuir véritable pour un style intemporel.',
                'description' => 'Cette veste en cuir véritable apporte une touche de sophistication et de durabilité à votre garde-robe.',
                'image_url' => 'https://images.unsplash.com/photo-1620403724133-1a06ea2fc692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVzdGUlMjBlbiUyMGN1aXJ8ZW58MHx8MHx8fDI%3D',
                'category' => 'haut',
                'quantity' => 30,
                'size' => json_encode(['M', 'L', 'XL']),
                'price' => 199.99,
            ],
            [
                'name' => 'Jupe plissée',
                'short_description' => 'Jupe plissée élégante pour toutes les occasions.',
                'description' => 'Cette jupe plissée est à la fois élégante et polyvalente, parfaite pour une tenue chic ou décontractée.',
                'image_url' => 'https://images.unsplash.com/photo-1533659828870-95ee305cee3e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'category' => 'bas',
                'quantity' => 60,
                'size' => json_encode(['S', 'M', 'L']),
                'price' => 34.99,
            ],
            [
                'name' => 'Sac à dos en toile',
                'short_description' => 'Sac à dos robuste en toile pour un usage quotidien.',
                'description' => 'Ce sac à dos en toile est parfait pour transporter vos affaires au quotidien grâce à sa robustesse et ses multiples compartiments.',
                'image_url' => 'https://images.unsplash.com/photo-1600019248002-f4c4898f739b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhYyUyMCVDMyVBMCUyMGRvcyUyMHRvaWxlfGVufDB8fDB8fHwy',
                'category' => 'accessoires',
                'quantity' => 75,
                'price' => 49.99,
            ],
            [
                'name' => 'Pull en cachemire',
                'short_description' => 'Pull en cachemire doux et luxueux.',
                'description' => 'Profitez du confort et de la chaleur de ce pull en cachemire, parfait pour les journées froides.',
                'image_url' => 'https://images.unsplash.com/photo-1523251654373-00615b266166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHB1bGwlMjBlbiUyMGNhc2hlbWlyZXxlbnwwfHwwfHx8Mg%3D%3D',
                'category' => 'haut',
                'quantity' => 25,
                'size' => json_encode(['S', 'M', 'L']),
                'price' => 129.99,
            ],
            [
                'name' => 'Short en jean',
                'short_description' => 'Short en jean décontracté pour l\'été.',
                'description' => 'Ce short en jean est idéal pour les journées chaudes avec son style décontracté et confortable.',
                'image_url' => 'https://images.unsplash.com/photo-1536344761603-cd0cd51aacc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcnQlMjBlbiUyMGplYW58ZW58MHx8MHx8fDI%3D',
                'category' => 'bas',
                'quantity' => 90,
                'size' => json_encode(['M', 'L', 'XL']),
                'price' => 24.99,
            ],
            [
                'name' => 'Lunettes de soleil',
                'short_description' => 'Lunettes de soleil stylées avec protection UV.',
                'description' => 'Protégez vos yeux avec style grâce à ces lunettes de soleil offrant une protection UV complète.',
                'image_url' => 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHVuZXR0ZXMlMjBkZSUyMHNvbGVpbHxlbnwwfHwwfHx8Mg%3D%3D',
                'category' => 'accessoires',
                'quantity' => 110,
                'price' => 19.99,
            ],
            [
                'name' => 'Blouson en denim',
                'short_description' => 'Blouson en denim pour un look classique.',
                'description' => 'Ce blouson en denim est un incontournable de la garde-robe, parfait pour un style décontracté.',
                'image_url' => 'https://images.unsplash.com/photo-1533642128742-a542f568eb53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvdXNvbiUyMGVuJTIwamVhbnN8ZW58MHx8MHx8fDI%3D',
                'category' => 'haut',
                'quantity' => 45,
                'size' => json_encode(['M', 'L', 'XL']),
                'price' => 79.99,
            ],
            [
                'name' => 'Montre en acier inoxydable',
                'short_description' => 'Montre élégante en acier inoxydable.',
                'description' => 'Ajoutez une touche d\'élégance à votre tenue avec cette montre en acier inoxydable, parfaite pour toutes les occasions.',
                'image_url' => 'https://images.unsplash.com/photo-1623998022151-6a4df88517cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9udHJlJTIwZW4lMjBhY2llcnxlbnwwfHwwfHx8Mg%3D%3D',
                'category' => 'accessoires',
                'quantity' => 65,
                'size' => json_encode(['unique']),
                'price' => 149.99,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
