import { Component } from '@angular/core';
import BookList from '@app/interface/book-list';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { BookListService } from '@app/services/book-list/book-list.service';

@Component({
	selector: 'app-book-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './book-list.component.html',
	styles: ``,
})
export class BookListComponent {
	books = [] as BookList[];
	constructor(private bookService: BookListService) {
		this.books = this.bookService.getBooks();
	}

	id: string = '';
	name: string = '';
	isbn: string = '';

	addBook(): void {
		this.bookService.addBook(this.id, this.name, this.isbn);
		this.id = '';
		this.name = '';
		this.isbn = '';
	}
}
