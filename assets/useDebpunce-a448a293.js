import{r as o}from"./index-1cf16a4f.js";function n(e,t){const[r,u]=o.useState(e);return o.useEffect(()=>{const s=setTimeout(()=>u(e),t||500);return()=>{clearTimeout(s)}},[e,t]),r}export{n as u};
