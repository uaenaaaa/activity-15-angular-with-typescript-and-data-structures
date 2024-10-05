import { Injectable } from '@angular/core';
import FlowerList from '@app/interface/flower-list';

@Injectable({
	providedIn: 'root',
})
export class FlowerListService {
	private flowers: FlowerList[] = [];

	constructor() {}

	addFlower(
		id: number,
		name: string,
		price: number,
		quantity: number,
		description: string,
		isAvailable: boolean,
	): void {
		this.flowers.push({
			id: id,
			name: name,
			description: description,
			price: price,
			isAvailable: isAvailable,
			quantity: quantity,
		});
	}

	getFlowers(): FlowerList[] {
		return this.flowers;
	}
}
