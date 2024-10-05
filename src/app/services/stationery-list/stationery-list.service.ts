import { Injectable } from '@angular/core';
import StationeryList from '@app/interface/stationery-list';

@Injectable({
	providedIn: 'root',
})
export class StationeryListService {
	private stationeries: StationeryList[] = [];

	constructor() {}

	addStationery(
		id: number,
		name: string,
		price: number,
		quantity: number,
	): void {
		this.stationeries.push({
			id: id,
			name: name,
			price: price,
			quantity: quantity,
		});
	}

	getStationeries(): StationeryList[] {
		return this.stationeries;
	}
}
