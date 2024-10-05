import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import LibraryList from '@app/interface/library-list';
import { LibraryListService } from '@app/services/library-list/library-list.service';

@Component({
	selector: 'app-library-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './library-list.component.html',
	styles: ``,
})
export class LibraryListComponent {
	libraries = [] as LibraryList[];
	constructor(private libraryService: LibraryListService) {
		this.libraries = this.libraryService.getLibraries();
	}

	libraryName: string = '';
	programmingLanguage: string = '';
	description: string = '';
	developedBy: string = '';
	firstRelease: string = '';
	latestRelease: string = '';

	addLibrary() {
		this.libraryService.addLibrary(
			this.libraryName,
			this.programmingLanguage,
			this.description,
			this.developedBy,
			this.firstRelease,
			this.latestRelease,
		);

		this.libraryName = '';
		this.programmingLanguage = '';
		this.description = '';
		this.developedBy = '';
		this.firstRelease = '';
		this.latestRelease = '';
	}
}
