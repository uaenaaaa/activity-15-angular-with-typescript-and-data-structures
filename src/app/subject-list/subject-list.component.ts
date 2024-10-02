import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Subject from '@app/interface/subject-list';

@Component({
	selector: 'app-subject-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './subject-list.component.html',
	styles: ``,
})
export class SubjectListComponent {
	subjects: Subject[] = [];

	id: string = '';
	name: string = '';
	teacher: string = '';

	addSubject(): void {
		this.subjects.push({
			id: Number(this.id),
			name: this.name,
			teacher: this.teacher,
		});

		this.id = '';
		this.name = '';
		this.teacher = '';
	}
}
