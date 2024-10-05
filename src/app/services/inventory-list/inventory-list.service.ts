import { Injectable } from '@angular/core';
import InventoryList from '@app/interface/inventory-list';

@Injectable({
	providedIn: 'root',
})
export class InventoryListService {
	private inventories: InventoryList[] = [];

	constructor() {}

	addInventory(
		id: number,
		name: string,
		price: number,
		quantity: number,
	): void {
		this.inventories.push({
			id: id,
			name: name,
			price: price,
			quantity: quantity,
		});
	}

	getInventories(): InventoryList[] {
		return this.inventories;
	}
}
