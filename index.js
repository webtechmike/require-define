/**
 * @param {String} moduleName - Name of the defined module.
 * @param {Function} - Function being defined as {moduleName}
 * @returns given module
 */
function define(moduleName, moduleFunction) {
    global[moduleName] = moduleFunction;
}

/**
 * @param {String} moduleName - A reference to the module by path.
 */
 function require2(moduleName) {
     const module = global[moduleName];
     if (!module) throw new Error(`Cannot find module ${moduleName}`);
 }

//
// define('sum', (a, b) => a + b);
// const sum = require('sum');
// sum(2, 2); // 4
