function createPhysicalBoundaries(width, height, pixelRatio) {
  // 定义基本边界厚度（视觉上希望显示的厚度）
  const baseBottomHeight = 8;
  const baseSideWidth = 5;

  // 根据 pixelRatio 进行补偿，内部实际边界厚度
  const bottomHeight = baseBottomHeight;
  const sideWidth = baseSideWidth;

  // 底部边界
  const bottom = Bodies.rectangle(width / 2, height + bottomHeight / 2, width, bottomHeight, {
    isStatic: true,
    render: { fillStyle: "#000000" }
  });

  // 左侧边界
  const left = Bodies.rectangle(sideWidth / 2, height / 2, sideWidth, height, {
    isStatic: true,
    render: { fillStyle: "#000000" }
  });

  // 右侧边界
  const right = Bodies.rectangle(width, height / 2, sideWidth, height, {
    isStatic: true,
    render: { fillStyle: "#000000" }
  });

  return {bottom, left, right };
}

// 定义物体消失的检测范围（可以根据需要调整）
function isOutOfBounds(body, width, height) {
  return body.position.x < 0 ||
         body.position.x > width ||
         body.position.y > height - 2;
}
