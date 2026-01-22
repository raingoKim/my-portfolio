import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const education = [
    {
      institution: '성신여자대학교',
      degree: '전산학 전공',
      subMajor: '교육학 부전공',
      icon: '🎓',
    },
  ]

  return (
    <section ref={ref} id="education" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          학력
        </motion.h2>

        <div className="flex justify-center">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 max-w-2xl w-full hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-5xl mb-6">{edu.icon}</div>
                <h3 className="text-3xl font-bold mb-4 text-primary">{edu.institution}</h3>
                <div className="space-y-2">
                  <p className="text-xl font-semibold">{edu.degree}</p>
                  <p className="text-lg text-gray-400">{edu.subMajor}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
