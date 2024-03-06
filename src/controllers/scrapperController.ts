import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ScraperService } from '../services';
import { CreateWebtoonDto } from 'src/dto/CreateWebtoon.dto';
import { WebtoonsService } from 'src/services/webtoons.service';

@Controller('scraper')
export class ScraperController {
  /* private readonly webtoonService: WebtoonsService;
   */
  constructor(
    /* webtoonService: WebtoonsService, */
    private readonly scraperService: ScraperService,
  ) {
    /*  this.webtoonService = webtoonService; */
  }

  @Get('scrape')
  async scrape(@Query('url') url: string): Promise<any> {
    return this.scraperService.scrapeData(url);
  }

  /*  @Post()
  async createWebtoon(@Body() createWebtoonDto: CreateWebtoonDto) {
    console.log(createWebtoonDto);
    return this.webtoonService.createWebtoon(createWebtoonDto);
  } */
}
