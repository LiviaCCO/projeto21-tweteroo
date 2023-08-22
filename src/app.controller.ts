import { Body, HttpException, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Controller, Get,  } from '@nestjs/common';
import { AppService, TweetService } from './app.service';
import { CreateUserDto } from './dtos/user.dto';
import { User } from './entities/user.entity';
import { CreateTweetDto } from './dtos/tweet.dto';
import { ValidationPipe } from '@nestjs/common';

@Controller("users")
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  @Post("/sign-up")
  createUser(@Body() body: CreateUserDto) {
    try {
      return this.appService.createUser(body);
    } catch (error) {
      throw new HttpException("Todos os campos são obrigatórios!", HttpStatus.CONFLICT)
    }
  }
}

@Controller("tweets")
export class TweetsController {
  constructor(private readonly tweetService: TweetService) {}
   
  @Get("/tweets")
  getTweets() {
    return this.tweetService.getTweets();
  }
  
  @Get("/tweets/:username")
  findAll(@Param("username", new ValidationPipe()) username: string) {
    console.log(username);
    if (username === null || username === undefined) {
      // Faça o tratamento para o valor ser nulo ou indefinido.
      throw new HttpException("Todos os campos são obrigatórios!", HttpStatus.CONFLICT)
    }
    return username; // usuário correspondente ao username
  }
  @Post("/tweet")
  createTweet(@Body() body: CreateTweetDto) {
    try {
      return this.tweetService.createTweet(body);
    } catch (error) {
      throw new HttpException("Todos os campos são obrigatórios!", HttpStatus.CONFLICT)
    }
  }
}
