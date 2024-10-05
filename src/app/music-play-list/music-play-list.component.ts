import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import MusicPlayList from '@app/interface/music-play-list';
import { MusicPlayListService } from '@app/services/music-play-list/music-play-list.service';

@Component({
	selector: 'app-music-play-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './music-play-list.component.html',
	styles: ``,
})
export class MusicPlayListComponent {
	musicPlayList = [] as MusicPlayList[];
	constructor(private musicPlayListService: MusicPlayListService) {
		this.musicPlayList = this.musicPlayListService.getMusicPlayList();
	}
	id: number = 0;
	name: string = '';
	artist: string = '';
	album: string = '';
	duration: number = 0;
	genre: string = '';
	year: number = 0;

	addMusicPlayList(): void {
		this.musicPlayListService.addMusicPlayList(
			this.id,
			this.name,
			this.artist,
			this.album,
			this.duration,
			this.genre,
			this.year,
		);

		this.id = 0;
		this.name = '';
		this.artist = '';
		this.album = '';
		this.duration = 0;
		this.genre = '';
		this.year = 0;
	}
}
