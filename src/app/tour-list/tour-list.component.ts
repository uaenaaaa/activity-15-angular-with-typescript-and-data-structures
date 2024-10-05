import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import TourList from '@app/interface/tour-list';
import { TourListService } from '@app/services/tour-list/tour-list.service';

@Component({
	selector: 'app-tour-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './tour-list.component.html',
	styles: ``,
})
export class TourListComponent {
	tours = [] as TourList[];
	constructor(private tourService: TourListService) {
		this.tours = this.tourService.getTours();
	}

	tourDate: string = '';
	tourName: string = '';
	tourLocation: string = '';
	tourPrice: number = 0;
	tourDuration: string = '';

	addTour() {
		this.tourService.addTour(
			this.tourDate,
			this.tourName,
			this.tourLocation,
			this.tourPrice,
			this.tourDuration,
		);

		this.tourDate = '';
		this.tourName = '';
		this.tourLocation = '';
		this.tourPrice = 0;
		this.tourDuration = '';
	}
}
