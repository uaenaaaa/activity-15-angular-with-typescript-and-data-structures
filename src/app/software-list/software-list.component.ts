import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import SoftwareList from '@app/interface/software-list';

@Component({
	selector: 'app-software-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './software-list.component.html',
	styles: ``,
})
export class SoftwareListComponent {
	softwareList: SoftwareList[] = [];
	id: string = '';
	name: string = '';
	description: string = '';
	platform: string = '';

	addSoftware(): void {
		this.softwareList.push({
			id: Number(this.id),
			name: this.name,
			description: this.description,
			platform: this.platform,
		});

		this.id = '';
		this.name = '';
		this.description = '';
		this.platform = '';
	}
}
