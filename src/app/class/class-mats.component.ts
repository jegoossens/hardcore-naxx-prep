import { Component, Input, AfterViewInit, QueryList, ViewChildren, OnInit, ElementRef } from '@angular/core';
import { DATA } from '../data/class-data-mapping'

@Component({
  selector: 'class-mats',
  templateUrl: './class-mats.component.html',
  styleUrls: ['./class-mats.component.scss']
})
export class ClassMatsComponent implements AfterViewInit, OnInit {

  @ViewChildren("item") viewChildren: QueryList<ElementRef>;
  @Input() class;
  classData;

  ngOnInit(): void {
    console.log("dataName", this.class.asset)
    this.classData = DATA[this.class.asset];
    console.log("classData", this.classData)
  }

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
