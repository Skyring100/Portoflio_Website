import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'gis-section',
  imports: [RouterOutlet],
  templateUrl: './gis.html',
  styleUrl: './gis.css'
})
export class GISComponent {
  pdfFolder : string = '/public/pdfs/';
  scandinaviaURL : SafeResourceUrl;  
  showScandinaviaPDF : boolean;
  constructor(private sanitizer: DomSanitizer){
    this.scandinaviaURL =  this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfFolder + "ScandinaviaRailwayCrossings.pdf"); 
    this.showScandinaviaPDF = false;
  }

  scandinaviaToggle() {
    this.showScandinaviaPDF = !this.showScandinaviaPDF;
  } 
}
