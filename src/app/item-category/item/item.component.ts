import { Component, Input, OnInit } from '@angular/core';
import { ItemCategory, Item } from '../item-category'
import { Class } from '../../class/class'
import { DataService} from '../../data/data-service'

@Component({
  selector: '[class-item]',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() characterClass: Class;
  @Input() item: Item;
  hidden: boolean = false;
  itemId: string;
  value: number = 0;
  rowClass: string = ""

  constructor(private dataService: DataService){}

  ngOnInit():void {
      this.itemId = this.item.itemName+"-"+this.characterClass.name;
      const myAmount = localStorage.getItem(this.itemId);
      this.hidden = this.dataService.isHidden(this.characterClass, this.item)
      if (myAmount){
        this.value = Number(myAmount);
      }
      this.rowClass = this.getClass();
      this.dataService.hiddenItemsChanged().subscribe(changed => {
          this.hidden = this.dataService.isHidden(this.characterClass, this.item)
      })
  }

  saveInStorage(event) {
    this.saveValueInStorage(event.target.id, event.target.value)
  }

  saveValueInStorage(id, value){
     localStorage.setItem(id, value);
  }

  increment(){
      this.changeCount(this.itemId, 1)
  }

  decrement(){
      this.changeCount(this.itemId, -1)
  }

  changeCount(id, change){
     this.value = this.value as number + change;
     this.rowClass = this.getClass();
  }

  removeItem(){
      this.dataService.saveHiddenItem(this.characterClass, this.item);
      this.hidden = true;
  }

  getClass(): string {
      if (this.value <= 0){
        return "table-danger";
      } else if (this.value > 0 && this.value < this.item.amount){
        return "table-warning";
      } else {
        return "table-success";
       }
  }

}
