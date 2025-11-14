# Implementación de i18n (Internacionalización)

## ✅ Completado

1. **Instalación de next-intl**
   - Paquete instalado correctamente

2. **Archivos de idiomas creados**
   - `/messages/es.json` - Español (completo)
   - `/messages/en.json` - English (completo)

3. **Configuración**
   - `i18n.ts` - Configuración de next-intl
   - `middleware.ts` - Middleware para manejo de locales
   - `next.config.ts` - Actualizado con plugin de next-intl

4. **Contexto de idioma**
   - `lib/LanguageContext.tsx` - Contexto para cambio de idioma
   - Integrado en `GrommetProvider.tsx`

5. **Componentes actualizados**
   - ✅ Footer - Completamente traducido
   - ✅ HeroBanner - Completamente traducido
   - ✅ Layout - Configurado con NextIntlClientProvider

## 📝 Pendiente de actualizar

Para completar la implementación, actualiza los siguientes componentes usando `useTranslations`:

### Navbar
```tsx
import { useTranslations } from 'next-intl';

const t = useTranslations('nav');
// Usar t('capacitacion'), t('productos'), etc.
```

### FlipCards
```tsx
const t = useTranslations('values');
// Usar t('title'), t('innovation.title'), etc.
```

### FourCards
```tsx
const t = useTranslations('services');
// Usar t('title'), t('consulting.title'), etc.
```

### ContactForm
```tsx
const t = useTranslations('contact');
// Usar t('title'), t('form.name'), etc.
```

### Páginas
- `/app/productos/page.tsx` - usar `useTranslations('pages.productos')`
- `/app/capacitacion/page.tsx` - usar `useTranslations('pages.capacitacion')`
- `/app/soporte/page.tsx` - usar `useTranslations('pages.soporte')`
- `/app/servicios/page.tsx` - usar `useTranslations('pages.servicios')`
- `/app/nosotros/page.tsx` - usar `useTranslations('pages.nosotros')`
- `/app/privacidad/page.tsx` - usar `useTranslations('pages.privacidad')`
- `/app/blog/page.tsx` - usar `useTranslations('pages.blog')`

## 🎯 Cómo funciona

1. El usuario selecciona un idioma en el Footer
2. El `LanguageContext` guarda la preferencia en localStorage
3. El middleware de next-intl maneja las rutas según el idioma
4. Todos los componentes usan `useTranslations()` para obtener textos
5. Los textos se cargan desde `/messages/{locale}.json`

## 🔧 Uso en componentes

```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('sectionName');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

## 🌐 Idiomas soportados

- **es** (Español) - Idioma por defecto
- **en** (English)

El selector en el Footer permite cambiar entre estos idiomas.
