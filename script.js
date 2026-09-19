const faqButtons = document.querySelectorAll('.faq-item');

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.classList.toggle('open');
    button.querySelector('span:last-child').textContent = isOpen ? '−' : '+';
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.section-nav a')];

const updateActiveSection = () => {
  const current = sections.reduce((visibleSection, section) => {
    if (section.getBoundingClientRect().top <= 130) return section;
    return visibleSection;
  }, sections[0]);

  navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${current.id}`));
};

window.addEventListener('scroll', updateActiveSection, { passive: true });
updateActiveSection();

const translations = {
  en: {
    '.utility-bar span': 'Personal',
    '.hero .eyebrow': 'INTRODUCING ENO VOZ',
    '.hero h1': 'Hi, I’m Eno Voz',
    '.hero-lede': 'Your trusted Capital One voice assistant, looking out for you and your money.',
    '.button-light': 'Meet Eno Voz',
    '.section-nav a:nth-child(1)': 'Meet Eno Voz',
    '.section-nav a:nth-child(2)': 'How it works',
    '.section-nav a:nth-child(3)': 'Built with ¡HOLA!',
    '.intro .eyebrow': 'ENO IS LOOKING OUT FOR YOU',
    '.intro h2': 'A voice you can trust, inside the app.',
    '.intro-copy': 'Eno Voz turns a suspicious transaction into a secure, human-feeling conversation. The call starts from a verified Capital One notification, so customers never have to wonder whether a voice on the other end is real.',
    '.feature-blue .eyebrow': 'AUTHENTICATED VOICE',
    '.feature-blue h2': 'Trust you can hear.',
    '.feature-blue .feature-copy p:not(.eyebrow)': 'Voice phishing is rising. Eno Voz never calls from a random number. A push notification opens an authenticated call inside the Capital One app, proving the conversation is legitimate.',
    '.feature-blue .text-link': 'See how it stays secure',
    '.feature-pale .eyebrow': 'FOR EVERY EXECUTIVE',
    '.feature-pale h2': 'From cyber risk to business impact.',
    '.feature-pale .feature-copy p:not(.eyebrow)': 'Executives can ask Eno Voz plain-language questions about fraud defenses. The same engine that speaks naturally to customers translates technical signals into dollars saved, threats stopped and trust earned.',
    '.feature-pale .text-link': 'Explore the executive view',
    '.feature-yellow .eyebrow': 'BUILT WITH ¡HOLA!',
    '.feature-yellow h2': 'Culture makes the voice human.',
    '.feature-yellow .feature-copy p:not(.eyebrow)': 'Members of Capital One’s ¡HOLA! employee resource group train the model across dialects and lead reverse-mentoring workshops that help executives understand the technology in plain language.',
    '.feature-yellow .text-link': 'Meet the people behind Eno Voz',
    '.everywhere .eyebrow': 'ONE ENGINE. TWO AUDIENCES.',
    '.everywhere h2': 'Security that speaks human.',
    '.stories blockquote': 'Eno Voz gives me the confidence to answer a suspicious call without wondering if it’s a scam.',
    '.stories .quote-author': 'A future built on verified conversations',
    '.stories .button-dark': 'See the security model',
    '.related .eyebrow': 'GO FURTHER WITH ENO VOZ',
    '.related h2': 'A safer voice system, explained simply.',
    '.faq .eyebrow': 'ANSWERS TO COMMON QUESTIONS',
    '.faq h2': 'Questions? I’ve got you.',
    '.chat-message': 'Hola, we blocked a $500 charge in Miami. Was this you?',
    '.call-identity': 'Eno • Capital One assistant',
    '.notification-card h4': 'Suspicious charge blocked',
    '.notification-card p': 'Tap here to speak securely with Eno Voz.'
  },
  es: {
    '.utility-bar span': 'Personal',
    '.hero .eyebrow': 'PRESENTAMOS ENO VOZ',
    '.hero h1': 'Hola, soy Eno Voz',
    '.hero-lede': 'Tu asistente de voz de Capital One, cuidando de ti y de tu dinero.',
    '.button-light': 'Conoce Eno Voz',
    '.section-nav a:nth-child(1)': 'Conoce Eno Voz',
    '.section-nav a:nth-child(2)': 'Cómo funciona',
    '.section-nav a:nth-child(3)': 'Creado con ¡HOLA!',
    '.intro .eyebrow': 'ENO TE ACOMPAÑA',
    '.intro h2': 'Una voz en la que puedes confiar, dentro de la app.',
    '.intro-copy': 'Eno Voz convierte una transacción sospechosa en una conversación segura y humana. La llamada comienza con una notificación verificada de Capital One, para que nunca tengas que dudar de quién está al otro lado.',
    '.feature-blue .eyebrow': 'VOZ AUTENTICADA',
    '.feature-blue h2': 'Confianza que puedes escuchar.',
    '.feature-blue .feature-copy p:not(.eyebrow)': 'El fraude por voz está creciendo. Eno Voz nunca llama desde un número desconocido. Una notificación abre una llamada autenticada dentro de la app de Capital One y confirma que la conversación es legítima.',
    '.feature-blue .text-link': 'Mira cómo te protege',
    '.feature-pale .eyebrow': 'PARA CADA EJECUTIVO',
    '.feature-pale h2': 'Del riesgo digital al impacto del negocio.',
    '.feature-pale .feature-copy p:not(.eyebrow)': 'Los ejecutivos pueden hacer preguntas sencillas sobre la protección contra el fraude. El mismo motor traduce las señales técnicas en dinero ahorrado, amenazas detenidas y confianza ganada.',
    '.feature-pale .text-link': 'Explora la vista ejecutiva',
    '.feature-yellow .eyebrow': 'CREADO CON ¡HOLA!',
    '.feature-yellow h2': 'La cultura hace humana a la voz.',
    '.feature-yellow .feature-copy p:not(.eyebrow)': 'Los miembros del grupo ¡HOLA! de Capital One entrenan el modelo con distintos dialectos y ayudan a los ejecutivos a entender la tecnología con palabras sencillas.',
    '.feature-yellow .text-link': 'Conoce al equipo detrás de Eno Voz',
    '.everywhere .eyebrow': 'UN MOTOR. DOS AUDIENCIAS.',
    '.everywhere h2': 'Seguridad que habla claro.',
    '.stories blockquote': 'Eno Voz me da la confianza para responder una llamada sospechosa sin preguntarme si es una estafa.',
    '.stories .quote-author': 'Un futuro basado en conversaciones verificadas',
    '.stories .button-dark': 'Ver el modelo de seguridad',
    '.related .eyebrow': 'CONOCE MÁS SOBRE ENO VOZ',
    '.related h2': 'Un sistema de voz más seguro, explicado con claridad.',
    '.faq .eyebrow': 'RESPUESTAS A PREGUNTAS COMUNES',
    '.faq h2': '¿Tienes preguntas? Estoy aquí.',
    '.chat-message': 'Hola, bloqueamos un cargo de $500 en Miami. ¿Fuiste tú?',
    '.call-identity': 'Eno • asistente de Capital One',
    '.notification-card h4': 'Cargo sospechoso bloqueado',
    '.notification-card p': 'Toca aquí para hablar de forma segura con Eno Voz.'
  }
};

const languageButtons = document.querySelectorAll('.language-option');
const repeatedTranslations = {
  en: {
    questions: ['How do I know a call from Eno Voz is real?', 'Can Eno Voz speak my dialect?', 'What can executives ask Eno Voz?'],
    answers: ['Eno Voz never asks you to trust a random phone number. A push notification opens the call inside the authenticated Capital One app.', 'Bilingual teammates from the ¡HOLA! Voice Fellowship help train Eno Voz across Mexican, Puerto Rican, Colombian, and other regional dialects.', 'Leaders can ask plain-language questions about fraud performance and receive answers translated into financial and customer impact.'],
    relatedTitles: ['How authenticated calls work', 'Why voice phishing is different', 'How ¡HOLA! trains Eno Voz'],
    relatedDescriptions: ['See how a verified Capital One notification keeps a voice conversation inside the app.', 'Understand the scam pattern Eno Voz is designed to stop before it reaches you.', 'Meet the bilingual teammates helping the voice model sound more human and culturally aware.']
  },
  es: {
    questions: ['¿Cómo sé que una llamada de Eno Voz es real?', '¿Puede Eno Voz hablar mi dialecto?', '¿Qué pueden preguntarle los ejecutivos a Eno Voz?'],
    answers: ['Eno Voz nunca te pide confiar en un número desconocido. Una notificación abre la llamada dentro de la app autenticada de Capital One.', 'Los compañeros bilingües de la beca de voz ¡HOLA! ayudan a entrenar Eno Voz en dialectos mexicanos, puertorriqueños, colombianos y otros.', 'Los líderes pueden hacer preguntas sencillas sobre el fraude y recibir respuestas traducidas a impacto financiero y del cliente.'],
    relatedTitles: ['Cómo funcionan las llamadas autenticadas', 'Por qué el fraude por voz es diferente', 'Cómo ¡HOLA! entrena a Eno Voz'],
    relatedDescriptions: ['Mira cómo una notificación verificada mantiene la conversación dentro de la app.', 'Entiende el patrón de estafa que Eno Voz está diseñado para detener.', 'Conoce al equipo bilingüe que ayuda a que la voz sea más humana y culturalmente consciente.']
  }
};

const applyLanguage = (language) => {
  Object.entries(translations[language]).forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (!element) return;
    if (element.classList.contains('button')) {
      element.innerHTML = `${value} <span>→</span>`;
    } else if (element.classList.contains('text-link')) {
      element.innerHTML = `${value} <span>→</span>`;
    } else {
      element.textContent = value;
    }
  });

  document.querySelectorAll('.faq-item').forEach((button, index) => {
    button.querySelector('span:first-child').textContent = repeatedTranslations[language].questions[index];
    button.nextElementSibling.textContent = repeatedTranslations[language].answers[index];
  });
  document.querySelectorAll('.related-card').forEach((card, index) => {
    card.querySelector('h3').textContent = repeatedTranslations[language].relatedTitles[index];
    card.querySelector('p').textContent = repeatedTranslations[language].relatedDescriptions[index];
  });

  document.documentElement.lang = language;
  languageButtons.forEach((button) => button.classList.toggle('active', button.dataset.language === language));
  localStorage.setItem('eno-language', language);
};

languageButtons.forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
applyLanguage(localStorage.getItem('eno-language') || 'en');