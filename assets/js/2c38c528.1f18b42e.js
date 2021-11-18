"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[79],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6052:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(7462),o=n(3366),l=(n(7294),n(4137)),i=["components"],r={id:"altoolbox",title:"ALToolbox functions and components\n",sidebar_label:"ALToolbox functions and components",slug:"/framework/altoolbox"},s=void 0,p={unversionedId:"framework/altoolbox",id:"framework/altoolbox",isDocsHomePage:!1,title:"ALToolbox functions and components\n",description:"The functions and classes listed on this page can be used without the Assembly",source:"@site/docs/framework/altoolbox.md",sourceDirName:"framework",slug:"/framework/altoolbox",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/altoolbox",editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/framework/altoolbox.md",tags:[],version:"current",frontMatter:{id:"altoolbox",title:"ALToolbox functions and components\n",sidebar_label:"ALToolbox functions and components",slug:"/framework/altoolbox"},sidebar:"someSidebar",previous:{title:"Feature Documentation",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/overview"},next:{title:"ALGeneral: Python Classes representing people\n",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/algeneral"}},u=[{value:"Collapsible help text",id:"collapsible-help-text",children:[],level:2},{value:"Display a series of tabs",id:"display-a-series-of-tabs",children:[],level:2},{value:"Format telephone numbers as clickable links",id:"format-telephone-numbers-as-clickable-links",children:[],level:2},{value:"Shorten a URL",id:"shorten-a-url",children:[],level:2},{value:"Format numbers with a <code>thousands</code> separator",id:"format-numbers-with-a-thousands-separator",children:[],level:2},{value:"Display a fontawesome icon inline",id:"display-a-fontawesome-icon-inline",children:[],level:2},{value:"Total a list of values that may not be defined",id:"total-a-list-of-values-that-may-not-be-defined",children:[],level:2},{value:"Provide a button that allows a user to copy text to the clipboard",id:"provide-a-button-that-allows-a-user-to-copy-text-to-the-clipboard",children:[],level:2}],m={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The functions and classes listed on this page can be used without the Assembly\nLine framework. Follow the instructions to include each component in your\ninterview, which may involve including a single YAML file or a module, CSS, and\nJavaScript file."),(0,l.kt)("h2",{id:"collapsible-help-text"},"Collapsible help text"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"collapse_template()")," to display an accordion-style information box that\nstarts out hidden but expands when the user clicks on it. The contents of the\ninformation box come from a Docassemble ",(0,l.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/initial.html#template"},(0,l.kt)("inlineCode",{parentName:"a"},"template"),"\nblock"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"subject")," will\ndisplay with an arrow, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"content")," of the template will be shown when the\n",(0,l.kt)("inlineCode",{parentName:"p"},"subject")," is clicked on."),(0,l.kt)("p",null,"We ",(0,l.kt)("a",{parentName:"p",href:"/docassemble-AssemblyLine-documentation/docs/style_guide/question_help_your_user#provide-help-information-in-context"},"recommend using this for help\ntext")," in\nyour interviews."),(0,l.kt)("p",null,"It works a lot like this ",(0,l.kt)("inlineCode",{parentName:"p"},"details")," element:"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Like this"),(0,l.kt)("p",null,"Context-specific help goes here.")),(0,l.kt)("p",null,"To include this in your interview:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmodules:\n  - docassemble.ALToolbox.misc\n---\nfeatures:\n  css: docassemble.ALToolbox:collapse_template.css\n")),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: example question\nquestion: |\n  What is your favorite fruit?\nsubquestion: |\n  ${ fruit_explanation }\n---\ntemplate: fruit_explanation\nsubject: |\n  Like this\ncontent: |\n  Context-specific help goes here.\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/misc.py"},"Code for ",(0,l.kt)("inlineCode",{parentName:"a"},"collapse_template"))),(0,l.kt)("h2",{id:"display-a-series-of-tabs"},"Display a series of tabs"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tabbed_templates_html()")," displays a series of Docassemble\n",(0,l.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/initial.html#template"},(0,l.kt)("inlineCode",{parentName:"a"},"template"),"s")," with Bootstrap\ntabs."),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"tabbed_templates_html('unique_name_of_tab_group', tab_template1, tab_template2)"),"."),(0,l.kt)("p",null,"Include this in your interview:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmodules:\n  - docassemble.ALToolbox.misc\n")),(0,l.kt)("h2",{id:"format-telephone-numbers-as-clickable-links"},"Format telephone numbers as clickable links"),(0,l.kt)("p",null,"This ",(0,l.kt)("inlineCode",{parentName:"p"},"tel")," function just makes a string representing a telephone number\nclickable, which opens the dialer on mobile."),(0,l.kt)("p",null,"For example: ",(0,l.kt)("inlineCode",{parentName:"p"},"tel('617-555-5555')")),(0,l.kt)("p",null,"Include this in your interview:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmodules:\n  - docassemble.ALToolbox.misc\n")),(0,l.kt)("h2",{id:"shorten-a-url"},"Shorten a URL"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"shorten_url")," function lets you use your Docassemble server as a URL\nshortener."),(0,l.kt)("p",null,"The function has one parameter: ",(0,l.kt)("inlineCode",{parentName:"p"},"original_url")," and can be called like this:\n",(0,l.kt)("inlineCode",{parentName:"p"},"shorten_url('https://www.example.com')"),"."),(0,l.kt)("p",null,"Links expire in 7 days, and can be to either internal or external content.\nThe URL will still display your server's domain name, and will look like this:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://my.docassemble-server.com/goto?c=aRjzWcNZyJGWnMQghHamcndEnVKfhNwo")),(0,l.kt)("p",null,"Include this in your interview:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmodules:\n  - docassemble.ALToolbox.misc\n")),(0,l.kt)("h2",{id:"format-numbers-with-a-thousands-separator"},"Format numbers with a ",(0,l.kt)("inlineCode",{parentName:"h2"},"thousands")," separator"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"thousands()")," function to format a ",(0,l.kt)("inlineCode",{parentName:"p"},"currency")," value without adding a\ncurrency symbol but with ",(0,l.kt)("inlineCode",{parentName:"p"},",")," separating the thousands positions. The decimal\nportion is also rounded down. For example, for a PDF form that already includes\na ",(0,l.kt)("inlineCode",{parentName:"p"},"$")," symbol. "),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"thousands(1870.22)")," will display as ",(0,l.kt)("inlineCode",{parentName:"p"},"1,870"),"."),(0,l.kt)("p",null,"To use, include this in your interview:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmodules:\n  - docassemble.ALToolbox.misc\n")),(0,l.kt)("h2",{id:"display-a-fontawesome-icon-inline"},"Display a fontawesome icon inline"),(0,l.kt)("p",null,"Docassemble allows you to display an icon from ",(0,l.kt)("a",{parentName:"p",href:"https://fontawesome.com/"},"fontawesome"),",\nbut it does not provide control over the size or color of the icon. Use\n",(0,l.kt)("inlineCode",{parentName:"p"},"fa_icon()")," to gain more control over the icon that is inserted."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"icon"),": a string representing a fontawesome icon. The icon needs to be in the free library."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"color")," can be any ",(0,l.kt)("a",{parentName:"li",href:"https://getbootstrap.com/docs/4.0/utilities/colors/"},"Bootstrap color variable"),". For example: ",(0,l.kt)("inlineCode",{parentName:"li"},"primary"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"secondary"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"warning")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"color_css")," allows you to use a CSS hex code to represent the color, e.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"#fff")," for black."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"size")," is used to control the ",(0,l.kt)("a",{parentName:"li",href:"https://fontawesome.com/v6.0/docs/web/style/size"},"fontawesome size")," (without the ",(0,l.kt)("inlineCode",{parentName:"li"},"fa-")," prefix). Valid values include ",(0,l.kt)("inlineCode",{parentName:"li"},"2xs"),", the default of ",(0,l.kt)("inlineCode",{parentName:"li"},"sm")," all the way to ",(0,l.kt)("inlineCode",{parentName:"li"},"2xl"),".")),(0,l.kt)("h2",{id:"total-a-list-of-values-that-may-not-be-defined"},"Total a list of values that may not be defined"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sum_if_defined()")," returns the total of a list of values that may or may not be\ndefined. Each variable's name should be passed as a string as a separate\nparameter."),(0,l.kt)("p",null,"Use it like this:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sum_if_defined('value1', 'value2', 'value3')"),". Using ",(0,l.kt)("inlineCode",{parentName:"p"},"sum_if_defined()")," will\nnot error if any of the values are undefined. If no value is defined,\n",(0,l.kt)("inlineCode",{parentName:"p"},"sum_if_defined()")," will return ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,l.kt)("p",null,"It is usually a better pattern to put the values into a list and use the\nbuilt-in Python function\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/functions.html#sum"},(0,l.kt)("inlineCode",{parentName:"a"},"sum")),", but this provides\nan alternative that may require less effort depending on how your form is\nlabeled."),(0,l.kt)("h2",{id:"provide-a-button-that-allows-a-user-to-copy-text-to-the-clipboard"},"Provide a button that allows a user to copy text to the clipboard"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"copy_button_html()")," to display an HTML input with a button\nthat allows the user to copy the text to their device's clipboard."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text_to_copy"),": text you want the user to be able to copy."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text_before"),": the prompt that will appear to the left of the HTML input"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"label"),': defaults to "Copy"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tooltip_inert_text"),': defaults to "Copy to clipboard" when hovered over'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tooltip_copied_text"),': defaults to "Copied!" when the text is placed on the clipboard')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"include:\n  - docassemble.ALToolbox:copy_button.yml\n")))}c.isMDXComponent=!0}}]);