import { Component } from '@angular/core';
import { ServerService } from './server.service';
import {Response} from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularWithFirebase';

  servers=[
    {
      name:"A",
      status:"Online"
    },
    {
      name:"B",
      status:"Online" 
    },
    {
      name:"C",
      status:"Online"
    }
  ]
  constructor(private serverService:ServerService){}

  onAddServer(sname){
    this.servers.push(
      {
        name:sname,
        status:"onling"
      }
    );
    console.log(sname);
    this.serverService.storeService(this.servers).
      subscribe(
        (response)=>console.log(response),
        (error)=>console.log(error)
      )
    ;
  }
  onGetServer(){
    this.serverService.getServers().
      subscribe(
        (servers:any[])=>{ 
        console.log(servers);
        }
        ,
        (error)=>console.log(error)
      );
  }

  
}
