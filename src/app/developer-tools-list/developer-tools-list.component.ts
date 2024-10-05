import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import DeveloperToolsList from '@app/interface/developer-tools-list';
import { DeveloperToolsListService } from '@app/services/developer-tools-list/developer-tools-list.service';

@Component({
	selector: 'app-developer-tools-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './developer-tools-list.component.html',
	styles: ``,
})
export class DeveloperToolsListComponent {
	developerTools = [] as DeveloperToolsList[];
	constructor(private developerToolsService: DeveloperToolsListService) {
		this.developerTools = this.developerToolsService.getDeveloperTools();
	}

	toolName: string = '';
	toolDescription: string = '';
	toolPrice: number = 0;
	toolDuration: string = '';

	addDeveloperTool() {
		this.developerToolsService.addDeveloperTool(
			this.toolName,
			this.toolDescription,
			this.toolPrice,
			this.toolDuration,
		);

		this.toolName = '';
		this.toolDescription = '';
		this.toolPrice = 0;
		this.toolDuration = '';
	}
}
