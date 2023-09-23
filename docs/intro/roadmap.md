
# Roadmap

https://github.com/users/Dreamtowards/projects/9


<table>
    <thead>
        <tr>
            <th>Project</th>
            <th>Way</th>
            <th>Branch</th>
            <th>Status</th>
            <th>Goal</th>
            <th>Expenditure</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=2>Ethertia</td>
            <td>Vulkan + PhysX</td>
            <td><a href="">algorithm</a></td>
            <td><span style="color: green;">Major</span></td>
            <td></td>
            <td>93%</td>
        </tr>
        <tr>
            <td>OpenGL + Bullet3</td>
            <td><a href="">classic</a></td>
            <td style="color: red;">Stopped</td>
            <td></td>
            <td>0% (70%)</td>
        </tr>
        <tr>
            <td rowspan=3>Eldaria</td>
            <td>Unreal 5</td>
            <td><a href="">eldaria-unreal</a></td>
            <td>
                <span style="color: blue;">Slow Todo</span><br>
                <a href="https://voxelplugin.com/">VoxelPlugin</a>
            </td>
            <td>Methodology</td>
            <td>4%</td>
        </tr>
        <tr>
            <td>Godot 4 + .NET</td>
            <td><a href="">eldaria-godot</a></td>
            <td>
                <span style="color: blue;">Slow Todo</span><br>
                <a href="https://github.com/Zylann/godot_voxel/issues/24">GodotVoxel</a>
            </td>
            <td>Design</td>
            <td>3%</td>
        </tr>
        <tr>
            <td>Unity</td>
            <td><a href="">eldaria-unity</a></td>
            <td>
                <span style="color: red;">Stopped</span><br>
                (SN MeshGen, 'URP' Shaders, Concurrent)
            </td>
            <td>Toolchain</td>
            <td>0% (2.5%)</td>
        </tr>
    </tbody>
</table>
我们将会做5个分支，然而95%的精力和经费会用在第一项 Ethertia。  

Ethertia-Classic (OpenGL) 分支是早期的，然而不是最新技术。为了追求最新技术，我们花了巨大精力重构成为新的Ethertia-Algorithm分支 (Vulkan+PhysX).

而 Eldaria 分支，则是为了避免闭门造车，用最主流方法、工具链去做相同功能，然后和专有引擎相对比。有更好的方法则改进，无则加冕。所以只是为了辅助 刺激 竞争专有引擎的开发，并不真的拿他们做发行版。