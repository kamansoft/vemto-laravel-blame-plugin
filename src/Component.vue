<template>
    <div class="w-full">
        <label class="block text-sm font-bold ">Laravel Blame</label>
        <small class="mb-2">Select the Entities to set as Blamable, </small>
        
        <div class="mt-5" v-if="pluginData && projetcEntities.length > 0">
            <label class="block text-sm font-bold mb-2">Project Entities</label>

            <div class="form-check mb-3">
                <label class="inline-flex items-center" for="selectAllCruds">
                    <input class="form-checkbox" type="checkbox" id="selectAllCruds" @change="selectAllData" v-model="pluginData.allSelected">
                    <span class="ml-2 text-gray-800 dark:text-gray-300">Select All-</span>
                </label>
            </div>
            <template v-if="pluginData.entities && Object.keys(pluginData.entities).length > 0">
                <div class="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-900 p-2 rounded-md my-3" v-for="entity in projetcEntities" :key="'entity' + entity.id">
                    <div class="form-check">
                        <label class="inline-flex items-center text-gray-800" :for="entity.id">
                            <input class="form-checkbox" type="checkbox" v-model="pluginData.entities[entity.id]['selected']" :id="entity.id" @change="toggleCrudData(entity)">
                            <span class="ml-2 text-gray-800 dark:text-gray-100">{{ entity.name }}</span>
                        </label>
                    </div>
                </div>
            </template>
            <template v-else>
                <p>Loading entities or no entities found in plugin data...</p>
            </template>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'; // Import Vue for $set

export default {
    data() {
        return {
            projetcEntities: [],
            pluginData: {
                entities: {}, // Initialize as an object
                allSelected: false
            }, // Initialize pluginData structure
        }
    },

    created() {
        this.pluginConsole = window.vemtoApi.pluginConsole
        this.pluginConsole.log('creating plugin instance' )

        this.pluginData = window.vemtoApi.getPluginData()
        // Ensure pluginData and entities exist and are objects
        if (!this.pluginData) this.pluginData = {};
        if (!this.pluginData.entities || Array.isArray(this.pluginData.entities)) { // Handle case where it might be null or array from mock
            this.pluginData.entities = {};
        }
        this.projetcEntities = window.vemtoApi.getProject()?.entities || [];

        this.pluginConsole.log(window.vemtoApi.getProject().entities)

        // Always check for new entities
        this.checkNewProjectEntities()

        this.pluginConsole.log('Plugin Intance Created' )

    },

    methods: {
        checkNewProjectEntities() {
            this.pluginConsole.log('Checking project entities');
            // Ensure projetcEntities is populated before iterating
            if (!this.projetcEntities || this.projetcEntities.length === 0) {
                 this.projetcEntities = window.vemtoApi.getProject()?.entities || [];
            }
            // Ensure pluginData.entities is an object before adding properties
            if (!this.pluginData.entities) {
                this.pluginData.entities = {};
            }

            this.projetcEntities.forEach(entity => {
                let entityData = {
                    id: entity.id, // Ensure these properties exist on the mock/real entity object
                    name: entity.name, // Ensure these properties exist on the mock/real entity object
                    selected: this.pluginData.entities[entity.id]?.selected ?? false, // Preserve existing selection if available
                }
                try {
                    // Use Vue.$set or this.$set for Vue 2 reactivity when adding new properties
                    if(!this.pluginData.entities[entity.id]) {
                         // Use this.$set for Vue 2 reactivity
                         this.$set(this.pluginData.entities, entity.id, entityData);
                         this.pluginConsole.log(`Added new entity to plugin data: ${entity.name}`);
                    } else {
                         // Optionally update existing entry if needed, e.g., name changes
                         // this.pluginData.entities[entity.id] = { ...this.pluginData.entities[entity.id], ...entityData };
                         // If updating nested properties, might need $set as well:
                         // this.$set(this.pluginData.entities[entity.id], 'name', entityData.name);
                    }
                } catch (e) {
                    this.pluginConsole.error(e)
                }
            });

            // Optional: Remove entities from pluginData that no longer exist in the project
            // ... logic to compare keys in this.pluginData.entities with ids in this.projetcEntities ...

            this.pluginConsole.log('check finished')
            this.save()
        },
        toggleCrudData(entity){
            this.pluginConsole.log(this.pluginData.entities[entity.id]['selected']==='boolean')
            this.pluginConsole.log(`before Toggled entity: ${entity.name} - ${(this.pluginData.entities[entity.id]['selected']===true)}`)
            // Ensure the entity exists in pluginData before toggling
            if (this.pluginData.entities && this.pluginData.entities[entity.id]) {
                // Ensure 'selected' property exists before toggling
                if (typeof this.pluginData.entities[entity.id]['selected'] === 'boolean') {
                    this.pluginData.entities[entity.id]['selected'] = !this.pluginData.entities[entity.id]['selected'];
                } else {
                    // Initialize if 'selected' is missing or not a boolean
                    this.pluginData.entities[entity.id]['selected'] = true; // Or false, depending on desired default toggle state
                }
                this.save() // Call save directly, no need for savePluginData wrapper if save does it
            } else {
                this.pluginConsole.error(`Attempted to toggle non-existent entity: ${entity.id}`);
            }
            this.pluginConsole.log(`Toggled entity: ${entity.name} - ${this.pluginData.entities[entity.id]['selected']}`)
        },
        selectAllData() {
            const newState = this.pluginData.allSelected; // The state *after* the checkbox is clicked
            Object.keys(this.pluginData.entities).forEach(entityId => {
                this.pluginData.entities[entityId].selected = newState;
            });
            this.save();
        },
        save: window.vemtoApi.debounce(function() {
            this.pluginConsole.log('Saving plugin data')
            window.vemtoApi.savePluginData({
                entities: this.pluginData.entities,
                allSelected: this.pluginData.allSelected ?? false,
            })
            this.pluginConsole.log('Saved plugin data')
        }, 300)
    }
}
</script>