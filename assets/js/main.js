const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// PROJECTS — add freely. Tags are lowercased keywords.
const projects = [
{
title: 'Retro CRT Pyramid Console',
subtitle: 'Pyramid Generator (JS 1.1)',
blurb: 'Loops, strings, DOM buttons, <pre> spacing, height slider, character input, inverted toggle — 80s/90s CRT vibe.',
href: 'https://codepen.io/Mike-MacDonagh/pen/qEOvBap',
repo: null,
tags: ['js','fcc','codepen'],
thumb: null
},
// Example HTML/CSS RWD pieces — add as many as you want
{
title: 'Personal Portfolio Webpage',
subtitle: 'Responsive Web Design (final)',
blurb: 'Pulled everything together: grid, responsive, sticky nav, glow effects.',
href: 'https://codepen.io/Mike-MacDonagh/pen/bNVOrxK',
repo: null,
tags: ['html','css','fcc','codepen'],
thumb: null
},
{
title: 'Rodney Mullen Tribute',
subtitle: 'Layout & hierarchy',
blurb: 'Strong typographic rhythm and imagery; clean content structure.',
href: 'https://codepen.io/Mike-MacDonagh/pen/JoYWqdV',
repo: null,
tags: ['html','css','design','fcc','codepen'],
thumb: null
},
{
title: "Yolked / Bear‑Mode Docs",
subtitle: 'Technical Documentation',
blurb: 'Multi-column layout, sticky sidebar, documentation structure.',
href: 'https://codepen.io/Mike-MacDonagh/pen/EaVRjgM',
repo: null,
tags: ['html','css','fcc','codepen'],
thumb: null
},
];


const grid = document.getElementById('projects');
const makeCard = (p)=>{
const el = document.createElement('article');
el.className = 'card';
el.dataset.tags = p.tags.join(' ');
el.innerHTML = `
<div class="thumb">
<div class="badges">
${p.tags.map(t=>`<span class="badge">${t}</span>`).join('')}
${p.tags.includes('js') ? '<span class="badge accent">JS</span>' : ''}
</div>
<a href="${p.href}" target="_blank" rel="noopener" aria-label="Open project"></a>
</div>
<div class="content">
<h3>${p.title}</h3>
<p><strong>${p.subtitle}</strong> — ${p.blurb}</p>
<div class="actions">
<a class="button primary" href="${p.href}" target="_blank" rel="noopener">View Project</a>
${p.repo ? `<a class="button" href="${p.repo}" target="_blank" rel="noopener">Source</a>`: ''}
</div>
</div>`;
return el;
};


function render(list){
grid.innerHTML = '';
list.forEach(p=> grid.appendChild(makeCard(p)));
}
render(projects);


// Tag filtering
const tagButtons = [...document.querySelectorAll('.filters .tag')];
let active = 'all';


tagButtons.forEach(btn=>{
btn.addEventListener('click', ()=>{
active = btn.dataset.tag;
tagButtons.forEach(b=>b.classList.toggle('is-active', b===btn));
if (active==='all') return render(projects);
const filtered = projects.filter(p=> p.tags.includes(active));
render(filtered);
});
});