import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postSrv: PostsService) {
    this.posts = this.postSrv.havePosts();
  }
  getClassOf(post: any) {
    if (post.type === 'politic') {
      return 'text-bg-dark';
    } else if (post.type === 'news') {
      return 'text-bg-warning';
    } else {
      return 'text-bg-info';
    }
  }
  deactive(post: any, e: any) {
    e.target.closest('.card').remove();
    this.postSrv.modifyPost(post.id, !post.active);
    console.log(post.id, post);
  }
  ngOnInit(): void {}
}
