(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{639:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("Youtube",{attrs:{id:"cW2MLIZ5CaU",citation:"griffith"}}),t._v(" "),t._m(1),t._v(" "),t._m(2),e("div",{staticClass:"try"},[e("p",[e("a",{attrs:{href:"https://www.db-fiddle.com/f/9aHVRFHBmuc7eAg3Vt2ySQ/0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on DB Fiddle"),e("OutboundLink")],1)])]),t._v(" "),t._m(3),t._v(" "),t._m(4),e("div",{staticClass:"try"},[e("p",[e("a",{attrs:{href:"https://www.db-fiddle.com/f/9aHVRFHBmuc7eAg3Vt2ySQ/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on DB Fiddle"),e("OutboundLink")],1)])]),t._v(" "),t._m(5),t._v(" "),t._m(6),e("div",{staticClass:"try"},[e("p",[e("a",{attrs:{href:"https://www.db-fiddle.com/f/9aHVRFHBmuc7eAg3Vt2ySQ/2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on DB Fiddle"),e("OutboundLink")],1)])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"group-by-clause"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#group-by-clause","aria-hidden":"true"}},[this._v("#")]),this._v(" GROUP BY Clause")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("GROUP BY")]),this._v(" clause can be used with Aggregate Functions to group the result by one or more columns. The effect of using the "),s("code",[this._v("GROUP BY")]),this._v(" clause on the results of an Aggregate Function will include a separate row for each group with the aggregate calculation occurring only for the data related to that group.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Get the total number of movies for each year")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movie_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("total"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It is possible to group rows across multiple tables using the "),s("code",[this._v("INNER JOIN")]),this._v(" clause with the "),s("code",[this._v("GROUP BY")]),this._v(" clause.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Get the total number of movies for each genre title")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("movie_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" total"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("genre_title\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" movies "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" m "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" genres "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" g\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("genre_id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" g"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("genre_id\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" g"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("genre_title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("When using aggregate functions, for every column that you wish to display beyond the aggregate column, it must also be added as a "),s("code",[this._v("GROUP BY")]),this._v(" column. It is also possible to filter the results by using the "),s("code",[this._v("WHERE")]),this._v(" clause.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Get the total number of movies before the year 2000 ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- for each genre title and directors ordered by the total number of movies")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("movie_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" total"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("genre_title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("director\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" movies "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" m "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" genres "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" g\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("genre_id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" g"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("genre_id\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" g"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("genre_title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("director\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" total "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"having-clause"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#having-clause","aria-hidden":"true"}},[this._v("#")]),this._v(" HAVING Clause")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("The "),e("code",[t._v("WHERE")]),t._v(" clause is used to filter results BEFORE any grouping occurs. As such, the "),e("code",[t._v("WHERE")]),t._v(" clause cannot be used with aggregate functions. Instead, the "),e("code",[t._v("HAVING")]),t._v(" clause should be used. The "),e("code",[t._v("HAVING")]),t._v(" clause also filter results, but does AFTER grouping occurs and can be used with aggregate functions.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Total number of movies by year")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- for years having more than 1 movie")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" total"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" movies \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HAVING")]),t._v(" total "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);