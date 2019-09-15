/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-6f94ae3595d0d3a80e1a.js"
  },
  {
    "url": "app-3ea50ac551dcf07b3a66.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c5cb64bc0edabf3c9d7d.js"
  },
  {
    "url": "index.html",
    "revision": "f0b78b039ac2e5da2ec56229ad39d03b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b788a06db890fb1cc0ba6dfa731fa085"
  },
  {
    "url": "component---src-pages-index-jsx.69a945a11e23dfafac91.css"
  },
  {
    "url": "2.4beee6770fa09b056dbf.css"
  },
  {
    "url": "0-64764efbc6095e6c5429.js"
  },
  {
    "url": "1-6266e78082fb9926acea.js"
  },
  {
    "url": "3-849a9c84f0a5c4d29af0.js"
  },
  {
    "url": "2-9b676b6490de03eda918.js"
  },
  {
    "url": "component---src-pages-index-jsx-862087722a1967e0849c.js"
  },
  {
    "url": "static/d/713/path---index-6a9-Sqxse88z31PdKPuHLPIXJ03U.json",
    "revision": "d610764357e9e3e3ac5fdf7af22d77ee"
  },
  {
    "url": "component---src-pages-404-jsx-6aff9fbdc10e4850de68.js"
  },
  {
    "url": "static/d/922/path---404-html-516-62a-zBokDzrdrUEq418uJ8El9PcHXg.json",
    "revision": "a09e69b7f34a55b92d511befbee370be"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/me/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});