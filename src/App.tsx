import { useEffect, useState } from 'react'
import {
  focusItems,
  profile,
  projects,
  socialLinks,
  timeline,
} from './data/portfolio'

const navigation = [
  { id: 'about', label: '소개' },
  { id: 'focus', label: '학습' },
  { id: 'journey', label: '여정' },
  { id: 'projects', label: '프로젝트' },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-28% 0px -58%', threshold: [0.05, 0.25, 0.6] },
    )

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    sections.forEach((section) => sectionObserver.observe(section))
    document.querySelectorAll('.reveal').forEach((element) =>
      revealObserver.observe(element),
    )

    return () => {
      sectionObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.body.classList.add('menu-is-open')
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('menu-is-open')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 바로가기
      </a>

      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="header-inner">
          <a className="brand" href="#home" title="포트폴리오 홈으로 이동">
            <span className="brand-mark">{profile.initials}</span>
            <span className="brand-copy">
              <strong>{profile.name}</strong>
              <small>{profile.role}</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav
            id="primary-navigation"
            className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
            aria-label="주요 탐색"
          >
            <ul>
              {navigation.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={activeSection === item.id ? 'is-active' : ''}
                    aria-current={activeSection === item.id ? 'location' : undefined}
                    onClick={closeMenu}
                  >
                    <span>0{index + 1}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="nav-github"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              GitHub
              <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="ambient-glow" aria-hidden="true" />
          <div className="hero-grid page-shell">
            <div className="hero-copy">
              <p className="eyebrow reveal">{profile.eyebrow}</p>
              <h1 id="hero-title" className="reveal reveal-delay-1">
                {profile.headline.split('\n').map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p className="hero-summary reveal reveal-delay-2">{profile.summary}</p>
              <div className="hero-actions reveal reveal-delay-3">
                <a className="button button-primary" href="#about">
                  저를 소개할게요
                  <ArrowIcon />
                </a>
                <a
                  className="button button-ghost"
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                  @{profile.githubUsername}
                </a>
              </div>
            </div>

            <div className="hero-visual reveal reveal-delay-2" aria-hidden="true">
              <div className="monogram-orbit orbit-one" />
              <div className="monogram-orbit orbit-two" />
              <div className="monogram-card">
                <span>{profile.initials}</span>
              </div>
              <div className="visual-note note-top">
                <i />
                learning now
              </div>
              <div className="visual-note note-bottom">build · learn · repeat</div>
            </div>
          </div>
          <div className="hero-ticker" aria-label="개발 태도">
            <div>
              <span>CLEAR THINKING</span>
              <i>✦</i>
              <span>SOLID FUNDAMENTALS</span>
              <i>✦</i>
              <span>STEADY GROWTH</span>
              <i>✦</i>
              <span>CLEAR THINKING</span>
              <i>✦</i>
              <span>SOLID FUNDAMENTALS</span>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="page-shell">
            <div className="section-heading reveal">
              <p className="section-kicker"><span>01</span> ABOUT</p>
              <h2 id="about-title">천천히, 하지만<br />제대로 이해합니다.</h2>
            </div>
            <div className="about-layout">
              <div className="about-intro reveal">
                {profile.introduction.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <aside className="principle-card reveal reveal-delay-1">
                <div className="card-label">MY PRINCIPLE</div>
                <blockquote>
                  “모르는 것을<br />아는 척하지 않고,<br /><strong>이해할 때까지 파고듭니다.</strong>”
                </blockquote>
                <div className="principle-sign">
                  <span>{profile.initials}</span>
                  <p>{profile.name}<small>{profile.role}</small></p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section focus-section" id="focus" aria-labelledby="focus-title">
          <div className="page-shell">
            <div className="section-heading heading-row reveal">
              <div>
                <p className="section-kicker"><span>02</span> CURRENT FOCUS</p>
                <h2 id="focus-title">지금 집중하는 것</h2>
              </div>
              <p>넓게 아는 것보다, 배운 한 가지를<br />내 언어로 설명하는 데 집중합니다.</p>
            </div>
            <div className="focus-grid">
              {focusItems.map((item, index) => (
                <article className={`focus-card reveal reveal-delay-${index + 1}`} key={item.number}>
                  <div className="focus-card-top">
                    <span>{item.number}</span>
                    <i aria-hidden="true">↗</i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul aria-label={`${item.title} 키워드`}>
                    {item.keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section journey-section" id="journey" aria-labelledby="journey-title">
          <div className="page-shell journey-layout">
            <div className="section-heading journey-heading reveal">
              <p className="section-kicker"><span>03</span> JOURNEY</p>
              <h2 id="journey-title">작은 단계를<br />이어갑니다.</h2>
              <p>현재의 학습을 실제 결과물로 연결하기 위한 다음 순서입니다.</p>
            </div>
            <ol className="timeline">
              {timeline.map((entry, index) => (
                <li className={`timeline-item ${entry.state} reveal reveal-delay-${index + 1}`} key={entry.phase}>
                  <div className="timeline-marker" aria-hidden="true"><span /></div>
                  <div className="timeline-phase">{entry.phase}</div>
                  <div className="timeline-copy">
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="page-shell">
            <div className="section-heading heading-row reveal">
              <div>
                <p className="section-kicker"><span>04</span> PROJECTS</p>
                <h2 id="projects-title">결과물로 보여드릴게요.</h2>
              </div>
              <p>완성도와 과정 모두 자신 있게 설명할 수 있을 때 공개합니다.</p>
            </div>

            {projects.length > 0 ? (
              <div className="project-grid">
                {projects.map((project) => (
                  <article className="project-card reveal" key={project.title}>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-project reveal">
                <div className="empty-index">01</div>
                <div className="empty-copy">
                  <p className="live-label"><span /> WORK IN PROGRESS</p>
                  <h3>첫 공개 프로젝트를<br />준비하고 있어요.</h3>
                  <p>배운 내용을 실제 문제에 적용하고, 선택한 이유와 개선 과정을 함께 담아 소개하겠습니다.</p>
                </div>
                <div className="empty-code" aria-hidden="true">
                  <div><span>public</span> class NextProject {'{'}</div>
                  <div>&nbsp;&nbsp;Status status = <em>BUILDING</em>;</div>
                  <div>&nbsp;&nbsp;boolean honest = <strong>true</strong>;</div>
                  <div>{'}'}</div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid" aria-hidden="true" />
          <div className="page-shell contact-inner reveal">
            <p className="section-kicker"><span>05</span> CONNECT</p>
            <h2 id="contact-title">성장하는 과정을<br />GitHub에 남깁니다.</h2>
            <p>지금의 학습과 앞으로의 결과물을 한곳에서 확인해 주세요.</p>
            {socialLinks.map((link) => (
              <a
                className="contact-link"
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.ariaLabel}
                key={link.label}
              >
                <GitHubIcon />
                <span>github.com/{profile.githubUsername}</span>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <a className="footer-brand" href="#home" title="맨 위로 이동">
            <span>{profile.initials}</span>
            {profile.name}
          </a>
          <p>기초부터 단단하게, 한 걸음씩.</p>
          <small>© 2026 {profile.name}. Built with intention.</small>
        </div>
      </footer>
    </>
  )
}

export default App
