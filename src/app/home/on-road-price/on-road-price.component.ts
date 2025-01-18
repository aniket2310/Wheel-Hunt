import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import * as screenText from '../../../assets/constant-data.json';

// interface GoToOnRoadPrice {
//   name: string;
//   exShowroomPrice: string;
//   rtoPrice: string;
//   insurancePrice: string;
//   onRoadPrice: string;
//   availableColors: { name: string; hex: string }[];
//   bikeVariants: { name: string; price: string }[];
// }


@Component({
  selector: 'app-on-road-price',
  templateUrl: './on-road-price.component.html',
  styleUrls: ['./on-road-price.component.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule]
})
export class OnRoadPriceComponent implements OnInit {
  selectedBike: any; 
  onRoadPriceDetails: any[] = []; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['bikeDetails']) {
      this.selectedBike = navigation.extras.state['bikeDetails'];
      console.log('Selected Bike:', this.selectedBike); 
    } else {
      console.error('No bike details received!');
    }

    if (this.selectedBike) {
      this.onRoadPriceDetails = [
        { label: 'Ex-Showroom Price', value: this.selectedBike.price },
        { label: 'RTO', value: '12,000' }, 
        { label: 'Insurance', value: '5,000' }
      ];

      if (!this.selectedBike.onRoadPrice) {
        this.selectedBike.onRoadPrice = this.calculateOnRoadPrice(); 
      }
    }
  }

  calculateOnRoadPrice(): number {
    return this.selectedBike.price + 12000 + 5000;
  }

  goTODealer(): void {
    this.router.navigate(['home/locate-dealers']);
  }
}