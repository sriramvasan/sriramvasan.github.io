import { Component, OnInit } from '@angular/core';

const predefinedDate = new Date('08/05/2021');

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})


export class ExperienceComponent implements OnInit {

  // Date =  sampDate.toDateString();
  Date =  ExperienceComponent.dateDiffInDays(predefinedDate,new Date(Date.now()))+" Months"  //.toLocaleDateString()
  constructor() { }

  ngOnInit(): void {

  }

  static dateDiffInDays(a :Date, b:Date) {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    let days = Math.floor((utc2 - utc1) / _MS_PER_DAY);
    return Math.ceil(days * 0.0328767)
  }
}
