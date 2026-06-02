import { useEffect, useRef, useState } from 'react';
import { ArrowLeftRight, CircleDot, Diamond, Menu, X } from 'lucide-react';

type Product = {
  title: string;
  description: string;
  image: string;
  imageFirst?: boolean;
};

type Testimonial = {
  name: string;
  role: string;
  company: string;
  video: string;
};

const navLinks = ['Servicios', 'Sectores', 'Carreras'];
const logos = [
  { name: 'Streambase', width: 'w-36' },
  { name: 'Gridway', width: 'w-28' },
  { name: 'Vaultly', width: 'w-[5.375rem]' },
  { name: 'Meridian', width: 'w-[7.75rem]' },
  { name: 'Layrd', width: 'w-[5.75rem]' },
  { name: 'Velo', width: 'w-28' },
  { name: 'Canopy', width: 'w-[7.5rem]' },
  { name: 'Plex', width: 'w-28' },
  { name: 'Cloudwav', width: 'w-[10rem]' },
];

const products: Product[] = [
  {
    title: 'Estrategia',
    description:
      'Posicionamiento, ICP y messaging que alinean ventas y marketing para captar cuentas de alto valor.',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260529_044124_7d9e9e99-78d5-485c-8382-3d1685a93836.png&w=1920&q=85',
  },
  {
    title: 'Demand Gen',
    description: 'Campañas multicanal que generan pipeline cualificado y aceleran el ciclo comercial.',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260529_044042_d837e21b-4878-4dc8-a503-5e11792b7b82.png&w=1920&q=85',
    imageFirst: true,
  },
  {
    title: 'Sales Enablement',
    description:
      'Contenido, secuencias y activos comerciales que convierten leads en reuniones y oportunidades cerradas.',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260529_044803_0c56d213-170c-4778-95dd-d0fe26470870.png&w=1920&q=85',
  },
];

const testimonials: Testimonial[] = [
  {
    name: 'Matthias Richter Thornton-Lin',
    role: 'Co-Founder & CTO',
    company: 'Canopy',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260529_045622_14f89baa-54da-423c-be49-a15ec5e4c393.mp4',
  },
  {
    name: 'Priya Kaur',
    role: 'Co-Founder',
    company: 'Cloudwav',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260529_045633_7b0031d2-5d3e-4cc8-baba-a6ba8a9763d5.mp4',
  },
  {
    name: 'Nikolai Sundstrom',
    role: 'Head of Engineering',
    company: 'Streambase',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260529_045649_60cbca55-5084-4577-b4f6-12390fac0ce4.mp4',
  },
];

function ArrowIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.25 8h9.5M8.75 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrandLogo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-white ${className}`}
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-dark-950">
        N
      </span>
      Nexus B2B
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-dark-950/[0.92] backdrop-blur-[10px]">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-5 lg:px-0">
        <a href="#" aria-label="Nexus B2B home" className="shrink-0">
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-dark-200 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className="rounded-full px-3 py-1.5 text-sm font-medium text-dark-200 transition-colors hover:text-white"
          >
            Contactar
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-dark-200 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-dark-950/[0.96] px-5 py-4 backdrop-blur-[10px] md:hidden">
          <nav className="mx-auto flex max-w-container flex-col gap-1">
            {[...navLinks, 'Contactar'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 text-sm font-medium text-dark-200 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function AnnouncementPill() {
  return (
    <a
      href="#"
      className="group relative inline-flex overflow-hidden rounded-full p-px text-sm font-medium text-dark-100"
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-28 w-28 animate-spin"
        style={{
          background:
            'conic-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 40%, rgba(255,255,255,0.17) 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0))',
        }}
      />
      <span className="relative inline-flex items-center gap-2 rounded-full bg-dark-800 px-4 py-2.5 transition-colors group-hover:bg-dark-700">
        Nexus B2B cierra ronda Serie A de €12M
        <ArrowIcon className="h-3 w-3" />
      </span>
    </a>
  );
}

function Hero() {
  return (
    <section className="px-5 pt-16 pb-16 md:pt-[6.75rem] md:pb-[6.75rem] lg:px-10">
      <div className="mx-auto flex max-w-container flex-col items-center text-center">
        <AnnouncementPill />
        <h1 className="mt-8 max-w-[41.875rem] text-5xl font-medium leading-[1.05] tracking-tight md:text-[80px]">
          Marketing B2B para empresas que escalan
        </h1>
        <p className="mt-7 max-w-[56.5625rem] text-lg leading-relaxed md:text-2xl md:leading-relaxed">
          <span className="text-dark-100">Nexus B2B diseña estrategias de crecimiento</span>{' '}
          <span className="text-dark-300">
            para captar cuentas enterprise, acelerar pipeline y alinear equipos comerciales en mercados globales.
          </span>
        </p>
        <a
          href="#contacto"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-dark-100 px-5 py-2.5 text-sm font-semibold text-dark-950 transition-colors hover:bg-white"
        >
          Empezar ahora
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}

function VideoHero() {
  return (
    <section className="px-5 pb-12 lg:px-10">
      <div className="relative mx-auto aspect-video max-w-[69.125rem] overflow-hidden rounded-2xl bg-dark-800 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.14),rgba(255,255,255,0.035)_35%,rgba(255,255,255,0.075)_100%)]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260529_043503_69388bff-c5c3-45df-949e-cce4b09d224b.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
}

function LogoMarquee() {
  const repeated = Array.from({ length: 4 }, () => logos).flat();

  return (
    <section className="px-5 py-12 lg:px-10">
      <div className="relative mx-auto max-w-container overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-dark-950 to-transparent backdrop-blur-[3px] gradient-fade-left" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-dark-950 to-transparent backdrop-blur-[3px] gradient-fade-right" />
        <div className="flex w-max animate-marquee items-center">
          {repeated.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className={`${logo.width} shrink-0 text-center text-sm font-semibold uppercase tracking-wider text-dark-400 opacity-50`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const cards = [
    ['€48M+', 'pipeline generado al año'],
    ['3.2x', 'ROI medio en campañas'],
    ['<30 días', 'para lanzar una campaña'],
  ];

  return (
    <section id="servicios" className="px-5 py-12 md:py-20 lg:px-10">
      <div className="mx-auto max-w-container">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-[48px] md:leading-tight">
            Resultados que hablan solos
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-dark-300 md:text-lg">
            Nexus B2B ha impulsado el crecimiento de cientos de empresas en más de 20 mercados.
          </p>
        </div>
        <div className="mt-9 flex flex-col gap-3 md:flex-row">
          {cards.map(([value, label]) => (
            <div
              key={value}
              className="flex min-h-[8.5rem] flex-1 flex-col items-center justify-center rounded-2xl bg-dark-700 p-6 text-center md:min-h-[8.875rem]"
            >
              <div className="text-2xl font-medium tracking-tight md:text-[30px]">{value}</div>
              <div className="mt-2 text-sm text-dark-300 md:text-base">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const imageOrder = product.imageFirst ? 'md:order-1' : 'md:order-2';
  const textOrder = product.imageFirst ? 'md:order-2' : 'md:order-1';

  return (
    <article className="grid min-h-[25rem] grid-cols-1 overflow-hidden rounded-2xl bg-dark-800 md:grid-cols-2">
      <div className={`${textOrder} flex flex-col justify-center p-8 md:p-12`}>
        <h3 className="text-2xl font-medium tracking-tight md:text-[30px]">{product.title}</h3>
        <p className="mt-4 max-w-md leading-relaxed text-dark-300">{product.description}</p>
        <a
          href="#"
          className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.04] px-4 py-2 text-sm font-medium text-dark-100 backdrop-blur-[10px] transition-colors hover:bg-white/10"
        >
          Saber más
          <ArrowIcon />
        </a>
      </div>
      <div className={`${imageOrder} relative min-h-[18rem] bg-dark-700 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.12),rgba(255,255,255,0.035)_42%,rgba(0,0,0,0)_100%)] md:min-h-full`}>
        <img
          src={product.image}
          alt={`${product.title} infrastructure preview`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </article>
  );
}

function Products() {
  return (
    <section className="px-5 py-12 md:py-20 lg:px-10">
      <div className="mx-auto max-w-container">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-[48px] md:leading-tight">
            Servicios diseñados para B2B
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-dark-300 md:text-lg">
            Estrategia, demand generation y enablement comercial en un solo partner de crecimiento.
          </p>
        </div>
        <div className="mt-9 flex flex-col gap-4">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-5 py-12 md:py-20 lg:px-10">
      <div className="mx-auto max-w-[84rem]">
        <div className="mx-auto max-w-container">
          <h2 className="text-3xl font-medium tracking-tight md:text-[48px] md:leading-tight">
            Confianza de líderes B2B
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-dark-300 md:text-lg">
            Directivos y equipos comerciales que escalan con Nexus B2B.
          </p>
        </div>
        <div className="mt-9 flex flex-col gap-3 md:h-[30rem] md:flex-row">
          {testimonials.map((item, index) => {
            const isActive = active === index;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                className={`group relative h-[25rem] overflow-hidden rounded-2xl border-2 text-left transition-all duration-500 ease-in-out md:h-[30rem] ${
                  isActive ? 'border-white/10 bg-dark-800 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.13),rgba(255,255,255,0.025)_48%,rgba(0,0,0,0)_100%)] md:flex-[5]' : 'border-white/[0.07] bg-dark-800 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_48%,rgba(0,0,0,0)_100%)] md:flex-1'
                }`}
              >
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div
                  className={`absolute inset-x-0 bottom-0 flex items-end justify-between p-6 transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div>
                    <div className="text-base font-medium text-white">{item.name}</div>
                    <div className="mt-1 text-sm text-dark-200">{item.role}</div>
                  </div>
                  <div className="hidden text-sm font-semibold uppercase tracking-wider text-white/70 md:block">
                    {item.company}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const industryCards = [
    {
      title: 'SaaS & Plataformas',
      icon: ArrowLeftRight,
      stat: '55+',
      label: 'cuentas activas',
      company: 'CANOPY',
      description:
        'Canopy multiplica su pipeline enterprise con campañas ABM y contenido de valor en Nexus B2B.',
    },
    {
      title: 'Fintech & Data',
      icon: Diamond,
      stat: '85B',
      label: 'impresiones al mes',
      company: 'VAULTLY',
      description:
        'Vaultly escala su presencia en mercados regulados con estrategia de contenidos y lead nurturing.',
    },
    {
      title: 'Media & Tech',
      icon: CircleDot,
      stat: '5M+',
      label: 'leads cualificados',
      company: 'STREAMBASE',
      description:
        'Streambase acelera su go-to-market global con demand gen y sales enablement de Nexus B2B.',
    },
  ];

  return (
    <section id="sectores" className="px-5 py-12 md:py-20 lg:px-10">
      <div className="mx-auto max-w-container">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-[48px] md:leading-tight">
            Empresas que crecen con Nexus B2B
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-dark-300 md:text-lg">
            Las compañías B2B más ambiciosas confían en nosotros para escalar ingresos recurrentes.
          </p>
        </div>
        <div className="mt-9 grid grid-cols-1 gap-3 md:grid-cols-3">
          {industryCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href="#"
                className="rounded-2xl bg-dark-800 p-6 transition-colors hover:bg-dark-700/80 md:p-12"
              >
                <Icon className="h-6 w-6 text-dark-400" />
                <h3 className="mt-12 text-lg font-medium">{card.title}</h3>
                <div className="mt-8 text-4xl font-medium tracking-tight md:text-[48px]">
                  {card.stat}
                </div>
                <div className="mt-1 text-sm text-dark-300">{card.label}</div>
                <div className="mt-10 text-sm font-semibold uppercase tracking-wider text-dark-400">
                  {card.company}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-dark-300">{card.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dots: Array<{ x: number; y: number; phase: number; speed: number }> = [];
    let frame = 0;
    let animationId = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      const spacing = 24;
      for (let y = 0; y <= rect.height; y += spacing) {
        for (let x = 0; x <= rect.width; x += spacing) {
          dots.push({
            x,
            y,
            phase: Math.random() * Math.PI * 2,
            speed: 0.006 + Math.random() * 0.012,
          });
        }
      }
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const maxDistance = Math.hypot(centerX, centerY);

      ctx.clearRect(0, 0, rect.width, rect.height);

      dots.forEach((dot) => {
        const distance = Math.hypot(dot.x - centerX, dot.y - centerY);
        const centerBoost = 1 - Math.min(distance / maxDistance, 1);
        const pulse = (Math.sin(frame * dot.speed + dot.phase) + 1) / 2;
        const alpha = 0.01 + pulse * 0.055 + centerBoost * 0.085;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.min(alpha, 0.15)})`;
        ctx.fill();
      });

      frame += 1;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{
        maskImage: 'radial-gradient(ellipse 70% 60% at center, black 35%, transparent 78%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 70% 60% at center, black 35%, transparent 78%)',
      }}
    />
  );
}

function GlobeCTA() {
  return (
    <section id="contacto" className="px-5 py-12 md:py-20 lg:px-10">
      <div className="relative mx-auto flex min-h-[30rem] max-w-container overflow-hidden rounded-2xl bg-dark-800 px-6 py-20 md:px-12">
        <GlobeCanvas />
        <div className="relative z-10 mx-auto flex max-w-[35rem] flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-medium tracking-tight md:text-[48px] md:leading-tight">
            Crecimiento B2B para equipos modernos
          </h2>
          <a
            href="#contacto"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-dark-100 px-5 py-2.5 text-sm font-semibold text-dark-950 transition-colors hover:bg-white"
          >
            Empezar ahora
            <ArrowIcon />
          </a>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-4 py-2 text-sm text-dark-100 backdrop-blur-md">
            <span className="text-white/40">pipeline.nexusb2b</span>
            <span className="text-white/70">lead -&gt; MQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    ['Servicios', 'Estrategia', 'Demand Gen', 'Sales Enablement', 'Contenidos'],
    ['Sectores', 'SaaS & Plataformas', 'Fintech & Data', 'Media & Tech'],
    ['Carreras', 'Sobre nosotros', 'Trabaja con nosotros'],
    ['Contacto', 'X (Twitter)', 'LinkedIn', 'Agendar demo'],
  ];

  return (
    <footer id="carreras" className="px-5 py-12 md:py-20 lg:px-10">
      <div className="mx-auto max-w-container">
        <div className="grid gap-12 border-t border-white/[0.08] pt-10 md:grid-cols-[1fr_2fr]">
          <div>
            <BrandLogo />
            <p className="mt-6 text-sm text-white/40">Agencia B2B</p>
            <p className="mt-2 text-sm text-white/40">(c)2026 Nexus B2B, S.L.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {columns.map(([title, ...links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-white">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/45 transition-colors hover:text-white/70"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-6 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-5">
            <a href="#" className="text-sm text-white/45 transition-colors hover:text-white/70">
              Terms
            </a>
            <a href="#" className="text-sm text-white/45 transition-colors hover:text-white/70">
              Privacy
            </a>
          </div>
          <p className="max-w-2xl text-xs leading-relaxed text-white/25">
            Arc Cloud examples, infrastructure metrics, partner names and availability details on this page are
            illustrative for product demonstration purposes. Actual availability, performance and terms vary by
            workload, region, agreement and implementation.
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <Header />
      <Hero />
      <VideoHero />
      <LogoMarquee />
      <Stats />
      <Products />
      <Testimonials />
      <Industries />
      <GlobeCTA />
      <Footer />
    </main>
  );
}

export default App;
