---
# https://vitepress.dev/reference/default-theme-home-page
layout: home


hero:
  name: "Ethertia"
  # image:
  #   light: /res/logo-col.png
  text: "Unleash Your Creativity <br>in an Infinite World."
  tagline: "Minecraft + GTAV + VRChat"
  actions:
    - theme: brand
      text: All Versions
      link: /intro/versions
    - theme: alt
      text: Devlopment Docs
      link: /intro/
    - theme: alt
      text: Watch the film
      link: /
    - theme: alt
      text: Roadmap & BP
      link: /intro/roadmap

features:
  - icon: 🌍 # 🌍 🌟
    title: Infinite Creation
    details: Craft your boundless realms with our powerful proprietary engine. From quaint towns to sprawling metropolises, unleash your creativity.
    # link: sth
    # linkText: Learn more
  - icon: 🏗️ # 🏗️ 🔨
    title: Demolish and Build
    details: Experience the ultimate sandbox freedom - tear down barriers and construct your dreams.
  - icon: 👫
    title: Social Engagement  # Multiplayer Interaction
    details: Collaborate with friends in building, exploring, and surviving. Create wonders together in multiplayer adventures.
  - icon: 🏞️
    title: Fantastical Exploration  # Fantasy Terrain Generation
    details: Explore procedurally generated fantasy landscapes, ensuring each adventure is a unique experience.
  - icon: 🧩
    title:  Modding System  # Support for Mod Customization
    details: Unleash your creativity and alter game rules and experiences with mod support.
  - icon: 🚀
    title: Advanced Technology   # Advanced Technology Support / Pioneering Technology
    details: We utilize cutting-edge Vulkan and PhysX technology for top-notch visuals and physics.

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
  max-width: 650px;
}

.box .title {
  font-weight: bold;
  font-size: 18px;
}
</style>