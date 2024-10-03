import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import FrameworkList from '@app/interface/framework-list';

@Component({
	selector: 'app-framework-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './framework-list.component.html',
	styles: ``,
})
export class FrameworkListComponent {
	frameworks: FrameworkList[] = [];

	name: string = '';
	description: string = '';
	developedBy: string = '';
	firstRelease: string = '';
	latestRelease: string = '';

	addFramework() {
		this.frameworks.push({
			name: this.name,
			description: this.description,
			developedBy: this.developedBy,
			firstRelease: this.firstRelease,
			latestRelease: this.latestRelease,
		});

		this.name = '';
		this.description = '';
		this.developedBy = '';
		this.firstRelease = '';
		this.latestRelease = '';
	}
}
