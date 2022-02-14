'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6d940549d804f9338821a1a3b03d947e",
".git/config": "5face1b476e90303937d4ceaa07ca913",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "96ceb23f11991bf011bc0b700cc6b44f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ab1eead04d6d7c2e0a3f5b7943e8dc38",
".git/logs/refs/heads/main": "ab1eead04d6d7c2e0a3f5b7943e8dc38",
".git/logs/refs/remotes/origin/HEAD": "03eb09fc5b8c8ddcb781461ee2d900d5",
".git/logs/refs/remotes/origin/main": "f0869be2774a6340b79be2a7bd80f528",
".git/objects/09/5a43a4e0a1374708eb7fd275f21b322b617961": "afec157006ea299260d39119033481d3",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/19/3f70f2950f270d50c49cc77653ed5e718cebad": "391d6deea2fc3ac653ce2528842ba0d8",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/1f/1a8243995f3a87e5c752ed28c598e1c1fc155c": "75e42c31ae4843046f0dde2ea3f2d915",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2b/555a25fcf9986b41845826ce674ebfac918667": "b6d3527191e260d0ea82f28e9ab05ad4",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/4d897e53a058a3c66e447af08b7566254bb84f": "6066ca600b3be6033d3888ea2c432335",
".git/objects/36/63406b8d50f3d10634e45b5e70cf3733d32d17": "092e29101479da90f67de1ac86248785",
".git/objects/39/5db196a9f7c2630bfc4f8538de4577360fa49a": "96ea44360a86de213b7a62606ff4a265",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/61/88af8c00e10693419d1436ea870df21059e5dc": "c27d3d81a0b131214a80b04de159b240",
".git/objects/62/129e0c163887b543f90419ff3d3be867c11ccd": "52f934952b07ccaf1ae4b7a67b00e98d",
".git/objects/76/39aaffcb3e06ff6edf03ef278fdaa3828c7b24": "03da3265fd2ed3c3a82554fba3d835db",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/a390e5a21679309f5eeebbe52e5a61138a1d04": "e8a86b29f3154d0e44b65c84a07a44fa",
".git/objects/77/895939654bd29c686865bf34d72fa862978f8e": "c08149a279f7a9a0243288e2916407ec",
".git/objects/7d/9f3d8d8d6e25819e83ad508ddf6248f75d7197": "146bc0e748d89aec75d4d734fab0f51c",
".git/objects/83/6dd5043fcdf5cba8740d855591f89402d5255d": "7c32b9e6ee94166b83ce6226ef3ab0ac",
".git/objects/86/adc3a577a0cb216ac5a43fb7cdbdb62350ef50": "af89b0707f68cd5fa5cb73e243babf15",
".git/objects/88/192fb72fba6ed1ee869e1ae8704eadda492bf3": "7621c38c97dea5edbcb02017f0a030fe",
".git/objects/8c/1c7ddf592bcce99998149b544b20f5ee467e88": "87a89e38dec97291787cfb96f226ea30",
".git/objects/a2/fcd65393572d2f5c9849786690bb5a3d916a44": "a388bb456f5b3b4ae56c3797a6656a88",
".git/objects/b7/e6642a73722918e2bbcd28f25e0ee9c635cceb": "3c253a72d55138a509cbf696fa1272d0",
".git/objects/bc/cebd86f690bc9abfd4ab386debe467113b14a5": "ce5c0f4847e7705588d972cc32ab7852",
".git/objects/bd/b40f3e761a8f26ac56e10a2c3d1c7555e1ba49": "340c32bc33a4b4ffdbdbfe0991df130a",
".git/objects/c6/e16c355634d1f2a589a4b9777dcfe51e83fc3b": "f7141819a4f6f70b6098af666cad815c",
".git/objects/c7/ff523e3661dbb4de1886faff9e2c9a2e7dde50": "8538a5a34e6bdb6954cceb5a54e6039d",
".git/objects/c8/d97f6498557086d47a68f0473fde2d40a17e78": "04558d47352bcd738497a75ebec29aa1",
".git/objects/cf/57fee2571b233e07b03c2152db7e61c59802e0": "b9cf7d12067c2aee9cf09c0a0ee4a6fa",
".git/objects/cf/7121788548641fea8351e4953022b88b21ce18": "4a7c9ace04a8332a573bc800ebdef082",
".git/objects/d2/7bd9d4936ee52a4ae3803d58d22973e4121da0": "608d98511a989387b6b3a447e9b0fbdc",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/pack/pack-8daa328be4667b17a8178efb52bc2f634db9c08d.idx": "bf6c2afc25d68e7cfdd111c4e24bfd10",
".git/objects/pack/pack-8daa328be4667b17a8178efb52bc2f634db9c08d.pack": "63ef513718712986ca0ef2920497199f",
".git/packed-refs": "a01a867edda02cbf77b9c5da2ff8d144",
".git/refs/heads/main": "7c78a9fb9b6d86a0e861bb59fd460805",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "7c78a9fb9b6d86a0e861bb59fd460805",
"assets/AssetManifest.json": "efd2bf6dac2df65df75d124ef8f4cdae",
"assets/assets/cv/cv_fran%C3%A7ais.pdf": "63f2f7f649d413269c7a94afe0296719",
"assets/assets/fonts/Montserrat/static/Montserrat-Bold.ttf": "d14ad1035ae6da4e5a71eca362a8d696",
"assets/assets/fonts/Montserrat/static/Montserrat-Italic.ttf": "df17124cad6f4767f3bf115f961a14b4",
"assets/assets/fonts/Montserrat/static/Montserrat-Medium.ttf": "aca6287f22eef510c1e622c97bb1e1e1",
"assets/assets/fonts/Montserrat/static/Montserrat-regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"assets/assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf": "7ffeec2b4edb434d393875ffbe633c30",
"assets/assets/images/dev.jpg": "624e4078639baa316579a04ba51e6516",
"assets/assets/images/galaxie.jpg": "13f389d85dfa72307ea5f103899e25e8",
"assets/assets/images/moi.jpg": "7b351b23b090f4f2cd763595bbfe8cbf",
"assets/assets/images/moi2.jpg": "1fe63665805ebdd286957f4ba2bd182a",
"assets/assets/images/montagne.jpg": "c5442c20be4076da0427e7bc73221d90",
"assets/assets/images/pont.jpg": "d644221f4b3446e8025ae97b4c945aad",
"assets/assets/images/table_beer_pong.jpg": "5b93588dc10fbd5400aa6d48f028a450",
"assets/assets/images/table_beer_pong_2.jpg": "cbc2aa2b5cea34dd174f5b8ea41a73c6",
"assets/assets/images/table_beer_pong_3.jpg": "533e517ad80691de7dc82f07e3bc4f44",
"assets/assets/images/table_beer_pong_4.jpg": "9a90f1174f1ea4294d8a6a0305406ba6",
"assets/assets/images/village.jpg": "f3b1ee85f718b0f8d49cdb4b85a18b3b",
"assets/assets/images/volcan.jpg": "836602f98c3ed72777157ecdc3ee0e4e",
"assets/assets/images/yorgo.png": "c00afe75d8c51ff73af34155f08d6e86",
"assets/assets/images/yorgo_2.png": "61b7aa6f1c0dee7cc7169d40fe487c5a",
"assets/assets/images/yorgo_3.png": "a811b2347abde908b97c6957c5d98b23",
"assets/assets/images/yorgo_4.png": "f15097aef479e04bbdfa6f449f9c043d",
"assets/cv/cv_english.pdf": "97477655e09d39cefd756043f50fe952",
"assets/cv/cv_fran%C3%A7ais.pdf": "afbcdc5e6a51145ca974000f1e5c2598",
"assets/FontManifest.json": "034dc153f0dc1f85855fbca43ee89c0c",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "764f960b0f4aaa082a1efb8c30f250b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "939d8927703387adc361f84f5972fef9",
"icons/Icon-192.png": "8034639a0333908ed2994ec14f22914f",
"icons/Icon-512.png": "7689df57c85a24463d255fb0141350e7",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "13c8f8ca73503fc7e810cf42e4e499bd",
"/": "13c8f8ca73503fc7e810cf42e4e499bd",
"main.dart.js": "34268ae2b06b993ea0e92059d554bd33",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
