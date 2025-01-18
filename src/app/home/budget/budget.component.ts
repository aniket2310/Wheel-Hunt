import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import * as screenText from '../../../assets/constant-data.json';

interface budgetRanges{
  label:string;
  min:number;
  max:number;
}


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule],

})
export class BudgetComponent  implements OnInit {

  constants: any = screenText;
  budgetRanges = this.constants.budgetRanges;

  constructor(private router:Router) { }

  ngOnInit() {}


  viewBikesByPrice(min: number, max: number) {
    this.router.navigate(['home/all-bikes-details'], {
      queryParams: { minPrice: min, maxPrice: max },
    });
  }

}
