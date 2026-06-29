import { Component, signal,input ,output} from '@angular/core';
import { RestaurantCard } from '../restaurant-card/restaurant-card';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-restaurantlist',
  imports: [RestaurantCard],
  templateUrl: './restaurantlist.html',
  styleUrl: './restaurantlist.css',
})
export class Restaurantlist {
  restaurant = input.required<Restaurant[]>()
  cardUpdate = output<{idUpdate:number,starUpdate:number,clickNumber:number}>()
  clickNumber = 0
  updateCard(star:number,id:number,clickNumber:number){
    this.cardUpdate.emit({idUpdate:id,starUpdate:star,clickNumber:this.clickNumber})
    this.clickNumber+=1
  }
}
