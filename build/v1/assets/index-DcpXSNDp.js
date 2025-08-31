(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();document.addEventListener("DOMContentLoaded",function(){console.log("Cyberpunk Portfolio loaded successfully!"),y(),p(),g(),v(),b()});function y(){const t=document.querySelector(".hamburger"),i=document.querySelector(".nav-menu"),o=document.querySelectorAll(".nav-link");t.addEventListener("click",()=>{t.classList.toggle("active"),i.classList.toggle("active")}),o.forEach(e=>{e.addEventListener("click",()=>{t.classList.remove("active"),i.classList.remove("active")})}),o.forEach(e=>{e.addEventListener("click",n=>{n.preventDefault();const s=e.getAttribute("href"),r=document.querySelector(s);if(r){const a=r.offsetTop-70;window.scrollTo({top:a,behavior:"smooth"})}})}),window.addEventListener("scroll",()=>{let e="";document.querySelectorAll("section").forEach(s=>{const r=s.offsetTop-100,a=s.clientHeight;window.pageYOffset>=r&&window.pageYOffset<r+a&&(e=s.getAttribute("id"))}),o.forEach(s=>{s.classList.remove("active"),s.getAttribute("href")===`#${e}`&&s.classList.add("active")})})}function p(){const t={threshold:.1,rootMargin:"0px 0px -50px 0px"},i=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&n.target.classList.add("visible")})},t);document.querySelectorAll(".section-title, .about-content, .skill-category, .timeline-item, .project-card, .contact-content").forEach((e,n)=>{e.style.transitionDelay=`${n*.1}s`,e.classList.contains("skill-category")||e.classList.contains("project-card")?e.classList.add("fade-in"):e.classList.contains("timeline-item")?e.classList.add("slide-in-right"):e.classList.add("fade-in"),i.observe(e)})}function g(){const t=document.querySelectorAll(".skill-progress"),i=new IntersectionObserver(o=>{o.forEach(e=>{if(e.isIntersecting){const n=e.target,s=n.getAttribute("data-width");setTimeout(()=>{n.style.width=s+"%"},200),i.unobserve(n)}})},{threshold:.5});t.forEach(o=>{i.observe(o)})}function v(){const t=document.querySelector(".hero-subtitle");if(!t)return;const i=t.textContent;t.textContent="",t.style.borderRight="2px solid var(--primary-neon)";let o=0;const e=()=>{o<i.length?(t.textContent+=i.charAt(o),o++,setTimeout(e,100)):setTimeout(()=>{t.style.borderRight="none"},1e3)};setTimeout(e,1e3)}function b(){const t=document.querySelector(".hero");if(!t)return;const i=document.createElement("canvas"),o=i.getContext("2d");i.style.position="absolute",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.pointerEvents="none",i.style.zIndex="1",t.appendChild(i);let e=[],n;function s(){i.width=t.offsetWidth,i.height=t.offsetHeight}class r{constructor(){this.x=Math.random()*i.width,this.y=Math.random()*i.height,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+1,this.opacity=Math.random()*.5+.2}update(){this.x+=this.vx,this.y+=this.vy,this.x<0&&(this.x=i.width),this.x>i.width&&(this.x=0),this.y<0&&(this.y=i.height),this.y>i.height&&(this.y=0)}draw(){o.beginPath(),o.arc(this.x,this.y,this.size,0,Math.PI*2),o.fillStyle=`rgba(0, 255, 255, ${this.opacity})`,o.fill()}}function a(){e=[];const c=Math.floor(i.width*i.height/15e3);for(let l=0;l<c;l++)e.push(new r)}function u(){o.clearRect(0,0,i.width,i.height),e.forEach(c=>{c.update(),c.draw()}),e.forEach((c,l)=>{e.slice(l+1).forEach(d=>{const h=c.x-d.x,f=c.y-d.y,m=Math.sqrt(h*h+f*f);m<100&&(o.beginPath(),o.moveTo(c.x,c.y),o.lineTo(d.x,d.y),o.strokeStyle=`rgba(0, 255, 255, ${.1*(1-m/100)})`,o.lineWidth=1,o.stroke())})}),n=requestAnimationFrame(u)}s(),a(),u(),window.addEventListener("resize",()=>{s(),a()}),window.addEventListener("beforeunload",()=>{n&&cancelAnimationFrame(n)})}function w(){const t=document.querySelector(".glitch");t&&setInterval(()=>{Math.random()>.9&&(t.style.animation="none",setTimeout(()=>{t.style.animation="glitch 2s infinite"},100))},2e3)}function x(){const t=[];document.addEventListener("mousemove",e=>{t.push({x:e.clientX,y:e.clientY,time:Date.now()}),t.length>10&&t.shift(),document.querySelectorAll(".cursor-trail").forEach(s=>{Date.now()-parseInt(s.dataset.time)>1e3&&s.remove()});const n=document.createElement("div");n.className="cursor-trail",n.dataset.time=Date.now(),n.style.cssText=`
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 4px;
            height: 4px;
            background: var(--primary-neon);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: cursorFade 1s ease-out forwards;
        `,document.body.appendChild(n)});const o=document.createElement("style");o.textContent=`
        @keyframes cursorFade {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
        }
    `,document.head.appendChild(o)}document.addEventListener("DOMContentLoaded",function(){w(),x()});function L(){window.scrollTo({top:0,behavior:"smooth"})}function E(){const t=document.createElement("button");t.innerHTML='<i class="fas fa-chevron-up"></i>',t.className="scroll-to-top",t.style.cssText=`
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--gradient-primary);
        border: none;
        border-radius: 50%;
        color: var(--bg-primary);
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-normal);
        z-index: 1000;
        box-shadow: var(--glow-primary);
    `,t.addEventListener("click",L),document.body.appendChild(t),window.addEventListener("scroll",()=>{window.pageYOffset>300?(t.style.opacity="1",t.style.visibility="visible"):(t.style.opacity="0",t.style.visibility="hidden")})}document.addEventListener("DOMContentLoaded",E);function T(t,i){let o;return function(){const e=arguments,n=this;o||(t.apply(n,e),o=!0,setTimeout(()=>o=!1,i))}}window.addEventListener("scroll",T(()=>{},16));
