import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { catchError, of } from 'rxjs';
import { API_key, API_URL } from 'src/app/interfaces/news-response';



@Component({
  selector: 'app-expert-review',
  templateUrl: './expert-review.component.html',
  styleUrls: ['./expert-review.component.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule],
})
export class ExpertReviewComponent  implements OnInit {
  articles: any[] = []; // Ensure it's an array

  constructor(private http: HttpClient,) {}

  ngOnInit(): void {
    this.getNews('motorcycle-review&sortBy=publishedAt?country=in?sources=https://www.motorcycle.com/&')
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
        return of({ articles: [] }); 
      })
    );
  }
  removeArticle(index: number): void {
    this.articles.splice(index, 1);
  }
}


