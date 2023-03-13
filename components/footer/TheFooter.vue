<template>
        <div class="bg-brand-black">
            <div class="px-4 container mx-auto py-4 px-4 lg:py-6 flex flex-row justify-between">
                <div class="flex flex-row gap-3">
                    <ClientOnly>
                        <font-awesome-icon class="text-xl text-brand-white" :icon="['fab', 'facebook']" />
                        <font-awesome-icon class="text-xl text-brand-white" :icon="['fab', 'facebook']" />
                        <font-awesome-icon class="text-xl text-brand-white" :icon="['fab', 'facebook']" />
                        <font-awesome-icon class="text-xl text-brand-white" :icon="['fab', 'facebook']" />
                    </ClientOnly>
                    
                </div>
                <div class="text-brand-white">
                    Something here
                </div>
            </div>
        </div>
</template>