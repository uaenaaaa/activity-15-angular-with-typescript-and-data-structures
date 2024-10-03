import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ArtistList from '@app/interface/artist-list';

@Component({
	selector: 'app-artist-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './artist-list.component.html',
	styles: ``,
})
export class ArtistListComponent {
	artistList: ArtistList[] = [];

	name: string = '';
	field: string = '';
	genre: string = '';
	country: string = '';

	addArtist() {
		this.artistList.push({
			name: this.name,
			field: this.field,
			genre: this.genre,
			country: this.country,
		});
		this.name = '';
		this.field = '';
		this.genre = '';
		this.country = '';
	}
}
