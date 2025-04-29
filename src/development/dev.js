// --- Import the Mock API ---
import vemtoApiMock from './mocks/vemto-api.js';

// --- Assign the imported mock to the window object ---
console.log('[Dev Entry] Assigning imported mock to window.vemtoApi...');
window.vemtoApi = vemtoApiMock;
console.log('[Dev Entry] window.vemtoApi assigned:', window.vemtoApi);

// --- Import the Plugin-Specific Mock ---
import pluginSpecificMock from './mocks/vemto-api.js';

// --- Merge Plugin-Specific Mock into Base Mock ---
console.log('[Dev Entry] Merging plugin-specific mock into window.vemtoApi...');
if (window.vemtoApi && pluginSpecificMock) {
    // Simple merge (Object.assign) - overwrites base methods with plugin-specific ones
    Object.assign(window.vemtoApi, pluginSpecificMock);
    console.log('[Dev Entry] Merge complete. Final window.vemtoApi:', window.vemtoApi);
} else {
    console.error("[Dev Entry] CRITICAL: Base window.vemtoApi or pluginSpecificMock not found! Merge failed.");
    // Display error if base or specific mock failed to load
    document.getElementById('app').innerHTML = '<h1 style="color: red;">Error: Mock API merge failed. Check console.</h1>';
    // Throw an error to stop further execution if critical
    throw new Error("Mock API merge failed.");
}

// --- Now import Vue and the Component ---
import Vue from 'vue'; // Import Vue 2
import App from './../Component.vue'; // Import the component AFTER mock is merged

// Mount the component using Vue 2 syntax
new Vue({
  render: h => h(App),
}).$mount('#app');

console.log('[Dev Entry] Vue app mounted.');