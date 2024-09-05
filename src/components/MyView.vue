<template>
  <section class="view">
    <div
      id="frame"
      :style="` width: ${props.width}px ; height: ${props.height}px ; `"
    >
      <component
        :bgColor="'orange'"
        :id="`draggable${index}`"
        @click="selectElement(`draggable${index}`)"
        v-for="(element, index) in elements"
        :is="element"
      ></component>

   
    </div>

    <div class="menu_section">
      <div class="menu_list">
        <button @click="addRect">Rectangle</button>
        <button @click="addText">Texte</button>
        <button>Cercle</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import Rect from "../components/widgets/Rect.vue";
import Text from "../components/widgets/Text.vue";

const props = defineProps([
  "color",
  "label",
  "rotation",
  "width",
  "height",
  "border",
]);
const elements = ref([]);
const selectedElement = ref<HTMLElement>();
const num = ref(0);
const style = computed(() => {
  return `background-color: ${props.color}; 
    transform: rotateZ(${props.rotation}deg) ; 
   
    border: 2px solid ${props.border}`;
});
function addRect() {
  elements.value.push(Rect);
  //console.log(addRect);
}
function addText() {
  elements.value.push(Text);
}

function selectElement(ref: string) {
  
    selectedElement.value = document.getElementById(ref)
      ?.children[0] as HTMLElement;
}
watch(style, () => {
  selectedElement.value?.setAttribute("style", style.value);
});
</script>

<style scoped>
.view {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  perspective: 1000px;
}
#frame {
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  transition: transform 0.5s ease;
  transform-origin: center;
  background-color: #fff;
}
.menu_section {
  width: 30%;
}
.menu_list {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
button {
  color: #fff;
  padding: 10px;
  background-color: inherit;
  border: 1px solid grey;
}
</style>
