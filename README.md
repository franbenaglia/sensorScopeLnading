# SensorScope – sitio público

Landing y política de privacidad de la app SensorScope, para publicar con GitHub Pages.
Este sitio vive en su propio repositorio (`franbenaglia/sensorScopeLnading`); la carpeta está excluida del repositorio de la app.

| Archivo | Contenido |
|---|---|
| `index.html` | Landing con las características de la app |
| `privacy.html` | Política de privacidad (la URL que pide Google Play) |
| `styles.css` | Estilos compartidos, con modo claro y oscuro |
| `lang.js` | Cambio entre español e inglés |
| `icon.png` | Icono de la app a 192 px, usado como logo y favicon |
| `img/feature.jpg` | Banner de la landing (copia comprimida del gráfico de funciones) |
| `img/*.png` | Capturas reales de la app, sin la barra de estado del teléfono |
| `SensorScope-Google-Play-Icon-512.png` | Icono original para la ficha de Google Play |
| `SensorScope-Google-Play-Feature-Graphic-1024x500.png` | Gráfico de funciones original para la ficha de Google Play |

Es HTML estático sin dependencias ni recursos externos: no carga fuentes, scripts ni rastreadores de terceros.

## Idiomas

Cada texto está dos veces, marcado con `data-lang="en"` y `data-lang="es"`. Se elige por `?lang=es` o `?lang=en` en la URL, después por el botón (se recuerda) y por último por el idioma del navegador. Sin JavaScript se muestra en inglés.

## Publicar

1. Subir estos archivos a la rama `main` de `franbenaglia/sensorScopeLnading`.
2. En GitHub: Settings → Pages → Source: «Deploy from a branch», rama `main`, carpeta `/ (root)`.
3. El sitio queda en `https://sensorscope.fab-apps.com/` (dominio propio, archivo `CNAME`) y la política en `https://sensorscope.fab-apps.com/privacy.html`. La dirección `franbenaglia.github.io/sensorScopeLnading/` redirige allí.

## Publicar una versión nueva del APK

El APK se distribuye con GitHub Releases de **este** repositorio (es público; el de la app es privado).

1. En el repositorio de la app: subir `versionCode` en `android/app/build.gradle` y `version` en `package.json`, y generar el APK firmado con `npm run android:release` (necesita `android/keystore.properties` y el `.jks`, que no están en ningún repositorio).
2. Copiar `android/app/build/outputs/apk/release/app-release.apk` como `SensorScope.apk` (el nombre debe ser siempre ese).
3. `gh release create vX.Y.Z SensorScope.apk -R franbenaglia/sensorScopeLnading --title "SensorScope X.Y.Z" --notes-file notas.md`
4. Actualizar en `index.html` la versión y el tamaño que figuran bajo el botón.

Todas las versiones deben firmarse con la misma clave: si cambia, Android no deja actualizar sobre la instalación anterior.

## Qué revisar antes de publicar la app

- La política nombra el paquete `com.sensorscope.app` y al desarrollador como `franbenaglia`; actualizar si cambian.
- El contacto es `feedback@fab-apps.com`, en el pie de la landing y en la política.
- El botón «Descargar el APK» apunta a `releases/latest/download/SensorScope.apk`: siempre baja el APK de la última versión publicada, sin tocar la página. La versión y el tamaño que figuran debajo del botón sí están escritos a mano en `index.html`.
- «Próximamente en Google Play» es solo texto; cuando exista la ficha, convertirlo en enlace.
- La política afirma que la app no pide el permiso de internet y que su único permiso es el de sensores a alta frecuencia. Si la app agrega red, permisos, anuncios o analíticas, o cambia qué guarda, hay que actualizar `privacy.html` y su fecha.
- La sección «Copias de seguridad» vale mientras el manifiesto de la app tenga `android:allowBackup="true"`.
- El banner (`img/feature.jpg`) es una ilustración: muestra orientación, luz y proximidad, que la app no mide. El pie de la landing lo aclara y las capturas de la sección «Pantallas» son reales.
- Las capturas están con la interfaz en español.

Para verla en local: `python3 -m http.server` dentro de esta carpeta.
