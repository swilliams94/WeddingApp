self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response(
        'Welcome to Bridal Dresses \n'+        
'Unfortunately you  are unable to view the content on the page. \n'+
There seems to be a problem with your connection.\n'+        
'We look forward to telling you about the Bridal as soon as you are online'
      );
    })
  );
});

var BASE_PATH = '/DesignForMobileDevices2/';
var CACHE_NAME = 'gih-cache';
var TEMP_IMAGE_CACHE_NAME = 'temp-cache-v1'
var CACHED_URLS = [
    //Our HTML
    BASE_PATH + 'index.html',
    
    //Images for favicons
    BASE_PATH + 'images/favicons/android-icon-36x36.png',
    BASE_PATH + 'images/favicons/android-icon-48x48.png',
    BASE_PATH + 'images/favicons/android-icon-72x72.png',
    BASE_PATH + 'images/favicons/android-icon-96x96.png',
    BASE_PATH + 'images/favicons/android-icon-144x144.png',
    BASE_PATH + 'images/favicons/android-icon-192x192.png',
    BASE_PATH + 'images/favicons/apple-icon.png',
    BASE_PATH + 'images/favicons/apple-icon-57x57.png',
    BASE_PATH + 'images/favicons/apple-icon-60x60.png',
    BASE_PATH + 'images/favicons/apple-icon-72x72.png',
    BASE_PATH + 'images/favicons/apple-icon-76x76.png',
    BASE_PATH + 'images/favicons/apple-icon-114x114.png',
    BASE_PATH + 'images/favicons/apple-icon-120x120.png',
    BASE_PATH + 'images/favicons/apple-icon-144x144.png',
    BASE_PATH + 'images/favicons/apple-icon-152x152.png',
    BASE_PATH + 'images/favicons/apple-icon-180x180.png',
    BASE_PATH + 'images/favicons/apple-icon-precomposed.png',
    BASE_PATH + 'images/favicons/favicon-16x16.png',
    BASE_PATH + 'images/favicons/favicon-32x32.png',
    BASE_PATH + 'images/favicons/favicon-96x96.png',
    BASE_PATH + 'images/favicons/ms-icon-70x70.png',
    BASE_PATH + 'images/favicons/ms-icon-144x144.png',
    BASE_PATH + 'images/favicons/ms-icon-150x150.png',
    BASE_PATH + 'images/favicons/ms-icon-310x310.png',
    
    //Images for pages
    BASE_PATH + 'images/1610540_UK_Brides_Refresh_Desktop_v4.jpg.jpg',
    BASE_PATH + 'images/970_550_scaled_1257441_enzo-1450187244095.jpg',
    BASE_PATH + 'images/970_550_scaled_1257441_enzo-1450187244095.jpg',
    BASE_PATH + 'images/970_550_scaled_1263666_monsoon-flower-girl-dresses-white-1451926076831.jpg',
    BASE_PATH + 'images/Knee-Length-font-b-Coral-b-font-font-b-Mother-b-font-font-b-Of-b.jpg',
    BASE_PATH + 'images/shop-front.jpg" alt="" />
                '
    BASE_PATH + 'images/DSC05024.jpg',
    BASE_PATH + 'images/shop-front.jpg',
    BASE_PATH + 'images/bride1.jpg',
    BASE_PATH + 'images/bride2.jpg',
    BASE_PATH + 'images/bride3.jpg',
    BASE_PATH + 'images/bride4.jpg',
    BASE_PATH + 'images/bride5.jpg',
    BASE_PATH + 'images/bride6.jpg',
    BASE_PATH + 'images/bride7.jpg',
    BASE_PATH + 'images/bride8.jpg',
    BASE_PATH + 'images/bm1.jpg',
    BASE_PATH + 'images/bm2.jpg',
    BASE_PATH + 'images/bm3.jpg',
    BASE_PATH + 'images/bm4.jpg',
    BASE_PATH + 'images/bm5.jpg',
    BASE_PATH + 'images/bm6.jpg',
    BASE_PATH + 'images/bm7.jpg',
    BASE_PATH + 'images/bm8.jpg',
    BASE_PATH + 'images/bridal-shop-san-antionio-6.jpg',
    BASE_PATH + 'images/a48ea81be5d1d8e62a4e8a5e69aa7b41.jpg.jpg',
    BASE_PATH + 'images/a1.jpg',
    BASE_PATH + 'images/a2.jpg',
    BASE_PATH + 'images/a3.jpg',
    BASE_PATH + 'images/a4.jpg',
    BASE_PATH + 'images/a5.jpg',
    BASE_PATH + 'images/a6.jpg',
    BASE_PATH + 'images/a7.jpg',
    BASE_PATH + 'images/a8.jpg',
    BASE_PATH + 'images/fg1.jpg',
    BASE_PATH + 'images/fg2.jpg',
    BASE_PATH + 'images/fg3.jpg',
    BASE_PATH + 'images/fg4.jpg',
    BASE_PATH + 'images/fg5.jpg',
    BASE_PATH + 'images/fg6.jpg',
    BASE_PATH + 'images/m2.jpg',
    BASE_PATH + 'images/m3.jpg',
    BASE_PATH + 'images/m4.jpg',
    BASE_PATH + 'images/m5.jpg',
    BASE_PATH + 'images/m6.jpg',
    BASE_PATH + 'images/m7.jpg',
    BASE_PATH + 'images/m8.jpg',
    //JavaScript
    BASE_PATH + 'js/jquery.lighthouse.js',
    BASE_PATH + 'js/helper-min.js',
    BASE_PATH + 'js/jquery.tools.min.js',
    BASE_PATH + 'js/swfobject-2.2.js',
    BASE_PATH + 'js/modernizer.flexbox.min.js',
    BASE_PATH + 'js/typkitnet.js',
    BASE_PATH + 'js/style.js',
    BASE_PATH + 'js/jqueryextentions.js'
    
    
    //Manifest
    BASE_PATH + 'manifest.json',
    
    
    //CSS and Fonts
    BASE_PATH + 'css/bootstrap.min.css',
    BASE_PATH + 'css/Styles.css'
    BASE_PATH + 'css/font-awesome.min.css',
    BASE_PATH + 'css/jquery.lightbox.css',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});

self.addEventListener('fetch', function(event) {
  var requestURL = new URL(event.request.url);
  // Handle requests for index.html
  if (requestURL.pathname === BASE_PATH + 'index.html') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('index.html').then(function(cachedResponse) {
          var fetchPromise = fetch('index.html').then(function(networkResponse) {
            cache.put('index.html', networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
       } else if (requestURL.pathname === BASE_PATH + 'bridedress.html') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('bridedress.html').then(function(cachedResponse) {
          var fetchPromise = fetch('bridedress.html').then(function(networkResponse) {
            cache.put('bridedress.html', networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
       } else if (requestURL.pathname === BASE_PATH + 'bridemaids.html') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('bridemaids.html').then(function(cachedResponse) {
          var fetchPromise = fetch('bridemaids.html').then(function(networkResponse) {
            cache.put('bridemaids.html', networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
       } else if (requestURL.pathname === BASE_PATH + 'flowergirl.html') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('flowergirl.html').then(function(cachedResponse) {
          var fetchPromise = fetch('flowergirl.html').then(function(networkResponse) {
            cache.put('flowergirl.html', networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
      } else if (requestURL.pathname === BASE_PATH + 'mother.html') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('mother.html').then(function(cachedResponse) {
          var fetchPromise = fetch('mother.html').then(function(networkResponse) {
            cache.put('mother.html', networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
                } else if (requestURL.pathname === BASE_PATH + 'bridalshops.html') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('bridalshops.html').then(function(cachedResponse) {
          var fetchPromise = fetch('bridalshops.html').then(function(networkResponse) {
            cache.put('bridalshops.html', networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
                     } else if (requestURL.pathname === BASE_PATH + 'contactus.html') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('contactus.html').then(function(cachedResponse) {
          var fetchPromise = fetch('contactus.html').then(function(networkResponse) {
            cache.put('contactus.html', networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
                    
                    } else if (requestURL.pathname === BASE_PATH + 'aboutus.html') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('aboutus.html').then(function(cachedResponse) {
          var fetchPromise = fetch('aboutus.html').then(function(networkResponse) {
            cache.put('aboutus.html', networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
                         } else if (requestURL.pathname === BASE_PATH + 'accessories.html') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('accessories.html').then(function(cachedResponse) {
          var fetchPromise = fetch('accessories.html').then(function(networkResponse) {
            cache.put('accessories.html', networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
       } else if (
    CACHED_URLS.includes(requestURL.href) ||
    CACHED_URLS.includes(requestURL.pathname)
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(event.request).then(function(response) {
          return response || fetch(event.request);
        });
      })
    );
  }
});
