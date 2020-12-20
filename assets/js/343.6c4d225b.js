(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{563:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("p",[t._v('So, lets say you just completed writing some PHP code, and go to your browser to see the fruits of your labor, and instead you get a blank white page. This is what is commonly referred to as the "White Screen of Death," and it is often result of a mistake you made in your PHP code. But what mistake and where? A blank, white screen is not very helpful. If only there was a way to get more information about what went wrong. Well, fortunately there is. PHP has build-in error reporting and other function to aid you to find and fix errors, all you have to do now when and how to use them.')]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("Fatal runtime errors will kill the page completely. Common fatal runtime errors include running out of memory.")]),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("Parse errors or syntax errors occur during compile time, and therefore occur before anything is sent to the page.")]),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("Warnings and notices are not as critical as errors and typical will not kill the page, but are an indication of poorly written code.")]),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("Is a notice that a method or statement being used will be removed from PHP in future versions and updated or replaced.")]),t._v(" "),r("p",[t._v("For beginners, the most common PHP error is the parse or syntax error. Fortunately, these are also the easiest to find and fix. The next examples what tools are available to find and fixes parse errors.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("Below is a list of common syntax mistakes.")]),t._v(" "),t._m(10),t._v(" "),r("p",[t._v("While these errors are easy to fix that can be difficult to find. Fortunately, there several tools to help you with this problem. The first on is using a linter.")]),t._v(" "),t._m(11),t._v(" "),r("p",[t._v("Visual Studio Code uses the official PHP Linter, out of the box, to provide live code feedback. This means has you type Visual Studio Code will provide highlighting and error messages if a syntax error is made.")]),t._v(" "),r("p",[t._v("View the documentation to learn more about "),r("a",{attrs:{href:"https://code.visualstudio.com/docs/languages/php#_linting",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP Linting with Visual Studio Code"),r("OutboundLink")],1)]),t._v(" "),t._m(12),t._v(" "),r("p",[t._v("Another method of find syntax errors it use PHP built-in error reporting and display those errors directly on the page. While these options comes built-in to PHP, they are often disabled by default. However, they are by default when using Local by Flywheel, so no additional configuration is needed.")]),t._v(" "),r("p",[t._v("With error reporting and display errors activated, when a syntax error occurs a message will be displayed in the browser instead of a blank page. This message will give a vague description of what went wrong along with a line number of the error. Just like the linter, the actually mistake is usually on the line before the line reported.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),r("p",[t._v('However, if the variable\'s value is an array, the echo statement will not return the values in the array. Instead will either display the string "Array", which is not all that helpful, or cause a PHP error, which is worse.')]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),r("p",[t._v("Error reporting will display other problems with your code beyond just syntax errors. In fact, there are many types of errors, with different error codes. Being knowledgeable what each code means will help you find and fix the issue.")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"php-error-handling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php-error-handling","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP Error Handling")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"what-is-error-handling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-error-handling","aria-hidden":"true"}},[this._v("#")]),this._v(" What is Error Handling?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"type-of-php-errors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-of-php-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Type of PHP Errors")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("There are 5 categories of errors that PHP will report and display. They are "),r("strong",[t._v("Fatal Errors")]),t._v(", "),r("strong",[t._v("Parse Errors")]),t._v(", "),r("strong",[t._v("Warnings, Notices")]),t._v(", and "),r("strong",[t._v("Deprecated")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"fatal-runtime-errors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fatal-runtime-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Fatal Runtime Errors")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"parse-errors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parse-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Parse Errors")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"warning-and-notices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#warning-and-notices","aria-hidden":"true"}},[this._v("#")]),this._v(" Warning and Notices")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"deprecated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deprecated","aria-hidden":"true"}},[this._v("#")]),this._v(" Deprecated")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"finding-and-fixing-parse-errors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finding-and-fixing-parse-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Finding and fixing parse errors")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"common-php-mistakes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-php-mistakes","aria-hidden":"true"}},[this._v("#")]),this._v(" Common PHP Mistakes")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("Typos")]),t._v(" "),r("li",[t._v("Missing semicolon ("),r("code",[t._v(";")]),t._v(") at the end of line")]),t._v(" "),r("li",[t._v("Missing closing braces:  "),r("code",[t._v("} ) ]")])]),t._v(" "),r("li",[t._v("Missing closing quote: "),r("code",[t._v("\" '")])]),t._v(" "),r("li",[t._v("Misspelled variable name or mismatched case. PHP is case-sensitive.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"using-php-linter-for-visual-studio-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-php-linter-for-visual-studio-code","aria-hidden":"true"}},[this._v("#")]),this._v(" Using PHP Linter for Visual Studio Code")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"using-php-error-reporting-and-display-errors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-php-error-reporting-and-display-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Using PHP Error Reporting and Display Errors")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("While it may seem redundant, it is actually very useful to use error reporting and a PHP linter. Linters typically only look for parse or syntax errors, while error reporting will caught other types of errors like warnings, notices, and deprecated.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"viewing-the-php-error-logs-with-local-by-flywheel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#viewing-the-php-error-logs-with-local-by-flywheel","aria-hidden":"true"}},[this._v("#")]),this._v(" Viewing the PHP Error Logs with Local by Flywheel")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Viewing the PHP Error Logs created by Local by Flywheel is a straight forward process. In the File Explorer (Windows) or Finder (macOS), follow the site path of your Local Site. From your site path folder, the PHP error logs can be found in "),e("code",[this._v("logs/php/7.2.0/error.log")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"finding-logical-errors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finding-logical-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Finding logical errors")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("While some of these coding mistakes are syntax errors and easily identifiable by PHP Lint or Error Reporting, some are logical errors. Logical may not trigger any error or warning, but will still produce an undesirable result. They can also be difficult to find, especially for beginners. Just like with error reporting, the best way to find a logic error is to output  information to the HTML page as the code is running. There are three common PHP statements and functions often used to output information to the page. They are "),e("code",[this._v("echo")]),this._v(", "),e("code",[this._v("print_r()")]),this._v(", and "),e("code",[this._v("var_dump()")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"echo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#echo","aria-hidden":"true"}},[this._v("#")]),this._v(" echo")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You should already be familiar with "),e("code",[this._v("echo")]),this._v(". It is a way of displaying strings, numbers and variables to the page.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-php extra-class"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$string")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I am a string"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$string")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// I am a string")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-php extra-class"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I am an array"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I have many values"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This is where "),e("code",[this._v("print_r()")]),this._v(" function comes in.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"print-r"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#print-r","aria-hidden":"true"}},[this._v("#")]),this._v(" print_r")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("print_r()")]),this._v(" function displays human-readable information about a variable, and while it can be use on with strings and number, it more commonly used to display arrays.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-php extra-class"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I am an array"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I have many values"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_r")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array ([0] => I am an array [1] => I have many values)")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By using the "),e("code",[this._v("print_r()")]),this._v(" function we can see all the value being stored in the array. When combined with the HTML "),e("code",[this._v("<pre>")]),this._v(" tags, the output of the "),e("code",[this._v("print_r()")]),this._v(" function when be neatly formatted when displayed.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"var-dump"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#var-dump","aria-hidden":"true"}},[this._v("#")]),this._v(" var_dump")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("var_dump()")]),this._v(" function take print_r to the next level, by providing even more information about variables include they current type (string, number, array, etc) and the size of the variable (number characters in the string, number items in the array). The "),e("code",[this._v("var_dump()")]),this._v(" function also display arrays in a nice, human readable format.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-php extra-class"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I am an array"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I have many values"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("var_dump")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// array(2) {[0] => string(13) "I am an array" [1] => string(18) "I have many values"}')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"graceful-handling-of-fatal-errors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#graceful-handling-of-fatal-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Graceful Handling of Fatal Errors")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Sometimes it is necessary to let the end user know an error has occurred, without displaying the error reporting messaging. This can be done using the "),e("code",[this._v("register_shutdown_function()")]),this._v(" and "),e("code",[this._v("error_get_last()")]),this._v(" functions. Together, these functions can be used to create and display a custom error message, as shown below.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("This will not work if there is a syntax error on the page.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-php extra-class"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[r("span",{pre:!0,attrs:{class:"token php language-php"}},[r("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" \n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("register_shutdown_function")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$error")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("error_get_last")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("empty")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$error")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"Huston, we have a problem."')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])])}],!1,null,null,null);e.default=s.exports}}]);