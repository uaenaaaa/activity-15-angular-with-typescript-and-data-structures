import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import TourList from '@app/interface/tour-list';

@Component({
	selector: 'app-tour-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './tour-list.component.html',
	styles: ``,
})
export class TourListComponent {
	tours: TourList[] = [];

	tourDate: string = '';
	tourName: string = '';
	tourLocation: string = '';
	tourPrice: number = 0;
	tourDuration: string = '';

	addTour() {
		this.tours.push({
			tourDate: this.tourDate,
			tourName: this.tourName,
			tourLocation: this.tourLocation,
			tourPrice: this.tourPrice,
			tourDuration: this.tourDuration,
		});

		this.tourDate = '';
		this.tourName = '';
		this.tourLocation = '';
		this.tourPrice = 0;
		this.tourDuration = '';
	}
}
