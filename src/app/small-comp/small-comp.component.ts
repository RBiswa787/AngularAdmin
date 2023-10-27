import { Component } from '@angular/core';

interface card{
  title: string,
  value: string,
  growth : string,
  annotation: string
}

const data : card[] = [
  {
    "title": "Sales",
    "value": "2.382",
    "growth": "-3.65",
    "annotation":"Since last week"
  },
  {
    "title": "Earnings",
    "value": "$21.300",
    "growth": "6.65",
    "annotation":"Since last week"
  },
  {
    "title": "Visitors",
    "value": "14.212",
    "growth": "5.25",
    "annotation":"Since last week"
  },
  {
    "title": "Orders",
    "value": "64",
    "growth": "-2.25",
    "annotation":"Since last week"
  },
]
@Component({
  selector: 'app-small-comp',
  templateUrl: './small-comp.component.html',
  styleUrls: ['./small-comp.component.css']
})
export class SmallCompComponent {
  public data : card[] = data;
}
