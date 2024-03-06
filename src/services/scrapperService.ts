import { Injectable } from '@nestjs/common';
import { ScrapingHelper } from '../helper/scrapingData';
import { WebtoonsService } from 'src/services/webtoons.service';

@Injectable()
export class ScraperService {
  private readonly webtoonService: WebtoonsService;

  scrapingHelper: ScrapingHelper;

  constructor() {
    this.webtoonService = this.webtoonService;
    this.scrapingHelper = new ScrapingHelper();
  }

  async scrapeData(url: string): Promise<any> {
    const data = this.scrapingHelper.scrap(url);
    /* this.getBdd(data); */
    console.log('data', data);
    /* this.webtoonService.createWebtoon(await data); */
  }

  /*   async getBdd(data): Promise<any> {
    console.log(test);
    return test;
  } */
}
