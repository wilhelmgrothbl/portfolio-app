
import { Component, OnInit } from '@angular/core';
import { faInstagram, faLinkedin, faGithub, faChrome,  } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';






@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  
  faPhone = faPhone;
  faIcons = [faGithub, faLinkedin, faInstagram, faChrome];
  constructor() { }

  ngOnInit(): void {}
}
