// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hbj89":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"igcvL":[function(require,module,exports) {
var _browserSuite = require("@splitsoftware/browser-suite");
const authorizationKey = "m5mc91m6jcjknch5dvhdse8s5ae6lulr3eha";
const anonKey = "anon_" + Math.floor(Math.random() * 1000);
const flagName = "test_flag";
let refreshEnabled = false;
// Instantiate the SDK
var suite = (0, _browserSuite.SplitSuite)({
    core: {
        authorizationKey: authorizationKey,
        // key represents your internal user id, or the account id that
        // the user belongs to.
        // This could also be a cookie you generate for anonymous users
        key: anonKey,
        trafficType: "anonymous"
    }
});
// And get the client instance you'll use
var client = suite.client();
console.log(anonKey);
document.addEventListener("DOMContentLoaded", ()=>{
    // Create and insert the app's HTML structure
    const appHTML = `
  <div class="container mt-5">
  <h1 class="text-center mb-4">Simple To-Do List</h1>
  <div class="input-group mb-3">
      <input type="text" id="new-task-input" class="form-control" placeholder="Add a new task" aria-label="Recipient's username" aria-describedby="button-addon2">
      <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="add-task-btn">Add Task</button>
      </div>
  </div>
  <ul id="tasks-list" class="list-group"></ul>
</div>
  `;
    client.on(client.Event.SDK_READY, function() {
        let treatment = client.getTreatment(flagName);
        console.log(treatment);
        if (treatment === "on") setTimeout(function() {
            document.body.innerHTML = appHTML;
            createTaskManagementLogic();
        }, 1500);
        else {
            document.body.innerHTML = appHTML;
            createTaskManagementLogic();
        }
        checkRefresh(client);
    });
    client.on(client.Event.SDK_UPDATE, function() {
        console.log("got update");
        checkRefresh(client);
    });
});
function checkRefresh(client) {
    let treatment = client.getTreatment("refresh");
    if (treatment === "on") setInterval(function() {
        location.reload();
    }, 3000);
}
function createTaskManagementLogic() {
    // Task management logic
    const addButton = document.getElementById("add-task-btn");
    const inputField = document.getElementById("new-task-input");
    const tasksList = document.getElementById("tasks-list");
    addButton.addEventListener("click", ()=>{
        const taskText = inputField.value.trim();
        if (taskText) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
      <span class="task-content">${taskText}</span>
      <button class="delete-task-btn btn btn-danger btn-sm float-right">Delete</button>
     `;
            listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
            tasksList.appendChild(listItem);
            inputField.value = ""; // Clear input field
            // Add event listener to the delete button
            listItem.querySelector(".delete-task-btn").addEventListener("click", ()=>{
                tasksList.removeChild(listItem);
            });
        }
    });
}

},{"@splitsoftware/browser-suite":"cOXZb"}],"cOXZb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SplitSuite", ()=>(0, _browserSuite.SplitSuite));
parcelHelpers.export(exports, "InLocalStorage", ()=>(0, _splitioBrowserjs.InLocalStorage));
parcelHelpers.export(exports, "ErrorLogger", ()=>(0, _splitioBrowserjs.ErrorLogger));
parcelHelpers.export(exports, "WarnLogger", ()=>(0, _splitioBrowserjs.WarnLogger));
parcelHelpers.export(exports, "InfoLogger", ()=>(0, _splitioBrowserjs.InfoLogger));
parcelHelpers.export(exports, "DebugLogger", ()=>(0, _splitioBrowserjs.DebugLogger));
parcelHelpers.export(exports, "SplitRumAgent", ()=>(0, _browserRumAgent.SplitRumAgent));
parcelHelpers.export(exports, "routeChanges", ()=>(0, _browserRumAgent.routeChanges));
parcelHelpers.export(exports, "tti", ()=>(0, _browserRumAgent.tti));
var _browserSuite = require("./browserSuite");
var _splitioBrowserjs = require("@splitsoftware/splitio-browserjs");
var _browserRumAgent = require("@splitsoftware/browser-rum-agent");

},{"./browserSuite":"ebY0x","@splitsoftware/splitio-browserjs":false,"@splitsoftware/browser-rum-agent":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebY0x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Split Suite for Browsers.
 *
 * @param config configuration object used to instantiate the Suite
 * @param __updateModules optional function that lets redefine internal SDK modules. Use with
 * caution since, unlike `config`, this param is not validated neither considered part of the public API.
 * @throws Will throw an error if the provided config is invalid.
 */ parcelHelpers.export(exports, "SplitSuite", ()=>SplitSuite);
var _objectAssign = require("@splitsoftware/splitio-commons/esm/utils/lang/objectAssign");
var _sets = require("@splitsoftware/splitio-commons/esm/utils/lang/sets");
var _constants = require("@splitsoftware/splitio-commons/esm/utils/constants");
var _browserRumAgent = require("@splitsoftware/browser-rum-agent");
var _full = require("@splitsoftware/splitio-browserjs/full");
var DEFAULT_TRAFFIC_TYPE = "user";
// @TODO remove eventually when RUM Agent registers web vitals by default
var registerWebVitals = true;
function SplitSuite(config, __updateModules) {
    // @ts-expect-error passing a non-public param
    var sdk = (0, _full.SplitFactory)(config, __updateModules);
    var settings = sdk.settings;
    var clients = new (0, _sets._Set)();
    // Override UserConsent.setStatus to update RUM Agent consent
    var originalSetStatus = sdk.UserConsent.setStatus;
    sdk.UserConsent.setStatus = function(newStatus) {
        (0, _browserRumAgent.SplitRumAgent).setUserConsent(newStatus);
        return originalSetStatus.apply(this, arguments);
    };
    // Create Suite instance extending SDK
    var suite = (0, _objectAssign.objectAssign)({}, sdk, {
        client: function() {
            var client = sdk.client.apply(sdk, arguments);
            if (!clients.has(client)) {
                clients.add(client);
                var identity_1 = {
                    key: client.key,
                    // For main client, use trafficType from settings. For shared clients, use second argument. If not provided, use default.
                    trafficType: (arguments[0] ? arguments[1] : settings.core.trafficType) || DEFAULT_TRAFFIC_TYPE
                };
                (0, _browserRumAgent.SplitRumAgent).addIdentity(identity_1);
                // override client.destroy to remove identity from RUM Agent
                var originalDestroy_1 = client.destroy;
                client.destroy = function() {
                    (0, _browserRumAgent.SplitRumAgent).removeIdentity(identity_1);
                    return originalDestroy_1.apply(client, arguments);
                };
            }
            return client;
        },
        rumAgent: function() {
            return 0, _browserRumAgent.SplitRumAgent;
        },
        destroy: function() {
            return Promise.all((0, _sets.setToArray)(clients).map(function(client) {
                return client.destroy();
            }));
        }
    });
    // Setup the RUM Agent only in standalone mode
    if (settings.mode === (0, _constants.STANDALONE_MODE)) {
        if (registerWebVitals) {
            (0, _browserRumAgent.SplitRumAgent).register((0, _browserRumAgent.webVitals)());
            registerWebVitals = false;
        }
        var agentConfig = (0, _browserRumAgent.SplitRumAgent).__getConfig();
        if (agentConfig.a && agentConfig.a !== settings.core.authorizationKey) {
            settings.log.warn("RUM Agent already setup. The new Suite instance will reset the RUM Agent configuration.");
            (0, _browserRumAgent.SplitRumAgent).removeIdentities(); // reset identities for new SDK key
        }
        agentConfig.log = settings.log;
        (0, _browserRumAgent.SplitRumAgent).setup(settings.core.authorizationKey, (0, _objectAssign.objectAssign)({
            url: settings.urls.events,
            userConsent: settings.userConsent
        }, settings.rumAgent));
    }
    return suite;
}

},{"@splitsoftware/splitio-commons/esm/utils/lang/objectAssign":"eGIPQ","@splitsoftware/splitio-commons/esm/utils/lang/sets":"ikri1","@splitsoftware/splitio-commons/esm/utils/constants":"bdnhi","@splitsoftware/browser-rum-agent":"3DBEK","@splitsoftware/splitio-browserjs/full":"ap0Kh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eGIPQ":[function(require,module,exports) {
/*
Adaptation of "object-assign" library (https://www.npmjs.com/package/object-assign)
exported as an ES module instead of CommonJS, to avoid extra configuration steps when using
the ESM build of the SDK with tools that doesn't support CommonJS by default (e.g. Rollup).

object-assign
(c) Sindre Sorhus
@license MIT
*/ /* eslint-disable */ // @ts-nocheck
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "objectAssign", ()=>objectAssign);
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) return false;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++)test2["_" + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join("") !== "0123456789") return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        // eslint-disable-next-line no-restricted-syntax
        for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++)if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
        }
    }
    return to;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ikri1":[function(require,module,exports) {
/**
 * Set implementation based on es6-set polyfill (https://github.com/medikoo/es6-set/blob/master/polyfill.js),
 * with the minimal features used by the SDK.

Copyright (C) 2013 Mariusz Nowak (www.medikoo.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SetPoly", ()=>SetPoly);
/**
 * return an array containing the items of the given set.
 * @param set Set or SetPoly instance
 */ parcelHelpers.export(exports, "setToArray", ()=>setToArray);
/**
 * return the Set constructor to use. If `Array.from` built-in or native Set is not available or it doesn't support the required features,
 * a ponyfill with minimal features is returned instead.
 *
 * Exported for testing purposes only.
 */ parcelHelpers.export(exports, "__getSetConstructor", ()=>__getSetConstructor);
parcelHelpers.export(exports, "_Set", ()=>_Set);
parcelHelpers.export(exports, "returnSetsUnion", ()=>returnSetsUnion);
parcelHelpers.export(exports, "returnDifference", ()=>returnDifference);
var SetPoly = /** @class */ function() {
    // unlike ES6 `Set`, it only accepts an array as first argument iterable
    function SetPoly(values) {
        var _this = this;
        this.__setData__ = [];
        if (Array.isArray(values)) values.forEach(function(value) {
            _this.add(value);
        });
    }
    SetPoly.prototype.clear = function() {
        if (!this.__setData__.length) return;
        this.__setData__.length = 0;
    };
    SetPoly.prototype.add = function(value) {
        if (this.has(value)) return this;
        this.__setData__.push(value);
        return this;
    };
    SetPoly.prototype.delete = function(value) {
        var index = this.__setData__.indexOf(value);
        if (index === -1) return false;
        this.__setData__.splice(index, 1);
        return true;
    };
    SetPoly.prototype.has = function(value) {
        return this.__setData__.indexOf(value) !== -1;
    };
    SetPoly.prototype.forEach = function(callbackfn, thisArg) {
        if (typeof callbackfn !== "function") throw new TypeError(callbackfn + " is not a function");
        for(var i = 0; i < this.__setData__.length; i++){
            var value = this.__setData__[i];
            callbackfn.call(thisArg, value, value, this);
        }
    };
    Object.defineProperty(SetPoly.prototype, "size", {
        get: function() {
            return this.__setData__.length;
        },
        enumerable: false,
        configurable: true
    });
    return SetPoly;
}();
function setToArray(set) {
    if (set instanceof SetPoly) return set.__setData__.slice();
    // if not using SetPoly as set, it means Array.from is supported
    // eslint-disable-next-line compat/compat
    return Array.from(set);
}
function __getSetConstructor() {
    // eslint-disable-next-line compat/compat
    if (typeof Array.from === "function" && typeof Set === "function" && Set.prototype && Set.prototype.values) return Set;
    return SetPoly;
}
var _Set = __getSetConstructor();
function returnSetsUnion(set, set2) {
    var result = new _Set(setToArray(set));
    set2.forEach(function(value) {
        result.add(value);
    });
    return result;
}
function returnDifference(list, list2) {
    if (list === void 0) list = [];
    if (list2 === void 0) list2 = [];
    var result = new _Set(list);
    list2.forEach(function(item) {
        result.delete(item);
    });
    return setToArray(result);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bdnhi":[function(require,module,exports) {
// Special treatments
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONTROL", ()=>CONTROL);
parcelHelpers.export(exports, "CONTROL_WITH_CONFIG", ()=>CONTROL_WITH_CONFIG);
parcelHelpers.export(exports, "UNKNOWN", ()=>UNKNOWN);
parcelHelpers.export(exports, "NA", ()=>NA);
parcelHelpers.export(exports, "SPLIT_IMPRESSION", ()=>SPLIT_IMPRESSION);
parcelHelpers.export(exports, "SPLIT_EVENT", ()=>SPLIT_EVENT);
parcelHelpers.export(exports, "DEBUG", ()=>DEBUG);
parcelHelpers.export(exports, "OPTIMIZED", ()=>OPTIMIZED);
parcelHelpers.export(exports, "NONE", ()=>NONE);
parcelHelpers.export(exports, "LOCALHOST_MODE", ()=>LOCALHOST_MODE);
parcelHelpers.export(exports, "STANDALONE_MODE", ()=>STANDALONE_MODE);
parcelHelpers.export(exports, "PRODUCER_MODE", ()=>PRODUCER_MODE);
parcelHelpers.export(exports, "CONSUMER_MODE", ()=>CONSUMER_MODE);
parcelHelpers.export(exports, "CONSUMER_PARTIAL_MODE", ()=>CONSUMER_PARTIAL_MODE);
parcelHelpers.export(exports, "STORAGE_MEMORY", ()=>STORAGE_MEMORY);
parcelHelpers.export(exports, "STORAGE_LOCALSTORAGE", ()=>STORAGE_LOCALSTORAGE);
parcelHelpers.export(exports, "STORAGE_REDIS", ()=>STORAGE_REDIS);
parcelHelpers.export(exports, "STORAGE_PLUGGABLE", ()=>STORAGE_PLUGGABLE);
parcelHelpers.export(exports, "CONSENT_GRANTED", ()=>CONSENT_GRANTED);
parcelHelpers.export(exports, "CONSENT_DECLINED", ()=>CONSENT_DECLINED);
parcelHelpers.export(exports, "CONSENT_UNKNOWN", ()=>CONSENT_UNKNOWN);
parcelHelpers.export(exports, "GET_TREATMENT", ()=>GET_TREATMENT);
parcelHelpers.export(exports, "GET_TREATMENTS", ()=>GET_TREATMENTS);
parcelHelpers.export(exports, "GET_TREATMENT_WITH_CONFIG", ()=>GET_TREATMENT_WITH_CONFIG);
parcelHelpers.export(exports, "GET_TREATMENTS_WITH_CONFIG", ()=>GET_TREATMENTS_WITH_CONFIG);
parcelHelpers.export(exports, "GET_TREATMENTS_BY_FLAG_SET", ()=>GET_TREATMENTS_BY_FLAG_SET);
parcelHelpers.export(exports, "GET_TREATMENTS_BY_FLAG_SETS", ()=>GET_TREATMENTS_BY_FLAG_SETS);
parcelHelpers.export(exports, "GET_TREATMENTS_WITH_CONFIG_BY_FLAG_SET", ()=>GET_TREATMENTS_WITH_CONFIG_BY_FLAG_SET);
parcelHelpers.export(exports, "GET_TREATMENTS_WITH_CONFIG_BY_FLAG_SETS", ()=>GET_TREATMENTS_WITH_CONFIG_BY_FLAG_SETS);
parcelHelpers.export(exports, "TRACK_FN_LABEL", ()=>TRACK_FN_LABEL);
parcelHelpers.export(exports, "SPLIT_FN_LABEL", ()=>SPLIT_FN_LABEL);
parcelHelpers.export(exports, "SPLITS_FN_LABEL", ()=>SPLITS_FN_LABEL);
parcelHelpers.export(exports, "NAMES_FN_LABEL", ()=>NAMES_FN_LABEL);
parcelHelpers.export(exports, "QUEUED", ()=>QUEUED);
parcelHelpers.export(exports, "DROPPED", ()=>DROPPED);
parcelHelpers.export(exports, "DEDUPED", ()=>DEDUPED);
parcelHelpers.export(exports, "STANDALONE_ENUM", ()=>STANDALONE_ENUM);
parcelHelpers.export(exports, "CONSUMER_ENUM", ()=>CONSUMER_ENUM);
parcelHelpers.export(exports, "CONSUMER_PARTIAL_ENUM", ()=>CONSUMER_PARTIAL_ENUM);
parcelHelpers.export(exports, "OPTIMIZED_ENUM", ()=>OPTIMIZED_ENUM);
parcelHelpers.export(exports, "DEBUG_ENUM", ()=>DEBUG_ENUM);
parcelHelpers.export(exports, "NONE_ENUM", ()=>NONE_ENUM);
parcelHelpers.export(exports, "SPLITS", ()=>SPLITS);
parcelHelpers.export(exports, "IMPRESSIONS", ()=>IMPRESSIONS);
parcelHelpers.export(exports, "IMPRESSIONS_COUNT", ()=>IMPRESSIONS_COUNT);
parcelHelpers.export(exports, "EVENTS", ()=>EVENTS);
parcelHelpers.export(exports, "TELEMETRY", ()=>TELEMETRY);
parcelHelpers.export(exports, "TOKEN", ()=>TOKEN);
parcelHelpers.export(exports, "SEGMENT", ()=>SEGMENT);
parcelHelpers.export(exports, "MY_SEGMENT", ()=>MY_SEGMENT);
parcelHelpers.export(exports, "TREATMENT", ()=>TREATMENT);
parcelHelpers.export(exports, "TREATMENTS", ()=>TREATMENTS);
parcelHelpers.export(exports, "TREATMENT_WITH_CONFIG", ()=>TREATMENT_WITH_CONFIG);
parcelHelpers.export(exports, "TREATMENTS_WITH_CONFIG", ()=>TREATMENTS_WITH_CONFIG);
parcelHelpers.export(exports, "TREATMENTS_BY_FLAGSET", ()=>TREATMENTS_BY_FLAGSET);
parcelHelpers.export(exports, "TREATMENTS_BY_FLAGSETS", ()=>TREATMENTS_BY_FLAGSETS);
parcelHelpers.export(exports, "TREATMENTS_WITH_CONFIG_BY_FLAGSET", ()=>TREATMENTS_WITH_CONFIG_BY_FLAGSET);
parcelHelpers.export(exports, "TREATMENTS_WITH_CONFIG_BY_FLAGSETS", ()=>TREATMENTS_WITH_CONFIG_BY_FLAGSETS);
parcelHelpers.export(exports, "TRACK", ()=>TRACK);
parcelHelpers.export(exports, "CONNECTION_ESTABLISHED", ()=>CONNECTION_ESTABLISHED);
parcelHelpers.export(exports, "OCCUPANCY_PRI", ()=>OCCUPANCY_PRI);
parcelHelpers.export(exports, "OCCUPANCY_SEC", ()=>OCCUPANCY_SEC);
parcelHelpers.export(exports, "STREAMING_STATUS", ()=>STREAMING_STATUS);
parcelHelpers.export(exports, "SSE_CONNECTION_ERROR", ()=>SSE_CONNECTION_ERROR);
parcelHelpers.export(exports, "TOKEN_REFRESH", ()=>TOKEN_REFRESH);
parcelHelpers.export(exports, "ABLY_ERROR", ()=>ABLY_ERROR);
parcelHelpers.export(exports, "SYNC_MODE_UPDATE", ()=>SYNC_MODE_UPDATE);
parcelHelpers.export(exports, "AUTH_REJECTION", ()=>AUTH_REJECTION);
parcelHelpers.export(exports, "STREAMING", ()=>STREAMING);
parcelHelpers.export(exports, "POLLING", ()=>POLLING);
parcelHelpers.export(exports, "REQUESTED", ()=>REQUESTED);
parcelHelpers.export(exports, "NON_REQUESTED", ()=>NON_REQUESTED);
parcelHelpers.export(exports, "DISABLED", ()=>DISABLED);
parcelHelpers.export(exports, "ENABLED", ()=>ENABLED);
parcelHelpers.export(exports, "PAUSED", ()=>PAUSED);
var CONTROL = "control";
var CONTROL_WITH_CONFIG = {
    treatment: CONTROL,
    config: null
};
var UNKNOWN = "unknown";
var NA = "NA";
var SPLIT_IMPRESSION = "IMPRESSION";
var SPLIT_EVENT = "EVENT";
var DEBUG = "DEBUG";
var OPTIMIZED = "OPTIMIZED";
var NONE = "NONE";
var LOCALHOST_MODE = "localhost";
var STANDALONE_MODE = "standalone";
var PRODUCER_MODE = "producer";
var CONSUMER_MODE = "consumer";
var CONSUMER_PARTIAL_MODE = "consumer_partial";
var STORAGE_MEMORY = "MEMORY";
var STORAGE_LOCALSTORAGE = "LOCALSTORAGE";
var STORAGE_REDIS = "REDIS";
var STORAGE_PLUGGABLE = "PLUGGABLE";
var CONSENT_GRANTED = "GRANTED"; // The user has granted consent for tracking events and impressions
var CONSENT_DECLINED = "DECLINED"; // The user has declined consent for tracking events and impressions
var CONSENT_UNKNOWN = "UNKNOWN"; // The user has neither granted nor declined consent for tracking events and impressions
var GET_TREATMENT = "getTreatment";
var GET_TREATMENTS = "getTreatments";
var GET_TREATMENT_WITH_CONFIG = "getTreatmentWithConfig";
var GET_TREATMENTS_WITH_CONFIG = "getTreatmentsWithConfig";
var GET_TREATMENTS_BY_FLAG_SET = "getTreatmentsByFlagSet";
var GET_TREATMENTS_BY_FLAG_SETS = "getTreatmentsByFlagSets";
var GET_TREATMENTS_WITH_CONFIG_BY_FLAG_SET = "getTreatmentsWithConfigByFlagSet";
var GET_TREATMENTS_WITH_CONFIG_BY_FLAG_SETS = "getTreatmentsWithConfigByFlagSets";
var TRACK_FN_LABEL = "track";
var SPLIT_FN_LABEL = "split";
var SPLITS_FN_LABEL = "splits";
var NAMES_FN_LABEL = "names";
var QUEUED = 0;
var DROPPED = 1;
var DEDUPED = 2;
var STANDALONE_ENUM = 0;
var CONSUMER_ENUM = 1;
var CONSUMER_PARTIAL_ENUM = 2;
var OPTIMIZED_ENUM = 0;
var DEBUG_ENUM = 1;
var NONE_ENUM = 2;
var SPLITS = "sp";
var IMPRESSIONS = "im";
var IMPRESSIONS_COUNT = "ic";
var EVENTS = "ev";
var TELEMETRY = "te";
var TOKEN = "to";
var SEGMENT = "se";
var MY_SEGMENT = "ms";
var TREATMENT = "t";
var TREATMENTS = "ts";
var TREATMENT_WITH_CONFIG = "tc";
var TREATMENTS_WITH_CONFIG = "tcs";
var TREATMENTS_BY_FLAGSET = "tf";
var TREATMENTS_BY_FLAGSETS = "tfs";
var TREATMENTS_WITH_CONFIG_BY_FLAGSET = "tcf";
var TREATMENTS_WITH_CONFIG_BY_FLAGSETS = "tcfs";
var TRACK = "tr";
var CONNECTION_ESTABLISHED = 0;
var OCCUPANCY_PRI = 10;
var OCCUPANCY_SEC = 20;
var STREAMING_STATUS = 30;
var SSE_CONNECTION_ERROR = 40;
var TOKEN_REFRESH = 50;
var ABLY_ERROR = 60;
var SYNC_MODE_UPDATE = 70;
var AUTH_REJECTION = 80;
var STREAMING = 0;
var POLLING = 1;
var REQUESTED = 0;
var NON_REQUESTED = 1;
var DISABLED = 0;
var ENABLED = 1;
var PAUSED = 2;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3DBEK":[function(require,module,exports) {
// Create SplitRumAgent namespace and export it for ESM/CJS imports
// Must use a named import to create the SplitRumAgent namespace (side effects)
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SplitRumAgent", ()=>(0, _config.SplitRumAgent));
// Pluggable event collectors
parcelHelpers.export(exports, "tti", ()=>(0, _tti.tti));
parcelHelpers.export(exports, "routeChanges", ()=>(0, _routeChanges.routeChanges));
parcelHelpers.export(exports, "webVitals", ()=>(0, _webVitals.webVitals));
var _config = require("./utils/config");
var _tti = require("./metrics/tti");
var _routeChanges = require("./metrics/routeChanges");
var _webVitals = require("./metrics/webVitals");

},{"./utils/config":"5XCJh","./metrics/tti":false,"./metrics/routeChanges":false,"./metrics/webVitals":"d7NrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5XCJh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SplitRumAgent", ()=>SplitRumAgent);
var _queue = require("./queue");
var _isArray = require("./isArray");
var _isBoolean = require("./isBoolean");
var _isObject = require("./isObject");
var _isString = require("./isString");
var _log = require("./log");
var _whenLoaded = require("./whenLoaded");
var _assign = require("./assign");
var _validateIdentity = require("./validateIdentity");
var _constants = require("./constants");
// Built-in event collectors
var _errors = require("../metrics/errors");
var _navigation = require("../metrics/navigation");
var _validateEvent = require("./validateEvent");
// Browser support:
// - ES5 syntax
// - assumes availability of `window.addEventListener` and `document.location`, which are broadly supported.
// - feature detection of Promise, History and Performance APIs is done by event collector modules. These features are required for some modules to collect data, but not for the RUM Agent to work.
// In Browser, we pollute the global `window` object with the agent.
// In NodeJS, we only export it and no event collectors are registered.
var isBrowser = typeof window === "object" && typeof document === "object";
var globalRef = isBrowser ? window : {};
(function(w, isBrowser) {
    if (w.SplitRumAgent) return;
    var _config = {
        i: [],
        a: false,
        p: {},
        prefix: "",
        url: "https://events.split.io/api",
        pushRate: 30,
        queueSize: 5000,
        log: (0, _log.log),
        userConsent: (0, _constants.CONSENT_GRANTED // User consent is assumed to be granted by default
        )
    };
    var _isConfigured = false;
    function calculateAndFlush() {
        if (isBrowser && !_isConfigured && _config.a && _config.i.length) {
            _isConfigured = true;
            // always async never inasync ;)
            setTimeout((0, _queue.flush), 0);
        }
    }
    var collectors = [];
    // SplitRumAgent would be our namespace
    var SplitRumAgent = {
        // Initialization params
        setup: function(sdkKey, config) {
            if ((0, _isObject.isObject)(config)) (0, _assign.objectAssign)(_config, config);
            if ((0, _isString.isString)(sdkKey)) {
                _config.a = sdkKey;
                calculateAndFlush();
            } else _config.log.error("SDK key must be a string.");
            // allow for chaining.
            return SplitRumAgent;
        },
        // Configure identities
        addIdentities: function(identities) {
            if ((0, _isArray.isArray)(identities)) identities.forEach(function(identity) {
                return SplitRumAgent.addIdentity(identity);
            });
            else _config.log.error("Identities must be an array of objects with key and trafficType.");
        },
        addIdentity: function(identity) {
            var validatedIdentity = (0, _validateIdentity.validateIdentity)(identity, _config.log);
            if (validatedIdentity && !_config.i.some(function(i) {
                return (0, _validateIdentity.areEqual)(i, validatedIdentity);
            })) {
                _config.i.push(validatedIdentity);
                calculateAndFlush();
            }
        },
        removeIdentities: function() {
            _config.i = [];
        },
        removeIdentity: function(identity) {
            var validatedIdentity = (0, _validateIdentity.validateIdentity)(identity, _config.log);
            if (validatedIdentity) _config.i = _config.i.filter(function(i) {
                return !(0, _validateIdentity.areEqual)(i, validatedIdentity);
            });
        },
        getIdentities: function() {
            return _config.i;
        },
        // Custom error handler.
        trackError: function(e) {
            return (0, _errors.handleCustomErrors)(e, SplitRumAgent);
        },
        // Track custom events.
        track: (0, _queue.track),
        // register event collector
        register: function(eventCollector) {
            if (typeof eventCollector !== "function") _config.log.error("register method must be called with an event collector function.");
            else collectors.push(eventCollector(SplitRumAgent));
            // allow for chaining.
            return SplitRumAgent;
        },
        // Custom properties
        setProperties: function(properties) {
            (0, _assign.objectAssign)(_config.p, (0, _validateEvent.validateProperties)(properties, _config.log));
        },
        getProperties: function() {
            return _config.p;
        },
        removeProperties: function() {
            _config.p = {};
        },
        // User consent
        setUserConsent: function(userConsent) {
            if (!(0, _isBoolean.isBoolean)(userConsent)) {
                _config.log.warn("setUserConsent: provided param must be a boolean value");
                return false;
            }
            _config.userConsent = userConsent ? (0, _constants.CONSENT_GRANTED) : (0, _constants.CONSENT_DECLINED);
            return true;
        },
        getUserConsent: function() {
            return _config.userConsent;
        },
        // Private members for internal use only.
        // @TODO review how to expose config
        __getConfig: function() {
            return _config;
        },
        __queue: (0, _queue.queue)
    };
    if (isBrowser) {
        // Built-in collectors
        SplitRumAgent.register((0, _navigation.onNavigationTimingMetrics));
        SplitRumAgent.register((0, _errors.onError));
        // Post events periodically
        (0, _whenLoaded.whenLoaded)((0, _queue.setSchedule));
        // If there's a pagehide or visibilitychange event, calculate what's possible and send events using beacon by default
        (0, _whenLoaded.onPageHideOrVisibilityChange)(function() {
            collectors.forEach(function(collector) {
                if (collector && typeof collector.flush === "function") collector.flush();
            });
            (0, _queue.flush)(true);
        });
    }
    w.SplitRumAgent = SplitRumAgent;
})(globalRef, isBrowser);
var SplitRumAgent = globalRef.SplitRumAgent;

},{"./queue":"glMVz","./isArray":"57fYr","./isBoolean":"cLTEb","./isObject":"lFBWt","./isString":"e9gOj","./log":"fROZx","./whenLoaded":"ess9V","./assign":"3KeDg","./validateIdentity":"lt2YE","./constants":"d2tCh","../metrics/errors":"3TTt9","../metrics/navigation":"6ldFq","./validateEvent":"5ULEP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"glMVz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queue", ()=>queue);
// @TODO: Apply batching if needed
/**
 * Flush the queue of events.
 *
 * @param useBeacon - Whether to use navigator.sendBeacon or not. Defaults to false.
 * @returns true if events were sent, or a falsy value otherwise (e.g., queue is empty, config is not ready, or there was an error sending events)
 */ parcelHelpers.export(exports, "flush", ()=>flush);
parcelHelpers.export(exports, "setSchedule", ()=>setSchedule);
parcelHelpers.export(exports, "track", ()=>track);
var _context = require("./context");
var _transport = require("./transport");
var _isObject = require("./isObject");
var _assign = require("./assign");
var _constants = require("./constants");
var _validateEvent = require("./validateEvent");
var queue = [];
function flush(useBeacon) {
    var conf = window.SplitRumAgent.__getConfig();
    // Only send events if we do have the config.
    if (conf.a && conf.i.length && conf.userConsent === (0, _constants.CONSENT_GRANTED)) {
        var toSend = queue.splice(0, queue.length);
        return toSend.length && (0, _transport.sendEvents)(toSend, useBeacon);
    }
}
function setSchedule() {
    setInterval(flush, window.SplitRumAgent.__getConfig().pushRate * 1000);
    flush(); // Attempt a flush when setting the schedule, like a first tick.
}
function track(eventTypeId, value, properties) {
    var conf = window.SplitRumAgent.__getConfig();
    var eventData = (0, _validateEvent.validateEvent)((0, _isObject.isObject)(eventTypeId) ? eventTypeId : {
        eventTypeId: eventTypeId,
        value: value,
        properties: properties
    }, conf.log);
    // If the event is invalid or the user consent is DECLINED, drop the event.
    if (!eventData || conf.userConsent === (0, _constants.CONSENT_DECLINED)) return false;
    // If people configures the agent at a really late time, prevent having a giant queue and attempt to send them or drop. First events will be the most important ones anyways.
    if (queue.length >= conf.queueSize) {
        if (!flush()) {
            conf.log.warn("Dropping event due to queue size limit.");
            return false;
        }
    }
    // @ts-expect-error adding timestamp to event
    eventData.timestamp = Date.now(); // <-- This is not the most accurate but it shouldn't really matter much. The error margin should be small. We can actually calculate the timestamp later.
    if (conf.prefix) eventData.eventTypeId = conf.prefix + "." + eventData.eventTypeId;
    // include extra properties
    var commonProperties = {
        connectionType: (0, _context.getConnectionType)(),
        url: (0, _context.getUrl)(),
        userAgent: (0, _context.userAgent)
    };
    // merge common properties with custom and event properties
    eventData.properties = (0, _assign.objectAssign)(commonProperties, conf.p, (0, _isObject.isObject)(eventData.properties) ? eventData.properties : {});
    // @ts-expect-error not part of the public API
    if (window.SplitRumAgent.onEvent) eventData = window.SplitRumAgent.onEvent(eventData);
    if (eventData) (0, _assign.assignIdentities)(eventData, window.SplitRumAgent.__getConfig().i, queue);
    return true;
}

},{"./context":"dgZkR","./transport":"cii4b","./isObject":"lFBWt","./assign":"3KeDg","./constants":"d2tCh","./validateEvent":"5ULEP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dgZkR":[function(require,module,exports) {
/* eslint-disable compat/compat */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Get user agent if it is available
 */ parcelHelpers.export(exports, "getUserAgent", ()=>getUserAgent);
/**
 * Get information about the system's connections ('wifi', 'cellular', etc)
 * More Information: https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
 * */ parcelHelpers.export(exports, "getConnectionType", ()=>getConnectionType);
/**
 * Get the current page URL
 */ parcelHelpers.export(exports, "getUrl", ()=>getUrl);
/**
 * Get the current page URL without origin. i.e, path, query params and fragment, without schema, hostname and port
 */ parcelHelpers.export(exports, "getRoute", ()=>getRoute);
parcelHelpers.export(exports, "userAgent", ()=>userAgent);
parcelHelpers.export(exports, "languageVersion", ()=>languageVersion);
var _constants = require("./constants");
function getUserAgent() {
    return typeof navigator === "object" ? navigator.userAgent : (0, _constants.UNAVAILABLE);
}
function getConnectionType() {
    // @ts-expect-error `navigator.connection` property is not defined in lib.dom.d.ts but might exist
    var connection = typeof navigator === "object" && (navigator.connection || navigator.mozConnection || navigator.webkitConnection);
    return connection ? connection.effectiveType : (0, _constants.UNAVAILABLE);
}
function getUrl() {
    return location.href; // equivalent to `document.URL`
}
function getRoute() {
    return location.pathname + location.search + location.hash;
}
var userAgent = getUserAgent();
var languageVersion = "jsrum-0.4.1";

},{"./constants":"d2tCh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d2tCh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UNAVAILABLE", ()=>UNAVAILABLE);
parcelHelpers.export(exports, "CONSENT_GRANTED", ()=>CONSENT_GRANTED);
parcelHelpers.export(exports, "CONSENT_DECLINED", ()=>CONSENT_DECLINED);
parcelHelpers.export(exports, "CONSENT_UNKNOWN", ()=>CONSENT_UNKNOWN);
var UNAVAILABLE = "unavailable";
var CONSENT_GRANTED = "GRANTED";
var CONSENT_DECLINED = "DECLINED";
var CONSENT_UNKNOWN = "UNKNOWN";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cii4b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Key and trafficType are pieces of data we'll add here because:
// a) not having those should not prevent queueing,
// b) we may have multiple tt/key tuples, may be easier to handle here.
parcelHelpers.export(exports, "sendEvents", ()=>sendEvents);
// Post data to our BE. Exporting only for UT purposes.
parcelHelpers.export(exports, "post", ()=>post);
// Fetch and XHR request fallback. Exporting only for UT purposes.
parcelHelpers.export(exports, "fallbackPost", ()=>fallbackPost);
var _assign = require("./assign");
var _context = require("./context");
function sendEvents(events, useBeacon) {
    var config = window.SplitRumAgent.__getConfig();
    var eventsWithIdentity = [];
    for(var i = 0; i < events.length; i++){
        var event_1 = events[i];
        (0, _assign.assignIdentities)(event_1, config.i, eventsWithIdentity);
    }
    if (eventsWithIdentity.length) return post(config.url + "/events/beacon", {
        entries: eventsWithIdentity,
        token: config.a,
        sdk: (0, _context.languageVersion)
    }, useBeacon);
    return false;
}
function post(url, data, useBeacon) {
    var stringifiedData = JSON.stringify(data);
    useBeacon = useBeacon // check we don't avoid on purpose
     && typeof navigator === "object" && navigator.sendBeacon; // and that it exists
    return useBeacon ? navigator.sendBeacon(url, stringifiedData) : fallbackPost(url, stringifiedData);
}
function fallbackPost(url, payload) {
    if (typeof fetch === "function") fetch(url, {
        method: "POST",
        body: payload,
        headers: {
            "Content-Type": "text/plain;charset=UTF-8"
        }
    }).catch(function() {
    // noop
    });
    else try {
        var req = new XMLHttpRequest();
        req.open("POST", url, true);
        req.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        req.send(payload);
    } catch (e) {
        return false;
    }
    return true; // This is a fallback so it's mostly fire and forget.
}

},{"./assign":"3KeDg","./context":"dgZkR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3KeDg":[function(require,module,exports) {
/**
 * A small ponyfill of Object.assign
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "objectAssign", ()=>objectAssign);
parcelHelpers.export(exports, "assignIdentities", ()=>assignIdentities);
var objectAssign = Object.assign || function(target) {
    if (target === null || target === undefined) throw new TypeError("Object.assign cannot be called with null or undefined");
    target = Object(target);
    for(var i = 1; i < arguments.length; i++){
        var source = Object(arguments[i]); // eslint-disable-next-line no-restricted-syntax
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
function assignIdentities(event, identities, queue) {
    if (event.eventTypeId && event.timestamp) {
        if (!identities.length || event.key && event.trafficTypeName) queue.push(event);
        else identities.forEach(function(identity) {
            queue.push(objectAssign({
                trafficTypeName: identity.trafficType,
                key: identity.key
            }, event));
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lFBWt":[function(require,module,exports) {
/**
 * Utility to know if something is a plain object.
 *
 * @param {*} obj
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObject", ()=>isObject);
function isObject(obj) {
    return obj && typeof obj === "object" && obj.constructor === Object;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ULEP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Validates and sanitizes a properties object. Returns the sanitized object or undefined if it is invalid (i.e., not a plain object).
 */ parcelHelpers.export(exports, "validateProperties", ()=>validateProperties);
/**
 * Validates and sanitizes an event. Returns the sanitized event or undefined if the event is invalid.
 */ parcelHelpers.export(exports, "validateEvent", ()=>validateEvent);
var _isBoolean = require("./isBoolean");
var _isNumber = require("./isNumber");
var _isObject = require("./isObject");
var _isString = require("./isString");
var _assign = require("./assign");
function validateProperties(properties, log) {
    if (!(0, _isObject.isObject)(properties)) {
        log.error("Event `properties` must be a plain object.");
        return;
    }
    // Validate and sanitize property values
    var propertiesClone = (0, _assign.objectAssign)({}, properties);
    Object.keys(propertiesClone).forEach(function(key) {
        var val = propertiesClone[key]; // eslint-disable-next-line eqeqeq
        if (val == undefined || (0, _isString.isString)(val) || (0, _isNumber.isNumber)(val) || (0, _isBoolean.isBoolean)(val)) return;
        log.warn("Property " + key + " is of invalid type. Setting value to null.");
        propertiesClone[key] = null;
    });
    return propertiesClone;
}
var EVENT_TYPE_REGEX = /^[a-zA-Z0-9][-_.:a-zA-Z0-9]{0,79}$/;
function validateEvent(event, log) {
    var eventTypeId = event.eventTypeId, value = event.value, properties = event.properties;
    if (!(0, _isString.isString)(eventTypeId) || !EVENT_TYPE_REGEX.test(eventTypeId)) {
        log.error("Event must have a valid eventTypeId.");
        return;
    }
    // eslint-disable-next-line eqeqeq
    if (value != undefined && !(0, _isNumber.isNumber)(value)) {
        log.error("Event value must be a number.");
        return;
    }
    // eslint-disable-next-line eqeqeq
    if (properties != undefined && !(properties = validateProperties(properties, log))) return;
    return {
        eventTypeId: eventTypeId,
        value: value,
        properties: properties
    };
}

},{"./isBoolean":"cLTEb","./isNumber":"2pCRa","./isObject":"lFBWt","./isString":"e9gOj","./assign":"3KeDg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cLTEb":[function(require,module,exports) {
/**
 * Checks if a given value is a boolean.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBoolean", ()=>isBoolean);
function isBoolean(val) {
    return val === true || val === false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2pCRa":[function(require,module,exports) {
/**
 * Utility to know if something is a number. Pretty basic, we don't look for instances of Number since we don't expect those (for now).
 *
 * @param n
 * @returns true if n is a number, false otherwise.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
function isNumber(n) {
    return typeof n === "number";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e9gOj":[function(require,module,exports) {
/**
 * Utility to know if something is a string.
 *
 * @param {*} s
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isString", ()=>isString);
function isString(s) {
    return typeof s === "string" || s instanceof String;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"57fYr":[function(require,module,exports) {
/**
 * Utility to know if something is an array.
 *
 * @param {*} a
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArray", ()=>isArray);
function isArray(a) {
    return Object.prototype.toString.call(a) === "[object Array]";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fROZx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "log", ()=>log);
var INFIX = " splitio => rum-agent: ";
var log = {
    debug: function(m) {
        console.log("[DEBUG]" + INFIX + m);
    },
    info: function(m) {
        console.log("[INFO] " + INFIX + m);
    },
    warn: function(m) {
        console.log("[WARN] " + INFIX + m);
    },
    error: function(m) {
        console.log("[ERROR]" + INFIX + m);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ess9V":[function(require,module,exports) {
/**
 * Calls the callback function when the document is loaded or if it is already loaded.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "whenLoaded", ()=>whenLoaded);
parcelHelpers.export(exports, "onPageHideOrVisibilityChange", ()=>onPageHideOrVisibilityChange);
function whenLoaded(callback) {
    if (document.readyState === "complete") // Queue a task so the callback runs after `loadEventEnd`.
    setTimeout(callback, 0);
    else window.addEventListener("load", function() {
        // Defer, because we should wait until the handlers finish to allow customer logic run first.
        setTimeout(callback, 0);
    });
}
function onPageHideOrVisibilityChange(callback) {
    // `unload` is not reliable, so we use `pagehide` if available: https://developer.chrome.com/articles/page-lifecycle-api/#the-unload-event
    var PAGE_TERMINATION_EVENT = typeof window.onpagehide !== "undefined" ? "pagehide" : "unload";
    // Flush data whenever the page is hidden or unloaded
    if (typeof document !== "undefined" && document.addEventListener) document.addEventListener("visibilitychange", function onVisibilityChange() {
        if (document.visibilityState === "hidden") callback();
    });
    // Some browsers, like Safari, does not fire the `visibilitychange` event when the page is being unloaded.
    // Therefore, we also flush data in the `pagehide` event (or `unload` if `pagehide` is not available).
    // If both events are triggered, the latter will find the events queue empty, so no duplicate data will be submitted.
    window.addEventListener(PAGE_TERMINATION_EVENT, callback);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lt2YE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateIdentity", ()=>validateIdentity);
parcelHelpers.export(exports, "areEqual", ()=>areEqual);
var _isNumber = require("./isNumber");
var _isObject = require("./isObject");
var _isString = require("./isString");
function validateIdentity(identity, log) {
    if (!(0, _isObject.isObject)(identity)) {
        log.error("Identity must be an object with key and trafficType.");
        return;
    }
    var key = identity.key, trafficType = identity.trafficType;
    if ((0, _isNumber.isNumber)(key)) key = key + "";
    if (!(0, _isString.isString)(key)) {
        log.error("Identity Key must be a string or number.");
        return;
    }
    if (!(0, _isString.isString)(trafficType)) {
        log.error("Identity Traffic Type must be a string.");
        return;
    }
    return {
        key: key.trim(),
        trafficType: trafficType.trim().toLowerCase()
    };
}
function areEqual(identity1, identity2) {
    return identity1.key === identity2.key && identity1.trafficType === identity2.trafficType;
}

},{"./isNumber":"2pCRa","./isObject":"lFBWt","./isString":"e9gOj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3TTt9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Handle custom error. Here we handle whatever the customer want to send. Ideally
 * we expect a string or an error object.
 */ parcelHelpers.export(exports, "handleCustomErrors", ()=>handleCustomErrors);
/**
 * Captures uncaught errors and promise rejections.
 *
 * @TODO: sync snippet in HTML head to not miss events if loaded asynchronously.
 */ parcelHelpers.export(exports, "onError", ()=>onError);
var _getErrorData = require("../utils/getErrorData");
var _constants = require("../utils/constants");
/**
 * Add error into queue
 */ function trackError(error, ctx) {
    var errorData = (0, _getErrorData.getErrorData)(error);
    return errorData ? ctx.track({
        eventTypeId: "error",
        value: null,
        properties: {
            message: errorData.message,
            stack: errorData.stack
        }
    }) : false;
}
function handleCustomErrors(e, ctx) {
    return trackError(e ? e : (0, _constants.UNAVAILABLE), ctx);
}
function onError(ctx) {
    function handleUncaughtErrors(event) {
        trackError(event ? event.error || event.message || (0, _constants.UNAVAILABLE) : (0, _constants.UNAVAILABLE), ctx);
    }
    function handleRejectionsErrors(e) {
        trackError(e ? e.reason : (0, _constants.UNAVAILABLE), ctx);
    }
    // In case customer placed the snippet in the head, remove listeners and process errors
    var w = window; // @ts-expect-error object might be polluted
    var g = w.__error;
    if (g) {
        w.removeEventListener("error", g.l1);
        w.removeEventListener("unhandledrejection", g.l2);
        // @TODO remove `setTimeout` eventually. ATM we have to run next code asynchronously, because `track` calls require global SplitRumAgent available
        setTimeout(function() {
            g.e1.forEach(handleUncaughtErrors);
            g.e2.forEach(handleRejectionsErrors); // @ts-expect-error object might be polluted
            delete w.__error;
        }, 0);
    }
    // Capture browser uncaught errors.
    w.addEventListener("error", handleUncaughtErrors);
    // Capture browser promise rejection errors.
    w.addEventListener("unhandledrejection", handleRejectionsErrors);
}

},{"../utils/getErrorData":"hwSRV","../utils/constants":"d2tCh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwSRV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Parse the error object. It returns an object with both message and stack every time, or false if the parameter does not have the format we use.
 *
 * @param {String|Error} error
 */ parcelHelpers.export(exports, "getErrorData", ()=>getErrorData);
var _isError = require("./isError");
var _isString = require("./isString");
var _constants = require("./constants");
function getErrorData(error) {
    if ((0, _isString.isString)(error)) return {
        message: error,
        stack: (0, _constants.UNAVAILABLE)
    };
    else if ((0, _isError.isError)(error)) return {
        message: (0, _isString.isString)(error.message) ? error.message : (0, _constants.UNAVAILABLE),
        stack: (0, _isString.isString)(error.stack) ? error.stack : (0, _constants.UNAVAILABLE)
    };
    return false;
}

},{"./isError":"hxTlR","./isString":"e9gOj","./constants":"d2tCh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hxTlR":[function(require,module,exports) {
/**
 * Utility to know if something is a error.
 *
 * @param {*} o
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isError", ()=>isError);
function isError(o) {
    return Object.prototype.toString.call(o) === "[object Error]";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ldFq":[function(require,module,exports) {
// import { getTTFB } from './ttfb';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Calculates navigation performance metrics using the Navigation Timing API.
 * Metrics:
 * - time.to.first.byte
 * - time.to.dom.interactive
 * - page.load.time
 */ parcelHelpers.export(exports, "onNavigationTimingMetrics", ()=>onNavigationTimingMetrics);
var _ttdi = require("./ttdi");
var _plt = require("./plt");
var _whenLoaded = require("../../utils/whenLoaded");
function onNavigationTimingMetrics(ctx) {
    var getMetrics = function() {
        var ttdi = (0, _ttdi.getTTDI)(), // ttfb = getTTFB(),
        plt = (0, _plt.getPLT)();
        if (ttdi) ctx.track(ttdi);
        // @TODO regarding `time.to.first.byte`, either rename to `server.time.to.first.byte`, update its definition (https://web.dev/ttfb/), or remove it. For now, the metric is also provided by webVitals collector.
        // if (ttfb) ctx.track(ttfb);
        if (plt) ctx.track(plt);
    };
    (0, _whenLoaded.whenLoaded)(getMetrics);
    return {
        flush: getMetrics
    };
}

},{"./ttdi":"64dLg","./plt":"4zlpR","../../utils/whenLoaded":"ess9V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64dLg":[function(require,module,exports) {
/**
 * Time to Dom interactive
 * This is the time when the browser finished parsing the html.
 * https://varvy.com/pagespeed/critical-render-path.html
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// By the time this runs the fetchStart is guaranteed to have a value, we check to see which type of perf entry we could get by
// figuring out if the value is a DOMHighResTimestamp (lvl2) or a regular timestamp (lvl1).
parcelHelpers.export(exports, "calculateTTDI", ()=>calculateTTDI);
parcelHelpers.export(exports, "getTTDI", ()=>getTTDI);
var _simpleMetricFactory = require("./simpleMetricFactory");
function calculateTTDI(navEntry) {
    if (navEntry.domInteractive > 0) {
        // Nav timing api lvl 1.
        if (navEntry.fetchStart > 0 && navEntry.fetchStart % 1 === 0) return navEntry.domInteractive - navEntry.fetchStart;
        // Nav timing api lvl 2
        return navEntry.domInteractive;
    }
    return false;
}
var getTTDI = (0, _simpleMetricFactory.simpleMetricFactory)("time.to.dom.interactive", calculateTTDI);

},{"./simpleMetricFactory":"lO2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lO2Rx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Simplified navigation/load related metrics factory. Provide the event type and the calculation function, which will receive the navigation entry.
 */ parcelHelpers.export(exports, "simpleMetricFactory", ()=>simpleMetricFactory);
var _getNavEntry = require("../../utils/getNavEntry");
function simpleMetricFactory(type, calc) {
    var sent = false;
    return function() {
        var pageNav = (0, _getNavEntry.getNavEntry)();
        if (sent || !pageNav) return false; // The entry is not here yet, or the data was already sent.
        var val = calc(pageNav);
        if (!val) return false;
        else {
            sent = true;
            return {
                eventTypeId: type,
                value: val
            };
        }
    };
}

},{"../../utils/getNavEntry":"6E080","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6E080":[function(require,module,exports) {
/**
 * Utility function for retrieving the navigation performance entry. There are two levels of the Navigation Timing API we need to handle.
 * Use the level 2, if not available, fallback. If none is available, return false so we can short circuit there.
 */ // @TODO: As the calculations change between the level 1 and level 2, we may tweak the entry right here to standardize what we use on a future release.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getNavEntry", ()=>getNavEntry);
function getNavEntry() {
    if (!window.performance) return false; // We're in a dark place.
    return performance.getEntriesByType ? performance.getEntriesByType("navigation")[0] : performance.timing; // lvl1.
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4zlpR":[function(require,module,exports) {
/**
 * Page Load Time.
 * How long did it took for my page to be loaded? (including images, etc. Basically everything that's part of the first load)
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculatePLT", ()=>calculatePLT);
parcelHelpers.export(exports, "getPLT", ()=>getPLT);
var _simpleMetricFactory = require("./simpleMetricFactory");
function calculatePLT(navEntry) {
    // Nav timing lvl 2
    if (navEntry.duration > 0) return navEntry.duration;
    // Nav timing lvl 1
    if (navEntry.navigationStart > 0 && navEntry.loadEventEnd > 0) return navEntry.loadEventEnd - navEntry.navigationStart;
    return false;
}
var getPLT = (0, _simpleMetricFactory.simpleMetricFactory)("page.load.time", calculatePLT);

},{"./simpleMetricFactory":"lO2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7NrT":[function(require,module,exports) {
// webVitals plugin uses the web-vital standard build.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertWebVitalsMetricToSplitEvent", ()=>convertWebVitalsMetricToSplitEvent);
/**
 * web-vitals metrics
 */ parcelHelpers.export(exports, "webVitals", ()=>webVitals);
var _webVitals = require("web-vitals");
var _isObject = require("../../utils/isObject");
function convertWebVitalsMetricToSplitEvent(_a) {
    var name = _a.name, value = _a.value, rating = _a.rating, navigationType = _a.navigationType;
    return {
        eventTypeId: "webvitals." + name.toLowerCase(),
        value: value,
        properties: {
            rating: rating,
            navigationType: navigationType
        }
    };
}
function webVitals(options) {
    if (options === void 0) options = {};
    var _a = options.reportOptions, reportOptions = _a === void 0 ? {
        onCLS: true,
        onFCP: true,
        onFID: true,
        onINP: true,
        onLCP: true,
        onTTFB: true
    } : _a;
    return function onWebVitals(ctx) {
        Object.keys(reportOptions).forEach(function(key) {
            if (reportOptions[key] && _webVitals[key]) _webVitals[key](function(metric) {
                ctx.track(convertWebVitalsMetricToSplitEvent(metric));
            }, (0, _isObject.isObject)(reportOptions[key]) ? reportOptions[key] : undefined);
        });
    };
}

},{"web-vitals":"8CbZs","../../utils/isObject":"lFBWt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8CbZs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CLSThresholds", ()=>b);
parcelHelpers.export(exports, "FCPThresholds", ()=>L);
parcelHelpers.export(exports, "FIDThresholds", ()=>D);
parcelHelpers.export(exports, "INPThresholds", ()=>j);
parcelHelpers.export(exports, "LCPThresholds", ()=>U);
parcelHelpers.export(exports, "TTFBThresholds", ()=>X);
parcelHelpers.export(exports, "getCLS", ()=>S);
parcelHelpers.export(exports, "getFCP", ()=>w);
parcelHelpers.export(exports, "getFID", ()=>x);
parcelHelpers.export(exports, "getINP", ()=>Q);
parcelHelpers.export(exports, "getLCP", ()=>W);
parcelHelpers.export(exports, "getTTFB", ()=>Z);
parcelHelpers.export(exports, "onCLS", ()=>S);
parcelHelpers.export(exports, "onFCP", ()=>w);
parcelHelpers.export(exports, "onFID", ()=>x);
parcelHelpers.export(exports, "onINP", ()=>Q);
parcelHelpers.export(exports, "onLCP", ()=>W);
parcelHelpers.export(exports, "onTTFB", ()=>Z);
var e, n, t, i, r, a = -1, o = function(e) {
    addEventListener("pageshow", function(n) {
        n.persisted && (a = n.timeStamp, e(n));
    }, !0);
}, c = function() {
    return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
}, u = function() {
    var e = c();
    return e && e.activationStart || 0;
}, f = function(e, n) {
    var t = c(), i = "navigate";
    a >= 0 ? i = "back-forward-cache" : t && (document.prerendering || u() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : t.type && (i = t.type.replace(/_/g, "-")));
    return {
        name: e,
        value: void 0 === n ? -1 : n,
        rating: "good",
        delta: 0,
        entries: [],
        id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
        navigationType: i
    };
}, s = function(e, n, t) {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            var i = new PerformanceObserver(function(e) {
                Promise.resolve().then(function() {
                    n(e.getEntries());
                });
            });
            return i.observe(Object.assign({
                type: e,
                buffered: !0
            }, t || {})), i;
        }
    } catch (e) {}
}, d = function(e, n, t, i) {
    var r, a;
    return function(o) {
        n.value >= 0 && (o || i) && ((a = n.value - (r || 0)) || void 0 === r) && (r = n.value, n.delta = a, n.rating = function(e, n) {
            return e > n[1] ? "poor" : e > n[0] ? "needs-improvement" : "good";
        }(n.value, t), e(n));
    };
}, l = function(e) {
    requestAnimationFrame(function() {
        return requestAnimationFrame(function() {
            return e();
        });
    });
}, p = function(e) {
    var n = function(n) {
        "pagehide" !== n.type && "hidden" !== document.visibilityState || e(n);
    };
    addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0);
}, v = function(e) {
    var n = !1;
    return function(t) {
        n || (e(t), n = !0);
    };
}, m = -1, h = function() {
    return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
}, g = function(e) {
    "hidden" === document.visibilityState && m > -1 && (m = "visibilitychange" === e.type ? e.timeStamp : 0, T());
}, y = function() {
    addEventListener("visibilitychange", g, !0), addEventListener("prerenderingchange", g, !0);
}, T = function() {
    removeEventListener("visibilitychange", g, !0), removeEventListener("prerenderingchange", g, !0);
}, E = function() {
    return m < 0 && (m = h(), y(), o(function() {
        setTimeout(function() {
            m = h(), y();
        }, 0);
    })), {
        get firstHiddenTime () {
            return m;
        }
    };
}, C = function(e) {
    document.prerendering ? addEventListener("prerenderingchange", function() {
        return e();
    }, !0) : e();
}, L = [
    1800,
    3e3
], w = function(e, n) {
    n = n || {}, C(function() {
        var t, i = E(), r = f("FCP"), a = s("paint", function(e) {
            e.forEach(function(e) {
                "first-contentful-paint" === e.name && (a.disconnect(), e.startTime < i.firstHiddenTime && (r.value = Math.max(e.startTime - u(), 0), r.entries.push(e), t(!0)));
            });
        });
        a && (t = d(e, r, L, n.reportAllChanges), o(function(i) {
            r = f("FCP"), t = d(e, r, L, n.reportAllChanges), l(function() {
                r.value = performance.now() - i.timeStamp, t(!0);
            });
        }));
    });
}, b = [
    .1,
    .25
], S = function(e, n) {
    n = n || {}, w(v(function() {
        var t, i = f("CLS", 0), r = 0, a = [], c = function(e) {
            e.forEach(function(e) {
                if (!e.hadRecentInput) {
                    var n = a[0], t = a[a.length - 1];
                    r && e.startTime - t.startTime < 1e3 && e.startTime - n.startTime < 5e3 ? (r += e.value, a.push(e)) : (r = e.value, a = [
                        e
                    ]);
                }
            }), r > i.value && (i.value = r, i.entries = a, t());
        }, u = s("layout-shift", c);
        u && (t = d(e, i, b, n.reportAllChanges), p(function() {
            c(u.takeRecords()), t(!0);
        }), o(function() {
            r = 0, i = f("CLS", 0), t = d(e, i, b, n.reportAllChanges), l(function() {
                return t();
            });
        }), setTimeout(t, 0));
    }));
}, A = {
    passive: !0,
    capture: !0
}, I = new Date, P = function(i, r) {
    e || (e = r, n = i, t = new Date, k(removeEventListener), F());
}, F = function() {
    if (n >= 0 && n < t - I) {
        var r = {
            entryType: "first-input",
            name: e.type,
            target: e.target,
            cancelable: e.cancelable,
            startTime: e.timeStamp,
            processingStart: e.timeStamp + n
        };
        i.forEach(function(e) {
            e(r);
        }), i = [];
    }
}, M = function(e) {
    if (e.cancelable) {
        var n = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
        "pointerdown" == e.type ? function(e, n) {
            var t = function() {
                P(e, n), r();
            }, i = function() {
                r();
            }, r = function() {
                removeEventListener("pointerup", t, A), removeEventListener("pointercancel", i, A);
            };
            addEventListener("pointerup", t, A), addEventListener("pointercancel", i, A);
        }(n, e) : P(n, e);
    }
}, k = function(e) {
    [
        "mousedown",
        "keydown",
        "touchstart",
        "pointerdown"
    ].forEach(function(n) {
        return e(n, M, A);
    });
}, D = [
    100,
    300
], x = function(t, r) {
    r = r || {}, C(function() {
        var a, c = E(), u = f("FID"), l = function(e) {
            e.startTime < c.firstHiddenTime && (u.value = e.processingStart - e.startTime, u.entries.push(e), a(!0));
        }, m = function(e) {
            e.forEach(l);
        }, h = s("first-input", m);
        a = d(t, u, D, r.reportAllChanges), h && p(v(function() {
            m(h.takeRecords()), h.disconnect();
        })), h && o(function() {
            var o;
            u = f("FID"), a = d(t, u, D, r.reportAllChanges), i = [], n = -1, e = null, k(addEventListener), o = l, i.push(o), F();
        });
    });
}, B = 0, R = 1 / 0, H = 0, N = function(e) {
    e.forEach(function(e) {
        e.interactionId && (R = Math.min(R, e.interactionId), H = Math.max(H, e.interactionId), B = H ? (H - R) / 7 + 1 : 0);
    });
}, O = function() {
    return r ? B : performance.interactionCount || 0;
}, q = function() {
    "interactionCount" in performance || r || (r = s("event", N, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
    }));
}, j = [
    200,
    500
], _ = 0, z = function() {
    return O() - _;
}, G = [], J = {}, K = function(e) {
    var n = G[G.length - 1], t = J[e.interactionId];
    if (t || G.length < 10 || e.duration > n.latency) {
        if (t) t.entries.push(e), t.latency = Math.max(t.latency, e.duration);
        else {
            var i = {
                id: e.interactionId,
                latency: e.duration,
                entries: [
                    e
                ]
            };
            J[i.id] = i, G.push(i);
        }
        G.sort(function(e, n) {
            return n.latency - e.latency;
        }), G.splice(10).forEach(function(e) {
            delete J[e.id];
        });
    }
}, Q = function(e, n) {
    n = n || {}, C(function() {
        var t;
        q();
        var i, r = f("INP"), a = function(e) {
            e.forEach(function(e) {
                (e.interactionId && K(e), "first-input" === e.entryType) && !G.some(function(n) {
                    return n.entries.some(function(n) {
                        return e.duration === n.duration && e.startTime === n.startTime;
                    });
                }) && K(e);
            });
            var n, t = (n = Math.min(G.length - 1, Math.floor(z() / 50)), G[n]);
            t && t.latency !== r.value && (r.value = t.latency, r.entries = t.entries, i());
        }, c = s("event", a, {
            durationThreshold: null !== (t = n.durationThreshold) && void 0 !== t ? t : 40
        });
        i = d(e, r, j, n.reportAllChanges), c && ("PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && c.observe({
            type: "first-input",
            buffered: !0
        }), p(function() {
            a(c.takeRecords()), r.value < 0 && z() > 0 && (r.value = 0, r.entries = []), i(!0);
        }), o(function() {
            G = [], _ = O(), r = f("INP"), i = d(e, r, j, n.reportAllChanges);
        }));
    });
}, U = [
    2500,
    4e3
], V = {}, W = function(e, n) {
    n = n || {}, C(function() {
        var t, i = E(), r = f("LCP"), a = function(e) {
            var n = e[e.length - 1];
            n && n.startTime < i.firstHiddenTime && (r.value = Math.max(n.startTime - u(), 0), r.entries = [
                n
            ], t());
        }, c = s("largest-contentful-paint", a);
        if (c) {
            t = d(e, r, U, n.reportAllChanges);
            var m = v(function() {
                V[r.id] || (a(c.takeRecords()), c.disconnect(), V[r.id] = !0, t(!0));
            });
            [
                "keydown",
                "click"
            ].forEach(function(e) {
                addEventListener(e, function() {
                    return setTimeout(m, 0);
                }, !0);
            }), p(m), o(function(i) {
                r = f("LCP"), t = d(e, r, U, n.reportAllChanges), l(function() {
                    r.value = performance.now() - i.timeStamp, V[r.id] = !0, t(!0);
                });
            });
        }
    });
}, X = [
    800,
    1800
], Y = function e(n) {
    document.prerendering ? C(function() {
        return e(n);
    }) : "complete" !== document.readyState ? addEventListener("load", function() {
        return e(n);
    }, !0) : setTimeout(n, 0);
}, Z = function(e, n) {
    n = n || {};
    var t = f("TTFB"), i = d(e, t, X, n.reportAllChanges);
    Y(function() {
        var r = c();
        if (r) {
            var a = r.responseStart;
            if (a <= 0 || a > performance.now()) return;
            t.value = Math.max(a - u(), 0), t.entries = [
                r
            ], i(!0), o(function() {
                t = f("TTFB", 0), (i = d(e, t, X, n.reportAllChanges))(!0);
            });
        }
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ap0Kh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SplitFactory", ()=>(0, _splitFactory.SplitFactory));
parcelHelpers.export(exports, "InLocalStorage", ()=>(0, _index.InLocalStorage));
parcelHelpers.export(exports, "GoogleAnalyticsToSplit", ()=>(0, _googleAnalyticsToSplit.GoogleAnalyticsToSplit));
parcelHelpers.export(exports, "SplitToGoogleAnalytics", ()=>(0, _splitToGoogleAnalytics.SplitToGoogleAnalytics));
parcelHelpers.export(exports, "ErrorLogger", ()=>(0, _errorLogger.ErrorLogger));
parcelHelpers.export(exports, "WarnLogger", ()=>(0, _warnLogger.WarnLogger));
parcelHelpers.export(exports, "InfoLogger", ()=>(0, _infoLogger.InfoLogger));
parcelHelpers.export(exports, "DebugLogger", ()=>(0, _debugLogger.DebugLogger));
parcelHelpers.export(exports, "PluggableStorage", ()=>(0, _pluggable.PluggableStorage));
var _splitFactory = require("./splitFactory");
var _index = require("@splitsoftware/splitio-commons/esm/storages/inLocalStorage/index");
var _googleAnalyticsToSplit = require("@splitsoftware/splitio-commons/esm/integrations/ga/GoogleAnalyticsToSplit");
var _splitToGoogleAnalytics = require("@splitsoftware/splitio-commons/esm/integrations/ga/SplitToGoogleAnalytics");
var _errorLogger = require("@splitsoftware/splitio-commons/esm/logger/browser/ErrorLogger");
var _warnLogger = require("@splitsoftware/splitio-commons/esm/logger/browser/WarnLogger");
var _infoLogger = require("@splitsoftware/splitio-commons/esm/logger/browser/InfoLogger");
var _debugLogger = require("@splitsoftware/splitio-commons/esm/logger/browser/DebugLogger");
var _pluggable = require("@splitsoftware/splitio-commons/esm/storages/pluggable");

},{"./splitFactory":"1p0xC","@splitsoftware/splitio-commons/esm/storages/inLocalStorage/index":false,"@splitsoftware/splitio-commons/esm/integrations/ga/GoogleAnalyticsToSplit":false,"@splitsoftware/splitio-commons/esm/integrations/ga/SplitToGoogleAnalytics":false,"@splitsoftware/splitio-commons/esm/logger/browser/ErrorLogger":false,"@splitsoftware/splitio-commons/esm/logger/browser/WarnLogger":false,"@splitsoftware/splitio-commons/esm/logger/browser/InfoLogger":false,"@splitsoftware/splitio-commons/esm/logger/browser/DebugLogger":false,"@splitsoftware/splitio-commons/esm/storages/pluggable":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1p0xC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * SplitFactory with pluggable modules for Browser.
 * Includes localhost mode and fetch polyfill out-of-the-box.
 *
 * @param config configuration object used to instantiate the SDK
 * @param __updateModules optional function that lets redefine internal SDK modules. Use with
 * caution since, unlike `config`, this param is not validated neither considered part of the public API.
 * @throws Will throw an error if the provided config is invalid.
 */ parcelHelpers.export(exports, "SplitFactory", ()=>SplitFactory);
var _full = require("../settings/full");
var _getModules = require("../platform/getModules");
var _index = require("@splitsoftware/splitio-commons/esm/sdkFactory/index");
var _getFetchFull = require("../platform/getFetchFull");
var _getEventSource = require("../platform/getEventSource");
var _minEvents = require("@splitsoftware/splitio-commons/esm/utils/MinEvents");
var _browser = require("@splitsoftware/splitio-commons/esm/utils/timeTracker/now/browser");
var platform = {
    getFetch: (0, _getFetchFull.getFetch),
    getEventSource: (0, _getEventSource.getEventSource),
    EventEmitter: (0, _minEvents.EventEmitter),
    now: (0, _browser.now)
};
function SplitFactory(config, __updateModules) {
    var settings = (0, _full.settingsFactory)(config);
    var modules = (0, _getModules.getModules)(settings, platform);
    if (__updateModules) __updateModules(modules);
    return (0, _index.sdkFactory)(modules);
}

},{"../settings/full":"6KdR8","../platform/getModules":"emPwB","@splitsoftware/splitio-commons/esm/sdkFactory/index":"8g6lS","../platform/getFetchFull":"1de2R","../platform/getEventSource":"fnui1","@splitsoftware/splitio-commons/esm/utils/MinEvents":"fsH08","@splitsoftware/splitio-commons/esm/utils/timeTracker/now/browser":"jicwB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KdR8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "settingsFactory", ()=>settingsFactory);
var _index = require("@splitsoftware/splitio-commons/esm/utils/settingsValidation/index");
var _defaults = require("./defaults");
var _runtime = require("@splitsoftware/splitio-commons/esm/utils/settingsValidation/runtime");
var _storageCS = require("@splitsoftware/splitio-commons/esm/utils/settingsValidation/storage/storageCS");
var _pluggable = require("@splitsoftware/splitio-commons/esm/utils/settingsValidation/integrations/pluggable");
var _pluggableLogger = require("@splitsoftware/splitio-commons/esm/utils/settingsValidation/logger/pluggableLogger");
var _builtin = require("@splitsoftware/splitio-commons/esm/utils/settingsValidation/localhost/builtin");
var _consent = require("@splitsoftware/splitio-commons/esm/utils/settingsValidation/consent");
var params = {
    defaults: (0, _defaults.defaults),
    acceptKey: true,
    runtime: (0, _runtime.validateRuntime),
    storage: (0, _storageCS.validateStorageCS),
    integrations: (0, _pluggable.validatePluggableIntegrations),
    logger: (0, _pluggableLogger.validateLogger),
    localhost: (0, _builtin.validateLocalhostWithDefault),
    consent: (0, _consent.validateConsent)
};
function settingsFactory(config) {
    return (0, _index.settingsValidation)(config, params);
}

},{"@splitsoftware/splitio-commons/esm/utils/settingsValidation/index":"ky7iW","./defaults":"fGKZZ","@splitsoftware/splitio-commons/esm/utils/settingsValidation/runtime":"kcxw2","@splitsoftware/splitio-commons/esm/utils/settingsValidation/storage/storageCS":"ddNwl","@splitsoftware/splitio-commons/esm/utils/settingsValidation/integrations/pluggable":"5eQKe","@splitsoftware/splitio-commons/esm/utils/settingsValidation/logger/pluggableLogger":"3mpIm","@splitsoftware/splitio-commons/esm/utils/settingsValidation/localhost/builtin":"gpvsj","@splitsoftware/splitio-commons/esm/utils/settingsValidation/consent":"fZaP8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ky7iW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "base", ()=>base);
/**
 * Validates the given config and use it to build a settings object.
 * NOTE: it doesn't validate the SDK Key. Call `validateApiKey` or `validateAndTrackApiKey` for that after settings validation.
 *
 * @param config user defined configuration
 * @param validationParams defaults and fields validators used to validate and creates a settings object from a given config
 */ parcelHelpers.export(exports, "settingsValidation", ()=>settingsValidation);
var _lang = require("../lang");
var _mode = require("./mode");
var _splitFilters = require("./splitFilters");
var _constants = require("../constants");
var _impressionsMode = require("./impressionsMode");
var _key = require("../inputValidation/key");
var _trafficType = require("../inputValidation/trafficType");
var _constants1 = require("../../logger/constants");
var base = {
    // Define which kind of object you want to retrieve from SplitFactory
    mode: (0, _constants.STANDALONE_MODE),
    core: {
        // API token (tight to an environment)
        authorizationKey: undefined,
        // key used in your system (only required for browser version)
        key: undefined,
        // traffic type for the given key (only used on browser version)
        trafficType: undefined,
        // toggle impressions tracking of labels
        labelsEnabled: true,
        // toggle sendind (true) or not sending (false) IP and Host Name with impressions, events, and telemetries requests (only used on nodejs version)
        IPAddressesEnabled: undefined
    },
    scheduler: {
        // fetch feature updates each 60 sec
        featuresRefreshRate: 60,
        // fetch segments updates each 60 sec
        segmentsRefreshRate: 60,
        // publish telemetry stats each 3600 secs (1 hour)
        telemetryRefreshRate: 3600,
        // publish evaluations each 300 sec (default value for OPTIMIZED impressions mode)
        impressionsRefreshRate: 300,
        // fetch offline changes each 15 sec
        offlineRefreshRate: 15,
        // publish events every 60 seconds after the first flush
        eventsPushRate: 60,
        // how many events will be queued before flushing
        eventsQueueSize: 500,
        // how many impressions will be queued before flushing
        impressionsQueueSize: 30000,
        // backoff base seconds to wait before re attempting to connect to push notifications
        pushRetryBackoffBase: 1
    },
    urls: {
        // CDN having all the information for your environment
        sdk: "https://sdk.split.io/api",
        // SDK event and impression endpoints
        events: "https://events.split.io/api",
        // SDK Auth Server
        auth: "https://auth.split.io/api",
        // Streaming Server
        streaming: "https://streaming.split.io",
        // Telemetry Server
        telemetry: "https://telemetry.split.io/api"
    },
    // Defines which kind of storage we should instanciate.
    storage: undefined,
    // Defines if the logs are enabled, SDK wide.
    debug: undefined,
    // Defines the impression listener, but will only be used on NodeJS.
    impressionListener: undefined,
    // Instance version.
    version: undefined,
    // List of integrations.
    integrations: undefined,
    // toggle using (true) or not using (false) Server-Side Events for synchronizing storage
    streamingEnabled: true,
    sync: {
        splitFilters: undefined,
        // impressions collection mode
        impressionsMode: (0, _constants.OPTIMIZED),
        localhostMode: undefined,
        enabled: true
    },
    // Logger
    log: undefined
};
function fromSecondsToMillis(n) {
    return Math.round(n * 1000);
}
function settingsValidation(config, validationParams) {
    var defaults = validationParams.defaults, runtime = validationParams.runtime, storage = validationParams.storage, integrations = validationParams.integrations, logger = validationParams.logger, localhost = validationParams.localhost, consent = validationParams.consent;
    // creates a settings object merging base, defaults and config objects.
    var withDefaults = (0, _lang.merge)({}, base, defaults, config);
    // ensure a valid logger.
    // First thing to validate, since other validators might use the logger.
    var log = logger(withDefaults); // @ts-ignore, modify readonly prop
    withDefaults.log = log;
    // ensure a valid impressionsMode
    withDefaults.sync.impressionsMode = (0, _impressionsMode.validImpressionsMode)(log, withDefaults.sync.impressionsMode);
    function validateMinValue(paramName, actualValue, minValue) {
        if (actualValue >= minValue) return actualValue;
        // actualValue is not a number or is lower than minValue
        log.error((0, _constants1.ERROR_MIN_CONFIG_PARAM), [
            paramName,
            minValue
        ]);
        return minValue;
    }
    // Scheduler periods
    var scheduler = withDefaults.scheduler, startup = withDefaults.startup;
    scheduler.featuresRefreshRate = fromSecondsToMillis(scheduler.featuresRefreshRate);
    scheduler.segmentsRefreshRate = fromSecondsToMillis(scheduler.segmentsRefreshRate);
    scheduler.offlineRefreshRate = fromSecondsToMillis(scheduler.offlineRefreshRate);
    scheduler.eventsPushRate = fromSecondsToMillis(scheduler.eventsPushRate);
    scheduler.telemetryRefreshRate = fromSecondsToMillis(validateMinValue("telemetryRefreshRate", scheduler.telemetryRefreshRate, 60));
    // Default impressionsRefreshRate for DEBUG mode is 60 secs
    if ((0, _lang.get)(config, "scheduler.impressionsRefreshRate") === undefined && withDefaults.sync.impressionsMode === (0, _constants.DEBUG)) scheduler.impressionsRefreshRate = 60;
    scheduler.impressionsRefreshRate = fromSecondsToMillis(scheduler.impressionsRefreshRate);
    // Log deprecation for old telemetry param
    if (scheduler.metricsRefreshRate) log.warn("`metricsRefreshRate` will be deprecated soon. For configuring telemetry rates, update `telemetryRefreshRate` value in configs");
    // Startup periods
    startup.requestTimeoutBeforeReady = fromSecondsToMillis(startup.requestTimeoutBeforeReady);
    startup.readyTimeout = fromSecondsToMillis(startup.readyTimeout);
    startup.eventsFirstPushWindow = fromSecondsToMillis(startup.eventsFirstPushWindow);
    // ensure a valid SDK mode
    // @ts-ignore, modify readonly prop
    withDefaults.mode = (0, _mode.validateMode)(withDefaults.core.authorizationKey, withDefaults.mode);
    // ensure a valid Storage based on mode defined.
    // @ts-ignore, modify readonly prop
    if (storage) withDefaults.storage = storage(withDefaults);
    // Validate key and TT (for client-side)
    var maybeKey = withDefaults.core.key;
    if (validationParams.acceptKey) {
        // Although `key` is required in client-side, it can be omitted in LOCALHOST mode. In that case, the value `localhost_key` is used.
        if (withDefaults.mode === (0, _constants.LOCALHOST_MODE) && maybeKey === undefined) withDefaults.core.key = "localhost_key";
        else // Keeping same behaviour than JS SDK: if settings key or TT are invalid,
        // `false` value is used as bound key/TT of the default client, which leads to some issues.
        // @ts-ignore, @TODO handle invalid keys as a non-recoverable error?
        withDefaults.core.key = (0, _key.validateKey)(log, maybeKey, "Client instantiation");
        if (validationParams.acceptTT) {
            var maybeTT = withDefaults.core.trafficType;
            if (maybeTT !== undefined) withDefaults.core.trafficType = (0, _trafficType.validateTrafficType)(log, maybeTT, "Client instantiation");
        }
    } else {
        // On server-side, key is undefined and used to distinguish from client-side
        if (maybeKey !== undefined) log.warn("Provided `key` is ignored in server-side SDK."); // @ts-ignore
        withDefaults.core.key = undefined;
    }
    // Current ip/hostname information
    // @ts-ignore, modify readonly prop
    withDefaults.runtime = runtime(withDefaults);
    // ensure a valid list of integrations.
    // `integrations` returns an array of valid integration items.
    // @ts-ignore, modify readonly prop
    if (integrations) withDefaults.integrations = integrations(withDefaults);
    if (localhost) withDefaults.sync.localhostMode = localhost(withDefaults);
    // validate push options
    if (withDefaults.streamingEnabled !== false) {
        withDefaults.streamingEnabled = true;
        // Backoff bases.
        // We are not checking if bases are positive numbers. Thus, we might be reauthenticating immediately (`setTimeout` with NaN or negative number)
        scheduler.pushRetryBackoffBase = fromSecondsToMillis(scheduler.pushRetryBackoffBase);
    }
    // validate sync enabled
    if (withDefaults.sync.enabled !== false) withDefaults.sync.enabled = true;
    // validate the `splitFilters` settings and parse splits query
    var splitFiltersValidation = (0, _splitFilters.validateSplitFilters)(log, withDefaults.sync.splitFilters, withDefaults.mode);
    withDefaults.sync.splitFilters = splitFiltersValidation.validFilters;
    withDefaults.sync.__splitFiltersValidation = splitFiltersValidation;
    // ensure a valid user consent value
    // @ts-ignore, modify readonly prop
    withDefaults.userConsent = consent(withDefaults);
    return withDefaults;
}

},{"../lang":"jowD0","./mode":"5sFpT","./splitFilters":"9DKYf","../constants":"bdnhi","./impressionsMode":"hdd0m","../inputValidation/key":"2ZrIH","../inputValidation/trafficType":"7rtVF","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jowD0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Checks if the target string ends with the sub string.
 */ parcelHelpers.export(exports, "endsWith", ()=>endsWith);
/**
 * Loops through a source collection (an object or an array) running iteratee
 * against each element. It returns the first element for which iteratee returned
 * a truthy value and stops the loop.
 * Iteratee receives three arguments (element, key/index, collection)
 */ parcelHelpers.export(exports, "find", ()=>find);
/**
 * Evaluates iteratee for each element of the source array. Returns the index of the first element
 * for which iteratee returns truthy. If no element is found or there's an issue with the params it returns -1.
 */ parcelHelpers.export(exports, "findIndex", ()=>findIndex);
/**
 * Executes iteratee for given obj own props.
 */ parcelHelpers.export(exports, "forOwn", ()=>forOwn);
/**
 * Safely retrieve the specified prop from obj. If we can't retrieve
 * that property value, we return the default value.
 */ parcelHelpers.export(exports, "get", ()=>get);
/**
 * Parses an array into a map of different arrays, grouping by the specified prop value.
 */ parcelHelpers.export(exports, "groupBy", ()=>groupBy);
/**
 * Checks if a given value is a boolean.
 */ parcelHelpers.export(exports, "isBoolean", ()=>isBoolean);
/**
 * Checks if a given value is a finite value of number type or Number object.
 * Unlike `Number.isFinite`, it also tests Number object instances.
 * Unlike global `isFinite`, it returns false if the value is not a number or Number object instance.
 */ parcelHelpers.export(exports, "isFiniteNumber", ()=>isFiniteNumber);
/**
 * Checks if a given value is an integer value of number type or Number object.
 * Unlike `Number.isInteger`, it also tests Number object instances.
 */ parcelHelpers.export(exports, "isIntegerNumber", ()=>isIntegerNumber);
/**
 * Checks if a given value is a NaN value of number type or Number object.
 * Unlike `Number.isNaN`, it also tests Number object instances.
 * Unlike global `isNan`, it returns false if the value is not a number or Number object instance.
 */ parcelHelpers.export(exports, "isNaNNumber", ()=>isNaNNumber);
/**
 * Validates if a value is an object created by the Object constructor (plain object).
 * It checks `constructor.name` to avoid false negatives when validating values on a separate VM context, which has its own global built-ins.
 */ parcelHelpers.export(exports, "isObject", ()=>isObject);
/**
 * Checks if a given value is a string.
 */ parcelHelpers.export(exports, "isString", ()=>isString);
/**
 * String sanitizer. Returns the provided value converted to uppercase if it is a string.
 */ parcelHelpers.export(exports, "stringToUpperCase", ()=>stringToUpperCase);
/**
 * Deep copy version of Object.assign using recursion.
 * There are some assumptions here. It's for internal use and we don't need verbose errors
 * or to ensure the data types or whatever. Parameters should always be correct (at least have a target and a source, of type object).
 */ parcelHelpers.export(exports, "merge", ()=>merge);
/**
 * Checks if the target string starts with the sub string.
 */ parcelHelpers.export(exports, "startsWith", ()=>startsWith);
/**
 * Transforms a value into a number.
 * Note: We're not expecting anything fancy here. If we are at some point, add more type checks.
 */ parcelHelpers.export(exports, "toNumber", ()=>toNumber);
/**
 * Transforms a value into it's string representation.
 */ parcelHelpers.export(exports, "toString", ()=>toString);
/**
 * Removes duplicate items on an array of strings.
 */ parcelHelpers.export(exports, "uniq", ()=>uniq);
/**
 * Removes duplicate items on an array of objects using an optional `stringify` function as equality criteria.
 * It uses JSON.stringify as default criteria.
 */ parcelHelpers.export(exports, "uniqAsStrings", ()=>uniqAsStrings);
/**
 * Returns a number to be used as ID, which will be unique.
 */ parcelHelpers.export(exports, "uniqueId", ()=>uniqueId);
var _tslib = require("tslib");
function endsWith(target, sub, caseInsensitive) {
    if (caseInsensitive === void 0) caseInsensitive = false;
    if (!(isString(target) && isString(sub))) return false;
    if (caseInsensitive) {
        target = target.toLowerCase();
        sub = sub.toLowerCase();
    }
    return target.slice(target.length - sub.length) === sub;
}
function find(source, iteratee) {
    var res;
    if (isObject(source)) {
        var keys = Object.keys(source);
        for(var i = 0; i < keys.length && !res; i++){
            var key = keys[i];
            var iterateeResult = iteratee(source[key], key, source);
            if (iterateeResult) res = source[key];
        }
    } else if (Array.isArray(source)) for(var i = 0; i < source.length && !res; i++){
        var iterateeResult = iteratee(source[i], i, source);
        if (iterateeResult) res = source[i];
    }
    return res;
}
function findIndex(source, iteratee) {
    if (Array.isArray(source) && typeof iteratee === "function") for(var i = 0; i < source.length; i++){
        if (iteratee(source[i], i, source) === true) return i;
    }
    return -1;
}
function forOwn(obj, iteratee) {
    var keys = Object.keys(obj);
    keys.forEach(function(key) {
        return iteratee(obj[key], key, obj);
    });
    return obj;
}
function get(obj, prop, val) {
    var res = val;
    try {
        var pathPieces = prop.split(".");
        var partial_1 = obj;
        pathPieces.forEach(function(pathPiece) {
            return partial_1 = partial_1[pathPiece];
        });
        if (typeof partial_1 !== "undefined") res = partial_1;
    } catch (e) {
    // noop
    }
    return res;
}
function groupBy(source, prop) {
    var map = {};
    if (Array.isArray(source) && isString(prop)) for(var i = 0; i < source.length; i++){
        var key = source[i][prop];
        // Skip the element if the key is not a string.
        if (isString(key)) {
            if (!map[key]) map[key] = [];
            map[key].push(source[i]);
        }
    }
    return map;
}
function isBoolean(val) {
    return val === true || val === false;
}
function isFiniteNumber(val) {
    if (val instanceof Number) val = val.valueOf();
    // @TODO remove `isFinite` once `Number.isFinite` is fully supported by targets
    // eslint-disable-next-line compat/compat
    if (typeof val === "number") return Number.isFinite ? Number.isFinite(val) : isFinite(val);
    return false;
}
function isIntegerNumber(val) {
    if (val instanceof Number) val = val.valueOf();
    // eslint-disable-next-line compat/compat
    if (typeof val === "number") return Number.isInteger ? Number.isInteger(val) : isFinite(val) && Math.floor(val) === val;
    return false;
}
function isNaNNumber(val) {
    if (val instanceof Number) val = val.valueOf();
    // @TODO replace with `Number.isNaN` once it is fully supported by targets
    return val !== val;
}
function isObject(obj) {
    return obj !== null && typeof obj === "object" && (obj.constructor === Object || obj.constructor != null && obj.constructor.name === "Object");
}
function isString(val) {
    return typeof val === "string" || val instanceof String;
}
function stringToUpperCase(val) {
    return isString(val) ? val.toUpperCase() : val;
}
function merge(target, source) {
    var rest = [];
    for(var _i = 2; _i < arguments.length; _i++)rest[_i - 2] = arguments[_i];
    var res = target;
    isObject(source) && Object.keys(source).forEach(function(key) {
        var val = source[key];
        if (isObject(val)) {
            if (res[key] && isObject(res[key])) val = merge({}, res[key], val);
            else val = merge({}, val);
        }
        // We skip undefined values.
        if (val !== undefined) res[key] = val;
    });
    if (rest && rest.length) {
        var nextSource = rest.splice(0, 1)[0];
        res = merge.apply(void 0, (0, _tslib.__spreadArray)([
            res,
            nextSource
        ], rest, false));
    }
    return res;
}
function startsWith(target, sub) {
    if (!(isString(target) && isString(sub))) return false;
    return target.slice(0, sub.length) === sub;
}
function toNumber(val) {
    if (typeof val === "number") return val;
    if (isObject(val) && typeof val.valueOf === "function") {
        var valOf = val.valueOf();
        val = isObject(valOf) ? valOf + "" : valOf;
    }
    if (typeof val !== "string") return val === 0 ? val : +val;
    // Remove trailing whitespaces.
    val = val.replace(/^\s+|\s+$/g, "");
    return +val;
}
function toString(val) {
    if (val == null) return "";
    if (typeof val === "string") return val;
    if (Array.isArray(val)) return val.map(function(val) {
        return isString(val) ? val : "";
    }) + "";
    var result = val + "";
    return result === "0" && 1 / val === Number.NEGATIVE_INFINITY ? "-0" : result;
}
function uniq(arr) {
    var seen = {};
    return arr.filter(function(item) {
        return Object.prototype.hasOwnProperty.call(seen, item) ? false : seen[item] = true;
    });
}
function uniqAsStrings(arr, stringify) {
    if (stringify === void 0) stringify = JSON.stringify;
    var seen = {};
    return arr.filter(function(item) {
        var itemString = stringify(item);
        return Object.prototype.hasOwnProperty.call(seen, itemString) ? false : seen[itemString] = true;
    });
}
var uniqueIdCounter = -1;
function uniqueId() {
    return uniqueIdCounter++;
}

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
parcelHelpers.export(exports, "__addDisposableResource", ()=>__addDisposableResource);
parcelHelpers.export(exports, "__disposeResources", ()=>__disposeResources);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
exports.default = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5sFpT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateMode", ()=>validateMode);
/**
 * Storage is async if mode is consumer or partial consumer
 */ parcelHelpers.export(exports, "isConsumerMode", ()=>isConsumerMode);
var _constants = require("../constants");
function validateMode(key, mode) {
    // Leaving the comparison as is, in case we change the mode name but not the setting.
    if (key === "localhost") return 0, _constants.LOCALHOST_MODE;
    if ([
        (0, _constants.STANDALONE_MODE),
        (0, _constants.PRODUCER_MODE),
        (0, _constants.CONSUMER_MODE),
        (0, _constants.CONSUMER_PARTIAL_MODE)
    ].indexOf(mode) === -1) throw Error("Invalid mode provided");
    return mode;
}
function isConsumerMode(mode) {
    return (0, _constants.CONSUMER_MODE) === mode || (0, _constants.CONSUMER_PARTIAL_MODE) === mode;
}

},{"../constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9DKYf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Validates `splitFilters` configuration object and parses it into a query string for filtering splits on `/splitChanges` fetch.
 *
 * @param {ILogger} log logger
 * @param {any} maybeSplitFilters split filters configuration param provided by the user
 * @param {string} mode settings mode
 * @returns it returns an object with the following properties:
 *  - `validFilters`: the validated `splitFilters` configuration object defined by the user.
 *  - `queryString`: the parsed split filter query. it is null if all filters are invalid or all values in filters are invalid.
 *  - `groupedFilters`: list of values grouped by filter type.
 *
 * @throws Error if the some of the grouped list of values per filter exceeds the max allowed length
 */ parcelHelpers.export(exports, "validateSplitFilters", ()=>validateSplitFilters);
parcelHelpers.export(exports, "validateFlagSets", ()=>validateFlagSets);
var _splits = require("../inputValidation/splits");
var _constants = require("../../logger/constants");
var _objectAssign = require("../lang/objectAssign");
var _lang = require("../lang");
var _mode = require("./mode");
// Split filters metadata.
// Ordered according to their precedency when forming the filter query string: `&names=<values>&prefixes=<values>`
var FILTERS_METADATA = [
    {
        type: "bySet",
        maxLength: 50,
        queryParam: "sets="
    },
    {
        type: "byName",
        maxLength: 400,
        queryParam: "names="
    },
    {
        type: "byPrefix",
        maxLength: 50,
        queryParam: "prefixes="
    }
];
var VALID_FLAGSET_REGEX = /^[a-z0-9][_a-z0-9]{0,49}$/;
var CAPITAL_LETTERS_REGEX = /[A-Z]/;
/**
 * Validates that the given value is a valid filter type
 */ function validateFilterType(maybeFilterType) {
    return FILTERS_METADATA.some(function(filterMetadata) {
        return filterMetadata.type === maybeFilterType;
    });
}
/**
 * Validate, deduplicate and sort a given list of filter values.
 *
 * @param {string} type filter type string used for log messages
 * @param {string[]} values list of values to validate, deduplicate and sort
 * @param {number} maxLength
 * @returns list of valid, unique and alphabetically sorted non-empty strings. The list is empty if `values` param is not a non-empty array or all its values are invalid.
 *
 * @throws Error if the sanitized list exceeds the length indicated by `maxLength`
 */ function validateSplitFilter(log, type, values, maxLength) {
    // validate and remove invalid and duplicated values
    var result = (0, _splits.validateSplits)(log, values, (0, _constants.LOG_PREFIX_SETTINGS), type + " filter", type + " filter value");
    if (result) {
        if (type === "bySet") result = sanitizeFlagSets(log, result, (0, _constants.LOG_PREFIX_SETTINGS));
        // check max length
        if (result.length > maxLength) throw new Error(maxLength + " unique values can be specified at most for '" + type + "' filter. You passed " + result.length + ". Please consider reducing the amount or using other filter.");
        // sort values
        result.sort();
    }
    return result || []; // returns empty array if `result` is `false`
}
/**
 * Returns a string representing the URL encoded query component of /splitChanges URL.
 *
 * The possible formats of the query string are:
 *  - null: if all filters are empty
 *  - '&names=<comma-separated-values>': if only `byPrefix` filter is undefined
 *  - '&prefixes=<comma-separated-values>': if only `byName` filter is undefined
 *  - '&names=<comma-separated-values>&prefixes=<comma-separated-values>': if no one is undefined
 *
 * @param {Object} groupedFilters object of filters. Each filter must be a list of valid, unique and ordered string values.
 * @returns null or string with the `split filter query` component of the URL.
 */ function queryStringBuilder(groupedFilters) {
    var queryParams = [];
    FILTERS_METADATA.forEach(function(_a) {
        var type = _a.type, queryParam = _a.queryParam;
        var filter = groupedFilters[type];
        if (filter.length > 0) queryParams.push(queryParam + filter.map(function(value) {
            return encodeURIComponent(value);
        }).join(","));
    });
    return queryParams.length > 0 ? "&" + queryParams.join("&") : null;
}
/**
 * Sanitizes set names list taking into account:
 *  - It should be lowercase
 *  - Must adhere the following regular expression /^[a-z0-9][_a-z0-9]{0,49}$/ that means
 *   - must start with a letter or number
 *   - Be in lowercase
 *   - Be alphanumeric
 *   - have a max length of 50 characters
 *
 * @param {ILogger} log
 * @param {string[]} flagSets
 * @param {string} method
 * @returns sanitized list of set names
 */ function sanitizeFlagSets(log, flagSets, method) {
    var sanitizedSets = flagSets.map(function(flagSet) {
        if (CAPITAL_LETTERS_REGEX.test(flagSet)) {
            log.warn((0, _constants.WARN_LOWERCASE_FLAGSET), [
                method,
                flagSet
            ]);
            flagSet = flagSet.toLowerCase();
        }
        return flagSet;
    }).filter(function(flagSet) {
        if (!VALID_FLAGSET_REGEX.test(flagSet)) {
            log.warn((0, _constants.WARN_INVALID_FLAGSET), [
                method,
                flagSet,
                VALID_FLAGSET_REGEX,
                flagSet
            ]);
            return false;
        }
        if (typeof flagSet !== "string") return false;
        return true;
    });
    return (0, _lang.uniq)(sanitizedSets);
}
function configuredFilter(validFilters, filterType) {
    return (0, _lang.find)(validFilters, function(filter) {
        return filter.type === filterType && filter.values.length > 0;
    });
}
function validateSplitFilters(log, maybeSplitFilters, mode) {
    // Validation result schema
    var res = {
        validFilters: [],
        queryString: null,
        groupedFilters: {
            bySet: [],
            byName: [],
            byPrefix: []
        }
    };
    // do nothing if `splitFilters` param is not a non-empty array or mode is not STANDALONE
    if (!maybeSplitFilters) return res;
    // Warn depending on the mode
    if ((0, _mode.isConsumerMode)(mode)) {
        log.warn((0, _constants.WARN_SPLITS_FILTER_IGNORED));
        return res;
    }
    // Check collection type
    if (!Array.isArray(maybeSplitFilters) || maybeSplitFilters.length === 0) {
        log.warn((0, _constants.WARN_SPLITS_FILTER_EMPTY));
        return res;
    }
    // Validate filters and group their values by filter type inside `groupedFilters` object
    res.validFilters = maybeSplitFilters.filter(function(filter, index) {
        if (filter && validateFilterType(filter.type) && Array.isArray(filter.values)) {
            res.groupedFilters[filter.type] = res.groupedFilters[filter.type].concat(filter.values);
            return true;
        } else log.warn((0, _constants.WARN_SPLITS_FILTER_INVALID), [
            index
        ]);
        return false;
    });
    // By filter type, remove invalid and duplicated values and order them
    FILTERS_METADATA.forEach(function(_a) {
        var type = _a.type, maxLength = _a.maxLength;
        if (res.groupedFilters[type].length > 0) res.groupedFilters[type] = validateSplitFilter(log, type, res.groupedFilters[type], maxLength);
    });
    var setFilter = configuredFilter(res.validFilters, "bySet");
    // Clean all filters if set filter is present
    if (setFilter) {
        if (configuredFilter(res.validFilters, "byName") || configuredFilter(res.validFilters, "byPrefix")) log.error((0, _constants.ERROR_SETS_FILTER_EXCLUSIVE));
        (0, _objectAssign.objectAssign)(res.groupedFilters, {
            byName: [],
            byPrefix: []
        });
    }
    // build query string
    res.queryString = queryStringBuilder(res.groupedFilters);
    log.debug((0, _constants.SETTINGS_SPLITS_FILTER), [
        res.queryString
    ]);
    return res;
}
function validateFlagSets(log, method, flagSets, flagSetsInConfig) {
    var sets = (0, _splits.validateSplits)(log, flagSets, method, "flag sets", "flag set");
    var toReturn = sets ? sanitizeFlagSets(log, sets, method) : [];
    if (flagSetsInConfig.length > 0) toReturn = toReturn.filter(function(flagSet) {
        if (flagSetsInConfig.indexOf(flagSet) > -1) return true;
        log.warn((0, _constants.WARN_FLAGSET_NOT_CONFIGURED), [
            method,
            flagSet
        ]);
        return false;
    });
    return toReturn;
}

},{"../inputValidation/splits":"DWwqV","../../logger/constants":"hiXko","../lang/objectAssign":"eGIPQ","../lang":"jowD0","./mode":"5sFpT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"DWwqV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateSplits", ()=>validateSplits);
var _constants = require("../../logger/constants");
var _lang = require("../lang");
var _split = require("./split");
function validateSplits(log, maybeSplits, method, listName, item) {
    if (listName === void 0) listName = "feature flag names";
    if (item === void 0) item = "feature flag name";
    if (Array.isArray(maybeSplits) && maybeSplits.length > 0) {
        var validatedArray_1 = [];
        // Remove invalid values
        maybeSplits.forEach(function(maybeSplit) {
            var splitName = (0, _split.validateSplit)(log, maybeSplit, method, item);
            if (splitName) validatedArray_1.push(splitName);
        });
        // Strip off duplicated values if we have valid split names then return
        if (validatedArray_1.length) return (0, _lang.uniq)(validatedArray_1);
    }
    log.error((0, _constants.ERROR_EMPTY_ARRAY), [
        method,
        listName
    ]);
    return false;
}

},{"../../logger/constants":"hiXko","../lang":"jowD0","./split":"21OPV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hiXko":[function(require,module,exports) {
/**
 * Message codes used to trim string log messages from commons and client-side API modules,
 * in order to reduce the minimal SDK size for Browser and eventually other client-side environments.
 *
 * Modules related to the server-side API (e.g., segmentsSyncTask), platform-specific components (e.g., signal listeners)
 * and pluggable components (e.g., pluggable integrations & storages) can use the logger with string literals.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ENGINE_COMBINER_AND", ()=>ENGINE_COMBINER_AND);
parcelHelpers.export(exports, "ENGINE_COMBINER_IFELSEIF", ()=>ENGINE_COMBINER_IFELSEIF);
parcelHelpers.export(exports, "ENGINE_COMBINER_IFELSEIF_NO_TREATMENT", ()=>ENGINE_COMBINER_IFELSEIF_NO_TREATMENT);
parcelHelpers.export(exports, "ENGINE_BUCKET", ()=>ENGINE_BUCKET);
parcelHelpers.export(exports, "ENGINE_MATCHER_ALL", ()=>ENGINE_MATCHER_ALL);
parcelHelpers.export(exports, "ENGINE_MATCHER_BETWEEN", ()=>ENGINE_MATCHER_BETWEEN);
parcelHelpers.export(exports, "ENGINE_MATCHER_BOOLEAN", ()=>ENGINE_MATCHER_BOOLEAN);
parcelHelpers.export(exports, "ENGINE_MATCHER_CONTAINS_ALL", ()=>ENGINE_MATCHER_CONTAINS_ALL);
parcelHelpers.export(exports, "ENGINE_MATCHER_CONTAINS_ANY", ()=>ENGINE_MATCHER_CONTAINS_ANY);
parcelHelpers.export(exports, "ENGINE_MATCHER_CONTAINS_STRING", ()=>ENGINE_MATCHER_CONTAINS_STRING);
parcelHelpers.export(exports, "ENGINE_MATCHER_DEPENDENCY", ()=>ENGINE_MATCHER_DEPENDENCY);
parcelHelpers.export(exports, "ENGINE_MATCHER_DEPENDENCY_PRE", ()=>ENGINE_MATCHER_DEPENDENCY_PRE);
parcelHelpers.export(exports, "ENGINE_MATCHER_EQUAL", ()=>ENGINE_MATCHER_EQUAL);
parcelHelpers.export(exports, "ENGINE_MATCHER_EQUAL_TO_SET", ()=>ENGINE_MATCHER_EQUAL_TO_SET);
parcelHelpers.export(exports, "ENGINE_MATCHER_ENDS_WITH", ()=>ENGINE_MATCHER_ENDS_WITH);
parcelHelpers.export(exports, "ENGINE_MATCHER_GREATER", ()=>ENGINE_MATCHER_GREATER);
parcelHelpers.export(exports, "ENGINE_MATCHER_LESS", ()=>ENGINE_MATCHER_LESS);
parcelHelpers.export(exports, "ENGINE_MATCHER_PART_OF", ()=>ENGINE_MATCHER_PART_OF);
parcelHelpers.export(exports, "ENGINE_MATCHER_SEGMENT", ()=>ENGINE_MATCHER_SEGMENT);
parcelHelpers.export(exports, "ENGINE_MATCHER_STRING", ()=>ENGINE_MATCHER_STRING);
parcelHelpers.export(exports, "ENGINE_MATCHER_STRING_INVALID", ()=>ENGINE_MATCHER_STRING_INVALID);
parcelHelpers.export(exports, "ENGINE_MATCHER_STARTS_WITH", ()=>ENGINE_MATCHER_STARTS_WITH);
parcelHelpers.export(exports, "ENGINE_MATCHER_WHITELIST", ()=>ENGINE_MATCHER_WHITELIST);
parcelHelpers.export(exports, "ENGINE_VALUE", ()=>ENGINE_VALUE);
parcelHelpers.export(exports, "ENGINE_SANITIZE", ()=>ENGINE_SANITIZE);
parcelHelpers.export(exports, "CLEANUP_REGISTERING", ()=>CLEANUP_REGISTERING);
parcelHelpers.export(exports, "CLEANUP_DEREGISTERING", ()=>CLEANUP_DEREGISTERING);
parcelHelpers.export(exports, "RETRIEVE_CLIENT_DEFAULT", ()=>RETRIEVE_CLIENT_DEFAULT);
parcelHelpers.export(exports, "RETRIEVE_CLIENT_EXISTING", ()=>RETRIEVE_CLIENT_EXISTING);
parcelHelpers.export(exports, "RETRIEVE_MANAGER", ()=>RETRIEVE_MANAGER);
parcelHelpers.export(exports, "SYNC_OFFLINE_DATA", ()=>SYNC_OFFLINE_DATA);
parcelHelpers.export(exports, "SYNC_SPLITS_FETCH", ()=>SYNC_SPLITS_FETCH);
parcelHelpers.export(exports, "SYNC_SPLITS_NEW", ()=>SYNC_SPLITS_NEW);
parcelHelpers.export(exports, "SYNC_SPLITS_REMOVED", ()=>SYNC_SPLITS_REMOVED);
parcelHelpers.export(exports, "SYNC_SPLITS_SEGMENTS", ()=>SYNC_SPLITS_SEGMENTS);
parcelHelpers.export(exports, "STREAMING_NEW_MESSAGE", ()=>STREAMING_NEW_MESSAGE);
parcelHelpers.export(exports, "SYNC_TASK_START", ()=>SYNC_TASK_START);
parcelHelpers.export(exports, "SYNC_TASK_EXECUTE", ()=>SYNC_TASK_EXECUTE);
parcelHelpers.export(exports, "SYNC_TASK_STOP", ()=>SYNC_TASK_STOP);
parcelHelpers.export(exports, "SETTINGS_SPLITS_FILTER", ()=>SETTINGS_SPLITS_FILTER);
parcelHelpers.export(exports, "CLIENT_READY_FROM_CACHE", ()=>CLIENT_READY_FROM_CACHE);
parcelHelpers.export(exports, "CLIENT_READY", ()=>CLIENT_READY);
parcelHelpers.export(exports, "IMPRESSION", ()=>IMPRESSION);
parcelHelpers.export(exports, "IMPRESSION_QUEUEING", ()=>IMPRESSION_QUEUEING);
parcelHelpers.export(exports, "NEW_SHARED_CLIENT", ()=>NEW_SHARED_CLIENT);
parcelHelpers.export(exports, "NEW_FACTORY", ()=>NEW_FACTORY);
parcelHelpers.export(exports, "POLLING_SMART_PAUSING", ()=>POLLING_SMART_PAUSING);
parcelHelpers.export(exports, "POLLING_START", ()=>POLLING_START);
parcelHelpers.export(exports, "POLLING_STOP", ()=>POLLING_STOP);
parcelHelpers.export(exports, "SYNC_SPLITS_FETCH_RETRY", ()=>SYNC_SPLITS_FETCH_RETRY);
parcelHelpers.export(exports, "STREAMING_REFRESH_TOKEN", ()=>STREAMING_REFRESH_TOKEN);
parcelHelpers.export(exports, "STREAMING_RECONNECT", ()=>STREAMING_RECONNECT);
parcelHelpers.export(exports, "STREAMING_CONNECTING", ()=>STREAMING_CONNECTING);
parcelHelpers.export(exports, "STREAMING_DISABLED", ()=>STREAMING_DISABLED);
parcelHelpers.export(exports, "STREAMING_DISCONNECTING", ()=>STREAMING_DISCONNECTING);
parcelHelpers.export(exports, "SUBMITTERS_PUSH_FULL_QUEUE", ()=>SUBMITTERS_PUSH_FULL_QUEUE);
parcelHelpers.export(exports, "SUBMITTERS_PUSH", ()=>SUBMITTERS_PUSH);
parcelHelpers.export(exports, "SYNC_START_POLLING", ()=>SYNC_START_POLLING);
parcelHelpers.export(exports, "SYNC_CONTINUE_POLLING", ()=>SYNC_CONTINUE_POLLING);
parcelHelpers.export(exports, "SYNC_STOP_POLLING", ()=>SYNC_STOP_POLLING);
parcelHelpers.export(exports, "EVENTS_TRACKER_SUCCESS", ()=>EVENTS_TRACKER_SUCCESS);
parcelHelpers.export(exports, "IMPRESSIONS_TRACKER_SUCCESS", ()=>IMPRESSIONS_TRACKER_SUCCESS);
parcelHelpers.export(exports, "USER_CONSENT_UPDATED", ()=>USER_CONSENT_UPDATED);
parcelHelpers.export(exports, "USER_CONSENT_NOT_UPDATED", ()=>USER_CONSENT_NOT_UPDATED);
parcelHelpers.export(exports, "USER_CONSENT_INITIAL", ()=>USER_CONSENT_INITIAL);
parcelHelpers.export(exports, "ENGINE_VALUE_INVALID", ()=>ENGINE_VALUE_INVALID);
parcelHelpers.export(exports, "ENGINE_VALUE_NO_ATTRIBUTES", ()=>ENGINE_VALUE_NO_ATTRIBUTES);
parcelHelpers.export(exports, "CLIENT_NO_LISTENER", ()=>CLIENT_NO_LISTENER);
parcelHelpers.export(exports, "CLIENT_NOT_READY", ()=>CLIENT_NOT_READY);
parcelHelpers.export(exports, "SYNC_MYSEGMENTS_FETCH_RETRY", ()=>SYNC_MYSEGMENTS_FETCH_RETRY);
parcelHelpers.export(exports, "SYNC_SPLITS_FETCH_FAILS", ()=>SYNC_SPLITS_FETCH_FAILS);
parcelHelpers.export(exports, "STREAMING_PARSING_ERROR_FAILS", ()=>STREAMING_PARSING_ERROR_FAILS);
parcelHelpers.export(exports, "STREAMING_PARSING_MESSAGE_FAILS", ()=>STREAMING_PARSING_MESSAGE_FAILS);
parcelHelpers.export(exports, "STREAMING_FALLBACK", ()=>STREAMING_FALLBACK);
parcelHelpers.export(exports, "SUBMITTERS_PUSH_FAILS", ()=>SUBMITTERS_PUSH_FAILS);
parcelHelpers.export(exports, "SUBMITTERS_PUSH_RETRY", ()=>SUBMITTERS_PUSH_RETRY);
parcelHelpers.export(exports, "WARN_SETTING_NULL", ()=>WARN_SETTING_NULL);
parcelHelpers.export(exports, "WARN_TRIMMING_PROPERTIES", ()=>WARN_TRIMMING_PROPERTIES);
parcelHelpers.export(exports, "WARN_CONVERTING", ()=>WARN_CONVERTING);
parcelHelpers.export(exports, "WARN_TRIMMING", ()=>WARN_TRIMMING);
parcelHelpers.export(exports, "WARN_NOT_EXISTENT_SPLIT", ()=>WARN_NOT_EXISTENT_SPLIT);
parcelHelpers.export(exports, "WARN_LOWERCASE_TRAFFIC_TYPE", ()=>WARN_LOWERCASE_TRAFFIC_TYPE);
parcelHelpers.export(exports, "WARN_NOT_EXISTENT_TT", ()=>WARN_NOT_EXISTENT_TT);
parcelHelpers.export(exports, "WARN_INTEGRATION_INVALID", ()=>WARN_INTEGRATION_INVALID);
parcelHelpers.export(exports, "WARN_SPLITS_FILTER_IGNORED", ()=>WARN_SPLITS_FILTER_IGNORED);
parcelHelpers.export(exports, "WARN_SPLITS_FILTER_INVALID", ()=>WARN_SPLITS_FILTER_INVALID);
parcelHelpers.export(exports, "WARN_SPLITS_FILTER_EMPTY", ()=>WARN_SPLITS_FILTER_EMPTY);
parcelHelpers.export(exports, "WARN_SDK_KEY", ()=>WARN_SDK_KEY);
parcelHelpers.export(exports, "STREAMING_PARSING_MY_SEGMENTS_UPDATE_V2", ()=>STREAMING_PARSING_MY_SEGMENTS_UPDATE_V2);
parcelHelpers.export(exports, "STREAMING_PARSING_SPLIT_UPDATE", ()=>STREAMING_PARSING_SPLIT_UPDATE);
parcelHelpers.export(exports, "WARN_INVALID_FLAGSET", ()=>WARN_INVALID_FLAGSET);
parcelHelpers.export(exports, "WARN_LOWERCASE_FLAGSET", ()=>WARN_LOWERCASE_FLAGSET);
parcelHelpers.export(exports, "WARN_FLAGSET_NOT_CONFIGURED", ()=>WARN_FLAGSET_NOT_CONFIGURED);
parcelHelpers.export(exports, "WARN_FLAGSET_WITHOUT_FLAGS", ()=>WARN_FLAGSET_WITHOUT_FLAGS);
parcelHelpers.export(exports, "ERROR_ENGINE_COMBINER_IFELSEIF", ()=>ERROR_ENGINE_COMBINER_IFELSEIF);
parcelHelpers.export(exports, "ERROR_LOGLEVEL_INVALID", ()=>ERROR_LOGLEVEL_INVALID);
parcelHelpers.export(exports, "ERROR_CLIENT_LISTENER", ()=>ERROR_CLIENT_LISTENER);
parcelHelpers.export(exports, "ERROR_CLIENT_CANNOT_GET_READY", ()=>ERROR_CLIENT_CANNOT_GET_READY);
parcelHelpers.export(exports, "ERROR_SYNC_OFFLINE_LOADING", ()=>ERROR_SYNC_OFFLINE_LOADING);
parcelHelpers.export(exports, "ERROR_STREAMING_SSE", ()=>ERROR_STREAMING_SSE);
parcelHelpers.export(exports, "ERROR_STREAMING_AUTH", ()=>ERROR_STREAMING_AUTH);
parcelHelpers.export(exports, "ERROR_IMPRESSIONS_TRACKER", ()=>ERROR_IMPRESSIONS_TRACKER);
parcelHelpers.export(exports, "ERROR_IMPRESSIONS_LISTENER", ()=>ERROR_IMPRESSIONS_LISTENER);
parcelHelpers.export(exports, "ERROR_EVENTS_TRACKER", ()=>ERROR_EVENTS_TRACKER);
parcelHelpers.export(exports, "ERROR_EVENT_TYPE_FORMAT", ()=>ERROR_EVENT_TYPE_FORMAT);
parcelHelpers.export(exports, "ERROR_NOT_PLAIN_OBJECT", ()=>ERROR_NOT_PLAIN_OBJECT);
parcelHelpers.export(exports, "ERROR_SIZE_EXCEEDED", ()=>ERROR_SIZE_EXCEEDED);
parcelHelpers.export(exports, "ERROR_NOT_FINITE", ()=>ERROR_NOT_FINITE);
parcelHelpers.export(exports, "ERROR_CLIENT_DESTROYED", ()=>ERROR_CLIENT_DESTROYED);
parcelHelpers.export(exports, "ERROR_NULL", ()=>ERROR_NULL);
parcelHelpers.export(exports, "ERROR_TOO_LONG", ()=>ERROR_TOO_LONG);
parcelHelpers.export(exports, "ERROR_INVALID_KEY_OBJECT", ()=>ERROR_INVALID_KEY_OBJECT);
parcelHelpers.export(exports, "ERROR_INVALID", ()=>ERROR_INVALID);
parcelHelpers.export(exports, "ERROR_EMPTY", ()=>ERROR_EMPTY);
parcelHelpers.export(exports, "ERROR_EMPTY_ARRAY", ()=>ERROR_EMPTY_ARRAY);
parcelHelpers.export(exports, "ERROR_INVALID_CONFIG_PARAM", ()=>ERROR_INVALID_CONFIG_PARAM);
parcelHelpers.export(exports, "ERROR_HTTP", ()=>ERROR_HTTP);
parcelHelpers.export(exports, "ERROR_LOCALHOST_MODULE_REQUIRED", ()=>ERROR_LOCALHOST_MODULE_REQUIRED);
parcelHelpers.export(exports, "ERROR_STORAGE_INVALID", ()=>ERROR_STORAGE_INVALID);
parcelHelpers.export(exports, "ERROR_NOT_BOOLEAN", ()=>ERROR_NOT_BOOLEAN);
parcelHelpers.export(exports, "ERROR_MIN_CONFIG_PARAM", ()=>ERROR_MIN_CONFIG_PARAM);
parcelHelpers.export(exports, "ERROR_TOO_MANY_SETS", ()=>ERROR_TOO_MANY_SETS);
parcelHelpers.export(exports, "ERROR_SETS_FILTER_EXCLUSIVE", ()=>ERROR_SETS_FILTER_EXCLUSIVE);
parcelHelpers.export(exports, "LOG_PREFIX_SETTINGS", ()=>LOG_PREFIX_SETTINGS);
parcelHelpers.export(exports, "LOG_PREFIX_INSTANTIATION", ()=>LOG_PREFIX_INSTANTIATION);
parcelHelpers.export(exports, "LOG_PREFIX_ENGINE", ()=>LOG_PREFIX_ENGINE);
parcelHelpers.export(exports, "LOG_PREFIX_ENGINE_COMBINER", ()=>LOG_PREFIX_ENGINE_COMBINER);
parcelHelpers.export(exports, "LOG_PREFIX_ENGINE_MATCHER", ()=>LOG_PREFIX_ENGINE_MATCHER);
parcelHelpers.export(exports, "LOG_PREFIX_ENGINE_VALUE", ()=>LOG_PREFIX_ENGINE_VALUE);
parcelHelpers.export(exports, "LOG_PREFIX_SYNC", ()=>LOG_PREFIX_SYNC);
parcelHelpers.export(exports, "LOG_PREFIX_SYNC_MANAGER", ()=>LOG_PREFIX_SYNC_MANAGER);
parcelHelpers.export(exports, "LOG_PREFIX_SYNC_OFFLINE", ()=>LOG_PREFIX_SYNC_OFFLINE);
parcelHelpers.export(exports, "LOG_PREFIX_SYNC_STREAMING", ()=>LOG_PREFIX_SYNC_STREAMING);
parcelHelpers.export(exports, "LOG_PREFIX_SYNC_SPLITS", ()=>LOG_PREFIX_SYNC_SPLITS);
parcelHelpers.export(exports, "LOG_PREFIX_SYNC_SEGMENTS", ()=>LOG_PREFIX_SYNC_SEGMENTS);
parcelHelpers.export(exports, "LOG_PREFIX_SYNC_MYSEGMENTS", ()=>LOG_PREFIX_SYNC_MYSEGMENTS);
parcelHelpers.export(exports, "LOG_PREFIX_SYNC_POLLING", ()=>LOG_PREFIX_SYNC_POLLING);
parcelHelpers.export(exports, "LOG_PREFIX_SYNC_SUBMITTERS", ()=>LOG_PREFIX_SYNC_SUBMITTERS);
parcelHelpers.export(exports, "LOG_PREFIX_IMPRESSIONS_TRACKER", ()=>LOG_PREFIX_IMPRESSIONS_TRACKER);
parcelHelpers.export(exports, "LOG_PREFIX_EVENTS_TRACKER", ()=>LOG_PREFIX_EVENTS_TRACKER);
parcelHelpers.export(exports, "LOG_PREFIX_UNIQUE_KEYS_TRACKER", ()=>LOG_PREFIX_UNIQUE_KEYS_TRACKER);
parcelHelpers.export(exports, "LOG_PREFIX_CLEANUP", ()=>LOG_PREFIX_CLEANUP);
var ENGINE_COMBINER_AND = 0;
var ENGINE_COMBINER_IFELSEIF = 1;
var ENGINE_COMBINER_IFELSEIF_NO_TREATMENT = 2;
var ENGINE_BUCKET = 3;
var ENGINE_MATCHER_ALL = 4;
var ENGINE_MATCHER_BETWEEN = 5;
var ENGINE_MATCHER_BOOLEAN = 6;
var ENGINE_MATCHER_CONTAINS_ALL = 7;
var ENGINE_MATCHER_CONTAINS_ANY = 8;
var ENGINE_MATCHER_CONTAINS_STRING = 9;
var ENGINE_MATCHER_DEPENDENCY = 10;
var ENGINE_MATCHER_DEPENDENCY_PRE = 11;
var ENGINE_MATCHER_EQUAL = 12;
var ENGINE_MATCHER_EQUAL_TO_SET = 13;
var ENGINE_MATCHER_ENDS_WITH = 14;
var ENGINE_MATCHER_GREATER = 15;
var ENGINE_MATCHER_LESS = 16;
var ENGINE_MATCHER_PART_OF = 17;
var ENGINE_MATCHER_SEGMENT = 18;
var ENGINE_MATCHER_STRING = 19;
var ENGINE_MATCHER_STRING_INVALID = 20;
var ENGINE_MATCHER_STARTS_WITH = 21;
var ENGINE_MATCHER_WHITELIST = 22;
var ENGINE_VALUE = 23;
var ENGINE_SANITIZE = 24;
var CLEANUP_REGISTERING = 25;
var CLEANUP_DEREGISTERING = 26;
var RETRIEVE_CLIENT_DEFAULT = 27;
var RETRIEVE_CLIENT_EXISTING = 28;
var RETRIEVE_MANAGER = 29;
var SYNC_OFFLINE_DATA = 30;
var SYNC_SPLITS_FETCH = 31;
var SYNC_SPLITS_NEW = 32;
var SYNC_SPLITS_REMOVED = 33;
var SYNC_SPLITS_SEGMENTS = 34;
var STREAMING_NEW_MESSAGE = 35;
var SYNC_TASK_START = 36;
var SYNC_TASK_EXECUTE = 37;
var SYNC_TASK_STOP = 38;
var SETTINGS_SPLITS_FILTER = 39;
var CLIENT_READY_FROM_CACHE = 100;
var CLIENT_READY = 101;
var IMPRESSION = 102;
var IMPRESSION_QUEUEING = 103;
var NEW_SHARED_CLIENT = 104;
var NEW_FACTORY = 105;
var POLLING_SMART_PAUSING = 106;
var POLLING_START = 107;
var POLLING_STOP = 108;
var SYNC_SPLITS_FETCH_RETRY = 109;
var STREAMING_REFRESH_TOKEN = 110;
var STREAMING_RECONNECT = 111;
var STREAMING_CONNECTING = 112;
var STREAMING_DISABLED = 113;
var STREAMING_DISCONNECTING = 114;
var SUBMITTERS_PUSH_FULL_QUEUE = 115;
var SUBMITTERS_PUSH = 116;
var SYNC_START_POLLING = 117;
var SYNC_CONTINUE_POLLING = 118;
var SYNC_STOP_POLLING = 119;
var EVENTS_TRACKER_SUCCESS = 120;
var IMPRESSIONS_TRACKER_SUCCESS = 121;
var USER_CONSENT_UPDATED = 122;
var USER_CONSENT_NOT_UPDATED = 123;
var USER_CONSENT_INITIAL = 124;
var ENGINE_VALUE_INVALID = 200;
var ENGINE_VALUE_NO_ATTRIBUTES = 201;
var CLIENT_NO_LISTENER = 202;
var CLIENT_NOT_READY = 203;
var SYNC_MYSEGMENTS_FETCH_RETRY = 204;
var SYNC_SPLITS_FETCH_FAILS = 205;
var STREAMING_PARSING_ERROR_FAILS = 206;
var STREAMING_PARSING_MESSAGE_FAILS = 207;
var STREAMING_FALLBACK = 208;
var SUBMITTERS_PUSH_FAILS = 209;
var SUBMITTERS_PUSH_RETRY = 210;
var WARN_SETTING_NULL = 211;
var WARN_TRIMMING_PROPERTIES = 212;
var WARN_CONVERTING = 213;
var WARN_TRIMMING = 214;
var WARN_NOT_EXISTENT_SPLIT = 215;
var WARN_LOWERCASE_TRAFFIC_TYPE = 216;
var WARN_NOT_EXISTENT_TT = 217;
var WARN_INTEGRATION_INVALID = 218;
var WARN_SPLITS_FILTER_IGNORED = 219;
var WARN_SPLITS_FILTER_INVALID = 220;
var WARN_SPLITS_FILTER_EMPTY = 221;
var WARN_SDK_KEY = 222;
var STREAMING_PARSING_MY_SEGMENTS_UPDATE_V2 = 223;
var STREAMING_PARSING_SPLIT_UPDATE = 224;
var WARN_INVALID_FLAGSET = 225;
var WARN_LOWERCASE_FLAGSET = 226;
var WARN_FLAGSET_NOT_CONFIGURED = 227;
var WARN_FLAGSET_WITHOUT_FLAGS = 228;
var ERROR_ENGINE_COMBINER_IFELSEIF = 300;
var ERROR_LOGLEVEL_INVALID = 301;
var ERROR_CLIENT_LISTENER = 302;
var ERROR_CLIENT_CANNOT_GET_READY = 303;
var ERROR_SYNC_OFFLINE_LOADING = 304;
var ERROR_STREAMING_SSE = 305;
var ERROR_STREAMING_AUTH = 306;
var ERROR_IMPRESSIONS_TRACKER = 307;
var ERROR_IMPRESSIONS_LISTENER = 308;
var ERROR_EVENTS_TRACKER = 309;
var ERROR_EVENT_TYPE_FORMAT = 310;
var ERROR_NOT_PLAIN_OBJECT = 311;
var ERROR_SIZE_EXCEEDED = 312;
var ERROR_NOT_FINITE = 313;
var ERROR_CLIENT_DESTROYED = 314;
var ERROR_NULL = 315;
var ERROR_TOO_LONG = 316;
var ERROR_INVALID_KEY_OBJECT = 317;
var ERROR_INVALID = 318;
var ERROR_EMPTY = 319;
var ERROR_EMPTY_ARRAY = 320;
var ERROR_INVALID_CONFIG_PARAM = 321;
var ERROR_HTTP = 322;
var ERROR_LOCALHOST_MODULE_REQUIRED = 323;
var ERROR_STORAGE_INVALID = 324;
var ERROR_NOT_BOOLEAN = 325;
var ERROR_MIN_CONFIG_PARAM = 326;
var ERROR_TOO_MANY_SETS = 327;
var ERROR_SETS_FILTER_EXCLUSIVE = 328;
var LOG_PREFIX_SETTINGS = "settings";
var LOG_PREFIX_INSTANTIATION = "Factory instantiation";
var LOG_PREFIX_ENGINE = "engine";
var LOG_PREFIX_ENGINE_COMBINER = LOG_PREFIX_ENGINE + ":combiner: ";
var LOG_PREFIX_ENGINE_MATCHER = LOG_PREFIX_ENGINE + ":matcher: ";
var LOG_PREFIX_ENGINE_VALUE = LOG_PREFIX_ENGINE + ":value: ";
var LOG_PREFIX_SYNC = "sync";
var LOG_PREFIX_SYNC_MANAGER = LOG_PREFIX_SYNC + ":sync-manager: ";
var LOG_PREFIX_SYNC_OFFLINE = LOG_PREFIX_SYNC + ":offline: ";
var LOG_PREFIX_SYNC_STREAMING = LOG_PREFIX_SYNC + ":streaming: ";
var LOG_PREFIX_SYNC_SPLITS = LOG_PREFIX_SYNC + ":featureflag-changes: ";
var LOG_PREFIX_SYNC_SEGMENTS = LOG_PREFIX_SYNC + ":segment-changes: ";
var LOG_PREFIX_SYNC_MYSEGMENTS = LOG_PREFIX_SYNC + ":my-segments: ";
var LOG_PREFIX_SYNC_POLLING = LOG_PREFIX_SYNC + ":polling-manager: ";
var LOG_PREFIX_SYNC_SUBMITTERS = LOG_PREFIX_SYNC + ":submitter: ";
var LOG_PREFIX_IMPRESSIONS_TRACKER = "impressions-tracker: ";
var LOG_PREFIX_EVENTS_TRACKER = "events-tracker: ";
var LOG_PREFIX_UNIQUE_KEYS_TRACKER = "unique-keys-tracker: ";
var LOG_PREFIX_CLEANUP = "cleanup: ";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21OPV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateSplit", ()=>validateSplit);
var _constants = require("../../logger/constants");
var _lang = require("../lang");
// include BOM and nbsp
var TRIMMABLE_SPACES_REGEX = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/;
function validateSplit(log, maybeSplit, method, item) {
    if (item === void 0) item = "feature flag name";
    if (maybeSplit == undefined) log.error((0, _constants.ERROR_NULL), [
        method,
        item
    ]);
    else if (!(0, _lang.isString)(maybeSplit)) log.error((0, _constants.ERROR_INVALID), [
        method,
        item
    ]);
    else {
        if (TRIMMABLE_SPACES_REGEX.test(maybeSplit)) {
            log.warn((0, _constants.WARN_TRIMMING), [
                method,
                item,
                maybeSplit
            ]);
            maybeSplit = maybeSplit.trim();
        }
        if (maybeSplit.length > 0) return maybeSplit;
        else log.error((0, _constants.ERROR_EMPTY), [
            method,
            item
        ]);
    }
    return false;
}

},{"../../logger/constants":"hiXko","../lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hdd0m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validImpressionsMode", ()=>validImpressionsMode);
var _constants = require("../../logger/constants");
var _constants1 = require("../constants");
var _lang = require("../lang");
function validImpressionsMode(log, impressionsMode) {
    impressionsMode = (0, _lang.stringToUpperCase)(impressionsMode);
    if ([
        (0, _constants1.DEBUG),
        (0, _constants1.OPTIMIZED),
        (0, _constants1.NONE)
    ].indexOf(impressionsMode) > -1) return impressionsMode;
    log.error((0, _constants.ERROR_INVALID_CONFIG_PARAM), [
        "impressionsMode",
        [
            (0, _constants1.DEBUG),
            (0, _constants1.OPTIMIZED),
            (0, _constants1.NONE)
        ],
        (0, _constants1.OPTIMIZED)
    ]);
    return 0, _constants1.OPTIMIZED;
}

},{"../../logger/constants":"hiXko","../constants":"bdnhi","../lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ZrIH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateKey", ()=>validateKey);
var _lang = require("../lang");
var _constants = require("../../logger/constants");
var KEY_MAX_LENGTH = 250;
function validateKeyValue(log, maybeKey, method, type) {
    if (maybeKey == undefined) {
        log.error((0, _constants.ERROR_NULL), [
            method,
            type
        ]);
        return false;
    }
    if ((0, _lang.isFiniteNumber)(maybeKey)) {
        log.warn((0, _constants.WARN_CONVERTING), [
            method,
            type,
            maybeKey
        ]);
        return (0, _lang.toString)(maybeKey);
    }
    if ((0, _lang.isString)(maybeKey)) {
        // It's a string, start by trimming the value.
        maybeKey = maybeKey.trim();
        // It's aaaaaall good.
        if (maybeKey.length > 0 && maybeKey.length <= KEY_MAX_LENGTH) return maybeKey;
        if (maybeKey.length === 0) log.error((0, _constants.ERROR_EMPTY), [
            method,
            type
        ]);
        else if (maybeKey.length > KEY_MAX_LENGTH) log.error((0, _constants.ERROR_TOO_LONG), [
            method,
            type
        ]);
    } else log.error((0, _constants.ERROR_INVALID), [
        method,
        type
    ]);
    return false;
}
function validateKey(log, maybeKey, method) {
    if ((0, _lang.isObject)(maybeKey)) {
        // Validate key object
        var matchingKey = validateKeyValue(log, maybeKey.matchingKey, method, "matchingKey");
        var bucketingKey = validateKeyValue(log, maybeKey.bucketingKey, method, "bucketingKey");
        if (matchingKey && bucketingKey) return {
            matchingKey: matchingKey,
            bucketingKey: bucketingKey
        };
        log.error((0, _constants.ERROR_INVALID_KEY_OBJECT), [
            method
        ]);
        return false;
    } else return validateKeyValue(log, maybeKey, method, "key");
}

},{"../lang":"jowD0","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rtVF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateTrafficType", ()=>validateTrafficType);
var _constants = require("../../logger/constants");
var _lang = require("../lang");
var CAPITAL_LETTERS_REGEX = /[A-Z]/;
var item = "traffic_type";
function validateTrafficType(log, maybeTT, method) {
    if (maybeTT == undefined) log.error((0, _constants.ERROR_NULL), [
        method,
        item
    ]);
    else if (!(0, _lang.isString)(maybeTT)) log.error((0, _constants.ERROR_INVALID), [
        method,
        item
    ]);
    else if (maybeTT.length === 0) log.error((0, _constants.ERROR_EMPTY), [
        method,
        item
    ]);
    else {
        if (CAPITAL_LETTERS_REGEX.test(maybeTT)) {
            log.warn((0, _constants.WARN_LOWERCASE_TRAFFIC_TYPE), [
                method
            ]);
            maybeTT = maybeTT.toLowerCase();
        }
        return maybeTT;
    }
    return false;
}

},{"../../logger/constants":"hiXko","../lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fGKZZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaults", ()=>defaults);
var _index = require("@splitsoftware/splitio-commons/esm/logger/index");
var _constants = require("@splitsoftware/splitio-commons/esm/utils/constants");
var packageVersion = "0.13.1";
/**
 * In browser, the default debug level, can be set via the `localStorage.splitio_debug` item.
 * Acceptable values are: 'DEBUG', 'INFO', 'WARN', 'ERROR', 'NONE'.
 * Other acceptable values are 'on', 'enable' and 'enabled', which are equivalent to 'DEBUG'.
 * Any other string value is equivalent to disable ('NONE').
 */ var initialLogLevel;
var LS_KEY = "splitio_debug";
try {
    var initialState = localStorage.getItem(LS_KEY) || "";
    // Kept to avoid a breaking change ('on', 'enable' and 'enabled' are equivalent)
    initialLogLevel = /^(enabled?|on)/i.test(initialState) ? (0, _index.LogLevels).DEBUG : (0, _index.isLogLevelString)(initialState) ? initialState : (0, _index.LogLevels).NONE;
// eslint-disable-next-line no-empty
} catch (_a) {}
var defaults = {
    startup: {
        // Stress the request time used while starting up the SDK.
        requestTimeoutBeforeReady: 5,
        // How many quick retries we will do while starting up the SDK.
        retriesOnFailureBeforeReady: 1,
        // Maximum amount of time used before notifies me a timeout.
        readyTimeout: 10,
        // Amount of time we will wait before the first push of events.
        eventsFirstPushWindow: 10
    },
    // Consent is considered granted by default
    userConsent: (0, _constants.CONSENT_GRANTED),
    // Instance version.
    version: "browserjs-" + packageVersion,
    debug: initialLogLevel
};

},{"@splitsoftware/splitio-commons/esm/logger/index":"j3d7V","@splitsoftware/splitio-commons/esm/utils/constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3d7V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogLevels", ()=>LogLevels);
parcelHelpers.export(exports, "isLogLevelString", ()=>isLogLevelString);
// exported for testing purposes only
parcelHelpers.export(exports, "_sprintf", ()=>_sprintf);
parcelHelpers.export(exports, "Logger", ()=>Logger);
var _objectAssign = require("../utils/lang/objectAssign");
var _lang = require("../utils/lang");
var _maps = require("../utils/lang/maps");
var LogLevels = {
    DEBUG: "DEBUG",
    INFO: "INFO",
    WARN: "WARN",
    ERROR: "ERROR",
    NONE: "NONE"
};
var LogLevelIndexes = {
    DEBUG: 1,
    INFO: 2,
    WARN: 3,
    ERROR: 4,
    NONE: 5
};
function isLogLevelString(str) {
    return !!(0, _lang.find)(LogLevels, function(lvl) {
        return str === lvl;
    });
}
function _sprintf(format, args) {
    if (format === void 0) format = "";
    if (args === void 0) args = [];
    var i = 0;
    return format.replace(/%s/g, function() {
        return args[i++];
    });
}
var defaultOptions = {
    prefix: "splitio",
    logLevel: LogLevels.NONE,
    showLevel: true
};
var Logger = /** @class */ function() {
    function Logger(options, codes) {
        this.options = (0, _objectAssign.objectAssign)({}, defaultOptions, options);
        this.codes = codes || new (0, _maps._Map)();
        this.logLevel = LogLevelIndexes[this.options.logLevel];
    }
    Logger.prototype.setLogLevel = function(logLevel) {
        this.options.logLevel = logLevel;
        this.logLevel = LogLevelIndexes[logLevel];
    };
    Logger.prototype.debug = function(msg, args) {
        if (this._shouldLog(LogLevelIndexes.DEBUG)) this._log(LogLevels.DEBUG, msg, args);
    };
    Logger.prototype.info = function(msg, args) {
        if (this._shouldLog(LogLevelIndexes.INFO)) this._log(LogLevels.INFO, msg, args);
    };
    Logger.prototype.warn = function(msg, args) {
        if (this._shouldLog(LogLevelIndexes.WARN)) this._log(LogLevels.WARN, msg, args);
    };
    Logger.prototype.error = function(msg, args) {
        if (this._shouldLog(LogLevelIndexes.ERROR)) this._log(LogLevels.ERROR, msg, args);
    };
    Logger.prototype._log = function(level, msg, args) {
        if (typeof msg === "number") {
            var format = this.codes.get(msg);
            msg = format ? _sprintf(format, args) : "Message code " + msg + (args ? ", with args: " + args.toString() : "");
        } else if (args) msg = _sprintf(msg, args);
        var formattedText = this._generateLogMessage(level, msg);
        console.log(formattedText);
    };
    Logger.prototype._generateLogMessage = function(level, text) {
        var textPre = " => ";
        var result = "";
        if (this.options.showLevel) result += "[" + level + "]" + (level === LogLevels.INFO || level === LogLevels.WARN ? " " : "") + " ";
        if (this.options.prefix) result += this.options.prefix + textPre;
        return result += text;
    };
    Logger.prototype._shouldLog = function(level) {
        return level >= this.logLevel;
    };
    return Logger;
}();

},{"../utils/lang/objectAssign":"eGIPQ","../utils/lang":"jowD0","../utils/lang/maps":"f4DNO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4DNO":[function(require,module,exports) {
/**
 * Map implementation based on es6-map polyfill (https://github.com/medikoo/es6-map/blob/master/polyfill.js),
 * with the minimal features used by the SDK.

Copyright (C) 2013 Mariusz Nowak (www.medikoo.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MapPoly", ()=>MapPoly);
/**
 * return the Map constructor to use. If native Map is not available or it doesn't support the required features (e.g., IE11),
 * a ponyfill with minimal features is returned instead.
 *
 * Exported for testing purposes only.
 */ parcelHelpers.export(exports, "__getMapConstructor", ()=>__getMapConstructor);
parcelHelpers.export(exports, "_Map", ()=>_Map);
var MapPoly = /** @class */ function() {
    // unlike ES6 `Map`, it only accepts an array as first argument iterable
    function MapPoly(entries) {
        var _this = this;
        this.__mapKeysData__ = [];
        this.__mapValuesData__ = [];
        if (Array.isArray(entries)) entries.forEach(function(entry) {
            _this.set(entry[0], entry[1]);
        });
    }
    MapPoly.prototype.clear = function() {
        if (!this.__mapKeysData__.length) return;
        this.__mapKeysData__.length = 0;
        this.__mapValuesData__.length = 0;
    };
    MapPoly.prototype.delete = function(key) {
        var index = this.__mapKeysData__.indexOf(key);
        if (index === -1) return false;
        this.__mapKeysData__.splice(index, 1);
        this.__mapValuesData__.splice(index, 1);
        return true;
    };
    MapPoly.prototype.forEach = function(callbackfn, thisArg) {
        for(var i = 0; i < this.__mapKeysData__.length; i++)callbackfn.call(thisArg, this.__mapValuesData__[i], this.__mapKeysData__[i], this);
    };
    MapPoly.prototype.get = function(key) {
        var index = this.__mapKeysData__.indexOf(key);
        if (index === -1) return;
        return this.__mapValuesData__[index];
    };
    MapPoly.prototype.has = function(key) {
        return this.__mapKeysData__.indexOf(key) !== -1;
    };
    MapPoly.prototype.set = function(key, value) {
        var index = this.__mapKeysData__.indexOf(key);
        if (index === -1) index = this.__mapKeysData__.push(key) - 1;
        this.__mapValuesData__[index] = value;
        return this;
    };
    Object.defineProperty(MapPoly.prototype, "size", {
        get: function() {
            return this.__mapKeysData__.length;
        },
        enumerable: false,
        configurable: true
    });
    return MapPoly;
}();
function __getMapConstructor() {
    // eslint-disable-next-line compat/compat
    if (typeof Array.from === "function" && typeof Map === "function" && Map.prototype && Map.prototype.values) return Map;
    return MapPoly;
}
var _Map = __getMapConstructor();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kcxw2":[function(require,module,exports) {
// For client-side SDKs, machine IP and Hostname are not captured and sent to Split backend.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateRuntime", ()=>validateRuntime);
function validateRuntime() {
    return {
        ip: false,
        hostname: false
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ddNwl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__InLocalStorageMockFactory", ()=>__InLocalStorageMockFactory);
/**
 * This function validates `settings.storage` object
 *
 * @param {any} settings config object provided by the user to initialize the sdk
 *
 * @returns {Object} valid storage factory. Default to `InMemoryStorageCSFactory` if the provided storage is invalid or not compatible with the sdk mode if mode is standalone or localhost
 *
 * @throws error if mode is consumer and the provided storage is not compatible
 */ parcelHelpers.export(exports, "validateStorageCS", ()=>validateStorageCS);
var _inMemoryStorageCS = require("../../../storages/inMemory/InMemoryStorageCS");
var _constants = require("../../../logger/constants");
var _constants1 = require("../../../utils/constants");
function __InLocalStorageMockFactory(params) {
    var result = (0, _inMemoryStorageCS.InMemoryStorageCSFactory)(params);
    result.splits.checkCache = function() {
        return true;
    }; // to emit SDK_READY_FROM_CACHE
    return result;
}
__InLocalStorageMockFactory.type = (0, _constants1.STORAGE_MEMORY);
function validateStorageCS(settings) {
    var _a = settings.storage, storage = _a === void 0 ? (0, _inMemoryStorageCS.InMemoryStorageCSFactory) : _a, log = settings.log, mode = settings.mode;
    // If an invalid storage is provided, fallback into MEMORY
    if (typeof storage !== "function" || [
        (0, _constants1.STORAGE_MEMORY),
        (0, _constants1.STORAGE_LOCALSTORAGE),
        (0, _constants1.STORAGE_PLUGGABLE)
    ].indexOf(storage.type) === -1) {
        storage = (0, _inMemoryStorageCS.InMemoryStorageCSFactory);
        log.error((0, _constants.ERROR_STORAGE_INVALID));
    }
    // In localhost mode with InLocalStorage, fallback to a mock InLocalStorage to emit SDK_READY_FROM_CACHE
    if (mode === (0, _constants1.LOCALHOST_MODE) && storage.type === (0, _constants1.STORAGE_LOCALSTORAGE)) return __InLocalStorageMockFactory;
    if ([
        (0, _constants1.LOCALHOST_MODE),
        (0, _constants1.STANDALONE_MODE)
    ].indexOf(mode) === -1) {
        // Consumer modes require an async storage
        if (storage.type !== (0, _constants1.STORAGE_PLUGGABLE)) throw new Error("A PluggableStorage instance is required on consumer mode");
    } else // Standalone and localhost modes require a sync storage
    if (storage.type === (0, _constants1.STORAGE_PLUGGABLE)) {
        storage = (0, _inMemoryStorageCS.InMemoryStorageCSFactory);
        log.error((0, _constants.ERROR_STORAGE_INVALID), [
            " It requires consumer mode."
        ]);
    }
    // return default InMemory storage if provided one is not valid
    return storage;
}

},{"../../../storages/inMemory/InMemoryStorageCS":"7w3XB","../../../logger/constants":"hiXko","../../../utils/constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7w3XB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * InMemory storage factory for standalone client-side SplitFactory
 *
 * @param params parameters required by EventsCacheSync
 */ parcelHelpers.export(exports, "InMemoryStorageCSFactory", ()=>InMemoryStorageCSFactory);
var _splitsCacheInMemory = require("./SplitsCacheInMemory");
var _mySegmentsCacheInMemory = require("./MySegmentsCacheInMemory");
var _impressionsCacheInMemory = require("./ImpressionsCacheInMemory");
var _eventsCacheInMemory = require("./EventsCacheInMemory");
var _impressionCountsCacheInMemory = require("./ImpressionCountsCacheInMemory");
var _constants = require("../../utils/constants");
var _telemetryCacheInMemory = require("./TelemetryCacheInMemory");
var _uniqueKeysCacheInMemoryCS = require("./UniqueKeysCacheInMemoryCS");
function InMemoryStorageCSFactory(params) {
    var _a = params.settings, _b = _a.scheduler, impressionsQueueSize = _b.impressionsQueueSize, eventsQueueSize = _b.eventsQueueSize, _c = _a.sync, impressionsMode = _c.impressionsMode, __splitFiltersValidation = _c.__splitFiltersValidation;
    var splits = new (0, _splitsCacheInMemory.SplitsCacheInMemory)(__splitFiltersValidation);
    var segments = new (0, _mySegmentsCacheInMemory.MySegmentsCacheInMemory)();
    var storage = {
        splits: splits,
        segments: segments,
        impressions: new (0, _impressionsCacheInMemory.ImpressionsCacheInMemory)(impressionsQueueSize),
        impressionCounts: impressionsMode !== (0, _constants.DEBUG) ? new (0, _impressionCountsCacheInMemory.ImpressionCountsCacheInMemory)() : undefined,
        events: new (0, _eventsCacheInMemory.EventsCacheInMemory)(eventsQueueSize),
        telemetry: (0, _telemetryCacheInMemory.shouldRecordTelemetry)(params) ? new (0, _telemetryCacheInMemory.TelemetryCacheInMemory)(splits, segments) : undefined,
        uniqueKeys: impressionsMode === (0, _constants.NONE) ? new (0, _uniqueKeysCacheInMemoryCS.UniqueKeysCacheInMemoryCS)() : undefined,
        // When using MEMORY we should clean all the caches to leave them empty
        destroy: function() {
            this.splits.clear();
            this.segments.clear();
            this.impressions.clear();
            this.impressionCounts && this.impressionCounts.clear();
            this.events.clear();
            this.uniqueKeys && this.uniqueKeys.clear();
        },
        // When using shared instanciation with MEMORY we reuse everything but segments (they are unique per key)
        shared: function() {
            return {
                splits: this.splits,
                segments: new (0, _mySegmentsCacheInMemory.MySegmentsCacheInMemory)(),
                impressions: this.impressions,
                impressionCounts: this.impressionCounts,
                events: this.events,
                telemetry: this.telemetry,
                // Set a new splits cache to clean it for the client without affecting other clients
                destroy: function() {
                    this.splits = new (0, _splitsCacheInMemory.SplitsCacheInMemory)(__splitFiltersValidation);
                    this.segments.clear();
                }
            };
        }
    };
    // @TODO revisit storage logic in localhost mode
    // No tracking data in localhost mode to avoid memory leaks
    if (params.settings.mode === (0, _constants.LOCALHOST_MODE)) {
        var noopTrack = function() {
            return true;
        };
        storage.impressions.track = noopTrack;
        storage.events.track = noopTrack;
        if (storage.impressionCounts) storage.impressionCounts.track = noopTrack;
        if (storage.uniqueKeys) storage.uniqueKeys.track = noopTrack;
    }
    return storage;
}
InMemoryStorageCSFactory.type = (0, _constants.STORAGE_MEMORY);

},{"./SplitsCacheInMemory":"gyYjc","./MySegmentsCacheInMemory":"j4tKc","./ImpressionsCacheInMemory":"2GDWl","./EventsCacheInMemory":"39pAO","./ImpressionCountsCacheInMemory":"iUMrM","../../utils/constants":"bdnhi","./TelemetryCacheInMemory":"iStpm","./UniqueKeysCacheInMemoryCS":"hiSGK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gyYjc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SplitsCacheInMemory", ()=>SplitsCacheInMemory);
var _tslib = require("tslib");
var _abstractSplitsCacheSync = require("../AbstractSplitsCacheSync");
var _lang = require("../../utils/lang");
var _sets = require("../../utils/lang/sets");
/**
 * Default ISplitsCacheSync implementation that stores split definitions in memory.
 * Supported by all JS runtimes.
 */ var SplitsCacheInMemory = /** @class */ function(_super) {
    (0, _tslib.__extends)(SplitsCacheInMemory, _super);
    function SplitsCacheInMemory(splitFiltersValidation) {
        var _this = _super.call(this) || this;
        _this.splitsCache = {};
        _this.ttCache = {};
        _this.changeNumber = -1;
        _this.splitsWithSegmentsCount = 0;
        _this.flagSetsCache = {};
        _this.flagSetsFilter = splitFiltersValidation ? splitFiltersValidation.groupedFilters.bySet : [];
        return _this;
    }
    SplitsCacheInMemory.prototype.clear = function() {
        this.splitsCache = {};
        this.ttCache = {};
        this.changeNumber = -1;
        this.splitsWithSegmentsCount = 0;
    };
    SplitsCacheInMemory.prototype.addSplit = function(name, split) {
        var previousSplit = this.getSplit(name);
        if (previousSplit) {
            var previousTtName = previousSplit.trafficTypeName;
            this.ttCache[previousTtName]--;
            if (!this.ttCache[previousTtName]) delete this.ttCache[previousTtName];
            this.removeFromFlagSets(previousSplit.name, previousSplit.sets);
            if ((0, _abstractSplitsCacheSync.usesSegments)(previousSplit)) this.splitsWithSegmentsCount--;
        }
        if (split) {
            // Store the Split.
            this.splitsCache[name] = split;
            // Update TT cache
            var ttName = split.trafficTypeName;
            this.ttCache[ttName] = (this.ttCache[ttName] || 0) + 1;
            this.addToFlagSets(split);
            // Add to segments count for the new version of the Split
            if ((0, _abstractSplitsCacheSync.usesSegments)(split)) this.splitsWithSegmentsCount++;
            return true;
        } else return false;
    };
    SplitsCacheInMemory.prototype.removeSplit = function(name) {
        var split = this.getSplit(name);
        if (split) {
            // Delete the Split
            delete this.splitsCache[name];
            var ttName = split.trafficTypeName;
            this.ttCache[ttName]--; // Update tt cache
            if (!this.ttCache[ttName]) delete this.ttCache[ttName];
            this.removeFromFlagSets(split.name, split.sets);
            // Update the segments count.
            if ((0, _abstractSplitsCacheSync.usesSegments)(split)) this.splitsWithSegmentsCount--;
            return true;
        } else return false;
    };
    SplitsCacheInMemory.prototype.getSplit = function(name) {
        return this.splitsCache[name] || null;
    };
    SplitsCacheInMemory.prototype.setChangeNumber = function(changeNumber) {
        this.changeNumber = changeNumber;
        return true;
    };
    SplitsCacheInMemory.prototype.getChangeNumber = function() {
        return this.changeNumber;
    };
    SplitsCacheInMemory.prototype.getSplitNames = function() {
        return Object.keys(this.splitsCache);
    };
    SplitsCacheInMemory.prototype.trafficTypeExists = function(trafficType) {
        return (0, _lang.isFiniteNumber)(this.ttCache[trafficType]) && this.ttCache[trafficType] > 0;
    };
    SplitsCacheInMemory.prototype.usesSegments = function() {
        return this.getChangeNumber() === -1 || this.splitsWithSegmentsCount > 0;
    };
    SplitsCacheInMemory.prototype.getNamesByFlagSets = function(flagSets) {
        var _this = this;
        return flagSets.map(function(flagSet) {
            return _this.flagSetsCache[flagSet] || new (0, _sets._Set)();
        });
    };
    SplitsCacheInMemory.prototype.addToFlagSets = function(featureFlag) {
        var _this = this;
        if (!featureFlag.sets) return;
        featureFlag.sets.forEach(function(featureFlagSet) {
            if (_this.flagSetsFilter.length > 0 && !_this.flagSetsFilter.some(function(filterFlagSet) {
                return filterFlagSet === featureFlagSet;
            })) return;
            if (!_this.flagSetsCache[featureFlagSet]) _this.flagSetsCache[featureFlagSet] = new (0, _sets._Set)([]);
            _this.flagSetsCache[featureFlagSet].add(featureFlag.name);
        });
    };
    SplitsCacheInMemory.prototype.removeFromFlagSets = function(featureFlagName, flagSets) {
        var _this = this;
        if (!flagSets) return;
        flagSets.forEach(function(flagSet) {
            _this.removeNames(flagSet, featureFlagName);
        });
    };
    SplitsCacheInMemory.prototype.removeNames = function(flagSetName, featureFlagName) {
        if (!this.flagSetsCache[flagSetName]) return;
        this.flagSetsCache[flagSetName].delete(featureFlagName);
        if (this.flagSetsCache[flagSetName].size === 0) delete this.flagSetsCache[flagSetName];
    };
    return SplitsCacheInMemory;
}((0, _abstractSplitsCacheSync.AbstractSplitsCacheSync));

},{"tslib":"lRdW5","../AbstractSplitsCacheSync":"znAC8","../../utils/lang":"jowD0","../../utils/lang/sets":"ikri1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"znAC8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbstractSplitsCacheSync", ()=>AbstractSplitsCacheSync);
/**
 * Given a parsed split, it returns a boolean flagging if its conditions use segments matchers (rules & whitelists).
 * This util is intended to simplify the implementation of `splitsCache::usesSegments` method
 */ parcelHelpers.export(exports, "usesSegments", ()=>usesSegments);
var _objectAssign = require("../utils/lang/objectAssign");
/**
 * This class provides a skeletal implementation of the ISplitsCacheSync interface
 * to minimize the effort required to implement this interface.
 */ var AbstractSplitsCacheSync = /** @class */ function() {
    function AbstractSplitsCacheSync() {}
    AbstractSplitsCacheSync.prototype.addSplits = function(entries) {
        var _this = this;
        return entries.map(function(keyValuePair) {
            return _this.addSplit(keyValuePair[0], keyValuePair[1]);
        });
    };
    AbstractSplitsCacheSync.prototype.removeSplits = function(names) {
        var _this = this;
        return names.map(function(name) {
            return _this.removeSplit(name);
        });
    };
    AbstractSplitsCacheSync.prototype.getSplits = function(names) {
        var _this = this;
        var splits = {};
        names.forEach(function(name) {
            splits[name] = _this.getSplit(name);
        });
        return splits;
    };
    AbstractSplitsCacheSync.prototype.getAll = function() {
        var _this = this;
        return this.getSplitNames().map(function(key) {
            return _this.getSplit(key);
        });
    };
    /**
     * Check if the splits information is already stored in cache. This data can be preloaded.
     * It is used as condition to emit SDK_SPLITS_CACHE_LOADED, and then SDK_READY_FROM_CACHE.
     */ AbstractSplitsCacheSync.prototype.checkCache = function() {
        return false;
    };
    /**
     * Kill `name` split and set `defaultTreatment` and `changeNumber`.
     * Used for SPLIT_KILL push notifications.
     *
     * @param {string} name
     * @param {string} defaultTreatment
     * @param {number} changeNumber
     * @returns {boolean} `true` if the operation successed updating the split, or `false` if no split is updated,
     * for instance, if the `changeNumber` is old, or if the split is not found (e.g., `/splitchanges` hasn't been fetched yet), or if the storage fails to apply the update.
     */ AbstractSplitsCacheSync.prototype.killLocally = function(name, defaultTreatment, changeNumber) {
        var split = this.getSplit(name);
        if (split && (!split.changeNumber || split.changeNumber < changeNumber)) {
            var newSplit = (0, _objectAssign.objectAssign)({}, split);
            newSplit.killed = true;
            newSplit.defaultTreatment = defaultTreatment;
            newSplit.changeNumber = changeNumber;
            return this.addSplit(name, newSplit);
        }
        return false;
    };
    return AbstractSplitsCacheSync;
}();
function usesSegments(split) {
    var conditions = split.conditions || [];
    for(var i = 0; i < conditions.length; i++){
        var matchers = conditions[i].matcherGroup.matchers;
        for(var j = 0; j < matchers.length; j++){
            if (matchers[j].matcherType === "IN_SEGMENT") return true;
        }
    }
    return false;
}

},{"../utils/lang/objectAssign":"eGIPQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4tKc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MySegmentsCacheInMemory", ()=>MySegmentsCacheInMemory);
var _tslib = require("tslib");
var _abstractSegmentsCacheSync = require("../AbstractSegmentsCacheSync");
/**
 * Default MySegmentsCacheInMemory implementation that stores MySegments in memory.
 * Supported by all JS runtimes.
 */ var MySegmentsCacheInMemory = /** @class */ function(_super) {
    (0, _tslib.__extends)(MySegmentsCacheInMemory, _super);
    function MySegmentsCacheInMemory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.segmentCache = {};
        return _this;
    }
    MySegmentsCacheInMemory.prototype.clear = function() {
        this.segmentCache = {};
    };
    MySegmentsCacheInMemory.prototype.addToSegment = function(name) {
        this.segmentCache[name] = true;
        return true;
    };
    MySegmentsCacheInMemory.prototype.removeFromSegment = function(name) {
        delete this.segmentCache[name];
        return true;
    };
    MySegmentsCacheInMemory.prototype.isInSegment = function(name) {
        return this.segmentCache[name] === true;
    };
    /**
     * Reset (update) the cached list of segments with the given list, removing and adding segments if necessary.
     * @NOTE based on the way we use segments in the browser, this way is the best option
     *
     * @param {string[]} names list of segment names
     * @returns boolean indicating if the cache was updated (i.e., given list was different from the cached one)
     */ MySegmentsCacheInMemory.prototype.resetSegments = function(names) {
        var _this = this;
        var isDiff = false;
        var index;
        var storedSegmentKeys = Object.keys(this.segmentCache);
        // Extreme fast => everything is empty
        if (names.length === 0 && storedSegmentKeys.length === names.length) return isDiff;
        // Quick path
        if (storedSegmentKeys.length !== names.length) {
            isDiff = true;
            this.segmentCache = {};
            names.forEach(function(s) {
                _this.addToSegment(s);
            });
        } else {
            // Slowest path => we need to find at least 1 difference because
            for(index = 0; index < names.length && this.isInSegment(names[index]); index++);
            if (index < names.length) {
                isDiff = true;
                this.segmentCache = {};
                names.forEach(function(s) {
                    _this.addToSegment(s);
                });
            }
        }
        return isDiff;
    };
    MySegmentsCacheInMemory.prototype.getRegisteredSegments = function() {
        return Object.keys(this.segmentCache);
    };
    MySegmentsCacheInMemory.prototype.getKeysCount = function() {
        return 1;
    };
    return MySegmentsCacheInMemory;
}((0, _abstractSegmentsCacheSync.AbstractSegmentsCacheSync));

},{"tslib":"lRdW5","../AbstractSegmentsCacheSync":"3kdvg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3kdvg":[function(require,module,exports) {
/**
 * This class provides a skeletal implementation of the ISegmentsCacheSync interface
 * to minimize the effort required to implement this interface.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbstractSegmentsCacheSync", ()=>AbstractSegmentsCacheSync);
var AbstractSegmentsCacheSync = /** @class */ function() {
    function AbstractSegmentsCacheSync() {}
    /**
     * For server-side synchronizer: add the given list of segments to the cache, with an empty list of keys. The segments that already exist are not modified.
     * For client-side synchronizer: the method is not used.
     */ AbstractSegmentsCacheSync.prototype.registerSegments = function(names) {
        return false;
    };
    /**
     * For server-side synchronizer: set the change number of `name` segment.
     * For client-side synchronizer: the method is not used.
     */ AbstractSegmentsCacheSync.prototype.setChangeNumber = function(name, changeNumber) {
        return true;
    };
    /**
     * For server-side synchronizer: get the change number of `name` segment.
     * For client-side synchronizer: the method is not used.
     */ AbstractSegmentsCacheSync.prototype.getChangeNumber = function(name) {
        return -1;
    };
    /**
     * For server-side synchronizer: the method is not used.
     * For client-side synchronizer: reset the cache with the given list of segments.
     */ AbstractSegmentsCacheSync.prototype.resetSegments = function(names) {
        return true;
    };
    return AbstractSegmentsCacheSync;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2GDWl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImpressionsCacheInMemory", ()=>ImpressionsCacheInMemory);
var ImpressionsCacheInMemory = /** @class */ function() {
    /**
     *
     * @param impressionsQueueSize number of queued impressions to call onFullQueueCb.
     * Default value is 0, that means no maximum value, in case we want to avoid this being triggered.
     */ function ImpressionsCacheInMemory(impressionsQueueSize) {
        if (impressionsQueueSize === void 0) impressionsQueueSize = 0;
        this.maxQueue = impressionsQueueSize;
        this.queue = [];
    }
    ImpressionsCacheInMemory.prototype.setOnFullQueueCb = function(cb) {
        this.onFullQueue = cb;
    };
    /**
     * Store impressions in sequential order
     */ ImpressionsCacheInMemory.prototype.track = function(data) {
        var _a;
        (_a = this.queue).push.apply(_a, data);
        // Check if the cache queue is full and we need to flush it.
        if (this.maxQueue > 0 && this.queue.length >= this.maxQueue && this.onFullQueue) this.onFullQueue();
    };
    /**
     * Clear the data stored on the cache.
     */ ImpressionsCacheInMemory.prototype.clear = function() {
        this.queue = [];
    };
    /**
     * Pop the collected data, used as payload for posting.
     */ ImpressionsCacheInMemory.prototype.pop = function(toMerge) {
        var data = this.queue;
        this.clear();
        return toMerge ? toMerge.concat(data) : data;
    };
    /**
     * Check if the cache is empty.
     */ ImpressionsCacheInMemory.prototype.isEmpty = function() {
        return this.queue.length === 0;
    };
    return ImpressionsCacheInMemory;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39pAO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventsCacheInMemory", ()=>EventsCacheInMemory);
var MAX_QUEUE_BYTE_SIZE = 5242880; // 5M
var EventsCacheInMemory = /** @class */ function() {
    /**
     *
     * @param eventsQueueSize number of queued events to call onFullQueueCb.
     * Default value is 0, that means no maximum value, in case we want to avoid this being triggered.
     */ function EventsCacheInMemory(eventsQueueSize) {
        if (eventsQueueSize === void 0) eventsQueueSize = 0;
        this.maxQueue = eventsQueueSize;
        this.queue = [];
        this.queueByteSize = 0;
    }
    EventsCacheInMemory.prototype.setOnFullQueueCb = function(cb) {
        this.onFullQueue = cb;
    };
    /**
     * Add a new event object at the end of the queue.
     */ EventsCacheInMemory.prototype.track = function(data, size) {
        if (size === void 0) size = 0;
        this.queueByteSize += size;
        this.queue.push(data);
        this._checkForFlush();
        return true;
    };
    /**
     * Clear the data stored on the cache.
     */ EventsCacheInMemory.prototype.clear = function() {
        this.queue = [];
        this.queueByteSize = 0;
    };
    /**
     * Pop the collected data, used as payload for posting.
     */ EventsCacheInMemory.prototype.pop = function(toMerge) {
        var data = this.queue;
        this.clear();
        return toMerge ? toMerge.concat(data) : data;
    };
    /**
     * Check if the cache is empty.
     */ EventsCacheInMemory.prototype.isEmpty = function() {
        return this.queue.length === 0;
    };
    /**
     * Check if the cache queue is full and we need to flush it.
     */ EventsCacheInMemory.prototype._checkForFlush = function() {
        if (this.queueByteSize > MAX_QUEUE_BYTE_SIZE || // 0 means no maximum value, in case we want to avoid this being triggered. Size limit is not affected by it.
        this.maxQueue > 0 && this.queue.length >= this.maxQueue) this.onFullQueue && this.onFullQueue();
    };
    return EventsCacheInMemory;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUMrM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImpressionCountsCacheInMemory", ()=>ImpressionCountsCacheInMemory);
var _time = require("../../utils/time");
var _constants = require("../inRedis/constants");
var ImpressionCountsCacheInMemory = /** @class */ function() {
    function ImpressionCountsCacheInMemory(impressionCountsCacheSize) {
        if (impressionCountsCacheSize === void 0) impressionCountsCacheSize = (0, _constants.DEFAULT_CACHE_SIZE);
        this.cache = {};
        this.cacheSize = 0;
        this.maxStorage = impressionCountsCacheSize;
    }
    /**
    * Builds key to be stored in the cache with the featureName and the timeFrame truncated.
    */ ImpressionCountsCacheInMemory.prototype._makeKey = function(featureName, timeFrame) {
        return featureName + "::" + (0, _time.truncateTimeFrame)(timeFrame);
    };
    /**
    * Increments the quantity of impressions with the passed featureName and timeFrame.
    */ ImpressionCountsCacheInMemory.prototype.track = function(featureName, timeFrame, amount) {
        var key = this._makeKey(featureName, timeFrame);
        var currentAmount = this.cache[key];
        this.cache[key] = currentAmount ? currentAmount + amount : amount;
        if (this.onFullQueue) {
            this.cacheSize = this.cacheSize + amount;
            if (this.cacheSize >= this.maxStorage) this.onFullQueue();
        }
    };
    /**
     * Pop the collected data, used as payload for posting.
     */ ImpressionCountsCacheInMemory.prototype.pop = function(toMerge) {
        var data = this.cache;
        this.clear();
        if (toMerge) {
            Object.keys(data).forEach(function(key) {
                if (toMerge[key]) toMerge[key] += data[key];
                else toMerge[key] = data[key];
            });
            return toMerge;
        }
        return data;
    };
    /**
     * Clear the data stored on the cache.
     */ ImpressionCountsCacheInMemory.prototype.clear = function() {
        this.cache = {};
        this.cacheSize = 0;
    };
    /**
     * Check if the cache is empty.
     */ ImpressionCountsCacheInMemory.prototype.isEmpty = function() {
        return Object.keys(this.cache).length === 0;
    };
    return ImpressionCountsCacheInMemory;
}();

},{"../../utils/time":"8OAfE","../inRedis/constants":"4uDmM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8OAfE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
* Truncates de time frame received with the time window.
*/ parcelHelpers.export(exports, "truncateTimeFrame", ()=>truncateTimeFrame);
var DEDUP_WINDOW_SIZE_MS = 3600000;
function truncateTimeFrame(timestampInMs) {
    return timestampInMs - timestampInMs % DEDUP_WINDOW_SIZE_MS;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4uDmM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LOG_PREFIX", ()=>LOG_PREFIX);
parcelHelpers.export(exports, "DEFAULT_CACHE_SIZE", ()=>DEFAULT_CACHE_SIZE);
parcelHelpers.export(exports, "REFRESH_RATE", ()=>REFRESH_RATE);
parcelHelpers.export(exports, "TTL_REFRESH", ()=>TTL_REFRESH);
var LOG_PREFIX = "storage:redis: ";
var DEFAULT_CACHE_SIZE = 30000;
var REFRESH_RATE = 300000; // 300.000 ms = start after 5 mins
var TTL_REFRESH = 3600; // 1hr

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iStpm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MAX_LATENCY_BUCKET_COUNT", ()=>MAX_LATENCY_BUCKET_COUNT);
parcelHelpers.export(exports, "newBuckets", ()=>newBuckets);
/**
 * Record telemetry if mode is not localhost.
 * All factory instances track telemetry on server-side, and 0.1% on client-side.
 */ parcelHelpers.export(exports, "shouldRecordTelemetry", ()=>shouldRecordTelemetry);
parcelHelpers.export(exports, "TelemetryCacheInMemory", ()=>TelemetryCacheInMemory);
var _constants = require("../../utils/constants");
var _findLatencyIndex = require("../findLatencyIndex");
var MAX_STREAMING_EVENTS = 20;
var MAX_TAGS = 10;
var MAX_LATENCY_BUCKET_COUNT = 23;
function newBuckets() {
    // MAX_LATENCY_BUCKET_COUNT (length) is 23
    // Not using Array.fill for old browsers compatibility
    return [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
}
var ACCEPTANCE_RANGE = 0.001;
function shouldRecordTelemetry(_a) {
    var settings = _a.settings;
    return settings.mode !== (0, _constants.LOCALHOST_MODE) && (settings.core.key === undefined || Math.random() <= ACCEPTANCE_RANGE);
}
var TelemetryCacheInMemory = /** @class */ function() {
    function TelemetryCacheInMemory(splits, segments) {
        this.splits = splits;
        this.segments = segments;
        // isEmpty flag
        this.e = true;
        this.notReadyUsage = 0;
        /** Usage stats */ this.impressionStats = [
            0,
            0,
            0
        ];
        this.eventStats = [
            0,
            0
        ];
        this.lastSync = {};
        this.httpErrors = {};
        this.httpLatencies = {};
        this.authRejections = 0;
        this.tokenRefreshes = 0;
        this.streamingEvents = [];
        this.tags = [];
        this.exceptions = {};
        this.latencies = {};
        this.updatesFromSSE = {
            sp: 0,
            ms: 0
        };
    }
    TelemetryCacheInMemory.prototype.isEmpty = function() {
        return this.e;
    };
    TelemetryCacheInMemory.prototype.clear = function() {};
    TelemetryCacheInMemory.prototype.pop = function() {
        this.e = true;
        return {
            lS: this.getLastSynchronization(),
            mL: this.popLatencies(),
            mE: this.popExceptions(),
            hE: this.popHttpErrors(),
            hL: this.popHttpLatencies(),
            tR: this.popTokenRefreshes(),
            aR: this.popAuthRejections(),
            iQ: this.getImpressionStats((0, _constants.QUEUED)),
            iDe: this.getImpressionStats((0, _constants.DEDUPED)),
            iDr: this.getImpressionStats((0, _constants.DROPPED)),
            spC: this.splits && this.splits.getSplitNames().length,
            seC: this.segments && this.segments.getRegisteredSegments().length,
            skC: this.segments && this.segments.getKeysCount(),
            sL: this.getSessionLength(),
            eQ: this.getEventStats((0, _constants.QUEUED)),
            eD: this.getEventStats((0, _constants.DROPPED)),
            sE: this.popStreamingEvents(),
            t: this.popTags(),
            ufs: this.popUpdatesFromSSE()
        };
    };
    TelemetryCacheInMemory.prototype.getTimeUntilReady = function() {
        return this.timeUntilReady;
    };
    TelemetryCacheInMemory.prototype.recordTimeUntilReady = function(ms) {
        this.timeUntilReady = ms;
    };
    TelemetryCacheInMemory.prototype.getTimeUntilReadyFromCache = function() {
        return this.timeUntilReadyFromCache;
    };
    TelemetryCacheInMemory.prototype.recordTimeUntilReadyFromCache = function(ms) {
        this.timeUntilReadyFromCache = ms;
    };
    TelemetryCacheInMemory.prototype.getNonReadyUsage = function() {
        return this.notReadyUsage;
    };
    TelemetryCacheInMemory.prototype.recordNonReadyUsage = function() {
        this.notReadyUsage++;
    };
    TelemetryCacheInMemory.prototype.getImpressionStats = function(type) {
        return this.impressionStats[type];
    };
    TelemetryCacheInMemory.prototype.recordImpressionStats = function(type, count) {
        this.impressionStats[type] += count;
        this.e = false;
    };
    TelemetryCacheInMemory.prototype.getEventStats = function(type) {
        return this.eventStats[type];
    };
    TelemetryCacheInMemory.prototype.recordEventStats = function(type, count) {
        this.eventStats[type] += count;
        this.e = false;
    };
    TelemetryCacheInMemory.prototype.getLastSynchronization = function() {
        return this.lastSync;
    };
    TelemetryCacheInMemory.prototype.recordSuccessfulSync = function(resource, timeMs) {
        this.lastSync[resource] = timeMs;
        this.e = false;
    };
    TelemetryCacheInMemory.prototype.popHttpErrors = function() {
        var result = this.httpErrors;
        this.httpErrors = {};
        return result;
    };
    TelemetryCacheInMemory.prototype.recordHttpError = function(resource, status) {
        var statusErrors = this.httpErrors[resource] = this.httpErrors[resource] || {};
        statusErrors[status] = (statusErrors[status] || 0) + 1;
        this.e = false;
    };
    TelemetryCacheInMemory.prototype.popHttpLatencies = function() {
        var result = this.httpLatencies;
        this.httpLatencies = {};
        return result;
    };
    TelemetryCacheInMemory.prototype.recordHttpLatency = function(resource, latencyMs) {
        var latencyBuckets = this.httpLatencies[resource] = this.httpLatencies[resource] || newBuckets();
        latencyBuckets[(0, _findLatencyIndex.findLatencyIndex)(latencyMs)]++;
        this.e = false;
    };
    TelemetryCacheInMemory.prototype.popAuthRejections = function() {
        var result = this.authRejections;
        this.authRejections = 0;
        return result;
    };
    TelemetryCacheInMemory.prototype.recordAuthRejections = function() {
        this.authRejections++;
        this.e = false;
    };
    TelemetryCacheInMemory.prototype.popTokenRefreshes = function() {
        var result = this.tokenRefreshes;
        this.tokenRefreshes = 0;
        return result;
    };
    TelemetryCacheInMemory.prototype.recordTokenRefreshes = function() {
        this.tokenRefreshes++;
        this.e = false;
    };
    TelemetryCacheInMemory.prototype.popStreamingEvents = function() {
        return this.streamingEvents.splice(0);
    };
    TelemetryCacheInMemory.prototype.recordStreamingEvents = function(streamingEvent) {
        if (this.streamingEvents.length < MAX_STREAMING_EVENTS) this.streamingEvents.push(streamingEvent);
        this.e = false;
    };
    TelemetryCacheInMemory.prototype.popTags = function() {
        return this.tags.splice(0);
    };
    TelemetryCacheInMemory.prototype.addTag = function(tag) {
        if (this.tags.length < MAX_TAGS) this.tags.push(tag);
        this.e = false;
    };
    TelemetryCacheInMemory.prototype.getSessionLength = function() {
        return this.sessionLength;
    };
    TelemetryCacheInMemory.prototype.recordSessionLength = function(ms) {
        this.sessionLength = ms;
        this.e = false;
    };
    TelemetryCacheInMemory.prototype.popExceptions = function() {
        var result = this.exceptions;
        this.exceptions = {};
        return result;
    };
    TelemetryCacheInMemory.prototype.recordException = function(method) {
        this.exceptions[method] = (this.exceptions[method] || 0) + 1;
        this.e = false;
    };
    TelemetryCacheInMemory.prototype.popLatencies = function() {
        var result = this.latencies;
        this.latencies = {};
        return result;
    };
    TelemetryCacheInMemory.prototype.recordLatency = function(method, latencyMs) {
        var latencyBuckets = this.latencies[method] = this.latencies[method] || newBuckets();
        latencyBuckets[(0, _findLatencyIndex.findLatencyIndex)(latencyMs)]++;
        this.e = false;
    };
    TelemetryCacheInMemory.prototype.popUpdatesFromSSE = function() {
        var result = this.updatesFromSSE;
        this.updatesFromSSE = {
            sp: 0,
            ms: 0
        };
        return result;
    };
    TelemetryCacheInMemory.prototype.recordUpdatesFromSSE = function(type) {
        this.updatesFromSSE[type]++;
        this.e = false;
    };
    return TelemetryCacheInMemory;
}();

},{"../../utils/constants":"bdnhi","../findLatencyIndex":"21wIv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21wIv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Calculates buckets from latency in milliseconds
 *
 * @param latencyInMs
 * @returns a bucket index from 0 to 22 inclusive
 */ parcelHelpers.export(exports, "findLatencyIndex", ()=>findLatencyIndex);
var _lang = require("../utils/lang");
var MIN = 0;
var MAX = 22;
var BASE = 1.5;
function findLatencyIndex(latencyInMs) {
    var index = Math.min(MAX, Math.max(MIN, Math.ceil(Math.log(latencyInMs) / Math.log(BASE))));
    return (0, _lang.isNaNNumber)(index) ? 0 : index; // index is NaN if latency is not a positive number
}

},{"../utils/lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hiSGK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UniqueKeysCacheInMemoryCS", ()=>UniqueKeysCacheInMemoryCS);
var _sets = require("../../utils/lang/sets");
var _constants = require("../inRedis/constants");
var UniqueKeysCacheInMemoryCS = /** @class */ function() {
    /**
     *
     * @param impressionsQueueSize number of queued impressions to call onFullQueueCb.
     * Default value is 0, that means no maximum value, in case we want to avoid this being triggered.
     */ function UniqueKeysCacheInMemoryCS(uniqueKeysQueueSize) {
        if (uniqueKeysQueueSize === void 0) uniqueKeysQueueSize = (0, _constants.DEFAULT_CACHE_SIZE);
        this.uniqueTrackerSize = 0;
        this.uniqueKeysTracker = {};
        this.maxStorage = uniqueKeysQueueSize;
    }
    UniqueKeysCacheInMemoryCS.prototype.setOnFullQueueCb = function(cb) {
        this.onFullQueue = cb;
    };
    /**
     * Store unique keys per feature.
     */ UniqueKeysCacheInMemoryCS.prototype.track = function(userKey, featureName) {
        if (!this.uniqueKeysTracker[userKey]) this.uniqueKeysTracker[userKey] = new (0, _sets._Set)();
        var tracker = this.uniqueKeysTracker[userKey];
        if (!tracker.has(featureName)) {
            tracker.add(featureName);
            this.uniqueTrackerSize++;
        }
        if (this.uniqueTrackerSize >= this.maxStorage && this.onFullQueue) this.onFullQueue();
    };
    /**
     * Clear the data stored on the cache.
     */ UniqueKeysCacheInMemoryCS.prototype.clear = function() {
        this.uniqueTrackerSize = 0;
        this.uniqueKeysTracker = {};
    };
    /**
     * Pop the collected data, used as payload for posting.
     */ UniqueKeysCacheInMemoryCS.prototype.pop = function() {
        var data = this.uniqueKeysTracker;
        this.clear();
        return this.fromUniqueKeysCollector(data);
    };
    /**
     * Check if the cache is empty.
     */ UniqueKeysCacheInMemoryCS.prototype.isEmpty = function() {
        return Object.keys(this.uniqueKeysTracker).length === 0;
    };
    /**
     * Converts `uniqueKeys` data from cache into request payload.
     */ UniqueKeysCacheInMemoryCS.prototype.fromUniqueKeysCollector = function(uniqueKeys) {
        var payload = [];
        var userKeys = Object.keys(uniqueKeys);
        for(var k = 0; k < userKeys.length; k++){
            var userKey = userKeys[k];
            var featureNames = (0, _sets.setToArray)(uniqueKeys[userKey]);
            var uniqueKeysPayload = {
                k: userKey,
                fs: featureNames
            };
            payload.push(uniqueKeysPayload);
        }
        return {
            keys: payload
        };
    };
    return UniqueKeysCacheInMemoryCS;
}();

},{"../../utils/lang/sets":"ikri1","../inRedis/constants":"4uDmM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5eQKe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This function validates `settings.integrations` object that consists of a list of pluggable integration factories.
 *
 * @param {any} settings config object provided by the user to initialize the sdk
 *
 * @returns {Array} array of valid integration factories. The array might be empty if `settings` object does not have valid integrations.
 */ parcelHelpers.export(exports, "validatePluggableIntegrations", ()=>validatePluggableIntegrations);
var _common = require("./common");
function validatePluggableIntegrations(settings) {
    return (0, _common.validateIntegrations)(settings, function(integration) {
        return typeof integration === "function";
    }, "Integration items must be functions that initialize the integrations");
}

},{"./common":"josob","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"josob":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This function validates `settings.integrations` object
 *
 * @param {any} settings config object provided by the user to initialize the sdk
 * @param {function} integrationValidator filter used to remove invalid integration items
 * @param {string} extraWarning optional string used to better describe why an item might be invalid
 *
 * @returns {Array} array of valid integration items. The array might be empty if `settings` object does not have valid integrations.
 */ parcelHelpers.export(exports, "validateIntegrations", ()=>validateIntegrations);
var _constants = require("../../../logger/constants");
function validateIntegrations(settings, integrationValidator, extraWarning) {
    var integrations = settings.integrations, log = settings.log;
    // If integrations is not an array or an empty array, we return an empty array (no integrations).
    if (!Array.isArray(integrations) || integrations.length === 0) return [];
    // We remove invalid integration items
    var validIntegrations = integrations.filter(integrationValidator);
    // Log a warning if at least one item is invalid
    var invalids = integrations.length - validIntegrations.length;
    if (invalids) log.warn((0, _constants.WARN_INTEGRATION_INVALID), [
        invalids,
        extraWarning || ""
    ]);
    return validIntegrations;
}

},{"../../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mpIm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Validates the `debug` property at config and use it to set the logger.
 *
 * @param settings user config object, with an optional `debug` property of type boolean, string log level or a Logger object.
 * @returns a logger instance, that might be: the provided logger at `settings.debug`, or one with the given `debug` log level,
 * or one with NONE log level if `debug` is not defined or invalid.
 */ parcelHelpers.export(exports, "validateLogger", ()=>validateLogger);
var _logger = require("../../../logger");
var _commons = require("./commons");
function isLogger(log) {
    return log && typeof log.debug === "function" && typeof log.info === "function" && typeof log.warn === "function" && typeof log.error === "function" && typeof log.setLogLevel === "function";
}
// By default it starts disabled.
var initialLogLevel = (0, _logger.LogLevels).NONE;
function validateLogger(settings) {
    var debug = settings.debug;
    var logLevel = initialLogLevel;
    if (debug !== undefined) {
        if (isLogger(debug)) return debug;
        logLevel = (0, _commons.getLogLevel)(settings.debug);
    }
    var log = new (0, _logger.Logger)({
        logLevel: logLevel || initialLogLevel
    });
    // @ts-ignore // `debug` value is invalid if logLevel is undefined at this point
    if (!logLevel) log._log((0, _logger.LogLevels).ERROR, "Invalid `debug` value at config. Logs will be disabled.");
    return log;
}

},{"../../../logger":"j3d7V","./commons":"6OYsZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6OYsZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns the LogLevel for the given debugValue or undefined if it is invalid,
 * i.e., if the debugValue is not a boolean or LogLevel string.
 *
 * @param debugValue debug value at config
 * @returns LogLevel of the given debugValue or undefined if the provided value is invalid
 */ parcelHelpers.export(exports, "getLogLevel", ()=>getLogLevel);
var _logger = require("../../../logger");
function getLogLevel(debugValue) {
    if (typeof debugValue === "boolean") {
        if (debugValue) return (0, _logger.LogLevels).DEBUG;
        else return (0, _logger.LogLevels).NONE;
    } else if (typeof debugValue === "string" && (0, _logger.isLogLevelString)(debugValue)) return debugValue;
    else return undefined;
}

},{"../../../logger":"j3d7V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gpvsj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This function validates `settings.sync.localhostMode` object
 *
 * @param {any} settings config object provided by the user to initialize the sdk
 *
 * @returns {Object} provided localhost mode module at `settings.sync.localhostMode` if valid, or a default LocalhostFromObject instance if not provided or invalid
 */ parcelHelpers.export(exports, "validateLocalhostWithDefault", ()=>validateLocalhostWithDefault);
var _localhostFromObject = require("../../../sync/offline/LocalhostFromObject");
var _pluggable = require("./pluggable");
function validateLocalhostWithDefault(settings) {
    if (!settings.sync.localhostMode) return (0, _localhostFromObject.LocalhostFromObject)();
    return (0, _pluggable.validateLocalhost)(settings) || (0, _localhostFromObject.LocalhostFromObject)();
}

},{"../../../sync/offline/LocalhostFromObject":"lTJQl","./pluggable":"prK5O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lTJQl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LocalhostFromObject", ()=>LocalhostFromObject);
var _splitsParserFromSettings = require("./splitsParser/splitsParserFromSettings");
var _syncManagerOffline = require("./syncManagerOffline");
// Singleton instance of the factory function for offline SyncManager from object (a.k.a. localhostFromObject)
// SDK instances instantiate their SyncManagers with the same factory
var localhostFromObject = (0, _syncManagerOffline.syncManagerOfflineFactory)((0, _splitsParserFromSettings.splitsParserFromSettingsFactory));
localhostFromObject.type = "LocalhostFromObject";
function LocalhostFromObject() {
    return localhostFromObject;
}

},{"./splitsParser/splitsParserFromSettings":"g2DZC","./syncManagerOffline":"bSwIm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2DZC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "splitsParserFromSettingsFactory", ()=>splitsParserFromSettingsFactory);
var _lang = require("../../../utils/lang");
var _parseCondition = require("./parseCondition");
function hasTreatmentChanged(prev, curr) {
    if (typeof prev !== typeof curr) return true;
    if (typeof prev === "string") return prev !== curr;
    else return prev.treatment !== curr.treatment || prev.config !== curr.config;
}
function splitsParserFromSettingsFactory() {
    var previousMock = {
        "emptyMock": "1"
    };
    function mockUpdated(currentData) {
        var names = Object.keys(currentData);
        // Different amount of items
        if (names.length !== Object.keys(previousMock).length) {
            previousMock = currentData;
            return true;
        }
        return names.some(function(name) {
            var newSplit = !previousMock[name];
            var newTreatment = hasTreatmentChanged(previousMock[name], currentData[name]);
            var changed = newSplit || newTreatment;
            if (changed) previousMock = currentData;
            return changed;
        });
    }
    /**
     *
     * @param settings validated object with mocked features mapping.
     */ return function splitsParserFromSettings(settings) {
        var features = settings.features || {};
        if (!mockUpdated(features)) return false;
        var splitObjects = {};
        (0, _lang.forOwn)(features, function(data, splitName) {
            var treatment = data;
            var config = null;
            if ((0, _lang.isObject)(data)) {
                treatment = data.treatment;
                config = data.config || config;
            }
            var configurations = {};
            if (config !== null) configurations[treatment] = config;
            splitObjects[splitName] = {
                trafficTypeName: "localhost",
                conditions: [
                    (0, _parseCondition.parseCondition)({
                        treatment: treatment
                    })
                ],
                configurations: configurations
            };
        });
        return splitObjects;
    };
}

},{"../../../utils/lang":"jowD0","./parseCondition":"eI4Q0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eI4Q0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseCondition", ()=>parseCondition);
var _lang = require("../../../utils/lang");
function parseCondition(data) {
    var treatment = data.treatment;
    if (data.keys) return {
        conditionType: "WHITELIST",
        matcherGroup: {
            combiner: "AND",
            matchers: [
                {
                    keySelector: null,
                    matcherType: "WHITELIST",
                    negate: false,
                    whitelistMatcherData: {
                        whitelist: (0, _lang.isString)(data.keys) ? [
                            data.keys
                        ] : data.keys
                    }
                }
            ]
        },
        partitions: [
            {
                treatment: treatment,
                size: 100
            }
        ],
        label: "whitelisted " + treatment
    };
    else return {
        conditionType: "ROLLOUT",
        matcherGroup: {
            combiner: "AND",
            matchers: [
                {
                    keySelector: null,
                    matcherType: "ALL_KEYS",
                    negate: false
                }
            ]
        },
        partitions: [
            {
                treatment: treatment,
                size: 100
            }
        ],
        label: "default rule"
    };
}

},{"../../../utils/lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bSwIm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Offline SyncManager factory.
 * Can be used for server-side API, and client-side API with or without multiple clients.
 *
 * @param splitsParser e.g., `splitsParserFromFile`, `splitsParserFromSettings`.
 */ parcelHelpers.export(exports, "syncManagerOfflineFactory", ()=>syncManagerOfflineFactory);
var _fromObjectSyncTask = require("./syncTasks/fromObjectSyncTask");
var _objectAssign = require("../../utils/lang/objectAssign");
var _constants = require("../../readiness/constants");
function flush() {
    return Promise.resolve();
}
function syncManagerOfflineFactory(splitsParserFactory) {
    /**
     * SyncManager factory for modular SDK
     */ return function(_a) {
        var settings = _a.settings, readiness = _a.readiness, storage = _a.storage;
        return (0, _objectAssign.objectAssign)((0, _fromObjectSyncTask.fromObjectSyncTaskFactory)(splitsParserFactory(), storage, readiness, settings), {
            // fake flush, that resolves immediately
            flush: flush,
            // [Only used for client-side]
            shared: function(matchingKey, readinessManager) {
                return {
                    start: function() {
                        // In LOCALHOST mode, shared clients are ready in the next event-loop cycle than created
                        // SDK_READY cannot be emitted directly because this will not update the readiness status
                        setTimeout(function() {
                            readinessManager.segments.emit((0, _constants.SDK_SEGMENTS_ARRIVED)); // SDK_SPLITS_ARRIVED emitted by main SyncManager
                        }, 0);
                    },
                    stop: function() {},
                    isRunning: function() {
                        return true;
                    },
                    flush: flush
                };
            }
        });
    };
}

},{"./syncTasks/fromObjectSyncTask":"4WmXW","../../utils/lang/objectAssign":"eGIPQ","../../readiness/constants":"iHapU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WmXW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Offline equivalent of `splitChangesUpdaterFactory`
 */ parcelHelpers.export(exports, "fromObjectUpdaterFactory", ()=>fromObjectUpdaterFactory);
/**
 * PollingManager in Offline mode
 */ parcelHelpers.export(exports, "fromObjectSyncTaskFactory", ()=>fromObjectSyncTaskFactory);
var _lang = require("../../../utils/lang");
var _syncTask = require("../../syncTask");
var _constants = require("../../../utils/constants");
var _constants1 = require("../../../readiness/constants");
var _constants2 = require("../../../logger/constants");
function fromObjectUpdaterFactory(splitsParser, storage, readiness, settings) {
    var log = settings.log, splitsCache = storage.splits;
    var startingUp = true;
    return function objectUpdater() {
        var splits = [];
        var loadError = null;
        var splitsMock = {};
        try {
            splitsMock = splitsParser(settings);
        } catch (err) {
            loadError = err;
            log.error((0, _constants2.ERROR_SYNC_OFFLINE_LOADING), [
                err
            ]);
        }
        if (!loadError && splitsMock) {
            log.debug((0, _constants2.SYNC_OFFLINE_DATA), [
                JSON.stringify(splitsMock)
            ]);
            (0, _lang.forOwn)(splitsMock, function(val, name) {
                splits.push([
                    name,
                    {
                        name: name,
                        status: "ACTIVE",
                        killed: false,
                        trafficAllocation: 100,
                        defaultTreatment: (0, _constants.CONTROL),
                        conditions: val.conditions || [],
                        configurations: val.configurations,
                        trafficTypeName: val.trafficTypeName
                    }
                ]);
            });
            return Promise.all([
                splitsCache.clear(),
                splitsCache.addSplits(splits)
            ]).then(function() {
                readiness.splits.emit((0, _constants1.SDK_SPLITS_ARRIVED));
                if (startingUp) {
                    startingUp = false;
                    Promise.resolve(splitsCache.checkCache()).then(function(cacheReady) {
                        // Emits SDK_READY_FROM_CACHE
                        if (cacheReady) readiness.splits.emit((0, _constants1.SDK_SPLITS_CACHE_LOADED));
                        // Emits SDK_READY
                        readiness.segments.emit((0, _constants1.SDK_SEGMENTS_ARRIVED));
                    });
                }
                return true;
            });
        } else return Promise.resolve(true);
    };
}
function fromObjectSyncTaskFactory(splitsParser, storage, readiness, settings) {
    return (0, _syncTask.syncTaskFactory)(settings.log, fromObjectUpdaterFactory(splitsParser, storage, readiness, settings), settings.scheduler.offlineRefreshRate, "offlineUpdater");
}

},{"../../../utils/lang":"jowD0","../../syncTask":"1QkJf","../../../utils/constants":"bdnhi","../../../readiness/constants":"iHapU","../../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1QkJf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates an object that handles the periodic execution of a given task via "start" and "stop" methods.
 * The task can be also executed by calling the "execute" method. Multiple calls run sequentially to avoid race conditions (e.g., submitters executed on SDK destroy or full queue, while periodic execution is pending).
 *
 * @param log  Logger instance.
 * @param task  Task to execute that returns a promise that NEVER REJECTS. Otherwise, periodic execution can result in Unhandled Promise Rejections.
 * @param period  Period in milliseconds to execute the task.
 * @param taskName  Optional task name for logging.
 * @returns A sync task that wraps the given task.
 */ parcelHelpers.export(exports, "syncTaskFactory", ()=>syncTaskFactory);
var _constants = require("../logger/constants");
function syncTaskFactory(log, task, period, taskName) {
    if (taskName === void 0) taskName = "task";
    // Flag that indicates if the task is executing
    var executing = 0;
    // Promise chain to resolve tasks sequentially
    var promiseChain;
    // flag that indicates if the task periodic execution has been started/stopped.
    var running = false;
    // Auxiliar counter used to avoid race condition when calling `start` & `stop` intermittently
    var runningId = 0;
    // Params passed to `task` when called periodically
    var runningArgs;
    // Id of the periodic call timeout
    var timeoutID;
    function execute() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        executing++;
        log.debug((0, _constants.SYNC_TASK_EXECUTE), [
            taskName
        ]);
        // Update `promiseChain` with last promise, to run tasks serially
        promiseChain = (promiseChain ? promiseChain.then(function() {
            return task.apply(void 0, args);
        }) : task.apply(void 0, args)).then(function(result) {
            executing--;
            return result;
        });
        return promiseChain;
    }
    function periodicExecute(currentRunningId) {
        return execute.apply(void 0, runningArgs).then(function(result) {
            // Call `setTimeout` if periodic execution was started and `currentRunningId === runningId`
            // to avoid a race condition when calling `start`, `stop` and `start` again
            if (running && currentRunningId === runningId) timeoutID = setTimeout(periodicExecute, period, currentRunningId);
            return result;
        });
    }
    return {
        execute: execute,
        isExecuting: function() {
            return executing > 0;
        },
        start: function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            if (!running) {
                running = true;
                runningId++;
                runningArgs = args;
                log.debug((0, _constants.SYNC_TASK_START), [
                    taskName,
                    period
                ]);
                return periodicExecute(runningId);
            }
        },
        stop: function() {
            running = false;
            if (timeoutID) {
                log.debug((0, _constants.SYNC_TASK_STOP), [
                    taskName
                ]);
                clearTimeout(timeoutID);
                timeoutID = undefined;
            }
        },
        isRunning: function() {
            return running;
        }
    };
}

},{"../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHapU":[function(require,module,exports) {
// Splits events:
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SDK_SPLITS_ARRIVED", ()=>SDK_SPLITS_ARRIVED);
parcelHelpers.export(exports, "SDK_SPLITS_CACHE_LOADED", ()=>SDK_SPLITS_CACHE_LOADED);
parcelHelpers.export(exports, "SDK_SEGMENTS_ARRIVED", ()=>SDK_SEGMENTS_ARRIVED);
parcelHelpers.export(exports, "SDK_READY_TIMED_OUT", ()=>SDK_READY_TIMED_OUT);
parcelHelpers.export(exports, "SDK_READY", ()=>SDK_READY);
parcelHelpers.export(exports, "SDK_READY_FROM_CACHE", ()=>SDK_READY_FROM_CACHE);
parcelHelpers.export(exports, "SDK_UPDATE", ()=>SDK_UPDATE);
var SDK_SPLITS_ARRIVED = "state::splits-arrived";
var SDK_SPLITS_CACHE_LOADED = "state::splits-cache-loaded";
var SDK_SEGMENTS_ARRIVED = "state::segments-arrived";
var SDK_READY_TIMED_OUT = "init::timeout";
var SDK_READY = "init::ready";
var SDK_READY_FROM_CACHE = "init::cache-ready";
var SDK_UPDATE = "state::update";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"prK5O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This function validates `settings.sync.localhostMode` object
 *
 * @param {any} settings config object provided by the user to initialize the sdk
 *
 * @returns {Object | undefined} provided localhost mode module at `settings.sync.localhostMode`, or undefined if it is not provided or invalid
 */ parcelHelpers.export(exports, "validateLocalhost", ()=>validateLocalhost);
var _constants = require("../../../logger/constants");
var _constants1 = require("../../constants");
function validateLocalhost(settings) {
    var localhostMode = settings.sync.localhostMode;
    // localhostMode.type is used for internal validation. Not considered part of the public API, and might be updated eventually.
    if (settings.mode === (0, _constants1.LOCALHOST_MODE) && (typeof localhostMode !== "function" || localhostMode.type !== "LocalhostFromObject")) {
        settings.log.error((0, _constants.ERROR_LOCALHOST_MODULE_REQUIRED));
        return undefined;
    }
    return localhostMode;
}

},{"../../../logger/constants":"hiXko","../../constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fZaP8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateConsent", ()=>validateConsent);
var _constants = require("../../logger/constants");
var _constants1 = require("../constants");
var _lang = require("../lang");
var userConsentValues = [
    (0, _constants1.CONSENT_DECLINED),
    (0, _constants1.CONSENT_GRANTED),
    (0, _constants1.CONSENT_UNKNOWN)
];
function validateConsent(_a) {
    var userConsent = _a.userConsent, log = _a.log;
    userConsent = (0, _lang.stringToUpperCase)(userConsent);
    if (userConsentValues.indexOf(userConsent) > -1) return userConsent;
    log.error((0, _constants.ERROR_INVALID_CONFIG_PARAM), [
        "userConsent",
        userConsentValues,
        (0, _constants1.CONSENT_GRANTED)
    ]);
    return 0, _constants1.CONSENT_GRANTED;
}

},{"../../logger/constants":"hiXko","../constants":"bdnhi","../lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"emPwB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getModules", ()=>getModules);
var _splitApi = require("@splitsoftware/splitio-commons/esm/services/splitApi");
var _syncManagerOnline = require("@splitsoftware/splitio-commons/esm/sync/syncManagerOnline");
var _pushManager = require("@splitsoftware/splitio-commons/esm/sync/streaming/pushManager");
var _pollingManagerCS = require("@splitsoftware/splitio-commons/esm/sync/polling/pollingManagerCS");
var _index = require("@splitsoftware/splitio-commons/esm/sdkManager/index");
var _sdkClientMethodCS = require("@splitsoftware/splitio-commons/esm/sdkClient/sdkClientMethodCS");
var _browser = require("@splitsoftware/splitio-commons/esm/listeners/browser");
var _impressionObserverCS = require("@splitsoftware/splitio-commons/esm/trackers/impressionObserver/impressionObserverCS");
var _pluggable = require("@splitsoftware/splitio-commons/esm/integrations/pluggable");
var _constants = require("@splitsoftware/splitio-commons/esm/utils/constants");
var _sdkUserConsent = require("@splitsoftware/splitio-commons/esm/consent/sdkUserConsent");
var syncManagerStandaloneFactory;
var syncManagerSubmittersFactory;
function getModules(settings, platform) {
    if (!syncManagerStandaloneFactory) syncManagerStandaloneFactory = (0, _syncManagerOnline.syncManagerOnlineFactory)((0, _pollingManagerCS.pollingManagerCSFactory), (0, _pushManager.pushManagerFactory));
    var modules = {
        settings: settings,
        platform: platform,
        storageFactory: settings.storage,
        splitApiFactory: (0, _splitApi.splitApiFactory),
        syncManagerFactory: syncManagerStandaloneFactory,
        sdkManagerFactory: (0, _index.sdkManagerFactory),
        sdkClientMethodFactory: (0, _sdkClientMethodCS.sdkClientMethodCSFactory),
        SignalListener: (0, _browser.BrowserSignalListener),
        integrationsManagerFactory: settings.integrations && settings.integrations.length > 0 ? (0, _pluggable.pluggableIntegrationsManagerFactory).bind(null, settings.integrations) : undefined,
        impressionsObserverFactory: (0, _impressionObserverCS.impressionObserverCSFactory),
        extraProps: function(params) {
            return {
                UserConsent: (0, _sdkUserConsent.createUserConsentAPI)(params)
            };
        }
    };
    switch(settings.mode){
        case 0, _constants.LOCALHOST_MODE:
            modules.splitApiFactory = undefined;
            modules.syncManagerFactory = settings.sync.localhostMode;
            modules.SignalListener = undefined;
            break;
        case 0, _constants.CONSUMER_MODE:
            modules.syncManagerFactory = undefined;
            break;
        case 0, _constants.CONSUMER_PARTIAL_MODE:
            if (!syncManagerSubmittersFactory) syncManagerSubmittersFactory = (0, _syncManagerOnline.syncManagerOnlineFactory)(undefined, undefined);
            modules.syncManagerFactory = syncManagerSubmittersFactory;
    }
    return modules;
}

},{"@splitsoftware/splitio-commons/esm/services/splitApi":"akuEI","@splitsoftware/splitio-commons/esm/sync/syncManagerOnline":"gYMhx","@splitsoftware/splitio-commons/esm/sync/streaming/pushManager":"ywu3D","@splitsoftware/splitio-commons/esm/sync/polling/pollingManagerCS":"dFbNh","@splitsoftware/splitio-commons/esm/sdkManager/index":"8QAtd","@splitsoftware/splitio-commons/esm/sdkClient/sdkClientMethodCS":"dvedf","@splitsoftware/splitio-commons/esm/listeners/browser":"9qL1V","@splitsoftware/splitio-commons/esm/trackers/impressionObserver/impressionObserverCS":"cDTFz","@splitsoftware/splitio-commons/esm/integrations/pluggable":"JL8GO","@splitsoftware/splitio-commons/esm/utils/constants":"bdnhi","@splitsoftware/splitio-commons/esm/consent/sdkUserConsent":"bdY3x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"akuEI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Factory of SplitApi objects, which group the collection of Split HTTP endpoints used by the SDK
 *
 * @param settings validated settings object
 * @param platform object containing environment-specific dependencies
 * @param telemetryTracker telemetry tracker
 */ parcelHelpers.export(exports, "splitApiFactory", ()=>splitApiFactory);
var _splitHttpClient = require("./splitHttpClient");
var _objectAssign = require("../utils/lang/objectAssign");
var _constants = require("../utils/constants");
var _constants1 = require("../logger/constants");
var noCacheHeaderOptions = {
    headers: {
        "Cache-Control": "no-cache"
    }
};
function userKeyToQueryParam(userKey) {
    return "users=" + encodeURIComponent(userKey); // no need to check availability of `encodeURIComponent`, since it is a global highly supported.
}
function splitApiFactory(settings, platform, telemetryTracker) {
    var urls = settings.urls;
    var filterQueryString = settings.sync.__splitFiltersValidation && settings.sync.__splitFiltersValidation.queryString;
    var SplitSDKImpressionsMode = settings.sync.impressionsMode;
    var splitHttpClient = (0, _splitHttpClient.splitHttpClientFactory)(settings, platform.getFetch);
    return {
        // @TODO throw errors if health check requests fail, to log them in the Synchronizer
        getSdkAPIHealthCheck: function() {
            var url = urls.sdk + "/version";
            return splitHttpClient(url).then(function() {
                return true;
            }).catch(function() {
                return false;
            });
        },
        getEventsAPIHealthCheck: function() {
            var url = urls.events + "/version";
            return splitHttpClient(url).then(function() {
                return true;
            }).catch(function() {
                return false;
            });
        },
        fetchAuth: function(userMatchingKeys) {
            var url = urls.auth + "/v2/auth";
            if (userMatchingKeys) {
                var queryParams = userMatchingKeys.map(userKeyToQueryParam).join("&");
                if (queryParams) url += "?" + queryParams;
            }
            return splitHttpClient(url, undefined, telemetryTracker.trackHttp((0, _constants.TOKEN)));
        },
        fetchSplitChanges: function(since, noCache, till) {
            var url = urls.sdk + "/splitChanges?since=" + since + (till ? "&till=" + till : "") + (filterQueryString || "");
            return splitHttpClient(url, noCache ? noCacheHeaderOptions : undefined, telemetryTracker.trackHttp((0, _constants.SPLITS))).catch(function(err) {
                if (err.statusCode === 414) settings.log.error((0, _constants1.ERROR_TOO_MANY_SETS));
                throw err;
            });
        },
        fetchSegmentChanges: function(since, segmentName, noCache, till) {
            var url = urls.sdk + "/segmentChanges/" + segmentName + "?since=" + since + (till ? "&till=" + till : "");
            return splitHttpClient(url, noCache ? noCacheHeaderOptions : undefined, telemetryTracker.trackHttp((0, _constants.SEGMENT)));
        },
        fetchMySegments: function(userMatchingKey, noCache) {
            /**
             * URI encoding of user keys in order to:
             *  - avoid 400 responses (due to URI malformed). E.g.: '/api/mySegments/%'
             *  - avoid 404 responses. E.g.: '/api/mySegments/foo/bar'
             *  - match user keys with special characters. E.g.: 'foo%bar', 'foo/bar'
             */ var url = urls.sdk + "/mySegments/" + encodeURIComponent(userMatchingKey);
            return splitHttpClient(url, noCache ? noCacheHeaderOptions : undefined, telemetryTracker.trackHttp((0, _constants.MY_SEGMENT)));
        },
        /**
         * Post events.
         *
         * @param body  Events bulk payload
         * @param headers  Optionals headers to overwrite default ones. For example, it is used in producer mode to overwrite metadata headers.
         */ postEventsBulk: function(body, headers) {
            var url = urls.events + "/events/bulk";
            return splitHttpClient(url, {
                method: "POST",
                body: body,
                headers: headers
            }, telemetryTracker.trackHttp((0, _constants.EVENTS)));
        },
        /**
         * Post impressions.
         *
         * @param body  Impressions bulk payload
         * @param headers  Optionals headers to overwrite default ones. For example, it is used in producer mode to overwrite metadata headers.
         */ postTestImpressionsBulk: function(body, headers) {
            var url = urls.events + "/testImpressions/bulk";
            return splitHttpClient(url, {
                // Adding extra headers to send impressions in OPTIMIZED or DEBUG modes.
                method: "POST",
                body: body,
                headers: (0, _objectAssign.objectAssign)({
                    SplitSDKImpressionsMode: SplitSDKImpressionsMode
                }, headers)
            }, telemetryTracker.trackHttp((0, _constants.IMPRESSIONS)));
        },
        /**
         * Post impressions counts.
         *
         * @param body  Impressions counts payload
         * @param headers  Optionals headers to overwrite default ones. For example, it is used in producer mode to overwrite metadata headers.
         */ postTestImpressionsCount: function(body, headers) {
            var url = urls.events + "/testImpressions/count";
            return splitHttpClient(url, {
                method: "POST",
                body: body,
                headers: headers
            }, telemetryTracker.trackHttp((0, _constants.IMPRESSIONS_COUNT)));
        },
        /**
         * Post unique keys for client side.
         *
         * @param body  unique keys payload
         * @param headers  Optionals headers to overwrite default ones. For example, it is used in producer mode to overwrite metadata headers.
         */ postUniqueKeysBulkCs: function(body, headers) {
            var url = urls.telemetry + "/v1/keys/cs";
            return splitHttpClient(url, {
                method: "POST",
                body: body,
                headers: headers
            }, telemetryTracker.trackHttp((0, _constants.TELEMETRY)));
        },
        /**
         * Post unique keys for server side.
         *
         * @param body  unique keys payload
         * @param headers  Optionals headers to overwrite default ones. For example, it is used in producer mode to overwrite metadata headers.
         */ postUniqueKeysBulkSs: function(body, headers) {
            var url = urls.telemetry + "/v1/keys/ss";
            return splitHttpClient(url, {
                method: "POST",
                body: body,
                headers: headers
            }, telemetryTracker.trackHttp((0, _constants.TELEMETRY)));
        },
        postMetricsConfig: function(body, headers) {
            var url = urls.telemetry + "/v1/metrics/config";
            return splitHttpClient(url, {
                method: "POST",
                body: body,
                headers: headers
            }, telemetryTracker.trackHttp((0, _constants.TELEMETRY)), true);
        },
        postMetricsUsage: function(body, headers) {
            var url = urls.telemetry + "/v1/metrics/usage";
            return splitHttpClient(url, {
                method: "POST",
                body: body,
                headers: headers
            }, telemetryTracker.trackHttp((0, _constants.TELEMETRY)), true);
        }
    };
}

},{"./splitHttpClient":"6eJpn","../utils/lang/objectAssign":"eGIPQ","../utils/constants":"bdnhi","../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6eJpn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Factory of Split HTTP clients, which are HTTP clients with predefined headers for Split endpoints.
 *
 * @param settings SDK settings, used to access authorizationKey, logger instance and metadata (SDK version, ip and hostname) to set additional headers
 * @param getFetch retrieves the Fetch API for HTTP requests
 */ parcelHelpers.export(exports, "splitHttpClientFactory", ()=>splitHttpClientFactory);
var _objectAssign = require("../utils/lang/objectAssign");
var _constants = require("../logger/constants");
var messageNoFetch = "Global fetch API is not available.";
function splitHttpClientFactory(settings, getFetch) {
    var log = settings.log, authorizationKey = settings.core.authorizationKey, version = settings.version, _a = settings.runtime, ip = _a.ip, hostname = _a.hostname;
    var fetch = getFetch && getFetch();
    // if fetch is not available, log Error
    if (!fetch) log.error((0, _constants.ERROR_CLIENT_CANNOT_GET_READY), [
        messageNoFetch
    ]);
    var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + authorizationKey,
        "SplitSDKVersion": version
    };
    if (ip) headers["SplitSDKMachineIP"] = ip;
    if (hostname) headers["SplitSDKMachineName"] = hostname;
    return function httpClient(url, reqOpts, latencyTracker, logErrorsAsInfo) {
        if (reqOpts === void 0) reqOpts = {};
        if (latencyTracker === void 0) latencyTracker = function() {};
        if (logErrorsAsInfo === void 0) logErrorsAsInfo = false;
        var request = {
            headers: reqOpts.headers ? (0, _objectAssign.objectAssign)({}, headers, reqOpts.headers) : headers,
            method: reqOpts.method || "GET",
            body: reqOpts.body
        };
        // using `fetch(url, options)` signature to work with unfetch, a lightweight ponyfill of fetch API.
        return fetch ? fetch(url, request)// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Checking_that_the_fetch_was_successful
        .then(function(response) {
            if (!response.ok) return response.text().then(function(message) {
                return Promise.reject({
                    response: response,
                    message: message
                });
            });
            latencyTracker();
            return response;
        }).catch(function(error) {
            var resp = error && error.response;
            var msg = "";
            if (resp) switch(resp.status){
                case 404:
                    msg = "Invalid SDK key or resource not found.";
                    break;
                // Don't use resp.statusText since reason phrase is removed in HTTP/2
                default:
                    msg = error.message;
                    break;
            }
            else msg = error.message || "Network Error";
            if (!resp || resp.status !== 403) log[logErrorsAsInfo ? "info" : "error"]((0, _constants.ERROR_HTTP), [
                resp ? resp.status : "NO_STATUS",
                url,
                msg
            ]);
            var networkError = new Error(msg);
            // passes `undefined` as statusCode if not an HTTP error (resp === undefined)
            networkError.statusCode = resp && resp.status;
            latencyTracker(networkError);
            throw networkError;
        }) : Promise.reject(new Error(messageNoFetch));
    };
}

},{"../utils/lang/objectAssign":"eGIPQ","../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYMhx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Online SyncManager factory.
 * Can be used for server-side API, and client-side API with or without multiple clients.
 *
 * @param pollingManagerFactory allows to specialize the SyncManager for server-side or client-side API by passing
 * `pollingManagerSSFactory` or `pollingManagerCSFactory` respectively.
 * @param pushManagerFactory optional to build a SyncManager with or without streaming support
 */ parcelHelpers.export(exports, "syncManagerOnlineFactory", ()=>syncManagerOnlineFactory);
var _submitterManager = require("./submitters/submitterManager");
var _constants = require("./streaming/constants");
var _constants1 = require("../logger/constants");
var _consent = require("../consent");
var _constants2 = require("../utils/constants");
function syncManagerOnlineFactory(pollingManagerFactory, pushManagerFactory) {
    /**
     * SyncManager factory for modular SDK
     */ return function(params) {
        var settings = params.settings, _a = params.settings, log = _a.log, streamingEnabled = _a.streamingEnabled, syncEnabled = _a.sync.enabled, telemetryTracker = params.telemetryTracker;
        /** Polling Manager */ var pollingManager = pollingManagerFactory && pollingManagerFactory(params);
        /** Push Manager */ var pushManager = syncEnabled && streamingEnabled && pollingManager && pushManagerFactory ? pushManagerFactory(params, pollingManager) : undefined;
        /** Submitter Manager */ // It is not inyected as push and polling managers, because at the moment it is required
        var submitterManager = (0, _submitterManager.submitterManagerFactory)(params);
        /** Sync Manager logic */ function startPolling() {
            if (pollingManager.isRunning()) log.info((0, _constants1.SYNC_CONTINUE_POLLING));
            else {
                log.info((0, _constants1.SYNC_START_POLLING));
                pollingManager.start();
                telemetryTracker.streamingEvent((0, _constants2.SYNC_MODE_UPDATE), (0, _constants2.POLLING));
            }
        }
        function stopPollingAndSyncAll() {
            log.info((0, _constants1.SYNC_STOP_POLLING));
            // if polling, stop
            if (pollingManager.isRunning()) {
                pollingManager.stop();
                telemetryTracker.streamingEvent((0, _constants2.SYNC_MODE_UPDATE), (0, _constants2.STREAMING));
            }
            // fetch splits and segments. There is no need to catch this promise (it is always resolved)
            pollingManager.syncAll();
        }
        if (pushManager) {
            pushManager.on((0, _constants.PUSH_SUBSYSTEM_UP), stopPollingAndSyncAll);
            pushManager.on((0, _constants.PUSH_SUBSYSTEM_DOWN), startPolling);
        }
        var running = false; // flag that indicates whether the syncManager has been started (true) or stopped (false)
        var startFirstTime = true; // flag to distinguish calling the `start` method for the first time, to support pausing and resuming the synchronization
        return {
            // Exposed for fine-grained control of synchronization.
            // E.g.: user consent, app state changes (Page hide, Foreground/Background, Online/Offline).
            pollingManager: pollingManager,
            pushManager: pushManager,
            submitterManager: submitterManager,
            /**
             * Method used to start the syncManager for the first time, or resume it after being stopped.
             */ start: function() {
                running = true;
                // start syncing splits and segments
                if (pollingManager) {
                    // If synchronization is disabled pushManager and pollingManager should not start
                    if (syncEnabled) {
                        if (pushManager) {
                            // Doesn't call `syncAll` when the syncManager is resuming
                            if (startFirstTime) {
                                pollingManager.syncAll();
                                startFirstTime = false;
                            }
                            pushManager.start();
                        } else pollingManager.start();
                    } else if (startFirstTime) {
                        pollingManager.syncAll();
                        startFirstTime = false;
                    }
                }
                // start periodic data recording (events, impressions, telemetry).
                submitterManager.start(!(0, _consent.isConsentGranted)(settings));
            },
            /**
             * Method used to stop/pause the syncManager.
             */ stop: function() {
                running = false;
                // stop syncing
                if (pushManager) pushManager.stop();
                if (pollingManager && pollingManager.isRunning()) pollingManager.stop();
                // stop periodic data recording (events, impressions, telemetry).
                submitterManager.stop();
            },
            isRunning: function() {
                return running;
            },
            flush: function() {
                return submitterManager.execute(!(0, _consent.isConsentGranted)(settings));
            },
            // [Only used for client-side]
            // If polling and push managers are defined (standalone mode), they implement the interfaces for client-side
            shared: function(matchingKey, readinessManager, storage) {
                if (!pollingManager) return;
                var mySegmentsSyncTask = pollingManager.add(matchingKey, readinessManager, storage);
                return {
                    isRunning: mySegmentsSyncTask.isRunning,
                    start: function() {
                        if (syncEnabled) {
                            if (pushManager) {
                                if (pollingManager.isRunning()) // if doing polling, we must start the periodic fetch of data
                                {
                                    if (storage.splits.usesSegments()) mySegmentsSyncTask.start();
                                } else // if not polling, we must execute the sync task for the initial fetch
                                // of segments since `syncAll` was already executed when starting the main client
                                mySegmentsSyncTask.execute();
                                pushManager.add(matchingKey, mySegmentsSyncTask);
                            } else if (storage.splits.usesSegments()) mySegmentsSyncTask.start();
                        } else if (!readinessManager.isReady()) mySegmentsSyncTask.execute();
                    },
                    stop: function() {
                        // check in case `client.destroy()` has been invoked more than once for the same client
                        var mySegmentsSyncTask = pollingManager.get(matchingKey);
                        if (mySegmentsSyncTask) {
                            // stop syncing
                            if (pushManager) pushManager.remove(matchingKey);
                            if (mySegmentsSyncTask.isRunning()) mySegmentsSyncTask.stop();
                            pollingManager.remove(matchingKey);
                        }
                    },
                    flush: function() {
                        return Promise.resolve();
                    }
                };
            }
        };
    };
}

},{"./submitters/submitterManager":"3PNhR","./streaming/constants":"4krVV","../logger/constants":"hiXko","../consent":"jehXo","../utils/constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3PNhR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "submitterManagerFactory", ()=>submitterManagerFactory);
var _eventsSubmitter = require("./eventsSubmitter");
var _impressionsSubmitter = require("./impressionsSubmitter");
var _impressionCountsSubmitter = require("./impressionCountsSubmitter");
var _telemetrySubmitter = require("./telemetrySubmitter");
var _uniqueKeysSubmitter = require("./uniqueKeysSubmitter");
function submitterManagerFactory(params) {
    var submitters = [
        (0, _impressionsSubmitter.impressionsSubmitterFactory)(params),
        (0, _eventsSubmitter.eventsSubmitterFactory)(params)
    ];
    var impressionCountsSubmitter = (0, _impressionCountsSubmitter.impressionCountsSubmitterFactory)(params);
    if (impressionCountsSubmitter) submitters.push(impressionCountsSubmitter);
    var telemetrySubmitter = (0, _telemetrySubmitter.telemetrySubmitterFactory)(params);
    if (params.storage.uniqueKeys) submitters.push((0, _uniqueKeysSubmitter.uniqueKeysSubmitterFactory)(params));
    return {
        // `onlyTelemetry` true if SDK is created with userConsent not GRANTED
        start: function(onlyTelemetry) {
            if (!onlyTelemetry) submitters.forEach(function(submitter) {
                return submitter.start();
            });
            if (telemetrySubmitter) telemetrySubmitter.start();
        },
        // `allExceptTelemetry` true if userConsent is changed to DECLINED
        stop: function(allExceptTelemetry) {
            submitters.forEach(function(submitter) {
                return submitter.stop();
            });
            if (!allExceptTelemetry && telemetrySubmitter) telemetrySubmitter.stop();
        },
        isRunning: function() {
            return submitters.some(function(submitter) {
                return submitter.isRunning();
            });
        },
        // Flush data. Called with `onlyTelemetry` true if SDK is destroyed with userConsent not GRANTED
        execute: function(onlyTelemetry) {
            var promises = onlyTelemetry ? [] : submitters.map(function(submitter) {
                return submitter.execute();
            });
            if (telemetrySubmitter) promises.push(telemetrySubmitter.execute());
            return Promise.all(promises);
        },
        isExecuting: function() {
            return submitters.some(function(submitter) {
                return submitter.isExecuting();
            });
        }
    };
}

},{"./eventsSubmitter":"1QijE","./impressionsSubmitter":"8RV2h","./impressionCountsSubmitter":"h1WTv","./telemetrySubmitter":"giBon","./uniqueKeysSubmitter":"3xDhe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1QijE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Submitter that periodically posts tracked events
 */ parcelHelpers.export(exports, "eventsSubmitterFactory", ()=>eventsSubmitterFactory);
var _submitter = require("./submitter");
var _constants = require("../../logger/constants");
var DATA_NAME = "events";
function eventsSubmitterFactory(params) {
    var _a = params.settings, log = _a.log, eventsPushRate = _a.scheduler.eventsPushRate, eventsFirstPushWindow = _a.startup.eventsFirstPushWindow, postEventsBulk = params.splitApi.postEventsBulk, events = params.storage.events;
    // don't retry events.
    var submitter = (0, _submitter.submitterFactory)(log, postEventsBulk, events, eventsPushRate, DATA_NAME);
    // Set a timer for the first push window of events.
    if (eventsFirstPushWindow > 0) submitter = (0, _submitter.firstPushWindowDecorator)(submitter, eventsFirstPushWindow);
    // register events submitter to be executed when events cache is full
    events.setOnFullQueueCb(function() {
        if (submitter.isRunning()) {
            log.info((0, _constants.SUBMITTERS_PUSH_FULL_QUEUE), [
                DATA_NAME
            ]);
            submitter.execute();
        }
    // If submitter is stopped (e.g., user consent declined or unknown, or app state offline), we don't send the data.
    // Data will be sent when submitter is resumed.
    });
    return submitter;
}

},{"./submitter":"brzd3","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brzd3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Base function to create submitters, such as ImpressionsSubmitter and EventsSubmitter
 */ parcelHelpers.export(exports, "submitterFactory", ()=>submitterFactory);
/**
 * Decorates a provided submitter with a first execution window
 */ parcelHelpers.export(exports, "firstPushWindowDecorator", ()=>firstPushWindowDecorator);
var _syncTask = require("../syncTask");
var _constants = require("../../logger/constants");
function submitterFactory(log, postClient, sourceCache, postRate, dataName, fromCacheToPayload, maxRetries, debugLogs // true for telemetry submitters
) {
    if (maxRetries === void 0) maxRetries = 0;
    var retries = 0;
    var data;
    function postData() {
        if (sourceCache.isEmpty() && !data) return Promise.resolve();
        data = sourceCache.pop(data);
        var dataCountMessage = typeof data.length === "number" ? data.length + " " + dataName : dataName;
        log[debugLogs ? "debug" : "info"]((0, _constants.SUBMITTERS_PUSH), [
            dataCountMessage
        ]);
        var jsonPayload = JSON.stringify(fromCacheToPayload ? fromCacheToPayload(data) : data);
        if (!maxRetries) data = undefined;
        return postClient(jsonPayload).then(function() {
            retries = 0;
            data = undefined;
        }).catch(function(err) {
            if (!maxRetries) log[debugLogs ? "debug" : "warn"]((0, _constants.SUBMITTERS_PUSH_FAILS), [
                dataCountMessage,
                err
            ]);
            else if (retries === maxRetries) {
                retries = 0;
                data = undefined;
                log[debugLogs ? "debug" : "warn"]((0, _constants.SUBMITTERS_PUSH_FAILS), [
                    dataCountMessage,
                    err
                ]);
            } else {
                retries++;
                log[debugLogs ? "debug" : "warn"]((0, _constants.SUBMITTERS_PUSH_RETRY), [
                    dataCountMessage,
                    err
                ]);
            }
        });
    }
    return (0, _syncTask.syncTaskFactory)(log, postData, postRate, dataName + " submitter");
}
function firstPushWindowDecorator(submitter, firstPushWindow) {
    var running = false;
    var stopEventPublisherTimeout;
    var originalStart = submitter.start;
    submitter.start = function() {
        running = true;
        stopEventPublisherTimeout = setTimeout(originalStart, firstPushWindow);
    };
    var originalStop = submitter.stop;
    submitter.stop = function() {
        running = false;
        clearTimeout(stopEventPublisherTimeout);
        originalStop();
    };
    submitter.isRunning = function() {
        return running;
    };
    return submitter;
}

},{"../syncTask":"1QkJf","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8RV2h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Converts `impressions` data from cache into request payload.
 */ parcelHelpers.export(exports, "fromImpressionsCollector", ()=>fromImpressionsCollector);
/**
 * Submitter that periodically posts impressions data
 */ parcelHelpers.export(exports, "impressionsSubmitterFactory", ()=>impressionsSubmitterFactory);
var _lang = require("../../utils/lang");
var _submitter = require("./submitter");
var _constants = require("../../logger/constants");
var DATA_NAME = "impressions";
function fromImpressionsCollector(sendLabels, data) {
    var groupedByFeature = (0, _lang.groupBy)(data, "feature");
    var dto = [];
    // using forOwn instead of for...in since the last also iterates over prototype enumerables
    (0, _lang.forOwn)(groupedByFeature, function(value, name) {
        dto.push({
            f: name,
            i: value.map(function(entry) {
                var keyImpression = {
                    k: entry.keyName,
                    t: entry.treatment,
                    m: entry.time,
                    c: entry.changeNumber,
                    r: sendLabels ? entry.label : undefined,
                    b: entry.bucketingKey ? entry.bucketingKey : undefined,
                    pt: entry.pt ? entry.pt : undefined // Previous time
                };
                return keyImpression;
            })
        });
    });
    return dto;
}
function impressionsSubmitterFactory(params) {
    var _a = params.settings, log = _a.log, impressionsRefreshRate = _a.scheduler.impressionsRefreshRate, labelsEnabled = _a.core.labelsEnabled, postTestImpressionsBulk = params.splitApi.postTestImpressionsBulk, impressions = params.storage.impressions;
    // retry impressions only once.
    var syncTask = (0, _submitter.submitterFactory)(log, postTestImpressionsBulk, impressions, impressionsRefreshRate, DATA_NAME, fromImpressionsCollector.bind(undefined, labelsEnabled), 1);
    // register impressions submitter to be executed when impressions cache is full
    impressions.setOnFullQueueCb(function() {
        if (syncTask.isRunning()) {
            log.info((0, _constants.SUBMITTERS_PUSH_FULL_QUEUE), [
                DATA_NAME
            ]);
            syncTask.execute();
        }
    // If submitter is stopped (e.g., user consent declined or unknown, or app state offline), we don't send the data.
    // Data will be sent when submitter is resumed.
    });
    return syncTask;
}

},{"../../utils/lang":"jowD0","./submitter":"brzd3","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1WTv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Converts `impressionCounts` data from cache into request payload.
 */ parcelHelpers.export(exports, "fromImpressionCountsCollector", ()=>fromImpressionCountsCollector);
/**
 * Submitter that periodically posts impression counts
 */ parcelHelpers.export(exports, "impressionCountsSubmitterFactory", ()=>impressionCountsSubmitterFactory);
var _submitter = require("./submitter");
function fromImpressionCountsCollector(impressionsCount) {
    var pf = [];
    var keys = Object.keys(impressionsCount);
    for(var i = 0; i < keys.length; i++){
        var splitted = keys[i].split("::");
        if (splitted.length !== 2) continue;
        var featureName = splitted[0];
        var timeFrame = splitted[1];
        var impressionsInTimeframe = {
            f: featureName,
            m: Number(timeFrame),
            rc: impressionsCount[keys[i]] // Count
        };
        pf.push(impressionsInTimeframe);
    }
    return {
        pf: pf
    };
}
var IMPRESSIONS_COUNT_RATE = 1800000; // 30 minutes
function impressionCountsSubmitterFactory(params) {
    var log = params.settings.log, postTestImpressionsCount = params.splitApi.postTestImpressionsCount, impressionCounts = params.storage.impressionCounts;
    if (impressionCounts) // retry impressions counts only once.
    return (0, _submitter.submitterFactory)(log, postTestImpressionsCount, impressionCounts, IMPRESSIONS_COUNT_RATE, "impression counts", fromImpressionCountsCollector, 1);
}

},{"./submitter":"brzd3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"giBon":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTelemetryConfigStats", ()=>getTelemetryConfigStats);
/**
 * Converts data from telemetry cache and settings into /metrics/config request payload.
 */ parcelHelpers.export(exports, "telemetryCacheConfigAdapter", ()=>telemetryCacheConfigAdapter);
/**
 * Submitter that periodically posts telemetry data
 */ parcelHelpers.export(exports, "telemetrySubmitterFactory", ()=>telemetrySubmitterFactory);
var _submitter = require("./submitter");
var _constants = require("../../utils/constants");
var _constants1 = require("../../readiness/constants");
var _settingsValidation = require("../../utils/settingsValidation");
var _apiKey = require("../../utils/inputValidation/apiKey");
var _timer = require("../../utils/timeTracker/timer");
var _objectAssign = require("../../utils/lang/objectAssign");
var _a, _b, _c;
var OPERATION_MODE_MAP = (_a = {}, _a[0, _constants.STANDALONE_MODE] = (0, _constants.STANDALONE_ENUM), _a[0, _constants.CONSUMER_MODE] = (0, _constants.CONSUMER_ENUM), _a[0, _constants.CONSUMER_PARTIAL_MODE] = (0, _constants.CONSUMER_PARTIAL_ENUM), _a);
var IMPRESSIONS_MODE_MAP = (_b = {}, _b[0, _constants.OPTIMIZED] = (0, _constants.OPTIMIZED_ENUM), _b[0, _constants.DEBUG] = (0, _constants.DEBUG_ENUM), _b[0, _constants.NONE] = (0, _constants.NONE_ENUM), _b);
var USER_CONSENT_MAP = (_c = {}, _c[0, _constants.CONSENT_UNKNOWN] = 1, _c[0, _constants.CONSENT_GRANTED] = 2, _c[0, _constants.CONSENT_DECLINED] = 3, _c);
function getActiveFactories() {
    return Object.keys((0, _apiKey.usedKeysMap)).length;
}
function getRedundantActiveFactories() {
    return Object.keys((0, _apiKey.usedKeysMap)).reduce(function(acum, sdkKey) {
        return acum + (0, _apiKey.usedKeysMap)[sdkKey] - 1;
    }, 0);
}
function getTelemetryFlagSetsStats(splitFiltersValidation) {
    // Group every configured flag set in an unique array called originalSets
    var flagSetsTotal = 0;
    splitFiltersValidation.validFilters.forEach(function(filter) {
        if (filter.type === "bySet") flagSetsTotal += filter.values.length;
    });
    var flagSetsValid = splitFiltersValidation.groupedFilters.bySet.length;
    var flagSetsIgnored = flagSetsTotal - flagSetsValid;
    return {
        flagSetsTotal: flagSetsTotal,
        flagSetsIgnored: flagSetsIgnored
    };
}
function getTelemetryConfigStats(mode, storageType) {
    return {
        oM: OPERATION_MODE_MAP[mode],
        st: storageType.toLowerCase(),
        aF: getActiveFactories(),
        rF: getRedundantActiveFactories()
    };
}
function telemetryCacheConfigAdapter(telemetry, settings) {
    return {
        isEmpty: function() {
            return false;
        },
        clear: function() {},
        pop: function() {
            var urls = settings.urls, scheduler = settings.scheduler;
            var isClientSide = settings.core.key !== undefined;
            var _a = getTelemetryFlagSetsStats(settings.sync.__splitFiltersValidation), flagSetsTotal = _a.flagSetsTotal, flagSetsIgnored = _a.flagSetsIgnored;
            return (0, _objectAssign.objectAssign)(getTelemetryConfigStats(settings.mode, settings.storage.type), {
                sE: settings.streamingEnabled,
                rR: {
                    sp: scheduler.featuresRefreshRate / 1000,
                    se: isClientSide ? undefined : scheduler.segmentsRefreshRate / 1000,
                    ms: isClientSide ? scheduler.segmentsRefreshRate / 1000 : undefined,
                    im: scheduler.impressionsRefreshRate / 1000,
                    ev: scheduler.eventsPushRate / 1000,
                    te: scheduler.telemetryRefreshRate / 1000
                },
                uO: {
                    s: urls.sdk !== (0, _settingsValidation.base).urls.sdk,
                    e: urls.events !== (0, _settingsValidation.base).urls.events,
                    a: urls.auth !== (0, _settingsValidation.base).urls.auth,
                    st: urls.streaming !== (0, _settingsValidation.base).urls.streaming,
                    t: urls.telemetry !== (0, _settingsValidation.base).urls.telemetry
                },
                iQ: scheduler.impressionsQueueSize,
                eQ: scheduler.eventsQueueSize,
                iM: IMPRESSIONS_MODE_MAP[settings.sync.impressionsMode],
                iL: settings.impressionListener ? true : false,
                hP: false,
                tR: telemetry.getTimeUntilReady(),
                tC: telemetry.getTimeUntilReadyFromCache(),
                nR: telemetry.getNonReadyUsage(),
                t: telemetry.popTags(),
                i: settings.integrations && settings.integrations.map(function(int) {
                    return int.type;
                }),
                uC: settings.userConsent ? USER_CONSENT_MAP[settings.userConsent] : 0,
                fsT: flagSetsTotal,
                fsI: flagSetsIgnored
            });
        }
    };
}
function telemetrySubmitterFactory(params) {
    var telemetry = params.storage.telemetry, now = params.platform.now;
    if (!telemetry || !now) return; // No submitter created if telemetry cache is not defined
    var settings = params.settings, _a = params.settings, log = _a.log, telemetryRefreshRate = _a.scheduler.telemetryRefreshRate, splitApi = params.splitApi, readiness = params.readiness, sdkReadinessManager = params.sdkReadinessManager;
    var startTime = (0, _timer.timer)(now);
    var submitter = (0, _submitter.firstPushWindowDecorator)((0, _submitter.submitterFactory)(log, splitApi.postMetricsUsage, telemetry, telemetryRefreshRate, "telemetry stats", undefined, 0, true), telemetryRefreshRate);
    readiness.gate.once((0, _constants1.SDK_READY_FROM_CACHE), function() {
        telemetry.recordTimeUntilReadyFromCache(startTime());
    });
    sdkReadinessManager.incInternalReadyCbCount();
    readiness.gate.once((0, _constants1.SDK_READY), function() {
        telemetry.recordTimeUntilReady(startTime());
        // Post config data when the SDK is ready and if the telemetry submitter was started
        if (submitter.isRunning()) {
            var postMetricsConfigTask = (0, _submitter.submitterFactory)(log, splitApi.postMetricsConfig, telemetryCacheConfigAdapter(telemetry, settings), 0, "telemetry config", undefined, 0, true);
            postMetricsConfigTask.execute();
        }
    });
    return submitter;
}

},{"./submitter":"brzd3","../../utils/constants":"bdnhi","../../readiness/constants":"iHapU","../../utils/settingsValidation":"ky7iW","../../utils/inputValidation/apiKey":"7DqLx","../../utils/timeTracker/timer":"2A4Jm","../../utils/lang/objectAssign":"eGIPQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7DqLx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// @TODO replace ApiKey with SdkKey in function names
/** validates the given SDK key */ parcelHelpers.export(exports, "validateApiKey", ()=>validateApiKey);
parcelHelpers.export(exports, "usedKeysMap", ()=>usedKeysMap);
/** validates the given SDK key and also warns if it is in use */ parcelHelpers.export(exports, "validateAndTrackApiKey", ()=>validateAndTrackApiKey);
parcelHelpers.export(exports, "releaseApiKey", ()=>releaseApiKey);
var _constants = require("../../logger/constants");
var _lang = require("../lang");
var item = "sdk_key";
function validateApiKey(log, maybeSdkKey) {
    var sdkKey = false;
    if (maybeSdkKey == undefined) log.error((0, _constants.ERROR_NULL), [
        (0, _constants.LOG_PREFIX_INSTANTIATION),
        item
    ]);
    else if ((0, _lang.isString)(maybeSdkKey)) {
        if (maybeSdkKey.length > 0) sdkKey = maybeSdkKey;
        else log.error((0, _constants.ERROR_EMPTY), [
            (0, _constants.LOG_PREFIX_INSTANTIATION),
            item
        ]);
    } else log.error((0, _constants.ERROR_INVALID), [
        (0, _constants.LOG_PREFIX_INSTANTIATION),
        item
    ]);
    return sdkKey;
}
var usedKeysMap = {};
function validateAndTrackApiKey(log, maybeSdkKey) {
    var sdkKey = validateApiKey(log, maybeSdkKey);
    // If sdkKey is correct, we'll save it as the instance creation should work.
    if (sdkKey) {
        if (!usedKeysMap[sdkKey]) {
            // If this key is not present, only warning scenarios is that we have factories for other keys.
            usedKeysMap[sdkKey] = 1;
            if (Object.keys(usedKeysMap).length > 1) log.warn((0, _constants.WARN_SDK_KEY), [
                "an instance of the Split factory"
            ]);
        } else {
            log.warn((0, _constants.WARN_SDK_KEY), [
                usedKeysMap[sdkKey] + " factory/ies with this SDK Key"
            ]);
            usedKeysMap[sdkKey]++;
        }
    }
    return sdkKey;
}
function releaseApiKey(sdkKey) {
    if (usedKeysMap[sdkKey]) usedKeysMap[sdkKey]--;
    if (usedKeysMap[sdkKey] === 0) delete usedKeysMap[sdkKey];
}

},{"../../logger/constants":"hiXko","../lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2A4Jm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timer", ()=>timer);
function timer(now) {
    var st = now();
    return function stop() {
        return Math.round(now() - st);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3xDhe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Submitter that periodically posts impression counts
 */ parcelHelpers.export(exports, "uniqueKeysSubmitterFactory", ()=>uniqueKeysSubmitterFactory);
var _constants = require("../../logger/constants");
var _submitter = require("./submitter");
var DATA_NAME = "unique keys";
var UNIQUE_KEYS_RATE = 900000; // 15 minutes
function uniqueKeysSubmitterFactory(params) {
    var _a = params.settings, log = _a.log, key = _a.core.key, _b = params.splitApi, postUniqueKeysBulkCs = _b.postUniqueKeysBulkCs, postUniqueKeysBulkSs = _b.postUniqueKeysBulkSs, uniqueKeys = params.storage.uniqueKeys;
    var isClientSide = key !== undefined;
    var postUniqueKeysBulk = isClientSide ? postUniqueKeysBulkCs : postUniqueKeysBulkSs;
    var syncTask = (0, _submitter.submitterFactory)(log, postUniqueKeysBulk, uniqueKeys, UNIQUE_KEYS_RATE, DATA_NAME);
    // register unique keys submitter to be executed when uniqueKeys cache is full
    uniqueKeys.setOnFullQueueCb(function() {
        if (syncTask.isRunning()) {
            log.info((0, _constants.SUBMITTERS_PUSH_FULL_QUEUE), [
                DATA_NAME
            ]);
            syncTask.execute();
        }
    // If submitter is stopped (e.g., user consent declined or unknown, or app state offline), we don't send the data.
    // Data will be sent when submitter is resumed.
    });
    return syncTask;
}

},{"../../logger/constants":"hiXko","./submitter":"brzd3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4krVV":[function(require,module,exports) {
// time for refresh token
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SECONDS_BEFORE_EXPIRATION", ()=>SECONDS_BEFORE_EXPIRATION);
parcelHelpers.export(exports, "PUSH_NONRETRYABLE_ERROR", ()=>PUSH_NONRETRYABLE_ERROR);
parcelHelpers.export(exports, "PUSH_RETRYABLE_ERROR", ()=>PUSH_RETRYABLE_ERROR);
parcelHelpers.export(exports, "PUSH_SUBSYSTEM_UP", ()=>PUSH_SUBSYSTEM_UP);
parcelHelpers.export(exports, "PUSH_SUBSYSTEM_DOWN", ()=>PUSH_SUBSYSTEM_DOWN);
parcelHelpers.export(exports, "MY_SEGMENTS_UPDATE", ()=>MY_SEGMENTS_UPDATE);
parcelHelpers.export(exports, "MY_SEGMENTS_UPDATE_V2", ()=>MY_SEGMENTS_UPDATE_V2);
parcelHelpers.export(exports, "SEGMENT_UPDATE", ()=>SEGMENT_UPDATE);
parcelHelpers.export(exports, "SPLIT_KILL", ()=>SPLIT_KILL);
parcelHelpers.export(exports, "SPLIT_UPDATE", ()=>SPLIT_UPDATE);
parcelHelpers.export(exports, "CONTROL", ()=>CONTROL);
parcelHelpers.export(exports, "OCCUPANCY", ()=>OCCUPANCY);
parcelHelpers.export(exports, "ControlType", ()=>ControlType);
var SECONDS_BEFORE_EXPIRATION = 600;
var PUSH_NONRETRYABLE_ERROR = "PUSH_NONRETRYABLE_ERROR";
var PUSH_RETRYABLE_ERROR = "PUSH_RETRYABLE_ERROR";
var PUSH_SUBSYSTEM_UP = "PUSH_SUBSYSTEM_UP";
var PUSH_SUBSYSTEM_DOWN = "PUSH_SUBSYSTEM_DOWN";
var MY_SEGMENTS_UPDATE = "MY_SEGMENTS_UPDATE";
var MY_SEGMENTS_UPDATE_V2 = "MY_SEGMENTS_UPDATE_V2";
var SEGMENT_UPDATE = "SEGMENT_UPDATE";
var SPLIT_KILL = "SPLIT_KILL";
var SPLIT_UPDATE = "SPLIT_UPDATE";
var CONTROL = "CONTROL";
var OCCUPANCY = "OCCUPANCY";
var ControlType;
(function(ControlType) {
    ControlType["STREAMING_DISABLED"] = "STREAMING_DISABLED";
    ControlType["STREAMING_PAUSED"] = "STREAMING_PAUSED";
    ControlType["STREAMING_RESUMED"] = "STREAMING_RESUMED";
    ControlType["STREAMING_RESET"] = "STREAMING_RESET";
})(ControlType || (ControlType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jehXo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isConsentGranted", ()=>isConsentGranted);
var _constants = require("../utils/constants");
function isConsentGranted(settings) {
    var userConsent = settings.userConsent;
    // undefined userConsent is handled as granted (default)
    return !userConsent || userConsent === (0, _constants.CONSENT_GRANTED);
}

},{"../utils/constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ywu3D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * PushManager factory:
 * - for server-side if key is not provided in settings.
 * - for client-side, with support for multiple clients, if key is provided in settings
 */ parcelHelpers.export(exports, "pushManagerFactory", ()=>pushManagerFactory);
var _objectAssign = require("../../utils/lang/objectAssign");
var _backoff = require("../../utils/Backoff");
var _ssehandler = require("./SSEHandler");
var _mySegmentsUpdateWorker = require("./UpdateWorkers/MySegmentsUpdateWorker");
var _segmentsUpdateWorker = require("./UpdateWorkers/SegmentsUpdateWorker");
var _splitsUpdateWorker = require("./UpdateWorkers/SplitsUpdateWorker");
var _authClient = require("./AuthClient");
var _lang = require("../../utils/lang");
var _sseclient = require("./SSEClient");
var _key = require("../../utils/key");
var _constants = require("./constants");
var _constants1 = require("../../logger/constants");
var _types = require("./SSEHandler/types");
var _parseUtils = require("./parseUtils");
var _sets = require("../../utils/lang/sets");
var _murmur364 = require("../../utils/murmur3/murmur3_64");
var _constants2 = require("../../utils/constants");
function pushManagerFactory(params, pollingManager) {
    var settings = params.settings, storage = params.storage, splitApi = params.splitApi, readiness = params.readiness, platform = params.platform, telemetryTracker = params.telemetryTracker;
    // `userKey` is the matching key of main client in client-side SDK.
    // It can be used to check if running on client-side or server-side SDK.
    var userKey = settings.core.key ? (0, _key.getMatching)(settings.core.key) : undefined;
    var log = settings.log;
    var sseClient;
    try {
        // `useHeaders` false for client-side, even if the platform EventSource supports headers (e.g., React Native).
        sseClient = new (0, _sseclient.SSEClient)(settings, userKey ? false : true, platform.getEventSource);
    } catch (e) {
        log.warn((0, _constants1.STREAMING_FALLBACK), [
            e
        ]);
        return;
    }
    var authenticate = (0, _authClient.authenticateFactory)(splitApi.fetchAuth);
    // init feedback loop
    var pushEmitter = new platform.EventEmitter();
    var sseHandler = (0, _ssehandler.SSEHandlerFactory)(log, pushEmitter, telemetryTracker);
    sseClient.setEventHandler(sseHandler);
    // init workers
    // MySegmentsUpdateWorker (client-side) are initiated in `add` method
    var segmentsUpdateWorker = userKey ? undefined : (0, _segmentsUpdateWorker.SegmentsUpdateWorker)(log, pollingManager.segmentsSyncTask, storage.segments);
    // For server-side we pass the segmentsSyncTask, used by SplitsUpdateWorker to fetch new segments
    var splitsUpdateWorker = (0, _splitsUpdateWorker.SplitsUpdateWorker)(log, storage.splits, pollingManager.splitsSyncTask, readiness.splits, telemetryTracker, userKey ? undefined : pollingManager.segmentsSyncTask);
    // [Only for client-side] map of hashes to user keys, to dispatch MY_SEGMENTS_UPDATE events to the corresponding MySegmentsUpdateWorker
    var userKeyHashes = {};
    // [Only for client-side] map of user keys to their corresponding hash64 and MySegmentsUpdateWorkers.
    // Hash64 is used to process MY_SEGMENTS_UPDATE_V2 events and dispatch actions to the corresponding MySegmentsUpdateWorker.
    var clients = {};
    // [Only for client-side] variable to flag that a new client was added. It is needed to reconnect streaming.
    var connectForNewClient = false;
    // flag that indicates if `stop/disconnectPush` was called, either by the SyncManager, when the client is destroyed, or due to a PUSH_NONRETRYABLE_ERROR error.
    // It is used to halt the `connectPush` process if it was in progress.
    var disconnected;
    // flag that indicates a PUSH_NONRETRYABLE_ERROR, condition with which starting pushManager again is ignored.
    // true if STREAMING_DISABLED control event, or 'pushEnabled: false', or non-recoverable SSE or Auth errors.
    var disabled; // `disabled` implies `disconnected === true`
    /** PushManager functions related to initialization */ var connectPushRetryBackoff = new (0, _backoff.Backoff)(connectPush, settings.scheduler.pushRetryBackoffBase);
    var timeoutIdTokenRefresh;
    var timeoutIdSseOpen;
    function scheduleTokenRefreshAndSse(authData) {
        // clear scheduled tasks if exist
        if (timeoutIdTokenRefresh) clearTimeout(timeoutIdTokenRefresh);
        if (timeoutIdSseOpen) clearTimeout(timeoutIdSseOpen);
        // Set token refresh 10 minutes before `expirationTime - issuedAt`
        var decodedToken = authData.decodedToken;
        var refreshTokenDelay = decodedToken.exp - decodedToken.iat - (0, _constants.SECONDS_BEFORE_EXPIRATION);
        // Default connDelay of 60 secs
        var connDelay = typeof authData.connDelay === "number" && authData.connDelay >= 0 ? authData.connDelay : 60;
        log.info((0, _constants1.STREAMING_REFRESH_TOKEN), [
            refreshTokenDelay,
            connDelay
        ]);
        timeoutIdTokenRefresh = setTimeout(connectPush, refreshTokenDelay * 1000);
        timeoutIdSseOpen = setTimeout(function() {
            // halt if disconnected
            if (disconnected) return;
            sseClient.open(authData);
        }, connDelay * 1000);
        telemetryTracker.streamingEvent((0, _constants2.TOKEN_REFRESH), decodedToken.exp);
    }
    function connectPush() {
        // Guard condition in case `stop/disconnectPush` has been called (e.g., calling SDK destroy, or app signal close/background)
        if (disconnected) return;
        // @TODO distinguish log for 'Connecting' (1st time) and 'Re-connecting'
        log.info((0, _constants1.STREAMING_CONNECTING));
        disconnected = false;
        var userKeys = userKey ? Object.keys(clients) : undefined;
        authenticate(userKeys).then(function(authData) {
            if (disconnected) return;
            // 'pushEnabled: false' is handled as a PUSH_NONRETRYABLE_ERROR instead of PUSH_SUBSYSTEM_DOWN, in order to
            // close the sseClient in case the org has been bloqued while the instance was connected to streaming
            if (!authData.pushEnabled) {
                log.info((0, _constants1.STREAMING_DISABLED));
                pushEmitter.emit((0, _constants.PUSH_NONRETRYABLE_ERROR));
                return;
            }
            // [Only for client-side] don't open SSE connection if a new shared client was added, since it means that a new authentication is taking place
            if (userKeys && userKeys.length < Object.keys(clients).length) return;
            // Schedule SSE connection and refresh token
            scheduleTokenRefreshAndSse(authData);
        }).catch(function(error) {
            if (disconnected) return;
            log.error((0, _constants1.ERROR_STREAMING_AUTH), [
                error.message
            ]);
            // Handle 4XX HTTP errors: 401 (invalid SDK Key) or 400 (using incorrect SDK Key, i.e., client-side SDK Key on server-side)
            if (error.statusCode >= 400 && error.statusCode < 500) {
                telemetryTracker.streamingEvent((0, _constants2.AUTH_REJECTION));
                pushEmitter.emit((0, _constants.PUSH_NONRETRYABLE_ERROR));
                return;
            }
            // Handle other HTTP and network errors as recoverable errors
            pushEmitter.emit((0, _constants.PUSH_RETRYABLE_ERROR));
        });
    }
    // close SSE connection and cancel scheduled tasks
    function disconnectPush() {
        // Halt disconnecting, just to avoid redundant logs if called multiple times
        if (disconnected) return;
        disconnected = true;
        sseClient.close();
        log.info((0, _constants1.STREAMING_DISCONNECTING));
        if (timeoutIdTokenRefresh) clearTimeout(timeoutIdTokenRefresh);
        if (timeoutIdSseOpen) clearTimeout(timeoutIdSseOpen);
        connectPushRetryBackoff.reset();
        stopWorkers();
    }
    // cancel scheduled fetch retries of Splits, Segments, and MySegments Update Workers
    function stopWorkers() {
        splitsUpdateWorker.stop();
        if (userKey) (0, _lang.forOwn)(clients, function(_a) {
            var worker = _a.worker;
            return worker.stop();
        });
        else segmentsUpdateWorker.stop();
    }
    pushEmitter.on((0, _constants.PUSH_SUBSYSTEM_DOWN), stopWorkers);
    // Only required when streaming connects after a PUSH_RETRYABLE_ERROR.
    // Otherwise it is unnecessary (e.g, STREAMING_RESUMED).
    pushEmitter.on((0, _constants.PUSH_SUBSYSTEM_UP), function() {
        connectPushRetryBackoff.reset();
    });
    /** Fallback to polling without retry due to: STREAMING_DISABLED control event, or 'pushEnabled: false', or non-recoverable SSE and Authentication errors */ pushEmitter.on((0, _constants.PUSH_NONRETRYABLE_ERROR), function handleNonRetryableError() {
        disabled = true;
        // Note: `stopWorkers` is been called twice, but it is not harmful
        disconnectPush();
        pushEmitter.emit((0, _constants.PUSH_SUBSYSTEM_DOWN)); // no harm if polling already
    });
    /** Fallback to polling with retry due to recoverable SSE and Authentication errors */ pushEmitter.on((0, _constants.PUSH_RETRYABLE_ERROR), function handleRetryableError() {
        // SSE connection is closed to avoid repeated errors due to retries
        sseClient.close();
        // retry streaming reconnect with backoff algorithm
        var delayInMillis = connectPushRetryBackoff.scheduleCall();
        log.info((0, _constants1.STREAMING_RECONNECT), [
            delayInMillis / 1000
        ]);
        pushEmitter.emit((0, _constants.PUSH_SUBSYSTEM_DOWN)); // no harm if polling already
    });
    /** STREAMING_RESET notification. Unlike a PUSH_RETRYABLE_ERROR, it doesn't emit PUSH_SUBSYSTEM_DOWN to fallback polling */ pushEmitter.on((0, _constants.ControlType).STREAMING_RESET, function handleStreamingReset() {
        if (disconnected) return; // should never happen
        // Minimum required clean-up.
        // `disconnectPush` cannot be called because it sets `disconnected` and thus `connectPush` will not execute
        if (timeoutIdTokenRefresh) clearTimeout(timeoutIdTokenRefresh);
        connectPush();
    });
    /** Functions related to synchronization (Queues and Workers in the spec) */ pushEmitter.on((0, _constants.SPLIT_KILL), splitsUpdateWorker.killSplit);
    pushEmitter.on((0, _constants.SPLIT_UPDATE), function(parsedData) {
        if (parsedData.d && parsedData.c !== undefined) try {
            var payload = (0, _parseUtils.parseFFUpdatePayload)(parsedData.c, parsedData.d);
            if (payload) {
                splitsUpdateWorker.put(parsedData, payload);
                return;
            }
        } catch (e) {
            log.warn((0, _constants1.STREAMING_PARSING_SPLIT_UPDATE), [
                e
            ]);
        }
        splitsUpdateWorker.put(parsedData);
    });
    if (userKey) {
        pushEmitter.on((0, _constants.MY_SEGMENTS_UPDATE), function handleMySegmentsUpdate(parsedData, channel) {
            var userKeyHash = channel.split("_")[2];
            var userKey = userKeyHashes[userKeyHash];
            if (userKey && clients[userKey]) clients[userKey].worker.put(parsedData.changeNumber, parsedData.includesPayload ? parsedData.segmentList ? parsedData.segmentList : [] : undefined);
        });
        pushEmitter.on((0, _constants.MY_SEGMENTS_UPDATE_V2), function handleMySegmentsUpdate(parsedData) {
            switch(parsedData.u){
                case (0, _types.UpdateStrategy).BoundedFetchRequest:
                    var bitmap_1;
                    try {
                        bitmap_1 = (0, _parseUtils.parseBitmap)(parsedData.d, parsedData.c);
                    } catch (e) {
                        log.warn((0, _constants1.STREAMING_PARSING_MY_SEGMENTS_UPDATE_V2), [
                            "BoundedFetchRequest",
                            e
                        ]);
                        break;
                    }
                    (0, _lang.forOwn)(clients, function(_a) {
                        var hash64 = _a.hash64, worker = _a.worker;
                        if ((0, _parseUtils.isInBitmap)(bitmap_1, hash64.hex)) worker.put(parsedData.changeNumber); // fetch mySegments
                    });
                    return;
                case (0, _types.UpdateStrategy).KeyList:
                    var keyList = void 0, added_1, removed_1;
                    try {
                        keyList = (0, _parseUtils.parseKeyList)(parsedData.d, parsedData.c);
                        added_1 = new (0, _sets._Set)(keyList.a);
                        removed_1 = new (0, _sets._Set)(keyList.r);
                    } catch (e) {
                        log.warn((0, _constants1.STREAMING_PARSING_MY_SEGMENTS_UPDATE_V2), [
                            "KeyList",
                            e
                        ]);
                        break;
                    }
                    (0, _lang.forOwn)(clients, function(_a) {
                        var hash64 = _a.hash64, worker = _a.worker;
                        var add = added_1.has(hash64.dec) ? true : removed_1.has(hash64.dec) ? false : undefined;
                        if (add !== undefined) worker.put(parsedData.changeNumber, {
                            name: parsedData.segmentName,
                            add: add
                        });
                    });
                    return;
                case (0, _types.UpdateStrategy).SegmentRemoval:
                    if (!parsedData.segmentName) {
                        log.warn((0, _constants1.STREAMING_PARSING_MY_SEGMENTS_UPDATE_V2), [
                            "SegmentRemoval",
                            "No segment name was provided"
                        ]);
                        break;
                    }
                    (0, _lang.forOwn)(clients, function(_a) {
                        var worker = _a.worker;
                        return worker.put(parsedData.changeNumber, {
                            name: parsedData.segmentName,
                            add: false
                        });
                    });
                    return;
            }
            // `UpdateStrategy.UnboundedFetchRequest` and fallbacks of other cases
            (0, _lang.forOwn)(clients, function(_a) {
                var worker = _a.worker;
                worker.put(parsedData.changeNumber);
            });
        });
    } else pushEmitter.on((0, _constants.SEGMENT_UPDATE), segmentsUpdateWorker.put);
    return (0, _objectAssign.objectAssign)(// Expose Event Emitter functionality and Event constants
    Object.create(pushEmitter), {
        // Stop/pause push mode.
        // It doesn't emit events. Neither PUSH_SUBSYSTEM_DOWN to start polling.
        stop: function() {
            disconnectPush(); // `handleNonRetryableError` cannot be used as `stop`, because it emits PUSH_SUBSYSTEM_DOWN event, which starts polling.
            if (userKey) this.remove(userKey); // Necessary to properly resume streaming in client-side (e.g., RN SDK transition to foreground).
        },
        // Start/resume push mode.
        // It eventually emits PUSH_SUBSYSTEM_DOWN, that starts polling, or PUSH_SUBSYSTEM_UP, that executes a syncAll
        start: function() {
            // Guard condition to avoid calling `connectPush` again if the `start` method is called multiple times or if push has been disabled.
            if (disabled || disconnected === false) return;
            disconnected = false;
            if (userKey) this.add(userKey, pollingManager.segmentsSyncTask); // client-side
            else setTimeout(connectPush); // server-side runs in next cycle as in client-side, for consistency with client-side
        },
        // true/false if start or stop was called last respectively
        isRunning: function() {
            return disconnected === false;
        },
        // [Only for client-side]
        add: function(userKey, mySegmentsSyncTask) {
            var hash = (0, _authClient.hashUserKey)(userKey);
            if (!userKeyHashes[hash]) {
                userKeyHashes[hash] = userKey;
                clients[userKey] = {
                    hash64: (0, _murmur364.hash64)(userKey),
                    worker: (0, _mySegmentsUpdateWorker.MySegmentsUpdateWorker)(mySegmentsSyncTask, telemetryTracker)
                };
                connectForNewClient = true; // we must reconnect on start, to listen the channel for the new user key
                // Reconnects in case of a new client.
                // Run in next event-loop cycle to save authentication calls
                // in case multiple clients are created in the current cycle.
                setTimeout(function checkForReconnect() {
                    if (connectForNewClient) {
                        connectForNewClient = false;
                        connectPush();
                    }
                }, 0);
            }
        },
        // [Only for client-side]
        remove: function(userKey) {
            var hash = (0, _authClient.hashUserKey)(userKey);
            delete userKeyHashes[hash];
            delete clients[userKey];
        }
    });
}

},{"../../utils/lang/objectAssign":"eGIPQ","../../utils/Backoff":"9s3Rd","./SSEHandler":"7dsMz","./UpdateWorkers/MySegmentsUpdateWorker":"gBIxh","./UpdateWorkers/SegmentsUpdateWorker":"4oC6b","./UpdateWorkers/SplitsUpdateWorker":"iLMNX","./AuthClient":"ifW98","../../utils/lang":"jowD0","./SSEClient":"6fULC","../../utils/key":"dgfaB","./constants":"4krVV","../../logger/constants":"hiXko","./SSEHandler/types":"kmxAL","./parseUtils":"hutNk","../../utils/lang/sets":"ikri1","../../utils/murmur3/murmur3_64":"aZOLy","../../utils/constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9s3Rd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Backoff", ()=>Backoff);
var Backoff = /** @class */ function() {
    /**
     * Schedule function calls with exponential backoff
     *
     * @param {function} cb
     * @param {number} baseMillis
     * @param {number} maxMillis
     */ function Backoff(cb, baseMillis, maxMillis) {
        this.baseMillis = Backoff.__TEST__BASE_MILLIS || baseMillis || Backoff.DEFAULT_BASE_MILLIS;
        this.maxMillis = Backoff.__TEST__MAX_MILLIS || maxMillis || Backoff.DEFAULT_MAX_MILLIS;
        this.attempts = 0;
        this.cb = cb;
    }
    /**
     * Schedule a next call to `cb`
     * @returns scheduled delay in milliseconds
     */ Backoff.prototype.scheduleCall = function() {
        var _this = this;
        var delayInMillis = Math.min(this.baseMillis * Math.pow(2, this.attempts), this.maxMillis);
        if (this.timeoutID) clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(function() {
            _this.timeoutID = undefined;
            _this.cb();
        }, delayInMillis);
        this.attempts++;
        return delayInMillis;
    };
    Backoff.prototype.reset = function() {
        this.attempts = 0;
        if (this.timeoutID) {
            clearTimeout(this.timeoutID);
            this.timeoutID = undefined;
        }
    };
    Backoff.DEFAULT_BASE_MILLIS = 1000; // 1 second
    Backoff.DEFAULT_MAX_MILLIS = 1800000; // 30 minutes
    return Backoff;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7dsMz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Factory for SSEHandler, which processes SSEClient messages and emits the corresponding push events.
 *
 * @param log factory logger
 * @param pushEmitter emitter for events related to streaming support
 */ parcelHelpers.export(exports, "SSEHandlerFactory", ()=>SSEHandlerFactory);
var _notificationParser = require("./NotificationParser");
var _notificationKeeper = require("./NotificationKeeper");
var _constants = require("../constants");
var _constants1 = require("../../../logger/constants");
var _constants2 = require("../../../utils/constants");
function SSEHandlerFactory(log, pushEmitter, telemetryTracker) {
    var notificationKeeper = (0, _notificationKeeper.notificationKeeperFactory)(pushEmitter, telemetryTracker);
    function isRetryableError(error) {
        if (error.parsedData && error.parsedData.code) {
            // Ably error
            var code = error.parsedData.code;
            telemetryTracker.streamingEvent((0, _constants2.ABLY_ERROR), code);
            // 401 errors due to invalid or expired token (e.g., if refresh token coudn't be executed)
            if (40140 <= code && code <= 40149) return true;
            // Others 4XX errors (e.g., bad request from the SDK)
            if (40000 <= code && code <= 49999) return false;
        } else // network errors or 5XX HTTP errors
        telemetryTracker.streamingEvent((0, _constants2.SSE_CONNECTION_ERROR), (0, _constants2.NON_REQUESTED));
        return true;
    }
    return {
        handleOpen: function() {
            notificationKeeper.handleOpen();
        },
        /* HTTP & Network errors */ handleError: function(error) {
            var errorWithParsedData = error;
            try {
                errorWithParsedData = (0, _notificationParser.errorParser)(error);
            } catch (err) {
                log.warn((0, _constants1.STREAMING_PARSING_ERROR_FAILS), [
                    err
                ]);
            }
            var errorMessage = errorWithParsedData.parsedData && errorWithParsedData.parsedData.message || errorWithParsedData.message;
            log.error((0, _constants1.ERROR_STREAMING_SSE), [
                errorMessage
            ]);
            if (isRetryableError(errorWithParsedData)) pushEmitter.emit((0, _constants.PUSH_RETRYABLE_ERROR));
            else pushEmitter.emit((0, _constants.PUSH_NONRETRYABLE_ERROR));
        },
        /* NotificationProcessor */ handleMessage: function(message) {
            var messageWithParsedData;
            try {
                messageWithParsedData = (0, _notificationParser.messageParser)(message);
                if (!messageWithParsedData) return; // Messages with empty data are ignored
            } catch (err) {
                log.warn((0, _constants1.STREAMING_PARSING_MESSAGE_FAILS), [
                    err
                ]);
                return;
            }
            var parsedData = messageWithParsedData.parsedData, data = messageWithParsedData.data, channel = messageWithParsedData.channel, timestamp = messageWithParsedData.timestamp;
            log.debug((0, _constants1.STREAMING_NEW_MESSAGE), [
                data
            ]);
            // we only handle update events if streaming is up.
            if (!notificationKeeper.isStreamingUp() && [
                (0, _constants.OCCUPANCY),
                (0, _constants.CONTROL)
            ].indexOf(parsedData.type) === -1) return;
            switch(parsedData.type){
                /* update events */ case 0, _constants.SPLIT_UPDATE:
                case 0, _constants.SEGMENT_UPDATE:
                case 0, _constants.MY_SEGMENTS_UPDATE_V2:
                case 0, _constants.SPLIT_KILL:
                    pushEmitter.emit(parsedData.type, parsedData);
                    break;
                case 0, _constants.MY_SEGMENTS_UPDATE:
                    pushEmitter.emit(parsedData.type, parsedData, channel);
                    break;
                /* occupancy & control events, handled by NotificationManagerKeeper */ case 0, _constants.OCCUPANCY:
                    notificationKeeper.handleOccupancyEvent(parsedData.metrics.publishers, channel, timestamp);
                    break;
                case 0, _constants.CONTROL:
                    notificationKeeper.handleControlEvent(parsedData.controlType, channel, timestamp);
                    break;
                default:
                    break;
            }
        }
    };
}

},{"./NotificationParser":"k4zF0","./NotificationKeeper":"9hZRx","../constants":"4krVV","../../../logger/constants":"hiXko","../../../utils/constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k4zF0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Parses the `data` JSON string, if exists, of a given SSE error notifications.
 * HTTP errors handled by Ably (e.g., 400 due to invalid token, 401 due to expired token, 500) have the `data` property.
 * Other network and HTTP errors do not have this property.
 *
 * @param {Object} error
 * @throws {SyntaxError} if `error.data` is an invalid JSON string
 */ parcelHelpers.export(exports, "errorParser", ()=>errorParser);
/**
 * Parses the `data` JSON string of a given SSE message notifications.
 * Also assigns the type OCCUPANCY, if it corresponds, so that all supported messages (e.g., SPLIT_UPDATE, CONTROL) have a type.
 *
 * @param message
 * @returns parsed notification message or undefined if the given event data is falsy (e.g, '' or undefined).
 * For example, the EventSource implementation of React-Native for iOS emits a message event with empty data for Ably keepalive comments.
 * @throws {SyntaxError} if `message.data` or `JSON.parse(message.data).data` are invalid JSON strings
 */ parcelHelpers.export(exports, "messageParser", ()=>messageParser);
var _constants = require("../constants");
var _lang = require("../../../utils/lang");
function errorParser(error) {
    // @ts-ignore
    if ((0, _lang.isString)(error.data)) error.parsedData = JSON.parse(error.data); // cannot assign to read only property 'data'
    return error;
}
function messageParser(message) {
    if (!message.data) return;
    var messageData = JSON.parse(message.data);
    messageData.parsedData = JSON.parse(messageData.data);
    // set the event type to OCCUPANCY, to handle all events uniformely
    if (messageData.name && messageData.name === "[meta]occupancy") messageData.parsedData.type = (0, _constants.OCCUPANCY);
    return messageData;
}

},{"../constants":"4krVV","../../../utils/lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hZRx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Factory of notification keeper, which process OCCUPANCY and CONTROL notifications and emits the corresponding push events.
 *
 * @param pushEmitter emitter for events related to streaming support
 */ // @TODO update logic to handle OCCUPANCY for any region and rename according to new spec (e.g.: PUSH_SUBSYSTEM_UP --> PUSH_SUBSYSTEM_UP)
parcelHelpers.export(exports, "notificationKeeperFactory", ()=>notificationKeeperFactory);
var _constants = require("../../../utils/constants");
var _constants1 = require("../constants");
var CONTROL_CHANNEL_REGEXS = [
    /control_pri$/,
    /control_sec$/
];
var STREAMING_EVENT_TYPES = [
    (0, _constants.OCCUPANCY_PRI),
    (0, _constants.OCCUPANCY_SEC)
];
function notificationKeeperFactory(pushEmitter, telemetryTracker) {
    var channels = CONTROL_CHANNEL_REGEXS.map(function(regex) {
        return {
            regex: regex,
            hasPublishers: true,
            oTime: -1,
            cTime: -1 // keep track of most recent control notification timestamp per channel
        };
    });
    // false if the number of publishers is equal to 0 in all regions
    var hasPublishers = true;
    // false if last CONTROL event was STREAMING_PAUSED or STREAMING_DISABLED
    var hasResumed = true;
    function getHasPublishers() {
        return channels.some(function(c) {
            return c.hasPublishers;
        });
    }
    return {
        handleOpen: function() {
            telemetryTracker.streamingEvent((0, _constants.CONNECTION_ESTABLISHED));
            pushEmitter.emit((0, _constants1.PUSH_SUBSYSTEM_UP));
        },
        isStreamingUp: function() {
            return hasResumed && hasPublishers;
        },
        handleOccupancyEvent: function(publishers, channel, timestamp) {
            for(var i = 0; i < channels.length; i++){
                var c = channels[i];
                if (c.regex.test(channel)) {
                    telemetryTracker.streamingEvent(STREAMING_EVENT_TYPES[i], publishers);
                    if (timestamp > c.oTime) {
                        c.oTime = timestamp;
                        c.hasPublishers = publishers !== 0;
                        var hasPublishersNow = getHasPublishers();
                        if (hasResumed) {
                            if (!hasPublishersNow && hasPublishers) pushEmitter.emit((0, _constants1.PUSH_SUBSYSTEM_DOWN));
                            else if (hasPublishersNow && !hasPublishers) pushEmitter.emit((0, _constants1.PUSH_SUBSYSTEM_UP));
                        // nothing to do when hasResumed === false:
                        // streaming is already down for `!hasPublishersNow`, and cannot be up for `hasPublishersNow`
                        }
                        hasPublishers = hasPublishersNow;
                    }
                    return;
                }
            }
        },
        handleControlEvent: function(controlType, channel, timestamp) {
            /* STREAMING_RESET control event is handled by PushManager directly since it doesn't require
             * tracking timestamp and state like OCCUPANCY or CONTROL. It also ignores previous
             * OCCUPANCY and CONTROL notifications, and whether PUSH_SUBSYSTEM_DOWN has been emitted or not */ if (controlType === (0, _constants1.ControlType).STREAMING_RESET) {
                pushEmitter.emit(controlType);
                return;
            }
            for(var i = 0; i < channels.length; i++){
                var c = channels[i];
                if (c.regex.test(channel)) {
                    if (timestamp > c.cTime) {
                        c.cTime = timestamp;
                        if (controlType === (0, _constants1.ControlType).STREAMING_DISABLED) {
                            telemetryTracker.streamingEvent((0, _constants.STREAMING_STATUS), (0, _constants.DISABLED));
                            pushEmitter.emit((0, _constants1.PUSH_NONRETRYABLE_ERROR));
                        } else if (hasPublishers) {
                            if (controlType === (0, _constants1.ControlType).STREAMING_PAUSED && hasResumed) {
                                telemetryTracker.streamingEvent((0, _constants.STREAMING_STATUS), (0, _constants.PAUSED));
                                pushEmitter.emit((0, _constants1.PUSH_SUBSYSTEM_DOWN));
                            } else if (controlType === (0, _constants1.ControlType).STREAMING_RESUMED && !hasResumed) {
                                telemetryTracker.streamingEvent((0, _constants.STREAMING_STATUS), (0, _constants.ENABLED));
                                pushEmitter.emit((0, _constants1.PUSH_SUBSYSTEM_UP));
                            }
                        // nothing to do when hasPublishers === false:
                        // streaming is already down for `STREAMING_PAUSED`, and cannot be up for `STREAMING_RESUMED`
                        }
                        hasResumed = controlType === (0, _constants1.ControlType).STREAMING_RESUMED;
                    }
                    return;
                }
            }
        }
    };
}

},{"../../../utils/constants":"bdnhi","../constants":"4krVV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gBIxh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * MySegmentsUpdateWorker factory
 */ parcelHelpers.export(exports, "MySegmentsUpdateWorker", ()=>MySegmentsUpdateWorker);
var _backoff = require("../../../utils/Backoff");
var _constants = require("../../../utils/constants");
function MySegmentsUpdateWorker(mySegmentsSyncTask, telemetryTracker) {
    var maxChangeNumber = 0; // keeps the maximum changeNumber among queued events
    var currentChangeNumber = -1;
    var handleNewEvent = false;
    var isHandlingEvent;
    var _segmentsData; // keeps the segmentsData (if included in notification payload) from the queued event with maximum changeNumber
    var backoff = new (0, _backoff.Backoff)(__handleMySegmentsUpdateCall);
    function __handleMySegmentsUpdateCall() {
        isHandlingEvent = true;
        if (maxChangeNumber > currentChangeNumber) {
            handleNewEvent = false;
            var currentMaxChangeNumber_1 = maxChangeNumber;
            // fetch mySegments revalidating data if cached
            mySegmentsSyncTask.execute(_segmentsData, true).then(function(result) {
                if (!isHandlingEvent) return; // halt if `stop` has been called
                if (result !== false) {
                    if (_segmentsData) telemetryTracker.trackUpdatesFromSSE((0, _constants.MY_SEGMENT));
                    currentChangeNumber = Math.max(currentChangeNumber, currentMaxChangeNumber_1); // use `currentMaxChangeNumber`, in case that `maxChangeNumber` was updated during fetch.
                }
                if (handleNewEvent) __handleMySegmentsUpdateCall();
                else backoff.scheduleCall();
            });
        } else isHandlingEvent = false;
    }
    return {
        /**
         * Invoked by NotificationProcessor on MY_SEGMENTS_UPDATE event
         *
         * @param {number} changeNumber change number of the MY_SEGMENTS_UPDATE notification
         * @param {SegmentsData | undefined} segmentsData might be undefined
         */ put: function(changeNumber, segmentsData) {
            if (changeNumber <= currentChangeNumber || changeNumber <= maxChangeNumber) return;
            maxChangeNumber = changeNumber;
            handleNewEvent = true;
            _segmentsData = segmentsData;
            if (backoff.timeoutID || !isHandlingEvent) __handleMySegmentsUpdateCall();
            backoff.reset();
        },
        stop: function() {
            isHandlingEvent = false;
            backoff.reset();
        }
    };
}

},{"../../../utils/Backoff":"9s3Rd","../../../utils/constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4oC6b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * SegmentsUpdateWorker factory
 */ parcelHelpers.export(exports, "SegmentsUpdateWorker", ()=>SegmentsUpdateWorker);
var _backoff = require("../../../utils/Backoff");
var _constants = require("./constants");
function SegmentsUpdateWorker(log, segmentsSyncTask, segmentsCache) {
    // Handles retries with CDN bypass per segment name
    function SegmentUpdateWorker(segment) {
        var maxChangeNumber = 0;
        var handleNewEvent = false;
        var isHandlingEvent;
        var cdnBypass;
        var backoff = new (0, _backoff.Backoff)(__handleSegmentUpdateCall, (0, _constants.FETCH_BACKOFF_BASE), (0, _constants.FETCH_BACKOFF_MAX_WAIT));
        function __handleSegmentUpdateCall() {
            isHandlingEvent = true;
            if (maxChangeNumber > segmentsCache.getChangeNumber(segment)) {
                handleNewEvent = false;
                // fetch segments revalidating data if cached
                segmentsSyncTask.execute(false, segment, true, cdnBypass ? maxChangeNumber : undefined).then(function() {
                    if (!isHandlingEvent) return; // halt if `stop` has been called
                    if (handleNewEvent) __handleSegmentUpdateCall();
                    else {
                        var attempts = backoff.attempts + 1;
                        if (maxChangeNumber <= segmentsCache.getChangeNumber(segment)) {
                            log.debug("Refresh completed" + (cdnBypass ? " bypassing the CDN" : "") + " in " + attempts + " attempts.");
                            isHandlingEvent = false;
                            return;
                        }
                        if (attempts < (0, _constants.FETCH_BACKOFF_MAX_RETRIES)) {
                            backoff.scheduleCall();
                            return;
                        }
                        if (cdnBypass) {
                            log.debug("No changes fetched after " + attempts + " attempts with CDN bypassed.");
                            isHandlingEvent = false;
                        } else {
                            backoff.reset();
                            cdnBypass = true;
                            __handleSegmentUpdateCall();
                        }
                    }
                });
            } else isHandlingEvent = false;
        }
        return {
            put: function(changeNumber) {
                var currentChangeNumber = segmentsCache.getChangeNumber(segment);
                if (changeNumber <= currentChangeNumber || changeNumber <= maxChangeNumber) return;
                maxChangeNumber = changeNumber;
                handleNewEvent = true;
                cdnBypass = false;
                if (backoff.timeoutID || !isHandlingEvent) __handleSegmentUpdateCall();
                backoff.reset();
            },
            stop: function() {
                isHandlingEvent = false;
                backoff.reset();
            }
        };
    }
    var segments = {};
    return {
        /**
         * Invoked by NotificationProcessor on SEGMENT_UPDATE event
         *
         * @param {number} changeNumber change number of the SEGMENT_UPDATE notification
         * @param {string} segmentName segment name of the SEGMENT_UPDATE notification
         */ put: function(_a) {
            var changeNumber = _a.changeNumber, segmentName = _a.segmentName;
            if (!segments[segmentName]) segments[segmentName] = SegmentUpdateWorker(segmentName);
            segments[segmentName].put(changeNumber);
        },
        stop: function() {
            Object.keys(segments).forEach(function(segmentName) {
                return segments[segmentName].stop();
            });
        }
    };
}

},{"../../../utils/Backoff":"9s3Rd","./constants":"jqmDM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqmDM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FETCH_BACKOFF_BASE", ()=>FETCH_BACKOFF_BASE);
parcelHelpers.export(exports, "FETCH_BACKOFF_MAX_WAIT", ()=>FETCH_BACKOFF_MAX_WAIT);
parcelHelpers.export(exports, "FETCH_BACKOFF_MAX_RETRIES", ()=>FETCH_BACKOFF_MAX_RETRIES);
var FETCH_BACKOFF_BASE = 10000; // backoff base starting at 10 seconds
var FETCH_BACKOFF_MAX_WAIT = 60000; // don't wait for more than 1 minute
var FETCH_BACKOFF_MAX_RETRIES = 10; // max retries

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iLMNX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * SplitsUpdateWorker factory
 */ parcelHelpers.export(exports, "SplitsUpdateWorker", ()=>SplitsUpdateWorker);
var _constants = require("../../../readiness/constants");
var _backoff = require("../../../utils/Backoff");
var _constants1 = require("../../../utils/constants");
var _constants2 = require("./constants");
function SplitsUpdateWorker(log, splitsCache, splitsSyncTask, splitsEventEmitter, telemetryTracker, segmentsSyncTask) {
    var maxChangeNumber = 0;
    var handleNewEvent = false;
    var isHandlingEvent;
    var cdnBypass;
    var payload;
    var backoff = new (0, _backoff.Backoff)(__handleSplitUpdateCall, (0, _constants2.FETCH_BACKOFF_BASE), (0, _constants2.FETCH_BACKOFF_MAX_WAIT));
    function __handleSplitUpdateCall() {
        isHandlingEvent = true;
        if (maxChangeNumber > splitsCache.getChangeNumber()) {
            handleNewEvent = false;
            var splitUpdateNotification_1 = payload ? {
                payload: payload,
                changeNumber: maxChangeNumber
            } : undefined;
            // fetch splits revalidating data if cached
            splitsSyncTask.execute(true, cdnBypass ? maxChangeNumber : undefined, splitUpdateNotification_1).then(function() {
                if (!isHandlingEvent) return; // halt if `stop` has been called
                if (handleNewEvent) __handleSplitUpdateCall();
                else {
                    if (splitUpdateNotification_1) telemetryTracker.trackUpdatesFromSSE((0, _constants1.SPLITS));
                    // fetch new registered segments for server-side API. Not retrying on error
                    if (segmentsSyncTask) segmentsSyncTask.execute(true);
                    var attempts = backoff.attempts + 1;
                    if (maxChangeNumber <= splitsCache.getChangeNumber()) {
                        log.debug("Refresh completed" + (cdnBypass ? " bypassing the CDN" : "") + " in " + attempts + " attempts.");
                        isHandlingEvent = false;
                        return;
                    }
                    if (attempts < (0, _constants2.FETCH_BACKOFF_MAX_RETRIES)) {
                        backoff.scheduleCall();
                        return;
                    }
                    if (cdnBypass) {
                        log.debug("No changes fetched after " + attempts + " attempts with CDN bypassed.");
                        isHandlingEvent = false;
                    } else {
                        backoff.reset();
                        cdnBypass = true;
                        __handleSplitUpdateCall();
                    }
                }
            });
        } else isHandlingEvent = false;
    }
    /**
     * Invoked by NotificationProcessor on SPLIT_UPDATE event
     *
     * @param {number} changeNumber change number of the SPLIT_UPDATE notification
     */ function put(_a, _payload) {
        var changeNumber = _a.changeNumber, pcn = _a.pcn;
        var currentChangeNumber = splitsCache.getChangeNumber();
        if (changeNumber <= currentChangeNumber || changeNumber <= maxChangeNumber) return;
        maxChangeNumber = changeNumber;
        handleNewEvent = true;
        cdnBypass = false;
        payload = undefined;
        if (_payload && currentChangeNumber === pcn) payload = _payload;
        if (backoff.timeoutID || !isHandlingEvent) __handleSplitUpdateCall();
        backoff.reset();
    }
    return {
        put: put,
        /**
         * Invoked by NotificationProcessor on SPLIT_KILL event
         *
         * @param {number} changeNumber change number of the SPLIT_UPDATE notification
         * @param {string} splitName name of split to kill
         * @param {string} defaultTreatment default treatment value
         */ killSplit: function(_a) {
            var changeNumber = _a.changeNumber, splitName = _a.splitName, defaultTreatment = _a.defaultTreatment;
            if (splitsCache.killLocally(splitName, defaultTreatment, changeNumber)) // trigger an SDK_UPDATE if Split was killed locally
            splitsEventEmitter.emit((0, _constants.SDK_SPLITS_ARRIVED), true);
            // queues the SplitChanges fetch (only if changeNumber is newer)
            put({
                changeNumber: changeNumber
            });
        },
        stop: function() {
            isHandlingEvent = false;
            backoff.reset();
        }
    };
}

},{"../../../readiness/constants":"iHapU","../../../utils/Backoff":"9s3Rd","../../../utils/constants":"bdnhi","./constants":"jqmDM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ifW98":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Factory of authentication function.
 *
 * @param fetchAuth `SplitAPI.fetchAuth` endpoint
 */ parcelHelpers.export(exports, "authenticateFactory", ()=>authenticateFactory);
/**
 * Returns the hash of a given user key
 */ parcelHelpers.export(exports, "hashUserKey", ()=>hashUserKey);
var _objectAssign = require("../../../utils/lang/objectAssign");
var _base64 = require("../../../utils/base64");
var _jwt = require("../../../utils/jwt");
var _murmur3 = require("../../../utils/murmur3/murmur3");
function authenticateFactory(fetchAuth) {
    /**
     * Run authentication requests to Auth Server, and returns a promise that resolves with the decoded JTW token.
     * @param {string[] | undefined} userKeys set of user Keys to track MY_SEGMENTS_CHANGES. It is undefined for server-side API.
     */ return function authenticate(userKeys) {
        return fetchAuth(userKeys).then(function(resp) {
            return resp.json();
        }).then(function(json) {
            if (json.token) {
                var decodedToken = (0, _jwt.decodeJWTtoken)(json.token);
                if (typeof decodedToken.iat !== "number" || typeof decodedToken.exp !== "number") throw new Error('token properties "issuedAt" (iat) or "expiration" (exp) are missing or invalid');
                var channels = JSON.parse(decodedToken["x-ably-capability"]);
                return (0, _objectAssign.objectAssign)({
                    decodedToken: decodedToken,
                    channels: channels
                }, json);
            }
            return json;
        });
    };
}
function hashUserKey(userKey) {
    return (0, _base64.encodeToBase64)((0, _murmur3.hash)(userKey, 0).toString());
}

},{"../../../utils/lang/objectAssign":"eGIPQ","../../../utils/base64":"1qTs0","../../../utils/jwt":"3nmks","../../../utils/murmur3/murmur3":"hXwqx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1qTs0":[function(require,module,exports) {
/**
 * Base64 utils in pure JS, for browser, node and others which don't provide globals `btoa` and `atob`.
 * Implementation based on davidchambers/Base64 (https://github.com/davidchambers/Base64.js).

   Copyright 2019 David Chambers

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Decode a given string value in Base64 format
 *
 * @param {string} input value to decode
 */ parcelHelpers.export(exports, "decodeFromBase64", ()=>decodeFromBase64);
/**
 * Encode a given string value to Base64 format.
 *
 * @param {string} input value to encode
 */ parcelHelpers.export(exports, "encodeToBase64", ()=>encodeToBase64);
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function decodeFromBase64(input) {
    var str = String(input).replace(/[=]+$/, ""); // #31: ExtendScript bad parse of /=
    if (str.length % 4 === 1) throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    var output = "";
    for(// initialize result and counters
    var bc = 0, bs = void 0, buffer = void 0, idx = 0; // get next character
    buffer = str.charAt(idx++); // character found in table? initialize bit storage and add its ascii value;
    // @ts-ignore
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) && (output += String.fromCharCode(255 & bs >> (-2 * bc & 6))))// try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
    return output;
}
function encodeToBase64(input) {
    var str = String(input);
    var output = "";
    for(// initialize result and counter
    var block = void 0, charCode = void 0, idx = 0, map = chars; // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = "=", idx % 1); // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)){
        charCode = str.charCodeAt(idx += 3 / 4);
        if (charCode > 0xFF) throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        // @ts-ignore
        block = block << 8 | charCode;
    }
    return output;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3nmks":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Decode a JWT token.
 */ parcelHelpers.export(exports, "decodeJWTtoken", ()=>decodeJWTtoken);
var _base64 = require("../base64");
function decodeJWTtoken(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    // no need to check availability of `encodeURIComponent`, since it is a function highly supported in browsers, node and other platforms.
    var jsonPayload = decodeURIComponent((0, _base64.decodeFromBase64)(base64).split("").map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
    return JSON.parse(jsonPayload);
}

},{"../base64":"1qTs0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hXwqx":[function(require,module,exports) {
/* eslint-disable no-fallthrough */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hash", ()=>hash);
parcelHelpers.export(exports, "bucket", ()=>bucket);
var _common = require("./common");
/*
 * +----------------------------------------------------------------------------------+
 * | murmurHash3.js v3.0.0 (http://github.com/karanlyons/murmurHash3.js)              |
 * | A TypeScript/JavaScript implementation of MurmurHash3's hashing algorithms.      |
 * |----------------------------------------------------------------------------------|
 * | Copyright (c) 2012-2020 Karan Lyons. Freely distributable under the MIT license. |
 * +----------------------------------------------------------------------------------+
 */ // PUBLIC FUNCTIONS
// ----------------
function hash32(key, seed) {
    //
    // Given a string and an optional seed as an int, returns a 32 bit hash
    // using the x86 flavor of MurmurHash3, as an unsigned int.
    //
    key = key || "";
    seed = seed || 0;
    var remainder = key.length % 4;
    var bytes = key.length - remainder;
    var h1 = seed;
    var k1 = 0;
    var c1 = 0xcc9e2d51;
    var c2 = 0x1b873593;
    for(var i = 0; i < bytes; i = i + 4){
        k1 = key.charCodeAt(i) & 0xff | (key.charCodeAt(i + 1) & 0xff) << 8 | (key.charCodeAt(i + 2) & 0xff) << 16 | (key.charCodeAt(i + 3) & 0xff) << 24;
        k1 = (0, _common.x86Multiply)(k1, c1);
        k1 = (0, _common.x86Rotl)(k1, 15);
        k1 = (0, _common.x86Multiply)(k1, c2);
        h1 ^= k1;
        h1 = (0, _common.x86Rotl)(h1, 13);
        h1 = (0, _common.x86Multiply)(h1, 5) + 0xe6546b64;
    }
    k1 = 0;
    switch(remainder){
        case 3:
            k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            k1 ^= key.charCodeAt(i) & 0xff;
            k1 = (0, _common.x86Multiply)(k1, c1);
            k1 = (0, _common.x86Rotl)(k1, 15);
            k1 = (0, _common.x86Multiply)(k1, c2);
            h1 ^= k1;
    }
    h1 ^= key.length;
    h1 = (0, _common.x86Fmix)(h1);
    return h1 >>> 0;
}
function hash(str, seed) {
    return hash32((0, _common.UTF16ToUTF8)(str), seed >>> 0);
}
function bucket(str, seed) {
    return Math.abs(hash(str, seed) % 100) + 1;
}

},{"./common":"kd4My","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kd4My":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UTF16ToUTF8", ()=>UTF16ToUTF8);
/*!
 * +----------------------------------------------------------------------------------+
 * | murmurHash3.js v3.0.0 (http://github.com/karanlyons/murmurHash3.js)              |
 * | A TypeScript/JavaScript implementation of MurmurHash3's hashing algorithms.      |
 * |----------------------------------------------------------------------------------|
 * | Copyright (c) 2012-2020 Karan Lyons. Freely distributable under the MIT license. |
 * +----------------------------------------------------------------------------------+
 */ parcelHelpers.export(exports, "x86Multiply", ()=>x86Multiply);
parcelHelpers.export(exports, "x86Rotl", ()=>x86Rotl);
parcelHelpers.export(exports, "x86Fmix", ()=>x86Fmix);
var _utfx = require("./utfx");
function UTF16ToUTF8(key) {
    var sd;
    (0, _utfx.encodeUTF16toUTF8)((0, _utfx.stringSource)(key), sd = (0, _utfx.stringDestination)());
    return sd();
}
function x86Multiply(m, n) {
    //
    // Given two 32bit ints, returns the two multiplied together as a
    // 32bit int.
    //
    return (m & 0xffff) * n + (((m >>> 16) * n & 0xffff) << 16);
}
function x86Rotl(m, n) {
    //
    // Given a 32bit int and an int representing a number of bit positions,
    // returns the 32bit int rotated left by that number of positions.
    //
    return m << n | m >>> 32 - n;
}
function x86Fmix(h) {
    //
    // Given a block, returns murmurHash3's final x86 mix of that block.
    //
    h ^= h >>> 16;
    h = x86Multiply(h, 0x85ebca6b);
    h ^= h >>> 13;
    h = x86Multiply(h, 0xc2b2ae35);
    h ^= h >>> 16;
    return h;
}

},{"./utfx":"1BWiL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1BWiL":[function(require,module,exports) {
/*
 Trimmed version of "utfx" library (https://www.npmjs.com/package/utfx/v/1.0.1) used to encode,
 decode and convert UTF8 / UTF16 in JavaScript, with the minimal methods used by the SDK.

 utfx (c) 2014 Daniel Wirtz <dcode@dcode.io>
 Released under the Apache License, Version 2.0
 see: https://github.com/dcodeIO/utfx for details
*/ /**
 * Encodes UTF8 code points to UTF8 bytes.
 * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
 *  respectively `null` if there are no more code points left or a single numeric code point.
 * @param {!function(number)} dst Bytes destination as a function successively called with the next byte
 * @expose
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Converts and encodes UTF16 characters to UTF8 bytes.
 * @param {!function():number|null} src Characters source as a function returning the next char code respectively `null`
 *  if there are no more characters left.
 * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
 * @expose
 */ parcelHelpers.export(exports, "encodeUTF16toUTF8", ()=>encodeUTF16toUTF8);
/**
 * Creates a source function for a string.
 * @param {string} s String to read from
 * @returns {!function():number|null} Source function returning the next char code respectively `null` if there are
 *  no more characters left.
 * @throws {TypeError} If the argument is invalid
 * @expose
 */ parcelHelpers.export(exports, "stringSource", ()=>stringSource);
/**
 * Creates a destination function for a string.
 * @returns {function(number=):undefined|string} Destination function successively called with the next char code.
 *  Returns the final string when called without arguments.
 * @expose
 */ parcelHelpers.export(exports, "stringDestination", ()=>stringDestination);
function encodeUTF8(src, dst) {
    var cp = null;
    if (typeof src === "number") cp = src, src = function() {
        return null;
    };
    while(cp !== null || (cp = src()) !== null){
        if (cp < 0x80) dst(cp & 0x7F);
        else if (cp < 0x800) dst(cp >> 6 & 0x1F | 0xC0), dst(cp & 0x3F | 0x80);
        else if (cp < 0x10000) dst(cp >> 12 & 0x0F | 0xE0), dst(cp >> 6 & 0x3F | 0x80), dst(cp & 0x3F | 0x80);
        else dst(cp >> 18 & 0x07 | 0xF0), dst(cp >> 12 & 0x3F | 0x80), dst(cp >> 6 & 0x3F | 0x80), dst(cp & 0x3F | 0x80);
        cp = null;
    }
}
/**
 * Converts UTF16 characters to UTF8 code points.
 * @param {!function():number|null} src Characters source as a function returning the next char code respectively
 *  `null` if there are no more characters left.
 * @param {!function(number)} dst Code points destination as a function successively called with each converted code
 *  point.
 * @expose
 */ function UTF16toUTF8(src, dst) {
    var c1, c2 = null;
    // eslint-disable-next-line no-constant-condition
    while(true){
        if ((c1 = c2 !== null ? c2 : src()) === null) break;
        if (c1 >= 0xD800 && c1 <= 0xDFFF) {
            if ((c2 = src()) !== null) {
                if (c2 >= 0xDC00 && c2 <= 0xDFFF) {
                    dst((c1 - 0xD800) * 0x400 + c2 - 0xDC00 + 0x10000);
                    c2 = null;
                    continue;
                }
            }
        }
        dst(c1);
    }
    if (c2 !== null) dst(c2);
}
function encodeUTF16toUTF8(src, dst) {
    UTF16toUTF8(src, function(cp) {
        encodeUTF8(cp, dst);
    });
}
/**
 * String.fromCharCode reference for compile time renaming.
 * @type {!function(...[number]):string}
 * @inner
 */ var stringFromCharCode = String.fromCharCode;
function stringSource(s) {
    if (typeof s !== "string") throw TypeError("Illegal argument: " + typeof s);
    var i = 0;
    return function() {
        return i >= s.length ? null : s.charCodeAt(i++);
    };
}
function stringDestination() {
    var cs = [], ps = [];
    return function() {
        if (arguments.length === 0) return ps.join("") + stringFromCharCode.apply(String, cs);
        if (cs.length + arguments.length > 1024) ps.push(stringFromCharCode.apply(String, cs)), cs.length = 0; // @ts-ignore
        Array.prototype.push.apply(cs, arguments);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6fULC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SSEClient", ()=>SSEClient);
var _lang = require("../../../utils/lang");
var VERSION = "1.1";
var CONTROL_CHANNEL_REGEX = /^control_/;
/**
 * Build metadata headers for SSE connection.
 *
 * @param {ISettings} settings Validated settings.
 * @returns {Record<string, string>} Headers object
 */ function buildSSEHeaders(settings) {
    var headers = {
        SplitSDKClientKey: (0, _lang.isString)(settings.core.authorizationKey) ? settings.core.authorizationKey.slice(-4) : "",
        SplitSDKVersion: settings.version
    };
    // ip and hostname are false if IPAddressesEnabled is false
    var _a = settings.runtime, ip = _a.ip, hostname = _a.hostname;
    if (ip) headers["SplitSDKMachineIP"] = ip;
    if (hostname) headers["SplitSDKMachineName"] = hostname;
    return headers;
}
/**
 * Handles streaming connections with EventSource API
 */ var SSEClient = /** @class */ function() {
    /**
     * SSEClient constructor.
     *
     * @param settings Validated settings.
     * @param useHeaders True to send metadata as headers or false to send as query params. If `true`, the provided EventSource must support headers.
     * @param getEventSource Function to get the EventSource constructor.
     * @throws 'EventSource API is not available. ' if EventSource is not available.
     */ function SSEClient(settings, useHeaders, getEventSource) {
        this.eventSource = getEventSource && getEventSource();
        // if eventSource is not available, throw an exception
        if (!this.eventSource) throw new Error("EventSource API is not available. ");
        this.streamingUrl = settings.urls.streaming + "/sse";
        // @TODO get `useHeaders` flag from `getEventSource`, to use EventSource headers on client-side SDKs when possible.
        this.useHeaders = useHeaders;
        this.headers = buildSSEHeaders(settings);
    }
    SSEClient.prototype.setEventHandler = function(handler) {
        this.handler = handler;
    };
    /**
     * Open the connection with a given authToken
     *
     * @param {IAuthTokenPushEnabled} authToken
     * @throws {TypeError} Will throw an error if `authToken` is undefined
     */ SSEClient.prototype.open = function(authToken) {
        this.close(); // it closes connection if previously opened
        var channelsQueryParam = Object.keys(authToken.channels).map(function(channel) {
            var params = CONTROL_CHANNEL_REGEX.test(channel) ? "[?occupancy=metrics.publishers]" : "";
            return encodeURIComponent(params + channel);
        }).join(",");
        var url = this.streamingUrl + "?channels=" + channelsQueryParam + "&accessToken=" + authToken.token + "&v=" + VERSION + "&heartbeats=true"; // same results using `&heartbeats=false`
        this.connection = new this.eventSource(// For client-side SDKs, SplitSDKClientKey and SplitSDKClientKey metadata is passed as query params,
        // because native EventSource implementations for browser doesn't support headers.
        this.useHeaders ? url : url + ("&SplitSDKVersion=" + this.headers.SplitSDKVersion + "&SplitSDKClientKey=" + this.headers.SplitSDKClientKey), // @ts-ignore. For server-side SDKs, metadata is passed via headers. EventSource must support headers, like 'eventsource' package for Node.
        this.useHeaders ? {
            headers: this.headers
        } : undefined);
        if (this.handler) {
            this.connection.addEventListener("open", this.handler.handleOpen);
            this.connection.addEventListener("message", this.handler.handleMessage);
            this.connection.addEventListener("error", this.handler.handleError);
        }
    };
    /** Close connection  */ SSEClient.prototype.close = function() {
        if (this.connection) this.connection.close();
    };
    return SSEClient;
}();

},{"../../../utils/lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dgfaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// function isSplitKeyObject(key: any): key is SplitIO.SplitKeyObject {
//   return key !== undefined && key !== null && typeof key.matchingKey === 'string';
// }
// returns the matchingKey if the Key is defined as an object or the key itself if it is a string
parcelHelpers.export(exports, "getMatching", ()=>getMatching);
// if the key is a string, there's no bucketingKey (undefined)
parcelHelpers.export(exports, "getBucketing", ()=>getBucketing);
/**
 * Verify type of key and return a valid object key used for get treatment for a
 * specific split.
 */ parcelHelpers.export(exports, "keyParser", ()=>keyParser);
var _lang = require("../lang");
function getMatching(key) {
    return (0, _lang.isObject)(key) ? key.matchingKey : key;
}
function getBucketing(key) {
    return (0, _lang.isObject)(key) ? key.bucketingKey : undefined;
}
function keyParser(key) {
    if ((0, _lang.isObject)(key)) return {
        matchingKey: key.matchingKey,
        bucketingKey: key.bucketingKey
    };
    else return {
        matchingKey: key,
        bucketingKey: key
    };
}

},{"../lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kmxAL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Compression", ()=>Compression);
parcelHelpers.export(exports, "UpdateStrategy", ()=>UpdateStrategy);
var Compression;
(function(Compression) {
    Compression[Compression["None"] = 0] = "None";
    Compression[Compression["Gzip"] = 1] = "Gzip";
    Compression[Compression["Zlib"] = 2] = "Zlib";
})(Compression || (Compression = {}));
var UpdateStrategy;
(function(UpdateStrategy) {
    UpdateStrategy[UpdateStrategy["UnboundedFetchRequest"] = 0] = "UnboundedFetchRequest";
    UpdateStrategy[UpdateStrategy["BoundedFetchRequest"] = 1] = "BoundedFetchRequest";
    UpdateStrategy[UpdateStrategy["KeyList"] = 2] = "KeyList";
    UpdateStrategy[UpdateStrategy["SegmentRemoval"] = 3] = "SegmentRemoval";
})(UpdateStrategy || (UpdateStrategy = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hutNk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Decode, decompress and parse the provided 'data' into a KeyList object
 *
 * @param {string} data
 * @param {number} compression
 * @param {boolean} avoidPrecisionLoss true as default, set it as false if dont need to avoid precission loss
 * @returns {{a?: string[], r?: string[] }}
 * @throws if data string cannot be decoded, decompressed or parsed
 */ parcelHelpers.export(exports, "parseKeyList", ()=>parseKeyList);
/**
 * Decode, decompress and parse the provided 'data' into a Bitmap object
 *
 * @param {string} data
 * @param {number} compression
 * @returns {Uint8Array}
 * @throws if data string cannot be decoded or decompressed
 */ parcelHelpers.export(exports, "parseBitmap", ()=>parseBitmap);
/**
 * Check if the 'bitmap' bit at 'hash64hex' position is 1
 *
 * @param {Uint8Array} bitmap
 * @param {string} hash64hex 16-chars string, representing a number in hexa
 * @returns {boolean}
 */ parcelHelpers.export(exports, "isInBitmap", ()=>isInBitmap);
/**
 * Parse feature flags notifications for instant feature flag updates
 *
 * @param {ISplitUpdateData} data
 * @returns {KeyList}
 */ parcelHelpers.export(exports, "parseFFUpdatePayload", ()=>parseFFUpdatePayload);
var _decompress = require("../../utils/decompress");
var _base64 = require("../../utils/base64");
var GZIP = 1;
var ZLIB = 2;
function Uint8ArrayToString(myUint8Arr) {
    return String.fromCharCode.apply(null, myUint8Arr);
}
function StringToUint8Array(myString) {
    var charCodes = myString.split("").map(function(e) {
        return e.charCodeAt(0);
    });
    // eslint-disable-next-line compat/compat
    return new Uint8Array(charCodes);
}
/**
 * Decode and decompress 'data' with 'compression' algorithm
 *
 * @param {string} data
 * @param {number} compression 1 GZIP, 2 ZLIB
 * @returns {Uint8Array}
 * @throws if data string cannot be decoded, decompressed or the provided compression value is invalid (not 1 or 2)
 */ function decompress(data, compression) {
    var compressData = (0, _base64.decodeFromBase64)(data);
    var binData = StringToUint8Array(compressData);
    if (typeof (0, _decompress.algorithms) === "string") throw new Error((0, _decompress.algorithms));
    if (compression === GZIP) return (0, _decompress.algorithms).gunzipSync(binData);
    if (compression === ZLIB) return (0, _decompress.algorithms).unzlibSync(binData);
    throw new Error("Invalid compression algorithm #" + compression);
}
function parseKeyList(data, compression, avoidPrecisionLoss) {
    if (avoidPrecisionLoss === void 0) avoidPrecisionLoss = true;
    var binKeyList = decompress(data, compression);
    var strKeyList = Uint8ArrayToString(binKeyList);
    // replace numbers to strings, to avoid losing precision
    if (avoidPrecisionLoss) strKeyList = strKeyList.replace(/\d+/g, '"$&"');
    return JSON.parse(strKeyList);
}
function parseBitmap(data, compression) {
    return decompress(data, compression);
}
function isInBitmap(bitmap, hash64hex) {
    // using the lowest 32 bits as index, to avoid losing precision when converting to number
    var index = parseInt(hash64hex.slice(8), 16) % (bitmap.length * 8);
    var internal = Math.floor(index / 8);
    var offset = index % 8;
    return (bitmap[internal] & 1 << offset) > 0;
}
function parseFFUpdatePayload(compression, data) {
    var avoidPrecisionLoss = false;
    if (compression > 0) return parseKeyList(data, compression, avoidPrecisionLoss);
    else return JSON.parse((0, _base64.decodeFromBase64)(data));
}

},{"../../utils/decompress":"8GwcK","../../utils/base64":"1qTs0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8GwcK":[function(require,module,exports) {
/*
Trimmed version of "fflate" library (https://www.npmjs.com/package/fflate/v/0.7.1)
used for GZIP/Zlib decompression in JavaScript, with the minimal modules used by the SDK.

MIT License

Copyright (c) 2020 Arjun Barrett

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ /* eslint-disable */ // @ts-nocheck
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "algorithms", ()=>algorithms);
var algorithms = function iifeDecompress() {
    // Handle runtimes without typed arrays
    if ([
        typeof Uint8Array,
        typeof Uint16Array,
        typeof Uint32Array
    ].some(function(v) {
        return v != "function";
    })) return "global Uint8Array object is not available for gzip/zlib decompression";
    // DEFLATE is a complex format; to read this code, you should probably check the RFC first:
    // aliases for shorter compressed code (most minifers don't do this)
    var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
    // fixed length extra bits
    var fleb = new u8([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        5,
        5,
        5,
        5,
        0,
        /* unused */ 0,
        0,
        /* impossible */ 0
    ]);
    // fixed distance extra bits
    // see fleb note
    var fdeb = new u8([
        0,
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        3,
        3,
        4,
        4,
        5,
        5,
        6,
        6,
        7,
        7,
        8,
        8,
        9,
        9,
        10,
        10,
        11,
        11,
        12,
        12,
        13,
        13,
        /* unused */ 0,
        0
    ]);
    // code length index map
    var clim = new u8([
        16,
        17,
        18,
        0,
        8,
        7,
        9,
        6,
        10,
        5,
        11,
        4,
        12,
        3,
        13,
        2,
        14,
        1,
        15
    ]);
    // get base, reverse index map from extra bits
    var freb = function(eb, start) {
        var b = new u16(31);
        for(var i = 0; i < 31; ++i)b[i] = start += 1 << eb[i - 1];
        // numbers here are at max 18 bits
        var r = new u32(b[30]);
        for(var i = 1; i < 30; ++i)for(var j = b[i]; j < b[i + 1]; ++j)r[j] = j - b[i] << 5 | i;
        return [
            b,
            r
        ];
    };
    var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
    // we can ignore the fact that the other numbers are wrong; they never happen anyway
    fl[28] = 258, revfl[258] = 28;
    var _b = freb(fdeb, 0), fd = _b[0];
    // map of value to reverse (assuming 16 bits)
    var rev = new u16(32768);
    for(var i = 0; i < 32768; ++i){
        // reverse table algorithm from SO
        var x = (i & 0xAAAA) >>> 1 | (i & 0x5555) << 1;
        x = (x & 0xCCCC) >>> 2 | (x & 0x3333) << 2;
        x = (x & 0xF0F0) >>> 4 | (x & 0x0F0F) << 4;
        rev[i] = ((x & 0xFF00) >>> 8 | (x & 0x00FF) << 8) >>> 1;
    }
    // create huffman tree from u8 "map": index -> code length for code index
    // mb (max bits) must be at most 15
    // TODO: optimize/split up?
    var hMap = function(cd, mb, r) {
        var s = cd.length;
        // index
        var i = 0;
        // u16 "map": index -> # of codes with bit length = index
        var l = new u16(mb);
        // length of cd must be 288 (total # of codes)
        for(; i < s; ++i)++l[cd[i] - 1];
        // u16 "map": index -> minimum code for bit length = index
        var le = new u16(mb);
        for(i = 0; i < mb; ++i)le[i] = le[i - 1] + l[i - 1] << 1;
        var co;
        if (r) {
            // u16 "map": index -> number of actual bits, symbol for code
            co = new u16(1 << mb);
            // bits to remove for reverser
            var rvb = 15 - mb;
            for(i = 0; i < s; ++i)// ignore 0 lengths
            if (cd[i]) {
                // num encoding both symbol and bits read
                var sv = i << 4 | cd[i];
                // free bits
                var r_1 = mb - cd[i];
                // start value
                var v = le[cd[i] - 1]++ << r_1;
                // m is end value
                for(var m = v | (1 << r_1) - 1; v <= m; ++v)// every 16 bit value starting with the code yields the same result
                co[rev[v] >>> rvb] = sv;
            }
        } else {
            co = new u16(s);
            for(i = 0; i < s; ++i)if (cd[i]) co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
        }
        return co;
    };
    // fixed length tree
    var flt = new u8(288);
    for(var i = 0; i < 144; ++i)flt[i] = 8;
    for(var i = 144; i < 256; ++i)flt[i] = 9;
    for(var i = 256; i < 280; ++i)flt[i] = 7;
    for(var i = 280; i < 288; ++i)flt[i] = 8;
    // fixed distance tree
    var fdt = new u8(32);
    for(var i = 0; i < 32; ++i)fdt[i] = 5;
    // fixed length map
    var flrm = /*#__PURE__*/ hMap(flt, 9, 1);
    // fixed distance map
    var fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
    // find max of array
    var max = function(a) {
        var m = a[0];
        for(var i = 1; i < a.length; ++i)if (a[i] > m) m = a[i];
        return m;
    };
    // read d, starting at bit p and mask with m
    var bits = function(d, p, m) {
        var o = p / 8 | 0;
        return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
    };
    // read d, starting at bit p continuing for at least 16 bits
    var bits16 = function(d, p) {
        var o = p / 8 | 0;
        return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
    };
    // get end of byte
    var shft = function(p) {
        return (p + 7) / 8 | 0;
    };
    // typed array slice - allows garbage collector to free original reference,
    // while being more compatible than .slice
    var slc = function(v, s, e) {
        if (s == null || s < 0) s = 0;
        if (e == null || e > v.length) e = v.length;
        // can't use .constructor in case user-supplied
        var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
        n.set(v.subarray(s, e));
        return n;
    };
    // error codes
    var ec = [
        "unexpected EOF",
        "invalid block type",
        "invalid length/literal",
        "invalid distance",
        "stream finished",
        "no stream handler",
        ,
        "no callback",
        "invalid UTF-8 data",
        "extra field too long",
        "date not in range 1980-2099",
        "filename too long",
        "stream finishing",
        "invalid zip data"
    ];
    var err = function(ind, msg, nt) {
        var e = new Error(msg || ec[ind]);
        e.code = ind;
        if (Error.captureStackTrace) Error.captureStackTrace(e, err);
        if (!nt) throw e;
        return e;
    };
    // expands raw DEFLATE data
    var inflt = function(dat, buf, st) {
        // source length
        var sl = dat.length;
        if (!sl || st && st.f && !st.l) return buf || new u8(0);
        // have to estimate size
        var noBuf = !buf || st;
        // no state
        var noSt = !st || st.i;
        if (!st) st = {};
        // Assumes roughly 33% compression ratio average
        if (!buf) buf = new u8(sl * 3);
        // ensure buffer can fit at least l elements
        var cbuf = function(l) {
            var bl = buf.length;
            // need to increase size to fit
            if (l > bl) {
                // Double or set to necessary, whichever is greater
                var nbuf = new u8(Math.max(bl * 2, l));
                nbuf.set(buf);
                buf = nbuf;
            }
        };
        //  last chunk         bitpos           bytes
        var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
        // total bits
        var tbts = sl * 8;
        do {
            if (!lm) {
                // BFINAL - this is only 1 when last chunk is next
                final = bits(dat, pos, 1);
                // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
                var type = bits(dat, pos + 1, 3);
                pos += 3;
                if (!type) {
                    // go to end of byte boundary
                    var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
                    if (t > sl) {
                        if (noSt) err(0);
                        break;
                    }
                    // ensure size
                    if (noBuf) cbuf(bt + l);
                    // Copy over uncompressed data
                    buf.set(dat.subarray(s, t), bt);
                    // Get new bitpos, update byte count
                    st.b = bt += l, st.p = pos = t * 8, st.f = final;
                    continue;
                } else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
                else if (type == 2) {
                    //  literal                            lengths
                    var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
                    var tl = hLit + bits(dat, pos + 5, 31) + 1;
                    pos += 14;
                    // length+distance tree
                    var ldt = new u8(tl);
                    // code length tree
                    var clt = new u8(19);
                    for(var i = 0; i < hcLen; ++i)// use index map to get real code
                    clt[clim[i]] = bits(dat, pos + i * 3, 7);
                    pos += hcLen * 3;
                    // code lengths bits
                    var clb = max(clt), clbmsk = (1 << clb) - 1;
                    // code lengths map
                    var clm = hMap(clt, clb, 1);
                    for(var i = 0; i < tl;){
                        var r = clm[bits(dat, pos, clbmsk)];
                        // bits read
                        pos += r & 15;
                        // symbol
                        var s = r >>> 4;
                        // code length to copy
                        if (s < 16) ldt[i++] = s;
                        else {
                            //  copy   count
                            var c = 0, n = 0;
                            if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                            else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;
                            else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;
                            while(n--)ldt[i++] = c;
                        }
                    }
                    //    length tree                 distance tree
                    var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
                    // max length bits
                    lbt = max(lt);
                    // max dist bits
                    dbt = max(dt);
                    lm = hMap(lt, lbt, 1);
                    dm = hMap(dt, dbt, 1);
                } else err(1);
                if (pos > tbts) {
                    if (noSt) err(0);
                    break;
                }
            }
            // Make sure the buffer can hold this + the largest possible addition
            // Maximum chunk size (practically, theoretically infinite) is 2^17;
            if (noBuf) cbuf(bt + 131072);
            var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
            var lpos = pos;
            for(;; lpos = pos){
                // bits read, code
                var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
                pos += c & 15;
                if (pos > tbts) {
                    if (noSt) err(0);
                    break;
                }
                if (!c) err(2);
                if (sym < 256) buf[bt++] = sym;
                else if (sym == 256) {
                    lpos = pos, lm = null;
                    break;
                } else {
                    var add = sym - 254;
                    // no extra bits needed if less
                    if (sym > 264) {
                        // index
                        var i = sym - 257, b = fleb[i];
                        add = bits(dat, pos, (1 << b) - 1) + fl[i];
                        pos += b;
                    }
                    // dist
                    var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
                    if (!d) err(3);
                    pos += d & 15;
                    var dt = fd[dsym];
                    if (dsym > 3) {
                        var b = fdeb[dsym];
                        dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
                    }
                    if (pos > tbts) {
                        if (noSt) err(0);
                        break;
                    }
                    if (noBuf) cbuf(bt + 131072);
                    var end = bt + add;
                    for(; bt < end; bt += 4){
                        buf[bt] = buf[bt - dt];
                        buf[bt + 1] = buf[bt + 1 - dt];
                        buf[bt + 2] = buf[bt + 2 - dt];
                        buf[bt + 3] = buf[bt + 3 - dt];
                    }
                    bt = end;
                }
            }
            st.l = lm, st.p = lpos, st.b = bt, st.f = final;
            if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
        }while (!final);
        return bt == buf.length ? buf : slc(buf, 0, bt);
    };
    // gzip footer: -8 to -4 = CRC, -4 to -0 is length
    // gzip start
    var gzs = function(d) {
        if (d[0] != 31 || d[1] != 139 || d[2] != 8) err(6, "invalid gzip data");
        var flg = d[3];
        var st = 10;
        if (flg & 4) st += d[10] | (d[11] << 8) + 2;
        for(var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++]);
        return st + (flg & 2);
    };
    // gzip length
    var gzl = function(d) {
        var l = d.length;
        return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
    };
    // zlib valid
    var zlv = function(d) {
        if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31) err(6, "invalid zlib data");
        if (d[1] & 32) err(6, "invalid zlib data: preset dictionaries not supported");
    };
    return {
        /**
         * Expands GZIP data
         * @param data The data to decompress
         * @param out Where to write the data. GZIP already encodes the output size, so providing this doesn't save memory.
         * @returns The decompressed version of the data
         */ gunzipSync: function(data, out) {
            return inflt(data.subarray(gzs(data), -8), out || new u8(gzl(data)));
        },
        /**
         * Expands Zlib data
         * @param data The data to decompress
         * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
         * @returns The decompressed version of the data
         */ unzlibSync: function(data, out) {
            return inflt((zlv(data), data.subarray(2, -4)), out);
        }
    };
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aZOLy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Gets the higher 64 bits of the x64 version of Murmur3 for 128bits, as decimal and hexadecimal number strings.
 * Used for MySegments channel V2 notifications.
 * @param {string} str
 */ parcelHelpers.export(exports, "hash64", ()=>hash64);
var _murmur3128 = require("./murmur3_128");
/**
 * Use instead of parseInt, to not lose precision when converting big integers (greater than 2^53 - 1)
 */ function hex2dec(s) {
    var i, j, digits = [
        0
    ], carry;
    for(i = 0; i < s.length; i += 1){
        carry = parseInt(s.charAt(i), 16);
        for(j = digits.length - 1; j >= 0; j -= 1){
            digits[j] = digits[j] * 16 + carry;
            carry = digits[j] / 10 | 0;
            digits[j] %= 10;
        }
        while(carry > 0){
            digits.unshift(carry % 10);
            carry = carry / 10 | 0;
        }
    }
    return digits.join("");
}
function hash64(str) {
    var hex = (0, _murmur3128.hash128)(str).slice(0, 16);
    return {
        hex: hex,
        dec: hex2dec(hex) // KeyList notification
    };
}

},{"./murmur3_128":"i0lit","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i0lit":[function(require,module,exports) {
/* eslint-disable no-fallthrough */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * x64 version of Murmur3 for 128bits.
 *
 * @param {string} str
 */ parcelHelpers.export(exports, "hash128", ()=>hash128);
var _common = require("./common");
/*
 * +----------------------------------------------------------------------------------+
 * | murmurHash3.js v3.0.0 (http://github.com/karanlyons/murmurHash3.js)              |
 * | A TypeScript/JavaScript implementation of MurmurHash3's hashing algorithms.      |
 * |----------------------------------------------------------------------------------|
 * | Copyright (c) 2012-2020 Karan Lyons. Freely distributable under the MIT license. |
 * +----------------------------------------------------------------------------------+
 */ // PRIVATE FUNCTIONS
// -----------------
function _x64Add(m, n) {
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // added together as a 64bit int (as an array of two 32bit ints).
    //
    m = [
        m[0] >>> 16,
        m[0] & 0xffff,
        m[1] >>> 16,
        m[1] & 0xffff
    ];
    n = [
        n[0] >>> 16,
        n[0] & 0xffff,
        n[1] >>> 16,
        n[1] & 0xffff
    ];
    var o = [
        0,
        0,
        0,
        0
    ];
    o[3] += m[3] + n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] + n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] + n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] + n[0];
    o[0] &= 0xffff;
    return [
        o[0] << 16 | o[1],
        o[2] << 16 | o[3]
    ];
}
function _x64Multiply(m, n) {
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // multiplied together as a 64bit int (as an array of two 32bit ints).
    //
    m = [
        m[0] >>> 16,
        m[0] & 0xffff,
        m[1] >>> 16,
        m[1] & 0xffff
    ];
    n = [
        n[0] >>> 16,
        n[0] & 0xffff,
        n[1] >>> 16,
        n[1] & 0xffff
    ];
    var o = [
        0,
        0,
        0,
        0
    ];
    o[3] += m[3] * n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] * n[3];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[2] += m[3] * n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] * n[3];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[2] * n[2];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[3] * n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];
    o[0] &= 0xffff;
    return [
        o[0] << 16 | o[1],
        o[2] << 16 | o[3]
    ];
}
function _x64Rotl(m, n) {
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) rotated left by that number of positions.
    //
    n %= 64;
    if (n === 32) return [
        m[1],
        m[0]
    ];
    else if (n < 32) return [
        m[0] << n | m[1] >>> 32 - n,
        m[1] << n | m[0] >>> 32 - n
    ];
    else {
        n -= 32;
        return [
            m[1] << n | m[0] >>> 32 - n,
            m[0] << n | m[1] >>> 32 - n
        ];
    }
}
function _x64LeftShift(m, n) {
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) shifted left by that number of positions.
    //
    n %= 64;
    if (n === 0) return m;
    else if (n < 32) return [
        m[0] << n | m[1] >>> 32 - n,
        m[1] << n
    ];
    else return [
        m[1] << n - 32,
        0
    ];
}
function _x64Xor(m, n) {
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // xored together as a 64bit int (as an array of two 32bit ints).
    //
    return [
        m[0] ^ n[0],
        m[1] ^ n[1]
    ];
}
function _x64Fmix(h) {
    //
    // Given a block, returns murmurHash3's final x64 mix of that block.
    // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
    // only place where we need to right shift 64bit ints.)
    //
    h = _x64Xor(h, [
        0,
        h[0] >>> 1
    ]);
    h = _x64Multiply(h, [
        0xff51afd7,
        0xed558ccd
    ]);
    h = _x64Xor(h, [
        0,
        h[0] >>> 1
    ]);
    h = _x64Multiply(h, [
        0xc4ceb9fe,
        0x1a85ec53
    ]);
    h = _x64Xor(h, [
        0,
        h[0] >>> 1
    ]);
    return h;
}
// PUBLIC FUNCTIONS
// ----------------
function hash128x64(key, seed) {
    //
    // Given a string and an optional seed as an int, returns a 128 bit
    // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
    //
    key = key || "";
    seed = seed || 0;
    var remainder = key.length % 16;
    var bytes = key.length - remainder;
    var h1 = [
        0,
        seed
    ];
    var h2 = [
        0,
        seed
    ];
    var k1 = [
        0,
        0
    ];
    var k2 = [
        0,
        0
    ];
    var c1 = [
        0x87c37b91,
        0x114253d5
    ];
    var c2 = [
        0x4cf5ad43,
        0x2745937f
    ];
    for(var i = 0; i < bytes; i = i + 16){
        k1 = [
            key.charCodeAt(i + 4) & 0xff | (key.charCodeAt(i + 5) & 0xff) << 8 | (key.charCodeAt(i + 6) & 0xff) << 16 | (key.charCodeAt(i + 7) & 0xff) << 24,
            key.charCodeAt(i) & 0xff | (key.charCodeAt(i + 1) & 0xff) << 8 | (key.charCodeAt(i + 2) & 0xff) << 16 | (key.charCodeAt(i + 3) & 0xff) << 24
        ];
        k2 = [
            key.charCodeAt(i + 12) & 0xff | (key.charCodeAt(i + 13) & 0xff) << 8 | (key.charCodeAt(i + 14) & 0xff) << 16 | (key.charCodeAt(i + 15) & 0xff) << 24,
            key.charCodeAt(i + 8) & 0xff | (key.charCodeAt(i + 9) & 0xff) << 8 | (key.charCodeAt(i + 10) & 0xff) << 16 | (key.charCodeAt(i + 11) & 0xff) << 24
        ];
        k1 = _x64Multiply(k1, c1);
        k1 = _x64Rotl(k1, 31);
        k1 = _x64Multiply(k1, c2);
        h1 = _x64Xor(h1, k1);
        h1 = _x64Rotl(h1, 27);
        h1 = _x64Add(h1, h2);
        h1 = _x64Add(_x64Multiply(h1, [
            0,
            5
        ]), [
            0,
            0x52dce729
        ]);
        k2 = _x64Multiply(k2, c2);
        k2 = _x64Rotl(k2, 33);
        k2 = _x64Multiply(k2, c1);
        h2 = _x64Xor(h2, k2);
        h2 = _x64Rotl(h2, 31);
        h2 = _x64Add(h2, h1);
        h2 = _x64Add(_x64Multiply(h2, [
            0,
            5
        ]), [
            0,
            0x38495ab5
        ]);
    }
    k1 = [
        0,
        0
    ];
    k2 = [
        0,
        0
    ];
    switch(remainder){
        case 15:
            k2 = _x64Xor(k2, _x64LeftShift([
                0,
                key.charCodeAt(i + 14)
            ], 48));
        case 14:
            k2 = _x64Xor(k2, _x64LeftShift([
                0,
                key.charCodeAt(i + 13)
            ], 40));
        case 13:
            k2 = _x64Xor(k2, _x64LeftShift([
                0,
                key.charCodeAt(i + 12)
            ], 32));
        case 12:
            k2 = _x64Xor(k2, _x64LeftShift([
                0,
                key.charCodeAt(i + 11)
            ], 24));
        case 11:
            k2 = _x64Xor(k2, _x64LeftShift([
                0,
                key.charCodeAt(i + 10)
            ], 16));
        case 10:
            k2 = _x64Xor(k2, _x64LeftShift([
                0,
                key.charCodeAt(i + 9)
            ], 8));
        case 9:
            k2 = _x64Xor(k2, [
                0,
                key.charCodeAt(i + 8)
            ]);
            k2 = _x64Multiply(k2, c2);
            k2 = _x64Rotl(k2, 33);
            k2 = _x64Multiply(k2, c1);
            h2 = _x64Xor(h2, k2);
        case 8:
            k1 = _x64Xor(k1, _x64LeftShift([
                0,
                key.charCodeAt(i + 7)
            ], 56));
        case 7:
            k1 = _x64Xor(k1, _x64LeftShift([
                0,
                key.charCodeAt(i + 6)
            ], 48));
        case 6:
            k1 = _x64Xor(k1, _x64LeftShift([
                0,
                key.charCodeAt(i + 5)
            ], 40));
        case 5:
            k1 = _x64Xor(k1, _x64LeftShift([
                0,
                key.charCodeAt(i + 4)
            ], 32));
        case 4:
            k1 = _x64Xor(k1, _x64LeftShift([
                0,
                key.charCodeAt(i + 3)
            ], 24));
        case 3:
            k1 = _x64Xor(k1, _x64LeftShift([
                0,
                key.charCodeAt(i + 2)
            ], 16));
        case 2:
            k1 = _x64Xor(k1, _x64LeftShift([
                0,
                key.charCodeAt(i + 1)
            ], 8));
        case 1:
            k1 = _x64Xor(k1, [
                0,
                key.charCodeAt(i)
            ]);
            k1 = _x64Multiply(k1, c1);
            k1 = _x64Rotl(k1, 31);
            k1 = _x64Multiply(k1, c2);
            h1 = _x64Xor(h1, k1);
    }
    h1 = _x64Xor(h1, [
        0,
        key.length
    ]);
    h2 = _x64Xor(h2, [
        0,
        key.length
    ]);
    h1 = _x64Add(h1, h2);
    h2 = _x64Add(h2, h1);
    h1 = _x64Fmix(h1);
    h2 = _x64Fmix(h2);
    h1 = _x64Add(h1, h2);
    h2 = _x64Add(h2, h1);
    return ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8);
}
function hash128(str, seed) {
    return hash128x64((0, _common.UTF16ToUTF8)(str), seed >>> 0);
}

},{"./common":"kd4My","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dFbNh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Expose start / stop mechanism for polling data from services.
 * For client-side API with multiple clients.
 */ parcelHelpers.export(exports, "pollingManagerCSFactory", ()=>pollingManagerCSFactory);
var _lang = require("../../utils/lang");
var _mySegmentsSyncTask = require("./syncTasks/mySegmentsSyncTask");
var _splitsSyncTask = require("./syncTasks/splitsSyncTask");
var _key = require("../../utils/key");
var _constants = require("../../readiness/constants");
var _constants1 = require("../../logger/constants");
function pollingManagerCSFactory(params) {
    var splitApi = params.splitApi, storage = params.storage, readiness = params.readiness, settings = params.settings;
    var log = settings.log;
    var splitsSyncTask = (0, _splitsSyncTask.splitsSyncTaskFactory)(splitApi.fetchSplitChanges, storage, readiness, settings, true);
    // Map of matching keys to their corresponding MySegmentsSyncTask.
    var mySegmentsSyncTasks = {};
    var matchingKey = (0, _key.getMatching)(settings.core.key);
    var mySegmentsSyncTask = add(matchingKey, readiness, storage);
    function startMySegmentsSyncTasks() {
        (0, _lang.forOwn)(mySegmentsSyncTasks, function(mySegmentsSyncTask) {
            mySegmentsSyncTask.start();
        });
    }
    function stopMySegmentsSyncTasks() {
        (0, _lang.forOwn)(mySegmentsSyncTasks, function(mySegmentsSyncTask) {
            if (mySegmentsSyncTask.isRunning()) mySegmentsSyncTask.stop();
        });
    }
    // smart pausing
    readiness.splits.on((0, _constants.SDK_SPLITS_ARRIVED), function() {
        if (!splitsSyncTask.isRunning()) return; // noop if not doing polling
        var splitsHaveSegments = storage.splits.usesSegments();
        if (splitsHaveSegments !== mySegmentsSyncTask.isRunning()) {
            log.info((0, _constants1.POLLING_SMART_PAUSING), [
                splitsHaveSegments ? "ON" : "OFF"
            ]);
            if (splitsHaveSegments) startMySegmentsSyncTasks();
            else stopMySegmentsSyncTasks();
        }
    });
    function add(matchingKey, readiness, storage) {
        var mySegmentsSyncTask = (0, _mySegmentsSyncTask.mySegmentsSyncTaskFactory)(splitApi.fetchMySegments, storage, readiness, settings, matchingKey);
        // smart ready
        function smartReady() {
            if (!readiness.isReady() && !storage.splits.usesSegments()) readiness.segments.emit((0, _constants.SDK_SEGMENTS_ARRIVED));
        }
        if (!storage.splits.usesSegments()) setTimeout(smartReady, 0);
        else readiness.splits.once((0, _constants.SDK_SPLITS_ARRIVED), smartReady);
        mySegmentsSyncTasks[matchingKey] = mySegmentsSyncTask;
        return mySegmentsSyncTask;
    }
    return {
        splitsSyncTask: splitsSyncTask,
        segmentsSyncTask: mySegmentsSyncTask,
        // Start periodic fetching (polling)
        start: function() {
            log.info((0, _constants1.POLLING_START));
            splitsSyncTask.start();
            if (storage.splits.usesSegments()) startMySegmentsSyncTasks();
        },
        // Stop periodic fetching (polling)
        stop: function() {
            log.info((0, _constants1.POLLING_STOP));
            if (splitsSyncTask.isRunning()) splitsSyncTask.stop();
            stopMySegmentsSyncTasks();
        },
        // Used by SyncManager to know if running in polling mode.
        isRunning: splitsSyncTask.isRunning,
        // fetch splits and segments
        syncAll: function() {
            var promises = [
                splitsSyncTask.execute()
            ];
            (0, _lang.forOwn)(mySegmentsSyncTasks, function(mySegmentsSyncTask) {
                promises.push(mySegmentsSyncTask.execute());
            });
            return Promise.all(promises);
        },
        // Support for handling mySegments sync of multiple clients
        add: add,
        remove: function(matchingKey) {
            delete mySegmentsSyncTasks[matchingKey];
        },
        get: function(matchingKey) {
            return mySegmentsSyncTasks[matchingKey];
        }
    };
}

},{"../../utils/lang":"jowD0","./syncTasks/mySegmentsSyncTask":"l7JuA","./syncTasks/splitsSyncTask":"f9auL","../../utils/key":"dgfaB","../../readiness/constants":"iHapU","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l7JuA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates a sync task that periodically executes a `mySegmentsUpdater` task
 */ parcelHelpers.export(exports, "mySegmentsSyncTaskFactory", ()=>mySegmentsSyncTaskFactory);
var _syncTask = require("../../syncTask");
var _mySegmentsFetcher = require("../fetchers/mySegmentsFetcher");
var _mySegmentsUpdater = require("../updaters/mySegmentsUpdater");
function mySegmentsSyncTaskFactory(fetchMySegments, storage, readiness, settings, matchingKey) {
    return (0, _syncTask.syncTaskFactory)(settings.log, (0, _mySegmentsUpdater.mySegmentsUpdaterFactory)(settings.log, (0, _mySegmentsFetcher.mySegmentsFetcherFactory)(fetchMySegments), storage.splits, storage.segments, readiness.segments, settings.startup.requestTimeoutBeforeReady, settings.startup.retriesOnFailureBeforeReady, matchingKey), settings.scheduler.segmentsRefreshRate, "mySegmentsUpdater");
}

},{"../../syncTask":"1QkJf","../fetchers/mySegmentsFetcher":"6J1NZ","../updaters/mySegmentsUpdater":"jl3Dz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6J1NZ":[function(require,module,exports) {
/**
 * Factory of MySegments fetcher.
 * MySegments fetcher is a wrapper around `mySegments` API service that parses the response and handle errors.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mySegmentsFetcherFactory", ()=>mySegmentsFetcherFactory);
function mySegmentsFetcherFactory(fetchMySegments) {
    return function mySegmentsFetcher(userMatchingKey, noCache, // Optional decorator for `fetchMySegments` promise, such as timeout or time tracker
    decorator) {
        var mySegmentsPromise = fetchMySegments(userMatchingKey, noCache);
        if (decorator) mySegmentsPromise = decorator(mySegmentsPromise);
        // Extract segment names
        return mySegmentsPromise.then(function(resp) {
            return resp.json();
        }).then(function(json) {
            return json.mySegments.map(function(segment) {
                return segment.name;
            });
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jl3Dz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * factory of MySegments updater, a task that:
 *  - fetches mySegments using `mySegmentsFetcher`
 *  - updates `mySegmentsCache`
 *  - uses `segmentsEventEmitter` to emit events related to segments data updates
 */ parcelHelpers.export(exports, "mySegmentsUpdaterFactory", ()=>mySegmentsUpdaterFactory);
var _timeout = require("../../../utils/promise/timeout");
var _constants = require("../../../readiness/constants");
var _constants1 = require("../../../logger/constants");
function mySegmentsUpdaterFactory(log, mySegmentsFetcher, splitsCache, mySegmentsCache, segmentsEventEmitter, requestTimeoutBeforeReady, retriesOnFailureBeforeReady, matchingKey) {
    var readyOnAlreadyExistentState = true;
    var startingUp = true;
    /** timeout and telemetry decorator for `splitChangesFetcher` promise  */ function _promiseDecorator(promise) {
        if (startingUp) promise = (0, _timeout.timeout)(requestTimeoutBeforeReady, promise);
        return promise;
    }
    // @TODO if allowing pluggable storages, handle async execution
    function updateSegments(segmentsData) {
        var shouldNotifyUpdate;
        if (Array.isArray(segmentsData)) // Update the list of segment names available
        shouldNotifyUpdate = mySegmentsCache.resetSegments(segmentsData);
        else {
            // Add/Delete the segment
            var name_1 = segmentsData.name, add = segmentsData.add;
            if (mySegmentsCache.isInSegment(name_1) !== add) {
                shouldNotifyUpdate = true;
                if (add) mySegmentsCache.addToSegment(name_1);
                else mySegmentsCache.removeFromSegment(name_1);
            } else shouldNotifyUpdate = false;
        }
        // Notify update if required
        if (splitsCache.usesSegments() && (shouldNotifyUpdate || readyOnAlreadyExistentState)) {
            readyOnAlreadyExistentState = false;
            segmentsEventEmitter.emit((0, _constants.SDK_SEGMENTS_ARRIVED));
        }
    }
    function _mySegmentsUpdater(retry, segmentsData, noCache) {
        var updaterPromise = segmentsData ? // If segmentsData is provided, there is no need to fetch mySegments
        new Promise(function(res) {
            updateSegments(segmentsData);
            res(true);
        }) : // If not provided, fetch mySegments
        mySegmentsFetcher(matchingKey, noCache, _promiseDecorator).then(function(segments) {
            // Only when we have downloaded segments completely, we should not keep retrying anymore
            startingUp = false;
            updateSegments(segments);
            return true;
        });
        return updaterPromise.catch(function(error) {
            if (startingUp && retriesOnFailureBeforeReady > retry) {
                retry += 1;
                log.warn((0, _constants1.SYNC_MYSEGMENTS_FETCH_RETRY), [
                    retry,
                    error
                ]);
                return _mySegmentsUpdater(retry); // no need to forward `segmentList` and `noCache` params
            } else startingUp = false;
            return false;
        });
    }
    /**
     * MySegments updater returns a promise that resolves with a `false` boolean value if it fails to fetch mySegments or synchronize them with the storage.
     * Returned promise will not be rejected.
     *
     * @param {SegmentsData | undefined} segmentsData it can be:
     *  (1) the list of mySegments names to sync in the storage,
     *  (2) an object with a segment name and action (true: add, or false: delete) to update the storage,
     *  (3) or `undefined`, for which the updater will fetch mySegments in order to sync the storage.
     * @param {boolean | undefined} noCache true to revalidate data to fetch
     */ return function mySegmentsUpdater(segmentsData, noCache) {
        return _mySegmentsUpdater(0, segmentsData, noCache);
    };
}

},{"../../../utils/promise/timeout":"44tVB","../../../readiness/constants":"iHapU","../../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"44tVB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeout", ()=>timeout);
function timeout(ms, promise) {
    if (ms < 1) return promise;
    return new Promise(function(resolve, reject) {
        var tid = setTimeout(function() {
            reject(new Error("Operation timed out because it exceeded the configured time limit of " + ms + " ms."));
        }, ms);
        promise.then(function(res) {
            clearTimeout(tid);
            resolve(res);
        }, function(err) {
            clearTimeout(tid);
            reject(err);
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9auL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates a sync task that periodically executes a `splitChangesUpdater` task
 */ parcelHelpers.export(exports, "splitsSyncTaskFactory", ()=>splitsSyncTaskFactory);
var _syncTask = require("../../syncTask");
var _splitChangesFetcher = require("../fetchers/splitChangesFetcher");
var _splitChangesUpdater = require("../updaters/splitChangesUpdater");
function splitsSyncTaskFactory(fetchSplitChanges, storage, readiness, settings, isClientSide) {
    return (0, _syncTask.syncTaskFactory)(settings.log, (0, _splitChangesUpdater.splitChangesUpdaterFactory)(settings.log, (0, _splitChangesFetcher.splitChangesFetcherFactory)(fetchSplitChanges), storage.splits, storage.segments, settings.sync.__splitFiltersValidation, readiness.splits, settings.startup.requestTimeoutBeforeReady, settings.startup.retriesOnFailureBeforeReady, isClientSide), settings.scheduler.featuresRefreshRate, "splitChangesUpdater");
}

},{"../../syncTask":"1QkJf","../fetchers/splitChangesFetcher":"e1frA","../updaters/splitChangesUpdater":"M8unr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1frA":[function(require,module,exports) {
/**
 * Factory of SplitChanges fetcher.
 * SplitChanges fetcher is a wrapper around `splitChanges` API service that parses the response and handle errors.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "splitChangesFetcherFactory", ()=>splitChangesFetcherFactory);
function splitChangesFetcherFactory(fetchSplitChanges) {
    return function splitChangesFetcher(since, noCache, till, // Optional decorator for `fetchSplitChanges` promise, such as timeout or time tracker
    decorator) {
        var splitsPromise = fetchSplitChanges(since, noCache, till);
        if (decorator) splitsPromise = decorator(splitsPromise);
        return splitsPromise.then(function(resp) {
            return resp.json();
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"M8unr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Collect segments from a raw split definition.
 * Exported for testing purposes.
 */ parcelHelpers.export(exports, "parseSegments", ()=>parseSegments);
/**
 * Given the list of splits from /splitChanges endpoint, it returns the mutations,
 * i.e., an object with added splits, removed splits and used segments.
 * Exported for testing purposes.
 */ parcelHelpers.export(exports, "computeSplitsMutation", ()=>computeSplitsMutation);
/**
 * factory of SplitChanges updater, a task that:
 *  - fetches split changes using `splitChangesFetcher`
 *  - updates `splitsCache`
 *  - uses `splitsEventEmitter` to emit events related to split data updates
 *
 * @param log  Logger instance
 * @param splitChangesFetcher  Fetcher of `/splitChanges`
 * @param splits  Splits storage, with sync or async methods
 * @param segments  Segments storage, with sync or async methods
 * @param splitsEventEmitter  Optional readiness manager. Not required for synchronizer or producer mode.
 * @param requestTimeoutBeforeReady  How long the updater will wait for the request to timeout. Default 0, i.e., never timeout.
 * @param retriesOnFailureBeforeReady  How many retries on `/splitChanges` we the updater do in case of failure or timeout. Default 0, i.e., no retries.
 */ parcelHelpers.export(exports, "splitChangesUpdaterFactory", ()=>splitChangesUpdaterFactory);
var _sets = require("../../../utils/lang/sets");
var _timeout = require("../../../utils/promise/timeout");
var _constants = require("../../../readiness/constants");
var _constants1 = require("../../../logger/constants");
var _lang = require("../../../utils/lang");
// Checks that all registered segments have been fetched (changeNumber !== -1 for every segment).
// Returns a promise that could be rejected.
// @TODO review together with Segments and MySegments storage APIs
function checkAllSegmentsExist(segments) {
    var registeredSegments = Promise.resolve(segments.getRegisteredSegments());
    return registeredSegments.then(function(segmentNames) {
        return Promise.all(segmentNames.map(function(segmentName) {
            return segments.getChangeNumber(segmentName);
        })).then(function(changeNumbers) {
            return changeNumbers.every(function(changeNumber) {
                return changeNumber !== -1;
            });
        });
    });
}
function parseSegments(_a) {
    var conditions = _a.conditions;
    var segments = new (0, _sets._Set)();
    for(var i = 0; i < conditions.length; i++){
        var matchers = conditions[i].matcherGroup.matchers;
        matchers.forEach(function(matcher) {
            if (matcher.matcherType === "IN_SEGMENT") segments.add(matcher.userDefinedSegmentMatcherData.segmentName);
        });
    }
    return segments;
}
/**
 * If there are defined filters and one feature flag doesn't match with them, its status is changed to 'ARCHIVE' to avoid storing it
 * If there are set filter defined, names filter is ignored
 *
 * @param featureFlag feature flag to be evaluated
 * @param filters splitFiltersValidation bySet | byName
 */ function matchFilters(featureFlag, filters) {
    var _a = filters.groupedFilters, setsFilter = _a.bySet, namesFilter = _a.byName, prefixFilter = _a.byPrefix;
    if (setsFilter.length > 0) return featureFlag.sets && featureFlag.sets.some(function(featureFlagSet) {
        return setsFilter.indexOf(featureFlagSet) > -1;
    });
    var namesFilterConfigured = namesFilter.length > 0;
    var prefixFilterConfigured = prefixFilter.length > 0;
    if (!namesFilterConfigured && !prefixFilterConfigured) return true;
    var matchNames = namesFilterConfigured && namesFilter.indexOf(featureFlag.name) > -1;
    var matchPrefix = prefixFilterConfigured && prefixFilter.some(function(prefix) {
        return (0, _lang.startsWith)(featureFlag.name, prefix);
    });
    return matchNames || matchPrefix;
}
function computeSplitsMutation(entries, filters) {
    var segments = new (0, _sets._Set)();
    var computed = entries.reduce(function(accum, split) {
        if (split.status === "ACTIVE" && matchFilters(split, filters)) {
            accum.added.push([
                split.name,
                split
            ]);
            parseSegments(split).forEach(function(segmentName) {
                segments.add(segmentName);
            });
        } else accum.removed.push(split.name);
        return accum;
    }, {
        added: [],
        removed: [],
        segments: []
    });
    computed.segments = (0, _sets.setToArray)(segments);
    return computed;
}
function splitChangesUpdaterFactory(log, splitChangesFetcher, splits, segments, splitFiltersValidation, splitsEventEmitter, requestTimeoutBeforeReady, retriesOnFailureBeforeReady, isClientSide) {
    if (requestTimeoutBeforeReady === void 0) requestTimeoutBeforeReady = 0;
    if (retriesOnFailureBeforeReady === void 0) retriesOnFailureBeforeReady = 0;
    var startingUp = true;
    /** timeout decorator for `splitChangesFetcher` promise  */ function _promiseDecorator(promise) {
        if (startingUp && requestTimeoutBeforeReady) promise = (0, _timeout.timeout)(requestTimeoutBeforeReady, promise);
        return promise;
    }
    /** Returns true if at least one split was updated */ function isThereUpdate(flagsChange) {
        var added = flagsChange[1], removed = flagsChange[2];
        // There is at least one added or modified feature flag
        if (added && added.some(function(update) {
            return update;
        })) return true;
        // There is at least one removed feature flag
        if (removed && removed.some(function(update) {
            return update;
        })) return true;
        return false;
    }
    /**
     * SplitChanges updater returns a promise that resolves with a `false` boolean value if it fails to fetch splits or synchronize them with the storage.
     * Returned promise will not be rejected.
     *
     * @param {boolean | undefined} noCache true to revalidate data to fetch
     * @param {boolean | undefined} till query param to bypass CDN requests
     */ return function splitChangesUpdater(noCache, till, splitUpdateNotification) {
        /**
         * @param {number} since current changeNumber at splitsCache
         * @param {number} retry current number of retry attempts
         */ function _splitChangesUpdater(since, retry) {
            if (retry === void 0) retry = 0;
            log.debug((0, _constants1.SYNC_SPLITS_FETCH), [
                since
            ]);
            var fetcherPromise = Promise.resolve(splitUpdateNotification ? {
                splits: [
                    splitUpdateNotification.payload
                ],
                till: splitUpdateNotification.changeNumber
            } : splitChangesFetcher(since, noCache, till, _promiseDecorator)).then(function(splitChanges) {
                startingUp = false;
                var mutation = computeSplitsMutation(splitChanges.splits, splitFiltersValidation);
                log.debug((0, _constants1.SYNC_SPLITS_NEW), [
                    mutation.added.length
                ]);
                log.debug((0, _constants1.SYNC_SPLITS_REMOVED), [
                    mutation.removed.length
                ]);
                log.debug((0, _constants1.SYNC_SPLITS_SEGMENTS), [
                    mutation.segments.length
                ]);
                // Write into storage
                // @TODO call `setChangeNumber` only if the other storage operations have succeeded, in order to keep storage consistency
                return Promise.all([
                    // calling first `setChangenumber` method, to perform cache flush if split filter queryString changed
                    splits.setChangeNumber(splitChanges.till),
                    splits.addSplits(mutation.added),
                    splits.removeSplits(mutation.removed),
                    segments.registerSegments(mutation.segments)
                ]).then(function(flagsChange) {
                    if (splitsEventEmitter) // To emit SDK_SPLITS_ARRIVED for server-side SDK, we must check that all registered segments have been fetched
                    return Promise.resolve(!splitsEventEmitter.splitsArrived || since !== splitChanges.till && isThereUpdate(flagsChange) && (isClientSide || checkAllSegmentsExist(segments))).catch(function() {
                        return false;
                    } /** noop. just to handle a possible `checkAllSegmentsExist` rejection, before emitting SDK event */ ).then(function(emitSplitsArrivedEvent) {
                        // emit SDK events
                        if (emitSplitsArrivedEvent) splitsEventEmitter.emit((0, _constants.SDK_SPLITS_ARRIVED));
                        return true;
                    });
                    return true;
                });
            }).catch(function(error) {
                log.warn((0, _constants1.SYNC_SPLITS_FETCH_FAILS), [
                    error
                ]);
                if (startingUp && retriesOnFailureBeforeReady > retry) {
                    retry += 1;
                    log.info((0, _constants1.SYNC_SPLITS_FETCH_RETRY), [
                        retry,
                        error
                    ]);
                    return _splitChangesUpdater(since, retry);
                } else startingUp = false;
                return false;
            });
            // After triggering the requests, if we have cached splits information let's notify that to emit SDK_READY_FROM_CACHE.
            // Wrapping in a promise since checkCache can be async.
            if (splitsEventEmitter && startingUp) Promise.resolve(splits.checkCache()).then(function(isCacheReady) {
                if (isCacheReady) splitsEventEmitter.emit((0, _constants.SDK_SPLITS_CACHE_LOADED));
            });
            return fetcherPromise;
        }
        var sincePromise = Promise.resolve(splits.getChangeNumber()); // `getChangeNumber` never rejects or throws error
        return sincePromise.then(_splitChangesUpdater);
    };
}

},{"../../../utils/lang/sets":"ikri1","../../../utils/promise/timeout":"44tVB","../../../readiness/constants":"iHapU","../../../logger/constants":"hiXko","../../../utils/lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8QAtd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sdkManagerFactory", ()=>sdkManagerFactory);
var _objectAssign = require("../utils/lang/objectAssign");
var _thenable = require("../utils/promise/thenable");
var _lang = require("../utils/lang");
var _inputValidation = require("../utils/inputValidation");
var _mode = require("../utils/settingsValidation/mode");
var _constants = require("../utils/constants");
function collectTreatments(splitObject) {
    var conditions = splitObject.conditions;
    // Rollout conditions are supposed to have the entire partitions list, so we find the first one.
    var allTreatmentsCondition = (0, _lang.find)(conditions, function(cond) {
        return cond.conditionType === "ROLLOUT";
    });
    // Localstorage mode could fall into a no rollout conditions state. Take the first condition in that case.
    if (!allTreatmentsCondition) allTreatmentsCondition = conditions[0];
    // Then extract the treatments from the partitions
    return allTreatmentsCondition ? allTreatmentsCondition.partitions.map(function(v) {
        return v.treatment;
    }) : [];
}
function objectToView(splitObject) {
    if (!splitObject) return null;
    return {
        name: splitObject.name,
        trafficType: splitObject.trafficTypeName,
        killed: splitObject.killed,
        changeNumber: splitObject.changeNumber || 0,
        treatments: collectTreatments(splitObject),
        configs: splitObject.configurations || {},
        sets: splitObject.sets || [],
        defaultTreatment: splitObject.defaultTreatment
    };
}
function objectsToViews(splitObjects) {
    var views = [];
    splitObjects.forEach(function(split) {
        var view = objectToView(split);
        if (view) views.push(view);
    });
    return views;
}
function sdkManagerFactory(settings, splits, _a) {
    var readinessManager = _a.readinessManager, sdkStatus = _a.sdkStatus;
    var log = settings.log, mode = settings.mode;
    var isAsync = (0, _mode.isConsumerMode)(mode);
    return (0, _objectAssign.objectAssign)(// Proto-linkage of the readiness Event Emitter
    Object.create(sdkStatus), {
        /**
         * Get the feature flag object corresponding to the given feature flag name if valid
         */ split: function(featureFlagName) {
            var splitName = (0, _inputValidation.validateSplit)(log, featureFlagName, (0, _constants.SPLIT_FN_LABEL));
            if (!(0, _inputValidation.validateIfNotDestroyed)(log, readinessManager, (0, _constants.SPLIT_FN_LABEL)) || !(0, _inputValidation.validateIfOperational)(log, readinessManager, (0, _constants.SPLIT_FN_LABEL)) || !splitName) return isAsync ? Promise.resolve(null) : null;
            var split = splits.getSplit(splitName);
            if ((0, _thenable.thenable)(split)) return split.catch(function() {
                return null;
            }).then(function(result) {
                (0, _inputValidation.validateSplitExistence)(log, readinessManager, splitName, result, (0, _constants.SPLIT_FN_LABEL));
                return objectToView(result);
            });
            (0, _inputValidation.validateSplitExistence)(log, readinessManager, splitName, split, (0, _constants.SPLIT_FN_LABEL));
            return objectToView(split);
        },
        /**
         * Get the feature flag objects present on the factory storage
         */ splits: function() {
            if (!(0, _inputValidation.validateIfNotDestroyed)(log, readinessManager, (0, _constants.SPLITS_FN_LABEL)) || !(0, _inputValidation.validateIfOperational)(log, readinessManager, (0, _constants.SPLITS_FN_LABEL))) return isAsync ? Promise.resolve([]) : [];
            var currentSplits = splits.getAll();
            return (0, _thenable.thenable)(currentSplits) ? currentSplits.catch(function() {
                return [];
            }).then(objectsToViews) : objectsToViews(currentSplits);
        },
        /**
         * Get the feature flag names present on the factory storage
         */ names: function() {
            if (!(0, _inputValidation.validateIfNotDestroyed)(log, readinessManager, (0, _constants.NAMES_FN_LABEL)) || !(0, _inputValidation.validateIfOperational)(log, readinessManager, (0, _constants.NAMES_FN_LABEL))) return isAsync ? Promise.resolve([]) : [];
            var splitNames = splits.getSplitNames();
            return (0, _thenable.thenable)(splitNames) ? splitNames.catch(function() {
                return [];
            }) : splitNames;
        }
    });
}

},{"../utils/lang/objectAssign":"eGIPQ","../utils/promise/thenable":"7l6dl","../utils/lang":"jowD0","../utils/inputValidation":"Xyehv","../utils/settingsValidation/mode":"5sFpT","../utils/constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7l6dl":[function(require,module,exports) {
// returns true if the given value is a thenable object
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "thenable", ()=>thenable);
function thenable(o) {
    return o !== undefined && o !== null && typeof o.then === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Xyehv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateApiKey", ()=>(0, _apiKey.validateApiKey));
parcelHelpers.export(exports, "validateAndTrackApiKey", ()=>(0, _apiKey.validateAndTrackApiKey));
parcelHelpers.export(exports, "releaseApiKey", ()=>(0, _apiKey.releaseApiKey));
parcelHelpers.export(exports, "validateAttributes", ()=>(0, _attributes.validateAttributes));
parcelHelpers.export(exports, "validateEvent", ()=>(0, _event.validateEvent));
parcelHelpers.export(exports, "validateEventValue", ()=>(0, _eventValue.validateEventValue));
parcelHelpers.export(exports, "validateEventProperties", ()=>(0, _eventProperties.validateEventProperties));
parcelHelpers.export(exports, "validateKey", ()=>(0, _key.validateKey));
parcelHelpers.export(exports, "validateSplit", ()=>(0, _split.validateSplit));
parcelHelpers.export(exports, "validateSplits", ()=>(0, _splits.validateSplits));
parcelHelpers.export(exports, "validateTrafficType", ()=>(0, _trafficType.validateTrafficType));
parcelHelpers.export(exports, "validateIfNotDestroyed", ()=>(0, _isOperational.validateIfNotDestroyed));
parcelHelpers.export(exports, "validateIfOperational", ()=>(0, _isOperational.validateIfOperational));
parcelHelpers.export(exports, "validateSplitExistence", ()=>(0, _splitExistence.validateSplitExistence));
parcelHelpers.export(exports, "validateTrafficTypeExistence", ()=>(0, _trafficTypeExistence.validateTrafficTypeExistence));
parcelHelpers.export(exports, "validatePreloadedData", ()=>(0, _preloadedData.validatePreloadedData));
var _apiKey = require("./apiKey");
var _attributes = require("./attributes");
var _event = require("./event");
var _eventValue = require("./eventValue");
var _eventProperties = require("./eventProperties");
var _key = require("./key");
var _split = require("./split");
var _splits = require("./splits");
var _trafficType = require("./trafficType");
var _isOperational = require("./isOperational");
var _splitExistence = require("./splitExistence");
var _trafficTypeExistence = require("./trafficTypeExistence");
var _preloadedData = require("./preloadedData");

},{"./apiKey":false,"./attributes":"i952E","./event":"etQBU","./eventValue":"bzJLI","./eventProperties":"j0j1k","./key":"2ZrIH","./split":"21OPV","./splits":"DWwqV","./trafficType":"7rtVF","./isOperational":"dUIUP","./splitExistence":"62C9V","./trafficTypeExistence":false,"./preloadedData":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i952E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateAttributes", ()=>validateAttributes);
parcelHelpers.export(exports, "validateAttributesDeep", ()=>validateAttributesDeep);
var _lang = require("../lang");
var _attribute = require("./attribute");
var _constants = require("../../logger/constants");
function validateAttributes(log, maybeAttrs, method) {
    // Attributes are optional
    if (maybeAttrs == undefined || (0, _lang.isObject)(maybeAttrs)) return maybeAttrs;
    log.error((0, _constants.ERROR_NOT_PLAIN_OBJECT), [
        method,
        "attributes"
    ]);
    return false;
}
function validateAttributesDeep(log, maybeAttributes, method) {
    if (!validateAttributes(log, maybeAttributes, method)) return false;
    var result = true;
    Object.keys(maybeAttributes).forEach(function(attributeKey) {
        if (!(0, _attribute.validateAttribute)(log, attributeKey, maybeAttributes[attributeKey], method)) result = false;
    });
    return result;
}

},{"../lang":"jowD0","./attribute":"1aQ6C","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1aQ6C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateAttribute", ()=>validateAttribute);
var _lang = require("../../utils/lang");
function validateAttribute(log, attributeKey, attributeValue, method) {
    if (!(0, _lang.isString)(attributeKey) || attributeKey.length === 0) {
        log.warn(method + ": you passed an invalid attribute name, attribute name must be a non-empty string.");
        return false;
    }
    var isStringVal = (0, _lang.isString)(attributeValue);
    var isFiniteVal = (0, _lang.isFiniteNumber)(attributeValue);
    var isBoolVal = (0, _lang.isBoolean)(attributeValue);
    var isArrayVal = Array.isArray(attributeValue);
    if (!(isStringVal || isFiniteVal || isBoolVal || isArrayVal)) {
        log.warn(method + ": you passed an invalid attribute value for " + attributeKey + ". Acceptable types are: string, number, boolean and array of strings.");
        return false;
    }
    return true;
}

},{"../../utils/lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"etQBU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateEvent", ()=>validateEvent);
var _constants = require("../../logger/constants");
var _lang = require("../lang");
var EVENT_TYPE_REGEX = /^[a-zA-Z0-9][-_.:a-zA-Z0-9]{0,79}$/;
var item = "event_type";
function validateEvent(log, maybeEvent, method) {
    if (maybeEvent == undefined) log.error((0, _constants.ERROR_NULL), [
        method,
        item
    ]);
    else if (!(0, _lang.isString)(maybeEvent)) log.error((0, _constants.ERROR_INVALID), [
        method,
        item
    ]);
    else {
        if (maybeEvent.length === 0) log.error((0, _constants.ERROR_EMPTY), [
            method,
            item
        ]);
        else if (!EVENT_TYPE_REGEX.test(maybeEvent)) log.error((0, _constants.ERROR_EVENT_TYPE_FORMAT), [
            method,
            maybeEvent
        ]);
        else return maybeEvent;
    }
    return false;
}

},{"../../logger/constants":"hiXko","../lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzJLI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateEventValue", ()=>validateEventValue);
var _constants = require("../../logger/constants");
var _lang = require("../lang");
function validateEventValue(log, maybeValue, method) {
    if ((0, _lang.isFiniteNumber)(maybeValue) || maybeValue == undefined) return maybeValue;
    log.error((0, _constants.ERROR_NOT_FINITE), [
        method
    ]);
    return false;
}

},{"../../logger/constants":"hiXko","../lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j0j1k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateEventProperties", ()=>validateEventProperties);
var _lang = require("../lang");
var _objectAssign = require("../lang/objectAssign");
var _constants = require("../../logger/constants");
var ECMA_SIZES = {
    NULL: 0,
    STRING: 2,
    BOOLEAN: 4,
    NUMBER: 8
};
var MAX_PROPERTIES_AMOUNT = 300;
var MAX_EVENT_SIZE = 32768;
var BASE_EVENT_SIZE = 1024; // We assume 1kb events without properties (avg measured)
function validateEventProperties(log, maybeProperties, method) {
    if (maybeProperties == undefined) return {
        properties: null,
        size: BASE_EVENT_SIZE
    }; // eslint-disable-line eqeqeq
    if (!(0, _lang.isObject)(maybeProperties)) {
        log.error((0, _constants.ERROR_NOT_PLAIN_OBJECT), [
            method,
            "properties"
        ]);
        return {
            properties: false,
            size: BASE_EVENT_SIZE
        };
    }
    var keys = Object.keys(maybeProperties);
    // Shallow clone
    var clone = (0, _objectAssign.objectAssign)({}, maybeProperties);
    // To avoid calculating the size twice we'll return it from here.
    var output = {
        properties: clone,
        size: BASE_EVENT_SIZE // We assume 1kb events without properties (avg measured)
    };
    if (keys.length > MAX_PROPERTIES_AMOUNT) log.warn((0, _constants.WARN_TRIMMING_PROPERTIES), [
        method
    ]);
    for(var i = 0; i < keys.length; i++){
        output.size += keys[i].length * ECMA_SIZES.STRING; // Count the size of the key which is always a string.
        var val = clone[keys[i]];
        var isStringVal = (0, _lang.isString)(val);
        var isFiniteVal = (0, _lang.isFiniteNumber)(val);
        var isBoolVal = (0, _lang.isBoolean)(val);
        var isNullVal = val === null;
        if (!(isStringVal || isFiniteVal || isBoolVal || isNullVal)) {
            clone[keys[i]] = null;
            val = null;
            isNullVal = true;
            log.warn((0, _constants.WARN_SETTING_NULL), [
                method,
                keys[i]
            ]);
        }
        if (isNullVal) output.size += ECMA_SIZES.NULL;
        else if (isFiniteVal) output.size += ECMA_SIZES.NUMBER;
        else if (isBoolVal) output.size += ECMA_SIZES.BOOLEAN;
        else if (isStringVal) output.size += val.length * ECMA_SIZES.STRING;
        if (output.size > MAX_EVENT_SIZE) {
            log.error((0, _constants.ERROR_SIZE_EXCEEDED), [
                method
            ]);
            output.properties = false;
            break;
        }
    }
    return output;
}

},{"../lang":"jowD0","../lang/objectAssign":"eGIPQ","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dUIUP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateIfNotDestroyed", ()=>validateIfNotDestroyed);
parcelHelpers.export(exports, "validateIfOperational", ()=>validateIfOperational);
var _constants = require("../../logger/constants");
function validateIfNotDestroyed(log, readinessManager, method) {
    if (!readinessManager.isDestroyed()) return true;
    log.error((0, _constants.ERROR_CLIENT_DESTROYED), [
        method
    ]);
    return false;
}
function validateIfOperational(log, readinessManager, method, featureFlagNameOrNames) {
    if (readinessManager.isReady() || readinessManager.isReadyFromCache()) return true;
    log.warn((0, _constants.CLIENT_NOT_READY), [
        method,
        featureFlagNameOrNames ? " for feature flag " + featureFlagNameOrNames.toString() : ""
    ]);
    return false;
}

},{"../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"62C9V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This is defined here and in this format mostly because of the logger and the fact that it's considered a validation at product level.
 * But it's not going to run on the input validation layer. In any case, the most compeling reason to use it as we do is to avoid going to Redis and get a split twice.
 */ parcelHelpers.export(exports, "validateSplitExistence", ()=>validateSplitExistence);
var _labels = require("../labels");
var _constants = require("../../logger/constants");
function validateSplitExistence(log, readinessManager, splitName, labelOrSplitObj, method) {
    if (readinessManager.isReady()) {
        if (labelOrSplitObj === (0, _labels.SPLIT_NOT_FOUND) || labelOrSplitObj == null) {
            log.warn((0, _constants.WARN_NOT_EXISTENT_SPLIT), [
                method,
                splitName
            ]);
            return false;
        }
    }
    return true;
}

},{"../labels":"k9ezF","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k9ezF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SPLIT_KILLED", ()=>SPLIT_KILLED);
parcelHelpers.export(exports, "NO_CONDITION_MATCH", ()=>NO_CONDITION_MATCH);
parcelHelpers.export(exports, "SPLIT_NOT_FOUND", ()=>SPLIT_NOT_FOUND);
parcelHelpers.export(exports, "SDK_NOT_READY", ()=>SDK_NOT_READY);
parcelHelpers.export(exports, "EXCEPTION", ()=>EXCEPTION);
parcelHelpers.export(exports, "SPLIT_ARCHIVED", ()=>SPLIT_ARCHIVED);
parcelHelpers.export(exports, "NOT_IN_SPLIT", ()=>NOT_IN_SPLIT);
var SPLIT_KILLED = "killed";
var NO_CONDITION_MATCH = "default rule";
var SPLIT_NOT_FOUND = "definition not found";
var SDK_NOT_READY = "not ready";
var EXCEPTION = "exception";
var SPLIT_ARCHIVED = "archived";
var NOT_IN_SPLIT = "not in split";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"16kbB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Separated from the previous method since on some cases it'll be async.
 */ parcelHelpers.export(exports, "validateTrafficTypeExistence", ()=>validateTrafficTypeExistence);
var _thenable = require("../promise/thenable");
var _constants = require("../constants");
var _constants1 = require("../../logger/constants");
function logTTExistenceWarning(log, maybeTT, method) {
    log.warn((0, _constants1.WARN_NOT_EXISTENT_TT), [
        method,
        maybeTT
    ]);
}
function validateTrafficTypeExistence(log, readinessManager, splitsCache, mode, maybeTT, method) {
    // If not ready or in localhost mode, we won't run the validation
    if (!readinessManager.isReady() || mode === (0, _constants.LOCALHOST_MODE)) return true;
    var res = splitsCache.trafficTypeExists(maybeTT); // never rejects or throws error
    if ((0, _thenable.thenable)(res)) return res.then(function(isValid) {
        if (!isValid) logTTExistenceWarning(log, maybeTT, method);
        return isValid; // propagate result
    });
    else {
        if (!res) logTTExistenceWarning(log, maybeTT, method);
        return res;
    }
}

},{"../promise/thenable":"7l6dl","../constants":"bdnhi","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dvedf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Factory of client method for the client-side API variant where TT is ignored.
 * Therefore, clients don't have a bound TT for the track method.
 */ parcelHelpers.export(exports, "sdkClientMethodCSFactory", ()=>sdkClientMethodCSFactory);
var _clientCS = require("./clientCS");
var _key = require("../utils/inputValidation/key");
var _key1 = require("../utils/key");
var _sdkClient = require("./sdkClient");
var _objectAssign = require("../utils/lang/objectAssign");
var _constants = require("../logger/constants");
var _constants1 = require("../readiness/constants");
function buildInstanceId(key) {
    // @ts-ignore
    return (key.matchingKey ? key.matchingKey : key) + "-" + (key.bucketingKey ? key.bucketingKey : key) + "-";
}
var method = "Client instantiation";
function sdkClientMethodCSFactory(params) {
    var storage = params.storage, syncManager = params.syncManager, sdkReadinessManager = params.sdkReadinessManager, _a = params.settings, key = _a.core.key, readyTimeout = _a.startup.readyTimeout, log = _a.log;
    var mainClientInstance = (0, _clientCS.clientCSDecorator)(log, (0, _sdkClient.sdkClientFactory)(params), key);
    var parsedDefaultKey = (0, _key1.keyParser)(key);
    var defaultInstanceId = buildInstanceId(parsedDefaultKey);
    // Cache instances created per factory.
    var clientInstances = {};
    clientInstances[defaultInstanceId] = mainClientInstance;
    return function client(key) {
        if (key === undefined) {
            log.debug((0, _constants.RETRIEVE_CLIENT_DEFAULT));
            return mainClientInstance;
        }
        // Validate the key value. The trafficType (2nd argument) is ignored
        var validKey = (0, _key.validateKey)(log, key, method);
        if (validKey === false) throw new Error("Shared Client needs a valid key.");
        var instanceId = buildInstanceId(validKey);
        if (!clientInstances[instanceId]) {
            var matchingKey = (0, _key1.getMatching)(validKey);
            var sharedSdkReadiness_1 = sdkReadinessManager.shared(readyTimeout);
            var sharedStorage = storage.shared && storage.shared(matchingKey, function(err) {
                if (err) {
                    sharedSdkReadiness_1.readinessManager.timeout();
                    return;
                }
                // Emit SDK_READY in consumer mode for shared clients
                sharedSdkReadiness_1.readinessManager.segments.emit((0, _constants1.SDK_SEGMENTS_ARRIVED));
            });
            // 3 possibilities:
            // - Standalone mode: both syncManager and sharedSyncManager are defined
            // - Consumer mode: both syncManager and sharedSyncManager are undefined
            // - Consumer partial mode: syncManager is defined (only for submitters) but sharedSyncManager is undefined
            // @ts-ignore
            var sharedSyncManager = syncManager && sharedStorage && syncManager.shared(matchingKey, sharedSdkReadiness_1.readinessManager, sharedStorage);
            // As shared clients reuse all the storage information, we don't need to check here if we
            // will use offline or online mode. We should stick with the original decision.
            clientInstances[instanceId] = (0, _clientCS.clientCSDecorator)(log, (0, _sdkClient.sdkClientFactory)((0, _objectAssign.objectAssign)({}, params, {
                sdkReadinessManager: sharedSdkReadiness_1,
                storage: sharedStorage || storage,
                syncManager: sharedSyncManager,
                signalListener: undefined
            }), true), validKey);
            sharedSyncManager && sharedSyncManager.start();
            log.info((0, _constants.NEW_SHARED_CLIENT));
        } else log.debug((0, _constants.RETRIEVE_CLIENT_EXISTING));
        return clientInstances[instanceId];
    };
}

},{"./clientCS":"k67Xk","../utils/inputValidation/key":"2ZrIH","../utils/key":"dgfaB","./sdkClient":"28F42","../utils/lang/objectAssign":"eGIPQ","../logger/constants":"hiXko","../readiness/constants":"iHapU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k67Xk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Decorator that binds a key and (optionally) a traffic type to client methods
 *
 * @param client sync client instance
 * @param key validated split key
 * @param trafficType validated traffic type
 */ parcelHelpers.export(exports, "clientCSDecorator", ()=>clientCSDecorator);
var _objectAssign = require("../utils/lang/objectAssign");
var _clientAttributesDecoration = require("./clientAttributesDecoration");
function clientCSDecorator(log, client, key, trafficType) {
    var clientCS = (0, _clientAttributesDecoration.clientAttributesDecoration)(log, client);
    return (0, _objectAssign.objectAssign)(clientCS, {
        // In the client-side API, we bind a key to the client `getTreatment*` methods
        getTreatment: clientCS.getTreatment.bind(clientCS, key),
        getTreatmentWithConfig: clientCS.getTreatmentWithConfig.bind(clientCS, key),
        getTreatments: clientCS.getTreatments.bind(clientCS, key),
        getTreatmentsWithConfig: clientCS.getTreatmentsWithConfig.bind(clientCS, key),
        getTreatmentsByFlagSets: clientCS.getTreatmentsByFlagSets.bind(clientCS, key),
        getTreatmentsWithConfigByFlagSets: clientCS.getTreatmentsWithConfigByFlagSets.bind(clientCS, key),
        getTreatmentsByFlagSet: clientCS.getTreatmentsByFlagSet.bind(clientCS, key),
        getTreatmentsWithConfigByFlagSet: clientCS.getTreatmentsWithConfigByFlagSet.bind(clientCS, key),
        // Key is bound to the `track` method. Same thing happens with trafficType but only if provided
        track: trafficType ? clientCS.track.bind(clientCS, key, trafficType) : clientCS.track.bind(clientCS, key),
        // Not part of the public API. These properties are used to support other modules (e.g., Split Suite)
        isClientSide: true,
        key: key,
        trafficType: trafficType
    });
}

},{"../utils/lang/objectAssign":"eGIPQ","./clientAttributesDecoration":"eUZRz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eUZRz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Add in memory attributes storage methods and combine them with any attribute received from the getTreatment/s call
 */ parcelHelpers.export(exports, "clientAttributesDecoration", ()=>clientAttributesDecoration);
var _attributesCacheInMemory = require("../storages/inMemory/AttributesCacheInMemory");
var _attributes = require("../utils/inputValidation/attributes");
var _objectAssign = require("../utils/lang/objectAssign");
function clientAttributesDecoration(log, client) {
    var attributeStorage = new (0, _attributesCacheInMemory.AttributesCacheInMemory)();
    // Keep a reference to the original methods
    var clientGetTreatment = client.getTreatment;
    var clientGetTreatmentWithConfig = client.getTreatmentWithConfig;
    var clientGetTreatments = client.getTreatments;
    var clientGetTreatmentsWithConfig = client.getTreatmentsWithConfig;
    var clientGetTreatmentsByFlagSets = client.getTreatmentsByFlagSets;
    var clientGetTreatmentsWithConfigByFlagSets = client.getTreatmentsWithConfigByFlagSets;
    var clientGetTreatmentsByFlagSet = client.getTreatmentsByFlagSet;
    var clientGetTreatmentsWithConfigByFlagSet = client.getTreatmentsWithConfigByFlagSet;
    var clientTrack = client.track;
    function getTreatment(maybeKey, maybeFeatureFlagName, maybeAttributes) {
        return clientGetTreatment(maybeKey, maybeFeatureFlagName, combineAttributes(maybeAttributes));
    }
    function getTreatmentWithConfig(maybeKey, maybeFeatureFlagName, maybeAttributes) {
        return clientGetTreatmentWithConfig(maybeKey, maybeFeatureFlagName, combineAttributes(maybeAttributes));
    }
    function getTreatments(maybeKey, maybeFeatureFlagNames, maybeAttributes) {
        return clientGetTreatments(maybeKey, maybeFeatureFlagNames, combineAttributes(maybeAttributes));
    }
    function getTreatmentsWithConfig(maybeKey, maybeFeatureFlagNames, maybeAttributes) {
        return clientGetTreatmentsWithConfig(maybeKey, maybeFeatureFlagNames, combineAttributes(maybeAttributes));
    }
    function getTreatmentsByFlagSets(maybeKey, maybeFlagSets, maybeAttributes) {
        return clientGetTreatmentsByFlagSets(maybeKey, maybeFlagSets, combineAttributes(maybeAttributes));
    }
    function getTreatmentsWithConfigByFlagSets(maybeKey, maybeFlagSets, maybeAttributes) {
        return clientGetTreatmentsWithConfigByFlagSets(maybeKey, maybeFlagSets, combineAttributes(maybeAttributes));
    }
    function getTreatmentsByFlagSet(maybeKey, maybeFlagSet, maybeAttributes) {
        return clientGetTreatmentsByFlagSet(maybeKey, maybeFlagSet, combineAttributes(maybeAttributes));
    }
    function getTreatmentsWithConfigByFlagSet(maybeKey, maybeFlagSet, maybeAttributes) {
        return clientGetTreatmentsWithConfigByFlagSet(maybeKey, maybeFlagSet, combineAttributes(maybeAttributes));
    }
    function track(maybeKey, maybeTT, maybeEvent, maybeEventValue, maybeProperties) {
        return clientTrack(maybeKey, maybeTT, maybeEvent, maybeEventValue, maybeProperties);
    }
    function combineAttributes(maybeAttributes) {
        var storedAttributes = attributeStorage.getAll();
        if (Object.keys(storedAttributes).length > 0) return (0, _objectAssign.objectAssign)({}, storedAttributes, maybeAttributes);
        return maybeAttributes;
    }
    return (0, _objectAssign.objectAssign)(client, {
        getTreatment: getTreatment,
        getTreatmentWithConfig: getTreatmentWithConfig,
        getTreatments: getTreatments,
        getTreatmentsWithConfig: getTreatmentsWithConfig,
        getTreatmentsByFlagSets: getTreatmentsByFlagSets,
        getTreatmentsWithConfigByFlagSets: getTreatmentsWithConfigByFlagSets,
        getTreatmentsByFlagSet: getTreatmentsByFlagSet,
        getTreatmentsWithConfigByFlagSet: getTreatmentsWithConfigByFlagSet,
        track: track,
        /**
         * Add an attribute to client's in memory attributes storage
         *
         * @param {string} attributeName Attrinute name
         * @param {string, number, boolean, list} attributeValue Attribute value
         * @returns {boolean} true if the attribute was stored and false otherways
         */ setAttribute: function(attributeName, attributeValue) {
            var attribute = {};
            attribute[attributeName] = attributeValue;
            if (!(0, _attributes.validateAttributesDeep)(log, attribute, "setAttribute")) return false;
            log.debug("stored " + attributeValue + " for attribute " + attributeName);
            return attributeStorage.setAttribute(attributeName, attributeValue);
        },
        /**
         * Returns the attribute with the given name
         *
         * @param {string} attributeName Attribute name
         * @returns {Object} Attribute with the given name
         */ getAttribute: function(attributeName) {
            log.debug("retrieved attribute " + attributeName);
            return attributeStorage.getAttribute(attributeName + "");
        },
        /**
         * Add to client's in memory attributes storage the attributes in 'attributes'
         *
         * @param {Object} attributes Object with attributes to store
         * @returns true if attributes were stored an false otherways
         */ setAttributes: function(attributes) {
            if (!(0, _attributes.validateAttributesDeep)(log, attributes, "setAttributes")) return false;
            return attributeStorage.setAttributes(attributes);
        },
        /**
         * Return all the attributes stored in client's in memory attributes storage
         *
         * @returns {Object} returns all the stored attributes
         */ getAttributes: function() {
            return attributeStorage.getAll();
        },
        /**
         * Removes from client's in memory attributes storage the attribute with the given name
         *
         * @param {string} attributeName
         * @returns {boolean} true if attribute was removed and false otherways
         */ removeAttribute: function(attributeName) {
            log.debug("removed attribute " + attributeName);
            return attributeStorage.removeAttribute(attributeName + "");
        },
        /**
         * Remove all the stored attributes in the client's in memory attribute storage
         */ clearAttributes: function() {
            return attributeStorage.clear();
        }
    });
}

},{"../storages/inMemory/AttributesCacheInMemory":"6mY1C","../utils/inputValidation/attributes":"i952E","../utils/lang/objectAssign":"eGIPQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6mY1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributesCacheInMemory", ()=>AttributesCacheInMemory);
var _objectAssign = require("../../utils/lang/objectAssign");
var AttributesCacheInMemory = /** @class */ function() {
    function AttributesCacheInMemory() {
        this.attributesCache = {};
    }
    /**
     * Create or update the value for the given attribute
     *
     * @param {string} attributeName attribute name
     * @param {Object} attributeValue attribute value
     * @returns {boolean} the attribute was stored
     */ AttributesCacheInMemory.prototype.setAttribute = function(attributeName, attributeValue) {
        this.attributesCache[attributeName] = attributeValue;
        return true;
    };
    /**
     * Retrieves the value of a given attribute
     *
     * @param {string} attributeName attribute name
     * @returns {Object?} stored attribute value
     */ AttributesCacheInMemory.prototype.getAttribute = function(attributeName) {
        return this.attributesCache[attributeName];
    };
    /**
     * Create or update all the given attributes
     *
     * @param {[string, Object]} attributes attributes to create or update
     * @returns {boolean} attributes were stored
     */ AttributesCacheInMemory.prototype.setAttributes = function(attributes) {
        this.attributesCache = (0, _objectAssign.objectAssign)(this.attributesCache, attributes);
        return true;
    };
    /**
     * Retrieve the full attributes map
     *
     * @returns {Map<string, Object>} stored attributes
     */ AttributesCacheInMemory.prototype.getAll = function() {
        return this.attributesCache;
    };
    /**
     * Removes a given attribute from the map
     *
     * @param {string} attributeName attribute to remove
     * @returns {boolean} attribute removed
     */ AttributesCacheInMemory.prototype.removeAttribute = function(attributeName) {
        if (Object.keys(this.attributesCache).indexOf(attributeName) >= 0) {
            delete this.attributesCache[attributeName];
            return true;
        }
        return false;
    };
    /**
     * Clears all attributes stored in the SDK
     *
     */ AttributesCacheInMemory.prototype.clear = function() {
        this.attributesCache = {};
        return true;
    };
    return AttributesCacheInMemory;
}();

},{"../../utils/lang/objectAssign":"eGIPQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28F42":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates an Sdk client, i.e., a base client with status and destroy interface
 */ parcelHelpers.export(exports, "sdkClientFactory", ()=>sdkClientFactory);
var _objectAssign = require("../utils/lang/objectAssign");
var _apiKey = require("../utils/inputValidation/apiKey");
var _client = require("./client");
var _clientInputValidation = require("./clientInputValidation");
var COOLDOWN_TIME_IN_MILLIS = 1000;
function sdkClientFactory(params, isSharedClient) {
    var sdkReadinessManager = params.sdkReadinessManager, syncManager = params.syncManager, storage = params.storage, signalListener = params.signalListener, settings = params.settings, telemetryTracker = params.telemetryTracker, uniqueKeysTracker = params.uniqueKeysTracker;
    var lastActionTime = 0;
    function __cooldown(func, time) {
        var now = Date.now();
        //get the actual time elapsed in ms
        var timeElapsed = now - lastActionTime;
        //check if the time elapsed is less than desired cooldown
        if (timeElapsed < time) {
            //if yes, return message with remaining time in seconds
            settings.log.warn("Flush cooldown, remaining time " + (time - timeElapsed) / 1000 + " seconds");
            return Promise.resolve();
        } else {
            //Do the requested action and re-assign the lastActionTime
            lastActionTime = now;
            return func();
        }
    }
    function __flush() {
        return syncManager ? syncManager.flush() : Promise.resolve();
    }
    return (0, _objectAssign.objectAssign)(// Proto-linkage of the readiness Event Emitter
    Object.create(sdkReadinessManager.sdkStatus), // Client API (getTreatment* & track methods)
    (0, _clientInputValidation.clientInputValidationDecorator)(settings, (0, _client.clientFactory)(params), sdkReadinessManager.readinessManager), // Sdk destroy
    {
        flush: function() {
            // @TODO define cooldown time
            return __cooldown(__flush, COOLDOWN_TIME_IN_MILLIS);
        },
        destroy: function() {
            // Mark the SDK as destroyed immediately
            sdkReadinessManager.readinessManager.destroy();
            // For main client, release the SDK Key and record stat before flushing data
            if (!isSharedClient) {
                (0, _apiKey.releaseApiKey)(settings.core.authorizationKey);
                telemetryTracker.sessionLength();
            }
            // Stop background jobs
            syncManager && syncManager.stop();
            return __flush().then(function() {
                // Cleanup event listeners
                signalListener && signalListener.stop();
                // @TODO stop only if last client is destroyed
                if (uniqueKeysTracker) uniqueKeysTracker.stop();
                // Cleanup storage
                return storage.destroy();
            });
        }
    });
}

},{"../utils/lang/objectAssign":"eGIPQ","../utils/inputValidation/apiKey":"7DqLx","./client":"UeupH","./clientInputValidation":"a75HX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"UeupH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creator of base client with getTreatments and track methods.
 */ parcelHelpers.export(exports, "clientFactory", ()=>clientFactory);
var _evaluator = require("../evaluator");
var _thenable = require("../utils/promise/thenable");
var _key = require("../utils/key");
var _splitExistence = require("../utils/inputValidation/splitExistence");
var _trafficTypeExistence = require("../utils/inputValidation/trafficTypeExistence");
var _labels = require("../utils/labels");
var _constants = require("../utils/constants");
var _constants1 = require("../logger/constants");
var _mode = require("../utils/settingsValidation/mode");
var treatmentNotReady = {
    treatment: (0, _constants.CONTROL),
    label: (0, _labels.SDK_NOT_READY)
};
function treatmentsNotReady(featureFlagNames) {
    var evaluations = {};
    featureFlagNames.forEach(function(featureFlagName) {
        evaluations[featureFlagName] = treatmentNotReady;
    });
    return evaluations;
}
function clientFactory(params) {
    var readinessManager = params.sdkReadinessManager.readinessManager, storage = params.storage, settings = params.settings, impressionsTracker = params.impressionsTracker, eventTracker = params.eventTracker, telemetryTracker = params.telemetryTracker;
    var log = settings.log, mode = settings.mode;
    var isAsync = (0, _mode.isConsumerMode)(mode);
    function getTreatment(key, featureFlagName, attributes, withConfig, methodName) {
        if (withConfig === void 0) withConfig = false;
        if (methodName === void 0) methodName = (0, _constants.GET_TREATMENT);
        var stopTelemetryTracker = telemetryTracker.trackEval(withConfig ? (0, _constants.TREATMENT_WITH_CONFIG) : (0, _constants.TREATMENT));
        var wrapUp = function(evaluationResult) {
            var queue = [];
            var treatment = processEvaluation(evaluationResult, featureFlagName, key, attributes, withConfig, methodName, queue);
            impressionsTracker.track(queue, attributes);
            stopTelemetryTracker(queue[0] && queue[0].label);
            return treatment;
        };
        var evaluation = readinessManager.isReady() || readinessManager.isReadyFromCache() ? (0, _evaluator.evaluateFeature)(log, key, featureFlagName, attributes, storage) : isAsync ? Promise.resolve(treatmentNotReady) : treatmentNotReady;
        return (0, _thenable.thenable)(evaluation) ? evaluation.then(function(res) {
            return wrapUp(res);
        }) : wrapUp(evaluation);
    }
    function getTreatmentWithConfig(key, featureFlagName, attributes) {
        return getTreatment(key, featureFlagName, attributes, true, (0, _constants.GET_TREATMENT_WITH_CONFIG));
    }
    function getTreatments(key, featureFlagNames, attributes, withConfig, methodName) {
        if (withConfig === void 0) withConfig = false;
        if (methodName === void 0) methodName = (0, _constants.GET_TREATMENTS);
        var stopTelemetryTracker = telemetryTracker.trackEval(withConfig ? (0, _constants.TREATMENTS_WITH_CONFIG) : (0, _constants.TREATMENTS));
        var wrapUp = function(evaluationResults) {
            var queue = [];
            var treatments = {};
            Object.keys(evaluationResults).forEach(function(featureFlagName) {
                treatments[featureFlagName] = processEvaluation(evaluationResults[featureFlagName], featureFlagName, key, attributes, withConfig, methodName, queue);
            });
            impressionsTracker.track(queue, attributes);
            stopTelemetryTracker(queue[0] && queue[0].label);
            return treatments;
        };
        var evaluations = readinessManager.isReady() || readinessManager.isReadyFromCache() ? (0, _evaluator.evaluateFeatures)(log, key, featureFlagNames, attributes, storage) : isAsync ? Promise.resolve(treatmentsNotReady(featureFlagNames)) : treatmentsNotReady(featureFlagNames);
        return (0, _thenable.thenable)(evaluations) ? evaluations.then(function(res) {
            return wrapUp(res);
        }) : wrapUp(evaluations);
    }
    function getTreatmentsWithConfig(key, featureFlagNames, attributes) {
        return getTreatments(key, featureFlagNames, attributes, true, (0, _constants.GET_TREATMENTS_WITH_CONFIG));
    }
    function getTreatmentsByFlagSets(key, flagSetNames, attributes, withConfig, method, methodName) {
        if (withConfig === void 0) withConfig = false;
        if (method === void 0) method = (0, _constants.TREATMENTS_BY_FLAGSETS);
        if (methodName === void 0) methodName = (0, _constants.GET_TREATMENTS_BY_FLAG_SETS);
        var stopTelemetryTracker = telemetryTracker.trackEval(method);
        var wrapUp = function(evaluationResults) {
            var queue = [];
            var treatments = {};
            var evaluations = evaluationResults;
            Object.keys(evaluations).forEach(function(featureFlagName) {
                treatments[featureFlagName] = processEvaluation(evaluations[featureFlagName], featureFlagName, key, attributes, withConfig, methodName, queue);
            });
            impressionsTracker.track(queue, attributes);
            stopTelemetryTracker(queue[0] && queue[0].label);
            return treatments;
        };
        var evaluations = readinessManager.isReady() || readinessManager.isReadyFromCache() ? (0, _evaluator.evaluateFeaturesByFlagSets)(log, key, flagSetNames, attributes, storage, methodName) : isAsync ? Promise.resolve({}) : {};
        return (0, _thenable.thenable)(evaluations) ? evaluations.then(function(res) {
            return wrapUp(res);
        }) : wrapUp(evaluations);
    }
    function getTreatmentsWithConfigByFlagSets(key, flagSetNames, attributes) {
        return getTreatmentsByFlagSets(key, flagSetNames, attributes, true, (0, _constants.TREATMENTS_WITH_CONFIG_BY_FLAGSETS), (0, _constants.GET_TREATMENTS_WITH_CONFIG_BY_FLAG_SETS));
    }
    function getTreatmentsByFlagSet(key, flagSetName, attributes) {
        return getTreatmentsByFlagSets(key, [
            flagSetName
        ], attributes, false, (0, _constants.TREATMENTS_BY_FLAGSET), (0, _constants.GET_TREATMENTS_BY_FLAG_SET));
    }
    function getTreatmentsWithConfigByFlagSet(key, flagSetName, attributes) {
        return getTreatmentsByFlagSets(key, [
            flagSetName
        ], attributes, true, (0, _constants.TREATMENTS_WITH_CONFIG_BY_FLAGSET), (0, _constants.GET_TREATMENTS_WITH_CONFIG_BY_FLAG_SET));
    }
    // Internal function
    function processEvaluation(evaluation, featureFlagName, key, attributes, withConfig, invokingMethodName, queue) {
        var matchingKey = (0, _key.getMatching)(key);
        var bucketingKey = (0, _key.getBucketing)(key);
        var treatment = evaluation.treatment, label = evaluation.label, changeNumber = evaluation.changeNumber, _a = evaluation.config, config = _a === void 0 ? null : _a;
        log.info((0, _constants1.IMPRESSION), [
            featureFlagName,
            matchingKey,
            treatment,
            label
        ]);
        if ((0, _splitExistence.validateSplitExistence)(log, readinessManager, featureFlagName, label, invokingMethodName)) {
            log.info((0, _constants1.IMPRESSION_QUEUEING));
            queue.push({
                feature: featureFlagName,
                keyName: matchingKey,
                treatment: treatment,
                time: Date.now(),
                bucketingKey: bucketingKey,
                label: label,
                changeNumber: changeNumber
            });
        }
        if (withConfig) return {
            treatment: treatment,
            config: config
        };
        return treatment;
    }
    function track(key, trafficTypeName, eventTypeId, value, properties, size) {
        if (size === void 0) size = 1024;
        var stopTelemetryTracker = telemetryTracker.trackEval((0, _constants.TRACK));
        var matchingKey = (0, _key.getMatching)(key);
        var timestamp = Date.now();
        var eventData = {
            eventTypeId: eventTypeId,
            trafficTypeName: trafficTypeName,
            value: value,
            timestamp: timestamp,
            key: matchingKey,
            properties: properties
        };
        // This may be async but we only warn, we don't actually care if it is valid or not in terms of queueing the event.
        (0, _trafficTypeExistence.validateTrafficTypeExistence)(log, readinessManager, storage.splits, mode, trafficTypeName, (0, _constants.TRACK_FN_LABEL));
        var result = eventTracker.track(eventData, size);
        if ((0, _thenable.thenable)(result)) return result.then(function(result) {
            stopTelemetryTracker();
            return result;
        });
        else {
            stopTelemetryTracker();
            return result;
        }
    }
    return {
        getTreatment: getTreatment,
        getTreatmentWithConfig: getTreatmentWithConfig,
        getTreatments: getTreatments,
        getTreatmentsWithConfig: getTreatmentsWithConfig,
        getTreatmentsByFlagSets: getTreatmentsByFlagSets,
        getTreatmentsWithConfigByFlagSets: getTreatmentsWithConfigByFlagSets,
        getTreatmentsByFlagSet: getTreatmentsByFlagSet,
        getTreatmentsWithConfigByFlagSet: getTreatmentsWithConfigByFlagSet,
        track: track,
        isClientSide: false
    };
}

},{"../evaluator":"fDzaz","../utils/promise/thenable":"7l6dl","../utils/key":"dgfaB","../utils/inputValidation/splitExistence":"62C9V","../utils/inputValidation/trafficTypeExistence":"16kbB","../utils/labels":"k9ezF","../utils/constants":"bdnhi","../logger/constants":"hiXko","../utils/settingsValidation/mode":"5sFpT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fDzaz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "evaluateFeature", ()=>evaluateFeature);
parcelHelpers.export(exports, "evaluateFeatures", ()=>evaluateFeatures);
parcelHelpers.export(exports, "evaluateFeaturesByFlagSets", ()=>evaluateFeaturesByFlagSets);
var _engine = require("./Engine");
var _thenable = require("../utils/promise/thenable");
var _labels = require("../utils/labels");
var _constants = require("../utils/constants");
var _sets = require("../utils/lang/sets");
var _constants1 = require("../logger/constants");
var treatmentException = {
    treatment: (0, _constants.CONTROL),
    label: _labels.EXCEPTION,
    config: null
};
function treatmentsException(splitNames) {
    var evaluations = {};
    splitNames.forEach(function(splitName) {
        evaluations[splitName] = treatmentException;
    });
    return evaluations;
}
function evaluateFeature(log, key, splitName, attributes, storage) {
    var parsedSplit;
    try {
        parsedSplit = storage.splits.getSplit(splitName);
    } catch (e) {
        // Exception on sync `getSplit` storage. Not possible ATM with InMemory and InLocal storages.
        return treatmentException;
    }
    if ((0, _thenable.thenable)(parsedSplit)) return parsedSplit.then(function(split) {
        return getEvaluation(log, split, key, attributes, storage);
    }).catch(// Exception on async `getSplit` storage. For example, when the storage is redis or
    // pluggable and there is a connection issue and we can't retrieve the split to be evaluated
    function() {
        return treatmentException;
    });
    return getEvaluation(log, parsedSplit, key, attributes, storage);
}
function evaluateFeatures(log, key, splitNames, attributes, storage) {
    var parsedSplits;
    try {
        parsedSplits = storage.splits.getSplits(splitNames);
    } catch (e) {
        // Exception on sync `getSplits` storage. Not possible ATM with InMemory and InLocal storages.
        return treatmentsException(splitNames);
    }
    return (0, _thenable.thenable)(parsedSplits) ? parsedSplits.then(function(splits) {
        return getEvaluations(log, splitNames, splits, key, attributes, storage);
    }).catch(function() {
        // Exception on async `getSplits` storage. For example, when the storage is redis or
        // pluggable and there is a connection issue and we can't retrieve the split to be evaluated
        return treatmentsException(splitNames);
    }) : getEvaluations(log, splitNames, parsedSplits, key, attributes, storage);
}
function evaluateFeaturesByFlagSets(log, key, flagSets, attributes, storage, method) {
    var storedFlagNames;
    function evaluate(featureFlagsByFlagSets) {
        var featureFlags = new (0, _sets._Set)();
        for(var i = 0; i < flagSets.length; i++){
            var featureFlagByFlagSet = featureFlagsByFlagSets[i];
            if (featureFlagByFlagSet.size) featureFlags = (0, _sets.returnSetsUnion)(featureFlags, featureFlagByFlagSet);
            else log.warn((0, _constants1.WARN_FLAGSET_WITHOUT_FLAGS), [
                method,
                flagSets[i]
            ]);
        }
        return featureFlags.size ? evaluateFeatures(log, key, (0, _sets.setToArray)(featureFlags), attributes, storage) : {};
    }
    // get features by flag sets
    try {
        storedFlagNames = storage.splits.getNamesByFlagSets(flagSets);
    } catch (e) {
        // return empty evaluations
        return {};
    }
    // evaluate related features
    return (0, _thenable.thenable)(storedFlagNames) ? storedFlagNames.then(function(storedFlagNames) {
        return evaluate(storedFlagNames);
    }).catch(function() {
        return {};
    }) : evaluate(storedFlagNames);
}
function getEvaluation(log, splitJSON, key, attributes, storage) {
    var evaluation = {
        treatment: (0, _constants.CONTROL),
        label: _labels.SPLIT_NOT_FOUND,
        config: null
    };
    if (splitJSON) {
        var split_1 = (0, _engine.Engine).parse(log, splitJSON, storage);
        evaluation = split_1.getTreatment(key, attributes, evaluateFeature);
        // If the storage is async and the evaluated split uses segment, evaluation is thenable
        if ((0, _thenable.thenable)(evaluation)) return evaluation.then(function(result) {
            result.changeNumber = split_1.getChangeNumber();
            result.config = splitJSON.configurations && splitJSON.configurations[result.treatment] || null;
            return result;
        });
        else {
            evaluation.changeNumber = split_1.getChangeNumber(); // Always sync and optional
            evaluation.config = splitJSON.configurations && splitJSON.configurations[evaluation.treatment] || null;
        }
    }
    return evaluation;
}
function getEvaluations(log, splitNames, splits, key, attributes, storage) {
    var result = {};
    var thenables = [];
    splitNames.forEach(function(splitName) {
        var evaluation = getEvaluation(log, splits[splitName], key, attributes, storage);
        if ((0, _thenable.thenable)(evaluation)) thenables.push(evaluation.then(function(res) {
            result[splitName] = res;
        }));
        else result[splitName] = evaluation;
    });
    return thenables.length > 0 ? Promise.all(thenables).then(function() {
        return result;
    }) : result;
}

},{"./Engine":"4SuEK","../utils/promise/thenable":"7l6dl","../utils/labels":"k9ezF","../utils/constants":"bdnhi","../utils/lang/sets":"ikri1","../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4SuEK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Engine", ()=>Engine);
var _lang = require("../utils/lang");
var _parser = require("./parser");
var _key = require("../utils/key");
var _thenable = require("../utils/promise/thenable");
var _labels = require("../utils/labels");
var _constants = require("../utils/constants");
function evaluationResult(result, defaultTreatment) {
    return {
        treatment: (0, _lang.get)(result, "treatment", defaultTreatment),
        label: (0, _lang.get)(result, "label", _labels.NO_CONDITION_MATCH)
    };
}
var Engine = /** @class */ function() {
    function Engine(baseInfo, evaluator) {
        this.baseInfo = baseInfo;
        this.evaluator = evaluator;
        // in case we don't have a default treatment in the instanciation, use 'control'
        if (typeof this.baseInfo.defaultTreatment !== "string") this.baseInfo.defaultTreatment = (0, _constants.CONTROL);
    }
    Engine.parse = function(log, splitFlatStructure, storage) {
        var conditions = splitFlatStructure.conditions;
        var evaluator = (0, _parser.parser)(log, conditions, storage);
        return new Engine(splitFlatStructure, evaluator);
    };
    Engine.prototype.getKey = function() {
        return this.baseInfo.name;
    };
    Engine.prototype.getTreatment = function(key, attributes, splitEvaluator) {
        var _a = this.baseInfo, killed = _a.killed, seed = _a.seed, defaultTreatment = _a.defaultTreatment, trafficAllocation = _a.trafficAllocation, trafficAllocationSeed = _a.trafficAllocationSeed;
        var parsedKey;
        var treatment;
        var label;
        try {
            parsedKey = (0, _key.keyParser)(key);
        } catch (err) {
            return {
                treatment: (0, _constants.CONTROL),
                label: _labels.EXCEPTION
            };
        }
        if (this.isGarbage()) {
            treatment = (0, _constants.CONTROL);
            label = _labels.SPLIT_ARCHIVED;
        } else if (killed) {
            treatment = defaultTreatment;
            label = _labels.SPLIT_KILLED;
        } else {
            var evaluation = this.evaluator(parsedKey, seed, trafficAllocation, trafficAllocationSeed, attributes, splitEvaluator);
            // Evaluation could be async, so we should handle that case checking for a
            // thenable object
            if ((0, _thenable.thenable)(evaluation)) return evaluation.then(function(result) {
                return evaluationResult(result, defaultTreatment);
            });
            else return evaluationResult(evaluation, defaultTreatment);
        }
        return {
            treatment: treatment,
            label: label
        };
    };
    Engine.prototype.isGarbage = function() {
        return this.baseInfo.status === "ARCHIVED";
    };
    Engine.prototype.getChangeNumber = function() {
        return this.baseInfo.changeNumber;
    };
    return Engine;
}();

},{"../utils/lang":"jowD0","./parser":"gkI0L","../utils/key":"dgfaB","../utils/promise/thenable":"7l6dl","../utils/labels":"k9ezF","../utils/constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkI0L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parser", ()=>parser);
var _matchersTransform = require("../matchersTransform");
var _treatments = require("../treatments");
var _matchers = require("../matchers");
var _value = require("../value");
var _condition = require("../condition");
var _ifelseif = require("../combiners/ifelseif");
var _and = require("../combiners/and");
var _thenable = require("../../utils/promise/thenable");
function parser(log, conditions, storage) {
    var predicates = [];
    for(var i = 0; i < conditions.length; i++){
        var _a = conditions[i], matcherGroup = _a.matcherGroup, partitions = _a.partitions, label = _a.label, conditionType = _a.conditionType;
        // transform data structure
        var matchers = (0, _matchersTransform.matchersTransform)(matcherGroup.matchers);
        // create a set of pure functions from the matcher's dto
        var expressions = matchers.map(function(matcherDto) {
            var matcher = (0, _matchers.matcherFactory)(log, matcherDto, storage);
            // Evaluator function.
            return function(key, attributes, splitEvaluator) {
                var value = (0, _value.sanitizeValue)(log, key, matcherDto, attributes);
                var result = value !== undefined && matcher ? matcher(value, splitEvaluator) : false;
                if ((0, _thenable.thenable)(result)) // @ts-ignore
                return result.then(function(res) {
                    return Boolean(res ^ matcherDto.negate);
                });
                // @ts-ignore
                return Boolean(result ^ matcherDto.negate);
            };
        });
        // if matcher's factory can't instanciate the matchers, the expressions array
        // will be empty
        if (expressions.length === 0) {
            // reset any data collected during parsing
            predicates = [];
            break;
        }
        predicates.push((0, _condition.conditionContext)(log, (0, _and.andCombinerContext)(log, expressions), (0, _treatments.Treatments).parse(partitions), label, conditionType));
    }
    // Instanciate evaluator given the set of conditions using if else if logic
    return (0, _ifelseif.ifElseIfCombinerContext)(log, predicates);
}

},{"../matchersTransform":"lnPO3","../treatments":"8e3GN","../matchers":"5imsU","../value":"hvQV5","../condition":"cJ3tZ","../combiners/ifelseif":"94uEl","../combiners/and":"avIrQ","../../utils/promise/thenable":"7l6dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnPO3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Flat the complex matcherGroup structure into something handy.
 */ parcelHelpers.export(exports, "matchersTransform", ()=>matchersTransform);
var _lang = require("../../utils/lang");
var _matcherTypes = require("../matchers/matcherTypes");
var _segment = require("./segment");
var _whitelist = require("./whitelist");
var _set = require("./set");
var _unaryNumeric = require("./unaryNumeric");
var _convertions = require("../convertions");
function matchersTransform(matchers) {
    var parsedMatchers = matchers.map(function(matcher) {
        var matcherType = matcher.matcherType /* string */ , negate = matcher.negate /* boolean */ , keySelector = matcher.keySelector /* keySelectorObject */ , segmentObject = matcher.userDefinedSegmentMatcherData /* segmentObject */ , whitelistObject = matcher.whitelistMatcherData /* whiteListObject, provided by 'WHITELIST', set and string matchers */ , unaryNumericObject = matcher.unaryNumericMatcherData /* unaryNumericObject */ , betweenObject = matcher.betweenMatcherData /* betweenObject */ , dependencyObject = matcher.dependencyMatcherData /* dependencyObject */ , booleanMatcherData = matcher.booleanMatcherData, stringMatcherData = matcher.stringMatcherData;
        var attribute = keySelector && keySelector.attribute;
        var type = (0, _matcherTypes.matcherTypesMapper)(matcherType);
        // As default input data type we use string (even for ALL_KEYS)
        var dataType = (0, _matcherTypes.matcherDataTypes).STRING;
        var value = undefined;
        if (type === (0, _matcherTypes.matcherTypes).IN_SEGMENT) value = (0, _segment.segmentTransform)(segmentObject);
        else if (type === (0, _matcherTypes.matcherTypes).WHITELIST) value = (0, _whitelist.whitelistTransform)(whitelistObject);
        else if (type === (0, _matcherTypes.matcherTypes).EQUAL_TO) {
            value = (0, _unaryNumeric.numericTransform)(unaryNumericObject);
            dataType = (0, _matcherTypes.matcherDataTypes).NUMBER;
            if (unaryNumericObject.dataType === "DATETIME") {
                value = (0, _convertions.zeroSinceHH)(value);
                dataType = (0, _matcherTypes.matcherDataTypes).DATETIME;
            }
        } else if (type === (0, _matcherTypes.matcherTypes).GREATER_THAN_OR_EQUAL_TO || type === (0, _matcherTypes.matcherTypes).LESS_THAN_OR_EQUAL_TO) {
            value = (0, _unaryNumeric.numericTransform)(unaryNumericObject);
            dataType = (0, _matcherTypes.matcherDataTypes).NUMBER;
            if (unaryNumericObject.dataType === "DATETIME") {
                value = (0, _convertions.zeroSinceSS)(value);
                dataType = (0, _matcherTypes.matcherDataTypes).DATETIME;
            }
        } else if (type === (0, _matcherTypes.matcherTypes).BETWEEN) {
            value = betweenObject;
            dataType = (0, _matcherTypes.matcherDataTypes).NUMBER;
            if (value.dataType === "DATETIME") {
                value.start = (0, _convertions.zeroSinceSS)(value.start);
                value.end = (0, _convertions.zeroSinceSS)(value.end);
                dataType = (0, _matcherTypes.matcherDataTypes).DATETIME;
            }
        } else if (type === (0, _matcherTypes.matcherTypes).EQUAL_TO_SET || type === (0, _matcherTypes.matcherTypes).CONTAINS_ANY_OF_SET || type === (0, _matcherTypes.matcherTypes).CONTAINS_ALL_OF_SET || type === (0, _matcherTypes.matcherTypes).PART_OF_SET) {
            value = (0, _set.setTransform)(whitelistObject);
            dataType = (0, _matcherTypes.matcherDataTypes).SET;
        } else if (type === (0, _matcherTypes.matcherTypes).STARTS_WITH || type === (0, _matcherTypes.matcherTypes).ENDS_WITH || type === (0, _matcherTypes.matcherTypes).CONTAINS_STRING) value = (0, _set.setTransform)(whitelistObject);
        else if (type === (0, _matcherTypes.matcherTypes).IN_SPLIT_TREATMENT) {
            value = dependencyObject;
            dataType = (0, _matcherTypes.matcherDataTypes).NOT_SPECIFIED;
        } else if (type === (0, _matcherTypes.matcherTypes).EQUAL_TO_BOOLEAN) {
            dataType = (0, _matcherTypes.matcherDataTypes).BOOLEAN;
            value = booleanMatcherData;
        } else if (type === (0, _matcherTypes.matcherTypes).MATCHES_STRING) value = stringMatcherData;
        return {
            attribute: attribute,
            negate: negate,
            type: type,
            value: value,
            dataType: dataType // runtime input data type
        };
    });
    if ((0, _lang.findIndex)(parsedMatchers, function(m) {
        return m.type === (0, _matcherTypes.matcherTypes).UNDEFINED;
    }) === -1) return parsedMatchers;
    else return [];
}

},{"../../utils/lang":"jowD0","../matchers/matcherTypes":"lYE3A","./segment":"jzikl","./whitelist":"8Df6T","./set":"c0uFt","./unaryNumeric":"73mnP","../convertions":"lLZ5p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lYE3A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "matcherTypes", ()=>matcherTypes);
parcelHelpers.export(exports, "matcherDataTypes", ()=>matcherDataTypes);
parcelHelpers.export(exports, "matcherTypesMapper", ()=>matcherTypesMapper);
var matcherTypes = {
    UNDEFINED: 0,
    ALL_KEYS: 1,
    IN_SEGMENT: 2,
    WHITELIST: 3,
    EQUAL_TO: 4,
    GREATER_THAN_OR_EQUAL_TO: 5,
    LESS_THAN_OR_EQUAL_TO: 6,
    BETWEEN: 7,
    EQUAL_TO_SET: 8,
    CONTAINS_ANY_OF_SET: 9,
    CONTAINS_ALL_OF_SET: 10,
    PART_OF_SET: 11,
    ENDS_WITH: 12,
    STARTS_WITH: 13,
    CONTAINS_STRING: 14,
    IN_SPLIT_TREATMENT: 15,
    EQUAL_TO_BOOLEAN: 16,
    MATCHES_STRING: 17
};
var matcherDataTypes = {
    BOOLEAN: "BOOLEAN",
    STRING: "STRING",
    NUMBER: "NUMBER",
    SET: "SET",
    DATETIME: "DATETIME",
    NOT_SPECIFIED: "NOT_SPECIFIED"
};
function matcherTypesMapper(matcherType) {
    var type = matcherTypes[matcherType];
    if (type) return type;
    else return matcherTypes.UNDEFINED;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jzikl":[function(require,module,exports) {
/**
 * Extract segment name as a plain string.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "segmentTransform", ()=>segmentTransform);
function segmentTransform(segment) {
    return segment ? segment.segmentName : undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Df6T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Extract whitelist as a set. Used by 'WHITELIST' matcher.
 */ parcelHelpers.export(exports, "whitelistTransform", ()=>whitelistTransform);
var _sets = require("../../utils/lang/sets");
function whitelistTransform(whitelistObject) {
    return new (0, _sets._Set)(whitelistObject.whitelist);
}

},{"../../utils/lang/sets":"ikri1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c0uFt":[function(require,module,exports) {
/**
 * Extract whitelist array. Used by set and string matchers
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setTransform", ()=>setTransform);
function setTransform(whitelistObject) {
    return whitelistObject.whitelist;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"73mnP":[function(require,module,exports) {
/**
 * Extract value from unary matcher data.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numericTransform", ()=>numericTransform);
function numericTransform(unaryNumericObject) {
    return unaryNumericObject.value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLZ5p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zeroSinceHH", ()=>zeroSinceHH);
parcelHelpers.export(exports, "zeroSinceSS", ()=>zeroSinceSS);
function zeroSinceHH(millisSinceEpoch) {
    return new Date(millisSinceEpoch).setUTCHours(0, 0, 0, 0);
}
function zeroSinceSS(millisSinceEpoch) {
    return new Date(millisSinceEpoch).setUTCSeconds(0, 0);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8e3GN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Treatments", ()=>Treatments);
var _lang = require("../../utils/lang");
var Treatments = /** @class */ function() {
    function Treatments(ranges, treatments) {
        if (ranges[ranges.length - 1] !== 100) throw new RangeError("Provided invalid dataset as input");
        this._ranges = ranges;
        this._treatments = treatments;
    }
    Treatments.parse = function(data) {
        var _a = data.reduce(function(accum, value) {
            var size = value.size, treatment = value.treatment;
            accum.ranges.push(accum.inc += size);
            accum.treatments.push(treatment);
            return accum;
        }, {
            inc: 0,
            ranges: [],
            treatments: []
        }), ranges = _a.ranges, treatments = _a.treatments;
        return new Treatments(ranges, treatments);
    };
    Treatments.prototype.getTreatmentFor = function(x) {
        if (x < 0 || x > 100) throw new RangeError("Please provide a value between 0 and 100");
        // Readme [1]
        // We need to manually add any dependency which escape of dummy resolution
        // I'll deal with this in a future release
        // for (let [k, r] of this._ranges.entries()) {
        //   if (x <= r) return this._treatments[k];
        // }
        var index = (0, _lang.findIndex)(this._ranges, function(range) {
            return x <= range;
        });
        var treatment = this._treatments[index];
        return treatment;
    };
    return Treatments;
}();

},{"../../utils/lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5imsU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Matcher factory.
 */ parcelHelpers.export(exports, "matcherFactory", ()=>matcherFactory);
var _all = require("./all");
var _segment = require("./segment");
var _whitelist = require("./whitelist");
var _eq = require("./eq");
var _gte = require("./gte");
var _lte = require("./lte");
var _between = require("./between");
var _eqSet = require("./eq_set");
var _contAny = require("./cont_any");
var _contAll = require("./cont_all");
var _partOf = require("./part_of");
var _ew = require("./ew");
var _sw = require("./sw");
var _contStr = require("./cont_str");
var _dependency = require("./dependency");
var _boolean = require("./boolean");
var _string = require("./string");
var matchers = [
    undefined,
    (0, _all.allMatcherContext),
    (0, _segment.segmentMatcherContext),
    (0, _whitelist.whitelistMatcherContext),
    (0, _eq.equalToMatcherContext),
    (0, _gte.greaterThanEqualMatcherContext),
    (0, _lte.lessThanEqualMatcherContext),
    (0, _between.betweenMatcherContext),
    (0, _eqSet.equalToSetMatcherContext),
    (0, _contAny.containsAnySetMatcherContext),
    (0, _contAll.containsAllSetMatcherContext),
    (0, _partOf.partOfSetMatcherContext),
    (0, _ew.endsWithMatcherContext),
    (0, _sw.startsWithMatcherContext),
    (0, _contStr.containsStringMatcherContext),
    (0, _dependency.dependencyMatcherContext),
    (0, _boolean.booleanMatcherContext),
    (0, _string.stringMatcherContext // MATCHES_STRING: 17
    )
];
function matcherFactory(log, matcherDto, storage) {
    var type = matcherDto.type, value = matcherDto.value;
    var matcherFn;
    // @ts-ignore
    if (matchers[type]) matcherFn = matchers[type](log, value, storage); // There is no index-out-of-bound exception in JavaScript
    return matcherFn;
}

},{"./all":"4aBbM","./segment":"7CSOG","./whitelist":"1oSGF","./eq":"8Hf9S","./gte":"gSfKE","./lte":"fTO9m","./between":"hMlck","./eq_set":"eUQMG","./cont_any":"gwvzd","./cont_all":"4tIrI","./part_of":"dXZgA","./ew":"aYEEl","./sw":"chXdd","./cont_str":"jhogm","./dependency":"bCE7z","./boolean":"2lNh8","./string":"1amcM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4aBbM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "allMatcherContext", ()=>allMatcherContext);
var _constants = require("../../logger/constants");
function allMatcherContext(log) {
    return function allMatcher(runtimeAttr) {
        log.debug((0, _constants.ENGINE_MATCHER_ALL));
        return runtimeAttr != null;
    };
}

},{"../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7CSOG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "segmentMatcherContext", ()=>segmentMatcherContext);
var _thenable = require("../../utils/promise/thenable");
var _constants = require("../../logger/constants");
function segmentMatcherContext(log, segmentName, storage) {
    return function segmentMatcher(key) {
        var isInSegment = storage.segments.isInSegment(segmentName, key);
        if ((0, _thenable.thenable)(isInSegment)) isInSegment.then(function(result) {
            log.debug((0, _constants.ENGINE_MATCHER_SEGMENT), [
                segmentName,
                key,
                isInSegment
            ]);
            return result;
        });
        else log.debug((0, _constants.ENGINE_MATCHER_SEGMENT), [
            segmentName,
            key,
            isInSegment
        ]);
        return isInSegment;
    };
}

},{"../../utils/promise/thenable":"7l6dl","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1oSGF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "whitelistMatcherContext", ()=>whitelistMatcherContext);
var _sets = require("../../utils/lang/sets");
var _constants = require("../../logger/constants");
function whitelistMatcherContext(log, ruleAttr) {
    return function whitelistMatcher(runtimeAttr) {
        var isInWhitelist = ruleAttr.has(runtimeAttr);
        log.debug((0, _constants.ENGINE_MATCHER_WHITELIST), [
            runtimeAttr,
            (0, _sets.setToArray)(ruleAttr).join(","),
            isInWhitelist
        ]);
        return isInWhitelist;
    };
}

},{"../../utils/lang/sets":"ikri1","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Hf9S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "equalToMatcherContext", ()=>equalToMatcherContext);
var _constants = require("../../logger/constants");
function equalToMatcherContext(log, ruleAttr) {
    return function equalToMatcher(runtimeAttr) {
        var isEqual = runtimeAttr === ruleAttr;
        log.debug((0, _constants.ENGINE_MATCHER_EQUAL), [
            runtimeAttr,
            ruleAttr,
            isEqual
        ]);
        return isEqual;
    };
}

},{"../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSfKE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "greaterThanEqualMatcherContext", ()=>greaterThanEqualMatcherContext);
var _constants = require("../../logger/constants");
function greaterThanEqualMatcherContext(log, ruleAttr) {
    return function greaterThanEqualMatcher(runtimeAttr) {
        var isGreaterEqualThan = runtimeAttr >= ruleAttr;
        log.debug((0, _constants.ENGINE_MATCHER_GREATER), [
            runtimeAttr,
            ruleAttr,
            isGreaterEqualThan
        ]);
        return isGreaterEqualThan;
    };
}

},{"../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fTO9m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lessThanEqualMatcherContext", ()=>lessThanEqualMatcherContext);
var _constants = require("../../logger/constants");
function lessThanEqualMatcherContext(log, ruleAttr) {
    return function lessThanEqualMatcher(runtimeAttr) {
        var isLessEqualThan = runtimeAttr <= ruleAttr;
        log.debug((0, _constants.ENGINE_MATCHER_LESS), [
            runtimeAttr,
            ruleAttr,
            isLessEqualThan
        ]);
        return isLessEqualThan;
    };
}

},{"../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hMlck":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "betweenMatcherContext", ()=>betweenMatcherContext);
var _constants = require("../../logger/constants");
function betweenMatcherContext(log, ruleVO) {
    return function betweenMatcher(runtimeAttr) {
        var isBetween = runtimeAttr >= ruleVO.start && runtimeAttr <= ruleVO.end;
        log.debug((0, _constants.ENGINE_MATCHER_BETWEEN), [
            runtimeAttr,
            ruleVO.start,
            ruleVO.end,
            isBetween
        ]);
        return isBetween;
    };
}

},{"../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eUQMG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "equalToSetMatcherContext", ()=>equalToSetMatcherContext);
var _constants = require("../../logger/constants");
var _lang = require("../../utils/lang");
function equalToSetMatcherContext(log, ruleAttr) {
    return function equalToSetMatcher(runtimeAttr) {
        // Length being the same is the first condition.
        var isEqual = runtimeAttr.length === ruleAttr.length;
        var _loop_1 = function(i) {
            // if length is the same we check that all elements are present in the other collection.
            if ((0, _lang.findIndex)(ruleAttr, function(e) {
                return e === runtimeAttr[i];
            }) < 0) isEqual = false;
        };
        for(var i = 0; i < runtimeAttr.length && isEqual; i++)_loop_1(i);
        log.debug((0, _constants.ENGINE_MATCHER_EQUAL_TO_SET), [
            runtimeAttr,
            ruleAttr,
            isEqual
        ]);
        return isEqual;
    };
}

},{"../../logger/constants":"hiXko","../../utils/lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gwvzd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "containsAnySetMatcherContext", ()=>containsAnySetMatcherContext);
var _constants = require("../../logger/constants");
var _lang = require("../../utils/lang");
function containsAnySetMatcherContext(log, ruleAttr) {
    return function containsAnyMatcher(runtimeAttr) {
        var containsAny = false;
        var _loop_1 = function(i) {
            if ((0, _lang.findIndex)(runtimeAttr, function(e) {
                return e === ruleAttr[i];
            }) >= 0) containsAny = true;
        };
        for(var i = 0; i < ruleAttr.length && !containsAny; i++)_loop_1(i);
        log.debug((0, _constants.ENGINE_MATCHER_CONTAINS_ANY), [
            runtimeAttr,
            ruleAttr,
            containsAny
        ]);
        return containsAny;
    };
}

},{"../../logger/constants":"hiXko","../../utils/lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tIrI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "containsAllSetMatcherContext", ()=>containsAllSetMatcherContext);
var _constants = require("../../logger/constants");
var _lang = require("../../utils/lang");
function containsAllSetMatcherContext(log, ruleAttr) {
    return function containsAllMatcher(runtimeAttr) {
        var containsAll = true;
        if (runtimeAttr.length < ruleAttr.length) containsAll = false;
        else {
            var _loop_1 = function(i) {
                if ((0, _lang.findIndex)(runtimeAttr, function(e) {
                    return e === ruleAttr[i];
                }) < 0) containsAll = false;
            };
            for(var i = 0; i < ruleAttr.length && containsAll; i++)_loop_1(i);
        }
        log.debug((0, _constants.ENGINE_MATCHER_CONTAINS_ALL), [
            runtimeAttr,
            ruleAttr,
            containsAll
        ]);
        return containsAll;
    };
}

},{"../../logger/constants":"hiXko","../../utils/lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXZgA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "partOfSetMatcherContext", ()=>partOfSetMatcherContext);
var _lang = require("../../utils/lang");
var _constants = require("../../logger/constants");
function partOfSetMatcherContext(log, ruleAttr) {
    return function partOfMatcher(runtimeAttr) {
        // To be part of the length should be minor or equal.
        var isPartOf = runtimeAttr.length <= ruleAttr.length;
        var _loop_1 = function(i) {
            // If the length says is possible, we iterate until we prove otherwise or we check all elements.
            if ((0, _lang.findIndex)(ruleAttr, function(e) {
                return e === runtimeAttr[i];
            }) < 0) isPartOf = false;
        };
        for(var i = 0; i < runtimeAttr.length && isPartOf; i++)_loop_1(i);
        log.debug((0, _constants.ENGINE_MATCHER_PART_OF), [
            runtimeAttr,
            ruleAttr,
            isPartOf
        ]);
        return isPartOf;
    };
}

},{"../../utils/lang":"jowD0","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aYEEl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "endsWithMatcherContext", ()=>endsWithMatcherContext);
var _constants = require("../../logger/constants");
var _lang = require("../../utils/lang");
function endsWithMatcherContext(log, ruleAttr) {
    return function endsWithMatcher(runtimeAttr) {
        var strEndsWith = ruleAttr.some(function(e) {
            return (0, _lang.endsWith)(runtimeAttr, e);
        });
        log.debug((0, _constants.ENGINE_MATCHER_ENDS_WITH), [
            runtimeAttr,
            ruleAttr,
            strEndsWith
        ]);
        return strEndsWith;
    };
}

},{"../../logger/constants":"hiXko","../../utils/lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"chXdd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startsWithMatcherContext", ()=>startsWithMatcherContext);
var _constants = require("../../logger/constants");
var _lang = require("../../utils/lang");
function startsWithMatcherContext(log, ruleAttr) {
    return function startsWithMatcher(runtimeAttr) {
        var matches = ruleAttr.some(function(e) {
            return (0, _lang.startsWith)(runtimeAttr, e);
        });
        log.debug((0, _constants.ENGINE_MATCHER_STARTS_WITH), [
            runtimeAttr,
            ruleAttr,
            matches
        ]);
        return matches;
    };
}

},{"../../logger/constants":"hiXko","../../utils/lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhogm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "containsStringMatcherContext", ()=>containsStringMatcherContext);
var _lang = require("../../utils/lang");
var _constants = require("../../logger/constants");
function containsStringMatcherContext(log, ruleAttr) {
    return function containsStringMatcher(runtimeAttr) {
        var contains = ruleAttr.some(function(e) {
            return (0, _lang.isString)(runtimeAttr) && runtimeAttr.indexOf(e) > -1;
        });
        log.debug((0, _constants.ENGINE_MATCHER_CONTAINS_STRING), [
            runtimeAttr,
            ruleAttr,
            contains
        ]);
        return contains;
    };
}

},{"../../utils/lang":"jowD0","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCE7z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dependencyMatcherContext", ()=>dependencyMatcherContext);
var _thenable = require("../../utils/promise/thenable");
var _constants = require("../../logger/constants");
function dependencyMatcherContext(log, _a, storage) {
    var split = _a.split, treatments = _a.treatments;
    function checkTreatment(evaluation, acceptableTreatments, parentName) {
        var matches = false;
        if (Array.isArray(acceptableTreatments)) matches = acceptableTreatments.indexOf(evaluation.treatment) !== -1;
        log.debug((0, _constants.ENGINE_MATCHER_DEPENDENCY), [
            parentName,
            evaluation.treatment,
            evaluation.label,
            parentName,
            acceptableTreatments,
            matches
        ]);
        return matches;
    }
    return function dependencyMatcher(_a, splitEvaluator) {
        var key = _a.key, attributes = _a.attributes;
        log.debug((0, _constants.ENGINE_MATCHER_DEPENDENCY_PRE), [
            split,
            JSON.stringify(key),
            attributes ? "\n attributes: " + JSON.stringify(attributes) : ""
        ]);
        var evaluation = splitEvaluator(log, key, split, attributes, storage);
        if ((0, _thenable.thenable)(evaluation)) return evaluation.then(function(ev) {
            return checkTreatment(ev, treatments, split);
        });
        else return checkTreatment(evaluation, treatments, split);
    };
}

},{"../../utils/promise/thenable":"7l6dl","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2lNh8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "booleanMatcherContext", ()=>booleanMatcherContext);
var _constants = require("../../logger/constants");
function booleanMatcherContext(log, ruleAttr) {
    return function booleanMatcher(runtimeAttr) {
        var booleanMatches = ruleAttr === runtimeAttr;
        log.debug((0, _constants.ENGINE_MATCHER_BOOLEAN), [
            ruleAttr,
            runtimeAttr
        ]);
        return booleanMatches;
    };
}

},{"../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1amcM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stringMatcherContext", ()=>stringMatcherContext);
var _constants = require("../../logger/constants");
function stringMatcherContext(log, ruleAttr) {
    return function stringMatcher(runtimeAttr) {
        var re;
        try {
            re = new RegExp(ruleAttr);
        } catch (e) {
            log.debug((0, _constants.ENGINE_MATCHER_STRING_INVALID), [
                ruleAttr
            ]);
            return false;
        }
        var regexMatches = re.test(runtimeAttr);
        log.debug((0, _constants.ENGINE_MATCHER_STRING), [
            runtimeAttr,
            ruleAttr,
            regexMatches ? "yes" : "no"
        ]);
        return regexMatches;
    };
}

},{"../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvQV5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Defines value to be matched (key / attribute).
 */ parcelHelpers.export(exports, "sanitizeValue", ()=>sanitizeValue);
var _sanitize = require("./sanitize");
var _constants = require("../../logger/constants");
function parseValue(log, key, attributeName, attributes) {
    var value = undefined;
    if (attributeName) {
        if (attributes) {
            value = attributes[attributeName];
            log.debug((0, _constants.ENGINE_VALUE), [
                attributeName,
                value
            ]);
        } else log.warn((0, _constants.ENGINE_VALUE_NO_ATTRIBUTES), [
            attributeName
        ]);
    } else value = key;
    return value;
}
function sanitizeValue(log, key, matcherDto, attributes) {
    var attributeName = matcherDto.attribute;
    var valueToMatch = parseValue(log, key, attributeName, attributes);
    var sanitizedValue = (0, _sanitize.sanitize)(log, matcherDto.type, valueToMatch, matcherDto.dataType, attributes);
    if (sanitizedValue !== undefined) return sanitizedValue;
    else {
        log.warn((0, _constants.ENGINE_VALUE_INVALID), [
            valueToMatch + (attributeName ? " for attribute " + attributeName : "")
        ]);
        return;
    }
}

},{"./sanitize":"5Z7F8","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Z7F8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Sanitize matcher value
 */ parcelHelpers.export(exports, "sanitize", ()=>sanitize);
var _lang = require("../../utils/lang");
var _convertions = require("../convertions");
var _matcherTypes = require("../matchers/matcherTypes");
var _constants = require("../../logger/constants");
function sanitizeNumber(val) {
    var num = (0, _lang.toNumber)(val);
    return isNaN(num) ? undefined : num;
}
function sanitizeString(val) {
    var valueToSanitize = val;
    if ((0, _lang.isObject)(val)) // If the value is an object and is not a key, discard it.
    valueToSanitize = val.matchingKey ? val.matchingKey : undefined;
    var str = (0, _lang.toString)(valueToSanitize);
    return str ? str : undefined;
}
function sanitizeArray(val) {
    var arr = Array.isArray(val) ? (0, _lang.uniq)(val.map(function(e) {
        return e + "";
    })) : [];
    return arr.length ? arr : undefined;
}
function sanitizeBoolean(val) {
    if (val === true || val === false) return val;
    if (typeof val === "string") {
        var lowerCaseValue = val.toLocaleLowerCase();
        if (lowerCaseValue === "true") return true;
        if (lowerCaseValue === "false") return false;
    }
    return undefined;
}
function dependencyProcessor(sanitizedValue, attributes) {
    return {
        key: sanitizedValue,
        attributes: attributes
    };
}
/**
 * We can define a pre-processing for the value, to be executed prior to matcher evaluation.
 */ function getProcessingFunction(matcherTypeID, dataType) {
    switch(matcherTypeID){
        case (0, _matcherTypes.matcherTypes).EQUAL_TO:
            return dataType === "DATETIME" ? (0, _convertions.zeroSinceHH) : undefined;
        case (0, _matcherTypes.matcherTypes).GREATER_THAN_OR_EQUAL_TO:
        case (0, _matcherTypes.matcherTypes).LESS_THAN_OR_EQUAL_TO:
        case (0, _matcherTypes.matcherTypes).BETWEEN:
            return dataType === "DATETIME" ? (0, _convertions.zeroSinceSS) : undefined;
        case (0, _matcherTypes.matcherTypes).IN_SPLIT_TREATMENT:
            return dependencyProcessor;
        default:
            return undefined;
    }
}
function sanitize(log, matcherTypeID, value, dataType, attributes) {
    var processor = getProcessingFunction(matcherTypeID, dataType);
    var sanitizedValue;
    switch(dataType){
        case (0, _matcherTypes.matcherDataTypes).NUMBER:
        case (0, _matcherTypes.matcherDataTypes).DATETIME:
            sanitizedValue = sanitizeNumber(value);
            break;
        case (0, _matcherTypes.matcherDataTypes).STRING:
            sanitizedValue = sanitizeString(value);
            break;
        case (0, _matcherTypes.matcherDataTypes).SET:
            sanitizedValue = sanitizeArray(value);
            break;
        case (0, _matcherTypes.matcherDataTypes).BOOLEAN:
            sanitizedValue = sanitizeBoolean(value);
            break;
        case (0, _matcherTypes.matcherDataTypes).NOT_SPECIFIED:
            sanitizedValue = value;
            break;
        default:
            sanitizedValue = undefined;
    }
    if (processor) // @ts-ignore
    sanitizedValue = processor(sanitizedValue, attributes);
    log.debug((0, _constants.ENGINE_SANITIZE), [
        value,
        dataType,
        sanitizedValue instanceof Object ? JSON.stringify(sanitizedValue) : sanitizedValue
    ]);
    return sanitizedValue;
}

},{"../../utils/lang":"jowD0","../convertions":"lLZ5p","../matchers/matcherTypes":"lYE3A","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJ3tZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Condition factory
parcelHelpers.export(exports, "conditionContext", ()=>conditionContext);
var _engineUtils = require("./engineUtils");
var _thenable = require("../../utils/promise/thenable");
var _labels = require("../../utils/labels");
// Build Evaluation object if and only if matchingResult is true
function match(log, matchingResult, bucketingKey, seed, treatments, label) {
    if (matchingResult) {
        var treatment = (0, _engineUtils.getTreatment)(log, bucketingKey, seed, treatments);
        return {
            treatment: treatment,
            label: label
        };
    }
    // else we should notify the engine to continue evaluating
    return undefined;
}
function conditionContext(log, matcherEvaluator, treatments, label, conditionType) {
    return function conditionEvaluator(key, seed, trafficAllocation, trafficAllocationSeed, attributes, splitEvaluator) {
        // Whitelisting has more priority than traffic allocation, so we don't apply this filtering to those conditions.
        if (conditionType === "ROLLOUT" && !(0, _engineUtils.shouldApplyRollout)(trafficAllocation, key.bucketingKey, trafficAllocationSeed)) return {
            treatment: undefined,
            label: _labels.NOT_IN_SPLIT
        };
        // matcherEvaluator could be Async, this relays on matchers return value, so we need
        // to verify for thenable before play with the result.
        // Also, we pass splitEvaluator function in case we have a matcher that needs to evaluate another split,
        // as well as the entire key object for the same reason.
        var matches = matcherEvaluator(key, attributes, splitEvaluator);
        if ((0, _thenable.thenable)(matches)) return matches.then(function(result) {
            return match(log, result, key.bucketingKey, seed, treatments, label);
        });
        return match(log, matches, key.bucketingKey, seed, treatments, label);
    };
}

},{"./engineUtils":"2vvdv","../../utils/promise/thenable":"7l6dl","../../utils/labels":"k9ezF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2vvdv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Get the treatment name given a key, a seed, and the percentage of each treatment.
 */ parcelHelpers.export(exports, "getTreatment", ()=>getTreatment);
/**
 * Evaluates the traffic allocation to see if we should apply rollout conditions or not.
 */ parcelHelpers.export(exports, "shouldApplyRollout", ()=>shouldApplyRollout);
var _constants = require("../../logger/constants");
var _murmur3 = require("../../utils/murmur3/murmur3");
function getTreatment(log, key, seed, treatments) {
    var _bucket = (0, _murmur3.bucket)(key, seed);
    var treatment = treatments.getTreatmentFor(_bucket);
    log.debug((0, _constants.ENGINE_BUCKET), [
        _bucket,
        key,
        seed,
        treatment
    ]);
    return treatment;
}
function shouldApplyRollout(trafficAllocation, key, trafficAllocationSeed) {
    // For rollout, if traffic allocation for splits is 100%, we don't need to filter it because everything should evaluate the rollout.
    if (trafficAllocation < 100) {
        var _bucket = (0, _murmur3.bucket)(key, trafficAllocationSeed);
        if (_bucket > trafficAllocation) return false;
    }
    return true;
}

},{"../../logger/constants":"hiXko","../../utils/murmur3/murmur3":"hXwqx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"94uEl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ifElseIfCombinerContext", ()=>ifElseIfCombinerContext);
var _lang = require("../../utils/lang");
var _thenable = require("../../utils/promise/thenable");
var _labels = require("../../utils/labels");
var _constants = require("../../utils/constants");
var _constants1 = require("../../logger/constants");
function ifElseIfCombinerContext(log, predicates) {
    function unexpectedInputHandler() {
        log.error((0, _constants1.ERROR_ENGINE_COMBINER_IFELSEIF));
        return {
            treatment: (0, _constants.CONTROL),
            label: _labels.EXCEPTION
        };
    }
    function computeTreatment(predicateResults) {
        var len = predicateResults.length;
        for(var i = 0; i < len; i++){
            var evaluation = predicateResults[i];
            if (evaluation !== undefined) {
                log.debug((0, _constants1.ENGINE_COMBINER_IFELSEIF), [
                    evaluation.treatment
                ]);
                return evaluation;
            }
        }
        log.debug((0, _constants1.ENGINE_COMBINER_IFELSEIF_NO_TREATMENT));
        return undefined;
    }
    function ifElseIfCombiner(key, seed, trafficAllocation, trafficAllocationSeed, attributes, splitEvaluator) {
        // In Async environments we are going to have async predicates. There is none way to know
        // before hand so we need to evaluate all the predicates, verify for thenables, and finally,
        // define how to return the treatment (wrap result into a Promise or not).
        var predicateResults = predicates.map(function(evaluator) {
            return evaluator(key, seed, trafficAllocation, trafficAllocationSeed, attributes, splitEvaluator);
        });
        // if we find a thenable
        if ((0, _lang.findIndex)(predicateResults, (0, _thenable.thenable)) !== -1) return Promise.all(predicateResults).then(function(results) {
            return computeTreatment(results);
        });
        return computeTreatment(predicateResults);
    }
    // if there is none predicates, then there was an error in parsing phase
    if (!Array.isArray(predicates) || Array.isArray(predicates) && predicates.length === 0) return unexpectedInputHandler;
    else return ifElseIfCombiner;
}

},{"../../utils/lang":"jowD0","../../utils/promise/thenable":"7l6dl","../../utils/labels":"k9ezF","../../utils/constants":"bdnhi","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"avIrQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "andCombinerContext", ()=>andCombinerContext);
var _lang = require("../../utils/lang");
var _thenable = require("../../utils/promise/thenable");
var _constants = require("../../logger/constants");
function andCombinerContext(log, matchers) {
    function andResults(results) {
        // Array.prototype.every is supported by target environments
        var hasMatchedAll = results.every(function(value) {
            return value;
        });
        log.debug((0, _constants.ENGINE_COMBINER_AND), [
            hasMatchedAll
        ]);
        return hasMatchedAll;
    }
    return function andCombiner() {
        var params = [];
        for(var _i = 0; _i < arguments.length; _i++)params[_i] = arguments[_i];
        var matcherResults = matchers.map(function(matcher) {
            return matcher.apply(void 0, params);
        });
        // If any matching result is a thenable we should use Promise.all
        if ((0, _lang.findIndex)(matcherResults, (0, _thenable.thenable)) !== -1) return Promise.all(matcherResults).then(andResults);
        else return andResults(matcherResults);
    };
}

},{"../../utils/lang":"jowD0","../../utils/promise/thenable":"7l6dl","../../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a75HX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Decorator that validates the input before actually executing the client methods.
 * We should "guard" the client here, while not polluting the "real" implementation of those methods.
 */ parcelHelpers.export(exports, "clientInputValidationDecorator", ()=>clientInputValidationDecorator);
var _objectAssign = require("../utils/lang/objectAssign");
var _inputValidation = require("../utils/inputValidation");
var _lang = require("../utils/lang");
var _constants = require("../utils/constants");
var _mode = require("../utils/settingsValidation/mode");
var _splitFilters = require("../utils/settingsValidation/splitFilters");
function clientInputValidationDecorator(settings, client, readinessManager) {
    var log = settings.log, mode = settings.mode;
    var isAsync = (0, _mode.isConsumerMode)(mode);
    /**
     * Avoid repeating this validations code
     */ function validateEvaluationParams(maybeKey, maybeFeatureFlagNameOrNames, maybeAttributes, methodName, maybeFlagSetNameOrNames) {
        var multi = (0, _lang.startsWith)(methodName, (0, _constants.GET_TREATMENTS));
        var key = (0, _inputValidation.validateKey)(log, maybeKey, methodName);
        var splitOrSplits = false;
        var flagSetOrFlagSets = [];
        if (maybeFeatureFlagNameOrNames) splitOrSplits = multi ? (0, _inputValidation.validateSplits)(log, maybeFeatureFlagNameOrNames, methodName) : (0, _inputValidation.validateSplit)(log, maybeFeatureFlagNameOrNames, methodName);
        var attributes = (0, _inputValidation.validateAttributes)(log, maybeAttributes, methodName);
        var isNotDestroyed = (0, _inputValidation.validateIfNotDestroyed)(log, readinessManager, methodName);
        if (maybeFlagSetNameOrNames) flagSetOrFlagSets = (0, _splitFilters.validateFlagSets)(log, methodName, maybeFlagSetNameOrNames, settings.sync.__splitFiltersValidation.groupedFilters.bySet);
        (0, _inputValidation.validateIfOperational)(log, readinessManager, methodName, splitOrSplits);
        var valid = isNotDestroyed && key && (splitOrSplits || flagSetOrFlagSets.length > 0) && attributes !== false;
        return {
            valid: valid,
            key: key,
            splitOrSplits: splitOrSplits,
            flagSetOrFlagSets: flagSetOrFlagSets,
            attributes: attributes
        };
    }
    function wrapResult(value) {
        return isAsync ? Promise.resolve(value) : value;
    }
    function getTreatment(maybeKey, maybeFeatureFlagName, maybeAttributes) {
        var params = validateEvaluationParams(maybeKey, maybeFeatureFlagName, maybeAttributes, (0, _constants.GET_TREATMENT));
        if (params.valid) return client.getTreatment(params.key, params.splitOrSplits, params.attributes);
        else return wrapResult((0, _constants.CONTROL));
    }
    function getTreatmentWithConfig(maybeKey, maybeFeatureFlagName, maybeAttributes) {
        var params = validateEvaluationParams(maybeKey, maybeFeatureFlagName, maybeAttributes, (0, _constants.GET_TREATMENT_WITH_CONFIG));
        if (params.valid) return client.getTreatmentWithConfig(params.key, params.splitOrSplits, params.attributes);
        else return wrapResult((0, _objectAssign.objectAssign)({}, (0, _constants.CONTROL_WITH_CONFIG)));
    }
    function getTreatments(maybeKey, maybeFeatureFlagNames, maybeAttributes) {
        var params = validateEvaluationParams(maybeKey, maybeFeatureFlagNames, maybeAttributes, (0, _constants.GET_TREATMENTS));
        if (params.valid) return client.getTreatments(params.key, params.splitOrSplits, params.attributes);
        else {
            var res_1 = {};
            if (params.splitOrSplits) params.splitOrSplits.forEach(function(split) {
                return res_1[split] = (0, _constants.CONTROL);
            });
            return wrapResult(res_1);
        }
    }
    function getTreatmentsWithConfig(maybeKey, maybeFeatureFlagNames, maybeAttributes) {
        var params = validateEvaluationParams(maybeKey, maybeFeatureFlagNames, maybeAttributes, (0, _constants.GET_TREATMENTS_WITH_CONFIG));
        if (params.valid) return client.getTreatmentsWithConfig(params.key, params.splitOrSplits, params.attributes);
        else {
            var res_2 = {};
            if (params.splitOrSplits) params.splitOrSplits.forEach(function(split) {
                return res_2[split] = (0, _objectAssign.objectAssign)({}, (0, _constants.CONTROL_WITH_CONFIG));
            });
            return wrapResult(res_2);
        }
    }
    function getTreatmentsByFlagSets(maybeKey, maybeFlagSets, maybeAttributes) {
        var params = validateEvaluationParams(maybeKey, undefined, maybeAttributes, (0, _constants.GET_TREATMENTS_BY_FLAG_SETS), maybeFlagSets);
        if (params.valid) return client.getTreatmentsByFlagSets(params.key, params.flagSetOrFlagSets, params.attributes);
        else return wrapResult({});
    }
    function getTreatmentsWithConfigByFlagSets(maybeKey, maybeFlagSets, maybeAttributes) {
        var params = validateEvaluationParams(maybeKey, undefined, maybeAttributes, (0, _constants.GET_TREATMENTS_WITH_CONFIG_BY_FLAG_SETS), maybeFlagSets);
        if (params.valid) return client.getTreatmentsWithConfigByFlagSets(params.key, params.flagSetOrFlagSets, params.attributes);
        else return wrapResult({});
    }
    function getTreatmentsByFlagSet(maybeKey, maybeFlagSet, maybeAttributes) {
        var params = validateEvaluationParams(maybeKey, undefined, maybeAttributes, (0, _constants.GET_TREATMENTS_BY_FLAG_SET), [
            maybeFlagSet
        ]);
        if (params.valid) return client.getTreatmentsByFlagSet(params.key, params.flagSetOrFlagSets[0], params.attributes);
        else return wrapResult({});
    }
    function getTreatmentsWithConfigByFlagSet(maybeKey, maybeFlagSet, maybeAttributes) {
        var params = validateEvaluationParams(maybeKey, undefined, maybeAttributes, (0, _constants.GET_TREATMENTS_WITH_CONFIG_BY_FLAG_SET), [
            maybeFlagSet
        ]);
        if (params.valid) return client.getTreatmentsWithConfigByFlagSet(params.key, params.flagSetOrFlagSets[0], params.attributes);
        else return wrapResult({});
    }
    function track(maybeKey, maybeTT, maybeEvent, maybeEventValue, maybeProperties) {
        var key = (0, _inputValidation.validateKey)(log, maybeKey, (0, _constants.TRACK_FN_LABEL));
        var tt = (0, _inputValidation.validateTrafficType)(log, maybeTT, (0, _constants.TRACK_FN_LABEL));
        var event = (0, _inputValidation.validateEvent)(log, maybeEvent, (0, _constants.TRACK_FN_LABEL));
        var eventValue = (0, _inputValidation.validateEventValue)(log, maybeEventValue, (0, _constants.TRACK_FN_LABEL));
        var _a = (0, _inputValidation.validateEventProperties)(log, maybeProperties, (0, _constants.TRACK_FN_LABEL)), properties = _a.properties, size = _a.size;
        var isNotDestroyed = (0, _inputValidation.validateIfNotDestroyed)(log, readinessManager, (0, _constants.TRACK_FN_LABEL));
        if (isNotDestroyed && key && tt && event && eventValue !== false && properties !== false) return client.track(key, tt, event, eventValue, properties, size);
        else return isAsync ? Promise.resolve(false) : false;
    }
    return {
        getTreatment: getTreatment,
        getTreatmentWithConfig: getTreatmentWithConfig,
        getTreatments: getTreatments,
        getTreatmentsWithConfig: getTreatmentsWithConfig,
        getTreatmentsByFlagSets: getTreatmentsByFlagSets,
        getTreatmentsWithConfigByFlagSets: getTreatmentsWithConfigByFlagSets,
        getTreatmentsByFlagSet: getTreatmentsByFlagSet,
        getTreatmentsWithConfigByFlagSet: getTreatmentsWithConfigByFlagSet,
        track: track
    };
}

},{"../utils/lang/objectAssign":"eGIPQ","../utils/inputValidation":"Xyehv","../utils/lang":"jowD0","../utils/constants":"bdnhi","../utils/settingsValidation/mode":"5sFpT","../utils/settingsValidation/splitFilters":"9DKYf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9qL1V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BrowserSignalListener", ()=>BrowserSignalListener);
var _impressionsSubmitter = require("../sync/submitters/impressionsSubmitter");
var _impressionCountsSubmitter = require("../sync/submitters/impressionCountsSubmitter");
var _constants = require("../utils/constants");
var _objectAssign = require("../utils/lang/objectAssign");
var _constants1 = require("../logger/constants");
var _consent = require("../consent");
var VISIBILITYCHANGE_EVENT = "visibilitychange";
var PAGEHIDE_EVENT = "pagehide";
var EVENT_NAME = "for visibilitychange and pagehide events.";
/**
 * We'll listen for events over the window object.
 */ var BrowserSignalListener = /** @class */ function() {
    function BrowserSignalListener(syncManager, settings, storage, serviceApi) {
        this.syncManager = syncManager;
        this.settings = settings;
        this.storage = storage;
        this.serviceApi = serviceApi;
        this.flushData = this.flushData.bind(this);
        this.flushDataIfHidden = this.flushDataIfHidden.bind(this);
        this.fromImpressionsCollector = (0, _impressionsSubmitter.fromImpressionsCollector).bind(undefined, settings.core.labelsEnabled);
    }
    /**
     * start method.
     * Called when SplitFactory is initialized, it adds event listeners to close streaming and flush impressions and events.
     */ BrowserSignalListener.prototype.start = function() {
        this.settings.log.debug((0, _constants1.CLEANUP_REGISTERING), [
            EVENT_NAME
        ]);
        if (typeof document !== "undefined" && document.addEventListener) // Flush data whenever the page is hidden or unloaded.
        document.addEventListener(VISIBILITYCHANGE_EVENT, this.flushDataIfHidden);
        if (typeof window !== "undefined" && window.addEventListener) // Some browsers, like Safari, does not fire the `visibilitychange` event when the page is being unloaded. Therefore, we also flush data in the `pagehide` event.
        // If both events are triggered, the latter will find the storage empty, so no duplicate data will be submitted.
        window.addEventListener(PAGEHIDE_EVENT, this.flushData);
    };
    /**
     * stop method.
     * Called when client is destroyed, it removes event listeners.
     */ BrowserSignalListener.prototype.stop = function() {
        this.settings.log.debug((0, _constants1.CLEANUP_DEREGISTERING), [
            EVENT_NAME
        ]);
        if (typeof document !== "undefined" && document.removeEventListener) document.removeEventListener(VISIBILITYCHANGE_EVENT, this.flushDataIfHidden);
        if (typeof window !== "undefined" && window.removeEventListener) window.removeEventListener(PAGEHIDE_EVENT, this.flushData);
    };
    /**
     * flushData method.
     * Called when pagehide event is triggered. It flushed remaining impressions and events to the backend,
     * using beacon API if possible, or falling back to regular post transport.
     */ BrowserSignalListener.prototype.flushData = function() {
        if (!this.syncManager) return; // In consumer mode there is not sync manager and data to flush
        var _a = this.settings.urls, events = _a.events, telemetry = _a.telemetry;
        // Flush impressions & events data if there is user consent
        if ((0, _consent.isConsentGranted)(this.settings)) {
            var sim = this.settings.sync.impressionsMode;
            var extraMetadata = {
                // sim stands for Sync/Split Impressions Mode
                sim: sim === (0, _constants.OPTIMIZED) ? (0, _constants.OPTIMIZED) : sim === (0, _constants.DEBUG) ? (0, _constants.DEBUG) : (0, _constants.NONE)
            };
            this._flushData(events + "/testImpressions/beacon", this.storage.impressions, this.serviceApi.postTestImpressionsBulk, this.fromImpressionsCollector, extraMetadata);
            this._flushData(events + "/events/beacon", this.storage.events, this.serviceApi.postEventsBulk);
            if (this.storage.impressionCounts) this._flushData(events + "/testImpressions/count/beacon", this.storage.impressionCounts, this.serviceApi.postTestImpressionsCount, (0, _impressionCountsSubmitter.fromImpressionCountsCollector));
            // @ts-ignore
            if (this.storage.uniqueKeys) this._flushData(telemetry + "/v1/keys/cs/beacon", this.storage.uniqueKeys, this.serviceApi.postUniqueKeysBulkCs);
        }
        // Flush telemetry data
        if (this.storage.telemetry) this._flushData(telemetry + "/v1/metrics/usage/beacon", this.storage.telemetry, this.serviceApi.postMetricsUsage);
    };
    BrowserSignalListener.prototype.flushDataIfHidden = function() {
        // Precondition: document defined
        if (document.visibilityState === "hidden") this.flushData(); // On a 'visibilitychange' event, flush data if state is hidden
    };
    BrowserSignalListener.prototype._flushData = function(url, cache, postService, fromCacheToPayload, extraMetadata) {
        // if there is data in cache, send it to backend
        if (!cache.isEmpty()) {
            var dataPayload = fromCacheToPayload ? fromCacheToPayload(cache.pop()) : cache.pop();
            if (!this._sendBeacon(url, dataPayload, extraMetadata)) postService(JSON.stringify(dataPayload)).catch(function() {}); // no-op to handle possible promise rejection
        }
    };
    /**
     * _sendBeacon method.
     * Util method that check if beacon API is available, build the payload and send it.
     * Returns true if beacon API was used successfully, false otherwise.
     */ BrowserSignalListener.prototype._sendBeacon = function(url, data, extraMetadata) {
        // eslint-disable-next-line compat/compat
        if (typeof navigator !== "undefined" && navigator.sendBeacon) {
            var json = {
                entries: data,
                token: this.settings.core.authorizationKey,
                sdk: this.settings.version
            };
            // Extend with endpoint specific metadata where needed
            if (extraMetadata) (0, _objectAssign.objectAssign)(json, extraMetadata);
            // Stringify the payload
            var payload = JSON.stringify(json);
            // https://xgwang.me/posts/you-may-not-know-beacon/#it-may-throw-error%2C-be-sure-to-catch
            try {
                return navigator.sendBeacon(url, payload);
            } catch (e) {
                return false;
            }
        }
        return false;
    };
    return BrowserSignalListener;
}();

},{"../sync/submitters/impressionsSubmitter":"8RV2h","../sync/submitters/impressionCountsSubmitter":"h1WTv","../utils/constants":"bdnhi","../utils/lang/objectAssign":"eGIPQ","../logger/constants":"hiXko","../consent":"jehXo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDTFz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hashImpression32", ()=>hashImpression32);
parcelHelpers.export(exports, "impressionObserverCSFactory", ()=>impressionObserverCSFactory);
var _impressionObserver = require("./ImpressionObserver");
var _murmur3 = require("../../utils/murmur3/murmur3");
var _buildKey = require("./buildKey");
function hashImpression32(impression) {
    return (0, _murmur3.hash)((0, _buildKey.buildKey)(impression));
}
var LAST_SEEN_CACHE_SIZE = 500; // cache up to 500 impression hashes
function impressionObserverCSFactory() {
    return new (0, _impressionObserver.ImpressionObserver)(LAST_SEEN_CACHE_SIZE, hashImpression32);
}

},{"./ImpressionObserver":"i4aaW","../../utils/murmur3/murmur3":"hXwqx","./buildKey":"j63km","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i4aaW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImpressionObserver", ()=>ImpressionObserver);
var _lrucache = require("../../utils/LRUCache");
var ImpressionObserver = /** @class */ function() {
    function ImpressionObserver(size, hasher) {
        this.cache = new (0, _lrucache.LRUCache)(size);
        this.hasher = hasher;
    }
    ImpressionObserver.prototype.testAndSet = function(impression) {
        var hash = this.hasher(impression);
        var previous = this.cache.get(hash);
        this.cache.set(hash, impression.time);
        return previous;
    };
    return ImpressionObserver;
}();

},{"../../utils/LRUCache":"3hyMR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3hyMR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LRUCache", ()=>LRUCache);
var _maps = require("../lang/maps");
var _linkedList = require("./LinkedList");
var LRUCache = /** @class */ function() {
    function LRUCache(maxSize) {
        this.maxLen = maxSize || 1;
        this.items = new (0, _maps._Map)();
        this.lru = new (0, _linkedList.LinkedList)();
    }
    LRUCache.prototype.get = function(key) {
        var node = this.items.get(key);
        if (!node || !(node instanceof (0, _linkedList.Node))) return;
        this.lru.unshiftNode(node); // Move to front
        return node.value.value;
    };
    LRUCache.prototype.set = function(key, value) {
        var node = this.items.get(key);
        if (node) {
            if (!(node instanceof (0, _linkedList.Node))) return false;
            this.lru.unshiftNode(node); // Move to front
            this.lru.head.value.value = value; // Update value
        } else {
            if (this.lru.length === this.maxLen) {
                var last = this.lru.tail;
                if (!last) return false;
                this.items.delete(last.value.key);
                this.lru.removeNode(this.lru.tail); // Remove node
            }
            // @ts-ignore
            this.lru.unshift({
                key: key,
                value: value
            }); // Push front
            this.items.set(key, this.lru.head);
        }
        return true;
    };
    return LRUCache;
}();

},{"../lang/maps":"f4DNO","./LinkedList":"blHRs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"blHRs":[function(require,module,exports) {
/* eslint-disable no-use-before-define */ /**
 * yallist implementation based on isaacs/yallist (https://github.com/isaacs/yallist/yallist.js),
 * with the minimal features used by the SDK.

Copyright (c) Isaac Z. Schlueter and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Node", ()=>Node);
parcelHelpers.export(exports, "LinkedList", ()=>LinkedList);
var Node = /** @class */ function() {
    function Node(value, prev, next, list) {
        this.list = list;
        this.value = value;
        if (prev) {
            prev.next = this;
            this.prev = prev;
        } else this.prev = null;
        if (next) {
            next.prev = this;
            this.next = next;
        } else this.next = null;
    }
    return Node;
}();
var LinkedList = /** @class */ function() {
    function LinkedList() {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }
    // removes the given node of `this` list and returns the next node.
    LinkedList.prototype.removeNode = function(node) {
        if (!node || !(node instanceof Node)) return;
        if (node.list !== this) throw new Error("removing node which does not belong to this list");
        var next = node.next;
        var prev = node.prev;
        if (next) next.prev = prev;
        if (prev) prev.next = next;
        if (node === this.head) this.head = next;
        if (node === this.tail) this.tail = prev;
        node.list.length--;
        node.next = null;
        node.prev = null;
        node.list = null;
        return next;
    };
    // Move a Node object to the front of the list. (That is, pull it out of wherever it lives, and make it the new head.)
    // If the node belongs to a different list, then that list will remove it first.
    LinkedList.prototype.unshiftNode = function(node) {
        if (!node || !(node instanceof Node)) return;
        if (node === this.head) return;
        if (node.list) node.list.removeNode(node);
        var head = this.head;
        node.list = this;
        node.next = head;
        if (head) head.prev = node;
        this.head = node;
        if (!this.tail) this.tail = node;
        this.length++;
    };
    // similar to Array.prototype.unshift, it adds one or more elements to the head of the list and returns the new length of the list.
    LinkedList.prototype.unshift = function() {
        for(var i = 0, l = arguments.length; i < l; i++){
            this.head = new Node(arguments[i], null, this.head, this);
            if (!this.tail) this.tail = this.head;
            this.length++;
        }
        return this.length;
    };
    return LinkedList;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j63km":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildKey", ()=>buildKey);
function buildKey(impression) {
    return impression.keyName + ":" + impression.feature + ":" + impression.treatment + ":" + impression.label + ":" + impression.changeNumber;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"JL8GO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Factory function for IntegrationsManager with pluggable integrations.
 * The integrations manager instantiates integration, and bypass tracked events and impressions to them.
 *
 * @param integrations validated list of integration factories
 * @param params information of the Sdk factory instance that integrations can access to
 *
 * @returns integration manager or undefined if `integrations` are not present in settings.
 */ parcelHelpers.export(exports, "pluggableIntegrationsManagerFactory", ()=>pluggableIntegrationsManagerFactory);
var _constants = require("../utils/constants");
function pluggableIntegrationsManagerFactory(integrations, params) {
    var listeners = [];
    // No need to check if `settings.integrations` is an array of functions. It was already validated
    integrations.forEach(function(integrationFactory) {
        var integration = integrationFactory(params);
        if (integration && integration.queue) listeners.push(integration);
    });
    // If `listeners` is empty, not return a integration manager
    if (listeners.length === 0) return;
    // Exception safe methods: each integration module is responsable for handling errors
    return {
        handleImpression: function(impressionData) {
            listeners.forEach(function(listener) {
                return listener.queue({
                    type: (0, _constants.SPLIT_IMPRESSION),
                    payload: impressionData
                });
            });
        },
        handleEvent: function(eventData) {
            listeners.forEach(function(listener) {
                return listener.queue({
                    type: (0, _constants.SPLIT_EVENT),
                    payload: eventData
                });
            });
        }
    };
}

},{"../utils/constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bdY3x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The public user consent API exposed via SplitFactory, used to control if the SDK tracks and sends impressions and events or not.
 */ parcelHelpers.export(exports, "createUserConsentAPI", ()=>createUserConsentAPI);
var _constants = require("../logger/constants");
var _index = require("./index");
var _constants1 = require("../utils/constants");
var _lang = require("../utils/lang");
// User consent enum
var ConsentStatus = {
    GRANTED: (0, _constants1.CONSENT_GRANTED),
    DECLINED: (0, _constants1.CONSENT_DECLINED),
    UNKNOWN: (0, _constants1.CONSENT_UNKNOWN)
};
function createUserConsentAPI(params) {
    var settings = params.settings, log = params.settings.log, syncManager = params.syncManager, _a = params.storage, events = _a.events, impressions = _a.impressions, impressionCounts = _a.impressionCounts;
    if (!(0, _index.isConsentGranted)(settings)) log.info((0, _constants.USER_CONSENT_INITIAL), [
        settings.userConsent
    ]);
    return {
        setStatus: function(consent) {
            var _a, _b;
            // validate input param
            if (!(0, _lang.isBoolean)(consent)) {
                log.warn((0, _constants.ERROR_NOT_BOOLEAN), [
                    "UserConsent.setStatus"
                ]);
                return false;
            }
            var newConsentStatus = consent ? (0, _constants1.CONSENT_GRANTED) : (0, _constants1.CONSENT_DECLINED);
            if (settings.userConsent !== newConsentStatus) {
                log.info((0, _constants.USER_CONSENT_UPDATED), [
                    settings.userConsent,
                    newConsentStatus
                ]); // @ts-ignore, modify readonly prop
                settings.userConsent = newConsentStatus;
                if (consent) (_a = syncManager === null || syncManager === void 0 ? void 0 : syncManager.submitterManager) === null || _a === void 0 || _a.start();
                else {
                    (_b = syncManager === null || syncManager === void 0 ? void 0 : syncManager.submitterManager) === null || _b === void 0 || _b.stop(true);
                    // @ts-ignore, clear method is present in storage for standalone and partial consumer mode
                    if (events.clear) events.clear(); // @ts-ignore
                    if (impressions.clear) impressions.clear(); // @ts-ignore
                    if (impressionCounts && impressionCounts.clear) impressionCounts.clear();
                }
            } else log.info((0, _constants.USER_CONSENT_NOT_UPDATED), [
                newConsentStatus
            ]);
            return true;
        },
        getStatus: function() {
            return settings.userConsent;
        },
        Status: ConsentStatus
    };
}

},{"../logger/constants":"hiXko","./index":"jehXo","../utils/constants":"bdnhi","../utils/lang":"jowD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8g6lS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Modular SDK factory
 */ parcelHelpers.export(exports, "sdkFactory", ()=>sdkFactory);
var _sdkReadinessManager = require("../readiness/sdkReadinessManager");
var _impressionsTracker = require("../trackers/impressionsTracker");
var _eventTracker = require("../trackers/eventTracker");
var _telemetryTracker = require("../trackers/telemetryTracker");
var _apiKey = require("../utils/inputValidation/apiKey");
var _sdkLogger = require("../logger/sdkLogger");
var _constants = require("../logger/constants");
var _constants1 = require("../readiness/constants");
var _objectAssign = require("../utils/lang/objectAssign");
var _strategyDebug = require("../trackers/strategy/strategyDebug");
var _strategyOptimized = require("../trackers/strategy/strategyOptimized");
var _strategyNone = require("../trackers/strategy/strategyNone");
var _uniqueKeysTracker = require("../trackers/uniqueKeysTracker");
var _constants2 = require("../utils/constants");
function sdkFactory(params) {
    var settings = params.settings, platform = params.platform, storageFactory = params.storageFactory, splitApiFactory = params.splitApiFactory, extraProps = params.extraProps, syncManagerFactory = params.syncManagerFactory, SignalListener = params.SignalListener, impressionsObserverFactory = params.impressionsObserverFactory, integrationsManagerFactory = params.integrationsManagerFactory, sdkManagerFactory = params.sdkManagerFactory, sdkClientMethodFactory = params.sdkClientMethodFactory, filterAdapterFactory = params.filterAdapterFactory;
    var log = settings.log, impressionsMode = settings.sync.impressionsMode;
    // @TODO handle non-recoverable errors, such as, global `fetch` not available, invalid SDK Key, etc.
    // On non-recoverable errors, we should mark the SDK as destroyed and not start synchronization.
    // We will just log and allow for the SDK to end up throwing an SDK_TIMEOUT event for devs to handle.
    (0, _apiKey.validateAndTrackApiKey)(log, settings.core.authorizationKey);
    var sdkReadinessManager = (0, _sdkReadinessManager.sdkReadinessManagerFactory)(log, platform.EventEmitter, settings.startup.readyTimeout);
    var readiness = sdkReadinessManager.readinessManager;
    var storage = storageFactory({
        settings: settings,
        onReadyCb: function(error) {
            if (error) {
                // If storage fails to connect, SDK_READY_TIMED_OUT event is emitted immediately. Review when timeout and non-recoverable errors are reworked
                readiness.timeout();
                return;
            }
            readiness.splits.emit((0, _constants1.SDK_SPLITS_ARRIVED));
            readiness.segments.emit((0, _constants1.SDK_SEGMENTS_ARRIVED));
        }
    });
    // @TODO add support for dataloader: `if (params.dataLoader) params.dataLoader(storage);`
    var telemetryTracker = (0, _telemetryTracker.telemetryTrackerFactory)(storage.telemetry, platform.now);
    var integrationsManager = integrationsManagerFactory && integrationsManagerFactory({
        settings: settings,
        storage: storage,
        telemetryTracker: telemetryTracker
    });
    var observer = impressionsObserverFactory();
    var uniqueKeysTracker = impressionsMode === (0, _constants2.NONE) ? (0, _uniqueKeysTracker.uniqueKeysTrackerFactory)(log, storage.uniqueKeys, filterAdapterFactory && filterAdapterFactory()) : undefined;
    var strategy;
    switch(impressionsMode){
        case 0, _constants2.OPTIMIZED:
            strategy = (0, _strategyOptimized.strategyOptimizedFactory)(observer, storage.impressionCounts);
            break;
        case 0, _constants2.NONE:
            strategy = (0, _strategyNone.strategyNoneFactory)(storage.impressionCounts, uniqueKeysTracker);
            break;
        default:
            strategy = (0, _strategyDebug.strategyDebugFactory)(observer);
    }
    var impressionsTracker = (0, _impressionsTracker.impressionsTrackerFactory)(settings, storage.impressions, strategy, integrationsManager, storage.telemetry);
    var eventTracker = (0, _eventTracker.eventTrackerFactory)(settings, storage.events, integrationsManager, storage.telemetry);
    // splitApi is used by SyncManager and Browser signal listener
    var splitApi = splitApiFactory && splitApiFactory(settings, platform, telemetryTracker);
    var ctx = {
        splitApi: splitApi,
        eventTracker: eventTracker,
        impressionsTracker: impressionsTracker,
        telemetryTracker: telemetryTracker,
        uniqueKeysTracker: uniqueKeysTracker,
        sdkReadinessManager: sdkReadinessManager,
        readiness: readiness,
        settings: settings,
        storage: storage,
        platform: platform
    };
    var syncManager = syncManagerFactory && syncManagerFactory(ctx);
    ctx.syncManager = syncManager;
    var signalListener = SignalListener && new SignalListener(syncManager, settings, storage, splitApi);
    ctx.signalListener = signalListener;
    // SDK client and manager
    var clientMethod = sdkClientMethodFactory(ctx);
    var managerInstance = sdkManagerFactory(settings, storage.splits, sdkReadinessManager);
    syncManager && syncManager.start();
    signalListener && signalListener.start();
    log.info((0, _constants.NEW_FACTORY));
    // @ts-ignore
    return (0, _objectAssign.objectAssign)({
        // Split evaluation and event tracking engine
        client: clientMethod,
        // Manager API to explore available information
        manager: function() {
            log.debug((0, _constants.RETRIEVE_MANAGER));
            return managerInstance;
        },
        // Logger wrapper API
        Logger: (0, _sdkLogger.createLoggerAPI)(log),
        settings: settings
    }, extraProps && extraProps(ctx));
}

},{"../readiness/sdkReadinessManager":"2Vivh","../trackers/impressionsTracker":"f8u06","../trackers/eventTracker":"1K9eK","../trackers/telemetryTracker":"brWgu","../utils/inputValidation/apiKey":"7DqLx","../logger/sdkLogger":"ehphW","../logger/constants":"hiXko","../readiness/constants":"iHapU","../utils/lang/objectAssign":"eGIPQ","../trackers/strategy/strategyDebug":"hJAjK","../trackers/strategy/strategyOptimized":"dUko2","../trackers/strategy/strategyNone":"1y4yC","../trackers/uniqueKeysTracker":"dhatO","../utils/constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Vivh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * SdkReadinessManager factory, which provides the public status API of SDK clients and manager: ready promise, readiness event emitter and constants (SDK_READY, etc).
 * It also updates logs related warnings and errors.
 *
 * @param readyTimeout time in millis to emit SDK_READY_TIME_OUT event
 * @param readinessManager optional readinessManager to use. only used internally for `shared` method
 */ parcelHelpers.export(exports, "sdkReadinessManagerFactory", ()=>sdkReadinessManagerFactory);
var _objectAssign = require("../utils/lang/objectAssign");
var _wrapper = require("../utils/promise/wrapper");
var _readinessManager = require("./readinessManager");
var _constants = require("./constants");
var _constants1 = require("../logger/constants");
var NEW_LISTENER_EVENT = "newListener";
var REMOVE_LISTENER_EVENT = "removeListener";
function sdkReadinessManagerFactory(log, EventEmitter, readyTimeout, readinessManager) {
    if (readyTimeout === void 0) readyTimeout = 0;
    if (readinessManager === void 0) readinessManager = (0, _readinessManager.readinessManagerFactory)(EventEmitter, readyTimeout);
    /** Ready callback warning */ var internalReadyCbCount = 0;
    var readyCbCount = 0;
    readinessManager.gate.on(REMOVE_LISTENER_EVENT, function(event) {
        if (event === (0, _constants.SDK_READY)) readyCbCount--;
    });
    readinessManager.gate.on(NEW_LISTENER_EVENT, function(event) {
        if (event === (0, _constants.SDK_READY) || event === (0, _constants.SDK_READY_TIMED_OUT)) {
            if (readinessManager.isReady()) log.error((0, _constants1.ERROR_CLIENT_LISTENER), [
                event === (0, _constants.SDK_READY) ? "SDK_READY" : "SDK_READY_TIMED_OUT"
            ]);
            else if (event === (0, _constants.SDK_READY)) readyCbCount++;
        }
    });
    /** Ready promise */ var readyPromise = generateReadyPromise();
    readinessManager.gate.once((0, _constants.SDK_READY_FROM_CACHE), function() {
        log.info((0, _constants1.CLIENT_READY_FROM_CACHE));
    });
    // default onRejected handler, that just logs the error, if ready promise doesn't have one.
    function defaultOnRejected(err) {
        log.error(err && err.message);
    }
    function generateReadyPromise() {
        var promise = (0, _wrapper.promiseWrapper)(new Promise(function(resolve, reject) {
            readinessManager.gate.once((0, _constants.SDK_READY), function() {
                log.info((0, _constants1.CLIENT_READY));
                if (readyCbCount === internalReadyCbCount && !promise.hasOnFulfilled()) log.warn((0, _constants1.CLIENT_NO_LISTENER));
                resolve();
            });
            readinessManager.gate.once((0, _constants.SDK_READY_TIMED_OUT), function(message) {
                reject(new Error(message));
            });
        }), defaultOnRejected);
        return promise;
    }
    return {
        readinessManager: readinessManager,
        shared: function(readyTimeout) {
            if (readyTimeout === void 0) readyTimeout = 0;
            return sdkReadinessManagerFactory(log, EventEmitter, readyTimeout, readinessManager.shared(readyTimeout));
        },
        incInternalReadyCbCount: function() {
            internalReadyCbCount++;
        },
        sdkStatus: (0, _objectAssign.objectAssign)(// Expose Event Emitter functionality
        Object.create(readinessManager.gate), {
            // Expose the event constants without changing the interface
            Event: {
                SDK_READY: (0, _constants.SDK_READY),
                SDK_READY_FROM_CACHE: (0, _constants.SDK_READY_FROM_CACHE),
                SDK_UPDATE: (0, _constants.SDK_UPDATE),
                SDK_READY_TIMED_OUT: (0, _constants.SDK_READY_TIMED_OUT)
            },
            /**
             * Returns a promise that will be resolved once the SDK has finished loading (SDK_READY event emitted) or rejected if the SDK has timedout (SDK_READY_TIMED_OUT event emitted).
             * As it's meant to provide similar flexibility to the event approach, given that the SDK might be eventually ready after a timeout event, calling the `ready` method after the
             * SDK had timed out will return a new promise that should eventually resolve if the SDK gets ready.
             *
             * Caveats: the method was designed to avoid an unhandled Promise rejection if the rejection case is not handled, so that `onRejected` handler is optional when using promises.
             * However, when using async/await syntax, the rejection should be explicitly propagated like in the following example:
             * ```
             * try {
             *   await client.ready().catch((e) => { throw e; });
             *   // SDK is ready
             * } catch(e) {
             *   // SDK has timedout
             * }
             * ```
             *
             * @function ready
             * @returns {Promise<void>}
             */ ready: function() {
                if (readinessManager.hasTimedout()) {
                    if (!readinessManager.isReady()) return (0, _wrapper.promiseWrapper)(Promise.reject(new Error("Split SDK has emitted SDK_READY_TIMED_OUT event.")), defaultOnRejected);
                    else return Promise.resolve();
                }
                return readyPromise;
            },
            // Expose status for internal purposes only. Not considered part of the public API, and might be updated eventually.
            __getStatus: function() {
                return {
                    isReady: readinessManager.isReady(),
                    isReadyFromCache: readinessManager.isReadyFromCache(),
                    isOperational: readinessManager.isOperational(),
                    hasTimedout: readinessManager.hasTimedout(),
                    isDestroyed: readinessManager.isDestroyed()
                };
            }
        })
    };
}

},{"../utils/lang/objectAssign":"eGIPQ","../utils/promise/wrapper":"b7IbT","./readinessManager":"eSmKk","./constants":"iHapU","../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7IbT":[function(require,module,exports) {
/**
 * wraps a given promise in a new one with a default onRejected function,
 * that handles the promise rejection if not other onRejected handler is provided.
 *
 * Caveats:
 *  - There are some cases where the `defaultOnRejected` handler is not invoked
 * and the promise rejection must be handled by the user (same as the Promise spec):
 *    - using async/await syntax with a transpiler to Promises
 *    - setting an `onFinally` handler as the first handler (e.g. `promiseWrapper(Promise.reject()).finally(...)`)
 *    - setting more than one handler with at least one of them being an onRejected handler
 *  - If the wrapped promise is rejected when using native async/await syntax, the `defaultOnRejected` handler is invoked
 * and neither the catch block nor the remaining try block are executed.
 *
 * @param customPromise promise to wrap
 * @param defaultOnRejected default onRejected function
 * @returns a promise that doesn't need to be handled for rejection (except when using async/await syntax) and
 * includes a method named `hasOnFulfilled` that returns true if the promise has attached an onFulfilled handler.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "promiseWrapper", ()=>promiseWrapper);
function promiseWrapper(customPromise, defaultOnRejected) {
    var hasOnFulfilled = false;
    var hasOnRejected = false;
    function chain(promise) {
        var newPromise = new Promise(function(res, rej) {
            return promise.then(res, function(value) {
                if (hasOnRejected) rej(value);
                else defaultOnRejected(value);
            });
        });
        var originalThen = newPromise.then;
        // Using `defineProperty` in case Promise.prototype.then property is not writable
        Object.defineProperty(newPromise, "then", {
            value: function(onfulfilled, onrejected) {
                var result = originalThen.call(newPromise, onfulfilled, onrejected);
                if (typeof onfulfilled === "function") hasOnFulfilled = true;
                if (typeof onrejected === "function") {
                    hasOnRejected = true;
                    return result;
                } else return chain(result);
            }
        });
        return newPromise;
    }
    var result = chain(customPromise);
    result.hasOnFulfilled = function() {
        return hasOnFulfilled;
    };
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eSmKk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Factory of readiness manager, which handles the ready / update event propagation.
 */ parcelHelpers.export(exports, "readinessManagerFactory", ()=>readinessManagerFactory);
var _objectAssign = require("../utils/lang/objectAssign");
var _constants = require("./constants");
function splitsEventEmitterFactory(EventEmitter) {
    var splitsEventEmitter = (0, _objectAssign.objectAssign)(new EventEmitter(), {
        splitsArrived: false,
        splitsCacheLoaded: false
    });
    // `isSplitKill` condition avoids an edge-case of wrongly emitting SDK_READY if:
    // - `/mySegments` fetch and SPLIT_KILL occurs before `/splitChanges` fetch, and
    // - storage has cached splits (for which case `splitsStorage.killLocally` can return true)
    splitsEventEmitter.on((0, _constants.SDK_SPLITS_ARRIVED), function(isSplitKill) {
        if (!isSplitKill) splitsEventEmitter.splitsArrived = true;
    });
    splitsEventEmitter.once((0, _constants.SDK_SPLITS_CACHE_LOADED), function() {
        splitsEventEmitter.splitsCacheLoaded = true;
    });
    return splitsEventEmitter;
}
function segmentsEventEmitterFactory(EventEmitter) {
    var segmentsEventEmitter = (0, _objectAssign.objectAssign)(new EventEmitter(), {
        segmentsArrived: false
    });
    segmentsEventEmitter.once((0, _constants.SDK_SEGMENTS_ARRIVED), function() {
        segmentsEventEmitter.segmentsArrived = true;
    });
    return segmentsEventEmitter;
}
function readinessManagerFactory(EventEmitter, readyTimeout, splits) {
    if (readyTimeout === void 0) readyTimeout = 0;
    if (splits === void 0) splits = splitsEventEmitterFactory(EventEmitter);
    var segments = segmentsEventEmitterFactory(EventEmitter);
    var gate = new EventEmitter();
    // emit SDK_READY_FROM_CACHE
    var isReadyFromCache = false;
    if (splits.splitsCacheLoaded) isReadyFromCache = true; // ready from cache, but doesn't emit SDK_READY_FROM_CACHE
    else splits.once((0, _constants.SDK_SPLITS_CACHE_LOADED), checkIsReadyFromCache);
    // emit SDK_READY_TIMED_OUT
    var hasTimedout = false;
    function timeout() {
        if (hasTimedout) return;
        hasTimedout = true;
        gate.emit((0, _constants.SDK_READY_TIMED_OUT), "Split SDK emitted SDK_READY_TIMED_OUT event.");
    }
    var readyTimeoutId;
    if (readyTimeout > 0) readyTimeoutId = setTimeout(timeout, readyTimeout);
    // emit SDK_READY and SDK_UPDATE
    var isReady = false;
    splits.on((0, _constants.SDK_SPLITS_ARRIVED), checkIsReadyOrUpdate);
    segments.on((0, _constants.SDK_SEGMENTS_ARRIVED), checkIsReadyOrUpdate);
    var isDestroyed = false;
    function checkIsReadyFromCache() {
        isReadyFromCache = true;
        // Don't emit SDK_READY_FROM_CACHE if SDK_READY has been emitted
        if (!isReady) try {
            gate.emit((0, _constants.SDK_READY_FROM_CACHE));
        } catch (e) {
            // throws user callback exceptions in next tick
            setTimeout(function() {
                throw e;
            }, 0);
        }
    }
    function checkIsReadyOrUpdate(diff) {
        if (isReady) try {
            gate.emit((0, _constants.SDK_UPDATE), diff);
        } catch (e) {
            // throws user callback exceptions in next tick
            setTimeout(function() {
                throw e;
            }, 0);
        }
        else if (splits.splitsArrived && segments.segmentsArrived) {
            clearTimeout(readyTimeoutId);
            isReady = true;
            try {
                gate.emit((0, _constants.SDK_READY));
            } catch (e) {
                // throws user callback exceptions in next tick
                setTimeout(function() {
                    throw e;
                }, 0);
            }
        }
    }
    var refCount = 1;
    return {
        splits: splits,
        segments: segments,
        gate: gate,
        shared: function(readyTimeout) {
            if (readyTimeout === void 0) readyTimeout = 0;
            refCount++;
            return readinessManagerFactory(EventEmitter, readyTimeout, splits);
        },
        // @TODO review/remove next methods when non-recoverable errors are reworked
        // Called on consumer mode, when storage fails to connect
        timeout: timeout,
        // Called on 403 error (client-side SDK key on server-side), to set the SDK as destroyed for
        // tracking and evaluations, while keeping event listeners to emit SDK_READY_TIMED_OUT event
        setDestroyed: function() {
            isDestroyed = true;
        },
        destroy: function() {
            isDestroyed = true;
            segments.removeAllListeners();
            gate.removeAllListeners();
            clearTimeout(readyTimeoutId);
            if (refCount > 0) refCount--;
            if (refCount === 0) splits.removeAllListeners();
        },
        isReady: function() {
            return isReady;
        },
        hasTimedout: function() {
            return hasTimedout;
        },
        isReadyFromCache: function() {
            return isReadyFromCache;
        },
        isDestroyed: function() {
            return isDestroyed;
        },
        isOperational: function() {
            return (isReady || isReadyFromCache) && !isDestroyed;
        }
    };
}

},{"../utils/lang/objectAssign":"eGIPQ","./constants":"iHapU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f8u06":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Impressions tracker stores impressions in cache and pass them to the listener and integrations manager if provided.
 *
 * @param impressionsCache cache to save impressions
 * @param metadata runtime metadata (ip, hostname and version)
 * @param impressionListener optional impression listener
 * @param integrationsManager optional integrations manager
 * @param strategy strategy for impressions tracking.
 */ parcelHelpers.export(exports, "impressionsTrackerFactory", ()=>impressionsTrackerFactory);
var _objectAssign = require("../utils/lang/objectAssign");
var _thenable = require("../utils/promise/thenable");
var _constants = require("../logger/constants");
var _constants1 = require("../utils/constants");
function impressionsTrackerFactory(settings, impressionsCache, strategy, integrationsManager, telemetryCache) {
    var log = settings.log, impressionListener = settings.impressionListener, _a = settings.runtime, ip = _a.ip, hostname = _a.hostname, version = settings.version;
    return {
        track: function(impressions, attributes) {
            if (settings.userConsent === (0, _constants1.CONSENT_DECLINED)) return;
            var impressionsCount = impressions.length;
            var _a = strategy.process(impressions), impressionsToStore = _a.impressionsToStore, impressionsToListener = _a.impressionsToListener, deduped = _a.deduped;
            var impressionsToListenerCount = impressionsToListener.length;
            if (impressionsToStore.length > 0) {
                var res = impressionsCache.track(impressionsToStore);
                // If we're on an async storage, handle error and log it.
                if ((0, _thenable.thenable)(res)) res.then(function() {
                    log.info((0, _constants.IMPRESSIONS_TRACKER_SUCCESS), [
                        impressionsCount
                    ]);
                }).catch(function(err) {
                    log.error((0, _constants.ERROR_IMPRESSIONS_TRACKER), [
                        impressionsCount,
                        err
                    ]);
                });
                else // Record when impressionsCache is sync only (standalone mode)
                // @TODO we are not dropping impressions on full queue yet, so DROPPED stats are not recorded
                if (telemetryCache) {
                    telemetryCache.recordImpressionStats((0, _constants1.QUEUED), impressionsToStore.length);
                    telemetryCache.recordImpressionStats((0, _constants1.DEDUPED), deduped);
                }
            }
            // @TODO next block might be handled by the integration manager. In that case, the metadata object doesn't need to be passed in the constructor
            if (impressionListener || integrationsManager) {
                var _loop_1 = function(i) {
                    var impressionData = {
                        // copy of impression, to avoid unexpected behaviour if modified by integrations or impressionListener
                        impression: (0, _objectAssign.objectAssign)({}, impressionsToListener[i]),
                        attributes: attributes,
                        ip: ip,
                        hostname: hostname,
                        sdkLanguageVersion: version
                    };
                    // Wrap in a timeout because we don't want it to be blocking.
                    setTimeout(function() {
                        // integrationsManager.handleImpression does not throw errors
                        if (integrationsManager) integrationsManager.handleImpression(impressionData);
                        try {
                            if (impressionListener) impressionListener.logImpression(impressionData);
                        } catch (err) {
                            log.error((0, _constants.ERROR_IMPRESSIONS_LISTENER), [
                                err
                            ]);
                        }
                    }, 0);
                };
                for(var i = 0; i < impressionsToListenerCount; i++)_loop_1(i);
            }
        }
    };
}

},{"../utils/lang/objectAssign":"eGIPQ","../utils/promise/thenable":"7l6dl","../logger/constants":"hiXko","../utils/constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1K9eK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Event tracker stores events in cache and pass them to the integrations manager if provided.
 *
 * @param eventsCache cache to save events
 * @param integrationsManager optional event handler used for integrations
 */ parcelHelpers.export(exports, "eventTrackerFactory", ()=>eventTrackerFactory);
var _objectAssign = require("../utils/lang/objectAssign");
var _thenable = require("../utils/promise/thenable");
var _constants = require("../logger/constants");
var _constants1 = require("../utils/constants");
var _mode = require("../utils/settingsValidation/mode");
function eventTrackerFactory(settings, eventsCache, integrationsManager, telemetryCache) {
    var log = settings.log, mode = settings.mode;
    var isAsync = (0, _mode.isConsumerMode)(mode);
    function queueEventsCallback(eventData, tracked) {
        var eventTypeId = eventData.eventTypeId, trafficTypeName = eventData.trafficTypeName, key = eventData.key, value = eventData.value, timestamp = eventData.timestamp, properties = eventData.properties;
        // Logging every prop would be too much.
        var msg = 'event of type "' + eventTypeId + '" for traffic type "' + trafficTypeName + '". Key: ' + key + ". Value: " + value + ". Timestamp: " + timestamp + ". " + (properties ? "With properties." : "With no properties.");
        if (tracked) {
            log.info((0, _constants.EVENTS_TRACKER_SUCCESS), [
                msg
            ]);
            if (integrationsManager) // Wrap in a timeout because we don't want it to be blocking.
            setTimeout(function() {
                // copy of event, to avoid unexpected behaviour if modified by integrations
                var eventDataCopy = (0, _objectAssign.objectAssign)({}, eventData);
                if (properties) eventDataCopy.properties = (0, _objectAssign.objectAssign)({}, properties);
                // integrationsManager does not throw errors (they are internally handled by each integration module)
                integrationsManager.handleEvent(eventDataCopy);
            }, 0);
        } else log.error((0, _constants.ERROR_EVENTS_TRACKER), [
            msg
        ]);
        return tracked;
    }
    return {
        track: function(eventData, size) {
            if (settings.userConsent === (0, _constants1.CONSENT_DECLINED)) return isAsync ? Promise.resolve(false) : false;
            var tracked = eventsCache.track(eventData, size);
            if ((0, _thenable.thenable)(tracked)) return tracked.then(queueEventsCallback.bind(null, eventData));
            else {
                // Record when eventsCache is sync only (standalone mode)
                // @TODO we are not dropping events on full queue yet, so `tracked` is always true ATM
                if (telemetryCache) telemetryCache.recordEventStats(tracked ? (0, _constants1.QUEUED) : (0, _constants1.DROPPED), 1);
                return queueEventsCallback(eventData, tracked);
            }
        }
    };
}

},{"../utils/lang/objectAssign":"eGIPQ","../utils/promise/thenable":"7l6dl","../logger/constants":"hiXko","../utils/constants":"bdnhi","../utils/settingsValidation/mode":"5sFpT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brWgu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "telemetryTrackerFactory", ()=>telemetryTrackerFactory);
var _labels = require("../utils/labels");
var _timer = require("../utils/timeTracker/timer");
var _constants = require("../utils/constants");
function telemetryTrackerFactory(telemetryCache, now) {
    if (telemetryCache && now) {
        var startTime_1 = (0, _timer.timer)(now);
        return {
            trackEval: function(method) {
                var evalTime = (0, _timer.timer)(now);
                return function(label) {
                    switch(label){
                        case 0, _labels.EXCEPTION:
                            telemetryCache.recordException(method);
                            return; // Don't track latency on exceptions
                        case 0, _labels.SDK_NOT_READY:
                            if (telemetryCache.recordNonReadyUsage) telemetryCache.recordNonReadyUsage();
                    }
                    telemetryCache.recordLatency(method, evalTime());
                };
            },
            trackHttp: function(operation) {
                var httpTime = (0, _timer.timer)(now);
                return function(error) {
                    telemetryCache.recordHttpLatency(operation, httpTime());
                    if (error && error.statusCode) telemetryCache.recordHttpError(operation, error.statusCode);
                    else telemetryCache.recordSuccessfulSync(operation, Date.now());
                };
            },
            sessionLength: function() {
                if (telemetryCache.recordSessionLength) telemetryCache.recordSessionLength(startTime_1());
            },
            streamingEvent: function(e, d) {
                if (e === (0, _constants.AUTH_REJECTION)) telemetryCache.recordAuthRejections();
                else {
                    telemetryCache.recordStreamingEvents({
                        e: e,
                        d: d,
                        t: Date.now()
                    });
                    if (e === (0, _constants.TOKEN_REFRESH)) telemetryCache.recordTokenRefreshes();
                }
            },
            addTag: function(tag) {
                // @ts-ignore
                if (telemetryCache.addTag) telemetryCache.addTag(tag);
            },
            trackUpdatesFromSSE: function(type) {
                telemetryCache.recordUpdatesFromSSE(type);
            }
        };
    } else {
        var noopTrack = function() {
            return function() {};
        };
        return {
            trackEval: noopTrack,
            trackHttp: noopTrack,
            sessionLength: function() {},
            streamingEvent: function() {},
            addTag: function() {},
            trackUpdatesFromSSE: function() {}
        };
    }
}

},{"../utils/labels":"k9ezF","../utils/timeTracker/timer":"2A4Jm","../utils/constants":"bdnhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ehphW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The public Logger utility API exposed via SplitFactory, used to update the log level.
 *
 * @param log the factory logger instance to handle
 */ parcelHelpers.export(exports, "createLoggerAPI", ()=>createLoggerAPI);
var _index = require("./index");
var _constants = require("./constants");
function createLoggerAPI(log) {
    function setLogLevel(logLevel) {
        if ((0, _index.isLogLevelString)(logLevel)) log.setLogLevel(logLevel);
        else log.error((0, _constants.ERROR_LOGLEVEL_INVALID));
    }
    return {
        /**
         * Enables all the logs.
         */ enable: function() {
            setLogLevel((0, _index.LogLevels).DEBUG);
        },
        /**
         * Sets a custom log Level for the SDK.
         * @param {string} logLevel - Custom LogLevel value.
         */ setLogLevel: setLogLevel,
        /**
         * Disables all the log levels.
         */ disable: function() {
            // Disabling is equal logLevel none
            setLogLevel((0, _index.LogLevels).NONE);
        },
        /**
         * Exposed for usage with setLogLevel
         */ LogLevel: (0, _index.LogLevels)
    };
}

},{"./index":"j3d7V","./constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hJAjK":[function(require,module,exports) {
/**
 * Debug strategy for impressions tracker. Wraps impressions to store and adds previousTime if it corresponds
 *
 * @param impressionsObserver impression observer. Previous time (pt property) is included in impression instances
 * @returns IStrategyResult
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "strategyDebugFactory", ()=>strategyDebugFactory);
function strategyDebugFactory(impressionsObserver) {
    return {
        process: function(impressions) {
            impressions.forEach(function(impression) {
                // Adds previous time if it is enabled
                impression.pt = impressionsObserver.testAndSet(impression);
            });
            return {
                impressionsToStore: impressions,
                impressionsToListener: impressions,
                deduped: 0
            };
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dUko2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Optimized strategy for impressions tracker. Wraps impressions to store and adds previousTime if it corresponds
 *
 * @param impressionsObserver impression observer. previous time (pt property) is included in impression instances
 * @param impressionsCounter cache to save impressions count. impressions will be deduped (OPTIMIZED mode)
 * @returns IStrategyResult
 */ parcelHelpers.export(exports, "strategyOptimizedFactory", ()=>strategyOptimizedFactory);
var _time = require("../../utils/time");
function strategyOptimizedFactory(impressionsObserver, impressionsCounter) {
    return {
        process: function(impressions) {
            var impressionsToStore = [];
            impressions.forEach(function(impression) {
                impression.pt = impressionsObserver.testAndSet(impression);
                var now = Date.now();
                // Increments impression counter per featureName
                if (impression.pt) impressionsCounter.track(impression.feature, now, 1);
                // Checks if the impression should be added in queue to be sent
                if (!impression.pt || impression.pt < (0, _time.truncateTimeFrame)(now)) impressionsToStore.push(impression);
            });
            return {
                impressionsToStore: impressionsToStore,
                impressionsToListener: impressions,
                deduped: impressions.length - impressionsToStore.length
            };
        }
    };
}

},{"../../utils/time":"8OAfE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1y4yC":[function(require,module,exports) {
/**
 * None strategy for impressions tracker.
 *
 * @param impressionsCounter cache to save impressions count. impressions will be deduped (OPTIMIZED mode)
 * @param uniqueKeysTracker unique keys tracker in charge of tracking the unique keys per split.
 * @returns IStrategyResult
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "strategyNoneFactory", ()=>strategyNoneFactory);
function strategyNoneFactory(impressionsCounter, uniqueKeysTracker) {
    return {
        process: function(impressions) {
            impressions.forEach(function(impression) {
                var now = Date.now();
                // Increments impression counter per featureName
                impressionsCounter.track(impression.feature, now, 1);
                // Keep track by unique key
                uniqueKeysTracker.track(impression.keyName, impression.feature);
            });
            return {
                impressionsToStore: [],
                impressionsToListener: impressions,
                deduped: 0
            };
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dhatO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Trackes uniques keys
 * Unique Keys Tracker will be in charge of checking if the MTK was already sent to the BE in the last period
 * or schedule to be sent; if not it will be added in an internal cache and sent in the next post.
 *
 * @param log Logger instance
 * @param uniqueKeysCache cache to save unique keys
 * @param filterAdapter filter adapter
 */ parcelHelpers.export(exports, "uniqueKeysTrackerFactory", ()=>uniqueKeysTrackerFactory);
var _constants = require("../logger/constants");
var noopFilterAdapter = {
    add: function() {
        return true;
    },
    contains: function() {
        return true;
    },
    clear: function() {}
};
function uniqueKeysTrackerFactory(log, uniqueKeysCache, filterAdapter) {
    if (filterAdapter === void 0) filterAdapter = noopFilterAdapter;
    var intervalId;
    if (filterAdapter.refreshRate) intervalId = setInterval(filterAdapter.clear, filterAdapter.refreshRate);
    return {
        track: function(key, featureName) {
            if (!filterAdapter.add(key, featureName)) {
                log.debug((0, _constants.LOG_PREFIX_UNIQUE_KEYS_TRACKER) + "The feature " + featureName + " and key " + key + " exist in the filter");
                return;
            }
            uniqueKeysCache.track(key, featureName);
        },
        stop: function() {
            clearInterval(intervalId);
        }
    };
}

},{"../logger/constants":"hiXko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1de2R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFetch", ()=>getFetch);
var _unfetch = require("unfetch");
var _unfetchDefault = parcelHelpers.interopDefault(_unfetch);
function getFetch() {
    return typeof fetch === "function" ? fetch : (0, _unfetchDefault.default);
}

},{"unfetch":"6OTEM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6OTEM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(e, n) {
        return n = n || {}, new Promise(function(t, r) {
            var s = new XMLHttpRequest, o = [], u = [], i = {}, a = function() {
                return {
                    ok: 2 == (s.status / 100 | 0),
                    statusText: s.statusText,
                    status: s.status,
                    url: s.responseURL,
                    text: function() {
                        return Promise.resolve(s.responseText);
                    },
                    json: function() {
                        return Promise.resolve(s.responseText).then(JSON.parse);
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([
                            s.response
                        ]));
                    },
                    clone: a,
                    headers: {
                        keys: function() {
                            return o;
                        },
                        entries: function() {
                            return u;
                        },
                        get: function(e) {
                            return i[e.toLowerCase()];
                        },
                        has: function(e) {
                            return e.toLowerCase() in i;
                        }
                    }
                };
            };
            for(var l in s.open(n.method || "get", e, !0), s.onload = function() {
                s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e, n, t) {
                    o.push(n = n.toLowerCase()), u.push([
                        n,
                        t
                    ]), i[n] = i[n] ? i[n] + "," + t : t;
                }), t(a());
            }, s.onerror = r, s.withCredentials = "include" == n.credentials, n.headers)s.setRequestHeader(l, n.headers[l]);
            s.send(n.body || null);
        });
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnui1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEventSource", ()=>getEventSource);
function getEventSource() {
    return typeof EventSource === "function" ? EventSource : undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fsH08":[function(require,module,exports) {
// @ts-nocheck
// Trimmed version of "events" library (https://www.npmjs.com/package/events).
// Removed features:
// - Max listener leak warning
// - EventEmitter.prototype.prependListener
// - EventEmitter.prototype.prependOnceListener
// - EventEmitter.prototype.listeners
// - EventEmitter.prototype.rawListeners
// - EventEmitter.prototype.listenerCount
// - EventEmitter.prototype.eventNames
//
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventEmitter", ()=>EventEmitter);
var R = typeof Reflect === "object" ? Reflect : null;
var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var EventEmitter = function EventEmitter() {
    EventEmitter.init.call(this);
};
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
function checkListener(listener) {
    if (typeof listener !== "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === "error";
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === "function") ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i_1 = 0; i_1 < len; ++i_1)ReflectApply(listeners[i_1], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === "function") // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
    } else if (typeof list !== "function") {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit("removeListener", type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === "function") this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jicwB":[function(require,module,exports) {
// Can be used on any runtime, since it fallbacks to `Date.now` if `performance.now` is not available
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "now", ()=>now);
function nowFactory() {
    // eslint-disable-next-line
    if (typeof performance === "object" && typeof performance.now === "function") // eslint-disable-next-line
    return performance.now.bind(performance);
    else return Date.now;
}
var now = nowFactory();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hbj89","igcvL"], "igcvL", "parcelRequireedfc")

//# sourceMappingURL=index.5baa4167.js.map
