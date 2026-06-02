import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Menu, MessageCircle, X } from 'lucide-react';

type Product = {
  step: string;
  title: string;
  description: string;
  image: string;
  imageFirst?: boolean;
};

type DemoStep = {
  label: string;
  caption: string;
  step: string;
  video: string;
};

const navLinks = [
  { label: 'El problema', href: '#problema' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Precio', href: '#precio' },
];

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

const costCards: Array<[string, string]> = [
  ['¿7 de cada 10?', 'presupuestos que no cierras: ¿es el precio o que nadie volvió a llamar?'],
  ['48–72 h', 'la ventana para reenganchar a un cliente antes de que se enfríe'],
  ['0 €', 'es lo que recupera un presupuesto al que no haces seguimiento'],
];

const products: Product[] = [
  {
    step: 'Paso 01',
    title: 'Detectamos',
    description:
      'Conectamos los presupuestos que ya has enviado y marcamos los que llevan días sin respuesta. Ves de un vistazo dónde se te está enfriando el dinero.',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260529_044124_7d9e9e99-78d5-485c-8382-3d1685a93836.png&w=1920&q=85',
  },
  {
    step: 'Paso 02',
    title: 'Reactivamos',
    description:
      'Hacemos el seguimiento por WhatsApp y email. Tú grabas una nota de voz y la convertimos en mensajes que suenan a ti, no a un robot.',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260529_044042_d837e21b-4878-4dc8-a503-5e11792b7b82.png&w=1920&q=85',
    imageFirst: true,
  },
  {
    step: 'Paso 03',
    title: 'Cierras',
    description:
      'El cliente responde y vuelve a tu agenda. Tú solo te sientas a cerrar la obra que ya dabas por perdida.',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260529_044803_0c56d213-170c-4778-95dd-d0fe26470870.png&w=1920&q=85',
  },
];

const demos: DemoStep[] = [
  {
    label: 'Detección',
    caption: 'Presupuestos sin respuesta, localizados',
    step: '01',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260529_045622_14f89baa-54da-423c-be49-a15ec5e4c393.mp4',
  },
  {
    label: 'Reactivación',
    caption: 'Seguimiento por WhatsApp y email',
    step: '02',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260529_045633_7b0031d2-5d3e-4cc8-baba-a6ba8a9763d5.mp4',
  },
  {
    label: 'Cierre',
    caption: 'El cliente vuelve a tu agenda',
    step: '03',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260529_045649_60cbca55-5084-4577-b4f6-12390fac0ce4.mp4',
  },
];

const primaryCta =
  'inline-flex items-center justify-center gap-2 rounded-full bg-dark-100 px-5 py-2.5 text-sm font-semibold text-dark-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950';

const ghostCta =
  'inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-dark-100 transition-colors hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950';

const navLinkClass =
  'rounded-full px-3 py-1.5 text-sm font-medium text-dark-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950';

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
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-dark-950">
        <MessageCircle className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
      </span>
      [NOMBRE]
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-dark-950/[0.92] backdrop-blur-[10px]">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-5 lg:px-0">
        <a
          href="#"
          aria-label="[NOMBRE] inicio"
          className="shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950"
        >
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#reservar" className={primaryCta}>
            Reservar diagnóstico
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir navegación"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-dark-200 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-dark-950/[0.96] px-5 py-4 backdrop-blur-[10px] md:hidden">
          <nav className="mx-auto flex max-w-container flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 text-sm font-medium text-dark-200 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservar"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-dark-100 px-3 py-3 text-center text-sm font-semibold text-dark-950 transition-colors hover:bg-white"
            >
              Reservar diagnóstico
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function AnnouncementPill() {
  return (
    <a
      href="#como-funciona"
      className="group relative inline-flex overflow-hidden rounded-full p-px text-sm font-medium text-dark-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950"
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
        Reactivación automática de presupuestos
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
        <h1 className="mt-8 max-w-[56rem] text-pretty text-[2.5rem] font-medium leading-[1.07] tracking-tight sm:text-5xl md:text-[3.5rem] md:leading-[1.05]">
          Recupera los presupuestos de reforma que ya dabas por perdidos
        </h1>
        <p className="mt-7 max-w-[52rem] text-pretty text-lg leading-relaxed md:text-2xl md:leading-relaxed">
          <span className="text-dark-100">Para empresas de reformas que envían presupuestos altos.</span>{' '}
          <span className="text-dark-300">
            Hacemos el seguimiento por ti por WhatsApp y email, y reactivamos a los clientes que no
            contestaron. Tú solo grabas una nota de voz.
          </span>
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#reservar" className={primaryCta}>
            Ver dónde pierdes presupuestos
            <ArrowIcon />
          </a>
          <a href="#como-funciona" className={ghostCta}>
            Cómo funciona
          </a>
        </div>
        <p className="mt-5 text-sm text-dark-400">Desde 499€/mes · Sin permanencia</p>
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

function Problem() {
  return (
    <section id="problema" className="px-5 py-12 md:py-20 lg:px-10">
      <div className="mx-auto max-w-container">
        <div className="max-w-3xl">
          <h2 className="text-pretty text-3xl font-medium leading-tight tracking-tight md:text-[40px]">
            El dinero no está en el presupuesto. Está en el seguimiento.
          </h2>
          <p className="mt-4 max-w-prose text-pretty text-base leading-relaxed text-dark-300 md:text-lg">
            Una reforma grande casi nunca se cierra a la primera. Si no vuelves a contactar, el
            cliente se enfría y acaba llamando al que sí insistió.
          </p>
        </div>
        <div className="mt-9 flex flex-col gap-3 md:flex-row">
          {costCards.map(([value, label]) => (
            <div
              key={value}
              className="flex min-h-[9.5rem] flex-1 flex-col items-center justify-center rounded-2xl bg-dark-700 p-6 text-center"
            >
              <div className="text-balance text-2xl font-medium tracking-tight md:text-[30px]">
                {value}
              </div>
              <div className="mt-2 max-w-xs text-pretty text-sm leading-relaxed text-dark-300 md:text-base">
                {label}
              </div>
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
        <span className="text-sm font-semibold uppercase tracking-wider text-dark-400">
          {product.step}
        </span>
        <h3 className="mt-4 text-2xl font-medium tracking-tight md:text-[30px]">{product.title}</h3>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-dark-300">
          {product.description}
        </p>
        <a
          href="#reservar"
          className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.04] px-4 py-2 text-sm font-medium text-dark-100 backdrop-blur-[10px] transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950"
        >
          Reservar diagnóstico
          <ArrowIcon />
        </a>
      </div>
      <div
        className={`${imageOrder} relative min-h-[18rem] bg-dark-700 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.12),rgba(255,255,255,0.035)_42%,rgba(0,0,0,0)_100%)] md:min-h-full`}
      >
        <img
          src={product.image}
          alt={`${product.title}: ${product.description}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </article>
  );
}

function Products() {
  return (
    <section id="como-funciona" className="px-5 py-12 md:py-20 lg:px-10">
      <div className="mx-auto max-w-container">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-medium tracking-tight md:text-[48px] md:leading-tight">
            Una sola cosa, bien hecha
          </h2>
          <p className="mt-4 max-w-prose text-pretty text-base leading-relaxed text-dark-300 md:text-lg">
            Seguimiento automático de tus presupuestos por WhatsApp y email. Tres pasos. Tú apenas
            mueves un dedo.
          </p>
        </div>
        <div className="mt-9 flex flex-col gap-4">
          {products.map((product) => (
            <ProductCard key={product.step} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductDemos() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-5 py-12 md:py-20 lg:px-10">
      <div className="mx-auto max-w-[84rem]">
        <div className="mx-auto max-w-container">
          <h2 className="text-balance text-3xl font-medium tracking-tight md:text-[48px] md:leading-tight">
            Míralo funcionando
          </h2>
          <p className="mt-4 max-w-prose text-pretty text-base leading-relaxed text-dark-300 md:text-lg">
            Cada paso del sistema, en marcha: de detectar el presupuesto frío a recuperar al cliente.
          </p>
        </div>
        <div className="mt-9 flex flex-col gap-3 md:h-[30rem] md:flex-row">
          {demos.map((item, index) => {
            const isActive = active === index;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                aria-pressed={isActive}
                className={`group relative h-[25rem] overflow-hidden rounded-2xl border-2 text-left transition-all duration-500 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950 md:h-[30rem] ${
                  isActive
                    ? 'border-white/10 bg-dark-800 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.13),rgba(255,255,255,0.025)_48%,rgba(0,0,0,0)_100%)] md:flex-[5]'
                    : 'border-white/[0.07] bg-dark-800 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_48%,rgba(0,0,0,0)_100%)] md:flex-1'
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
                    <div className="text-base font-medium text-white">{item.label}</div>
                    <div className="mt-1 text-sm text-dark-200">{item.caption}</div>
                  </div>
                  <div className="hidden text-sm font-semibold uppercase tracking-wider text-white/70 md:block">
                    {item.step}
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

function Pricing() {
  const includes = [
    'Seguimiento automático por WhatsApp y email',
    'Personalización con tu nota de voz',
    'Reactivación de presupuestos sin respuesta',
    'Puesta en marcha incluida el primer mes',
  ];

  return (
    <section id="precio" className="px-5 py-12 md:py-20 lg:px-10">
      <div className="mx-auto max-w-container">
        <div className="mx-auto grid max-w-4xl overflow-hidden rounded-2xl bg-dark-800 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-dark-400">
              Una sola oferta. Sin paquetes.
            </span>
            <h2 className="text-balance text-2xl font-medium tracking-tight md:text-[32px] md:leading-tight">
              El seguimiento, hecho por nosotros
            </h2>
            <ul className="flex flex-col gap-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-dark-200 md:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                  <span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-5 border-t border-white/[0.06] bg-dark-700/40 p-8 md:border-l md:border-t-0 md:p-12">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-medium tracking-tight md:text-6xl">499€</span>
              <span className="text-base text-dark-300">/mes</span>
            </div>
            <div className="flex flex-col gap-2 text-sm leading-relaxed text-dark-300">
              <p>Sin permanencia. Cancelas cuando quieras.</p>
              <p>Primer mes 594€ — incluye instalación y puesta en marcha.</p>
            </div>
            <a href="#reservar" className={`${primaryCta} w-full`}>
              Reservar diagnóstico
              <ArrowIcon />
            </a>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-dark-100">
              <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
              Sin permanencia
            </span>
          </div>
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

function FinalCTA() {
  return (
    <section id="reservar" className="px-5 py-12 md:py-20 lg:px-10">
      <div className="relative mx-auto flex min-h-[30rem] max-w-container overflow-hidden rounded-2xl bg-dark-800 px-6 py-20 md:px-12">
        <GlobeCanvas />
        <div className="relative z-10 mx-auto flex max-w-[46rem] flex-col items-center justify-center text-center">
          <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-[40px]">
            ¿Cuántos presupuestos tienes ahora mismo sin respuesta?
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-base leading-relaxed text-dark-300 md:text-lg">
            En el diagnóstico te enseñamos cuánto dinero hay parado y cómo lo reactivamos. Gratis y
            sin compromiso.
          </p>
          <a href="#reservar" className={`${primaryCta} mt-7`}>
            Reservar diagnóstico
            <ArrowIcon />
          </a>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-4 py-2 text-sm text-dark-100 backdrop-blur-md">
            <span className="text-white/40">presupuesto</span>
            <span className="text-white/70">→ seguimiento → cerrado</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    {
      title: 'Producto',
      links: [
        { label: 'El problema', href: '#problema' },
        { label: 'Cómo funciona', href: '#como-funciona' },
        { label: 'Precio', href: '#precio' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { label: 'Reservar diagnóstico', href: '#reservar' },
        { label: 'WhatsApp', href: '#' },
        { label: 'LinkedIn', href: '#' },
      ],
    },
  ];

  return (
    <footer className="px-5 py-12 md:py-20 lg:px-10">
      <div className="mx-auto max-w-container">
        <div className="grid gap-12 border-t border-white/[0.08] pt-10 md:grid-cols-[1fr_2fr]">
          <div>
            <BrandLogo />
            <p className="mt-6 max-w-xs text-pretty text-sm text-white/40">
              Seguimiento automático de presupuestos para empresas de reformas en España.
            </p>
            <p className="mt-2 text-sm text-white/40">© 2026 [NOMBRE]</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-medium text-white">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="rounded text-sm text-white/45 transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-5">
            <a
              href="#"
              className="rounded text-sm text-white/45 transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Aviso legal
            </a>
            <a
              href="#"
              className="rounded text-sm text-white/45 transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Privacidad
            </a>
          </div>
          <p className="text-sm text-white/40">Desde 499€/mes · Sin permanencia</p>
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
      <Problem />
      <Products />
      <ProductDemos />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}

export default App;
