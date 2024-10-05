import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PaintingList from '@app/interface/painting-list';
import { PaintingListService } from '@app/services/painting-list/painting-list.service';

@Component({
	selector: 'app-painting-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './painting-list.component.html',
	styles: ``,
})
export class PaintingListComponent {
	paintingList = [] as PaintingList[];
	constructor(private paintingService: PaintingListService) {
		this.paintingList = this.paintingService.getPaintings();
	}

	title: string = '';
	artist: string = '';
	year: number = 0;
	price: number = 0;

	addPainting() {
		this.paintingService.addPainting(
			this.title,
			this.artist,
			this.year,
			this.price,
		);
		this.title = '';
		this.artist = '';
		this.year = 0;
		this.price = 0;
	}
}
