import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  value:any=false;

  constructor() { }
  ngOnInit(): void {
  }
  changeValueToFalse(){
this.value=false;

  }
  changeValueToTrue(){
    this.value=true;
    
      }

}
