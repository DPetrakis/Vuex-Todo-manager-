<template>
    <div>
        <div style="height:100px"></div>
        <h3>Add Todo </h3>
        <div class="add">
            <form @submit="onSumbit">
                <input type="text" v-model="title" placeholder="Add Todo....">
                <button  type="sumbit" value="Sumbit" class="btn btn-success">Sumbit</button>
            </form>
        </div>
    </div>
</template>

<script>

import {mapActions} from 'vuex'


export default {
    name: 'AddTodo',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSumbit(e){
           e.preventDefault();
           this.addTodo(this.title);
           this.title = '';
        }
        
    }
}

</script>

<style scoped>

    form {
    display: flex;
    }
    input[type="text"] {
      flex: 10;
      padding: 10px;
      border: 1px solid #41b883;
      outline: 0; 
    }
    input[type="submit"] {
      flex: 2;
      background: #41b883;
      color: #fff;
      border: 1px #41b883 solid;
      cursor: pointer;
    }
    
</style>