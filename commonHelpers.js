import{S as u,i as m}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d=document.querySelector(".form"),c=document.querySelector(".gallery");document.querySelector(".gallery-box");const i=document.querySelector(".loader");document.querySelector("input");const l={key:"41919637-6a9ae3694a8b7e5cab5cbae88",q:"cat",image_type:"photo",orientation:"horizontal",safesearch:!0},p=new u(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});function f(a){return fetch(`https://pixabay.com/api/?${a}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(({hits:t})=>{if(t.length>0){const s=t.reduce((o,e)=>o+`<li class="gallery-item">
        <a href=${e.largeImageURL}>
          <img class="gallery-img" src =${e.webformatURL} alt=${e.tags}/>
        </a>
        <div class="gallery-text-box">
          <p>Likes: <span class="text-value">${e.likes}</span></p>
          <p>views: <span class="text-value">${e.views}</span></p>
          <p>comments: <span class="text-value">${e.comments}</span></p>
          <p>downloads: <span class="text-value">${e.downloads}</span></p>
      </div>
      </li>`,"");c.innerHTML=s,p.refresh()}else m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>{console.log(t.message)}).finally(()=>{i.style.display="none"})}d.addEventListener("submit",a=>{a.preventDefault(),c.innerHTML="",i.style.display="block",l.q=a.target.elements.search.value.trim();const t=new URLSearchParams(l);f(t),a.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
