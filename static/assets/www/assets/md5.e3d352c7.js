var C={exports:{}},s={exports:{}};(function(){var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",B={rotl:function(e,a){return e<<a|e>>>32-a},rotr:function(e,a){return e<<32-a|e>>>a},endian:function(e){if(e.constructor==Number)return B.rotl(e,8)&16711935|B.rotl(e,24)&4278255360;for(var a=0;a<e.length;a++)e[a]=B.endian(e[a]);return e},randomBytes:function(e){for(var a=[];e>0;e--)a.push(Math.floor(Math.random()*256));return a},bytesToWords:function(e){for(var a=[],c=0,i=0;c<e.length;c++,i+=8)a[i>>>5]|=e[c]<<24-i%32;return a},wordsToBytes:function(e){for(var a=[],c=0;c<e.length*32;c+=8)a.push(e[c>>>5]>>>24-c%32&255);return a},bytesToHex:function(e){for(var a=[],c=0;c<e.length;c++)a.push((e[c]>>>4).toString(16)),a.push((e[c]&15).toString(16));return a.join("")},hexToBytes:function(e){for(var a=[],c=0;c<e.length;c+=2)a.push(parseInt(e.substr(c,2),16));return a},bytesToBase64:function(e){for(var a=[],c=0;c<e.length;c+=3)for(var i=e[c]<<16|e[c+1]<<8|e[c+2],h=0;h<4;h++)c*8+h*6<=e.length*8?a.push(l.charAt(i>>>6*(3-h)&63)):a.push("=");return a.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/ig,"");for(var a=[],c=0,i=0;c<e.length;i=++c%4)i!=0&&a.push((l.indexOf(e.charAt(c-1))&Math.pow(2,-2*i+8)-1)<<i*2|l.indexOf(e.charAt(c))>>>6-i*2);return a}};s.exports=B})();var d={utf8:{stringToBytes:function(l){return d.bin.stringToBytes(unescape(encodeURIComponent(l)))},bytesToString:function(l){return decodeURIComponent(escape(d.bin.bytesToString(l)))}},bin:{stringToBytes:function(l){for(var B=[],e=0;e<l.length;e++)B.push(l.charCodeAt(e)&255);return B},bytesToString:function(l){for(var B=[],e=0;e<l.length;e++)B.push(String.fromCharCode(l[e]));return B.join("")}}},T=d;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var w=function(l){return l!=null&&(x(l)||H(l)||!!l._isBuffer)};function x(l){return!!l.constructor&&typeof l.constructor.isBuffer=="function"&&l.constructor.isBuffer(l)}function H(l){return typeof l.readFloatLE=="function"&&typeof l.slice=="function"&&x(l.slice(0,0))}(function(){var l=s.exports,B=T.utf8,e=w,a=T.bin,c=function(i,h){i.constructor==String?h&&h.encoding==="binary"?i=a.stringToBytes(i):i=B.stringToBytes(i):e(i)?i=Array.prototype.slice.call(i,0):!Array.isArray(i)&&i.constructor!==Uint8Array&&(i=i.toString());for(var u=l.bytesToWords(i),y=i.length*8,t=1732584193,r=-271733879,o=-1732584194,n=271733878,f=0;f<u.length;f++)u[f]=(u[f]<<8|u[f]>>>24)&16711935|(u[f]<<24|u[f]>>>8)&4278255360;u[y>>>5]|=128<<y%32,u[(y+64>>>9<<4)+14]=y;for(var v=c._ff,p=c._gg,F=c._hh,g=c._ii,f=0;f<u.length;f+=16){var _=t,S=r,A=o,I=n;t=v(t,r,o,n,u[f+0],7,-680876936),n=v(n,t,r,o,u[f+1],12,-389564586),o=v(o,n,t,r,u[f+2],17,606105819),r=v(r,o,n,t,u[f+3],22,-1044525330),t=v(t,r,o,n,u[f+4],7,-176418897),n=v(n,t,r,o,u[f+5],12,1200080426),o=v(o,n,t,r,u[f+6],17,-1473231341),r=v(r,o,n,t,u[f+7],22,-45705983),t=v(t,r,o,n,u[f+8],7,1770035416),n=v(n,t,r,o,u[f+9],12,-1958414417),o=v(o,n,t,r,u[f+10],17,-42063),r=v(r,o,n,t,u[f+11],22,-1990404162),t=v(t,r,o,n,u[f+12],7,1804603682),n=v(n,t,r,o,u[f+13],12,-40341101),o=v(o,n,t,r,u[f+14],17,-1502002290),r=v(r,o,n,t,u[f+15],22,1236535329),t=p(t,r,o,n,u[f+1],5,-165796510),n=p(n,t,r,o,u[f+6],9,-1069501632),o=p(o,n,t,r,u[f+11],14,643717713),r=p(r,o,n,t,u[f+0],20,-373897302),t=p(t,r,o,n,u[f+5],5,-701558691),n=p(n,t,r,o,u[f+10],9,38016083),o=p(o,n,t,r,u[f+15],14,-660478335),r=p(r,o,n,t,u[f+4],20,-405537848),t=p(t,r,o,n,u[f+9],5,568446438),n=p(n,t,r,o,u[f+14],9,-1019803690),o=p(o,n,t,r,u[f+3],14,-187363961),r=p(r,o,n,t,u[f+8],20,1163531501),t=p(t,r,o,n,u[f+13],5,-1444681467),n=p(n,t,r,o,u[f+2],9,-51403784),o=p(o,n,t,r,u[f+7],14,1735328473),r=p(r,o,n,t,u[f+12],20,-1926607734),t=F(t,r,o,n,u[f+5],4,-378558),n=F(n,t,r,o,u[f+8],11,-2022574463),o=F(o,n,t,r,u[f+11],16,1839030562),r=F(r,o,n,t,u[f+14],23,-35309556),t=F(t,r,o,n,u[f+1],4,-1530992060),n=F(n,t,r,o,u[f+4],11,1272893353),o=F(o,n,t,r,u[f+7],16,-155497632),r=F(r,o,n,t,u[f+10],23,-1094730640),t=F(t,r,o,n,u[f+13],4,681279174),n=F(n,t,r,o,u[f+0],11,-358537222),o=F(o,n,t,r,u[f+3],16,-722521979),r=F(r,o,n,t,u[f+6],23,76029189),t=F(t,r,o,n,u[f+9],4,-640364487),n=F(n,t,r,o,u[f+12],11,-421815835),o=F(o,n,t,r,u[f+15],16,530742520),r=F(r,o,n,t,u[f+2],23,-995338651),t=g(t,r,o,n,u[f+0],6,-198630844),n=g(n,t,r,o,u[f+7],10,1126891415),o=g(o,n,t,r,u[f+14],15,-1416354905),r=g(r,o,n,t,u[f+5],21,-57434055),t=g(t,r,o,n,u[f+12],6,1700485571),n=g(n,t,r,o,u[f+3],10,-1894986606),o=g(o,n,t,r,u[f+10],15,-1051523),r=g(r,o,n,t,u[f+1],21,-2054922799),t=g(t,r,o,n,u[f+8],6,1873313359),n=g(n,t,r,o,u[f+15],10,-30611744),o=g(o,n,t,r,u[f+6],15,-1560198380),r=g(r,o,n,t,u[f+13],21,1309151649),t=g(t,r,o,n,u[f+4],6,-145523070),n=g(n,t,r,o,u[f+11],10,-1120210379),o=g(o,n,t,r,u[f+2],15,718787259),r=g(r,o,n,t,u[f+9],21,-343485551),t=t+_>>>0,r=r+S>>>0,o=o+A>>>0,n=n+I>>>0}return l.endian([t,r,o,n])};c._ff=function(i,h,u,y,t,r,o){var n=i+(h&u|~h&y)+(t>>>0)+o;return(n<<r|n>>>32-r)+h},c._gg=function(i,h,u,y,t,r,o){var n=i+(h&y|u&~y)+(t>>>0)+o;return(n<<r|n>>>32-r)+h},c._hh=function(i,h,u,y,t,r,o){var n=i+(h^u^y)+(t>>>0)+o;return(n<<r|n>>>32-r)+h},c._ii=function(i,h,u,y,t,r,o){var n=i+(u^(h|~y))+(t>>>0)+o;return(n<<r|n>>>32-r)+h},c._blocksize=16,c._digestsize=16,C.exports=function(i,h){if(i==null)throw new Error("Illegal argument "+i);var u=l.wordsToBytes(c(i,h));return h&&h.asBytes?u:h&&h.asString?a.bytesToString(u):l.bytesToHex(u)}})();export{C as m};
