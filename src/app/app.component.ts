import { Component } from '@angular/core';

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

  onAddServer(sname){
    this.servers.push(
      {
        name:sname,
        status:"onling"
      }
    );
    console.log(sname)
  }
}
