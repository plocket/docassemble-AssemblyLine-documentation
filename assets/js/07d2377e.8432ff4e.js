"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[5067],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1359:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),l=["components"],o={id:"magic_variables",title:"Special variables for Assembly Line interviews\n",sidebar_label:"Special variables for Assembly Line interviews",slug:"/framework/magic_variables"},s=void 0,d={unversionedId:"framework/magic_variables",id:"framework/magic_variables",isDocsHomePage:!1,title:"Special variables for Assembly Line interviews\n",description:"Global configuration options",source:"@site/docs/framework/magic_variables.md",sourceDirName:"framework",slug:"/framework/magic_variables",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/magic_variables",editUrl:"https://github.com/plocket/docassemble-AssemblyLine-documentation/edit/main/docs/framework/magic_variables.md",tags:[],version:"current",frontMatter:{id:"magic_variables",title:"Special variables for Assembly Line interviews\n",sidebar_label:"Special variables for Assembly Line interviews",slug:"/framework/magic_variables"},sidebar:"someSidebar",previous:{title:"Feature Documentation",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/overview"},next:{title:"ALGeneral: Python Classes representing people\n",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/algeneral"}},p=[{value:"Global configuration options",id:"global-configuration-options",children:[{value:"<code>AL_ORGANIZATION_TITLE</code>",id:"al_organization_title",children:[],level:3},{value:"<code>AL_ORGANIZATION_HOMEPAGE</code>",id:"al_organization_homepage",children:[],level:3},{value:"<code>al_logo</code>",id:"al_logo",children:[],level:3},{value:"Localization and translation variables",id:"localization-and-translation-variables",children:[],level:3}],level:2},{value:"Interview-specific options",id:"interview-specific-options",children:[{value:"<code>interview_metadata</code>",id:"interview_metadata",children:[],level:3},{value:"<code>AL_DEFAULT_OVERFLOW_MESSAGE</code>",id:"al_default_overflow_message",children:[],level:3},{value:"<code>addresses_to_search</code>",id:"addresses_to_search",children:[],level:3},{value:"<code>al_intro_screen</code>",id:"al_intro_screen",children:[],level:3},{value:"<code>allowed_courts</code>",id:"allowed_courts",children:[],level:3},{value:"<code>al_form_type</code>",id:"al_form_type",children:[],level:3}],level:2},{value:"Run-time options",id:"run-time-options",children:[{value:"<code>al_user_bundle</code> and <code>al_court_bundle</code>",id:"al_user_bundle-and-al_court_bundle",children:[],level:3},{value:"<code>signature_fields</code>",id:"signature_fields",children:[],level:3},{value:"<code>trial_court</code>",id:"trial_court",children:[],level:3},{value:"<code>user_role</code>",id:"user_role",children:[],level:3},{value:"<code>user_ask_role</code>",id:"user_ask_role",children:[],level:3},{value:"<code>user_started_case</code>",id:"user_started_case",children:[],level:3},{value:"<code>users</code> and <code>other_parties</code>",id:"users-and-other_parties",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"global-configuration-options"},"Global configuration options"),(0,r.kt)("p",null,"These variables are recommended to be set in a package that all of your\ninterviews include. Usually, they are the same for all interviews created by one\norganization or for one jurisdiction."),(0,r.kt)("p",null,"They can be set in a code block like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'code: |\n  SOME_OPTION = "some value"\n')),(0,r.kt)("p",null,'Docassemble will use the code block that is "latest" (closest to the bottom) of\nyour main interview file. This way, you can include a default in a global file\nand then override it as needed in an individual interview.'),(0,r.kt)("h3",{id:"al_organization_title"},(0,r.kt)("inlineCode",{parentName:"h3"},"AL_ORGANIZATION_TITLE")),(0,r.kt)("p",null,"Used to set the organization title (which appears above the form title) in the\nnavigation bar."),(0,r.kt)("p",null,"By default, this variable is set to the value of\n",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/config.html#appname"},(0,r.kt)("inlineCode",{parentName:"a"},"appname"))," in the system-wide\nconfiguration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'code: |\n  AL_ORGANIZATION_TITLE = "CourtFormsOnline"\n')),(0,r.kt)("h3",{id:"al_organization_homepage"},(0,r.kt)("inlineCode",{parentName:"h3"},"AL_ORGANIZATION_HOMEPAGE")),(0,r.kt)("p",null,"Used to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"exit url")," and the url that you will be taken to if you click\nthe title in the navigation bar."),(0,r.kt)("h3",{id:"al_logo"},(0,r.kt)("inlineCode",{parentName:"h3"},"al_logo")),(0,r.kt)("p",null,"Used to set a small icon (ideally 40px high, max) that will be displayed next to\nthe form title and brand name in the navigation bar."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nobjects:\n  - al_logo: DAStaticFile.using(filename="lit_logo_light.png")\n')),(0,r.kt)("p",null,"If your logo is taller than 40px, you can add a CSS rule to limit the maximum\nheight, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".al-logo img {\n  max-height: 40px;\n}\n")),(0,r.kt)("p",null,"Add this to a CSS file in your ",(0,r.kt)("inlineCode",{parentName:"p"},"data/static")," folder that you then include in\nyour interviews directly or via a shared YAML file."),(0,r.kt)("h3",{id:"localization-and-translation-variables"},"Localization and translation variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AL_DEFAULT_COUNTRY"),": ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_3166"},"ISO 3166")," 2\nletter code representing the default country of the interview user for address\nquestions. E.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"US")," for United States of America, ",(0,r.kt)("inlineCode",{parentName:"li"},"UK")," for United Kingdom of\nGreat Britain and Northern Ireland."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AL_DEFAULT_STATE"),": ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_3166-2"},"ISO 3166-2"),"\n(usually 2 or 3 letter) code representing the abbreviation for the state,\nterritory, or sublocality, used in address questions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AL_DEFAULT_LANGUAGE"),": ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"ISO\n639-1")," 2 letter code\n(or alternative, such as ISO-639-3) that matches a language for which you have\neither a ",(0,r.kt)("inlineCode",{parentName:"li"},"words.yml")," translation file, a translation ",(0,r.kt)("inlineCode",{parentName:"li"},"XLSX")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"XLIFF")," file,\nor both and is mentioned in a ",(0,r.kt)("inlineCode",{parentName:"li"},"language")," block in your interview. Used to\nspecify the default language of your interview.")),(0,r.kt)("h2",{id:"interview-specific-options"},"Interview-specific options"),(0,r.kt)("h3",{id:"interview_metadata"},(0,r.kt)("inlineCode",{parentName:"h3"},"interview_metadata")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"interview_metadata")," is a\n",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/objects.html#DADict"},(0,r.kt)("inlineCode",{parentName:"a"},"DADict")),". Each key in\n",(0,r.kt)("inlineCode",{parentName:"p"},"interview_metadata")," is itself a ",(0,r.kt)("inlineCode",{parentName:"p"},"DADict"),' and should be used for a specific\ninterview. This allows you to combine interviews into one "umbrella" interview\nand still look up information that applies to just one interview. E.g., one\n"child" interview might be available in English and Spanish, and a second only\nin English.'),(0,r.kt)("p",null,'Because the "umbrella" pattern is not widely used on CourtFormsOnline, this\nblock is not widely used at runtime. It is essentially optional although it is\nproduced in all interviews that are run through the Weaver. It is most useful as\na record of what the author intended when the form was run through the Weaver,\nand is also available for you to make use of in more complex "umbrella"\ninterviews of your own. Keep in mind that you may need to make an upstream fix\nto an interview to fix the ',(0,r.kt)("inlineCode",{parentName:"p"},"interview_metadata")," because it is not likely the\nupstream author kept this up to date with later changes to the interview."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"interview_metadata['my_interview']['al_weaver_version'] = \"0.82.1\"\ninterview_metadata['interview_i_included_in_this_umbrella_file']['al_weaver_version'] = \"1.6.11\"\n")),(0,r.kt)("p",null,"Common keys:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"al_weaver_version")),(0,r.kt)("td",{parentName:"tr",align:null},"documents the version of the Weaver the form was created with"),(0,r.kt)("td",{parentName:"tr",align:null},"0.82")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"generated on")),(0,r.kt)("td",{parentName:"tr",align:null},"documents the date the interview was created with the Weaver"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-05-28")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"The title of the form"),(0,r.kt)("td",{parentName:"tr",align:null},"209a 258e motion for impoundment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"short title")),(0,r.kt)("td",{parentName:"tr",align:null},"A shorter version of the title, appropriate for smaller windows"),(0,r.kt)("td",{parentName:"tr",align:null},"Impoundment motion")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"Narrative description"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this motion for impoundment in a 209A or 258E restraining order case when you need to keep information on the form private.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"original_form")),(0,r.kt)("td",{parentName:"tr",align:null},"Link to the original PDF/DOCX form, unfilled (not commonly used)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mass.gov/my_pdf.pdf"},"https://mass.gov/my_pdf.pdf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"allowed courts")),(0,r.kt)("td",{parentName:"tr",align:null},"A list of the courts the case may be filed in. Mostly relevant in Massachusetts; doesn't make sense in other states."),(0,r.kt)("td",{parentName:"tr",align:null},'["Superior Court", "Probate and Family"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"categories")),(0,r.kt)("td",{parentName:"tr",align:null},"Taxonomy classifiers that explain the type of form this is (usually from the LIST taxonomy at taxonomy.legal)"),(0,r.kt)("td",{parentName:"tr",align:null},'["BE-04-00-00-00"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logic block variable")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the interview order block"),(0,r.kt)("td",{parentName:"tr",align:null},"a_258e_motion_for_impoundment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"attachment block variable")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the attachment block variable"),(0,r.kt)("td",{parentName:"tr",align:null},"a_258e_motion_for_impoundment_attachment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"typical role")),(0,r.kt)("td",{parentName:"tr",align:null},"Common role that the form user has in the case"),(0,r.kt)("td",{parentName:"tr",align:null},"plaintiff")))),(0,r.kt)("p",null,"Some of these values are checked for emailed and e-filed pleadings."),(0,r.kt)("h3",{id:"al_default_overflow_message"},(0,r.kt)("inlineCode",{parentName:"h3"},"AL_DEFAULT_OVERFLOW_MESSAGE")),(0,r.kt)("p",null,"Used to control the text displayed in an input box when text is too long to fit on a PDF.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"...")," if not specified."),(0,r.kt)("h3",{id:"addresses_to_search"},(0,r.kt)("inlineCode",{parentName:"h3"},"addresses_to_search")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"addresses_to_search")," should contain a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"Address")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ALAddress")," objects that will\nbe used to locate the correct court for the user to file in."),(0,r.kt)("p",null,"By default, this will be a list of the addresses of each member of the ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," list."),(0,r.kt)("h3",{id:"al_intro_screen"},(0,r.kt)("inlineCode",{parentName:"h3"},"al_intro_screen")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"al_intro_screen")," should be a ",(0,r.kt)("inlineCode",{parentName:"p"},"continue button field")," on your organization's\nstandard intro screen. We use this screen to help orient people who arrive at\nthe interview directly from a deep link and to briefly explain what\nCourtFormsOnline.org is."),(0,r.kt)("h3",{id:"allowed_courts"},(0,r.kt)("inlineCode",{parentName:"h3"},"allowed_courts")),(0,r.kt)("p",null,"This is mostly relevant in Massachusetts. It should be a list of the names of\nthe Trial Court departments that accept this kind of pleading. It is used to\ndisplay the list of courts in interviews that use the court question contained\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},"docassemble.MassAccess")," package."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'code: |\n  allowed_courts = [\n    "Housing Court",\n    "Superior Court"\n  ]\n')),(0,r.kt)("p",null,"Massachusetts has a unified court system, with jurisdiction depending on the\ncourt department. In other states, there may be a single court per county of\ngeneral jurisdiction, with adhoc assignment of case types to different branches\nof the court in that county. Because of this, it's not likely that filtering\ncourts this way makes sense in other states."),(0,r.kt)("h3",{id:"al_form_type"},(0,r.kt)("inlineCode",{parentName:"h3"},"al_form_type")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"al_form_type")," is used to control some dynamic questions to give more specific\nhelp information and to give some variables, like ",(0,r.kt)("inlineCode",{parentName:"p"},"user_role"),", a smart default."),(0,r.kt)("p",null,"Valid values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Starts a new court case: ",(0,r.kt)("inlineCode",{parentName:"li"},"'starts_case'")),(0,r.kt)("li",{parentName:"ul"},"Filed in or responding to an existing court case: ",(0,r.kt)("inlineCode",{parentName:"li"},"'existing_case'")),(0,r.kt)("li",{parentName:"ul"},"Part of an appeal of a court case: ",(0,r.kt)("inlineCode",{parentName:"li"},"'appeal'")),(0,r.kt)("li",{parentName:"ul"},"Form that is not filed in a court: ",(0,r.kt)("inlineCode",{parentName:"li"},"'other_form'")),(0,r.kt)("li",{parentName:"ul"},"Letter: ",(0,r.kt)("inlineCode",{parentName:"li"},"'letter'")),(0,r.kt)("li",{parentName:"ul"},"Other: ",(0,r.kt)("inlineCode",{parentName:"li"},"'other'"))),(0,r.kt)("h2",{id:"run-time-options"},"Run-time options"),(0,r.kt)("p",null,"These options are ones that you can sometimes configure when you author the\ninterview, but they can also depend on questions that are asked during the\ncourse of the interview."),(0,r.kt)("h3",{id:"al_user_bundle-and-al_court_bundle"},(0,r.kt)("inlineCode",{parentName:"h3"},"al_user_bundle")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"al_court_bundle")),(0,r.kt)("p",null,"If your interview will be electronically filed or email filed, it should also define\n2 ",(0,r.kt)("inlineCode",{parentName:"p"},"ALDocumentBundle")," objects: ",(0,r.kt)("inlineCode",{parentName:"p"},"al_user_bundle")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"al_court_bundle"),"."),(0,r.kt)("p",null,"Use these exact names for the bundles, which are also created for you by the\nWeaver. The e-filing code expects to see the ",(0,r.kt)("inlineCode",{parentName:"p"},"al_court_bundle")," object defined.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"al_user_bundle")," object is used on error handling screens."),(0,r.kt)("h3",{id:"signature_fields"},(0,r.kt)("inlineCode",{parentName:"h3"},"signature_fields")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"signature_fields")," should be a list with the name of each signature field\nthat you want the interview to trigger in the signature flow as a string."),(0,r.kt)("p",null,"You can use a ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," block to define this in a way that reflects the user's\nchoices."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'code: |\n  if has_attorney:\n    signature_fields = ["users[0].signature", "attorneys[0].signature"]\n  else:\n    signature_fields = ["users[0].signature"]\n')),(0,r.kt)("h3",{id:"trial_court"},(0,r.kt)("inlineCode",{parentName:"h3"},"trial_court")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"trial_court")," should be an ",(0,r.kt)("inlineCode",{parentName:"p"},"MACourt")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ALCourt")," object representing the\ncourt that the user has chosen to file the case in. This may be used\nin some automatically gathered statistics as well as in e-filing code."),(0,r.kt)("h3",{id:"user_role"},(0,r.kt)("inlineCode",{parentName:"h3"},"user_role")),(0,r.kt)("p",null,"Several questions depend on the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"user_role")," directly to address the\n",(0,r.kt)("inlineCode",{parentName:"p"},"user")," correctly as either the party initiating or responding to a case."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"user_role"),' should be exactly one of "plaintiff" or "defendant". Use "plaintiff"\nwhen you mean "petitioner", and use "defendant" even if you mean "respondent". This\nis just the internal shorthand for starting or responding to the case.'),(0,r.kt)("p",null,"This is commonly but not always set in a code block."),(0,r.kt)("h3",{id:"user_ask_role"},(0,r.kt)("inlineCode",{parentName:"h3"},"user_ask_role")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"user_ask_role")," is used for the same purpose (and will define the value of)\n",(0,r.kt)("inlineCode",{parentName:"p"},"user_role"),'. It can also contain exactly 1 of 2 values: "plaintiff" or "defendant".\nThe difference is that ',(0,r.kt)("inlineCode",{parentName:"p"},"user_ask_role")," is expected to be set by asking a question."),(0,r.kt)("h3",{id:"user_started_case"},(0,r.kt)("inlineCode",{parentName:"h3"},"user_started_case")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"user_started_case")," is not intended to be defined directly. It is created based\non the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"al_form_type")," and if that doesn't provide enough information,\nthe value of ",(0,r.kt)("inlineCode",{parentName:"p"},"user_ask_role")," is checked."),(0,r.kt)("p",null,"It is then used to make the question about ",(0,r.kt)("inlineCode",{parentName:"p"},"other_parties")," dynamic."),(0,r.kt)("h3",{id:"users-and-other_parties"},(0,r.kt)("inlineCode",{parentName:"h3"},"users")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"other_parties")),(0,r.kt)("p",null,"The variables ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"other_parties")," can be used directly in your template,\nbut they also have a special meaning in Assembly Line interviews."),(0,r.kt)("p",null,"The variable ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," should always contain the name of the party who the form\nis for. Do not use it to store the name of an advocate or attorney, unless the\nadvocate or attorney is filing something on their own behalf, like an appearance."),(0,r.kt)("p",null,"The variable ",(0,r.kt)("inlineCode",{parentName:"p"},"other_parties")," is reserved to represent the name of the opposing party\nin the lawsuit. Not all forms contain a second party, so this variable is optional."),(0,r.kt)("p",null,"The Assembly Line runtime packages will assign the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"other_parties"),"\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"plaintiffs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"petitioners"),",  ",(0,r.kt)("inlineCode",{parentName:"p"},"defendants"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"respondents")," dynamically."))}m.isMDXComponent=!0}}]);