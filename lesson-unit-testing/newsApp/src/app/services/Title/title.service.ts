import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  @Output() emitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  subscribe(callback: (newTitle: string) => void) {
    this.emitter.subscribe(callback);
  }

  setTitle(newTitle: string) {
    this.emitter.emit(newTitle);
  }
}
