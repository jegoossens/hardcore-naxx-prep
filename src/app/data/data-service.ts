import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Class} from '../class/class'
import {Item} from '../item-category/item-category'
import {Observable,of, from, Subject } from 'rxjs';

@Injectable()
export class DataService {

  private hiddenItemsHasChanged = new Subject<any>();
  constructor(private http: HttpClient) { }

    getConfig(classId: string): Observable<any> {
      //these json files are located in docs/assets/data
      return this.http.get('assets/data/'+classId+".json");
    }

    getStoredHiddenItems(characterClass: Class): Item[] {
        let storedHiddenItems = localStorage.getItem(characterClass.name+"-na")
        return storedHiddenItems ? JSON.parse(storedHiddenItems) : [];
    }

    isHidden(characterClass: Class, item:Item): boolean {
      return this.getHiddenItem(characterClass, item) ? true : false;
    }

    saveHiddenItem(characterClass: Class, item: Item){
        let storedHiddenItems = this.getStoredHiddenItems(characterClass);
        let hiddenItem =  storedHiddenItems.find(hiddenItem => hiddenItem.itemName === item.itemName)
        if (!hiddenItem){
          storedHiddenItems.push(item)
          localStorage.setItem(characterClass.name+"-na", JSON.stringify(storedHiddenItems));
          this.hiddenItemsHasChanged.next();
        }
    }

    removeHiddenItem(characterClass: Class, item: Item){
        let storedHiddenItems = this.getStoredHiddenItems(characterClass).filter(hiddenItem => hiddenItem.itemName !== item.itemName);
        localStorage.setItem(characterClass.name+"-na", JSON.stringify(storedHiddenItems));
        this.hiddenItemsHasChanged.next();
    }

    getHiddenItem(characterClass: Class, item:Item){
        let storedHiddenItems = this.getStoredHiddenItems(characterClass);
        return storedHiddenItems.find(hiddenItem => hiddenItem.itemName === item.itemName)
    }

    hiddenItemsChanged(): Observable<any> {
        return this.hiddenItemsHasChanged.asObservable();
    }
}
