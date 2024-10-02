import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import CarModel from '@app/interface/car-model';

@Component({
	selector: 'app-card-model-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './car-model-list.component.html',
	styles: ``,
})
export class CarModelListComponent {
	carModels: CarModel[] = [];
	id: string = '';
	name: string = '';
	year: number = 0;
	make: string = '';
	model: string = '';
	price: number = 0;

	addCarModel(): void {
		this.carModels.push({
			id: Number(this.id),
			name: this.name,
			year: this.year,
			make: this.make,
			model: this.model,
			price: this.price,
		});

		this.id = '';
		this.name = '';
		this.year = 0;
		this.make = '';
		this.model = '';
		this.price = 0;
	}
}
