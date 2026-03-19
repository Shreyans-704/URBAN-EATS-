import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  template: `
    <div class="min-h-screen bg-gradient-luxury pt-24">
      <div class="max-w-4xl mx-auto px-6 py-20">
        <div class="text-center mb-16">
          <h1 class="font-serif text-5xl font-bold text-white mb-4">Guest Reviews</h1>
          <p class="text-white/60 text-lg">See what our valued guests have to say about their dining experiences</p>
        </div>
        
        <!-- Placeholder reviews -->
        <div class="space-y-8">
          <div class="bg-luxury-dark p-8 rounded-lg border border-luxury-gold/20">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-luxury-gold font-serif text-xl">Featured Review</h3>
              <div class="flex text-luxury-gold">
                <span>★★★★★</span>
              </div>
            </div>
            <p class="text-white/60 mb-4">Reviews section coming soon. Check back for authentic guest testimonials and experiences.</p>
            <p class="text-white/40 text-sm">- Guest Name</p>
          </div>

          <div class="bg-luxury-dark p-8 rounded-lg border border-luxury-gold/20">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-luxury-gold font-serif text-xl">Another Review</h3>
              <div class="flex text-luxury-gold">
                <span>★★★★★</span>
              </div>
            </div>
            <p class="text-white/60 mb-4">More guest reviews will be added to showcase the exceptional quality of our dining experiences.</p>
            <p class="text-white/40 text-sm">- Guest Name</p>
          </div>
        </div>

        <div class="text-center mt-16 bg-luxury-dark p-12 rounded-lg border border-luxury-gold/20">
          <p class="text-white/60 text-lg mb-6">Share your experience with us</p>
          <a routerLink="/contact" class="inline-block px-8 py-3 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all duration-300 font-serif font-bold uppercase tracking-wider">
            Write a Review
          </a>
        </div>
      </div>
    </div>
  `
})
export class ReviewsPage {}
