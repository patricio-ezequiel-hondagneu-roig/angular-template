import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RootModule } from './app/pages/root/root.module';
import { environment } from './environments/environment';

// tslint:disable: no-console

if ( environment.production ) {
	enableProdMode( );
}

platformBrowserDynamic( )
	.bootstrapModule( RootModule )
	.catch( ( err ) => {
		console.error( err );
	});