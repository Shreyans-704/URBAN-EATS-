import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/40 border-b border-luxury-gold/20">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <a routerLink="/" class="flex items-center gap-2">
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
            <span class="text-xl font-serif font-bold text-luxury-gold tracking-wider">URBAN EATS</span>
          </a>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center gap-12">
          <a 
            routerLink="/" 
            routerLinkActive="text-luxury-gold" 
            [routerLinkActiveOptions]="{exact: true}"
            class="text-white/80 hover:text-luxury-gold text-sm uppercase tracking-wider transition-colors duration-300"
          >
            Home
          </a>
          <a 
            routerLink="/menu" 
            routerLinkActive="text-luxury-gold"
            class="text-white/80 hover:text-luxury-gold text-sm uppercase tracking-wider transition-colors duration-300"
          >
            Menu
          </a>
          <a 
            routerLink="/gallery" 
            routerLinkActive="text-luxury-gold"
            class="text-white/80 hover:text-luxury-gold text-sm uppercase tracking-wider transition-colors duration-300"
          >
            Gallery
          </a>
          <a 
            routerLink="/reviews" 
            routerLinkActive="text-luxury-gold"
            class="text-white/80 hover:text-luxury-gold text-sm uppercase tracking-wider transition-colors duration-300"
          >
            Reviews
          </a>
          <a 
            routerLink="/reservations" 
            routerLinkActive="text-luxury-gold"
            class="text-white/80 hover:text-luxury-gold text-sm uppercase tracking-wider transition-colors duration-300"
          >
            Reservations
          </a>
          <a 
            routerLink="/contact" 
            routerLinkActive="text-luxury-gold"
            class="text-white/80 hover:text-luxury-gold text-sm uppercase tracking-wider transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <a 
            routerLink="/reservations"
            class="px-6 py-2 border border-luxury-gold/60 text-luxury-gold hover:bg-luxury-gold hover:text-black text-sm uppercase tracking-wider transition-all duration-300 font-medium"
          >
            Book Now
          </a>
        </div>

        <!-- Mobile Menu Toggle (placeholder for future implementation) -->
        <button class="md:hidden text-white/80 hover:text-luxury-gold">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}
