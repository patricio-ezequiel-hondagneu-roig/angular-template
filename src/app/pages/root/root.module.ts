import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './components/root/root.component';

/**
 * Root module of the application.
 */
@NgModule({
	declarations: [
		RootComponent
	],
	imports: [
		BrowserModule,
		RootRoutingModule,
	],
	bootstrap: [
		RootComponent,
	],
})
export class RootModule { }