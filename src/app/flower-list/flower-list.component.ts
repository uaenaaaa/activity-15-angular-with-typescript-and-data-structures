import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import FlowerList from '@app/interface/flower-list';

@Component({
	selector: 'app-flower-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './flower-list.component.html',
	styles: ``,
})
export class FlowerListComponent {
	flowerList: FlowerList[] = [];

	id: number = 0;
	name: string = '';
	description: string = '';
	price: number = 0;
	isAvailable: boolean = false;
	quantity: number = 0;

	addFlower() {
		this.flowerList.push({
			id: this.id,
			name: this.name,
			description: this.description,
			price: this.price,
			isAvailable: Boolean(this.isAvailable),
			quantity: this.quantity,
		});

		this.id = 0;
		this.name = '';
		this.description = '';
		this.price = 0;
		this.isAvailable = false;
		this.quantity = 0;
	}
}
