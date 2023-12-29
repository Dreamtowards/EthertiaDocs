
# Rendering


## Coordinate Systems

| 3D Rendering / World | 2D Texturing / Viewport / UI |
| -------------        | ---------    |
| ![](res/render_coordinates.png) (RH, Y-up, Z-back) | ![](res/texture_coordinates.png) |

### 3D Rendering / World

We are using `Right-Hand cartesian coordinate system` (x: Right, y: Up, z: Back)
in 3D Rendering and World System (Entity, Physics, Chunk..)

::: details Comparsions & Reason
Although `OpenGL, DirectX, Metal` and `Vulkan (with NegativeY Viewport)`, and `Unity, Unreal` are Left-Hand Coordinate System.  
(OpenGL is internally Left-Handed (after clip-space), but glm::perspective / glOrthof usually generates a negate-z projection matrix)

<img src="res/fig-coord-sys-ls-sofw.jpg" width="600px">

The reason we uses RH Y-up coordinate is that, Minecraft used it.  
ok kidding, because I really fimilar with Y-up coordinate, e.g. in OpenGL, Minecraft, etc.  

and when use RH coordinate, winding is a reason. in RH, CCW is FrontFace. 
:::

### 2D Texturing / Viewport / UI

Reason: ??No Flip-Y operation on Load Images anymore.



## Resources

- [voxel.wiki / Rendering] https://voxel.wiki/wiki/rendering/