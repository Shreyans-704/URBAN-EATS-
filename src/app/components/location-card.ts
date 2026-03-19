import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * LocationCard Component
 * 
 * A reusable, modern location/map card component that displays restaurant
 * address and an interactive map preview.
 * 
 * Features:
 * - Responsive design (stack on mobile, side-by-side on desktop)
 * - Google Maps embed with location marker
 * - Clickable map that opens Google Maps in new tab
 * - Get Directions button for navigation
 * - Hover effects and smooth transitions
 * - Production-ready styling
 * 
 * @example
 * <app-location-card
 *   [address]="'123 Luxury Lane, Premium City, PC 12345'"
 *   [latitude]="40.7128"
 *   [longitude]="-74.0060"
 * ></app-location-card>
 */
@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-card.html',
  styleUrl: './location-card.scss'
})
export class LocationCardComponent {
  /**
   * Restaurant address displayed in the card
   */
  @Input() address: string = '123 Luxury Lane, Premium City, PC 12345, United States';

  /**
   * Latitude coordinate for restaurant location
   */
  @Input() latitude: number = 40.7128;

  /**
   * Longitude coordinate for restaurant location
   */
  @Input() longitude: number = -74.0060;

  /**
   * Restaurant name (optional, for display purposes)
   */
  @Input() restaurantName: string = 'Urban Eats';

  /**
   * Generate Google Maps URL for embedding
   * Uses static map with marker for better performance
   */
  get staticMapUrl(): string {
    const zoom = 15;
    const size = '400x300';
    const mapKey = 'AIzaSyDummyKeyPlaceHolder'; // Replace with actual Google Maps API key
    return `https://maps.googleapis.com/maps/api/staticmap?center=${this.latitude},${this.longitude}&zoom=${zoom}&size=${size}&markers=color:red%7C${this.latitude},${this.longitude}&key=${mapKey}`;
  }

  /**
   * Generate Google Maps directions URL
   */
  get directionsUrl(): string {
    return `https://www.google.com/maps?q=${this.latitude},${this.longitude}`;
  }

  /**
   * Generate Google Maps search URL (alternative format)
   */
  get mapsSearchUrl(): string {
    return `https://www.google.com/maps/search/${encodeURIComponent(this.address)}`;
  }

  /**
   * Open Google Maps in new tab
   * Uses the directions URL with coordinates
   */
  openGoogleMaps(): void {
    window.open(this.directionsUrl, '_blank');
  }

  /**
   * Open Google Maps search by address in new tab
   */
  openMapsSearch(): void {
    window.open(this.mapsSearchUrl, '_blank');
  }
}
