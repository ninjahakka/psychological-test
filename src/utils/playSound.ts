// utils/playHoverSound.ts

const soundMap: Record<string, string> = {
    A: '/sounds/grass.mp3',
    B: '/sounds/stone2.mp3',
    C: '/sounds/wood2.mp3',
  };
  
  const cooldownSet = new Set<string>();
  
  export const playHoverSound = (type: string, cooldown = 200) => {
    if (cooldownSet.has(type)) return;
  
    const path = soundMap[type];
    if (!path) {
      console.warn(`無效的音效類型: ${type}`);
      return;
    }
  
    const audio = new Audio(path);
    audio.play().catch((err) => {
      console.error(`音效播放失敗:`, err);
    });
  
    cooldownSet.add(type);
    setTimeout(() => {
      cooldownSet.delete(type);
    }, cooldown);
  };
  