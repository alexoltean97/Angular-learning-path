import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  public allowNewServer = true;
  public serverCreationStatus = 'No server was created!';
  public serverName = '';
  public mata = 'Ma-ta aia cheala';
  public serverCreated = false;
  public servers = ['TestServer', 'TestServer2'];

  constructor () {
    setTimeout(() => {
      this.allowNewServer = false;
    },2000);
 
  }

  public onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name besides ma-ta aia cheala este: ' + this.serverName;
  }

  public onUpdateServerName(event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
