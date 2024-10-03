import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import DeveloperToolsList from '@app/interface/developer-tools-list';

@Component({
	selector: 'app-developer-tools-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './developer-tools-list.component.html',
	styles: ``,
})
export class DeveloperToolsListComponent {
	developerTools: DeveloperToolsList[] = [];

	toolName: string = '';
	toolDescription: string = '';
	toolPrice: number = 0;
	toolDuration: string = '';

	addDeveloperTool() {
		this.developerTools.push({
			toolName: this.toolName,
			toolDescription: this.toolDescription,
			toolPrice: this.toolPrice,
			toolDuration: this.toolDuration,
		});

		this.toolName = '';
		this.toolDescription = '';
		this.toolPrice = 0;
		this.toolDuration = '';
	}
}
