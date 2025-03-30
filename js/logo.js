// js/logo.js

document.getElementById('logo-B').addEventListener('mouseenter', () => {
  document.getElementById('logo-B').src = 'img/Group_48.png';  // 悬停时图片
});
document.getElementById('logo-B').addEventListener('mouseleave', () => {
  document.getElementById('logo-B').src = 'img/Group_46.png';  // 恢复原图
});