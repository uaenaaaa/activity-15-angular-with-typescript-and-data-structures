import { Injectable } from '@angular/core';
import FruitList from '@app/interface/fruit-list';

@Injectable({
	providedIn: 'root',
})
export class FruitListService {
	private fruits: FruitList[] = [];

	constructor() {}

	addFruit(id: string, name: string, price: number, quantity: number): void {
		this.fruits.push({
			id: id,
			name: name,
			price: price,
			quantity: quantity,
		});
	}

	getFruits(): FruitList[] {
		return this.fruits;
	}
}
