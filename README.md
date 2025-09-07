# 🦉 BÚHO – Asistente Legal Boliviano (v1.0 Alpha)

**BÚHO** es un asistente legal especializado en el marco normativo boliviano. Su objetivo es brindar apoyo a abogados y profesionales del derecho mediante interpretación jurídica, citas normativas y análisis legal fundamentado.  
Actualmente, BÚHO se encuentra en su versión **1.0 Alpha**, una etapa funcional enfocada en demostrar su capacidad de respuesta legal contextual y trazable.

---

## 🧠 ¿Qué hace BÚHO?

- Interpreta normas, leyes y sentencias del Estado Plurinacional de Bolivia.
- Responde consultas legales utilizando lenguaje claro, preciso y profesional.
- Provee referencias **explícitas**: número de ley, artículo, año y fuente oficial (no links web).
- Realiza análisis jurídico estructurado como lo haría un abogado litigante.
- Se integra con modelos de lenguaje avanzados como **Gemini 2.5 Flash Lite** (Optimizando el costo), respaldado por un sistema RAG (retrieval-augmented generation) conectado a un índice vectorial de documentos legales.

---

## 🚀 Características principales (v1.0 Alpha)

### ✅ Asistente jurídico boliviano
- Entrenado para responder exclusivamente en el contexto normativo boliviano.
- Respuestas en español jurídico claro, sin repeticiones innecesarias ni disclaimers.

### 📚 Respuestas fundamentadas
- Citas legales obligatorias con estructura: `Ley N°, Año, Artículo, Fuente (ej. Gaceta Oficial)`.
- Fuentes priorizadas: ASFI, Gaceta Oficial, Tribunal Supremo de Justicia, Tribunal Constitucional, Cámara de Diputados, SILEP Bolivia.

### 📄 Formato estructurado
- Respuestas divididas en:
    1. **Desarrollo Legal**: análisis argumentado con subtítulos.
    2. **Referencias**: listado explícito de normas citadas.

### 🔒 Sin links web
- Todas las fuentes legales citadas deben provenir de documentos normativos oficiales, no enlaces.

---

## 🛠️ Tecnologías utilizadas

| Área | Stack |
|------|-------|
| Frontend | React + Vite + Styled Components |
| Backend (RAG / LLM) | Supabase + pgvector + Gemini 2.5 Flash Lite |
| Almacenamiento legal | AWS S3 (documentos) + OpenSearch (vectores legales) |
| Procesamiento documental | OCR automático (AWS Textract) + Clasificador Legal |
| Automatización | `n8n` para orquestación del flujo de carga e indexado |
| IA | Gemini 2.5 Flash Lite con prompt legal estructurado |

---

## 📦 Organización del proyecto

```
├── src/
│   ├── components/         # Componentes de UI (Chat, Sidebar, Navbar)
│   ├── pages/              # Vistas principales (ChatPage, etc.)
│   ├── services/           # Comunicación con Supabase y Gemini
│   ├── styles/             # Estilos globales y styled-components
│   ├── context/            # Contexto de autenticación
├── .env                    # Variables del entorno (Supabase, Redirect)
├── vite.config.ts          # Configuración del bundler
├── README.md               # Este archivo
```

---

## ⚠️ Consideraciones Técnicas

### 🔄 Redirección en login

En entornos de desarrollo, asegúrate de que el **Site URL de Supabase** esté configurado como:

```
http://localhost:5173
```

Y que el login use:

```js
redirectTo: import.meta.env.VITE_REDIRECT_URL
```

Para evitar redirecciones a producción durante el desarrollo.

---

### ✏️ Prompt del sistema personalizado

El modelo Gemini recibe un prompt estructurado que impone reglas estrictas de formato y citación legal. Puedes ver la versión actual del prompt en `docs/system_prompt_v1.md`.

---

## 👥 Autor y contacto
Legaltech-Buho, propiedad de Sebastián Gramajo, Tarija, Bolivia.

Desarrollado por [Mauricio Rosas](https://github.com/maurirosas), [Bernardo Rueda](https://github.com/Berno01). 
¿Comentarios o contribuciones? Escríbeme o abre un issue en este repositorio.

---
