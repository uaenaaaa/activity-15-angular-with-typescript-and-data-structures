import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Vegetables from '@app/interface/vegetables-list';

@Component({
	selector: 'app-vegetables-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './vegetables-list.component.html',
	styles: ``,
})
export class VegetablesListComponent {
	vegetables: Vegetables[] = [];

	id: string = '';
	name: string = '';
	price: string = '';

	addVegetable(): void {
		this.vegetables.push({
			id: Number(this.id),
			name: this.name,
			price: Number(this.price),
		});

		this.id = '';
		this.name = '';
		this.price = '';
	}
}
