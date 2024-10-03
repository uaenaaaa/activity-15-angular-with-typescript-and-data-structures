import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PhoneContactList from '@app/interface/phone-contact-list';

@Component({
	selector: 'app-phone-contact-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './phone-contact-list.component.html',
	styles: ``,
})
export class PhoneContactListComponent {
	phoneContactList: PhoneContactList[] = [];
	id: string = '';
	name: string = '';
	email: string = '';
	phone: string = '';

	addPhoneContact(): void {
		this.phoneContactList.push({
			id: Number(this.id),
			name: this.name,
			email: this.email,
			phone: this.phone,
		});

		this.id = '';
		this.name = '';
		this.email = '';
		this.phone = '';
	}
}
