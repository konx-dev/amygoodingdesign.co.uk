<template>
    <div>
        <img :src="ctx[activeImage].url" :alt="ctx[activeImage].title" />
    </div>
</template>
<script setup>

const activeImage = ref(0)

const props = defineProps({
    ctx: {
        type: [Object],
        required: true
    }
})

function updateImage() {
    let length = props.ctx.length -1

    if (activeImage.value === length) {
        activeImage.value = 0
    } else {
        activeImage.value = activeImage.value + 1
    }

}

onMounted(() => {
  let timerId = setInterval(() => updateImage(), 5000);
});

</script>