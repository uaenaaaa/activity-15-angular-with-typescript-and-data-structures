import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import StationeryList from '@app/interface/stationery-list';

@Component({
	selector: 'app-stationery-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './stationery-list.component.html',
	styles: ``,
})
export class StationeryListComponent {
	stationeryList: StationeryList[] = [];

	id: number = 0;
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addNewStationery() {
		this.stationeryList.push({
			id: this.id,
			name: this.name,
			quantity: this.quantity,
			price: this.price,
		});
		this.id = 0;
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}
}
