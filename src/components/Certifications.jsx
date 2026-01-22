import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const certifications = [
    { name: '빅데이터 분석기사', issuer: '한국정보통신진흥협회', icon: '📊' },
    { name: '3D프린터 개발산업기사', issuer: '한국산업인력공단', icon: '🖨️' },
    { name: '중등정교사', issuer: '교육부', icon: '👨‍🏫' },
    { name: '정보처리기사', issuer: '한국산업인력공단', icon: '💻' },
    { name: '3D프린터 운용기능사사', issuer: '한국산업인력공단', icon: '⚡' },
    { name: 'Fusion 360', issuer: 'Autodesk', icon: '🎨' },
  ]

  return (
    <section ref={ref} id="certifications" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          자격증 및 인증
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
