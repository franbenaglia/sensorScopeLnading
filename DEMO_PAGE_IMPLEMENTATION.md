# Página de demostración técnica (`/demo/`)

Punto de control del trabajo, para retomarlo aunque se pierda el contexto. Las instrucciones de origen están en el repositorio de la app, `docs/fiverr.md`; aquí se aplicó solo lo que corresponde a SensorScope.

## Estado

- **Publicado** el 2026-10-27 en <https://sensorscope.fab-apps.com/demo/>, con autorización del usuario. La rama `demo-page` se fusionó en `main`.
- El usuario todavía va a consultar a la plataforma si puede incluir el enlace en su proyecto; publicar la página no depende de esa respuesta.

## Estructura existente (relevada antes de implementar)

| Elemento | Dónde / qué |
|---|---|
| Framework | Ninguno: HTML y CSS estáticos, sin dependencias ni recursos externos |
| Landing | `index.html` (bilingüe con `lang.js`), `privacy.html`, `styles.css` |
| Despliegue | GitHub Pages desde la rama `main`, carpeta raíz; dominio propio `sensorscope.fab-apps.com` (`CNAME`); `.nojekyll` |
| Capturas | `img/*.png` (480 px, sin barra de estado); originales del usuario en `img/Screenshot_*` (fuera del repositorio por `.gitignore`) |
| APK | GitHub Releases de este repositorio; v1.0.1 = última versión |
| Versión de la app | 1.0.1 (versionCode 2), paquete `com.sensorscope.app` |
| Android mínimo | 7.0 (API 24), target API 36 |

## Archivos creados

| Archivo | Contenido |
|---|---|
| `demo/index.html` | La página: hero con descarga, capacidades, capturas, cómo probar, demostración sugerida, arquitectura, notas técnicas |
| `demo/demo.css` | Estilos propios; reutiliza los tokens de color y la base de `../styles.css` |
| `demo/lightbox.js` | Ampliación de capturas con `<dialog>`, sin dependencias |
| `demo/img/*.jpg` | Capturas: miniaturas de 360 px y versiones ampliadas (900 px las tomadas en inglés, 480 px las tres en español, que no tienen original más grande) |
| `demo/sensorscope-v1.0.1.apk` | Copia byte a byte del APK publicado en GitHub Releases v1.0.1 |
| `DEMO_PAGE_IMPLEMENTATION.md` | Este documento |

No se modificó la landing (`index.html`, `privacy.html`, `styles.css`).

## APK

- Origen: `https://github.com/franbenaglia/sensorScopeLnading/releases/download/v1.0.1/SensorScope.apk`, descargado y copiado sin cambios. No se reempaquetó ni se volvió a firmar.
- Se sirve desde el mismo dominio (`/demo/sensorscope-v1.0.1.apk`) para tener un nombre descriptivo y para que la página no enlace a GitHub (la URL de GitHub muestra el usuario del desarrollador).
- GitHub Pages sirve `.apk` como `application/vnd.android.package-archive` (comprobar tras publicar; ver "Pruebas pendientes").
- Verificado con `aapt2` y `apksigner`: paquete `com.sensorscope.app`, versión 1.0.1 (código 2), minSdk 24, targetSdk 36, sin librerías nativas, firma v2 válida.
- SHA-256 del APK: `24d00021de12a789cdf768bc03158bdf944921ac4462296fc02703fd8880503c` (igual en la copia servida por el servidor local).
- SHA-256 del certificado: `555bf1e9ec7a5d6a27e531f1447c1ef34e40e0083b48c05dcabf148826627e76`. El DN del certificado no se muestra porque incluye el nombre de usuario del desarrollador.
- Tamaño: 4 716 134 bytes.
- Permisos: `HIGH_SAMPLING_RATE_SENSORS` y uno interno de AndroidX con protección de firma (`com.sensorscope.app.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`). Sin permiso de internet.

## Revisión de seguridad y privacidad

- Sin correo, teléfono, formularios, redes sociales, mensajería, precios, pagos ni ofertas de servicios. Búsqueda en `demo/` de `mailto`, `@`, `http(s)://`, nombres de plataformas y del usuario: sin resultados (solo la regla CSS `@media`).
- **Ningún enlace externo.** Los únicos enlaces son el APK (mismo directorio) y un ancla interna. No enlaza a la landing ni a la política de privacidad porque ambas muestran el correo de contacto.
- No menciona ninguna plataforma de freelancers ni usa sus marcas.
- Sin scripts ni recursos de terceros; sin analíticas. El único script es `lightbox.js`, que no inserta HTML (usa `textContent` y atributos).
- Capturas revisadas: sin la barra de estado del teléfono (recortada), sin correos, IP, nombres de host, usuarios ni tokens. Muestran nombres de sesión con fecha y nombres de sensores del hardware. Se excluyó una captura del usuario (`…00-23-28-367…`) porque muestra una sesión en curso abierta desde el historial con 0 muestras, que da una idea errónea de la app.
- `<meta name="robots" content="noindex, follow">`; no hay sitemap. Para permitir la indexación, cambiar ese valor a `index, follow` (comentado en el HTML). `noindex` no es control de acceso.
- La app no usa credenciales ni backend: no hay secretos que revisar en el APK.
- El texto aclara que la app se entrega para evaluación técnica, tal como está, y que no fue auditada.

## Pruebas realizadas (servidor local, Playwright)

- `/demo` redirige a `/demo/` (301) en el servidor local; GitHub Pages hace lo mismo con carpetas.
- Escritorio (1200 px) y móvil (375 px): sin desbordamiento horizontal; las 14 imágenes cargan.
- Las 7 ampliaciones y el APK responden 200; la ampliación abre y cierra.
- La landing (`/`) se sigue sirviendo igual.

## Pruebas sobre el sitio publicado (2026-10-27)

- `/demo` redirige con 301 a `https://sensorscope.fab-apps.com/demo/`; `http://` redirige a `https://`.
- `/demo/`, sus estilos, el script y las imágenes responden 200; la landing y la política siguen respondiendo 200.
- `/demo/sensorscope-v1.0.1.apk`: 200, `content-type: application/vnd.android.package-archive`, 4 716 134 bytes, SHA-256 descargado igual al que muestra la página.
- La página servida contiene `noindex, follow` y ningún `mailto:` ni URL externa.

## Pruebas pendientes

- Abrir la página en el navegador de un teléfono Android, descargar e instalar el APK. **La instalación del APK de release no se probó en un dispositivo**: en el teléfono de pruebas está instalado el build de desarrollo, con otra firma.

## Despliegue

La página se publica con el resto del sitio: cualquier `git push` a `main` de este repositorio la despliega.

Al publicar una versión nueva de la app: copiar el APK como `demo/sensorscope-vX.Y.Z.apk`, borrar el anterior y actualizar en `demo/index.html` el enlace, la versión, el tamaño y los dos SHA-256 (el del certificado solo cambia si cambia la clave, lo que no debe pasar).

## Limitaciones conocidas

- Las tres capturas de espectro, sesión guardada y comparación tienen la interfaz en español y solo existen a 480 px.
- El APK ocupa 4,7 MB en el repositorio por cada versión que se publique aquí; al reemplazarlo conviene borrar el anterior.
