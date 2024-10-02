import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import MovieList from '@app/interface/movie-list';

@Component({
	selector: 'app-movie-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './movie-list.component.html',
	styles: ``,
})
export class MovieListComponent {
	movies: MovieList[] = [];

	id: string = '';
	name: string = '';
	director: string = '';
	year: number = 0;
	rating: number = 0;

	addMovie(): void {
		this.movies.push({
			id: this.id,
			name: this.name,
			director: this.director,
			year: this.year,
			rating: this.rating,
		});

		this.id = '';
		this.name = '';
		this.director = '';
		this.year = 0;
		this.rating = 0;
	}
}
