import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime = null
    const startValue = 0
    const endValue = value

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const StatsCounter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { label: 'IT 경력', value: 25, suffix: '년+', icon: '💼' },
    { label: '자격증', value: 12, suffix: '종 이상', icon: '🏆' },
    { label: '교육 기관', value: 50, suffix: '곳+', icon: '🎓' },
  ]

  return (
    <section ref={ref} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xl text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default StatsCounter
