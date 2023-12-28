import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'Testsever', content: 'Just a test!'}];

  oddNumbers: number[] = []
  evenNumbers: number[] = []

  public onServerAdded(serverData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  public onBlueprintAdded(blueprintData:{serverName: string, serverContent: string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: blueprintData.serverName,
        content: blueprintData.serverContent
      });
    }

    public onChangeFirst() {
      this.serverElements[0].name = 'Changed!';
    }

    public onDestroyFirst() {
      this.serverElements.splice(0);
    }


    public onIntervalFired(firedNumber: number){

    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }

    console.log(firedNumber)
    }
}
