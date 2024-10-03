import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PodcastList from '@app/interface/podcast-list';

@Component({
	selector: 'app-podcast-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './podcast-list.component.html',
	styles: ``,
})
export class PodcastListComponent {
	podcasts: PodcastList[] = [];

	name: string = '';
	host: string = '';
	genre: string = '';
	episodeNumber: number = 0;

	addPodcast() {
		this.podcasts.push({
			name: this.name,
			host: this.host,
			genre: this.genre,
			episodeNumber: this.episodeNumber,
		});

		this.name = '';
		this.host = '';
		this.genre = '';
		this.episodeNumber = 0;
	}
}
