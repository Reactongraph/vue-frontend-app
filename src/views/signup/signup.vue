<script src="./signup"/>
<style src="./signup.css"/>

<template>
  <div id="signup">
    <div id="formContent">
    <!-- Tabs Titles -->
      
      <!-- Icon -->
      <div class="fadeIn first">
      Signup
      </div>
      
      <!-- Login Form -->
      <form @submit.prevent="handleSubmit">
        <input type="text"  name="username" v-model="email" class="fadeIn second input_field" placeholder="Username">
        <input type="password" name="password" v-model="password" id="password" class="fadeIn third" placeholder="Password">
        <input role="button" type="submit" class="fadeIn fourth" value="Signup" v-on:click="handleSubmit">
      </form>
      <!-- Remind Passowrd -->
      <div id="formFooter">
        <router-link tag="li" to="/login" class="route">
          <a class="underlineHover" href="#">Already have an account?</a>
        </router-link>
      </div>
    
    </div>
  </div>
</template>
