---
pageLayout: page
---

<div class="home">
	<div class="avatar">
		<img src="/lzy.png" alt="Avatar" loading="lazy" />
		<div class="emoji">🤗</div>
	</div>
	<div class="info">
		<div class="name">
      <span style="color: var(--vp-c-brand-1); margin-right: 6px;">&gt;</span>
      <span style="color: var(--vp-c-text-1);">lzy98276</span>
      <span class="cursor">_</span>
    </div>
    <blockquote>
      <p class="hitokoto">
        <span id="hitokoto_text">一言加载中…</span>
      </p>
    </blockquote>
    <div class="social">
      <a href="https://github.com/lzy98276" target="_blank"><Icon name="mdi:github" /></a>
      <a href="https://space.bilibili.com/520571577" target="_blank"><Icon name="mingcute:bilibili-line" color="#F9709A" /></a>
      <a href="mailto:lzy.12@foxmail.com" target="_blank"><Icon name="mdi:email-outline" color="#177F41" /></a>
    </div>
    <div class="actions">
      <div class="action">
        <VPButton text="博客" icon="mdi:blog" href="/blog/" theme="alt" />
        <VPButton text="技能" icon="mdi:code-tags" href="/skills" theme="alt" />
      </div>
    </div>
	</div>
</div>

<div class="pixelblast-layer" aria-hidden="true">
  <ClientOnly>
    <PixelBlast
      class="pixelblast-canvas"
      variant="square"
      color="#5086a1"
      :speed="0.5"
      :pixel-size="4"
      :pattern-scale="2"
      :pattern-density="0.8"
      :edge-fade="0.5"
      :pixel-size-jitter="0"
      :antialias="true"
      :enable-ripples="true"
      :ripple-intensity-scale="1"
      :ripple-thickness="0.1"
      :ripple-speed="0.3"
      :liquid="false"
      :liquid-strength="0.1"
      :liquid-radius="1"
      :liquid-wobble-speed="4.5"
      :auto-pause-offscreen="true"
      :transparent="true"
      :noise-amount="0"
    />
  </ClientOnly>
</div>

<link rel="preconnect" href="https://fonts.loli.net">
<link rel="preconnect" href="https://gstatic.loli.net" crossorigin>
<link href="https://fonts.loli.net/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&amp;family=Google+Sans+Flex:opsz,wght@6..144,1..1000&amp;display=swap" rel="stylesheet">

<style scoped>
@keyframes blink {
  from, to { opacity: 1; }
  50% { opacity: 0; }
}

.cursor {
  animation: blink 1s step-end infinite;
  color: var(--vp-c-brand-3);
  display: inline-block;
  width: 0.65ch;
}

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  max-width: 1200px;
  padding: 3rem 1.5rem;
  margin: 0 auto;
  min-height: 75vh;
  position: relative;
  z-index: 1;
}

.pixelblast-layer {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: auto;
  overflow: hidden;
}

.pixelblast-layer :deep(.home-hero-effect-pixel-blast) {
  position: absolute;
  inset: 0;
  pointer-events: auto;
}

.avatar img {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 24px var(--vp-c-brand-soft);
}

.avatar {
  position: relative;
  display: inline-block;
}

.emoji {
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-divider);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.emoji:hover {
  transform: scale(1.15);
}

.info {
  flex: 1;
  min-width: 0;
}

.name {
  font-family: 'Google Sans Code', sans-serif;
  font-size: 60px;
  font-weight: bold;
  margin: 0 0 0.5rem;
  line-height: 1.2;
}

.vp-icon {
  margin: 0 !important;
}

.info > blockquote {
  background-color: var(--vp-c-bg-soft);
}

.hitokoto {
  margin: 0;
  font-size: 20px !important;
  color: var(--vp-c-text-2);
}

.social {
  font-size: 28px;
  display: flex;
  gap: 0.8rem;
}

.social a {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  text-decoration: none;
  color: var(--vp-c-text-1);
}

.social-icon {
  width: 70%;
  height: 70%;
  border-radius: 50%;
  object-fit: contain;
}

.social a:hover {
  transform: scale(1.1);
}

.actions {
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
}

.action {
  display: flex;
  gap: 0.25rem;
}

.action :deep(.vp-button) {
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  .home {
    flex-direction: column;
    text-align: center;
  }
  .name { font-size: 36px; }
  .avatar img { width: 200px; height: 200px; }
  .emoji {
    bottom: 18px;
    right: 18px;
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
  .tags-container {
    justify-content: center;
    align-items: center;
  }
  .social {
    justify-content: center;
    align-items: center;
  }
  .actions {
    justify-content: center;
  }
}
</style>

<script setup>
import PixelBlast from '@theme/background/PixelBlast.vue'
import { onMounted } from 'vue'

onMounted(async () => {
  try {
    const res = await fetch('/hitokoto/sentences.txt');
    const text = await res.text();
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const el = document.getElementById('hitokoto_text');
    if (el && lines.length > 0) {
      const randomIndex = Math.floor(Math.random() * lines.length);
      const hitokoto = lines[randomIndex].trim();
      el.textContent = hitokoto;
    }
  } catch (err) {
    console.error('Failed to load hitokoto:', err);
  }
})
</script>
