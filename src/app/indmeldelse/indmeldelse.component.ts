import { Component, OnInit, ViewEncapsulation, Injectable, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Indm } from '../models/Indm';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-indmeldelse',
  templateUrl: './indmeldelse.component.html',
  styleUrls: ['./indmeldelse.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@Injectable()
export class IndmeldelseComponent implements OnInit {
 @ViewChild("f") test: NgForm;
  databasen = 'http://api.kattegatdykkerne.dk/api/Category/AddCat/'; 
 
  Fodselsdag: string;
  Type: number = 800;
  DSF = false;
  Luft = false;
  Svommehal = false;
  extractData: any;
  result: number = 0;
  
  
  onSubmit() {    

    let Indmeldelse = new Indm(
      this.Fodselsdag,
      this.Type,
      this.Luft,
      this.DSF,
      this.Svommehal
    );
    
    this.add(Indmeldelse);

  }
  

  constructor(private http:Http) {
  
   }



  add(Indmeldelse) {

   
    //let headers = new Headers({ 'Content-Type': 'application/json' });   
    //let options = new RequestOptions({ headers: headers });
   //this.http.post(this.databasen, cat, options)
    //.subscribe();

  /*  let headers = new Headers({ 'Authorization': 'TokenValue' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.databasen, Indmeldelse, options)
    .subscribe( data => this.extractData = data["_body"],
      error => {
        console.log(JSON.stringify(error.json()));
    });
*/
    }
  

  ngOnInit() {
    this.test.valueChanges.subscribe(form => {
      this.result = +this.Type + (this.DSF ? 300:0) + (this.Luft ? 400:0) + (this.Svommehal ? 300:0);
      
      console.log(form);
    })
  }


}
