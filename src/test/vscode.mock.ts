// Register a minimal vscode mock so extension.ts can be imported outside VS Code
const Module = require("module");
const originalRequire = Module.prototype.require;

Module.prototype.require = function (id: string) {
  if (id === "vscode") {
    return {};
  }
  return originalRequire.apply(this, arguments);
};
