function createPhysicalBoundaries(width, height, scaleFactor) {
	// 定义基本边界厚度（视觉上希望显示的厚度）
	const baseBottomHeight = 10 * height / 100;
	const baseSideWidth = 10 * width / 100;

	// 根据 scaleFactor 进行补偿，内部实际边界厚度
	const bottomHeight = baseBottomHeight * scaleFactor;
	const sideWidth = baseSideWidth * scaleFactor;

	// 顶部边界
	const top = Bodies.rectangle(width / 2, height / 2 + bottomHeight / 4, width, bottomHeight, {
		isStatic: true,
		restitution: 0,
		friction: 1,
		render: {
			fillStyle: 'rgba(255, 0, 0, 0.0)'
		}
	});

	// 底部边界
	const bottom = Bodies.rectangle(width / 2, height + bottomHeight / 4, width, bottomHeight, {
		isStatic: true,
		restitution: 0,
		friction: 1,
		render: {
			fillStyle: 'rgba(0,0,0,0)'
		}
	});

	// 左侧边界
	const left = Bodies.rectangle(-sideWidth / 2, height / 2, sideWidth, height, {
		isStatic: true,
		restitution: 0,
		friction: 1,
		render: {
			fillStyle: 'rgba(0,0,0,0)'
		}
	});

	// 右侧边界
	const right = Bodies.rectangle(width + sideWidth / 2, height / 2, sideWidth, height, {
		isStatic: true,
		restitution: 0,
		friction: 1,
		render: {
			fillStyle: 'rgba(0,0,0,0)'
		}
	});

	return {
		top,
		bottom,
		left,
		right
	};
}

// 定义物体消失的检测范围
function isOutOfBounds(body, width, height) {
	return body.bounds.max.x < 0 ||
		body.bounds.min.x > width ||
		body.bounds.max.y < height / 2 ||
		body.position.y > height - 2;
}