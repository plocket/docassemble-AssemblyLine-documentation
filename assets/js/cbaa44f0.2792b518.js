"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[793],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),p=l,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||a;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6753:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var i=n(7462),l=n(3366),a=(n(7294),n(4137)),r=["components"],o={id:"docx_templates",title:"Working with DOCX files",sidebar_label:"Working with DOCX files",slug:"/docx"},s=void 0,d={unversionedId:"docx_templates",id:"docx_templates",isDocsHomePage:!1,title:"Working with DOCX files",description:"Add labels and fields",source:"@site/docs/docx_templates.md",sourceDirName:".",slug:"/docx",permalink:"/docassemble-AssemblyLine-documentation/docs/docx",editUrl:"https://github.com/plocket/docassemble-AssemblyLine-documentation/edit/main/docs/docx_templates.md",tags:[],version:"current",frontMatter:{id:"docx_templates",title:"Working with DOCX files",sidebar_label:"Working with DOCX files",slug:"/docx"},sidebar:"someSidebar",previous:{title:"Working with PDF files",permalink:"/docassemble-AssemblyLine-documentation/docs/pdfs"},next:{title:"Field labels to use in template files",permalink:"/docassemble-AssemblyLine-documentation/docs/label_variables"}},c=[{value:"Add labels and fields",id:"add-labels-and-fields",children:[],level:2},{value:"DOCX field labels are just typed in",id:"docx-field-labels-are-just-typed-in",children:[],level:2},{value:"Start with simple logic in your DOCX template",id:"start-with-simple-logic-in-your-docx-template",children:[],level:2},{value:"Use the Assembly Line&#39;s standard field names for DOCX templates",id:"use-the-assembly-lines-standard-field-names-for-docx-templates",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"add-labels-and-fields"},"Add labels and fields"),(0,a.kt)("p",null,"DOCX templates can be edited in any editor that is able to edit DOCX files, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Microsoft Word, or Microsoft Word Online"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.libreoffice.org/"},"Libre Office")),(0,a.kt)("li",{parentName:"ul"},"Google Docs")),(0,a.kt)("p",null,"Most developers should use the word processing tool that they are already familiar with.\nRarely, you may run into compatibility issues with formatting of a DOCX file when it\nis converted into a PDF. Docassemble uses Libre Office to convert DOCX files to PDF.\nTry editing the file in the free ",(0,a.kt)("a",{parentName:"p",href:"https://www.libreoffice.org/"},"Libre Office")," and get\nit looking right there if you have any PDF conversion problems."),(0,a.kt)("p",null,"While most editors should work, it is important to save the document in the DOCX\nformat."),(0,a.kt)("h2",{id:"docx-field-labels-are-just-typed-in"},"DOCX field labels are just typed in"),(0,a.kt)("p",null,"You already know how to add fields to a DOCX template: just type them in as\nordinary text. The only difference is that you type brackets ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ }}")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"{% %}"),"\nto tell Docassemble that you want to replace the field with information that\ncomes from the Docassemble interview."),(0,a.kt)("p",null,"The syntax to type in fields in a DOCX template is named ",(0,a.kt)("inlineCode",{parentName:"p"},"Jinja2"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://suffolklitlab.org/legal-tech-class/docs/jinja2"},"Learn more about Jinja2"),"\nand about ",(0,a.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/documents.html#docx%20template%20file"},"DOCX templates in Docassemble"),"."),(0,a.kt)("p",null,"Jinja2 is very powerful but you will probably only use a small number of the\nfeatures it has, like:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"adding ",(0,a.kt)("inlineCode",{parentName:"li"},"fields")," with double curly brackets: ",(0,a.kt)("inlineCode",{parentName:"li"},"{{ field_name }}")),(0,a.kt)("li",{parentName:"ol"},"adding conditional text with ",(0,a.kt)("inlineCode",{parentName:"li"},"{% if some_condition %}")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"{% endif %}"))),(0,a.kt)("h2",{id:"start-with-simple-logic-in-your-docx-template"},"Start with simple logic in your DOCX template"),(0,a.kt)("p",null,"Before you run your form through the Weaver, start out with simple logic.\nFor example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"wait to add ",(0,a.kt)("inlineCode",{parentName:"li"},"for")," loops that print out each item in a list"),(0,a.kt)("li",{parentName:"ul"},"avoid using custom methods in variable names, other than the ones listed on\nthe ",(0,a.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/label_variables"},"Field lbels to use in template files")," page.")),(0,a.kt)("p",null,"You can add these refining details after you run the form through the Weaver.\nUse the first draft just to add placeholders where information will go. "),(0,a.kt)("h2",{id:"use-the-assembly-lines-standard-field-names-for-docx-templates"},"Use the Assembly Line's standard field names for DOCX templates"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"/docassemble-AssemblyLine-documentation/docs/label_variables"},"specific names for labels")," for full\ncompatibility with the Assembly Line framework."))}u.isMDXComponent=!0}}]);