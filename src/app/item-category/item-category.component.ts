import { Component, Input, AfterViewInit, OnInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { ItemCategory, Item } from './item-category'
import { Class } from '../class/class'

@Component({
  selector: 'item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent {

  @Input() characterClass: Class;
  @Input() itemCategory: ItemCategory;


}
