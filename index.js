const request = require('request-promise');
const cheerio = require('cheerio');

async function main() {
  const result = await request.get(
    'https://www.codingwithstefan.com/table-example',
  );
  const $ = cheerio.load(result);
  $('body > table > tbody > tr').each((index, element) => {
    const tds = $(element).find('td');
    const company = $(tds[0]).text();
    console.log(company);
  });
}

main();
