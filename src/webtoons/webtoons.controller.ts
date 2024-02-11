import { Body, Controller, Get, Post } from '@nestjs/common';
import { WebtoonsService } from './webtoons.service';
import { CreateWebtoonDto } from './dto/CreateWebtoon.dto';
import { Webtoon } from 'src/schemas/Webtoon.schema';
/* import { Webtoon } from 'src/schemas/Webtoon.schema'; */

@Controller('webtoons')
export class WebtoonsController {
  constructor(private webtoonService: WebtoonsService) {}

  @Get()
  async getWebtoons(): Promise<Webtoon[]> {
    const webtoons = this.webtoonService.getWebtoons();
    console.log(await (await webtoons).forEach((e) => console.log(e.name)));

    return await webtoons;
  }

  @Post()
  async createWebtoon(@Body() createWebtoonDto: CreateWebtoonDto) {
    console.log(createWebtoonDto);
    return this.webtoonService.createWebtoon(createWebtoonDto);
  }
}
