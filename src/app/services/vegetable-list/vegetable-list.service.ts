import { Injectable } from '@angular/core';
import Vegetables from '@app/interface/vegetables-list';
@Injectable({
	providedIn: 'root',
})
export class VegetableListService {
	private vegetables: Vegetables[] = [];

	constructor() {}

	addVegetable(id: number, name: string, price: number): void {
		this.vegetables.push({
			id: id,
			name: name,
			price: price,
		});
	}

	getVegetables(): Vegetables[] {
		return this.vegetables;
	}
}
