import { useState } from "react";
import { Mail, Phone, MapPin, BadgeCheck, User, MessageCircle, Pill } from "lucide-react";

const FLUID  = "data:image/jpeg;base64,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AKWiigBaKKWgAopaKACiiigApKWimAlLRRQAUUUUAFLSUUALRRRQAUUUUAFLSUUALRRRQAlFFFIApyuV6dPSm0UATqwYdMU7iooyBx3qWpaGGKKKKQCUUvFGKAEopcUlAwIzUeSpqSmN1poLD1YMKTjNRjinrQCA0A880vekoExGPNJmlNJTEFLSUUAODHvS7vem0Ypjux2aaTSYooAKKKKYC5ozSUUhi5opKKBjqMim5pQuRkmk3YAzSE0u0e9NIIqbjEoAopRSW4MWnLTacvWrBElFFLUiCjFFFAhKQ06koGhtJTiKSmUNopcUhFMAxSYoooAKSlpKYBk0ZNFFABk0bqSigLDs0U2igB9FM59aXJpAOpKTJpPrQApb0oyfakooAUcHpT8ZGRTKVDg/WpaJKRODjvQF5yaUADpS0cre5N7bBRRRVCClpKWmAUUUtABRRRQAtLSUooAWiiigAooooAWkoooAKKKKACiiigAooooAKWkopgLRRRQAUUUUgCikpaACiiigAoopaACnK5HXkU2igCYMD0p2arg08P61LQXJaQtTeoo6UiheaOfWkzRmnYYHPrTcU7NFAhtANKeaSmA6kopKEJi0lFFMQUUUUAFLSUUALmikooHcXFJiijNABRRRTAKSiigYU9D2plANS1caZIaQ0Bs0lZO6HYQikp1IaSYwp60wZpwrS4iQUtNFLQIWikooCwtJRSGgANJSHNNzTKsPpKTNGaYWA0lLRQAlJS0lMYUUUUAFJS0lABRRRQIKKKKACiiikAUCil6UAFApaKBFOloooMwooopgFLSUtABS0lLQAUUUtABRRRQAtLSUUALRRRQAUtJS0AJRS0lABRRRQAUUUUAFFFFABS0lFABRRS0gEpaKMUDCiilpiCiiigAooooAKKSloAcr44NOLZqLNOWkF2OzRSUCk2McKWkFLilcAxSYp2KCKdx2GUU4ikp3FYSilooHYKSlopiaEopaKBCUUUUwCiiigAooooGJRRRQMWkoopAANO602gHFJopMf9aXFNzSg81m4oocFpRSZzTqaViQooopiCiiigAooooAQjNNIp1IaY0NxRS0lMoSilpKACkpaSmAUUUUAJRRRQAUUUUAFFFFABRRSgUgACloooEFJTsUYoAp0UUUzIKKKWgAoopaACiiloASloooAKKKKACloooAKWkooAdxRikoBxQAtFGRjg0m4+tIAxRRk0ZoAKKKKACiiigBaKKKAClpM0ZoAWikopgLRSZooAWiiikAUUUmaYhcUlGaQmi4BTh700c08Cp3GOGMdKXaO1ItOFQ0WhQKWiigAooopjCkxS0lMBKSlNJTEFFFFMApKWiqJYlFLRQISiiigApKWkoGFFFFA0FFFFIYUUUUgCnrTRTxQFxwpaSnCkwEpaWkpAFFFLSEJRS0lMYhpKU0hpoY2ig0lMoWkpaSgBKSlpKYCUUtJQAUUUUAFFFFACUtJTlFAgAp1FKATSASlApQtOpXFcaFpcClxRilcm5QxRRRVEi0UUUAFFFLQAUUUUAFFFLQAlFLSUwClpKKAFooooAKKWigApMUUoNJgJS0tJipGFFFJimAtFFJTELRRRTAWikxS4pXEFFJiimAtFJRQAtGaSikMM0E0YzQFpO40hM5pQtOC07FK3cYgFLRRVEjl606mU4HNDQ0LmlpMUA1DRQtJRQaaAKKTNGaYAaSg0UwCiiimIKKKKYmFFFFAhKKKKACkpaSgAooooKQtFFFIoSloooEKKcKQUopAOFOFMzSg0hjs0U3NGaLCsOoptGaVh2HUZpuaAaBWFNJS0nahDG0UUVRQUUUUAJSGlpDQMSiiimAlFLSUAFFFFAgpV6UlKOKTAlC0tNVscEUu5fWpIYtFHXpS0CCikopAUKKKKskWiiigApaSloAKKKKAClpKKAFpKKKACiiimAtFJS0AFFFFAgooopAFKDSUUDFzRmm0UnZD1YvWlAoAJp4FZ87exXL3ECinbRRS0a9w0ExRS0hNNR7iuJzSYpc0ZrSwriYo20tGadhCbaMUUZoAXFLTaKB3HUtNpaQXFpKWkoAWlHFNpaBDxQRQKWkNCDmkpehoNSUNoooqwCikpaYgooooEFFFFMQlFFFABRRRQAUUUUAJRRS0DAUtApaRVxMUuKWkoAKKKKAFoopaQwoopKAFzRmkooGLS02lpAOByKSkpTSENoooplBRSUUDCkopaAEoxS0UwExSYp1FADcUYpaKBBijFFLQAKcU7INNpQaTQhcCl5HQ0mfajNIQu49xRu9jSZ9qN3tRYRSopKWqIFopKKAFpaSigBaKKKACiiigAooooAKKKKACikooELRSUtAgpaSlwaAEop22lC4pXKsIFzTgopaKnlvuO4UUUU7DuLRmkJpKaRLY7NNooqrCuFFFFMLhRRRQAUUUUAFFFFIApRSUooGLRSZozU3GLSjFNoBpXHYlx6UClXlePyo607kiGjtS0nSky0JikxTjSYpJgJRSmkrRCCiiimSFJS0lABRRRQIKSlpKBi0lLSUAFLSUtAxaUUlKKQwpKWkNABS0lLQAtFFFAwooopDCiiigYUA0lFADqBSUUgCijvRQMSijFLQAmKKKKBhSU7FGKAG0UpFFMBKWiigQUUUUAFLRS0CEooopCCiiigRSooopkC0UlFAhaKKKAFopKWgApaSigBaKSigLi0lFFAXCikpaBBRRSbgPrQA8cUoNR5JPtSg4qG77F7EopTUYY07NOKJYuaM0lFUA7NBpuaKdgFpKKKYgooooAKKKKACiiigApaSloGFFFFIApaBTtppFJDaWl2n0ox7Uh2G0UuBSr15pWAenApTxQOlKaBCEUEZoHTFJQtQ2DpSZoNJVJA5BRRSUxC0UlFMAooooEFFFFACUUUUAFFFFAxaKSloGLS00U6kAUhpTSGgYClpAKWgBaKKKQBRS0UDEooooGFJS0UDEpaKKACilopAJRS0lABRRRQMKKKKACikpaACiiigAoFLSUCFooooASilpKBBSE0v0pMetK4WKdFFFUZhRRRQIWikooELRRRQAUtJRQAtFJS0AFJQWxTN+egzQFh9IXHQcn2puM/eOacBxU83Yq3cTLHrx7ClA9qXFKKLN7hcAKWiiqsIWlpKKYC0UUUAFLSUUCFopKWmAUUUUAFFFFABRRRQAUtFFAwpQKSlzSGhwxTuKjzS5qSrkgxRimg06pGmNIpKeaaaYMkHSigdBRQSIPvGkPWj+KhuGNNbgxp60UHrRVEBSUUUxhRRRQAUUlFABRRRQAUUUUAFFFFAwpaSigYop1NFOpDCkpcUuKQwFFLRQAlFFFAwooooAKKKKACilooASilooAKKKKACkpaKB3EopaSgAooooASloopALRSUlIY6kpKSlcLDsikzRShSe1AaIBzRkCl2eppdg9KBXGFvQU0571Lj2o20BdFCikpasxCiiigAoopaBBRRRQAUUUlIaFJppJPtRS4pX7DGbcnnmnAUuKWla+4XAClooqhBS0lFMQtFFFAC0UUUALRSUUwFopKWgAooopgLRSUUALRSUtABRRS0hhSUUUDClpKKBDqK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0tADdvpRnHXin0UrDuNHrTgM03Zg5Xg04MR1H5UncrQkFFIrBuhpakBaKTNLmgBaKSjIpALRSZFLQAUUUUgFooooAKKKKACiiigAooooAKKKKQBRRRTAKSlpKYCUUtFMBKKKKACiiigChRRRTJCiiigAooopiYUUUUCClpKWgBQacDTKWiw0x5am9aSnCi1gbuFLSUUCFoNFJQAlFBopgLQBSZpwoANtKFpe1GaQCEUynE0lMBKKWigAooooAKKKKYCg4p2cimUoOKVhpik0maSimK4ZozRRQAuaKSigAooooAWiiigAooooAKKKKACiiikMKKKKAFooopiClpKKAFopKWgAooooAKWiigAooooGLRRRQAtFJS0hhS0lLQMQgHqKXBHRj+PNFFJodw3MOq5/3TS+YvqR9RRmlzU2DQaZBSq4PApaQoOo4NIegvWnA1GCy9RmnBwfb60CsPopBzS0gClpKKQC0UUUwCiiigAooopAFFFFAwooooAKKKKBBSYpaKYCUUUUxhSUtJTAoUUUVRAtFJmjrQAUUUUCCiiloEFLiikoAOKXNJSgUAKOPrRRRSAKWkopgLRRRQAUlFFABTkNNpRQA4nFJ1zQelIOlMQUUUUDCiiigAooooAKKKKYgooooAKKKKBhS0lLQAlFFFABSgUAU6gY00UGigQUUUUAFFFJSGLRRRQAUUUUwClpKKAFooooAKKKKAFooooEFLSUUALRRRQAtFJRQMWiiigBaKSlpDFopM0UALmjNJRQA7NGabRSsFx+aTNJRSauO4oHoaUPj71IDS5z1pNMY7rRmmYK/d6elBJPtU6DsSA0tRqcHmn0MBaKSlpCCiiigYUUUUAFFFFAgooooAKKKKACiiimAlFLSUDM+ioCLgdGQ/WkKTN96QfQCr9SNCRmHrSLJg5wQPXtSCLHU5p+KObshWXUeDmiogTGf9n+VS1QBS0lFIQuaWm0tADhijFJS/jSAKKM0UwCiiigAooooAKKKWgBKKDRQAopQOKSl7UwG0UUUAFFFFABS0lFAC0UUUCCiiimAUUUUAFFFFAwpaSlFACilooPSkMaaKKSmAtFFJQAUUUUgFopKKAFooopgFFFFAC0UUUDCloooEFFFFABRRRQIWikooAWiiigYUtJRQAtFJRQAtLSUUALRSUtIAooooAKKWigYUUUUAKDS5puaKVh3HdaUN6imilzUtDHbhmlyKYQDSZI6H86VgJMilqMN2Ip2cdelJoLjqKKKQwooooAKKKKBBRRRQAUUUlAC0lFFAzNooorUyCiiloASmg7Dg/dP6U+kIBGDQA6imKSnB5Hang56UwCiiigApaSloELS0gNKDQAZ9RRx64p1GKQajePUUvHqKMUYosGoUUmKTNFguBoopKBi5pQ1NooAdRSUobHUUAFFPwCMimlcUwEooooAM0UlFAC0tJRQAtFFFMQUUUUDClFAp1ABTSaUmm0hhRRRTAKKKKQBRRRSGFFFFMBaKSloAKKKKYC0UlLQAtFFKKACil60UrgNopxFNpiCiiigQUUUUALRSUUALRRRQAtFJRQAtFFFABS0lFAxaKSlpALSUUUDFooooAKM0lFAx1FJRSGLQGI69KKSptYCQHH0paiBK9OnpT1I7dKTQbD6SiipAWikooAWikooGFFFFABRRSUAZ1FFFamQUUUUAFFFFMApB1PPI5+tFFHUBwOQDS0UUAFFFFAC0tFFIBaXNFFAwooooGFIaKKBMaaKKKBCUtFFAwpaKKYhVbBqQ0UUARmiiimISiiikMKWiimAUUUUAFLRRTAWjNFFIBKKKKBhRRRQMKKKKQBRRRSAKKKKYBRRRTAKWiigAooooAWloooAUU6iipGFJRRQIaaKKKpCYUUUUxBRRRQAUUUUgCloooAKKKKACiiigYUtFFABS0UUAFFFFIYUUUUDCiiigBaKKKQwpCdvI/Kiil1AlB5A9aWiioYIKKKKQBSUUUDCiiigAooopMD/9k=";

const T = {
  purple: '#5B2E91',
  purpleLight: '#7B4FAF',
  purplePale: '#EDE5F4',
  purpleGhost: '#F7F3FB',
  purpleDark: '#3D1D63',
  purpleDeep: '#2A1250',
  teal: '#2EC4B6',
  tealLight: '#D4F5F2',
  lime: '#C5E84A',
  bg: '#F6F4FA',
  bgAlt: '#F0EFED',
  fg: '#1E1B2E',
  white: '#ffffff',
  muted: '#6B6580',
  subtle: '#9B95A8',
  border: '#E8E5F0',
  shadowSoft: '0 2px 12px rgba(91,46,145,0.04)',
  shadowElevated: '0 8px 32px rgba(91,46,145,0.08), 0 2px 8px rgba(0,0,0,0.03)',
  r: 16,
};

const serif = "Georgia, 'Times New Roman', serif";
const sans = "system-ui, -apple-system, 'Segoe UI', sans-serif";

const STEPS = [
  { n: 'Step 1', title: 'Comprehensive intake', desc: 'A 75-minute evaluation covering your full medication history, prior taper attempts, and current symptom profile. Enough time to build a protocol that reflects your actual situation.', tags: ['75-min intake', 'Full history', 'Telehealth'] },
  { n: 'Step 2', title: 'Personalised taper protocol', desc: 'A hyperbolic reduction schedule built around your medication, dose, and response history. Monitored between appointments — with adjustments made as your clinical picture changes, not at the next available slot.', tags: ['Ongoing monitoring', 'Dose adjustments', 'Between-visit'] },
  { n: 'Step 3', title: 'Supported to discontinuation', desc: 'Active clinical oversight through the final reductions, where most tapers fail. Ryan remains your prescriber until you reach zero — not until the plan is written.', tags: ['Full taper', 'Through to zero', 'Continuous care'] },
];

const MEDS = [
  { label: 'Antidepressants', icon: 'pill' },
  { label: 'Benzodiazepines', icon: 'drop' },
  { label: 'Antipsychotics', icon: 'hex' },
  { label: 'Sleep Medications', icon: 'moon' },
  { label: 'Mood Stabilisers', icon: 'scale' },
  { label: 'Stimulants', icon: 'bolt' },
];

const FAQS = [
  { q: 'Why did my last taper fail?', a: 'The reductions were the same size at every step. That sounds logical but it\'s wrong. As your dose drops, your nervous system becomes more sensitive — not less. The same 10mg cut that felt fine at 100mg is a very different experience at 15mg. A properly designed taper gets smaller as you approach zero. That\'s the opposite of what most people are told to do, and it\'s why most tapers fall apart in the final stretch.' },
  { q: 'How do I know if what I\'m feeling is withdrawal or my condition coming back?', a: 'This is the question that causes most people to reinstate unnecessarily. Withdrawal symptoms tend to appear within days of a dose change, feel physically distinct from your original condition, and improve with time or a brief hold. Relapse tends to emerge weeks later and mirrors your original symptoms. Ryan tracks your symptom patterns throughout your taper specifically so you\'re never left making this call alone — because getting it wrong in either direction has real consequences.' },
  { q: 'Do you stay with me the whole time, or do I get a plan and go?', a: 'Ryan stays with you the entire way. This is full ongoing care — not a one-time consultation. You get regular check-ins, dose adjustments based on how you\'re actually responding, and direct access to Ryan between appointments when something comes up. You are not handed a schedule and left to interpret your own symptoms. Someone is watching the whole time.' },
  { q: 'Do you accept insurance?', a: 'Proactive Psychiatry does not bill insurance directly. Reimbursement support is available through Reimbursify, which submits out-of-network claims to your insurer on your behalf. Many patients also use HSA or FSA funds to cover the cost.' },
  { q: 'How long will this take?', a: 'It depends on what you\'re on, how long you\'ve been on it, and how your body responds — not on a predetermined schedule. Some tapers take months. Long-term benzodiazepines or high-dose antidepressants can take considerably longer done properly. Ryan\'s job is to build a pace that is tolerable for you and gets you to zero in a way that sticks — not a pace that looks good on paper.' },
  { q: 'Are appointments virtual or in-person?', a: 'Most care is delivered via telehealth. Ryan is licensed in DC, Maryland, Missouri, and Colorado. In-person visits are available at the Dupont Circle office in Washington, DC for those who prefer it.' },
];

export default function Landing() {
  const [faq, setFaq] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', meds: '', appt: 'virtual', notes: '' });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: T.white, fontFamily: sans, color: T.fg }}>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', borderBottom: `1px solid ${T.border}`, height: 64 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><img src="/brain-logo.avif" alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} /><span style={{ fontSize: 17, fontWeight: 600, color: T.fg, fontFamily: sans, letterSpacing: '-0.02em' }}>Ryan Sheridan, DNP</span></div>
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {['How It Works', 'About', 'Blog', 'FAQ'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`} style={{ fontSize: 14, color: T.fg, textDecoration: 'none', fontWeight: 400 }}>{l}</a>
            ))}
          </div>
          <div className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="tel:2026405502" style={{ fontSize: 14, color: T.fg, textDecoration: 'none', border: `1px solid ${T.fg}`, borderRadius: 10, padding: '10px 20px' }}>Call Now</a>
            <a href="#book" style={{ fontSize: 14, color: T.fg, textDecoration: 'none', background: T.lime, borderRadius: 10, padding: '10px 20px', fontWeight: 500 }}>Get Started</a>
          </div>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={T.fg} strokeWidth="2"><path d={menuOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu" style={{ background: T.white, borderBottom: `1px solid ${T.border}`, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['How It Works', 'About', 'Blog', 'FAQ'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setMenuOpen(false)} style={{ fontSize: 16, color: T.fg, textDecoration: 'none', fontWeight: 400 }}>{l}</a>
            ))}
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <a href="tel:2026405502" style={{ fontSize: 14, color: T.fg, textDecoration: 'none', border: `1px solid ${T.fg}`, borderRadius: 10, padding: '10px 20px' }}>Call</a>
              <a href="#book" onClick={() => setMenuOpen(false)} style={{ fontSize: 14, color: T.fg, textDecoration: 'none', background: T.lime, borderRadius: 10, padding: '10px 20px', fontWeight: 500 }}>Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', minHeight: 640 }}>
        <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 80px 60px' }}>
          <img src={FLUID} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(42,18,80,0.72)', zIndex: 1 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h1 style={{ fontFamily: serif, fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 400, color: T.white, lineHeight: 1.08, marginBottom: 28, letterSpacing: '-0.02em' }}>
              Feel stuck on your medication?
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, maxWidth: 480, marginBottom: 40 }}>
              Don't white-knuckle this alone. Find a clinician who stays with you from the first dose reduction to zero.<br /><br />Ongoing adjustments, check-ins, someone who understands your symptoms.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <a href="#book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: T.lime, color: T.fg, fontSize: 16, fontWeight: 500, padding: '16px 32px', borderRadius: 12, textDecoration: 'none', border: 'none' }}>Start tapering with support</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 40, flexWrap: 'wrap' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 100, padding: '8px 18px' }}>
                <BadgeCheck size={22} color={T.teal} />
                <span style={{ fontSize: 14, color: T.white, fontWeight: 600, letterSpacing: '0.02em' }}>TaperCommunity Verified</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="/hero-pills.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </section>

      {/* EXPERT CLINICIAN */}
      <section id="about" style={{ background: T.white, padding: '96px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 400, color: T.fg, lineHeight: 1.1, letterSpacing: '-0.02em' }}>Helping you get off psych meds in CO, DC, MD, MO, NY</h2>
          </div>
          <div className="about-cols" style={{ display: 'grid', gridTemplateColumns: '45fr 55fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div style={{ borderRadius: T.r, overflow: 'hidden' }}>
                <img src="/ryan-sheridan.avif" alt="Ryan Sheridan, DNP" style={{ width: '50%', display: 'block', margin: '0 auto' }} />
              </div>
            </div>
            <div style={{ paddingTop: 0 }}>
              <p style={{ fontSize: 16, color: T.muted, lineHeight: 1.65, maxWidth: 580 }}>
                Most failed attempts to get off psych meds share a common thread: the patient was left to interpret their own symptoms without clinical guidance at the moments that mattered most. A dose reduction triggers physical discomfort, returning anxiety and disrupted sleep. With no one available to assess it, reinstatement feels like the only safe option.<br /><br />Ryan Sheridan, DNP, PMHNP-BC built his practice around closing that gap. He provides active clinical oversight throughout the entire taper — monitoring symptoms between appointments, adjusting protocols when your body requires it, and distinguishing withdrawal from relapse.
              </p>
              <div style={{ marginTop: 32 }}>
                <a href="#book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: T.purple, color: T.white, fontSize: 15, fontWeight: 600, padding: '14px 28px', borderRadius: 12, textDecoration: 'none', border: 'none' }}>Stop doing this alone</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ background: T.white, padding: '96px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 13, color: T.purple, marginBottom: 10, fontWeight: 500 }}>The process</div>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(28px, 4.5vw, 60px)', fontWeight: 400, color: T.fg, lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.02em' }}>
              In your corner from the first reduction to zero
            </h2>
            <p style={{ fontSize: 16, color: T.muted, lineHeight: 1.65, maxWidth: 700, margin: '0 auto' }}>
              A full clinical intake, a personalised taper protocol, and active oversight throughout — not a plan handed off to someone else.
            </p>
          </div>
          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 48 }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{ background: T.bg, borderRadius: T.r, padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 14, color: T.purple, fontWeight: 500, marginBottom: 16 }}>{s.n}</div>
                <div style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, color: T.fg, marginBottom: 12, lineHeight: 1.15, letterSpacing: '-0.01em' }}>{s.title}</div>
                <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.65, marginBottom: 24, flex: 1 }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  {s.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 11, color: T.fg, border: `1px solid ${T.border}`, borderRadius: 8, padding: '5px 10px', background: T.white, display: 'inline-flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap' }}>
                      {tag} <span style={{ color: T.teal }}>✓</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: T.purple, color: T.white, fontSize: 15, fontWeight: 600, padding: '14px 28px', borderRadius: 12, textDecoration: 'none' }}>Get Started</a>
            <a href="#about" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: T.white, color: T.fg, fontSize: 15, fontWeight: 500, padding: '14px 28px', borderRadius: 12, textDecoration: 'none', border: `1px solid ${T.fg}` }}>Learn More</a>
          </div>
        </div>
      </section>

      {/* MEDICATIONS */}
      <section style={{ background: T.white, padding: '0 0 96px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <div style={{ fontSize: 13, color: T.purple, marginBottom: 10, fontWeight: 500 }}>Which one has had you stuck?</div>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 400, color: T.fg, lineHeight: 1.1, marginBottom: 48, letterSpacing: '-0.02em' }}>Whatever you're on, we can get you off</h2>
          <div className="meds-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 1000, margin: '0 auto' }}>
            {MEDS.map(m => (
              <div key={m.label} style={{ background: T.bg, borderRadius: T.r, padding: '28px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: T.purplePale, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {m.icon === 'pill' && <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={T.purple}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>}
                  {m.icon === 'drop' && <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={T.purple}><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>}
                  {m.icon === 'hex' && <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={T.purple}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>}
                  {m.icon === 'moon' && <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={T.purple}><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>}
                  {m.icon === 'scale' && <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={T.purple}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>}
                  {m.icon === 'bolt' && <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={T.purple}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: T.fg, fontFamily: sans }}>{m.label}</div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: T.bg, padding: '48px 0 96px' }}>
        <div className="faq-grid" style={{ maxWidth: 1400, margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '40fr 60fr', gap: 64, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 400, color: T.fg, lineHeight: 1.1, marginBottom: 16, letterSpacing: '-0.02em' }}>Things you're probably already wondering</h2>
            <p style={{ fontSize: 15, color: T.muted, lineHeight: 1.6 }}>Straight answers. No clinic-speak.</p>
          </div>
          <div>
            {FAQS.map((f, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${T.border}` }}>
                <button onClick={() => setFaq(faq === i ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', fontFamily: sans }}>
                  <span style={{ fontSize: 16, fontWeight: 500, color: T.fg, textAlign: 'left' }}>{f.q}</span>
                  <span style={{ fontSize: 20, color: T.fg, transition: 'transform 0.2s', transform: faq === i ? 'rotate(180deg)' : 'rotate(0)', flexShrink: 0, marginLeft: 16 }}>⌄</span>
                </button>
                {faq === i && (
                  <div style={{ paddingBottom: 20 }}>
                    <p style={{ fontSize: 15, color: T.muted, lineHeight: 1.7 }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" style={{ background: T.purpleDeep, padding: '96px 0' }}>
        <div className="book-grid" style={{ maxWidth: 1400, margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 400, color: T.white, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>Ready to stop doing this alone?</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, marginBottom: 40 }}>Virtual across DC, Maryland, Missouri, and Colorado — or in-person at Dupont Circle. No intake forms to wrestle with first. Just a conversation about where you are and what you need.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {[['phone','Call','(202) 640-5502','tel:2026405502'],['mail','Email','hello@proactivepsychiatry.com','mailto:hello@proactivepsychiatry.com']].map(([ic,label,val,href]) => (
                <a key={label} href={href} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 20, background: 'rgba(255,255,255,0.06)', borderRadius: T.r, border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {ic === 'phone' && <Phone size={18} color="white" />}
                    {ic === 'mail' && <Mail size={18} color="white" />}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{label}</div>
                    <div style={{ fontSize: 15, color: T.white, fontWeight: 500 }}>{val}</div>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['loc','1629 K St NW, Suite 300, Washington, DC 20006'],['check','Board Certified — ANCC PMHNP-BC'],['check','TaperCommunity Verified Clinician']].map(([ic,t], idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {ic === 'loc' && <MapPin size={16} color="rgba(255,255,255,0.5)" />}
                    {ic === 'check' && <BadgeCheck size={16} color="rgba(255,255,255,0.5)" />}
                  </div>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: T.white, borderRadius: T.r, padding: '32px 28px' }}>
            <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 400, color: T.fg, marginBottom: 28, letterSpacing: '-0.01em' }}>Tell Ryan what's going on</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[['Full name','name','text','user'],['Email','email','email','mail'],['Phone','phone','tel','phone'],['Current medication(s)','meds','text','pill']].map(([label,key,type,icon]) => (
                <div key={key}>
                  <label style={{ fontSize: 13, fontWeight: 500, color: T.muted, marginBottom: 6, display: 'block' }}>{label}</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: `1px solid ${T.border}`, borderRadius: 12, background: T.white, padding: '0 14px', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                      {icon === 'user' && <User size={18} color={T.subtle} />}
                      {icon === 'mail' && <Mail size={18} color={T.subtle} />}
                      {icon === 'phone' && <Phone size={18} color={T.subtle} />}
                      {icon === 'pill' && <Pill size={18} color={T.subtle} />}
                    </div>
                    <input type={type} value={form[key]} onChange={e => setForm({...form, [key]: e.target.value})} style={{ width: '100%', padding: '12px 0', border: 'none', background: 'transparent', fontSize: 15, color: T.fg, outline: 'none', fontFamily: sans, boxSizing: 'border-box' }} />
                  </div>
                </div>
              ))}
              <div>
                <label style={{ fontSize: 13, fontWeight: 500, color: T.muted, marginBottom: 8, display: 'block' }}>Appointment type</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[['virtual','Telehealth'],['inperson','In-person (DC)']].map(([v,l]) => (
                    <button key={v} onClick={() => setForm({...form, appt: v})} style={{ flex: 1, padding: '10px 16px', fontSize: 14, background: form.appt === v ? T.purpleGhost : T.white, color: form.appt === v ? T.purple : T.muted, border: `1px solid ${form.appt === v ? T.purplePale : T.border}`, borderRadius: 12, cursor: 'pointer', fontWeight: form.appt === v ? 600 : 400, fontFamily: sans }}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 500, color: T.muted, marginBottom: 6, display: 'block' }}>Additional notes</label>
                <textarea value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} rows={3} placeholder="What you've tried. What happened. What you were told. What got dismissed. All of it is useful." style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: `1px solid ${T.border}`, background: T.white, fontSize: 15, color: T.fg, outline: 'none', fontFamily: sans, resize: 'vertical', boxSizing: 'border-box' }} />
              </div>
              <button style={{ width: '100%', padding: '14px 24px', background: T.lime, color: T.fg, fontSize: 16, fontWeight: 600, borderRadius: 12, border: 'none', cursor: 'pointer', fontFamily: sans }}>Reach out to Ryan</button>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" style={{ background: T.bg, padding: '96px 0', scrollMarginTop: 68 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 13, color: T.purple, marginBottom: 10, fontWeight: 500 }}>From the practice</div>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 400, color: T.fg, lineHeight: 1.1, letterSpacing: '-0.02em' }}>Latest articles</h2>
          </div>
          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { title: 'Why most tapers fail in the last 10%', excerpt: 'The final reductions are where most protocols fall apart. Here\'s why linear dose cuts stop working — and what to do instead.', tag: 'Tapering' },
              { title: 'Benzodiazepine withdrawal is not anxiety', excerpt: 'Withdrawal symptoms mimic the condition the drug was prescribed for. Learning to tell them apart changes everything.', tag: 'Benzodiazepines' },
              { title: 'What hyperbolic tapering actually means', excerpt: 'A term you\'ll see everywhere in deprescribing. Here\'s the science behind it and why it produces better outcomes.', tag: 'Science' },
            ].map((post, i) => (
              <div key={i} style={{ background: T.white, borderRadius: T.r, overflow: 'hidden', border: `1px solid ${T.border}` }}>
                <div style={{ height: 180, background: T.purplePale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="48" height="48" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke={T.purple}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                </div>
                <div style={{ padding: '24px 24px 28px' }}>
                  <span style={{ fontSize: 12, fontWeight: 500, color: T.purple, background: T.purplePale, borderRadius: 6, padding: '4px 10px' }}>{post.tag}</span>
                  <h3 style={{ fontFamily: serif, fontSize: 20, fontWeight: 400, color: T.fg, marginTop: 16, marginBottom: 10, lineHeight: 1.25 }}>{post.title}</h3>
                  <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.6 }}>{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: T.purpleDeep, borderTop: '1px solid rgba(255,255,255,0.08)', padding: '48px 0 24px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ background: 'rgba(232,168,56,0.12)', border: '1px solid rgba(232,168,56,0.2)', borderRadius: T.r, padding: 20, marginBottom: 40 }}>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Medical disclaimer:</strong> This website provides general information about deprescribing services. It does not constitute medical advice. All treatment decisions are made in consultation with your treating clinician. If you are in crisis, call 988 Suicide & Crisis Lifeline or 911.
            </p>
          </div>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32, marginBottom: 40 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
                </div>
                <span style={{ fontSize: 17, fontWeight: 600, color: T.white }}>Proactive Psychiatry</span>
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                Ryan Sheridan, DNP, PMHNP-BC<br/>
                Deprescribing & Integrative Psychiatry<br/>
                1629 K St NW, Suite 300, Washington, DC 20006
              </div>
            </div>
            {[
              { t: 'Practice', links: ['About', 'How It Works', 'Medications', 'Book Now'] },
              { t: 'Resources', links: ['For Doctors', 'Tapering Guidelines', 'FAQ'] },
              { t: 'Legal', links: ['Privacy Policy', 'Terms', 'Contact'] },
            ].map(g => (
              <div key={g.t}>
                <div style={{ fontSize: 14, fontWeight: 600, color: T.white, marginBottom: 14 }}>{g.t}</div>
                {g.links.map(l => (
                  <div key={l} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 10, cursor: 'pointer' }}>{l}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20, textAlign: 'center' }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>© 2026 Proactive Psychiatry. All rights reserved. Practice page powered by </span>
            <a href="https://tapermeds.com" style={{ fontSize: 12, color: T.teal, textDecoration: 'none', fontWeight: 600 }}>TaperMeds</a>
          </div>
        </div>
      </footer>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a:hover { opacity: 0.9; }

        .nav-hamburger { display: none !important; }

        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: block !important; }

          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-grid > div:first-child {
            padding: 48px 20px 40px !important;
            min-height: 480px;
          }
          .hero-grid > div:last-child {
            height: 280px;
          }

          .about-cols {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          .steps-grid {
            grid-template-columns: 1fr !important;
          }

          .meds-grid {
            grid-template-columns: 1fr !important;
          }

          .blog-grid {
            grid-template-columns: 1fr !important;
          }

          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          .book-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .steps-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .meds-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .blog-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </div>
  );
}
