import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import postData from './data/post.json';
import authorsData from './data/author.json';

interface Post {
  id: number;
  author_id: number;
  title: string;
  body: string;
  image_url: string;
  created_at: string;
  author: {
    id: number;
    name: string;
    avatar_url: string;
    role: string;
    place: string;
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: any[] = postData;
  authors = authorsData;

  constructor() {
    this.posts.forEach((post: any) => {
      post.author = this.authors.find((author: any) => author.id === post.author_id);
    });
  }
}
