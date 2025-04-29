/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_lib)
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

;// ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/Component.vue?vue&type=template&id=86dfab62
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"w-full"},[_c('label',{staticClass:"block text-sm font-bold"},[_vm._v("Laravel Blame")]),_c('small',{staticClass:"mb-2"},[_vm._v("Select the Entities to set as Blamable, ")]),(_vm.pluginData && _vm.projetcEntities.length > 0)?_c('div',{staticClass:"mt-5"},[_c('label',{staticClass:"block text-sm font-bold mb-2"},[_vm._v("Project Entities")]),_c('div',{staticClass:"form-check mb-3"},[_c('label',{staticClass:"inline-flex items-center",attrs:{"for":"selectAllCruds"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pluginData.allSelected),expression:"pluginData.allSelected"}],staticClass:"form-checkbox",attrs:{"type":"checkbox","id":"selectAllCruds"},domProps:{"checked":Array.isArray(_vm.pluginData.allSelected)?_vm._i(_vm.pluginData.allSelected,null)>-1:(_vm.pluginData.allSelected)},on:{"change":[function($event){var $$a=_vm.pluginData.allSelected,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.pluginData, "allSelected", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.pluginData, "allSelected", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.pluginData, "allSelected", $$c)}},_vm.selectAllData]}}),_c('span',{staticClass:"ml-2 text-gray-800 dark:text-gray-300"},[_vm._v("Select All-")])])]),(_vm.pluginData.entities && Object.keys(_vm.pluginData.entities).length > 0)?_vm._l((_vm.projetcEntities),function(entity){return _c('div',{key:'entity' + entity.id,staticClass:"bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-900 p-2 rounded-md my-3"},[_c('div',{staticClass:"form-check"},[_c('label',{staticClass:"inline-flex items-center text-gray-800",attrs:{"for":entity.id}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pluginData.entities[entity.id]['selected']),expression:"pluginData.entities[entity.id]['selected']"}],staticClass:"form-checkbox",attrs:{"type":"checkbox","id":entity.id},domProps:{"checked":Array.isArray(_vm.pluginData.entities[entity.id]['selected'])?_vm._i(_vm.pluginData.entities[entity.id]['selected'],null)>-1:(_vm.pluginData.entities[entity.id]['selected'])},on:{"change":[function($event){var $$a=_vm.pluginData.entities[entity.id]['selected'],$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.pluginData.entities[entity.id], 'selected', $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.pluginData.entities[entity.id], 'selected', $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.pluginData.entities[entity.id], 'selected', $$c)}},function($event){return _vm.toggleCrudData(entity)}]}}),_c('span',{staticClass:"ml-2 text-gray-800 dark:text-gray-100"},[_vm._v(_vm._s(entity.name))])])])])}):[_c('p',[_vm._v("Loading entities or no entities found in plugin data...")])]],2):_vm._e()])
}
var staticRenderFns = []


;// ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/Component.vue?vue&type=script&lang=js

 // Import Vue for $set

/* harmony default export */ const Componentvue_type_script_lang_js = ({
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
});

;// ./src/Component.vue?vue&type=script&lang=js
 /* harmony default export */ const src_Componentvue_type_script_lang_js = (Componentvue_type_script_lang_js); 
;// ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// ./src/Component.vue





/* normalize component */
;
var component = normalizeComponent(
  src_Componentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const Component = (component.exports);
;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (Component);


module.exports = __webpack_exports__["default"];
/******/ })()
;
//# sourceMappingURL=laravel-blame.common.js.map