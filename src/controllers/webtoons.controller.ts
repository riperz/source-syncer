import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { WebtoonsService } from '../services/webtoons.service';
import { CreateWebtoonDto } from '../dto/CreateWebtoon.dto';
import { Webtoon } from 'src/schemas/Webtoon.schema';
/* import { Webtoon } from 'src/schemas/Webtoon.schema'; */

@Controller('webtoons')
export class WebtoonsController {
  constructor(private webtoonService: WebtoonsService) {}

  @Post()
  async createWebtoon(@Body() createWebtoonDto: CreateWebtoonDto) {
    console.log(createWebtoonDto);
    return this.webtoonService.createWebtoon(createWebtoonDto);
  }

  @Get()
  async getAllWebtoonsController(): Promise<Webtoon[]> {
    const webtoons = this.webtoonService.getAllWebtoons();
    console.log(await (await webtoons).forEach((e) => console.log(e.name)));
    return await webtoons;
  }

  @Get(':id')
  async findWebtoonById(@Param('id') id: number): Promise<Webtoon> {
    const webtoonId = this.webtoonService.getOnWebtoonById(id);
    console.log(webtoonId);
    return this.webtoonService.getOnWebtoonById(id);
  }
  @Put(':id')
  async updateWebtoon(@Param('id') id: number): Promise<Webtoon> {
    return this.webtoonService.getOnWebtoonByIdAndUpdate(id);
  }
  @Delete(':id')
  async deleteWebtoon(@Param('id') id: number): Promise<Webtoon> {
    return this.webtoonService.getOnWebtoonByIdAndDelete(id);
  }
}
