(function(t){function e(e){for(var o,a,l=e[0],s=e[1],c=e[2],p=0,f=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"08a9":function(t,e,n){"use strict";var o=n("79ea"),r=n.n(o);r.a},"1f0c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a={name:"app",components:{}},l=a,s=n("2877"),c=Object(s["a"])(l,r,i,!1,null,null,null),u=c.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("p",{staticClass:"title"},[t._v("骑士君，在这里输入你的简介～")]),t._m(0),t._m(1),t._m(2),n("el-form",{ref:"form1",attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"简介"}},[n("el-input",{attrs:{id:"introInput",type:"textarea",rows:3,placeholder:"请输入简介",autosize:{minRows:3,maxRos:6},maxlength:60,"show-word-limit":""},model:{value:t.textIntro,callback:function(e){t.textIntro=e},expression:"textIntro"}})],1),n("el-form-item",{attrs:{label:"更改颜色"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.openGradientColorDialog}},[t._v(" 设置渐变色 ")])],1),n("el-form-item",{attrs:{label:"纯色"}},[n("el-button",{staticStyle:{padding:"0px",border:"none"},on:{click:t.handleClick}},[n("el-color-picker",{class:{"is-hidden":!t.isInPlainColor},attrs:{id:"plain","color-format":"hex"},on:{change:t.changePlainColor},model:{value:t.plainColor,callback:function(e){t.plainColor=e},expression:"plainColor"}})],1)],1),n("el-form-item",{attrs:{label:"字体"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.change("bold")}}},[t._v("加粗")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.change("sup")}}},[t._v("上移")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.change("sub")}}},[t._v("下移")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.change("slash")}}},[t._v("横线")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.change("italic")}}},[t._v("倾斜")])],1)],1),n("div",{staticStyle:{"text-align":"center"}},[n("el-button",{attrs:{type:"success"},on:{click:t.copyCodeToClipBoard}},[t._v(" 复制代码 ")])],1),t._m(3),t._m(4),n("el-dialog",{attrs:{title:"设置渐变色",visible:t.isColorDialogOpen,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.isColorDialogOpen=e}}},[n("el-form",[n("el-form-item",{attrs:{label:"起始色"}},[n("div",{staticClass:"block"},[n("el-color-picker",{attrs:{"color-format":"hex"},model:{value:t.fromColor,callback:function(e){t.fromColor=e},expression:"fromColor"}})],1)]),n("el-form-item",{attrs:{label:"终止色"}},[n("div",{staticClass:"block"},[n("el-color-picker",{attrs:{"color-format":"hex"},model:{value:t.toColor,callback:function(e){t.toColor=e},expression:"toColor"}})],1)])],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.cancelNClose}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.applyNclose}},[t._v("确 定")])],1)],1)],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"sub"},[n("i",{staticClass:"el-icon-warning"}),t._v("包含颜色代码在内，简介限制60个字符。设置了渐变色后，位于渐变色前方的字体必须设置颜色，否则在游戏内会以纯白的形式显示。只是设置了字体改变的话，必须给字体添加颜色，否则在游戏内会以纯白的形式显示。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"sub"},[n("i",{staticClass:"el-icon-warning"}),t._v("用鼠标勾选文字，然后再点击按钮即可改变勾选文字的样式。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"sub"},[n("i",{staticClass:"el-icon-warning"}),t._v("这个临时工具只能在电脑上使用。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img-holder"},[n("img",{attrs:{src:"https://konfan.oss-cn-beijing.aliyuncs.com/pcr/kitty.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"balabala"},[t._v(" 本网站可以用来在公主连接的大多数输入框中生成类似于富文本的效果。但是搞不好哪天B站更新后台，这些方式可能都不但能用了。 "),n("a",{attrs:{href:"https://yuiYuan.xyz",target:"_blank"}},[t._v("关于作者")])])}],h=(n("99af"),n("caad"),n("d3b7"),n("ac1f"),n("25f0"),n("2532"),n("5319"),{name:"Home",data:function(){return{isColorDialogOpen:!1,fromColor:"#000000",toColor:"#000000",plainColor:"",textIntro:"",codeIntro:"",tempSelectionText:"",tempSelectionTextStart:0,isInPlainColor:!1}},methods:{copyCodeToClipBoard:function(){var t=document.createElement("input");document.body.appendChild(t),t.setAttribute("value","".concat(this.textIntro)),t.select(),document.execCommand("copy")&&(document.execCommand("copy"),this.$message.success("已复制到剪贴板")),document.body.removeChild(t)},transText:function(t,e){if(e)switch(t){case"bold":return"[b[]]".concat(e,"[/b]");case"sup":return"[sup[]]".concat(e,"[/sup]");case"sub":return"[sub[]]".concat(e,"[/sub]");case"slash":return"[s[]]".concat(e,"[/s]");case"italic":return"[i[]]".concat(e,"[/i]")}},change:function(t){var e=window.getSelection().toString();if(e){var n=introInput.selectionStart,o=(introInput.selectionEnd,this.transText(t,e)),r=this.textIntro;this.textIntro=r.substring(0,n)+o+r.substr(n+e.length),this.codeIntro=this.textIntro}else this.$message.error("请选择文字")},changeEndTag:function(t){t||(this.codeName=this.displayName.replace(/\[\/b]/g,"").replace(/\[\/i]/g,"").replace(/\[\/del]/g,"").replace(/\[\/sub]/g,"").replace(/\[\/sup]/g,""))},openGradientColorDialog:function(){this.tempSelectionText=window.getSelection().toString(),this.tempSelectionText?(this.tempSelectionTextStart=introInput.selectionStart,this.isColorDialogOpen=!0):this.$message.error("请选择文字")},getGradient:function(){window.getSelection().toString();return"[".concat(this.fromColor.replace("#","").toLowerCase(),",").concat(this.toColor.replace("#","").toLowerCase(),"]")},gradient:function(){this.tempSelectionText;var t=this.tempSelectionTextStart;this.textIntro.includes("[-]")?this.codeIntro=this.textIntro.substring(0,t)+this.getGradient()+this.textIntro.substring(t):this.codeIntro=this.textIntro.substring(0,t)+"[-]"+this.getGradient()+this.textIntro.substring(t),this.textIntro=this.codeIntro,this.clearTemp()},handleClick:function(){this.tempSelectionText=window.getSelection().toString(),this.tempSelectionText?(this.tempSelectionTextStart=introInput.selectionStart,this.isInPlainColor=!0):this.$message.error("请选择文字")},changePlainColor:function(t){var e=this.tempSelectionTextStart;this.textIntro.includes("[c[]]")?this.codeIntro=this.textIntro.substring(0,e)+"[".concat(t.replace("#",""),"[]]")+this.textIntro.substring(e):this.codeIntro=this.textIntro.substring(0,e)+"[c[]]"+"[".concat(t.replace("#",""),"[]]")+this.textIntro.substring(e),this.textIntro=this.codeIntro,this.clearTemp()},clearTemp:function(){this.tempSelectionText="",this.tempSelectionTextStart=0},applyNclose:function(){this.gradient(),this.isColorDialogOpen=!1},cancelNClose:function(){this.isColorDialogOpen=!1},handleClose:function(){this.isColorDialogOpen=!1,this.clearTemp()}}}),m=h,b=(n("08a9"),n("b5d4"),Object(s["a"])(m,f,d,!1,null,"3c3923c4",null)),g=b.exports;o["default"].use(p["a"]);var v=[{path:"/",name:"Home",component:g}],x=new p["a"]({routes:v}),C=x,y=(n("0fb7"),n("450d"),n("f529")),_=n.n(y),S=(n("a7cc"),n("df33")),I=n.n(S),w=(n("e960"),n("b35b")),k=n.n(w),T=(n("eca7"),n("3787")),O=n.n(T),$=(n("425f"),n("4105")),j=n.n($),P=(n("b5c2"),n("20cf")),E=n.n(P),D=(n("10cb"),n("f3ad")),N=n.n(D),G=(n("a586"),n("7464")),M=n.n(G),B=(n("1951"),n("eedf")),z=n.n(B);o["default"].use(z.a),o["default"].use(M.a),o["default"].use(N.a),o["default"].use(E.a),o["default"].use(j.a),o["default"].use(O.a),o["default"].use(k.a),o["default"].use(I.a),o["default"].prototype.$message=_.a;n("c69f");o["default"].config.productionTip=!1,new o["default"]({router:C,render:function(t){return t(u)}}).$mount("#app")},"79ea":function(t,e,n){},b5d4:function(t,e,n){"use strict";var o=n("1f0c"),r=n.n(o);r.a},c69f:function(t,e,n){}});
//# sourceMappingURL=app.a9baf63c.js.map