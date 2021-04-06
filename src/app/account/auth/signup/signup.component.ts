import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from './../../../entities/user';
import { AuthServicee } from './../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isemail = false;

  registerForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private userService: AuthServicee,
    private router: Router,
    private toastr: ToastrService
  ) {

    let formControls = {
      username: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),


      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      role: new FormControl('user', [
        Validators.required,
      ]),

    }

    this.registerForm = this.fb.group(formControls)
  }

  get username() { return this.registerForm.get('username') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get lastname() { return this.registerForm.get('lastname') }
  get role() { return this.registerForm.get('role') }
  ngOnInit(): void {


  }

  register() {

    let data = {
      nom: this.registerForm.controls["username"].value,
      prenom: this.registerForm.controls["lastname"].value,
      email: this.registerForm.controls["email"].value,
      password: this.registerForm.controls["password"].value,
      role: this.registerForm.controls["role"].value
    }
    if (this.registerForm.valid) {

      this.userService.registerUser(data).subscribe((res) => {
        console.log(res);
        if (res.user.isemail) {
          this.isemail = true;

        }
        else {
          this.toastr.success(res.message);
          this.router.navigate(['/code-verification/' + res.user._id]);
        }
      });
    }


  }

}