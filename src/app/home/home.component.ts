import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

 
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
     this.loadImages('1.jpg,2.jpg,3.jpg');
   }       

   ngOnInit(){

   }

}
