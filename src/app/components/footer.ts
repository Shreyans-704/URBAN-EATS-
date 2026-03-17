import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="bg-luxury-black border-t border-luxury-gold/20">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-2 mb-4">
              <svg class="w-8 h-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#D4AF37;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#B8932E;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <!-- Dome/Arch -->
                <path d="M 30 40 Q 50 15 70 40" stroke="url(#logoGrad)" stroke-width="3" fill="none" stroke-linecap="round"/>
                <!-- Fork -->
                <g transform="translate(25, 45)">
                  <rect x="2" y="0" width="2" height="15" fill="url(#logoGrad)"/>
                  <rect x="-1" y="12" width="1" height="3" fill="url(#logoGrad)"/>
                  <rect x="2" y="12" width="1" height="3" fill="url(#logoGrad)"/>
                  <rect x="5" y="12" width="1" height="3" fill="url(#logoGrad)"/>
                </g>
                <!-- Knife -->
                <g transform="translate(50, 45)">
                  <rect x="-1" y="0" width="2" height="18" fill="url(#logoGrad)"/>
                </g>
                <!-- Spoon -->
                <g transform="translate(70, 45)">
                  <rect x="-2" y="0" width="4" height="12" fill="url(#logoGrad)"/>
                  <ellipse cx="0" cy="15" rx="3" ry="3" fill="url(#logoGrad)"/>
                </g>
              </svg>
              <span class="text-2xl font-serif font-bold text-luxury-gold">URBAN EATS</span>
            </div>
            <p class="text-white/60 text-sm leading-relaxed">
              Experience the art of fine plant-based dining with premium ingredients and exceptional service.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-white font-serif font-semibold mb-4 uppercase text-sm">Navigation</h4>
            <ul class="space-y-2">
              <li><a routerLink="/" class="text-white/60 hover:text-luxury-gold text-sm transition-colors">Home</a></li>
              <li><a routerLink="/menu" class="text-white/60 hover:text-luxury-gold text-sm transition-colors">Menu</a></li>
              <li><a routerLink="/gallery" class="text-white/60 hover:text-luxury-gold text-sm transition-colors">Gallery</a></li>
              <li><a routerLink="/reservations" class="text-white/60 hover:text-luxury-gold text-sm transition-colors">Book Table</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-white font-serif font-semibold mb-4 uppercase text-sm">Contact</h4>
            <ul class="space-y-2">
              <li class="text-white/60 text-sm">+1 (555) 123-4567</li>
              <li class="text-white/60 text-sm">info&#64;urbaneats.restaurant</li>
              <li class="text-white/60 text-sm">123 Luxury Lane<br>Premium City, PC 12345</li>
            </ul>
          </div>

          <!-- Hours -->
          <div>
            <h4 class="text-white font-serif font-semibold mb-4 uppercase text-sm">Hours</h4>
            <ul class="space-y-2 text-white/60 text-sm">
              <li>Mon - Thu: 5:00 PM - 11:00 PM</li>
              <li>Fri - Sat: 5:00 PM - 12:00 AM</li>
              <li>Sunday: 5:00 PM - 10:00 PM</li>
              <li class="pt-2 text-luxury-gold">Closed Mondays in Summer</li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-luxury-gold/20 pt-8">
          <!-- Social Links -->
          <div class="flex items-center justify-center gap-8 mb-8">
            <button (click)="scrollToTop()" class="text-white/60 hover:text-luxury-gold transition-colors cursor-pointer">
              <span class="text-sm">Instagram</span>
            </button>
            <button (click)="scrollToTop()" class="text-white/60 hover:text-luxury-gold transition-colors cursor-pointer">
              <span class="text-sm">Facebook</span>
            </button>
            <button (click)="scrollToTop()" class="text-white/60 hover:text-luxury-gold transition-colors cursor-pointer">
              <span class="text-sm">Twitter</span>
            </button>
          </div>

          <!-- Copyright -->
          <div (click)="scrollToTop()" class="text-center text-white/40 text-xs cursor-pointer hover:text-white/60 transition-colors">
            <p>&copy; 2024 Urban Eats Restaurant. All rights reserved. | Crafted with excellence</p>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
