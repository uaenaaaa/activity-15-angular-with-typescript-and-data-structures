import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import ComputerHardware from '@app/interface/computer-hardware-list';
import { NgForOf } from '@angular/common';
import { ComputerHardwareListService } from '@app/services/computer-hardware-list/computer-hardware-list.service';

@Component({
	selector: 'app-computer-hardware-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './computer-hardware-list.component.html',
	styles: ``,
})
export class ComputerHardwareListComponent {
	computerHardware = [] as ComputerHardware[];

	constructor(
		private computerHardwareListService: ComputerHardwareListService,
	) {
		this.computerHardware =
			this.computerHardwareListService.getComputerHardwares();
	}

	name: string = '';
	location: string = '';
	type: string = '';
	price: number = 0;

	addComputerHardware() {
		this.computerHardwareListService.addComputerHardware(
			this.name,
			this.location,
			this.type,
			this.price,
		);

		this.name = '';
		this.location = '';
		this.type = '';
		this.price = 0;
	}
}
