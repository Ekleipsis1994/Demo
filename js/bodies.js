
// bodies.js

function createBodies(currentWidth, groundTop, scaleFactor) {
	const bodies = [];
	
	// 计算物体尺寸
	const objectWidth = currentWidth * scaleFactor;
	
	// 创建物体，并保存初始尺寸
	const rect1 = Bodies.rectangle(
		currentWidth * 2 / 3,
		groundTop * 2 / 3,
		7 * objectWidth / 100,
		7 * objectWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_23.png',
					xScale: 0.4 * scaleFactor,
					yScale: 0.4 * scaleFactor
				}
			}
		}
	);
	rect1.initialWidth = 7 * objectWidth / 100;
	rect1.initialHeight = 7 * objectWidth / 100;
	rect1.initialXScale = 0.4 * scaleFactor;
	rect1.initialYScale = 0.4 * scaleFactor;
	bodies.push(rect1);

	const rect2 = Bodies.rectangle(
		currentWidth * 2 / 3,
		groundTop * 2 / 3,
		7 * objectWidth / 100,
		7 * objectWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_23.png',
					xScale: 0.4 * scaleFactor,
					yScale: 0.4 * scaleFactor
				}
			}
		}
	);
	rect2.initialWidth = 7 * objectWidth / 100;
	rect2.initialHeight = 7 * objectWidth / 100;
	rect2.initialXScale = 0.4 * scaleFactor;
	rect2.initialYScale = 0.4 * scaleFactor;
	bodies.push(rect2);

	const rect3 = Bodies.rectangle(
		currentWidth * 2 / 3,
		groundTop * 2 / 3,
		5.5 * objectWidth / 100,
		2 * objectWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_2_2.png',
					xScale: 0.4 * scaleFactor,
					yScale: 0.4 * scaleFactor
				}
			}
		}
	);
	rect3.initialWidth = 5.5 * objectWidth / 100;
	rect3.initialHeight = 1.5 * objectWidth / 100;
	rect3.initialXScale = 0.4 * scaleFactor;
	rect3.initialYScale = 0.4 * scaleFactor;
	bodies.push(rect3);

	const rect4 = Bodies.rectangle(
		currentWidth * 4 / 5,
		groundTop * 2 / 3,
		7.5 * objectWidth / 100,
		7.5 * objectWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_7_2.png',
					xScale: 0.4 * scaleFactor,
					yScale: 0.4 * scaleFactor
				}
			}
		}
	);
	rect4.initialWidth = 7.5 * objectWidth / 100;
	rect4.initialHeight = 7.5 * objectWidth / 100;
	rect4.initialXScale = 0.4 * scaleFactor;
	rect4.initialYScale = 0.4 * scaleFactor;
	bodies.push(rect4);

	const rect5 = Bodies.rectangle(
		currentWidth * 2 / 3,
		groundTop * 2 / 3,
		9.5 * objectWidth / 100,
		9.5 * objectWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_9_2.png',
					xScale: 0.4 * scaleFactor,
					yScale: 0.4 * scaleFactor
				}
			}
		}
	);
	rect5.initialWidth = 9.5 * objectWidth / 100;
	rect5.initialHeight = 9.5 * objectWidth / 100;
	rect5.initialXScale = 0.4 * scaleFactor;
	rect5.initialYScale = 0.4 * scaleFactor;
	bodies.push(rect5);

	const rect6 = Bodies.rectangle(
		currentWidth * 3 / 4,
		groundTop * 2 / 3,
		6 * objectWidth / 100,
		6 * objectWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_3_2.png',
					xScale: 0.4 * scaleFactor,
					yScale: 0.4 * scaleFactor
				}
			}
		}
	);
	rect6.initialWidth = 6 * objectWidth / 100;
	rect6.initialHeight = 6 * objectWidth / 100;
	rect6.initialXScale = 0.4 * scaleFactor;
	rect6.initialYScale = 0.4 * scaleFactor;
	bodies.push(rect6);

	const rect7 = Bodies.rectangle(
		currentWidth * 1 / 4,
		groundTop * 2 / 3,
		2 * objectWidth / 100,
		2 * objectWidth / 100, {
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_64.png',
					xScale: 0.4 * scaleFactor,
					yScale: 0.4 * scaleFactor
				}
			}
		}
	);
	rect7.initialWidth = 2 * objectWidth / 100;
	rect7.initialHeight = 2 * objectWidth / 100;
	rect7.initialXScale = 0.4 * scaleFactor;
	rect7.initialYScale = 0.4 * scaleFactor;
	bodies.push(rect7);

	const rect8 = Bodies.rectangle(
		currentWidth * 1 / 4 + 2 * currentWidth / 100,
		groundTop * 2 / 3,
		2 * objectWidth / 100,
		2 * objectWidth / 100, {
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_63.png',
					xScale: 0.4 * scaleFactor,
					yScale: 0.4 * scaleFactor
				}
			}
		}
	);
	rect8.initialWidth = 2 * objectWidth / 100;
	rect8.initialHeight = 2 * objectWidth / 100;
	rect8.initialXScale = 0.4 * scaleFactor;
	rect8.initialYScale = 0.4 * scaleFactor;
	bodies.push(rect8);

	const rect9 = Bodies.rectangle(
		currentWidth * 1 / 4 + 4 * currentWidth / 100,
		groundTop * 2 / 3,
		2 * objectWidth / 100,
		2 * objectWidth / 100, {
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_62.png',
					xScale: 0.4 * scaleFactor,
					yScale: 0.4 * scaleFactor
				}
			}
		}
	);
	rect9.initialWidth = 2 * objectWidth / 100;
	rect9.initialHeight = 2 * objectWidth / 100;
	rect9.initialXScale = 0.4 * scaleFactor;
	rect9.initialYScale = 0.4 * scaleFactor;
	bodies.push(rect9);

	const rect10 = Bodies.rectangle(
		currentWidth * 1 / 4 + 6 * currentWidth / 100,
		groundTop * 2 / 3,
		2 * objectWidth / 100,
		2 * objectWidth / 100, {
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_61.png',
					xScale: 0.4 * scaleFactor,
					yScale: 0.4 * scaleFactor
				}
			}
		}
	);
	rect10.initialWidth = 2 * objectWidth / 100;
	rect10.initialHeight = 2 * objectWidth / 100;
	rect10.initialXScale = 0.4 * scaleFactor;
	rect10.initialYScale = 0.4 * scaleFactor;
	bodies.push(rect10);

	const rect11 = Bodies.rectangle(
		currentWidth * 1 / 4 + 8 * currentWidth / 100,
		groundTop * 2 / 3,
		2 * objectWidth / 100,
		2 * objectWidth / 100, {
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_60.png',
					xScale: 0.4 * scaleFactor,
					yScale: 0.4 * scaleFactor
				}
			}
		}
	);
	rect11.initialWidth = 2 * objectWidth / 100;
	rect11.initialHeight = 2 * objectWidth / 100;
	rect11.initialXScale = 0.4 * scaleFactor;
	rect11.initialYScale = 0.4 * scaleFactor;
	bodies.push(rect11);

	const rect12 = Bodies.rectangle(
		currentWidth * 1 / 4 + 10 * currentWidth / 100,
		groundTop * 2 / 3,
		2 * objectWidth / 100,
		2 * objectWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_59.png',
					xScale: 0.4 * scaleFactor,
					yScale: 0.4 * scaleFactor
				}
			}
		}
	);
	rect12.initialWidth = 2 * objectWidth / 100;
	rect12.initialHeight = 2 * objectWidth / 100;
	rect12.initialXScale = 0.4 * scaleFactor;
	rect12.initialYScale = 0.4 * scaleFactor;
	bodies.push(rect12);

	const hoverableBody = Bodies.rectangle(
		currentWidth * 2 / 3,
		groundTop * 2 / 3,
		5.5 * objectWidth / 100,
		5.5 * objectWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Group_44.png', // 原始图片路径
					xScale: 0.4 * scaleFactor,
					yScale: 0.4 * scaleFactor
				}
			},
			// 添加自定义属性
			hoverable: true,
			originalTexture: 'img/Group_44.png', // 保存原始图片路径
			hoverTexture: 'img/Group_45.png' // 悬停时的图片路径
		}
	);

	hoverableBody.initialWidth = 5.5 * objectWidth / 100;
	hoverableBody.initialHeight = 5.5 * objectWidth / 100;
	hoverableBody.initialXScale = 0.4 * scaleFactor;
	hoverableBody.initialYScale = 0.4 * scaleFactor;
	bodies.push(hoverableBody);

	return bodies;
}
