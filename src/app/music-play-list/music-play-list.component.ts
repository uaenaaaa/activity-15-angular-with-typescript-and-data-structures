import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import MusicPlayList from '@app/interface/music-play-list';

@Component({
	selector: 'app-music-play-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './music-play-list.component.html',
	styles: ``,
})
export class MusicPlayListComponent {
	musicPlayList: MusicPlayList[] = [];
	id: string = '';
	name: string = '';
	artist: string = '';
	album: string = '';
	duration: string = '';
	genre: string = '';
	year: string = '';

	addMusicPlayList(): void {
		this.musicPlayList.push({
			id: Number(this.id),
			name: this.name,
			artist: this.artist,
			album: this.album,
			duration: this.duration,
			genre: this.genre,
			year: this.year,
		});

		this.id = '';
		this.name = '';
		this.artist = '';
		this.album = '';
		this.duration = '';
		this.genre = '';
		this.year = '';
	}
}
