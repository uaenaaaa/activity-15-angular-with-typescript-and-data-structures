import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LaptopSpecs from '@app/interface/laptop-specs-list';
import { LaptopSpecificationListService } from '@app/services/laptop-specification-list/laptop-specification-list.service';

@Component({
	selector: 'app-laptop-specification-list',
	standalone: true,
	imports: [NgFor, FormsModule],
	templateUrl: './laptop-specification-list.component.html',
	styles: ``,
})
export class LaptopSpecificationListComponent {
	laptops = [] as LaptopSpecs[];

	constructor(private laptopService: LaptopSpecificationListService) {
		this.laptops = this.laptopService.getLaptopSpecs();
	}

	model: string = '';
	processor: string = '';
	ram: string = '';
	storage: string = '';
	display: string = '';
	graphics: string = '';

	addLaptop() {
		this.laptops.push({
			model: this.model,
			specs: {
				processor: this.processor,
				ram: this.ram,
				storage: this.storage,
				display: this.display,
				graphics: this.graphics,
			},
		});
		this.model = '';
		this.processor = '';
		this.ram = '';
		this.storage = '';
		this.display = '';
		this.graphics = '';
	}
}
