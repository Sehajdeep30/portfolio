import{n as b,s as p}from"./scheduler.7a274a43.js";const t=[];function d(i,a=b){let o;const n=new Set;function r(e){if(p(i,e)&&(i=e,o)){const c=!t.length;for(const s of n)s[1](),t.push(s,i);if(c){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function u(e){r(e(i))}function _(e,c=b){const s=[e,c];return n.add(s),n.size===1&&(o=a(r,u)||b),e(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:u,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_4wueim)==null?void 0:f.base)??"/slick-portfolio-svelte";var l;const m=((l=globalThis.__sveltekit_4wueim)==null?void 0:l.assets)??h;export{m as a,h as b,d as w};
