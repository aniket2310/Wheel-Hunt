import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,IonMenuButton, IonSearchbar, IonIcon, IonImg, IonLabel, IonItem, IonText, IonCol, IonCard, IonGrid, IonRow, IonCardContent, IonCardTitle, IonButton, IonCardHeader, IonApp } from '@ionic/angular/standalone';
import { BannerComponent } from './banner/banner.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as screenText from '../../assets/constant-data.json';
import { API_key, API_URL } from 'src/app/interfaces/news-response';
import { HttpClient } from '@angular/common/http';
import { catchError, of,forkJoin } from 'rxjs';
import { RupeePipe } from '../pipe/rupee.pipe';


export interface Bike {
  id: number;
  name: string;
  specs: string;
  price: number;
  launchDate: string;
  image: string;
  location:string;
  posture: string;
  displacement: number;
  isFavourite: boolean;
  availableColors: { name: string; hex: string }[];
  bikeVariants: { name: string; price: string }[];
}

export interface ComparedBikeData {
  bike1: {

    image: string;
    name: string;
  };
  bike2: {
    image: string;
    name: string;
  };
  specifications: {
    title: string;
    bike1: string;
    bike2: string;
  }[];
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
 imports: [IonButton, IonCardTitle, IonCardContent, IonRow, IonGrid, IonCard, IonCol, IonText, IonItem, IonLabel, IonImg, IonIcon, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, BannerComponent, RouterLink, CommonModule, RupeePipe],
})
export class HomePage implements OnInit {

  constants: any = screenText;
  All_bike_Data: Bike[] = this.constants.All_bike_Data;
 
  bikeComparisons : ComparedBikeData []= this.constants.bikeComparisons;

  launchArticles: any[] = []; 
  reviewArticles: any[] = [];  
  slides: any[] = [];

  constructor(private router: Router, private http: HttpClient) { } 
  ngOnInit() {
    this.slides = [
      { banner: 'assets/icon/images/clifhanger.jpg' },
      { banner: 'assets/icon/images/New-BMW-R-1300-GSA.png' },
      { banner: 'assets/icon/images/uttarakhand-motorcycle-tour.jpg' },
      { banner: 'assets/icon/images/clifhanger.jpg' },
      { banner: 'assets/icon/images/New-BMW-R-1300-GSA.png' },
      { banner: 'assets/icon/images/uttarakhand-motorcycle-tour.jpg' },
    ];

    forkJoin([
      this.getNews('motorcycle-launches&sortBy=publishedAt?country=in?sources=bikewale.com&'),
      this.getNews('motorcycle-review&sortBy=publishedAt?country=in?sources=https://www.motorcycle.com/&'),
    ]).subscribe({
      next: ([launchData, reviewData]: any[]) => {
        this.launchArticles = launchData.articles || [];
        this.reviewArticles = reviewData.articles || [];
        console.log('Launch Articles:', this.launchArticles);
        console.log('Review Articles:', this.reviewArticles);
      },
      error: (err) => {
        console.error('Error fetching news:', err);
      },
    });
  }

  navigateToComparedBikes(comparedBikeData: ComparedBikeData): void {
    this.router.navigate(['home/compared-bikes'], {
      state: { ComparedDetails: comparedBikeData }
    });
  }
  

  goToBrands() {
    this.router.navigate(['home/brands']);
  }

  goToBudget() {
    this.router.navigate(['home/budget']);
  }

  goToRidingPosition() {
    this.router.navigate(['home/riding-position']);
  }

  goToDisplacement() {
    this.router.navigate(['home/displacement']);
  }

  goToOnRoadPrice(bike: Bike): void {
    this.router.navigate(['home/on-road-price'], {
      state: { bikeDetails: bike }
    });
  }

  goToNewsComponent() {
    this.router.navigate(['home/news']);
  }

  goToExpertReview() {
    this.router.navigate(['home/expert-review']);
  }

  goTODealer(): void {
    this.router.navigate(['home/locate-dealers']);
  }

  getNews(url: string) {
    return this.http.get(`${API_URL}${url}apikey=${API_key}`).pipe(
      catchError((error) => {
        console.error('Error in getNews:', error);
        return of({ articles: [] }); 
      })
    );
  }

  // removeArticle(index: number): void {
  //   this.articles.splice(index, 1);
  // }


  
  // expertReviews = [
  //   {
  //     title: 'Best bike on Indian Roads',
  //     image: 'assets/icon/images/hunter 350.jpg',
  //     content: 'The Royal Enfield Classic 350 is one of the best-selling bikes for the company. Its iconic retro design.',
  //     reviewer: 'Aniket Bodhe',
  //   },
  //   {
  //     title: 'Smooth Ride with Excellent Handling',
  //     image: 'assets/icon/images/hunter 350.jpg',
  //     content: 'The Himalayan offers unparalleled comfort on both highways and rough terrains, making it a perfect all-rounder.',
  //     reviewer: 'John Doe',
  //   },
  // ];

}
