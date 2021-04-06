import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { AuthServicee } from 'src/app/services/auth.service';

@Component({
  selector: 'app-only-nav',
  templateUrl: './only-nav.component.html',
  styleUrls: ['./only-nav.component.scss']
})
export class OnlyNavComponent implements OnInit {
  user:any;

  constructor(private router: Router, private userService:AuthServicee,
    
    private gs: GlobalService,
    private actiVrouter: ActivatedRoute,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer) {

      this.user=this.gs.getUser();

     }

  ngOnInit(): void {
  }
  logOut(){
    console.log("hello world")
    this.gs.logOut()
    this.router.navigate(['']);

  }
  
  profile(){
    this.router.navigate(['/profile']);

  }
  message(){
    this.router.navigate(['/messages']);


  }
}
