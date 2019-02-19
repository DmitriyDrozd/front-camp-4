import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeywordSearchService {

  @Output() emitter: EventEmitter<string[]> = new EventEmitter<string[]>();

  public keywords: string[] = [];

  constructor() { }

  subscribe(callback: (keywords: string[]) => void) {
    this.emitter.subscribe(callback);
  }

  updateKeywords(value: string) {
    this.keywords = value.split(' ');
    this.emitter.emit(this.keywords);
  }
}
