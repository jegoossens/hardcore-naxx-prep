import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data/data-service';
import { Class } from './class';
import { ItemCategory, Item } from '../item-category/item-category';
import { HttpClient } from '@angular/common/http';
import {Observable,of, from } from 'rxjs';

@Component({
  selector: 'class-mats',
  templateUrl: './class-mats.component.html',
  styleUrls: ['./class-mats.component.scss']
})
export class ClassMatsComponent implements OnInit {

  @Input() characterClass: Class;
  classData: ItemCategory[];
  notApplicable: Item[];

  constructor(private dataService: DataService){
  }

  ngOnInit(): void {
    this.dataService.getConfig(this.characterClass.id).subscribe(data => {
      this.classData = data;
    })
    this.notApplicable = this.dataService.getStoredHiddenItems(this.characterClass);
    this.dataService.hiddenItemsChanged().subscribe(change => {
        this.notApplicable = this.dataService.getStoredHiddenItems(this.characterClass);
    })
  }

  addItem(item: Item){
      this.notApplicable = this.notApplicable.filter(na => na.itemName !== item.itemName)
      this.dataService.removeHiddenItem(this.characterClass, item);
  }

}
