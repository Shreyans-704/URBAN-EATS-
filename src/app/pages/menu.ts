import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
    <div class="min-h-screen bg-gradient-luxury pt-24">
      <div class="max-w-7xl mx-auto px-6 py-20">
        <div class="text-center mb-16">
          <h1 class="font-serif text-5xl font-bold text-white mb-4">Our Menu</h1>
          <p class="text-white/60 text-lg">Discover our carefully curated selection of gourmet plant-based creations and exceptional vegetarian dishes</p>
        </div>
        
        <!-- Appetizers Section -->
        <div class="mb-20">
          <h2 class="font-serif text-3xl font-bold text-luxury-gold mb-8 border-b border-luxury-gold/30 pb-4">Appetizers</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-luxury-dark rounded-lg border border-luxury-gold/20 hover:shadow-gold-glow transition-all overflow-hidden">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop" alt="Truffle Mushroom Caps" class="w-full h-48 object-cover">
              <div class="p-8">
                <h3 class="text-luxury-gold font-serif text-xl mb-2">Truffle Mushroom Caps</h3>
                <p class="text-white/60 text-sm mb-4">Roasted heirloom mushrooms filled with cashew cream and black truffle oil</p>
                <p class="text-luxury-gold font-bold">₹1,328</p>
              </div>
            </div>
            <div class="bg-luxury-dark rounded-lg border border-luxury-gold/20 hover:shadow-gold-glow transition-all overflow-hidden">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=300&fit=crop" alt="Crispy Tofu Bites" class="w-full h-48 object-cover">
              <div class="p-8">
                <h3 class="text-luxury-gold font-serif text-xl mb-2">Crispy Tofu Bites</h3>
                <p class="text-white/60 text-sm mb-4">Pan-seared organic tofu with soy glaze and sesame seeds</p>
                <p class="text-luxury-gold font-bold">₹1,162</p>
              </div>
            </div>
            <div class="bg-luxury-dark rounded-lg border border-luxury-gold/20 hover:shadow-gold-glow transition-all overflow-hidden">
              <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=300&fit=crop" alt="Heirloom Beet Salad" class="w-full h-48 object-cover">
              <div class="p-8">
                <h3 class="text-luxury-gold font-serif text-xl mb-2">Heirloom Beet Salad</h3>
                <p class="text-white/60 text-sm mb-4">Roasted heirloom beets with goat cheese, walnuts, and balsamic reduction</p>
                <p class="text-luxury-gold font-bold">₹1,245</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Courses Section -->
        <div class="mb-20">
          <h2 class="font-serif text-3xl font-bold text-luxury-gold mb-8 border-b border-luxury-gold/30 pb-4">Main Courses</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-luxury-dark rounded-lg border border-luxury-gold/20 hover:shadow-gold-glow transition-all overflow-hidden">
              <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop&auto=format&q=80" alt="Black Truffle Risotto" class="w-full h-48 object-cover">
              <div class="p-8">
                <h3 class="text-luxury-gold font-serif text-xl mb-2">Black Truffle Risotto</h3>
                <p class="text-white/60 text-sm mb-4">Creamy arborio rice infused with black truffles, porcini mushrooms, and aged parmesan</p>
                <p class="text-luxury-gold font-bold">₹4,316</p>
              </div>
            </div>
            <div class="bg-luxury-dark rounded-lg border border-luxury-gold/20 hover:shadow-gold-glow transition-all overflow-hidden">
              <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=300&fit=crop" alt="Roasted Heirloom Vegetables" class="w-full h-48 object-cover">
              <div class="p-8">
                <h3 class="text-luxury-gold font-serif text-xl mb-2">Roasted Heirloom Vegetables</h3>
                <p class="text-white/60 text-sm mb-4">Seasonal organic vegetables roasted in herb-infused oil with balsamic reduction</p>
                <p class="text-luxury-gold font-bold">₹3,984</p>
              </div>
            </div>
            <div class="bg-luxury-dark rounded-lg border border-luxury-gold/20 hover:shadow-gold-glow transition-all overflow-hidden">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&h=300&q=80" alt="Eggplant Extravaganza" class="w-full h-48 object-cover">
              <div class="p-8">
                <h3 class="text-luxury-gold font-serif text-xl mb-2">Eggplant Extravaganza</h3>
                <p class="text-white/60 text-sm mb-4">Layered heirloom eggplant with buffalo mozzarella and truffle cream sauce</p>
                <p class="text-luxury-gold font-bold">₹4,482</p>
              </div>
            </div>
            <div class="bg-luxury-dark rounded-lg border border-luxury-gold/20 hover:shadow-gold-glow transition-all overflow-hidden">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&h=300&q=80" alt="Wild Mushroom Wellington" class="w-full h-48 object-cover">
              <div class="p-8">
                <h3 class="text-luxury-gold font-serif text-xl mb-2">Wild Mushroom Wellington</h3>
                <p class="text-white/60 text-sm mb-4">Medley of wild mushrooms wrapped in puff pastry with red wine reduction</p>
                <p class="text-luxury-gold font-bold">₹4,648</p>
              </div>
            </div>
            <div class="bg-luxury-dark rounded-lg border border-luxury-gold/20 hover:shadow-gold-glow transition-all overflow-hidden">
              <img src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=300&fit=crop" alt="Spinach & Ricotta Cannelloni" class="w-full h-48 object-cover">
              <div class="p-8">
                <h3 class="text-luxury-gold font-serif text-xl mb-2">Spinach & Ricotta Cannelloni</h3>
                <p class="text-white/60 text-sm mb-4">Handmade pasta with organic spinach, ricotta, and fresh herbs in marinara sauce</p>
                <p class="text-luxury-gold font-bold">₹4,150</p>
              </div>
            </div>
            <div class="bg-luxury-dark rounded-lg border border-luxury-gold/20 hover:shadow-gold-glow transition-all overflow-hidden">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop&auto=format&q=80" alt="Roasted Cauliflower Steak" class="w-full h-48 object-cover">
              <div class="p-8">
                <h3 class="text-luxury-gold font-serif text-xl mb-2">Roasted Cauliflower Steak</h3>
                <p class="text-white/60 text-sm mb-4">Thick-cut cauliflower with herb butter, charred lemonand crispy chickpeas</p>
                <p class="text-luxury-gold font-bold">₹3,652</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sides & Desserts Section -->
        <div class="mb-20">
          <h2 class="font-serif text-3xl font-bold text-luxury-gold mb-8 border-b border-luxury-gold/30 pb-4">Sides & Desserts</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-luxury-dark rounded-lg border border-luxury-gold/20 hover:shadow-gold-glow transition-all overflow-hidden">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=300&fit=crop" alt="Truffle Parmesan Fries" class="w-full h-48 object-cover">
              <div class="p-8">
                <h3 class="text-luxury-gold font-serif text-xl mb-2">Truffle Parmesan Fries</h3>
                <p class="text-white/60 text-sm mb-4">Hand-cut fries tossed with truffle oil and authentic parmesan</p>
                <p class="text-luxury-gold font-bold">₹996</p>
              </div>
            </div>
            <div class="bg-luxury-dark rounded-lg border border-luxury-gold/20 hover:shadow-gold-glow transition-all overflow-hidden">
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=300&fit=crop" alt="Chocolate Soufflé" class="w-full h-48 object-cover">
              <div class="p-8">
                <h3 class="text-luxury-gold font-serif text-xl mb-2">Chocolate Soufflé</h3>
                <p class="text-white/60 text-sm mb-4">Dark chocolate soufflé with raspberry coulis and whipped cream</p>
                <p class="text-luxury-gold font-bold">₹1,494</p>
              </div>
            </div>
            <div class="bg-luxury-dark rounded-lg border border-luxury-gold/20 hover:shadow-gold-glow transition-all overflow-hidden">
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=300&fit=crop" alt="Pistachio Crème Brûlée" class="w-full h-48 object-cover">
              <div class="p-8">
                <h3 class="text-luxury-gold font-serif text-xl mb-2">Pistachio Crème Brûlée</h3>
                <p class="text-white/60 text-sm mb-4">Silky pistachio custard with caramelized sugar top</p>
                <p class="text-luxury-gold font-bold">₹1,328</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center bg-gradient-to-r from-luxury-gold/10 to-luxury-bronze/10 p-12 rounded-lg border border-luxury-gold/20">
          <p class="text-white text-lg mb-4 font-serif">Seasonal Specials Available</p>
          <p class="text-white/60">Our menu changes seasonally to feature the finest organic and locally-sourced ingredients. Fresh vegetarian creations crafted daily.</p>
        </div>
      </div>
    </div>
  `
})
export class MenuPage {}
