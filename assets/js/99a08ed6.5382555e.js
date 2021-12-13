"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[3563],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5485:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(4137)),i=["components"],s={id:"question_style_help_your_user",title:"Help your user",sidebar_label:"Help your user",slug:"/style_guide/question_help_your_user"},l=void 0,u={unversionedId:"question_style_help_your_user",id:"question_style_help_your_user",isDocsHomePage:!1,title:"Help your user",description:"Provide help information in context",source:"@site/docs/question_style_help_your_user.md",sourceDirName:".",slug:"/style_guide/question_help_your_user",permalink:"/docs/style_guide/question_help_your_user",editUrl:"https://github.com/plocket/docassemble-AssemblyLine-documentation/edit/main/docs/question_style_help_your_user.md",tags:[],version:"current",frontMatter:{id:"question_style_help_your_user",title:"Help your user",sidebar_label:"Help your user",slug:"/style_guide/question_help_your_user"},sidebar:"someSidebar",previous:{title:"Structuring your interview",permalink:"/docs/style_guide/question_structure"},next:{title:"Organize fields thoughtfully",permalink:"/docs/style_guide/question_style_organize_fields"}},d=[{value:"Provide help information in context",id:"provide-help-information-in-context",children:[],level:2},{value:"Use videos and diagrams",id:"use-videos-and-diagrams",children:[],level:2},{value:"Keep page content short and actionable",id:"keep-page-content-short-and-actionable",children:[],level:2},{value:"Ask questions your user can answer",id:"ask-questions-your-user-can-answer",children:[],level:2},{value:"Answer questions for your user when you can",id:"answer-questions-for-your-user-when-you-can",children:[],level:2},{value:"Provide graceful &quot;I do not know&quot; options when possible",id:"provide-graceful-i-do-not-know-options-when-possible",children:[],level:2},{value:"Show your user all of the information that they need to make the correct choice",id:"show-your-user-all-of-the-information-that-they-need-to-make-the-correct-choice",children:[],level:2},{value:"Use validation and helpful error messages",id:"use-validation-and-helpful-error-messages",children:[],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"provide-help-information-in-context"},"Provide help information in context"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/coding_style_guide/yaml_interface#adding-help-in-context"},"help options"),"\nthat your interview platform offers. Not all users will need the same help.\nToo much information on screen can be confusing."),(0,a.kt)("p",null,"A good pattern to provide help that users can show or hide as-needed is a\ncollapsible accordion-style input. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"collapse_template()")," function to\nprovide help when you use the Assembly Line framework."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Like this"),(0,a.kt)("p",null,"Context-specific help goes here.")),(0,a.kt)("p",null,"Use clear headings, labels, and information typed out in the main area of\neach screen for information that every user of the form will need."),(0,a.kt)("p",null,"For longer help content, use links."),(0,a.kt)("h2",{id:"use-videos-and-diagrams"},"Use videos and diagrams"),(0,a.kt)("p",null,"Diagrams and videos can explain information much more clearly than text:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"use short (2-3 minute) videos to provide an optional overview of a topic"),(0,a.kt)("li",{parentName:"ol"},"use diagrams to help users locate information on paper forms"),(0,a.kt)("li",{parentName:"ol"},"make use of timelines, charts, and similar visual aids if needed to help a\nuser understand a larger process")),(0,a.kt)("h2",{id:"keep-page-content-short-and-actionable"},"Keep page content short and actionable"),(0,a.kt)("p",null,"A guided interview is ",(0,a.kt)("strong",{parentName:"p"},"not")," an appropriate place to educate your user\nabout the law. They came to your website with a specific mission: to\ncomplete a form. Link to a website with additional context if needed."),(0,a.kt)("p",null,"Use short, actionable text on screen wherever possible."),(0,a.kt)("p",null,"A rule of thumb is to have no more than 1-2 sentences of explanation\non most screens along with the individual form fields. Many screens\nwill not require any explanation."),(0,a.kt)("h2",{id:"ask-questions-your-user-can-answer"},"Ask questions your user can answer"),(0,a.kt)("p",null,"Questions with a limited number of choices are easier than open ended ones.\nSeveral short questions are easier to answer than 1 long question."),(0,a.kt)("p",null,"Do your best to allow your user to continue without:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"typing information from a document"),(0,a.kt)("li",{parentName:"ol"},"asking someone for information"),(0,a.kt)("li",{parentName:"ol"},"performing a calculation")),(0,a.kt)("p",null,"At best, these questions will annoy and slow down your user. At worst,\nyour user may give up when asked to get information that is not\nalready in their head."),(0,a.kt)("h2",{id:"answer-questions-for-your-user-when-you-can"},"Answer questions for your user when you can"),(0,a.kt)("p",null,"For example, computers can very easily:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'figure out what day "today" is'),(0,a.kt)("li",{parentName:"ol"},"do math"),(0,a.kt)("li",{parentName:"ol"},"add and subtract dates to determine deadlines"),(0,a.kt)("li",{parentName:"ol"},"count items in a list")),(0,a.kt)("p",null,"While a paper form may leave a blank space for the information listed above,\nyour application should save your user from this effort."),(0,a.kt)("h2",{id:"provide-graceful-i-do-not-know-options-when-possible"},'Provide graceful "I do not know" options when possible'),(0,a.kt)("p",null,"Paper forms are flexible in this way. If a form asks for a date, like a\nbirthdate, the user can write in an estimate. Your interview should provide that\nflexibility. Show a date input. If the user may not know the date, provide a\ncheckbox that allows the user to write in a longhand description of the date\ninstead (e.g. 'last summer')."),(0,a.kt)("p",null,'When you give the user a list of options that requires them to make a choice,\ngive an "I do not know" choice among the options if you can.. Make sure your\nform can deal with that uncertainty with an appropriate and safe default.'),(0,a.kt)("h2",{id:"show-your-user-all-of-the-information-that-they-need-to-make-the-correct-choice"},"Show your user all of the information that they need to make the correct choice"),(0,a.kt)("p",null,'Use the order of questions and the set of fields that is visible on the screen\nto guide your user to make correct choices. For example: if you ask your user to\ndescribe what happened, and then you have a follow-up question to describe how\nthey were harmed by what happened, it would be annoying to your user to have\nalready answered the "harm" question in the more general response and then have\nto re-write their response.'),(0,a.kt)("h2",{id:"use-validation-and-helpful-error-messages"},"Use validation and helpful error messages"),(0,a.kt)("p",null,"Use input validation to format fields that require formatted\ndata with strict rules."),(0,a.kt)("p",null,"Use helpful error messages when users get information wrong."),(0,a.kt)("p",null,"But:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"do not apply validation to fields if there is a chance that your\nvalidation is too strict or that the validation rules may change.")),(0,a.kt)("p",null,"Instead, you may just want to provide help text that suggests\nhow the user should fill the field."),(0,a.kt)("p",null,"For example, allow space for the user to provide information like phone numbers\nand addreses that are from a different country."))}p.isMDXComponent=!0}}]);