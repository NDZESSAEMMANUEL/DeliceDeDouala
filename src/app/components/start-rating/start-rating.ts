import { Component ,input,computed,output} from '@angular/core';

@Component({
  selector: 'app-start-rating',
  imports: [],
  templateUrl: './start-rating.html',
  styleUrl: './start-rating.css',
})
export class StartRating {
    star = input.required<number>()
    total = computed(()=>Array.from({
      "length":5
    }))
    starClick = output<number>()
    firstClick = 0

    onStarClick(nouvelle:number){
          this.starClick.emit(nouvelle)
          this.firstClick +=1
    }
}
