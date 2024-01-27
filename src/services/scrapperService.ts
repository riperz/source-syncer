import { Injectable } from '@nestjs/common';

@Injectable()
export class ScraperService {
  constructor() {}

  async scrapeData(url: string): Promise<any> {
    console.log('ok')
  }
}
