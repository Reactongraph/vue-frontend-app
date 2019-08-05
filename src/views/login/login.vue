
<script src="./login"/>
<style src="./login.css"/>

<template>
  <div id="login">
    <div id="formContent">
    <!-- Tabs Titles -->
      
      <!-- Icon -->
      <div class="fadeIn first">
      Login
      </div>
      
      <!-- Login Form -->
      <form @submit.prevent="handleSubmit">
        <input type="text" name="username" v-model="username" class="fadeIn second" placeholder="Username">
        <input type="password" name="password" v-model="password" id="password" class="fadeIn third" placeholder="Password">
        <input role="button" type="submit" class="fadeIn fourth" value="Log In" v-on:click="handleSubmit">
      </form>

      <!-- Remind Passowrd -->
      <div id="formFooter">
        <a class="underlineHover" href="#">Forgot Password?</a>
        <router-link tag="li" to="/register" class="route">
        <a class="underlineHover" href="#">New User?</a>
        </router-link>
      </div>
    
    </div>
  </div>
</template>
