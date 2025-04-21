<template>
    <div class="w-full">
        A simple Vemto Plugin base:
        
        <br/>

        <input class="input" type="input" v-model="text">
        
        <br/>
        
        <button class="button-primary" @click="save">Save</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: '',
            pluginData: {},
        }
    },

    created() {
        this.pluginData = window.vemtoApi.getPluginData()
        this.pluginConsole = window.vemtoApi.pluginConsole
        this.pluginConsole.log(this.pluginData)
        window.vemtoApi.log.message('Plugin data:', this.pluginData)
        this.text = this.pluginData.text
    },

    methods: {
        save() {
            window.vemtoApi.savePluginData({
                text: this.text
            })
        }
    }
}
</script>