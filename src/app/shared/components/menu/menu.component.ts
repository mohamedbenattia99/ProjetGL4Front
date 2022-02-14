import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { NavService,Menu } from '../../components/services/nav.service';
>>>>>>> news-faq
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

<<<<<<< HEAD
  
=======
  public menuItems?: Menu[];

  constructor(private router: Router, public navServices: NavService) {
    this.navServices.items.subscribe(menuItems => this.menuItems = menuItems );
    this.router.events.subscribe((event) => {
      this.navServices.mainMenuToggle = false;
    });
  }
>>>>>>> news-faq

  ngOnInit(): void {
  }

<<<<<<< HEAD
 

  
=======
  mainMenuToggle(): void {
    this.navServices.mainMenuToggle = !this.navServices.mainMenuToggle;
  }

  // Click Toggle menu (Mobile)
  toggletNavActive(item: any) {
    item.active = !item.active;
  }
>>>>>>> news-faq

}
