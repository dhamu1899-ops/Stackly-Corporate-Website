const app = document.getElementById("app");
const loader = document.getElementById("loader");
const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
const themeToggle = document.getElementById("themeToggle");
const progressBar = document.getElementById("progressBar");
const cursorGlow = document.getElementById("cursorGlow");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(() => loader.style.display = "none", 400);
  }, 3000);
});

const services = [
  ["Web Development", "Responsive websites and scalable business web applications.", "assest/1.webp"],
  ["UI/UX Design", "Premium user interface designs for websites and applications.", "assest/2.webp"],
  ["Digital Marketing", "SEO, branding, social media, and digital growth strategies.", "assest/3.webp"],
  ["AI Automation", "Smart automation systems to improve business productivity.", "assest/4.webp"],
  ["Mobile App Development", "Modern mobile applications with smooth user experience.", "assest/5.webp"],
  ["Data Processing", "Clean data workflows, reporting, and business insights.", "assest/6.webp"]
];

const blogs = [
  ["Web Development", "Why Every Business Needs a Website", "A professional website improves trust and visibility.", "assest/1.webp"],
  ["Marketing", "How Digital Marketing Helps Growth", "Digital marketing helps attract and convert customers.", "assest/3.webp"],
  ["AI", "AI Automation for Small Business", "Automation saves time and improves productivity.", "assest/4.webp"],
  ["Design", "Importance of UI/UX Design", "Good design improves user experience and conversions.", "assest/2.webp"],
  ["Business", "Corporate Branding Tips", "Strong branding helps customers remember your business.", "assest/5.webp"],
  ["Web Development", "Modern Website Trends", "Modern websites use clean layouts and fast performance.", "assest/6.webp"]
];

const testimonials = [
  ["Stackly delivered a clean and professional website for our company.", "Joe Davis", "CEO"],
  ["The team created a modern solution that improved our business presence.", "Daniel Roden", "Managing Director"],
  ["Very professional service with strong design and development quality.", "Michael Clark", "Business Owner"]
];

let testimonialIndex = 0;
let yearly = false;

function pageHero(title, text) {
  return `
    <section class="page-hero">
      <span>Stackly Corporate</span>
      <h1>${title}</h1>
      <p>${text}</p>
      <div class="breadcrumb">Home / ${title}</div>
    </section>
  `;
}
function showLoaderThenHome() {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.style.display = "grid";
    loader.style.opacity = "1";
    loader.style.pointerEvents = "auto";
  }

  setTimeout(() => {
    location.hash = "home";
    renderPage();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setTimeout(() => {
      if (loader) {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
          loader.style.display = "none";
        }, 400);
      }
    }, 800);

  }, 800);
}

document.querySelectorAll(".home-refresh").forEach(logo => {
  logo.addEventListener("click", function(e) {
    e.preventDefault();
    showLoaderThenHome();
  });
});

function serviceCards(limit = services.length) {
  return services.slice(0, limit).map((s, i) => `
    <div class="service-card zoom-in">
      <div class="service-img" style="background-image:url('${s[2]}')"></div>
      <div class="service-body">
        <small>0${i + 1}.</small>
        <h3>${s[0]}</h3>
        <p>${s[1]}</p>
      </div>
    </div>
  `).join("");
}

function statsMarquee() {
  const item = `
    <div class="stat-card"><h2>250+</h2><p>Projects</p></div>
    <div class="stat-card"><h2>120+</h2><p>Clients</p></div>
    <div class="stat-card"><h2>15+</h2><p>Experts</p></div>
    <div class="stat-card"><h2>5+</h2><p>Years</p></div>
    <div class="stat-card"><h2>98%</h2><p>Success Rate</p></div>
    <div class="stat-card"><h2>24/7</h2><p>Support</p></div>
  `;

  return `
    <section class="stats-marquee">
      <div class="stats-track">${item}${item}</div>
    </section>
  `;
}

function servicesSliderSection() {
  return `
    <section class="section soft">
      <div class="section-title reveal">
        <span>Our Services</span>
        <h2>Digital Services That Build Your Brand</h2>
        <p>Premium service cards with left and right movement.</p>
      </div>

      <div class="service-slider-wrap">
        <div class="service-slider" id="serviceSlider">
          ${serviceCards()}
        </div>

        <div class="slider-actions">
          <button onclick="slideServices(-1)">‹</button>
          <button onclick="slideServices(1)">›</button>
        </div>
      </div>
    </section>
  `;
}

function slideServices(direction) {
  const slider = document.getElementById("serviceSlider");
  if (!slider) return;
  slider.scrollLeft += direction * 360;
}

function premiumAboutSection() {
  return `
    <section class="section">
      <div class="about-premium">
        <div class="about-collage fade-left">
          <div class="about-main-img"></div>
          <div class="about-mini-card one">
            <h3>9+</h3>
            <p>Years Experience</p>
          </div>
          <div class="about-mini-card two">
            <h3>250+</h3>
            <p>Projects Delivered</p>
          </div>
        </div>

        <div class="about-premium-content fade-right">
          <span class="eyebrow">Who We Are</span>
          <h2>We design digital systems that help businesses scale faster.</h2>
          <p>
            Stackly is a modern technology company focused on corporate websites,
            digital products, automation systems, branding, and growth solutions.
          </p>
          <p>
            Our team combines strategy, design, and technology to create premium
            user experiences that are clean, responsive, and business-focused.
          </p>

          <div class="about-feature-grid">
            <div class="about-feature">✔ Strategy First</div>
            <div class="about-feature">✔ Premium UI/UX</div>
            <div class="about-feature">✔ Scalable Code</div>
            <div class="about-feature">✔ Growth Support</div>
          </div>

          <a href="#about" class="btn">Know More</a>
        </div>
      </div>
    </section>
  `;
}
function refreshServicesPage() {
  location.hash = "services";

  setTimeout(() => {
    renderPage();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 80);
}

document.querySelectorAll(".service-refresh").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    // Always refresh Services page, even already on Services
    refreshServicesPage();
  });
});

function expertiseChart() {
  return `
    <section class="section soft">
      <div class="section-title reveal">
        <span>Our Expertise</span>
        <h2>Business Capability Dashboard</h2>
        <p>Animated charts for design, development, marketing, automation, and business growth.</p>
      </div>

      <div class="chart-grid">
        <div class="chart-card zoom-in">
          <h3>Expertise Distribution</h3>
          <div class="pie-chart">
            <div class="pie-inner">
              <strong>100%</strong>
              <small>Skill Mix</small>
            </div>
          </div>

          <div class="chart-legend">
            <span><i style="background:#2563eb"></i> Web Development - 40%</span>
            <span><i style="background:#60a5fa"></i> UI/UX Design - 30%</span>
            <span><i style="background:#14b8a6"></i> Digital Marketing - 18%</span>
            <span><i style="background:#94a3b8"></i> AI Automation - 12%</span>
          </div>
        </div>

        <div class="chart-card zoom-in">
          <h3>Performance Score</h3>
          <div class="bar-chart">
            ${[
              ["Web Apps", "92%"],
              ["UI/UX", "89%"],
              ["Marketing", "86%"],
              ["Automation", "82%"]
            ].map(row => `
              <div class="chart-row">
                <span>${row[0]}</span>
                <div class="chart-line"><i style="width:${row[1]}"></i></div>
                <b>${row[1]}</b>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="chart-card zoom-in">
          <h3>Yearly Growth</h3>
          <div class="line-chart">
            ${[
              ["2022", "35%", "35%"],
              ["2023", "50%", "50%"],
              ["2024", "68%", "68%"],
              ["2025", "82%", "82%"],
              ["2026", "96%", "96%"]
            ].map(item => `
              <div style="flex:1">
                <div class="line-bar" style="height:${item[1]}"><span>${item[2]}</span></div>
                <div class="line-year">${item[0]}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="chart-card zoom-in">
          <h3>Project Focus</h3>
          <div class="bar-chart">
            ${[
              ["Corporate", "90%"],
              ["Startup", "78%"],
              ["SaaS", "84%"],
              ["Automation", "76%"]
            ].map(row => `
              <div class="chart-row">
                <span>${row[0]}</span>
                <div class="chart-line"><i style="width:${row[1]}"></i></div>
                <b>${row[1]}</b>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function contactSection(full = true) {
  return `
    <section class="section ${full ? "" : "soft"}">
      <div class="contact-premium">
        <div class="contact-panel fade-left">
          <span class="eyebrow" style="color:#dbeafe">Let’s Chat</span>
          <h2>Have a project in mind?</h2>
          <p>
            Tell us about your business idea. We’ll help you plan, design,
            and build a premium digital solution.
          </p>

          <div class="contact-list">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div><strong>Email</strong><span>info@thestackly.com</span></div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div><strong>Phone</strong><span>+91 70107 92745</span></div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div><strong>Location</strong><span>MMR Complex, Salem, Tamil Nadu</span></div>
            </div>
          </div>
        </div>

        <form class="form fade-right" id="contactForm">
          <div class="form-row">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
          </div>

          <div class="form-row">
            <input type="tel" placeholder="Phone Number" required>
            <input type="text" placeholder="Subject" required>
          </div>

          <textarea placeholder="Tell us about your project..." required></textarea>
          <button type="submit">Send Message</button>
          <p id="formMsg"></p>
        </form>
      </div>
    </section>
  `;
}

function mapSection() {
  return `
    <section class="section">
      <div class="section-title reveal">
        <span>Location</span>
        <h2>Find Us In Salem</h2>
        <p>Stackly office location reference in Salem, Tamil Nadu.</p>
      </div>

      <div class="map-wrap reveal">
        <iframe
          src="https://www.google.com/maps?q=Stackly%20MMR%20Complex%20Salem%20Tamil%20Nadu&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  `;
}

function homePage() {
  return `
    <div class="page">
      <section class="hero">
        <div class="fade-left">
          <span class="eyebrow">Corporate IT Solutions</span>
          <h1>Solutions That Power <span class="gradient-text">Business Success</span></h1>
          <p>We create modern websites, automation tools, digital products, and IT solutions that help businesses grow faster.</p>

          <div class="hero-buttons">
            <a href="#services" class="btn">Explore Services</a>
            <a href="#contact" class="btn secondary">Start Project</a>
          </div>

          <div class="hero-badges">
            <span>Premium UI</span>
            <span>Responsive</span>
            <span>Business Growth</span>
          </div>
        </div>

        <div class="hero-visual fade-right">
          <div class="hero-img"></div>
          <div class="float-card float-one">
            <h3>120+</h3>
            <p>Professionals</p>
          </div>
          <div class="float-card float-two">
            <h3>98%</h3>
            <p>Client Success</p>
          </div>
        </div>
      </section>

      ${statsMarquee()}
      ${servicesSliderSection()}
      ${premiumAboutSection()}
      ${expertiseChart()}
      ${testimonialSection()}
      ${ctaSection()}
      ${contactSection(false)}
    </div>
  `;
}

function aboutPage() {
  return `
    <div class="page">
      ${pageHero("About Us", "Learn more about our company story, mission, vision, and team.")}
      ${premiumAboutSection()}

      <section class="section soft">
        <div class="grid-2">
          <div class="card zoom-in">
            <h3>Our Mission</h3>
            <p>To help businesses grow with modern technology, clean design, and smart automation.</p>
          </div>
          <div class="card zoom-in">
            <h3>Our Vision</h3>
            <p>To become a trusted technology partner for startups, small businesses, and enterprises.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-title reveal">
          <span>Timeline</span>
          <h2>Our Growth Journey</h2>
        </div>
        <div class="timeline">
          ${["2015 - Company Founded", "2018 - 100+ Projects Completed", "2021 - Expanded Digital Services", "2026 - Premium Corporate Solutions"].map(t => `
            <div class="timeline-item reveal">
              <strong>${t.split(" - ")[0]}</strong>
              <p>${t.split(" - ")[1]}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="section soft">
        <div class="section-title reveal">
          <span>Team</span>
          <h2>Meet Our Experts</h2>
        </div>
        <div class="grid-3">
          ${["Project Manager", "UI/UX Designer", "Frontend Developer"].map(name => `
            <div class="card team-card zoom-in">
              <div class="avatar"></div>
              <h3>${name}</h3>
              <p>Experienced professional focused on premium business solutions.</p>
            </div>
          `).join("")}
        </div>
      </section>

      ${ctaSection()}
    </div>
  `;
}

function servicesPage() {
  return `
    <div class="page">
      ${pageHero("Services", "Explore our complete digital service solutions.")}
      ${servicesSliderSection()}

      <section class="section">
        <div class="section-title reveal">
          <span>Process</span>
          <h2>How We Work</h2>
        </div>
        <div class="grid-3 process">
          ${["Research", "Planning", "Design", "Development", "Testing", "Launch"].map(item => `
            <div class="card zoom-in">
              <h3>${item}</h3>
              <p>We follow a clear process to deliver quality and professional results.</p>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="section soft">
        <div class="section-title reveal">
          <span>Preview</span>
          <h2>Popular Plans</h2>
        </div>
        ${pricingCards()}
      </section>

      ${ctaSection()}
    </div>
  `;
}

function pricingPage() {
  return `
    <div class="page">
      ${pageHero("Pricing", "Choose a plan that matches your business goals.")}

      <section class="section">
        <div class="pricing-toggle">
          <button class="${!yearly ? "active" : ""}" onclick="setPricing(false)">Monthly</button>
          <button class="${yearly ? "active" : ""}" onclick="setPricing(true)">Yearly</button>
        </div>
        ${pricingCards()}
      </section>

      <section class="section soft">
        <div class="section-title reveal">
          <span>Compare</span>
          <h2>Features Comparison</h2>
        </div>
        <table class="compare">
          <tr><th>Feature</th><th>Basic</th><th>Pro</th><th>Enterprise</th></tr>
          <tr><td>Responsive Design</td><td>✔</td><td>✔</td><td>✔</td></tr>
          <tr><td>SEO Setup</td><td>✖</td><td>✔</td><td>✔</td></tr>
          <tr><td>Animations</td><td>✖</td><td>✔</td><td>✔</td></tr>
          <tr><td>Custom Features</td><td>✖</td><td>✖</td><td>✔</td></tr>
        </table>
      </section>

      <section class="section">
        <div class="section-title reveal">
          <span>FAQ</span>
          <h2>Common Questions</h2>
        </div>
        <div class="faq">
          ${["How long does a website take?", "Do you provide responsive design?", "Can I upgrade my plan later?"].map(q => `
            <div class="faq-item reveal">
              <div class="faq-question">${q}<span>+</span></div>
              <div class="faq-answer">Yes, we provide professional support and flexible solutions based on your business needs.</div>
            </div>
          `).join("")}
        </div>
      </section>

      ${ctaSection()}
    </div>
  `;
}

function pricingCards() {
  const basic = yearly ? "₹99,999" : "₹9,999";
  const pro = yearly ? "₹2,49,999" : "₹24,999";
  const enterprise = yearly ? "₹4,99,999" : "₹49,999";

  return `
    <div class="grid-3">
      <div class="price-card zoom-in">
        <h3>Basic</h3>
        <div class="price">${basic}</div>
        <p>Best for landing pages.</p>
        <ul><li>Single Page</li><li>Responsive Design</li><li>Contact Form</li></ul>
        <a href="#contact" class="btn">Choose Plan</a>
      </div>

      <div class="price-card featured zoom-in">
        <h3>Professional</h3>
        <div class="price">${pro}</div>
        <p>Best for corporate websites.</p>
        <ul><li>5 Pages</li><li>SEO Setup</li><li>Animations</li></ul>
        <a href="#contact" class="btn">Choose Plan</a>
      </div>

      <div class="price-card zoom-in">
        <h3>Enterprise</h3>
        <div class="price">${enterprise}</div>
        <p>Best for custom projects.</p>
        <ul><li>Custom Pages</li><li>Advanced Features</li><li>Priority Support</li></ul>
        <a href="#contact" class="btn">Choose Plan</a>
      </div>
    </div>
  `;
}

function blogPage() {
  return `
    <div class="page">
      ${pageHero("Blog", "Read latest insights about technology, design, marketing, and business.")}

      <section class="section soft">
        <div class="filter-tabs">
          ${["All", "Web Development", "Marketing", "AI", "Business", "Design"].map(c => `
            <button onclick="filterBlogs('${c}')" class="${c === "All" ? "active" : ""}">${c}</button>
          `).join("")}
        </div>

        <div class="grid-3" id="blogGrid"></div>

        <div class="pagination">
          <button>1</button><button>2</button><button>3</button>
        </div>
      </section>

      <section class="cta">
        <h2>Subscribe to our newsletter</h2>
        <p>Get latest business and technology updates.</p>
        <a href="#contact" class="btn white">Subscribe</a>
      </section>
    </div>
  `;
}

function renderBlogCards(category = "All") {
  const grid = document.getElementById("blogGrid");
  if (!grid) return;

  const filtered = category === "All" ? blogs : blogs.filter(b => b[0] === category);

  grid.innerHTML = filtered.map(b => `
    <div class="blog-card zoom-in">
      <div class="blog-img" style="background-image:linear-gradient(rgba(37,99,235,0.25), rgba(37,99,235,0.25)), url('${b[3]}')"></div>
      <span>${b[0]}</span>
      <h3>${b[1]}</h3>
      <p>${b[2]}</p>
      <br>
      <a href="#blog-detail" class="btn">Read More</a>
    </div>
  `).join("");

  revealElements();
}

function filterBlogs(category) {
  document.querySelectorAll(".filter-tabs button").forEach(btn => {
    btn.classList.remove("active");
    if (btn.textContent === category) btn.classList.add("active");
  });
  renderBlogCards(category);
}

function blogDetailPage() {
  return `
    <div class="page">
      ${pageHero("Blog Details", "Detailed article page with sidebar and related content.")}

      <section class="section soft">
        <div class="article-layout">
          <article class="article fade-left">
            <h2>Why Every Business Needs a Premium Website</h2>
            <p>By Admin • May 2026</p>
            <div class="article-img"></div>
            <p>A premium website builds trust, improves visibility, and helps businesses convert visitors into customers.</p>
            <p>Modern corporate websites must be responsive, fast, clean, and easy to use.</p>
            <p>With SEO, branding, and clear CTA sections, your website can become a powerful business asset.</p>
          </article>

          <aside class="sidebar fade-right">
            <div class="sidebar-box">
              <h3>Recent Posts</h3>
              <a href="#blog-detail">Website Trends 2026</a>
              <a href="#blog-detail">AI in Business</a>
              <a href="#blog-detail">UI/UX Design Tips</a>
            </div>
            <div class="sidebar-box">
              <h3>Share</h3>
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  `;
}

function contactPage() {
  return `
    <div class="page">
      ${pageHero("Contact Us", "Let’s discuss your next digital project.")}
      ${contactSection(true)}
      ${mapSection()}
      ${ctaSection()}
    </div>
  `;
}

function testimonialSection() {
  return `
    <section class="section">
      <div class="section-title reveal">
        <span>Testimonials</span>
        <h2>What Clients Say</h2>
      </div>
      <div class="testimonial-card zoom-in">
        <p id="testimonialText"></p>
        <h3 id="testimonialName"></h3>
        <span id="testimonialRole"></span>
        <div class="testimonial-actions">
          <button onclick="prevTestimonial()">‹</button>
          <button onclick="nextTestimonial()">›</button>
        </div>
      </div>
    </section>
  `;
}

function ctaSection() {
  return `
    <section class="cta reveal">
      <h2>Ready to start your project?</h2>
      <p>Let’s build a premium digital solution for your business.</p>
      <a href="#contact" class="btn white">Start Project</a>
    </section>
  `;
}

function showTestimonial() {
  const text = document.getElementById("testimonialText");
  const name = document.getElementById("testimonialName");
  const role = document.getElementById("testimonialRole");

  if (!text) return;

  text.textContent = testimonials[testimonialIndex][0];
  name.textContent = testimonials[testimonialIndex][1];
  role.textContent = testimonials[testimonialIndex][2];
}

function nextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial();
}

function prevTestimonial() {
  testimonialIndex = testimonialIndex === 0 ? testimonials.length - 1 : testimonialIndex - 1;
  showTestimonial();
}

setInterval(nextTestimonial, 4500);

function setPricing(value) {
  yearly = value;
  renderPage();
}


function notFoundPage() {
  return `
    <section class="page-hero not-found-page">
      <span>404 Error</span>
      <h1>Page Not Found</h1>
      <p>The page or social media profile you clicked is not available yet. Please go back to the homepage or contact Stackly.</p>
      <div class="hero-buttons">
        <a href="#home" class="btn">Back to Home</a>
        <a href="#contact" class="btn secondary">Contact Us</a>
      </div>
    </section>
  `;
}

function renderPage() {
  const route = location.hash.replace("#", "") || "home";

  const pages = {
    home: homePage,
    about: aboutPage,
    services: servicesPage,
    pricing: pricingPage,
    blog: blogPage,
    "blog-detail": blogDetailPage,
    contact: contactPage,
    "404": notFoundPage
  };

  app.innerHTML = pages[route] ? pages[route]() : notFoundPage();

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${route}`);
  });

  navLinks.classList.remove("show");
  menuBtn.textContent = "☰";

  setTimeout(() => {
    revealElements();
    showTestimonial();
    renderBlogCards();
    setupFAQ();
    setupForms();
    window.scrollTo(0, 0);
  }, 50);
}

function revealElements() {
  document.querySelectorAll(".reveal, .fade-left, .fade-right, .zoom-in").forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
}

function setupFAQ() {
  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
      q.parentElement.classList.toggle("open");
    });
  });
}

function setupForms() {
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const msg = form.querySelector("#formMsg");
      if (msg) msg.textContent = "Message sent successfully!";

      form.reset();

      setTimeout(() => {
        if (msg) msg.textContent = "";
      }, 3000);
    });
  });
}


document.addEventListener("click", e => {
  const link = e.target.closest("a");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href || href === "#") {
    e.preventDefault();
    location.hash = "404";
  }
});

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuBtn.textContent = navLinks.classList.contains("show") ? "✕" : "☰";
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

window.addEventListener("hashchange", renderPage);

window.addEventListener("scroll", () => {
  revealElements();

  const height = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${(window.scrollY / height) * 100}%`;

  document.querySelector(".header").classList.toggle("scrolled", window.scrollY > 50);
});

document.addEventListener("mousemove", e => {
  if (!cursorGlow) return;
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";

  const visual = document.querySelector(".hero-visual");
  if (visual) {
    const x = (window.innerWidth / 2 - e.clientX) / 55;
    const y = (window.innerHeight / 2 - e.clientY) / 55;
    visual.style.transform = `translate(${x}px, ${y}px)`;
  }
});

renderPage();