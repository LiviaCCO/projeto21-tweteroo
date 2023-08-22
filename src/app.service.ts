import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweet.entity';
import { CreateUserDto } from './dtos/user.dto';
import { CreateTweetDto } from './dtos/tweet.dto';

@Injectable()
export class AppService {
  private users: User[]; // persistencia em memoria

  constructor() {
    this.users = [
      new User("spongebob", "https://avatars.akamai.steamstatic.com/d322ffa327f56fcebc08ac76b340742b930648c8_full.jpg")
    ];
  }
 
  createUser(body: CreateUserDto) {
    // const user = new User(body.name, body.email);
    // return this.users.push(user);
    throw new Error('Method not implemented.');
  }

  getUsers() {
    return this.users;
  }
}

export class TweetService {
  private tweets: Tweet[]; // persistencia em memoria

  constructor() {
    this.tweets = [
      new Tweet("spongebob", "You like krabby patties, don't you @Squidward?")
    ];
  }
 
  createTweet(body: CreateTweetDto) {
    // return this.tweets.push(tweet);
    throw new Error('Method not implemented.');
  }

  getTweets() {
    return this.tweets;
  }
}
