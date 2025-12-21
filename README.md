<<<<<<< HEAD
# Web Corporativa Industrial (React + Vite)

Plantilla profesional para una web corporativa enfocada en conversión: presencia de marca, portafolio y formularios (contacto / cotización).

Incluye:
- Inicio (Home)
- Quiénes Somos (About)
- Servicios (Services)
- Proyectos / Portafolio (Projects)
- Cotización (Quote) con formulario
- Contáctanos (Contact) con formulario
- Política de privacidad (Privacy)
- Header + Footer reutilizables
- Banner/Hero en cada página
- Tema por marca (colores centralizados)

---

## 1) Requisitos

- Node.js 18+ recomendado
- NPM 9+

---

## 2) Instalación

```bash
npm install
```

---

## 3) Ejecutar en desarrollo

```bash
npm run dev
```

Abrirá el proyecto en una URL local (Vite).

---

## 4) Build y preview

```bash
npm run build
npm run preview
```

---

## 5) Dónde cambiar la marca (colores y nombre)

### 5.1 Colores (RGB)
Archivo:
- `src/theme/brand.tokens.js`

Aquí defines los RGB oficiales:
- `primary`
- `secondary`
- `accent`
- `background`
- `surface`
- `text`
- `muted`
- `border`

Ejemplo:
```js
export const brandTokens = {
  name: "SOLIDUM INDUSTRIAL S.A.S.",
  slogan: "Soluciones industriales con precisión y cumplimiento.",
  colors: {
    primary: "rgb(12, 32, 54)",
    secondary: "rgb(18, 64, 96)",
    accent: "rgb(220, 150, 60)",
    background: "rgb(245, 247, 250)",
    surface: "rgb(255, 255, 255)",
    text: "rgb(15, 23, 42)",
    muted: "rgb(100, 116, 139)",
    border: "rgb(226, 232, 240)"
  }
};
```

### 5.2 Logo / favicon
- `public/brand/logo.svg`
- `public/brand/favicon.ico`

También puedes reemplazar `public/brand/hero.jpg` con una imagen de su industria (montajes, soldadura, taller, etc.)

---

## 6) Contenido editable (sin tocar componentes)

- `src/data/company.js` (datos de empresa)
- `src/data/services.js` (servicios)
- `src/data/projects.js` (portafolio)

---

## 7) Formularios (Contact y Quote)

Los formularios ya vienen con:
- Validación mínima (frontend)
- Mensaje de éxito/error
- Función `submitLead()` lista para conectar a backend (Node/Java) o a un proveedor de correo

Archivo:
- `src/services/leads.js`

Cuando tengas backend:
- Cambias `API_BASE_URL` en `.env`
- Implementas endpoints:
  - `POST /api/leads/contact`
  - `POST /api/leads/quote`

---

## 8) Estructura del proyecto

```
industrial-web-template/
  public/
    brand/
      logo.svg
      favicon.ico
      hero.jpg
  src/
    app/
      App.jsx
      routes.jsx
    components/
      layout/
        Navbar.jsx
        Footer.jsx
        Container.jsx
        PageShell.jsx
      ui/
        Button.jsx
        Card.jsx
        Input.jsx
        Textarea.jsx
        Select.jsx
        Alert.jsx
        SectionTitle.jsx
    data/
      company.js
      services.js
      projects.js
    pages/
      Home.jsx
      About.jsx
      Services.jsx
      Projects.jsx
      Quote.jsx
      Contact.jsx
      Privacy.jsx
      NotFound.jsx
    services/
      leads.js
    styles/
      globals.css
      theme.css
    theme/
      brand.tokens.js
      applyTheme.js
    main.jsx
```

---

## 9) Recomendación para despliegue (cuando lo hablemos)

- Build: `npm run build`
- Se sirve el contenido de `dist/`
- Opciones: Nginx, CloudFront/S3, Vercel, Netlify, etc.

---

## 10) Licencia

Uso interno / privado de la marca.
=======
# EMPRESA DE SOLDADURA Y METALMECÁNICA INDUSTRIAL
## Documentación estratégica y técnica del proyecto

Este repositorio documenta la creación, estructura y ejecución de una empresa
de servicios industriales especializada en soldadura y metalmecánica, con
enfoque exclusivo en el sector empresarial (B2B).

El objetivo de esta documentación es:
- Alinear a los socios en una visión común
- Explicar claramente cómo funciona la empresa
- Servir como guía de ejecución y crecimiento
- Evitar decisiones improvisadas o desordenadas

Este repositorio no es únicamente técnico. Está diseñado para ser entendido
por cualquier socio, independientemente de su formación profesional.
>>>>>>> c730d359b9a63aa0e4b1b39a1866dc5e01980a15
