import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import SoftwareList from '@app/interface/software-list';
import { SoftwareListService } from '@app/services/software-list/software-list.service';

@Component({
	selector: 'app-software-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './software-list.component.html',
	styles: ``,
})
export class SoftwareListComponent {
	softwareList = [] as SoftwareList[];
	constructor(private softwareListService: SoftwareListService) {
		this.softwareList = this.softwareListService.getSoftware();
	}
	id: number = 0;
	name: string = '';
	description: string = '';
	platform: string = '';

	addSoftware(): void {
		this.softwareListService.addSoftware(
			this.id,
			this.name,
			this.description,
			this.platform,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.platform = '';
	}
}
