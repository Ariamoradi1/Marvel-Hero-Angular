import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDarkMode = false;
  isOpen : boolean = false;
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode

    const body = document.querySelector('body') as HTMLElement
    body.classList.toggle('dark-mode', this.isDarkMode)
  }
  constructor(public translate : TranslateService) {
    translate.addLangs(['en', 'fa'])
    translate.setDefaultLang('en')
  }
  useLanguage(lan : any) {
    this.translate.use(lan)
  }
  clickMenuHandler(){
    this.isOpen = true
  }
  closeHandler(){
    this.isOpen = false
  }
}
