import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientServiceService } from 'src/app/services/http-client-service.service';
import User from "../../../model/User"
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:Array<User>;
  constructor(private httpclient: HttpClientServiceService, private router:Router, private activateRoute:ActivatedRoute) { }
 

  SelectedUser:User;
  action:string;

  ngOnInit(): void {

    this.users= this.httpclient.getUsers();
    this.activateRoute.queryParams.subscribe((params)=>{
      this.action=params['action']
      const selectedUserId = params['id'];
      if (selectedUserId) {
        this.SelectedUser = this.users.find(user => user.id ==selectedUserId);
      }
    
    })
    
  }

  addUser() {
    this.SelectedUser = new User();
    console.log(this.SelectedUser)
    this.router.navigate(['admin','users'], { queryParams: { action: 'add' } });
  }

  viewUser(id: number) {
    this.router.navigate(['admin','users'], {queryParams : {id, action: 'view'}});
  }

}
