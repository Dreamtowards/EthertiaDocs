---
# https://vitepress.dev/reference/default-theme-home-page
layout: home


hero:
  name: "Ethertia · <small>以太效應</small>"
  # image:
  #   light: /res/logo-col.png
  text: 在无限的世界中释放你的创意
  tagline: Minecraft + GTAV + VRChat
  actions:
    - theme: brand
      text: 版本下载
      link: /intro/versions
    - theme: alt
      text: 开发文档
      link: /intro/
    - theme: alt
      text: 观看影片
      link: /
    - theme: alt
      text: 开发计划
      link: /intro/roadmap

features:
  - icon: 🌍
    title: 无限创造
    details: 得益于我们的专有体素引擎，创建属于你的无限世界，从小镇到城市，尽情发挥你的创意。
    # link: sth
    # linkText: Learn more
  - icon: 🏗️
    title: 破坏与建设
    details: 沙盒自由度的极致体验，。
  - icon: 👫
    title: 社交互动
    details: 与朋友一起建设、探索和生存。在多人联机中共同创造奇迹。
  - icon: 🏞️
    title: 奇幻探索
    details: 探索由程序生成的奇幻地形，每次冒险都是全新的体验。
  - icon: 🧩
    title: 模组系统
    details: 发挥你的创意，通过支持Mod来改变游戏规则和体验。
  - icon: 🚀
    title: 专有引擎
    details: 我们使用最新的Vulkan和PhysX技术，带来顶尖的视觉和物理效果。
  # - icon: 🤗
  #   title: Community Collaborative Development    # Fantasy Terrain Generation / Growing Together
  #   details: Embrace open-source code and active community engagement, where we discuss game development and improvements together.
---


<script setup>

//window.location.href = "/getting-started/intro.html"

</script>

<style>

.main .name .clip {
  font-size: 70px;
  line-height: 74px;
  /* color: inherit; */
  /* background: -webkit-linear-gradient( 120deg, #e3a9ff 30%, #41d1ff ); */
  background: -webkit-linear-gradient( 109deg, #373fa5 30%, #41d1ff );
  -webkit-background-clip: text;
}
.main .text {
  max-width: 800px;
}

.box .title {
  font-weight: bold;
  font-size: 18px;
}
</style>