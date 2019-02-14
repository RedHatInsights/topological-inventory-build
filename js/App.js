/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "e07091ee6f67c3170d46";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"App": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"DetailPage~ProviderPage":"DetailPage~ProviderPage","DetailPage":"DetailPage","ProviderPage":"ProviderPage","ListingPage":"ListingPage","TopologyPage":"TopologyPage"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"ProviderPage":1,"TopologyPage":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({"DetailPage~ProviderPage":"DetailPage~ProviderPage","DetailPage":"DetailPage","ProviderPage":"ProviderPage","ListingPage":"ListingPage","TopologyPage":"TopologyPage"}[chunkId]||chunkId) + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/insights/platform/topological-inventory/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/entry-dev.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Routes */ "./src/Routes.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redux_reducers_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./redux/reducers/providers */ "./src/redux/reducers/providers.js");
/* harmony import */ var _redux_reducers_listing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./redux/reducers/listing */ "./src/redux/reducers/listing.js");
/* harmony import */ var _redux_reducers_topology__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./redux/reducers/topology */ "./src/redux/reducers/topology.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_17__);


















var registry;

var App =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _Component);

  function App(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      console.log('getStore()');
      console.log(App.getRegistry().getStore());
      App.getRegistry().register({
        providers: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["applyReducerHash"])(_redux_reducers_providers__WEBPACK_IMPORTED_MODULE_14__["default"], _redux_reducers_providers__WEBPACK_IMPORTED_MODULE_14__["defaultProvidersState"])
      });
      App.getRegistry().register({
        listing: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["applyReducerHash"])(_redux_reducers_listing__WEBPACK_IMPORTED_MODULE_15__["default"], _redux_reducers_listing__WEBPACK_IMPORTED_MODULE_15__["defaultListingState"])
      });
      App.getRegistry().register({
        topology: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["applyReducerHash"])(_redux_reducers_topology__WEBPACK_IMPORTED_MODULE_16__["default"], {})
      });
      App.getRegistry().register({
        notifications: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_11__["notifications"]
      });
      insights.chrome.init();

      try {
        insights.chrome.identifyApp('topological-inventory');
        this.appNav = insights.chrome.on('APP_NAVIGATION', function (event) {
          return _this.props.history.push("/".concat(event.navId));
        });
      } catch (_exception) {
        this.appNav = null;
        console.warn('Failed to initialize chrome navigation.');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.appNav) {
        this.appNav();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_11__["NotificationsPortal"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_12__["Routes"], {
        childProps: this.props
      }));
    }
  }], [{
    key: "getRegistry",
    value: function getRegistry() {
      if (!registry) {
        registry = new _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["ReducerRegistry"]({}, [Object(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_9__["default"])(), Object(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_11__["notificationsMiddleware"])({
          errorTitleKey: 'error',
          errorDescriptionKey: 'error'
        }), redux_logger__WEBPACK_IMPORTED_MODULE_17___default.a]);
      }

      return registry;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

App.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
/**
 * withRouter: https://reacttraining.com/react-router/web/api/withRouter
 * connect: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *          https://reactjs.org/docs/higher-order-components.html
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])()(App)));

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utilities/asyncComponent */ "./src/Utilities/asyncComponent.js");
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/some */ "./node_modules/lodash/some.js");
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_some__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _views_viewDefinitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/viewDefinitions */ "./src/views/viewDefinitions.js");








/**
 * Aysnc imports of components
 *
 * https://webpack.js.org/guides/code-splitting/
 * https://reactjs.org/docs/code-splitting.html
 *
 * pros:
 *      1) code splitting
 *      2) can be used in server-side rendering
 * cons:
 *      1) nameing chunk names adds unnecessary docs to code,
 *         see the difference with DashboardMap and InventoryDeployments.
 *
 */

var ProviderPage = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
  return Promise.all(/*! import() | ProviderPage */[__webpack_require__.e("DetailPage~ProviderPage"), __webpack_require__.e("ProviderPage")]).then(__webpack_require__.bind(null, /*! ./SmartComponents/ProviderPage/ProviderPage */ "./src/SmartComponents/ProviderPage/ProviderPage.js"));
});
var ListingPage = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
  return __webpack_require__.e(/*! import() | ListingPage */ "ListingPage").then(__webpack_require__.bind(null, /*! ./SmartComponents/ListingPage/ListingPage */ "./src/SmartComponents/ListingPage/ListingPage.js"));
});
var DetailPage = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
  return Promise.all(/*! import() | DetailPage */[__webpack_require__.e("DetailPage~ProviderPage"), __webpack_require__.e("DetailPage")]).then(__webpack_require__.bind(null, /*! ./SmartComponents/DetailPage/DetailPage */ "./src/SmartComponents/DetailPage/DetailPage.js"));
});
var TopologyPage = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
  return __webpack_require__.e(/*! import() | TopologyPage */ "TopologyPage").then(__webpack_require__.bind(null, /*! ./SmartComponents/TopologyPage/TopologyPage */ "./src/SmartComponents/TopologyPage/TopologyPage.js"));
});
var paths = {
  providers: '/',
  provider_new: '/new',
  provider_detail: '/:id',
  topology: '/:id/topology'
};

var InsightsRoute = function InsightsRoute(_ref) {
  var rootClass = _ref.rootClass,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["rootClass"]);

  var root = document.getElementById('root');
  root.removeAttribute('class');
  root.classList.add("page__".concat(rootClass), 'pf-c-page__main', 'pf-l-page__main');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], rest);
};

InsightsRoute.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  rootClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

var dynamicRoutes = function dynamicRoutes(viewDefinitions) {
  return lodash_reduce__WEBPACK_IMPORTED_MODULE_6___default()(Object.keys(viewDefinitions), function (acc, viewName) {
    return acc.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(InsightsRoute, {
      path: "/:id/".concat(viewName),
      key: viewName,
      component: ListingPage,
      rootClass: "listing"
    })) && acc;
  }, []);
};
/**
 * the Switch component changes routes depending on the path.
 *
 * Route properties:
 *      exact - path must match exactly,
 *      path - https://prod.foo.redhat.com:1337/insights/advisor/rules
 *      component - component to be rendered when a route has been chosen.
 */


var Routes = function Routes(props) {
  var path = props.childProps.location.pathname;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(InsightsRoute, {
    exact: true,
    path: paths.providers,
    component: ProviderPage,
    rootClass: "providers"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(InsightsRoute, {
    exact: true,
    path: paths.provider_new,
    component: ProviderPage,
    rootClass: "providers"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(InsightsRoute, {
    path: paths.topology,
    component: TopologyPage,
    rootClass: "provider"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(InsightsRoute, {
    exact: true,
    path: paths.provider_detail,
    component: DetailPage,
    rootClass: "provider"
  }), dynamicRoutes(_views_viewDefinitions__WEBPACK_IMPORTED_MODULE_7__["viewDefinitions"]), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    render: function render() {
      return lodash_some__WEBPACK_IMPORTED_MODULE_5___default()(paths, function (p) {
        return p === path;
      }) ? null : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: paths.providers
      });
    }
  }));
};
Routes.propTypes = {
  childProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired
};

/***/ }),

/***/ "./src/Utilities/asyncComponent.js":
/*!*****************************************!*\
  !*** ./src/Utilities/asyncComponent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return asyncComponent; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








/**
 * Webpack allows loading components asynchronously by using import().
 *
 *      Ex) const Component = asyncComponent(() => import('component');
 *
 *          class aClass extends React.Component {
 *              render() {
 *                  return (<Component prop1="prop1" prop2="prop2" ... />);
 *              }
 *          }
 *
 *  https://reactjs.org/docs/higher-order-components.html
 *
 * @param importComponent a function that contains and async import statement
 *      Ex) () => import('react-component')
 *
 * @returns {AsyncComponent} The imported component or can return a loading
 */

function asyncComponent(importComponent) {
  var AsyncComponent =
  /*#__PURE__*/
  function (_Component) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(AsyncComponent, _Component);

    function AsyncComponent(props) {
      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, AsyncComponent);

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(AsyncComponent).call(this, props));
      _this.state = {
        component: null
      };
      return _this;
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AsyncComponent, [{
      key: "componentDidMount",
      value: function () {
        var _componentDidMount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var _ref, component;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return importComponent();

                case 2:
                  _ref = _context.sent;
                  component = _ref.default;
                  this.setState({
                    component: component
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function componentDidMount() {
          return _componentDidMount.apply(this, arguments);
        }

        return componentDidMount;
      }()
    }, {
      key: "render",
      value: function render() {
        var C = this.state.component;
        return C ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(C, this.props) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Loading...");
      }
    }]);

    return AsyncComponent;
  }(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

  return AsyncComponent;
}

/***/ }),

/***/ "./src/Utilities/listHelpers.js":
/*!**************************************!*\
  !*** ./src/Utilities/listHelpers.js ***!
  \**************************************/
/*! exports provided: sortList, paginateList, filterList, processList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortList", function() { return sortList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginateList", function() { return paginateList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterList", function() { return filterList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processList", function() { return processList; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/drop */ "./node_modules/lodash/drop.js");
/* harmony import */ var lodash_drop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_drop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/take */ "./node_modules/lodash/take.js");
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_take__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_lowerCase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/lowerCase */ "./node_modules/lodash/lowerCase.js");
/* harmony import */ var lodash_lowerCase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_lowerCase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_fp_flow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/fp/flow */ "./node_modules/lodash/fp/flow.js");
/* harmony import */ var lodash_fp_flow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_flow__WEBPACK_IMPORTED_MODULE_6__);







var sortList = function sortList(list, column, direction) {
  return !column ? list : lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default()(list, [function (element) {
    return lodash_lowerCase__WEBPACK_IMPORTED_MODULE_4___default()('' + lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(element, column));
  }], [direction]);
};
var paginateList = function paginateList(list, pageNumber, pageSize) {
  return lodash_take__WEBPACK_IMPORTED_MODULE_2___default()(lodash_drop__WEBPACK_IMPORTED_MODULE_1___default()(list, pageSize * (pageNumber - 1)), pageSize);
};
var filterList = function filterList(list, column, value) {
  return !value || !column ? list : lodash_filter__WEBPACK_IMPORTED_MODULE_5___default()(list, function (element) {
    return lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(element, column).match(RegExp(value));
  });
};
var processList = function processList(list, options) {
  var filtered = filterList(list, options.filterColumn, options.filterValue);
  return {
    length: filtered.length,
    list: lodash_fp_flow__WEBPACK_IMPORTED_MODULE_6___default()(function (l) {
      return sortList(l, options.sortBy, options.sortDirection);
    }, function (l) {
      return paginateList(l, options.pageNumber, options.pageSize);
    })(filtered)
  };
};

/***/ }),

/***/ "./src/api/topology.js":
/*!*****************************!*\
  !*** ./src/api/topology.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*eslint max-len: 0*/
var topologyData = {
  nodes: [{
    id: 3,
    title: 'Yang',
    size: 24,
    fonticon: 'fa fa-cloud',
    depth: 3,
    status: 'valid',
    highlight: false,
    x: 600,
    y: 161.60000000000002
  }, {
    id: 4,
    title: 'Gray',
    size: 24,
    fonticon: 'fa fa-cloud',
    depth: 3,
    status: 'valid',
    highlight: false,
    x: 600,
    y: 161.60000000000002
  }, {
    id: 5,
    title: 'Maddox',
    size: 24,
    fileicon: 'https://www.svgrepo.com/show/5386/speedometer.svg',
    depth: 3,
    status: 'warning',
    highlight: false,
    x: 600,
    y: 161.60000000000002
  }, {
    id: 0,
    title: 'Levy',
    size: 24,
    fonticon: 'fa fa-cog',
    depth: 1,
    status: 'valid',
    highlight: false,
    x: 50,
    y: 161.60000000000002,
    fx: 61,
    fy: null
  }, {
    id: 1,
    title: 'Celina',
    size: 24,
    fonticon: 'fa fa-cloud',
    depth: 2,
    status: 'warning',
    highlight: false,
    x: 400,
    y: 161.60000000000002
  }, {
    id: 2,
    title: 'Nancy',
    size: 24,
    fonticon: 'fa fa-cloud',
    depth: 2,
    status: 'critical',
    highlight: false,
    x: 400,
    y: 161.60000000000002
  }],
  edges: [{
    source: 1,
    target: 4
  }, {
    source: 2,
    target: 5
  }, {
    source: 0,
    target: 1
  }, {
    source: 0,
    target: 2
  }, {
    source: 1,
    target: 3
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (topologyData);

/***/ }),

/***/ "./src/entry-dev.js":
/*!**************************!*\
  !*** ./src/entry-dev.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");



 //import ReducerRegistry from './Utilities/ReducerRegistry';

 // exposes webpack variable RELEASE

/*global RELEASE:true*/

/*eslint no-undef: "error"*/

/**
 * Hooks up redux to app.
 *  https://redux.js.org/advanced/usage-with-react-router
 */

console.log(_App__WEBPACK_IMPORTED_MODULE_4__["default"]);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: _App__WEBPACK_IMPORTED_MODULE_4__["default"].getRegistry().getStore()
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  basename: "/".concat("insights", "/platform/topological-inventory")
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ "./src/redux/action-types-listing.js":
/*!*******************************************!*\
  !*** ./src/redux/action-types-listing.js ***!
  \*******************************************/
/*! exports provided: ASYNC_ACTION_TYPES, SORT_LISTING_DATA, PAGE_AND_SIZE_LISTING_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASYNC_ACTION_TYPES", function() { return ASYNC_ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_LISTING_DATA", function() { return SORT_LISTING_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_AND_SIZE_LISTING_DATA", function() { return PAGE_AND_SIZE_LISTING_DATA; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

var asyncActions = ['LOAD_LISTING_DATA'].reduce(function (acc, curr) {
  return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(acc), [curr, "".concat(curr, "_PENDING"), "".concat(curr, "_FULFILLED"), "".concat(curr, "_REJECTED")]);
}, []);
var ASYNC_ACTION_TYPES = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(asyncActions).reduce(function (acc, curr) {
  acc[curr] = curr;
  return acc;
}, {});
var SORT_LISTING_DATA = 'SORT_LISTING_DATA';
var PAGE_AND_SIZE_LISTING_DATA = 'PAGE_AND_SIZE_LISTING_DATA';

/***/ }),

/***/ "./src/redux/action-types-providers.js":
/*!*********************************************!*\
  !*** ./src/redux/action-types-providers.js ***!
  \*********************************************/
/*! exports provided: ACTION_TYPES, SELECT_ENTITY, EXPAND_ENTITY, SORT_ENTITIES, PAGE_AND_SIZE, ADD_PROVIDER, FILTER_PROVIDERS, CLOSE_ALERT, ADD_ALERT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function() { return ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ENTITY", function() { return SELECT_ENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPAND_ENTITY", function() { return EXPAND_ENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_ENTITIES", function() { return SORT_ENTITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_AND_SIZE", function() { return PAGE_AND_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PROVIDER", function() { return ADD_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_PROVIDERS", function() { return FILTER_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_ALERT", function() { return CLOSE_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ALERT", function() { return ADD_ALERT; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

var asyncActions = ['LOAD_ENTITIES', 'CREATE_SOURCE'].reduce(function (acc, curr) {
  return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(acc), [curr, "".concat(curr, "_PENDING"), "".concat(curr, "_FULFILLED"), "".concat(curr, "_REJECTED")]);
}, []);
var ACTION_TYPES = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(asyncActions).reduce(function (acc, curr) {
  acc[curr] = curr;
  return acc;
}, {});
var SELECT_ENTITY = 'SELECT_ENTITY';
var EXPAND_ENTITY = 'EXPAND_ENTITY';
var SORT_ENTITIES = 'SORT_ENTITIES';
var PAGE_AND_SIZE = 'PAGE_AND_SIZE';
var ADD_PROVIDER = 'ADD_PROVIDER';
var FILTER_PROVIDERS = 'FILTER_PROVIDERS';
var CLOSE_ALERT = 'CLOSE_ALERT';
var ADD_ALERT = 'ADD_ALERT';

/***/ }),

/***/ "./src/redux/action-types-topology.js":
/*!********************************************!*\
  !*** ./src/redux/action-types-topology.js ***!
  \********************************************/
/*! exports provided: LOAD_TOPOLOGY, NODE_CLICK_TOPOLOGY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_TOPOLOGY", function() { return LOAD_TOPOLOGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_CLICK_TOPOLOGY", function() { return NODE_CLICK_TOPOLOGY; });
var LOAD_TOPOLOGY = 'LOAD_TOPOLOGY';
var NODE_CLICK_TOPOLOGY = 'NODE_CLICK_TOPOLOGY';

/***/ }),

/***/ "./src/redux/reducers/listing.js":
/*!***************************************!*\
  !*** ./src/redux/reducers/listing.js ***!
  \***************************************/
/*! exports provided: defaultListingState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultListingState", function() { return defaultListingState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types_listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types-listing */ "./src/redux/action-types-listing.js");
/* harmony import */ var _Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities/listHelpers */ "./src/Utilities/listHelpers.js");



var _ASYNC_ACTION_TYPES$L;



var defaultListingState = {
  loaded: false,
  pageSize: 10,
  pageNumber: 1 // PF numbers pages from 1. Seriously.

};

function loadedListingData(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    loaded: true,
    listingRows: Object(_Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__["paginateList"])(Object(_Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__["sortList"])(payload, state.sortBy, state.sortDirection), state.pageNumber, state.pageSize),
    rawRows: payload,
    pageNumber: 1,
    pageSize: 10
  });
}

function sortListingData(state, _ref2) {
  var _ref2$payload = _ref2.payload,
      column = _ref2$payload.column,
      direction = _ref2$payload.direction;
  console.log('sortListingData');
  console.log(column);
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    listingRows: Object(_Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__["paginateList"])(Object(_Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__["sortList"])(state.rawRows, column, direction), state.pageNumber, state.pageSize),
    sortBy: column,
    sortDirection: direction
  });
}

function setPageAndSize(state, _ref3) {
  var _ref3$payload = _ref3.payload,
      page = _ref3$payload.page,
      size = _ref3$payload.size;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    listingRows: Object(_Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__["paginateList"])(Object(_Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__["sortList"])(state.rawRows, state.sortBy, state.sortDirection), page, size),
    pageSize: size,
    pageNumber: page
  });
}

var listingPending = function listingPending(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    loaded: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_ASYNC_ACTION_TYPES$L = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ASYNC_ACTION_TYPES$L, _action_types_listing__WEBPACK_IMPORTED_MODULE_2__["ASYNC_ACTION_TYPES"].LOAD_LISTING_DATA_FULFILLED, loadedListingData), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ASYNC_ACTION_TYPES$L, _action_types_listing__WEBPACK_IMPORTED_MODULE_2__["ASYNC_ACTION_TYPES"].LOAD_LISTING_DATA_PENDING, listingPending), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ASYNC_ACTION_TYPES$L, _action_types_listing__WEBPACK_IMPORTED_MODULE_2__["SORT_LISTING_DATA"], sortListingData), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ASYNC_ACTION_TYPES$L, _action_types_listing__WEBPACK_IMPORTED_MODULE_2__["PAGE_AND_SIZE_LISTING_DATA"], setPageAndSize), _ASYNC_ACTION_TYPES$L);

/***/ }),

/***/ "./src/redux/reducers/providers.js":
/*!*****************************************!*\
  !*** ./src/redux/reducers/providers.js ***!
  \*****************************************/
/*! exports provided: defaultProvidersState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProvidersState", function() { return defaultProvidersState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types-providers */ "./src/redux/action-types-providers.js");
/* harmony import */ var _Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities/listHelpers */ "./src/Utilities/listHelpers.js");



var _ACTION_TYPES$LOAD_EN;



var defaultProvidersState = {
  loaded: false,
  pageSize: 10,
  pageNumber: 1,
  // PF numbers pages from 1. Seriously.
  numberOfEntities: 0
};

var entitiesPending = function entitiesPending(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    loaded: false,
    expanded: null
  });
};

var processListInState = function processListInState(state) {
  var _processList = Object(_Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__["processList"])(state.rows, state),
      length = _processList.length,
      list = _processList.list;

  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    entities: list,
    numberOfEntities: length
  });
};

var entitiesLoaded = function entitiesLoaded(state, _ref) {
  var rows = _ref.payload;
  return processListInState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    loaded: true,
    rows: rows
  }));
};

var selectEntity = function selectEntity(state, _ref2) {
  var _ref2$payload = _ref2.payload,
      id = _ref2$payload.id,
      selected = _ref2$payload.selected;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    entities: state.entities.map(function (entity) {
      return entity.id === id ? _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, entity, {
        selected: selected
      }) : entity;
    })
  });
};

var expandEntity = function expandEntity(state, _ref3) {
  var _ref3$payload = _ref3.payload,
      id = _ref3$payload.id,
      _expanded = _ref3$payload._expanded;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    entities: state.entities.map(function (entity) {
      return entity.id === id ? _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, entity, {
        expanded: !entity.expanded
      }) : entity;
    })
  });
};

var sortEntities = function sortEntities(state, _ref4) {
  var _ref4$payload = _ref4.payload,
      column = _ref4$payload.column,
      direction = _ref4$payload.direction;
  return processListInState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    sortBy: column,
    sortDirection: direction
  }));
};

var setPageAndSize = function setPageAndSize(state, _ref5) {
  var _ref5$payload = _ref5.payload,
      page = _ref5$payload.page,
      size = _ref5$payload.size;
  return processListInState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    pageSize: size,
    pageNumber: page
  }));
};

var addProvider = function addProvider(state, _ref6) {
  var formData = _ref6.payload.formData;
  console.log('R: addProvider', formData);
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    // for now just add an alert
    alert: {
      message: 'New source was succesfully added.',
      type: 'success'
    }
  });
};

var filterProviders = function filterProviders(state, _ref7) {
  var _ref7$payload = _ref7.payload,
      column = _ref7$payload.column,
      value = _ref7$payload.value;
  return processListInState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    filterColumn: column,
    filterValue: value,
    pageNumber: 1
  }));
};
/*
const closeAlert = (state) => ({
    ...state,
    alert: null
})

const addAlert = (state, { payload: { message, type } }) => ({
    ...state,
    alert: {
        message,
        type,
    }
})

const createSourcePending = (state) => ({
    ...state,
    created: false
});

const createSourceFulFilled = (state, { payload }) => {
    const createData = payload;
    console.log('R: createSourceFulFilled');

    return processListInState({
        ...state,
        created: true
    });
};
*/


/* harmony default export */ __webpack_exports__["default"] = (_ACTION_TYPES$LOAD_EN = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["ACTION_TYPES"].LOAD_ENTITIES_PENDING, entitiesPending), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["ACTION_TYPES"].LOAD_ENTITIES_FULFILLED, entitiesLoaded), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["SELECT_ENTITY"], selectEntity), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["EXPAND_ENTITY"], expandEntity), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["SORT_ENTITIES"], sortEntities), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["PAGE_AND_SIZE"], setPageAndSize), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["ADD_PROVIDER"], addProvider), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["FILTER_PROVIDERS"], filterProviders), _ACTION_TYPES$LOAD_EN);

/***/ }),

/***/ "./src/redux/reducers/topology.js":
/*!****************************************!*\
  !*** ./src/redux/reducers/topology.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types-topology */ "./src/redux/action-types-topology.js");
/* harmony import */ var _api_topology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/topology */ "./src/api/topology.js");



var _LOAD_TOPOLOGY$NODE_C;




function loadTopologyData(state) {
  console.log('R: loadTopologyData');
  var nodes = _api_topology__WEBPACK_IMPORTED_MODULE_3__["default"].nodes,
      edges = _api_topology__WEBPACK_IMPORTED_MODULE_3__["default"].edges; // static example data for now

  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    nodes: nodes,
    edges: edges
  });
}

function nodeClickTopology(state, _ref) {
  var node = _ref.payload.node;
  console.log('R: nodeClickTopology', node);
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    activeNode: node
  });
}

/* harmony default export */ __webpack_exports__["default"] = (_LOAD_TOPOLOGY$NODE_C = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_LOAD_TOPOLOGY$NODE_C, _action_types_topology__WEBPACK_IMPORTED_MODULE_2__["LOAD_TOPOLOGY"], loadTopologyData), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_LOAD_TOPOLOGY$NODE_C, _action_types_topology__WEBPACK_IMPORTED_MODULE_2__["NODE_CLICK_TOPOLOGY"], nodeClickTopology), _LOAD_TOPOLOGY$NODE_C);

/***/ }),

/***/ "./src/views/viewDefinitions.js":
/*!**************************************!*\
  !*** ./src/views/viewDefinitions.js ***!
  \**************************************/
/*! exports provided: viewDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewDefinitions", function() { return viewDefinitions; });
var viewDefinitions = {
  container_projects: {
    displayName: 'Container Projects',
    //url: 'https://topological-inventory-api-topological-inventory-ci.10.8.96.54.nip.io/api/v0.0/sources/1/container_projects/',
    // FIXME
    url: '/r/insights/platform/topological-inventory/v0.0/sources/:id/container_projects/',
    columns: [{
      title: 'ID',
      value: 'id'
    }, {
      title: null,
      value: 'source_id'
    }, {
      title: null,
      value: 'source_ref'
    }, {
      title: 'Resource version',
      value: 'resource_version'
    }, {
      title: 'Name',
      value: 'name'
    }, {
      title: null,
      value: 'display_name'
    }, {
      title: 'Created at',
      value: 'created_at'
    }, {
      title: 'Updated at',
      value: 'updated_at'
    }, {
      title: null,
      value: 'source_deleted_at'
    }, {
      title: null,
      value: 'tenant_id'
    }, {
      title: null,
      value: 'source_created_at'
    }, {
      title: 'Archived on',
      value: 'archived_on'
    }]
  },
  container_groups: {
    // test data for pagination?
    //{"id":"725","source_id":1,"source_ref":"0c478b50-babb-11e8-ba7e-d094660d31fb","resource_version":"42398462","name":"my-ruby-project-2-build","container_project_id":19,"ipaddress":null,"created_at":"2018-10-17T15:59:02.689Z","updated_at":"2018-10-17T15:59:02.689Z","source_deleted_at":null,"tenant_id":null,"container_node_id":4,"source_created_at":"2018-09-17T20:48:36.000Z","archived_on":null}
    displayName: 'Container Groups',
    //url: 'https://topological-inventory-api-topological-inventory-ci.10.8.96.54.nip.io/api/v0.0/sources/1/container_groups/',
    url: '/r/insights/platform/topological-inventory/v0.0/sources/:id/container_groups/',
    columns: [{
      title: 'ID',
      value: 'id'
    }, {
      title: null,
      value: 'source_id'
    }, {
      title: null,
      value: 'source_ref'
    }, {
      title: 'Resource version',
      value: 'resource_version'
    }, {
      title: 'Name',
      value: 'name'
    }, {
      title: 'Container project',
      value: 'container_project_id'
    }, {
      title: 'IP address',
      value: 'ipaddress'
    }, {
      title: 'Created at',
      value: 'created_at'
    }, {
      title: 'Updated at',
      value: 'updated_at'
    }, {
      title: null,
      value: 'source_deleted_at'
    }, {
      title: null,
      value: 'tenant_id'
    }, {
      title: null,
      value: 'source_created_at'
    }, {
      title: 'Archived on',
      value: 'archived_on'
    }]
  },
  container_nodes: {
    displayName: 'Container Nodes',
    //url: 'https://topological-inventory-api-topological-inventory-ci.10.8.96.54.nip.io/api/v0.0/sources/1/container_nodes/',
    url: '/r/insights/platform/topological-inventory/v0.0/sources/:id/container_nodes/',
    // {"id":"4","source_id":1,"source_ref":"a03e9454-0d11-11e8-906a-d094660d31fb","resource_version":"51499636","name":"dell-r430-20.cloudforms.lab.eng.rdu2.redhat.com","cpus":48,"memory":134906109952,"tenant_id":null,"created_at":"2018-10-17T15:32:12.633Z","updated_at":"2018-10-24T03:35:19.656Z","source_deleted_at":null,"source_created_at":"2018-02-08T20:49:58.000Z","archived_on":null}
    columns: [{
      title: 'ID',
      value: 'id'
    }, {
      title: null,
      value: 'source_id'
    }, {
      title: null,
      value: 'source_ref'
    }, {
      title: 'Resource version',
      value: 'resource_version'
    }, {
      title: 'Name',
      value: 'name'
    }, {
      title: '# of CPUs',
      value: 'cpus'
    }, {
      title: 'Memory',
      value: 'memory'
    }, {
      title: 'Created at',
      value: 'created_at'
    }, {
      title: 'Updated at',
      value: 'updated_at'
    }, {
      title: null,
      value: 'source_deleted_at'
    }, {
      title: null,
      value: 'tenant_id'
    }, {
      title: null,
      value: 'source_created_at'
    }, {
      title: 'Archived on',
      value: 'archived_on'
    }]
  },
  container_templates: {
    displayName: 'Container Templates',
    //url: 'https://topological-inventory-api-topological-inventory-ci.10.8.96.54.nip.io/api/v0.0/sources/1/container_templates/',
    url: '/r/insights/platform/topological-inventory/v0.0/sources/:id/container_templates/',
    // {"id":"131","source_id":1,"source_ref":"1e443dec-594a-11e8-ba7e-d094660d31fb","resource_version":"1689429","container_project_id":null,"created_at":"2018-10-17T15:32:12.764Z","updated_at":"2018-10-24T03:24:50.980Z","source_deleted_at":null,"tenant_id":null,"source_created_at":"2018-05-16T20:45:50.000Z","name":"nginx-example","archived_on":null}
    columns: [{
      title: 'ID',
      value: 'id'
    }, {
      title: null,
      value: 'source_id'
    }, {
      title: null,
      value: 'source_ref'
    }, {
      title: 'Resource version',
      value: 'resource_version'
    }, {
      title: 'Name',
      value: 'name'
    }, {
      title: 'Container project',
      value: 'container_project_id'
    }, {
      title: '# of CPUs',
      value: 'cpus'
    }, {
      title: 'Memory',
      value: 'memory'
    }, {
      title: 'Created at',
      value: 'created_at'
    }, {
      title: 'Updated at',
      value: 'updated_at'
    }, {
      title: null,
      value: 'source_deleted_at'
    }, {
      title: null,
      value: 'tenant_id'
    }, {
      title: null,
      value: 'source_created_at'
    }, {
      title: 'Archived on',
      value: 'archived_on'
    }]
  }
};

/***/ })

/******/ });
//# sourceMappingURL=../sourcemaps/App.js.map