import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class AppointmentService {
  constructor(private _http: Http) {}

  create(appointment) {
    return this._http
      .post("/appointments", appointment)
      .map(data => data.json())
      .toPromise();
  }

  logout() {
    localStorage.removeItem("currentUser");
    // return this._http.delete("/sessions").map(data => data.json()).toPromise();
  }

  setCurrentUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
  }
}
