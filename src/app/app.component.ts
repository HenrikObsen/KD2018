import { Component } from '@angular/core';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./css/font-awesome.min.css']
})
export class AppComponent {
  title = 'app';



  constructor(){
  
  }
  
  ngOnInit(){
    $(".parent").on({
      click : function(){
        if ($(window).width() < "992")
        {      
          var $thisSubmenu = $(this).find(".submenu");
          var $submenu = $(".submenu");
        
          if($thisSubmenu.hasClass('open')){
            $submenu.slideUp();
            $submenu.removeClass('open');
          }else{
            $submenu.slideUp();          
            $thisSubmenu.slideDown();
            $thisSubmenu.addClass('open');
          }
        }
      },
      mouseenter : function(){
        if ($(window).width() > "992")
        {  
          $(this).find(".submenu").slideDown();
        }
      },
      mouseleave : function(){
        if ($(window).width() > "992") 
        {  
          $(".submenu").slideUp();      
        }
      }
    });

    if ($(window).width() < "992")
    {
      $("#desktopMenu ul li").on('click',function(){
        $("#desktopMenu").slideUp();
          
        });   
        $("#desktopMenu>li").on('click',function (){
            if($(this).hasClass('parent') != true){
              $("#desktopMenu").slideUp();
            }
        })
    }
  
    $("#toggleMenu").click(function(){
      $("#desktopMenu").slideToggle("slow");
  //    $('html,body').animate({ scrollTop: $("body").offset().top }, 'slow');
    });
  }
}
