import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="min-h-screen bg-gradient-luxury pt-24">
      <div class="max-w-6xl mx-auto px-6 py-20">
        <div class="text-center mb-16">
          <h1 class="font-serif text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p class="text-white/60 text-lg">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <!-- Contact Section -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <!-- Contact Info -->
          <div class="space-y-8">
            <!-- Address -->
            <div>
              <h3 class="text-luxury-gold font-serif text-xl mb-3">Address</h3>
              <p class="text-white/60 leading-relaxed">
                123 Luxury Lane<br>
                Premium City, PC 12345<br>
                United States
              </p>
            </div>

            <!-- Phone -->
            <div>
              <h3 class="text-luxury-gold font-serif text-xl mb-3">Phone</h3>
              <p class="text-white/60">+1 (555) 123-4567</p>
              <p class="text-white/40 text-sm mt-1">Available Monday-Sunday</p>
            </div>

            <!-- Email -->
            <div>
              <h3 class="text-luxury-gold font-serif text-xl mb-3">Email</h3>
              <p class="text-white/60">info&#64;urbaneats.restaurant</p>
              <p class="text-white/40 text-sm mt-1">We'll respond within 24 hours</p>
            </div>

            <!-- Hours -->
            <div>
              <h3 class="text-luxury-gold font-serif text-xl mb-3">Operating Hours</h3>
              <ul class="space-y-2 text-white/60 text-sm">
                <li>Monday - Thursday: 5:00 PM - 11:00 PM</li>
                <li>Friday - Saturday: 5:00 PM - 12:00 AM</li>
                <li>Sunday: 5:00 PM - 10:00 PM</li>
              </ul>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2 bg-luxury-dark p-10 rounded-lg border border-luxury-gold/20">
            <form class="space-y-6">
              <!-- Name -->
              <div>
                <label class="block text-white font-serif font-semibold mb-2">Name</label>
                <input type="text" placeholder="Your full name" class="w-full px-4 py-3 bg-black border border-luxury-gold/30 text-white placeholder-white/40 focus:outline-none focus:border-luxury-gold transition-colors" />
              </div>

              <!-- Email -->
              <div>
                <label class="block text-white font-serif font-semibold mb-2">Email</label>
                <input type="email" placeholder="your&#64;email.com" class="w-full px-4 py-3 bg-black border border-luxury-gold/30 text-white placeholder-white/40 focus:outline-none focus:border-luxury-gold transition-colors" />
              </div>

              <!-- Subject -->
              <div>
                <label class="block text-white font-serif font-semibold mb-2">Subject</label>
                <input type="text" placeholder="How can we help?" class="w-full px-4 py-3 bg-black border border-luxury-gold/30 text-white placeholder-white/40 focus:outline-none focus:border-luxury-gold transition-colors" />
              </div>

              <!-- Message -->
              <div>
                <label class="block text-white font-serif font-semibold mb-2">Message</label>
                <textarea rows="6" placeholder="Tell us about your inquiry..." class="w-full px-4 py-3 bg-black border border-luxury-gold/30 text-white placeholder-white/40 focus:outline-none focus:border-luxury-gold transition-colors"></textarea>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="w-full py-4 bg-luxury-gold text-black font-serif font-bold uppercase tracking-wider hover:bg-luxury-bronze transition-all duration-300 shadow-luxury">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <!-- Social Media Section -->
        <div class="text-center bg-luxury-dark p-12 rounded-lg border border-luxury-gold/20">
          <h3 class="text-luxury-gold font-serif text-2xl mb-6">Follow Us</h3>
          <div class="flex items-center justify-center gap-8">
            <a href="#" class="text-white/60 hover:text-luxury-gold transition-colors text-lg font-semibold">Instagram</a>
            <a href="#" class="text-white/60 hover:text-luxury-gold transition-colors text-lg font-semibold">Facebook</a>
            <a href="#" class="text-white/60 hover:text-luxury-gold transition-colors text-lg font-semibold">Twitter</a>
            <a href="#" class="text-white/60 hover:text-luxury-gold transition-colors text-lg font-semibold">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactPage {}
