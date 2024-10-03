import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Language from '@app/interface/language-list';

@Component({
	selector: 'app-language-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './language-list.component.html',
	styles: ``,
})
export class LanguageListComponent {
	languages: Language[] = [];

	id: string = '';
	name: string = '';
	description: string = '';
	origin: string = '';

	addLanguage(): void {
		this.languages.push({
			id: Number(this.id),
			name: this.name,
			description: this.description,
			origin: this.origin,
		});

		this.id = '';
		this.name = '';
		this.description = '';
		this.origin = '';
	}
}
