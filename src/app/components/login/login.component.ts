import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/firebase-api/authentication.service";
import {User} from "../../models/user.model";


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  model: User;
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.model = new User();
    // reset login status
    this.authenticationService.logout(this.model);

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model)
      .then(
        data => {
         console.log("SUCCESS LOGIN")
         console.log("SUCCESS LOGIN")
         this.router.navigate(['/chat']);
        }).catch(
        error => {
          console.log("Error:")
          console.log(error)
          this.loading = false;
        });
  }
}
