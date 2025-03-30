// bodies.js

function createBodies(currentWidth, groundTop) {
	const bodies = [];

	// 创建物体，并保存初始尺寸
	const rect1 = Bodies.rectangle(
		currentWidth * 2 / 3,
		groundTop * 1 / 3,
		7 * currentWidth / 100,
		7 * currentWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_23.png',
					xScale: 0.4,
					yScale: 0.4
				}
			}
		}
	);
	rect1.initialWidth = 7 * currentWidth / 100;
	rect1.initialHeight = 7 * currentWidth / 100;
	rect1.initialXScale = 0.4;
	rect1.initialYScale = 0.4;
	bodies.push(rect1);

	const rect2 = Bodies.rectangle(
		currentWidth * 2 / 3,
		groundTop * 1 / 3,
		7 * currentWidth / 100,
		7 * currentWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_23.png',
					xScale: 0.4,
					yScale: 0.4
				}
			}
		}
	);
	rect2.initialWidth = 7 * currentWidth / 100;
	rect2.initialHeight = 7 * currentWidth / 100;
	rect2.initialXScale = 0.4;
	rect2.initialYScale = 0.4;
	bodies.push(rect2);

	const rect3 = Bodies.rectangle(
		currentWidth * 2 / 3,
		groundTop * 1 / 3,
		5.5 * currentWidth / 100,
		1.5 * currentWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_2_2.png',
					xScale: 0.4,
					yScale: 0.4
				}
			}
		}
	);
	rect3.initialWidth = 5.5 * currentWidth / 100;
	rect3.initialHeight = 1.5 * currentWidth / 100;
	rect3.initialXScale = 0.4;
	rect3.initialYScale = 0.4;
	bodies.push(rect3);

	const rect4 = Bodies.rectangle(
		currentWidth * 4 / 5,
		groundTop * 1 / 3,
		7.5 * currentWidth / 100,
		7.5 * currentWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_7_2.png',
					xScale: 0.4,
					yScale: 0.4
				}
			}
		}
	);
	rect4.initialWidth = 7.5 * currentWidth / 100;
	rect4.initialHeight = 7.5 * currentWidth / 100;
	rect4.initialXScale = 0.4;
	rect4.initialYScale = 0.4;
	bodies.push(rect4);

	const rect5 = Bodies.rectangle(
		currentWidth * 2 / 3,
		groundTop * 1 / 3,
		9.5 * currentWidth / 100,
		9.5 * currentWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_9_2.png',
					xScale: 0.4,
					yScale: 0.4
				}
			}
		}
	);
	rect5.initialWidth = 9.5 * currentWidth / 100;
	rect5.initialHeight = 9.5 * currentWidth / 100;
	rect5.initialXScale = 0.4;
	rect5.initialYScale = 0.4;
	bodies.push(rect5);

	const rect6 = Bodies.rectangle(
		currentWidth * 3 / 4,
		groundTop * 1 / 3,
		6 * currentWidth / 100,
		6 * currentWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_3_2.png',
					xScale: 0.4,
					yScale: 0.4
				}
			}
		}
	);
	rect6.initialWidth = 6 * currentWidth / 100;
	rect6.initialHeight = 6 * currentWidth / 100;
	rect6.initialXScale = 0.4;
	rect6.initialYScale = 0.4;
	bodies.push(rect6);

	const rect7 = Bodies.rectangle(
		currentWidth * 1 / 4,
		groundTop * 1 / 3,
		2 * currentWidth / 100,
		2 * currentWidth / 100, {
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_64.png',
					xScale: 0.4,
					yScale: 0.4
				}
			}
		}
	);
	rect7.initialWidth = 2 * currentWidth / 100;
	rect7.initialHeight = 2 * currentWidth / 100;
	rect7.initialXScale = 0.4;
	rect7.initialYScale = 0.4;
	bodies.push(rect7);

	const rect8 = Bodies.rectangle(
		currentWidth * 1 / 4 + 2 * currentWidth / 100,
		groundTop * 1 / 3,
		2 * currentWidth / 100,
		2 * currentWidth / 100, {
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_63.png',
					xScale: 0.4,
					yScale: 0.4
				}
			}
		}
	);
	rect8.initialWidth = 7 * currentWidth / 100;
	rect8.initialHeight = 7 * currentWidth / 100;
	rect8.initialXScale = 0.4;
	rect8.initialYScale = 0.4;
	bodies.push(rect8);

	const rect9 = Bodies.rectangle(
		currentWidth * 1 / 4 + 4 * currentWidth / 100,
		groundTop * 1 / 3,
		2 * currentWidth / 100,
		2 * currentWidth / 100, {
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_62.png',
					xScale: 0.4,
					yScale: 0.4
				}
			}
		}
	);
	rect9.initialWidth = 2 * currentWidth / 100;
	rect9.initialHeight = 2 * currentWidth / 100;
	rect9.initialXScale = 0.4;
	rect9.initialYScale = 0.4;
	bodies.push(rect9);

	const rect10 = Bodies.rectangle(
		currentWidth * 1 / 4 + 6 * currentWidth / 100,
		groundTop * 1 / 3,
		2 * currentWidth / 100,
		2 * currentWidth / 100, {
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_61.png',
					xScale: 0.4,
					yScale: 0.4
				}
			}
		}
	);
	rect10.initialWidth = 2 * currentWidth / 100;
	rect10.initialHeight = 2 * currentWidth / 100;
	rect10.initialXScale = 0.4;
	rect10.initialYScale = 0.4;
	bodies.push(rect10);

	const rect11 = Bodies.rectangle(
		currentWidth * 1 / 4 + 8 * currentWidth / 100,
		groundTop * 1 / 3,
		2 * currentWidth / 100,
		2 * currentWidth / 100, {
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_60.png',
					xScale: 0.4,
					yScale: 0.4
				}
			}
		}
	);
	rect11.initialWidth = 2 * currentWidth / 100;
	rect11.initialHeight = 2 * currentWidth / 100;
	rect11.initialXScale = 0.4;
	rect11.initialYScale = 0.4;
	bodies.push(rect11);

	const rect12 = Bodies.rectangle(
		currentWidth * 1 / 4 + 10 * currentWidth / 100,
		groundTop * 1 / 3,
		2 * currentWidth / 100,
		2 * currentWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Vector_59.png',
					xScale: 0.4,
					yScale: 0.4
				}
			}
		}
	);
	rect12.initialWidth = 2 * currentWidth / 100;
	rect12.initialHeight = 2 * currentWidth / 100;
	rect12.initialXScale = 0.4;
	rect12.initialYScale = 0.4;
	bodies.push(rect12);

	const hoverableBody = Bodies.rectangle(
		currentWidth * 2 / 3,
		groundTop * 1 / 3,
		5.5 * currentWidth / 100,
		5.5 * currentWidth / 100, {
			restitution: 0.8,
			isStatic: false,
			render: {
				sprite: {
					texture: 'img/Group_44.png', // 原始图片路径
					xScale: 0.4,
					yScale: 0.4
				}
			},
			// 添加自定义属性
			hoverable: true,
			originalTexture: 'img/Group_44.png', // 保存原始图片路径
			hoverTexture: 'img/Group_45.png' // 悬停时的图片路径
		}
	);

	hoverableBody.initialWidth = 5.5 * currentWidth / 100;
	hoverableBody.initialHeight = 5.5 * currentWidth / 100;
	hoverableBody.initialXScale = 0.4;
	hoverableBody.initialYScale = 0.4;
	bodies.push(hoverableBody);

	return bodies;
}