# Información de Rutas i18n

## Cómo funcionan las rutas

El sitio usa `localePrefix: 'as-needed'`, lo que significa:

### Español (idioma por defecto)
Las rutas en español **NO** incluyen el prefijo `/es/`:
- ✅ `/` → Home en español
- ✅ `/productos` → Productos en español
- ✅ `/capacitacion` → Capacitación en español
- ✅ `/soporte` → Soporte en español
- ✅ `/blog` → Blog en español

### Inglés
Las rutas en inglés **SÍ** incluyen el prefijo `/en/`:
- ✅ `/en` → Home en inglés
- ✅ `/en/productos` → Products en inglés
- ✅ `/en/capacitacion` → Training en inglés
- ✅ `/en/soporte` → Support en inglés
- ✅ `/en/blog` → Blog en inglés

## Cambio de idioma

Cuando el usuario cambia de idioma usando el selector en el Footer:
- **De Español a Inglés**: La URL cambia de `/ruta` a `/en/ruta`
- **De Inglés a Español**: La URL cambia de `/en/ruta` a `/ruta`

## Middleware

El middleware de next-intl:
1. Detecta el idioma de la URL
2. Si no hay prefijo, asume español (defaultLocale)
3. Redirige automáticamente si es necesario
4. Maneja todas las rutas excepto `/api`, `/_next`, `/_vercel` y archivos estáticos

## Navegación

Todos los componentes usan `Link` de `@/i18n/routing` que:
- Mantiene el idioma actual al navegar
- Genera las URLs correctas según el idioma
- No requiere especificar el locale manualmente

## Ejemplo de uso

```tsx
import { Link } from '@/i18n/routing';

// Esto genera automáticamente:
// - /productos (si estás en español)
// - /en/productos (si estás en inglés)
<Link href="/productos">Productos</Link>
```
