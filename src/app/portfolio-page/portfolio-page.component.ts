import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {
  constructor(private router: Router){}

  @Input() callbackFn: ()=>void;
  
  projects = [
   {
    "name": "Footprint",
    "description": "Monthly Carbon Output Tracker.",
    "stack": "Angular, SpringBoot, MySQL",
    "languages": "Typescript, Java, SQL",
    "link": "https://johnnie007.github.io/FootPrintV2Frontend/#/"
   }, 
   {
    "name": "Mosaic Me",
    "description": "Converts image into a Mosaic",
    "stack": "React",
    "languages": "Javascript",
    "link": "https://johnnie007.github.io/mosaic-me/#/"
   }, 
   {
    "name": "Archive",
    "description": "Various projects",
    "stack": "Varies",
    "languages": "Varies",
    "link": "https://github.com/Johnnie007?tab=repositories"
   }, 
  ];

  mainIndex = 0;
  secondIndex = 1;
  thirdIndex = 2;

  navigateToProject(space: number){
    window.open(this.projects[space].link, "_blank")
  }

}
