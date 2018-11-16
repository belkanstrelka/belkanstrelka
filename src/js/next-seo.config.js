const enMeta = {
  title: 'be·belka - Design as a service',
  description: 'Easiest way for startups and enterpises to upgrade digital products and focus on building great companies.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://bebelka.com',
    title: 'be·belka - Design as a service',
    description: 'Easiest way for startups and enterpises to upgrade digital products and focus on building great companies.',
    images: [{
      url: 'https://bebelka.com/og.png',
      // imageWidth: 583,
      // imageHeight: 315,
      imageWidth: 256,
      imageHeight: 256,
      // alt: 'Og Image Alt',
    }
      // ,
      // {
      //   url: 'https://www.example.ie/og-image-02.jpg',
      //   width: 900,
      //   height: 800,
      //   alt: 'Og Image Alt',
      // },
      // { url: 'https://www.example.ie/og-image-03.jpg' },
      // { url: 'https://www.example.ie/og-image-04.jpg' },
    ],
    site_name: 'bebelka.com',
  },
};

const ruMeta = {
  title: 'be·belka - Дизайн как сервис',
  description: 'Самый простой и понятный для бизнеса способ проектировать цифровые продукты.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://bebelka.com/ru',
    title: 'be·belka - Дизайн как сервис',
    description: 'Самый простой и понятный для бизнеса способ проектировать цифровые продукты.',
    images: [{
      url: 'https://bebelka.com/og.png',
      // imageWidth: 583,
      // imageHeight: 315,
      imageWidth: 256,
      imageHeight: 256,
      // alt: 'Og Image Alt',
    }
      // ,
      // {
      //   url: 'https://www.example.ie/og-image-02.jpg',
      //   width: 900,
      //   height: 800,
      //   alt: 'Og Image Alt',
      // },
      // { url: 'https://www.example.ie/og-image-03.jpg' },
      // { url: 'https://www.example.ie/og-image-04.jpg' },
    ],
    site_name: 'bebelka.com',
  },
}

export default {
  'undefined': enMeta,
  'ru': ruMeta,
  'en': enMeta
}
