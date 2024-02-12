"use strict";(self.webpackChunknextjs_typescript_pandacss_storybook=self.webpackChunknextjs_typescript_pandacss_storybook||[]).push([[127],{"./src/components/Button/IconButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MdOutlineThumbUpAltIcon:()=>MdOutlineThumbUpAltIcon,MdUserIcon:()=>MdUserIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>IconButton_stories});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),index_react_client=__webpack_require__("./node_modules/next-intl/dist/production/index.react-client.js"),md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),styles={button:(0,__webpack_require__("./styled-system/css/index.mjs").jS)({base:{cursor:"pointer",whiteSpace:"nowrap",_disabled:{opacity:.7,pointerEvents:"none"},display:"flex",alignItems:"center",justifyContent:"center",color:{base:"icon",_hover:"icon.hover"}},variants:{size:{sm:{rounded:"sm",fontSize:"2rem",width:"2rem",height:"2rem"},md:{rounded:"md",fontSize:"2.4rem",width:"2.4rem",height:"2.4rem"},lg:{rounded:"lg",fontSize:"2.8rem",width:"2.8rem",height:"2.8rem"},xl:{rounded:"xl",fontSize:"3.2rem",width:"3.2rem",height:"3.2rem"}}},defaultVariants:{size:"md"}})},_excluded=["Icon","size","disabled","loading"],__jsx=react.createElement,IconButton=react.forwardRef((function(_ref,ref){var Icon=_ref.Icon,size=_ref.size,disabled=_ref.disabled,loading=_ref.loading,rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx("button",(0,esm_extends.Z)({ref,disabled:disabled||loading},rest,{className:styles.button({size})}),__jsx(Icon,null))}));IconButton.displayName="IconButton";try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"Icon button. You should avoid to use this button if users can\nnot know what will occure by clicking the icon. We should not\nuse tooltips for describing the icon since smartphones or screen\nreaders might not be able to find the tooltip.",displayName:"IconButton",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!0,type:{name:"string"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!0,type:{name:"IconType"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/Button/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}var IconButton_stories_excluded=["color","size","Icon","onClick"],IconButton_stories_jsx=react.createElement,IconButtonWithIntl=function IconButtonWithIntl(_ref){var _rest$ariaLabel,color=_ref.color,size=_ref.size,Icon=_ref.Icon,onClick=_ref.onClick,rest=(0,objectWithoutProperties.Z)(_ref,IconButton_stories_excluded),t=(0,index_react_client.useTranslations)();return IconButton_stories_jsx(IconButton,{color,size,"aria-label":t(null!==(_rest$ariaLabel=rest["aria-label"])&&void 0!==_rest$ariaLabel?_rest$ariaLabel:""),Icon,onClick})};IconButtonWithIntl.displayName="IconButtonWithIntl";const IconButton_stories={title:"components/IconButton",component:IconButtonWithIntl,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg","xl"]}}};var MdUserIcon={args:{size:"md",disabled:!1,loading:!1,onClick:(0,dist.aD)("clicked"),Icon:md.Vyx,"aria-label":"Personal"}},MdOutlineThumbUpAltIcon={args:{size:"md",disabled:!1,loading:!1,onClick:(0,dist.aD)("clicked"),Icon:md.isF,"aria-label":"Good button"}};MdUserIcon.parameters={...MdUserIcon.parameters,docs:{...MdUserIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    disabled: false,\n    loading: false,\n    onClick: action("clicked"),\n    Icon: MdPerson,\n    "aria-label": "Personal"\n  }\n}',...MdUserIcon.parameters?.docs?.source}}},MdOutlineThumbUpAltIcon.parameters={...MdOutlineThumbUpAltIcon.parameters,docs:{...MdOutlineThumbUpAltIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    disabled: false,\n    loading: false,\n    onClick: action("clicked"),\n    Icon: MdOutlineThumbUpAlt,\n    "aria-label": "Good button"\n  }\n}',...MdOutlineThumbUpAltIcon.parameters?.docs?.source}}};const __namedExportsOrder=["MdUserIcon","MdOutlineThumbUpAltIcon"]}}]);