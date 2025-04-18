### 表格：中英对照

| **英文名称**                          | **中文名称**                  |
|---------------------------------------|-------------------------------|
| EventDispatcher                      | 事件分发器                   |
| Vector2                              | 二维向量                     |
| Matrix3                              | 3x3 矩阵                     |
| ImageUtils                           | 图像工具                     |
| Source                               | 源                           |
| Texture extends EventDispatcher      | 纹理（继承事件分发器）       |
| Vector4                              | 四维向量                     |
| RenderTarget extends EventDispatcher | 渲染目标（继承事件分发器）   |
| WebGLRenderTarget extends RenderTarget | WebGL 渲染目标（继承渲染目标） |
| DataArrayTexture extends Texture     | 数据数组纹理（继承纹理）     |
| Data3DTexture extends Texture        | 3D 数据纹理（继承纹理）      |
| Quaternion                           | 四元数                       |
| Vector3                              | 三维向量                     |
| Box3                                 | 三维包围盒                   |
| Sphere                               | 球体                         |
| Ray                                  | 射线                         |
| Matrix4                              | 4x4 矩阵                     |
| Euler                                | 欧拉角                       |
| Layers                               | 图层                         |
| Object3D extends EventDispatcher     | 3D 对象（继承事件分发器）    |
| Triangle                             | 三角形                       |
| Color                                | 颜色                         |
| Material extends EventDispatcher     | 材质（继承事件分发器）       |
| MeshBasicMaterial extends Material   | 基础网格材质（继承材质）     |
| BufferAttribute                      | 缓冲属性                     |
| Uint16BufferAttribute extends BufferAttribute | 16 位无符号缓冲属性（继承缓冲属性） |
| Uint32BufferAttribute extends BufferAttribute | 32 位无符号缓冲属性（继承缓冲属性） |
| Float32BufferAttribute extends BufferAttribute | 32 位浮点缓冲属性（继承缓冲属性） |
| BufferGeometry extends EventDispatcher | 缓冲几何体（继承事件分发器） |
| Mesh extends Object3D                | 网格（继承 3D 对象）         |
| BoxGeometry extends BufferGeometry   | 盒子几何体（继承缓冲几何体） |
| ShaderMaterial extends Material      | 着色器材质（继承材质）       |
| Camera extends Object3D              | 相机（继承 3D 对象）         |
| PerspectiveCamera extends Camera     | 透视相机（继承相机）         |
| CubeCamera extends Object3D          | 立方相机（继承 3D 对象）     |
| CubeTexture extends Texture          | 立方纹理（继承纹理）         |
| WebGLCubeRenderTarget extends WebGLRenderTarget | WebGL 立方渲染目标（继承 WebGL 渲染目标） |
| Plane                                | 平面                         |
| Frustum                              | 视锥                         |
| PlaneGeometry extends BufferGeometry | 平面几何体（继承缓冲几何体） |
| OrthographicCamera extends Camera    | 正交相机（继承相机）         |
| PMREMGenerator                       | PMREM 生成器                 |
| SingleUniform                        | 单值统一变量                 |
| PureArrayUniform                     | 纯数组统一变量               |
| StructuredUniform                    | 结构化统一变量               |
| WebGLUniforms                        | WebGL 统一变量               |
| WebGLShaderCache                     | WebGL 着色器缓存             |
| WebGLShaderStage                     | WebGL 着色器阶段             |
| MeshDepthMaterial extends Material   | 网格深度材质（继承材质）     |
| MeshDistanceMaterial extends Material| 网格距离材质（继承材质）     |
| ArrayCamera extends PerspectiveCamera| 数组相机（继承透视相机）    |
| Group extends Object3D               | 组（继承 3D 对象）           |
| WebXRController                      | WebXR 控制器                 |
| DepthTexture extends Texture         | 深度纹理（继承纹理）         |
| WebXRManager extends EventDispatcher | WebXR 管理器（继承事件分发器） |
| WebGLRenderer                        | WebGL 渲染器                 |
| WebGL1Renderer extends WebGLRenderer | WebGL1 渲染器（继承 WebGL 渲染器） |
| Scene extends Object3D               | 场景（继承 3D 对象）         |
| InterleavedBuffer                    | 交错缓冲                     |
| InterleavedBufferAttribute           | 交错缓冲属性                 |
| DataTexture extends Texture          | 数据纹理（继承纹理）         |
| InstancedBufferAttribute extends BufferAttribute | 实例缓冲属性（继承缓冲属性） |
| LineBasicMaterial extends Material   | 线条基础材质（继承材质）     |
| LineSegments extends Line$1          | 线段（继承 Line$1）          |
| PointsMaterial extends Material      | 点材质（继承材质）           |
| Points extends Object3D              | 点集（继承 3D 对象）         |
| VideoTexture extends Texture         | 视频纹理（继承纹理）         |
| Curve                                | 曲线                         |
| EllipseCurve extends Curve           | 椭圆曲线（继承曲线）         |
| ArcCurve extends EllipseCurve        | 弧形曲线（继承椭圆曲线）     |
| CatmullRomCurve3 extends Curve       | 三维 Catmull-Rom 曲线（继承曲线） |
| CubicBezierCurve extends Curve       | 立方贝塞尔曲线（继承曲线）   |
| CubicBezierCurve3 extends Curve      | 三维立方贝塞尔曲线（继承曲线） |
| LineCurve extends Curve              | 直线曲线（继承曲线）         |
| LineCurve3 extends Curve             | 三维直线曲线（继承曲线）     |
| QuadraticBezierCurve extends Curve   | 二次贝塞尔曲线（继承曲线）   |
| QuadraticBezierCurve3 extends Curve  | 三维二次贝塞尔曲线（继承曲线） |
| SplineCurve extends Curve            | 样条曲线（继承曲线）         |
| CurvePath extends Curve              | 曲线路径（继承曲线）         |
| Path extends CurvePath               | 路径（继承曲线路径）         |
| CircleGeometry extends BufferGeometry| 圆形几何体（继承缓冲几何体） |
| Shape extends Path                   | 形状（继承路径）             |
| ShapeUtils                           | 形状工具                     |
| ShapeGeometry extends BufferGeometry | 形状几何体（继承缓冲几何体） |
| SphereGeometry extends BufferGeometry| 球体几何体（继承缓冲几何体） |
| RawShaderMaterial extends ShaderMaterial | 原始着色器材质（继承着色器材质） |
| MeshNormalMaterial extends Material  | 网格法线材质（继承材质）     |
| LoadingManager                       | 加载管理器                   |
| Loader                               | 加载器                       |
| HttpError extends Error              | HTTP 错误（继承 Error）      |
| FileLoader extends Loader            | 文件加载器（继承加载器）     |
| DataTextureLoader extends Loader     | 数据纹理加载器（继承加载器） |
| InstancedBufferGeometry extends BufferGeometry | 实例缓冲几何体（继承缓冲几何体） |
| AudioContext                         | 音频上下文                   |
| Clock                                | 时钟                         |
| AudioListener extends Object3D       | 音频监听器（继承 3D 对象）   |
| PositionalAudio extends Audio$1      | 位置音频（继承 Audio$1）     |
| InstancedInterleavedBuffer extends InterleavedBuffer | 实例交错缓冲（继承交错缓冲） |
| Spherical                            | 球面                         |
| Box2                                 | 二维包围盒                   |
| ShapePath                            | 形状路径                     |
| MathUtils                            | 数学工具                     |
| Browser                              | 浏览器                       |
| Settings                             | 设置                         |
| Properties                           | 属性                         |
| SecondOrderDynamics                  | 二阶动态                     |
| Input                                | 输入                         |
| ScrollDomRange                       | 滚动 DOM 范围                |
| Tween                                | 补间动画                     |
| FboHelper                            | FBO 助手                     |
| Task                                 | 任务                         |
| TaskManager                          | 任务管理器                   |
| Page                                 | 页面                         |
| Ease                                 | 缓动                         |
| Stage3D extends Scene                | 3D 舞台（继承场景）          |
| Blur                                 | 模糊                         |
| ShaderHelper                         | 着色器助手                   |
| BlueNoise                            | 蓝噪声                       |
| ScreenPaint                          | 屏幕绘制                     |
| HomeBalloonsBackground               | 主页气球背景                 |
| HomeBalloonsBody                     | 主页气球主体                 |
| HomeBalloonsPhysics                  | 主页气球物理                 |
| HomeBalloons extends Stage3D         | 主页气球（继承 3D 舞台）     |
| Visuals                              | 视觉效果                     |
| AudioGroup                           | 音频组                       |
| AudioItem                            | 音频项                       |
| GlobalAudios                         | 全局音频                     |
| Audios                               | 音频                         |
| HomeHeroSection                      | 主页英雄部分                 |
| UfxMesh extends Mesh                 | UFX 网格（继承网格）         |
| Line                                 | 线                           |
| VideoOverlay                         | 视频叠加层                   |
| HomeReelSection                      | 主页卷轴部分                 |
| DomHelper                            | DOM 助手                     |
| ProjectItem                          | 项目项                       |
| ProjectItemList                      | 项目项列表                   |
| HomeFeaturedSection                  | 主页特色部分                 |
| TextureHelper                        | 纹理助手                     |
| Simple1DNoise                        | 简单一维噪声                 |
| BrownianMotion                       | 布朗运动                     |
| PostEffect                           | 后期效果                     |
| GoalTunnelEfx extends PostEffect     | 目标隧道效果（继承后期效果） |
| GoalBlackTunnel                      | 目标黑色隧道                 |
| OrbitControls extends EventDispatcher| 轨道控制器（继承事件分发器） |
| DeviceOrientationControls            | 设备方向控制器               |
| CameraControls                       | 相机控制器                   |
| GoalTunnelAstronauts                 | 目标隧道宇航员               |
| GoalWhiteTunnel                      | 目标白色隧道                 |
| Ufx extends PostEffect               | UFX（继承后期效果）          |
| PreUfx extends Ufx                   | 前置 UFX（继承 UFX）         |
| GoalTunnelGlass                      | 目标隧道玻璃                 |
| NewletterForm                        | 通讯表单                     |
| FooterSection                        | 页脚部分                     |
| GoalSectionRanges                    | 目标部分范围                 |
| GoalTunnelsBackground                | 目标隧道背景                 |
| GoalWhiteTunnelParticles             | 目标白色隧道粒子             |
| GoalWhiteTunnelStickers              | 目标白色隧道贴纸             |
| GoalTunnels extends Stage3D          | 目标隧道（继承 3D 舞台）     |
| HomeGoalSectionTunnelTitle           | 主页目标部分隧道标题         |
| GoalSection                          | 目标部分                     |
| ProjectDetailsScreen                 | 项目详情屏幕                 |
| Route                                | 路由                         |
| RouteManager                         | 路由管理器                   |
| Header                               | 头部                         |
| ProjectDetailsData                   | 项目详情数据                 |
| UfxTextMesh extends UfxMesh          | UFX 文本网格（继承 UFX 网格）|
| ProjectDetailsItem                   | 项目详情项                   |
| ProjectDetailsItems                  | 项目详情项集合               |
| ProjectDetailsSection                | 项目详情部分                 |
| ProjectPageAudios                    | 项目页面音频                 |
| ProjectPage extends Page             | 项目页面（继承页面）         |
| HomePageAudios                       | 主页音频                     |
| HomePage extends Page                | 主页（继承页面）             |
| AboutHeroLight                       | 关于英雄灯光                 |
| AboutHeroLightField                  | 关于英雄光场                 |
| AboutHeroParticlesSimulation         | 关于英雄粒子模拟             |
| AboutHeroScatter                     | 关于英雄散点                 |
| AboutPageHeroEfxPrepass extends PostEffect | 关于页面英雄效果预处理（继承后期效果） |
| AboutHeroParticles                   | 关于英雄粒子                 |
| AboutHeroRocks                       | 关于英雄岩石                 |
| AboutHeroGround                      | 关于英雄地面                 |
| AboutHeroLines                       | 关于英雄线条                 |
| aboutHeroPerson                      | 关于英雄人物                 |
| AboutHeroFog                         | 关于英雄雾                   |
| AboutHeroHalo                        | 关于英雄光环                 |
| AboutHeroFaces                       | 关于英雄面孔                 |
| AboutPageHeroEfx extends PostEffect  | 关于页面英雄效果（继承后期效果） |
| AboutHeroLetters                     | 关于英雄字母                 |
| AboutHero extends Stage3D            | 关于英雄（继承 3D 舞台）     |
| AboutWhoLogo                         | 关于我们标志                 |
| WhoSubsectionWeAre                   | 我们是谁小节                 |
| WhoSubsectionDetails                 | 详情小节                     |
| TextAnimationHelper                  | 文本动画助手                 |
| WhoSubsectionTeam                    | 团队小节                     |
| AboutWhoSection                      | 关于我们部分                 |
| AboutClientSection                   | 关于客户部分                 |
| SVGParser                            | SVG 解析器                   |
| PostUfx extends Ufx                  | 后期 UFX（继承 UFX）         |
| AboutAwardSection                    | 关于奖项部分                 |
| AboutCapabilitySection               | 关于能力部分                 |
| AboutPageAudios                      | 关于页面音频                 |
| AboutPage extends Page               | 关于页面（继承页面）         |
| ProjectsMainSection                  | 项目主要部分                 |
| ProjectsPageAudios                   | 项目页面音频                 |
| ProjectsPage extends Page            | 项目页面（继承页面）         |
| PlaygroundPage extends Page          | 游乐场页面（继承页面）       |
| FlipSim                              | 翻转模拟                     |
| FlipAnimation                        | 翻转动画                     |
| EndSection                           | 结束部分                     |
| ScrollNavSection                     | 滚动导航部分                 |
| PageExtraSections                    | 页面额外部分                 |
| TransitionOverlay                    | 过渡叠加层                   |
| PageManager                          | 页面管理器                   |
| ScrollPane                           | 滚动面板                     |
| ScrollManager extends ScrollPane     | 滚动管理器（继承滚动面板）   |
| Postprocessing                       | 后期处理                     |
| Smaa extends PostEffect              | SMAA（继承后期效果）         |
| Bloom extends PostEffect             | 泛光（继承后期效果）         |
| ScreenPaintDistortion extends PostEffect | 屏幕绘制扭曲（继承后期效果） |
| Final extends PostEffect             | 最终效果（继承后期效果）     |
| Fsr extends PostEffect               | FSR（继承后期效果）          |
| BufItem extends XHRItem              | 缓冲项（继承 XHR 项）        |
| EXRLoader extends DataTextureLoader  | EXR 加载器（继承数据纹理加载器） |
| EXRItem extends AnyItem$2            | EXR 项（继承 AnyItem$2）     |
| TextureItem extends ImageItem        | 纹理项（继承图像项）         |
| ThreeLoaderItem extends AnyItem$1    | Three.js 加载项（继承 AnyItem$1） |
| GlPositionOffset                     | GL 位置偏移                  |
| Support                              | 支持                         |
| App                                  | 应用                         |
| Preloader                            | 预加载器                     |
| Links                                | 链接                         |
| UI                                   | 用户界面                     |
| FontItem extends AnyItem             | 字体项（继承 AnyItem）       |

---

### 说明
1. **继承关系**：表格中明确标注了继承关系，例如 `Texture extends EventDispatcher` 翻译为“纹理（继承事件分发器）”，以保留代码结构信息。
2. **命名约定**：Three.js 的命名通常反映功能，例如 `Vector3`（三维向量）、`Mesh`（网格），翻译时尽量保持简洁和准确。
3. **自定义类**：列表中后半部分（如 `HomeBalloons`、`GoalTunnels` 等）可能是项目特定的类，翻译时根据上下文推测其含义（如“主页气球”、“目标隧道”）。
4. **未定义类**：如 `Line$1`、`Audio$1` 等，可能是在完整代码中定义的别名或变体，此处未展开。

### 背景与上下文

这些常量看起来是 Three.js（一个流行的 JavaScript 3D 渲染库）或类似库的枚举值，用于配置 3D 场景的渲染行为。它们分为几类：
- **鼠标和触摸事件**：`MOUSE`, `TOUCH` 定义用户输入的类型。
- **渲染模式**：如 `CullFaceNone`, `FrontSide`, `NoBlending` 等，控制几何体如何渲染。
- **纹理和映射**：如 `UVMapping`, `RepeatWrapping`, `LinearFilter` 等，定义纹理如何应用。
- **数据类型**：如 `UnsignedByteType`, `FloatType` 等，指定缓冲区的数据格式。
- **颜色空间和编码**：如 `sRGBEncoding`, `LinearSRGBColorSpace` 等，处理颜色显示。
- **深度和模板测试**：如 `NeverDepth`, `AlwaysStencilFunc` 等，控制渲染时的深度和模板操作。
- **其他**：如 `StaticDrawUsage`, `GLSL1` 等，涉及 WebGL/WebGPU 的底层配置。

这些常量通常作为 **对象.属性** 的值传递给 Three.js 的 API（如材质、纹理、渲染器设置），以控制 3D 场景的呈现效果。

---

### 翻译与列表对照

以下是每个常量的翻译和说明，按代码中的分组整理成表格。对每个常量，我会：
- **列出名称和值**。
- **翻译/解释**：说明其含义和可能的用途。
- **上下文**：结合 Three.js 或 WebGL 的典型场景。

#### **1. 版本和输入相关常量**

| 常量名           | 值      | 翻译/说明                                                                 |
|------------------|---------|---------------------------------------------------------------------------|
| `REVISION`       | `"158"` | **版本号**：表示库的版本（如 Three.js 的版本 158），用于版本控制和兼容性检查。 |
| `MOUSE.LEFT`     | `0`     | **鼠标左键**：表示鼠标左键事件，通常用于旋转（`ROTATE`）操作。             |
| `MOUSE.MIDDLE`   | `1`     | **鼠标中键**：表示鼠标中键事件，通常用于缩放（`DOLLY`）操作。             |
| `MOUSE.RIGHT`    | `2`     | **鼠标右键**：表示鼠标右键事件，通常用于平移（`PAN`）操作。               |
| `MOUSE.ROTATE`   | `0`     | **旋转操作**：鼠标操作类型，表示旋转相机或对象，与 `MOUSE.LEFT` 关联。    |
| `MOUSE.DOLLY`    | `1`     | **缩放操作**：鼠标操作类型，表示缩放（放大/缩小），与 `MOUSE.MIDDLE` 关联。|
| `MOUSE.PAN`      | `2`     | **平移操作**：鼠标操作类型，表示平移相机，与 `MOUSE.RIGHT` 关联。         |
| `TOUCH.ROTATE`   | `0`     | **触摸旋转**：触摸操作类型，表示通过触摸旋转对象（单指滑动）。            |
| `TOUCH.PAN`      | `1`     | **触摸平移**：触摸操作类型，表示通过触摸平移对象（双指滑动）。            |
| `TOUCH.DOLLY_PAN`| `2`     | **触摸缩放+平移**：触摸操作类型，表示双指缩放和平移组合。                 |
| `TOUCH.DOLLY_ROTATE`| `3`  | **触摸缩放+旋转**：触摸操作类型，表示双指缩放和旋转组合。                 |

**上下文**：
- `MOUSE` 和 `TOUCH` 定义了用户交互方式，常用于 Three.js 的 `OrbitControls` 或 `MapControls`，控制相机或对象的移动。例如：
  ```javascript
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.mouseButtons = { LEFT: MOUSE.ROTATE, RIGHT: MOUSE.PAN, MIDDLE: MOUSE.DOLLY };
  ```

#### **2. 渲染剔除（Culling）**

| 常量名           | 值 | 翻译/说明                                                                 |
|------------------|----|---------------------------------------------------------------------------|
| `CullFaceNone`   | `0`| **无剔除**：不剔除任何面，渲染所有几何体的正面和背面。                   |
| `CullFaceBack`   | `1`| **背面剔除**：剔除几何体的背面（面向相机外的面），默认设置。             |
| `CullFaceFront`  | `2`| **正面剔除**：剔除几何体的正面（面向相机的面），用于特殊效果。           |

**上下文**：
- 用于设置材质的剔除模式（`material.side`），决定哪些面被渲染。例如：
  ```javascript
  const material = new THREE.MeshBasicMaterial({ side: DoubleSide }); // 渲染双面
  ```

#### **3. 阴影映射（Shadow Mapping）**

| 常量名             | 值 | 翻译/说明                                                                 |
|--------------------|----|---------------------------------------------------------------------------|
| `PCFShadowMap`     | `1`| **PCF 阴影映射**：基于百分比接近过滤（PCF），生成较柔和的阴影边缘。     |
| `PCFSoftShadowMap` | `2`| **PCF 软阴影映射**：增强版 PCF，生成更柔和的阴影，计算开销较高。         |
| `VSMShadowMap`     | `3`| **VSM 阴影映射**：方差阴影映射（VSM），适合大范围阴影，但可能有伪影。     |

**上下文**：
- 用于配置渲染器的阴影类型（`renderer.shadowMap.type`）。例如：
  ```javascript
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap; // 柔和阴影
  ```

#### **4. 材质面（Material Sides）**

| 常量名         | 值 | 翻译/说明                                                                 |
|----------------|----|---------------------------------------------------------------------------|
| `FrontSide`    | `0`| **正面**：只渲染几何体的正面（面向相机的面）。                           |
| `BackSide`     | `1`| **背面**：只渲染几何体的背面（背对相机的面）。                           |
| `DoubleSide`   | `2`| **双面**：渲染几何体的正面和背面，适合透明或特殊效果。                   |

**上下文**：
- 与 `CullFace` 相关，设置材质的渲染面。例如：
  ```javascript
  const material = new THREE.MeshStandardMaterial({ side: FrontSide });
  ```

#### **5. 混合模式（Blending Modes）**

| 常量名              | 值 | 翻译/说明                                                                 |
|---------------------|----|---------------------------------------------------------------------------|
| `NoBlending`        | `0`| **无混合**：不进行颜色混合，直接覆盖目标像素。                           |
| `NormalBlending`    | `1`| **正常混合**：基于 alpha 通道的常规混合，适合透明材质。                  |
| `AdditiveBlending`  | `2`| **加法混合**：源颜色与目标颜色相加，适合发光效果。                       |
| `SubtractiveBlending`| `3`| **减法混合**：源颜色从目标颜色中减去，适合暗化效果。                     |
| `MultiplyBlending`  | `4`| **乘法混合**：源颜色与目标颜色相乘，适合阴影或着色效果。                 |
| `CustomBlending`    | `5`| **自定义混合**：允许用户指定混合方程和因子，高级用法。                   |

**上下文**：
- 用于材质的 `blending` 属性，控制透明或特殊效果。例如：
  ```javascript
  const material = new THREE.MeshBasicMaterial({ blending: AdditiveBlending });
  ```

#### **6. 混合方程（Blending Equations）**

| 常量名                  | 值   | 翻译/说明                                                                 |
|-------------------------|------|---------------------------------------------------------------------------|
| `AddEquation`           | `100`| **加法方程**：源颜色 + 目标颜色。                                        |
| `SubtractEquation`      | `101`| **减法方程**：目标颜色 - 源颜色。                                        |
| `ReverseSubtractEquation`| `102`| **反向减法方程**：源颜色 - 目标颜色。                                    |
| `MinEquation`           | `103`| **最小方程**：取源颜色和目标颜色的最小值。                               |
| `MaxEquation`           | `104`| **最大方程**：取源颜色和目标颜色的最大值。                               |

**上下文**：
- 用于 `CustomBlending` 的混合方程（`material.blendEquation`）。

#### **7. 混合因子（Blending Factors）**

| 常量名                        | 值   | 翻译/说明                                                                 |
|-------------------------------|------|---------------------------------------------------------------------------|
| `ZeroFactor`                  | `200`| **零因子**：因子值为 0。                                                 |
| `OneFactor`                   | `201`| **一因子**：因子值为 1。                                                 |
| `SrcColorFactor`              | `202`| **源颜色因子**：使用源颜色的 RGB 值。                                    |
| `OneMinusSrcColorFactor`      | `203`| **一减源颜色因子**：1 - 源颜色的 RGB 值。                                |
| `SrcAlphaFactor`              | `204`| **源透明因子**：使用源颜色的 alpha 值。                                  |
| `OneMinusSrcAlphaFactor`      | `205`| **一减源透明因子**：1 - 源颜色的 alpha 值。                              |
| `DstAlphaFactor`              | `206`| **目标透明因子**：使用目标颜色的 alpha 值。                              |
| `OneMinusDstAlphaFactor`      | `207`| **一减目标透明因子**：1 - 目标颜色的 alpha 值。                          |
| `DstColorFactor`              | `208`| **目标颜色因子**：使用目标颜色的 RGB 值。                                |
| `OneMinusDstColorFactor`      | `209`| **一减目标颜色因子**：1 - 目标颜色的 RGB 值。                            |
| `SrcAlphaSaturateFactor`      | `210`| **源透明饱和因子**：基于源透明度的饱和值。                               |
| `ConstantColorFactor`         | `211`| **常量颜色因子**：使用指定的常量颜色值。                                 |
| `OneMinusConstantColorFactor` | `212`| **一减常量颜色因子**：1 - 常量颜色值。                                   |
| `ConstantAlphaFactor`         | `213`| **常量透明因子**：使用指定的常量透明值。                                 |
| `OneMinusConstantAlphaFactor` | `214`| **一减常量透明因子**：1 - 常量透明值。                                   |

**上下文**：
- 用于 `CustomBlending` 的混合因子（`material.blendSrc`, `material.blendDst`）。

#### **8. 深度测试（Depth Testing）**

| 常量名            | 值 | 翻译/说明                                                                 |
|-------------------|----|---------------------------------------------------------------------------|
| `NeverDepth`      | `0`| **从不通过**：深度测试始终失败，不渲染任何像素。                         |
| `AlwaysDepth`     | `1`| **始终通过**：深度测试始终通过，渲染所有像素。                           |
| `LessDepth`       | `2`| **小于通过**：如果新像素深度小于当前深度，渲染。                         |
| `LessEqualDepth`  | `3`| **小于等于通过**：如果新像素深度小于或等于当前深度，渲染。               |
| `EqualDepth`      | `4`| **等于通过**：如果新像素深度等于当前深度，渲染。                         |
| `GreaterEqualDepth`| `5`| **大于等于通过**：如果新像素深度大于或等于当前深度，渲染。               |
| `GreaterDepth`    | `6`| **大于通过**：如果新像素深度大于当前深度，渲染。                         |
| `NotEqualDepth`   | `7`| **不等于通过**：如果新像素深度不等于当前深度，渲染。                     |

**上下文**：
- 设置材质的深度测试模式（`material.depthFunc`）。例如：
  ```javascript
  material.depthFunc = LessEqualDepth;
  ```

#### **9. 组合操作（Combine Operations）**

| 常量名             | 值 | 翻译/说明                                                                 |
|--------------------|----|---------------------------------------------------------------------------|
| `MultiplyOperation`| `0`| **乘法操作**：源颜色与目标颜色相乘，用于纹理组合。                       |
| `MixOperation`     | `1`| **混合操作**：基于 alpha 混合源颜色和目标颜色。                          |
| `AddOperation`     | `2`| **加法操作**：源颜色与目标颜色相加。                                     |

**上下文**：
- 用于多纹理组合（`material.combine`）。

#### **10. 色调映射（Tone Mapping）**

| 常量名               | 值 | 翻译/说明                                                                 |
|----------------------|----|---------------------------------------------------------------------------|
| `NoToneMapping`      | `0`| **无色调映射**：不应用色调映射，直接输出颜色。                           |
| `LinearToneMapping`  | `1`| **线性色调映射**：简单的线性映射，适合基本场景。                         |
| `ReinhardToneMapping`| `2`| **Reinhard 色调映射**：模拟人眼对光强的适应，适合真实感渲染。            |
| `CineonToneMapping`  | `3`| **Cineon 色调映射**：基于电影胶片曲线，适合电影效果。                    |
| `ACESFilmicToneMapping`| `4`| **ACES 电影色调映射**：基于 ACES 标准，生成高动态范围（HDR）效果。       |
| `CustomToneMapping`  | `5`| **自定义色调映射**：允许用户定义色调映射函数。                           |

**上下文**：
- 设置渲染器的色调映射（`renderer.toneMapping`）。例如：
  ```javascript
  renderer.toneMapping = ACESFilmicToneMapping;
  ```

#### **11. 纹理映射（Texture Mapping）**

| 常量名                        | 值   | 翻译/说明                                                                 |
|-------------------------------|------|---------------------------------------------------------------------------|
| `UVMapping`                   | `300`| **UV 映射**：基于 UV 坐标的纹理映射，标准方式。                          |
| `CubeReflectionMapping`       | `301`| **立方体反射映射**：用于环境反射的立方体贴图。                           |
| `CubeRefractionMapping`       | `302`| **立方体折射映射**：用于环境折射的立方体贴图。                           |
| `EquirectangularReflectionMapping`| `303`| **等矩形反射映射**：基于全景图的反射贴图。                              |
| `EquirectangularRefractionMapping`| `304`| **等矩形折射映射**：基于全景图的折射贴图。                              |
| `CubeUVReflectionMapping`     | `306`| **立方体 UV 反射映射**：优化的立方体贴图，减少接缝问题。                 |

**上下文**：
- 设置材质的纹理映射类型（`material.map.mapping`）。

#### **12. 纹理包裹（Texture Wrapping）**

| 常量名                  | 值   | 翻译/说明                                                                 |
|-------------------------|------|---------------------------------------------------------------------------|
| `RepeatWrapping`        | `1000`| **重复包裹**：纹理在 UV 坐标外重复显示。                                 |
| `ClampToEdgeWrapping`   | `1001`| **边缘夹紧包裹**：纹理边缘值延伸到边界。                                 |
| `MirroredRepeatWrapping`| `1002`| **镜像重复包裹**：纹理以镜像方式重复，减少接缝。                         |

**上下文**：
- 设置纹理的包裹模式（`texture.wrapS`, `texture.wrapT`）。例如：
  ```javascript
  texture.wrapS = RepeatWrapping;
  ```

#### **13. 纹理过滤（Texture Filtering）**

| 常量名                      | 值   | 翻译/说明                                                                 |
|-----------------------------|------|---------------------------------------------------------------------------|
| `NearestFilter`             | `1003`| **最近邻过滤**：选择最近的像素，生成块状效果。                           |
| `NearestMipmapNearestFilter`| `1004`| **最近邻 Mipmap 过滤**：选择最近的 Mipmap 层，适合低分辨率。              |
| `NearestMipmapLinearFilter` | `1005`| **最近邻线性 Mipmap 过滤**：在 Mipmap 层间线性插值。                     |
| `LinearFilter`              | `1006`| **线性过滤**：对邻近像素线性插值，生成平滑效果。                        |
| `LinearMipmapNearestFilter` | `1007`| **线性 Mipmap 最近邻过滤**：选择最近 Mipmap 层并线性插值。               |
| `LinearMipmapLinearFilter`  | `1008`| **线性 Mipmap 线性过滤**：Mipmap 层间和像素间都线性插值，最高质量。      |

**上下文**：
- 设置纹理的过滤模式（`texture.magFilter`, `texture.minFilter`）。

#### **14. 数据类型（Data Types）**

| 常量名                     | 值   | 翻译/说明                                                                 |
|----------------------------|------|---------------------------------------------------------------------------|
| `UnsignedByteType`         | `1009`| **无符号字节类型**：8 位无符号整数，用于颜色或纹理数据。                 |
| `ByteType`                 | `1010`| **字节类型**：8 位有符号整数。                                           |
| `ShortType`                | `1011`| **短整型**：16 位有符号整数。                                            |
| `UnsignedShortType`        | `1012`| **无符号短整型**：16 位无符号整数。                                      |
| `IntType`                  | `1013`| **整型**：32 位有符号整数。                                              |
| `UnsignedIntType`          | `1014`| **无符号整型**：32 位无符号整数。                                        |
| `FloatType`                | `1015`| **浮点型**：32 位浮点数，适合高精度数据。                                |
| `HalfFloatType`            | `1016`| **半浮点型**：16 位浮点数，节省内存。                                    |
| `UnsignedShort4444Type`    | `1017`| **无符号短整型 4:4:4:4**：RGBA 各 4 位。                                 |
| `UnsignedShort5551Type`    | `1018`| **无符号短整型 5:5:5:1**：RGB 各 5 位，A 1 位。                          |
| `UnsignedInt248Type`       | `1020`| **无符号整型 24:8**：24 位深度 + 8 位模板。                              |

**上下文**：
- 用于缓冲区或纹理的数据类型（`texture.type`）。

#### **15. 纹理格式（Texture Formats）**

| 常量名                      | 值     | 翻译/说明                                                                 |
|-----------------------------|--------|---------------------------------------------------------------------------|
| `AlphaFormat`               | `1021`| **Alpha 格式**：仅存储透明通道。                                         |
| `RGBAFormat`                | `1023`| **RGBA 格式**：存储红、绿、蓝、透明通道。                                |
| `LuminanceFormat`           | `1024`| **亮度格式**：存储单通道亮度值。                                         |
| `LuminanceAlphaFormat`      | `1025`| **亮度+透明格式**：存储亮度和透明通道。                                  |
| `DepthFormat`               | `1026`| **深度格式**：存储深度值，用于深度贴图。                                 |
| `DepthStencilFormat`        | `1027`| **深度+模板格式**：存储深度和模板值。                                    |
| `RedFormat`                 | `1028`| **红色格式**：仅存储红色通道。                                           |
| `RedIntegerFormat`          | `1029`| **红色整型格式**：红色通道为整数。                                       |
| `RGFormat`                  | `1030`| **红绿格式**：存储红、绿通道。                                           |
| `RGIntegerFormat`           | `1031`| **红绿整型格式**：红、绿通道为整数。                                     |
| `RGBAIntegerFormat`         | `1033`| **RGBA 整型格式**：RGBA 通道为整数。                                     |
| `_SRGBAFormat`              | `1035`| **sRGB RGBA 格式**：RGBA 格式，基于 sRGB 颜色空间（内部使用）。          |

**上下文**：
- 设置纹理的存储格式（`texture.format`）。

#### **16. 压缩纹理格式（Compressed Texture Formats）**

| 常量名                      | 值     | 翻译/说明                                                                 |
|-----------------------------|--------|---------------------------------------------------------------------------|
| `RGB_S3TC_DXT1_Format`      | `33776`| **RGB S3TC DXT1 格式**：压缩纹理格式，适合 RGB 数据。                    |
| `RGBA_S3TC_DXT1_Format`     | `33777`| **RGBA S3TC DXT1 格式**：压缩 RGBA 数据，带 1 位透明。                   |
| `RGBA_S3TC_DXT3_Format`     | `33778`| **RGBA S3TC DXT3 格式**：压缩 RGBA 数据，带明确透明通道。                |
| `RGBA_S3TC_DXT5_Format`     | `33779`| **RGBA S3TC DXT5 格式**：压缩 RGBA 数据，带高质量透明通道。              |
| `RGB_PVRTC_4BPPV1_Format`   | `35840`| **RGB PVRTC 4BPPV1 格式**：4 位/像素压缩格式，适合移动设备。             |
| `RGB_PVRTC_2BPPV1_Format`   | `35841`| **RGB PVRTC 2BPPV1 格式**：2 位/像素压缩格式，低质量。                   |
| `RGBA_PVRTC_4BPPV1_Format`  | `35842`| **RGBA PVRTC 4BPPV1 格式**：4 位/像素，带透明。                         |
| `RGBA_PVRTC_2BPPV1_Format`  | `35843`| **RGBA PVRTC 2BPPV1 格式**：2 位/像素，带透明。                         |
| `RGB_ETC1_Format`           | `36196`| **RGB ETC1 格式**：ETC1 压缩格式，适合移动设备。                         |
| `RGB_ETC2_Format`           | `37492`| **RGB ETC2 格式**：ETC2 压缩格式，改进版 ETC1。                          |
| `RGBA_ETC2_EAC_Format`      | `37496`| **RGBA ETC2 EAC 格式**：ETC2 带高质量透明通道。                         |
| `RGBA_ASTC_4x4_Format`      | `37808`| **RGBA ASTC 4x4 格式**：ASTC 压缩，4x4 块，高质量。                      |
| ... (其他 ASTC 格式)        | ...    | **RGBA ASTC 变体**：不同块大小（如 5x4、8x8），平衡质量和性能。          |
| `RGBA_BPTC_Format`          | `36492`| **RGBA BPTC 格式**：BPTC 压缩格式，适合高精度纹理。                      |
| `RGB_BPTC_SIGNED_Format`    | `36494`| **RGB BPTC 有符号格式**：BPTC 压缩，带符号数据。                        |
| `RGB_BPTC_UNSIGNED_Format`  | `36495`| **RGB BPTC 无符号格式**：BPTC 压缩，无符号数据。                        |
| `RED_RGTC1_Format`          | `36283`| **红色 RGTC1 格式**：RGTC 压缩，仅红色通道。                            |
| `SIGNED_RED_RGTC1_Format`   | `36284`| **有符号红色 RGTC1 格式**：RGTC 压缩，带符号红色通道。                  |
| `RED_GREEN_RGTC2_Format`    | `36285`| **红绿 RGTC2 格式**：RGTC 压缩，红绿通道。                              |
| `SIGNED_RED_GREEN_RGTC2_Format`| `36286`| **有符号红绿 RGTC2 格式**：RGTC 压缩，带符号红绿通道。                |

**上下文**：
- 用于压缩纹理，减少显存占用（`texture.format`）。

#### **17. 颜色编码和空间（Color Encoding and Spaces）**

| 常量名                    | 值        | 翻译/说明                                                                 |
|---------------------------|-----------|---------------------------------------------------------------------------|
| `LinearEncoding`          | `3000`    | **线性编码**：线性颜色空间，直接存储颜色值。                             |
| `sRGBEncoding`            | `3001`    | **sRGB 编码**：sRGB 颜色空间，适合大多数显示器。                         |
| `NoColorSpace`            | `""`      | **无颜色空间**：不应用颜色空间转换。                                     |
| `SRGBColorSpace`          | `"srgb"`  | **sRGB 颜色空间**：标准 sRGB 空间。                                      |
| `LinearSRGBColorSpace`    | `"srgb-linear"`| **线性 sRGB 颜色空间**：sRGB 的线性版本，适合计算。                   |
| `DisplayP3ColorSpace`     | `"display-p3"`| **Display P3 颜色空间**：更广的色域，适合高端显示器。                   |
| `LinearDisplayP3ColorSpace`| `"display-p3-linear"`| **线性 Display P3 颜色空间**：Display P3 的线性版本。                |
| `LinearTransfer`          | `"linear"`| **线性传输**：线性颜色传输函数。                                         |
| `SRGBTransfer`            | `"srgb"`  | **sRGB 传输**：sRGB 颜色传输函数。                                       |
| `Rec709Primaries`         | `"rec709"`| **Rec.709 色域**：标准高清电视色域。                                     |
| `P3Primaries`             | `"p3"`    | **P3 色域**：Display P3 色域，适合广色域显示。                           |

**上下文**：
- 设置纹理或渲染器的颜色空间（`texture.colorSpace`, `renderer.outputColorSpace`）。

#### **18. 深度打包（Depth Packing）**

| 常量名                | 值   | 翻译/说明                                                                 |
|-----------------------|------|---------------------------------------------------------------------------|
| `BasicDepthPacking`   | `3200`| **基本深度打包**：将深度值存储为单通道。                                 |
| `RGBADepthPacking`    | `3201`| **RGBA 深度打包**：将深度值编码为 RGBA 通道，适合高精度。                |

**上下文**：
- 用于深度贴图的存储方式（`material.depthPacking`）。

#### **19. 法线贴图类型（Normal Map Types）**

| 常量名                  | 值 | 翻译/说明                                                                 |
|-------------------------|----|---------------------------------------------------------------------------|
| `TangentSpaceNormalMap` | `0`| **切线空间法线贴图**：法线贴图基于切线空间，标准方式。                   |
| `ObjectSpaceNormalMap`  | `1`| **对象空间法线贴图**：法线贴图基于对象空间，适合非变形对象。             |

**上下文**：
- 设置法线贴图类型（`material.normalMapType`）。

#### **20. 模板操作和比较（Stencil Operations and Comparisons）**

| 常量名                  | 值   | 翻译/说明                                                                 |
|-------------------------|------|---------------------------------------------------------------------------|
| `KeepStencilOp`         | `7680`| **保持模板操作**：模板值保持不变。                                       |
| `AlwaysStencilFunc`     | `519` | **始终模板函数**：模板测试始终通过。                                     |
| `NeverCompare`          | `512` | **从不比较**：比较始终失败。                                             |
| `LessCompare`           | `513` | **小于比较**：如果参考值小于模板值，通过。                               |
| `EqualCompare`          | `514` | **等于比较**：如果参考值等于模板值，通过。                               |
| `LessEqualCompare`      | `515` | **小于等于比较**：如果参考值小于或等于模板值，通过。                     |
| `GreaterCompare`        | `516` | **大于比较**：如果参考值大于模板值，通过。                               |
| `NotEqualCompare`       | `517` | **不等于比较**：如果参考值不等于模板值，通过。                           |
| `GreaterEqualCompare`   | `518` | **大于等于比较**：如果参考值大于或等于模板值，通过。                     |
| `AlwaysCompare`         | `519` | **始终比较**：比较始终通过。                                             |

**上下文**：
- 用于模板测试（`material.stencilFunc`, `material.stencilOp`）。

#### **21. 缓冲区使用模式（Buffer Usage）**

| 常量名               | 值     | 翻译/说明                                                                 |
|----------------------|--------|---------------------------------------------------------------------------|
| `StaticDrawUsage`    | `35044`| **静态绘制使用**：缓冲区数据不频繁更改，适合静态几何体。                 |
| `DynamicDrawUsage`   | `35048`| **动态绘制使用**：缓冲区数据频繁更改，适合动态几何体。                   |

**上下文**：
- 设置缓冲区的使用模式（`buffer.usage`）。

#### **22. 着色器语言版本（Shader Language Versions）**

| 常量名   | 值        | 翻译/说明                                                                 |
|----------|-----------|---------------------------------------------------------------------------|
| `GLSL1`  | `"100"`   | **GLSL 1.0**：WebGL 1.0 使用的着色器语言版本。                           |
| `GLSL3`  | `"300 es"`| **GLSL 3.0 ES**：WebGL 2.0 使用的着色器语言版本，支持更多功能。          |

**上下文**：
- 指定着色器的 GLSL 版本（`renderer.glslVersion`）。

#### **23. 坐标系（Coordinate Systems）**

| 常量名                  | 值   | 翻译/说明                                                                 |
|-------------------------|------|---------------------------------------------------------------------------|
| `WebGLCoordinateSystem`| `2000`| **WebGL 坐标系**：WebGL 使用的标准坐标系（右手系）。                     |
| `WebGPUCoordinateSystem`| `2001`| **WebGPU 坐标系**：WebGPU 使用的坐标系（通常左手系）。                   |

**上下文**：
- 指定渲染器的坐标系（`renderer.coordinateSystem`）。

---

### 结合你的编程理解

- **常量/变量**：
  - 所有值（如 `REVISION`, `CullFaceNone`）都是 `const` 常量，不可更改，符合你对常量的理解。
  - `MOUSE` 和 `TOUCH` 是对象，包含子常量（如 `MOUSE.LEFT`），体现嵌套结构。
- **对象.属性**：
  - `MOUSE.LEFT` 和 `TOUCH.ROTATE` 是对象的属性，通过 `.` 访问。
  - 这些常量常作为属性值传递给 Three.js 的 API（如 `material.side = DoubleSide`）。
- **语言规则**：
  - 使用 `const` 和对象字面量 `{}` 是 JavaScript 的标准语法。
  - 数值（如 `100`, `33776`）是 WebGL 的枚举值，直接映射到 OpenGL 或 WebGL 常量。
  - 字符串值（如 `"srgb"`）用于颜色空间等现代 API。
- **上下文**：
  - 这段代码是 Three.js 的核心部分，定义了渲染配置的枚举值。
  - 你的上一段代码（购买手机）涉及循环和条件，这些常量则更偏向静态配置，但仍体现 JavaScript 的变量和对象使用。

---

### 实际应用示例

以下是一个简单的 Three.js 示例，展示如何使用这些常量：

```javascript
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 创建场景、相机、渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 配置渲染器
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap; // 使用软阴影
renderer.toneMapping = ACESFilmicToneMapping; // 高质量色调映射
renderer.outputColorSpace = SRGBColorSpace; // sRGB 颜色空间

// 创建材质
const material = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    side: DoubleSide, // 双面渲染
    blending: NormalBlending // 正常混合
});

// 创建几何体
const geometry = new THREE.BoxGeometry();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 配置相机控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.mouseButtons = {
    LEFT: MOUSE.ROTATE,
    RIGHT: MOUSE.PAN,
    MIDDLE: MOUSE.DOLLY
};

// 动画循环
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
```

**说明**：
- 使用 `PCFSoftShadowMap` 配置阴影。
- 使用 `DoubleSide` 确保立方体双面可见。
- 使用 `MOUSE` 常量配置用户交互。

---

### 总结

- **翻译**：每个常量被翻译为中文，并附带用途说明，涵盖鼠标/触摸、渲染、纹理、数据类型、颜色空间等。
- **列表**：按类别整理为表格，清晰对照常量名、值和说明。
- **上下文**：这些常量是 Three.js 的核心配置，用于 WebGL/WebGPU 渲染，控制材质、纹理、阴影等。
- **编程理解**：体现常量（`const`）、对象.属性（`MOUSE.LEFT`）、语言规则（JavaScript 语法）。
