<template>
    <div class="w-full">
        <label class="block text-sm font-bold">Laravel Blame</label>
        <small class="mb-2">Select the Entities to set as Blamable, </small>
        
        <div class="mt-5">
            <label class="block text-sm font-bold mb-2">Project Entities</label>

            <div class="form-check mb-3">
                <label class="inline-flex items-center" for="selectAllCruds">
                    <input class="form-checkbox" type="checkbox" id="selectAllCruds" @change="selectAllData" v-model="pluginData.allSelected">
                    <span class="ml-2 text-gray-800 dark:text-gray-300">Select All</span>
                </label>
            </div>
            
            <template v-if="pluginData.entities">
                <div class="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-900 p-2 rounded-md my-3" v-for="crud in projectCruds" :key="'crud' + crud.id">
                    <div class="form-check">
                        <label class="inline-flex items-center text-gray-800" :for="crud.id">
                            <input class="form-checkbox" type="checkbox" v-model="pluginData.cruds[crud.id]['selected']" :id="crud.id" @change="toggleCrudData(crud)">
                            <span class="ml-2 text-gray-800 dark:text-gray-100">{{ crud.name }}</span>
                        </label>
                    </div>
                    
           
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projetcEntities: [],
            pluginData: {

            },
        }
    },

    created() {
        this.pluginConsole = window.vemtoApi.pluginConsole
        this.pluginData = window.vemtoApi.getPluginData()
        this.projetcEntities = window.vemtoApi.getProject().entities
        //this.pluginConsole.log(this.projetcEntities)
        this.pluginConsole.log('Plugin Intance Created' )

        if(this.pluginData.entities){
            this.checkNewProjectEntities()
        }

    },

    methods: {
        checkNewProjectEntities() {
            this.pluginConsole.log('Checking for new project entities')
            
            this.projetcEntities.forEach(entity => {
                //if(this.pluginData.entities[entity.id]) return
                let entityData = {
                    id: entity.id,
                    name: entity.name,
                    selected: false,
   
                }
                this.pluginConsole.log(entityData)
                try {
                    if(this.pluginData.entities[entity.id]) return
                    //this.$set(this.pluginData.entities, entity.id, entityData)
                } catch (e) {
                    this.pluginConsole.error(e)
                }
     

            })
            this.pluginConsole.log('checked')
            this.pluginConsole.log(this.pluginData)
            this.save()
        },
        save: window.vemtoApi.debounce(function() {
            this.pluginConsole.log('Saving plugin data')
            this.pluginConsole.log(this.pluginData)
            window.vemtoApi.savePluginData({
                entities: this.pluginData.entities,
                allSelected: this.pluginData.allSelected
            })
        }, 300)
    }
}
</script>