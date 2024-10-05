import { Injectable } from '@angular/core';
import { CourseList } from '@app/interface/course-list';

@Injectable({
	providedIn: 'root',
})
export class CourseListService {
	private courses: CourseList[] = [];

	constructor() {}

	addCourse(id: string, name: string, teacher: string, credit: number): void {
		this.courses.push({
			id: id,
			name: name,
			teacher: teacher,
			credit: credit,
		});
	}

	getCourses(): CourseList[] {
		return this.courses;
	}
}
