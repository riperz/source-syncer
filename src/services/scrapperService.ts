import { Injectable } from '@nestjs/common';
import { ScrapingHelper } from '../helper/scrapingData';

@Injectable()
export class ScraperService {
  scrapingHelper: ScrapingHelper;
  constructor() {
    this.scrapingHelper = new ScrapingHelper();
  }

  async scrapeData(url: string): Promise<any> {
    this.scrapingHelper.scrap(url);
  }
}
