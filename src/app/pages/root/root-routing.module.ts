import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ ];

/**
 * Routing module for the root module of the application.
 */
@NgModule({
	imports: [
		RouterModule.forRoot( routes ),
	],
	exports: [
		RouterModule,
	],
})
export class RootRoutingModule { }