MosPromStroy_01_update — incremental GitHub patch (2026-11-01)

Files:
- dream-home.html  -> Дом твоей мечты
- fast-buildings.html -> Быстровозводимые здания
- scanning.html    -> 3D-сканирование
- site.css         -> shared stylesheet
- site-header.js   -> shared header/footer and common navigation
- assets/*.webp    -> 7 optimized images from already available conversation files
- FILES.txt        -> source inventory

INSTALL
Copy these files into the ROOT of existing repository (merge assets/). Do not delete existing files.
Three HTML pages require site.css, site-header.js, and assets/.
Existing index.html is NOT overwritten.

SHARED MENU
Главная | Направления | Консорциум | Проекты | Обсудить проект | Контакты
The Consortium link temporarily points to join.html (already in previous site release); update it to consortium.html after that page is approved.
Other menu targets (index.html, directions.html, projects.html, contact.html) rely on existing files.
To use the identical header in existing pages later, add <div id="site-header"></div> and the site-header.js script, removing their old headers. The current patch does NOT modify existing pages.

CONTACTS
Phone tel:+79082248330; Telegram https://t.me/Sunandmoon201
'Discuss project' scrolls to a section offering direct real contact instead of a nonfunctional form.

IMAGES
All 7 images are copied/optimized from the files already present in this conversation; no new images generated.
All showcase illustrations are labeled as conceptual rather than completed works.
