import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import * as screenText from '../../../assets/constant-data.json';

interface BrandDetails {
  name:string;
  image: string;
}


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule],


})
export class BrandsComponent  implements OnInit {

  constants: any = screenText;
  BrandDetails = this.constants.BrandDetails;

  constructor(private router:Router) { }

  ngOnInit() {}

  // bikeBrands = [
  //   { name: 'Royal Enfield', image: 'assets/brands/royal-enfield.png' },
  //   { name: 'Honda', image: 'assets/brands/honda.png' },
  //   { name: 'Hero', image: 'assets/brands/hero.png' },
  //   { name: 'Bajaj', image: 'assets/brands/bajaj.png' },
  //   { name: 'Yamaha', image: 'assets/brands/yamaha.png' },
  //   { name: 'TVS', image: 'assets/brands/tvs.png' },
  //   { name: 'Kawasaki', image: 'assets/brands/kawasaki.png' },
  //   { name: 'BMW', image: 'assets/brands/bmw.png' },
  //   { name: 'KTM', image: 'assets/brands/ktm.png' },
  //   { name: 'Harley-Davidson', image: 'assets/brands/harley.png' },
  // ];

  onBrandClick(brandName: string) {
    this.router.navigate(['home/all-bikes-details'], { queryParams: { brand: brandName } });
  }
  
}
