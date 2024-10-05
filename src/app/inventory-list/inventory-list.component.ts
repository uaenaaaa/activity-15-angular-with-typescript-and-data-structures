import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import InventoryList from '@app/interface/inventory-list';
import { InventoryListService } from '@app/services/inventory-list/inventory-list.service';

@Component({
	selector: 'app-inventory-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './inventory-list.component.html',
	styles: ``,
})
export class InventoryListComponent {
	inventoryList = [] as InventoryList[];
	constructor(private inventoryService: InventoryListService) {
		this.inventoryList = this.inventoryService.getInventories();
	}

	id: number = 0;
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addNewInventory() {
		this.inventoryService.addInventory(
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
