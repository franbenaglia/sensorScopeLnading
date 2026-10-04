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
3. El sitio queda en `https://franbenaglia.github.io/sensorScopeLnading/` y la política en `https://franbenaglia.github.io/sensorScopeLnading/privacy.html`.

## Qué revisar antes de publicar la app

- La política nombra el paquete `com.sensorscope.app` y al desarrollador como `franbenaglia`; actualizar si cambian.
- El contacto es `feedback@fab-apps.com`, en el pie de la landing y en la política.
- El botón «Próximamente en Google Play» no tiene enlace. Cuando exista la ficha, reemplazarlo por el enlace; cuando se publique el APK para descarga directa, agregar ahí el enlace de descarga.
- La política afirma que la app no pide el permiso de internet y que su único permiso es el de sensores a alta frecuencia. Si la app agrega red, permisos, anuncios o analíticas, o cambia qué guarda, hay que actualizar `privacy.html` y su fecha.
- La sección «Copias de seguridad» vale mientras el manifiesto de la app tenga `android:allowBackup="true"`.
- El banner (`img/feature.jpg`) es una ilustración: muestra orientación, luz y proximidad, que la app no mide. El pie de la landing lo aclara y las capturas de la sección «Pantallas» son reales.
- Las capturas están con la interfaz en español.

Para verla en local: `python3 -m http.server` dentro de esta carpeta.
