import { Component, OnInit } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  title: string = "My Thoughts";

  posts: Post[] = [
    { title: "Grand Circus", thought: "Grand Circus is awesome!" },
    { title: "#GrandCircus", thought: "I loveee Grand Circus!!" },
    { title: "Grant Chirpus", thought: "Wait...Where did the bird come from?" }
  ];

  onDelete(index) {
    this.posts.slice(index, 1);
  }
  constructor() {}

  ngOnInit() {}
}
