<script src="./sidebar"/>
<style src="./sidebar.css"/>

<template>
  <nav v-if="!isVisible" class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
    <ul class="nav sidebar-nav nvsdbar">
        <li class="" v-for="item in list" >
        <router-link tag="li" v-bind:to="item.path" class="route">
            <a href="#">
                {{item.name}}
            </a>
            </router-link>
        </li>
    </ul>
  </nav>
</template>
