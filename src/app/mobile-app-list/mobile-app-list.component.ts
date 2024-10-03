import { Component } from '@angular/core';
import MobileAppList from '@app/interface/mobile-app-list';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-mobile-app-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './mobile-app-list.component.html',
	styles: ``,
})
export class MobileAppListComponent {
	mobileApps: MobileAppList[] = [];

	name: string = '';
	description: string = '';
	price: number = 0;
	rating: number = 0;

	addMobileApp() {
		this.mobileApps.push({
			name: this.name,
			description: this.description,
			price: this.price,
			rating: this.rating,
		});

		this.name = '';
		this.description = '';
		this.price = 0;
		this.rating = 0;
	}
}
