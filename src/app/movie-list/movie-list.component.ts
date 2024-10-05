import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import MovieList from '@app/interface/movie-list';
import { MovieListService } from '@app/services/movie-list/movie-list.service';

@Component({
	selector: 'app-movie-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './movie-list.component.html',
	styles: ``,
})
export class MovieListComponent {
	movies = [] as MovieList[];
	constructor(private movieService: MovieListService) {
		this.movies = this.movieService.getMovies();
	}

	id: string = '';
	name: string = '';
	director: string = '';
	year: number = 0;
	rating: number = 0;

	addMovie(): void {
		this.movieService.addMovie(
			this.id,
			this.name,
			this.director,
			this.year,
			this.rating,
		);

		this.id = '';
		this.name = '';
		this.director = '';
		this.year = 0;
		this.rating = 0;
	}
}
