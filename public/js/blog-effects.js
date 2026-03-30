// 博客全局特效合集 - 本地化加载防止墙和限速

window.BlogEffects = {
  // 特效1：鼠标星光微粒
  star: function() {
    const canvas = document.createElement("canvas");
    canvas.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:99999;";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles = [];
    
    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
    
    window.addEventListener("mousemove", (e) => {
      if (Math.random() > 0.5) return; // 降低密度
      particles.push({
        x: e.clientX, 
        y: e.clientY, 
        r: Math.random() * 2 + 1.5,
        dx: Math.random() * 1.5 - 0.75, 
        dy: Math.random() * 1.5 - 0.75,
        life: 1,
        color: `hsl(${Math.random() * 60 + 200}, 100%, 70%)` // 蓝紫粉色系
      });
    });

    function render() {
      ctx.clearRect(0, 0, width, height);
      for(let i = 0; i < particles.length; i++){
        let p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', `, ${p.life})`).replace('hsl', 'hsla');
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy - 0.5; // 轻微向上飘
        p.life -= 0.015;
        p.r += 0.05;
      }
      particles = particles.filter(p => p.life > 0);
      requestAnimationFrame(render);
    }
    render();
  },

  // 特效2：点击核心词/富强民主词汇飘出（纯CSS+HTML）
  clickword: function() {
    const words = ["✨", "🌈", "🌸", "⭐", "🎉", "🔥", "🔮", "🎵", "喵~", "Nice!"];
    let wordIndex = 0;
    document.body.addEventListener('click', function(e) {
      // 忽略 a 标签的点击，防止干扰跳转
      if(e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) return;
      
      const el = document.createElement('span');
      const text = words[wordIndex];
      wordIndex = (wordIndex + 1) % words.length;
      
      el.textContent = text;
      el.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        transform: translate(-50%, -50%);
        font-weight: bold;
        color: hsl(${Math.random() * 360}, 80%, 60%);
        pointer-events: none;
        z-index: 99999;
        user-select: none;
        animation: floatUp 1s ease-out forwards;
      `;
      document.body.appendChild(el);
      
      if(!document.getElementById('clickword-css')) {
        const style = document.createElement('style');
        style.id = 'clickword-css';
        style.innerHTML = `
          @keyframes floatUp {
            0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -100px) scale(1.5); }
          }
        `;
        document.head.appendChild(style);
      }
      
      setTimeout(() => el.remove(), 1000);
    });
  },

  // 特效3：樱花飘落 (Canvas)
  sakura: function() {
    const canvas = document.createElement("canvas");
    canvas.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:99998;";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles = [];
    
    // 初始化樱花
    for(let i=0; i<30; i++) {
      particles.push(createPetal(true));
    }
    
    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    function createPetal(randomY = false) {
      return {
        x: Math.random() * width,
        y: randomY ? Math.random() * height : -20,
        s: Math.random() * 0.5 + 0.5, // scale
        dx: Math.random() * 2 - 1, // drift x
        dy: Math.random() * 1 + 1, // speed y
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.1
      };
    }

    function render() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#ffb7c5';
      
      for(let i = 0; i < particles.length; i++){
        let p = particles[i];
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.scale(p.s, p.s);
        
        // 简单的樱花花瓣贝塞尔曲线
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-10, -10, -15, -25, 0, -25);
        ctx.bezierCurveTo(15, -25, 10, -10, 0, 0);
        ctx.fill();
        ctx.restore();
        
        p.x += p.dx + Math.sin(p.y * 0.01);
        p.y += p.dy;
        p.rot += p.rotSpeed;
        
        if(p.y > height + 30) {
          particles[i] = createPetal();
        }
      }
      requestAnimationFrame(render);
    }
    render();
  }
};
