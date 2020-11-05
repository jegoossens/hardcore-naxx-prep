import { Component } from '@angular/core';
import { CLASS_LIST } from './data/classes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  classes: string[] = CLASS_LIST
}
