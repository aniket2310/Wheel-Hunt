import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import * as screenText from '../../../assets/constant-data.json';

interface bikeCategories {
  posture:string;
  image:string;
}

@Component({
  selector: 'app-riding-position',
  templateUrl: './riding-position.component.html',
  styleUrls: ['./riding-position.component.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule],

})
export class RidingPositionComponent  implements OnInit {

  constants: any = screenText;
  bikeCategories = this.constants.bikeCategories;


  constructor(private router : Router) { }

  ngOnInit() {}


  onBrandClick(brandPosture: string) {
    this.router.navigate(['home/all-bikes-details'], { queryParams: { posture: brandPosture } });
    
  }

}


