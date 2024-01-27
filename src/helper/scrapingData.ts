import puppeteer from 'puppeteer';

export class ScrapingHelper {
  constructor() {}

  async scrap(url: string): Promise<any> {
    const browser = await puppeteer.launch({
      executablePath: '/bin/google-chrome',
    });

    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.setViewport({ width: 1080, height: 1024 });

    await this.login(page, 'email@fake.com');

    await page.waitForSelector('#subscription-form');

    const elements = await page.$$('#subscription-form .picture-container');

    const data = [];
    for (const element of elements) {
      const imageUrl = await element.$eval('img', (img) => img.src);

      const mangaDetails = await element.$x(
        'following-sibling::div[contains(@class, "manga-details")]',
      );
      const mangaTitle =
        mangaDetails.length > 0
          ? await mangaDetails[0].$eval('h2', (h2) => h2.textContent.trim())
          : '';
      const upcomingEpisode =
        mangaDetails.length > 0
          ? await mangaDetails[0].$eval('h3', (h3) => h3.textContent.trim())
          : '';

      data.push({
        imgUrl: imageUrl,
        title: mangaTitle,
        upcomingEpisode: upcomingEpisode,
      });

      console.log(data);
    }

    await browser.close();
  }

  private async login(page: any, email: string): Promise<void> {
    const emailSelector = '#email';
    const submitButtonSelector = '#subscribeButton';

    try {
      await page.waitForSelector(emailSelector);
      await page.type(emailSelector, email);

      await page.waitForSelector(submitButtonSelector);
      await page.click(submitButtonSelector);

      await page.waitForNavigation({ waitUntil: 'networkidle2' });

      const pageUrl = page.url();
      if (pageUrl.includes('https://www.sortiemanga.com/subscribers/')) {
        console.log('Connexion réussie');
      } else {
        console.log('pageurl', pageUrl);

        console.log('Connexion échouée');
      }
    } catch (error) {
      console.error('Erreur lors de la tentative de connexion:', error);
    }
  }
}
