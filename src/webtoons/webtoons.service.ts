import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Webtoon } from 'src/schemas/Webtoon.schema';
import { CreateWebtoonDto } from './dto/CreateWebtoon.dto';

@Injectable()
export class WebtoonsService {
  /* private webtoons: Webtoon[] = []; */
  constructor(
    @InjectModel(Webtoon.name) private webtoonModel: Model<Webtoon>,
  ) {}

  async createWebtoon(createWebtoonDto: CreateWebtoonDto): Promise<Webtoon> {
    const newWebtoon = new this.webtoonModel(createWebtoonDto);
    console.log(newWebtoon);
    return newWebtoon.save();
  }

  async getWebtoons(): Promise<Webtoon[]> {
    const webtoons = await this.webtoonModel.find().exec;
    console.log(webtoons);
    return this.webtoonModel.find().exec();
  }
  /*   console.log(this.webtoonModel.find().exec());
    return await this.webtoonModel.find().exec();
  } */
}
