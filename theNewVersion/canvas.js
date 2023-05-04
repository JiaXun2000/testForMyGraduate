// // 获取 canvas 元素
// const canvas = document.getElementById('canvas');

// // 设置 canvas 元素的宽高
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // 获取画布对象
// const ctx = canvas.getContext('2d');

// // 定义粒子的数量
// const numParticles = 100;

// // 定义粒子的半径
// const particleRadius = 2;

// // 定义粒子数组
// const particles = [];

// // 初始化粒子数组
// for (let i = 0; i < numParticles; i++) {
//   const x = Math.random() * canvas.width;
//   const y = Math.random() * canvas.height;
//   particles.push({ x, y });
// }

// // 绘制粒子
// function drawParticles() {
//     // 遍历粒子数组，依次绘制每个粒子
//     particles.forEach((particle1, index1) => {
//       ctx.beginPath();
//       ctx.arc(particle1.x, particle1.y, particleRadius, 0, 2 * Math.PI);
//       ctx.fillStyle = '#000000'; // 修改为黑色
//       ctx.fill();
  
//       // 遍历粒子数组，查找与当前粒子距离在一定范围内的其它粒子，并将它们连接起来
//       particles.forEach((particle2, index2) => {
//         if (index1 === index2) {
//           return;
//         }
  
//         const dx = particle1.x - particle2.x;
//         const dy = particle1.y - particle2.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
  
//         if (distance < 100) {
//           ctx.beginPath();
//           ctx.moveTo(particle1.x, particle1.y);
//           ctx.lineTo(particle2.x, particle2.y);
//           ctx.strokeStyle = '#000000'; // 修改为黑色
//           ctx.stroke();
//         }
//       });
//     });
//   }
  

// // 动画循环
// function animate() {
//   // 清空画布
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // 绘制粒子
//   drawParticles();

//   // 循环调用 animate 函数，形成动画效果
//   requestAnimationFrame(animate);
// }

// // 开始动画循环
// animate();









// // 获取 canvas 元素
// const canvas = document.getElementById('canvas');

// // 设置 canvas 元素的宽高
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // 获取画布对象
// const ctx = canvas.getContext('2d');

// // 定义粒子的数量
// const numParticles = 100;

// // 定义粒子的半径
// const particleRadius = 2;

// // 定义粒子数组
// const particles = [];

// // 初始化粒子数组
// for (let i = 0; i < numParticles; i++) {
//   const x = Math.random() * canvas.width;
//   const y = Math.random() * canvas.height;
//   const vx = (Math.random() - 0.5) * 2; // x 方向上的速度
//   const vy = (Math.random() - 0.5) * 2; // y 方向上的速度
//   particles.push({ x, y, vx, vy });
// }

// // 绘制粒子
// function drawParticles() {
//   // 遍历粒子数组，依次绘制每个粒子
//   particles.forEach((particle1, index1) => {
//     ctx.beginPath();
//     ctx.arc(particle1.x, particle1.y, particleRadius, 0, 2 * Math.PI);
//     ctx.fillStyle = '#000000';
//     ctx.fill();

//     // 遍历粒子数组，查找与当前粒子距离在一定范围内的其它粒子，并将它们连接起来
//     particles.forEach((particle2, index2) => {
//       if (index1 === index2) {
//         return;
//       }

//       const dx = particle1.x - particle2.x;
//       const dy = particle1.y - particle2.y;
//       const distance = Math.sqrt(dx * dx + dy * dy);

//       if (distance < 100) {
//         ctx.beginPath();
//         ctx.moveTo(particle1.x, particle1.y);
//         ctx.lineTo(particle2.x, particle2.y);
//         ctx.strokeStyle = '#000000';
//         ctx.stroke();
//       }
//     });
//   });
// }

// // 更新粒子位置
// function updateParticles() {
//   particles.forEach(particle => {
//     particle.x += particle.vx;
//     particle.y += particle.vy;

//     // 粒子碰到画布边缘时反弹
//     if (particle.x < particleRadius || particle.x > canvas.width - particleRadius) {
//       particle.vx = -particle.vx;
//     }

//     if (particle.y < particleRadius || particle.y > canvas.height - particleRadius) {
//       particle.vy = -particle.vy;
//     }
//   });
// }

// // 动画循环
// function animate() {
//   // 清空画布
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // 更新粒子的位置
//   particles.forEach(particle => {
//   particle.x += (Math.random() - 0.5) * 2;
//   particle.y += (Math.random() - 0.5) * 2;
//   // 如果粒子移动出画布外，则将其位置设置为画布内的一个随机位置
// if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
//     particle.x = Math.random() * canvas.width;
//     particle.y = Math.random() * canvas.height;
//   }
// });

// // 绘制粒子
// drawParticles();

// // 循环调用 animate 函数，形成动画效果
// requestAnimationFrame(animate);
// }

// // 开始动画循环
// animate();  








// 获取 canvas 元素
const canvas = document.getElementById('canvas');

// 设置 canvas 元素的宽高
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 获取画布对象
const ctx = canvas.getContext('2d');

// 定义粒子的数量
const numParticles = 100;

// 定义粒子的半径
const particleRadius = 2;

// 定义粒子数组
const particles = [];

// 初始化粒子数组
for (let i = 0; i < numParticles; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  particles.push({ x, y });
}

// 绘制粒子
function drawParticles() {
  // 遍历粒子数组，依次绘制每个粒子
  particles.forEach(particle => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particleRadius, 0, 2 * Math.PI);
    ctx.fillStyle = '#000000';
    ctx.fill();
  });

  // 遍历粒子数组，查找与当前粒子距离在一定范围内的其它粒子，并将它们连接起来
  particles.forEach((particle1, index1) => {
    particles.slice(index1 + 1).forEach(particle2 => {
      const dx = particle1.x - particle2.x;
      const dy = particle1.y - particle2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.beginPath();
        ctx.moveTo(particle1.x, particle1.y);
        ctx.lineTo(particle2.x, particle2.y);
        ctx.strokeStyle = '#000000';
        ctx.stroke();
      }
    });
  });
}

// // 更新粒子位置
// function updateParticles() {
//   particles.forEach(particle => {
//     // 沿着固定方向移动粒子
//     const angle = Math.PI / 4; // 45度角
//     const speed = 2;
//     particle.x += speed * Math.cos(angle);
//     particle.y += speed * Math.sin(angle);

//     // 粒子碰到画布边缘时反弹
//     if (particle.x < particleRadius) {
//       particle.x = particleRadius;
//     } else if (particle.x > canvas.width - particleRadius) {
//       particle.x = canvas.width - particleRadius;
//     }

//     if (particle.y < particleRadius) {
//       particle.y = particleRadius;
//     } else if (particle.y > canvas.height - particleRadius) {
//       particle.y = canvas.height - particleRadius;
//     }
//   });
// }

// 更新粒子位置
function updateParticles() {
    particles.forEach(particle => {
      // 随机生成运动方向
      const angle = Math.random() * 2 * Math.PI;
      const speed = 2;
      particle.x += speed * Math.cos(angle);
      particle.y += speed * Math.sin(angle);
  
      // 粒子碰到画布边缘时反弹
      if (particle.x < particleRadius) {
        particle.x = particleRadius;
      } else if (particle.x > canvas.width - particleRadius) {
        particle.x = canvas.width - particleRadius;
      }
  
      if (particle.y < particleRadius) {
        particle.y = particleRadius;
      } else if (particle.y > canvas.height - particleRadius) {
        particle.y = canvas.height - particleRadius;
      }
    });
  }
  

// 动画循环
function animate() {
  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 更新粒子的位置
  updateParticles();

  // 绘制粒子
  drawParticles();

  // 递归调用自身，形成动画效果
  requestAnimationFrame(animate);
}

// 启动动画
animate();
