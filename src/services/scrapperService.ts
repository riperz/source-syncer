import { Injectable } from '@nestjs/common';
import { ScrapingHelper } from '../helper/scrapingData';
import { WebtoonsController } from 'src/webtoons/webtoons.controller';

@Injectable()
export class ScraperService {
  scrapingHelper: ScrapingHelper;
  webtoonController: WebtoonsController;
  constructor() {
    this.scrapingHelper = new ScrapingHelper();
  }

  async scrapeData(url: string): Promise<any> {
    const data = this.scrapingHelper.scrap(url);

    console.log('data', data);

    //tu vas appeler une class dans un dossier repository regarde la doc sur les repo et nest
    //cree un dosier model et cree un model pour ta collection mongo
  }

  async getBdd(): Promise<any> {
    const data = this.webtoonController.getWebtoons();
    console.log(data);
    return data;
  }
}
