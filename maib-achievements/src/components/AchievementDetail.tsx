import { useMemo } from 'react'
import Lottie from 'lottie-react'
import type { Achievement } from '../types/achievements'
import mascot from '../assets/mascot.png'
import celebration from '../assets/lottie.json'
import fire from '../assets/fire.json'

type AchievementDetailProps = {
  achievement: Achievement
  onBack: () => void
}

function AchievementDetail({ achievement, onBack }: AchievementDetailProps) {
  const background = useMemo(() => {
    const [from, to] = achievement.gradient
    return `linear-gradient(135deg, ${from}, ${to})`
  }, [achievement])

  return (
    <div className="detail-screen" style={{ background }}>
      <header className="detail-header">
        <button className="ghost-pill" type="button" onClick={onBack}>
          ← Achievements
        </button>
        <span className="ghost-pill ghost">{achievement.progress}%</span>
      </header>

      <div className="detail-hero">
        <Lottie animationData={celebration} loop={false} autoplay className="detail-lottie" />
        <div className="detail-logo">
          <span className="detail-logo-halo" />
          <img src={achievement.image ?? mascot} style={achievement.isWide ? { width: '90%' } : undefined} alt="Achievement logo" />
        </div>
      </div>

      <div className="detail-body">
        <p className="eyebrow">Achievement detail</p>
        <h1>{achievement.title}</h1>
        <p className="muted">{achievement.info}</p>

   {/* rarity / social proof */}
       <div className="user-percent" aria-hidden={false}>
         <Lottie animationData={fire} loop={true} style={{ width: "25px" }} autoplay className="user-percent__lottie" />
         <span className="user-percent__text">
           Only {achievement.userPercent ?? 55}% of users have this achievement!
         </span>
       </div>

        <div className="sheet-progress detail">
          <span>{achievement.progress}% complete</span>
          <div className="progress-track" aria-label="Detail progress">
            <div className="progress-fill" style={{ width: `${achievement.progress}%` }} />
          </div>
        </div>

        <button className="primary white" type="button">
          Share with friends
        </button>
      </div>
    </div>
  )
}

export default AchievementDetail
