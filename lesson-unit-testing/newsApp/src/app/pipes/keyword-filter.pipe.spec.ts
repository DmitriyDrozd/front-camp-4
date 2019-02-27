import { KeywordFilterPipe } from './keyword-filter.pipe';
import {news} from "../../mocks/news";

describe('KeywordFilterPipe', () => {
  let pipe: KeywordFilterPipe;

  beforeEach(() => {
    pipe = new KeywordFilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter articles by description', () => {
    const pipe = new KeywordFilterPipe();

    expect(pipe.transform(news, ['foo']).length).toEqual(2);
  })
});
