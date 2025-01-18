import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import * as screenText from '../../../assets/constant-data.json';

export interface Specification {
  title: string;
  bike1: string;
  bike2: string;
}

interface Bike {
  image: string;
  name: string;
}

interface BikeComparison {
  bike1: Bike;
  bike2: Bike;
  Specifications: Specification[];
}

@Component({
  selector: 'app-compared-bikes',
  templateUrl: './compared-bikes.component.html',
  styleUrls: ['./compared-bikes.component.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule],

})
export class ComparedBikesComponent implements OnInit {
  bikeComparisons: BikeComparison[] = []; 
  comparedBikeData: BikeComparison | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const navigationState = this.router.getCurrentNavigation()?.extras.state;
    if (navigationState && navigationState['ComparedDetails']) {
      this.comparedBikeData = navigationState['ComparedDetails'];
      console.log('Compared Bike Data:', this.comparedBikeData);
    } else {
      console.log('No comparison data available');
    }
  }

  navigateToDetails() {
    this.router.navigate(['home/compared-bikes']);
  }
}

