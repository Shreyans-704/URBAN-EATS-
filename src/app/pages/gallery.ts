import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <div class="min-h-screen bg-white pt-24">
      <div class="max-w-7xl mx-auto px-6 py-20">
        <div class="text-center mb-16">
          <h1 class="font-serif text-5xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p class="text-gray-600 text-lg">Explore our collection of culinary artistry and dining experiences</p>
        </div>
        
        <!-- Gallery grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="relative aspect-square rounded-lg overflow-hidden shadow-luxury group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop" alt="Gallery - Gourmet vegetables" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span class="text-white font-serif text-lg">Organic Creations</span>
            </div>
          </div>
          <div class="relative aspect-square rounded-lg overflow-hidden shadow-luxury group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=500&fit=crop" alt="Gallery - Restaurant Interior" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span class="text-white font-serif text-lg">Ambiance</span>
            </div>
          </div>
          <div class="relative aspect-square rounded-lg overflow-hidden shadow-luxury group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop" alt="Gallery - Gourmet Plating" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span class="text-white font-serif text-lg\">Artful Plating</span>
            </div>
          </div>
          <div class="relative aspect-square rounded-lg overflow-hidden shadow-luxury group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop" alt="Gallery - Plant-based elegance" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span class="text-white font-serif text-lg\">Botanical elegance</span>
            </div>
          </div>
          <div class="relative aspect-square rounded-lg overflow-hidden shadow-luxury group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop" alt="Gallery - Roasted Vegetables" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span class="text-white font-serif text-lg\">Craftsmanship</span>
            </div>
          </div>
          <div class="relative aspect-square rounded-lg overflow-hidden shadow-luxury group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=500&fit=crop" alt="Gallery - Wine Pairing" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span class="text-white font-serif text-lg\">Wine Pairing</span>
            </div>
          </div>
        </div>

        <div class="text-center mt-16 bg-gray-100 p-12 rounded-lg">
          <p class="text-gray-600 text-lg mb-6">Gallery gallery images coming soon</p>
          <p class="text-gray-500 text-sm">Continue exploring the site or contact us for more information.</p>
        </div>
      </div>
    </div>
  `
})
export class GalleryPage {}
