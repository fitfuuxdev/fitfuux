import {
  PHONE,
  PHONE_HREF,
  TELEGRAM,
  TELEGRAM_LABEL,
  caseCta,
  casePager,
  icon,
  makeImage,
  page,
  scene,
} from './site.mjs';

const P = '../';
const image = makeImage(P);
const arrow = icon('arrowUpRight');
const arrowRight = icon('arrowRight');

function caseTop({ key, logo, mark, nav, accentLabel = 'Хочу такой сайт' }) {
  return `<div class="case-shell">
  <div class="case-topline">
    <a class="case-logo" href="#top" aria-label="${logo} — к началу страницы">${mark}<span>${logo}</span></a>
    <nav class="case-nav" aria-label="Разделы этого кейса">${nav.map(([href, label]) => `<a href="${href}">${label}</a>`).join('')}</nav>
    <a class="case-topline__cta" href="${P}contacts.html">${accentLabel} ${arrow}</a>
  </div>
</div>`;
}

function moka() {
  const heroScene = scene({
    prefix: P,
    type: 'cup',
    label: 'MÓKA / 3D',
    poster: 'moka-cup',
    alt: 'Тёплая керамическая чашка кофе на блюдце. Модель можно вращать мышью или пальцем.',
    cover: true,
    priority: true,
  });
  const marqueeItems = ['Эспрессо', 'Капучино', 'Фильтр', 'Круассаны', 'Свежая обжарка', 'Москва · Покровка'];
  const marqueeSet = `<div class="case-marquee__set" aria-hidden="true">${marqueeItems.map((item) => `<span>${item}</span>`).join('')}</div>`;
  const main = `<article>
<section class="case-hero">
  ${caseTop({ logo: 'MÓKA', mark: icon('bean'), nav: [['#story', 'О нас'], ['#menu', 'Меню'], ['#visit', 'Приходите']] })}
  <div class="case-shell moka-hero__grid">
    <div class="moka-hero__copy reveal">
      <p class="case-kicker"><span class="case-kicker__tag">Кейс 01</span> кофейня · авторский проект</p>
      <h1>Утро<br>начинается<br><em>с MÓKA.</em></h1>
      <p class="case-hero__lead">Маленькая кофейня на Покровке. Варим кофе с восьми утра, печём круассаны и помним, кто какой любит.</p>
      <div class="case-actions">
        <a class="case-btn" href="#menu">Смотреть меню ${arrow}</a>
        <a class="case-btn case-btn--ghost" href="#story">Наша история</a>
      </div>
      <div class="moka-hero__hours"><span><strong>Пн–Пт</strong> 8:00–21:00</span><span><strong>Сб–Вс</strong> 9:00–22:00</span><span><strong>Москва</strong> Покровка, 12</span></div>
    </div>
    <div class="moka-hero__visual">
      <figure class="moka-hero__photo case-photo reveal" data-reveal-delay="1">
        ${image('moka-hero', 'Бариста готовит кофе в тёплом свете кофейни', { sizes: '(max-width: 900px) 100vw, 38vw', loading: 'eager', priority: true })}
        <figcaption class="case-photo__caption"><span>свежая обжарка</span><span>каждый день</span></figcaption>
      </figure>
      <div class="moka-hero__scene case-scene reveal" data-reveal-delay="2">${heroScene}</div>
      <div class="moka-hero__stamp" aria-hidden="true">
        <svg viewBox="0 0 100 100"><defs><path id="mokaCircle" d="M50,50 m-39,0 a39,39 0 1,1 78,0 a39,39 0 1,1 -78,0"/></defs><text fill="currentColor" font-size="6.4" letter-spacing="1.6" font-family="Onest, sans-serif"><textPath href="#mokaCircle">СВЕЖАЯ ОБЖАРКА · ВАРИМ С ЛЮБОВЬЮ · КАЖДЫЙ ДЕНЬ ·</textPath></text></svg>
        <span class="dot"></span>
      </div>
    </div>
  </div>
  <div class="case-marquee moka-marquee"><div class="case-marquee__track">${marqueeSet}${marqueeSet}</div></div>
</section>
<section class="case-section moka-intro" id="story">
  <div class="case-shell">
    <div class="moka-intro__grid">
      <div class="reveal">
        <p class="case-eyebrow">Наша история</p>
        <h2>Мы не учим пить кофе. <em>Мы просто варим его хорошо.</em></h2>
      </div>
      <div class="moka-intro__text reveal" data-reveal-delay="1">
        <p>Открылись, потому что самим не хватало места, где можно посидеть с ноутбуком, выпить нормальный капучино и не чувствовать себя лишним.</p>
        <p>Здесь всё просто: обжарка, молоко, вода и люди. Без сложных названий, которые надо гуглить.</p>
        <div class="moka-signature">До встречи, MÓKA</div>
        <div class="moka-tags"><span class="moka-tag">завтраки</span><span class="moka-tag">с собой</span><span class="moka-tag">можно с собакой</span><span class="moka-tag">wifi</span></div>
      </div>
    </div>
    <div class="moka-values reveal-group">
      <div class="moka-value"><span class="moka-value__num">01</span><h3>Своя обжарка</h3><p>Зёрна обжариваем каждую неделю. Не лежат в углу полгода.</p></div>
      <div class="moka-value"><span class="moka-value__num">02</span><h3>Молоко на выбор</h3><p>Обычное, безлактозное и овсяное. Вкус не страдает.</p></div>
      <div class="moka-value"><span class="moka-value__num">03</span><h3>Круассаны утром</h3><p>Печём маленькими партиями. До обеда обычно ничего не остаётся.</p></div>
    </div>
  </div>
</section>
<section class="case-section moka-menu" id="menu">
  <div class="case-shell">
    <div class="case-section-head reveal">
      <div><p class="case-eyebrow">Меню</p><h2>Что взять сегодня.</h2></div>
      <p>Классика без сюрпризов. Если не знаете, что выбрать, — спросите бариста. Он подскажет.</p>
    </div>
    <div class="moka-menu__layout">
      <div class="moka-menu__photo case-photo reveal">
        ${image('moka-pour', 'Латте-арт в чашке на деревянной стойке', { sizes: '(max-width: 900px) 100vw, 42vw' })}
        <span class="case-photo__caption" style="position:absolute"><span>латте</span><span>250 ₽</span></span>
      </div>
      <div class="reveal" data-reveal-delay="1">
        <div class="moka-menu__list">
          ${[
            ['Эспрессо', 'Двойной, плотный, без лишних слов.', '180 ₽'],
            ['Капучино', 'Мягкое молоко и ореховая обжарка.', '260 ₽'],
            ['Флэт уайт', 'Если хочется кофе побольше.', '290 ₽'],
            ['Фильтр', 'Меняется каждую неделю. Спросите, что сегодня.', '280 ₽'],
            ['Какао', 'Для тех, кто не пьёт кофе. С маршмеллоу.', '240 ₽'],
            ['Круассан', 'С маслом, миндалём или шоколадом.', '190 ₽'],
          ].map(([name, desc, price]) => `<div class="moka-menu__item"><div><h3>${name}</h3><p>${desc}</p></div><span class="moka-menu__price">${price}</span></div>`).join('')}
        </div>
        <div class="moka-menu__foot"><span>Молоко без лактозы или овсяное — без доплаты.</span><a class="case-link" href="#visit">Как нас найти ${arrowRight}</a></div>
      </div>
    </div>
  </div>
</section>
<section class="moka-quote">
  ${image('moka-vibe', '', { sizes: '100vw', className: 'moka-quote__bg' })}
  <div class="case-shell moka-quote__inner">
    <blockquote>«Хороший кофе не нуждается в громких словах».</blockquote>
    <p class="moka-quote__by"><span class="dot"></span> команда MÓKA</p>
  </div>
</section>
<section class="case-section moka-visit" id="visit">
  <div class="case-shell">
    <div class="moka-visit__grid">
      <div class="reveal">
        <p class="case-eyebrow">Приходите</p>
        <h2>Забегите <em>по пути.</em></h2>
        <p class="moka-intro__text" style="max-width:36ch;margin-top:22px;color:var(--case-muted);font-size:13px;line-height:1.65">Найти нас просто: жёлтая вывеска во дворе. Если заблудились — позвоните, выйдем встретить. С собой можно с собакой.</p>
        <div class="moka-tags"><span class="moka-tag">Москва, Покровка, 12</span><span class="moka-tag">м. Китай-город</span><span class="moka-tag">летняя веранда</span></div>
      </div>
      <div class="moka-visit__card reveal" data-reveal-delay="1">
        <div class="moka-visit__row"><span>Пн–Пт</span><b>8:00–21:00</b></div>
        <div class="moka-visit__row"><span>Сб–Вс</span><b>9:00–22:00</b></div>
        <div class="moka-visit__row"><span>Телефон</span><b>+7 495 000-00-00</b></div>
        <div class="case-actions"><a class="case-btn" href="#menu">Выбрать кофе ${arrow}</a></div>
        <p class="case-note" style="margin-top:16px">Это авторский проект. Хотите такой сайт для своей кофейни — напишите Fitfuux.</p>
      </div>
    </div>
  </div>
</section>
${caseCta({ prefix: P, accent: '#b75027' })}
${casePager(P, 'moka')}
</article>`;
  return page({
    file: 'cases/moka.html',
    title: 'MÓKA — сайт кофейни | Авторский кейс FITFUUX',
    description: 'Тёплый сайт для кофейни MÓKA: меню, история и атмосфера. Авторский проект FITFUUX с 3D-чашкой и живыми текстами. Лендинг под ключ от 8 000 ₽.',
    pathName: '/cases/moka.html',
    active: 'portfolio',
    bodyClass: 'case-page case-moka',
    theme: 'moka',
    type: 'case',
    main,
    og: 'moka',
    preloadPhoto: 'moka-hero',
    breadcrumb: [['Главная', '/'], ['Портфолио', '/portfolio.html'], ['MÓKA', '/cases/moka.html']],
  });
}

function tyaga() {
  const heroScene = scene({
    prefix: P,
    type: 'dumbbell',
    label: 'ТЯГА / 3D',
    poster: 'tyaga-hero',
    alt: 'Стальная гантель в тёмном зале. Модель можно вращать мышью или пальцем.',
    cover: true,
    priority: true,
  });
  const main = `<article>
<section class="case-hero">
  ${caseTop({ logo: 'ТЯГА', mark: icon('slash'), nav: [['#space', 'Зал'], ['#formats', 'Тренировки'], ['#first', 'Первый раз']] })}
  <div class="tyaga-hero__bg" aria-hidden="true">${image('tyaga-gym', '', { sizes: '100vw', loading: 'eager' })}</div>
  <div class="case-shell tyaga-hero__grid">
    <div class="tyaga-hero__copy reveal">
      <p class="case-kicker"><span class="case-kicker__tag">Кейс 02</span> спортзал · авторский проект</p>
      <h1>Сила<br>без<br><em>пафоса.</em></h1>
      <p class="case-hero__lead">Зал на 1 200 м², где тренер помнит вашу программу и не кричит на вас. Без очередей, зеркальных селфи и слов, которых никто не понимает.</p>
      <div class="case-actions tyaga-hero__actions"><a class="case-btn" href="#formats">Смотреть тренировки ${arrow}</a><a class="case-btn case-btn--ghost" href="#first">Первый раз здесь?</a></div>
      <div class="case-meta"><span>Красноярск · Мира, 88</span><span class="dot"></span><span>открыто с 7:00</span></div>
    </div>
    <div class="tyaga-hero__media">
      <figure class="tyaga-hero__photo case-photo reveal" data-reveal-delay="1">
        ${image('tyaga-hero', 'Гантель на полу в тёмном спортзале', { sizes: '(max-width: 900px) 100vw, 38vw', loading: 'eager', priority: true })}
        <span class="tyaga-hero__label">no excuses club</span>
      </figure>
      <div class="tyaga-hero__scene case-scene reveal" data-reveal-delay="2">${heroScene}</div>
    </div>
  </div>
  <div class="case-shell">
    <div class="tyaga-hero__strip reveal">
      <div class="tyaga-stat"><strong>1 200</strong><span>квадратных метров</span></div>
      <div class="tyaga-stat"><strong>12</strong><span>станций для силы</span></div>
      <div class="tyaga-stat"><strong>7</strong><span>дней в неделю</span></div>
    </div>
  </div>
  <div class="case-marquee tyaga-marquee"><div class="case-marquee__track">${'<div class="case-marquee__set" aria-hidden="true"><span>Становись сильнее</span><span>Здесь не кричат</span><span>Твоя программа</span><span>Сила без пафоса</span></div>'.repeat(2)}</div></div>
</section>
<section class="case-section tyaga-manifesto" id="space">
  <div class="case-shell">
    <p class="case-eyebrow reveal">Пространство</p>
    <h2 class="reveal">Здесь не надо быть готовым. <span>Здесь надо начать.</span></h2>
    <div class="tyaga-manifesto__row reveal">
      <p>Мы сделали зал, в который не страшно зайти в первый раз. Без оценок, соревнований и людей, которые пришли просто посмотреть на себя в зеркало. Хотя зеркала есть.</p>
      <div class="tyaga-manifesto__badge">${icon('dumbbell')} много железа · ноль осуждения</div>
    </div>
  </div>
</section>
<section class="case-section tyaga-formats" id="formats">
  <div class="case-shell">
    <div class="case-section-head reveal">
      <div><p class="case-eyebrow">Тренировки</p><h2>Выбери свой формат.</h2></div>
      <p>Можно приходить одному, с тренером или в небольшой группе. Везде есть план и понятная цель.</p>
    </div>
    <div class="tyaga-cards reveal-group">
      <div class="tyaga-card">
        <div class="tyaga-card__top"><span class="tyaga-card__num">01 / СИЛА</span>${icon('dumbbell')}</div>
        <div><h3>Железо</h3><p style="margin-top:12px">Приседания, тяги, жимы. Учимся делать базовые движения правильно и без боли. Программа под вашу цель.</p></div>
      </div>
      <div class="tyaga-card">
        <div class="tyaga-card__top"><span class="tyaga-card__num">02 / ДВИЖЕНИЕ</span>${icon('spark')}</div>
        <div><h3>Движение</h3><p style="margin-top:12px">Круговые тренировки без суеты. Связки на силу и выносливость, которые пригодятся не только в зале.</p></div>
      </div>
      <div class="tyaga-card">
        <div class="tyaga-card__top"><span class="tyaga-card__num">03 / ЛИЧНО</span>${icon('check')}</div>
        <div><h3>С тренером</h3><p style="margin-top:12px">Один на один. Разберём движение, подберём нагрузку и будем двигаться в вашем темпе.</p></div>
      </div>
    </div>
  </div>
</section>
<section class="case-section tyaga-gallery">
  <div class="case-shell">
    <div class="tyaga-gallery__grid reveal">
      <figure class="tyaga-gallery__item">${image('tyaga-athlete-3', 'Человек идёт по спортзалу', { sizes: '(max-width: 900px) 100vw, 28vw' })}<figcaption class="tyaga-gallery__caption"><span>зал</span><span>07:20</span></figcaption></figure>
      <figure class="tyaga-gallery__item">${image('tyaga-athlete-2', 'Тренировка со штангой', { sizes: '(max-width: 900px) 100vw, 36vw' })}<figcaption class="tyaga-gallery__caption"><span>сила</span><span>без спешки</span></figcaption></figure>
      <figure class="tyaga-gallery__item">${image('tyaga-athlete-1', 'Портрет спортсмена в тёмном свете', { sizes: '(max-width: 900px) 100vw, 28vw' })}<figcaption class="tyaga-gallery__caption"><span>свои люди</span><span>свой ритм</span></figcaption></figure>
    </div>
  </div>
</section>
<section class="case-section tyaga-first" id="first">
  <div class="case-shell">
    <div class="tyaga-first__grid">
      <div class="reveal">
        <p class="case-eyebrow" style="color:rgba(11,13,9,.55)">Первый раз</p>
        <h2>Первое занятие — <br>бесплатно.</h2>
        <p style="max-width:38ch;margin-top:20px;color:rgba(11,13,9,.6);font-size:13px;line-height:1.6">Приходите в удобной одежде. Всё остальное покажем на месте. Не нужно ничего покупать заранее.</p>
        <div class="case-actions"><a class="case-btn" href="#visit">Как нас найти ${arrow}</a></div>
        <p class="tyaga-note">Это авторский проект. Хотите такой сайт — напишите Fitfuux.</p>
      </div>
      <div class="reveal" data-reveal-delay="1">
        <ul class="tyaga-first__list">
          <li>Знакомство и лёгкая разминка</li>
          <li>Пробная программа под вашу цель</li>
          <li>Тренер рядом, без криков</li>
          <li>Чай после — обязательно</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section class="case-cta" id="visit" style="--case-accent:#d9ff45">
  <div class="case-shell case-cta__inner">
    <div><p class="case-cta__eyebrow">ТЯГА · Красноярск</p><h2>Сила начинается с одного шага. Или с двух.</h2></div>
    <div class="case-cta__side"><p>Это выдуманный зал из моего портфолио. Если вам нужен сайт с таким же характером для реального дела — напишите мне.</p><a class="btn btn--light" href="${P}contacts.html">Написать Алексею ${arrow}</a><span class="small" style="color:rgba(244,241,234,.66)">Лендинг под ключ от 8 000 ₽</span></div>
  </div>
</section>
${casePager(P, 'tyaga')}
</article>`;
  return page({
    file: 'cases/tyaga.html',
    title: 'ТЯГА — сайт спортзала | Авторский кейс FITFUUX',
    description: 'Авторский проект сайта для спортзала ТЯГА: сильный характер, чёрно-лаймовая графика и вращающаяся 3D-гантель. Работа FITFUUX.',
    pathName: '/cases/tyaga.html',
    active: 'portfolio',
    bodyClass: 'case-page case-tyaga',
    theme: 'tyaga',
    type: 'case',
    main,
    og: 'tyaga',
    preloadPhoto: 'tyaga-hero',
    breadcrumb: [['Главная', '/'], ['Портфолио', '/portfolio.html'], ['ТЯГА', '/cases/tyaga.html']],
  });
}

function sloy() {
  const heroScene = scene({
    prefix: P,
    type: 'neon',
    label: 'СЛОЙ / 3D',
    poster: 'sloy-abstract',
    alt: 'Светящаяся неоновая геометрия в тёмном пространстве. Модель можно вращать мышью или пальцем.',
    cover: true,
    priority: true,
  });
  const marquee = `<div class="case-marquee sloy-marquee"><div class="case-marquee__track">${'<div class="case-marquee__set" aria-hidden="true"><span>design( )</span><span>code( )</span><span>show( )</span><span>learn( )</span></div>'.repeat(2)}</div></div>`;
  const main = `<article>
<section class="case-hero">
  ${caseTop({ logo: 'СЛОЙ', mark: icon('layers'), nav: [['#courses', 'Курсы'], ['#how', 'Как учим'], ['#work', 'Работы']] })}
  <div class="case-shell sloy-hero__layout">
    <div class="sloy-hero__copy reveal">
      <p class="case-kicker"><span class="case-kicker__tag">Кейс 03</span> IT-школа · авторский проект</p>
      <h1>
        <span class="sloy-hero__title-line">Научись</span>
        <span class="sloy-hero__title-line">делать</span>
        <span class="sloy-hero__title-line sloy-hero__title-muted">сайты.</span>
        <span class="sloy-hero__title-line sloy-hero__title-accent">За 8 недель.</span>
      </h1>
      <p class="case-hero__lead">Школа, где ты не просто смотришь уроки, а собираешь первый настоящий сайт. С живыми разборами, обратной связью и людьми рядом.</p>
      <div class="case-actions"><a class="case-btn" href="#courses">Выбрать курс ${arrow}</a><a class="case-btn case-btn--ghost" href="#how">Как учим</a></div>
      <div class="sloy-tags"><span class="sloy-tag"><i></i>дизайн</span><span class="sloy-tag"><i></i>код</span><span class="sloy-tag"><i></i>3D</span><span class="sloy-tag"><i></i>портфолио</span></div>
    </div>
    <div class="sloy-hero__visual">
      <figure class="sloy-hero__image reveal" data-reveal-delay="1">
        ${image('sloy-hero', 'Компьютерный класс с ноутбуками в синем свете', { sizes: '(max-width: 900px) 100vw, 40vw', loading: 'eager', priority: true })}
      </figure>
      <div class="sloy-hero__scene case-scene reveal" data-reveal-delay="2">${heroScene}</div>
      <span class="sloy-float sloy-float--one"><i></i> module_01 / live</span>
      <span class="sloy-float sloy-float--two">next_start = soon</span>
    </div>
  </div>
  <div class="case-shell">
    <div class="sloy-strip reveal">
      <div class="sloy-strip__item"><b>08</b> недель</div>
      <div class="sloy-strip__item"><b>03</b> проекта</div>
      <div class="sloy-strip__item"><b>01</b> живой куратор</div>
      <div class="sloy-strip__item"><b>∞</b> поддержка</div>
    </div>
  </div>
  ${marquee}
</section>
<section class="case-section sloy-courses" id="courses">
  <div class="case-shell">
    <div class="case-section-head reveal">
      <div><p class="case-eyebrow">Курсы</p><h2>С чего начнёшь?</h2></div>
      <p>Не нужно уметь программировать заранее. Нужно просто хотеть делать и не бросать на третий урок.</p>
    </div>
    <div class="sloy-courses__grid reveal-group">
      ${[
        ['01', 'Веб-дизайн с нуля', 'Научишься придумывать структуру, собирать макет и объяснять, почему он выглядит именно так.', '8 недель · 12 уроков'],
        ['02', 'Вёрстка и код', 'Соберёшь свой макет в настоящий сайт. С анимациями, кнопками и формой заявки.', '10 недель · 16 уроков'],
        ['03', '3D и анимация', 'Добавишь на сайт объём и движение, не убив скорость телефона.', '6 недель · 9 уроков'],
      ].map(([num, title, desc, meta]) => `<article class="sloy-course">
        <div><div class="sloy-course__top"><span>course_${num}.js</span><i class="sloy-course__dot"></i></div><h3 style="margin-top:22px">${title}</h3><p>${desc}</p></div>
        <div><div class="sloy-course__foot"><span>${meta}</span>${arrow}</div></div>
      </article>`).join('')}
    </div>
  </div>
</section>
<section class="case-section sloy-how" id="how">
  <div class="case-shell">
    <div class="sloy-how__grid">
      <div class="reveal"><p class="case-eyebrow">Как учим</p><h2>Не просто смотреть. <span>Делать.</span></h2><p class="case-note" style="margin-top:20px">Короткие уроки, живой куратор и задания, которые не хочется откладывать.</p></div>
      <div class="sloy-how__list reveal-group">
        <div class="sloy-how__item"><span class="sloy-how__num">01</span><h3>Короткие уроки</h3><p>По 15–25 минут. Можно смотреть после работы и не засыпать на третьей минуте.</p></div>
        <div class="sloy-how__item"><span class="sloy-how__num">02</span><h3>Практика на своём</h3><p>Каждый урок заканчивается заданием. Собираешь не учебный, а свой первый проект.</p></div>
        <div class="sloy-how__item"><span class="sloy-how__num">03</span><h3>Разборы вживую</h3><p>Показываешь работу, получаешь понятные замечания. Без «доделай красиво».</p></div>
        <div class="sloy-how__item"><span class="sloy-how__num">04</span><h3>Портфолио на выходе</h3><p>Три проекта, которые можно показать клиенту или будущему работодателю.</p></div>
      </div>
    </div>
  </div>
</section>
<section class="case-section sloy-work" id="work">
  <div class="case-shell">
    <div class="case-section-head reveal">
      <div><p class="case-eyebrow">Работы учеников</p><h2>Первые сайты. Уже не учебные.</h2></div>
      <p>Так выглядят проекты после восьмой недели. Пусть пока не идеально — зато сделано руками.</p>
    </div>
    <div class="sloy-work__grid reveal">
      <figure class="sloy-work__main">
        ${image('sloy-class', 'Учебный класс с ноутбуками и синим неоновым светом', { sizes: '(max-width: 900px) 100vw, 56vw' })}
        <figcaption class="sloy-work__caption"><span>student_project_01</span><p>Сайт для локальной кофейни. Дизайн, тексты и вёрстка — за 2 недели.</p></figcaption>
      </figure>
      <div class="sloy-work__side">
        <div class="sloy-work__card"><span>project_02 / landing</span><div><h3>Школа танцев</h3><p>Понятное расписание, кнопка записи и ни одного стокового клише.</p></div></div>
        <div class="sloy-work__card"><span>project_03 / portfolio</span><div><h3>Фотограф</h3><p>Сдержанный сайт, где главное — фотографии. Как и должно быть.</p></div></div>
      </div>
    </div>
  </div>
</section>
<section class="case-section sloy-fit">
  <div class="case-shell">
    <div class="sloy-fit__grid">
      <div class="reveal"><p class="case-eyebrow">Кому подойдёт</p><h2>Если давно хочется, но <span style="color:var(--case-accent)">страшно начать.</span></h2></div>
      <div class="sloy-fit__list reveal" data-reveal-delay="1">
        <div class="sloy-fit__item">Новичкам без опыта</div>
        <div class="sloy-fit__item">Тем, кто устал от скучной работы</div>
        <div class="sloy-fit__item">Дизайнерам без кода</div>
        <div class="sloy-fit__item">Малому бизнесу своими руками</div>
        <div class="sloy-fit__item">Тем, кому нужен первый сайт</div>
        <div class="sloy-fit__item">Всем, кто готов делать</div>
      </div>
    </div>
  </div>
</section>
<section class="case-cta sloy-cta" style="--case-accent:#74ffe1">
  <div class="case-shell case-cta__inner">
    <div><p class="case-cta__eyebrow">СЛОЙ · IT-школа</p><h2>Первый урок — бесплатно. Первый сайт — твой.</h2></div>
    <div class="case-cta__side"><p>Это проект школы из моего портфолио. Если вам нужен сайт, который так же понятно рассказывает о вашем обучении, — напишите.</p><a class="btn btn--light" href="${P}contacts.html">Написать Алексею ${arrow}</a></div>
  </div>
</section>
${casePager(P, 'sloy')}
</article>`;
  return page({
    file: 'cases/sloy.html',
    title: 'СЛОЙ — сайт IT-школы | Авторский кейс FITFUUX',
    description: 'Авторский проект сайта для IT-школы СЛОЙ: неоновый дизайн, понятная программа и вращающаяся 3D-геометрия. Работа FITFUUX.',
    pathName: '/cases/sloy.html',
    active: 'portfolio',
    bodyClass: 'case-page case-sloy',
    theme: 'sloy',
    type: 'case',
    main,
    og: 'sloy',
    preloadPhoto: 'sloy-hero',
    breadcrumb: [['Главная', '/'], ['Портфолио', '/portfolio.html'], ['СЛОЙ', '/cases/sloy.html']],
  });
}

function sole() {
  const heroScene = scene({
    prefix: P,
    type: 'bottle',
    label: 'SOLÉ / 3D',
    poster: 'sole-detail',
    alt: 'Стеклянный флакон с сывороткой SOLÉ. Модель можно вращать мышью или пальцем.',
    cover: true,
    priority: true,
  });
  const main = `<article>
<section class="case-hero">
  ${caseTop({ logo: 'SOLÉ', mark: icon('sun'), nav: [['#about', 'О нас'], ['#ritual', 'Уход'], ['#products', 'Продукты']] })}
  <div class="case-shell sole-hero__layout">
    <div class="sole-hero__copy reveal">
      <p class="case-kicker"><span class="case-kicker__tag">Кейс 04</span> косметика · авторский проект</p>
      <h1>Кожа,<br>которой<br><em>хорошо.</em></h1>
      <p class="case-hero__lead">Уход без десяти шагов. Три средства, которые приятно использовать каждый день. Спокойно, мягко, по делу.</p>
      <div class="case-actions"><a class="case-btn" href="#products">Собрать уход ${arrow}</a><a class="case-btn case-btn--ghost" href="#about">О нас</a></div>
      <p class="sole-hero__note">Без сильных запахов. Подходит для чувствительной кожи. Не тестируем на животных — это просто правильно.</p>
    </div>
    <div class="sole-hero__visual">
      <figure class="sole-hero__arch reveal" data-reveal-delay="1">
        ${image('sole-hero', 'Флаконы с сывороткой в тёплом свете', { sizes: '(max-width: 900px) 100vw, 36vw', loading: 'eager', priority: true })}
      </figure>
      <div class="sole-hero__scene case-scene reveal" data-reveal-delay="2">${heroScene}</div>
      <span class="sole-badge"><i></i> ph 5.5 · без аромата</span>
    </div>
  </div>
  <div class="case-shell">
    <div class="sole-strip reveal"><span>мягкое очищение</span><span>ежедневная влага</span><span>защита от сухости</span><span>3 шага</span></div>
  </div>
</section>
<section class="case-section sole-intro" id="about">
  <div class="case-shell">
    <div class="sole-intro__grid">
      <div class="reveal">
        <p class="case-eyebrow">О бренде</p>
        <div class="case-section-head"><h2>Меньше лишнего. <em>Больше пользы.</em></h2></div>
      </div>
      <div class="sole-intro__aside reveal" data-reveal-delay="1">
        <p>Мы не придумываем сложные ритуалы. Просто делаем средства, которые не раздражают кожу и не занимают полку в ванной.</p>
        <ul class="sole-list"><li>мягкие масла</li><li>пантенол</li><li>витамин E</li><li>без спирта</li><li>без сильного запаха</li><li>подходит каждый день</li></ul>
        <p style="margin-top:22px">Ингредиенты объясняем по-человечески: что делает каждый и зачем он здесь.</p>
      </div>
    </div>
  </div>
</section>
<section class="case-section sole-ritual" id="ritual">
  <div class="case-shell">
    <div class="case-section-head reveal">
      <div><p class="case-eyebrow">Три шага</p><h2>Твой вечер. <em style="font-family:var(--case-display);font-style:italic;font-weight:400">Твой ритм.</em></h2></div>
      <p>Не нужно делать всё сразу. Начните с одного шага и добавьте остальные, когда захочется.</p>
    </div>
    <div class="sole-ritual__grid">
      <figure class="sole-ritual__photo reveal">
        ${image('sole-detail', 'Флакон SOLÉ крупным планом', { sizes: '(max-width: 900px) 100vw, 38vw' })}
      </figure>
      <div class="sole-steps reveal" data-reveal-delay="1">
        <div class="sole-step"><span class="sole-step__num">01</span><h3>Очистить</h3><p>Мягкий гель снимает день. Кожа остаётся спокойной, не стянутой.</p></div>
        <div class="sole-step"><span class="sole-step__num">02</span><h3>Увлажнить</h3><p>Сыворотка с пантенолом. Пара капель, лёгкими движениями, без спешки.</p></div>
        <div class="sole-step"><span class="sole-step__num">03</span><h3>Защитить</h3><p>Крем с витамином E. Утром — до солнца, вечером — после дня.</p></div>
      </div>
    </div>
  </div>
</section>
<section class="case-section sole-products" id="products">
  <div class="case-shell">
    <div class="sole-products__layout">
      <div class="sole-products__intro reveal">
        <p class="case-eyebrow">Продукты</p>
        <h2>Три баночки. <br><em style="font-style:italic;color:var(--case-accent)">И всё.</em></h2>
        <p>Никаких сывороток «на всякий случай». Только то, чем правда пользуешься.</p>
        <p class="case-note" style="margin-top:22px">Цены в рублях. Это авторский проект, а не интернет-магазин.</p>
      </div>
      <div class="sole-products__grid reveal-group">
        ${[
          ['Очищение', 'Тихий гель', 'Мягкое очищение каждый день.', '150 мл', '1 490 ₽'],
          ['Сыворотка', 'SOLÉ 03', 'Влага без липкости. Две капли утром и вечером.', '30 мл', '2 190 ₽'],
          ['Крем', 'Дневной крем', 'Защита от сухости. Лёгкий, под макияж.', '50 мл', '1 890 ₽'],
        ].map(([tag, name, desc, vol, price]) => `<article class="sole-product">
          <div class="sole-product__visual">${icon('sun')}</div>
          <div class="sole-product__body"><span>${tag} · ${vol}</span><h3>${name}</h3><p class="case-note" style="margin-top:6px">${desc}</p><div class="sole-product__foot"><span>${vol}</span><strong>${price}</strong></div></div>
        </article>`).join('')}
      </div>
    </div>
  </div>
</section>
<section class="case-section sole-quote">
  <div class="case-shell">
    <div class="sole-quote__inner reveal">
      <blockquote>«Кожа не просит идеальности. <em>Она просит заботы».</em></blockquote>
      <p>SOLÉ · уход без лишних слов</p>
    </div>
  </div>
</section>
<section class="case-cta sole-cta" style="--case-accent:#96604b">
  <div class="case-shell case-cta__inner">
    <div><p class="case-cta__eyebrow">SOLÉ · beauty concept</p><h2>Мягкий сайт для нежного бренда.</h2></div>
    <div class="case-cta__side"><p>Это авторский проект косметики из моего портфолио. Нужен такой же спокойный и дорогой сайт для вашего бренда?</p><a class="btn btn--light" href="${P}contacts.html">Написать Алексею ${arrow}</a></div>
  </div>
</section>
${casePager(P, 'sole')}
</article>`;
  return page({
    file: 'cases/sole.html',
    title: 'SOLÉ — сайт косметики | Авторский кейс FITFUUX',
    description: 'Авторский проект сайта для косметики SOLÉ: тёплая палитра, спокойные тексты и интерактивный 3D-флакон. Работа FITFUUX.',
    pathName: '/cases/sole.html',
    active: 'portfolio',
    bodyClass: 'case-page case-sole',
    theme: 'sole',
    type: 'case',
    main,
    og: 'sole',
    preloadPhoto: 'sole-hero',
    breadcrumb: [['Главная', '/'], ['Портфолио', '/portfolio.html'], ['SOLÉ', '/cases/sole.html']],
  });
}

function vecher() {
  const heroScene = scene({
    prefix: P,
    type: 'cloche',
    label: 'ВЕЧЕР / 3D',
    poster: 'vecher-dish',
    alt: 'Блюдо под стеклянной крышкой в тёплом свете. Модель можно вращать мышью или пальцем.',
    cover: true,
    priority: true,
  });
  const main = `<article>
<section class="case-hero">
  <div class="vecher-hero__bg" aria-hidden="true">${image('vecher-hero', '', { sizes: '100vw', loading: 'eager', priority: true })}</div>
  ${caseTop({ logo: 'ВЕЧЕР', mark: icon('star'), nav: [['#about', 'О нас'], ['#menu', 'Меню'], ['#visit', 'Ждём в гости']] })}
  <div class="case-shell vecher-hero__layout">
    <div class="vecher-hero__copy reveal">
      <p class="case-kicker"><span class="case-kicker__tag">Кейс 05</span> ресторан · авторский проект</p>
      <h1>Сюда<br>приходят<br><em>не спеша.</em></h1>
      <p class="case-hero__lead">Ресторан на Большой Никитской. Свечи, тихий свет и меню, которое хочется дочитать до конца. Без шума и суеты.</p>
      <div class="case-actions"><a class="case-btn" href="#menu">Смотреть меню ${arrow}</a><a class="case-btn case-btn--ghost" href="#about">Наш вечер</a></div>
      <div class="case-meta"><span>Москва · Большая Никитская, 24</span><span class="dot"></span><span>Вт–Вс · 18:00–23:30</span></div>
    </div>
    <div class="vecher-hero__visual">
      <div class="vecher-hero__scene case-scene reveal" data-reveal-delay="1">${heroScene}</div>
      <span class="vecher-hero__badge"><i></i> ужин · свечи · тишина</span>
    </div>
  </div>
  <div class="case-shell">
    <div class="vecher-hero__bottom reveal"><span><i></i> кухня открыта до 23:00</span><span>бронь за пару дней</span><span>есть веранда</span></div>
  </div>
</section>
<section class="case-section vecher-manifesto" id="about">
  <div class="case-shell">
    <div class="vecher-manifesto__grid">
      <div class="reveal">
        <p class="case-eyebrow">Наш вечер</p>
        <div class="case-section-head"><h2>Ужин — это не про скорость. <em>Это про время.</em></h2></div>
        <figure class="vecher-manifesto__photo">${image('vecher-room', 'Тёплый свет и свечи в зале ресторана', { sizes: '(max-width: 900px) 100vw, 50vw' })}</figure>
      </div>
      <div class="vecher-manifesto__aside reveal" data-reveal-delay="1" style="padding-top:12px">
        <p>Мы открылись, чтобы в городе появилось место, где можно провести два часа за одним блюдом и не почувствовать, что тебя торопят.</p>
        <p style="margin-top:16px">Здесь немного столов, много свечей и меню, которое меняется вместе с сезоном. Мы не стараемся удивить. Мы хотим, чтобы вам было хорошо.</p>
        <div style="margin-top:25px"><a class="case-link" href="#menu">Посмотреть меню ${arrowRight}</a></div>
      </div>
    </div>
  </div>
</section>
<section class="case-section vecher-menu" id="menu">
  <div class="case-shell">
    <div class="case-section-head reveal">
      <div><p class="case-eyebrow">Меню</p><h2>Сезон. Огонь. <em style="font-family:var(--case-display);font-style:italic">Просто вкусно.</em></h2></div>
      <p>Меню небольшое — так бывает, когда на кухне готовят, а не разогревают. Спросите официанта, что сегодня особенно удалось.</p>
    </div>
    <div class="vecher-menu__layout">
      <figure class="vecher-menu__photo reveal">
        ${image('vecher-dish', 'Блюдо ресторана на тёмной тарелке при свечах', { sizes: '(max-width: 900px) 100vw, 35vw' })}
      </figure>
      <div class="reveal" data-reveal-delay="1">
        <div class="vecher-menu__list">
          <div class="vecher-menu__group"><p class="vecher-menu__group-title">Начать <span>01</span></p>
            ${[
              ['Тартар из говядины', 'Каперсы, горчичный крем, хрустящий хлеб.', '690 ₽'],
              ['Тыквенный суп', 'Печёная тыква, семечки, немного копчёного масла.', '390 ₽'],
              ['Салат с грушей', 'Голубой сыр, грецкий орех, лёгкая заправка.', '540 ₽'],
            ].map(([name, desc, price]) => `<div class="vecher-menu__dish"><div><h3>${name}</h3><p>${desc}</p></div><strong>${price}</strong></div>`).join('')}
          </div>
          <div class="vecher-menu__group"><p class="vecher-menu__group-title">Главное <span>02</span></p>
            ${[
              ['Каре ягнёнка', 'Пюре из корнеплодов, розмарин, соус из красного вина.', '1 290 ₽'],
              ['Утиная грудка', 'Вишня, полба, немного апельсиновой цедры.', '890 ₽'],
              ['Ризотто с грибами', 'Лесные грибы, пармезан, тимьян. Без мяса.', '690 ₽'],
            ].map(([name, desc, price]) => `<div class="vecher-menu__dish"><div><h3>${name}</h3><p>${desc}</p></div><strong>${price}</strong></div>`).join('')}
          </div>
          <div class="vecher-menu__group"><p class="vecher-menu__group-title">Закончить <span>03</span></p>
            ${[
              ['Шоколадный фондан', 'Тёплый шоколад, солёная карамель, мороженое.', '420 ₽'],
              ['Груша в вине', 'Специи, сливочный крем, печенье.', '390 ₽'],
            ].map(([name, desc, price]) => `<div class="vecher-menu__dish"><div><h3>${name}</h3><p>${desc}</p></div><strong>${price}</strong></div>`).join('')}
          </div>
        </div>
        <p class="case-note" style="margin-top:18px">Блюда и цены — часть выдуманной истории. Ужин на двоих обычно выходит 4 000–5 000 ₽.</p>
      </div>
    </div>
  </div>
</section>
<section class="case-section vecher-chef">
  <div class="case-shell">
    <div class="vecher-chef__grid">
      <blockquote class="reveal">«Мы не стараемся удивить. <em>Мы хотим, чтобы вам было хорошо».</em></blockquote>
      <div class="vecher-chef__side reveal" data-reveal-delay="1">
        <p>У нас нет гастрономического театра. Есть продукты, огонь и люди, которые любят своё дело. Приходите ужинать.</p>
        <p class="vecher-chef__sign">шеф-повар · ВЕЧЕР</p>
      </div>
    </div>
  </div>
</section>
<section class="case-section vecher-room">
  <div class="case-shell">
    <div class="case-section-head reveal">
      <div><p class="case-eyebrow">Атмосфера</p><h2>Свет, который <em style="font-family:var(--case-display);font-style:italic">не мешает.</em></h2></div>
      <p>Приглушённый свет, тяжёлые шторы и музыка, под которую не нужно повышать голос.</p>
    </div>
    <div class="vecher-room__grid reveal">
      <figure class="vecher-room__large">${image('vecher-hero', 'Зал ресторана в тёплом свете', { sizes: '(max-width: 900px) 100vw, 55vw' })}<figcaption class="vecher-room__caption">основной зал · 18:30</figcaption></figure>
      <div class="vecher-room__side">
        <figure class="vecher-room__small">${image('vecher-dish', 'Блюдо на столе', { sizes: '(max-width: 900px) 100vw, 40vw' })}</figure>
        <div class="vecher-room__quote"><p>«Хороший вечер не нужно фотографировать. Его достаточно прожить».</p><span>ВЕЧЕР · Москва</span></div>
      </div>
    </div>
  </div>
</section>
<section class="case-section vecher-visit" id="visit">
  <div class="case-shell">
    <div class="vecher-visit__grid">
      <div class="reveal"><p class="case-eyebrow">В гости</p><h2>Будем ждать <em>вас.</em></h2></div>
      <div class="vecher-visit__card reveal" data-reveal-delay="1">
        <div class="vecher-visit__row"><span>Адрес</span><b>Москва, Большая Никитская, 24</b></div>
        <div class="vecher-visit__row"><span>Часы</span><b>Вт–Вс · 18:00–23:30</b></div>
        <div class="vecher-visit__row"><span>Телефон</span><b>+7 495 000-00-00</b></div>
        <div class="case-actions"><a class="case-btn" href="#menu">Посмотреть меню ${arrow}</a></div>
        <p class="case-note" style="margin-top:16px">Это авторский проект ресторана. Хотите такой сайт — напишите Fitfuux.</p>
      </div>
    </div>
  </div>
</section>
<section class="case-cta vecher-cta" style="--case-accent:#c79a61">
  <div class="case-shell case-cta__inner">
    <div><p class="case-cta__eyebrow">ВЕЧЕР · restaurant concept</p><h2>Ужин начинается с первого экрана.</h2></div>
    <div class="case-cta__side"><p>Это авторский проект ресторана из моего портфолио. Нужен сайт с таким же настроением для вашего места?</p><a class="btn btn--light" href="${P}contacts.html">Написать Алексею ${arrow}</a></div>
  </div>
</section>
${casePager(P, 'vecher')}
</article>`;
  return page({
    file: 'cases/vecher.html',
    title: 'ВЕЧЕР — сайт ресторана | Авторский кейс FITFUUX',
    description: 'Авторский проект сайта для ресторана ВЕЧЕР: глубокий зелёный, тёплый свет, меню и объёмная 3D-модель. Работа FITFUUX для портфолио.',
    pathName: '/cases/vecher.html',
    active: 'portfolio',
    bodyClass: 'case-page case-vecher',
    theme: 'vecher',
    type: 'case',
    main,
    og: 'vecher',
    preloadPhoto: 'vecher-hero',
    breadcrumb: [['Главная', '/'], ['Портфолио', '/portfolio.html'], ['ВЕЧЕР', '/cases/vecher.html']],
  });
}

export const CASE_PAGES = {
  moka,
  tyaga,
  sloy,
  sole,
  vecher,
};
