import { Component, OnInit } from '@angular/core';
import {CommentModel} from "../../../models/comment-model";
import {CommentService} from "../../../services/comment.service";
import {HttpErrorResponse} from "@angular/common/http";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css']
})
export class ExampleOneComponent implements OnInit {

  public comments!: CommentModel[];
  public pageSlice: any;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.getComments();
  }

  public getComments(){
    this.commentService.getComments().subscribe(next => {
        this.comments = next;

        this.pageSlice= this.comments.slice(0,20);

      },
      (error: HttpErrorResponse) => {
        console.log('object is null');
      });
  }

  OnPageChanged(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if(endIndex > this.comments.length){
      endIndex = this.comments.length;
    }
    this.pageSlice = this.comments.slice(startIndex,endIndex);
  }

}
