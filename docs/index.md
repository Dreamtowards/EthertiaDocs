---
# https://vitepress.dev/reference/default-theme-home-page
layout: home


hero:
  name: "Ethertia · <small>以太效應</small>"
  # image:
  #   light: /res/logo-col.png
  text: "Minecraft<sup>自由性</sup> + GTAV<sup>精致性</sup> + VRChat<sup>社交性</sup>" # "Unleash Your Creativity <br>in an Infinite World."
  tagline: 一款沙盒生存游戏
  actions:
    - theme: brand
      text: Overview
      link: /intro/
    - theme: alt
      text: All Versions
      link: /intro/versions
    - theme: alt
      text: Showcase
      link: /intro/showcase/
    - theme: alt
      text: Roadmap & BP
      link: /intro/roadmap

features:
  - icon: 🌍
    title: 体素地形
    details: 像雕刻一样修改地形，在峭壁上挖出一个家，穿山隧道
    # link: sth
    # linkText: Learn more
  - icon: 🏗️ # 🔨
    title: 建造
    details: 提供简易和进阶的建造工具
  - icon: 🏞️
    title: 程序化地形生成
    details: 多种生物群系, 峭壁, 海滩。巨大世界尺寸。遗迹探索。
  - icon: 👥
    title: 多人交互
    details: 加入服务器，和朋友一起建造 探索 生存。或开设自己的服务器。
  - icon: 🧩
    title: Mods
    details: 得益于 Bevy 灵活的插件系统和现代 Rust 的安全性和高性能，Mod开发变得前所未有的**
  - icon: 🤗 # 🤝 🌐 🤗
    title: 源码可访问 & 社区合作开发
    details: 在此访问源码仓库，查看如何加入开发
  - icon: 🔨
    title: 生存 & 游戏性
    details: 挖矿 种植 畜牧 钓鱼
  - icon: 🌾
    title: 种植 & 农业
    details: "小麦 马铃薯 胡萝卜; 雏菊; 橡树 白桦树 云杉树.. "
  - icon: ⛏️
    title: 挖矿
    details: 地下矿洞，煤 铁 金
  - icon: 🐓
    title: 动物
    details: 鸡 牛 羊 猪 狼 猫 鸟 鱼 村民 铁傀儡
  - icon: ⚔️
    title: 武器 装备 工具
    details: 
  - icon: 🧪
    title: 药水酿造
    details: 
  - icon: 🔮
    title: 附魔
    details: 
  # - icon: 🏛️
  #   title: 遗迹
  #   details: 
  - icon: 🚙 # 🚙 🚂
    title: +载具 & 交通运输
    details: 汽车 自行车 摩托车 火车 地铁
  - icon: 📽️
    title: +剧场
    details: 显示屏 灯光 音响 摄像机
  - icon: 🏭
    title: +工业
    details: 能源 机械
  - icon: 🥘
    title: +烹饪 & 更多食物
    details: 
  - icon: 🛋️
    title: +装饰品 & 更多家具
    details: 
  # - icon: 🪶
  #   title: 性能与轻量
  #   details: Rust+Bevy ECS系统<br>游戏本体 ~300MB (程序 ~80MB + 资源包 ~200MB)
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
  max-width: 950px;
  font-size: 48px;
}
.main .text sup {
  font-size: 16px;
  /* font-style: italic; */
}

.box .title {
  font-weight: bold;
  font-size: 18px;
}
</style>