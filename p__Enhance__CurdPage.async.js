(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{fE0X:function(e,t,a){e.exports={avatarWrapper:"antd-pro-pages-enhance-curd-page-index-avatarWrapper"}},"x+ig":function(e,t,a){"use strict";a.r(t);a("Gu8j");var l=a("aF2W"),n=a("BG4o"),r=a.n(n),i=(a("kCtL"),a("NrKu")),o=(a("YWC5"),a("t+4Z")),d=(a("zSoP"),a("tSsm")),s=(a("wtwB"),a("jGaU")),c=a("zAuD"),u=a.n(c),f=(a("4HBA"),a("3uS9")),m=(a("4wtA"),a("b5xn")),p=a("43Yg"),y=a.n(p),P=a("/tCh"),g=a.n(P),b=a("scpF"),h=a.n(b),w=a("O/V9"),I=a.n(w),v=a("8aBX"),C=a.n(v),E=a("uqIC"),V=a.n(E),k=a("LneV"),x=a("JeLo"),_=a("V9R/"),N=(a("XyJZ"),a("/srl"));function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return[{type:"custom",field:"organ_id",formItemProps:{label:"\u6240\u5c5e\u56e2\u4f53"},fieldProps:{initialValue:e.organ_id},component:V.a.createElement(N["a"],{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u6240\u5c5e\u56e2\u4f53",disabled:!t})},{type:"date",field:"date",formItemProps:{label:"\u65e5\u671f"},fieldProps:{initialValue:e.date},componentProps:{onChange:function(e){return console.log(e)}}},{type:"datetime",field:"datetime",formItemProps:{label:"\u65e5\u671f\u65f6\u95f4"},fieldProps:{initialValue:e.datetime}},{type:"number",field:"number",formItemProps:{label:"\u6570\u5b57"},fieldProps:{initialValue:e.number}},{type:"select",field:"select",formItemProps:{label:"\u9009\u62e9"},fieldProps:{initialValue:e.select},componentProps:{options:[{text:"\u94f6\u6cb3",value:"yh"}]}},{type:"textarea",field:"textarea",formItemProps:{label:"\u6587\u672c\u6846"},fieldProps:{initialValue:e.textarea},componentProps:{autosize:{minRows:2,maxRows:6}}},{type:"password",field:"password",formItemProps:{label:"\u5bc6\u7801"},fieldProps:{initialValue:e.password}},{type:"picture",field:"picture",formItemProps:{label:"\u56fe\u7247"},fieldProps:{initialValue:e.picture}},{type:"switch",field:"switch",formItemProps:{label:"\u5f00\u5173"},fieldProps:{initialValue:e.switch}},{type:"slider",field:"slider",formItemProps:{label:"\u6ed1\u52a8\u8f93\u5165\u6761"},fieldProps:{initialValue:e.slider}},{type:"datetime-range",field:"period",formItemProps:{label:"\u6709\u6548\u671f"},fieldProps:{initialValue:e.period}},{type:"file-dragger",field:"file",formItemProps:{label:"\u6587\u4ef6"},fieldProps:{initialValue:e.file}},{type:"location",field:"location",formItemProps:{label:"\u5730\u5740"},fieldProps:{initialValue:e.location}},{type:"default/string",field:"name",formItemProps:{label:"\u59d3\u540d"},fieldProps:{initialValue:e.name}}]}var A,L,S,B=a("fE0X"),W=a.n(B),q=(A=Object(k["connect"])(function(e){var t=e[_["modelName"]],a=e.loading;return{data:t.data,detail:t.detail,fetchLoading:a.effects["".concat(_["modelName"],"/fetch")],detailLoading:a.effects["".concat(_["modelName"],"/detail")],createLoading:a.effects["".concat(_["modelName"],"/create")],updateLoading:a.effects["".concat(_["modelName"],"/update")],deleteLoading:a.effects["".concat(_["modelName"],"/delete")]}}),A((S=function(e){function t(){var e,a;y()(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=h()(this,(e=I()(t)).call.apply(e,[this].concat(n))),a.state={customModelVisible:!1,selectedRows:[]},a.queryArgsConfig=[{type:"string",field:"username",formItemProps:{label:"\u59d3\u540d"}},{type:"string",field:"nickname",formItemProps:{label:"\u6635\u79f0"}},{type:"string",field:"habit",formItemProps:{label:"\u7231\u597d"}}],a.columns=[{title:"\u516c\u5f0f\u7167",dataIndex:"avatar",render:function(e){return V.a.createElement("div",{className:W.a.avatarWrapper},V.a.createElement(m["a"],{src:e,size:"large"}))}},{title:"\u59d3\u540d",dataIndex:"name",render:function(e,t){return V.a.createElement("a",{href:t.profile,target:"_blank",rel:"noreferrer noopener"},e)}},{title:"\u6635\u79f0",dataIndex:"nickname"},{title:"\u751f\u65e5",dataIndex:"birthday"},{title:"\u7279\u957f",dataIndex:"speciality"},{title:"\u7231\u597d",dataIndex:"habit"}],a}return C()(t,e),g()(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.customModelVisible,l=t.selectedRows,n={extraActions:[{key:13,title:"\u5916\u52a1",handleClick:function(e){return f["default"].info("\u8c03\u7528 ".concat(e.name," \u7684\u5916\u52a1\u4e8b\u4ef6"))}},{key:14,title:"\u517c\u804c",handleClick:function(e){return f["default"].info("\u8c03\u7528 ".concat(e.name," \u7684\u517c\u804c\u4e8b\u4ef6"))}},{key:15,title:"\u5f39\u51fa\u5b50\u7ec4\u4ef6",handleClick:function(){return e.setState({customModelVisible:!0})}}],confirmKeys:[[4,function(e){return"\u786e\u5b9a\u67e5\u770b ".concat(e.name," \u7684\u8be6\u60c5\u5417\uff1f")}],[12,function(){return"\u786e\u5b9a\u5220\u9664\u5417\uff1f"}],[13,function(e){return"\u786e\u5b9a\u8ba9 ".concat(e.name," \u51fa\u5916\u52a1\u5417\uff1f")}],14]};return V.a.createElement(x["Curd"],u()({modelName:_["modelName"]},this.props),V.a.createElement(x["Curd"].QueryPanel,{queryArgsConfig:this.queryArgsConfig}),V.a.createElement(x["Curd"].CurdTable,u()({columns:this.columns,actionsConfig:n,setFormItemsConfig:R,popupType:"drawer",popupProps:{drawerConfig:{width:560}},operators:[V.a.createElement(z,{key:"more",selectedRows:l})],selectedRows:l,onSelectRow:function(t){return e.setState({selectedRows:t})}},this.props)),V.a.createElement(J,{title:"\u5f39\u51fa\u5b50\u7ec4\u4ef6",visible:a,onCancel:function(){return e.setState({customModelVisible:!1})},okButtonProps:{style:{display:"none"}}}))}}]),t}(E["PureComponent"]),L=S))||L);t["default"]=q;function z(e){var t=e.selectedRows,a=V.a.createElement(s["default"],null,V.a.createElement(s["default"].Item,{key:"remove"},"\u5220\u9664"),V.a.createElement(s["default"].Item,{key:"approval"},"\u6279\u91cf\u5ba1\u6279"));return t.length>0&&V.a.createElement("span",null,V.a.createElement(d["default"],null,"\u6279\u91cf\u64cd\u4f5c"),V.a.createElement(i["default"],{overlay:a},V.a.createElement(d["default"],null,"\u66f4\u591a\u64cd\u4f5c ",V.a.createElement(o["default"],{type:"down"}))))}function J(e){var t=e.__curd__,a=r()(e,["__curd__"]);return t?V.a.createElement(l["default"],a,V.a.createElement(d["default"],{onClick:function(){t.handleSearch(),a.onCancel()}},"\u91cd\u65b0\u641c\u7d22")):null}}}]);