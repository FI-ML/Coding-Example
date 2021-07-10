import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommentModel} from "../models/comment-model";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  private url = 'https://jsonplaceholder.typicode.com/posts';

  getComments(){
    return this.http.get<CommentModel[]>(this.url);
  }

}
