import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Book from 'src/model/Book';
import { HttpClientServiceService } from 'src/app/services/http-client-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  action :string;
  constructor(private router:Router,private httpclient :HttpClientServiceService) { }

  @Input()
  book :Book

  @Output()
  bookDeletedEvent = new EventEmitter();

  ngOnInit(): void {
    console.log("Hiii "+this.book)
  }
  deleteBook()
  {
    this.httpclient.deleteBook(this.book.id);
    this.bookDeletedEvent.emit();
  }
  editBook() {
    this.action="edit"
    this.router.navigate(['admin', 'books'], { queryParams: { action: 'edit', id: this.book.id } });
  }

}
