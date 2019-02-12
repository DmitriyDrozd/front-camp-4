import { Injectable } from '@angular/core';
import { sources } from '../mocks/sources';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  private readonly sources: string[] = [];

  constructor() {
    this.sources = [...sources];
  }

  getAll() {
    return this.sources;
  }
}
