import { Component, Input, OnInit } from '@angular/core';
import { HttpClientServiceService } from 'src/app/services/http-client-service.service';
import Book from 'src/model/Book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private httpclient:HttpClientServiceService) { }
  @Input()
  book:Book

  ngOnInit(): void {
  }
  saveBook()
  {
    this.httpclient.addBook(this.book);
  }

}
