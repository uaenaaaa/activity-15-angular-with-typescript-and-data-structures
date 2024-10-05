import { Injectable } from '@angular/core';
import MusicPlayList from '@app/interface/music-play-list';

@Injectable({
	providedIn: 'root',
})
export class MusicPlayListService {
	private musicPlayList: MusicPlayList[] = [];

	constructor() {}

	addMusicPlayList(
		id: number,
		name: string,
		artist: string,
		album: string,
		duration: number,
		genre: string,
		year: number,
	): void {
		this.musicPlayList.push({
			id: id,
			name: name,
			artist: artist,
			album: album,
			duration: duration,
			genre: genre,
			year: year,
		});
	}

	getMusicPlayList(): MusicPlayList[] {
		return this.musicPlayList;
	}
}
