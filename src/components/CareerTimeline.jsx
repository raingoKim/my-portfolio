import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CareerTimeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const timeline = [
    {
      year: '1990년대',
      title: 'IT 시스템 구축 시작',
      description: '초기 IT 시스템 구축 및 개발 경력 시작',
      icon: '🚀',
    },
    {
      year: '2000년대',
      title: '시스템 아키텍처 전문가',
      description: '대규모 시스템 설계 및 구축 전문성 확보',
      icon: '🏗️',
    },
    {
      year: '2010년대',
      title: '교육 분야 전환',
      description: 'IT 전문성을 교육 분야에 접목하여 교육자로 전환',
      icon: '🎓',
    },
    {
      year: '2020년대',
      title: 'AI·로봇·IT 융합 교육',
      description: 'AI, 로봇, IoT 등 미래 기술 교육 전문가로 활동',
      icon: '🤖',
    },
    {
      year: '현재',
      title: '미래 교육 강사',
      description: '50곳 이상의 교육 기관에서 미래 인재 양성 중',
      icon: '⭐',
    },
  ]

  return (
    <section ref={ref} id="career" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          경력 타임라인
        </motion.h2>

        <div className="relative">
          {/* 타임라인 라인 */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* 타임라인 포인트 */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-4 border-gray-900"></div>

                {/* 콘텐츠 */}
                <div
                  className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <div className="text-primary font-semibold text-lg">{item.year}</div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerTimeline
