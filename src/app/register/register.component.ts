import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
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
          console.log("Created user")
          console.log(data)
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
