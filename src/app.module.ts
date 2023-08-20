import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//decorator
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService], //classes/serviços
})
export class AppModule {}
