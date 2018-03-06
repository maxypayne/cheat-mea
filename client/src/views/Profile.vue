<template>
<div>
  <p class="content">
    <pre>Hi {{ $root.user.name }}</pre>
    <pre>Hi {{ $root.user.username }}</pre>
    
    <a href="">ji</a>
  </p>
  </div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {};
  }
};
</script>
