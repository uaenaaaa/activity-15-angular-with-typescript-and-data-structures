import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Tool from '@app/interface/tool-list';
import { ToolListService } from '@app/services/tool-list/tool-list.service';

@Component({
	selector: 'app-tool-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './tool-list.component.html',
	styles: ``,
})
export class ToolListComponent {
	tools = [] as Tool[];
	constructor(private toolService: ToolListService) {
		this.tools = this.toolService.getTools();
	}

	id: number = 0;
	name: string = '';
	description: string = '';
	price: number = 0;
	quantity: number = 0;

	addTool(): void {
		this.toolService.addTool(
			this.id,
			this.name,
			this.description,
			this.price,
			this.quantity,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.price = 0;
		this.quantity = 0;
	}
}
