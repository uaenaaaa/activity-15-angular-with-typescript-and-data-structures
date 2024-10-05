import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import CarModel from '@app/interface/car-model';
import { CarModelListService } from '@app/services/car-model-list/car-model-list.service';

@Component({
	selector: 'app-card-model-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './car-model-list.component.html',
	styles: ``,
})
export class CarModelListComponent {
	carModels = [] as CarModel[];
	constructor(private carModelService: CarModelListService) {
		this.carModels = this.carModelService.getCarModels();
	}
	id: number = 0;
	name: string = '';
	year: number = 0;
	make: string = '';
	model: string = '';
	price: number = 0;

	addCarModel(): void {
		this.carModelService.addCarModel(
			this.id,
			this.name,
			this.year,
			this.make,
			this.model,
			this.price,
		);

		this.id = 0;
		this.name = '';
		this.year = 0;
		this.make = '';
		this.model = '';
		this.price = 0;
	}
}
