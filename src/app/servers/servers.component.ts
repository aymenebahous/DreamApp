import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent { 
  allowNewServer = false; 
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['testServer', 'testServer2'];

  /* constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  } */

  onCreateServer() {
    this.serverCreationStatus = 'Server ' + this.serverName + ', was created!';
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event : any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
