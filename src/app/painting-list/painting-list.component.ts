import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PaintingList from '@app/interface/painting-list';

@Component({
	selector: 'app-painting-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './painting-list.component.html',
	styles: ``,
})
export class PaintingListComponent {
	paintingList: PaintingList[] = [];

	title: string = '';
	artist: string = '';
	year: number = 0;
	price: number = 0;

	addPainting() {
		this.paintingList.push({
			title: this.title,
			artist: this.artist,
			year: this.year,
			price: this.price,
		});
		this.title = '';
		this.artist = '';
		this.year = 0;
		this.price = 0;
	}
}
