import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {

  Secret=false;
  Arr=[];

  constructor() { }

  ngOnInit(): void {
  }

  showdisplay()
  {
    this.Secret=!this.Secret;
    //  this.Arr.push(this.Arr.length+1);
    this.Arr.push(new Date());
  }
}
