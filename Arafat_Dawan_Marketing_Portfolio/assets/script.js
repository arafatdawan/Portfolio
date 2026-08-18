const translations={
en:{
brandRole:"DIGITAL MARKETER",navHome:"Home",navAbout:"About",navServices:"Services",navWork:"Portfolio",navExperience:"Experience",navContact:"Contact",
heroEyebrow:"HELLO, I'M",heroTitle:"Digital Marketing Specialist",heroText:"I help brands grow online through data-driven strategies, creative content, audience development and performance marketing.",heroCta:"Let's Work Together",cvBtn:"Download CV",trusted:"TRUSTED MEDIA EXPERIENCE",resultTitle:"Results<br>Driven",resultText:"Strategies that deliver <em>real growth.</em>",
whatIDo:"WHAT I DO",servicesTitle:"Digital Marketing<br>Solutions That <span>Work.</span>",servicesIntro:"From strategy to execution, I create digital marketing solutions that help organizations grow their audience, strengthen their brand and improve measurable results.",exploreBtn:"Explore Services",stat1:"Years of<br>Experience",stat2:"Projects<br>Completed",stat3:"Campaigns &<br>Projects",stat4:"Audience<br>Reached",
s1:"Social Media Marketing",s1p:"Build your brand and engage your audience across social platforms.",s2:"Search Engine Optimization",s2p:"Improve visibility, discoverability and organic growth.",s3:"Content Marketing",s3p:"Create content that attracts, engages and converts audiences.",s4:"Paid Advertising",s4p:"Run targeted campaigns designed around performance and ROI.",
aboutTitle:"Where media experience meets <span>digital growth.</span>",aboutText:"I am a digital marketing and media professional with 5+ years of experience in content, audience growth, social media and digital strategy. My background in leading media organizations gives me a strong understanding of what makes content travel — and how to turn attention into measurable impact.",
workTitle:"Strategy. Content. <span>Results.</span>",workIntro:"A selection of the areas where I create the most impact.",work1:"Audience Growth & Content Strategy",work1p:"Content planning, optimization, trend monitoring and platform strategy for digital audiences.",work2:"Social & Paid Campaigns",work2p:"Campaign concepts, audience targeting, creative testing and performance analysis.",work3:"Search-Driven Content",work3p:"SEO-focused titles, topics, metadata and editorial decisions informed by analytics.",
expTitle:"Experience that <span>moves</span> with the industry.",role1:"Senior Content Manager / Digital Content",role1p:"Digital content management, SEO, audience analytics, platform strategy, social media and content performance.",role2:"Content • Digital • Audience Development",role2p:"Experience working across editorial and digital environments with a focus on audience-first communication.",edu:"Master's in Film & Media",edup:"Academic background combining media, communication, storytelling and digital culture.",
contactTitle:"Have a project in mind?<br><span>Let's make it happen.</span>",contactText:"Whether you need a digital strategy, content plan, social media growth or a campaign — let's talk."
},
es:{
brandRole:"MARKETING DIGITAL",navHome:"Inicio",navAbout:"Sobre mí",navServices:"Servicios",navWork:"Portfolio",navExperience:"Experiencia",navContact:"Contacto",
heroEyebrow:"HOLA, SOY",heroTitle:"Especialista en Marketing Digital",heroText:"Ayudo a las marcas a crecer online mediante estrategias basadas en datos, contenido creativo, desarrollo de audiencias y marketing de rendimiento.",heroCta:"Trabajemos Juntos",cvBtn:"Descargar CV",trusted:"EXPERIENCIA EN MEDIOS",resultTitle:"Orientado a<br>Resultados",resultText:"Estrategias que generan <em>crecimiento real.</em>",
whatIDo:"LO QUE HAGO",servicesTitle:"Soluciones de Marketing<br>Digital que <span>Funcionan.</span>",servicesIntro:"Desde la estrategia hasta la ejecución, creo soluciones de marketing digital que ayudan a las organizaciones a crecer, fortalecer su marca y mejorar sus resultados.",exploreBtn:"Ver Servicios",stat1:"Años de<br>Experiencia",stat2:"Proyectos<br>Completados",stat3:"Campañas y<br>Proyectos",stat4:"Audiencia<br>Alcanzada",
s1:"Marketing en Redes Sociales",s1p:"Construye tu marca y conecta con tu audiencia en las plataformas sociales.",s2:"Optimización SEO",s2p:"Mejora la visibilidad, el descubrimiento y el crecimiento orgánico.",s3:"Marketing de Contenidos",s3p:"Crea contenido que atrae, conecta y convierte audiencias.",s4:"Publicidad Digital",s4p:"Campañas segmentadas enfocadas en rendimiento y ROI.",
aboutTitle:"Donde la experiencia en medios se une al <span>crecimiento digital.</span>",aboutText:"Soy profesional de marketing digital y medios con más de 5 años de experiencia en contenidos, crecimiento de audiencias, redes sociales y estrategia digital. Mi experiencia en organizaciones de medios me permite entender qué hace que un contenido llegue a la audiencia y cómo convertir esa atención en impacto medible.",
workTitle:"Estrategia. Contenido. <span>Resultados.</span>",workIntro:"Una selección de las áreas donde genero mayor impacto.",work1:"Crecimiento de Audiencia y Estrategia de Contenidos",work1p:"Planificación, optimización, seguimiento de tendencias y estrategia de plataformas digitales.",work2:"Campañas Sociales y de Pago",work2p:"Conceptos de campaña, segmentación, pruebas creativas y análisis de rendimiento.",work3:"Contenido Impulsado por SEO",work3p:"Títulos, temas, metadatos y decisiones editoriales basadas en analítica.",
expTitle:"Experiencia que <span>evoluciona</span> con la industria.",role1:"Senior Content Manager / Contenido Digital",role1p:"Gestión de contenido digital, SEO, analítica de audiencias, estrategia de plataformas y redes sociales.",role2:"Contenido • Digital • Desarrollo de Audiencias",role2p:"Experiencia en entornos editoriales y digitales con enfoque en comunicación centrada en la audiencia.",edu:"Máster en Cine y Medios",edup:"Formación académica que combina medios, comunicación, narrativa y cultura digital.",
contactTitle:"¿Tienes un proyecto en mente?<br><span>Hagámoslo realidad.</span>",contactText:"Si necesitas estrategia digital, contenido, crecimiento en redes o una campaña, hablemos."
}};
let lang=localStorage.getItem("ad-lang")||"en";
function applyLang(){
document.documentElement.lang=lang;
document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(translations[lang][k]!==undefined)el.innerHTML=translations[lang][k]});
document.getElementById("langSwitch").innerHTML=lang==="en"?"<b>EN</b> / ES":"EN / <b>ES</b>";
localStorage.setItem("ad-lang",lang);
}
document.getElementById("langSwitch").addEventListener("click",()=>{lang=lang==="en"?"es":"en";applyLang()});
applyLang();

const menu=document.querySelector(".nav"),toggle=document.querySelector(".menu-toggle");
toggle.addEventListener("click",()=>menu.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const sections=document.querySelectorAll("main section[id]"), navLinks=document.querySelectorAll(".nav a");
window.addEventListener("scroll",()=>{
const h=document.documentElement.scrollHeight-innerHeight;
document.querySelector(".scroll-progress").style.width=(scrollY/h*100)+"%";
let current="";
sections.forEach(s=>{if(scrollY>=s.offsetTop-150)current=s.id});
navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
});
