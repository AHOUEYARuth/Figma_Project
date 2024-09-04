<template>
    <section class="view">
        <div id="frame" :style="style">
            {{ label }}
            <div class="rectangle"></div>
        </div>
        <div class="menu_section">
            <div class="menu_list">
                <button>Rectangle</button>
                <button>Texte</button>
                <button>Cercle</button>
            </div>
        </div>
    </section>
</template>
  
<style scoped>
.view{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 80px;
    align-items: center;
    perspective: 1000px;
}
#frame{
    width: 350px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    transition: transform 0.5s ease;
    transform-origin: center;
}
.menu_section{
    width: 30%;
}
.menu_list{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
button{
    color: #fff;
    padding: 10px;
    background-color: inherit;
    border: 1px solid grey;
}
.rectangle{
    width: 80px;
    height: 40px;
    border: 1px solid yellow;
    background-color: yellow;
    margin-top: 10px;
}
</style>
<script setup lang="ts">
import { DragEvent } from "@interactjs/types";
import interact from "interactjs";
import { computed, ref } from "vue";

const props = defineProps(['color' , 'label' , 'rotation' , 'width' , 'height' , 'border']) 

const style = computed(()=>{
    return `background-color: ${props.color}; 
    transform: rotateZ(${props.rotation}deg) ; 
    width: ${props.width}px ; 
    height: ${props.height}px ; 
    border: 2px solid ${props.border}`
})
interact(".rectangle").draggable(
    {
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: "parent" ,
                endOnly: true 
            })
        ],
        listeners: {
            move: dragMoveListener,
        }
    }
)
function dragMoveListener (event: any) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}
</script>