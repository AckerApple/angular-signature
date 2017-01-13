//import SignaturePad from "signature_pad/signature_pad.min.js"
//import SignaturePad from "signature_pad"
import SignaturePad from "./signature_pad"

const EMPTY_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=';

class SignaturePadCom{
  constructor($window, $timeout, $element, $scope){
    this.$window = $window
    this.$timeout = $timeout
    this.$element = $element

    $element[0].style.display = 'block'
    $element[0].style.width = '100%'
    $element[0].style.height = '100%'

    this.$scope = $scope
    this.canvas = $element[0].getElementsByTagName('canvas')[0]
  }

  $onInit(){
    this.as = Object.assign(this.as||this,this)&&this

    this.signaturePad = new SignaturePad(this.canvas);

    if(this.dataurl) {
      this.signaturePad.fromDataURL(this.dataurl);
    }

    this.onResize()
    this.$timeout(500).then(()=>this.onResize())
    this.resizer=()=>this.onResize()
    this.$window.addEventListener('resize', this.resizer)


    this.touchstarter=()=>this.onTouchstart()
    this.touchender=()=>this.onTouchend()
    this.$element.bind('touchstart', this.touchstarter);
    this.$element.bind('touchend', this.touchender);
    this.loaded = true
  }

  $onChanges(changes){
    if(changes.dataurl && changes.dataurl.currentValue!=changes.dataurl.previousValue){
      this.signaturePad.fromDataURL(changes.dataurl.currentValue);
    }
  }

  $onDestory(){
    this.$window.removeEventListener('resize', this.resizer)
    this.$element.unbind('touchstart', this.touchstarter);
    this.$element.unbind('touchend', this.touchender);
  }

  onTouchstart() {
    this.updateModel()
    /*
    this.$scope.$digest(()=>{
      this.updateModel();
    })
    */
  }

  onTouchend() {
    this.updateModel()
    /*
    this.$scope.$digest(()=>{
      this.updateModel();
    });
    */
  }

  onMouseup(){
    this.updateModel();
  }

  updateModel(){
    this.$timeout().then(()=>{
      var result = this.applyModel();
      this.dataurl = result.isEmpty ? null : result.dataurl;
    });
  }

  clear(){
    this.signaturePad.clear();
    this.applyModel()
  }

  onResize(){
    var ratio =  Math.max(this.$window.devicePixelRatio || 1, 1);

    this.canvas.style.display='none'
    var width = this.width || this.$element[0].offsetWidth
    var height = this.height || this.$element[0].offsetHeight
    this.canvas.style.display = null
    
    this.canvas.style.width = width+'px'
    this.canvas.style.height = height+'px'
    this.canvas.width = width * ratio;
    this.canvas.height = height * ratio;
    
    this.canvas.getContext("2d").scale(ratio, ratio);

    if(this.dataurl)this.signaturePad.fromDataURL(this.dataurl);
  }

  applyModel(){
    this.model = this.model || {};

    if(!this.signaturePad.isEmpty()) {
      this.model.dataurl = this.signaturePad.toDataURL();
      this.model.isEmpty = false;
    } else {
      this.model.dataurl = null//EMPTY_IMAGE;
      this.model.isEmpty = true;
    }

    this.dataurl = this.model.dataurl
    this.onModel({model:this.model})

    return this.model
  }
}
SignaturePadCom.$inject = ['$window', '$timeout', '$element', '$scope']

export default angular.module('angular-signature', [])
.component('signaturePad', {
  bindings: {
    as:'=?',
    model: '=?',
    dataurl: '=?',
    height: '@',
    width: '@',
    onModel: '&',
  },
  controller:SignaturePadCom,
  template: '<canvas ng-show="$ctrl.loaded" ng-mouseup="$ctrl.onMouseup()" ng-mousedown="$ctrl.updateModel()"></canvas>'
})
.name