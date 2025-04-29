module.exports = (vemto) => {

    return {

        canInstall() {
            return true
        },

        onInstall() {
            let projectEntities = vemto.getProject().entities
            vemto.savePluginData({
                allSelected: false,
                entities: this.generateEntitiesData(projectEntities),
            })
        },

        generateEntitiesData(entities){
            let entitiesData = []
            entities.forEach(entity => {

                let entityData = {
                    id: entity.id,
                    name: entity.name,
                    selected: false,
   
                }
                entitiesData[entity.id] = entityData
            })
            return entitiesData
        },
        beforeCodeGenerationStart() {
            let data = vemto.getPluginData()

            vemto.log.info(data.text)
            vemto.log.warning(`That's awesome!!! A Vemto plugin showing a message during code generation`)
        },

    }

}