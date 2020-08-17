import { browser, by, element } from 'protractor';

/**
 * Page object representing the root page.
 */
export class AppPage {

	/**
	 * Navigates to the root page.
	 */
	public async navigateTo(): Promise<unknown> {
		return browser.get(browser.baseUrl) as Promise<unknown>;
	}

	/**
	 * Returns the title elment of the root page.
	 */
	public async getTitleText(): Promise<string> {
		return element(by.css('app-root .content span')).getText() as Promise<string>;
	}
}