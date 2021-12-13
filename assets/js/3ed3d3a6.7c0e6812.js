"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[3037],{4137:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2921:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},2390:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(7462),a=t(7294),o=t(1048),i=t(5371);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(1943),u=t(6010),d="tabItem_2kG2";function c(e){var n,t,r,o=e.lazy,i=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,s.lx)(b,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=h[0])?void 0:r.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),k=y.tabGroupChoices,w=y.setTabGroupChoices,x=(0,a.useState)(v),N=x[0],_=x[1],T=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var q=k[m];null!=q&&q!==N&&b.some((function(e){return e.value===q}))&&_(q)}var E=function(e){var n=e.currentTarget,t=T.indexOf(n),r=b[t].value;r!==N&&(O(n),_(r),null!=m&&w(m,r))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},f)},b.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,u.Z)("tabs__item",d,{"tabs__item--active":N===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:E,onClick:E},null!=t?t:n)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function p(e){var n=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},5371:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},3648:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(4137)),i=t(2390),l=t(2921),s=["components"],u={id:"ql_gender",title:"Gender",sidebar_label:"Gender",slug:"/question_library/gender"},d=void 0,c={unversionedId:"question_library/ql_gender",id:"question_library/ql_gender",isDocsHomePage:!1,title:"Gender",description:"Provide gender choices that respect identity",source:"@site/docs/question_library/gender.md",sourceDirName:"question_library",slug:"/question_library/gender",permalink:"/docs/question_library/gender",editUrl:"https://github.com/plocket/docassemble-AssemblyLine-documentation/edit/main/docs/question_library/gender.md",tags:[],version:"current",frontMatter:{id:"ql_gender",title:"Gender",sidebar_label:"Gender",slug:"/question_library/gender"},sidebar:"someSidebar",previous:{title:"Addresses",permalink:"/docs/question_library/addresses"},next:{title:"Coding Style",permalink:"/docs/coding_style_guide"}},p=[{value:"Provide gender choices that respect identity",id:"provide-gender-choices-that-respect-identity",children:[{value:"Fixing bad forms",id:"fixing-bad-forms",children:[],level:3},{value:"Adding gender fields in Docassemble",id:"adding-gender-fields-in-docassemble",children:[],level:3}],level:2}],m={toc:p};function f(e){var n=e.components,u=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,u,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"provide-gender-choices-that-respect-identity"},"Provide gender choices that respect identity"),(0,o.kt)("p",null,"The job of an automator is often to make an existing court form more accessible\nand welcoming. Gender is a topic that is often not relevant on a form, and on\nforms that require it, paper forms are often restrictive."),(0,o.kt)("p",null,"We recommend:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"asking for gender using inclusive language"),(0,o.kt)("li",{parentName:"ol"},"providing information that lets the user understand the consequences of selecting\nan inclusive option that cannot be printed on the output document")),(0,o.kt)("p",null,"The following gender options are ones that we researched and identified as\nstriking a balance of inclusivity and representative of real-world forms\nin jurisdictions that have adopted inclusive language:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Female"),(0,o.kt)("li",{parentName:"ul"},"Male"),(0,o.kt)("li",{parentName:"ul"},"Nonbinary (note spelling which is the most accepted usage, without a hyphen)"),(0,o.kt)("li",{parentName:"ul"},"Prefer to write something else"),(0,o.kt)("li",{parentName:"ul"},"Prefer not to say"),(0,o.kt)("li",{parentName:"ul"},"Unknown")),(0,o.kt)("p",null,"We also recommend including this warning language if the form does not provide a\nplace to write in an inclusive option:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Some forms require you to select either "Male" or "Female". If you do not select\n"Male" or "Female", your form may include an empty checkbox.')),(0,o.kt)("p",null,"We intentionally avoid the use of the word ",(0,o.kt)("inlineCode",{parentName:"p"},"other")," which is dehumanizing and not\ninclusive. However, some forms do use ",(0,o.kt)("inlineCode",{parentName:"p"},"other"),", and it may be appropriate to\nuse any option that is not ",(0,o.kt)("inlineCode",{parentName:"p"},"Female")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Male")," to check an ",(0,o.kt)("inlineCode",{parentName:"p"},"Other")," box, depending\non the use and value of requesting gender on the form."),(0,o.kt)("p",null,"For example: when identifying a respondent in an abuse protection order\npetition, using a gender description that matches the apparent gender of the\nrespondent is something the petitioner should consider to aid police in serving\nthe petition."),(0,o.kt)("h3",{id:"fixing-bad-forms"},"Fixing bad forms"),(0,o.kt)("p",null,"We do not hesitate to edit forms that request gender in an unhelpful way when\nthe same information could be provided in an inclusive way. We feel this\nreflects the user's options when working with a paper form."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'we remove "he/she" checkboxes when the name of the petitioner or respondent\ncould replace it.'),(0,o.kt)("li",{parentName:"ul"},"we add a space for the user's self-described gender in other circumstances")),(0,o.kt)("h3",{id:"adding-gender-fields-in-docassemble"},"Adding gender fields in Docassemble"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"sets:\n  - person.gender\nid: gender\nquestion: |\n  What is ${ person }'s gender?\nfields:\n  - code: |\n      person.gender_fields(show_help=True)\n"))),(0,o.kt)(l.Z,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nid: gender\nquestion: |\n  What is ${ person }\'s gender?\nsubquestion: |\n  **Note**: Many forms require you to specify "Female" or "Male."\n  \n  If you answer something other than "Female" or "Male", we may not be able\n  to check any box on your form. This may delay your case.\nfields:\n  - no label: person.gender\n    choices:\n      - Female: female\n      - Male: male\n      - Nonbinary: nonbinary\n      - Prefer not to say: prefer-not-to-say\n      - Prefer to write something else: self-described\n      - Unknown: unknown\n  - Gender: person.gender\n    show if:\n      variable: person.gender\n      is: "self-described"\n'))),(0,o.kt)(l.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,o.kt)("p",null,"  ",(0,o.kt)("img",{src:t(6041).Z})))))}f.isMDXComponent=!0},6041:function(e,n,t){n.Z=t.p+"assets/images/alindividual_gender_fields-d41aa025752f7e236531f026c412d12e.png"}}]);