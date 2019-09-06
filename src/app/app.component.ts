import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private s: TranslocoService) {
  }

  changeLang(l: string) {
    this.s.setActiveLang(l);
  }
}
