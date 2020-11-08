import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data/data-service'
import { Class } from './class'
import { ItemCategory } from '../item-category/item-category'
import { HttpClient } from '@angular/common/http';
import {Observable,of, from } from 'rxjs';

@Component({
  selector: 'class-mats',
  templateUrl: './class-mats.component.html',
  styleUrls: ['./class-mats.component.scss']
})
export class ClassMatsComponent implements OnInit {

  @Input() class: Class;
  classData: ItemCategory[];

  constructor(private dataService: DataService){
  }

  ngOnInit(): void {
    this.dataService.getConfig(this.class.id).subscribe(data => {
      this.classData = data;
    })
  }

}
