// Menu responsive simple y accesible
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const visible = nav.getAttribute('data-visible') === 'true';
      nav.setAttribute('data-visible', String(!visible));
      toggle.setAttribute('aria-expanded', String(!visible));
    });

    // Cerrar al hacer click fuera (en móvil)
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.setAttribute('data-visible', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ========================================
  // Menú desplegable de secciones en header
  // ========================================
  
  const dropdownMenu = document.querySelector('.dropdown-menu ul');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const sectionsDropdown = document.querySelector('.sections-dropdown');
  const mainContent = document.querySelector('main');
  
  if (dropdownMenu && mainContent) {
    // Buscar todos los h2 en el contenido
    const headings = mainContent.querySelectorAll('section h2');
    
    if (headings.length > 0) {
      headings.forEach((heading, index) => {
        // Generar ID si no existe
        if (!heading.id) {
          heading.id = `section-${index + 1}`;
        }
        
        // Crear enlace en el dropdown
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;
        a.classList.add('section-link');
        
        // Cerrar dropdown al hacer clic en un enlace
        a.addEventListener('click', function() {
          if (sectionsDropdown) {
            sectionsDropdown.classList.remove('active');
          }
        });
        
        li.appendChild(a);
        dropdownMenu.appendChild(li);
      });
      
      // Toggle del dropdown
      if (dropdownToggle && sectionsDropdown) {
        dropdownToggle.addEventListener('click', function(e) {
          e.stopPropagation();
          sectionsDropdown.classList.toggle('active');
        });
        
        // Cerrar al hacer clic fuera
        document.addEventListener('click', function(e) {
          if (!sectionsDropdown.contains(e.target)) {
            sectionsDropdown.classList.remove('active');
          }
        });
      }
      
      // Resaltar sección activa en el dropdown
      function highlightActiveSection() {
        const scrollPosition = window.scrollY + 150;
        
        headings.forEach((heading) => {
          const section = heading.closest('section');
          if (!section) return;
          
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const link = dropdownMenu.querySelector(`a[href="#${heading.id}"]`);
          
          if (link && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remover active de todos
            dropdownMenu.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            // Añadir active al actual
            link.classList.add('active');
          }
        });
      }
      
      // Ejecutar al cargar y al hacer scroll
      highlightActiveSection();
      window.addEventListener('scroll', highlightActiveSection);
    } else {
      // Si no hay secciones, ocultar el dropdown
      if (sectionsDropdown) {
        sectionsDropdown.style.display = 'none';
      }
    }
  }
});
