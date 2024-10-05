import { Injectable } from '@angular/core';
import SoftwareList from '@app/interface/software-list';

@Injectable({
	providedIn: 'root',
})
export class SoftwareListService {
	private software: SoftwareList[] = [];

	constructor() {}

	addSoftware(
		id: number,
		name: string,
		description: string,
		platform: string,
	): void {
		this.software.push({
			id: id,
			name: name,
			description: description,
			platform: platform,
		});
	}

	getSoftware(): SoftwareList[] {
		return this.software;
	}
}
