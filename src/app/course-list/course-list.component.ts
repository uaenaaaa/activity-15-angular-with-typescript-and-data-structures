import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseList } from '@app/interface/course-list';

@Component({
	selector: 'app-course-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './course-list.component.html',
	styles: ``,
})
export class CourseListComponent {
	courses: CourseList[] = [];

	id: string = '';
	name: string = '';
	teacher: string = '';
	credit: number = 0;

	addCourse(): void {
		this.courses.push({
			id: this.id,
			name: this.name,
			teacher: this.teacher,
			credit: this.credit,
		});

		this.id = '';
		this.name = '';
		this.teacher = '';
		this.credit = 0;
	}
}
