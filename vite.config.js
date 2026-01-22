import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 배포를 위한 base 경로 설정
// repository 이름이 'my-portfolio'인 경우: base: '/my-portfolio/'
// repository 이름이 'username.github.io'인 경우: base: '/'
// 아래의 base 값을 실제 repository 이름에 맞게 수정하세요
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '/',
})
