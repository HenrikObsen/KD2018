import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
    },  {
      image: "Baadtur.jpg",
      headline: "Bådture",
      content: "Klubben råder over en lille rib-båd og flere af klubbens medlemmer afholder ture i deres private både."
    },  {
      image: "uv-jagt.jpg",
      headline: "UV-jagt",
      content: "Vi har også en del fridykkere og uv-jægere i klubben der jævntlig deltager i forskellige konkurencer."
    },
  ]; 

  p2Data = [
    {
      image: "Uddannelse1.jpg",
      headline: "Uddannelse",
      content: "Klubben har tilknytter instruktøre og vi uddanner dykkere inden for Padi og TDI"
    },
    {
      image: "rejser.jpg",
      headline: "Udenlandsture",
      content: "Vi afholder eller deltager årligt i udenlands ture blandt andet til Norge"
    },  {
      image: "Foto.jpg",
      headline: "Foto",
      content: "I klubbens medlemmer deltager jævnligt i foto konkurencer og arangamanger"
    },  {
      image: "Svommehal.jpg",
      headline: "Svømmehal",
      content: "Klubben har på bestemte tidspunkter fået tildelt haltider i Grenaa Idræts Centers svømmehal."
    },
  ]; 
  
  i1Data = [
    {
      icon: "fa-star",
      headline: "Tilmelding",
      content: "Hvis du tror at Kattegat Dykkerne kunne være en klub for dig. Er du velkommen til at se forbi klubben en tirsdag til klubaften eller tilmelde dig online via linket her under. Hvis du skulle have nogle spærgsmål kan du kontae os via mail eller telefon, de boksen Kontakt.<br/><br/><a>Tilmelding klik her</a>"
    },
    {
      icon: "fa-facebook",
      headline: "Facebook",
      content: "Det meste af vores komunikation forgår via vores to facebook grupper. Den ene grupper er for alle og er typisk der vi skly aktiviteter op. Den anden er lukket og kun til intern brug for klubbens medlemmer. <br><br>du finder vores facebook gruppe ved at klikke <a href='https://www.facebook.com/groups/kattegatdykkerne/' target='_blank'>her</a>"
    }, {
      icon: "fa-address-book",
      headline: "Kontakt",
      content: "Kattagat Dykkerne Grenaa<br>att: Kristoffer Sørensen<br> Skakkesholm 20<br>DK-8500 Grenaa<br><br>formanden@kattagatdykkerne.dk<br>Tlf: 21702540"
    }
  ]; 
pause = 4000; //Pause inden nyt billede vises. Angives i millisekunder. 
img;
imgID = 0;
rotator() {
  var imgString = "";

  imgString = '../assets/SliderImg/' + this.img[this.imgID];

  if (this.imgID == this.img.length - 1) {
    this.imgID = 0;
  }
  else {
    this.imgID++;
  }


  $("#slider").fadeTo(700, 0, function () {
      $("#wrSlider").attr("style", "background-image: url('" + imgString + "')");
  
      $("#slider").fadeTo(700, 1, function () {

      });

  });

  setTimeout(() => this.rotator(), this.pause);

  //setTimeout(this.rotator(), this.pause);
}

loadImages(images) {

    this.img = images.split(",");
    this.imgID = Math.round(Math.random() * (this.img.length - 1));
    this.rotator();
}


   constructor(){
     this.loadImages('5.jpg,6.jpg,7.jpg,8.jpg,9.jpg');
   }       

   ngOnInit(){

   }

}
