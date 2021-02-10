import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientServiceService } from 'src/app/services/http-client-service.service';
import Book from 'src/model/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Array<Book>;
  SelectedBook:Book;
  action :string;
  constructor(private router:Router, private activateRoute:ActivatedRoute, private httpclient: HttpClientServiceService) { }

  ngOnInit(): void {

    this.books= this.httpclient.getBooks();
    this.activateRoute.queryParams.subscribe((params)=>{
      this.action=params['action']
      const selectedBookID = params['id'];
      if (selectedBookID) {
        this.SelectedBook = this.books.find(book => book.id == selectedBookID);
      }
    
    })
  }

  addBook()
  {
    this.SelectedBook = new Book();
    console.log(this.SelectedBook)
    this.router.navigate(['admin','books'], { queryParams: { action: 'add' } });
  }
  viewBook(id: number) {
    console.log("view book id "+id)
    this.router.navigate(['admin','books'], {queryParams : {id, action: 'view'}});
  }

  refreshData()
  {
    this.httpclient.getBooks();
  }

}
