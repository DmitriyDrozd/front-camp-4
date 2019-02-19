import { Injectable } from '@angular/core';

const HTTP_REGEXP = /^(http|https):\/{2}/g;

@Injectable({
  providedIn: 'root'
})
export class URLServiceService {

  constructor() { }

  getUrl(url: string, title?: string): string {
    const isExternal: boolean = HTTP_REGEXP.test(url);

    if (isExternal) {
      return this.getParsedTitle(title);
    }

    return url;
  }

  getParsedTitle(title: string) {
    return title.replace(/\s/g, '-');
  }

}
