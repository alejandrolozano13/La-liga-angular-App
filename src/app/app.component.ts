import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'la-liga-angular';

  imagens: string[] = [
    'assets/images/fc_barcelona.png',
    'assets/images/real_madrid.png',
    'assets/images/sevilla.png',
  ]
}
