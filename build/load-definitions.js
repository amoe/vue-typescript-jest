const os = require('os');
const path = require('path');
const _ = require('lodash');

const keypath = path.join(os.homedir(), ".private-definitions.json");

// When using DefinePlugin you have to double-layer the quotes because it's
// a direct text replacement like a C macro.
// You also have to update the external-definitions.d.ts file.
function loadDefinitions() {
    try {
        const originalStructure = require(keypath);

        console.log("Loading private definitions.");
        const doubleLayered = _.mapValues(originalStructure, JSON.stringify)
        return doubleLayered;
    } catch (e) {
        console.log("Warning: no private definitions found");
        return {};
    }
}


module.exports = loadDefinitions;
