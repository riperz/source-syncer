import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Webtoon, WebtoonSchema } from 'src/schemas/Webtoon.schema';
import { WebtoonsService } from './services/webtoons.service';
import { WebtoonsController } from './controllers/webtoons.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Webtoon.name,
        schema: WebtoonSchema,
      },
    ]),
  ],
  providers: [WebtoonsService],
  controllers: [WebtoonsController],
})
export class WebtoonsModule {}
