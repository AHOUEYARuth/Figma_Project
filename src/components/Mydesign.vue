<template>
    <section class="design">
      <div class="design_content">
        <div class="design_head">
          <div class="user_section">
            <div class="user">
              <div class="logo">J</div>
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
          <select>
              <option disabled selected>Forme</option>
              <option>iPhone 14 & 15 Pro Max 430*932</option>
              <option>iPhone 13 & 14 Pro Max 390*844</option>
              <option>iPhone 14 Plus 428*926</option>
          </select>
        </div>
        <div class="fill_section">
                <div class="head">
                  <h3>Fill</h3>
                </div>
                <div class="color_section">
                  <div class="color_item">
                      <div id="color">
                          <input type="color" v-model="color">
                          <div id="color-code">D9D9D9</div>
                      </div>
                      <div class="percent">100%</div>
                  </div>
                </div>
            </div>
      </div>
    </section>
</template>
<style scoped>
  .design{
    width: 350px;
    height: 90%;
    border: 1px solid grey;
    position: fixed;
    top: 30px;
    right: 20px;
  }
  .user_section , .item_list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
  }
  .design_head , .frame_section{
    width: 310px;
    border-bottom: 1px solid rgb(148, 147, 147);
    padding: 20px;
  }
  .logo{
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
  button{
    padding: 8px 10px;
    font-size: 15px;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    background-color: inherit;
  }
  .sharing_section button{
    padding: 10px;
    background-color: #1560BD;
    color: #fff;
  }
  .item{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .item_list input{
    width: 60px;
    padding: 8px;
    font-size: 15px;
    
  }
  input{
    border: 1px solid #ccc;
    outline: none;
    border-radius: 5px;
    background-color: inherit;
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
  option{
    background-color: inherit;
    color: #000;
  }
  option:disabled {
      color: #fff;
  }
  .fill_section{
      width: 310px;
      padding: 20px;
  }
  .head , .color_section{
    display: flex;
    justify-content: space-between;
    width: 310px;
  }
  .color_item{
    display: flex;
     /*  background-color: rgb(238, 232, 232); */
    align-items: center;
    gap: 30px;
    padding: 10px;
    border-radius: 10px;
  }
  #color{
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>
<script setup lang="ts">
import {ref} from "vue"
const color = ref('white')
</script>