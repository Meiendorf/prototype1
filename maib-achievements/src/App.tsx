import { useState } from 'react'
import type { CSSProperties } from 'react'
import mascot from './assets/mascot.png'
import mascot_1 from './assets/maskot_1.png'
import mascot_2 from './assets/maskot_2.png'
import mascot_3 from './assets/maskot_3.png'
import mascot_4 from './assets/maskot_4.png'
import mascot_5 from './assets/maskot_5.png'
import mascot_6 from './assets/maskot_6.png'
import mascot_7 from './assets/maskot_7.png'
import mascot_8 from './assets/maskot_8.png'
import mascot_9 from './assets/maskot_9.png'
import './App.css'
import AchievementDetail from './components/AchievementDetail'
import type { Achievement } from './types/achievements'

const achievements: Achievement[] = [
  {
    id: 'first-step',
    title: 'First Step',
    info: 'Visited the achievement page.',
    progress: 100,
    gradient: ['#017460ff', '#61b1a1ff'],
    image: mascot_1,
    userPercent: 56,
  },
  {
    id: 'espresso-starter',
    title: 'Money Grows',
    info: 'Activated your first Espresso loan.',
    progress: 0,
    gradient: ['#007447ff', '#00ff88ff'],
    image: mascot_2,
    userPercent: 10.5,
  },
  {
    id: 'liber-voyager',
    title: 'Liber Voyager',
    info: 'Activated your Liber card for the first time.',
    progress: 72,
    gradient: ['#5ab548ff', '#167a54ff'],
     image: mascot_3,
     userPercent: 0.1,
  },
  {
    id: 'groceries-guru',
    title: 'Groceries Guru',
    info: 'Completed 5 purchases at supermarkets.',
    progress: 0,
    gradient: ['#b63400ff', '#fadd38ff'],
    image: mascot_4,
    isFrozen: true,
  },
  {
    id: 'night-owl',
    title: 'Night Owl',
    info: 'Made a transaction after 22:00.',
    progress: 100,
    gradient: ['#111F2F', '#3E5A83'],
    image: mascot_5,
    isWide: true,
  },
    {
    id: 'security-first',
    title: 'Security First',
    info: 'Enabled passkey authentication.',
    progress: 55,
    gradient: ['#2D2F36', '#5A6371'],
    image: mascot_6,
  },
  {
    id: 'partner-power',
    title: 'Partner Power',
    info: 'Paid at any maib partner store.',
    progress: 35,
    gradient: ['#c3c5c3ff', '#ff1e00ff'],
    image: mascot_7,
    isWide: true,
  },
  {
    id: 'bill-smasher',
    title: 'Around the World',
    info: 'Made transactions in 3 different countries.',
    progress: 30,
    gradient: ['#f8fc22ff', '#E76F51'],
    image: mascot_8,
  },
  {
    id: 'bnpl-addict',
    title: 'BNPL Addict',
    info: 'Used BNPL 5 times.',
    progress: 25,
    gradient: ['#4625c0ff', '#1B6DC1'],
    image: mascot_9,
  },
]

function App() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)

  const handleOpen = (achievement: Achievement) => {
    setSelectedAchievement(achievement)
  }

  const handleBack = () => setSelectedAchievement(null)

  const ringStyle = (progress: number): CSSProperties => {
    const degrees = progress * 3.6
    return {
      background: `conic-gradient(var(--maib-green) 0deg ${degrees}deg, rgba(64, 193, 172, 0.15) ${degrees}deg 360deg)`,
    }
  }

  if (selectedAchievement) {
    return (
      <div className="app-shell">
        <AchievementDetail achievement={selectedAchievement} onBack={handleBack} />
      </div>
    )
  }

  return (
    <div className="app-shell">
      <div className="mobile-shell" role="main">
        <header className="top-bar" style={{alignItems: 'center', textAlign: 'center'}}>
          <div>Achievements</div>
        </header>

        <section className="hero-card hero-simple">
          <div className="hero-copy">
            <h1>Make the fox proud</h1>
            <p className="subtitle">
              Collect maib achievements to boost perks in the mobile banking app. Tap any badge to see how to finish it.
            </p>
          </div>
          <img src={mascot} alt="maib mascot" className="hero-mascot ghost" />
        </section>

        <section className="grid-section">
          <div className="section-heading stacked">
            <div>
              <p className="eyebrow"></p>
              <h2>Achievement board</h2>
              <p className="muted">10 achievements live now. New drops will arrive soon.</p>
            </div>
          </div>
          <div className="achievement-grid">
            {achievements.map((achievement) => (
              <button
                key={achievement.id}
                className="achievement-chip"
                type="button"
                onClick={() => handleOpen(achievement)}
                aria-label={`${achievement.title} progress ${achievement.progress}%`}
              >
                <span className="chip-progress" style={ringStyle(achievement.progress)}>
                  <span className="chip-inner" style={{ background: `linear-gradient(135deg, ${achievement.gradient[0]}, ${achievement.gradient[1]})` }}>
                    <img src={achievement.image ?? mascot} alt="Achievement logo" />
                  </span>
                </span>
                <span className="chip-title">{achievement.title}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="how-it-works">
          <p className="eyebrow">How it works</p>
          <ul>
            <li>Tap a badge to see the mission steps and current completion.</li>
            <li>Your progress is indicated around the achievement.</li>
            <li>Collect achievements to earn rewards and perks.</li>
          </ul>
        </section>

        <footer className="bottom-nav">
          <button type="button" className="nav-item active">
            Achievements
          </button>
          <button type="button" className="nav-item">
            Wallet
          </button>
          <button type="button" className="nav-item">
            Impact
          </button>
          <button type="button" className="nav-item">
            Life
          </button>
          <button type="button" className="nav-item">
            Profile
          </button>
        </footer>
      </div>
    </div>
  )
}

export default App
