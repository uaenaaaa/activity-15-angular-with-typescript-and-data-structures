import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LectureList from '@app/interface/lecture-list';

@Component({
	selector: 'app-lecture-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './lecture-list.component.html',
	styles: ``,
})
export class LectureListComponent {
	lectureList: LectureList[] = [];

	id: number = 0;
	name: string = '';
	duration: number = 0;
	instructor: string = '';

	addLecture() {
		this.lectureList.push({
			id: this.id,
			name: this.name,
			duration: this.duration,
			instructor: this.instructor,
		});
		this.id = 0;
		this.name = '';
		this.duration = 0;
		this.instructor = '';
	}
}
