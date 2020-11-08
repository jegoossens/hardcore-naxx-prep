import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,of, from } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

    getConfig(classId: string): Observable<any> {
      //these json files are located in docs/assets/data
      return this.http.get('assets/data/'+classId+".json");
    }
}
