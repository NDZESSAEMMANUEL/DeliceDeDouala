import { Component ,input} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    setNotation = input.required<{name:string,cardNote:number}>()
}
