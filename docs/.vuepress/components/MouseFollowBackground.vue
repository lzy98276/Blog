<template>
  <canvas ref="canvas" class="mouse-follow-bg"></canvas>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvas = ref(null)

onMounted(() => {
  if (typeof window === 'undefined') return
  
  const cvs = canvas.value
  const ctx = cvs.getContext('2d')
  let width, height
  let particles = []

  const resize = () => {
    width = window.innerWidth
    height = window.innerHeight
    cvs.width = width
    cvs.height = height
  }
  
  window.addEventListener('resize', resize)
  resize()

  class Particle {
    constructor() {
      this.x = Math.random() * width
      this.y = Math.random() * height
      this.vx = (Math.random() - 0.5) * 0.5
      this.vy = (Math.random() - 0.5) * 0.5
      this.size = Math.random() * 2 + 1
    }
    update() {
      this.x += this.vx
      this.y += this.vy
      if (this.x < 0 || this.x > width) this.vx *= -1
      if (this.y < 0 || this.y > height) this.vy *= -1
    }
    draw() {
      ctx.fillStyle = 'rgba(64, 158, 255, 0.5)' // Tech blue
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // Create particles
  for (let i = 0; i < 80; i++) particles.push(new Particle())

  let mouse = { x: null, y: null }
  
  const handleMouseMove = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }
  
  window.addEventListener('mousemove', handleMouseMove)

  let animationId
  const animate = () => {
    ctx.clearRect(0, 0, width, height)
    
    // Draw connections between particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
           ctx.strokeStyle = `rgba(64, 158, 255, ${0.1 * (1 - dist/100)})`
           ctx.lineWidth = 1
           ctx.beginPath()
           ctx.moveTo(particles[i].x, particles[i].y)
           ctx.lineTo(particles[j].x, particles[j].y)
           ctx.stroke()
        }
      }
    }

    particles.forEach(p => {
      p.update()
      p.draw()
      
      // Connect to mouse
      if (mouse.x) {
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          ctx.strokeStyle = `rgba(64, 158, 255, ${0.4 * (1 - dist/150)})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
    })
    animationId = requestAnimationFrame(animate)
  }
  animate()
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
    window.removeEventListener('mousemove', handleMouseMove)
    cancelAnimationFrame(animationId)
  })
})
</script>

<style scoped>
.mouse-follow-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  /* background: radial-gradient(circle at center, #1b2735 0%, #090a0f 100%); */
  background: transparent; /* Let theme background show or use a dark one */
}
/* If you want to force dark background */
:deep(body) {
   /* background-color: #000 !important; */
}
</style>
