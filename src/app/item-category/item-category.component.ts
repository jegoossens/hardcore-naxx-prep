import { Component, Input, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { ItemCategory, Item } from './item-category'
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
    if (this.viewChildren){
       return this.viewChildren.find(element => element.nativeElement.id === id)
    }
  }

  changeCount(id, change){
      const element = this.findInput(id);
      if (element){
          let elementValue = this.getElementValue(element);
          element.nativeElement.value = elementValue + change;
          this.saveValueInStorage(id, element.nativeElement.value);
      }
  }

  getElementValue(element): number {
    return element.nativeElement.value ? parseInt(element.nativeElement.value) : 0;
  }

  getItemId(item: Item): string{
      console.log
      console.log("le Item", item)
      return item.itemName + '-'+this.class.name;
  }

  determineClass(item: Item): string {
      const input = this.findInput(this.getItemId(item));
      const value = input ? this.getElementValue(input) : 0;
      if (value <= 0){
        return "table-danger";
      } else if (value > 0 && value < item.amount){
        return "table-warning";
      } else {
        return "table-success";
       }
  }

}
