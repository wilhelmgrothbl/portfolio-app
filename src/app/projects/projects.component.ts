import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faInstagram, faSpotify} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  faLink = faLink; 
  faIcons = [faGithub, faLinkedin, faInstagram, faSpotify];
  constructor() {}
  ngOnInit(): void {}
}