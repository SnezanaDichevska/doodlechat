import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../services/firebase-api/user.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  model: User;
  loading = false;

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.model = new User();
  }

  redirectBack(){
    this.router.navigate(['/login']);
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .then(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          data.auth.updateProfile(this.model.serialize());
          this.router.navigate(['/login']);
        })
      .catch(
        error => {
          console.log("ERRRROROROR");
          console.log(error);
          this.loading = false;
        });
  }
}
