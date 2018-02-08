
export class Mail {

    Email: string;
    Navn: string;
    Emne: string; 
    Tekst: string;  

    constructor(
        Email: string,
        Navn: string, 
        Emne: string, 
        Tekst: string,       
      ) { 
        this.Email=Email;
        this.Navn=Navn; 
        this.Emne= Emne; 
        this.Tekst= Tekst; 
  }
} 