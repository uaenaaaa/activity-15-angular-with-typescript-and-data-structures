import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from '@app/student-list/student-list.component';
import { EmployeeListComponent } from '@app/employee-list/employee-list.component';
import { FruitListComponent } from '@app/fruit-list/fruit-list.component';
import { CourseListComponent } from '@app/course-list/course-list.component';
import { BookListComponent } from '@app/book-list/book-list.component';
import { CityListComponent } from '@app/city-list/city-list.component';
import { MovieListComponent } from '@app/movie-list/movie-list.component';
import { CarModelListComponent } from '@app/car-model-list/card-mode-list.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
	{
		title: 'Student List',
		component: StudentListComponent,
		path: 'student-list',
	},
	{
		title: 'Employee List',
		component: EmployeeListComponent,
		path: 'employee-list',
	},
	{
		title: 'Fruit List',
		component: FruitListComponent,
		path: 'fruit-list',
	},
	{
		title: 'Course List',
		component: CourseListComponent,
		path: 'course-list',
	},
	{
		title: 'Book List',
		component: BookListComponent,
		path: 'book-list',
	},
	{
		title: 'City List',
		component: CityListComponent,
		path: 'city-list',
	},
	{
		title: 'Movie List',
		component: MovieListComponent,
		path: 'movie-list',
	},
	{
		title: 'Car Model List',
		component: CarModelListComponent,
		path: 'car-model-list',
	},
	{
		title: 'Product List',
		component: ProductListComponent,
		path: 'product-list',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
