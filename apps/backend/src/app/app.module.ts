import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedRecipesModule } from "./../recipes/recipes.module";

@Module({
  imports: [SharedRecipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
