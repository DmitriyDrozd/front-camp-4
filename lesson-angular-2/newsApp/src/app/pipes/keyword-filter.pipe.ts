import { Pipe, PipeTransform } from '@angular/core';
import {IArticle} from "../interfaces/iarticle";

@Pipe({
  name: 'keywordFilter'
})
export class KeywordFilterPipe implements PipeTransform {

  transform(value: any, args?: string[]): any {
    if (!args || args.length === 0) {
      return value;
    }

    return value.filter((article: IArticle) =>
      args.every((arg: string) => article.description.includes(arg))
    );
  }

}
