import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseList } from '@app/interface/course-list';
import { CourseListService } from '@app/services/course-list/course-list.service';

@Component({
	selector: 'app-course-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './course-list.component.html',
	styles: ``,
})
export class CourseListComponent {
	courses = [] as CourseList[];
	constructor(private courseListService: CourseListService) {
		this.courses = this.courseListService.getCourses();
	}

	id: string = '';
	name: string = '';
	teacher: string = '';
	credit: number = 0;

	addCourse(): void {
		this.courseListService.addCourse(
			this.id,
			this.name,
			this.teacher,
			this.credit,
		);

		this.id = '';
		this.name = '';
		this.teacher = '';
		this.credit = 0;
	}
}
