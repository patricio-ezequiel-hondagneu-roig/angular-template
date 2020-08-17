import { visit } from '../utils/visit';

it( 'should visit the main page', ( ) => {
	visit( 'root' );
	cy.location( ).its( 'pathname' ).should( 'equal', '/' );
});