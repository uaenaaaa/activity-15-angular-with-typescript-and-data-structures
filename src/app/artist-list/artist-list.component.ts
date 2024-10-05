import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ArtistList from '@app/interface/artist-list';
import { ArtistListService } from '@app/services/artist-list/artist-list.service';

@Component({
	selector: 'app-artist-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './artist-list.component.html',
	styles: ``,
})
export class ArtistListComponent {
	artistList = [] as ArtistList[];
	constructor(private artistService: ArtistListService) {
		this.artistList = this.artistService.getArtists();
	}

	name: string = '';
	field: string = '';
	genre: string = '';
	country: string = '';

	addArtist() {
		this.artistService.addArtist(
			this.name,
			this.field,
			this.genre,
			this.country,
		);
		this.name = '';
		this.field = '';
		this.genre = '';
		this.country = '';
	}
}
