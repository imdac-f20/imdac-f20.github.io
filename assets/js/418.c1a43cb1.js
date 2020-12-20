(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{638:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("Youtube",{attrs:{id:"PaEpDMSScxw",citation:"griffith"}}),t._v(" "),e("p",[e("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/group-by-functions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aggregate functions"),e("OutboundLink")],1),t._v(" are use to perform calculation on a multiples rows of a single column. Some common aggregate functions include: "),e("code",[t._v("COUNT()")]),t._v(", "),e("code",[t._v("SUM()")]),t._v(",  and "),e("code",[t._v("AVG()")]),t._v(".")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),e("div",{staticClass:"try"},[e("p",[e("a",{attrs:{href:"https://www.db-fiddle.com/f/r2qfwEBTMfLrNF4P7nkjdJ/0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on DB Fiddle"),e("OutboundLink")],1)])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),e("div",{staticClass:"try"},[e("p",[e("a",{attrs:{href:"https://www.db-fiddle.com/f/r2qfwEBTMfLrNF4P7nkjdJ/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on DB Fiddle"),e("OutboundLink")],1)])]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),e("div",{staticClass:"try"},[e("p",[e("a",{attrs:{href:"https://www.db-fiddle.com/f/r2qfwEBTMfLrNF4P7nkjdJ/2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on DB Fiddle"),e("OutboundLink")],1)])]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),e("div",{staticClass:"try"},[e("p",[e("a",{attrs:{href:"https://www.db-fiddle.com/f/r2qfwEBTMfLrNF4P7nkjdJ/3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on DB Fiddle"),e("OutboundLink")],1)])]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),e("div",{staticClass:"try"},[e("p",[e("a",{attrs:{href:"https://www.db-fiddle.com/f/r2qfwEBTMfLrNF4P7nkjdJ/4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on DB Fiddle"),e("OutboundLink")],1)])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"aggregate-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aggregate-functions","aria-hidden":"true"}},[this._v("#")]),this._v(" Aggregate Functions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),s("p",[this._v("When using aggregate functions without a "),s("code",[this._v("GROUP BY")]),this._v(" clause, only one column can be requested. If multiple columns are requested an error will occur.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"count-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#count-function","aria-hidden":"true"}},[this._v("#")]),this._v(" COUNT() Function")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("COUNT()")]),this._v(" function is used to count the number of non-NULL rows for a specific column. If the "),s("code",[this._v("*")]),this._v(" is used in place of the column it will count every row returned.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Count all the rows with a movie id")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movie_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Count all the rows in the table")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"sum-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sum-function","aria-hidden":"true"}},[this._v("#")]),this._v(" SUM() Function")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("SUM()")]),this._v(" function returns the sum of all the matched rows of the provided column.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),s("p",[this._v("The "),s("code",[this._v("SUM()")]),this._v(" function only works with columns with a number datatype.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Getting the sum total of the year column for every movie ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("SUM")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"avg-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#avg-function","aria-hidden":"true"}},[this._v("#")]),this._v(" AVG() Function")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("AVG()")]),this._v(" function will return the mean average of the values of the given column.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),s("p",[this._v("The "),s("code",[this._v("AVG()")]),this._v(" function only works with columns with a number datatype.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Getting the average year for all movies ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AVG")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"min-and-max-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#min-and-max-functions","aria-hidden":"true"}},[this._v("#")]),this._v(" MIN() and MAX() Functions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("MIN()")]),this._v(" and "),s("code",[this._v("MAX()")]),this._v(" functions are used to get the minimum or maximum values of the provided column.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),s("p",[this._v("These functions can be used with string values.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- The oldest movie in the movies table")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MIN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Oldest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- The newest movie in the movies table")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MAX")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Newest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"where-clause"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-clause","aria-hidden":"true"}},[this._v("#")]),this._v(" WHERE Clause")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("WHERE")]),this._v(" clause can be used with aggregate functions to filter the results.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- The newest movie with the genre 'Sci-Fi'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MAX")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Newest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("genre_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("genre_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("genres"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("genre_title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Sci-Fi'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);