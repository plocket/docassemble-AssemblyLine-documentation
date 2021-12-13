"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[1419],{4137:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return u}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),m=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=m(e.components);return t.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,k=d["".concat(o,".").concat(u)]||d[u]||p[u]||l;return n?t.createElement(k,i(i({ref:a},c),{},{components:n})):t.createElement(k,i({ref:a},c))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<l;m++)i[m]=n[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2234:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return c},default:function(){return d}});var t=n(7462),r=n(3366),l=(n(7294),n(4137)),i=["components"],s={id:"name_formats",title:"Name formats",sidebar_label:"Name formats",slug:"/naming"},o=void 0,m={unversionedId:"name_formats",id:"name_formats",isDocsHomePage:!1,title:"Name formats",description:"In programming languages (and sometimes in computer files and names in general),",source:"@site/docs/name_formats.md",sourceDirName:".",slug:"/naming",permalink:"/docs/naming",editUrl:"https://github.com/plocket/docassemble-AssemblyLine-documentation/edit/main/docs/name_formats.md",tags:[],version:"current",frontMatter:{id:"name_formats",title:"Name formats",sidebar_label:"Name formats",slug:"/naming"}},c=[{value:"Types of Naming Conventions",id:"types-of-naming-conventions",children:[{value:"snake_case",id:"snake_case",children:[],level:3},{value:"kebab-case",id:"kebab-case",children:[],level:3},{value:"PascalCase",id:"pascalcase",children:[],level:3}],level:2},{value:"Uses of Naming Conventions",id:"uses-of-naming-conventions",children:[{value:"Form Files stored in docassemble: snake_case",id:"form-files-stored-in-docassemble-snake_case",children:[],level:3},{value:"Downloadable documents: kebab-case",id:"downloadable-documents-kebab-case",children:[],level:3},{value:"Other files stored in docassemble: snake_case",id:"other-files-stored-in-docassemble-snake_case",children:[],level:3},{value:"PDF variables:  snake_case",id:"pdf-variables--snake_case",children:[],level:3},{value:"Code variables: snake_case mostly",id:"code-variables-snake_case-mostly",children:[{value:"snake_case",id:"snake_case-1",children:[],level:4},{value:"PascalCase",id:"pascalcase-1",children:[],level:4}],level:3},{value:"Docassemble Projects and Packages: PascalCase",id:"docassemble-projects-and-packages-pascalcase",children:[],level:3}],level:2},{value:"Definitions",id:"definitions",children:[{value:"Alphanumeric",id:"alphanumeric",children:[],level:3}],level:2},{value:"Other resources",id:"other-resources",children:[],level:2}],p={toc:c};function d(e){var a=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In programming languages (and sometimes in computer files and names in general),\nthere are a lot of different rules that could be used to name different things like files\nand variables. When working in a large team, choosing consistent conventions for naming these\nthings makes reading and writing code easier. At the AssemblyLine project, we've settled on\nseveral conventions:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#snake_case"},(0,l.kt)("inlineCode",{parentName:"a"},"snake_case"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#kebab_case"},(0,l.kt)("inlineCode",{parentName:"a"},"kebab-case"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#pascalcase"},(0,l.kt)("inlineCode",{parentName:"a"},"PascalCase")))),(0,l.kt)("h2",{id:"types-of-naming-conventions"},"Types of Naming Conventions"),(0,l.kt)("h3",{id:"snake_case"},"snake_case"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start with a letter, not a digit"),(0,l.kt)("li",{parentName:"ul"},"Separate words with underscores (",(0,l.kt)("inlineCode",{parentName:"li"},"_"),") instead of spaces"),(0,l.kt)("li",{parentName:"ul"},"All other characters are either 0 to 9 or lowercase a to z (",(0,l.kt)("a",{parentName:"li",href:"#alphanumeric"},"alphanumeric"),")")),(0,l.kt)("p",null,"Some examples: ",(0,l.kt)("inlineCode",{parentName:"p"},"number_of_people"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"issue_12_address"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"protective_order.pdf")),(0,l.kt)("h3",{id:"kebab-case"},"kebab-case"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start with a letter, not a digit"),(0,l.kt)("li",{parentName:"ul"},"Separate words with dashes (",(0,l.kt)("inlineCode",{parentName:"li"},"-"),") instead of spaces"),(0,l.kt)("li",{parentName:"ul"},"All other characters are either 0 to 9 or lowercase a to z (",(0,l.kt)("a",{parentName:"li",href:"#alphanumeric"},"alphanumeric"),")")),(0,l.kt)("p",null,"Some examples: ",(0,l.kt)("inlineCode",{parentName:"p"},"protective-order.yml")),(0,l.kt)("h3",{id:"pascalcase"},"PascalCase"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start with a letter, not a digit"),(0,l.kt)("li",{parentName:"ul"},"Each word starts with an uppercase letter"),(0,l.kt)("li",{parentName:"ul"},"All the words are squished together"),(0,l.kt)("li",{parentName:"ul"},"All characters are either 0 to 9 or a to z (",(0,l.kt)("a",{parentName:"li",href:"#alphanumeric"},"alphanumeric"),")")),(0,l.kt)("p",null,"Some examples: ",(0,l.kt)("inlineCode",{parentName:"p"},"ProtectiveOrder"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ProtectiveOrderRemoveAddress")),(0,l.kt)("h2",{id:"uses-of-naming-conventions"},"Uses of Naming Conventions"),(0,l.kt)("h3",{id:"form-files-stored-in-docassemble-snake_case"},"Form Files stored in docassemble: ",(0,l.kt)("a",{parentName:"h3",href:"#snake_case"},"snake_case")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Makes it clear to lawyers, and we can use the file name as a variable name as well."),(0,l.kt)("li",{parentName:"ul"},"Avoid using the section numbers of the law unless they are the common name of the form.  "),(0,l.kt)("li",{parentName:"ul"},"Include at least one descriptive term.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example: use ",(0,l.kt)("inlineCode",{parentName:"li"},"protective_order_209A.pdf"),', even if attorneys call it "209A".'))),(0,l.kt)("li",{parentName:"ul"},"Avoid adding suffixes or information about the progress of the form at the end of the file. For example, use ",(0,l.kt)("inlineCode",{parentName:"li"},"protective_order.pdf")," over ",(0,l.kt)("inlineCode",{parentName:"li"},"protective_order_processed.pdf")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"protective_order_reviewed.pdf"),"."),(0,l.kt)("li",{parentName:"ul"},"In all other ways, use the common name of the form - the name attorneys know it by.")),(0,l.kt)("h3",{id:"downloadable-documents-kebab-case"},"Downloadable documents: ",(0,l.kt)("a",{parentName:"h3",href:"#kebab_case"},"kebab-case")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We use dashes (",(0,l.kt)("inlineCode",{parentName:"li"},"-"),") because underscores (",(0,l.kt)("inlineCode",{parentName:"li"},"_"),") can be hard to see in file names, especially if the text is underlined."),(0,l.kt)("li",{parentName:"ul"},"Exactly the same as ",(0,l.kt)("a",{parentName:"li",href:"#form-files-stored-in-docassemble-snake_case"},"the docassemble form name")," in all other ways.")),(0,l.kt)("h3",{id:"other-files-stored-in-docassemble-snake_case"},"Other files stored in docassemble: ",(0,l.kt)("a",{parentName:"h3",href:"#snake_case"},"snake_case")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"snake_case")," is a common convention and is clear to developers")),(0,l.kt)("h3",{id:"pdf-variables--snake_case"},"PDF variables:  ",(0,l.kt)("a",{parentName:"h3",href:"#snake_case"},"snake_case")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Each label name must be unique. See how to ",(0,l.kt)("a",{parentName:"li",href:"/docs/label_variables#print-a-value-in-multiple-places"},"ensure uniqueness while still creating fields that display the same value"),"."),(0,l.kt)("li",{parentName:"ul"},"Meets PDF or DOCX requirements"),(0,l.kt)("li",{parentName:"ul"},"Is consistent with AssemblyLine conventions (which will help you!). See more details about ",(0,l.kt)("a",{parentName:"li",href:"/docs/label_variables"},"labels' variable names in documents"),".")),(0,l.kt)("h3",{id:"code-variables-snake_case-mostly"},"Code variables: ",(0,l.kt)("a",{parentName:"h3",href:"#snake_case"},"snake_case")," mostly"),(0,l.kt)("p",null,"Naming variables is hard, but good code variables are clear and short, in that order."),(0,l.kt)("h4",{id:"snake_case-1"},(0,l.kt)("a",{parentName:"h4",href:"#snake_case"},(0,l.kt)("inlineCode",{parentName:"a"},"snake_case"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Regular variable names (",(0,l.kt)("inlineCode",{parentName:"li"},"reason_for_appeal"),")"),(0,l.kt)("li",{parentName:"ul"},"Objects (",(0,l.kt)("inlineCode",{parentName:"li"},"judges"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"other_parties"),")"),(0,l.kt)("li",{parentName:"ul"},"Methods of classes (",(0,l.kt)("inlineCode",{parentName:"li"},"template.get_pdf_fields()"),")")),(0,l.kt)("h4",{id:"pascalcase-1"},(0,l.kt)("a",{parentName:"h4",href:"#pascalcase"},(0,l.kt)("inlineCode",{parentName:"a"},"PascalCase"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Classes (",(0,l.kt)("inlineCode",{parentName:"li"},"PlaygroundSection"),")")),(0,l.kt)("p",null,"Variable names should read close to natural English out loud. Avoid putting the type of the variable in its name, sometimes called hungarian notation:\nfor example, using ",(0,l.kt)("inlineCode",{parentName:"p"},"is_parent_bool")," to indicate a boolean, or ",(0,l.kt)("inlineCode",{parentName:"p"},"children_list")," indicating a list."),(0,l.kt)("p",null,"Adding extra information into the variable name does help make things more clear, for example, ",(0,l.kt)("inlineCode",{parentName:"p"},"got_notice_date"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"plaintiff_email"),". But this is helpful because we're describing the purpose of the variable, not it's type. Our ",(0,l.kt)("a",{parentName:"p",href:"/docs/label_variables"},"conventions for our PDF and DOCX variables")," has some good examples."),(0,l.kt)("p",null,"For a boolean value, use a word or phrase that you can answer with yes or no. They are often verb-noun pairs. ",(0,l.kt)("inlineCode",{parentName:"p"},"has_")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"is_")," can be useful. ",(0,l.kt)("strong",{parentName:"p"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"is_minor"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"was_convicted"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"has_court_date"),"."),(0,l.kt)("p",null,"Use a plural word for a list of things, and a singular word for one thing. ",(0,l.kt)("strong",{parentName:"p"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"children"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"child")),(0,l.kt)("h3",{id:"docassemble-projects-and-packages-pascalcase"},"Docassemble Projects and Packages: ",(0,l.kt)("a",{parentName:"h3",href:"#pascalcase"},"PascalCase")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Each Project has to have a unique name, different from all other Project names."),(0,l.kt)("li",{parentName:"ul"},"Your Package name doesn't have to be the same as your Project name. A Package's name should be the name of the form for which you are making the interview, but using ",(0,l.kt)("a",{parentName:"li",href:"#pascalcase"},"PascalCase"),".")),(0,l.kt)("h2",{id:"definitions"},"Definitions"),(0,l.kt)("h3",{id:"alphanumeric"},"Alphanumeric"),(0,l.kt)("p",null,"A string that is alphanumeric has only digits 0 to 9 and the letters A to Z in it. The letters can be lowercase or uppercase."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Yes:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"A")," ",(0,l.kt)("inlineCode",{parentName:"p"},"b")," ",(0,l.kt)("inlineCode",{parentName:"p"},"12")," ",(0,l.kt)("inlineCode",{parentName:"p"},"ab12")," ",(0,l.kt)("inlineCode",{parentName:"p"},"CZ")," ",(0,l.kt)("inlineCode",{parentName:"p"},"5")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"No:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"A!")," ",(0,l.kt)("inlineCode",{parentName:"p"},"(b)")," ",(0,l.kt)("inlineCode",{parentName:"p"},"ab 12")," ",(0,l.kt)("inlineCode",{parentName:"p"},"$12")," ",(0,l.kt)("inlineCode",{parentName:"p"},'"CZ"')," ",(0,l.kt)("inlineCode",{parentName:"p"},"0.5")),(0,l.kt)("h2",{id:"other-resources"},"Other resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Naming_convention_%28programming%29#Examples_of_multiple-word_identifier_formats"},"Different ways to name variables"))))}d.isMDXComponent=!0}}]);