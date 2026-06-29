import { Component,signal,input,output} from '@angular/core';
import { StartRating } from '../start-rating/start-rating';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-restaurant-card',
  imports: [StartRating],
  templateUrl: './restaurant-card.html',
  styleUrl: './restaurant-card.css',
})
export class RestaurantCard {
    resto= input.required<Restaurant>()
    starUpdate = output<number>()

    onStarClick(star:number){
      this.starUpdate.emit(star)
    }
}
