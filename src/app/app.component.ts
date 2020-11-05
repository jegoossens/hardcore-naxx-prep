import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';

  classes: string[] = [
    "Druid","Mage", "Paladin","Priest", "Rogue", "Warlock", "Warrior", "Hunter"
  ]
}
