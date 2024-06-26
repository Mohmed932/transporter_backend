export const RssFeed  = (res,lastNews) => {
    const date = new Date()
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:mi="http://schemas.ingestion.microsoft.com/common/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0">
      <channel>
        <title>عصفوره</title>
        <link>https://www.asfourah.online</link>
        <description>موقع عصفوره الاخباري يقدم احدث واهم اخبار مصر على مدار اليوم كما نقدم اهم اخبار الرياضة والفن والاقتصاد والحوادث</description>
        <language>ar-eg</language>
        <pubDate>Thu, 22 Jun 2023 00:00:00 GMT</pubDate>
        <lastBuildDate>${date}</lastBuildDate>
        <docs>http://www.rssboard.org/rss-specification</docs>
        <generator>asfourah</generator>
        <managingEditor>mohmedmahmoudfouad@gmail.com (Editor)</managingEditor>
        <webMaster>asfourah@gmail.com (Webmaster)</webMaster>
          <item>
          <title>${lastNews[0].title}</title>
          <link>https://www.asfourah.online/news/${lastNews[0]._id}</link>
          <pubDate>${date}</pubDate>
          <description>${lastNews[0].desc[0]}</description>
          </item>
          <item>
          <title>${lastNews[1].title}</title>
          <link>https://www.asfourah.online/news/${lastNews[1]._id}</link>
          <pubDate>${date}</pubDate>
          <description>${lastNews[1].desc[0]}</description>
          </item>
          <item>
          <title>${lastNews[2].title}</title>
          <link>https://www.asfourah.online/news/${lastNews[2]._id}</link>
          <pubDate>${date}</pubDate>
          <description>${lastNews[2].desc[0]}</description>
          </item>
          <item>
          <title>${lastNews[3].title}</title>
          <link>https://www.asfourah.online/news/${lastNews[3]._id}</link>
          <pubDate>${date}</pubDate>
          <description>${lastNews[3].desc[0]}</description>
          </item>
          <item>
          <title>${lastNews[4].title}</title>
          <link>https://www.asfourah.online/news/${lastNews[4]._id}</link>
          <pubDate>${date}</pubDate>
          <description>${lastNews[4].desc[0]}</description>
          </item>
          <item>
          <title>${lastNews[5].title}</title>
          <link>https://www.asfourah.online/news/${lastNews[5]._id}</link>
          <pubDate>${date}</pubDate>
          <description>${lastNews[5].desc[0]}</description>
          </item>
          <item>
          <title>${lastNews[6].title}</title>
          <link>https://www.asfourah.online/news/${lastNews[6]._id}</link>
          <pubDate>${date}</pubDate>
          <description>${lastNews[6].desc[0]}</description>
          </item>
          <item>
          <title>${lastNews[7].title}</title>
          <link>https://www.asfourah.online/news/${lastNews[7]._id}</link>
          <pubDate>${date}</pubDate>
          <description>${lastNews[7].desc[0]}</description>
          </item>
          <item>
          <title>${lastNews[8].title}</title>
          <link>https://www.asfourah.online/news/${lastNews[8]._id}</link>
          <pubDate>${date}</pubDate>
          <description>${lastNews[8].desc[0]}</description>
          </item>
      </channel>
    </rss>
    `;
    return res.setHeader('Content-Type', 'application/xml').send(rss)
  }