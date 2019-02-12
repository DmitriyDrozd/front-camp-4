import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  @Output() titleEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  getEmit () {
    return this.titleEmitter;
  }

  setTitle (newTitle: string) {
    this.titleEmitter.emit(newTitle);
  }
}
