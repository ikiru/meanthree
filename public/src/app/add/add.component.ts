import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../user.service";

import "rxjs";
@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  currentUser = {};
  errors: string[] = [];

  constructor(private _userService: UserService, private router: Router) {}

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

  //   create() {
  //     this.errors = [];
  //     return this._userService
  //       .create(this.newUser)
  //       .then(user => {
  //         console.log(user);
  //         if (user.errors) {
  //           for (let key in user.errors) {
  //             let error = user.error[key];
  //             this.errors.push(error.message);
  //           }
  //         } else {
  //           this._userService.setCurrentUser(user);
  //           this.router.navigateByUrl("dashboard");
  //         }
  //       })
  //       .catch(err => console.log(err));
  //   }
}
