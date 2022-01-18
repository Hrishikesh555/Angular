import { Component } from "@angular/core";
@Component({
    selector:'app-serve',
    templateUrl:'./Server.Component.html',
    // styleUrls: ['./Server.component.css'],
    styles:['.online{ color :white}']

})
export class ServerComponent {
name:string="Hrishikesh";
Username="";
Contact:number=8000000;
out:string="";
serverStatus:string="Ofline";
server=['server1','server2']

constructor(){
      this.serverStatus=Math.random() >0.5? 'online':'Ofline';
}
getcontact()
{
    return this.Contact + this.serverStatus;
}
onEnter(event:Event)
{
    this.name=(<HTMLInputElement>event.target).value
 
}
onSave()
{
   this.out=this.name;
}

oncolor()
{
   return this.serverStatus =='online' ? 'green' :'red';
}

}