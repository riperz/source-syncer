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

  async getAllWebtoons(): Promise<Webtoon[]> {
    const webtoons = await this.webtoonModel.find().exec();
    console.log(webtoons);
    return this.webtoonModel.find().exec();
  }

  async createWebtoon(createWebtoonDto: CreateWebtoonDto): Promise<Webtoon> {
    const newWebtoon = new this.webtoonModel(createWebtoonDto);
    console.log(newWebtoon);
    return newWebtoon.save();
  }

  async getOnWebtoonById(id: number): Promise<Webtoon> {
    const theOneWebtoon = this.webtoonModel.findById(id).exec();
    console.log(theOneWebtoon);
    return this.webtoonModel.findById(id).exec();
  }

  async getOnWebtoonByIdAndUpdate(id: number): Promise<Webtoon> {
    const theOnWebtoonUpdate = this.webtoonModel.findByIdAndUpdate(id).exec();
    console.log('Update -> Old ' + theOnWebtoonUpdate);
    return this.webtoonModel.findByIdAndUpdate(id).exec();
  }

  async getOnWebtoonByIdAndDelete(id: number): Promise<Webtoon> {
    const theOnWebtoonToDelete = this.webtoonModel.findByIdAndDelete(id).exec();
    console.log('Delete -> Old ' + theOnWebtoonToDelete);
    return this.webtoonModel.findByIdAndDelete(id).exec();
  }
}
