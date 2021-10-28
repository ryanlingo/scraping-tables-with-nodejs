const request = require('request-promise');
const cheerio = require('cheerio');

async function main() {
  const result = await request.get(
    'https://www.codingwithstefan.com/table-example',
  );
  const $ = cheerio.load(result);
  $('body > table > tbody > tr > td').each((index, element) => {
    console.log($(element).text());
  });
}

main();
