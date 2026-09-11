import './style.css';

const chapters = [
  {
    number: '01',
    title: 'First steps',
    description: 'Week 1',
    article: {
      label: 'Chapter 01',
      title: 'First steps',
      intro:
        'An introduction to the three Japanese scripts, pronunciation, and extremely basic grammar.',
      sections: [
        [
          'Week 1 PowerPoint',
          `<a href="${import.meta.env.BASE_URL}pp/Japanese%20Language%20Society%20Week%201.pdf" target="_blank">Click here to view.</a>`,
        ],
        [
          'だ vs です',
          'If you attended the first meeting, you learned that \"です\" (desu) is a verb that comes at the end of sentences to mean \"is\" or \"are\".<br/><br/>Ex: 赤いです。(akai desu.) = It <b>is</b> red. です, though, is actually a polite form of the word \"だ\" (da). In fact, every verb in Japanese has a default/\"plain\" form, so the plain form of です is だ (da).<br/><br/>Ex: 赤いだ。(akai da.) = It <b>is</b> red. Same meaning, however だ is more casual and is used in informal situations. Check out some more examples:</br></br>Ex: 高いです。(takai desu.) = It is expensive (formal).</br>Ex: 犬だ。(inu da.) = It is a dog (informal).</br>Ex: 私はアコシです。(watashi wa akoshi desu.) = I am Akos (formal).</br></br>We will discuss the plain and polite forms more in depth in the next chapter!',
        ],
        [
          'Additional info: romaji',
          'Romaji is the system of writing Japanese words using the Latin alphabet. For example, the hiragana "か" is written as "ka" in romaji. It\'s useful for beginners still learning the kana.',
        ],
        [
          'Important links',
          '<a href="https://kana-quiz.tofugu.com/" target="_blank" rel="noreferrer">Tofugu\'s Learn Kana quiz.</a> Really useful for quickly memorizing the kana, dakuten, handakuten, and combination kana. And if you want to learn the stroke order for each kana, or find writing them down/mnemonics to be useful, check out the <a href="https://www.tofugu.com/japanese/learn-hiragana-book-pdf/" target="_blank" rel="noreferrer">Hiragana guide</a> and <a href="https://www.tofugu.com/japanese/learn-katakana-book-pdf/" target="_blank" rel="noreferrer">Katakana guide</a> from Tofugu.',
        ],
      ],
    },
  },
  {
    number: 'X.01',
    title: 'Useful resources',
    description: '',
    article: {
      label: 'Chapter X.01',
      title: 'Useful resources',
      intro:
        "Some resources I find really useful for learning Japanese. If there are any not listed here that you find helpful, contact us and we'll add it!",
      sections: [
        [
          'Jisho',
          '<a href="https://jisho.org/" target="_blank" rel="noreferrer">Jisho</a> is a great online dictionary for looking up words, kanji, and example sentences. If you want a mobile alternative, consider Shirabe Jisho. It\'s only available for iOS though.',
        ],
        [
          '10ten Reader',
          '<a href="https://chromewebstore.google.com/detail/10ten-japanese-reader-rik/pnmaklegiibbioifkmfkgpfnmdehdfan" target="_blank" rel="noreferrer">10ten Reader</a> is a cool browser extension that lets you view the definitions of Japanese words you encounter on any website. It\'s availabe on Chrome, Firefox, Edge, and Safari.',
        ],
        [
          'Tofugu',
          '<a href="https://www.tofugu.com/" target="_blank" rel="noreferrer">Tofugu</a> has a bunch of stuff: articles, podcasts, and videos about plenty of topics. I really like their <a href="https://www.tofugu.com/japanese/learn-hiragana-book-pdf/" target="_blank" rel="noreferrer">Hiragana guide and quiz</a> as well as their <a href="https://www.tofugu.com/japanese/learn-katakana-book-pdf/" target="_blank" rel="noreferrer">Katakana guide and quiz</a>. They also have a <a href="https://www.tofugu.com/japanese-grammar/" target="_blank" rel="noreferrer">ton of grammar guides</a> on fundamental topics.',
        ],
        [
          'Bunpro',
          '<a href="https://www.bunpro.jp/" target="_blank" rel="noreferrer">Bunpro</a> is an excellent resource for grammar. All of its lessons are sorted by JLPT level and are very well written.',
        ],
      ],
    },
  },
  {
    number: 'X.02',
    title: 'Immersion',
    description: '',
    article: {
      label: 'Chapter X.02',
      title: 'Immersion',
      intro: 'A quick guide to immersion and useful resources for it.',
      sections: [
        [
          'What is immersion?',
          'Immersion is the absorbing of media (articles, podcasts, videos, etc.) in a target language for the sake of learning. You can immerse in any difficulty, but since this is a beginner-friendly club, I\'ll mainly be recommending beginner-level resources.<br/><br/>The best way to immerse is not just reading through something and tanking what you don\'t know. Instead, you should slow down and look again at what confused you. This is how you build up knowledge and become fluent. And better yet, you can add words and grammar points you come across to an <a href="https://apps.ankiweb.net/" target="_blank" rel="noreferrer">Anki</a> deck so you can fully memorize them.<br/><br/>Below are some recommendations. ↓',
        ],
        [
          'NHK Easy News',
          '<a href="https://news.web.nhk/news/easy/" target="_blank" rel="noreferrer">NHK Easy News</a> has a bunch of simple news articles with furigana (small hiragana above kanji to show pronunciation). The articles also use a reuse a lot of basic grammar points, making it great for learning.<br/><br/>In my opinion, reading in a foreign language is the easiest form of immersion because you can take it at your own pace.',
        ],
        [
          'YouTube',
          'YouTube is self-explanatory. Find some YouTubers you like and watch their videos. However, watching videos may be hard, especially without subtitles. Here are some beginner-friendly channels that use N5-N4 grammar to get you started:<br/><br/><a href="https://www.youtube.com/@JapanesewithShun" target="_blank" rel="noreferrer">Japanese with Shun</a><br/><a href="https://www.youtube.com/@nihongoconteppei" target="_blank" rel="noreferrer">Nihongo Con Teppei</a><br/><a href="https://www.youtube.com/@kanamenaito" target="_blank" rel="noreferrer">Kaname Naito</a> (Kaname also does a lot of videos in English explaining specific nuances of the language)<br/><br/>Watching stuff is harder than reading, but easier than listening because there\'s at least some sort of visual aid.',
        ],
        [
          'Media',
          "Obvious stuff like anime, manga, shows, movies, books, video games, etc. This can be hard at first but is highly rewarding. I recommend starting with something simple or something you've already seen or played in English so you can focus on language instead of plot.",
        ],
      ],
    },
  },
];

function chapterCards() {
  return chapters
    .map(
      (chapter) => `
    <a class="chapter-card" href="#chapter-${chapter.number}" data-view="chapter-${chapter.number}">
      <span class="chapter-number">${chapter.number}</span>
      <span class="chapter-copy"><strong>${chapter.title}</strong><span>${chapter.description}</span></span>
      <span class="chapter-action" aria-hidden="true">→</span>
    </a>
  `,
    )
    .join('');
}

function homeTemplate() {
  return `
    <section class="home-page page-width">
      <h1>Japanese<br>Language Society</h1>
      <p class="home-description">Welcome to the official Japanese Language Society website!
      Here you'll find various lessons, guides, and resources to help you learn Japanese.
      </br></br>
      Each chapter contains the PowerPoint from each weekly meeting, as well as any additional info not directly covered in them.
      </br></br>
      If you have any questions or suggestions for the site, contact Akos or Raman through the WhatsApp: <a href="https://chat.whatsapp.com/CcLev2diV4EAyo1YyHR3NQ" target="_blank" rel="noreferrer">https://chat.whatsapp.com/CcLev2diV4EAyo1YyHR3NQ</a>
      </p>
    </section>
  `;
}

function indexTemplate() {
  return `
    <section class="index-page page-width">
      
      <h1>Lessons & Resources</h1>
      <div class="chapter-list">${chapterCards()}</div>
    </section>
  `;
}

function articleTemplate(chapter) {
  return `
    <article class="article-page page-width">
      <a class="back-link" href="#lessons" data-view="index">← Back to chapters</a>
      <p class="eyebrow">${chapter.article.label}</p>
      <h1>${chapter.article.title}</h1>
      <p class="article-intro">${chapter.article.intro}</p>
      ${chapter.article.sections.length ? `<div class="article-sections">${chapter.article.sections.map(([title, text]) => `<section><h2>${title}</h2><p>${text}</p></section>`).join('')}</div>` : '<p class="article-placeholder">Lessons for this chapter will be added here.</p>'}
    </article>
  `;
}

function appTemplate(view = 'home') {
  const indexView = view === 'index';
  const chapter = chapters.find((item) => `chapter-${item.number}` === view);
  return `
    <header class="site-header">
      <a class="brand" href="#home" data-view="home" aria-label="Japanese Language Society home"><span class="brand-mark">学</span><span class="brand-name">Japanese<br><strong>Language Society</strong></span></a>
      <nav class="main-nav" aria-label="Main navigation"><a href="#home" data-view="home" class="nav-link ${!indexView && !chapter ? 'active' : ''}">Home</a><a href="#lessons" data-view="index" class="nav-link ${indexView || chapter ? 'active' : ''}">Chapters</a></nav>
    </header>
    <main>${chapter ? articleTemplate(chapter) : indexView ? indexTemplate() : homeTemplate()}</main>
  `;
}

function viewFromHash() {
  if (window.location.hash === '#lessons') return 'index';
  const chapter = window.location.hash.replace('#', '');
  return chapters.some((item) => `chapter-${item.number}` === chapter)
    ? chapter
    : 'home';
}

function render(view) {
  document.querySelector('#app').innerHTML = appTemplate(view);
  document.querySelectorAll('[data-view]').forEach((link) => {
    link.addEventListener('click', () => {
      window.history.replaceState(
        {},
        '',
        `#${link.dataset.view === 'index' ? 'lessons' : link.dataset.view}`,
      );
      render(link.dataset.view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

window.addEventListener('hashchange', () => render(viewFromHash()));
render(viewFromHash());
