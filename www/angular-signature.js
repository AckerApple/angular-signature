!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==typeof c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('2', [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module unless amdModuleId is set
            define([], function () {
                return root['SignaturePad'] = factory();
            });
        } else if (typeof exports === 'object') {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like environments that support module.exports,
            // like Node.
            module.exports = factory();
        } else {
            root['SignaturePad'] = factory();
        }
    })(this, function () {

        /*!
         * Signature Pad v1.5.3
         * https://github.com/szimek/signature_pad
         *
         * Copyright 2016 Szymon Nowak
         * Released under the MIT license
         *
         * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
         * http://corner.squareup.com/2012/07/smoother-signatures.html
         *
         * Implementation of interpolation using cubic Bézier curves is taken from:
         * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
         *
         * Algorithm for approximated length of a Bézier curve is taken from:
         * http://www.lemoda.net/maths/bezier-length/index.html
         *
         */
        var SignaturePad = function (document) {
            "use strict";

            var SignaturePad = function (canvas, options) {
                var self = this,
                    opts = options || {};

                this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
                this.minWidth = opts.minWidth || 0.5;
                this.maxWidth = opts.maxWidth || 2.5;
                this.dotSize = opts.dotSize || function () {
                    return (this.minWidth + this.maxWidth) / 2;
                };
                this.penColor = opts.penColor || "black";
                this.backgroundColor = opts.backgroundColor || "rgba(0,0,0,0)";
                this.onEnd = opts.onEnd;
                this.onBegin = opts.onBegin;

                this._canvas = canvas;
                this._ctx = canvas.getContext("2d");
                this.clear();

                // we need add these inline so they are available to unbind while still having
                //  access to 'self' we could use _.bind but it's not worth adding a dependency
                this._handleMouseDown = function (event) {
                    if (event.which === 1) {
                        self._mouseButtonDown = true;
                        self._strokeBegin(event);
                    }
                };

                this._handleMouseMove = function (event) {
                    if (self._mouseButtonDown) {
                        self._strokeUpdate(event);
                    }
                };

                this._handleMouseUp = function (event) {
                    if (event.which === 1 && self._mouseButtonDown) {
                        self._mouseButtonDown = false;
                        self._strokeEnd(event);
                    }
                };

                this._handleTouchStart = function (event) {
                    if (event.targetTouches.length == 1) {
                        var touch = event.changedTouches[0];
                        self._strokeBegin(touch);
                    }
                };

                this._handleTouchMove = function (event) {
                    // Prevent scrolling.
                    event.preventDefault();

                    var touch = event.targetTouches[0];
                    self._strokeUpdate(touch);
                };

                this._handleTouchEnd = function (event) {
                    var wasCanvasTouched = event.target === self._canvas;
                    if (wasCanvasTouched) {
                        event.preventDefault();
                        self._strokeEnd(event);
                    }
                };

                this._handleMouseEvents();
                this._handleTouchEvents();
            };

            SignaturePad.prototype.clear = function () {
                var ctx = this._ctx,
                    canvas = this._canvas;

                ctx.fillStyle = this.backgroundColor;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                this._reset();
            };

            SignaturePad.prototype.toDataURL = function (imageType, quality) {
                var canvas = this._canvas;
                return canvas.toDataURL.apply(canvas, arguments);
            };

            SignaturePad.prototype.fromDataURL = function (dataUrl) {
                var self = this,
                    image = new Image(),
                    ratio = window.devicePixelRatio || 1,
                    width = this._canvas.width / ratio,
                    height = this._canvas.height / ratio;

                this._reset();
                image.src = dataUrl;
                image.onload = function () {
                    self._ctx.drawImage(image, 0, 0, width, height);
                };
                this._isEmpty = false;
            };

            SignaturePad.prototype._strokeUpdate = function (event) {
                var point = this._createPoint(event);
                this._addPoint(point);
            };

            SignaturePad.prototype._strokeBegin = function (event) {
                this._reset();
                this._strokeUpdate(event);
                if (typeof this.onBegin === 'function') {
                    this.onBegin(event);
                }
            };

            SignaturePad.prototype._strokeDraw = function (point) {
                var ctx = this._ctx,
                    dotSize = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;

                ctx.beginPath();
                this._drawPoint(point.x, point.y, dotSize);
                ctx.closePath();
                ctx.fill();
            };

            SignaturePad.prototype._strokeEnd = function (event) {
                var canDrawCurve = this.points.length > 2,
                    point = this.points[0];

                if (!canDrawCurve && point) {
                    this._strokeDraw(point);
                }
                if (typeof this.onEnd === 'function') {
                    this.onEnd(event);
                }
            };

            SignaturePad.prototype._handleMouseEvents = function () {
                this._mouseButtonDown = false;

                this._canvas.addEventListener("mousedown", this._handleMouseDown);
                this._canvas.addEventListener("mousemove", this._handleMouseMove);
                document.addEventListener("mouseup", this._handleMouseUp);
            };

            SignaturePad.prototype._handleTouchEvents = function () {
                // Pass touch events to canvas element on mobile IE11 and Edge.
                this._canvas.style.msTouchAction = 'none';
                this._canvas.style.touchAction = 'none';

                this._canvas.addEventListener("touchstart", this._handleTouchStart);
                this._canvas.addEventListener("touchmove", this._handleTouchMove);
                this._canvas.addEventListener("touchend", this._handleTouchEnd);
            };

            SignaturePad.prototype.on = function () {
                this._handleMouseEvents();
                this._handleTouchEvents();
            };

            SignaturePad.prototype.off = function () {
                this._canvas.removeEventListener("mousedown", this._handleMouseDown);
                this._canvas.removeEventListener("mousemove", this._handleMouseMove);
                document.removeEventListener("mouseup", this._handleMouseUp);

                this._canvas.removeEventListener("touchstart", this._handleTouchStart);
                this._canvas.removeEventListener("touchmove", this._handleTouchMove);
                this._canvas.removeEventListener("touchend", this._handleTouchEnd);
            };

            SignaturePad.prototype.isEmpty = function () {
                return this._isEmpty;
            };

            SignaturePad.prototype._reset = function () {
                this.points = [];
                this._lastVelocity = 0;
                this._lastWidth = (this.minWidth + this.maxWidth) / 2;
                this._isEmpty = true;
                this._ctx.fillStyle = this.penColor;
            };

            SignaturePad.prototype._createPoint = function (event) {
                var rect = this._canvas.getBoundingClientRect();
                return new Point(event.clientX - rect.left, event.clientY - rect.top);
            };

            SignaturePad.prototype._addPoint = function (point) {
                var points = this.points,
                    c2,
                    c3,
                    curve,
                    tmp;

                points.push(point);

                if (points.length > 2) {
                    // To reduce the initial lag make it work with 3 points
                    // by copying the first point to the beginning.
                    if (points.length === 3) points.unshift(points[0]);

                    tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
                    c2 = tmp.c2;
                    tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
                    c3 = tmp.c1;
                    curve = new Bezier(points[1], c2, c3, points[2]);
                    this._addCurve(curve);

                    // Remove the first element from the list,
                    // so that we always have no more than 4 points in points array.
                    points.shift();
                }
            };

            SignaturePad.prototype._calculateCurveControlPoints = function (s1, s2, s3) {
                var dx1 = s1.x - s2.x,
                    dy1 = s1.y - s2.y,
                    dx2 = s2.x - s3.x,
                    dy2 = s2.y - s3.y,
                    m1 = { x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0 },
                    m2 = { x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0 },
                    l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1),
                    l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2),
                    dxm = m1.x - m2.x,
                    dym = m1.y - m2.y,
                    k = l2 / (l1 + l2),
                    cm = { x: m2.x + dxm * k, y: m2.y + dym * k },
                    tx = s2.x - cm.x,
                    ty = s2.y - cm.y;

                return {
                    c1: new Point(m1.x + tx, m1.y + ty),
                    c2: new Point(m2.x + tx, m2.y + ty)
                };
            };

            SignaturePad.prototype._addCurve = function (curve) {
                var startPoint = curve.startPoint,
                    endPoint = curve.endPoint,
                    velocity,
                    newWidth;

                velocity = endPoint.velocityFrom(startPoint);
                velocity = this.velocityFilterWeight * velocity + (1 - this.velocityFilterWeight) * this._lastVelocity;

                newWidth = this._strokeWidth(velocity);
                this._drawCurve(curve, this._lastWidth, newWidth);

                this._lastVelocity = velocity;
                this._lastWidth = newWidth;
            };

            SignaturePad.prototype._drawPoint = function (x, y, size) {
                var ctx = this._ctx;

                ctx.moveTo(x, y);
                ctx.arc(x, y, size, 0, 2 * Math.PI, false);
                this._isEmpty = false;
            };

            SignaturePad.prototype._drawCurve = function (curve, startWidth, endWidth) {
                var ctx = this._ctx,
                    widthDelta = endWidth - startWidth,
                    drawSteps,
                    width,
                    i,
                    t,
                    tt,
                    ttt,
                    u,
                    uu,
                    uuu,
                    x,
                    y;

                drawSteps = Math.floor(curve.length());
                ctx.beginPath();
                for (i = 0; i < drawSteps; i++) {
                    // Calculate the Bezier (x, y) coordinate for this step.
                    t = i / drawSteps;
                    tt = t * t;
                    ttt = tt * t;
                    u = 1 - t;
                    uu = u * u;
                    uuu = uu * u;

                    x = uuu * curve.startPoint.x;
                    x += 3 * uu * t * curve.control1.x;
                    x += 3 * u * tt * curve.control2.x;
                    x += ttt * curve.endPoint.x;

                    y = uuu * curve.startPoint.y;
                    y += 3 * uu * t * curve.control1.y;
                    y += 3 * u * tt * curve.control2.y;
                    y += ttt * curve.endPoint.y;

                    width = startWidth + ttt * widthDelta;
                    this._drawPoint(x, y, width);
                }
                ctx.closePath();
                ctx.fill();
            };

            SignaturePad.prototype._strokeWidth = function (velocity) {
                return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
            };

            var Point = function (x, y, time) {
                this.x = x;
                this.y = y;
                this.time = time || new Date().getTime();
            };

            Point.prototype.velocityFrom = function (start) {
                return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 1;
            };

            Point.prototype.distanceTo = function (start) {
                return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
            };

            var Bezier = function (startPoint, control1, control2, endPoint) {
                this.startPoint = startPoint;
                this.control1 = control1;
                this.control2 = control2;
                this.endPoint = endPoint;
            };

            // Returns approximated length.
            Bezier.prototype.length = function () {
                var steps = 10,
                    length = 0,
                    i,
                    t,
                    cx,
                    cy,
                    px,
                    py,
                    xdiff,
                    ydiff;

                for (i = 0; i <= steps; i++) {
                    t = i / steps;
                    cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
                    cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
                    if (i > 0) {
                        xdiff = cx - px;
                        ydiff = cy - py;
                        length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
                    }
                    px = cx;
                    py = cy;
                }
                return length;
            };

            Bezier.prototype._point = function (t, start, c1, c2, end) {
                return start * (1.0 - t) * (1.0 - t) * (1.0 - t) + 3.0 * c1 * (1.0 - t) * (1.0 - t) * t + 3.0 * c2 * (1.0 - t) * t * t + end * t * t * t;
            };

            return SignaturePad;
        }(document);

        return SignaturePad;
    });
    return module.exports;
});
$__System.register("1", ["2"], function (_export, _context) {
  "use strict";

  var SignaturePad, _classCallCheck, _createClass, SignaturePadCom, angularSignature;

  return {
    setters: [function (_) {
      SignaturePad = _.default;
    }],
    execute: function () {
      _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      SignaturePadCom = function () {
        function SignaturePadCom($window, $timeout, $element, $scope) {
          _classCallCheck(this, SignaturePadCom);

          //create ng-if escapable memory & create class reference
          if (this.as) {
            Object.assign(this, this.as);
          } else {
            this.as = this;
          }

          this.$window = $window;
          this.$timeout = $timeout;
          this.$element = $element;

          $element[0].style.display = 'block';
          $element[0].style.width = '100%';
          $element[0].style.height = '100%';

          this.$scope = $scope;
          this.canvas = $element[0].getElementsByTagName('canvas')[0];
        }

        _createClass(SignaturePadCom, [{
          key: '$onInit',
          value: function $onInit() {
            var _this = this;

            this.signaturePad = new SignaturePad(this.canvas);

            if (this.dataurl) {
              this.signaturePad.fromDataURL(this.dataurl);
            }

            this.onResize();
            this.$timeout(500).then(function () {
              return _this.onResize();
            });
            this.resizer = function () {
              return _this.onResize();
            };
            this.$window.addEventListener('resize', this.resizer);

            this.touchstarter = function () {
              return _this.onTouchstart();
            };
            this.touchender = function () {
              return _this.onTouchend();
            };
            this.$element.bind('touchstart', this.touchstarter);
            this.$element.bind('touchend', this.touchender);
          }
        }, {
          key: '$onChanges',
          value: function $onChanges(changes) {
            if (changes.dataurl && changes.dataurl.currentValue != changes.dataurl.previousValue) {
              this.signaturePad.fromDataURL(changes.dataurl.currentValue);
            }
          }
        }, {
          key: '$onDestory',
          value: function $onDestory() {
            this.$window.removeEventListener('resize', this.resizer);
            this.$element.unbind('touchstart', this.touchstarter);
            this.$element.unbind('touchend', this.touchender);
          }
        }, {
          key: 'onTouchstart',
          value: function onTouchstart() {
            var _this2 = this;

            this.$scope.$digest(function () {
              _this2.updateModel();
            });
          }
        }, {
          key: 'onTouchend',
          value: function onTouchend() {
            var _this3 = this;

            this.$scope.$digest(function () {
              _this3.updateModel();
              _this3.updateModel();
            });
          }
        }, {
          key: 'onMouseup',
          value: function onMouseup() {
            this.updateModel();
          }
        }, {
          key: 'updateModel',
          value: function updateModel() {
            var _this4 = this;

            this.$timeout().then(function () {
              var result = _this4.applyModel();
              _this4.dataurl = result.isEmpty ? null : result.dataurl;
            });
          }
        }, {
          key: 'clear',
          value: function clear() {
            this.signaturePad.clear();
            this.applyModel();
          }
        }, {
          key: 'onResize',
          value: function onResize() {
            var ratio = Math.max(this.$window.devicePixelRatio || 1, 1);

            this.canvas.style.display = 'none';
            var width = this.width || this.$element[0].offsetWidth;
            var height = this.height || this.$element[0].offsetHeight;
            this.canvas.style.display = null;

            this.canvas.style.width = width + 'px';
            this.canvas.style.height = height + 'px';
            this.canvas.width = width * ratio;
            this.canvas.height = height * ratio;

            this.canvas.getContext("2d").scale(ratio, ratio);

            if (this.dataurl) this.signaturePad.fromDataURL(this.dataurl);
          }
        }, {
          key: 'applyModel',
          value: function applyModel() {
            this.model = this.model || {};

            if (!this.signaturePad.isEmpty()) {
              this.model.dataurl = this.signaturePad.toDataURL();
              this.model.isEmpty = false;
            } else {
              this.model.dataurl = null; //EMPTY_IMAGE;
              this.model.isEmpty = true;
            }

            this.dataurl = this.model.dataurl;
            this.onModel({ model: this.model });

            return this.model;
          }
        }]);

        return SignaturePadCom;
      }();

      SignaturePadCom.$inject = ['$window', '$timeout', '$element', '$scope'];

      angularSignature = angular.module('angular-signature', []).component('signaturePad', {
        bindings: {
          as: '=?',
          model: '=?',
          dataurl: '=?',
          height: '@',
          width: '@',
          onModel: '&'
        },
        controller: SignaturePadCom,
        template: '<canvas ng-mouseup="$ctrl.onMouseup()" ng-mousedown="$ctrl.updateModel()"></canvas>'
      }).name;

      _export("default", angularSignature);
    }
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=angular-signature.js.map