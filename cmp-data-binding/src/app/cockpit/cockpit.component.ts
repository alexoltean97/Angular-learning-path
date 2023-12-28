import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 // newServerName = '';
 // newServerContent = '';
 @ViewChild('serverContentInput') serverContentInput : ElementRef;
 @ViewChild('serverNameInput') serverNameInput : ElementRef;
  constructor() {
  }

  ngOnInit(): void {
  }

  // Working with refs old
 //  onAddServer (serverNameInput: HTMLInputElement, serverContent: HTMLInputElement) {

   // console.log(this.serverContentInput);

    // console.log(serverNameInput.value)
    // this.serverCreated.emit(
    //   {
    //     serverName: serverNameInput.value,
    //     serverContent: serverContent.value
    //   })
 // }

  // onAddBlueprint (serverNameInput: HTMLInputElement, serverContent: HTMLInputElement) {
    // this.blueprintCreated.emit({
    //   serverName: serverNameInput.value,
    //   serverContent: serverContent.value
    // })
 //  }

  // Working with refs new
  onAddServer(serverNameInput, serverContentInput) {
    console.log(serverNameInput)
    this.serverCreated.emit(
      {
        serverName: this.serverNameInput.nativeElement.value,
        serverContent: this.serverContentInput.nativeElement.value
      })
  }

  onAddBlueprint(serverNameInput, serverContentInput) {
    this.blueprintCreated.emit(
      {
        serverName: serverNameInput.nativeElement.value,
        serverContent: serverContentInput.nativeElement.value
      })
  }
}
