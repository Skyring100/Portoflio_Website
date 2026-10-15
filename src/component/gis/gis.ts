import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'gis-section',
  imports: [RouterOutlet],
  templateUrl: './gis.html',
  styleUrl: './gis.css'
})
export class GISComponent {
  assetFolder : string = '/assets/';
  scandinaviaURL : SafeResourceUrl;  
  constructor(private sanitizer: DomSanitizer){
    this.scandinaviaURL =  this.sanitizer.bypassSecurityTrustResourceUrl(this.assetFolder + "ScandinaviaRailwayCrossings.pdf"); 
  }
}
