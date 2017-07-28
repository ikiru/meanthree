import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class TimeService {
  constructor(private _http: Http) {}

  getTimes() {
    return this._http.get("/times").map(data => data.json()).toPromise();
  }
}
