import { Component, Input, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { ItemCategory } from './item-category'
import { Class } from '../class/class'

@Component({
  selector: 'item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent implements AfterViewInit {

  @ViewChildren("item") viewChildren: QueryList<ElementRef>;
  @Input() class: Class;
  @Input() itemCategory: ItemCategory;

  ngAfterViewInit(): void {
    this.viewChildren.forEach(element => {
      const myAmount = localStorage.getItem(element.nativeElement.id);
      if (myAmount){
        element.nativeElement.value = myAmount;
      }
    })
  }

  saveInStorage(event) {
    this.saveValueInStorage(event.target.id, event.target.value)
  }

  saveValueInStorage(id, value){
     localStorage.setItem(id, value);
  }

  increment(id: string){
      this.changeCount(id, 1)
  }

  decrement(id: string){
      this.changeCount(id, -1)
  }

  findInput(id: string){
    return this.viewChildren.find(element => element.nativeElement.id === id)
  }

  changeCount(id, change){
      const element = this.findInput(id);
      if (element){
          let elementValue = element.nativeElement.value ? parseInt(element.nativeElement.value) : 0;
          element.nativeElement.value = elementValue + change;
          this.saveValueInStorage(id, element.nativeElement.value);
      }
  }

}
