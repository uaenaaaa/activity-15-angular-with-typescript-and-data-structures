import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import VideoList from '@app/interface/video-list';

@Component({
	selector: 'app-video-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './video-list.component.html',
	styles: ``,
})
export class VideoListComponent {
	videoList: VideoList[] = [];
	name: string = '';
	description: string = '';
	url: string = '';
	rating: number = 0;
	category: string = '';

	addVideo() {
		this.videoList.push({
			name: this.name,
			description: this.description,
			url: this.url,
			rating: this.rating,
			category: this.category,
		});
		this.name = '';
		this.description = '';
		this.url = '';
		this.rating = 0;
		this.category = '';
	}
}
