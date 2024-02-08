"use strict";(self.webpackChunknextjs_typescript_pandacss_storybook=self.webpackChunknextjs_typescript_pandacss_storybook||[]).push([[747],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),console=__webpack_require__("./node_modules/console-browserify/index.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}var index_react_client=__webpack_require__("./node_modules/next-intl/dist/production/index.react-client.js"),Spinner=__webpack_require__("./src/components/Spinner/Spinner.tsx"),css=__webpack_require__("./styled-system/css/index.mjs"),colors=function colors(color){return{bg:{base:color,_hover:"".concat(color,".hover"),_active:"".concat(color,".active")},color:"light"}},styles={button:(0,css.jS)({base:{cursor:"pointer",whiteSpace:"nowrap",_disabled:{opacity:.7,pointerEvents:"none"},position:"relative"},variants:{size:{md:{py:"2",px:"3",rounded:"sm"},lg:{p:"2",px:"3",rounded:"md",fontSize:"lg"}},color:{primary:colors("primary"),danger:colors("danger")}},defaultVariants:{color:"primary",size:"md"}}),label:(0,css.jS)({variants:{loading:{true:{visibility:"hidden"}}}}),spinner:(0,css.iv)({position:"absolute",inset:"0",margin:"auto",width:"fit-content",height:"full",display:"flex",justifyContent:"center",alignItems:"center"})},_excluded=["color","size","label","disabled","loading"],__jsx=react.createElement,Button=react.forwardRef((function(_ref,ref){var color=_ref.color,size=_ref.size,label=_ref.label,disabled=_ref.disabled,loading=_ref.loading,rest=_objectWithoutProperties(_ref,_excluded);return __jsx("button",(0,esm_extends.Z)({ref,disabled:loading||disabled},rest,{className:styles.button({color,size})}),loading&&__jsx("div",{className:styles.spinner},__jsx(Spinner.$,null)),__jsx("span",{className:styles.label({loading})},label))}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"danger"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var Button_stories_excluded=["color","size","label"],Button_stories_jsx=react.createElement,ButtonWithIntl=function ButtonWithIntl(_ref){var color=_ref.color,size=_ref.size,label=_ref.label,rest=_objectWithoutProperties(_ref,Button_stories_excluded),t=(0,index_react_client.useTranslations)();return Button_stories_jsx(Button,(0,esm_extends.Z)({color,size,label:t(label)},rest))};ButtonWithIntl.displayName="ButtonWithIntl";const Button_stories={title:"components/Button",component:ButtonWithIntl,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:["primary","danger"]},size:{control:"select",options:["md","lg"]}}};var Primary={args:{color:"primary",size:"md",label:"hello",disabled:!1,loading:!1,onClick:action("clicked")}},Danger={args:{color:"danger",size:"md",label:"hello",disabled:!1,loading:!1,onClick:action("clicked")}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    color: "primary",\n    size: "md",\n    label: "hello",\n    disabled: false,\n    loading: false,\n    onClick: action("clicked")\n  }\n}',...Primary.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  args: {\n    color: "danger",\n    size: "md",\n    label: "hello",\n    disabled: false,\n    loading: false,\n    onClick: action("clicked")\n  }\n}',...Danger.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Danger"]}}]);