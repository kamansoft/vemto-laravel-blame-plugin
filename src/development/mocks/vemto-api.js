const pluginData = require('./plugin-data.json');
const projectData = require('./project-data.json');
 

const vemtoApi = {
    pluginConsole: {
        log: console.log.bind(console, '[Plugin Console Log]'),
        warn: console.warn.bind(console, '[Plugin Console Warn]'),
        error: console.error.bind(console, '[Plugin Console Error]'),
    },
    getPluginData: function() {
        console.log('[Mock API] getPluginData called');
        return JSON.parse(JSON.stringify(pluginData));
    },
    getProject: function() {
        console.log('[Mock API] getProject called');
        return JSON.parse(JSON.stringify(projectData,));
    },
    savePluginData: function(data) {
        console.log('[Mock API] savePluginData called with:', data);
        this.mockedPluginData = JSON.parse(JSON.stringify(data));
        console.log('[Mock API] Internal mockedPluginData updated:', this.mockedPluginData);
    },

};

// Export the mock object
export default vemtoApi;