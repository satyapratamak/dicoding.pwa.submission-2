const CACHE_NAME = "dicoding-pwa-subm2-v1";

var urlsToCache = [
    "/",    
    "/index.html",
    "full_table.html",
    "/pages/dashboard.html",
    "/pages/table.html",
    "/assets/img/logo.jpg",
    "/assets/img/logo.png",
    "/assets/img/my-picture.png",
    "/assets/img/user.png",
    "/css/main.css",
    "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
    "https://code.jquery.com/jquery-3.5.1.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
    "/js/api.js", 
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
    "/manifest.json"
  ];

  self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then( (cache) => {
        return cache.addAll(urlsToCache);
      })
    );
  });


  self.addEventListener("fetch", (event) => {

    const urlEPLStandings = "https://api.football-data.org/v2/competitions/2021/standings";
    const urlLaLigaStandings = "https://api.football-data.org/v2/competitions/2014/standings";

    /*var urlStandings = {};
    urlStandings[0] = "https://api.football-data.org/v2/competitions/2021/standings"; // EPL
    urlStandings[1] = "https://api.football-data.org/v2/competitions/2014/standings";
    */
    
      if (event.request.url.indexOf(urlEPLStandings) > -1) {
        event.respondWith(
          caches.open(CACHE_NAME).then( (cache) => {
            return fetch(event.request)
                   .then( (response) => {
                      cache.put(event.request.url, response.clone());
                      return response;
                   })
          })
        );

      } else {
        event.respondWith(
          caches.match(event.request).then( (response) => {
            return response || fetch (event.request);
          })
        )
      }

      if (event.request.url.indexOf(urlLaLigaStandings) > -1) {
        event.respondWith(
          caches.open(CACHE_NAME).then( (cache) => {
            return fetch(event.request)
                   .then( (response) => {
                      cache.put(event.request.url, response.clone());
                      return response;
                   })
          })
        );

      } else {
        event.respondWith(
          caches.match(event.request, { ignoreSearch: true } ).then( (response) => {
            return response || fetch (event.request);
          })
        )
      }

    
    /*event.respondWith(
      caches
        .match(event.request, { cacheName: CACHE_NAME })
        .then( (response) => {
          if (response) {
            console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
            return response;
          }
   
          console.log(
            "ServiceWorker: Memuat aset dari server: ",
            event.request.url
          );
          return fetch(event.request);
        })
    );*/


  });


  self.addEventListener("activate", (event) => {
    event.waitUntil(
      caches.keys().then( (cacheNames) => {
        return Promise.all(
          cacheNames.map( (cacheName) => {
            if (cacheName != CACHE_NAME) {
              console.log("ServiceWorker: cache " + cacheName + " dihapus");
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });