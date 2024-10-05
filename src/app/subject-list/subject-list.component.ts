import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Subject from '@app/interface/subject-list';
import { SubjectListService } from '@app/services/subject-list/subject-list.service';

@Component({
	selector: 'app-subject-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './subject-list.component.html',
	styles: ``,
})
export class SubjectListComponent {
	subjects = [] as Subject[];

	constructor(private subjectListService: SubjectListService) {
		this.subjects = this.subjectListService.getSubjects();
	}

	id: number = 0;
	name: string = '';
	teacher: string = '';

	addSubject(): void {
		this.subjectListService.addSubject(this.id, this.name, this.teacher);
		this.id = 0;
		this.name = '';
		this.teacher = '';
	}
}
