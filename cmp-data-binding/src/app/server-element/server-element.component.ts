import {
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewEncapsulation,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, OnDestroy{

  @Input('srvElement') public element: {type: string, name: string, content: string;};
  @Input() name: string;
  constructor() {
    console.log('constructor called!')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called!')
  }
  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit() {
    console.log('Ng after content init')
  }

  ngAfterContentChecked() {
    console.log('Ng after content checked')
  }

  ngAfterViewInit() {
    console.log('After view init')
  }

  ngAfterViewChecked() {
    console.log('After view checked')
  }

  ngOnDestroy() {
    console.log('On Destroy')
  }
}
