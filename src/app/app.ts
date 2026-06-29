import { Component, signal, computed } from '@angular/core';
import { Header } from './components/header/header';
import { Restaurantlist } from './components/restaurantlist/restaurantlist';
import { Restaurant } from './models/restaurant';

@Component({
  selector: 'app-root',
  imports: [Restaurantlist, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DeliceDeDouala');
  
  restaurants = signal<Restaurant[]>([
    { id: 1, name: 'Le Calao Doré', district: 'Akwa', specialty: 'Ndolé aux crevettes', currentRating: 0 },
    { id: 2, name: 'Chez Madame Ngono', district: 'Bonapriso', specialty: 'Eru aux pieds de bœuf', currentRating: 0 },
    { id: 3, name: 'La Fourchette Camerounaise', district: 'Bonanjo', specialty: 'Poulet DG', currentRating: 3 },
    { id: 4, name: 'Saveurs du Wouri', district: 'Bonamoussadi', specialty: 'Poisson braisé', currentRating: 4 },
    { id: 5, name: "L'Akwa Gourmand", district: 'Akwa', specialty: 'Bobolo et sauce arachide', currentRating: 5 },
    { id: 6, name: 'Le Royal de Bali', district: 'Bali', specialty: 'Koki et plantain', currentRating: 0 }
  ]);

  private ratedRestaurantIds = new Set<number>();

  sendInfo = signal<{ name: string; cardNote: number }>({
    name: this.title(), 
    cardNote: 0 
  });

  restoUpdate(updateResto: { idUpdate: number; starUpdate: number}) {
    this.restaurants.update(currentList =>
      currentList.map(r => r.id === updateResto.idUpdate ? { ...r, currentRating: updateResto.starUpdate } : r)
    );
    this.ratedRestaurantIds.add(updateResto.idUpdate);
    this.sendInfo.set({
      name: this.title(),
      cardNote: this.ratedRestaurantIds.size
    });
  }
}