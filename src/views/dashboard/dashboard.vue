<script src="./dashboard"/>
<style src="./dashboard.css"/>

<template>
  <div class="app-conatiner">
    <Sidebar v-bind:isVisible="isVisible"/>
    <div id="page-content-wrapper" v-bind:class="[!isVisible && 'padding-left']">
        <div class="hdr">
            <span @click="logout">Logout</span>
            <button type="button" v-bind:class="[isVisible? 'hamburger is-open':'hamburger is-closed']" data-toggle="offcanvas" @click="handleHamburger">
                <span class="hamb-top"></span>
                <span class="hamb-middle"></span>
                <span class="hamb-bottom"></span>
            </button>
        </div>
        <router-view/>
    </div>
  </div>
</template>