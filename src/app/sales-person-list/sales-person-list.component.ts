import { Component, OnInit } from '@angular/core';
import { Salesperson } from '../sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  salesPersonsList: Salesperson [] =  [
    new Salesperson("Shital", "Jitakar", "njitakar@gmail.com",30000,"300"),
    new Salesperson("Sayali", "Patil", "sayali@com@gmail.com",20000,"800"),
    new Salesperson("Riya", "Sharma", "riya@com@gmail.com",20000,"900"),
    new Salesperson("Ram", "Mishra", "ram@com@gmail.com",80000,"900"),


  ]
  formModel : Salesperson = new Salesperson("","","",0,"");
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formModel);
    this.salesPersonsList.push(this.formModel);
    
  }


}