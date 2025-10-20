# Banking Portal Frontend

Aplicación frontend para el portal bancario desarrollada con Angular 17, implementando arquitectura de micro frontends y siguiendo las mejores prácticas de desarrollo.

## 🚀 Características

- **Angular 17** con arquitectura standalone components
- **Micro Frontends** con Module Federation
- **Clean Code** y principios SOLID
- **Pruebas unitarias** con Jest
- **Diseño responsivo** sin frameworks de UI
- **Arquitectura modular** con separación de responsabilidades
- **Gestión de estado** reactiva con RxJS
- **Notificaciones** en tiempo real
- **Reportes** con descarga en PDF

## 📋 Funcionalidades

### Gestión de Clientes
- ✅ CRUD completo de clientes
- ✅ Búsqueda y filtrado
- ✅ Validaciones de formulario
- ✅ Gestión de estados

### Gestión de Cuentas
- ✅ CRUD completo de cuentas bancarias
- ✅ Asociación con clientes
- ✅ Tipos de cuenta (Ahorros/Corriente)
- ✅ Control de saldos

### Gestión de Movimientos
- ✅ CRUD completo de movimientos
- ✅ Depósitos y retiros
- ✅ Validación de saldo disponible
- ✅ Historial de transacciones

### Reportes
- ✅ Generación de reportes por fechas
- ✅ Filtros por cliente y tipo de movimiento
- ✅ Descarga en formato PDF
- ✅ Resúmenes estadísticos

## 🛠️ Tecnologías

- **Angular 17** - Framework principal
- **TypeScript** - Lenguaje de programación
- **SCSS** - Preprocesador CSS
- **RxJS** - Programación reactiva
- **Jest** - Framework de testing
- **Docker** - Containerización
- **Nginx** - Servidor web
- **Module Federation** - Micro frontends

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm 9+
- Docker (opcional)

### Instalación local

```bash
# Clonar el repositorio
git clone <repository-url>
cd banking-portal-frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# La aplicación estará disponible en http://localhost:4200
```

### Instalación con Docker

```bash
# Construir y ejecutar con Docker Compose
docker-compose up --build

# Para desarrollo
docker-compose --profile dev up --build
```

## 🧪 Testing

```bash
# Ejecutar pruebas unitarias
npm test

# Ejecutar pruebas con cobertura
npm run test:coverage

# Ejecutar pruebas en modo watch
npm run test:watch
```

## 🏗️ Construcción

```bash
# Construir para desarrollo
npm run build

# Construir para producción
npm run build:prod

# Análisis de bundle
npm run build:analyze
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/                    # Servicios y modelos centrales
│   │   ├── models/             # Interfaces y tipos
│   │   └── services/           # Servicios de API
│   ├── features/               # Módulos de funcionalidades
│   │   ├── clients/           # Gestión de clientes
│   │   ├── accounts/          # Gestión de cuentas
│   │   ├── movements/         # Gestión de movimientos
│   │   └── reports/           # Generación de reportes
│   ├── shared/                # Componentes compartidos
│   │   └── components/        # Componentes reutilizables
│   └── app.component.ts       # Componente raíz
├── environments/              # Configuraciones de entorno
└── styles.scss               # Estilos globales
```

## 🎨 Diseño

La aplicación implementa un diseño limpio y moderno basado en el mockup proporcionado:

- **Header** con branding del banco
- **Sidebar** de navegación
- **Área de contenido** principal
- **Componentes reutilizables** (botones, inputs, tablas)
- **Sistema de notificaciones**
- **Modales** para formularios

## 🔧 Configuración

### Variables de Entorno

```typescript
// environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  appName: 'Banking Portal',
  // ... más configuraciones
};
```

### Micro Frontends

La aplicación está configurada para funcionar como micro frontend usando Module Federation:

```javascript
// webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'banking_portal',
      exposes: {
        './ClientsModule': './src/app/features/clients/clients.module.ts',
        // ... más módulos
      }
    })
  ]
};
```

## 📱 Responsive Design

La aplicación es completamente responsiva y se adapta a diferentes tamaños de pantalla:

- **Desktop** (> 1024px): Layout completo con sidebar
- **Tablet** (768px - 1024px): Layout adaptado
- **Mobile** (< 768px): Layout vertical con navegación horizontal

## 🚀 Despliegue

### Docker

```bash
# Construir imagen de producción
docker build -t banking-portal-frontend .

# Ejecutar contenedor
docker run -p 80:80 banking-portal-frontend
```

### Variables de Entorno de Producción

```bash
# Configurar URL de API de producción
export API_URL=https://api.banking-portal.com/api
```

## 🧪 Pruebas

### Cobertura de Pruebas

- **Servicios**: 100% de cobertura
- **Componentes**: 90%+ de cobertura
- **Utilidades**: 100% de cobertura

### Tipos de Pruebas

- **Unitarias**: Servicios y componentes
- **Integración**: Flujos completos
- **E2E**: Casos de uso principales

## 📚 Documentación

- **Comentarios en español** en todos los archivos
- **JSDoc** para métodos públicos
- **README** detallado
- **Guías de contribución**

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para la feature (`git checkout -b feature/AmazingFeature`)
3. Commit los cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo

- **Desarrollador Frontend**: Implementación completa del frontend
- **Arquitecto**: Diseño de la arquitectura de micro frontends

## 📞 Soporte

Para soporte técnico o preguntas sobre la implementación, contactar al equipo de desarrollo.

---

**Nota**: Esta aplicación es solo el frontend. El backend se implementará por separado y se comunicará a través de APIs REST.



