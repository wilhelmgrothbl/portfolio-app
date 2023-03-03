import { Component, OnInit } from '@angular/core';
import { faInstagram, faLinkedin, faGithub, faChrome,  } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {


  items: string[] = ['a father', 'liverpool fc', 'a swedish bridge champion', 'trying to be good at chess'];
  currentIndex = 0;


  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  faPhone = faPhone;
  faIcons = [faGithub, faLinkedin, faInstagram, faChrome];



   
  constructor() {
  
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex === this.items.length - 1) ? 0 : this.currentIndex + 1;
    }, 2400);
    
  }
} 
