# Python Programming Guide

This project is a comprehensive guide to programming in Python. It includes various resources and information for beginners and experienced programmers alike.

## Project Structure

The project consists of the following files:

- **index.html**: The main entry point of the webpage, providing an overview of the Python programming guide and links to the subpages.
- **about.html**: Contains information about what Python is, including its history, features, and applications.
- **usage.html**: Explains how to use Python, covering installation, basic syntax, and examples of simple programs.
- **videos.html**: Includes embedded videos related to Python programming, providing visual learning resources.
- **css/main.css**: Contiene los estilos para la página (header responsive, variables, componentes).
- **assets/logo.svg**: Logo en SVG usado en la cabecera.
- **js/main.js**: Script pequeño para el menú responsivo y accesible.

## Getting Started

To view the webpage, open the `index.html` file in a web browser. For a better local testing experience you can serve the folder with a simple static server (ej. `python -m http.server`).

### Características Principales

- **Menú de navegación responsive**: Header con logo y menú hamburguesa para dispositivos móviles
- **Menú desplegable de secciones**: Dropdown interactivo en el header para navegar entre secciones
  - Se genera automáticamente a partir de los títulos H2
  - Botón "📑 Secciones" con indicador visual de apertura/cierre
  - Resalta la sección activa mientras navegas
  - Diseño compacto que no ocupa espacio innecesario
  - Smooth scroll entre secciones
  - Se cierra automáticamente al seleccionar una sección
  - En móvil: aparece desde abajo como panel deslizable
- **Diseño responsive**: Compatible con móviles, tablets y ordenadores portátiles
- **Logo personalizado**: SVG vectorial escalable
- **Estilos modernos**: Variables CSS, transiciones suaves, y componentes reutilizables

### Probar localmente

```powershell
# Navegar a la carpeta del proyecto
cd d:\Projects\Prototipo--Guia-python

# Iniciar servidor local
python -m http.server 8000

# Abrir en navegador: http://localhost:8000
```

## Installation

No installation is required. Simply download the project files and open `index.html` in your preferred web browser or run a local static server.

## Contributing

Feel free to contribute to this project by adding more resources, improving the content, or fixing any issues you find.

## License

This project is open-source and available for anyone to use and modify.
