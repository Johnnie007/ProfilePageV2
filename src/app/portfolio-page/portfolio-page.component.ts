import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {
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
    "description": "Converts any image into a Mosaic",
    "stack": "React",
    "languages": "Javascript",
    "link": "https://johnnie007.github.io/mosaic-me/#/"
   }, 
   {
    "name": "Archive",
    "description": "Various projects that were built using differnt types of langauages",
    "stack": "Varies",
    "languages": "Varies",
    "link": "https://github.com/Johnnie007?tab=repositories"
   }, 
  ];

  mainIndex = 0;
  secondIndex = 1;
  thirdIndex = 2;

  counterClockWise(){
    let holder = this.mainIndex;
    this.mainIndex = this.secondIndex;
    this.secondIndex = this.thirdIndex;
    this.thirdIndex = holder;
  }

  clockWise(){
    let holder = this.mainIndex;
    this.mainIndex = this.thirdIndex;
    this.thirdIndex = this.secondIndex
    this.secondIndex = holder;
  }

}
