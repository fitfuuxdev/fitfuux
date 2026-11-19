import {
  CASES,
  PHONE,
  PHONE_HREF,
  TELEGRAM,
  TELEGRAM_LABEL,
  icon,
  makeImage,
  page,
  planCard,
  scene,
  workCard,
} from './site.mjs';

const image = makeImage('');

const homeScene = scene({
  prefix: '',
  type: 'home',
  label: 'FITFUUX / 3D',
  poster: 'brand-cube',
  alt: 'Парящий стеклянный экран с логотипом FITFUUX. Модель можно вращать мышью или пальцем.',
  priority: true,
});

const layersScene = scene({
  prefix: '',
  type: 'layers',
  label: 'LAYERS / 3D',
  poster: 'abstract-veil',
  alt: 'Слои будущего сайта в 3D. Модель можно вращать.',
  cover: true,
  priority: true,
});

const carouselScene = scene({
  prefix: '',
  type: 'carousel',
  label: 'FIVE WORKS / 3D',
  poster: 'abstract-veil',
  alt: 'Пять стеклянных панелей с цветами кейсов. Модель можно вращать.',
  cover: true,
});

const orbitScene = scene({
  prefix: '',
  type: 'orbit',
  label: 'ONE PERSON / 3D',
  poster: 'brand-cube',
  alt: 'Металлическая сфера с орбитами. Модель можно вращать.',
});

const coinsScene = scene({
  prefix: '',
  type: 'coins',
  label: 'PRICE / 3D',
  poster: 'brand-cube',
  alt: 'Три металлических диска, парящие друг над другом. Модель можно вращать.',
  priority: true,
});

const planeScene = scene({
  prefix: '',
  type: 'plane',
  label: 'SAY HI / 3D',
  poster: 'abstract-veil',
  alt: 'Стеклянный бумажный самолётик. Модель можно вращать.',
  cover: true,
  priority: true,
});

function ticker() {
  const items = ['Лендинги под ключ', 'Тексты и структура', '3D и анимации', 'Заявки в Telegram', 'Запуск и проверки', 'Правки до запуска'];
  const set = `<div class="ticker__set" aria-hidden="true">${items.map((item) => `<span>${item}</span>`).join('')}</div>`;
  return `<div class="ticker" aria-hidden="true"><div class="ticker__track">${set}${set}</div></div>`;
}

function ctaBand({ eyebrow = 'Есть идея?', title, text, meta = true }) {
  return `<section class="cta-band">
  ${image('cta-dark', '', { sizes: '100vw', loading: 'lazy', className: 'cta-band__bg', parallax: 10 })}
  <div class="shell">
    <div class="cta-band__inner">
      <div>
        <p class="eyebrow eyebrow--light">${eyebrow}</p>
        <h2>${title}</h2>
      </div>
      <div class="cta-band__side">
        <p>${text}</p>
        <a class="btn btn--light" href="${TELEGRAM}" target="_blank" rel="noopener noreferrer">Написать в Telegram ${icon('arrowUpRight')}</a>
        <a class="cta-contact" href="${PHONE_HREF}">${icon('phone')} ${PHONE}</a>
        ${meta ? `<div class="cta-band__meta"><span>Первый разговор ни к чему не обязывает</span><span>СБП · получатель Алексей</span></div>` : ''}
      </div>
    </div>
  </div>
</section>`;
}

function pageHome() {
  const serviceRows = [
    ['01', 'Лендинг под ключ', 'от 8 000 ₽', 'Соберу страницу от структуры до запуска. Без конструкторов и чужих шаблонов.', 'services.html#landing'],
    ['02', 'Продающая логика', 'в каждом блоке', 'Сначала думаю, что важно вашему клиенту. Потом пишу и показываю.', 'services.html#logic'],
    ['03', 'Заявки и оплата', 'настрою', 'Кнопки, форма и уведомления. Чтобы вам написали, а не просто посмотрели.', 'services.html#leads'],
    ['04', '3D и анимации', 'по желанию', 'Мягкие движения и объёмная модель. Дорого на вид, легко для телефона.', 'services.html#animation'],
  ];
  const benefits = `
    <div class="benefit benefit--price">
      <div class="benefit__num">01 / ЦЕНА</div>
      <div>
        <div class="benefit__big">8 000 <small>₽</small></div>
        <div class="benefit__range">до 12 000 ₽ за полный сайт</div>
        <h3 style="margin-top:18px">Цена без сюрпризов</h3>
        <p style="margin-top:9px">Называю точную сумму до старта. В процессе она не меняется.</p>
      </div>
    </div>
    <div class="benefit benefit--one">
      <div class="benefit__num">02 / СВЯЗЬ</div>
      <div><h3>Один человек на связи</h3><p>Без менеджеров и «я уточню у коллег». Пишете мне — отвечаю я.</p></div>
    </div>
    <div class="benefit benefit--edits">
      <div class="benefit__num">03 / СПОКОЙСТВИЕ</div>
      <div><h3>Правки до запуска</h3><p>Спокойно доводим до результата. Вы не остаётесь один с «почти готово».</p></div>
    </div>
    <div class="benefit benefit--photo">
      ${image('studio-work', 'Руки за ноутбуком: идёт работа над сайтом', { sizes: '(max-width: 820px) 100vw, 40vw' })}
      <div class="benefit--photo__caption"><span>Работаю за своим столом</span><span>без офиса</span></div>
    </div>
    <div class="benefit benefit--fast">
      <div class="benefit__num">04 / СКОРОСТЬ</div>
      <div><h3>Быстрый и лёгкий</h3><p>Сжатые фото, аккуратный код, 3D только там, где нужно. Сайт не тормозит.</p></div>
    </div>
    <div class="benefit benefit--care">
      <div class="benefit__num">05 / ТЕЛЕФОН</div>
      <div><h3>Сначала телефон</h3><p>Проверяю каждый экран в руке. Потом — на большом мониторе.</p></div>
    </div>`;

  const main = `
<section class="hero hero--home" aria-labelledby="home-title">
  <div class="hero__bg" aria-hidden="true">
    ${image('cta-dark', '', { sizes: '100vw', loading: 'eager', priority: true, parallax: 14 })}
  </div>
  <div class="shell hero__inner">
    <div class="hero__copy reveal">
      <p class="hero__kicker"><span class="dot"></span> Алексей · сайты под ключ</p>
      <h1 id="home-title"><span class="line">Сайт,</span><span class="line">который</span><span class="line"><span class="serif">приводит</span></span><span class="line">заявки<span class="accent">.</span></span></h1>
      <p class="hero__lead">Собираю лендинги для малого бизнеса. Понятные, быстрые и без сюрпризов по цене. От 8 000 ₽.</p>
      <div class="hero__actions">
        <a class="btn btn--light" href="contacts.html">Написать ${icon('arrowUpRight')}</a>
        <a class="btn btn--ghost" href="portfolio.html">Смотреть кейсы ${icon('arrowRight')}</a>
      </div>
      <p class="hero__note">Первый разговор ни к чему не обязывает. Правки до запуска включены.</p>
    </div>
    <div class="hero__visual reveal" data-reveal-delay="1">
      <div class="hero__stamp" aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <defs><path id="heroStampPath" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"/></defs>
          <text fill="currentColor" font-size="6.8" letter-spacing="1.8" font-family="Onest, sans-serif"><textPath href="#heroStampPath">САЙТЫ ПОД КЛЮЧ · ОТ 8 000 ₽ · ПРАВКИ ДО ЗАПУСКА ·</textPath></text>
        </svg>
        <span class="dot"></span>
      </div>
      ${homeScene}
    </div>
  </div>
  <div class="shell">
    <div class="hero__stats reveal">
      <div class="hero__stat"><strong>8 000–12 000 ₽</strong><span>понятная цена</span></div>
      <div class="hero__stat"><strong>7–14 дней</strong><span>обычный срок</span></div>
      <div class="hero__stat"><strong>1 человек</strong><span>лично отвечает</span></div>
      <a class="hero__scroll" href="#manifesto">Листайте вниз ${icon('arrowDown')}</a>
    </div>
  </div>
</section>
${ticker()}
<section class="section section--paper" id="manifesto">
  <div class="shell">
    <div class="manifesto reveal">
      <div>
        <p class="eyebrow">Зачем вам сайт</p>
        <h2>Сайт — не картинка. <span class="serif">Это ваш продавец.</span></h2>
      </div>
      <div class="manifesto__aside">
        <p>Я встречаю человека, отвечаю на вопросы и веду к кнопке. Даже когда вы заняты или спите. Моя задача — чтобы это выглядело красиво и работало без запинок.</p>
      </div>
    </div>
    <div class="manifesto-media reveal" data-reveal-delay="1">
      ${image('studio-work', 'Рабочий процесс: руки, ноутбук и свет в мастерской', { sizes: '(max-width: 820px) 100vw, 100vw', parallax: 7 })}
      <div class="manifesto-media__tag"><span class="dot"></span><span>Сначала разбираюсь в задаче. Потом открываю редактор.</span></div>
    </div>
  </div>
</section>
<section class="section" aria-labelledby="services-home">
  <div class="shell">
    <div class="section-head reveal">
      <div><p class="eyebrow">Что я делаю</p><h2 id="services-home">Сайт под ключ. <span class="serif">Целиком.</span></h2></div>
      <p class="section-head__aside">Не просто «сделать красиво». Нужно, чтобы человек понял, что вы предлагаете, и написал вам.</p>
    </div>
    <div class="service-list reveal-group">
      ${serviceRows.map(([num, title, label, desc, href]) => `<a class="service-row" href="${href}">
        <span class="service-row__index">${num}</span>
        <h3 class="service-row__title">${title}<span>${label}</span></h3>
        <p class="service-row__desc">${desc}</p>
        <span class="service-row__arrow">${icon('arrowUpRight')}</span>
      </a>`).join('')}
    </div>
    <div style="display:flex;justify-content:flex-end;margin-top:26px">
      <a class="text-link" href="services.html">Все услуги и процесс ${icon('arrowUpRight')}</a>
    </div>
  </div>
</section>
<section class="section section--dark" aria-labelledby="cases-home" data-slider>
  <div class="shell">
    <div class="work-head reveal">
      <div><p class="eyebrow eyebrow--light">Мои работы</p><h2 id="cases-home">Пять кейсов. <span class="serif">Пять характеров.</span></h2></div>
      <div class="work-head__side">
        <p>Каждый сайт придуман и собран мной с нуля. Открывайте — там всё по-настоящему, кроме названий.</p>
        <div class="slider-nav">
          <button type="button" data-slider-prev aria-label="Предыдущий кейс">${icon('arrowLeft')}</button>
          <button type="button" data-slider-next aria-label="Следующий кейс">${icon('arrowRight')}</button>
        </div>
      </div>
    </div>
    <div class="case-slider">
      <div class="case-slider__track" data-slider-track role="region" aria-label="Кейсы, горизонтальная прокрутка">
        ${CASES.map((item) => workCard(item)).join('')}
      </div>
      <div class="case-slider__progress" aria-hidden="true"><span data-slider-progress></span></div>
    </div>
    <div style="display:flex;justify-content:flex-end;margin-top:24px">
      <a class="text-link" href="portfolio.html">Смотреть все кейсы ${icon('arrowUpRight')}</a>
    </div>
  </div>
</section>
<section class="section section--paper">
  <div class="shell">
    <div class="section-head reveal">
      <div><p class="eyebrow">Почему со мной спокойно</p><h2>Никаких «мы подумаем» <span class="serif">и «нужно ещё немного».</span></h2></div>
      <p class="section-head__aside">Работаю просто: договорились — делаю. Показываю по ходу, объясняю человеческим языком.</p>
    </div>
    <div class="benefits benefits--light reveal">
      ${benefits}
    </div>
  </div>
</section>
<section class="section section--cream section--line" id="process-home">
  <div class="shell">
    <div class="section-head reveal">
      <div><p class="eyebrow">Как всё будет</p><h2>Четыре шага. <span class="serif">Без лабиринта.</span></h2></div>
      <p class="section-head__aside">Вы всегда знаете, на каком этапе проект и что нужно от вас. Я не пропадаю.</p>
    </div>
    <div class="steps reveal-group">
      <div class="step"><div class="step__top"><span>01</span><span class="dot"></span></div><h3>Пишете мне</h3><p>Пара слов о задаче. Без долгой анкеты. Я задам вопросы сам.</p></div>
      <div class="step"><div class="step__top"><span>02</span><span class="dot"></span></div><h3>Договариваемся</h3><p>Говорим о цели, сроках и цене. Сразу называю точную сумму. Без «от».</p></div>
      <div class="step"><div class="step__top"><span>03</span><span class="dot"></span></div><h3>Собираю сайт</h3><p>Пишу тексты, рисую дизайн, верстаю. Показываю, поправляем вместе.</p></div>
      <div class="step"><div class="step__top"><span>04</span><span class="dot"></span></div><h3>Запускаем</h3><p>Проверяю телефон и компьютер, запускаю, передаю доступы. Готово.</p></div>
    </div>
    <div style="display:flex;justify-content:flex-end;margin-top:28px">
      <a class="text-link" href="about.html">Как я работаю ${icon('arrowUpRight')}</a>
    </div>
  </div>
</section>
<section class="section" id="prices-home">
  <div class="shell">
    <div class="section-head reveal">
      <div><p class="eyebrow">Цены</p><h2>Всё честно. <span class="serif">До начала.</span></h2></div>
      <p class="section-head__aside">Три варианта под разные задачи. Не подходит ни один — напишите, разберёмся.</p>
    </div>
    <div class="plans reveal-group">
      ${planCard({
        label: 'Старт', price: '8 000', title: 'Одностраничник', desc: 'Для услуги или мастера. Коротко, понятно, с кнопкой.',
        features: ['Одна страница до 4 блоков', 'Дизайн, тексты и вёрстка', 'Мобильная версия', 'Правки до запуска'],
        href: 'pricing.html', btn: 'Что входит',
      })}
      ${planCard({
        label: 'Под ключ', price: '12 000', title: 'Полный лендинг', desc: 'Когда нужен сайт, который рассказывает и приводит клиентов.',
        features: ['До 8 блоков и своя 3D-модель', 'Тексты, фото и продающая логика', 'Заявки и оплата', 'Помощь с запуском'],
        featured: true, href: 'pricing.html', btn: 'Что входит',
      })}
      ${planCard({
        label: 'Доработка', price: '2 000', title: 'Поправить сайт', desc: 'Уже есть сайт, но что-то выглядит или работает не так.',
        features: ['Один блок или пачка правок', 'Мобильные исправления', 'Кнопки и формы', 'Проверка после'],
        href: 'pricing.html', btn: 'Что входит',
      })}
    </div>
    <div class="plans-note"><span>Цена зафиксирована — сюрпризов не будет. Первый разговор ни к чему не обязывает.</span><a class="text-link" href="pricing.html">Все цены и состав ${icon('arrowUpRight')}</a></div>
  </div>
</section>
${ctaBand({
  eyebrow: 'Следующий шаг',
  title: 'Осталось <span class="serif">написать.</span>',
  text: 'Расскажите, что нужно. Я отвечу, задам пару вопросов и скажу, сколько это будет стоить.',
})}
`;
  return page({
    file: 'index.html',
    title: 'FITFUUX — сайты под ключ от 8 000 ₽ | Лендинги, которые приводят заявки',
    description: 'Лендинги и сайты под ключ от 8 000 ₽. Дизайн, тексты, 3D, заявки и запуск. Делаю сам, без сюрпризов по цене. Правки до запуска включены.',
    pathName: '/',
    active: 'home',
    bodyClass: 'page page-home',
    theme: 'main',
    main,
    og: 'home',
    preloadPhoto: 'cta-dark',
    breadcrumb: [['Главная', '/']],
  });
}

function pageServices() {
  const blocks = [
    {
      id: 'landing',
      num: '01',
      title: 'Лендинг под ключ',
      text: 'Одна страница, которая решает одну понятную задачу. Сначала разбираюсь, кто ваш клиент и что ему важно. Потом собираю структуру, пишу текст, рисую дизайн и запускаю.',
      list: ['Структура и тексты', 'Дизайн под ваш характер', 'Удобно на телефоне и компьютере', 'Запуск и проверка'],
    },
    {
      id: 'logic',
      num: '02',
      title: 'Продающая логика',
      text: 'На сайте всё должно вести к одному: чтобы человек понял, почему ему стоит написать именно вам. Показываю, что вы делаете, для кого, сколько стоит и что будет дальше.',
      list: ['Понятный первый экран', 'Цена и условия без тумана', 'Ответы на частые вопросы', 'Кнопки в нужных местах'],
    },
    {
      id: 'leads',
      num: '03',
      title: 'Заявки и оплата',
      text: 'Подключу удобный способ связи: Telegram, телефон, форма. Проверю, что заявка доходит, а кнопки не ломаются на телефоне. Если нужна оплата — встрою ссылку или понятный шаг к ней.',
      list: ['Кнопки и форма заявки', 'Уведомления в Telegram', 'Ссылка на оплату', 'Проверка на устройствах'],
    },
    {
      id: 'animation',
      num: '04',
      title: '3D и анимации',
      text: 'Поворачивающиеся модели, мягкие появления, аккуратные переходы. Это не обязательно. Но если хотите, чтобы сайт запомнился, — сделаю. На телефоне всё будет работать быстро.',
      list: ['Своя 3D-модель', 'Плавные анимации', 'Лёгкий режим для телефона', 'Запасной вариант без 3D'],
    },
    {
      id: 'launch',
      num: '05',
      title: 'Запуск без головной боли',
      text: 'Помогу подключить адрес сайта и разместить его в интернете. Проверю все страницы, тексты, ссылки и кнопки. Объясню, что и как менять дальше, чтобы вам не пришлось искать программиста из-за одного слова.',
      list: ['Адрес сайта и размещение', 'Проверка всех страниц', 'Скорость загрузки', 'Передача доступов'],
    },
  ];

  const main = `
<section class="page-hero page-hero--dark" aria-labelledby="services-title">
  <div class="hero__bg" aria-hidden="true">${image('abstract-veil', '', { sizes: '100vw', loading: 'eager', parallax: 12 })}</div>
  <div class="shell page-hero__inner">
    <div class="page-hero__copy reveal">
      <p class="eyebrow eyebrow--light">Услуги · от идеи до запуска</p>
      <h1 id="services-title">Лендинг<br>под ключ.<br><span class="serif">Без сюрпризов.</span></h1>
      <p class="page-hero__lead">Сделаю сайт от первого текста до кнопки «Написать». Понятно, быстро и с ценой, которая не изменится по ходу.</p>
      <div class="page-hero__meta"><span>от 8 000 ₽</span><span class="dot"></span><span>7–14 дней</span><span class="dot"></span><span>правки до запуска</span></div>
      <div class="hero__actions"><a class="btn btn--light" href="contacts.html">Обсудить задачу ${icon('arrowUpRight')}</a><a class="btn btn--ghost" href="portfolio.html">Смотреть кейсы ${icon('arrowRight')}</a></div>
    </div>
    <div class="page-hero__visual reveal" data-reveal-delay="1">${layersScene}</div>
  </div>
</section>
<section class="section section--paper">
  <div class="shell">
    <div class="section-head reveal">
      <div><p class="eyebrow">Что входит</p><h2>Делаю не «страницу». <span class="serif">Делаю инструмент.</span></h2></div>
      <p class="section-head__aside">Вы платите за сайт, который можно показать людям и не краснеть. Всё остальное — детали, которые я беру на себя.</p>
    </div>
    <div class="service-blocks">
      ${blocks.map((block, index) => `<section class="service-block reveal" id="${block.id}">
        <span class="service-block__index">${block.num}</span>
        <div class="service-block__main">
          <h2>${block.title}</h2>
          <p>${block.text}</p>
          ${index === 0 ? `<div style="display:flex;justify-content:flex-start;margin-top:22px"><a class="text-link" href="contacts.html">Обсудить сайт ${icon('arrowUpRight')}</a></div>` : ''}
        </div>
        <ul class="service-block__list">${block.list.map((item) => `<li>${item}</li>`).join('')}</ul>
      </section>`).join('')}
    </div>
    <div class="service-photo reveal">
      <div class="service-photo__item">${image('studio-process', 'Наброски будущего сайта на столе', { sizes: '(max-width: 820px) 100vw, 55vw', parallax: 8 })}<div class="service-photo__caption"><span>01 / эскизы</span><span>потом код</span></div></div>
      <div class="service-photo__item">${image('studio-code', 'Работа над сайтом за ноутбуком', { sizes: '(max-width: 820px) 100vw, 45vw', parallax: 8 })}<div class="service-photo__caption"><span>02 / сборка</span><span>проверки</span></div></div>
    </div>
  </div>
</section>
<section class="section section--dark">
  <div class="shell">
    <div class="section-head reveal">
      <div><p class="eyebrow eyebrow--light">Порядок работы</p><h2>Пять шагов. <span class="serif">Вы в курсе.</span></h2></div>
      <p class="section-head__aside">Никаких недель тишины. Вы видите, что происходит, и можете сказать «давай иначе» до запуска.</p>
    </div>
    <div class="steps steps--five reveal-group">
      <div class="step"><div class="step__top"><span>01</span><span class="dot"></span></div><h3>Разговор</h3><p>Вы рассказываете, что нужно. Я задаю вопросы. Это бесплатно.</p></div>
      <div class="step"><div class="step__top"><span>02</span><span class="dot"></span></div><h3>Структура</h3><p>Собираю, о чём будет сайт и в каком порядке. Показываю до дизайна.</p></div>
      <div class="step"><div class="step__top"><span>03</span><span class="dot"></span></div><h3>Тексты и дизайн</h3><p>Пишу простым языком и рисую. Вместе смотрим, что нравится.</p></div>
      <div class="step"><div class="step__top"><span>04</span><span class="dot"></span></div><h3>Сборка</h3><p>Собираю сайт, подключаю кнопки и формы, проверяю на телефоне.</p></div>
      <div class="step"><div class="step__top"><span>05</span><span class="dot"></span></div><h3>Запуск</h3><p>Проверяю всё, подключаю адрес сайта и отдаю доступы. Сайт работает.</p></div>
    </div>
  </div>
</section>
<section class="section section--cream">
  <div class="shell">
    <div class="included reveal">
      <div>
        <p class="eyebrow">Входит всегда</p>
        <h2 style="font-size:clamp(36px,4.6vw,64px);max-width:11ch">Без доплат <span class="serif">за базовое.</span></h2>
        <p class="lead" style="margin-top:20px;font-size:14px">Считаю, что аккуратный сайт не должен начинаться с вопроса «а это входит в цену?». Вот что уже внутри.</p>
      </div>
      <div class="included__list reveal-group">
        ${['Понятная структура', 'Тексты без канцелярита', 'Мобильная версия', 'Кнопки и формы', 'Проверка всех ссылок', 'Быстрая загрузка', 'Правки до запуска', 'Передача доступов'].map((item) => `<div class="included__item">${item}</div>`).join('')}
      </div>
    </div>
  </div>
</section>
<section class="section">
  <div class="shell--narrow" style="width:min(100%,1000px);margin-inline:auto;padding-inline:var(--gutter)">
    <div class="section-head--center reveal"><p class="eyebrow" style="justify-content:center">Вопросы</p><h2 style="max-width:12ch;margin-inline:auto">Спрашивали — отвечаю.</h2></div>
    <div class="faq reveal" style="margin-top:12px">
      <details class="faq__item"><summary>Сколько времени занимает сайт?</summary><div class="faq__answer">Обычно 7–14 дней. Маленький одностраничник можем собрать за 3–5 дней, если есть все материалы. Сроки называю до старта и стараюсь не сдвигать.</div></details>
      <details class="faq__item"><summary>У меня нет текстов и фотографий. Что делать?</summary><div class="faq__answer">Это нормально. Я помогу собрать текст из того, что вы расскажете, и подберу подходящие фото. Вам не нужно приходить с готовым списком вопросов на десять страниц.</div></details>
      <details class="faq__item"><summary>Почему так недорого?</summary><div class="faq__answer">Я работаю сам, без офиса, менеджеров и посредников. Поэтому могу держать цену ниже студии и при этом не экономить на качестве.</div></details>
      <details class="faq__item"><summary>А правки после запуска?</summary><div class="faq__answer">До запуска правки входят в цену. После запуска — обсуждаем отдельно. Но я не исчезаю: помогу с небольшим вопросом и подскажу, что делать.</div></details>
      <details class="faq__item"><summary>Можно будет менять сайт самому?</summary><div class="faq__answer">Покажу, где и что можно поправить. Для сложных изменений лучше написать мне — так сайт дольше останется целым.</div></details>
    </div>
  </div>
</section>
${ctaBand({ eyebrow: 'Нужен сайт?', title: 'Давайте <span class="serif">начнём.</span>', text: 'Напишите пару слов о задаче. Я скажу, какой вариант подойдёт и сколько это будет стоить.' })}
`;
  return page({
    file: 'services.html',
    title: 'Лендинги под ключ — дизайн, тексты, 3D и запуск | FITFUUX',
    description: 'Сделаю лендинг под ключ от 8 000 ₽: структура, тексты, дизайн, 3D, заявки и запуск. Понятный процесс, правки до запуска, цена без сюрпризов.',
    pathName: '/services.html',
    active: 'services',
    bodyClass: 'page page-services',
    theme: 'main',
    main,
    og: 'services',
    preloadPhoto: 'abstract-veil',
    faq: [
      { q: 'Сколько времени занимает сайт?', a: 'Обычно 7–14 дней. Маленький одностраничник можем собрать за 3–5 дней, если есть все материалы.' },
      { q: 'У меня нет текстов и фотографий. Что делать?', a: 'Это нормально. Помогу собрать текст и подобрать подходящие фото.' },
      { q: 'Почему так недорого?', a: 'Я работаю сам, без офиса, менеджеров и посредников.' },
    ],
    breadcrumb: [['Главная', '/'], ['Услуги', '/services.html']],
  });
}

function pagePortfolio() {
  const filters = [['all', 'Все'], ['food', 'Еда'], ['sport', 'Спорт'], ['education', 'Обучение'], ['beauty', 'Красота']];
  const main = `
<section class="portfolio-hero" aria-labelledby="portfolio-title">
  <div class="shell">
    <div class="portfolio-hero__inner">
      <div class="reveal">
        <p class="eyebrow">Портфолио · 5 авторских проектов</p>
        <h1 id="portfolio-title">Портфолио:<br>пять сайтов,<br><em>пять характеров.</em></h1>
        <div class="portfolio-hero__meta"><span>Все сайты сделаны с нуля</span><span>Открывайте и листайте</span></div>
      </div>
      <div class="portfolio-hero__visual reveal" data-reveal-delay="1">
        <div class="stage-card">${carouselScene}</div>
      </div>
    </div>
    <p class="lead" style="max-width:52ch;margin-top:34px">Это мои авторские проекты, а не чужие работы. У каждого — свой дизайн, свой голос и своя 3D-модель. Выберите, что ближе вашему делу.</p>
  </div>
</section>
<section class="section section--tight" id="works">
  <div class="shell">
    <div class="portfolio-toolbar reveal" data-portfolio-filters>
      <div class="filters" role="group" aria-label="Фильтр кейсов">
        ${filters.map(([value, label], index) => `<button type="button" data-filter="${value}" class="${index === 0 ? 'is-active' : ''}" aria-pressed="${index === 0}">${label}</button>`).join('')}
      </div>
      <span class="toolbar-note" data-filter-status aria-live="polite">Все пять кейсов</span>
    </div>
    <div class="portfolio-grid reveal">
      ${CASES.map((item) => workCard(item, '', `data-work="${item.category}"`)).join('')}
    </div>
    <p class="small muted" style="max-width:55ch;margin-top:26px">Все названия и детали внутри кейсов — придуманные. Дизайн, тексты, 3D и код — мои. Хотите похожий сайт для своего дела? Это можно обсудить.</p>
  </div>
</section>
<section class="section section--dark">
  <div class="shell">
    <div class="section-head reveal">
      <div><p class="eyebrow eyebrow--light">Как я думаю о сайтах</p><h2>Сначала смысл. <span class="serif">Потом красота.</span></h2></div>
      <p class="section-head__aside">Красивый сайт без смысла — просто картинка. Мне интереснее, когда за красотой есть понятная мысль.</p>
    </div>
    <div class="portfolio-principles reveal-group">
      <div class="principle"><span class="principle__num">01 / СМЫСЛ</span><div><h3>Кто ваш клиент и что ему важно</h3><p>Начинаю с вопроса «зачем человеку открывать этот сайт». От ответа зависит всё: тексты, блоки, кнопки.</p></div></div>
      <div class="principle"><span class="principle__num">02 / ХАРАКТЕР</span><div><h3>У каждого дела свой голос</h3><p>Кофейня не должна выглядеть как спортзал. Дизайн собираю под вашу нишу и людей, которые к вам придут.</p></div></div>
      <div class="principle"><span class="principle__num">03 / ПРОВЕРКА</span><div><h3>Сайт должен работать в руке</h3><p>Смотрю на каждый экран с телефона. Если неудобно листать и нажимать — переделываю, пока не станет легко.</p></div></div>
    </div>
  </div>
</section>
${ctaBand({ eyebrow: 'Хочу такой же', title: 'Какой сайт нужен <span class="serif">вам?</span>', text: 'Расскажите о своём деле. Я предложу формат, покажу похожие решения и назову цену.' })}
`;
  return page({
    file: 'portfolio.html',
    title: 'Портфолио веб-дизайнера — 5 сайтов с характером | FITFUUX',
    description: 'Авторское портфолио FITFUUX: сайты для кофейни, спортзала, IT-школы, косметики и ресторана. Разные стили, 3D-модели и живые тексты.',
    pathName: '/portfolio.html',
    active: 'portfolio',
    bodyClass: 'page page-portfolio',
    theme: 'main',
    main,
    og: 'portfolio',
    breadcrumb: [['Главная', '/'], ['Портфолио', '/portfolio.html']],
  });
}

function pageAbout() {
  const main = `
<section class="about-hero" aria-labelledby="about-title">
  <div class="shell">
    <div class="about-hero__grid">
      <div class="reveal">
        <p class="eyebrow">Привет, это я</p>
        <h1 id="about-title">Привет.<br>Я Алексей.<br><span class="serif">Делаю сайты.</span></h1>
        <p class="about-hero__lead">Не студия и не агентство. Один человек, который отвечает за всё: от первой буквы до кнопки «Отправить».</p>
        <div class="about-hero__signature">Алексей / Fitfuux</div>
      </div>
      <div class="about-hero__scene reveal" data-reveal-delay="1">
        <div class="about-hero__portrait">${image('studio-detail', 'Рабочий стол с эскизами и ноутбуком', { sizes: '(max-width: 820px) 100vw, 30vw' })}</div>
        <div class="about-hero__orbit">${orbitScene}</div>
      </div>
    </div>
    <div class="about-facts reveal">
      <div class="about-fact"><strong>8 000–12 000 ₽</strong><span>сайт под ключ</span></div>
      <div class="about-fact"><strong>1 человек</strong><span>на связи</span></div>
      <div class="about-fact"><strong>7–14 дней</strong><span>обычный срок</span></div>
      <div class="about-fact"><strong>0 менеджеров</strong><span>только я</span></div>
    </div>
  </div>
</section>
<section class="section section--cream">
  <div class="shell">
    <div class="about-story">
      <div class="about-story__photo reveal">
        ${image('studio-process', 'Работа над сайтом: эскизы и ноутбук', { sizes: '(max-width: 820px) 100vw, 40vw' })}
        <span class="about-story__caption">Эскизы → макет → код → запуск</span>
      </div>
      <div class="about-story__text reveal" data-reveal-delay="1">
        <p class="eyebrow">Почему сайты</p>
        <h2>Мне нравится, когда всё понятно.</h2>
        <p>Сайт — это как хорошая вывеска. Только она не просто висит, а разговаривает с человеком. И может ответить на вопрос до того, как вы возьмёте телефон.</p>
        <p>Мне нравится делать так, чтобы человек зашёл, понял, что вы предлагаете, и написал. Без «позвоните, чтобы узнать подробности» и спрятанных цен.</p>
        <p>Я не беру много проектов сразу. Пока делаю ваш сайт — вы на связи со мной, а не с менеджером по почте.</p>
        <div class="about-story__quote">«Хороший сайт не кричит. Он просто объясняет так, что хочется написать».</div>
      </div>
    </div>
  </div>
</section>
<section class="section">
  <div class="shell">
    <div class="section-head reveal">
      <div><p class="eyebrow">Во что я верю</p><h2>Три простые <span class="serif">вещи.</span></h2></div>
      <p class="section-head__aside">Никаких манифестов на сто пунктов. Только то, что важно, когда я берусь за работу.</p>
    </div>
    <div class="values reveal-group">
      <div class="value-card"><span class="value-card__num">01</span><div><h3>Говорю как человек</h3><p style="margin-top:10px">Без умных слов и тумана. На сайте и в переписке. Если что-то непонятно — объясняю другими словами.</p></div></div>
      <div class="value-card"><span class="value-card__num">02</span><div><h3>Не исчезаю</h3><p style="margin-top:10px">Пишу, показываю, предупреждаю, если что-то идёт не по плану. Вам не надо вылавливать меня по чатам.</p></div></div>
      <div class="value-card"><span class="value-card__num">03</span><div><h3>Сдаю работу</h3><p style="margin-top:10px">С сайтом можно работать, а не только смотреть на макет. Проверяю всё до запуска и передаю доступы.</p></div></div>
    </div>
  </div>
</section>
<section class="section section--dark" id="process">
  <div class="shell">
    <div class="section-head reveal">
      <div><p class="eyebrow eyebrow--light">Как я работаю</p><h2>Спокойно. <span class="serif">По шагам.</span></h2></div>
      <p class="section-head__aside">Вам не нужно разбираться в дизайне, коде и том, где живёт сайт. Просто расскажите, что нужно людям, которые к вам приходят.</p>
    </div>
    <div class="steps reveal-group">
      <div class="step"><div class="step__top"><span>01 / РАЗГОВОР</span><span class="dot"></span></div><h3>Сначала слушаю</h3><p>Спрашиваю о деле, клиентах и том, что должно измениться после запуска.</p></div>
      <div class="step"><div class="step__top"><span>02 / СМЫСЛ</span><span class="dot"></span></div><h3>Собираю структуру</h3><p>Показываю, из каких блоков будет сайт. Согласуем, прежде чем я открою редактор.</p></div>
      <div class="step"><div class="step__top"><span>03 / ВИД</span><span class="dot"></span></div><h3>Рисую и пишу</h3><p>Тексты и дизайн делаю вместе. Так получается цельная история, а не набор красивых карточек.</p></div>
      <div class="step"><div class="step__top"><span>04 / ЗАПУСК</span><span class="dot"></span></div><h3>Проверяю и отдаю</h3><p>Телефон, компьютер, ссылки, кнопки, скорость. Всё работает — передаю доступы.</p></div>
    </div>
  </div>
</section>
<section class="section section--cream">
  <div class="shell">
    <div class="included">
      <div class="reveal"><p class="eyebrow">Честно</p><h2 style="font-size:clamp(36px,4.7vw,65px);max-width:11ch">Что я <span class="serif">не делаю.</span></h2><p class="lead" style="margin-top:18px;font-size:14px">Чтобы не было недопонимания с самого начала.</p></div>
      <div class="included__list reveal-group">
        <div class="included__item">Не продаю «успешный успех»</div>
        <div class="included__item">Не скрываю цену</div>
        <div class="included__item">Не пропадаю на недели</div>
        <div class="included__item">Не беру проект, который не смогу сделать</div>
      </div>
    </div>
  </div>
</section>
${ctaBand({ eyebrow: 'Познакомились', title: 'Теперь <span class="serif">о вашем.</span>', text: 'Расскажите о задаче в двух словах. Я отвечу и скажу, смогу ли помочь.' })}
`;
  return page({
    file: 'about.html',
    title: 'Обо мне — веб-дизайнер Алексей, FITFUUX',
    description: 'Привет, я Алексей. Делаю сайты под ключ сам, без студии и менеджеров. Простой язык, понятная цена и работа, за которую не стыдно.',
    pathName: '/about.html',
    active: 'about',
    bodyClass: 'page page-about',
    theme: 'main',
    main,
    og: 'about',
    preloadPhoto: 'studio-process',
    breadcrumb: [['Главная', '/'], ['Обо мне', '/about.html']],
  });
}

function pagePricing() {
  const allIncluded = ['Проверка на телефоне и компьютере', 'Правки до запуска', 'Понятные тексты', 'Кнопки и формы', 'Проверка ссылок', 'Помощь с запуском', 'Передача доступов', 'Без доплат за базовое'];
  const faq = [
    ['Можно уложиться в 8 000 ₽?', 'Да, если нужна одна страница и понятная задача. Если блоков больше или нужна 3D-модель, лучше подойдёт вариант за 12 000 ₽.'],
    ['Цена действительно не изменится?', 'Да. Я называю точную сумму до старта. Если вы хотите добавить что-то новое по ходу, сначала обсудим, как это повлияет на цену и срок.'],
    ['Что за вариант за 2 000 ₽?', 'Это небольшая доработка, если сайт уже есть. Например, поправить мобильную версию, кнопку, форму или собрать один новый блок.'],
    ['Нужна предоплата?', 'Условия оплаты фиксируем в начале. Работаю по СБП, получатель — Алексей.'],
    ['А если мне не понравится?', 'До запуска мы всё поправим. Я не запускаю сайт, который не нравится ни вам, ни мне.'],
  ];
  const main = `
<section class="pricing-hero" aria-labelledby="pricing-title">
  <div class="shell">
    <div class="pricing-hero__grid">
      <div class="reveal">
        <p class="eyebrow eyebrow--light">Цены</p>
        <h1 id="pricing-title">Сколько стоит сайт.<br><span class="serif">Без звёздочек.</span></h1>
        <p class="pricing-hero__lead">Три понятных варианта. Называю точную цену до старта. В процессе она не меняется — сюрпризов не будет.</p>
        <div class="page-hero__meta"><span>8 000 ₽</span><span class="dot"></span><span>12 000 ₽</span><span class="dot"></span><span>2 000 ₽</span></div>
      </div>
      <div class="pricing-hero__visual reveal" data-reveal-delay="1">
        <div class="scene-stage">${coinsScene}</div>
      </div>
    </div>
  </div>
</section>
<section class="pricing-section section--dark" id="plans">
  <div class="shell">
    <div class="pricing-grid reveal-group">
      ${planCard({
        label: 'Старт', price: '8 000', title: 'Одностраничник', desc: 'Если нужно просто и понятно рассказать об услуге и начать получать сообщения.',
        features: ['1 страница до 4 блоков', 'Дизайн и тексты', 'Мобильная версия', 'Кнопки и форма', 'Запуск', 'Правки до запуска'],
        href: 'contacts.html', btn: 'Хочу такой',
      })}
      ${planCard({
        label: 'Под ключ', price: '12 000', title: 'Полный лендинг', desc: 'Для тех, кому нужен сайт с характером, 3D и продуманным путём до заявки.',
        features: ['До 8 блоков', 'Уникальный дизайн и тексты', 'Своя 3D-модель', 'Анимации и глубина', 'Заявки и оплата', 'Настройка для поиска и статистика', 'Проверки и запуск', 'Правки до запуска'],
        featured: true, href: 'contacts.html', btn: 'Хочу такой',
      })}
      ${planCard({
        label: 'Доработка', price: '2 000', title: 'Поправить сайт', desc: 'Когда сайт уже есть, но что-то мешает: кнопка не работает, на телефоне съезжает, текст непонятный.',
        features: ['Один блок или пачка правок', 'Исправления на телефоне', 'Кнопки и формы', 'Тексты', 'Проверка после'],
        href: 'contacts.html', btn: 'Обсудить',
      })}
    </div>
    <div class="plans-note"><span>Первый разговор ни к чему не обязывает. Наличные не нужны — работаем по СБП.</span><a class="text-link" href="#payment">Как оплатить ${icon('arrowDown')}</a></div>
  </div>
  <div class="shell">
    <div class="pricing-details">
      <div class="reveal"><p class="eyebrow eyebrow--light">Входит во все варианты</p><h2>Без мелкого шрифта.</h2></div>
      <div class="reveal" data-reveal-delay="1">
        <p style="margin-bottom:17px">Эти вещи не «за отдельную плату». Они уже внутри, потому что без них нормального сайта не получится.</p>
        <div class="included__list" style="border-top-color:var(--line-dark)">${allIncluded.map((item) => `<div class="included__item" style="border-bottom-color:var(--line-dark);color:var(--mute-dark)">${item}</div>`).join('')}</div>
      </div>
    </div>
  </div>
</section>
<section class="section section--cream" id="payment">
  <div class="shell">
    <div class="payment">
      <div class="reveal">
        <p class="eyebrow">Оплата</p>
        <h2 style="font-size:clamp(36px,4.8vw,64px);max-width:10ch">Просто <span class="serif">и прозрачно.</span></h2>
        <p class="lead" style="margin-top:18px;font-size:14px">Сначала обсуждаем задачу и фиксируем цену. Потом вы переводите оплату по СБП. Условия и сроки записываю в переписке, чтобы всё было перед глазами.</p>
        <div style="margin-top:25px"><a class="btn btn--dark" href="contacts.html">Обсудить проект ${icon('arrowUpRight')}</a></div>
      </div>
      <div class="payment__box reveal" data-reveal-delay="1">
        <p class="eyebrow">Перевод по СБП</p>
        <div class="payment__recipient">Алексей <span>получатель</span></div>
        <div class="payment__details"><span>Telegram для связи: ${TELEGRAM_LABEL}</span><span>Телефон: ${PHONE}</span></div>
        <p class="small" style="margin-top:19px;color:var(--mute-light)">После перевода пришлите скриншот в Telegram — сразу приступим. Никаких скрытых комиссий и дополнительных счетов.</p>
      </div>
    </div>
  </div>
</section>
<section class="section">
  <div class="shell--narrow" style="width:min(100%,1000px);margin-inline:auto;padding-inline:var(--gutter)">
    <div class="section-head--center reveal"><p class="eyebrow" style="justify-content:center">Вопросы о цене</p><h2 style="max-width:12ch;margin-inline:auto">Чтобы всё было ясно.</h2></div>
    <div class="faq reveal" style="margin-top:12px" id="faq">
      ${faq.map(([q, a]) => `<details class="faq__item"><summary>${q}</summary><div class="faq__answer">${a}</div></details>`).join('')}
    </div>
  </div>
</section>
${ctaBand({ eyebrow: 'Цена понятна?', title: 'Тогда <span class="serif">за дело.</span>', text: 'Напишите, какой вариант ближе. Я задам пару вопросов и назову точную стоимость.' })}
`;
  return page({
    file: 'pricing.html',
    title: 'Цены на сайты — 8 000, 12 000 и 2 000 ₽ | FITFUUX',
    description: 'Сколько стоит сайт: одностраничник от 8 000 ₽, лендинг под ключ за 12 000 ₽, доработка за 2 000 ₽. Цена фиксируется до старта, правки до запуска.',
    pathName: '/pricing.html',
    active: 'pricing',
    bodyClass: 'page page-pricing',
    theme: 'main',
    main,
    og: 'pricing',
    preloadPhoto: 'brand-cube',
    faq: faq.map(([q, a]) => ({ q, a })),
    breadcrumb: [['Главная', '/'], ['Цены', '/pricing.html']],
  });
}

function pageContacts() {
  const main = `
<section class="contacts-hero" aria-labelledby="contacts-title">
  <div class="shell">
    <div class="contacts-hero__grid">
      <div class="reveal">
        <p class="eyebrow">Контакты</p>
        <h1 id="contacts-title">Напишите.<br><span class="serif">Обсудим.</span></h1>
        <p class="contacts-hero__lead">Расскажите, что нужно. Я задам пару вопросов и честно скажу: смогу помочь или нет. Первый разговор ни к чему не обязывает.</p>
        <div class="page-hero__meta"><span>Отвечаю лично</span><span class="dot"></span><span>${TELEGRAM_LABEL}</span><span class="dot"></span><span>${PHONE}</span></div>
      </div>
      <div class="contacts-hero__scene reveal" data-reveal-delay="1"><div class="stage-card contacts-stage">${planeScene}</div></div>
    </div>
  </div>
</section>
<section class="section section--cream" id="contact">
  <div class="shell">
    <div class="contacts-layout">
      <div class="reveal">
        <p class="eyebrow">Напрямую</p>
        <h2 style="font-size:clamp(34px,4.4vw,58px);max-width:9ch">Без форм <span class="serif">и ожидания.</span></h2>
        <p class="lead" style="margin-top:16px;font-size:14px">Можно написать в Telegram или позвонить. Если удобнее — соберите сообщение в форме справа.</p>
        <div class="contact-direct" style="margin-top:27px">
          <div class="contact-direct__list">
            <a class="contact-link" href="${TELEGRAM}" target="_blank" rel="noopener noreferrer">
              <span><span class="contact-link__label">Telegram</span><span class="contact-link__value">${TELEGRAM_LABEL}</span></span>
              <span class="contact-link__arrow">${icon('arrowUpRight')}</span>
            </a>
            <a class="contact-link" href="${PHONE_HREF}">
              <span><span class="contact-link__label">Телефон</span><span class="contact-link__value">${PHONE}</span></span>
              <span class="contact-link__arrow">${icon('phone')}</span>
            </a>
            <div class="contact-link">
              <span><span class="contact-link__label">СБП</span><span class="contact-link__value">Получатель Алексей</span></span>
              <button class="copy-button" type="button" data-copy="Алексей">Скопировать</button>
            </div>
          </div>
          <p class="contact-note">Обычно отвечаю в течение дня. Если пишете вечером — отвечу утром. <strong>Первый разговор ни к чему не обязывает.</strong></p>
        </div>
      </div>
      <div class="reveal" data-reveal-delay="1">
        <form class="contact-form" data-contact-form action="https://t.me/Fitfuux" method="get">
          <div class="contact-form__head">
            <div><p class="eyebrow" style="color:rgba(244,241,234,.46)">Коротко о задаче</p><h2>Соберём сообщение?</h2></div>
            <span>Бесплатно</span>
          </div>
          <div class="form-grid">
            <div class="field"><label for="contact-name">Как вас зовут</label><input id="contact-name" name="name" type="text" placeholder="Имя" autocomplete="name" required></div>
            <div class="field"><label for="contact-contact">Куда написать</label><input id="contact-contact" name="contact" type="text" placeholder="Telegram или телефон" autocomplete="tel" required></div>
            <div class="field field--full"><label for="contact-task">Что нужно сделать</label><textarea id="contact-task" name="task" placeholder="Например: сайт для кофейни. Нужен лендинг с меню и кнопкой «Забронировать»."></textarea></div>
            <div class="field field--full"><label for="contact-budget">Какой вариант ближе</label>
              <select id="contact-budget" name="budget">
                <option value="">Пока не знаю</option>
                <option>Старт — 8 000 ₽</option>
                <option>Под ключ — 12 000 ₽</option>
                <option>Доработка — 2 000 ₽</option>
              </select>
            </div>
          </div>
          <div class="form-foot">
            <p>Кнопка скопирует текст и откроет Telegram. Ничего не отправится без вас.</p>
            <button class="btn btn--light" type="submit">Собрать сообщение ${icon('arrowUpRight')}</button>
          </div>
          <div class="form-status" data-form-status hidden></div>
        </form>
      </div>
    </div>
  </div>
</section>
<section class="section section--paper section--line">
  <div class="shell">
    <div class="section-head reveal">
      <div><p class="eyebrow">С чего начать</p><h2>Три вещи, <span class="serif">и хватит.</span></h2></div>
      <p class="section-head__aside">Не нужен готовый список вопросов. Достаточно пары предложений — остальное спрошу сам.</p>
    </div>
    <div class="values reveal-group">
      <div class="value-card"><span class="value-card__num">01 / ЧТО</span><div><h3>Что вы делаете</h3><p style="margin-top:10px">Кофейня, ремонт, курсы, косметика — в двух словах. Можно просто ссылку на соцсети.</p></div></div>
      <div class="value-card"><span class="value-card__num">02 / КОМУ</span><div><h3>Кому это нужно</h3><p style="margin-top:10px">Кто ваш клиент и что он должен сделать на сайте: написать, записаться, купить.</p></div></div>
      <div class="value-card"><span class="value-card__num">03 / КОГДА</span><div><h3>Когда нужно</h3><p style="margin-top:10px">Если есть дата запуска — скажите. Если нет — предложу спокойный срок.</p></div></div>
    </div>
  </div>
</section>
<section class="section section--dark">
  <div class="shell">
    <div class="included">
      <div class="reveal"><p class="eyebrow eyebrow--light">Оплата</p><h2 style="font-size:clamp(36px,4.8vw,65px);max-width:10ch">СБП. <span class="serif">Алексей.</span></h2><p class="lead" style="margin-top:18px;font-size:14px">Цену фиксируем до старта. После согласования переводите оплату по СБП, получатель — Алексей. Условия и сроки остаются в переписке.</p></div>
      <div class="payment__box reveal" data-reveal-delay="1" style="background:var(--ink-2);color:var(--paper);border-color:var(--line-dark)">
        <p class="eyebrow eyebrow--light">Реквизиты для перевода</p>
        <div class="payment__recipient">Алексей <span style="color:var(--mute-dark)">СБП</span></div>
        <div class="payment__details" style="border-color:var(--line-dark);color:var(--mute-dark)"><span>Телефон для связи: ${PHONE}</span><span>Telegram: ${TELEGRAM_LABEL}</span></div>
        <p class="small" style="margin-top:19px;color:var(--mute-dark)">После перевода просто напишите в Telegram. Я сразу возьмусь за работу.</p>
      </div>
    </div>
  </div>
</section>
`;
  return page({
    file: 'contacts.html',
    title: 'Контакты FITFUUX — Telegram, телефон и СБП',
    description: 'Связаться с Алексеем из FITFUUX: Telegram @Fitfuux, телефон +7 995 258-57-87. СБП — получатель Алексей. Первый разговор ни к чему не обязывает.',
    pathName: '/contacts.html',
    active: 'contacts',
    bodyClass: 'page page-contacts',
    theme: 'main',
    main,
    og: 'contacts',
    preloadPhoto: 'brand-cube',
    breadcrumb: [['Главная', '/'], ['Контакты', '/contacts.html']],
  });
}

export const MAIN_PAGES = {
  home: pageHome,
  services: pageServices,
  portfolio: pagePortfolio,
  about: pageAbout,
  pricing: pagePricing,
  contacts: pageContacts,
};
