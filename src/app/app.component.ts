import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public username = 'Alex';
  public isDisabled = false;
  public showParagraph = false;
  public clicksArray = [];
  public count = 0;

  public resetUsername(){
    this.username = '';
  }

  public toggleParagraph(){
    this.showParagraph = !this.showParagraph;
    this.count++;
    this.clicksArray.push(this.count);  
  }
  
}
