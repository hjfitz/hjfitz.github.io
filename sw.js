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
    "url": "webpack-runtime-ea376da44e5f4c0e3d74.js"
  },
  {
    "url": "commons.87fe419a5fcf23b62cd4.css"
  },
  {
    "url": "commons-6442f7c8d0a9d069c2ee.js"
  },
  {
    "url": "app-7e353fc191ddcd10b26d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d39fddecc8f7eedb1009.js"
  },
  {
    "url": "index.html",
    "revision": "9b3cc001c42fa5fe76ef3accf0f75856"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0933cdbe72dfe1fde9f6d4408cfcbd9e"
  },
  {
    "url": "styles.00cfeeb722d43064dc96.css"
  },
  {
    "url": "styles-2dde18c4ff83c31542ba.js"
  },
  {
    "url": "component---src-pages-index-jsx-c4cbe896cebde32f51cd.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "e2c017e09306708316cb6a9dc733bef2"
  },
  {
    "url": "component---src-pages-404-jsx-1c7ece89de930eddd502.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "821b4632d487e2409f73d33986117061"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "87282b08f7692417e5e3bdeebd50b3e1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
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