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
      image: "Dykkertur.jpg",
      headline: "Dykkerture",
      content: "Letraset-ark, som indeholdt afsnit med  Lorem Ipsum, og senere med layoutprogrammer som"
    },
    {
      image: "Uddannelse.jpg",
      headline: "Dykkerture",
      content: "Letraset-ark, som indeholdt afsnit med  Lorem Ipsum, og senere med layoutprogrammer som"
    },  {
      image: "rejser.jpg",
      headline: "Dykkerture",
      content: "Letraset-ark, som indeholdt afsnit med  Lorem Ipsum, og senere med layoutprogrammer som"
    },  {
      image: "uv-jagt.jpg",
      headline: "Dykkerture",
      content: "Letraset-ark, som indeholdt afsnit med  Lorem Ipsum, og senere med layoutprogrammer som"
    },
  ]; 

  p2Data = [
    {
      image: "Dykkertur.jpg",
      headline: "Dykkerture",
      content: "Letraset-ark, som indeholdt afsnit med  Lorem Ipsum, og senere med layoutprogrammer som"
    },
    {
      image: "Uddannelse.jpg",
      headline: "Dykkerture",
      content: "Letraset-ark, som indeholdt afsnit med  Lorem Ipsum, og senere med layoutprogrammer som"
    },  {
      image: "rejser.jpg",
      headline: "Dykkerture",
      content: "Letraset-ark, som indeholdt afsnit med  Lorem Ipsum, og senere med layoutprogrammer som"
    },  {
      image: "uv-jagt.jpg",
      headline: "Dykkerture",
      content: "Letraset-ark, som indeholdt afsnit med  Lorem Ipsum, og senere med layoutprogrammer som"
    },
  ]; 
  
  i1Data = [
    {
      icon: "fa-facebook",
      headline: "Tilmelding",
      content: "LDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait."
    },
    {
      icon: "fa-star",
      headline: "Svømmehal",
      content: "LDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait."
    }, {
      icon: "fa-address-book",
      headline: "Kontakt",
      content: "LDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait."
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
