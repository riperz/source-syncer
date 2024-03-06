import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as services from './services';
import * as controllers from './controllers';
import { WebtoonsModule } from './webtoons.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/webtoons'),
    WebtoonsModule,
  ],
  controllers: [...Object.values(controllers)],
  providers: [...Object.values(services)],
  exports: [...Object.values(services)],
})
export class AppModule {}
