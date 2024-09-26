import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.css']
})
export class SideNavigationBarComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
