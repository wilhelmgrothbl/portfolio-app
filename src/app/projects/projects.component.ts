import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { faGithub, faLinkedin, faInstagram, faChrome, faSpotify} from '@fortawesome/free-brands-svg-icons';
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