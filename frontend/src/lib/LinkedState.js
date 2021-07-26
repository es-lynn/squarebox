/* eslint-disable */
'use strict'
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
Object.defineProperty(exports, '__esModule', { value: true })
var Error_1 = require('@aelesia/commons/dist/src/error/Error')
var react_1 = require('react')
function calculateValue(setState, state) {
  if (setState instanceof Function) {
    return setState(state)
  } else {
    return setState
  }
}
var LinkedState = /** @class */ (function () {
  function LinkedState(initialValue) {
    this._observeList = []
    this._state = initialValue
  }
  LinkedState.prototype.set = function (setState) {
    var _this = this
    this._state = calculateValue(setState, this._state)
    this._observeList.forEach(function (observer) {
      observer(_this._state)
    })
  }
  LinkedState.prototype.state = function () {
    return this._state
  }
  LinkedState.prototype._observe = function (setState) {
    setState(this._state)
    this._observeList.push(setState)
  }
  LinkedState.prototype._unobserve = function (setState) {
    this._observeList = this._observeList.filter(function (it) {
      return it !== setState
    })
  }
  return LinkedState
})()
exports.LinkedState = LinkedState
function useLinkedState(linkedState) {
  var _a = react_1.useState(linkedState.state()),
    state = _a[0],
    setLocalState = _a[1]
  var setGlobalState = function (a) {
    linkedState.set(a)
  }
  react_1.useEffect(function () {
    linkedState['_observe'](setLocalState)
    return function () {
      linkedState['_unobserve'](setLocalState)
    }
    // I cannot forsee what circumstances key will ever be dynamic,
    //   given that the schema is pre-defined, as such I'm disabling changes on it.
  }, [])
  return [state, setGlobalState, setLocalState]
}
exports.useLinkedState = useLinkedState
var ComputedLinkedState = /** @class */ (function () {
  function ComputedLinkedState(linkedState, reduxed) {
    this._observeList = []
    this._linkedState = linkedState
    this._reduxed = reduxed
  }
  ComputedLinkedState.prototype.state = function () {
    return this._reduxed(this._linkedState.state())
  }
  ComputedLinkedState.prototype._observe = function (setState) {
    setState(this.state())
    this._observeList.push(setState)
  }
  ComputedLinkedState.prototype._unobserve = function (setState) {
    this._observeList = this._observeList.filter(function (it) {
      return it !== setState
    })
  }
  return ComputedLinkedState
})()
exports.ComputedLinkedState = ComputedLinkedState
function useComputedState(rLinkState, depList) {
  if (depList === void 0) {
    depList = []
  }
  var _a = react_1.useState(rLinkState.state()),
    state = _a[0],
    setLocalState = _a[1]
  react_1.useEffect(function () {
    rLinkState._observe(setLocalState)
    return function () {
      return rLinkState._unobserve(setLocalState)
    }
  }, [])
  return state
}
exports.useComputedState = useComputedState
var Queue = /** @class */ (function () {
  function Queue() {
    this.arr = []
  }
  Queue.prototype.enqueue = function (item) {
    this.arr.push(item)
  }
  Queue.prototype.dequeue = function () {
    if (this.arr.length <= 0) {
      throw new Error_1.IllegalStateErr('Queue is empty')
    }
    return this.arr.shift()
  }
  Queue.prototype.length = function () {
    return this.arr.length
  }
  Queue.prototype.isEmpty = function () {
    return this.arr.length <= 0
  }
  Queue.prototype.peek = function () {
    if (this.arr.length <= 0) {
      throw new Error_1.IllegalStateErr('Queue is empty')
    }
    return this.arr[0]
  }
  return Queue
})()
var FixedLengthQueue = /** @class */ (function (_super) {
  __extends(FixedLengthQueue, _super)
  function FixedLengthQueue(maxSize) {
    var _this = _super.call(this) || this
    _this.maxSize = maxSize
    return _this
  }
  FixedLengthQueue.prototype.enqueue = function (item) {
    _super.prototype.enqueue.call(this, item)
    if (this.arr.length >= this.maxSize) {
      this.dequeue()
    }
  }
  FixedLengthQueue.prototype.dequeue = function () {
    return _super.prototype.dequeue.call(this)
  }
  return FixedLengthQueue
})(Queue)
var multiStateMemory = {}
var multiStateQueue = new Queue()
var maxMemory = 10
function MultiLinkedState(key, initialValue) {
  var result = multiStateMemory[key]
  if (result) {
    return result
  } else {
    var a = new LinkedState(initialValue)
    multiStateMemory[key] = a
    multiStateQueue.enqueue(key)
    if (multiStateQueue.length() > maxMemory) {
      var deleteKey = multiStateQueue.dequeue()
      delete multiStateMemory[deleteKey]
    }
    return a
  }
}
exports.MultiLinkedState = MultiLinkedState
