(window.webpackJsonp=window.webpackJsonp||[]).push([[711],{932:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Create a Mad Libs web application that lets a visitor choose a story, input words, and read the completed story.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("When the visitor comes to the site, they will be presented with a list of story titles. How the story titles are presented will be a matter of preference (a list of links, buttons, a select box, etc).")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("After the visitor has selected a story, a form will appear with a text input for each word in the selected story's words array.")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("After the visitor has provided words and submitted the form, the completed story will appear.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("There should be an option for the visitor to create a new story.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("Create any necessary HTML, CSS, and JavaScript files to create your Mad Libs web application. Your web app must adhere to the following requirements.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("ul",[s("li",[s("p",[t._v("When using the "),s("code",[t._v("stories")]),t._v(" array the "),s("router-link",{attrs:{to:"/modules/js/js-loops/for.html"}},[s("code",[t._v("for")]),t._v(" loop")]),t._v(" or a "),s("router-link",{attrs:{to:"/modules/js/js-loops/for...of.html"}},[s("code",[t._v("for...of")]),t._v(" loop")]),t._v(" may be used to iterate over each story object.")],1)]),t._v(" "),t._m(13)]),t._v(" "),t._m(14),s("ul",[s("li",[s("p",[t._v("The selected story can be identified by storing its index in the "),s("code",[t._v("stories")]),t._v(" array in a "),s("router-link",{attrs:{to:"/modules/js/custom-data-attributes/"}},[t._v("custom data attribute")]),t._v(".")],1)]),t._v(" "),t._m(15)]),t._v(" "),t._m(16),s("ul",[s("li",[s("p",[t._v("The "),s("router-link",{attrs:{to:"/modules/js/js-dom/traversing-the-dom.html#children"}},[s("code",[t._v("children")]),t._v(" property")]),t._v(" can be used to access the inputs from a "),s("code",[t._v("<form>")]),t._v(" element.")],1)]),t._v(" "),t._m(17)]),t._v(" "),t._m(18),t._m(19),t._v(" "),s("Youtube",{attrs:{id:"UgeGkZlhSJ8"}}),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("Submissions will be graded on the following criteria")]),t._v(" "),t._m(22)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"mad-libs-web-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mad-libs-web-app","aria-hidden":"true"}},[this._v("#")]),this._v(" Mad Libs Web App")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"objective"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objective","aria-hidden":"true"}},[this._v("#")]),this._v(" Objective")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"app-overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" App Overview")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("The examples below are only meant to help explain the functionality of the Mad Libs assignment. Your application does not need to look like screenshots.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/mtm6302-mad-libs-1.png",alt:"First screen of the Mad Libs app"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/mtm6302-mad-libs-2.png",alt:"Screen of the uncompleted form of the Mad Libs app"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/mtm6302-mad-libs-3.png",alt:"Screen of the completed form of the Mad Libs app"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/mtm6302-mad-libs-4.png",alt:"Screen of the completed story"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"starter-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#starter-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Starter Files")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("The "),s("code",[t._v("stories.js")]),t._v(" file will contain the "),s("code",[t._v("stories")]),t._v(" variable, which is an array of objects. Each object represents a story and contains a title, an array of required words, and an "),s("code",[t._v("output")]),t._v(" function. The "),s("code",[t._v("words")]),t._v(" array contains the types of words the visitor must provide. The words array should be used to create the form after the visitor selects a story. The "),s("code",[t._v("output")]),t._v(" function will accept an object of words and will return the completed story. Each provided word is wrapped in a "),s("code",[t._v("<span>")]),t._v(" tag with the class of "),s("code",[t._v("word")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("The Mad Libs web application should consist of a single HTML file.")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("stories")]),t._v(" array found in the "),s("code",[t._v("stories.js")]),t._v(" file must be used.")]),t._v(" "),s("li",[t._v("The stories presented to the visitor must be added to the page using JavaScript.")]),t._v(" "),s("li",[t._v("Selecting a story, should present a form containing inputs for the words of the selected story.")]),t._v(" "),s("li",[t._v("The form inputs must be added to the page using JavaScript.")]),t._v(" "),s("li",[t._v("Submitting the form should not cause a page refresh, but present the selected story with the provided words.")]),t._v(" "),s("li",[t._v("The completed story must be added to the page using JavaScript.")]),t._v(" "),s("li",[t._v("On the completed story screen there should be an option to create a new story, which will return the visitor to the story options.")]),t._v(" "),s("li",[t._v("The web application should not experience any page refreshes.")]),t._v(" "),s("li",[t._v("The web application should be responsive.")]),t._v(" "),s("li",[t._v("The web application should have an intuitive and appealing user interface.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"hints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hints","aria-hidden":"true"}},[this._v("#")]),this._v(" Hints")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("A story's object properties can be accessed by using two sets notation. The first to access the story object within the stories array and the second to access the properties within the object.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// example")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Mission Statement")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Weather Report")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("For each word in a story's "),e("code",[this._v("words")]),this._v(" array, an text input should be created. The word type can be used as the input's label, name, or placeholder.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// example")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" word "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("words"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Adjective")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`<input type="text" name="')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("word"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" placeholder="')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("word"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('">`')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <input type="text" name="Adjective" placeholder="Adjective">')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("A story's "),e("code",[this._v("output")]),this._v(" function requires an object of words to be passed to it. The properties of the object should have a key that is a word type and a value that is the word itself.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// example")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" story "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" words "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Adjective'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obedient'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Verb 1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cook'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Verb 2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'strike'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Plural Noun 1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'birds'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Plural Noun 2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'winners'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Plural Noun 3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'politics'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nstory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ouput")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("words"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("The above example is only meant to demonstrate the functionality of the Mad Libs assignment. Your project may look very different.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rubric"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rubric","aria-hidden":"true"}},[this._v("#")]),this._v(" Rubric")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Points  ")]),t._v(" "),s("th",[t._v("Criteria")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("90 - 100")])]),t._v(" "),s("td",[t._v("The project exceeds expectations including: "),s("ul",[s("li",[t._v("A superior layout and design.")]),s("li",[t._v("A fully functional web application.")]),s("li",[t._v("Friendly and intuitive UI")]),s("li",[t._v("JavaScript effectively and efficiently used.")]),s("li",[t._v("All project requirements were met satisfactory or exceeds expectations.")])])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("70 - 89")])]),t._v(" "),s("td",[t._v("The project meets expectations including: "),s("ul",[s("li",[t._v("A fully responsive layout and appealing design.")]),s("li",[t._v("A fully functional web application.")]),s("li",[t._v("Friendly and intuitive UI")]),s("li",[t._v("JavaScript is effectively used.")]),s("li",[t._v("All project requirements were met satisfactory.")])])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("50 - 69")])]),t._v(" "),s("td",[t._v("The project is below expectations including: "),s("ul",[s("li",[t._v("A partially responsive layout and subpar design.")]),s("li",[t._v("A partially functional web application.")]),s("li",[t._v("A functional UI")]),s("li",[t._v("Functional JavaScript")]),s("li",[t._v("Some project requirements were met satisfactory.")])])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("0 - 49")])]),t._v(" "),s("td",[t._v("The project does not meet the project requirements including: "),s("ul",[s("li",[t._v("A non-responsive layout and unappealing design.")]),s("li",[t._v("Non-functional or erroneous JavaScript")]),s("li",[t._v("All project requirements were met unsatisfactory.")])])])])])])}],!1,null,null,null);e.default=n.exports}}]);