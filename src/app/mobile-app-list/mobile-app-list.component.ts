import { Component } from '@angular/core';
import MobileAppList from '@app/interface/mobile-app-list';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MobileAppListService } from '@app/services/mobile-app-list/mobile-app-list.service';

@Component({
	selector: 'app-mobile-app-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './mobile-app-list.component.html',
	styles: ``,
})
export class MobileAppListComponent {
	mobileApps = [] as MobileAppList[];

	constructor(private mobileAppService: MobileAppListService) {
		this.mobileApps = this.mobileAppService.getMobileApps();
	}

	name: string = '';
	description: string = '';
	price: number = 0;
	rating: number = 0;

	addMobileApp() {
		this.mobileAppService.addMobileApp(
			this.name,
			this.description,
			this.price,
			this.rating,
		);

		this.name = '';
		this.description = '';
		this.price = 0;
		this.rating = 0;
	}
}
