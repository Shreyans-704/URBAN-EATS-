import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

          <!-- Form Section -->
          <div class="lg:col-span-2 bg-luxury-dark p-10 rounded-lg border border-luxury-gold/20">
            <!-- Form Tabs -->
            <div class="flex gap-4 mb-8 border-b border-luxury-gold/20">
              <button 
                type="button"
                (click)="activeTab = 'message'"
                [class.active-tab]="activeTab === 'message'"
                class="pb-3 px-4 font-serif font-semibold uppercase tracking-wider transition-all duration-300"
                [ngClass]="{'text-luxury-gold': activeTab === 'message', 'text-white/60': activeTab !== 'message'}">
                Send Message
              </button>
              <button 
                type="button"
                (click)="activeTab = 'review'"
                [class.active-tab]="activeTab === 'review'"
                class="pb-3 px-4 font-serif font-semibold uppercase tracking-wider transition-all duration-300"
                [ngClass]="{'text-luxury-gold': activeTab === 'review', 'text-white/60': activeTab !== 'review'}">
                Write Review
              </button>
            </div>

            <!-- Contact Form -->
            <div *ngIf="activeTab === 'message'">
              <!-- Success Message -->
              <div *ngIf="messageSubmitted" class="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg">
                <p class="text-green-400 font-semibold">✓ Thank you! Your message has been sent successfully. We'll get back to you soon!</p>
              </div>
              <form class="space-y-6" (ngSubmit)="onSubmitMessage()">
                <!-- Name -->
                <div>
                  <label class="block text-white font-serif font-semibold mb-2">Name</label>
                  <input type="text" [(ngModel)]="messageForm.name" name="message_name" placeholder="Your full name" class="w-full px-4 py-3 bg-black border border-luxury-gold/30 text-white placeholder-white/40 focus:outline-none focus:border-luxury-gold transition-colors rounded" />
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-white font-serif font-semibold mb-2">Email</label>
                  <input type="email" [(ngModel)]="messageForm.email" name="message_email" placeholder="your@email.com" class="w-full px-4 py-3 bg-black border border-luxury-gold/30 text-white placeholder-white/40 focus:outline-none focus:border-luxury-gold transition-colors rounded" />
                </div>

                <!-- Subject -->
                <div>
                  <label class="block text-white font-serif font-semibold mb-2">Subject</label>
                  <input type="text" [(ngModel)]="messageForm.subject" name="message_subject" placeholder="How can we help?" class="w-full px-4 py-3 bg-black border border-luxury-gold/30 text-white placeholder-white/40 focus:outline-none focus:border-luxury-gold transition-colors rounded" />
                </div>

                <!-- Message -->
                <div>
                  <label class="block text-white font-serif font-semibold mb-2">Message</label>
                  <textarea [(ngModel)]="messageForm.message" name="message_text" rows="6" placeholder="Tell us about your inquiry..." class="w-full px-4 py-3 bg-black border border-luxury-gold/30 text-white placeholder-white/40 focus:outline-none focus:border-luxury-gold transition-colors rounded"></textarea>
                </div>

                <!-- Submit Button -->
                <button type="button" (click)="onSubmitMessage()" class="w-full py-4 bg-luxury-gold text-black font-serif font-bold uppercase tracking-wider hover:bg-luxury-bronze transition-all duration-300 shadow-luxury rounded">
                  <span *ngIf="!messageSubmitted">Send Message</span>
                  <span *ngIf="messageSubmitted">Message Sent!</span>
                </button>
              </form>
            </div>

            <!-- Review Form -->
            <div *ngIf="activeTab === 'review'">
              <!-- Success Message -->
              <div *ngIf="reviewSubmitted" class="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg">
                <p class="text-green-400 font-semibold">✓ Thank you for your review! We appreciate your feedback.</p>
              </div>
              <form class="space-y-6" (ngSubmit)="onSubmitReview()">
                <!-- Name -->
                <div>
                  <label class="block text-white font-serif font-semibold mb-2">Your Name</label>
                  <input type="text" [(ngModel)]="reviewForm.name" name="review_name" placeholder="Enter your name" class="w-full px-4 py-3 bg-black border border-luxury-gold/30 text-white placeholder-white/40 focus:outline-none focus:border-luxury-gold transition-colors rounded" />
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-white font-serif font-semibold mb-2">Email</label>
                  <input type="email" [(ngModel)]="reviewForm.email" name="review_email" placeholder="your@email.com" class="w-full px-4 py-3 bg-black border border-luxury-gold/30 text-white placeholder-white/40 focus:outline-none focus:border-luxury-gold transition-colors rounded" />
                </div>

                <!-- Rating -->
                <div>
                  <label class="block text-white font-serif font-semibold mb-3">Rating</label>
                  <div class="flex gap-2">
                    <button *ngFor="let star of [1, 2, 3, 4, 5]" type="button" (click)="reviewForm.rating = star" class="text-4xl transition-all hover:scale-110" [ngClass]="{'text-luxury-gold': reviewForm.rating >= star, 'text-white/30': reviewForm.rating < star}">
                      ★
                    </button>
                  </div>
                </div>

                <!-- Review Text -->
                <div>
                  <label class="block text-white font-serif font-semibold mb-2">Your Review</label>
                  <textarea [(ngModel)]="reviewForm.review" name="review_text" rows="6" placeholder="Tell us about your experience..." class="w-full px-4 py-3 bg-black border border-luxury-gold/30 text-white placeholder-white/40 focus:outline-none focus:border-luxury-gold transition-colors rounded"></textarea>
                </div>

                <!-- Submit Button -->
                <button type="button" (click)="onSubmitReview()" class="w-full py-4 bg-luxury-gold text-black font-serif font-bold uppercase tracking-wider hover:bg-luxury-bronze transition-all duration-300 shadow-luxury rounded">
                  <span *ngIf="!reviewSubmitted">Submit Review</span>
                  <span *ngIf="reviewSubmitted">Review Submitted!</span>
                </button>
              </form>
            </div>
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

      <style>
        .active-tab {
          border-b: 3px solid #d4af37;
        }
      </style>
    </div>
  `
})
export class ContactPage {
  activeTab: 'message' | 'review' = 'message';
  messageSubmitted = false;
  reviewSubmitted = false;

  messageForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  reviewForm = {
    name: '',
    email: '',
    rating: 5,
    review: ''
  };

  onSubmitMessage() {
    if (this.messageForm.name && this.messageForm.email && this.messageForm.subject && this.messageForm.message) {
      this.messageSubmitted = true;
      setTimeout(() => {
        this.messageForm = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        this.messageSubmitted = false;
      }, 3000);
    }
  }

  onSubmitReview() {
    if (this.reviewForm.name && this.reviewForm.email && this.reviewForm.review) {
      this.reviewSubmitted = true;
      setTimeout(() => {
        this.reviewForm = {
          name: '',
          email: '',
          rating: 5,
          review: ''
        };
        this.reviewSubmitted = false;
      }, 3000);
    }
  }
}
