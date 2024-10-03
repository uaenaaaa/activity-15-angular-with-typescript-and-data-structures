import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Tool from '@app/interface/tool-list';

@Component({
	selector: 'app-tool-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './tool-list.component.html',
	styles: ``,
})
export class ToolListComponent {
	tools: Tool[] = [];

	id: string = '';
	name: string = '';
	description: string = '';
	price: string = '';
	quantity: string = '';

	addTool(): void {
		this.tools.push({
			id: Number(this.id),
			name: this.name,
			description: this.description,
			price: Number(this.price),
			quantity: Number(this.quantity),
		});

		this.id = '';
		this.name = '';
		this.description = '';
		this.price = '';
		this.quantity = '';
	}
}
