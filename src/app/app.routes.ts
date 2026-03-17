import { Routes } from '@angular/router';
import { HomePage } from './pages/home';
import { MenuPage } from './pages/menu';
import { GalleryPage } from './pages/gallery';
import { ReviewsPage } from './pages/reviews';
import { ReservationsPage } from './pages/reservations';
import { ContactPage } from './pages/contact';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'menu', component: MenuPage },
  { path: 'gallery', component: GalleryPage },
  { path: 'reviews', component: ReviewsPage },
  { path: 'reservations', component: ReservationsPage },
  { path: 'contact', component: ContactPage },
];
