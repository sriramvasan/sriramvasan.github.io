import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.tableauView1();
    this.tableauView2();

  }

  tableauView1(){
    var divElement = <HTMLElement>document?.getElementById('viz1653157059005');
    var vizElement = <HTMLObjectElement>divElement.getElementsByTagName('object')[0];
    if ( divElement.offsetWidth > 800 )
    { vizElement.style.width='1100px';vizElement.style.height='1527px';}
    else if ( divElement.offsetWidth > 500 )
    { vizElement.style.width='1100px';vizElement.style.height='1527px';}
    else { vizElement.style.width='100%';vizElement.style.height='3577px';}
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    if(vizElement.parentNode)
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

  tableauView2(){
    var divElement = <HTMLElement>document.getElementById('viz1653159963096');
    var vizElement = divElement.getElementsByTagName('object')[0];
    if ( divElement.offsetWidth > 800 )
    { vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';}
    else if ( divElement.offsetWidth > 500 )
    { vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';}
    else { vizElement.style.width='100%';vizElement.style.height='1677px';}
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    if(vizElement.parentNode)
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }
}
