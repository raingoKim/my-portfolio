import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ProfessionalSkills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    { name: 'Python', icon: '🐍', level: 95 },
    { name: 'AI', icon: '🤖', level: 90 },
    { name: 'IoT', icon: '📡', level: 85 },
    { name: '3D Fusion 360', icon: '🎨', level: 88 },
    { name: 'Big Data', icon: '📊', level: 85 },
    { name: '로봇 프로그래밍', icon: '⚙️', level: 90 },
    { name: '교육 설계', icon: '📚', level: 95 },
    { name: '시스템 구축', icon: '💻', level: 92 },
  ]

  return (
    <section ref={ref} id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          전문 기술
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
                  className="bg-primary h-2 rounded-full"
                />
              </div>
              <div className="text-sm text-gray-400 text-right mt-2">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfessionalSkills
