import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServicee } from 'src/app/services/auth.service';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss']
})
export class AcceptComponent implements OnInit {
  users: any[] = []
  index: any = 0;

  constructor(private fb: FormBuilder,
    private userService: AuthServicee,
    private router: Router,
    private toastr: ToastrService) {


  }
  activer(index: any) {
    let data: any;
    if (this.users[index].accepted == false) {
      data = {
        accepted: true
      }
    }
    else {
      data = {
        accepted: false
      }
    }

    this.userService.updateProfile(this.users[index]._id, data).subscribe((res) => {
      console.log(data);
      console.log(res);

    })
    this.ngOnInit();
  }
  ngOnInit(): void {

    this.userService.getAlluser().subscribe((res) => {

      console.log(res);
      this.users = res;
    })


  }
}
