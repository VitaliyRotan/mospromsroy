(function(){if(!document.querySelector('link[data-mps-header]')){const l=document.createElement('link');l.rel='stylesheet';l.href='header-design.css';l.dataset.mpsHeader='true';document.head.appendChild(l)}if(!document.querySelector('link[data-mps-blue]')){const t=document.createElement('link');t.rel='stylesheet';t.href='blue-design.css?v=30';t.dataset.mpsBlue='true';document.head.appendChild(t)}const p=document.body.dataset.page||'';const links=[['Главная','index.html','home'],['Направления','directions.html','directions'],['Консорциум','consortium.html','consortium'],['Контакты','contact.html','contact']];const specialPhones=new Set(['scanning.html','concrete.html','demolition.html','fast-buildings.html']);
const currentPage=decodeURIComponent(location.pathname.split('/').pop()||'index.html').toLowerCase();
const isKorobeinikov=specialPhones.has(currentPage);
const contactName=isKorobeinikov?'Владимир Коробейников':'Виталий Ротань';
const contactHref=isKorobeinikov?'tel:+79031010207':'https://t.me/Sunandmoon201';
const contactAction=isKorobeinikov?'Позвонить':'Написать в Telegram';
const footerContact=isKorobeinikov?'<a href="tel:+79031010207">+7 903 101-02-07</a> (Владимир Коробейников)':'<a href="https://t.me/Sunandmoon201" target="_blank" rel="noopener noreferrer">Написать в Telegram</a> (Виталий Ротань)';
const head=document.getElementById('site-header');if(head){head.innerHTML='<header class="site-nav"><div class="wrap nav-in"><a class="brand" href="index.html"><img class="brand-emblem" src="assets/mps-emblem-small.webp" alt="Эмблема МосПромСтрой" width="60" height="60" decoding="async"/><span><strong>КОНСОРЦИУМ «МОСПРОМСТРОЙ»</strong><small>Дивелопмент · ТехЗаказ · Проектирование · Строительство</small></span></a><button class="mobile-toggle" aria-controls="main-nav" aria-expanded="false" aria-label="Открыть меню">☰</button><nav class="nav-links" id="main-nav" aria-label="Основное меню">'+links.map(([t,h,k])=>'<a '+(k===p?'aria-current="page" ':'')+'href="'+h+'">'+t+'</a>').join('')+'</nav><div class="nav-actions"><a class="tiny-btn gold" href="'+contactHref+'" title="'+contactName+'">'+contactAction+'</a></div></div></header>';const b=head.querySelector('.mobile-toggle');b.addEventListener('click',()=>{const n=head.querySelector('#main-nav');const open=n.classList.toggle('open');b.setAttribute('aria-expanded',open?'true':'false')})}const f=document.getElementById('site-footer');if(f){f.innerHTML='<footer class="footer"><div class="wrap"><strong>Консорциум МосПромСтрой объединяет компетенции для реализации</strong><span>'+footerContact+'</span></div></footer>'}})();
/* MPS #41: global palette across all pages; safe to run after shared header */
(function(){if(!document.querySelector('link[data-mps-v41]')){const l=document.createElement('link');l.rel='stylesheet';l.href='palette-and-media-41.css?v=41';l.dataset.mpsV41='true';document.head.appendChild(l)}document.querySelectorAll('a').forEach(function(a){const t=(a.textContent||'').trim().toLowerCase();if((t.includes('представить компанию')||t.includes('представить проект'))&&!(a.classList.contains('mps-service'))){a.classList.add('mps41-soft')}})})();

/* Обновление №44: завершение общей раскраски CTA после загрузки шапки. */
(function(){
  const l=document.createElement('link');
  l.rel='stylesheet';
  l.href='button-colors-45.css?v=45';
  l.dataset.mpsButton44='true';
  document.head.appendChild(l);
  document.querySelectorAll('a').forEach(function(a){
    if(a.closest('.mps-service, .service-card')) return;
    const t=(a.textContent||'').replace(/\s+/g,' ').trim().toLowerCase();
    if(t.includes('представить компанию')||t.includes('представить свою компанию')||t.includes('представить проект')){
      a.classList.add('mps44-company');
    }
    if(t.includes('обсудить проект')||t.includes('обсуждению проекта')||t.includes('обсудить строительн')||t.includes('обсудить задачу компании')){
      a.classList.add('mps44-project');
    }
  });
})();
