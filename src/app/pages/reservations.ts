import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationCardComponent } from '../components/location-card';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, FormsModule, LocationCardComponent],
  template: `
    <div class="min-h-screen bg-white pt-24">
      <div class="max-w-4xl mx-auto px-6 py-20">
        <div class="text-center mb-16">
          <h1 class="font-serif text-5xl font-bold text-gray-900 mb-4">Book Your Table</h1>
          <p class="text-gray-600 text-lg">Reserve your table at Urban Eats for an unforgettable vegetarian fine dining experience</p>
        </div>

        <!-- Reservation Form -->
        <div class="bg-gray-50 p-12 rounded-lg shadow-luxury">
          <!-- Success Message -->
          <div *ngIf="formSubmitted" class="mb-6 p-4 bg-green-100 border border-green-500 rounded-lg">
            <p class="text-green-700 font-semibold">✓ Your reservation has been confirmed! We look forward to welcoming you at Urban Eats.</p>
          </div>
          <form class="space-y-8" (ngSubmit)="onSubmit()">
            <!-- Date and Time -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-700 font-serif font-semibold mb-3">Date</label>
                <input type="date" [(ngModel)]="selectedDate" (change)="onDateChange()" name="date" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold" />
              </div>
              <div>
                <label class="block text-gray-700 font-serif font-semibold mb-3">Time</label>
                <div>
                  <select [(ngModel)]="selectedTime" name="time" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold">
                    <option value="">Select a time</option>
                    <option *ngFor="let time of availableTimes" [value]="time.value">{{ time.display }}</option>
                  </select>
                  <p class="text-sm text-gray-600 mt-2">Available: {{ openingTime }} - {{ closingTime }}</p>
                </div>
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
              <button type="button" (click)="onSubmit()" class="px-10 py-4 bg-luxury-gold text-black font-serif font-bold uppercase tracking-wider hover:bg-luxury-bronze transition-all duration-300 shadow-luxury">
                {{ formSubmitted ? 'Reservation Confirmed!' : 'Complete Reservation' }}
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

        <!-- Location Card Component -->
        <div class="mt-20">
          <app-location-card
            [address]="'Snigdha Shelters, 74-5-1, TTD Rd, opposite Vydurya Residency, Prakasam Nagar, Rajamahendravaram, Andhra Pradesh 533103, India'"
            [latitude]="17.3730"
            [longitude]="81.7852"
            [restaurantName]="'Urban Eats'"
          ></app-location-card>
        </div>
      </div>
    </div>
  `
})
export class ReservationsPage {
  formSubmitted = false;
  selectedDate = '';
  selectedTime = '';
  minTime = '19:00'; // Default: 7:00 PM (5 PM + 2 hours)
  maxTime = '21:00'; // Default: 9:00 PM (11 PM - 2 hours)
  openingTime = '7:00 PM';
  closingTime = '9:00 PM';
  availableTimes: { value: string; display: string }[] = [];

  // Restaurant hours by day of week with 2-hour buffer logic
  // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  restaurantHours = {
    0: { rawOpen: '17:00', rawClose: '22:00', openText: '5:00 PM', closeText: '10:00 PM' },      // Sunday: 5 PM - 10 PM
    1: { rawOpen: '17:00', rawClose: '23:00', openText: '5:00 PM', closeText: '11:00 PM' },      // Monday: 5 PM - 11 PM
    2: { rawOpen: '17:00', rawClose: '23:00', openText: '5:00 PM', closeText: '11:00 PM' },      // Tuesday: 5 PM - 11 PM
    3: { rawOpen: '17:00', rawClose: '23:00', openText: '5:00 PM', closeText: '11:00 PM' },      // Wednesday: 5 PM - 11 PM
    4: { rawOpen: '17:00', rawClose: '23:00', openText: '5:00 PM', closeText: '11:00 PM' },      // Thursday: 5 PM - 11 PM
    5: { rawOpen: '17:00', rawClose: '00:00', openText: '5:00 PM', closeText: '12:00 AM' },      // Friday: 5 PM - 12 AM
    6: { rawOpen: '17:00', rawClose: '00:00', openText: '5:00 PM', closeText: '12:00 AM' }       // Saturday: 5 PM - 12 AM
  };

  onDateChange() {
    if (this.selectedDate) {
      const date = new Date(this.selectedDate);
      const dayOfWeek = date.getDay();
      const hours = this.restaurantHours[dayOfWeek as keyof typeof this.restaurantHours];
      
      // Convert time strings to minutes for calculation
      const [openHour, openMin] = hours.rawOpen.split(':').map(Number);
      const [closeHour, closeMin] = hours.rawClose.split(':').map(Number);
      
      let openMinutes = openHour * 60 + openMin;
      let closeMinutes = closeHour * 60 + closeMin;
      
      // Handle midnight case (00:00 = 24:00 = 1440 minutes)
      if (closeHour === 0 && closeMin === 0) {
        closeMinutes = 24 * 60; // 1440 minutes
      }
      
      // Add 2 hours to opening time
      const bookingStartMinutes = openMinutes + (2 * 60);
      
      // Subtract 2 hours from closing time
      const bookingEndMinutes = closeMinutes - (2 * 60);
      
      // Convert back to HH:MM format
      const bookingStartHours = Math.floor(bookingStartMinutes / 60);
      const bookingStartMins = bookingStartMinutes % 60;
      this.minTime = `${String(bookingStartHours).padStart(2, '0')}:${String(bookingStartMins).padStart(2, '0')}`;
      
      const bookingEndHours = Math.floor(bookingEndMinutes / 60);
      const bookingEndMins = bookingEndMinutes % 60;
      
      // Handle time display for midnight
      let displayHour = bookingEndHours;
      let displaySuffix = '';
      if (bookingEndHours >= 24) {
        displayHour -= 24;
        displaySuffix = ' (Next Day)';
      }
      
      this.maxTime = `${String(bookingEndHours).padStart(2, '0')}:${String(bookingEndMins).padStart(2, '0')}`;
      
      // Display available time range
      const startHour12 = bookingStartHours > 12 ? bookingStartHours - 12 : bookingStartHours;
      const startSuffix = bookingStartHours >= 12 ? 'PM' : 'AM';
      
      const endHour12 = displayHour > 12 ? displayHour - 12 : displayHour;
      const endSuffix = displayHour >= 12 ? 'PM' : 'AM';
      
      this.openingTime = `${startHour12}:${String(bookingStartMins).padStart(2, '0')} ${startSuffix}`;
      this.closingTime = `${endHour12}:${String(bookingEndMins).padStart(2, '0')} ${endSuffix}${displaySuffix}`;

      // Generate available times with :00, :30, and :45 intervals
      this.generateAvailableTimes(bookingStartMinutes, bookingEndMinutes);
    }
  }

  generateAvailableTimes(startMinutes: number, endMinutes: number) {
    this.availableTimes = [];
    let currentMinutes = startMinutes;

    while (currentMinutes <= endMinutes) {
      const hours = Math.floor(currentMinutes / 60);
      const minutes = currentMinutes % 60;
      
      // Format time as HH:MM
      const timeValue = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
      
      // Format display time (12-hour format)
      let displayHours = hours;
      let suffix = 'AM';
      let nextDaySuffix = '';
      
      if (hours >= 24) {
        displayHours = hours - 24;
        nextDaySuffix = ' (Next Day)';
      }
      
      if (displayHours > 12) {
        displayHours = displayHours - 12;
        suffix = 'PM';
      } else if (displayHours === 12) {
        suffix = 'PM';
      } else if (displayHours === 0) {
        displayHours = 12;
        suffix = 'AM';
      }
      
      const displayTime = `${displayHours}:${String(minutes).padStart(2, '0')} ${suffix}${nextDaySuffix}`;
      
      this.availableTimes.push({ value: timeValue, display: displayTime });
      
      // Increment by 15 minutes to get :00, :30, :45 for each hour
      // Actually, the user wants :00, :30, :45 - so we need to advance differently
      // Start at :00, then :30, then :45, then next hour :00
      const currentHour = Math.floor(currentMinutes / 60);
      const currentMin = currentMinutes % 60;
      
      if (currentMin === 0) {
        // Move to :30
        currentMinutes += 30;
      } else if (currentMin === 30) {
        // Move to :45
        currentMinutes += 15;
      } else if (currentMin === 45) {
        // Move to next hour :00
        currentMinutes += 15;
      }
    }
  }

  onSubmit() {
    this.formSubmitted = true;
    setTimeout(() => {
      this.formSubmitted = false;
    }, 5000);
  }
}
