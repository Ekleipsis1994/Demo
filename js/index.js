const {
	Engine,
	Render,
	World,
	Bodies,
	Mouse,
	MouseConstraint,
	Events,
	Body
} = Matter;

// 初始尺寸：直接采用窗口尺寸
let currentWidth = window.innerWidth;
let currentHeight = window.innerHeight;
const pixelRatio = window.devicePixelRatio || 1;

// 定义基准宽高
const designWidth = 1920;
const designHeight = 1080;

// 设置缩放因子
let scaleFactor = window.innerWidth / designWidth;

// 保存初始窗口尺寸（全局，用于 resize 缩放计算）
const initialWindowWidth = window.innerWidth;
const initialWindowHeight = window.innerHeight;

// 定义全局变量保存旧尺寸
let oldWidth = window.innerWidth;
let oldHeight = window.innerHeight;

// 创建物理引擎
const engine = Engine.create();
const world = engine.world;

// 创建 Runner 实例
const runner = Matter.Runner.create();

// 获取容器（Matter.js 的渲染器将挂载到该容器内）
const container = document.getElementById("container");
container.style.width = currentWidth + "px";
container.style.height = currentHeight + "px";

// 创建渲染器
const render = Render.create({
	element: container,
	engine: engine,
	options: {
		width: currentWidth,
		height: currentHeight,
		background: '#000000',
		wireframes: false, // 关闭线框模式，显示图片
		pixelRatio: window.devicePixelRatio, // 自动适应高分辨率屏幕
		showCollisions: false,
		showVelocity: false,
	}
});

// 计算地面顶部 y 坐标
const groundTop = 0.8 * currentHeight;

// 创建物理边界，使用动态计算后的厚度（补偿 pixelRatio）
let boundaries = createPhysicalBoundaries(currentWidth, currentHeight, scaleFactor);
World.add(world, [boundaries.top, boundaries.bottom, boundaries.left, boundaries.right]);

// 从 bodies.js 中调用 createBodies 函数
const rectangles = createBodies(currentWidth, groundTop, scaleFactor);

// 添加物体到世界中
World.add(world, rectangles);

// 添加鼠标控制（拖拽功能）
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
	mouse: mouse,
	constraint: {
		stiffness: 0.2,
		render: {
			visible: false
		}
	}
});
World.add(world, mouseConstraint);

// 监听碰撞事件
Events.on(engine, 'collisionStart', (event) => {
	event.pairs.forEach(pair => {
		let bodyA = pair.bodyA;
		let bodyB = pair.bodyB;

		if (rectangles.includes(bodyA)) {
			Matter.Body.setStatic(bodyA, false);
		}
		if (rectangles.includes(bodyB)) {
			Matter.Body.setStatic(bodyB, false);
		}
	});
});

// 允许页面随滚轮滚动
window.addEventListener("wheel", (event) => {
	window.scrollBy(0, event.deltaY);
});

// 使用 Runner 运行引擎
Matter.Runner.run(runner, engine);

// 启动渲染器保持不变
Render.run(render);

// resize 事件：更新容器、渲染器和边界，同时重新计算边界厚度
window.addEventListener('resize', () => {
	currentWidth = window.innerWidth;
	currentHeight = window.innerHeight;

	// 保存 resize 前的尺寸
	const prevWidth = oldWidth;
	const prevHeight = oldHeight;

	// 更新全局尺寸
	oldWidth = window.innerWidth;
	oldHeight = window.innerHeight;
	currentWidth = oldWidth;
	currentHeight = oldHeight;

	// 更新容器尺寸
	container.style.width = currentWidth + "px";
	container.style.height = currentHeight + "px";

	// 更新渲染器和 canvas 尺寸
	render.options.width = currentWidth;
	render.options.height = currentHeight;
	render.canvas.width = currentWidth * pixelRatio;
	render.canvas.height = currentHeight * pixelRatio;
	render.canvas.style.width = currentWidth + "px";
	render.canvas.style.height = currentHeight + "px";

	// 移除旧边界
	World.remove(world, [boundaries.bottom, boundaries.left, boundaries.right]);

	// 重新创建物理边界，注意要传入最新的 pixelRatio（假设 pixelRatio 没变）
	boundaries = window.createPhysicalBoundaries(currentWidth, currentHeight, pixelRatio);
	World.add(world, [boundaries.bottom, boundaries.left, boundaries.right]);

	// 更新渲染器视口
	Render.lookAt(render, {
		min: {
			x: 0,
			y: 0
		},
		max: {
			x: currentWidth,
			y: currentHeight
		}
	});

	// 使用初始窗口宽度计算统一的缩放因子
	scaleFactor = currentWidth / initialWindowWidth;

	// 遍历所有需要更新位置的物体（例如 rectangles 数组里的所有物体）
	rectangles.forEach(body => {
		// 确保该物体有保存初始尺寸
		if (body.initialWidth && body.initialHeight) {
			// 计算目标尺寸
			const targetWidth = body.initialWidth * scaleFactor;
			const targetHeight = body.initialHeight * scaleFactor;

			// 获取当前物体的实际宽度和高度
			const currentBodyWidth = body.bounds.max.x - body.bounds.min.x;
			const currentBodyHeight = body.bounds.max.y - body.bounds.min.y;

			// 计算需要缩放的比例
			const scaleX = targetWidth / currentBodyWidth;
			const scaleY = targetHeight / currentBodyHeight;

			// 对物体进行缩放
			Matter.Body.scale(body, scaleX, scaleY);

			// 更新 sprite 缩放属性以确保视觉一致性
			if (body.render && body.render.sprite) {
				if (body.initialXScale && body.initialYScale) {
					body.render.sprite.xScale = body.initialXScale * scaleFactor;
					body.render.sprite.yScale = body.initialYScale * scaleFactor;
				}
			}
			const newX = body.position.x * (currentWidth / prevWidth);
			const newY = body.position.y * (currentHeight / prevHeight);
			Matter.Body.setPosition(body, {
				x: newX,
				y: newY
			});
		}
	});

});

const MAX_SPEED = 20; // 定义一个合适的最大速度

// 监听引擎更新后的事件
Matter.Events.on(engine, 'afterUpdate', () => {

	rectangles.forEach(body => {
		    // 计算当前速度
		    const vx = body.velocity.x;
		    const vy = body.velocity.y;
		    const speed = Math.sqrt(vx * vx + vy * vy);
			
			    // 如果超过最大速度，则缩放到最大速度
			    if (speed > MAX_SPEED) {
			      const scale = MAX_SPEED / speed;
			      Matter.Body.setVelocity(body, { x: vx * scale, y: vy * scale });
			    }
				
		if (isOutOfBounds(body, currentWidth, currentHeight)) {

			// 重置位置（这里示例将物体移回窗口中心）
			Matter.Body.setPosition(body, {
				x: currentWidth / 2,
				y: currentHeight * 2 / 3
			});
			// 同时重置速度，防止物体立即又飞出去
			Matter.Body.setVelocity(body, {
				x: 0,
				y: 0
			});


			// 设置一个较高的空气阻力，减缓下落速度
			Matter.Body.set(body, {
				frictionAir: 0.08
			});

			// 一段时间后（例如2秒）恢复默认空气阻力
			setTimeout(() => {
				Matter.Body.set(body, {
					frictionAir: 0.01
				});
			}, 100);
		}
	});
});

render.canvas.addEventListener('mousemove', (event) => {
	// 获取 canvas 在页面上的边界信息
	const rect = render.canvas.getBoundingClientRect();
	// 计算鼠标相对于 canvas 的坐标
	const mousePoint = {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};

	// 遍历所有物体，但只对 hoverable: true 的物体进行处理
	rectangles.forEach(body => {
		if (body.hoverable) {
			let isHovered = false;
			// 根据物体形状判断是否悬停，这里假设是矩形
			isHovered = Matter.Vertices.contains(body.vertices, mousePoint);

			if (isHovered) {
				// 鼠标悬停时更换为 hover 图片
				if (body.render.sprite.texture !== body.hoverTexture) {
					body.render.sprite.texture = body.hoverTexture;
				}
			} else {
				// 鼠标未悬停时恢复为原始图片
				if (body.render.sprite.texture !== body.originalTexture) {
					body.render.sprite.texture = body.originalTexture;
				}
			}
		}
	});
});