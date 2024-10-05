import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import StationeryList from '@app/interface/stationery-list';
import { StationeryListService } from '@app/services/stationery-list/stationery-list.service';

@Component({
	selector: 'app-stationery-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './stationery-list.component.html',
	styles: ``,
})
export class StationeryListComponent {
	stationeryList = [] as StationeryList[];
	constructor(private stationeryListService: StationeryListService) {
		this.stationeryList = this.stationeryListService.getStationeries();
	}

	id: number = 0;
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addNewStationery() {
		this.stationeryListService.addStationery(
			this.id,
			this.name,
			this.quantity,
			this.price,
		);
		this.id = 0;
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}
}
