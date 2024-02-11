"use strict";(self.webpackChunknextjs_typescript_pandacss_storybook=self.webpackChunknextjs_typescript_pandacss_storybook||[]).push([[747],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Primary:()=>Primary,PrimaryWithMdContentCopyIcon:()=>PrimaryWithMdContentCopyIcon,PrimaryWithMdDeleteIcon:()=>PrimaryWithMdDeleteIcon,PrimaryWithMdMailIcon:()=>PrimaryWithMdMailIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),index_react_client=__webpack_require__("./node_modules/next-intl/dist/production/index.react-client.js"),md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),Spinner=__webpack_require__("./src/components/Spinner/Spinner.tsx"),css=__webpack_require__("./styled-system/css/index.mjs"),colors=function colors(color){return{bg:{base:color,_hover:"".concat(color,".hover"),_active:"".concat(color,".active"),_focusVisible:"".concat(color,".hover")},color:"light"}},Button_styles_button=(0,css.jS)({base:{cursor:"pointer",whiteSpace:"nowrap",_disabled:{opacity:.7,pointerEvents:"none"},position:"relative"},variants:{size:{sm:{px:"3",rounded:"sm",fontSize:"sm",minWidth:"6rem",height:"2rem"},md:{px:"4",rounded:"md",fontSize:"md",minWidth:"8rem",height:"2.4rem"},lg:{px:"5",rounded:"lg",fontSize:"lg",minWidth:"10rem",height:"2.8rem"},xl:{px:"6",rounded:"xl",fontSize:"xl",minWidth:"12rem",height:"3.2rem"}},color:{primary:colors("primary"),danger:colors("danger")}},defaultVariants:{color:"primary",size:"md"}}),labelWrapper=(0,css.jS)({base:{display:"flex",justifyContent:"center",alignItems:"center",gap:"2"},variants:{loading:{true:{visibility:"hidden"}}}}),labelIcon=(0,css.iv)({marginTop:"0.1rem"}),styles={button:Button_styles_button,labelWrapper,spinner:(0,css.iv)({position:"absolute",inset:"0",margin:"auto",width:"fit-content",height:"full",display:"flex",justifyContent:"center",alignItems:"center"}),labelIcon},_excluded=["color","size","label","disabled","loading","Icon"],__jsx=react.createElement,Button=react.forwardRef((function(_ref,ref){var color=_ref.color,size=_ref.size,label=_ref.label,disabled=_ref.disabled,loading=_ref.loading,Icon=_ref.Icon,rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx("button",(0,esm_extends.Z)({ref,disabled:loading||disabled,"aria-disabled":loading||disabled,className:styles.button({color,size})},rest),loading&&__jsx("div",{className:styles.spinner},__jsx(Spinner.$,{size})),__jsx("div",{className:styles.labelWrapper({loading})},Icon&&__jsx(Icon,{"aria-hidden":"true",className:styles.labelIcon}),__jsx("span",null,label)))}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"danger"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"IconType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var Button_stories_excluded=["color","size","label"],Button_stories_jsx=react.createElement,ButtonWithIntl=function ButtonWithIntl(_ref){var color=_ref.color,size=_ref.size,label=_ref.label,rest=(0,objectWithoutProperties.Z)(_ref,Button_stories_excluded),t=(0,index_react_client.useTranslations)();return Button_stories_jsx(Button,(0,esm_extends.Z)({color,size,label:t(label)},rest))};ButtonWithIntl.displayName="ButtonWithIntl";const Button_stories={title:"components/Button",component:ButtonWithIntl,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:["primary","danger"]},size:{control:"select",options:["sm","md","lg","xl"]}}};var Primary={args:{color:"primary",size:"md",label:"hello",disabled:!1,loading:!1,onClick:(0,dist.aD)("clicked")}},Danger={args:{color:"danger",size:"md",label:"hello",disabled:!1,loading:!1,onClick:(0,dist.aD)("clicked")}},PrimaryWithMdMailIcon={args:{color:"primary",size:"md",label:"Send",disabled:!1,loading:!1,onClick:(0,dist.aD)("clicked"),Icon:md.ixJ}},PrimaryWithMdContentCopyIcon={args:{color:"primary",size:"md",label:"Copy",disabled:!1,loading:!1,onClick:(0,dist.aD)("clicked"),Icon:md.Fqs}},PrimaryWithMdDeleteIcon={args:{color:"primary",size:"md",label:"Delete",disabled:!1,loading:!1,onClick:(0,dist.aD)("clicked"),Icon:md.ZkW}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    color: "primary",\n    size: "md",\n    label: "hello",\n    disabled: false,\n    loading: false,\n    onClick: action("clicked")\n  }\n}',...Primary.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  args: {\n    color: "danger",\n    size: "md",\n    label: "hello",\n    disabled: false,\n    loading: false,\n    onClick: action("clicked")\n  }\n}',...Danger.parameters?.docs?.source}}},PrimaryWithMdMailIcon.parameters={...PrimaryWithMdMailIcon.parameters,docs:{...PrimaryWithMdMailIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    color: "primary",\n    size: "md",\n    label: "Send",\n    disabled: false,\n    loading: false,\n    onClick: action("clicked"),\n    Icon: MdEmail\n  }\n}',...PrimaryWithMdMailIcon.parameters?.docs?.source}}},PrimaryWithMdContentCopyIcon.parameters={...PrimaryWithMdContentCopyIcon.parameters,docs:{...PrimaryWithMdContentCopyIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    color: "primary",\n    size: "md",\n    label: "Copy",\n    disabled: false,\n    loading: false,\n    onClick: action("clicked"),\n    Icon: MdContentCopy\n  }\n}',...PrimaryWithMdContentCopyIcon.parameters?.docs?.source}}},PrimaryWithMdDeleteIcon.parameters={...PrimaryWithMdDeleteIcon.parameters,docs:{...PrimaryWithMdDeleteIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    color: "primary",\n    size: "md",\n    label: "Delete",\n    disabled: false,\n    loading: false,\n    onClick: action("clicked"),\n    Icon: MdDelete\n  }\n}',...PrimaryWithMdDeleteIcon.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Danger","PrimaryWithMdMailIcon","PrimaryWithMdContentCopyIcon","PrimaryWithMdDeleteIcon"]}}]);