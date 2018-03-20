import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DatafnService {

  private mySource = new BehaviorSubject<any>(null);
  curentMsg = this.mySource.asObservable();

  constructor() { }

  changeMessage(message) {
    this.mySource.next(message)
  }

}
