import {Injectable} from '@angular/core';
import {LOCAL_ENDPOINT} from '../assets/constants';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  // private sources: ISource[] = [];
  private localEndpoint: string;

  constructor(private http: HttpClient) {
    this.localEndpoint = `${LOCAL_ENDPOINT}/sources`;
  }

  getAll() {
    return this.http.get(this.localEndpoint);
  }
}
