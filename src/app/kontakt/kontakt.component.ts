import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss','../css/font-awesome.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class KontaktComponent implements OnInit {
  i1Data = [
    {
      icon: "fa-address-book",
      headline: "Kontakt",
      content: "Kattagat Dykkerne Grenaa<br>att: Kristoffer Sørensen<br> Skakkesholm 20<br>DK-8500 Grenaa<br><br>formanden@kattagatdykkerne.dk<br>Tlf: 21702540"
    },
    {
      icon: "fa-facebook",
      headline: "Facebook",
      content: "Det meste af vores komunikation forgår via vores to facebook grupper. Den ene grupper er for alle og er typisk der vi skly aktiviteter op. Den anden er lukket og kun til intern brug for klubbens medlemmer. <br><br>du finder vores facebook gruppe ved at klikke <a href='https://www.facebook.com/groups/kattegatdykkerne/' target='_blank'>her</a>"
    }, 
     {
      icon: "fa-star",
      headline: "Luftpåfyldning",
      content: " Luftfyldning er gratis for klubbens medlemmer men er du ikke medlem, koster det 40 kr. pr. flaske. Vi fylder både 200 og 300 bar. Vi har ingen faste åbningstider men du er velkommen til at kontakte et af vores medlemmer her under og lave en aftale."
    }
  ]; 
  kData = 
    {
      adresse: "Skakkesholm 20",
      bynavn: "Grenaa"     
    }; 
  constructor() { }

  ngOnInit() {
  }

}
