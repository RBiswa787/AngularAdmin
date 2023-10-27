import { Component, Input } from '@angular/core';

interface card{
  title: string,
  value: string,
  growth : string,
  annotation: string
}

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  data : card = {
    title: "",
    value: "",
    growth : "",
    annotation: ""
  }

  processDanger(num : string){
    if(parseFloat(num) < 0)
    return true;
    else
    return false;
  }
  processSafe(num : string){
    if(parseFloat(num) > 0)
    return true;
    else
    return false;
  }
}
