import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RootComponent } from './root.component';

describe( 'RootComponent', ( ) => {
	let fixture: ComponentFixture<RootComponent>;
	let component: RootComponent;

	beforeEach( waitForAsync( ( ) => {
		TestBed
			.configureTestingModule({
				imports: [
					RouterTestingModule,
				],
				declarations: [
					RootComponent,
				],
				schemas: [
					CUSTOM_ELEMENTS_SCHEMA,
				],
			})
			.compileComponents( );
	}));

	beforeEach( ( ) => {
		fixture = TestBed.createComponent( RootComponent );
		component = fixture.componentInstance;
		fixture.detectChanges( );
	});

	it( 'should be created', ( ) => {
		expect( component ).toBeTruthy( );
	});

});