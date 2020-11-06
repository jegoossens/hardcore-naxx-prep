import { Component, Input, AfterViewInit, QueryList, ViewChildren, OnInit, ElementRef } from '@angular/core';
import { DATA } from '../data/class-data-mapping'
import { ClassData } from '../data/class-data'

@Component({
  selector: 'class-mats',
  templateUrl: './class-mats.component.html',
  styleUrls: ['./class-mats.component.scss']
})
export class ClassMatsComponent implements AfterViewInit, OnInit {

  @ViewChildren("item") viewChildren: QueryList<ElementRef>;
  @Input() className: string;
  classData: ClassData;

  ngOnInit(): void {
    this.classData = DATA[this.className.toLowerCase()];
  }

  ngAfterViewInit(): void {
    console.log("view init")
    this.viewChildren.forEach(element => {
      const myAmount = localStorage.getItem(element.nativeElement.id);
      if (myAmount){
        element.nativeElement.value = myAmount;
      }
    })
  }

  saveInStorage(event) {
     localStorage.setItem(event.target.id, event.target.value);
  }

}
