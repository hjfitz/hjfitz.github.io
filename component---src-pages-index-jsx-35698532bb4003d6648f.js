(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{255:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return d}));var r=n(0),a=n.n(r),i=n(94),o=n.n(i),u=n(250),s=n(266),c=n(251);t.default=function(e){var t=[],n=e.data.site.siteMetadata,r=n.title,i=n.subtitle;return e.data.allMarkdownRemark.edges.forEach((function(e){t.push(a.a.createElement(s.a,{data:e,key:e.node.fields.slug}))})),a.a.createElement(u.a,null,a.a.createElement("div",null,a.a.createElement(o.a,null,a.a.createElement("title",null,r),a.a.createElement("meta",{name:"description",content:i})),a.a.createElement(c.a,e),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"content__inner"},t))))};var d="3717363553"},261:function(e,t,n){"use strict";var r=n(4),a=n(21),i=n(33),o=n(97),u=n(67),s=n(10),c=n(69).f,d=n(96).f,l=n(12).f,h=n(262).trim,f=r.Number,m=f,g=f.prototype,w="Number"==i(n(68)(g)),y="trim"in String.prototype,v=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,i=(t=y?t.trim():h(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var o,s=t.slice(2),c=0,d=s.length;c<d;c++)if((o=s.charCodeAt(c))<48||o>a)return NaN;return parseInt(s,r)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof f&&(w?s((function(){g.valueOf.call(n)})):"Number"!=i(n))?o(new m(v(t)),n,f):v(t)};for(var b,p=n(11)?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;p.length>T;T++)a(m,b=p[T])&&!a(f,b)&&l(f,b,d(m,b));f.prototype=g,g.constructor=f,n(17)(r,"Number",f)}},262:function(e,t,n){var r=n(9),a=n(41),i=n(10),o=n(263),u="["+o+"]",s=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),d=function(e,t,n){var a={},u=i((function(){return!!o[e]()||"​"!="​"[e]()})),s=a[e]=u?t(l):o[e];n&&(a[n]=s),r(r.P+r.F*u,"String",a)},l=d.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(c,"")),e};e.exports=d},263:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},264:function(e,t,n){"use strict";var r=n(9),a=n(98)(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(95)(i)},265:function(e,t,n){"use strict";n(8),n(140),n(19),n(1);function r(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function i(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var o={date:i({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:i({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:i({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};n(261),n(13),n(14);function s(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}var c={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};n(264);function d(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?d.findIndex((function(e){return e.test(r)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(d,(function(e){return e.test(r)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var l,h={formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:o,formatRelative:function(e,t,n,r){return u[e]},localize:c,match:{ordinalNumber:(l={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(l.matchPattern);if(!a)return null;var i=a[0],o=n.match(l.parsePattern);if(!o)return null;var u=l.valueCallback?l.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:d({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:d({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function f(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function m(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=r(e).getTime(),a=f(t);return new Date(n+a)}(e,-f(t))}function g(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var w={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return g("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):g(n+1,2)},d:function(e,t){return g(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return g(e.getUTCHours()%12||12,t.length)},H:function(e,t){return g(e.getUTCHours(),t.length)},m:function(e,t){return g(e.getUTCMinutes(),t.length)},s:function(e,t){return g(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return g(Math.floor(r*Math.pow(10,n-3)),t.length)}},y=864e5;function v(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=r(e),n=t.getUTCDay(),a=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-a),t.setUTCHours(0,0,0,0),t}function b(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=r(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var i=v(a),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var u=v(o);return t.getTime()>=i.getTime()?n+1:t.getTime()>=u.getTime()?n:n-1}var p=6048e5;function T(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=r(e),n=v(t).getTime()-function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=b(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),v(n)}(t).getTime();return Math.round(n/p)+1}function M(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t||{},a=n.locale,i=a&&a.options&&a.options.weekStartsOn,o=null==i?0:f(i),u=null==n.weekStartsOn?o:f(n.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=r(e),c=s.getUTCDay(),d=(c<u?7:0)+c-u;return s.setUTCDate(s.getUTCDate()-d),s.setUTCHours(0,0,0,0),s}function C(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=r(e,t),a=n.getUTCFullYear(),i=t||{},o=i.locale,u=o&&o.options&&o.options.firstWeekContainsDate,s=null==u?1:f(u),c=null==i.firstWeekContainsDate?s:f(i.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(a+1,0,c),d.setUTCHours(0,0,0,0);var l=M(d,t),h=new Date(0);h.setUTCFullYear(a,0,c),h.setUTCHours(0,0,0,0);var m=M(h,t);return n.getTime()>=l.getTime()?a+1:n.getTime()>=m.getTime()?a:a-1}var E=6048e5;function x(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=r(e),a=M(n,t).getTime()-function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:f(a),o=null==n.firstWeekContainsDate?i:f(n.firstWeekContainsDate),u=C(e,t),s=new Date(0);return s.setUTCFullYear(u,0,o),s.setUTCHours(0,0,0,0),M(s,t)}(n,t).getTime();return Math.round(a/E)+1}var N="midnight",P="noon",D="morning",k="afternoon",S="evening",U="night";function q(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+g(i,2)}function W(e,t){return e%60==0?(e>0?"-":"+")+g(Math.abs(e)/60,2):O(e,t)}function O(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+g(Math.floor(a/60),2)+n+g(a%60,2)}var Y={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return w.y(e,t)},Y:function(e,t,n,r){var a=C(e,r),i=a>0?a:1-a;return"YY"===t?g(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):g(i,t.length)},R:function(e,t){return g(b(e),t.length)},u:function(e,t){return g(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return g(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return g(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return w.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return g(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=x(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):g(a,t.length)},I:function(e,t,n){var r=T(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):g(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):w.d(e,t)},D:function(e,t,n){var a=function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=r(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=n-t.getTime();return Math.floor(a/y)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):g(a,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return g(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return g(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return g(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?P:0===a?N:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?S:a>=12?k:a>=4?D:U,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return w.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):w.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):g(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):g(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):w.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):w.s(e,t)},S:function(e,t){return w.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return W(a);case"XXXX":case"XX":return O(a);case"XXXXX":case"XXX":default:return O(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return W(a);case"xxxx":case"xx":return O(a);case"xxxxx":case"xxx":default:return O(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+q(a,":");case"OOOO":default:return"GMT"+O(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+q(a,":");case"zzzz":default:return"GMT"+O(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return g(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return g((r._originalDate||e).getTime(),t.length)}};function _(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function F(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var A={p:F,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return _(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",_(a,t)).replace("{{time}}",F(i,t))}},I=6e4;var L=["D","DD"],z=["YY","YYYY"];function H(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}n.d(t,"a",(function(){return B}));var j=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,X=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,G=/^'([^]*?)'?$/,Q=/''/g,R=/[a-zA-Z]/;function B(e,t,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var a=String(t),i=n||{},o=i.locale||h,u=o.options&&o.options.firstWeekContainsDate,s=null==u?1:f(u),c=null==i.firstWeekContainsDate?s:f(i.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=o.options&&o.options.weekStartsOn,l=null==d?0:f(d),g=null==i.weekStartsOn?l:f(i.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var w=r(e);if(!function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=r(e);return!isNaN(t)}(w))throw new RangeError("Invalid time value");var y=m(w,function(e){var t=new Date(e.getTime()),n=t.getTimezoneOffset();t.setSeconds(0,0);var r=t.getTime()%I;return n*I+r}(w)),v={firstWeekContainsDate:c,weekStartsOn:g,locale:o,_originalDate:w};return a.match(X).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,A[t])(e,o.formatLong,v):e})).join("").match(j).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return e.match(G)[1].replace(Q,"'");var n,r=Y[t];if(r)return i.useAdditionalWeekYearTokens||(n=e,-1===z.indexOf(n))||H(e),!i.useAdditionalDayOfYearTokens&&function(e){return-1!==L.indexOf(e)}(e)&&H(e),r(y,e,o.localize,v);if(t.match(R))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("")}},266:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(22),o=n(265);n(267);t.a=function(e){var t=e.data.node,n=t.frontmatter,r=n.title,u=n.date,s=n.category,c=n.description,d=t.fields,l=d.slug,h=d.categorySlug;return a.a.createElement("div",{className:"post"},a.a.createElement("div",{className:"post__meta"},a.a.createElement("time",{className:"post__meta-time",dateTime:Object(o.a)(new Date(u),"MMMM d, yyyy")},Object(o.a)(new Date(u),"MMMM yyyy")),a.a.createElement("span",{className:"post__meta-divider"}),a.a.createElement("span",{className:"post__meta-category",key:h},a.a.createElement(i.Link,{to:h,className:"post__meta-category-link"},s))),a.a.createElement("h2",{className:"post__title"},a.a.createElement(i.Link,{className:"post__title-link",to:l},r)),a.a.createElement("p",{className:"post__description"},c),a.a.createElement(i.Link,{className:"post__readmore",to:l},"Read"))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-35698532bb4003d6648f.js.map