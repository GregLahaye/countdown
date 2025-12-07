(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const u=[new Date(2025,11,25),new Date(2025,11,26)],a=[new Date(2025,11,12)];function l(t){const e=t.getDay();return e===0||e===6}function d(t){return u.some(e=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear())}function f(t){return a.some(e=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear())}function g(){const t=new Date;t.setHours(0,0,0,0);const e=new Date(2025,11,29);e.setHours(23,59,59,999);let s=0,o=new Date(t);if(t<=e)for(o.setDate(o.getDate());o<=e;)!l(o)&&!d(o)&&!f(o)&&s++,o.setDate(o.getDate()+1);return s}function i(){const t=g();document.querySelector("#countdown").textContent=t}document.querySelector("#app").innerHTML=`
  <div class="countdown-container">
    <div class="countdown-display">
      <div id="countdown" class="countdown-number">0</div>
      <div class="countdown-label">days</div>
    </div>
    <div class="target">$4M ARR</div>
  </div>
`;i();setInterval(i,36e5);
