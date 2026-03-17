import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-white pt-24">
      <div class="max-w-4xl mx-auto px-6 py-20">
        <div class="text-center mb-16">
          <h1 class="font-serif text-5xl font-bold text-gray-900 mb-4">Book Your Table</h1>
          <p class="text-gray-600 text-lg">Reserve your table at Urban Eats for an unforgettable vegetarian fine dining experience</p>
        </div>

        <!-- Reservation Form -->
        <div class="bg-gray-50 p-12 rounded-lg shadow-luxury">
          <form class="space-y-8">
            <!-- Date and Time -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-700 font-serif font-semibold mb-3">Date</label>
                <input type="date" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold" />
              </div>
              <div>
                <label class="block text-gray-700 font-serif font-semibold mb-3">Time</label>
                <input type="time" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold" />
              </div>
            </div>

            <!-- Guests and Name -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-700 font-serif font-semibold mb-3">Number of Guests</label>
                <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold">
                  <option>Select number of guests</option>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5 Guests</option>
                  <option>6+ Guests</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-700 font-serif font-semibold mb-3">Name</label>
                <input type="text" placeholder="Your full name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold" />
              </div>
            </div>

            <!-- Email and Phone -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-700 font-serif font-semibold mb-3">Email</label>
                <input type="email" placeholder="your&#64;email.com" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold" />
              </div>
              <div>
                <label class="block text-gray-700 font-serif font-semibold mb-3">Phone</label>
                <input type="tel" placeholder="+1 (555) 123-4567" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold" />
              </div>
            </div>

            <!-- Special Requests -->
            <div>
              <label class="block text-gray-700 font-serif font-semibold mb-3">Special Requests</label>
              <textarea rows="4" placeholder="Any dietary restrictions, special occasions, or seating preferences?" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold"></textarea>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
              <button type="submit" class="px-10 py-4 bg-luxury-gold text-black font-serif font-bold uppercase tracking-wider hover:bg-luxury-bronze transition-all duration-300 shadow-luxury">
                Complete Reservation
              </button>
            </div>
          </form>
        </div>

        <!-- Info Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div class="text-center">
            <div class="text-4xl text-luxury-gold mb-3">📞</div>
            <h3 class="font-serif text-xl text-gray-900 mb-2">Call Us</h3>
            <p class="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div class="text-center">
            <div class="text-4xl text-luxury-gold mb-3">✉️</div>
            <h3 class="font-serif text-xl text-gray-900 mb-2">Email</h3>
            <p class="text-gray-600">reservations&#64;urbaneats.restaurant</p>
          </div>
          <div class="text-center">
            <div class="text-4xl text-luxury-gold mb-3">🕐</div>
            <h3 class="font-serif text-xl text-gray-900 mb-2">Hours</h3>
            <p class="text-gray-600">Mon-Sun: 5:00 PM - 11:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ReservationsPage {}
