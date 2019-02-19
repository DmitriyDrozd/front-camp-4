import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SOURCES} from "../../config/Endpoint";
import {ISource} from "../../interfaces/isource";
import {ISourceResponse} from "../../interfaces/isource-response";

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  private sources: ISource[] = [];
  private readonly endpoint: string = SOURCES;

  public sourcesEmitter: EventEmitter<ISource[]> = new EventEmitter<ISource[]>();

  constructor(private http: HttpClient) {}

  getAll() {
    const request = this.http.get(this.endpoint);

    request.subscribe((data: ISourceResponse) => {
      this.sources = data.sources;

      this.sourcesEmitter.emit(this.sources);
    });

    return this.sourcesEmitter;
  }

}
