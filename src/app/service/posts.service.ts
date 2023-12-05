const origPosts: Post[] = [
  {
    id: 1,
    body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
    title:
      'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
    type: 'politic',
    active: true,
  },
  {
    id: 2,
    body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
    title:
      'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
    type: 'education',
    active: true,
  },
  {
    id: 3,
    body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
    title:
      'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
    type: 'news',
    active: true,
  },
  {
    id: 4,
    body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
    title:
      'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
    type: 'politic',
    active: false,
  },
  {
    id: 5,
    body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
    title:
      'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
    type: 'education',
    active: false,
  },
];

import { Injectable } from '@angular/core';
import { Post } from '../models/post';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = origPosts;
  constructor() {}

  havePosts() {
    return this.posts;
  }

  modifyPost(id: number, activation: boolean) {
    console.log(activation);
    this.posts.forEach((post) => {
      if (post.id === id) {
        post.active = activation;
      }
    });
  }
}
