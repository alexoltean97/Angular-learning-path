import { Component, Input } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;


  constructor(private loggingService: LoggingService, private accountService: AccountsService) { }
  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }
}


// Alternative syntax

// import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

// @Component({
//   selector: 'app-account',
//   templateUrl: './account.component.html',
//   styleUrls: ['./account.component.css'],
//   providers: [LoggingService]
// })

// export class AccountComponent {
//   private loggingService?: LoggingService;

//   constructor(){
//     this.loggingService = inject(LoggingService)
//   }
// }

