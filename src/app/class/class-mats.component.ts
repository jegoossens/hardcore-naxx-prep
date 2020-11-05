import { Component, Input, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'class-mats',
  templateUrl: './class-mats.component.html',
  styleUrls: ['./class-mats.component.scss']
})
export class ClassMatsComponent implements AfterViewInit {

  @ViewChildren("item") viewChildren: QueryList<ElementRef>;
  @Input() className: string;
  mandatoryItems = [
    {
      name: "Thunderfury, Blessed Blade of the Windseeker",
      wowheadLink: "https://classic.wowhead.com/item=19019/thunderfury-blessed-blade-of-the-windseeker",
      recommendedAmount: 3
    },
    {
      name: "anotherItem",
      wowheadLink: "http://link.com",
      recommendedAmount: 2
    }
  ]

  ngAfterViewInit(): void {
    this.viewChildren.forEach(element => {
      const myAmount = localStorage.getItem(element.nativeElement.id);
      if (myAmount){
        element.nativeElement.value = myAmount;
      }
    })
  }

  saveInStorage(event, itemName, className) {
     localStorage.setItem(event.target.id, event.target.value);
  }

}
