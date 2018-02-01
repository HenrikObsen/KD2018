import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-aktiviteter',
  templateUrl: './aktiviteter.component.html',
  styleUrls: ['./aktiviteter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AktiviteterComponent implements OnInit {
  i1Data = [
    {
      icon: "fa-address-card",
      headline: "Bliv dykker",
      content: " For 3200 kr. kan du sammen med Kattegat Dykkerne og Dive Resort Kattegat tage et dykkercertifikat. Kattegat Dykkerne sørge for at du bliver hjulpet godt og sikkert igang med dykning. Du får: Padi Open Water Diver certifikat 6 mdr medlemskab af klubben For yderligere info. Vedr. uddannelsen kontakt Klub Formanden. formanden@kattegatdykkerne.dk"
    },
    {
      icon: "fa-star",
      headline: "Andre uddannelser",
      content: "Klubben uddanner dykkere til flere niveauer i samarbejde med Dive Resort Kattegat ApS. Vi kan tilbyde en lang række kurser, her under er listet en del af dem: Open Water Diver Adv. Open Water Diver Rescue Diver Dive Master Nitrox & Blender Førstehjælp Speedbådsbevis Special kurser. For yderligere info. Vedr. uddannelsen, Kontakt Klub Formanden formanden@kattegatdykkerne.dk "
    }, {
      icon: "fa-users",
      headline: "Holdstart",
      content: "Vores fasste hold i 2017 starter: Open Water Diver: 19. august. Advanced Open Water: 20. Juni. Rescue Diver: september 2017. Basic Nitrox: 2. september. Vi starter løbende kurser når der er hold til det så der kan være mulighed for andre tidspunkter end overstående.Du kan se mere om kurserne på aktivitetssiden her her.<br><br> Tilmelding skal ske senest 14 dage før opstart. Mere info eller tilmelding kan ske på hto@djes.dk eller 42789605"
    }
  ]; 
  constructor() { }

  ngOnInit() {
  }

}
