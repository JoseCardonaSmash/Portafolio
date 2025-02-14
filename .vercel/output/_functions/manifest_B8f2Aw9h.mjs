import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_KvwwTNgD.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_l9_ZhUJv.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/jose-luis-cardona/Documentos/Projects/Portafolio/personal-portafolio/","cacheDir":"file:///home/jose-luis-cardona/Documentos/Projects/Portafolio/personal-portafolio/node_modules/.astro/","outDir":"file:///home/jose-luis-cardona/Documentos/Projects/Portafolio/personal-portafolio/dist/","srcDir":"file:///home/jose-luis-cardona/Documentos/Projects/Portafolio/personal-portafolio/src/","publicDir":"file:///home/jose-luis-cardona/Documentos/Projects/Portafolio/personal-portafolio/public/","buildClientDir":"file:///home/jose-luis-cardona/Documentos/Projects/Portafolio/personal-portafolio/dist/client/","buildServerDir":"file:///home/jose-luis-cardona/Documentos/Projects/Portafolio/personal-portafolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DqJtVgtE.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/jose-luis-cardona/Documentos/Projects/Portafolio/personal-portafolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/jose-luis-cardona/Documentos/Projects/Portafolio/personal-portafolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_ggda-0zl.mjs","\u0000@astrojs-manifest":"manifest_B8f2Aw9h.mjs","/home/jose-luis-cardona/Documentos/Projects/Portafolio/personal-portafolio/src/components/ContactWhatsapp":"_astro/ContactWhatsapp.BKAyNfOL.js","@astrojs/react/client.js":"_astro/client.D5VCDl9Y.js","/home/jose-luis-cardona/Documentos/Projects/Portafolio/personal-portafolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.D1cF2PNM.js","/home/jose-luis-cardona/Documentos/Projects/Portafolio/personal-portafolio/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.Be9_AEGT.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/jose-luis-cardona/Documentos/Projects/Portafolio/personal-portafolio/src/components/Header.astro?astro&type=script&index=0&lang.ts","const n=()=>{document.querySelector(\"#menu-open\")?.classList.toggle(\"hidden\")},t=()=>{document.querySelector(\"#menu-button\")?.addEventListener(\"click\",n)};document.addEventListener(\"DOMContentLoaded\",t);"]],"assets":["/_astro/onest-cyrillic-wght-normal.CiQTuMoU.woff2","/_astro/onest-latin-wght-normal.DJzCSW5i.woff2","/_astro/onest-latin-ext-wght-normal.0BME-IPC.woff2","/_astro/index.DqJtVgtE.css","/favicon.svg","/_astro/ContactWhatsapp.BKAyNfOL.js","/_astro/Layout.astro_astro_type_script_index_0_lang.D1cF2PNM.js","/_astro/client.D5VCDl9Y.js","/_astro/index.BL7xzsR_.js","/cv/CV_Jose-Cardona.docx.pdf","/img/Empire-Lawyers.png","/img/ImgJose.jpeg","/img/Shoes.png","/img/WikiClone.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"CVqM6KSOYzkJ0C+CV61D9N0QgOwN7FwMeCLwmJThvTw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
