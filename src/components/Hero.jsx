import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
      <div className="text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-primary bg-clip-text text-transparent"
        >
          김정윤
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-2">
            AI · 로봇 · IT 융합 교육 전문가
          </h2>
          <div className="inline-block px-6 py-3 bg-primary/20 border border-primary/50 rounded-full">
            <span className="text-lg md:text-xl text-primary font-semibold">
              중등정교사 자격증 보유
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mt-8 max-w-2xl mx-auto"
        >
          25년 이상의 IT 경험과 교육 전문성을 바탕으로<br />
          미래 인재 양성을 위한 혁신적인 교육을 제공합니다
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <a
            href="#career"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            경력 보기
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
