import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../user.service";
import { TimeService } from "../time.service";
import { AppointmentService } from "../appointment.service";

import "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  currentUser = {};
  times = {};
  newAppointment = {};
  question: any = { id: "" };
  questions: any[] = [];

  constructor(
    private _userService: UserService,
    private _timeService: TimeService,
    private _appointmentService: AppointmentService,
    private router: Router
  ) {}

  ngOnInit() {}

  // ****************************** all comp **************************

  getCurrentUser() {
    this.currentUser = this._userService.getCurrentUser;
  }

  isLoggedIn() {
    if (this._userService.getCurrentUser() == null) {
      this.router.navigateByUrl("/");
    }
  }

  logout() {
    this._userService.logout();
    this.router.navigateByUrl("/");
  }

  // ******************************************************************
  createAppointment() {
    return this._appointmentService
      .create(this.newAppointment)
      .then(appointment => {
        console.log(appointment);
        if (appointment.errors) {
          //create front-end error messages
        } else {
          //redirect to message-board
          this.router.navigateByUrl("dashboard");
        }
      })
      .catch(err => console.log(err));
  }

  getTimes() {
    return this._timeService
      .getTimes()
      .then(times => (this.times = times))
      .catch(err => console.log(err));
  }
}
