'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fe13f6fe4352feec79ec8efb2e8e1330",
"assets/AssetManifest.bin.json": "19fffe324d765f85c2a1af21fde35dd0",
"assets/AssetManifest.json": "72d396a5a0119bc7984351cf3c8b1b2b",
"assets/assets/fonts/Roboto-Italic.ttf": "5b03341126c5c0b1d4db52bca7f45599",
"assets/assets/fonts/Roboto.ttf": "3aa911d4a1e76c8946952fe744ce7434",
"assets/assets/images/background_leaves.png": "26c0b4d4f10abeb0f6acc551032ed23a",
"assets/assets/images/background_leaves_bkp.png": "c17df639781ad50698329061fac3ad82",
"assets/assets/images/background_leaves_light.png": "7acce17195fd339537ea0670ad56da19",
"assets/assets/images/background_product.png": "0915dc7a51e909099c1cffdd15ddbb80",
"assets/assets/images/background_product_bkp.png": "06e441a9e09f28042eefb3fb86a321d8",
"assets/assets/images/background_product_light.png": "2d98a54e22e4c1e7d30104dbd6ba0d8b",
"assets/assets/images/bag/bag_wish.png": "d7991b64bf11080b9ccfcc8653a9840f",
"assets/assets/images/bag/order.png": "a03356b2fdc8abdb9802d50f2af3c21c",
"assets/assets/images/bag/order_svg.png": "8818326d3c06b710a1bdc67532fe57b4",
"assets/assets/images/bag/shopping_basket.png": "e1b7452d5cf4392e466c42451cd70feb",
"assets/assets/images/bag/shopping_cart.png": "786fc22cef54463ae76bf550c14e7677",
"assets/assets/images/bag/wishlist_svg.png": "1354cc33babdfd5a7070eb466a71457d",
"assets/assets/images/banners/481771395_1195314872593674_5527581414727382682_n.jpg": "a60080e231894d7307e178029fed21fc",
"assets/assets/images/banners/banner_1.jpg": "658295f4cc8e8facb02df44ecd37ca0a",
"assets/assets/images/banners/banner_2.jpg": "85a54b1c34a9226fa88fee87e71a1b1b",
"assets/assets/images/banners/banner_3.jpg": "7ba596b89db47a6a0950cba96cf7bbe1",
"assets/assets/images/banners/banner_4.jpg": "a58a5fc794d5e7495cd8d6352ccfbdd1",
"assets/assets/images/banners/IMG_20230523_094044-1-scaled-e1693323321610-1024x1024.jpg": "88906dd60bf5dfeec612d43f0348288f",
"assets/assets/images/banners/sremus-glisovic.jpg": "21cf60792c4850462bc7f0c41d5ca9c8",
"assets/assets/images/categories/Bio-busa-01.png": "e03af3892639826d9784201ecd2e0476",
"assets/assets/images/categories/Bio-busa-01_light.png": "be264dc5ed377ba5acb875f4cba464d1",
"assets/assets/images/categories/Bio-farma-01.png": "660f7d74e3bdfbdf341e16fd99cfbd95",
"assets/assets/images/categories/Bio-farma-01_light.png": "9671298297096cc938fb923085b865b2",
"assets/assets/images/categories/Nasa-Zlatka-01.png": "883796cd25647fc59b2b373268fd0330",
"assets/assets/images/categories/Nasa-Zlatka-01_light.png": "dbd239baada6a8d601456ea1ab65561b",
"assets/assets/images/categories/Rajska-basta-01.png": "99869ef0b47e32a802797e08ba696b71",
"assets/assets/images/empty_search.png": "daa081579e934227dd9020adbb7734a1",
"assets/assets/images/error.png": "1fc784623c7400939b69f406614c3172",
"assets/assets/images/forgot_password.jpg": "fc17e3d292d1b1bccb7770c106e70aa1",
"assets/assets/images/logoCircle.png": "751411d0a6665e49c693b428ef8292ca",
"assets/assets/images/logoCircle_light.png": "e9e504c36a798add9c4f5ffcdb3c7312",
"assets/assets/images/logoDove.png": "90e8e77f354d9823685bb832b8d208fa",
"assets/assets/images/logoDove_light.png": "cb87db3011f50c47ab234ddb15a0dc71",
"assets/assets/images/Logo_header.png": "8a92c87ce5cf5ed7d13205529ab5b53a",
"assets/assets/images/Logo_header.svg": "a34b03f842a3d55c43a1741087981cb4",
"assets/assets/images/Logo_header_light.png": "b283d2112651ccd4628cddcdddedfd4e",
"assets/assets/images/profile/address.png": "7f78e5e86641a57601f4a88ae979244d",
"assets/assets/images/profile/adresa.png": "170b8e412c5a86a57c8b851419cbfae1",
"assets/assets/images/profile/adresa_light.png": "9333ce396dc74405e4a5b4f0a131a7d7",
"assets/assets/images/profile/dark_mode.png": "43fa945de88cb4b907198bd8d6ef2537",
"assets/assets/images/profile/dark_mode_light.png": "6a6e4201898246dae9dec7c9cba07e44",
"assets/assets/images/profile/favorite.png": "ed4d42c7c898b10449488280767ca1e2",
"assets/assets/images/profile/favorite_light.png": "659383bfed5b19ed0d3c4947087973bc",
"assets/assets/images/profile/light-mode.png": "1677565919e7984dba361e22c58d4644",
"assets/assets/images/profile/light-mode_light.png": "a920b4eb8aef9aeaf793fb36b6c89465",
"assets/assets/images/profile/login.png": "160a9c341661747259f3abb86c157b68",
"assets/assets/images/profile/logout.png": "fad00e84db95cd110d93fb5a1518c3cb",
"assets/assets/images/profile/nedavno_pregledane.png": "4602e09797f82d1afb4ae5835b2f4ef3",
"assets/assets/images/profile/nedavno_pregledane_light.png": "567fae970424cf05773cd975c6f37265",
"assets/assets/images/profile/Porudzbine.png": "d308a7f1d884b535914429663a274736",
"assets/assets/images/profile/Porudzbine_light.png": "70d60944c6ea51fd55dda7a1cbdcbed2",
"assets/assets/images/profile/privacy.png": "0b4c460faae658f09109ff7e0ffe5abe",
"assets/assets/images/profile/recent.png": "3f1a50bae1f3035a4753d446df3f9d5a",
"assets/assets/images/profile/theme.png": "b635d89ba9014e4c03cede689e21e7c4",
"assets/FontManifest.json": "f832740341f6bfd1aa5820d4a0c80bdb",
"assets/fonts/MaterialIcons-Regular.otf": "76959fa858c44dcd7056072eb781a26f",
"assets/NOTICES": "9816c08ae5ae1bef23a82bdbd6c8f13f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/iconly/fonts/IconlyBold.ttf": "6c73fc0a864250644f562a679591e0a4",
"assets/packages/iconly/fonts/IconlyBroken.ttf": "ae60c99d5cf25644beb25a87577bf6ca",
"assets/packages/iconly/fonts/IconlyLight.ttf": "baf08d3e753c86f1bdacb3535d66e2aa",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "49d9f842760cea54eb341adac4db977c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f317f3e288de6b19ca83d39064ce37f0",
"/": "f317f3e288de6b19ca83d39064ce37f0",
"main.dart.js": "cc25ae8902eacc0490f41a7a213e3c8b",
"manifest.json": "33069eb31bf7312c8153c2e4a158a24f",
"version.json": "4a54ddc6ba4c0083ce22f4bf9318965c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
