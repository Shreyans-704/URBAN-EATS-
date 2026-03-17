import { Component, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="relative min-h-screen bg-gradient-luxury flex items-center overflow-hidden pt-20">
      <!-- Animated background elements -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-20 left-10 w-72 h-72 bg-luxury-gold/5 rounded-full blur-3xl animate-float-slower"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-luxury-bronze/5 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <h1 class="font-serif text-5xl lg:text-6xl font-bold text-white leading-tight">
            Simple Ingredients. <span class="text-luxury-gold">Extraordinary</span> Taste
          </h1>
          <p class="text-white/70 text-lg leading-relaxed max-w-lg">
            Experience the pinnacle of vegetarian fine dining with our meticulously curated selection of gourmet plant-based creations, paired with an exceptional wine collection and impeccable service.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 pt-4">
            <button routerLink="/reservations" class="px-8 py-4 bg-luxury-gold text-black font-serif font-bold uppercase tracking-wider hover:bg-luxury-bronze transition-all duration-300 shadow-luxury cursor-pointer">
              Book a Table
            </button>
            <button routerLink="/menu" class="px-8 py-4 border-2 border-luxury-gold text-luxury-gold font-serif font-bold uppercase tracking-wider hover:bg-luxury-gold hover:text-black transition-all duration-300 cursor-pointer">
              View Menu
            </button>
          </div>
        </div>

        <!-- Right Showcase (Food Image with 3D Scroll Rotation) -->
        <div class="relative h-96 lg:h-full flex items-center justify-center">
          <div class="relative w-full h-full flex items-center justify-center" style="perspective: 1200px;">
            <img src="/hero.png?v=1" alt="Fresh salad" class="w-80 h-80 lg:w-96 lg:h-96 object-contain" [style.transform]="'rotateX(8deg) rotateY(' + (-12 + scrollRotation()/5) + 'deg) rotateZ(' + (4 + scrollRotation()/10) + 'deg) translateZ(50px)'" style="filter: drop-shadow(0 30px 60px rgba(212,175,55,0.4)) drop-shadow(0 15px 30px rgba(0,0,0,0.6));" />
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div class="flex flex-col items-center gap-2 animate-bounce">
          <p class="text-white/60 text-xs uppercase tracking-wider">Scroll to explore</p>
          <svg class="w-5 h-5 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="relative bg-white py-20 lg:py-32">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Image with 3D Effect -->
          <div class="relative" style="perspective: 1200px;">
            <div class="rounded-lg overflow-hidden shadow-luxury" style="transform: rotateX(6deg) rotateY(10deg) rotateZ(-3deg) translateZ(40px); filter: drop-shadow(0 25px 50px rgba(212,175,55,0.3)) drop-shadow(0 10px 25px rgba(0,0,0,0.5)); animation: float 6s ease-in-out infinite;">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop" alt="Fine dining vegetarian dishes" class="w-full h-full object-cover" />
            </div>
          </div>

          <!-- Content -->
          <div class="space-y-6">
            <p class="text-luxury-gold font-script text-xl">Discover Our Heritage</p>
            <h2 class="font-serif text-4xl font-bold text-gray-900">
              Pioneering Plant-Based Excellence Since 1995
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Urban Eats stands as a beacon of culinary excellence, where tradition meets innovation in the world of fine vegetarian dining. Our chefs meticulously source only the finest organic produce, sustainable grains, and premium plant-based ingredients from the most reputable suppliers worldwide, ensuring every dish that reaches your table is a masterpiece of flavor and quality.
            </p>
            <p class="text-gray-700 leading-relaxed">
              With three decades of expertise, we've perfected the art of plant-based fine dining. Our commitment to excellence is evident in every aspect: from the careful selection and preparation of seasonal ingredients to the warm ambiance of our dining rooms, designed to create unforgettable moments of culinary discovery.
            </p>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <p class="text-3xl font-bold text-luxury-gold">30+</p>
                <p class="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div>
                <p class="text-3xl font-bold text-luxury-gold">50K+</p>
                <p class="text-gray-600 text-sm">Happy Guests</p>
              </div>
              <div>
                <p class="text-3xl font-bold text-luxury-gold">5★</p>
                <p class="text-gray-600 text-sm">Rated Excellent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Preview Section -->
    <section class="relative bg-gradient-luxury py-20 lg:py-32">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-luxury-gold font-script text-xl mb-2">Culinary Delights</p>
          <h2 class="font-serif text-4xl lg:text-5xl font-bold text-white">
            Signature Plant-Based Creations
          </h2>
          <p class="text-white/60 mt-4 max-w-2xl mx-auto">
            Each dish is a carefully crafted masterpiece of vegetables, grains, and legumes, showcasing our dedication to sustainable luxury and exceptional flavor.
          </p>
        </div>

        <!-- Menu Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Menu Item 1 -->
          <div class="bg-luxury-dark rounded-lg overflow-hidden shadow-luxury hover:shadow-gold-glow transition-all duration-300 group">
            <div class="aspect-square bg-gradient-to-br from-green-800 to-emerald-950 flex items-center justify-center relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop" alt="Truffle Risotto with mushrooms" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div class="absolute inset-0 opacity-0 group-hover:opacity-30 bg-luxury-gold transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
              <h3 class="font-serif text-xl text-luxury-gold mb-2">Black Truffle Risotto</h3>
              <p class="text-white/60 text-sm mb-4">Creamy arborio rice infused with black truffles, porcini mushrooms, and aged parmesan.</p>
              <p class="text-luxury-gold font-bold text-lg">$52</p>
            </div>
          </div>

          <!-- Menu Item 2 -->
          <div class="bg-luxury-dark rounded-lg overflow-hidden shadow-luxury hover:shadow-gold-glow transition-all duration-300 group">
            <div class="aspect-square bg-gradient-to-br from-amber-700 to-orange-900 flex items-center justify-center relative overflow-hidden">
              <img src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg" alt="Roasted Heirloom Vegetables" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div class="absolute inset-0 opacity-0 group-hover:opacity-30 bg-luxury-gold transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
              <h3 class="font-serif text-xl text-luxury-gold mb-2">Roasted Heirloom Vegetables</h3>
              <p class="text-white/60 text-sm mb-4">Seasonal organic vegetables roasted in herb-infused oil with balsamic reduction and edible flowers.</p>
              <p class="text-luxury-gold font-bold text-lg">$48</p>
            </div>
          </div>

          <!-- Menu Item 3 -->
          <div class="bg-luxury-dark rounded-lg overflow-hidden shadow-luxury hover:shadow-gold-glow transition-all duration-300 group">
            <div class="aspect-square bg-gradient-to-br from-purple-900 to-indigo-950 flex items-center justify-center relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop" alt="Eggplant parmesan" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div class="absolute inset-0 opacity-0 group-hover:opacity-30 bg-luxury-gold transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
              <h3 class="font-serif text-xl text-luxury-gold mb-2">Eggplant Extravaganza</h3>
              <p class="text-white/60 text-sm mb-4">Layered heirloom eggplant with buffalo mozzarella, fresh basil, and handmade pasta in truffle cream sauce.</p>
              <p class="text-luxury-gold font-bold text-lg">$54</p>
            </div>
          </div>
        </div>

        <!-- View Full Menu Button -->
        <div class="text-center mt-12">
          <a routerLink="/menu" class="inline-block px-8 py-4 border-2 border-luxury-gold text-luxury-gold font-serif font-bold uppercase tracking-wider hover:bg-luxury-gold hover:text-black transition-all duration-300">
            View Full Menu
          </a>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="relative bg-white py-20 lg:py-32">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-luxury-gold font-script text-xl mb-2">Visual Excellence</p>
          <h2 class="font-serif text-4xl lg:text-5xl font-bold text-gray-900">
            Culinary Gallery
          </h2>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Gallery Item 1 -->
          <div class="relative rounded-lg overflow-hidden shadow-luxury group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=400&fit=crop" alt="Gourmet Plating" class="w-full h-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span class="text-white font-serif text-lg">Signature Plates</span>
            </div>
          </div>

          <!-- Gallery Item 2 -->
          <div class="relative rounded-lg overflow-hidden shadow-luxury group cursor-pointer md:col-span-1 lg:col-span-2 md:row-span-2">
            <img src="https://images.unsplash.com/photo-1504674900769-8be92e0dcf00?w=800&h=400&fit=crop" alt="Fine Dining Experience" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span class="text-white font-serif text-lg">Ambiance</span>
            </div>
          </div>

          <!-- Gallery Item 3 -->
          <div class="relative rounded-lg overflow-hidden shadow-luxury group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop" alt="Signature Dishes" class="w-full h-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span class="text-white font-serif text-lg">Botanical Bliss</span>
            </div>
          </div>

          <!-- Gallery Item 4 -->
          <div class="relative rounded-lg overflow-hidden shadow-luxury group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop" alt="Organic Selection" class="w-full h-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span class="text-white font-serif text-lg">Organic Excellence</span>
            </div>
          </div>

          <!-- Gallery Item 5 -->
          <div class="relative rounded-lg overflow-hidden shadow-luxury group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop" alt="Wine Pairing" class="w-full h-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span class="text-white font-serif text-lg">Collection</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Ingredients Section -->
    <section class="relative bg-gradient-luxury py-20 lg:py-32">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-luxury-gold font-script text-xl mb-2">Our Foundation</p>
          <h2 class="font-serif text-4xl lg:text-5xl font-bold text-white">
            Premium Ingredients
          </h2>
          <p class="text-white/60 mt-4 max-w-2xl mx-auto">
            We source only the finest, most exclusive ingredients from the world's most respected suppliers.
          </p>
        </div>

        <!-- Ingredients Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Ingredient 1 -->
          <div class="relative rounded-lg overflow-hidden shadow-luxury group">
            <img src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop" alt="Organic Legumes & Pulses" class="w-full h-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="p-6 bg-luxury-dark">
              <h3 class="text-luxury-gold font-serif text-xl mb-2">Organic Legumes & Pulses</h3>
              <p class="text-white/60 text-sm">Hand-selected legumes and pulses with superior nutritional value and rich, complex flavors.</p>
            </div>
          </div>

          <!-- Ingredient 2 -->
          <div class="relative rounded-lg overflow-hidden shadow-luxury group">
            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop" alt="Seasonal Vegetables" class="w-full h-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="p-6 bg-luxury-dark">
              <h3 class="text-luxury-gold font-serif text-xl mb-2">Seasonal Vegetables</h3>
              <p class="text-white/60 text-sm">Farm-to-table fresh produce sourced from local organic farmers.</p>
            </div>
          </div>

          <!-- Ingredient 3 -->
          <div class="relative rounded-lg overflow-hidden shadow-luxury group">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop" alt="Curated Seasonings" class="w-full h-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="p-6 bg-luxury-dark">
              <h3 class="text-luxury-gold font-serif text-xl mb-2">Curated Seasonings</h3>
              <p class="text-white/60 text-sm">Exotic spices and fresh herbs carefully selected for distinct flavors.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events Scroll Section -->
    <section class="relative bg-white py-20 lg:py-32 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-luxury-gold font-script text-xl mb-2">Special Occasions</p>
          <h2 class="font-serif text-4xl lg:text-5xl font-bold text-gray-900">
            Upcoming Events
          </h2>
          <p class="text-gray-600 text-lg mt-4">Scroll to explore our exclusive dining experiences</p>
        </div>

        <!-- Horizontal Scrolling Container -->
        <div class="relative">
          <!-- Scroll Container -->
          <div class="overflow-x-auto overflow-y-hidden scrollbar-hide">
            <div class="flex gap-8 pb-6 min-w-max px-6 lg:px-0">
              <!-- Event Card 1 -->
              <div class="flex-shrink-0 w-96 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-luxury-sm hover:shadow-luxury transition-all duration-300 transform hover:scale-105 group cursor-pointer">
                <div class="relative overflow-hidden h-52">
                  <img src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&h=200&q=80" alt="Wine Tasting Night" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div class="absolute top-4 right-4 bg-luxury-gold text-black px-4 py-2 rounded-full text-xs font-bold">WINE</div>
                </div>
                <div class="p-6">
                  <h3 class="font-serif text-xl text-gray-900 mb-3">Wine Tasting & Pairing</h3>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-2">Exclusive wine tasting with our sommelier pairing premium wines with our finest plant-based creations.</p>
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-luxury-gold font-semibold text-sm">March 15, 2024</p>
                      <p class="text-gray-500 text-xs">7:00 PM</p>
                    </div>
                    <button class="text-luxury-gold hover:text-luxury-bronze text-sm font-semibold transition-colors">→</button>
                  </div>
                </div>
              </div>

              <!-- Event Card 2 -->
              <div class="flex-shrink-0 w-96 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-luxury-sm hover:shadow-luxury transition-all duration-300 transform hover:scale-105 group cursor-pointer">
                <div class="relative overflow-hidden h-52">
                  <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&h=200&q=80" alt="Chef's Table" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div class="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold">CHEF'S</div>
                </div>
                <div class="p-6">
                  <h3 class="font-serif text-xl text-gray-900 mb-3">Chef's Table Experience</h3>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-2">Intimate 8-course tasting menu prepared directly in front of you by our master chef.</p>
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-luxury-gold font-semibold text-sm">March 22, 2024</p>
                      <p class="text-gray-500 text-xs">7:30 PM</p>
                    </div>
                    <button class="text-luxury-gold hover:text-luxury-bronze text-sm font-semibold transition-colors">→</button>
                  </div>
                </div>
              </div>

              <!-- Event Card 3 -->
              <div class="flex-shrink-0 w-96 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-luxury-sm hover:shadow-luxury transition-all duration-300 transform hover:scale-105 group cursor-pointer">
                <div class="relative overflow-hidden h-52">
                  <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&h=200&q=80" alt="Private Dining" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div class="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold">PRIVATE</div>
                </div>
                <div class="p-6">
                  <h3 class="font-serif text-xl text-gray-900 mb-3">Private Event Hosting</h3>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-2">Host your celebration in our elegant private dining room with custom vegetarian menus.</p>
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-luxury-gold font-semibold text-sm">Year-Round</p>
                      <p class="text-gray-500 text-xs">Custom Time</p>
                    </div>
                    <button class="text-luxury-gold hover:text-luxury-bronze text-sm font-semibold transition-colors">→</button>
                  </div>
                </div>
              </div>

              <!-- Event Card 4 -->
              <div class="flex-shrink-0 w-96 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-luxury-sm hover:shadow-luxury transition-all duration-300 transform hover:scale-105 group cursor-pointer">
                <div class="relative overflow-hidden h-52">
                  <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&h=200&q=80" alt="Cooking Class" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div class="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold">WORKSHOP</div>
                </div>
                <div class="p-6">
                  <h3 class="font-serif text-xl text-gray-900 mb-3">Vegetarian Cooking Workshop</h3>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-2">Learn signature vegetarian recipes and techniques from our award-winning culinary team.</p>
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-luxury-gold font-semibold text-sm">April 5, 2024</p>
                      <p class="text-gray-500 text-xs">3:00 PM</p>
                    </div>
                    <button class="text-luxury-gold hover:text-luxury-bronze text-sm font-semibold transition-colors">→</button>
                  </div>
                </div>
              </div>

              <!-- Event Card 5 -->
              <div class="flex-shrink-0 w-96 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-luxury-sm hover:shadow-luxury transition-all duration-300 transform hover:scale-105 group cursor-pointer">
                <div class="relative overflow-hidden h-52">
                  <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&h=200&q=80" alt="Farm Experience" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div class="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-xs font-bold">FARM</div>
                </div>
                <div class="p-6">
                  <h3 class="font-serif text-xl text-gray-900 mb-3">Farm-to-Table Experience</h3>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-2">Visit our partner organic farms and see where our finest ingredients are sourced.</p>
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-luxury-gold font-semibold text-sm">April 12, 2024</p>
                      <p class="text-gray-500 text-xs">9:00 AM</p>
                    </div>
                    <button class="text-luxury-gold hover:text-luxury-bronze text-sm font-semibold transition-colors">→</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Scroll Hint -->
          <div class="absolute bottom-0 right-8 hidden lg:flex items-center gap-2 text-gray-500 text-sm animate-bounce">
            <span>Scroll →</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7m0 0l-7 7m7-7H6"></path>
            </svg>
          </div>
        </div>

        <!-- View All Button -->
        <div class="text-center mt-12">
          <button class="px-8 py-3 border-2 border-luxury-gold text-luxury-gold font-serif font-bold uppercase tracking-wider hover:bg-luxury-gold hover:text-black transition-all duration-300">
            View All Events
          </button>
        </div>
      </div>

      <!-- Custom Scrollbar Styling -->
      <style>
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide:hover {
          scrollbar-width: thin;
          scrollbar-color: #d4af37 #f5f5f5;
        }
      </style>
    </section>

    <!-- Booking Section -->
    <section class="relative h-screen bg-gradient-to-br from-black via-gray-900 to-luxury-black flex items-center overflow-hidden">
      <!-- Background Image Overlay -->
      <div class="absolute inset-0 opacity-40">
        <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        <div class="absolute inset-0 bg-gradient-luxury"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 w-full flex items-center justify-center">
        <div class="text-center max-w-2xl mx-auto px-6">
          <h2 class="font-serif text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p class="text-white/70 text-lg mb-10">
            Reserve your table at Urban Eats and indulge in culinary excellence. Our team is ready to ensure your dining experience is nothing short of exceptional.
          </p>
          <button class="px-10 py-5 bg-luxury-gold text-black font-serif font-bold text-lg uppercase tracking-wider hover:bg-luxury-bronze transition-all duration-300 shadow-luxury">
            Book Your Table Now
          </button>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute top-20 left-10 w-40 h-40 bg-luxury-gold/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-60 h-60 bg-luxury-bronze/5 rounded-full blur-3xl"></div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HomePage {
  parallaxOffset = signal(0);
  scrollRotation = signal(0);

  parallax1 = computed(() => this.parallaxOffset() * 0.3);
  parallax2 = computed(() => this.parallaxOffset() * 0.1);
  parallax3 = computed(() => this.parallaxOffset() * 0.5);
  parallax4 = computed(() => this.parallaxOffset() * 0.4);
  parallax5 = computed(() => this.parallaxOffset() * 0.6);

  @HostListener('window:scroll')
  onScroll() {
    this.parallaxOffset.set(window.scrollY);
    this.scrollRotation.set(window.scrollY * 0.5);
  }
}
