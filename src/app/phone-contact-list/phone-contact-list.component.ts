import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PhoneContactList from '@app/interface/phone-contact-list';
import { PhoneContactListService } from '@app/services/phone-contact-list/phone-contact-list.service';

@Component({
	selector: 'app-phone-contact-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './phone-contact-list.component.html',
	styles: ``,
})
export class PhoneContactListComponent {
	phoneContactList = [] as PhoneContactList[];
	constructor(private phoneContactListService: PhoneContactListService) {
		this.phoneContactList = this.phoneContactListService.getPhoneContacts();
	}
	id: number = 0;
	name: string = '';
	email: string = '';
	phone: string = '';

	addPhoneContact(): void {
		this.phoneContactListService.addPhoneContact(
			this.id,
			this.name,
			this.email,
			this.phone,
		);

		this.id = 0;
		this.name = '';
		this.email = '';
		this.phone = '';
	}
}
