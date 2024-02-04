import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Webtoon } from 'src/schemas/Webtoon.schema';
import { CreateWebtoonDto } from './dto/CreateWebtoon.dto';

@Injectable()
export class WebtoonsService {
  constructor(
    @InjectModel(Webtoon.name) private webtoonModel: Model<Webtoon>,
  ) {}

  createWebtoon(createWebtoonDto: CreateWebtoonDto) {
    const newWebtoon = new this.webtoonModel(createWebtoonDto);
    return newWebtoon.save();
  }
}
