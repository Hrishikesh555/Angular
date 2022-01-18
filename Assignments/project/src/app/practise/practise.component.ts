import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {

  servers=[];
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer()
  {
   this.servers.push("Add server");
  }
  onRemoveServer(id:number){
    const position=id+1;
    this.servers.splice(position,1);

  }
}
