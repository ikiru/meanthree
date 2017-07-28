import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { AppointmentService } from "../Appointment.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
