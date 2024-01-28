import { Injectable } from '@nestjs/common';
import { ScrapingHelper } from '../helper/scrapingData';

@Injectable()
export class ScraperService {
  scrapingHelper: ScrapingHelper;
  constructor() {
    this.scrapingHelper = new ScrapingHelper();
  }

  async scrapeData(url: string): Promise<any> {
    const data = this.scrapingHelper.scrap(url);

    console.log('data', data);

    //tu vas appeler une class dans un dossier repository regarde la doc sur les repo et nest
    //cree un dosier model et cree un model pour ta collection mongo
  }
}
