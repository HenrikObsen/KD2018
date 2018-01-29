import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-om-os',
  templateUrl: './om-os.component.html',
  styleUrls: ['./om-os.component.scss']
})
export class OmOsComponent implements OnInit {

  pause = 6000; //Pause inden nyt billede vises. Angives i millisekunder. 
  img;
  imgID = 0;
  rotator() {
    var imgString = "";
  
    imgString = '../assets/Images/' + this.img[this.imgID];
  
    if (this.imgID == this.img.length - 1) {
      this.imgID = 0;
    }
    else {
      this.imgID++;
    }
  
  
    $("#image2").fadeTo(700, 0, function () {
      $("#image2").attr("alt", imgString);
      $("#image2").attr("src", imgString);
      $("#image2").fadeTo(700, 1, function () {

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
      
       this.loadImages('Svommer.jpg,DSF-sh.png');
     }       
  
     ngOnInit(){
  
     }
}
