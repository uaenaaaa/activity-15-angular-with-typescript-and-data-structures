import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import FlowerList from '@app/interface/flower-list';
import { FlowerListService } from '@app/services/flower-list/flower-list.service';

@Component({
	selector: 'app-flower-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './flower-list.component.html',
	styles: ``,
})
export class FlowerListComponent {
	flowerList = [] as FlowerList[];
	constructor(private flowerListService: FlowerListService) {
		this.flowerList = this.flowerListService.getFlowers();
	}

	id: number = 0;
	name: string = '';
	description: string = '';
	price: number = 0;
	isAvailable: boolean = false;
	quantity: number = 0;

	addFlower() {
		this.flowerListService.addFlower(
			this.id,
			this.name,
			this.price,
			this.quantity,
			this.description,
			this.isAvailable,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.price = 0;
		this.isAvailable = false;
		this.quantity = 0;
	}
}
