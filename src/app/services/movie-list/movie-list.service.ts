import { Injectable } from '@angular/core';
import MovieList from '@app/interface/movie-list';

@Injectable({
	providedIn: 'root',
})
export class MovieListService {
	private movies: MovieList[] = [];

	constructor() {}

	addMovie(
		id: string,
		name: string,
		director: string,
		year: number,
		rating: number,
	): void {
		this.movies.push({
			id: id,
			name: name,
			director: director,
			year: year,
			rating: rating,
		});
	}

	getMovies(): MovieList[] {
		return this.movies;
	}
}
