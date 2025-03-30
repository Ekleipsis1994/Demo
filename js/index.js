const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Events, Body } = Matter;

// 初始尺寸：直接采用窗口尺寸
let currentWidth = window.innerWidth;
let currentHeight = window.innerHeight;
const pixelRatio = window.devicePixelRatio || 1;

// 定义全局变量保存旧尺寸
let oldWidth = window.innerWidth;
let oldHeight = window.innerHeight;

// 创建物理引擎
const engine = Engine.create();
const world = engine.world;

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
        wireframes: false,      // 关闭线框模式，显示图片
        pixelRatio: window.devicePixelRatio, // 自动适应高分辨率屏幕
        showCollisions: false,
        showVelocity: false,
    }
});

  console.log('Window width:', window.innerWidth);
  console.log('Window height:', window.innerHeight);
  console.log('Device Pixel Ratio:', window.devicePixelRatio);
// 创建物理边界，使用动态计算后的厚度（补偿 pixelRatio）
let boundaries = createPhysicalBoundaries(currentWidth, currentHeight, pixelRatio);
World.add(world, [boundaries.bottom, boundaries.left, boundaries.right]);

// 计算地面顶部 y 坐标
const groundTop = currentHeight - 10;

// 定义动态 PNG 图片路径
const rectangle_m_Image1 = 'img/Vector_23.png';
const rectangle_m_Image2 = 'img/Vector_23.png';
const rectangle_m_Image3 = 'img/Vector_2_2.png';
const rectangle_m_Image4 = 'img/Vector_7_2.png';
const rectangle_m_Image5 = 'img/Vector_9_2.png';
const circle_m_Image1 = 'img/Vector_3_2.png';
const circle_m_Image2 = 'img/Group_44.png';
const circle_m_Image3 = 'img/Group_45.png';
const rectangle_s_Image1 = 'img/Vector_64.png';
const rectangle_s_Image2 = 'img/Vector_63.png';
const rectangle_s_Image3 = 'img/Vector_62.png';
const rectangle_s_Image4 = 'img/Vector_61.png';
const rectangle_s_Image5 = 'img/Vector_60.png';
const rectangle_s_Image6 = 'img/Vector_59.png';

// 创建图形
const rectangles = [
    Bodies.rectangle(
        currentWidth * 2/3, 
        groundTop * 1/3, 
        5.3 * currentWidth / 100,
		5.3 * currentWidth / 100, 
        { 
            restitution: 0.8, 
            isStatic: false,
            render: {
                sprite: {
                    texture: rectangle_m_Image1,
                    xScale: 0.06,
                    yScale: 0.06
                }
            }
        }
    ),
    Bodies.rectangle(
        currentWidth * 2/3, 
        groundTop * 1/3, 
        5.3 * currentWidth / 100,
		5.3 * currentWidth / 100, 
        { 
            restitution: 0.8, 
            isStatic: false,
            render: {
                sprite: {
                    texture: rectangle_m_Image2,
                    xScale: 0.06,  // 根据图片原始尺寸调整
                    yScale: 0.06
                }
            }
        }
    ),
    Bodies.rectangle(
        currentWidth * 2 / 3, 
        groundTop * 1/3, 
        5.5 * currentWidth / 100,
		1.5 * currentWidth / 100, 
        { 
            restitution: 0.8, 
            isStatic: false,
            render: {
                sprite: {
                    texture: rectangle_m_Image3,
                    xScale: 0.08,
                    yScale: 0.08
                }
            }
        }
    ),
	Bodies.rectangle(
	    currentWidth * 4/5, 
	    groundTop * 1/3, 
	    5.5 * currentWidth / 100,
		5.5 * currentWidth / 100, 
	    { 
	        restitution: 0.8, 
	        isStatic: false,
	        render: {
	            sprite: {
	                texture: rectangle_m_Image4,
	                xScale: 0.06,
	                yScale: 0.06
	            }
	        }
	    }
	),
    Bodies.rectangle(
    	    currentWidth * 2 / 3, 
    	    groundTop * 1/3, 
    	    6 * currentWidth / 100,
			6 * currentWidth / 100, 
    	    { 
    	        restitution: 0.8, 
    	        isStatic: false,
    	        render: {
    	            sprite: {
    	                texture: rectangle_m_Image5,
    	                xScale: 0.05,
    	                yScale: 0.05
    	            }
    	        }
    	    }
    	),
	Bodies.rectangle(
			    currentWidth * 3 / 4, 
			    groundTop * 1/3, 
			    5.5 * currentWidth / 100,
				5.5 * currentWidth / 100, 
			    { 
			        restitution: 0.8, 
			        isStatic: false,
			        render: {
			            sprite: {
			                texture: circle_m_Image1,
			                xScale: 0.01,
			                yScale: 0.01
			            }
			        }
			    }
			),
	Bodies.rectangle(
		    currentWidth * 1/4, 
		    groundTop * 1/3, 
		    2.5 * currentWidth / 100,
			2.5 * currentWidth / 100, 
		    { 
		        isStatic: false,
		        render: {
		            sprite: {
		                texture: rectangle_s_Image1,
		                xScale: 0.1,
		                yScale: 0.1
		            }
		        }
		    }
		),
	Bodies.rectangle(
		    currentWidth * 1/4 + 12, 
		    groundTop * 1/3, 
		    2.5 * currentWidth / 100,
			2.5 * currentWidth / 100, 
		    { 
		        isStatic: false,
		        render: {
		            sprite: {
		                texture: rectangle_s_Image2,
		                xScale: 0.1,
		                yScale: 0.1
		            }
		        }
		    }
		),
		Bodies.rectangle(
		    currentWidth * 1/4 + 20, 
		    groundTop * 1/3, 
		    2.5 * currentWidth / 100,
			2.5 * currentWidth / 100, 
		    { 
		        restitution: 0.8, 
		        isStatic: false,
		        render: {
		            sprite: {
		                texture: rectangle_s_Image3,
		                xScale: 0.1,
		                yScale: 0.1
		            }
		        }
		    }
		),
		Bodies.rectangle(
		    currentWidth * 1/4 + 30, 
		    groundTop * 1/3, 
		    2.5 * currentWidth / 100,
			2.5 * currentWidth / 100, 
		    { 
		        restitution: 0.8, 
		        isStatic: false,
		        render: {
		            sprite: {
		                texture: rectangle_s_Image4,
		                xScale: 0.1,
		                yScale: 0.1
		            }
		        }
		    }
		),
		Bodies.rectangle(
		    currentWidth * 1/4 + 40, 
		    groundTop * 1/3, 
		    2.5 * currentWidth / 100,
			2.5 * currentWidth / 100, 
		    { 
		        restitution: 0.8, 
		        isStatic: false,
		        render: {
		            sprite: {
		                texture: rectangle_s_Image5,
		                xScale: 0.1,  // 如果图片原始宽度是 100，则缩放到 50px 宽
		                yScale: 0.1    // 如果图片原始高度是 60，则缩放到 30px 高
		            }
		        }
		    }
		),
		Bodies.rectangle(
		    currentWidth * 1/4 + 50, 
		    groundTop * 1/3, 
		    2.5 * currentWidth / 100,
			2.5 * currentWidth / 100, 
		    { 
		        restitution: 0.8, 
		        isStatic: false,
		        render: {
		            sprite: {
		                texture: rectangle_s_Image6,
		                xScale: 0.1,
		                yScale: 0.1
		            }
		        }
		    }
		)
];

const hoverableBody = Bodies.rectangle(
  currentWidth * 2/3, 
  groundTop * 1/3, 
  5.5 * currentWidth / 100,
  5.5 * currentWidth / 100, 
  { 
      restitution: 0.8, 
      isStatic: false,
      render: {
          sprite: {
              texture: circle_m_Image2,  // 原始图片路径
              xScale: 0.08,
              yScale: 0.08
          }
      },
      // 添加自定义属性
      hoverable: true,
      originalTexture: circle_m_Image2,  // 保存原始图片路径
      hoverTexture: circle_m_Image3         // 悬停时的图片路径
  }
);

rectangles.push(hoverableBody);

// 添加物体到世界
World.add(world, rectangles);

// 添加鼠标控制（拖拽功能）
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: { visible: false }
    }
});
World.add(world, mouseConstraint);

// 监听碰撞事件（此处仅在碰撞时确保物体处于动态状态，可根据需要保留或修改）
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

// 允许页面随滚轮滚动（如果你需要滚动条）
window.addEventListener("wheel", (event) => {
    window.scrollBy(0, event.deltaY);
});

// 运行引擎和渲染器
Engine.run(engine);
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
      min: { x: 0, y: 0 },
      max: { x: currentWidth, y: currentHeight }
    });
	
	// 计算宽高比例
	const scaleX = currentWidth / prevWidth;
	const scaleY = currentHeight / prevHeight;

	// 遍历所有需要更新位置的物体（例如 rectangles 数组里的所有物体）
	rectangles.forEach(body => {
	  const newX = body.position.x * scaleX;
	  const newY = body.position.y * scaleY;
	  Matter.Body.setPosition(body, { x: newX, y: newY });
	});
});

// 监听引擎更新后的事件
Matter.Events.on(engine, 'afterUpdate', () => {
	
  rectangles.forEach(body => {
    if (isOutOfBounds(body, currentWidth, currentHeight)) {
		  
      // 重置位置（这里示例将物体移回窗口中心）
      Matter.Body.setPosition(body, { x: currentWidth / 2, y: currentHeight * 1/3 });
      // 同时重置速度，防止物体立即又飞出去
      Matter.Body.setVelocity(body, { x: 0, y: 0 });
	  
	  
	  // 设置一个较高的空气阻力，减缓下落速度
	  Matter.Body.set(body, { frictionAir: 0.06 });
	  
	  // 一段时间后（例如2秒）恢复默认空气阻力
	  setTimeout(() => {
	    Matter.Body.set(body, { frictionAir: 0.01 });
	  }, 2000);
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