import{a as u,S as g,i as f}from"./assets/vendor-b42c18af.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const y="https://pixabay.com",b="42128830-dc9c3845b3d280824a8228556";u.defaults.baseURL=y;u.defaults.params={};u.defaults.params.key=b;function L({queryValue:e,page:r=1,perPage:c}){return u.get("/api/",{params:{q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:c}})}function v(e){return e.map(({webformatURL:r,largeImageURL:c,tags:d,likes:t,views:o,comments:l,downloads:p})=>`<div class="photo-card">
     <a class="photo-card__link" href="${c}"> <img src="${r}" alt="${d}" loading="lazy" /></a>
      <div class="info">
        <p class="info-item">
          <b>Likes</b>${t}
        </p>
        <p class="info-item">
          <b>Views</b>${o}
        </p>
        <p class="info-item">
          <b>Comments</b>${l}
        </p>
        <p class="info-item">
          <b>Downloads</b>${p}
        </p>
      </div>
    </div>`).join("")}function w(e,r){r.insertAdjacentHTML("beforeend",v(e))}const i=document.querySelector(".load-more"),h="hidden";function S(){i.classList.remove(h)}function q(){i.disabled=!0,i.textContent="Loading..."}function P(){i.classList.add(h)}function $(){i.disabled=!1,i.textContent="Load more"}const a={show:S,hide:P,disable:q,enable:$},s={searchForm:document.querySelector("#search-form"),galleryContainer:document.querySelector(".gallery"),loadBtn:document.querySelector(".load-more"),cssLoading:document.querySelector(".loader-container")},n={page:1,queryValue:"",perPage:40},C=new g(".photo-card a");s.searchForm.addEventListener("submit",E);function E(e){e.preventDefault(),s.cssLoading.classList.remove("hidden"),s.galleryContainer.innerHTML="",a.hide(),n.page=1,n.queryValue=e.currentTarget.elements.searchQuery.value.trim(),m().then(r=>{if(!r)throw new Error("no data");f.info({position:"topRight",title:"Info",message:`Hooray! We found ${r.totalHits} images.`}),s.cssLoading.classList.add("hidden"),a.show(),s.loadBtn.addEventListener("click",H)}).catch(r=>console.log(r)).finally(()=>{s.searchForm.reset()})}function H(){a.disable(),n.page+=1,s.cssLoading.classList.remove("hidden"),m().then(()=>a.enable()).finally(()=>s.cssLoading.classList.add("hidden"))}function m(){return L(n).then(({data:e})=>{if(e.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again.");if(w(e.hits,s.galleryContainer),C.refresh(),e.totalHits<=n.perPage*n.page)throw f.info({position:"topRight",title:"Info",message:`Hooray! We found ${e.totalHits} images.`}),a.hide(),new Error("We're sorry, but you've reached the end of search results.");return e}).catch(e=>{f.error({position:"topRight",title:"Error",message:`${e.message}`}),a.hide()})}
//# sourceMappingURL=commonHelpers.js.map
