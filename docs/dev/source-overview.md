
# Source Overview

## File Structure

```
.
├─ lib/                 # external libraries
├─ run/
│  ├─ assets/           # default assets
│  ├─ bin/              # binaries. shared-libraries, executables.
│  │  ├─ windows-x64/
│  │  ├─ darwin-arm64/
│  │  └─ linux-x64/
│  ├─ logs/
│  ├─ mods/
│  ├─ saves/            # worlds / saves
│  ├─ screenshots/
│  ├─ settings.json     # client configs
│  └─ server.json       # dedicated server configs
├─ src/                 # c++ sources & headers.
├─ CMakeLists.txt
└─ README.md
```


## Source Structures

```cpp
int main(int argc, char** argv, char** envp)
{
    Init();

    while (Ethertia::IsRunning())
    {
        RunMainLoop();
    }

    Destroy();

    return 0;
}
```
这是整个程序的生命周期 - 在Init()初始化后, 不停地RunMainLoop()执行主循环, 直到系统关闭后Destroy()清理系统。

### Init
```cpp
static void Init()
{
    Settings::loadSettings();  // 在最开始加载 settings 为了后续初始化取得有效参数
    NoiseGen::initSIMD();

    // 加载 mods. 这里只会调用mod的 'init()' 函数 - 也是整个系统唯一一次和mod的强耦合
    // mod应该在此阶段快速注册监听器 以便接受后续事件回调 而不是在此执行繁重的初始化。
    for (const std::string& modpath : Settings::MODS) {
        ModLoader::loadMod(modpath);
    }

    Ethertia::isRunning() = true;
    g_Window = new Window(Settings::displayWidth, Settings::displayHeight);  // fixme: 看看后续能否简化 避免不必要的使用对象/OOP
    RenderEngine::init();   // 渲染系统初始化
    AudioEngine::init();    // 音频系统初始化
    NetworkSystem::init();  // 网络系统初始化 & 数据包注册
    
    Recipes::init();
    Biomes::init();

    Sounds::loadAll();
    // ... Items Materials 资源加载..
    

    // 初始化其他线程
    ChunkMeshProc::initThread();
    ChunkGenProc::initThread();
    Ethertia::getAsyncScheduler().initThread();
}
```


### Main Loop

```cpp
static void RunMainLoop()
{
    // Timer& timer = Ethertia::getTimer(); ...
    timer.update(Ethertia::getPreciseTime());
    
    // Execute Tasks. process main-thread tasks.
    Ethertia::getScheduler().processTasks(0.01);
    
    // Logic Tick.  
    // 逻辑tick 默认每秒30次(tps), 不受帧率影响, 比如物理处理 世界逻辑皆是在此. 
    while (timer.polltick())
    {
        RunTick();  // Ethertia::getWorld().onTick();
    }

    // Handle Input.
    Window::processEvents();
    Controls::handleInput();
    
    // Render
    RenderEngine::RenderWorld();
    Imgui::RenderGUI();
    
    // sync.. misc..
    Window::SwapBuffers();
    AudioEngine::update();
}
```