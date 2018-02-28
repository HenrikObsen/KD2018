import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import '../js/jquery.bxslider.js';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../css/font-awesome.min.css', '../css/jquery.bxslider.css'],
  encapsulation: ViewEncapsulation.None
})


export class HomeComponent implements OnInit {

  p1Data = [
    {
      image: "Klubhus.jpg",
      headline: "Klubhuset",
      content: "Vores klubhus er placeret på Grenaa Marina helt ned til vandet, den perfekte placering."
    },
    {
      image: "Stranddyk.jpg",
      headline: "Stranddyk",
      content: "I sommerperioden er der ugentlige stranddyk ved de omkringliggende kyster. Til dette bor vi jo perfekt"
    }, {
      image: "Baadtur.jpg",
      headline: "Bådture",
      content: "Klubben råder over en lille rib-båd og flere af klubbens medlemmer afholder ture i deres private både."
    }, {
      image: "uv-jagt.jpg",
      headline: "UV-jagt",
      content: "Vi har også en del fridykkere og uv-jægere i klubben der jævntlig deltager i forskellige konkurrencer."
    },
  ];

  p2Data = [
    {
      image: "Uddannelse1.jpg",
      headline: "Uddannelse",
      content: "Klubben har tilknytter instruktører og vi uddanner dykkerer inden for Padi og TDI"
    },
    {
      image: "rejser.jpg",
      headline: "Udenlandsture",
      content: "Vi afholder eller deltager årligt i udenlandsture blandt andet til Norge"
    }, {
      image: "Foto.jpg",
      headline: "Foto",
      content: "I klubbens medlemmer deltager jævnligt i fotokonkurrencer og arrangementer"
    }, {
      image: "Svommehal.jpg",
      headline: "Svømmehal",
      content: "Klubben har på bestemte tidspunkter fået tildelt haltider i Grenaa Idræts Centers svømmehal."
    },
  ];

  i1Data = [
    {
      icon: "fa-star",
      headline: "Tilmelding",
      content: "Hvis du tror at Kattegat Dykkerne kunne være en klub for dig, er du velkommen til at se forbi klubben en tirsdag til klubaften eller tilmelde dig online via linket her under. Hvis du skulle have nogle spørgsmål, kan du kontakte os via mail eller telefon,kontakt info finder du i boksen Kontakt.<br/><br/><a>Tilmelding klik her</a>"
    },
    {
      icon: "fa-facebook",
      headline: "Facebook",
      content: "Det meste af vores kommunikation foregår via vores to facebook grupper. Den ene grupper er for alle, og er typisk der vi slår aktiviteter op. Den anden er lukket og kun til intern brug for klubbens medlemmer. <br><br>du finder vores facebook gruppe ved at klikke <a href='https://www.facebook.com/groups/kattegatdykkerne/' target='_blank'>her</a>"
    }, {
      icon: "fa-address-book",
      headline: "Kontakt",
      content: "Kattagat Dykkerne Grenaa<br>att: Kristoffer Sørensen<br> Skakkesholm 20<br>DK-8500 Grenaa<br><br>formanden@kattagatdykkerne.dk<br>Tlf: 21702540"
    }
  ];


  constructor() {
   

  }
  //public innerWidth: any;
  //public show: boolean = true; 

  ngOnInit() {    
    
    $('.bxslider').bxSlider({
      auto: true,
      mode: 'fade',
      }
    );
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.innerWidth = window.innerWidth;

  //   if(this.innerWidth < "1000"){
  //     this.show = false;
  //   }
  //   else
  //   {
  //     this.show = true;

  //     $('.bxslider').bxSlider({
  //       auto: true,
  //       mode: 'fade',
  //     }
  //     );
  //   }
    
  // }
  

}
