import { Injectable } from '@angular/core';
import Book from 'src/model/Book';
import User from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class HttpClientServiceService {
  users:Array<User>;
  books:Array<Book>;
 
  
  constructor() {
    this.users = new Array<User>();
    this.books = new Array<Book>();

    const user1 = new User();
    user1.id=1;
    user1.name="srinivas";
    user1.password="srinivas";
    user1.type="admin"

    const user2 = new User();
    user2.id=2;
    user2.name="vamsi";
    user2.password="vamsi";
    user2.type="user"

    this.users.push(user1);
    this.users.push(user2)

    const book1 = new Book();
    book1.id=1;
    book1.name="Wings of Fire";
    book1.author="APJ Kalam";
    book1.price=200
    book1.icon="https://m.media-amazon.com/images/I/71KKZlVjbwL._AC_UY218_.jpg"

    const book2 = new Book();
    book2.id=2;
    book2.name="Two States";
    book2.author="Chetan Bhagat";
    book2.price=170
    book2.icon="https://m.media-amazon.com/images/I/714GGM7WK7L._AC_UY218_.jpg"

    this.books.push(book1);
    this.books.push(book2)

   }
   getUsers()
   {
     return this.users;
   }

   getBooks()
   {
     return this.books;

   }
   addUser(newUser:User)
   {
     console.log("in service"+ newUser)
     this.users.push(newUser)
   }

   addBook(newBook:Book)
   {
     this.books.push(newBook);
   }
   deleteUser(id:number)
   {
     for(let i=0;i<=this.users.length;i++)
     {
       if(this.users[i].id===id)
       {
         this.users.splice(i,1);
         this.users= this.getUsers();
       }
     }
   }

   deleteBook(id:number)
   {
     for(let i=0;i<=this.books.length;i++)
     {
       if(this.books[i].id==id)
       {
         this.books.splice(i,1);
         this.books= this.getBooks();
       }
     }
   }
}
