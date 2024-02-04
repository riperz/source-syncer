import { Body, Controller, Post } from '@nestjs/common';
import { WebtoonsService } from './webtoons.service';
import { CreateWebtoonDto } from './dto/CreateWebtoon.dto';

@Controller('webtoon')
export class WebtoonsController {
  constructor(private webtoonService: WebtoonsService) {}
  @Post()
  createWebtoon(@Body() createWebtoonDto: CreateWebtoonDto) {
    console.log(createWebtoonDto);
  }
}
