var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
import { $ as e$1, a0 as y, hn as e$2, a1 as n, ho as M, hp as n$1, hq as s$3, hr as v, R as l$2, fH as n$2, hs as e$3, co as l$3, N as n$3, du as s$4, ht as p$3, hu as y$1, bO as j$1, D as D$1, v as v$1, g as s$5, bU as p$4, gJ as z, U, dq as L$1, hv as Z, Q as r$1, ds as I, hw as t$1, y as s$6, hx as F, hy as J, hz as t$2, hA as Q, dv as Bt, hB as n$4 } from "./index.js";
import "vue";
const a = { base: "esri-identity-form", group: "esri-identity-form__group", label: "esri-identity-form__label", footer: "esri-identity-form__footer", esriInput: "esri-input", esriButton: "esri-button", esriButtonSecondary: "esri-button--secondary" }, l$1 = "ArcGIS Online";
let p$2 = class extends M {
  constructor(s2, e2) {
    super(s2, e2), this._usernameInputNode = null, this._passwordInputNode = null, this.signingIn = false, this.server = null, this.resource = null, this.error = null, this.oAuthPrompt = false;
  }
  render() {
    const { error: s2, server: e2, resource: t2, signingIn: o, oAuthPrompt: n2, messages: p2 } = this, d2 = n$1("div", { class: a.group }, s$3(n2 ? p2.oAuthInfo : p2.info, { server: e2 && /\.arcgis\.com/i.test(e2) ? l$1 : e2, resource: `(${t2 || p2.lblItem})` })), c = n2 ? null : n$1("div", { class: a.group, key: "username" }, n$1("label", { class: a.label }, p2.lblUser, n$1("input", { value: "", required: true, autocomplete: "off", spellcheck: false, type: "text", bind: this, afterCreate: v, "data-node-ref": "_usernameInputNode", class: a.esriInput }))), m = n2 ? null : n$1("div", { class: a.group, key: "password" }, n$1("label", { class: a.label }, p2.lblPwd, n$1("input", { value: "", required: true, type: "password", bind: this, afterCreate: v, "data-node-ref": "_passwordInputNode", class: a.esriInput }))), h = n$1("div", { class: this.classes(a.group, a.footer) }, n$1("input", { type: "submit", disabled: !!o, value: o ? p2.lblSigning : p2.lblOk, class: a.esriButton }), n$1("input", { type: "button", value: p2.lblCancel, bind: this, onclick: this._cancel, class: this.classes(a.esriButton, a.esriButtonSecondary) })), b2 = s2 ? n$1("div", null, s2.details && s2.details.httpStatus ? p2.invalidUser : p2.noAuthService) : null;
    return n$1("form", { class: a.base, bind: this, onsubmit: this._submit }, d2, b2, c, m, h);
  }
  _cancel() {
    this._set("signingIn", false), this._usernameInputNode && (this._usernameInputNode.value = ""), this._passwordInputNode && (this._passwordInputNode.value = ""), this.emit("cancel");
  }
  _submit(s2) {
    s2.preventDefault(), this._set("signingIn", true);
    const e2 = this.oAuthPrompt ? {} : { username: this._usernameInputNode && this._usernameInputNode.value, password: this._passwordInputNode && this._passwordInputNode.value };
    this.emit("submit", e2);
  }
};
e$1([y(), e$2("esri/identity/t9n/identity")], p$2.prototype, "messages", void 0), e$1([y()], p$2.prototype, "signingIn", void 0), e$1([y()], p$2.prototype, "server", void 0), e$1([y()], p$2.prototype, "resource", void 0), e$1([y()], p$2.prototype, "error", void 0), e$1([y()], p$2.prototype, "oAuthPrompt", void 0), p$2 = e$1([n("esri.identity.IdentityForm")], p$2);
const d = p$2;
/*!
* tabbable 6.0.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  return element.getRootNode();
} : function(element) {
  return element.ownerDocument;
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (element.tagName === "SLOT") {
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively2(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }
      var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
      var validShadowRoot = !options.shadowRootFilter || options.shadowRootFilter(element);
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};
var getTabindex = function getTabindex2(node, isScope) {
  if (node.tabIndex < 0) {
    if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || node.isContentEditable) && isNaN(parseInt(node.getAttribute("tabindex"), 10))) {
      return 0;
    }
  }
  return node.tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a2, b2) {
  return a2.tabIndex === b2.tabIndex ? a2.documentOrder - b2.documentOrder : a2.tabIndex - b2.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r2 = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r2;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i2 = 0; i2 < nodes.length; i2++) {
    if (nodes[i2].checked && nodes[i2].form === form) {
      return nodes[i2];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached2(node) {
  var _nodeRootHost;
  var nodeRootHost = getRootNode(node).host;
  var attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && _nodeRootHost.ownerDocument.contains(nodeRootHost) || node.ownerDocument.contains(node));
  while (!attached && nodeRootHost) {
    var _nodeRootHost2;
    nodeRootHost = getRootNode(nodeRootHost).host;
    attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && _nodeRootHost2.ownerDocument.contains(nodeRootHost));
  }
  return attached;
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (isNodeAttached(node)) {
      return !node.getClientRects().length;
    }
    if (displayCheck !== "legacy-full") {
      return true;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i2 = 0; i2 < parentNode.children.length; i2++) {
          var child = parentNode.children.item(i2);
          if (child.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var sortByOrder = function sortByOrder2(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i2) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getTabindex(element, isScope);
    var elements = isScope ? sortByOrder2(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i2,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(el, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable2(el, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
var isFocusable = function isFocusable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};
/*!
* focus-trap 7.0.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var activeFocusTraps = function() {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];
        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }
      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();
var isSelectableInput = function isSelectableInput2(node) {
  return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
};
var isEscapeEvent = function isEscapeEvent2(e2) {
  return e2.key === "Escape" || e2.key === "Esc" || e2.keyCode === 27;
};
var isTabEvent = function isTabEvent2(e2) {
  return e2.key === "Tab" || e2.keyCode === 9;
};
var delay = function delay2(fn) {
  return setTimeout(fn, 0);
};
var findIndex = function findIndex2(arr, fn) {
  var idx = -1;
  arr.every(function(value, i2) {
    if (fn(value)) {
      idx = i2;
      return false;
    }
    return true;
  });
  return idx;
};
var valueOrHandler = function valueOrHandler2(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === "function" ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget2(event) {
  return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
};
var createFocusTrap = function createFocusTrap2(elements, userOptions) {
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);
  var state = {
    containers: [],
    containerGroups: [],
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    delayInitialFocusTimer: void 0
  };
  var trap;
  var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };
  var findContainerIndex = function findContainerIndex2(element) {
    return state.containerGroups.findIndex(function(_ref) {
      var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || tabbableNodes.find(function(node) {
        return node === element;
      });
    });
  };
  var getNodeForOption = function getNodeForOption2(optionName) {
    var optionValue = config[optionName];
    if (typeof optionValue === "function") {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      optionValue = optionValue.apply(void 0, params);
    }
    if (optionValue === true) {
      optionValue = void 0;
    }
    if (!optionValue) {
      if (optionValue === void 0 || optionValue === false) {
        return optionValue;
      }
      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue;
    if (typeof optionValue === "string") {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode2() {
    var node = getNodeForOption("initialFocus");
    if (node === false) {
      return false;
    }
    if (node === void 0) {
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
        node = firstTabbableNode || getNodeForOption("fallbackFocus");
      }
    }
    if (!node) {
      throw new Error("Your focus-trap needs to have at least one focusable element");
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes2() {
    state.containerGroups = state.containers.map(function(container) {
      var tabbableNodes = tabbable(container, config.tabbableOptions);
      var focusableNodes = focusable(container, config.tabbableOptions);
      return {
        container,
        tabbableNodes,
        focusableNodes,
        firstTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[0] : null,
        lastTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : null,
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          var nodeIdx = focusableNodes.findIndex(function(n2) {
            return n2 === node;
          });
          if (nodeIdx < 0) {
            return void 0;
          }
          if (forward) {
            return focusableNodes.slice(nodeIdx + 1).find(function(n2) {
              return isTabbable(n2, config.tabbableOptions);
            });
          }
          return focusableNodes.slice(0, nodeIdx).reverse().find(function(n2) {
            return isTabbable(n2, config.tabbableOptions);
          });
        }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function(group) {
      return group.tabbableNodes.length > 0;
    });
    if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    }
  };
  var tryFocus = function tryFocus2(node) {
    if (node === false) {
      return;
    }
    if (node === doc.activeElement) {
      return;
    }
    if (!node || !node.focus) {
      tryFocus2(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
    var node = getNodeForOption("setReturnFocus", previousActiveElement);
    return node ? node : node === false ? false : previousActiveElement;
  };
  var checkPointerDown = function checkPointerDown2(e2) {
    var target = getActualTarget(e2);
    if (findContainerIndex(target) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e2)) {
      trap.deactivate({
        returnFocus: config.returnFocusOnDeactivate && !isFocusable(target, config.tabbableOptions)
      });
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e2)) {
      return;
    }
    e2.preventDefault();
  };
  var checkFocusIn = function checkFocusIn2(e2) {
    var target = getActualTarget(e2);
    var targetContained = findContainerIndex(target) >= 0;
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      e2.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  };
  var checkTab = function checkTab2(e2) {
    var target = getActualTarget(e2);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      var containerIndex = findContainerIndex(target);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
      if (containerIndex < 0) {
        if (e2.shiftKey) {
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (e2.shiftKey) {
        var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        }
      } else {
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        }
      }
    } else {
      destinationNode = getNodeForOption("fallbackFocus");
    }
    if (destinationNode) {
      e2.preventDefault();
      tryFocus(destinationNode);
    }
  };
  var checkKey = function checkKey2(e2) {
    if (isEscapeEvent(e2) && valueOrHandler(config.escapeDeactivates, e2) !== false) {
      e2.preventDefault();
      trap.deactivate();
      return;
    }
    if (isTabEvent(e2)) {
      checkTab(e2);
      return;
    }
  };
  var checkClick = function checkClick2(e2) {
    var target = getActualTarget(e2);
    if (findContainerIndex(target) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e2)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e2)) {
      return;
    }
    e2.preventDefault();
    e2.stopImmediatePropagation();
  };
  var addListeners = function addListeners2() {
    if (!state.active) {
      return;
    }
    activeFocusTraps.activateTrap(trap);
    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener("focusin", checkFocusIn, true);
    doc.addEventListener("mousedown", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("touchstart", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("click", checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener("keydown", checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };
  var removeListeners = function removeListeners2() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener("focusin", checkFocusIn, true);
    doc.removeEventListener("mousedown", checkPointerDown, true);
    doc.removeEventListener("touchstart", checkPointerDown, true);
    doc.removeEventListener("click", checkClick, true);
    doc.removeEventListener("keydown", checkKey, true);
    return trap;
  };
  trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, "onActivate");
      var onPostActivate = getOption(activateOptions, "onPostActivate");
      var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      if (onActivate) {
        onActivate();
      }
      var finishActivation = function finishActivation2() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners();
        if (onPostActivate) {
          onPostActivate();
        }
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer);
      state.delayInitialFocusTimer = void 0;
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = getOption(options, "onDeactivate");
      var onPostDeactivate = getOption(options, "onPostDeactivate");
      var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
      var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
      if (onDeactivate) {
        onDeactivate();
      }
      var finishDeactivation = function finishDeactivation2() {
        delay(function() {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          if (onPostDeactivate) {
            onPostDeactivate();
          }
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause() {
      if (state.paused || !state.active) {
        return this;
      }
      state.paused = true;
      removeListeners();
      return this;
    },
    unpause: function unpause() {
      if (!state.paused || !state.active) {
        return this;
      }
      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function(element) {
        return typeof element === "string" ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      return this;
    }
  };
  trap.updateContainerElements(elements);
  return trap;
};
const l = { base: "esri-identity-modal", open: "esri-identity-modal--open", closed: "esri-identity-modal--closed", title: "esri-identity-modal__title", dialog: "esri-identity-modal__dialog", content: "esri-identity-modal__content", closeButton: "esri-identity-modal__close-button", iconClose: "esri-icon-close" };
let p$1 = class extends M {
  constructor(t2, e2) {
    super(t2, e2), this.container = document.createElement("div"), this.content = null, this.open = false, this._focusTrap = null, this._close = () => {
      this.open = false;
    }, document.body.appendChild(this.container), this.addHandles(l$2(() => this.open, () => this._toggleFocusTrap()));
  }
  destroy() {
    this._destroyFocusTrap();
  }
  get title() {
    var _a;
    return (_a = this.messages) == null ? void 0 : _a.auth.signIn;
  }
  render() {
    const t2 = this.id, { open: e2, content: o, title: s2, messages: i2 } = this, r2 = e2 && !!o, n2 = { [l.open]: r2, [l.closed]: !r2 }, a2 = n$1("button", { class: l.closeButton, "aria-label": i2.close, title: i2.close, bind: this, onclick: this._close, type: "button" }, n$1("span", { "aria-hidden": "true", class: l.iconClose })), d2 = `${t2}_title`, p2 = `${t2}_content`, u2 = s2 ? n$1("h1", { id: d2, class: l.title }, s2) : null, m = r2 ? n$1("div", { bind: this, class: l.dialog, role: "dialog", "aria-labelledby": d2, "aria-describedby": p2, afterCreate: this._createFocusTrap }, a2, u2, this._renderContent(p2)) : null;
    return n$1("div", { tabIndex: -1, class: this.classes(l.base, n2) }, m);
  }
  _destroyFocusTrap() {
    var _a;
    (_a = this._focusTrap) == null ? void 0 : _a.deactivate({ onDeactivate: () => {
    } }), this._focusTrap = null;
  }
  _toggleFocusTrap() {
    const { _focusTrap: t2, open: e2 } = this;
    t2 && (e2 ? t2.activate() : t2.deactivate());
  }
  _createFocusTrap(t2) {
    this._destroyFocusTrap();
    const o = requestAnimationFrame(() => {
      this._focusTrap = createFocusTrap(t2, { initialFocus: "input", onDeactivate: this._close }), this._toggleFocusTrap();
    });
    this.addHandles(n$2(() => cancelAnimationFrame(o)));
  }
  _renderContent(t2) {
    const e2 = this.content;
    return typeof e2 == "string" ? n$1("div", { class: l.content, id: t2, innerHTML: e2 }) : e$3(e2) ? n$1("div", { class: l.content, id: t2 }, e2.render()) : e2 instanceof HTMLElement ? n$1("div", { class: l.content, id: t2, bind: e2, afterCreate: this._attachToNode }) : null;
  }
  _attachToNode(t2) {
    const e2 = this;
    t2.appendChild(e2);
  }
};
e$1([y({ readOnly: true })], p$1.prototype, "container", void 0), e$1([y()], p$1.prototype, "content", void 0), e$1([y()], p$1.prototype, "open", void 0), e$1([y(), e$2("esri/t9n/common")], p$1.prototype, "messages", void 0), e$1([y()], p$1.prototype, "title", null), p$1 = e$1([n("esri.identity.IdentityModal")], p$1);
const u = p$1;
const t = "esriJSAPIOAuth";
class e {
  constructor(t2, e2) {
    this.oAuthInfo = null, this.storage = null, this.appId = null, this.codeVerifier = null, this.expires = null, this.refreshToken = null, this.ssl = null, this.stateUID = null, this.token = null, this.userId = null, this.oAuthInfo = t2, this.storage = e2, this._init();
  }
  isValid() {
    let t2 = false;
    if (this.oAuthInfo && this.userId && (this.refreshToken || this.token)) {
      if (this.expires == null && this.refreshToken)
        t2 = true;
      else if (this.expires) {
        const e2 = Date.now();
        if (this.expires > e2) {
          (this.expires - e2) / 1e3 > 60 * this.oAuthInfo.minTimeUntilExpiration && (t2 = true);
        }
      }
    }
    return t2;
  }
  save() {
    if (!this.storage)
      return false;
    const e2 = this._load(), s2 = this.oAuthInfo;
    if (s2 && s2.authNamespace && s2.portalUrl) {
      let r2 = e2[s2.authNamespace];
      r2 || (r2 = e2[s2.authNamespace] = {}), this.appId || (this.appId = s2.appId), r2[s2.portalUrl] = { appId: this.appId, codeVerifier: this.codeVerifier, expires: this.expires, refreshToken: this.refreshToken, ssl: this.ssl, stateUID: this.stateUID, token: this.token, userId: this.userId };
      try {
        this.storage.setItem(t, JSON.stringify(e2));
      } catch (i2) {
        return console.warn(i2), false;
      }
      return true;
    }
    return false;
  }
  destroy() {
    const e2 = this._load(), s2 = this.oAuthInfo;
    if (s2 && s2.appId && s2.portalUrl && (this.expires == null || this.expires > Date.now()) && (this.refreshToken || this.token)) {
      const t2 = s2.portalUrl.replace(/^http:/i, "https:") + "/sharing/rest/oauth2/revokeToken", e3 = new FormData();
      if (e3.append("f", "json"), e3.append("auth_token", this.refreshToken || this.token), e3.append("client_id", s2.appId), e3.append("token_type_hint", this.refreshToken ? "refresh_token" : "access_token"), typeof navigator.sendBeacon == "function")
        navigator.sendBeacon(t2, e3);
      else {
        const s3 = new XMLHttpRequest();
        s3.open("POST", t2), s3.send(e3);
      }
    }
    if (s2 && s2.authNamespace && s2.portalUrl && this.storage) {
      const r2 = e2[s2.authNamespace];
      if (r2) {
        delete r2[s2.portalUrl];
        try {
          this.storage.setItem(t, JSON.stringify(e2));
        } catch (i2) {
          console.log(i2);
        }
      }
    }
    s2 && (s2._oAuthCred = null, this.oAuthInfo = null);
  }
  _init() {
    const t2 = this._load(), e2 = this.oAuthInfo;
    if (e2 && e2.authNamespace && e2.portalUrl) {
      let s2 = t2[e2.authNamespace];
      s2 && (s2 = s2[e2.portalUrl], s2 && (this.appId = s2.appId, this.codeVerifier = s2.codeVerifier, this.expires = s2.expires, this.refreshToken = s2.refreshToken, this.ssl = s2.ssl, this.stateUID = s2.stateUID, this.token = s2.token, this.userId = s2.userId));
    }
  }
  _load() {
    let e2 = {};
    if (this.storage) {
      const i2 = this.storage.getItem(t);
      if (i2)
        try {
          e2 = JSON.parse(i2);
        } catch (s2) {
          console.warn(s2);
        }
    }
    return e2;
  }
}
e.prototype.declaredClass = "esri.identity.OAuthCredential";
var p;
let s$2 = p = class extends l$3 {
  constructor(o) {
    super(o), this._oAuthCred = null, this.appId = null, this.authNamespace = "/", this.expiration = 20160, this.flowType = "auto", this.forceLogin = false, this.forceUserId = false, this.locale = null, this.minTimeUntilExpiration = 30, this.popup = false, this.popupCallbackUrl = "oauth-callback.html", this.popupWindowFeatures = "height=490,width=800,resizable,scrollbars,status", this.portalUrl = "https://www.arcgis.com", this.preserveUrlHash = false, this.userId = null;
  }
  clone() {
    return p.fromJSON(this.toJSON());
  }
};
e$1([y({ json: { write: true } })], s$2.prototype, "appId", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "authNamespace", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "expiration", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "flowType", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "forceLogin", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "forceUserId", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "locale", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "minTimeUntilExpiration", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "popup", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "popupCallbackUrl", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "popupWindowFeatures", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "portalUrl", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "preserveUrlHash", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "userId", void 0), s$2 = p = e$1([n("esri.identity.OAuthInfo")], s$2);
const i$1 = s$2;
let s$1 = class extends l$3 {
  constructor(o) {
    super(o), this.adminTokenServiceUrl = null, this.currentVersion = null, this.hasPortal = null, this.hasServer = null, this.owningSystemUrl = null, this.owningTenant = null, this.server = null, this.shortLivedTokenValidity = null, this.tokenServiceUrl = null, this.webTierAuth = null;
  }
};
e$1([y({ json: { write: true } })], s$1.prototype, "adminTokenServiceUrl", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "currentVersion", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "hasPortal", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "hasServer", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "owningSystemUrl", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "owningTenant", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "server", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "shortLivedTokenValidity", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "tokenServiceUrl", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "webTierAuth", void 0), s$1 = e$1([n("esri.identity.ServerInfo")], s$1);
const i = s$1;
const C = {}, b = (e2) => {
  const t2 = new y$1(e2.owningSystemUrl).host, r2 = new y$1(e2.server).host, s2 = /.+\.arcgis\.com$/i;
  return s2.test(t2) && s2.test(r2);
}, D = (e2, t2) => !!(b(e2) && t2 && t2.some((t3) => t3.test(e2.server)));
let q = null, j = null;
try {
  q = window.localStorage, j = window.sessionStorage;
} catch {
}
class E extends n$3 {
  constructor() {
    super(), this._portalConfig = globalThis.esriGeowConfig, this.serverInfos = [], this.oAuthInfos = [], this.credentials = [], this._soReqs = [], this._xoReqs = [], this._portals = [], this._defaultOAuthInfo = null, this._defaultTokenValidity = 60, this.dialog = null, this.formConstructor = d, this.tokenValidity = null, this.normalizeWebTierAuth = false, this._appOrigin = window.origin !== "null" ? window.origin : window.location.origin, this._appUrlObj = j$1(window.location.href), this._busy = null, this._rejectOnPersistedPageShow = false, this._oAuthLocationParams = null, this._gwTokenUrl = "/sharing/rest/generateToken", this._agsRest = "/rest/services", this._agsPortal = /\/sharing(\/|$)/i, this._agsAdmin = /(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i, this._adminSvcs = /\/rest\/admin\/services(\/|$)/i, this._gwDomains = [{ regex: /^https?:\/\/www\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i, customBaseUrl: "mapsdev.arcgis.com", tokenServiceUrl: "https://dev.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, customBaseUrl: "mapsdevext.arcgis.com", tokenServiceUrl: "https://devext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i, customBaseUrl: "mapsqa.arcgis.com", tokenServiceUrl: "https://qaext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }], this._legacyFed = [], this._regexSDirUrl = /http.+\/rest\/services\/?/gi, this._regexServerType = /(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi, this._gwUser = /http.+\/users\/([^\/]+)\/?.*/i, this._gwItem = /http.+\/items\/([^\/]+)\/?.*/i, this._gwGroup = /http.+\/groups\/([^\/]+)\/?.*/i, this._rePortalTokenSvc = /\/sharing(\/rest)?\/generatetoken/i, this._createDefaultOAuthInfo = true, this._hasTestedIfAppIsOnPortal = false, this._getOAuthLocationParams(), window.addEventListener("pageshow", (e2) => {
      this._pageShowHandler(e2);
    });
  }
  registerServers(e2) {
    const t2 = this.serverInfos;
    t2 ? (e2 = e2.filter((e3) => !this.findServerInfo(e3.server)), this.serverInfos = t2.concat(e2)) : this.serverInfos = e2, e2.forEach((e3) => {
      e3.owningSystemUrl && this._portals.push(e3.owningSystemUrl), e3.hasPortal && this._portals.push(e3.server);
    });
  }
  registerOAuthInfos(e2) {
    const t2 = this.oAuthInfos;
    if (t2) {
      for (const r2 of e2) {
        const e3 = this.findOAuthInfo(r2.portalUrl);
        e3 && t2.splice(t2.indexOf(e3), 1);
      }
      this.oAuthInfos = t2.concat(e2);
    } else
      this.oAuthInfos = e2;
  }
  registerToken(e2) {
    e2 = __spreadValues({}, e2);
    const t2 = this._sanitizeUrl(e2.server), r2 = this._isServerRsrc(t2);
    let s2, i$12 = this.findServerInfo(t2), o = true;
    i$12 || (i$12 = new i(), i$12.server = this._getServerInstanceRoot(t2), r2 ? i$12.hasServer = true : (i$12.tokenServiceUrl = this._getTokenSvcUrl(t2), i$12.hasPortal = true), this.registerServers([i$12])), s2 = this._findCredential(t2), s2 ? (delete e2.server, Object.assign(s2, e2), o = false) : (s2 = new L({ userId: e2.userId, server: i$12.server, token: e2.token, expires: e2.expires, ssl: e2.ssl, scope: r2 ? "server" : "portal" }), s2.resources = [t2], this.credentials.push(s2)), s2.emitTokenChange(false), o || s2.refreshServerTokens();
  }
  toJSON() {
    return p$3({ serverInfos: this.serverInfos.map((e2) => e2.toJSON()), oAuthInfos: this.oAuthInfos.map((e2) => e2.toJSON()), credentials: this.credentials.map((e2) => e2.toJSON()) });
  }
  initialize(e2) {
    if (!e2)
      return;
    typeof e2 == "string" && (e2 = JSON.parse(e2));
    const t2 = e2.serverInfos, r2 = e2.oAuthInfos, s2 = e2.credentials;
    if (t2) {
      const e3 = [];
      t2.forEach((t3) => {
        t3.server && t3.tokenServiceUrl && e3.push(t3.declaredClass ? t3 : new i(t3));
      }), e3.length && this.registerServers(e3);
    }
    if (r2) {
      const e3 = [];
      r2.forEach((t3) => {
        t3.appId && e3.push(t3.declaredClass ? t3 : new i$1(t3));
      }), e3.length && this.registerOAuthInfos(e3);
    }
    s2 && s2.forEach((e3) => {
      e3.server && e3.token && e3.expires && e3.expires > Date.now() && ((e3 = e3.declaredClass ? e3 : new L(e3)).emitTokenChange(), this.credentials.push(e3));
    });
  }
  findServerInfo(e2) {
    let t2;
    e2 = this._sanitizeUrl(e2);
    for (const r2 of this.serverInfos)
      if (this._hasSameServerInstance(r2.server, e2)) {
        t2 = r2;
        break;
      }
    return t2;
  }
  findOAuthInfo(e2) {
    let t2;
    e2 = this._sanitizeUrl(e2);
    for (const r2 of this.oAuthInfos)
      if (this._hasSameServerInstance(r2.portalUrl, e2)) {
        t2 = r2;
        break;
      }
    return t2;
  }
  findCredential(e2, t2) {
    if (!e2)
      return;
    let r2;
    e2 = this._sanitizeUrl(e2);
    const s2 = this._isServerRsrc(e2) ? "server" : "portal";
    if (t2) {
      for (const i2 of this.credentials)
        if (this._hasSameServerInstance(i2.server, e2) && t2 === i2.userId && i2.scope === s2) {
          r2 = i2;
          break;
        }
    } else
      for (const i2 of this.credentials)
        if (this._hasSameServerInstance(i2.server, e2) && this._getIdenticalSvcIdx(e2, i2) !== -1 && i2.scope === s2) {
          r2 = i2;
          break;
        }
    return r2;
  }
  getCredential(e2, t2) {
    let r2, s2, o = true;
    t2 && (r2 = !!t2.token, s2 = t2.error, o = t2.prompt !== false), t2 = __spreadValues({}, t2), e2 = this._sanitizeUrl(e2);
    const n2 = new AbortController(), a2 = D$1();
    if (t2.signal && v$1(t2.signal, () => {
      n2.abort();
    }), v$1(n2, () => {
      a2.reject(new s$5("identity-manager:user-aborted", "ABORTED"));
    }), p$4(n2))
      return a2.promise;
    t2.signal = n2.signal;
    const h = this._isAdminResource(e2), u2 = r2 ? this.findCredential(e2) : null;
    let p2;
    if (u2 && s2 && s2.details && s2.details.httpStatus === 498)
      u2.destroy();
    else if (u2)
      return p2 = new s$5("identity-manager:not-authorized", "You are currently signed in as: '" + u2.userId + "'. You do not have access to this resource: " + e2, { error: s2 }), a2.reject(p2), a2.promise;
    const f = this._findCredential(e2, t2);
    if (f)
      return a2.resolve(f), a2.promise;
    let g = this.findServerInfo(e2);
    if (g)
      !g.hasServer && this._isServerRsrc(e2) && (g._restInfoPms = this._getTokenSvcUrl(e2), g.hasServer = true);
    else {
      const t3 = this._getTokenSvcUrl(e2);
      if (!t3)
        return p2 = new s$5("identity-manager:unknown-resource", "Unknown resource - could not find token service endpoint."), a2.reject(p2), a2.promise;
      g = new i(), g.server = this._getServerInstanceRoot(e2), typeof t3 == "string" ? (g.tokenServiceUrl = t3, g.hasPortal = true) : (g._restInfoPms = t3, g.hasServer = true), this.registerServers([g]);
    }
    return g.hasPortal && g._selfReq === void 0 && (o || z(g.tokenServiceUrl, this._appOrigin) || this._gwDomains.some((e3) => e3.tokenServiceUrl === g.tokenServiceUrl)) && (g._selfReq = { owningTenant: t2 && t2.owningTenant, selfDfd: this._getPortalSelf(g.tokenServiceUrl.replace(this._rePortalTokenSvc, "/sharing/rest/portals/self"), e2) }), this._enqueue(e2, g, t2, a2, h);
  }
  getResourceName(e2) {
    return this._isRESTService(e2) ? e2.replace(this._regexSDirUrl, "").replace(this._regexServerType, "") || "" : this._gwUser.test(e2) && e2.replace(this._gwUser, "$1") || this._gwItem.test(e2) && e2.replace(this._gwItem, "$1") || this._gwGroup.test(e2) && e2.replace(this._gwGroup, "$1") || "";
  }
  generateToken(e2, t2, r2) {
    const o = this._rePortalTokenSvc.test(e2.tokenServiceUrl), n2 = new y$1(this._appOrigin), a2 = e2.shortLivedTokenValidity;
    let h, l2, c, d2, u2, p2, g, m;
    t2 && (m = this.tokenValidity || a2 || this._defaultTokenValidity, m > a2 && a2 > 0 && (m = a2)), r2 && (h = r2.isAdmin, l2 = r2.serverUrl, c = r2.token, p2 = r2.signal, g = r2.ssl, e2.customParameters = r2.customParameters), h ? d2 = e2.adminTokenServiceUrl : (d2 = e2.tokenServiceUrl, u2 = new y$1(d2.toLowerCase()), e2.webTierAuth && (r2 == null ? void 0 : r2.serverUrl) && !g && n2.scheme === "http" && (z(n2.uri, d2, true) || u2.scheme === "https" && n2.host === u2.host && n2.port === "7080" && u2.port === "7443") && (d2 = d2.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")));
    const v2 = __spreadValues({ query: __spreadValues({ request: "getToken", username: t2 == null ? void 0 : t2.username, password: t2 == null ? void 0 : t2.password, serverUrl: l2, token: c, expiration: m, referer: h || o ? this._appOrigin : null, client: h ? "referer" : null, f: "json" }, e2.customParameters), method: "post", authMode: "anonymous", useProxy: this._useProxy(e2, r2), signal: p2 }, r2 == null ? void 0 : r2.ioArgs);
    o || (v2.withCredentials = false);
    return U(d2, v2).then((r3) => {
      const s2 = r3.data;
      if (!s2 || !s2.token)
        return new s$5("identity-manager:authentication-failed", "Unable to generate token");
      const o2 = e2.server;
      return C[o2] || (C[o2] = {}), t2 && (C[o2][t2.username] = t2.password), s2.validity = m, s2;
    });
  }
  isBusy() {
    return !!this._busy;
  }
  checkSignInStatus(e2) {
    return this.checkAppAccess(e2, "").then((e3) => e3.credential);
  }
  checkAppAccess(e2, t2, r2) {
    let o = false;
    return this.getCredential(e2, { prompt: false }).then((n2) => {
      let a2;
      const h = { f: "json" };
      if (n2.scope === "portal")
        if (t2 && (this._doPortalSignIn(e2) || r2 && r2.force))
          a2 = n2.server + "/sharing/rest/oauth2/validateAppAccess", h.client_id = t2;
        else {
          if (!n2.token)
            return { credential: n2 };
          a2 = n2.server + "/sharing/rest";
        }
      else {
        if (!n2.token)
          return { credential: n2 };
        a2 = n2.server + "/rest/services";
      }
      return n2.token && (h.token = n2.token), U(a2, { query: h, authMode: "anonymous" }).then((e3) => {
        if (e3.data.valid === false)
          throw new s$5("identity-manager:not-authorized", `You are currently signed in as: '${n2.userId}'.`, e3.data);
        return o = !!e3.data.viewOnlyUserTypeApp, { credential: n2 };
      }).catch((e3) => {
        if (e3.name === "identity-manager:not-authorized")
          throw e3;
        const t3 = e3.details && e3.details.httpStatus;
        if (t3 === 498)
          throw n2.destroy(), new s$5("identity-manager:not-authenticated", "User is not signed in.");
        if (t3 === 400)
          throw new s$5("identity-manager:invalid-request");
        return { credential: n2 };
      });
    }).then((e3) => ({ credential: e3.credential, viewOnly: o }));
  }
  setOAuthResponseHash(e2) {
    e2 && (e2.charAt(0) === "#" && (e2 = e2.substring(1)), this._processOAuthPopupParams(L$1(e2)));
  }
  setOAuthRedirectionHandler(e2) {
    this._oAuthRedirectFunc = e2;
  }
  setProtocolErrorHandler(e2) {
    this._protocolFunc = e2;
  }
  signIn(e2, t2, r2 = {}) {
    const s2 = D$1(), o = () => {
      var _a;
      h == null ? void 0 : h.remove(), d2 == null ? void 0 : d2.remove(), p2 == null ? void 0 : p2.remove(), a2 == null ? void 0 : a2.destroy(), (_a = this.dialog) == null ? void 0 : _a.destroy(), this.dialog = a2 = h = d2 = p2 = null;
    }, n2 = () => {
      o(), this._oAuthDfd = null, s2.reject(new s$5("identity-manager:user-aborted", "ABORTED"));
    };
    r2.signal && v$1(r2.signal, () => {
      n2();
    });
    let a2 = new this.formConstructor();
    a2.resource = this.getResourceName(e2), a2.server = t2.server, this.dialog = new u(), this.dialog.content = a2, this.dialog.open = true, this.emit("dialog-create");
    let h = a2.on("cancel", n2), d2 = l$2(() => this.dialog.open, n2), p2 = a2.on("submit", (e3) => {
      this.generateToken(t2, e3, { isAdmin: r2.isAdmin, signal: r2.signal }).then((i2) => {
        o();
        const n3 = new L({ userId: e3.username, server: t2.server, token: i2.token, expires: i2.expires != null ? Number(i2.expires) : null, ssl: !!i2.ssl, isAdmin: r2.isAdmin, validity: i2.validity });
        s2.resolve(n3);
      }).catch((e4) => {
        a2.error = e4, a2.signingIn = false;
      });
    });
    return s2.promise;
  }
  oAuthSignIn(e2, t2, r2, s2) {
    this._oAuthDfd = D$1();
    const o = this._oAuthDfd;
    let n2;
    (s2 == null ? void 0 : s2.signal) && v$1(s2.signal, () => {
      const e3 = this._oAuthDfd && this._oAuthDfd.oAuthWin_;
      e3 && !e3.closed ? e3.close() : this.dialog && f();
    }), o.resUrl_ = e2, o.sinfo_ = t2, o.oinfo_ = r2;
    const a2 = r2._oAuthCred;
    if (a2.storage && (r2.flowType === "authorization-code" || r2.flowType === "auto" && !r2.popup && t2.currentVersion >= 8.4)) {
      let e3 = crypto.getRandomValues(new Uint8Array(32));
      n2 = Z(e3), a2.codeVerifier = n2, e3 = crypto.getRandomValues(new Uint8Array(32)), a2.stateUID = Z(e3), a2.save() || (a2.codeVerifier = n2 = null);
    } else
      a2.codeVerifier = null;
    let h, d2, p2, _;
    this._getCodeChallenge(n2).then((i2) => {
      const o2 = !s2 || s2.oAuthPopupConfirmation !== false;
      r2.popup && o2 ? (h = new this.formConstructor(), h.oAuthPrompt = true, h.server = t2.server, this.dialog = new u(), this.dialog.content = h, this.dialog.open = true, this.emit("dialog-create"), d2 = h.on("cancel", f), p2 = l$2(() => this.dialog.open, f), _ = h.on("submit", () => {
        g(), this._doOAuthSignIn(e2, t2, r2, i2);
      })) : this._doOAuthSignIn(e2, t2, r2, i2);
    });
    const f = () => {
      g(), this._oAuthDfd = null, o.reject(new s$5("identity-manager:user-aborted", "ABORTED"));
    }, g = () => {
      var _a;
      d2 == null ? void 0 : d2.remove(), p2 == null ? void 0 : p2.remove(), _ == null ? void 0 : _.remove(), h == null ? void 0 : h.destroy(), (_a = this.dialog) == null ? void 0 : _a.destroy(), this.dialog = null;
    };
    return o.promise;
  }
  destroyCredentials() {
    if (this.credentials) {
      this.credentials.slice().forEach((e2) => {
        e2.destroy();
      });
    }
    this.emit("credentials-destroy");
  }
  enablePostMessageAuth(e2 = "https://www.arcgis.com/sharing/rest") {
    this._postMessageAuthHandle && this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = r$1(window, "message", (t2) => {
      var _a;
      if ((t2.origin === this._appOrigin || t2.origin.endsWith(".arcgis.com")) && ((_a = t2.data) == null ? void 0 : _a.type) === "arcgis:auth:requestCredential") {
        const r2 = t2.source;
        this.getCredential(e2).then((e3) => {
          r2.postMessage({ type: "arcgis:auth:credential", credential: { expires: e3.expires, server: e3.server, ssl: e3.ssl, token: e3.token, userId: e3.userId } }, t2.origin);
        }).catch((e3) => {
          r2.postMessage({ type: "arcgis:auth:error", error: { name: e3.name, message: e3.message } }, t2.origin);
        });
      }
    });
  }
  disablePostMessageAuth() {
    this._postMessageAuthHandle && (this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = null);
  }
  _getOAuthLocationParams() {
    var _a, _b;
    let e2 = window.location.hash;
    if (e2) {
      e2.charAt(0) === "#" && (e2 = e2.substring(1));
      const t3 = L$1(e2);
      let r2 = false;
      if (t3.access_token && t3.expires_in && t3.state && t3.hasOwnProperty("username"))
        try {
          t3.state = JSON.parse(t3.state), t3.state.portalUrl && (this._oAuthLocationParams = t3, r2 = true);
        } catch {
        }
      else if (t3.error && t3.error_description && (console.log("IdentityManager OAuth Error: ", t3.error, " - ", t3.error_description), t3.error === "access_denied" && (r2 = true, t3.state)))
        try {
          t3.state = JSON.parse(t3.state);
        } catch {
        }
      r2 && (window.location.hash = ((_a = t3.state) == null ? void 0 : _a.hash) || "");
    }
    let t2 = window.location.search;
    if (t2) {
      t2.charAt(0) === "?" && (t2 = t2.substring(1));
      const e3 = L$1(t2);
      let r2 = false;
      if (e3.code && e3.state)
        try {
          e3.state = JSON.parse(e3.state), e3.state.portalUrl && e3.state.uid && (this._oAuthLocationParams = e3, r2 = true);
        } catch {
        }
      else if (e3.error && e3.error_description && (console.log("IdentityManager OAuth Error: ", e3.error, " - ", e3.error_description), e3.error === "access_denied" && (r2 = true, e3.state)))
        try {
          e3.state = JSON.parse(e3.state);
        } catch {
        }
      if (r2) {
        const t3 = __spreadValues({}, e3);
        ["code", "error", "error_description", "message_code", "persist", "state"].forEach((e4) => {
          delete t3[e4];
        });
        const r3 = I(t3), s2 = window.location.pathname + (r3 ? `?${r3}` : "") + (((_b = e3.state) == null ? void 0 : _b.hash) || "");
        window.history.replaceState(window.history.state, "", s2);
      }
    }
  }
  _getOAuthToken(e2, t2, r2, i2, o) {
    return e2 = e2.replace(/^http:/i, "https:"), U(`${e2}/sharing/rest/oauth2/token`, { authMode: "anonymous", method: "post", query: i2 && o ? { grant_type: "authorization_code", code: t2, redirect_uri: i2, client_id: r2, code_verifier: o } : { grant_type: "refresh_token", refresh_token: t2, client_id: r2 } }).then((e3) => e3.data);
  }
  _getCodeChallenge(e2) {
    if (e2 && globalThis.isSecureContext) {
      const t2 = new TextEncoder().encode(e2);
      return crypto.subtle.digest("SHA-256", t2).then((e3) => Z(new Uint8Array(e3)));
    }
    return Promise.resolve(null);
  }
  _pageShowHandler(e2) {
    if (e2.persisted && this.isBusy() && this._rejectOnPersistedPageShow) {
      const e3 = new s$5("identity-manager:user-aborted", "ABORTED");
      this._errbackFunc(e3);
    }
  }
  _findCredential(e2, t2) {
    let r2, s2, i2, o, n2 = -1;
    const a2 = t2 && t2.token, h = t2 && t2.resource, l2 = this._isServerRsrc(e2) ? "server" : "portal", c = this.credentials.filter((t3) => this._hasSameServerInstance(t3.server, e2) && t3.scope === l2);
    if (e2 = h || e2, c.length)
      if (c.length === 1) {
        if (r2 = c[0], i2 = this.findServerInfo(r2.server), s2 = i2 && i2.owningSystemUrl, o = s2 ? this.findCredential(s2, r2.userId) : void 0, n2 = this._getIdenticalSvcIdx(e2, r2), !a2)
          return n2 === -1 && r2.resources.push(e2), this._addResource(e2, o), r2;
        n2 !== -1 && (r2.resources.splice(n2, 1), this._removeResource(e2, o));
      } else {
        let t3, r3;
        if (c.some((a3) => (r3 = this._getIdenticalSvcIdx(e2, a3), r3 !== -1 && (t3 = a3, i2 = this.findServerInfo(t3.server), s2 = i2 && i2.owningSystemUrl, o = s2 ? this.findCredential(s2, t3.userId) : void 0, n2 = r3, true))), a2)
          t3 && (t3.resources.splice(n2, 1), this._removeResource(e2, o));
        else if (t3)
          return this._addResource(e2, o), t3;
      }
  }
  _findOAuthInfo(e2) {
    let t2 = this.findOAuthInfo(e2);
    if (!t2) {
      for (const r2 of this.oAuthInfos)
        if (this._isIdProvider(r2.portalUrl, e2)) {
          t2 = r2;
          break;
        }
    }
    return t2;
  }
  _addResource(e2, t2) {
    t2 && this._getIdenticalSvcIdx(e2, t2) === -1 && t2.resources.push(e2);
  }
  _removeResource(e2, t2) {
    let r2 = -1;
    t2 && (r2 = this._getIdenticalSvcIdx(e2, t2), r2 > -1 && t2.resources.splice(r2, 1));
  }
  _useProxy(e2, t2) {
    return t2 && t2.isAdmin && !z(e2.adminTokenServiceUrl, this._appOrigin) || !this._isPortalDomain(e2.tokenServiceUrl) && String(e2.currentVersion) === "10.1" && !z(e2.tokenServiceUrl, this._appOrigin);
  }
  _getOrigin(e2) {
    const t2 = new y$1(e2);
    return t2.scheme + "://" + t2.host + (t2.port != null ? ":" + t2.port : "");
  }
  _getServerInstanceRoot(e2) {
    const t2 = e2.toLowerCase();
    let r2 = t2.indexOf(this._agsRest);
    return r2 === -1 && this._isAdminResource(e2) && (r2 = this._agsAdmin.test(e2) ? e2.replace(this._agsAdmin, "$1").length : e2.search(this._adminSvcs)), r2 !== -1 || t$1(t2) || (r2 = t2.indexOf("/sharing")), r2 === -1 && t2.substr(-1) === "/" && (r2 = t2.length - 1), r2 > -1 ? e2.substring(0, r2) : e2;
  }
  _hasSameServerInstance(e2, t2) {
    return e2.substr(-1) === "/" && (e2 = e2.slice(0, -1)), e2 = e2.toLowerCase(), t2 = this._getServerInstanceRoot(t2).toLowerCase(), e2 = this._normalizeAGOLorgDomain(e2), t2 = this._normalizeAGOLorgDomain(t2), (e2 = e2.substr(e2.indexOf(":"))) === (t2 = t2.substr(t2.indexOf(":")));
  }
  _normalizeAGOLorgDomain(e2) {
    const t2 = /^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i, r2 = /^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, s2 = /^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;
    return t2.test(e2) ? e2 = e2.replace(t2, "https://www.arcgis.com") : r2.test(e2) ? e2 = e2.replace(r2, "https://devext.arcgis.com") : s2.test(e2) && (e2 = e2.replace(s2, "https://qaext.arcgis.com")), e2;
  }
  _sanitizeUrl(e2) {
    const r2 = (s$6.request.proxyUrl || "").toLowerCase(), s2 = r2 ? e2.toLowerCase().indexOf(r2 + "?") : -1;
    return s2 !== -1 && (e2 = e2.substring(s2 + r2.length + 1)), e2 = F(e2), j$1(e2).path;
  }
  _isRESTService(e2) {
    return e2.includes(this._agsRest);
  }
  _isAdminResource(e2) {
    return this._agsAdmin.test(e2) || this._adminSvcs.test(e2);
  }
  _isServerRsrc(e2) {
    return this._isRESTService(e2) || this._isAdminResource(e2);
  }
  _isIdenticalService(e2, t2) {
    let r2 = false;
    if (this._isRESTService(e2) && this._isRESTService(t2)) {
      const s2 = this._getSuffix(e2).toLowerCase(), i2 = this._getSuffix(t2).toLowerCase();
      if (r2 = s2 === i2, !r2) {
        const e3 = /(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;
        r2 = s2.replace(e3, "$1") === i2.replace(e3, "$1");
      }
    } else
      this._isAdminResource(e2) && this._isAdminResource(t2) ? r2 = true : this._isServerRsrc(e2) || this._isServerRsrc(t2) || !this._isPortalDomain(e2) || (r2 = true);
    return r2;
  }
  _isPortalDomain(e2) {
    const r2 = new y$1(e2.toLowerCase()), s2 = this._portalConfig;
    let i2 = this._gwDomains.some((e3) => e3.regex.test(r2.uri));
    return !i2 && s2 && (i2 = this._hasSameServerInstance(this._getServerInstanceRoot(s2.restBaseUrl), r2.uri)), i2 || s$6.portalUrl && (i2 = z(r2, s$6.portalUrl, true)), i2 || (i2 = this._portals.some((e3) => this._hasSameServerInstance(e3, r2.uri))), i2 = i2 || this._agsPortal.test(r2.path), i2;
  }
  _isIdProvider(e2, t2) {
    let r2 = -1, s2 = -1;
    this._gwDomains.forEach((i3, o) => {
      r2 === -1 && i3.regex.test(e2) && (r2 = o), s2 === -1 && i3.regex.test(t2) && (s2 = o);
    });
    let i2 = false;
    if (r2 > -1 && s2 > -1 && (r2 === 0 || r2 === 4 ? s2 !== 0 && s2 !== 4 || (i2 = true) : r2 === 1 ? s2 !== 1 && s2 !== 2 || (i2 = true) : r2 === 2 ? s2 === 2 && (i2 = true) : r2 === 3 && s2 === 3 && (i2 = true)), !i2) {
      const r3 = this.findServerInfo(t2), s3 = r3 && r3.owningSystemUrl;
      s3 && b(r3) && this._isPortalDomain(s3) && this._isIdProvider(e2, s3) && (i2 = true);
    }
    return i2;
  }
  _getIdenticalSvcIdx(e2, t2) {
    let r2 = -1;
    for (let s2 = 0; s2 < t2.resources.length; s2++) {
      const i2 = t2.resources[s2];
      if (this._isIdenticalService(e2, i2)) {
        r2 = s2;
        break;
      }
    }
    return r2;
  }
  _getSuffix(e2) {
    return e2.replace(this._regexSDirUrl, "").replace(this._regexServerType, "$1");
  }
  _getTokenSvcUrl(e2) {
    let t2, r2, i2;
    if (this._isRESTService(e2) || this._isAdminResource(e2)) {
      const i3 = this._getServerInstanceRoot(e2);
      return t2 = i3 + "/admin/generateToken", r2 = U(e2 = i3 + "/rest/info", { query: { f: "json" } }).then((e3) => e3.data), { adminUrl: t2, promise: r2 };
    }
    if (this._isPortalDomain(e2)) {
      let t3 = "";
      if (this._gwDomains.some((r3) => (r3.regex.test(e2) && (t3 = r3.tokenServiceUrl), !!t3)), t3 || this._portals.some((r3) => (this._hasSameServerInstance(r3, e2) && (t3 = r3 + this._gwTokenUrl), !!t3)), t3 || (i2 = e2.toLowerCase().indexOf("/sharing"), i2 !== -1 && (t3 = e2.substring(0, i2) + this._gwTokenUrl)), t3 || (t3 = this._getOrigin(e2) + this._gwTokenUrl), t3) {
        const r3 = new y$1(e2).port;
        /^http:\/\//i.test(e2) && r3 === "7080" && (t3 = t3.replace(/:7080/i, ":7443")), t3 = t3.replace(/http:/i, "https:");
      }
      return t3;
    }
    if (e2.toLowerCase().includes("premium.arcgisonline.com"))
      return "https://premium.arcgisonline.com/server/tokens";
  }
  _processOAuthResponseParams(e2, t2, r2) {
    const s2 = t2._oAuthCred;
    if (e2.code) {
      const i3 = s2.codeVerifier;
      return s2.codeVerifier = null, s2.stateUID = null, s2.save(), this._getOAuthToken(r2.server, e2.code, t2.appId, this._getRedirectURI(t2, true), i3).then((i4) => {
        const o = new L({ userId: i4.username, server: r2.server, token: i4.access_token, expires: Date.now() + 1e3 * i4.expires_in, ssl: i4.ssl, oAuthState: e2.state, _oAuthCred: s2 });
        return t2.userId = o.userId, s2.storage = i4.persist ? q : j, s2.refreshToken = i4.refresh_token, s2.token = null, s2.expires = i4.refresh_token_expires_in ? Date.now() + 1e3 * i4.refresh_token_expires_in : null, s2.userId = o.userId, s2.ssl = o.ssl, s2.save(), o;
      });
    }
    const i2 = new L({ userId: e2.username, server: r2.server, token: e2.access_token, expires: Date.now() + 1e3 * Number(e2.expires_in), ssl: e2.ssl === "true", oAuthState: e2.state, _oAuthCred: s2 });
    return t2.userId = i2.userId, s2.storage = e2.persist ? q : j, s2.refreshToken = null, s2.token = i2.token, s2.expires = i2.expires, s2.userId = i2.userId, s2.ssl = i2.ssl, s2.save(), Promise.resolve(i2);
  }
  _processOAuthPopupParams(e2) {
    var _a;
    const t2 = this._oAuthDfd;
    if (this._oAuthDfd = null, t2)
      if (clearInterval(this._oAuthIntervalId), (_a = this._oAuthOnPopupHandle) == null ? void 0 : _a.remove(), e2.error) {
        const r2 = e2.error === "access_denied", s2 = new s$5(r2 ? "identity-manager:user-aborted" : "identity-manager:authentication-failed", r2 ? "ABORTED" : "OAuth: " + e2.error + " - " + e2.error_description);
        t2.reject(s2);
      } else
        this._processOAuthResponseParams(e2, t2.oinfo_, t2.sinfo_).then((e3) => {
          t2.resolve(e3);
        }).catch((e3) => {
          t2.reject(e3);
        });
  }
  _setOAuthResponseQueryString(e2) {
    e2 && (e2.charAt(0) === "?" && (e2 = e2.substring(1)), this._processOAuthPopupParams(L$1(e2)));
  }
  _exchangeToken(e2, t2, r2) {
    return U(`${e2}/sharing/rest/oauth2/exchangeToken`, { authMode: "anonymous", method: "post", query: { f: "json", client_id: t2, token: r2 } }).then((e3) => e3.data.token);
  }
  _getPlatformSelf(e2, t2) {
    return e2 = e2.replace(/^http:/i, "https:"), U(`${e2}/sharing/rest/oauth2/platformSelf`, { authMode: "anonymous", headers: { "X-Esri-Auth-Client-Id": t2, "X-Esri-Auth-Redirect-Uri": window.location.href.replace(/#.*$/, "") }, method: "post", query: { f: "json", expiration: 30 }, withCredentials: true }).then((e3) => e3.data);
  }
  _getPortalSelf(e2, t2) {
    let r2;
    if (this._gwDomains.some((t3) => (t3.regex.test(e2) && (r2 = t3.customBaseUrl), !!r2)), r2)
      return Promise.resolve({ allSSL: true, currentVersion: "8.4", customBaseUrl: r2, portalMode: "multitenant", supportsOAuth: true });
    this._appOrigin.startsWith("https:") ? e2 = e2.replace(/^http:/i, "https:").replace(/:7080/i, ":7443") : /^http:/i.test(t2) && (e2 = e2.replace(/^https:/i, "http:").replace(/:7443/i, ":7080"));
    return U(e2, { query: { f: "json" }, authMode: "anonymous", withCredentials: true }).then((e3) => e3.data);
  }
  _doPortalSignIn(e2) {
    const t2 = this._portalConfig, r2 = window.location.href, s2 = this.findServerInfo(e2);
    return !(!t2 && !this._isPortalDomain(r2) || !(s2 ? s2.hasPortal || s2.owningSystemUrl && this._isPortalDomain(s2.owningSystemUrl) : this._isPortalDomain(e2)) || !(this._isIdProvider(r2, e2) || t2 && (this._hasSameServerInstance(this._getServerInstanceRoot(t2.restBaseUrl), e2) || this._isIdProvider(t2.restBaseUrl, e2)) || z(r2, e2, true)));
  }
  _checkProtocol(e2, t2, r2, s2) {
    let o = true;
    const n2 = s2 ? t2.adminTokenServiceUrl : t2.tokenServiceUrl;
    if (n2.trim().toLowerCase().startsWith("https:") && !this._appOrigin.startsWith("https:") && J(n2) && (o = !!this._protocolFunc && !!this._protocolFunc({ resourceUrl: e2, serverInfo: t2 }), !o)) {
      r2(new s$5("identity-manager:aborted", "Aborted the Sign-In process to avoid sending password over insecure connection."));
    }
    return o;
  }
  _enqueue(e2, t2, r2, s2, i2, o) {
    return s2 || (s2 = D$1()), s2.resUrl_ = e2, s2.sinfo_ = t2, s2.options_ = r2, s2.admin_ = i2, s2.refresh_ = o, this._busy ? this._hasSameServerInstance(this._getServerInstanceRoot(e2), this._busy.resUrl_) ? (this._oAuthDfd && this._oAuthDfd.oAuthWin_ && this._oAuthDfd.oAuthWin_.focus(), this._soReqs.push(s2)) : this._xoReqs.push(s2) : this._doSignIn(s2), s2.promise;
  }
  _doSignIn(e$12) {
    this._busy = e$12, this._rejectOnPersistedPageShow = false;
    const t2 = (t3) => {
      const r3 = e$12.options_ && e$12.options_.resource, s3 = e$12.resUrl_, i2 = e$12.refresh_;
      let o2 = false;
      this.credentials.includes(t3) || (i2 && this.credentials.includes(i2) ? (i2.userId = t3.userId, i2.token = t3.token, i2.expires = t3.expires, i2.validity = t3.validity, i2.ssl = t3.ssl, i2.creationTime = t3.creationTime, o2 = true, t3 = i2) : this.credentials.push(t3)), t3.resources || (t3.resources = []), t3.resources.includes(r3 || s3) || t3.resources.push(r3 || s3), t3.scope = this._isServerRsrc(s3) ? "server" : "portal", t3.emitTokenChange();
      const n2 = this._soReqs, a3 = {};
      this._soReqs = [], n2.forEach((e2) => {
        if (!this._isIdenticalService(s3, e2.resUrl_)) {
          const r4 = this._getSuffix(e2.resUrl_);
          a3[r4] || (a3[r4] = true, t3.resources.push(e2.resUrl_));
        }
      }), e$12.resolve(t3), n2.forEach((e2) => {
        this._hasSameServerInstance(this._getServerInstanceRoot(s3), e2.resUrl_) ? e2.resolve(t3) : this._soReqs.push(e2);
      }), this._busy = e$12.resUrl_ = e$12.sinfo_ = e$12.refresh_ = null, o2 || this.emit("credential-create", { credential: t3 }), this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, r2 = (t3) => {
      e$12.reject(t3), this._busy = e$12.resUrl_ = e$12.sinfo_ = e$12.refresh_ = null, this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, s2 = (o2, a3, h, l3) => {
      var _a, _b, _c;
      const d3 = e$12.sinfo_, u2 = !e$12.options_ || e$12.options_.prompt !== false, p2 = d3.hasPortal && this._findOAuthInfo(e$12.resUrl_);
      let f, g;
      if (o2)
        t2(new L({ userId: o2, server: d3.server, token: h || null, expires: l3 != null ? Number(l3) : null, ssl: !!a3 }));
      else if (window !== window.parent && ((_a = this._appUrlObj.query) == null ? void 0 : _a["arcgis-auth-origin"]) && ((_b = this._appUrlObj.query) == null ? void 0 : _b["arcgis-auth-portal"]) && this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]), e$12.resUrl_)) {
        window.parent.postMessage({ type: "arcgis:auth:requestCredential" }, this._appUrlObj.query["arcgis-auth-origin"]);
        const s3 = r$1(window, "message", (e2) => {
          e2.source === window.parent && e2.data && (e2.data.type === "arcgis:auth:credential" ? (s3.remove(), e2.data.credential.expires < Date.now() ? r2(new s$5("identity-manager:credential-request-failed", "Parent application's token has expired.")) : t2(new L(e2.data.credential))) : e2.data.type === "arcgis:auth:error" && (s3.remove(), e2.data.error.name === "tokenExpiredError" ? r2(new s$5("identity-manager:credential-request-failed", "Parent application's token has expired.")) : r2(s$5.fromJSON(e2.data.error))));
        });
        v$1((_c = e$12.options_) == null ? void 0 : _c.signal, () => {
          s3.remove();
        });
      } else if (p2) {
        let o3 = p2._oAuthCred;
        if (!o3) {
          const e$13 = new e(p2, q), t3 = new e(p2, j);
          e$13.isValid() && t3.isValid() ? e$13.expires > t3.expires ? (o3 = e$13, t3.destroy()) : (o3 = t3, e$13.destroy()) : o3 = e$13.isValid() ? e$13 : t3, p2._oAuthCred = o3;
        }
        if (o3.isValid()) {
          f = new L({ userId: o3.userId, server: d3.server, token: o3.token, expires: o3.expires, ssl: o3.ssl, _oAuthCred: o3 });
          const r3 = p2.appId !== o3.appId && this._doPortalSignIn(e$12.resUrl_);
          r3 || o3.refreshToken ? (e$12._pendingDfd = o3.refreshToken ? this._getOAuthToken(d3.server, o3.refreshToken, o3.appId).then((e2) => (f.expires = Date.now() + 1e3 * e2.expires_in, f.token = e2.access_token, f)) : Promise.resolve(f), e$12._pendingDfd.then((e2) => r3 ? this._exchangeToken(e2.server, p2.appId, e2.token).then((t3) => (e2.token = t3, e2)).catch(() => e2) : e2).then((e2) => {
            t2(e2);
          }).catch(() => {
            o3 == null ? void 0 : o3.destroy(), s2();
          })) : t2(f);
        } else if (this._oAuthLocationParams && this._hasSameServerInstance(p2.portalUrl, this._oAuthLocationParams.state.portalUrl) && (this._oAuthLocationParams.access_token || this._oAuthLocationParams.code && this._oAuthLocationParams.state.uid === o3.stateUID && o3.codeVerifier)) {
          const s3 = this._oAuthLocationParams;
          this._oAuthLocationParams = null, e$12._pendingDfd = this._processOAuthResponseParams(s3, p2, d3).then((e2) => {
            t2(e2);
          }).catch(r2);
        } else {
          const s3 = () => {
            u2 ? e$12._pendingDfd = this.oAuthSignIn(e$12.resUrl_, d3, p2, e$12.options_).then(t2, r2) : (g = new s$5("identity-manager:not-authenticated", "User is not signed in."), r2(g));
          };
          this._doPortalSignIn(e$12.resUrl_) ? e$12._pendingDfd = this._getPlatformSelf(d3.server, p2.appId).then((e2) => {
            z(e2.portalUrl, this._appOrigin, true) ? (f = new L({ userId: e2.username, server: d3.server, expires: Date.now() + 1e3 * e2.expires_in, token: e2.token }), t2(f)) : s3();
          }).catch(s3) : s3();
        }
      } else if (u2) {
        if (this._checkProtocol(e$12.resUrl_, d3, r2, e$12.admin_)) {
          let s3 = e$12.options_;
          e$12.admin_ && (s3 = s3 || {}, s3.isAdmin = true), e$12._pendingDfd = this.signIn(e$12.resUrl_, d3, s3).then(t2, r2);
        }
      } else
        g = new s$5("identity-manager:not-authenticated", "User is not signed in."), r2(g);
    }, o = () => {
      const s3 = e$12.sinfo_, i2 = s3.owningSystemUrl, o2 = e$12.options_;
      let n2, a3, h, l3;
      if (o2 && (n2 = o2.token, a3 = o2.error, h = o2.prompt), l3 = this._findCredential(i2, { token: n2, resource: e$12.resUrl_ }), !l3) {
        for (const e2 of this.credentials)
          if (this._isIdProvider(i2, e2.server)) {
            l3 = e2;
            break;
          }
      }
      if (l3) {
        const i3 = this.findCredential(e$12.resUrl_, l3.userId);
        if (i3)
          t2(i3);
        else if (D(s3, this._legacyFed)) {
          const e2 = l3.toJSON();
          e2.server = s3.server, e2.resources = null, t2(new L(e2));
        } else {
          (e$12._pendingDfd = this.generateToken(this.findServerInfo(l3.server), null, { serverUrl: e$12.resUrl_, token: l3.token, signal: e$12.options_.signal, ssl: l3.ssl })).then((r3) => {
            t2(new L({ userId: l3 == null ? void 0 : l3.userId, server: s3.server, token: r3.token, expires: r3.expires != null ? Number(r3.expires) : null, ssl: !!r3.ssl, isAdmin: e$12.admin_, validity: r3.validity }));
          }, r2);
        }
      } else {
        this._busy = null, n2 && (e$12.options_.token = null);
        (e$12._pendingDfd = this.getCredential(i2.replace(/\/?$/, "/sharing"), { resource: e$12.resUrl_, owningTenant: s3.owningTenant, signal: e$12.options_.signal, token: n2, error: a3, prompt: h })).then(() => {
          this._enqueue(e$12.resUrl_, e$12.sinfo_, e$12.options_, e$12, e$12.admin_);
        }, (t3) => {
          e$12.resUrl_ = e$12.sinfo_ = e$12.refresh_ = null, e$12.reject(t3);
        });
      }
    };
    this._errbackFunc = r2;
    const a2 = e$12.sinfo_.owningSystemUrl, l2 = this._isServerRsrc(e$12.resUrl_), d2 = e$12.sinfo_._restInfoPms;
    d2 ? d2.promise.then((t3) => {
      var _a, _b;
      const r3 = e$12.sinfo_;
      if (r3._restInfoPms) {
        r3.adminTokenServiceUrl = r3._restInfoPms.adminUrl, r3._restInfoPms = null, r3.tokenServiceUrl = (_a = t$2("authInfo.tokenServicesUrl", t3) || t$2("authInfo.tokenServiceUrl", t3) || t$2("tokenServiceUrl", t3)) != null ? _a : null, r3.shortLivedTokenValidity = (_b = t$2("authInfo.shortLivedTokenValidity", t3)) != null ? _b : null, r3.currentVersion = t3.currentVersion, r3.owningTenant = t3.owningTenant;
        const e2 = r3.owningSystemUrl = t3.owningSystemUrl;
        e2 && this._portals.push(e2);
      }
      l2 && r3.owningSystemUrl ? o() : s2();
    }, () => {
      e$12.sinfo_._restInfoPms = null;
      const t3 = new s$5("identity-manager:server-identification-failed", "Unknown resource - could not find token service endpoint.");
      r2(t3);
    }) : l2 && a2 ? o() : e$12.sinfo_._selfReq ? e$12.sinfo_._selfReq.selfDfd.then((t3) => {
      const r3 = {};
      let s3, i2, o2, n2;
      return t3 && (s3 = t3.user && t3.user.username, r3.username = s3, r3.allSSL = t3.allSSL, i2 = t3.supportsOAuth, n2 = parseFloat(t3.currentVersion), t3.portalMode === "multitenant" && (o2 = t3.customBaseUrl), e$12.sinfo_.currentVersion = n2), e$12.sinfo_.webTierAuth = !!s3, s3 && this.normalizeWebTierAuth ? this.generateToken(e$12.sinfo_, null, { ssl: r3.allSSL }).catch(() => null).then((e2) => (r3.portalToken = e2 && e2.token, r3.tokenExpiration = e2 && e2.expires, r3)) : !s3 && i2 && n2 >= 4.4 && !this._findOAuthInfo(e$12.resUrl_) ? this._generateOAuthInfo({ portalUrl: e$12.sinfo_.server, customBaseUrl: o2, owningTenant: e$12.sinfo_._selfReq.owningTenant }).catch(() => null).then(() => r3) : r3;
    }).catch(() => null).then((t3) => {
      e$12.sinfo_._selfReq = null, t3 ? s2(t3.username, t3.allSSL, t3.portalToken, t3.tokenExpiration) : s2();
    }) : s2();
  }
  _generateOAuthInfo(e2) {
    let t2, r2 = null, i2 = e2.portalUrl;
    const o = e2.customBaseUrl, n2 = e2.owningTenant, a2 = !this._defaultOAuthInfo && this._createDefaultOAuthInfo && !this._hasTestedIfAppIsOnPortal;
    if (a2) {
      r2 = window.location.href;
      let e3 = r2.indexOf("?");
      e3 > -1 && (r2 = r2.slice(0, e3)), e3 = r2.search(/\/(apps|home)\//), r2 = e3 > -1 ? r2.slice(0, e3) : null;
    }
    return a2 && r2 ? (this._hasTestedIfAppIsOnPortal = true, t2 = U(r2 + "/sharing/rest", { query: { f: "json" } }).then(() => {
      this._defaultOAuthInfo = new i$1({ appId: "arcgisonline", popupCallbackUrl: r2 + "/home/oauth-callback.html" });
    })) : t2 = Promise.resolve(), t2.then(() => {
      if (this._defaultOAuthInfo)
        return i2 = i2.replace(/^http:/i, "https:"), U(i2 + "/sharing/rest/oauth2/validateRedirectUri", { query: { accountId: n2, client_id: this._defaultOAuthInfo.appId, redirect_uri: Q(this._defaultOAuthInfo.popupCallbackUrl), f: "json" } }).then((e3) => {
          if (e3.data.valid) {
            const t3 = this._defaultOAuthInfo.clone();
            e3.data.urlKey && o ? t3.portalUrl = "https://" + e3.data.urlKey.toLowerCase() + "." + o : t3.portalUrl = i2, t3.popup = window !== window.top || !(z(i2, this._appOrigin) || this._gwDomains.some((e4) => e4.regex.test(i2) && e4.regex.test(this._appOrigin))), this.oAuthInfos.push(t3);
          }
        });
    });
  }
  _doOAuthSignIn(e2, t2, r2, s2) {
    const o = r2._oAuthCred, a2 = { portalUrl: r2.portalUrl };
    !r2.popup && r2.preserveUrlHash && window.location.hash && (a2.hash = window.location.hash), o.stateUID && (a2.uid = o.stateUID);
    const h = { client_id: r2.appId, response_type: o.codeVerifier ? "code" : "token", state: JSON.stringify(a2), expiration: r2.expiration, locale: r2.locale, redirect_uri: this._getRedirectURI(r2, !!o.codeVerifier) };
    r2.forceLogin && (h.force_login = true), r2.forceUserId && r2.userId && (h.prepopulatedusername = r2.userId), !r2.popup && this._doPortalSignIn(e2) && (h.redirectToUserOrgUrl = true), o.codeVerifier && (h.code_challenge = s2 || o.codeVerifier, h.code_challenge_method = s2 ? "S256" : "plain");
    const l2 = r2.portalUrl.replace(/^http:/i, "https:") + "/sharing/oauth2/authorize", c = l2 + "?" + I(h);
    if (r2.popup) {
      const e3 = window.open(c, "esriJSAPIOAuth", r2.popupWindowFeatures);
      if (e3)
        e3.focus(), this._oAuthDfd.oAuthWin_ = e3, this._oAuthIntervalId = setInterval(() => {
          if (e3.closed) {
            clearInterval(this._oAuthIntervalId), this._oAuthOnPopupHandle.remove();
            const e4 = this._oAuthDfd;
            if (e4) {
              const t3 = new s$5("identity-manager:user-aborted", "ABORTED");
              e4.reject(t3);
            }
          }
        }, 500), this._oAuthOnPopupHandle = r$1(window, ["arcgis:auth:hash", "arcgis:auth:location:search"], (e4) => {
          e4.type === "arcgis:auth:hash" ? this.setOAuthResponseHash(e4.detail) : this._setOAuthResponseQueryString(e4.detail);
        });
      else {
        const e4 = new s$5("identity-manager:popup-blocked", "ABORTED");
        this._oAuthDfd.reject(e4);
      }
    } else
      this._rejectOnPersistedPageShow = true, this._oAuthRedirectFunc ? this._oAuthRedirectFunc({ authorizeParams: h, authorizeUrl: l2, resourceUrl: e2, serverInfo: t2, oAuthInfo: r2 }) : window.location.href = c;
  }
  _getRedirectURI(e2, t2) {
    const r2 = window.location.href.replace(/#.*$/, "");
    if (e2.popup)
      return Q(e2.popupCallbackUrl);
    if (t2) {
      const e3 = j$1(r2);
      return e3.query && ["code", "error", "error_description", "message_code", "persist", "state"].forEach((t3) => {
        delete e3.query[t3];
      }), Bt(e3.path, e3.query);
    }
    return r2;
  }
}
E.prototype.declaredClass = "esri.identity.IdentityManagerBase";
let L = class extends n$3.EventedAccessor {
  constructor(e2) {
    super(e2), this._oAuthCred = null, this.tokenRefreshBuffer = 2, e2 && e2._oAuthCred && (this._oAuthCred = e2._oAuthCred);
  }
  initialize() {
    this.resources = this.resources || [], this.creationTime == null && (this.creationTime = Date.now());
  }
  refreshToken() {
    const e2 = s$4.findServerInfo(this.server), t2 = e2 && e2.owningSystemUrl, s2 = !!t2 && this.scope === "server", i2 = s2 && D(e2, s$4._legacyFed), o = e2.webTierAuth, n2 = o && s$4.normalizeWebTierAuth, a2 = C[this.server], h = a2 && a2[this.userId];
    let l2, c = this.resources && this.resources[0], d2 = s2 ? s$4.findServerInfo(t2) : null, u2 = { username: this.userId, password: h };
    if (o && !n2)
      return;
    s2 && !d2 && s$4.serverInfos.some((e3) => (s$4._isIdProvider(t2, e3.server) && (d2 = e3), !!d2));
    const p2 = d2 ? s$4.findCredential(d2.server, this.userId) : null;
    if (!s2 || p2) {
      if (!i2) {
        if (s2)
          l2 = { serverUrl: c, token: p2 && p2.token, ssl: p2 && p2.ssl };
        else if (n2)
          u2 = null, l2 = { ssl: this.ssl };
        else {
          if (!h) {
            let t3;
            return c && (c = s$4._sanitizeUrl(c), this._enqueued = 1, t3 = s$4._enqueue(c, e2, null, null, this.isAdmin, this), t3.then(() => {
              this._enqueued = 0, this.refreshServerTokens();
            }).catch(() => {
              this._enqueued = 0;
            })), t3;
          }
          this.isAdmin && (l2 = { isAdmin: true });
        }
        return s$4.generateToken(s2 ? d2 : e2, s2 ? null : u2, l2).then((e3) => {
          this.token = e3.token, this.expires = e3.expires != null ? Number(e3.expires) : null, this.creationTime = Date.now(), this.validity = e3.validity, this.emitTokenChange(), this.refreshServerTokens();
        }).catch(() => {
        });
      }
      p2 == null ? void 0 : p2.refreshToken();
    }
  }
  refreshServerTokens() {
    this.scope === "portal" && s$4.credentials.forEach((e2) => {
      const t2 = s$4.findServerInfo(e2.server), s2 = t2 && t2.owningSystemUrl;
      e2 !== this && e2.userId === this.userId && s2 && e2.scope === "server" && (s$4._hasSameServerInstance(this.server, s2) || s$4._isIdProvider(s2, this.server)) && (D(t2, s$4._legacyFed) ? (e2.token = this.token, e2.expires = this.expires, e2.creationTime = this.creationTime, e2.validity = this.validity, e2.emitTokenChange()) : e2.refreshToken());
    });
  }
  emitTokenChange(e2) {
    clearTimeout(this._refreshTimer);
    const t2 = this.server && s$4.findServerInfo(this.server), s2 = t2 && t2.owningSystemUrl, i2 = s2 && s$4.findServerInfo(s2);
    e2 === false || s2 && this.scope !== "portal" && (!i2 || !i2.webTierAuth || s$4.normalizeWebTierAuth) || this.expires == null && this.validity == null || this._startRefreshTimer(), this.emit("token-change");
  }
  destroy() {
    this.userId = this.server = this.token = this.expires = this.validity = this.resources = this.creationTime = null, this._oAuthCred && (this._oAuthCred.destroy(), this._oAuthCred = null);
    const e2 = s$4.credentials.indexOf(this);
    e2 > -1 && s$4.credentials.splice(e2, 1), this.emitTokenChange(), this.emit("destroy");
  }
  toJSON() {
    const e2 = p$3({ userId: this.userId, server: this.server, token: this.token, expires: this.expires, validity: this.validity, ssl: this.ssl, isAdmin: this.isAdmin, creationTime: this.creationTime, scope: this.scope }), t2 = this.resources;
    return t2 && t2.length > 0 && (e2.resources = t2.slice()), e2;
  }
  _startRefreshTimer() {
    clearTimeout(this._refreshTimer);
    const e2 = 6e4 * this.tokenRefreshBuffer, t2 = 2 ** 31 - 1;
    let r2 = (this.validity ? this.creationTime + 6e4 * this.validity : this.expires) - Date.now();
    r2 < 0 ? r2 = 0 : r2 > t2 && (r2 = t2), this._refreshTimer = setTimeout(this.refreshToken.bind(this), r2 > e2 ? r2 - e2 : r2);
  }
};
e$1([y()], L.prototype, "creationTime", void 0), e$1([y()], L.prototype, "expires", void 0), e$1([y()], L.prototype, "isAdmin", void 0), e$1([y()], L.prototype, "oAuthState", void 0), e$1([y()], L.prototype, "resources", void 0), e$1([y()], L.prototype, "scope", void 0), e$1([y()], L.prototype, "server", void 0), e$1([y()], L.prototype, "ssl", void 0), e$1([y()], L.prototype, "token", void 0), e$1([y()], L.prototype, "tokenRefreshBuffer", void 0), e$1([y()], L.prototype, "userId", void 0), e$1([y()], L.prototype, "validity", void 0), L = e$1([n("esri.identity.Credential")], L);
class r extends E {
}
r.prototype.declaredClass = "esri.identity.IdentityManager";
const s = new r();
n$4(s);
export { s as default };
