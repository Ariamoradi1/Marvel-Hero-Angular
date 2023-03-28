import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDarkMode = false;
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode

    const body = document.querySelector('body') as HTMLElement
    body.classList.toggle('dark-mode', this.isDarkMode)
  }
}
