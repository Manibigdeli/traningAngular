import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
loadedfeature = 'shoes'
  Onnavigate(feature : string){
  this.loadedfeature = feature
  }
}
