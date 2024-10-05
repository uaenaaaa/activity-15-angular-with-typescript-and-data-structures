import { Injectable } from '@angular/core';
import DeveloperToolsList from '@app/interface/developer-tools-list';

@Injectable({
	providedIn: 'root',
})
export class DeveloperToolsListService {
	private developerTools: DeveloperToolsList[] = [];

	constructor() {}

	addDeveloperTool(
		toolName: string,
		toolDescription: string,
		toolPrice: number,
		toolDuration: string,
	): void {
		this.developerTools.push({
			toolName: toolName,
			toolDescription: toolDescription,
			toolPrice: toolPrice,
			toolDuration: toolDuration,
		});
	}

	getDeveloperTools(): DeveloperToolsList[] {
		return this.developerTools;
	}
}
