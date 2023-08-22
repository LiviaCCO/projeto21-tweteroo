import { Module } from '@nestjs/common';
import { AppController, TweetsController } from './app.controller';
import { AppService, TweetService } from './app.service';

//decorator
@Module({
  imports: [],
  controllers: [AppController, TweetsController],
  providers: [AppService, TweetService], //classes/serviços
})
export class AppModule {}
