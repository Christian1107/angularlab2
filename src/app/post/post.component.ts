import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;
  @Output()
  deleted = new EventEmitter<number>();
  index: any;
  deletePost() {
    this.deleted.emit(this.index);
  }
  constructor() {}

  ngOnInit() {}
}
