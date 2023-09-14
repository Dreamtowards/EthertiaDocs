
# vkx

## Getting Started

Triangle
```cpp
#include <vkx/vkx.hpp>

void main()
{
    // glfwInit() ... 

    vkx::Init(glfwWindow, true);

    while (!glfwWindowShouldClose(glfwWindow))
    {
        vkx::BeginFrame();

        vkx::EndFrame();
    }

    vkx::Destroy();

    // ... glfwTerminate() 
}

```