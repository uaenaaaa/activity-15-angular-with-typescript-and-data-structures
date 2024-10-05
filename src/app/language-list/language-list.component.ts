import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Language from '@app/interface/language-list';
import { LanguageListService } from '@app/services/language-list/language-list.service';

@Component({
	selector: 'app-language-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './language-list.component.html',
	styles: ``,
})
export class LanguageListComponent {
	languages = [] as Language[];
	constructor(private languageService: LanguageListService) {
		this.languages = this.languageService.getLanguages();
	}

	id: number = 0;
	name: string = '';
	description: string = '';
	origin: string = '';

	addLanguage(): void {
		this.languageService.addLanguage(
			this.id,
			this.name,
			this.description,
			this.origin,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.origin = '';
	}
}
