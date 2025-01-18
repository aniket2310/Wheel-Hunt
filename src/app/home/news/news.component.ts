import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
// import { NewsService } from 'src/app/services/news.service';
import { API_key, API_URL } from 'src/app/interfaces/news-response';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule,],
})export class NewsComponent implements OnInit {
  articles: any[] = []; 

  constructor(private http: HttpClient,private router:Router) {}

  ngOnInit(): void {
    this.getNews('motorcycle-launches&sortBy=publishedAt?country=in?sources=bikewale.com&') // Replace with your API's endpoint
      .subscribe({
        next: (data: any) => {
          this.articles = data.articles || [];
          console.log(this.articles);
        },
        error: (err) => {
          console.error('Error fetching news:', err);
        }
      });
  }

  getNews(url: string) {
    return this.http.get(`${API_URL}${url}apikey=${API_key}`).pipe(
      catchError((error) => {
        console.error('Error in getNews:', error);
        return of({ articles: [] }); // Return an empty object with articles to prevent errors
      })
    );
  }
  removeArticle(index: number): void {
    this.articles.splice(index, 1);
  }
  
}


// https://newsapi.org/v2/everything?q=bikes&from=2024-10-21&sortBy=publishedAt&apiKey=2cb0f76377094bf28cc2556594883cc1

// https://newsapi.org/v2/everything?q=motorcycle-launch&sortBy=publishedAt?country=in?sources=bikewale.com&apiKey=2cb0f76377094bf28cc2556594883cc1