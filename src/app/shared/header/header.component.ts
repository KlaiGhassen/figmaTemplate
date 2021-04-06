import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any;
  constructor(private router: Router,
    private gs: GlobalService,

  ) {

  }

  ngOnInit(): void {
    this.user = this.gs.getUser();
  }
  
  profile() {
    this.router.navigate(['/login']);

  }
  message() {
    this.router.navigate(['/loginadmin']);


  }
}
