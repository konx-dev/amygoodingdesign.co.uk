<template>
    <div>
        <div>some of my projects are private, if you have been provided with a password, please enter it here:</div>
        <div class="border relative">
            <input type="text" v-model.lazy="userSubmission" class="w-full" placeholder="password"/>
            <button @click="checkUserSubmission(userSubmission)" class="absolute top-0 right-0">X</button>
        </div>
        <div v-if="passwordIncorrect">
            Password incorrect, please try again.
        </div>
    </div>
</template>
<script setup>
import { generate } from '@vue/compiler-core';


let userSubmission = ref(null)
let passwordIncorrect = ref(false)
const runtimeConfig = useRuntimeConfig();

function checkUserSubmission(val) {
        
    const hashedPassword = 821823318;
    console.log(hashedPassword)
    
    const hashSubmission = s => s.split("").reduce((a,b) => {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
    }, 0);

    if (hashSubmission(val) === hashedPassword) {
        console.log('password correct')
    } else {
        console.log('password wrong, please try again..')
    }

    console.log(hashSubmission(val))
}

</script>