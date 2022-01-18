import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 
  allowserver=false;
  ServerCreationStatus='Hello there is no server';

 servername="";
 ServerCreation="Their is no server";
 Server=false;

  constructor() {setTimeout (()=>{this.allowserver=true;},2000) }


  ngOnInit(): void {
  }
  onCreateServer()
  {
    this.ServerCreation='Server id created'+ this.servername;
  }
  OnUpdateServerNames(evnt:Event)
  {
    this.servername=(<HTMLInputElement>event.target).value;
  }
  onTyped(event:Event)
  {
    this.servername=(<HTMLInputElement>event.target).value;
  }
  onshow()
  {
    this.Server=true;
    this.ServerCreation='Server id created'+ this.servername;
  }
}
