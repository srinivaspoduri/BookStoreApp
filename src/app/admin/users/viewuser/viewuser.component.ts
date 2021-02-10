import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientServiceService } from 'src/app/services/http-client-service.service';
import User from 'src/model/User';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  constructor(private httpservice: HttpClientServiceService) { }

  @Input()
  user: User

  ngOnInit(): void {
  }
  deleteUser(id :number)
  {
this.httpservice.deleteUser(id);

  }
}
