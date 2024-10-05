import { Injectable } from '@angular/core';
import LibraryList from '@app/interface/library-list';

@Injectable({
	providedIn: 'root',
})
export class LibraryListService {
	private libraries: LibraryList[] = [];

	constructor() {}

	addLibrary(
		libraryName: string,
		programmingLanguage: string,
		description: string,
		developedBy: string,
		firstRelease: string,
		latestRelease: string,
	): void {
		this.libraries.push({
			libraryName: libraryName,
			programmingLanguage: programmingLanguage,
			description: description,
			developedBy: developedBy,
			firstRelease: firstRelease,
			latestRelease: latestRelease,
		});
	}

	getLibraries(): LibraryList[] {
		return this.libraries;
	}
}
