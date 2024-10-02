import { Component } from '@angular/core';
import BookList from '@app/interface/book-list';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
	selector: 'app-book-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './book-list.component.html',
	styles: ``,
})
export class BookListComponent {
	books: BookList[] = [];

	id: string = '';
	name: string = '';
	isbn: string = '';

	addBook(): void {
		this.books.push({
			id: this.id,
			name: this.name,
			isbn: this.isbn,
		});

		this.id = '';
		this.name = '';
		this.isbn = '';
	}
}
