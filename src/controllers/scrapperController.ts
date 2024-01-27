import { Controller, Get, Query } from '@nestjs/common';
import { ScraperService } from '../services';

@Controller('scraper')
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {}

  @Get('scrape')
  async scrape(@Query('url') url: string): Promise<any> {
    return this.scraperService.scrapeData(url);
  }
}
