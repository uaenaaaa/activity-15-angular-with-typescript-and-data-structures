import { Injectable } from '@angular/core';
import CarModel from '@app/interface/car-model';

@Injectable({
	providedIn: 'root',
})
export class CarModelListService {
	private carModels: CarModel[] = [];

	constructor() {}

	addCarModel(
		id: number,
		name: string,
		year: number,
		make: string,
		model: string,
		price: number,
	): void {
		this.carModels.push({
			id: id,
			name: name,
			year: year,
			make: make,
			model: model,
			price: price,
		});
	}

	getCarModels(): CarModel[] {
		return this.carModels;
	}
}
