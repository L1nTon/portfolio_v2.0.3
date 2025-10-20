
  // Данные проектов
const projectsData = [
  {
      id: 1,
      title: "Интернет-магазин",
      description: "Полностью адаптивный интернет-магазин с корзиной и системой фильтрации товаров.",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
      image: "project1.jpg",
      link: "#"
  },
  {
      id: 2,
      title: "Корпоративный сайт",
      description: "Современный корпоративный сайт с анимациями и интерактивными элементами.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "project2.jpg",
      link: "#"
  },
  {
      id: 3,
      title: "Портфолио фотографа",
      description: "Элегантное портфолио для фотографа с галереей и системой заказа.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "project3.jpg",
      link: "#"
  },
  {
      id: 4,
      title: "Приложение для заметок",
      description: "Минималистичное приложение для создания и управления заметками.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "project4.jpg",
      link: "#"
  },
  {
      id: 5,
      title: "Лендинг для стартапа",
      description: "Яркий лендинг для технологического стартапа с призывом к действию.",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
      image: "project5.jpg",
      link: "#"
  },
  {
      id: 6,
      title: "Блог платформа",
      description: "Платформа для ведения блога с системой комментариев и тегов.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "project6.jpg",
      link: "#"
  }
];

// Функция для рендеринга проектов
function renderProjects() {
    const container = document.getElementById('projects-container');
    
    projectsData.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card bg-white rounded-lg overflow-hidden border border-gray-300';
        projectElement.setAttribute('data-aos', 'fade-up');
        
        projectElement.innerHTML = `
            <div class="h-48 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                <span class="text-white text-lg font-bold">${project.title}</span>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => 
                        `<span class="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">${tech}</span>`
                    ).join('')}
                </div>
                <a href="${project.link}" class="text-black font-medium hover:underline">Подробнее →</a>
            </div>
        `;
        
        container.appendChild(projectElement);
    });
}

// Инициализация AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Рендеринг проектов
    renderProjects();
    
    // Мобильное меню
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Эффект следов от мыши
    const trailContainer = document.getElementById('mouse-trail');
    let dots = [];
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Создаем новый след
        const dot = document.createElement('div');
        dot.className = 'trail-dot';
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
        
        trailContainer.appendChild(dot);
        dots.push(dot);
        
        // Удаляем старые следы
        if (dots.length > 15) {
            const oldDot = dots.shift();
            if (oldDot && oldDot.parentNode) {
                oldDot.parentNode.removeChild(oldDot);
            }
        }
        
        // Плавное исчезновение следов
        dots.forEach((dot, index) => {
            setTimeout(() => {
                if (dot && dot.style) {
                    dot.style.opacity = '0';
                }
            }, index * 100);
        });
    });
    
    // Параллакс эффект для некоторых элементов
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // ===ПАРАЛЛАКС ПО МЫШИ HERO-SECTION===
    const hero = document.querySelector('section.min-h-screen');
    const illustrations = [
        ...hero.querySelectorAll('.absolute > img:not([src*="Tomb.png"])')
    ];

    hero.addEventListener('mousemove', (e) => {
        const { width, height, left, top } = hero.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / width;
        const y = (e.clientY - top - height / 2) / height;

        illustrations.forEach((img, i) => {
            const max = (30 + i * 5) * (-1)**i;
            img.style.transform = `translate(${x * max}px, ${y * max}px) scale(1.05)`;
        });
    });
    hero.addEventListener('mouseleave', () => {
        illustrations.forEach(img => {
            img.style.transform = '';
        });
    });
});