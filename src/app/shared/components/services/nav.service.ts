import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	type?: string;
	megaMenu?: boolean;
	image?: string;
	active?: boolean;
	badge?: boolean;
	badgeText?: string;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	constructor() { }

	public screenWidth: any;
	public leftMenuToggle: boolean = false;
	public mainMenuToggle: boolean = false;

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize() {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			title: 'About', type: 'sub', active: false, children: [
				
					
				{ path: '/home/store', title: 'Store', type: 'link' },
				{ path: '/home/news', title: 'News', type: 'link' },
				{ path: '/home/faq', title: 'FAQ', type: 'link' },
			]
		},
		{
			path: '/shop', title: 'Shop', type: 'link'
		},
	]


	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}
