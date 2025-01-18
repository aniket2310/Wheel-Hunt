import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'home/most-popular',
    loadComponent: () => import('./home/most-popular/most-popular.component').then((m) => m.MostPopularComponent),
  },
  {
    path: 'home/recent-launches',
    loadComponent: () => import('./home/recent-launches/recent-launches.component').then((m) => m.RecentLaunchesComponent ),
  },

  {
    path: 'home/upcomming',
    loadComponent: () => import('./home/upcomming/upcomming.component').then((m) => m.UpcommingComponent ),
  },
  {
    path: 'home/popular-comparison',
    loadComponent: () => import('./home/popular-comparison/popular-comparison.component').then((m) => m.PopularComparisonComponent ),
  },
  {
    path: 'home/compared-bikes',
    loadComponent: () => import('./home/compared-bikes/compared-bikes.component').then((m) => m.ComparedBikesComponent ),
  },
  {
    path: 'home/brands',
    loadComponent: () => import('./home/brands/brands.component').then((m) => m.BrandsComponent ),
  },
  {
    path: 'home/budget',
    loadComponent: () => import('./home/budget/budget.component').then((m) => m.BudgetComponent ),
  },
  {
    path: 'home/riding-position',
    loadComponent: () => import('./home/riding-position/riding-position.component').then((m) => m.RidingPositionComponent ),
  },
  {
    path: 'home/displacement',
    loadComponent: () => import('./home/displacement/displacement.component').then((m) => m.DisplacementComponent ),
  },
  {
    path: 'home/electric-bikes',
    loadComponent: () => import('./home/electric-bikes/electric-bikes.component').then((m) => m.ElectricBikesComponent ),
  },
  {
    path: 'home/locate-dealers',
    loadComponent: () => import('./home/locate-dealers/locate-dealers.component').then((m) => m.LocateDealersComponent ),
  },
  {
    path: 'home/on-road-price',
    loadComponent: () => import('./home/on-road-price/on-road-price.component').then((m) => m.OnRoadPriceComponent ),
  },
  {
    path: 'home/news',
    loadComponent: () => import('./home/news/news.component').then((m) => m.NewsComponent ),
  },
  {
    path: 'home/expert-review',
    loadComponent: () => import('./home/expert-review/expert-review.component').then((m) => m.ExpertReviewComponent ),
  },
  {
    path: 'home/all-bikes-details',
    loadComponent: () => import('./home/all-bikes-details/all-bikes-details.component').then((m) => m.AllBikesDetailsComponent ),
  },
  {
    path: 'home/favourite',
    loadComponent: () => import('./home/favourite/favourite.component').then((m) => m.FavouriteComponent ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
