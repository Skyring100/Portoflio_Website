import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'unity-section',
  imports: [RouterOutlet],
  templateUrl: './unity.html',
  styleUrl: './unity.css'
})
export class UnityComponent {
  gameFolder : string = '/public/games/';
  boulderBusterURL : SafeResourceUrl;  
  constructor(private sanitizer: DomSanitizer){
    this.boulderBusterURL =  this.sanitizer.bypassSecurityTrustResourceUrl(this.gameFolder + "Boulder_Buster/index.html"); 
    console.log(this.boulderBusterURL);
  }
}
