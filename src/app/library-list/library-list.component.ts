import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import LibraryList from '@app/interface/library-list';

@Component({
	selector: 'app-library-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './library-list.component.html',
	styles: ``,
})
export class LibraryListComponent {
	libraries: LibraryList[] = [];

	libraryName: string = '';
	programmingLanguage: string = '';
	description: string = '';
	developedBy: string = '';
	firstRelease: string = '';
	latestRelease: string = '';

	addLibrary() {
		this.libraries.push({
			libraryName: this.libraryName,
			programmingLanguage: this.programmingLanguage,
			description: this.description,
			developedBy: this.developedBy,
			firstRelease: this.firstRelease,
			latestRelease: this.latestRelease,
		});

		this.libraryName = '';
		this.programmingLanguage = '';
		this.description = '';
		this.developedBy = '';
		this.firstRelease = '';
		this.latestRelease = '';
	}
}
