import { useState, useEffect } from 'react'
import catipLogo from './assets/catip.png'
import './App.css'

// ─── Loading Screen ───────────────────────────────────────────────────────────
function LoadingScreen({ onDone }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(onDone, 600)
    }, 2200)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-inner">
        <div className="loading-logo-wrap">
          <img src={catipLogo} alt="Cati'p Logo" className="loading-logo" />
        </div>
        <div className="loading-brand">
          <span className="loading-c">C</span>ati&apos;p
        </div>
        <p className="loading-sub">Cakung Nitip</p>
        <div className="loading-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <img src={catipLogo} alt="Cati'p" className="nav-logo-img" />
          <span className="nav-brand"><span className="red">C</span>ati&apos;p</span>
        </div>

        {/* Desktop links + Mobile dropdown */}
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#layanan"    onClick={close}>Layanan</a></li>
          <li><a href="#cara-pesan" onClick={close}>Cara Pesan</a></li>
          <li><a href="#area"       onClick={close}>Area</a></li>
          <li><a href="#kontak"     onClick={close}>Kontak</a></li>
          <li>
            <a
              href="https://wa.me/6287878076530"
              className="nav-wa-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
               Order Sekarang
            </a>
          </li>
        </ul>

        {/* Burger — CSS shows only on mobile */}
        <button
          className={`burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-badge"> udah... mager aja biar kita yang berangkat..</div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-c">C</span>ati&apos;p
          </h1>
          <p className="hero-sub">Cakung Nitip</p>
          <p className="hero-desc">
            Titip belanja, titip makanan, antar jemput barang — semua beres tanpa kamu harus gerak!
          </p>
          <div className="hero-cta">
            <a
              href="https://wa.me/6287878076530"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
               Gass...order sekarang!
            </a>
            <a href="#layanan" className="btn-secondary">Lihat Layanan</a>
          </div>
          <div className="hero-area-tags">
            <span className="area-tag"> Cakung</span>
            <span className="area-tag"> Pulogebang</span>
            <span className="area-tag"> Malaka</span>
            <span className="area-tag"> Rorotan</span>
          </div>
        </div>

        <div className="hero-logo-wrap">
          <div className="hero-logo-card">
            <img src={catipLogo} alt="Cati'p mascot" className="hero-logo-img" />
          </div>
          <div className="hero-sticker hero-sticker-1">Siap Antar! </div>
          <div className="hero-sticker hero-sticker-2">Harga Oke! </div>
          <div className="hero-sticker hero-sticker-3">Fast Respon! </div>
        </div>
      </div>
    </section>
  )
}

// ─── Layanan ──────────────────────────────────────────────────────────────────
function Layanan() {
  const services = [
    {
      // icon: '📦',
      title: 'Jasa Ambil & Anter Barang',
      desc: 'Barang kamu perlu diambil atau dikirim? Tinggal bilang ke Cati\'p, kita yang urus. Dari dokumen, paket, belanjaan — semua kita handle!',
      highlight: 'Barang apapun, kita siap!',
      color: 'red',
    },
    {
      // icon: '🍔',
      title: 'Jasa Titip Makanan',
      desc: 'Lagi ngidam makanan dari warung favorit? Mager keluar? Nitip aja ke Cati\'p! Harga sesuai outlet, ongkir kita obrolin sampai deal.',
      highlight: 'Harga outlet, ongkir deal!',
      color: 'black',
    },
  ]

  return (
    <section className="layanan-section" id="layanan">
      <div className="section-header">
        <div className="section-tag">Layanan Kami</div>
        <h2 className="section-title">Apa Yang Bisa <span className="red">Cati&apos;p</span> Bantu?</h2>
        <p className="section-desc">Dua layanan andalan buat kamu yang #dirumahaja tapi tetap kebutuhan terpenuhi</p>
      </div>

      <div className="layanan-grid">
        {services.map((s, i) => (
          <div className={`layanan-card layanan-card-${s.color}`} key={i}>
            <div className="layanan-icon">{s.icon}</div>
            <h3 className="layanan-title">{s.title}</h3>
            <p className="layanan-desc">{s.desc}</p>
            <div className="layanan-highlight">{s.highlight}</div>
            <a
              href="https://wa.me/6287878076530"
              className="layanan-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Sekarang →
            </a>
          </div>
        ))}
      </div>

      <div className="price-note">
        <span className="price-icon">💬</span>
        <div>
          <strong>Soal Ongkir?</strong> Santai, kita obrolin dulu sampai deal. Ga ada biaya hidden!
        </div>
      </div>
    </section>
  )
}

// ─── Cara Pesan ───────────────────────────────────────────────────────────────
function CaraPesan() {
  const steps = [
    { num: '01', icon: '', title: 'Chat WhatsApp', desc: 'Hubungi kita via WhatsApp, ceritain mau titip apa atau barang mana yang mau diambil/diantar.' },
    { num: '02', icon: '', title: 'Diskusi & Deal', desc: 'Kita obrolin detail pesanan, alamat, dan ongkos kirim sampai kamu setuju.' },
    { num: '03', icon: '', title: 'Kita Berangkat!', desc: 'Setelah deal, Cati\'p langsung tancap gas ambil atau beliin pesanan kamu.' },
    { num: '04', icon: '', title: 'Barang Nyampe!', desc: 'Barang atau makanan tiba di tanganmu. Kamu tinggal santai di rumah!' },
  ]

  return (
    <section className="cara-section" id="cara-pesan">
      <div className="section-header">
        <div className="section-tag">Cara Pesan</div>
        <h2 className="section-title">Gampang Banget, <span className="red">4 Langkah</span> Doang!</h2>
      </div>
      <div className="cara-grid">
        {steps.map((s, i) => (
          <div className="cara-card" key={i}>
            <div className="cara-num">{s.num}</div>
            <div className="cara-icon">{s.icon}</div>
            <h3 className="cara-title">{s.title}</h3>
            <p className="cara-desc">{s.desc}</p>
            {i < steps.length - 1 && <div className="cara-arrow">→</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Area Coverage ────────────────────────────────────────────────────────────
function Area() {
  const areas = ['Cakung', 'Pulogebang', 'Malaka', 'Rorotan']

  return (
    <section className="area-section" id="area">
      <div className="section-header">
        <div className="section-tag">Area Layanan</div>
        <h2 className="section-title">Kita Ada di <span className="red">Sekitar Sini</span></h2>
        <p className="section-desc">Layanan Cati&apos;p tersedia di area berikut. Belum ada daerahmu? Chat kita dulu, siapa tau bisa!</p>
      </div>
      <div className="area-grid">
        {areas.map((a, i) => (
          <div className="area-card" key={i}>
            <span className="area-name">{a}</span>
          </div>
        ))}
      </div>
      <div className="area-note">
        <strong>Daerah lain?</strong> Hubungi kita dulu — kalau jaraknya masuk akal, kita usahain! 
      </div>
    </section>
  )
}

// ─── Keunggulan ───────────────────────────────────────────────────────────────
function Keunggulan() {
  const items = [
    { icon: '', title: 'Fast Respon', desc: 'Chat langsung dibalas, ga nunggu lama.' },
    { icon: '', title: 'Harga Transparan', desc: 'Ongkir diobrolin, ga ada biaya kaget.' },
    { icon: '', title: 'Bisa Diandalkan', desc: 'Sudah dipercaya warga sekitar Cakung.' },
    { icon: '', title: 'Siap Jalan', desc: 'Kita yang keluar, kamu tinggal santai.' },
  ]

  return (
    <section className="unggulan-section">
      <div className="section-header">
        <div className="section-tag">Kenapa Cati&apos;p?</div>
        <h2 className="section-title">Alasan Warga <span className="red">Pilih Kita</span></h2>
      </div>
      <div className="unggulan-grid">
        {items.map((item, i) => (
          <div className="unggulan-card" key={i}>
            <div className="unggulan-icon">{item.icon}</div>
            <h3 className="unggulan-title">{item.title}</h3>
            <p className="unggulan-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="cta-section" id="kontak">
      <div className="cta-inner">
        <div className="cta-logo">
          <img src={catipLogo} alt="Cati'p" className="cta-logo-img" />
        </div>
        <div className="cta-text">
          <h2 className="cta-title">Udah, mager aja!</h2>
          <p className="cta-desc">Biar <strong>Cati&apos;p</strong> yang berangkat. Chat sekarang, deal sekarang, beres sekarang!</p>
          <a
            href="https://wa.me/6287878076530"
            className="cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
             WhatsApp Cati&apos;p Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={catipLogo} alt="Cati'p" className="footer-logo" />
          <div>
            <div className="footer-name"><span className="red">C</span>ati&apos;p</div>
            <div className="footer-tagline">Cakung Nitip</div>
          </div>
        </div>
        <div className="footer-info">
          <p> Daerah Cakung, Pulogebang, Malaka, Rorotan</p>
          <p> WhatsApp: <a href="https://wa.me/6287878076530" target="_blank" rel="noopener noreferrer">+62 878-7807-6530</a></p>
        </div>
        <div className="footer-links">
          <a href="#layanan">Layanan</a>
          <a href="#cara-pesan">Cara Pesan</a>
          <a href="#area">Area</a>
          <a href="#kontak">Kontak</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Cati&apos;p Cakung Nitip — Made with Mochamad Hegel Mantori</p>
      </div>
    </footer>
  )
}

// ─── App Root ─────────────────────────────────────────────────────────────────
function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <div className={`main-app ${loaded ? 'visible' : 'hidden'}`}>
        <Navbar />
        <main>
          <Hero />
          <Layanan />
          <CaraPesan />
          <Area />
          <Keunggulan />
          <CTABanner />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
