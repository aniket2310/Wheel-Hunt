import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import * as screenText from '../../../assets/constant-data.json';


@Component({
  selector: 'app-displacement',
  templateUrl: './displacement.component.html',
  styleUrls: ['./displacement.component.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule],

})
export class DisplacementComponent  implements OnInit {

  constants: any = screenText;

  displacementRanges = this.constants.displacementRanges;
  constructor(private router:Router) { }



  ngOnInit() {}



  viewBikesByCC(min: number, max: number) {
    this.router.navigate(['home/all-bikes-details'], {
      queryParams: { minCC: min, maxCC: max },
    });
  }

}
