<template>
     <MyLayer/>
  <MyView label="bonjour c'est Amra" 
  :color="color" 
  :rotation="rotation" 
  :width="selectedFrame?.width" 
  :height="selectedFrame?.height"
  :border="borderColor"></MyView>
  <!-- <Mydesign></Mydesign> -->
  <section class="design">
    <div class="design_content">
      <div class="design_head">
        <div class="user_section">
          <div class="user">
            <div class="logo">R</div>
          </div>
          <div class="sharing_section">
            <button type="button">Share</button>
          </div>
        </div>
        <div class="item_list">
          <div class="item">
            <button>Design</button>
            <button>Prototype</button>
          </div>
          <input type="number" placeholder="100%">
        </div>
      </div>
      <div class="frame_section">
        <div class="select_section">
          <select v-model="selectedFrame">
            <option disabled selected>Forme</option>
            <option v-for="frame in frameList" :value="frame">{{ `${frame.name} (${frame.width} * ${frame.height})`}}</option>
          </select>
        </div>
        <input type="number" id="rotate" v-model.number="rotation" placeholder="0">
      </div>
      <div class="fill_section">
        <div class="head">
          <h3>Fill</h3>
        </div>
        <div class="color_section">
          <div class="color_item">
            <div id="color">
              <input type="color" v-model="color">
              <div id="color-code">{{ color }}</div>
            </div>
            <div class="percent">100%</div>
          </div>
        </div>
      </div>
      <div class="stroke_section">
        <div class="head">
          <h3>strocke</h3>
          <Plus @click="showStrokeSection = true " v-if="showStrokeSection == false"></Plus>
          <Minus @click="showStrokeSection = false" v-else></Minus>
        </div>
        
        <div class="color_section" v-if="showStrokeSection == true">
          <div class="color_item">
            <div id="color">
              <input type="color" v-model="borderColor">
              <div id="color-code">{{ borderColor }}</div>
            </div>
            <div class="percent">100%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* import Mydesign from './components/Mydesign.vue'; */
import Minus from '../components/icons/Minus.vue';
import Plus from '../components/icons/Plus.vue';
import MyLayer from '../components/MyLayer.vue';
import MyView from '../components/MyView.vue';
import { ref, watch } from "vue"
const color = ref('grey')
const borderColor = ref('#000')
const showStrokeSection = ref(false)
const rotation = ref<number>(0)
const selectedFrame = ref(null)
const frameList = [
  { id: 1, width: 430, height: 932, name: "iPhone 14 & 15" },
  { id: 2, width: 390, height: 844, name: "iPhone 13 & 14 Pro Max" }
];
watch(selectedFrame, () => {

})
</script>

<style scoped>
.design {
  width: 350px;
  max-height: 100%;
  border: 1px solid grey;
  position: fixed;
  top: 30px;
  right: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.user_section,
.item_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
}

.design_head,
.frame_section {
  width: 310px;
  border-bottom: 1px solid rgb(148, 147, 147);
  padding: 20px;
}

.logo {
  height: 50px;
  width: 50px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: #1560BD;
  color: #fff;
}

button {
  padding: 8px 10px;
  font-size: 15px;
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  background-color: inherit;
}

.sharing_section button {
  padding: 10px;
  background-color: #1560BD;
  color: #fff;
}

.item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.item_list input {
  width: 60px;
  padding: 8px;
  font-size: 15px;

}

input {
  border: 1px solid #ccc;
  outline: none;
  border-radius: 5px;
  background-color: inherit;
  color: #fff;
}

select {
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: inherit;
  color: #fff;
}

select:focus {
  outline: none;
  background-color: inherit;
}

option {
  background-color: inherit;
  color: #000;
}

option:disabled {
  color: #fff;
}

.fill_section , .stroke_section{
  width: 310px;
  padding: 20px;
}

.head,
.color_section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 310px;
}

.color_item {
  display: flex;
  /*  background-color: rgb(238, 232, 232); */
  align-items: center;
  gap: 30px;
  /* padding: 10px; */
  border-radius: 10px;
}

#color {
  display: flex;
  align-items: center;
  gap: 10px;
}

#rotate {
  margin-top: 20px;
  width: 86px;
  padding: 10px;
}
</style>
