///programacion service worker importante

//asignar nombre y version de cache
const CACHE_NAME = 'v1_cache_leer';

//ficheros de cache -- a cachear
var urlsToCache = [
'./',
'./css/styles.css',
'./img/favicon.png',
'./img/fondo1.jpg',
'./img/fondo2.jpg',
'./img/menu_movil.png',
'./img/icon/iatras.png',
'./img/icon/igame.png',
'./img/icon/ihome.png',
'./img/icon/ihomeG.png',
'./img/icon/isiguiente.png',
'./img/icon/isilabas.png',
'./img/icon/ivocales.png',
'./img/facebook.png',
'./img/instagram.png',
'./img/twitter.png',
'./img/favicon-1024.png',
'./img/favicon-512.png',
'./img/favicon-384.png',
'./img/favicon-256.png',
'./img/favicon-192.png',
'./img/favicon-128.png',
'./img/favicon-96.png',
'./img/favicon-64.png',
'./img/favicon-32.png',
'./img/favicon-16.png',
'./img/1/ac.jpg',
'./img/1/al.jpg',
'./img/1/am.jpg',
'./img/1/an.jpg',
'./img/1/ar.jpg',
'./img/1/b.jpg',
'./img/1/bl.jpg',
'./img/1/br.jpg',
'./img/1/c.jpg',
'./img/1/cc.jpg',
'./img/1/ch.jpg',
'./img/1/cl.jpg',
'./img/1/cr.jpg',
'./img/1/d.jpg',
'./img/1/dr.jpg',
'./img/1/enie.jpg',
'./img/1/es.jpg',
'./img/1/f.jpg',
'./img/1/fl.jpg',
'./img/1/fr.jpg',
'./img/1/g.jpg',
'./img/1/gg.jpg',
'./img/1/gl.jpg',
'./img/1/gr.jpg',
'./img/1/gu.jpg',
'./img/1/h.jpg',
'./img/1/iz.jpg',
'./img/1/j.jpg',
'./img/1/l.jpg',
'./img/1/ll.jpg',
'./img/1/m.jpg',
'./img/1/n.jpg',
'./img/1/p.jpg',
'./img/1/pl.jpg',
'./img/1/pr.jpg',
'./img/1/q.jpg',
'./img/1/r.jpg',
'./img/1/rey.jpg',
'./img/1/rr.jpg',
'./img/1/s.jpg',
'./img/1/t.jpg',
'./img/1/tr.jpg',
'./img/1/v.jpg',
'./img/1/x.jpg',
'./img/1/y.jpg',
'./img/1/z.jpg',
'./audio/ma.mp3',
'./audio/me.mp3',
'./audio/mi.mp3',
'./audio/mo.mp3',
'./audio/mu.mp3',
'./fonemas/audio/ca.mp3',
'./fonemas/audio/co.mp3',
'./fonemas/audio/cu.mp3',
'./fonemas/audio/da.mp3',
'./fonemas/audio/de.mp3',
'./fonemas/audio/di.mp3',
'./fonemas/audio/do.mp3',
'./fonemas/audio/du.mp3',
'./fonemas/audio/la.mp3',
'./fonemas/audio/le.mp3',
'./fonemas/audio/li.mp3',
'./fonemas/audio/lo.mp3',
'./fonemas/audio/lu.mp3',
'./fonemas/audio/na.mp3',
'./fonemas/audio/ne.mp3',
'./fonemas/audio/ni.mp3',
'./fonemas/audio/no.mp3',
'./fonemas/audio/nu.mp3',
'./fonemas/audio/nia.mp3',
'./fonemas/audio/nie.mp3',
'./fonemas/audio/nii.mp3',
'./fonemas/audio/nio.mp3',
'./fonemas/audio/niu.mp3',
'./fonemas/audio/pa.mp3',
'./fonemas/audio/pe.mp3',
'./fonemas/audio/pi.mp3',
'./fonemas/audio/po.mp3',
'./fonemas/audio/pu.mp3',
'./fonemas/audio/ra.mp3',
'./fonemas/audio/ri.mp3',
'./fonemas/audio/re.mp3',
'./fonemas/audio/ro.mp3',
'./fonemas/audio/ru.mp3',
'./fonemas/audio/rra.mp3',
'./fonemas/audio/rre.mp3',
'./fonemas/audio/rri.mp3',
'./fonemas/audio/rro.mp3',
'./fonemas/audio/rru.mp3',
'./fonemas/audio/sa.mp3',
'./fonemas/audio/se.mp3',
'./fonemas/audio/si.mp3',
'./fonemas/audio/so.mp3',
'./fonemas/audio/su.mp3',
'./fonemas/audio/ta.mp3',
'./fonemas/audio/te.mp3',
'./fonemas/audio/ti.mp3',
'./fonemas/audio/to.mp3',
'./fonemas/audio/tu.mp3',
];

///evento de Install
//instalacion del service worker y guardar en cache los recursos estaticos de la app
self.addEventListener('install', e => {
	e.waitUntil(
	caches.open(CACHE_NAME)
			.then(cache => {
				return cache.addAll(urlsToCache)
							.then(() => {
								self.skipWaiting();
							});
			})
			.catch(err => console.log('no se ha registrado la cache', err))
		);
});

///evento activate
//que la app funcione sin conexion
self.addEventListener('activate', e => {
	const cacheWhitelist = [CACHE_NAME];

	e.waitUntil(
		caches.keys()
			.then(cacheNames => {
				return Promise.all(
					cacheNames.map(cacheName => {

						if(cacheWhitelist.indexOf(cacheName) === -1){
							///borrar lor elementos que no se necesitan
							return caches.delete(cacheName);
						}
					})
				);
			})
			.then(() => {
				//activar cache en el dispositivo
				self.clients.claim();
			})
		);
});

//evento Fech para actualizar el contenido de la app

self.addEventListener('fetch', e => {
	e.respondWith(
		caches.match(e.request)
		.then(res => {
			if(res){
				//devuelvo datos desde cache
				return res;
			}
			return fetch(e.request);
		})
	);
});
