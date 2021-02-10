import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientServiceService } from 'src/app/services/http-client-service.service';
import User from 'src/model/User';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private httpclient: HttpClientServiceService,private router: Router) { }
  @Input()
  user: User
    ngOnInit(): void {
  }
  addUser() {
    
this.httpclient.addUser(this.user);

  }

}
