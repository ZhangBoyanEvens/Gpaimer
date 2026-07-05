/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ai="srgb",Ks="srgb-linear",ul="linear",St="srgb";const pf="300 es";function cd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ya(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xm(){const r=Ya("canvas");return r.style.display="block",r}const mf={};function _f(...r){const e="THREE."+r.shift();console.log(e,...r)}function je(...r){const e="THREE."+r.shift();console.warn(e,...r)}function mt(...r){const e="THREE."+r.shift();console.error(e,...r)}function $a(...r){const e=r.join(" ");e in mf||(mf[e]=!0,je(...r))}function Sm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class aa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zl=Math.PI/180,Hc=180/Math.PI;function co(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function ym(r,e){return(r%e+e)%e}function Gl(r,e,t){return(1-t)*r+t*e}function ca(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class uo{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*_;m<0&&(h=-h,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const T=Math.acos(m),M=Math.sin(T);p=Math.sin(p*T)/M,o=Math.sin(o*T)/M,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+_*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+_*o;const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,n=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vl.copy(this).projectOnVector(e),this.sub(Vl)}reflect(e){return this.sub(Vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vl=new Q,gf=new uo;class et{constructor(e,t,n,i,s,a,o,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],M=i[4],y=i[7],E=i[2],A=i[5],b=i[8];return s[0]=a*_+o*T+l*E,s[3]=a*m+o*M+l*A,s[6]=a*p+o*y+l*b,s[1]=c*_+u*T+f*E,s[4]=c*m+u*M+f*A,s[7]=c*p+u*y+f*b,s[2]=h*_+d*T+g*E,s[5]=h*m+d*M+g*A,s[8]=h*p+d*y+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hl.makeScale(e,t)),this}rotate(e){return this.premultiply(Hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hl=new et,vf=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xf=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mm(){const r={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===St&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(i.r=Gs(i.r),i.g=Gs(i.g),i.b=Gs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?ul:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return $a("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return $a("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ks]:{primaries:e,whitePoint:n,transfer:ul,toXYZ:vf,fromXYZ:xf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:n,transfer:St,toXYZ:vf,fromXYZ:xf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),r}const ft=Mm();function ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ds;class Em{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ds===void 0&&(ds=Ya("canvas")),ds.width=e.width,ds.height=e.height;const i=ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ds}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ya("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ji(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tm=0;class wu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Wl(i[a].image)):s.push(Wl(i[a]))}else s=Wl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Em.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let bm=0;const Xl=new Q;class gn extends aa{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=gn.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=co(),this.name="",this.source=new wu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xl).x}get height(){return this.source.getSize(Xl).y}get depth(){return this.source.getSize(Xl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=300;gn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,i=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(d+1)/2,E=(p+1)/2,A=(u+h)/4,b=(f+_)/4,P=(g+m)/4;return M>y&&M>E?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=A/n,s=b/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=P/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=b/s,i=P/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Am extends aa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new gn(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new wu(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Am{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ud extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wm extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fo{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,di):di.fromBufferAttribute(s,a),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),go.subVectors(this.max,ua),ps.subVectors(e.a,ua),ms.subVectors(e.b,ua),_s.subVectors(e.c,ua),ir.subVectors(ms,ps),rr.subVectors(_s,ms),Lr.subVectors(ps,_s);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Lr.z,Lr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Lr.z,0,-Lr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Lr.y,Lr.x,0];return!ql(t,ps,ms,_s,go)||(t=[1,0,0,0,1,0,0,0,1],!ql(t,ps,ms,_s,go))?!1:(vo.crossVectors(ir,rr),t=[vo.x,vo.y,vo.z],ql(t,ps,ms,_s,go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],di=new Q,_o=new fo,ps=new Q,ms=new Q,_s=new Q,ir=new Q,rr=new Q,Lr=new Q,ua=new Q,go=new Q,vo=new Q,Fr=new Q;function ql(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Fr.fromArray(r,s);const o=i.x*Math.abs(Fr.x)+i.y*Math.abs(Fr.y)+i.z*Math.abs(Fr.z),l=e.dot(Fr),c=t.dot(Fr),u=n.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Cm=new fo,fa=new Q,Yl=new Q;class Cu{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const t=fa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Yl)),this.expandByPoint(fa.copy(e.center).sub(Yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ki=new Q,$l=new Q,xo=new Q,sr=new Q,Kl=new Q,So=new Q,jl=new Q;class Rm{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$l.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),sr.copy(this.origin).sub($l);const s=e.distanceTo(t)*.5,a=-this.direction.dot(xo),o=sr.dot(this.direction),l=-sr.dot(xo),c=sr.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy($l).addScaledVector(xo,h),d}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const n=ki.dot(this.direction),i=ki.dot(ki)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,n,i,s){Kl.subVectors(t,e),So.subVectors(n,e),jl.crossVectors(Kl,So);let a=this.direction.dot(jl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;sr.subVectors(this.origin,e);const l=o*this.direction.dot(So.crossVectors(sr,So));if(l<0)return null;const c=o*this.direction.dot(Kl.cross(sr));if(c<0||l+c>a)return null;const u=-o*sr.dot(jl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pm,e,Dm)}lookAt(e,t,n){const i=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),ar.crossVectors(n,Hn),ar.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),ar.crossVectors(n,Hn)),ar.normalize(),yo.crossVectors(Hn,ar),i[0]=ar.x,i[4]=yo.x,i[8]=Hn.x,i[1]=ar.y,i[5]=yo.y,i[9]=Hn.y,i[2]=ar.z,i[6]=yo.z,i[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],M=n[7],y=n[11],E=n[15],A=i[0],b=i[4],P=i[8],v=i[12],x=i[1],D=i[5],R=i[9],F=i[13],N=i[2],O=i[6],z=i[10],k=i[14],Y=i[3],K=i[7],L=i[11],ne=i[15];return s[0]=a*A+o*x+l*N+c*Y,s[4]=a*b+o*D+l*O+c*K,s[8]=a*P+o*R+l*z+c*L,s[12]=a*v+o*F+l*k+c*ne,s[1]=u*A+f*x+h*N+d*Y,s[5]=u*b+f*D+h*O+d*K,s[9]=u*P+f*R+h*z+d*L,s[13]=u*v+f*F+h*k+d*ne,s[2]=g*A+_*x+m*N+p*Y,s[6]=g*b+_*D+m*O+p*K,s[10]=g*P+_*R+m*z+p*L,s[14]=g*v+_*F+m*k+p*ne,s[3]=T*A+M*x+y*N+E*Y,s[7]=T*b+M*D+y*O+E*K,s[11]=T*P+M*R+y*z+E*L,s[15]=T*v+M*F+y*k+E*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],T=l*d-c*h,M=o*d-c*f,y=o*h-l*f,E=a*d-c*u,A=a*h-l*u,b=a*f-o*u;return t*(_*T-m*M+p*y)-n*(g*T-m*E+p*A)+i*(g*M-_*E+p*b)-s*(g*y-_*A+m*b)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=f*m*c-_*h*c+_*l*d-o*m*d-f*l*p+o*h*p,M=g*h*c-u*m*c-g*l*d+a*m*d+u*l*p-a*h*p,y=u*_*c-g*f*c+g*o*d-a*_*d-u*o*p+a*f*p,E=g*f*l-u*_*l-g*o*h+a*_*h+u*o*m-a*f*m,A=t*T+n*M+i*y+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=T*b,e[1]=(_*h*s-f*m*s-_*i*d+n*m*d+f*i*p-n*h*p)*b,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*b,e[3]=(f*l*s-o*h*s-f*i*c+n*h*c+o*i*d-n*l*d)*b,e[4]=M*b,e[5]=(u*m*s-g*h*s+g*i*d-t*m*d-u*i*p+t*h*p)*b,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*b,e[7]=(a*h*s-u*l*s+u*i*c-t*h*c-a*i*d+t*l*d)*b,e[8]=y*b,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*b,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*b,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*d-t*o*d)*b,e[12]=E*b,e[13]=(u*_*i-g*f*i+g*n*h-t*_*h-u*n*m+t*f*m)*b,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*b,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*h+t*o*h)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,_=a*u,m=a*f,p=o*f,T=l*c,M=l*u,y=l*f,E=n.x,A=n.y,b=n.z;return i[0]=(1-(_+p))*E,i[1]=(d+y)*E,i[2]=(g-M)*E,i[3]=0,i[4]=(d-y)*A,i[5]=(1-(h+p))*A,i[6]=(m+T)*A,i[7]=0,i[8]=(g+M)*b,i[9]=(m-T)*b,i[10]=(1-(h+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=gs.set(i[0],i[1],i[2]).length();const a=gs.set(i[4],i[5],i[6]).length(),o=gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),pi.copy(this);const c=1/s,u=1/a,f=1/o;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=f,pi.elements[9]*=f,pi.elements[10]*=f,t.setFromRotationMatrix(pi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===2e3)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===2001)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===2e3)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===2001)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gs=new Q,pi=new Yt,Pm=new Q(0,0,0),Dm=new Q(1,1,1),ar=new Q,yo=new Q,Hn=new Q,Sf=new Yt,yf=new uo;class Qi{constructor(e=0,t=0,n=0,i=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yf.setFromEuler(this),this.setFromQuaternion(yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class fd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lm=0;const Mf=new Q,vs=new uo,zi=new Yt,Mo=new Q,ha=new Q,Fm=new Q,Im=new uo,Ef=new Q(1,0,0),Tf=new Q(0,1,0),bf=new Q(0,0,1),Af={type:"added"},Um={type:"removed"},xs={type:"childadded",child:null},Zl={type:"childremoved",child:null};class Qn extends aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new Q,t=new Qi,n=new uo,i=new Q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new et}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Ef,e)}rotateY(e){return this.rotateOnAxis(Tf,e)}rotateZ(e){return this.rotateOnAxis(bf,e)}translateOnAxis(e,t){return Mf.copy(e).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ef,e)}translateY(e){return this.translateOnAxis(Tf,e)}translateZ(e){return this.translateOnAxis(bf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mo.copy(e):Mo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(ha,Mo,this.up):zi.lookAt(Mo,ha,this.up),this.quaternion.setFromRotationMatrix(zi),i&&(zi.extractRotation(i.matrixWorld),vs.setFromRotationMatrix(zi),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Af),xs.child=e,this.dispatchEvent(xs),xs.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Um),Zl.child=e,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Af),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,Fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,Im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Qn.DEFAULT_UP=new Q(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new Q,Gi=new Q,Jl=new Q,Vi=new Q,Ss=new Q,ys=new Q,wf=new Q,Ql=new Q,ec=new Q,tc=new Q,nc=new Bt,ic=new Bt,rc=new Bt;class gi{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mi.subVectors(e,t),i.cross(mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){mi.subVectors(i,t),Gi.subVectors(n,t),Jl.subVectors(e,t);const a=mi.dot(mi),o=mi.dot(Gi),l=mi.dot(Jl),c=Gi.dot(Gi),u=Gi.dot(Jl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return nc.setScalar(0),ic.setScalar(0),rc.setScalar(0),nc.fromBufferAttribute(e,t),ic.fromBufferAttribute(e,n),rc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(nc,s.x),a.addScaledVector(ic,s.y),a.addScaledVector(rc,s.z),a}static isFrontFacing(e,t,n,i){return mi.subVectors(n,t),Gi.subVectors(e,t),mi.cross(Gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),mi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return gi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ss.subVectors(i,n),ys.subVectors(s,n),Ql.subVectors(e,n);const l=Ss.dot(Ql),c=ys.dot(Ql);if(l<=0&&c<=0)return t.copy(n);ec.subVectors(e,i);const u=Ss.dot(ec),f=ys.dot(ec);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ss,a);tc.subVectors(e,s);const d=Ss.dot(tc),g=ys.dot(tc);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ys,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return wf.subVectors(s,i),o=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(wf,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(Ss,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function sc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class yt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=ym(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=sc(a,s,e+1/3),this.g=sc(a,s,e),this.b=sc(a,s,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=ai){function n(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const n=hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return ft.workingToColorSpace(hn.copy(this),e),Math.round(ct(hn.r*255,0,255))*65536+Math.round(ct(hn.g*255,0,255))*256+Math.round(ct(hn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(hn.copy(this),t);const n=hn.r,i=hn.g,s=hn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=ai){ft.workingToColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,i=hn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(Eo);const n=Gl(or.h,Eo.h,t),i=Gl(or.s,Eo.s,t),s=Gl(or.l,Eo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new yt;yt.NAMES=hd;let Nm=0;class Cl extends aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=co(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dd extends Cl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new Q,To=new ht;let Om=0;class Di{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)To.fromBufferAttribute(this,t),To.applyMatrix3(e),this.setXY(t,To.x,To.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ca(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ca(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ca(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ca(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ca(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),n=Fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),n=Fn(n,this.array),i=Fn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),n=Fn(n,this.array),i=Fn(i,this.array),s=Fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class pd extends Di{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class md extends Di{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zi extends Di{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bm=0;const ri=new Yt,ac=new Qn,Ms=new Q,Wn=new fo,da=new fo,nn=new Q;class nr extends aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cd(e)?md:pd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];da.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Wn.min,da.min),Wn.expandByPoint(nn),nn.addVectors(Wn.max,da.max),Wn.expandByPoint(nn)):(Wn.expandByPoint(da.min),Wn.expandByPoint(da.max))}Wn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)nn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(nn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)nn.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(e,c),nn.add(Ms)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new Q,l[P]=new Q;const c=new Q,u=new Q,f=new Q,h=new ht,d=new ht,g=new ht,_=new Q,m=new Q;function p(P,v,x){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,v),f.fromBufferAttribute(n,x),h.fromBufferAttribute(s,P),d.fromBufferAttribute(s,v),g.fromBufferAttribute(s,x),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[P].add(_),o[v].add(_),o[x].add(_),l[P].add(m),l[v].add(m),l[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,v=T.length;P<v;++P){const x=T[P],D=x.start,R=x.count;for(let F=D,N=D+R;F<N;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new Q,y=new Q,E=new Q,A=new Q;function b(P){E.fromBufferAttribute(i,P),A.copy(E);const v=o[P];M.copy(v),M.sub(E.multiplyScalar(E.dot(v))).normalize(),y.crossVectors(A,v);const D=y.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,D)}for(let P=0,v=T.length;P<v;++P){const x=T[P],D=x.start,R=x.count;for(let F=D,N=D+R;F<N;F+=3)b(e.getX(F+0)),b(e.getX(F+1)),b(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Di(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new Q,s=new Q,a=new Q,o=new Q,l=new Q,c=new Q,u=new Q,f=new Q;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Di(h,u,f)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cf=new Yt,Ir=new Rm,bo=new Cu,Rf=new Q,Ao=new Q,wo=new Q,Co=new Q,oc=new Q,Ro=new Q,Pf=new Q,Po=new Q;class Ii extends Qn{constructor(e=new nr,t=new dd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(oc.fromBufferAttribute(f,e),a?Ro.addScaledVector(oc,u):Ro.addScaledVector(oc.sub(t),u))}t.add(Ro)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(bo.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(bo,Rf)===null||Ir.origin.distanceToSquared(Rf)>(e.far-e.near)**2))&&(Cf.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(Cf),!(n.boundingBox!==null&&Ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ir)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,E=M;y<E;y+=3){const A=o.getX(y),b=o.getX(y+1),P=o.getX(y+2);i=Do(this,p,e,n,c,u,f,A,b,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);i=Do(this,a,e,n,c,u,f,T,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,E=M;y<E;y+=3){const A=y,b=y+1,P=y+2;i=Do(this,p,e,n,c,u,f,A,b,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,M=m+1,y=m+2;i=Do(this,a,e,n,c,u,f,T,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function km(r,e,t,n,i,s,a,o){let l;if(e.side===1?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===0,o),l===null)return null;Po.copy(o),Po.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Po);return c<t.near||c>t.far?null:{distance:c,point:Po.clone(),object:r}}function Do(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ao),r.getVertexPosition(l,wo),r.getVertexPosition(c,Co);const u=km(r,e,t,n,Ao,wo,Co,Pf);if(u){const f=new Q;gi.getBarycoord(Pf,Ao,wo,Co,f),i&&(u.uv=gi.getInterpolatedAttribute(i,o,l,c,f,new ht)),s&&(u.uv1=gi.getInterpolatedAttribute(s,o,l,c,f,new ht)),a&&(u.normal=gi.getInterpolatedAttribute(a,o,l,c,f,new Q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Q,materialIndex:0};gi.getNormal(Ao,wo,Co,h.normal),u.face=h,u.barycoord=f}return u}class ho extends nr{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Zi(c,3)),this.setAttribute("normal",new Zi(u,3)),this.setAttribute("uv",new Zi(f,2));function g(_,m,p,T,M,y,E,A,b,P,v){const x=y/b,D=E/P,R=y/2,F=E/2,N=A/2,O=b+1,z=P+1;let k=0,Y=0;const K=new Q;for(let L=0;L<z;L++){const ne=L*D-F;for(let ce=0;ce<O;ce++){const Ie=ce*x-R;K[_]=Ie*T,K[m]=ne*M,K[p]=N,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=A>0?1:-1,u.push(K.x,K.y,K.z),f.push(ce/b),f.push(1-L/P),k+=1}}for(let L=0;L<P;L++)for(let ne=0;ne<b;ne++){const ce=h+ne+O*L,Ie=h+ne+O*(L+1),Fe=h+(ne+1)+O*(L+1),Ae=h+(ne+1)+O*L;l.push(ce,Ie,Ae),l.push(Ie,Fe,Ae),Y+=6}o.addGroup(d,Y,v),d+=Y,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mn(r){const e={};for(let t=0;t<r.length;t++){const n=js(r[t]);for(const i in n)e[i]=n[i]}return e}function zm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _d(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const Gm={clone:js,merge:Mn};var Vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Cl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vm,this.fragmentShader=Hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gd extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new Q,Df=new ht,Lf=new ht;class oi extends gd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hc*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,Df,Lf),t.subVectors(Lf,Df)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,Ts=1;class Wm extends Qn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new oi(Es,Ts,e,t);i.layers=this.layers,this.add(i);const s=new oi(Es,Ts,e,t);s.layers=this.layers,this.add(s);const a=new oi(Es,Ts,e,t);a.layers=this.layers,this.add(a);const o=new oi(Es,Ts,e,t);o.layers=this.layers,this.add(o);const l=new oi(Es,Ts,e,t);l.layers=this.layers,this.add(l);const c=new oi(Es,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vd extends gn{constructor(e=[],t=301,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xd extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ho(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new Ii(i,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Wm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Lo extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xm={type:"move"};class lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Lo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class qm extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ym extends gn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,u=1003,f,h){super(null,a,o,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cc=new Q,$m=new Q,Km=new et;class zr{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cc.subVectors(n,t).cross($m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Km.getNormalMatrix(e),i=this.coplanarPoint(cc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Cu,jm=new ht(.5,.5),Fo=new Q;class Sd{constructor(e=new zr,t=new zr,n=new zr,i=new zr,s=new zr,a=new zr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],T=s[12],M=s[13],y=s[14],E=s[15];if(i[0].setComponents(c-a,d-u,p-g,E-T).normalize(),i[1].setComponents(c+a,d+u,p+g,E+T).normalize(),i[2].setComponents(c+o,d+f,p+_,E+M).normalize(),i[3].setComponents(c-o,d-f,p-_,E-M).normalize(),n)i[4].setComponents(l,h,m,y).normalize(),i[5].setComponents(c-l,d-h,p-m,E-y).normalize();else if(i[4].setComponents(c-l,d-h,p-m,E-y).normalize(),t===2e3)i[5].setComponents(c+l,d+h,p+m,E+y).normalize();else if(t===2001)i[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const t=jm.distanceTo(e.center);return Ur.radius=.7071067811865476+t,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fo.x=i.normal.x>0?e.max.x:e.min.x,Fo.y=i.normal.y>0?e.max.y:e.min.y,Fo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ka extends gn{constructor(e,t,n=1014,i,s,a,o=1003,l=1003,c,u=1026,f=1){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zm extends Ka{constructor(e,t=1014,n=301,i,s,a=1003,o=1003,l,c=1026){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yd extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class po extends nr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*h-a;for(let M=0;M<c;M++){const y=M*f-s;g.push(y,-T,0),_.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const M=T+c*p,y=T+c*(p+1),E=T+1+c*(p+1),A=T+1+c*p;d.push(M,y,A),d.push(y,E,A)}this.setIndex(d),this.setAttribute("position",new Zi(g,3)),this.setAttribute("normal",new Zi(_,3)),this.setAttribute("uv",new Zi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jm extends Si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qm extends Cl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e_ extends Cl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class t_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const n_=new t_;class Ru{constructor(e){this.manager=e!==void 0?e:n_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ru.DEFAULT_MATERIAL_NAME="__DEFAULT";const bs=new WeakMap;class i_ extends Ru{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=uc.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=bs.get(a);f===void 0&&(f=[],bs.set(a,f)),f.push({onLoad:t,onError:i})}return a}const o=Ya("img");function l(){u(),t&&t(this);const f=bs.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}bs.delete(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),uc.remove(`image:${e}`);const h=bs.get(this)||[];for(let d=0;d<h.length;d++){const g=h[d];g.onError&&g.onError(f)}bs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),uc.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class r_ extends Ru{constructor(e){super(e)}load(e,t,n,i){const s=new gn,a=new i_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Md extends gd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class s_ extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class fr{constructor(e){this.value=e}clone(){return new fr(this.value.clone===void 0?this.value:this.value.clone())}}function Ff(r,e,t,n){const i=a_(n);switch(t){case 1021:return r*e;case 1028:return r*e/i.components*i.byteLength;case 1029:return r*e/i.components*i.byteLength;case 1030:return r*e*2/i.components*i.byteLength;case 1031:return r*e*2/i.components*i.byteLength;case 1022:return r*e*3/i.components*i.byteLength;case 1023:return r*e*4/i.components*i.byteLength;case 1033:return r*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a_(r){switch(r){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ed(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function o_(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var l_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,__=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,g_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,y_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,D_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,L_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,F_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B_="gl_FragColor = linearToOutputTexel( gl_FragColor );",k_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,j_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ag=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,og=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,C0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,k0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:l_,alphahash_pars_fragment:c_,alphamap_fragment:u_,alphamap_pars_fragment:f_,alphatest_fragment:h_,alphatest_pars_fragment:d_,aomap_fragment:p_,aomap_pars_fragment:m_,batching_pars_vertex:__,batching_vertex:g_,begin_vertex:v_,beginnormal_vertex:x_,bsdfs:S_,iridescence_fragment:y_,bumpmap_pars_fragment:M_,clipping_planes_fragment:E_,clipping_planes_pars_fragment:T_,clipping_planes_pars_vertex:b_,clipping_planes_vertex:A_,color_fragment:w_,color_pars_fragment:C_,color_pars_vertex:R_,color_vertex:P_,common:D_,cube_uv_reflection_fragment:L_,defaultnormal_vertex:F_,displacementmap_pars_vertex:I_,displacementmap_vertex:U_,emissivemap_fragment:N_,emissivemap_pars_fragment:O_,colorspace_fragment:B_,colorspace_pars_fragment:k_,envmap_fragment:z_,envmap_common_pars_fragment:G_,envmap_pars_fragment:V_,envmap_pars_vertex:H_,envmap_physical_pars_fragment:eg,envmap_vertex:W_,fog_vertex:X_,fog_pars_vertex:q_,fog_fragment:Y_,fog_pars_fragment:$_,gradientmap_pars_fragment:K_,lightmap_pars_fragment:j_,lights_lambert_fragment:Z_,lights_lambert_pars_fragment:J_,lights_pars_begin:Q_,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:rg,lights_physical_fragment:sg,lights_physical_pars_fragment:ag,lights_fragment_begin:og,lights_fragment_maps:lg,lights_fragment_end:cg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:fg,logdepthbuf_pars_vertex:hg,logdepthbuf_vertex:dg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:_g,map_particle_pars_fragment:gg,metalnessmap_fragment:vg,metalnessmap_pars_fragment:xg,morphinstance_vertex:Sg,morphcolor_vertex:yg,morphnormal_vertex:Mg,morphtarget_pars_vertex:Eg,morphtarget_vertex:Tg,normal_fragment_begin:bg,normal_fragment_maps:Ag,normal_pars_fragment:wg,normal_pars_vertex:Cg,normal_vertex:Rg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Ig,opaque_fragment:Ug,packing:Ng,premultiplied_alpha_fragment:Og,project_vertex:Bg,dithering_fragment:kg,dithering_pars_fragment:zg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Hg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:Yg,skinning_pars_vertex:$g,skinning_vertex:Kg,skinnormal_vertex:jg,specularmap_fragment:Zg,specularmap_pars_fragment:Jg,tonemapping_fragment:Qg,tonemapping_pars_fragment:e0,transmission_fragment:t0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:r0,uv_vertex:s0,worldpos_vertex:a0,background_vert:o0,background_frag:l0,backgroundCube_vert:c0,backgroundCube_frag:u0,cube_vert:f0,cube_frag:h0,depth_vert:d0,depth_frag:p0,distance_vert:m0,distance_frag:_0,equirect_vert:g0,equirect_frag:v0,linedashed_vert:x0,linedashed_frag:S0,meshbasic_vert:y0,meshbasic_frag:M0,meshlambert_vert:E0,meshlambert_frag:T0,meshmatcap_vert:b0,meshmatcap_frag:A0,meshnormal_vert:w0,meshnormal_frag:C0,meshphong_vert:R0,meshphong_frag:P0,meshphysical_vert:D0,meshphysical_frag:L0,meshtoon_vert:F0,meshtoon_frag:I0,points_vert:U0,points_frag:N0,shadow_vert:O0,shadow_frag:B0,sprite_vert:k0,sprite_frag:z0},Ce={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Ti={basic:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Mn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Mn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Mn([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Mn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Mn([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Mn([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Mn([Ce.common,Ce.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Mn([Ce.lights,Ce.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Ti.physical={uniforms:Mn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Io={r:0,b:0,g:0},Nr=new Qi,G0=new Yt;function V0(r,e,t,n,i,s,a){const o=new yt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function _(M){let y=!1;const E=g(M);E===null?p(o,l):E&&E.isColor&&(p(E,1),y=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===306)?(u===void 0&&(u=new Ii(new ho(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:js(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Nr.copy(y.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(Nr)),u.material.toneMapped=ft.getTransfer(E.colorSpace)!==St,(f!==E||h!==E.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,d=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ii(new po(2,2),new Si({name:"BackgroundMaterial",uniforms:js(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ft.getTransfer(E.colorSpace)!==St,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(Io,_d(r)),n.buffers.color.setClear(Io.r,Io.g,Io.b,y,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:m,dispose:T}}function H0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(x,D,R,F,N){let O=!1;const z=f(F,R,D);s!==z&&(s=z,c(s.object)),O=d(x,F,R,N),O&&g(x,F,R,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,y(x,D,R,F),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function f(x,D,R){const F=R.wireframe===!0;let N=n[x.id];N===void 0&&(N={},n[x.id]=N);let O=N[D.id];O===void 0&&(O={},N[D.id]=O);let z=O[F];return z===void 0&&(z=h(l()),O[F]=z),z}function h(x){const D=[],R=[],F=[];for(let N=0;N<t;N++)D[N]=0,R[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:R,attributeDivisors:F,object:x,attributes:{},index:null}}function d(x,D,R,F){const N=s.attributes,O=D.attributes;let z=0;const k=R.getAttributes();for(const Y in k)if(k[Y].location>=0){const L=N[Y];let ne=O[Y];if(ne===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),L===void 0||L.attribute!==ne||ne&&L.data!==ne.data)return!0;z++}return s.attributesNum!==z||s.index!==F}function g(x,D,R,F){const N={},O=D.attributes;let z=0;const k=R.getAttributes();for(const Y in k)if(k[Y].location>=0){let L=O[Y];L===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(L=x.instanceColor));const ne={};ne.attribute=L,L&&L.data&&(ne.data=L.data),N[Y]=ne,z++}s.attributes=N,s.attributesNum=z,s.index=F}function _(){const x=s.newAttributes;for(let D=0,R=x.length;D<R;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){const R=s.newAttributes,F=s.enabledAttributes,N=s.attributeDivisors;R[x]=1,F[x]===0&&(r.enableVertexAttribArray(x),F[x]=1),N[x]!==D&&(r.vertexAttribDivisor(x,D),N[x]=D)}function T(){const x=s.newAttributes,D=s.enabledAttributes;for(let R=0,F=D.length;R<F;R++)D[R]!==x[R]&&(r.disableVertexAttribArray(R),D[R]=0)}function M(x,D,R,F,N,O,z){z===!0?r.vertexAttribIPointer(x,D,R,N,O):r.vertexAttribPointer(x,D,R,F,N,O)}function y(x,D,R,F){_();const N=F.attributes,O=R.getAttributes(),z=D.defaultAttributeValues;for(const k in O){const Y=O[k];if(Y.location>=0){let K=N[k];if(K===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const L=K.normalized,ne=K.itemSize,ce=e.get(K);if(ce===void 0)continue;const Ie=ce.buffer,Fe=ce.type,Ae=ce.bytesPerElement,X=Fe===r.INT||Fe===r.UNSIGNED_INT||K.gpuType===1013;if(K.isInterleavedBufferAttribute){const te=K.data,de=te.stride,Oe=K.offset;if(te.isInstancedInterleavedBuffer){for(let ye=0;ye<Y.locationSize;ye++)p(Y.location+ye,te.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ye=0;ye<Y.locationSize;ye++)m(Y.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let ye=0;ye<Y.locationSize;ye++)M(Y.location+ye,ne/Y.locationSize,Fe,L,de*Ae,(Oe+ne/Y.locationSize*ye)*Ae,X)}else{if(K.isInstancedBufferAttribute){for(let te=0;te<Y.locationSize;te++)p(Y.location+te,K.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let te=0;te<Y.locationSize;te++)m(Y.location+te);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let te=0;te<Y.locationSize;te++)M(Y.location+te,ne/Y.locationSize,Fe,L,ne*Ae,ne/Y.locationSize*te*Ae,X)}}else if(z!==void 0){const L=z[k];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(Y.location,L);break;case 3:r.vertexAttrib3fv(Y.location,L);break;case 4:r.vertexAttrib4fv(Y.location,L);break;default:r.vertexAttrib1fv(Y.location,L)}}}}T()}function E(){P();for(const x in n){const D=n[x];for(const R in D){const F=D[R];for(const N in F)u(F[N].object),delete F[N];delete D[R]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const R in D){const F=D[R];for(const N in F)u(F[N].object),delete F[N];delete D[R]}delete n[x.id]}function b(x){for(const D in n){const R=n[D];if(R[x.id]===void 0)continue;const F=R[x.id];for(const N in F)u(F[N].object),delete F[N];delete R[x.id]}}function P(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function W0(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function X0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==1023&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const P=b===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==1009&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==1015&&!P)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:y,maxSamples:E,samples:A}}function q0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new zr,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,M=T*4;let y=p.clippingState||null;l.value=y,y=u(g,h,M,d);for(let E=0;E!==M;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=d;M!==_;++M,y+=4)a.copy(f[M]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Y0(r){let e=new WeakMap;function t(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new xd(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const gr=4,If=[.125,.215,.35,.446,.526,.582],Xr=20,$0=256,pa=new Md,Uf=new yt;let fc=null,hc=0,dc=0,pc=!1;const K0=new Q;class Nf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=K0}=s;fc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fc,hc,dc),this._renderer.xr.enabled=pc,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Ks,depthBuffer:!1},i=Of(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Of(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=j0(s)),this._blurMaterial=J0(s,e,t),this._ggxMaterial=Z0(s,e,t)}return i}_compileMaterial(e){const t=new Ii(new nr,e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,n,i,s){const l=new oi(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Uf),f.toneMapping=0,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ii(new ho,new dd({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(Uf),p=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const E=this._cubeSize;As(i,y*E,M>2?E:0,E,E),f.setRenderTarget(i),p&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;As(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-gr?n-g+gr:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,As(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(o,pa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,As(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,pa)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&mt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Xr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Xr;m>Xr&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xr}`);const p=[];let T=0;for(let b=0;b<Xr;++b){const P=b/_,v=Math.exp(-P*P/2);p.push(v),b===0?T+=v:b<m&&(T+=2*v)}for(let b=0;b<p.length;b++)p[b]=p[b]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const y=this._sizeLods[i],E=3*y*(i>M-gr?i-M+gr:0),A=4*(this._cubeSize-y);As(t,E,A,3*y,2*y),l.setRenderTarget(t),l.render(f,pa)}}function j0(r){const e=[],t=[],n=[];let i=r;const s=r-gr+1+If.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-gr?l=If[a-r+gr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),M=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let A=0;A<d;A++){const b=A%3*2/3-1,P=A>2?0:-1,v=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];T.set(v,_*g*A),M.set(h,m*g*A);const x=[A,A,A,A,A,A];y.set(x,p*g*A)}const E=new nr;E.setAttribute("position",new Di(T,_)),E.setAttribute("uv",new Di(M,m)),E.setAttribute("faceIndex",new Di(y,p)),n.push(new Ii(E,null)),i>gr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Of(r,e,t){const n=new Pi(r,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Z0(r,e,t){return new Si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function J0(r,e,t){const n=new Float32Array(Xr),i=new Q(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bf(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function kf(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Q0(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,u=l===301||l===302;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Nf(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Nf(r)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ev(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&$a("WebGLRenderer: "+n+" extension not supported."),i}}}function tv(r,e,t,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],r.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let M=0,y=T.length;M<y;M+=3){const E=T[M+0],A=T[M+1],b=T[M+2];h.push(E,A,A,b,b,E)}}else if(g!==void 0){const T=g.array;_=g.version;for(let M=0,y=T.length/3-1;M<y;M+=3){const E=M+0,A=M+1,b=M+2;h.push(E,A,A,b,b,E)}}else return;const m=new(cd(h)?md:pd)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function nv(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*a),t.update(d,n,1)}function c(h,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,h*a,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function iv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:mt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rv(r,e,t){const n=new WeakMap,i=new Bt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let x=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var d=x;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let E=o.attributes.position.count*y,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const b=new Float32Array(E*A*4*f),P=new ud(b,E,A,f);P.type=1015,P.needsUpdate=!0;const v=y*4;for(let D=0;D<f;D++){const R=p[D],F=T[D],N=M[D],O=E*A*4*D;for(let z=0;z<R.count;z++){const k=z*v;g===!0&&(i.fromBufferAttribute(R,z),b[O+k+0]=i.x,b[O+k+1]=i.y,b[O+k+2]=i.z,b[O+k+3]=0),_===!0&&(i.fromBufferAttribute(F,z),b[O+k+4]=i.x,b[O+k+5]=i.y,b[O+k+6]=i.z,b[O+k+7]=0),m===!0&&(i.fromBufferAttribute(N,z),b[O+k+8]=i.x,b[O+k+9]=i.y,b[O+k+10]=i.z,b[O+k+11]=N.itemSize===4?i.w:1)}}h={count:f,texture:P,size:new ht(E,A)},n.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function sv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const av={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function ov(r,e,t,n,i){const s=new Pi(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Pi(e,t,{type:1016,depthBuffer:!1,stencilBuffer:!1}),o=new nr;o.setAttribute("position",new Zi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Zi([0,2,0,0,2,0],2));const l=new Jm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ii(o,l),u=new Md(-1,1,1,-1,0,1);let f=null,h=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(T,M){s.setSize(T,M),a.setSize(T,M);for(let y=0;y<m.length;y++){const E=m[y];E.setSize&&E.setSize(T,M)}},this.setEffects=function(T){m=T,p=m.length>0&&m[0].isRenderPass===!0;const M=s.width,y=s.height;for(let E=0;E<m.length;E++){const A=m[E];A.setSize&&A.setSize(M,y)}},this.begin=function(T,M){if(d||T.toneMapping===0&&m.length===0)return!1;if(_=M,M!==null){const y=M.width,E=M.height;(s.width!==y||s.height!==E)&&this.setSize(y,E)}return p===!1&&T.setRenderTarget(s),g=T.toneMapping,T.toneMapping=0,!0},this.hasRenderPass=function(){return p},this.end=function(T,M){T.toneMapping=g,d=!0;let y=s,E=a;for(let A=0;A<m.length;A++){const b=m[A];if(b.enabled!==!1&&(b.render(T,E,y,M),b.needsSwap!==!1)){const P=y;y=E,E=P}}if(f!==T.outputColorSpace||h!==T.toneMapping){f=T.outputColorSpace,h=T.toneMapping,l.defines={},ft.getTransfer(f)===St&&(l.defines.SRGB_TRANSFER="");const A=av[h];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,T.setRenderTarget(_),T.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Td=new gn,Wc=new Ka(1,1),bd=new ud,Ad=new wm,wd=new vd,zf=[],Gf=[],Vf=new Float32Array(16),Hf=new Float32Array(9),Wf=new Float32Array(4);function oa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=zf[i];if(s===void 0&&(s=new Float32Array(i),zf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Qt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Pl(r,e){let t=Gf[e];t===void 0&&(t=new Int32Array(e),Gf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function lv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2fv(this.addr,e),Qt(t,e)}}function uv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;r.uniform3fv(this.addr,e),Qt(t,e)}}function fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4fv(this.addr,e),Qt(t,e)}}function hv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;Wf.set(n),r.uniformMatrix2fv(this.addr,!1,Wf),Qt(t,n)}}function dv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;Hf.set(n),r.uniformMatrix3fv(this.addr,!1,Hf),Qt(t,n)}}function pv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;Vf.set(n),r.uniformMatrix4fv(this.addr,!1,Vf),Qt(t,n)}}function mv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function _v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2iv(this.addr,e),Qt(t,e)}}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3iv(this.addr,e),Qt(t,e)}}function vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4iv(this.addr,e),Qt(t,e)}}function xv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2uiv(this.addr,e),Qt(t,e)}}function yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3uiv(this.addr,e),Qt(t,e)}}function Mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4uiv(this.addr,e),Qt(t,e)}}function Ev(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Wc.compareFunction=t.isReversedDepthBuffer()?518:515,s=Wc):s=Td,t.setTexture2D(e||s,i)}function Tv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ad,i)}function bv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wd,i)}function Av(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bd,i)}function wv(r){switch(r){case 5126:return lv;case 35664:return cv;case 35665:return uv;case 35666:return fv;case 35674:return hv;case 35675:return dv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return _v;case 35668:case 35672:return gv;case 35669:case 35673:return vv;case 5125:return xv;case 36294:return Sv;case 36295:return yv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return Av}}function Cv(r,e){r.uniform1fv(this.addr,e)}function Rv(r,e){const t=oa(e,this.size,2);r.uniform2fv(this.addr,t)}function Pv(r,e){const t=oa(e,this.size,3);r.uniform3fv(this.addr,t)}function Dv(r,e){const t=oa(e,this.size,4);r.uniform4fv(this.addr,t)}function Lv(r,e){const t=oa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Fv(r,e){const t=oa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Iv(r,e){const t=oa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Uv(r,e){r.uniform1iv(this.addr,e)}function Nv(r,e){r.uniform2iv(this.addr,e)}function Ov(r,e){r.uniform3iv(this.addr,e)}function Bv(r,e){r.uniform4iv(this.addr,e)}function kv(r,e){r.uniform1uiv(this.addr,e)}function zv(r,e){r.uniform2uiv(this.addr,e)}function Gv(r,e){r.uniform3uiv(this.addr,e)}function Vv(r,e){r.uniform4uiv(this.addr,e)}function Hv(r,e,t){const n=this.cache,i=e.length,s=Pl(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Wc:a=Td;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Wv(r,e,t){const n=this.cache,i=e.length,s=Pl(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ad,s[a])}function Xv(r,e,t){const n=this.cache,i=e.length,s=Pl(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||wd,s[a])}function qv(r,e,t){const n=this.cache,i=e.length,s=Pl(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||bd,s[a])}function Yv(r){switch(r){case 5126:return Cv;case 35664:return Rv;case 35665:return Pv;case 35666:return Dv;case 35674:return Lv;case 35675:return Fv;case 35676:return Iv;case 5124:case 35670:return Uv;case 35667:case 35671:return Nv;case 35668:case 35672:return Ov;case 35669:case 35673:return Bv;case 5125:return kv;case 36294:return zv;case 36295:return Gv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}class $v{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wv(t.type)}}class Kv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yv(t.type)}}class jv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const mc=/(\w+)(\])?(\[|\.)?/g;function Xf(r,e){r.seq.push(e),r.map[e.id]=e}function Zv(r,e,t){const n=r.name,i=n.length;for(mc.lastIndex=0;;){const s=mc.exec(n),a=mc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Xf(t,c===void 0?new $v(o,r,e):new Kv(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new jv(o),Xf(t,f)),t=f}}}class Qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Zv(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function qf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Jv=37297;let Qv=0;function ex(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Yf=new et;function tx(r){ft._getMatrix(Yf,ft.workingColorSpace,r);const e=`mat3( ${Yf.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case ul:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function $f(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ex(r.getShaderSource(e),o)}else return s}function nx(r,e){const t=tx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ix={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function rx(r,e){const t=ix[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uo=new Q;function sx(){ft.getLuminanceCoefficients(Uo);const r=Uo.x.toFixed(4),e=Uo.y.toFixed(4),t=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ax(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function ox(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ya(r){return r!==""}function Kf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(r){return r.replace(cx,fx)}const ux=new Map;function fx(r,e){let t=tt[e];if(t===void 0){const n=ux.get(e);if(n!==void 0)t=tt[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xc(t)}const hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zf(r){return r.replace(hx,dx)}function dx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Jf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const px={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function mx(r){return px[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _x={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function gx(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":_x[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const vx={302:"ENVMAP_MODE_REFRACTION"};function xx(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":vx[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Sx={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function yx(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Sx[r.combine]||"ENVMAP_BLENDING_NONE"}function Mx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ex(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=mx(t),c=gx(t),u=xx(t),f=yx(t),h=Mx(t),d=ax(t),g=ox(s),_=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),p.length>0&&(p+=`
`)):(m=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),p=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?tt.tonemapping_pars_fragment:"",t.toneMapping!==0?rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,nx("linearToOutputTexel",t.outputColorSpace),sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=Xc(a),a=Kf(a,t),a=jf(a,t),o=Xc(o),o=Kf(o,t),o=jf(o,t),a=Zf(a),o=Zf(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=T+m+a,y=T+p+o,E=qf(i,i.VERTEX_SHADER,M),A=qf(i,i.FRAGMENT_SHADER,y);i.attachShader(_,E),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(D){if(r.debug.checkShaderErrors){const R=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(E)||"",N=i.getShaderInfoLog(A)||"",O=R.trim(),z=F.trim(),k=N.trim();let Y=!0,K=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,A);else{const L=$f(i,E,"vertex"),ne=$f(i,A,"fragment");mt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+L+`
`+ne)}else O!==""?je("WebGLProgram: Program Info Log:",O):(z===""||k==="")&&(K=!1);K&&(D.diagnostics={runnable:Y,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(E),i.deleteShader(A),P=new Qo(i,_),v=lx(i,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,Jv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let Tx=0;class bx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ax(e),t.set(e,n)),n}}class Ax{constructor(e){this.id=Tx++,this.code=e,this.usedTimes=0}}function wx(r,e,t,n,i,s,a){const o=new fd,l=new bx,c=new Set,u=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,D,R,F){const N=R.fog,O=F.geometry,z=v.isMeshStandardMaterial?R.environment:null,k=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),Y=k&&k.mapping===306?k.image.height:null,K=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&je("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const L=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ne=L!==void 0?L.length:0;let ce=0;O.morphAttributes.position!==void 0&&(ce=1),O.morphAttributes.normal!==void 0&&(ce=2),O.morphAttributes.color!==void 0&&(ce=3);let Ie,Fe,Ae,X;if(K){const be=Ti[K];Ie=be.vertexShader,Fe=be.fragmentShader}else Ie=v.vertexShader,Fe=v.fragmentShader,l.update(v),Ae=l.getVertexShaderID(v),X=l.getFragmentShaderID(v);const te=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),Oe=F.isInstancedMesh===!0,ye=F.isBatchedMesh===!0,ke=!!v.map,Ze=!!v.matcap,me=!!k,De=!!v.aoMap,qe=!!v.lightMap,ze=!!v.bumpMap,H=!!v.normalMap,U=!!v.displacementMap,oe=!!v.emissiveMap,G=!!v.metalnessMap,ie=!!v.roughnessMap,q=v.anisotropy>0,C=v.clearcoat>0,S=v.dispersion>0,B=v.iridescence>0,ee=v.sheen>0,j=v.transmission>0,$=q&&!!v.anisotropyMap,ve=C&&!!v.clearcoatMap,ae=C&&!!v.clearcoatNormalMap,Me=C&&!!v.clearcoatRoughnessMap,le=B&&!!v.iridescenceMap,fe=B&&!!v.iridescenceThicknessMap,pe=ee&&!!v.sheenColorMap,Te=ee&&!!v.sheenRoughnessMap,Le=!!v.specularMap,_e=!!v.specularColorMap,Xe=!!v.specularIntensityMap,I=j&&!!v.transmissionMap,Se=j&&!!v.thicknessMap,ue=!!v.gradientMap,he=!!v.alphaMap,se=v.alphaTest>0,re=!!v.alphaHash,ge=!!v.extensions;let Ue=0;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ue=r.toneMapping);const rt={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:Ie,fragmentShader:Fe,defines:v.defines,customVertexShaderID:Ae,customFragmentShaderID:X,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ye,batchingColor:ye&&F._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&F.instanceColor!==null,instancingMorph:Oe&&F.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ks,alphaToCoverage:!!v.alphaToCoverage,map:ke,matcap:Ze,envMap:me,envMapMode:me&&k.mapping,envMapCubeUVHeight:Y,aoMap:De,lightMap:qe,bumpMap:ze,normalMap:H,displacementMap:U,emissiveMap:oe,normalMapObjectSpace:H&&v.normalMapType===1,normalMapTangentSpace:H&&v.normalMapType===0,metalnessMap:G,roughnessMap:ie,anisotropy:q,anisotropyMap:$,clearcoat:C,clearcoatMap:ve,clearcoatNormalMap:ae,clearcoatRoughnessMap:Me,dispersion:S,iridescence:B,iridescenceMap:le,iridescenceThicknessMap:fe,sheen:ee,sheenColorMap:pe,sheenRoughnessMap:Te,specularMap:Le,specularColorMap:_e,specularIntensityMap:Xe,transmission:j,transmissionMap:I,thicknessMap:Se,gradientMap:ue,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:he,alphaTest:se,alphaHash:re,combine:v.combine,mapUv:ke&&_(v.map.channel),aoMapUv:De&&_(v.aoMap.channel),lightMapUv:qe&&_(v.lightMap.channel),bumpMapUv:ze&&_(v.bumpMap.channel),normalMapUv:H&&_(v.normalMap.channel),displacementMapUv:U&&_(v.displacementMap.channel),emissiveMapUv:oe&&_(v.emissiveMap.channel),metalnessMapUv:G&&_(v.metalnessMap.channel),roughnessMapUv:ie&&_(v.roughnessMap.channel),anisotropyMapUv:$&&_(v.anisotropyMap.channel),clearcoatMapUv:ve&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(v.sheenRoughnessMap.channel),specularMapUv:Le&&_(v.specularMap.channel),specularColorMapUv:_e&&_(v.specularColorMap.channel),specularIntensityMapUv:Xe&&_(v.specularIntensityMap.channel),transmissionMapUv:I&&_(v.transmissionMap.channel),thicknessMapUv:Se&&_(v.thicknessMap.channel),alphaMapUv:he&&_(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(H||q),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(ke||he),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:F.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ce,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ue,decodeVideoTexture:ke&&v.map.isVideoTexture===!0&&ft.getTransfer(v.map.colorSpace)===St,decodeVideoTextureEmissive:oe&&v.emissiveMap.isVideoTexture===!0&&ft.getTransfer(v.emissiveMap.colorSpace)===St,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ge&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&v.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function p(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)x.push(D),x.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(T(x,v),M(x,v),x.push(r.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function T(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function M(v,x){o.disableAll(),x.instancing&&o.enable(0),x.instancingColor&&o.enable(1),x.instancingMorph&&o.enable(2),x.matcap&&o.enable(3),x.envMap&&o.enable(4),x.normalMapObjectSpace&&o.enable(5),x.normalMapTangentSpace&&o.enable(6),x.clearcoat&&o.enable(7),x.iridescence&&o.enable(8),x.alphaTest&&o.enable(9),x.vertexColors&&o.enable(10),x.vertexAlphas&&o.enable(11),x.vertexUv1s&&o.enable(12),x.vertexUv2s&&o.enable(13),x.vertexUv3s&&o.enable(14),x.vertexTangents&&o.enable(15),x.anisotropy&&o.enable(16),x.alphaHash&&o.enable(17),x.batching&&o.enable(18),x.dispersion&&o.enable(19),x.batchingColor&&o.enable(20),x.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const x=g[v.type];let D;if(x){const R=Ti[x];D=Gm.clone(R.uniforms)}else D=v.uniforms;return D}function E(v,x){let D=f.get(x);return D!==void 0?++D.usedTimes:(D=new Ex(r,x,v,s),u.push(D),f.set(x,D)),D}function A(v){if(--v.usedTimes===0){const x=u.indexOf(v);u[x]=u[u.length-1],u.pop(),f.delete(v.cacheKey),v.destroy()}}function b(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:P}}function Cx(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Rx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Qf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function eh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,d,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Rx),n.length>1&&n.sort(h||Qf),i.length>1&&i.sort(h||Qf)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Px(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new eh,r.set(n,[a])):i>=s.length?(a=new eh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Dx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new yt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[e.id]=t,t}}}function Lx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Fx=0;function Ix(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ux(r){const e=new Dx,t=Lx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Q);const i=new Q,s=new Yt,a=new Yt;function o(c){let u=0,f=0,h=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,M=0,y=0,E=0,A=0,b=0;c.sort(Ix);for(let v=0,x=c.length;v<x;v++){const D=c[v],R=D.color,F=D.intensity,N=D.distance;let O=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===1030?O=D.shadow.map.texture:O=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=R.r*F,f+=R.g*F,h+=R.b*F;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],F);b++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const k=D.shadow,Y=t.get(D);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=D.shadow.matrix,T++}n.directional[d]=z,d++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(R).multiplyScalar(F),z.distance=N,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[_]=z;const k=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,k.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[_]=k.matrix,D.castShadow){const Y=t.get(D);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=O,y++}_++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(R).multiplyScalar(F),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=z,m++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const k=D.shadow,Y=t.get(D);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,Y.shadowCameraNear=k.camera.near,Y.shadowCameraFar=k.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=z,g++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(F),z.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[p]=z,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==T||P.numPointShadows!==M||P.numSpotShadows!==y||P.numSpotMaps!==E||P.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=T,P.numPointShadows=M,P.numSpotShadows=y,P.numSpotMaps=E,P.numLightProbes=b,n.version=Fx++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const M=c[p];if(M.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(M.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function th(r){const e=new Ux(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Nx(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new th(r),e.set(i,[o])):s>=a.length?(o=new th(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kx=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],zx=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],nh=new Yt,ma=new Q,_c=new Q;function Gx(r,e,t){let n=new Sd;const i=new ht,s=new ht,a=new Bt,o=new Qm,l=new e_,c={},u=t.maxTextureSize,f={0:1,1:0,2:2},h=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Ox,fragmentShader:Bx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new nr;g.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ii(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(A,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===2&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=1);const v=r.getRenderTarget(),x=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),R=r.state;R.setBlending(0),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const F=p!==this.type;F&&b.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(O=>O.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,O=A.length;N<O;N++){const z=A[N],k=z.shadow;if(k===void 0){je("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const Y=k.getFrameExtents();if(i.multiply(Y),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Y.x),i.x=s.x*Y.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Y.y),i.y=s.y*Y.y,k.mapSize.y=s.y)),k.map===null||F===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===3){if(z.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Pi(i.x,i.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new Ka(i.x,i.y,1015),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=1026,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=1003,k.map.depthTexture.magFilter=1003}else{z.isPointLight?(k.map=new xd(i.x),k.map.depthTexture=new Zm(i.x,1014)):(k.map=new Pi(i.x,i.y),k.map.depthTexture=new Ka(i.x,i.y,1014)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=1026;const L=r.state.buffers.depth.getReversed();this.type===1?(k.map.depthTexture.compareFunction=L?518:515,k.map.depthTexture.minFilter=1006,k.map.depthTexture.magFilter=1006):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=1003,k.map.depthTexture.magFilter=1003)}k.camera.updateProjectionMatrix()}const K=k.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<K;L++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,L),r.clear();else{L===0&&(r.setRenderTarget(k.map),r.clear());const ne=k.getViewport(L);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),R.viewport(a)}if(z.isPointLight){const ne=k.camera,ce=k.matrix,Ie=z.distance||ne.far;Ie!==ne.far&&(ne.far=Ie,ne.updateProjectionMatrix()),ma.setFromMatrixPosition(z.matrixWorld),ne.position.copy(ma),_c.copy(ne.position),_c.add(kx[L]),ne.up.copy(zx[L]),ne.lookAt(_c),ne.updateMatrixWorld(),ce.makeTranslation(-ma.x,-ma.y,-ma.z),nh.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),k._frustum.setFromProjectionMatrix(nh,ne.coordinateSystem,ne.reversedDepth)}else k.updateMatrices(z);n=k.getFrustum(),y(b,P,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===3&&T(k,P),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,x,D)};function T(A,b){const P=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pi(i.x,i.y,{format:1030,type:1016})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,P,h,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,P,d,_,null)}function M(A,b,P,v){let x=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)x=D;else if(x=P.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const R=x.uuid,F=b.uuid;let N=c[R];N===void 0&&(N={},c[R]=N);let O=N[F];O===void 0&&(O=x.clone(),N[F]=O,b.addEventListener("dispose",E)),x=O}if(x.visible=b.visible,x.wireframe=b.wireframe,v===3?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const R=r.properties.get(x);R.light=P}return x}function y(A,b,P,v,x){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===3)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const F=e.update(A),N=A.material;if(Array.isArray(N)){const O=F.groups;for(let z=0,k=O.length;z<k;z++){const Y=O[z],K=N[Y.materialIndex];if(K&&K.visible){const L=M(A,K,v,x);A.onBeforeShadow(r,A,b,P,F,L,Y),r.renderBufferDirect(P,null,F,L,A,Y),A.onAfterShadow(r,A,b,P,F,L,Y)}}}else if(N.visible){const O=M(A,N,v,x);A.onBeforeShadow(r,A,b,P,F,O,null),r.renderBufferDirect(P,null,F,O,A,null),A.onAfterShadow(r,A,b,P,F,O,null)}}const R=A.children;for(let F=0,N=R.length;F<N;F++)y(R[F],b,P,v,x)}function E(A){A.target.removeEventListener("dispose",E);for(const P in c){const v=c[P],x=A.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const Vx={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Hx(r,e){function t(){let I=!1;const Se=new Bt;let ue=null;const he=new Bt(0,0,0,0);return{setMask:function(se){ue!==se&&!I&&(r.colorMask(se,se,se,se),ue=se)},setLocked:function(se){I=se},setClear:function(se,re,ge,Ue,rt){rt===!0&&(se*=Ue,re*=Ue,ge*=Ue),Se.set(se,re,ge,Ue),he.equals(Se)===!1&&(r.clearColor(se,re,ge,Ue),he.copy(Se))},reset:function(){I=!1,ue=null,he.set(-1,0,0,0)}}}function n(){let I=!1,Se=!1,ue=null,he=null,se=null;return{setReversed:function(re){if(Se!==re){const ge=e.get("EXT_clip_control");re?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),Se=re;const Ue=se;se=null,this.setClear(Ue)}},getReversed:function(){return Se},setTest:function(re){re?te(r.DEPTH_TEST):de(r.DEPTH_TEST)},setMask:function(re){ue!==re&&!I&&(r.depthMask(re),ue=re)},setFunc:function(re){if(Se&&(re=Vx[re]),he!==re){switch(re){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=re}},setLocked:function(re){I=re},setClear:function(re){se!==re&&(Se&&(re=1-re),r.clearDepth(re),se=re)},reset:function(){I=!1,ue=null,he=null,se=null,Se=!1}}}function i(){let I=!1,Se=null,ue=null,he=null,se=null,re=null,ge=null,Ue=null,rt=null;return{setTest:function(be){I||(be?te(r.STENCIL_TEST):de(r.STENCIL_TEST))},setMask:function(be){Se!==be&&!I&&(r.stencilMask(be),Se=be)},setFunc:function(be,Be,Je){(ue!==be||he!==Be||se!==Je)&&(r.stencilFunc(be,Be,Je),ue=be,he=Be,se=Je)},setOp:function(be,Be,Je){(re!==be||ge!==Be||Ue!==Je)&&(r.stencilOp(be,Be,Je),re=be,ge=Be,Ue=Je)},setLocked:function(be){I=be},setClear:function(be){rt!==be&&(r.clearStencil(be),rt=be)},reset:function(){I=!1,Se=null,ue=null,he=null,se=null,re=null,ge=null,Ue=null,rt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,M=null,y=null,E=null,A=null,b=new yt(0,0,0),P=0,v=!1,x=null,D=null,R=null,F=null,N=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=k>=1):Y.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=k>=2);let K=null,L={};const ne=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),Ie=new Bt().fromArray(ne),Fe=new Bt().fromArray(ce);function Ae(I,Se,ue,he){const se=new Uint8Array(4),re=r.createTexture();r.bindTexture(I,re),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ge=0;ge<ue;ge++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(Se,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(Se+ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return re}const X={};X[r.TEXTURE_2D]=Ae(r.TEXTURE_2D,r.TEXTURE_2D,1),X[r.TEXTURE_CUBE_MAP]=Ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[r.TEXTURE_2D_ARRAY]=Ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),X[r.TEXTURE_3D]=Ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(3),ze(!1),H(1),te(r.CULL_FACE),De(0);function te(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function de(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Oe(I,Se){return f[I]!==Se?(r.bindFramebuffer(I,Se),f[I]=Se,I===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Se),I===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Se),!0):!1}function ye(I,Se){let ue=d,he=!1;if(I){ue=h.get(Se),ue===void 0&&(ue=[],h.set(Se,ue));const se=I.textures;if(ue.length!==se.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let re=0,ge=se.length;re<ge;re++)ue[re]=r.COLOR_ATTACHMENT0+re;ue.length=se.length,he=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,he=!0);he&&r.drawBuffers(ue)}function ke(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const Ze={100:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};Ze[103]=r.MIN,Ze[104]=r.MAX;const me={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,204:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,205:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function De(I,Se,ue,he,se,re,ge,Ue,rt,be){if(I===0){_===!0&&(de(r.BLEND),_=!1);return}if(_===!1&&(te(r.BLEND),_=!0),I!==5){if(I!==m||be!==v){if((p!==100||y!==100)&&(r.blendEquation(r.FUNC_ADD),p=100,y=100),be)switch(I){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:mt("WebGLState: Invalid blending: ",I);break}else switch(I){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case 3:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",I);break}T=null,M=null,E=null,A=null,b.set(0,0,0),P=0,m=I,v=be}return}se=se||Se,re=re||ue,ge=ge||he,(Se!==p||se!==y)&&(r.blendEquationSeparate(Ze[Se],Ze[se]),p=Se,y=se),(ue!==T||he!==M||re!==E||ge!==A)&&(r.blendFuncSeparate(me[ue],me[he],me[re],me[ge]),T=ue,M=he,E=re,A=ge),(Ue.equals(b)===!1||rt!==P)&&(r.blendColor(Ue.r,Ue.g,Ue.b,rt),b.copy(Ue),P=rt),m=I,v=!1}function qe(I,Se){I.side===2?de(r.CULL_FACE):te(r.CULL_FACE);let ue=I.side===1;Se&&(ue=!ue),ze(ue),I.blending===1&&I.transparent===!1?De(0):De(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const he=I.stencilWrite;o.setTest(he),he&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),oe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):de(r.SAMPLE_ALPHA_TO_COVERAGE)}function ze(I){x!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),x=I)}function H(I){I!==0?(te(r.CULL_FACE),I!==D&&(I===1?r.cullFace(r.BACK):I===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):de(r.CULL_FACE),D=I}function U(I){I!==R&&(z&&r.lineWidth(I),R=I)}function oe(I,Se,ue){I?(te(r.POLYGON_OFFSET_FILL),(F!==Se||N!==ue)&&(r.polygonOffset(Se,ue),F=Se,N=ue)):de(r.POLYGON_OFFSET_FILL)}function G(I){I?te(r.SCISSOR_TEST):de(r.SCISSOR_TEST)}function ie(I){I===void 0&&(I=r.TEXTURE0+O-1),K!==I&&(r.activeTexture(I),K=I)}function q(I,Se,ue){ue===void 0&&(K===null?ue=r.TEXTURE0+O-1:ue=K);let he=L[ue];he===void 0&&(he={type:void 0,texture:void 0},L[ue]=he),(he.type!==I||he.texture!==Se)&&(K!==ue&&(r.activeTexture(ue),K=ue),r.bindTexture(I,Se||X[I]),he.type=I,he.texture=Se)}function C(){const I=L[K];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(I){mt("WebGLState:",I)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(I){mt("WebGLState:",I)}}function ee(){try{r.texSubImage2D(...arguments)}catch(I){mt("WebGLState:",I)}}function j(){try{r.texSubImage3D(...arguments)}catch(I){mt("WebGLState:",I)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(I){mt("WebGLState:",I)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(I){mt("WebGLState:",I)}}function ae(){try{r.texStorage2D(...arguments)}catch(I){mt("WebGLState:",I)}}function Me(){try{r.texStorage3D(...arguments)}catch(I){mt("WebGLState:",I)}}function le(){try{r.texImage2D(...arguments)}catch(I){mt("WebGLState:",I)}}function fe(){try{r.texImage3D(...arguments)}catch(I){mt("WebGLState:",I)}}function pe(I){Ie.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Ie.copy(I))}function Te(I){Fe.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Fe.copy(I))}function Le(I,Se){let ue=c.get(Se);ue===void 0&&(ue=new WeakMap,c.set(Se,ue));let he=ue.get(I);he===void 0&&(he=r.getUniformBlockIndex(Se,I.name),ue.set(I,he))}function _e(I,Se){const he=c.get(Se).get(I);l.get(Se)!==he&&(r.uniformBlockBinding(Se,he,I.__bindingPointIndex),l.set(Se,he))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},K=null,L={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,M=null,y=null,E=null,A=null,b=new yt(0,0,0),P=0,v=!1,x=null,D=null,R=null,F=null,N=null,Ie.set(0,0,r.canvas.width,r.canvas.height),Fe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:de,bindFramebuffer:Oe,drawBuffers:ye,useProgram:ke,setBlending:De,setMaterial:qe,setFlipSided:ze,setCullFace:H,setLineWidth:U,setPolygonOffset:oe,setScissorTest:G,activeTexture:ie,bindTexture:q,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:le,texImage3D:fe,updateUBOMapping:Le,uniformBlockBinding:_e,texStorage2D:ae,texStorage3D:Me,texSubImage2D:ee,texSubImage3D:j,compressedTexSubImage2D:$,compressedTexSubImage3D:ve,scissor:pe,viewport:Te,reset:Xe}}function Wx(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return d?new OffscreenCanvas(C,S):Ya("canvas")}function _(C,S,B){let ee=1;const j=q(C);if((j.width>B||j.height>B)&&(ee=B/Math.max(j.width,j.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(ee*j.width),ve=Math.floor(ee*j.height);f===void 0&&(f=g($,ve));const ae=S?g($,ve):f;return ae.width=$,ae.height=ve,ae.getContext("2d").drawImage(C,0,0,$,ve),je("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+ve+")."),ae}else return"data"in C&&je("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,S,B,ee,j=!1){if(C!==null){if(r[C]!==void 0)return r[C];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=S;if(S===r.RED&&(B===r.FLOAT&&($=r.R32F),B===r.HALF_FLOAT&&($=r.R16F),B===r.UNSIGNED_BYTE&&($=r.R8)),S===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.R8UI),B===r.UNSIGNED_SHORT&&($=r.R16UI),B===r.UNSIGNED_INT&&($=r.R32UI),B===r.BYTE&&($=r.R8I),B===r.SHORT&&($=r.R16I),B===r.INT&&($=r.R32I)),S===r.RG&&(B===r.FLOAT&&($=r.RG32F),B===r.HALF_FLOAT&&($=r.RG16F),B===r.UNSIGNED_BYTE&&($=r.RG8)),S===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RG8UI),B===r.UNSIGNED_SHORT&&($=r.RG16UI),B===r.UNSIGNED_INT&&($=r.RG32UI),B===r.BYTE&&($=r.RG8I),B===r.SHORT&&($=r.RG16I),B===r.INT&&($=r.RG32I)),S===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGB8UI),B===r.UNSIGNED_SHORT&&($=r.RGB16UI),B===r.UNSIGNED_INT&&($=r.RGB32UI),B===r.BYTE&&($=r.RGB8I),B===r.SHORT&&($=r.RGB16I),B===r.INT&&($=r.RGB32I)),S===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGBA8UI),B===r.UNSIGNED_SHORT&&($=r.RGBA16UI),B===r.UNSIGNED_INT&&($=r.RGBA32UI),B===r.BYTE&&($=r.RGBA8I),B===r.SHORT&&($=r.RGBA16I),B===r.INT&&($=r.RGBA32I)),S===r.RGB&&(B===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),S===r.RGBA){const ve=j?ul:ft.getTransfer(ee);B===r.FLOAT&&($=r.RGBA32F),B===r.HALF_FLOAT&&($=r.RGBA16F),B===r.UNSIGNED_BYTE&&($=ve===St?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(C,S){let B;return C?S===null||S===1014||S===1020?B=r.DEPTH24_STENCIL8:S===1015?B=r.DEPTH32F_STENCIL8:S===1012&&(B=r.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===1014||S===1020?B=r.DEPTH_COMPONENT24:S===1015?B=r.DEPTH_COMPONENT32F:S===1012&&(B=r.DEPTH_COMPONENT16),B}function E(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==1003&&C.minFilter!==1006?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&u.delete(S)}function b(C){const S=C.target;S.removeEventListener("dispose",b),x(S)}function P(C){const S=n.get(C);if(S.__webglInit===void 0)return;const B=C.source,ee=h.get(B);if(ee){const j=ee[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(C),Object.keys(ee).length===0&&h.delete(B)}n.remove(C)}function v(C){const S=n.get(C);r.deleteTexture(S.__webglTexture);const B=C.source,ee=h.get(B);delete ee[S.__cacheKey],a.memory.textures--}function x(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(S.__webglFramebuffer[ee]))for(let j=0;j<S.__webglFramebuffer[ee].length;j++)r.deleteFramebuffer(S.__webglFramebuffer[ee][j]);else r.deleteFramebuffer(S.__webglFramebuffer[ee]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[ee])}else{if(Array.isArray(S.__webglFramebuffer))for(let ee=0;ee<S.__webglFramebuffer.length;ee++)r.deleteFramebuffer(S.__webglFramebuffer[ee]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ee=0;ee<S.__webglColorRenderbuffer.length;ee++)S.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[ee]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=C.textures;for(let ee=0,j=B.length;ee<j;ee++){const $=n.get(B[ee]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(B[ee])}n.remove(C)}let D=0;function R(){D=0}function F(){const C=D;return C>=i.maxTextures&&je("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function N(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function O(C,S){const B=n.get(C);if(C.isVideoTexture&&G(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const ee=C.image;if(ee===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,C,S);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+S)}function z(C,S){const B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){X(B,C,S);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+S)}function k(C,S){const B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){X(B,C,S);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+S)}function Y(C,S){const B=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){te(B,C,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+S)}const K={1e3:r.REPEAT,1001:r.CLAMP_TO_EDGE,1002:r.MIRRORED_REPEAT},L={1003:r.NEAREST,1004:r.NEAREST_MIPMAP_NEAREST,1005:r.NEAREST_MIPMAP_LINEAR,1006:r.LINEAR,1007:r.LINEAR_MIPMAP_NEAREST,1008:r.LINEAR_MIPMAP_LINEAR},ne={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function ce(C,S){if(S.type===1015&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===1006||S.magFilter===1007||S.magFilter===1005||S.magFilter===1008||S.minFilter===1006||S.minFilter===1007||S.minFilter===1005||S.minFilter===1008)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,K[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,K[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,K[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,L[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,L[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ne[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===1003||S.minFilter!==1005&&S.minFilter!==1008||S.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ie(C,S){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const ee=S.source;let j=h.get(ee);j===void 0&&(j={},h.set(ee,j));const $=N(S);if($!==C.__cacheKey){j[$]===void 0&&(j[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[$].usedTimes++;const ve=j[C.__cacheKey];ve!==void 0&&(j[C.__cacheKey].usedTimes--,ve.usedTimes===0&&v(S)),C.__cacheKey=$,C.__webglTexture=j[$].texture}return B}function Fe(C,S,B){return Math.floor(Math.floor(C/B)/S)}function Ae(C,S,B,ee){const $=C.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,B,ee,S.data);else{$.sort((fe,pe)=>fe.start-pe.start);let ve=0;for(let fe=1;fe<$.length;fe++){const pe=$[ve],Te=$[fe],Le=pe.start+pe.count,_e=Fe(Te.start,S.width,4),Xe=Fe(pe.start,S.width,4);Te.start<=Le+1&&_e===Xe&&Fe(Te.start+Te.count-1,S.width,4)===_e?pe.count=Math.max(pe.count,Te.start+Te.count-pe.start):(++ve,$[ve]=Te)}$.length=ve+1;const ae=r.getParameter(r.UNPACK_ROW_LENGTH),Me=r.getParameter(r.UNPACK_SKIP_PIXELS),le=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let fe=0,pe=$.length;fe<pe;fe++){const Te=$[fe],Le=Math.floor(Te.start/4),_e=Math.ceil(Te.count/4),Xe=Le%S.width,I=Math.floor(Le/S.width),Se=_e,ue=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,Xe,I,Se,ue,B,ee,S.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Me),r.pixelStorei(r.UNPACK_SKIP_ROWS,le)}}function X(C,S,B){let ee=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=r.TEXTURE_3D);const j=Ie(C,S),$=S.source;t.bindTexture(ee,C.__webglTexture,r.TEXTURE0+B);const ve=n.get($);if($.version!==ve.__version||j===!0){t.activeTexture(r.TEXTURE0+B);const ae=ft.getPrimaries(ft.workingColorSpace),Me=S.colorSpace===""?null:ft.getPrimaries(S.colorSpace),le=S.colorSpace===""||ae===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let fe=_(S.image,!1,i.maxTextureSize);fe=ie(S,fe);const pe=s.convert(S.format,S.colorSpace),Te=s.convert(S.type);let Le=M(S.internalFormat,pe,Te,S.colorSpace,S.isVideoTexture);ce(ee,S);let _e;const Xe=S.mipmaps,I=S.isVideoTexture!==!0,Se=ve.__version===void 0||j===!0,ue=$.dataReady,he=E(S,fe);if(S.isDepthTexture)Le=y(S.format===1027,S.type),Se&&(I?t.texStorage2D(r.TEXTURE_2D,1,Le,fe.width,fe.height):t.texImage2D(r.TEXTURE_2D,0,Le,fe.width,fe.height,0,pe,Te,null));else if(S.isDataTexture)if(Xe.length>0){I&&Se&&t.texStorage2D(r.TEXTURE_2D,he,Le,Xe[0].width,Xe[0].height);for(let se=0,re=Xe.length;se<re;se++)_e=Xe[se],I?ue&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,_e.width,_e.height,pe,Te,_e.data):t.texImage2D(r.TEXTURE_2D,se,Le,_e.width,_e.height,0,pe,Te,_e.data);S.generateMipmaps=!1}else I?(Se&&t.texStorage2D(r.TEXTURE_2D,he,Le,fe.width,fe.height),ue&&Ae(S,fe,pe,Te)):t.texImage2D(r.TEXTURE_2D,0,Le,fe.width,fe.height,0,pe,Te,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&Se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,Le,Xe[0].width,Xe[0].height,fe.depth);for(let se=0,re=Xe.length;se<re;se++)if(_e=Xe[se],S.format!==1023)if(pe!==null)if(I){if(ue)if(S.layerUpdates.size>0){const ge=Ff(_e.width,_e.height,S.format,S.type);for(const Ue of S.layerUpdates){const rt=_e.data.subarray(Ue*ge/_e.data.BYTES_PER_ELEMENT,(Ue+1)*ge/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,Ue,_e.width,_e.height,1,pe,rt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,fe.depth,pe,_e.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,Le,_e.width,_e.height,fe.depth,0,_e.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ue&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,fe.depth,pe,Te,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,Le,_e.width,_e.height,fe.depth,0,pe,Te,_e.data)}else{I&&Se&&t.texStorage2D(r.TEXTURE_2D,he,Le,Xe[0].width,Xe[0].height);for(let se=0,re=Xe.length;se<re;se++)_e=Xe[se],S.format!==1023?pe!==null?I?ue&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,_e.width,_e.height,pe,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,se,Le,_e.width,_e.height,0,_e.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ue&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,_e.width,_e.height,pe,Te,_e.data):t.texImage2D(r.TEXTURE_2D,se,Le,_e.width,_e.height,0,pe,Te,_e.data)}else if(S.isDataArrayTexture)if(I){if(Se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,Le,fe.width,fe.height,fe.depth),ue)if(S.layerUpdates.size>0){const se=Ff(fe.width,fe.height,S.format,S.type);for(const re of S.layerUpdates){const ge=fe.data.subarray(re*se/fe.data.BYTES_PER_ELEMENT,(re+1)*se/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,re,fe.width,fe.height,1,pe,Te,ge)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,pe,Te,fe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,fe.width,fe.height,fe.depth,0,pe,Te,fe.data);else if(S.isData3DTexture)I?(Se&&t.texStorage3D(r.TEXTURE_3D,he,Le,fe.width,fe.height,fe.depth),ue&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,pe,Te,fe.data)):t.texImage3D(r.TEXTURE_3D,0,Le,fe.width,fe.height,fe.depth,0,pe,Te,fe.data);else if(S.isFramebufferTexture){if(Se)if(I)t.texStorage2D(r.TEXTURE_2D,he,Le,fe.width,fe.height);else{let se=fe.width,re=fe.height;for(let ge=0;ge<he;ge++)t.texImage2D(r.TEXTURE_2D,ge,Le,se,re,0,pe,Te,null),se>>=1,re>>=1}}else if(Xe.length>0){if(I&&Se){const se=q(Xe[0]);t.texStorage2D(r.TEXTURE_2D,he,Le,se.width,se.height)}for(let se=0,re=Xe.length;se<re;se++)_e=Xe[se],I?ue&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,pe,Te,_e):t.texImage2D(r.TEXTURE_2D,se,Le,pe,Te,_e);S.generateMipmaps=!1}else if(I){if(Se){const se=q(fe);t.texStorage2D(r.TEXTURE_2D,he,Le,se.width,se.height)}ue&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,Te,fe)}else t.texImage2D(r.TEXTURE_2D,0,Le,pe,Te,fe);m(S)&&p(ee),ve.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function te(C,S,B){if(S.image.length!==6)return;const ee=Ie(C,S),j=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+B);const $=n.get(j);if(j.version!==$.__version||ee===!0){t.activeTexture(r.TEXTURE0+B);const ve=ft.getPrimaries(ft.workingColorSpace),ae=S.colorSpace===""?null:ft.getPrimaries(S.colorSpace),Me=S.colorSpace===""||ve===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const le=S.isCompressedTexture||S.image[0].isCompressedTexture,fe=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let re=0;re<6;re++)!le&&!fe?pe[re]=_(S.image[re],!0,i.maxCubemapSize):pe[re]=fe?S.image[re].image:S.image[re],pe[re]=ie(S,pe[re]);const Te=pe[0],Le=s.convert(S.format,S.colorSpace),_e=s.convert(S.type),Xe=M(S.internalFormat,Le,_e,S.colorSpace),I=S.isVideoTexture!==!0,Se=$.__version===void 0||ee===!0,ue=j.dataReady;let he=E(S,Te);ce(r.TEXTURE_CUBE_MAP,S);let se;if(le){I&&Se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Xe,Te.width,Te.height);for(let re=0;re<6;re++){se=pe[re].mipmaps;for(let ge=0;ge<se.length;ge++){const Ue=se[ge];S.format!==1023?Le!==null?I?ue&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge,0,0,Ue.width,Ue.height,Le,Ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge,Xe,Ue.width,Ue.height,0,Ue.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge,0,0,Ue.width,Ue.height,Le,_e,Ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge,Xe,Ue.width,Ue.height,0,Le,_e,Ue.data)}}}else{if(se=S.mipmaps,I&&Se){se.length>0&&he++;const re=q(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Xe,re.width,re.height)}for(let re=0;re<6;re++)if(fe){I?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,pe[re].width,pe[re].height,Le,_e,pe[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Xe,pe[re].width,pe[re].height,0,Le,_e,pe[re].data);for(let ge=0;ge<se.length;ge++){const rt=se[ge].image[re].image;I?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge+1,0,0,rt.width,rt.height,Le,_e,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge+1,Xe,rt.width,rt.height,0,Le,_e,rt.data)}}else{I?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Le,_e,pe[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Xe,Le,_e,pe[re]);for(let ge=0;ge<se.length;ge++){const Ue=se[ge];I?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge+1,0,0,Le,_e,Ue.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge+1,Xe,Le,_e,Ue.image[re])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),$.__version=j.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function de(C,S,B,ee,j,$){const ve=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),Me=M(B.internalFormat,ve,ae,B.colorSpace),le=n.get(S),fe=n.get(B);if(fe.__renderTarget=S,!le.__hasExternalTextures){const pe=Math.max(1,S.width>>$),Te=Math.max(1,S.height>>$);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,$,Me,pe,Te,S.depth,0,ve,ae,null):t.texImage2D(j,$,Me,pe,Te,0,ve,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,j,fe.__webglTexture,0,U(S)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,j,fe.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(C,S,B){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){const ee=S.depthTexture,j=ee&&ee.isDepthTexture?ee.type:null,$=y(S.stencilBuffer,j),ve=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;oe(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(S),$,S.width,S.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(S),$,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,$,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,C)}else{const ee=S.textures;for(let j=0;j<ee.length;j++){const $=ee[j],ve=s.convert($.format,$.colorSpace),ae=s.convert($.type),Me=M($.internalFormat,ve,ae,$.colorSpace);oe(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(S),Me,S.width,S.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(S),Me,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Me,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ye(C,S,B){const ee=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);if(j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ee){if(j.__webglInit===void 0&&(j.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),ce(r.TEXTURE_CUBE_MAP,S.depthTexture);const le=s.convert(S.depthTexture.format),fe=s.convert(S.depthTexture.type);let pe;S.depthTexture.format===1026?pe=r.DEPTH_COMPONENT24:S.depthTexture.format===1027&&(pe=r.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,pe,S.width,S.height,0,le,fe,null)}}else O(S.depthTexture,0);const $=j.__webglTexture,ve=U(S),ae=ee?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,Me=S.depthTexture.format===1027?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===1026)oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ae,$,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ae,$,0);else if(S.depthTexture.format===1027)oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ae,$,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ae,$,0);else throw new Error("Unknown depthTexture format")}function ke(C){const S=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const ee=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ee){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ee.removeEventListener("dispose",j)};ee.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=ee}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let ee=0;ee<6;ee++)ye(S.__webglFramebuffer[ee],C,ee);else{const ee=C.texture.mipmaps;ee&&ee.length>0?ye(S.__webglFramebuffer[0],C,0):ye(S.__webglFramebuffer,C,0)}else if(B){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]===void 0)S.__webglDepthbuffer[ee]=r.createRenderbuffer(),Oe(S.__webglDepthbuffer[ee],C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,$)}}else{const ee=C.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Oe(S.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(C,S,B){const ee=n.get(C);S!==void 0&&de(ee.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&ke(C)}function me(C){const S=C.texture,B=n.get(C),ee=n.get(S);C.addEventListener("dispose",b);const j=C.textures,$=C.isWebGLCubeRenderTarget===!0,ve=j.length>1;if(ve||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=S.version,a.memory.textures++),$){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let Me=0;Me<S.mipmaps.length;Me++)B.__webglFramebuffer[ae][Me]=r.createFramebuffer()}else B.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)B.__webglFramebuffer[ae]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(ve)for(let ae=0,Me=j.length;ae<Me;ae++){const le=n.get(j[ae]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&oe(C)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){const Me=j[ae];B.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const le=s.convert(Me.format,Me.colorSpace),fe=s.convert(Me.type),pe=M(Me.internalFormat,le,fe,Me.colorSpace,C.isXRRenderTarget===!0),Te=U(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,pe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Oe(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),ce(r.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)de(B.__webglFramebuffer[ae][Me],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me);else de(B.__webglFramebuffer[ae],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,Me=j.length;ae<Me;ae++){const le=j[ae],fe=n.get(le);let pe=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,fe.__webglTexture),ce(pe,le),de(B.__webglFramebuffer,C,le,r.COLOR_ATTACHMENT0+ae,pe,0),m(le)&&p(pe)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,ee.__webglTexture),ce(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)de(B.__webglFramebuffer[Me],C,S,r.COLOR_ATTACHMENT0,ae,Me);else de(B.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,ae,0);m(S)&&p(ae),t.unbindTexture()}C.depthBuffer&&ke(C)}function De(C){const S=C.textures;for(let B=0,ee=S.length;B<ee;B++){const j=S[B];if(m(j)){const $=T(C),ve=n.get(j).__webglTexture;t.bindTexture($,ve),p($),t.unbindTexture()}}}const qe=[],ze=[];function H(C){if(C.samples>0){if(oe(C)===!1){const S=C.textures,B=C.width,ee=C.height;let j=r.COLOR_BUFFER_BIT;const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(C),ae=S.length>1;if(ae)for(let le=0;le<S.length;le++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Me=C.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let le=0;le<S.length;le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[le]);const fe=n.get(S[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,fe,0)}r.blitFramebuffer(0,0,B,ee,0,0,B,ee,j,r.NEAREST),l===!0&&(qe.length=0,ze.length=0,qe.push(r.COLOR_ATTACHMENT0+le),C.depthBuffer&&C.resolveDepthBuffer===!1&&(qe.push($),ze.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ze)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let le=0;le<S.length;le++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,ve.__webglColorRenderbuffer[le]);const fe=n.get(S[le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,fe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function U(C){return Math.min(i.maxSamples,C.samples)}function oe(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function G(C){const S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function ie(C,S){const B=C.colorSpace,ee=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Ks&&B!==""&&(ft.getTransfer(B)===St?(ee!==1023||j!==1009)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",B)),S}function q(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=R,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=Y,this.rebindTextures=Ze,this.setupRenderTarget=me,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=de,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xx(r,e){function t(n,i=""){let s;const a=ft.getTransfer(i);if(n===1009)return r.UNSIGNED_BYTE;if(n===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===1012)return r.UNSIGNED_SHORT;if(n===1013)return r.INT;if(n===1014)return r.UNSIGNED_INT;if(n===1015)return r.FLOAT;if(n===1016)return r.HALF_FLOAT;if(n===1021)return r.ALPHA;if(n===1022)return r.RGB;if(n===1023)return r.RGBA;if(n===1026)return r.DEPTH_COMPONENT;if(n===1027)return r.DEPTH_STENCIL;if(n===1028)return r.RED;if(n===1029)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===1031)return r.RG_INTEGER;if(n===1033)return r.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return s.COMPRESSED_R11_EAC;if(n===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return s.COMPRESSED_RG11_EAC;if(n===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $x{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new yd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Si({vertexShader:qx,fragmentShader:Yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ii(new po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kx extends aa{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new $x,p={},T=t.getContextAttributes();let M=null,y=null;const E=[],A=[],b=new ht;let P=null;const v=new oi;v.viewport=new Bt;const x=new oi;x.viewport=new Bt;const D=[v,x],R=new s_;let F=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=E[X];return te===void 0&&(te=new lc,E[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=E[X];return te===void 0&&(te=new lc,E[X]=te),te.getGripSpace()},this.getHand=function(X){let te=E[X];return te===void 0&&(te=new lc,E[X]=te),te.getHandSpace()};function O(X){const te=A.indexOf(X.inputSource);if(te===-1)return;const de=E[te];de!==void 0&&(de.update(X.inputSource,X.frame,c||a),de.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",k);for(let X=0;X<E.length;X++){const te=A[X];te!==null&&(A[X]=null,E[X].disconnect(te))}F=null,N=null,m.reset();for(const X in p)delete p[X];e.setRenderTarget(M),d=null,h=null,f=null,i=null,y=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",z),i.addEventListener("inputsourceschange",k),T.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Oe=null,ye=null;T.depth&&(ye=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=T.stencil?1027:1026,Oe=T.stencil?1020:1014);const ke={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(ke),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Pi(h.textureWidth,h.textureHeight,{format:1023,type:1009,depthTexture:new Ka(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const de={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Pi(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ae.setContext(i),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(X){for(let te=0;te<X.removed.length;te++){const de=X.removed[te],Oe=A.indexOf(de);Oe>=0&&(A[Oe]=null,E[Oe].disconnect(de))}for(let te=0;te<X.added.length;te++){const de=X.added[te];let Oe=A.indexOf(de);if(Oe===-1){for(let ke=0;ke<E.length;ke++)if(ke>=A.length){A.push(de),Oe=ke;break}else if(A[ke]===null){A[ke]=de,Oe=ke;break}if(Oe===-1)break}const ye=E[Oe];ye&&ye.connect(de)}}const Y=new Q,K=new Q;function L(X,te,de){Y.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(de.matrixWorld);const Oe=Y.distanceTo(K),ye=te.projectionMatrix.elements,ke=de.projectionMatrix.elements,Ze=ye[14]/(ye[10]-1),me=ye[14]/(ye[10]+1),De=(ye[9]+1)/ye[5],qe=(ye[9]-1)/ye[5],ze=(ye[8]-1)/ye[0],H=(ke[8]+1)/ke[0],U=Ze*ze,oe=Ze*H,G=Oe/(-ze+H),ie=G*-ze;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ie),X.translateZ(G),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ye[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const q=Ze+G,C=me+G,S=U-ie,B=oe+(Oe-ie),ee=De*me/C*q,j=qe*me/C*q;X.projectionMatrix.makePerspective(S,B,ee,j,q,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ne(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let te=X.near,de=X.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(de=m.depthFar)),R.near=x.near=v.near=te,R.far=x.far=v.far=de,(F!==R.near||N!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,N=R.far),R.layers.mask=X.layers.mask|6,v.layers.mask=R.layers.mask&3,x.layers.mask=R.layers.mask&5;const Oe=X.parent,ye=R.cameras;ne(R,Oe);for(let ke=0;ke<ye.length;ke++)ne(ye[ke],Oe);ye.length===2?L(R,v,x):R.projectionMatrix.copy(v.projectionMatrix),ce(X,R,Oe)};function ce(X,te,de){de===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Hc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(X){return p[X]};let Ie=null;function Fe(X,te){if(u=te.getViewerPose(c||a),g=te,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Oe=!1;de.length!==R.cameras.length&&(R.cameras.length=0,Oe=!0);for(let me=0;me<de.length;me++){const De=de[me];let qe=null;if(d!==null)qe=d.getViewport(De);else{const H=f.getViewSubImage(h,De);qe=H.viewport,me===0&&(e.setRenderTargetTextures(y,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(y))}let ze=D[me];ze===void 0&&(ze=new oi,ze.layers.enable(me),ze.viewport=new Bt,D[me]=ze),ze.matrix.fromArray(De.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(De.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(qe.x,qe.y,qe.width,qe.height),me===0&&(R.matrix.copy(ze.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Oe===!0&&R.cameras.push(ze)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const me=f.getDepthInformation(de[0]);me&&me.isValid&&me.texture&&m.init(me,i.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let me=0;me<de.length;me++){const De=de[me].camera;if(De){let qe=p[De];qe||(qe=new yd,p[De]=qe);const ze=f.getCameraImage(De);qe.sourceTexture=ze}}}}for(let de=0;de<E.length;de++){const Oe=A[de],ye=E[de];Oe!==null&&ye!==void 0&&ye.update(Oe,te,c||a)}Ie&&Ie(X,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ae=new Ed;Ae.setAnimationLoop(Fe),this.setAnimationLoop=function(X){Ie=X},this.dispose=function(){}}}const Or=new Qi,jx=new Yt;function Zx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_d(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),M=T.envMap,y=T.envMapRotation;M&&(m.envMap.value=M,Or.copy(y),Or.x*=-1,Or.y*=-1,Or.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),m.envMapRotation.value.setFromMatrix4(jx.makeRotationFromEuler(Or)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jx(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const y=M.program;n.uniformBlockBinding(T,y)}function c(T,M){let y=i[T.id];y===void 0&&(g(T),y=u(T),i[T.id]=y,T.addEventListener("dispose",m));const E=M.program;n.updateUBOMapping(T,E);const A=e.render.frame;s[T.id]!==A&&(h(T),s[T.id]=A)}function u(T){const M=f();T.__bindingPointIndex=M;const y=r.createBuffer(),E=T.__size,A=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,y),y}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const M=i[T.id],y=T.uniforms,E=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let A=0,b=y.length;A<b;A++){const P=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,x=P.length;v<x;v++){const D=P[v];if(d(D,A,v,E)===!0){const R=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let O=0;O<F.length;O++){const z=F[O],k=_(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,R+N,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,N),N+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,R,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(T,M,y,E){const A=T.value,b=M+"_"+y;if(E[b]===void 0)return typeof A=="number"||typeof A=="boolean"?E[b]=A:E[b]=A.clone(),!0;{const P=E[b];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return E[b]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(T){const M=T.uniforms;let y=0;const E=16;for(let b=0,P=M.length;b<P;b++){const v=Array.isArray(M[b])?M[b]:[M[b]];for(let x=0,D=v.length;x<D;x++){const R=v[x],F=Array.isArray(R.value)?R.value:[R.value];for(let N=0,O=F.length;N<O;N++){const z=F[N],k=_(z),Y=y%E,K=Y%k.boundary,L=Y+K;y+=K,L!==0&&E-L<k.storage&&(y+=E-L),R.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,y+=k.storage}}}const A=y%E;return A>0&&(y+=E-A),T.__size=y,T.__cache={},this}function _(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}const Qx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yi=null;function eS(){return yi===null&&(yi=new Ym(Qx,16,16,1030,1016),yi.name="DFG_LUT",yi.minFilter=1006,yi.magFilter=1006,yi.wrapS=1001,yi.wrapT=1001,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}class tS{constructor(e={}){const{canvas:t=xm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=1009}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=d,m=new Set([1033,1031,1029]),p=new Set([1009,1014,1012,1020,1017,1018]),T=new Uint32Array(4),M=new Int32Array(4);let y=null,E=null;const A=[],b=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let x=!1;this._outputColorSpace=ai;let D=0,R=0,F=null,N=-1,O=null;const z=new Bt,k=new Bt;let Y=null;const K=new yt(0);let L=0,ne=t.width,ce=t.height,Ie=1,Fe=null,Ae=null;const X=new Bt(0,0,ne,ce),te=new Bt(0,0,ne,ce);let de=!1;const Oe=new Sd;let ye=!1,ke=!1;const Ze=new Yt,me=new Q,De=new Bt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function H(){return F===null?Ie:1}let U=n;function oe(w,V){return t.getContext(w,V)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r182"),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",be,!1),U===null){const V="webgl2";if(U=oe(V,w),U===null)throw oe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw mt("WebGLRenderer: "+w.message),w}let G,ie,q,C,S,B,ee,j,$,ve,ae,Me,le,fe,pe,Te,Le,_e,Xe,I,Se,ue,he,se;function re(){G=new ev(U),G.init(),ue=new Xx(U,G),ie=new X0(U,G,e,ue),q=new Hx(U,G),ie.reversedDepthBuffer&&h&&q.buffers.depth.setReversed(!0),C=new iv(U),S=new Cx,B=new Wx(U,G,q,S,ie,ue,C),ee=new Y0(v),j=new Q0(v),$=new o_(U),he=new H0(U,$),ve=new tv(U,$,C,he),ae=new sv(U,ve,$,C),Xe=new rv(U,ie,B),Te=new q0(S),Me=new wx(v,ee,j,G,ie,he,Te),le=new Zx(v,S),fe=new Px,pe=new Nx(G),_e=new V0(v,ee,j,q,ae,g,l),Le=new Gx(v,ae,ie),se=new Jx(U,C,ie,q),I=new W0(U,G,C),Se=new nv(U,G,C),C.programs=Me.programs,v.capabilities=ie,v.extensions=G,v.properties=S,v.renderLists=fe,v.shadowMap=Le,v.state=q,v.info=C}re(),_!==1009&&(P=new ov(_,t.width,t.height,i,s));const ge=new Kx(v,U);this.xr=ge,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=G.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=G.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(w){w!==void 0&&(Ie=w,this.setSize(ne,ce,!1))},this.getSize=function(w){return w.set(ne,ce)},this.setSize=function(w,V,J=!0){if(ge.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=w,ce=V,t.width=Math.floor(w*Ie),t.height=Math.floor(V*Ie),J===!0&&(t.style.width=w+"px",t.style.height=V+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(ne*Ie,ce*Ie).floor()},this.setDrawingBufferSize=function(w,V,J){ne=w,ce=V,Ie=J,t.width=Math.floor(w*J),t.height=Math.floor(V*J),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(_===1009){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(X)},this.setViewport=function(w,V,J,Z){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,V,J,Z),q.viewport(z.copy(X).multiplyScalar(Ie).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,V,J,Z){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,V,J,Z),q.scissor(k.copy(te).multiplyScalar(Ie).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(w){q.setScissorTest(de=w)},this.setOpaqueSort=function(w){Fe=w},this.setTransparentSort=function(w){Ae=w},this.getClearColor=function(w){return w.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,J=!0){let Z=0;if(w){let W=!1;if(F!==null){const xe=F.texture.format;W=m.has(xe)}if(W){const xe=F.texture.type,Re=p.has(xe),Ee=_e.getClearColor(),Pe=_e.getClearAlpha(),Ge=Ee.r,Ye=Ee.g,He=Ee.b;Re?(T[0]=Ge,T[1]=Ye,T[2]=He,T[3]=Pe,U.clearBufferuiv(U.COLOR,0,T)):(M[0]=Ge,M[1]=Ye,M[2]=He,M[3]=Pe,U.clearBufferiv(U.COLOR,0,M))}else Z|=U.COLOR_BUFFER_BIT}V&&(Z|=U.DEPTH_BUFFER_BIT),J&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",be,!1),_e.dispose(),fe.dispose(),pe.dispose(),S.dispose(),ee.dispose(),j.dispose(),ae.dispose(),he.dispose(),se.dispose(),Me.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",zt),ge.removeEventListener("sessionend",st),vt.stop()};function Ue(w){w.preventDefault(),_f("WebGLRenderer: Context Lost."),x=!0}function rt(){_f("WebGLRenderer: Context Restored."),x=!1;const w=C.autoReset,V=Le.enabled,J=Le.autoUpdate,Z=Le.needsUpdate,W=Le.type;re(),C.autoReset=w,Le.enabled=V,Le.autoUpdate=J,Le.needsUpdate=Z,Le.type=W}function be(w){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Be(w){const V=w.target;V.removeEventListener("dispose",Be),Je(V)}function Je(w){we(w),S.remove(w)}function we(w){const V=S.get(w).programs;V!==void 0&&(V.forEach(function(J){Me.releaseProgram(J)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,J,Z,W,xe){V===null&&(V=qe);const Re=W.isMesh&&W.matrixWorld.determinant()<0,Ee=$t(w,V,J,Z,W);q.setMaterial(Z,Re);let Pe=J.index,Ge=1;if(Z.wireframe===!0){if(Pe=ve.getWireframeAttribute(J),Pe===void 0)return;Ge=2}const Ye=J.drawRange,He=J.attributes.position;let at=Ye.start*Ge,Et=(Ye.start+Ye.count)*Ge;xe!==null&&(at=Math.max(at,xe.start*Ge),Et=Math.min(Et,(xe.start+xe.count)*Ge)),Pe!==null?(at=Math.max(at,0),Et=Math.min(Et,Pe.count)):He!=null&&(at=Math.max(at,0),Et=Math.min(Et,He.count));const Nt=Et-at;if(Nt<0||Nt===1/0)return;he.setup(W,Z,Ee,J,Pe);let Ot,bt=I;if(Pe!==null&&(Ot=$.get(Pe),bt=Se,bt.setIndex(Ot)),W.isMesh)Z.wireframe===!0?(q.setLineWidth(Z.wireframeLinewidth*H()),bt.setMode(U.LINES)):bt.setMode(U.TRIANGLES);else if(W.isLine){let We=Z.linewidth;We===void 0&&(We=1),q.setLineWidth(We*H()),W.isLineSegments?bt.setMode(U.LINES):W.isLineLoop?bt.setMode(U.LINE_LOOP):bt.setMode(U.LINE_STRIP)}else W.isPoints?bt.setMode(U.POINTS):W.isSprite&&bt.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)$a("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))bt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const We=W._multiDrawStarts,xt=W._multiDrawCounts,pt=W._multiDrawCount,Gn=Pe?$.get(Pe).bytesPerElement:1,hs=S.get(Z).currentProgram.getUniforms();for(let Vn=0;Vn<pt;Vn++)hs.setValue(U,"_gl_DrawID",Vn),bt.render(We[Vn]/Gn,xt[Vn])}else if(W.isInstancedMesh)bt.renderInstances(at,Nt,W.count);else if(J.isInstancedBufferGeometry){const We=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,xt=Math.min(J.instanceCount,We);bt.renderInstances(at,Nt,xt)}else bt.render(at,Nt)};function $e(w,V,J){w.transparent===!0&&w.side===2&&w.forceSinglePass===!1?(w.side=1,w.needsUpdate=!0,Mt(w,V,J),w.side=0,w.needsUpdate=!0,Mt(w,V,J),w.side=2):Mt(w,V,J)}this.compile=function(w,V,J=null){J===null&&(J=w),E=pe.get(J),E.init(V),b.push(E),J.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),w!==J&&w.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights();const Z=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xe=W.material;if(xe)if(Array.isArray(xe))for(let Re=0;Re<xe.length;Re++){const Ee=xe[Re];$e(Ee,J,W),Z.add(Ee)}else $e(xe,J,W),Z.add(xe)}),E=b.pop(),Z},this.compileAsync=function(w,V,J=null){const Z=this.compile(w,V,J);return new Promise(W=>{function xe(){if(Z.forEach(function(Re){S.get(Re).currentProgram.isReady()&&Z.delete(Re)}),Z.size===0){W(w);return}setTimeout(xe,10)}G.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ve=null;function Ke(w){Ve&&Ve(w)}function zt(){vt.stop()}function st(){vt.start()}const vt=new Ed;vt.setAnimationLoop(Ke),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(w){Ve=w,ge.setAnimationLoop(w),w===null?vt.stop():vt.start()},ge.addEventListener("sessionstart",zt),ge.addEventListener("sessionend",st),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;const J=ge.enabled===!0&&ge.isPresenting===!0,Z=P!==null&&(F===null||J)&&P.begin(v,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(V),V=ge.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,V,F),E=pe.get(w,b.length),E.init(V),b.push(E),Ze.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Oe.setFromProjectionMatrix(Ze,2e3,V.reversedDepth),ke=this.localClippingEnabled,ye=Te.init(this.clippingPlanes,ke),y=fe.get(w,A.length),y.init(),A.push(y),ge.enabled===!0&&ge.isPresenting===!0){const Re=v.xr.getDepthSensingMesh();Re!==null&&Ht(Re,V,-1/0,v.sortObjects)}Ht(w,V,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(Fe,Ae),ze=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,ze&&_e.addToRenderList(y,w),this.info.render.frame++,ye===!0&&Te.beginShadows();const W=E.state.shadowsArray;if(Le.render(W,w,V),ye===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&P.hasRenderPass())===!1){const Re=y.opaque,Ee=y.transmissive;if(E.setupLights(),V.isArrayCamera){const Pe=V.cameras;if(Ee.length>0)for(let Ge=0,Ye=Pe.length;Ge<Ye;Ge++){const He=Pe[Ge];Tt(Re,Ee,w,He)}ze&&_e.render(w);for(let Ge=0,Ye=Pe.length;Ge<Ye;Ge++){const He=Pe[Ge];Pt(y,w,He,He.viewport)}}else Ee.length>0&&Tt(Re,Ee,w,V),ze&&_e.render(w),Pt(y,w,V)}F!==null&&R===0&&(B.updateMultisampleRenderTarget(F),B.updateRenderTargetMipmap(F)),Z&&P.end(v),w.isScene===!0&&w.onAfterRender(v,w,V),he.resetDefaultState(),N=-1,O=null,b.pop(),b.length>0?(E=b[b.length-1],ye===!0&&Te.setGlobalState(v.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function Ht(w,V,J,Z){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Oe.intersectsSprite(w)){Z&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ze);const Re=ae.update(w),Ee=w.material;Ee.visible&&y.push(w,Re,Ee,J,De.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Oe.intersectsObject(w))){const Re=ae.update(w),Ee=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),De.copy(Re.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(Ze)),Array.isArray(Ee)){const Pe=Re.groups;for(let Ge=0,Ye=Pe.length;Ge<Ye;Ge++){const He=Pe[Ge],at=Ee[He.materialIndex];at&&at.visible&&y.push(w,Re,at,J,De.z,He)}}else Ee.visible&&y.push(w,Re,Ee,J,De.z,null)}}const xe=w.children;for(let Re=0,Ee=xe.length;Re<Ee;Re++)Ht(xe[Re],V,J,Z)}function Pt(w,V,J,Z){const{opaque:W,transmissive:xe,transparent:Re}=w;E.setupLightsView(J),ye===!0&&Te.setGlobalState(v.clippingPlanes,J),Z&&q.viewport(z.copy(Z)),W.length>0&&dt(W,V,J),xe.length>0&&dt(xe,V,J),Re.length>0&&dt(Re,V,J),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Tt(w,V,J,Z){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Z.id]===void 0){const at=G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Z.id]=new Pi(1,1,{generateMipmaps:!0,type:at?1016:1009,minFilter:1008,samples:ie.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const xe=E.state.transmissionRenderTarget[Z.id],Re=Z.viewport||z;xe.setSize(Re.z*v.transmissionResolutionScale,Re.w*v.transmissionResolutionScale);const Ee=v.getRenderTarget(),Pe=v.getActiveCubeFace(),Ge=v.getActiveMipmapLevel();v.setRenderTarget(xe),v.getClearColor(K),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),ze&&_e.render(J);const Ye=v.toneMapping;v.toneMapping=0;const He=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),E.setupLightsView(Z),ye===!0&&Te.setGlobalState(v.clippingPlanes,Z),dt(w,J,Z),B.updateMultisampleRenderTarget(xe),B.updateRenderTargetMipmap(xe),G.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Et=0,Nt=V.length;Et<Nt;Et++){const Ot=V[Et],{object:bt,geometry:We,material:xt,group:pt}=Ot;if(xt.side===2&&bt.layers.test(Z.layers)){const Gn=xt.side;xt.side=1,xt.needsUpdate=!0,Pn(bt,J,Z,We,xt,pt),xt.side=Gn,xt.needsUpdate=!0,at=!0}}at===!0&&(B.updateMultisampleRenderTarget(xe),B.updateRenderTargetMipmap(xe))}v.setRenderTarget(Ee,Pe,Ge),v.setClearColor(K,L),He!==void 0&&(Z.viewport=He),v.toneMapping=Ye}function dt(w,V,J){const Z=V.isScene===!0?V.overrideMaterial:null;for(let W=0,xe=w.length;W<xe;W++){const Re=w[W],{object:Ee,geometry:Pe,group:Ge}=Re;let Ye=Re.material;Ye.allowOverride===!0&&Z!==null&&(Ye=Z),Ee.layers.test(J.layers)&&Pn(Ee,V,J,Pe,Ye,Ge)}}function Pn(w,V,J,Z,W,xe){w.onBeforeRender(v,V,J,Z,W,xe),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(v,V,J,Z,w,xe),W.transparent===!0&&W.side===2&&W.forceSinglePass===!1?(W.side=1,W.needsUpdate=!0,v.renderBufferDirect(J,V,Z,W,w,xe),W.side=0,W.needsUpdate=!0,v.renderBufferDirect(J,V,Z,W,w,xe),W.side=2):v.renderBufferDirect(J,V,Z,W,w,xe),w.onAfterRender(v,V,J,Z,W,xe)}function Mt(w,V,J){V.isScene!==!0&&(V=qe);const Z=S.get(w),W=E.state.lights,xe=E.state.shadowsArray,Re=W.state.version,Ee=Me.getParameters(w,W.state,xe,V,J),Pe=Me.getProgramCacheKey(Ee);let Ge=Z.programs;Z.environment=w.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(w.isMeshStandardMaterial?j:ee).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",Be),Ge=new Map,Z.programs=Ge);let Ye=Ge.get(Pe);if(Ye!==void 0){if(Z.currentProgram===Ye&&Z.lightsStateVersion===Re)return zn(w,Ee),Ye}else Ee.uniforms=Me.getUniforms(w),w.onBeforeCompile(Ee,v),Ye=Me.acquireProgram(Ee,Pe),Ge.set(Pe,Ye),Z.uniforms=Ee.uniforms;const He=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Te.uniform),zn(w,Ee),Z.needsLights=en(w),Z.lightsStateVersion=Re,Z.needsLights&&(He.ambientLightColor.value=W.state.ambient,He.lightProbe.value=W.state.probe,He.directionalLights.value=W.state.directional,He.directionalLightShadows.value=W.state.directionalShadow,He.spotLights.value=W.state.spot,He.spotLightShadows.value=W.state.spotShadow,He.rectAreaLights.value=W.state.rectArea,He.ltc_1.value=W.state.rectAreaLTC1,He.ltc_2.value=W.state.rectAreaLTC2,He.pointLights.value=W.state.point,He.pointLightShadows.value=W.state.pointShadow,He.hemisphereLights.value=W.state.hemi,He.directionalShadowMap.value=W.state.directionalShadowMap,He.directionalShadowMatrix.value=W.state.directionalShadowMatrix,He.spotShadowMap.value=W.state.spotShadowMap,He.spotLightMatrix.value=W.state.spotLightMatrix,He.spotLightMap.value=W.state.spotLightMap,He.pointShadowMap.value=W.state.pointShadowMap,He.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Ye,Z.uniformsList=null,Ye}function un(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=Qo.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function zn(w,V){const J=S.get(w);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function $t(w,V,J,Z,W){V.isScene!==!0&&(V=qe),B.resetTextureUnits();const xe=V.fog,Re=Z.isMeshStandardMaterial?V.environment:null,Ee=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ks,Pe=(Z.isMeshStandardMaterial?j:ee).get(Z.envMap||Re),Ge=Z.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ye=!!J.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!J.morphAttributes.position,at=!!J.morphAttributes.normal,Et=!!J.morphAttributes.color;let Nt=0;Z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Nt=v.toneMapping);const Ot=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,bt=Ot!==void 0?Ot.length:0,We=S.get(Z),xt=E.state.lights;if(ye===!0&&(ke===!0||w!==O)){const xn=w===O&&Z.id===N;Te.setState(Z,w,xn)}let pt=!1;Z.version===We.__version?(We.needsLights&&We.lightsStateVersion!==xt.state.version||We.outputColorSpace!==Ee||W.isBatchedMesh&&We.batching===!1||!W.isBatchedMesh&&We.batching===!0||W.isBatchedMesh&&We.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&We.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&We.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&We.instancingMorph===!1&&W.morphTexture!==null||We.envMap!==Pe||Z.fog===!0&&We.fog!==xe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Te.numPlanes||We.numIntersection!==Te.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==Ye||We.morphTargets!==He||We.morphNormals!==at||We.morphColors!==Et||We.toneMapping!==Nt||We.morphTargetsCount!==bt)&&(pt=!0):(pt=!0,We.__version=Z.version);let Gn=We.currentProgram;pt===!0&&(Gn=Mt(Z,V,W));let hs=!1,Vn=!1,la=!1;const Ct=Gn.getUniforms(),Dn=We.uniforms;if(q.useProgram(Gn.program)&&(hs=!0,Vn=!0,la=!0),Z.id!==N&&(N=Z.id,Vn=!0),hs||O!==w){q.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ct.setValue(U,"projectionMatrix",w.projectionMatrix),Ct.setValue(U,"viewMatrix",w.matrixWorldInverse);const Ln=Ct.map.cameraPosition;Ln!==void 0&&Ln.setValue(U,me.setFromMatrixPosition(w.matrixWorld)),ie.logarithmicDepthBuffer&&Ct.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ct.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),O!==w&&(O=w,Vn=!0,la=!0)}if(We.needsLights&&(xt.state.directionalShadowMap.length>0&&Ct.setValue(U,"directionalShadowMap",xt.state.directionalShadowMap,B),xt.state.spotShadowMap.length>0&&Ct.setValue(U,"spotShadowMap",xt.state.spotShadowMap,B),xt.state.pointShadowMap.length>0&&Ct.setValue(U,"pointShadowMap",xt.state.pointShadowMap,B)),W.isSkinnedMesh){Ct.setOptional(U,W,"bindMatrix"),Ct.setOptional(U,W,"bindMatrixInverse");const xn=W.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Ct.setValue(U,"boneTexture",xn.boneTexture,B))}W.isBatchedMesh&&(Ct.setOptional(U,W,"batchingTexture"),Ct.setValue(U,"batchingTexture",W._matricesTexture,B),Ct.setOptional(U,W,"batchingIdTexture"),Ct.setValue(U,"batchingIdTexture",W._indirectTexture,B),Ct.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Ct.setValue(U,"batchingColorTexture",W._colorsTexture,B));const ii=J.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&Xe.update(W,J,Gn),(Vn||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,Ct.setValue(U,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Dn.envMap.value=Pe,Dn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(Dn.envMapIntensity.value=V.environmentIntensity),Dn.dfgLUT!==void 0&&(Dn.dfgLUT.value=eS()),Vn&&(Ct.setValue(U,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Kt(Dn,la),xe&&Z.fog===!0&&le.refreshFogUniforms(Dn,xe),le.refreshMaterialUniforms(Dn,Z,Ie,ce,E.state.transmissionRenderTarget[w.id]),Qo.upload(U,un(We),Dn,B)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Qo.upload(U,un(We),Dn,B),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ct.setValue(U,"center",W.center),Ct.setValue(U,"modelViewMatrix",W.modelViewMatrix),Ct.setValue(U,"normalMatrix",W.normalMatrix),Ct.setValue(U,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const xn=Z.uniformsGroups;for(let Ln=0,kl=xn.length;Ln<kl;Ln++){const Dr=xn[Ln];se.update(Dr,Gn),se.bind(Dr,Gn)}}return Gn}function Kt(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function en(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,V,J){const Z=S.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),S.get(w.texture).__webglTexture=V,S.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:J,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){const J=S.get(w);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0};const Oi=U.createFramebuffer();this.setRenderTarget=function(w,V=0,J=0){F=w,D=V,R=J;let Z=null,W=!1,xe=!1;if(w){const Ee=S.get(w);if(Ee.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(U.FRAMEBUFFER,Ee.__webglFramebuffer),z.copy(w.viewport),k.copy(w.scissor),Y=w.scissorTest,q.viewport(z),q.scissor(k),q.setScissorTest(Y),N=-1;return}else if(Ee.__webglFramebuffer===void 0)B.setupRenderTarget(w);else if(Ee.__hasExternalTextures)B.rebindTextures(w,S.get(w.texture).__webglTexture,S.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ye=w.depthTexture;if(Ee.__boundDepthTexture!==Ye){if(Ye!==null&&S.has(Ye)&&(w.width!==Ye.image.width||w.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(w)}}const Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(xe=!0);const Ge=S.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[V])?Z=Ge[V][J]:Z=Ge[V],W=!0):w.samples>0&&B.useMultisampledRTT(w)===!1?Z=S.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?Z=Ge[J]:Z=Ge,z.copy(w.viewport),k.copy(w.scissor),Y=w.scissorTest}else z.copy(X).multiplyScalar(Ie).floor(),k.copy(te).multiplyScalar(Ie).floor(),Y=de;if(J!==0&&(Z=Oi),q.bindFramebuffer(U.FRAMEBUFFER,Z)&&q.drawBuffers(w,Z),q.viewport(z),q.scissor(k),q.setScissorTest(Y),W){const Ee=S.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ee.__webglTexture,J)}else if(xe){const Ee=V;for(let Pe=0;Pe<w.textures.length;Pe++){const Ge=S.get(w.textures[Pe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Pe,Ge.__webglTexture,J,Ee)}}else if(w!==null&&J!==0){const Ee=S.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,J)}N=-1},this.readRenderTargetPixels=function(w,V,J,Z,W,xe,Re,Ee=0){if(!(w&&w.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){q.bindFramebuffer(U.FRAMEBUFFER,Pe);try{const Ge=w.textures[Ee],Ye=Ge.format,He=Ge.type;if(!ie.textureFormatReadable(Ye)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(He)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Z&&J>=0&&J<=w.height-W&&(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee),U.readPixels(V,J,Z,W,ue.convert(Ye),ue.convert(He),xe))}finally{const Ge=F!==null?S.get(F).__webglFramebuffer:null;q.bindFramebuffer(U.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,V,J,Z,W,xe,Re,Ee=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe)if(V>=0&&V<=w.width-Z&&J>=0&&J<=w.height-W){q.bindFramebuffer(U.FRAMEBUFFER,Pe);const Ge=w.textures[Ee],Ye=Ge.format,He=Ge.type;if(!ie.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.bufferData(U.PIXEL_PACK_BUFFER,xe.byteLength,U.STREAM_READ),w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee),U.readPixels(V,J,Z,W,ue.convert(Ye),ue.convert(He),0);const Et=F!==null?S.get(F).__webglFramebuffer:null;q.bindFramebuffer(U.FRAMEBUFFER,Et);const Nt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Sm(U,Nt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xe),U.deleteBuffer(at),U.deleteSync(Nt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,J=0){const Z=Math.pow(2,-J),W=Math.floor(w.image.width*Z),xe=Math.floor(w.image.height*Z),Re=V!==null?V.x:0,Ee=V!==null?V.y:0;B.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,Re,Ee,W,xe),q.unbindTexture()};const fs=U.createFramebuffer(),tn=U.createFramebuffer();this.copyTextureToTexture=function(w,V,J=null,Z=null,W=0,xe=null){xe===null&&(W!==0?($a("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=W,W=0):xe=0);let Re,Ee,Pe,Ge,Ye,He,at,Et,Nt;const Ot=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(J!==null)Re=J.max.x-J.min.x,Ee=J.max.y-J.min.y,Pe=J.isBox3?J.max.z-J.min.z:1,Ge=J.min.x,Ye=J.min.y,He=J.isBox3?J.min.z:0;else{const ii=Math.pow(2,-W);Re=Math.floor(Ot.width*ii),Ee=Math.floor(Ot.height*ii),w.isDataArrayTexture?Pe=Ot.depth:w.isData3DTexture?Pe=Math.floor(Ot.depth*ii):Pe=1,Ge=0,Ye=0,He=0}Z!==null?(at=Z.x,Et=Z.y,Nt=Z.z):(at=0,Et=0,Nt=0);const bt=ue.convert(V.format),We=ue.convert(V.type);let xt;V.isData3DTexture?(B.setTexture3D(V,0),xt=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(B.setTexture2DArray(V,0),xt=U.TEXTURE_2D_ARRAY):(B.setTexture2D(V,0),xt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const pt=U.getParameter(U.UNPACK_ROW_LENGTH),Gn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),hs=U.getParameter(U.UNPACK_SKIP_PIXELS),Vn=U.getParameter(U.UNPACK_SKIP_ROWS),la=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ot.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ot.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ge),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ye),U.pixelStorei(U.UNPACK_SKIP_IMAGES,He);const Ct=w.isDataArrayTexture||w.isData3DTexture,Dn=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const ii=S.get(w),xn=S.get(V),Ln=S.get(ii.__renderTarget),kl=S.get(xn.__renderTarget);q.bindFramebuffer(U.READ_FRAMEBUFFER,Ln.__webglFramebuffer),q.bindFramebuffer(U.DRAW_FRAMEBUFFER,kl.__webglFramebuffer);for(let Dr=0;Dr<Pe;Dr++)Ct&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,S.get(w).__webglTexture,W,He+Dr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,S.get(V).__webglTexture,xe,Nt+Dr)),U.blitFramebuffer(Ge,Ye,Re,Ee,at,Et,Re,Ee,U.DEPTH_BUFFER_BIT,U.NEAREST);q.bindFramebuffer(U.READ_FRAMEBUFFER,null),q.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||S.has(w)){const ii=S.get(w),xn=S.get(V);q.bindFramebuffer(U.READ_FRAMEBUFFER,fs),q.bindFramebuffer(U.DRAW_FRAMEBUFFER,tn);for(let Ln=0;Ln<Pe;Ln++)Ct?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ii.__webglTexture,W,He+Ln):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ii.__webglTexture,W),Dn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xn.__webglTexture,xe,Nt+Ln):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xn.__webglTexture,xe),W!==0?U.blitFramebuffer(Ge,Ye,Re,Ee,at,Et,Re,Ee,U.COLOR_BUFFER_BIT,U.NEAREST):Dn?U.copyTexSubImage3D(xt,xe,at,Et,Nt+Ln,Ge,Ye,Re,Ee):U.copyTexSubImage2D(xt,xe,at,Et,Ge,Ye,Re,Ee);q.bindFramebuffer(U.READ_FRAMEBUFFER,null),q.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Dn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(xt,xe,at,Et,Nt,Re,Ee,Pe,bt,We,Ot.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(xt,xe,at,Et,Nt,Re,Ee,Pe,bt,Ot.data):U.texSubImage3D(xt,xe,at,Et,Nt,Re,Ee,Pe,bt,We,Ot):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,xe,at,Et,Re,Ee,bt,We,Ot.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,xe,at,Et,Ot.width,Ot.height,bt,Ot.data):U.texSubImage2D(U.TEXTURE_2D,xe,at,Et,Re,Ee,bt,We,Ot);U.pixelStorei(U.UNPACK_ROW_LENGTH,pt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Gn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,hs),U.pixelStorei(U.UNPACK_SKIP_ROWS,Vn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,la),xe===0&&V.generateMipmaps&&U.generateMipmap(xt),q.unbindTexture()},this.initRenderTarget=function(w){S.get(w).__webglFramebuffer===void 0&&B.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?B.setTextureCube(w,0):w.isData3DTexture?B.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?B.setTexture2DArray(w,0):B.setTexture2D(w,0),q.unbindTexture()},this.resetState=function(){D=0,R=0,F=null,q.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}function Wi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Cd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zs={duration:.5,overwrite:!1,delay:0},Pu,cn,Lt,ui=1e8,wt=1/ui,qc=Math.PI*2,nS=qc/4,iS=0,Rd=Math.sqrt,rS=Math.cos,sS=Math.sin,an=function(e){return typeof e=="string"},kt=function(e){return typeof e=="function"},er=function(e){return typeof e=="number"},Du=function(e){return typeof e>"u"},Ui=function(e){return typeof e=="object"},Un=function(e){return e!==!1},Lu=function(){return typeof window<"u"},No=function(e){return kt(e)||an(e)},Pd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vn=Array.isArray,aS=/random\([^)]+\)/g,oS=/,\s*/g,ih=/(?:-?\.?\d|\.)+/gi,Dd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ld=/[+-]=-?[.\d]+/,lS=/[^,'"\[\]\s]+/gi,cS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,Mi,Yc,Fu,ti={},fl={},Fd,Id=function(e){return(fl=Js(e,ti))&&kn},Iu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ja=function(e,t){return!t&&console.warn(e)},Ud=function(e,t){return e&&(ti[e]=t)&&fl&&(fl[e]=t)||ti},Za=function(){return 0},uS={suppressEvents:!0,isStart:!0,kill:!1},el={suppressEvents:!0,kill:!1},fS={suppressEvents:!0},Uu={},Er=[],$c={},Nd,Yn={},vc={},rh=30,tl=[],Nu="",Ou=function(e){var t=e[0],n,i;if(Ui(t)||kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=tl.length;i--&&!tl[i].targetTest(t););n=tl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ap(e[i],n)))||e.splice(i,1);return e},jr=function(e){return e._gsap||Ou(fi(e))[0]._gsap},Od=function(e,t,n){return(n=e[t])&&kt(n)?e[t]():Du(n)&&e.getAttribute&&e.getAttribute(t)||n},Nn=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},Vs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},hS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},hl=function(){var e=Er.length,t=Er.slice(0),n,i;for($c={},Er.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Bu=function(e){return!!(e._initted||e._startAt||e.add)},Bd=function(e,t,n,i){Er.length&&!cn&&hl(),e.render(t,n,!!(cn&&t<0&&Bu(e))),Er.length&&!cn&&hl()},kd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(lS).length<2?t:an(e)?e.trim():e},zd=function(e){return e},ni=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},dS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Js=function(e,t){for(var n in t)e[n]=t[n];return e},sh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ui(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},dl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Da=function(e){var t=e.parent||It,n=e.keyframes?dS(vn(e.keyframes)):ni;if(Un(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},pS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Gd=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Dl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ar=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Zr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},mS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Kc=function(e,t,n,i){return e._startAt&&(cn?e._startAt.revert(el):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},_S=function r(e){return!e||e._ts&&r(e.parent)},ah=function(e){return e._repeat?Qs(e._tTime,e=e.duration()+e._rDelay)*e:0},Qs=function(e,t){var n=Math.floor(e=Ft(e/t));return e&&n===e?n-1:n},pl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ll=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Fl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ll(e),n._dirty||Zr(n,e)),e},Vd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=pl(e.rawTime(),t),(!t._dur||mo(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),Zr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},Ai=function(e,t,n,i){return t.parent&&Ar(t),t._start=Ft((er(n)?n:n||e!==It?si(e,n,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Gd(e,t,"_first","_last",e._sort?"_start":0),jc(t)||(e._recent=t),i||Vd(e,t),e._ts<0&&Fl(e,e._tTime),e},Hd=function(e,t){return(ti.ScrollTrigger||Iu("scrollTrigger",t))&&ti.ScrollTrigger.create(t,e)},Wd=function(e,t,n,i,s){if(zu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Nd!==Kn.frame)return Er.push(e),e._lazy=[s,i],1},gS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},jc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vS=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&gS(e)&&!(!e._initted&&jc(e))||(e._ts<0||e._dp._ts<0)&&!jc(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=mo(0,e._tDur,t),u=Qs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Qs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||cn||i||e._zTime===wt||!t&&e._zTime){if(!e._initted&&Wd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Kc(e,t,n,!0),e._onUpdate&&!n&&Zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ar(e,1),!n&&!cn&&(Zn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},xS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ea=function(e,t,n,i){var s=e._repeat,a=Ft(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ft(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Fl(e,e._tTime=e._tDur*o),e.parent&&Ll(e),n||Zr(e.parent,e),e},oh=function(e){return e instanceof Cn?Zr(e):ea(e,e._dur)},SS={_start:0,endTime:Za,totalDuration:Za},si=function r(e,t,n){var i=e.labels,s=e._recent||SS,a=e.duration()>=ui?s.endTime(!1):e._dur,o,l,c;return an(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(vn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},La=function(e,t,n){var i=er(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Un(l.vars.inherit)&&l.parent;a.immediateRender=Un(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new qt(t[0],a,t[s+1])},Pr=function(e,t){return e||e===0?t(e):t},mo=function(e,t,n){return n<e?e:n>t?t:n},mn=function(e,t){return!an(e)||!(t=cS.exec(e))?"":t[1]},yS=function(e,t,n){return Pr(n,function(i){return mo(e,t,i)})},Zc=[].slice,Xd=function(e,t){return e&&Ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ui(e[0]))&&!e.nodeType&&e!==Mi},MS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return an(i)&&!t||Xd(i,1)?(s=n).push.apply(s,fi(i)):n.push(i)})||n},fi=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):an(e)&&!n&&(Yc||!ta())?Zc.call((t||Fu).querySelectorAll(e),0):vn(e)?MS(e,n):Xd(e)?Zc.call(e,0):e?[e]:[]},Jc=function(e){return e=fi(e)[0]||ja("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return fi(t,n.querySelectorAll?n:n===e?ja("Invalid scope")||Fu.createElement("div"):e)}},qd=function(e){return e.sort(function(){return .5-Math.random()})},Yd=function(e){if(kt(e))return e;var t=Ui(e)?e:{each:e},n=Jr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return an(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||t).length,m=a[_],p,T,M,y,E,A,b,P,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,ui])[1],!v){for(b=-ui;b<(b=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=a[_]=[],p=l?Math.min(v,_)*u-.5:i%v,T=v===ui?0:l?_*f/v-.5:i/v|0,b=0,P=ui,A=0;A<_;A++)M=A%v-p,y=T-(A/v|0),m[A]=E=c?Math.abs(c==="y"?y:M):Rd(M*M+y*y),E>b&&(b=E),E<P&&(P=E);i==="random"&&qd(m),m.max=b-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=mn(t.amount||t.each)||0,n=n&&_<0?ip(n):n}return _=(m[h]-m.min)/m.max||0,Ft(m.b+(n?n(_):_)*m.v)+m.u}},Qc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(er(n)?0:mn(n))}},$d=function(e,t){var n=vn(e),i,s;return!n&&Ui(e)&&(i=n=e.radius||ui,e.values?(e=fi(e.values),(s=!er(e[0]))&&(i*=i)):e=Qc(e.increment)),Pr(t,n?kt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ui,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,s||u===a||er(a)?u:u+mn(a)}:Qc(e))},Kd=function(e,t,n,i){return Pr(vn(e)?!t:n===!0?!!(n=0):!i,function(){return vn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ES=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},TS=function(e,t){return function(n){return e(parseFloat(n))+(t||mn(n))}},bS=function(e,t,n){return Zd(e,t,0,1,n)},jd=function(e,t,n){return Pr(n,function(i){return e[~~t(i)]})},AS=function r(e,t,n){var i=t-e;return vn(e)?jd(e,r(0,e.length),t):Pr(n,function(s){return(i+(s-e)%i)%i+e})},wS=function r(e,t,n){var i=t-e,s=i*2;return vn(e)?jd(e,r(0,e.length-1),t):Pr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ja=function(e){return e.replace(aS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(oS);return Kd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Zd=function(e,t,n,i,s){var a=t-e,o=i-n;return Pr(s,function(l){return n+((l-e)/a*o||0)})},CS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=an(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(vn(e)&&!vn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=Js(vn(e)?[]:{},e));if(!u){for(l in t)ku.call(o,e,l,"get",t[l]);s=function(g){return Hu(g,o)||(a?e.p:e)}}}return Pr(n,s)},lh=function(e,t,n){var i=e.labels,s=ui,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Zn=function(e,t,n){var i=e.vars,s=i[t],a=Lt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Er.length&&hl(),o&&(Lt=o),u=l?s.apply(c,l):s.call(c),Lt=a,u},Ma=function(e){return Ar(e),e.scrollTrigger&&e.scrollTrigger.kill(!!cn),e.progress()<1&&Zn(e,"onInterrupt"),e},Ns,Jd=[],Qd=function(e){if(e)if(e=!e.name&&e.default||e,Lu()||e.headless){var t=e.name,n=kt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Za,render:Hu,add:ku,kill:WS,modifier:HS,rawVars:0},a={targetTest:0,get:0,getSetter:Vu,aliases:{},register:0};if(ta(),e!==i){if(Yn[t])return;ni(i,ni(dl(e,s),a)),Js(i.prototype,Js(s,dl(e,a))),Yn[i.prop=t]=i,e.targetTest&&(tl.push(i),Uu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ud(t,i),e.register&&e.register(kn,i,On)}else Jd.push(e)},At=255,Ea={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},xc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},ep=function(e,t,n){var i=e?er(e)?[e>>16,e>>8&At,e&At]:0:Ea.black,s,a,o,l,c,u,f,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ea[e])i=Ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&At,i&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(ih),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=xc(l+1/3,s,a),i[1]=xc(l,s,a),i[2]=xc(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Dd),n&&i.length<4&&(i[3]=1),i}else i=e.match(ih)||Ea.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/At,a=i[1]/At,o=i[2]/At,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},tp=function(e){var t=[],n=[],i=-1;return e.split(Tr).forEach(function(s){var a=s.match(Us)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},ch=function(e,t,n){var i="",s=(e+i).match(Tr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=ep(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=tp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Tr,"1").split(Us),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Tr),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},Tr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ea)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),RS=/hsl[a]?\(/,np=function(e){var t=e.join(" "),n;if(Tr.lastIndex=0,Tr.test(t))return n=RS.test(t),e[1]=ch(e[1],n),e[0]=ch(e[0],n,tp(e[1])),!0},Qa,Kn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,g=function _(m){var p=r()-i,T=m===!0,M,y,E,A;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,M=E-a,(M>0||T)&&(A=++f.frame,h=E-f.time*1e3,f.time=E=E/1e3,a+=M+(M>=s?4:s-M),y=1),T||(l=c(_)),y)for(d=0;d<o.length;d++)o[d](E,h,A,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Fd&&(!Yc&&Lu()&&(Mi=Yc=window,Fu=Mi.document||{},ti.gsap=kn,(Mi.gsapVersions||(Mi.gsapVersions=[])).push(kn.version),Id(fl||Mi.GreenSockGlobals||!Mi.gsap&&Mi||{}),Jd.forEach(Qd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Qa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Qa=0,c=Za},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,T){var M=p?function(y,E,A,b){m(y,E,A,b),f.remove(M)}:m;return f.remove(m),o[T?"unshift":"push"](M),ta(),M},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f})(),ta=function(){return!Qa&&Kn.wake()},ut={},PS=/^[\d.\-M][\d.\-,\s]/,DS=/["']/g,LS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(DS,"").trim():+c,i=l.substr(o+1).trim();return t},FS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},IS=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[LS(t[1])]:FS(e).split(",").map(kd)):ut._CE&&PS.test(e)?ut._CE("",e):n},ip=function(e){return function(t){return 1-e(1-t)}},rp=function r(e,t){for(var n=e._first,i;n;)n instanceof Cn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Jr=function(e,t){return e&&(kt(e)?e:ut[e]||IS(e))||t},us=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Nn(e,function(o){ut[o]=ti[o]=s,ut[a=o.toLowerCase()]=n;for(var l in s)ut[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[o+"."+l]=s[l]}),s},sp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Sc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/qc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*sS((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:sp(o);return s=qc/s,l.config=function(c,u){return r(e,c,u)},l},yc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:sp(n);return i.config=function(s){return r(e,s)},i};Nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;us(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;us("Elastic",Sc("in"),Sc("out"),Sc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};us("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);us("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});us("Circ",function(r){return-(Rd(1-r*r)-1)});us("Sine",function(r){return r===1?1:-rS(r*nS)+1});us("Back",yc("in"),yc("out"),yc());ut.SteppedEase=ut.steps=ti.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-wt;return function(o){return((i*mo(0,a,o)|0)+s)*n}}};Zs.ease=ut["quad.out"];Nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Nu+=r+","+r+"Params,"});var ap=function(e,t){this.id=iS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Od,this.set=t?t.getSetter:Vu},eo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ea(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),Qa||Kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ea(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ta(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fl(this,n),!s._dp||s.parent||Vd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Bd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ah(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ah(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Qs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?pl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts,this.totalTime(mo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ll(this),mS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ta(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ft(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ai(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=fS);var i=cn;return cn=n,Bu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,oh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,oh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(si(this,n),Un(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Un(i)),this._dur||(this._zTime=-wt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=kt(n)?n:zd,l=function(){var u=i.then;i.then=null,s&&s(),kt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Ma(this)},r})();ni(eo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var Cn=(function(r){Cd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Un(n.sortChildren),It&&Ai(n.parent||It,Wi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Hd(Wi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return La(0,arguments,this),this},t.from=function(i,s,a){return La(1,arguments,this),this},t.fromTo=function(i,s,a,o){return La(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Da(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(i,s,si(this,a),1),this},t.call=function(i,s,a){return Ai(this,qt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new qt(i,a,si(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Da(a).immediateRender=Un(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,Da(o).immediateRender=Un(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ft(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,m,p,T,M,y,E,A,b;if(this!==It&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,y=this._start,M=this._ts,p=!M,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Ft(u%m),u===l?(_=this._repeat,h=c):(E=Ft(u/m),_=~~E,_&&_===E&&(h=c,_--),h>c&&(h=c)),E=Qs(this._tTime,m),!o&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),A&&_&1&&(h=c-h,b=1),_!==E&&!this._lock){var P=A&&E&1,v=P===(A&&_&1);if(_<E&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Ft(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Zn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;rp(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=xS(this,Ft(o),Ft(h)),T&&(u-=h-(h=T._start))),this._tTime=u,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!E&&(Zn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=-wt);break}}d=g}else{d=this._last;for(var x=i<0?i:h;d;){if(g=d._prev,(d._act||x<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,a||cn&&Bu(d)),h!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=x?-wt:wt);break}}d=g}}if(T&&!s&&(this.pause(),T.render(h>=o?0:-wt)._zTime=h>=o?1:-1,this._ts))return this._start=y,Ll(this),this.render(i,s,a);this._onUpdate&&!s&&Zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ar(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(er(s)||(s=si(this,s,i)),!(i instanceof eo)){if(vn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(an(i))return this.addLabel(i,s);if(kt(i))i=qt.delayedCall(0,i);else return this}return this!==i?Ai(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ui);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof qt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return an(i)?this.removeLabel(i):kt(i)?this.killTweensOf(i):(i.parent===this&&Dl(this,i),i===this._recent&&(this._recent=this._last),Zr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(Kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=si(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=qt.delayedCall(0,s||Za,a);return o.data="isPause",this._hasPause=1,Ai(this,o,si(this,i))},t.removePause=function(i){var s=this._first;for(i=si(this,i);s;)s._start===i&&s.data==="isPause"&&Ar(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)vr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=fi(i),l=this._first,c=er(s),u;l;)l instanceof qt?hS(l._targets,o)&&(c?(!vr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=si(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=qt.to(a,ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||wt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&ea(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ni({startAt:{time:si(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),lh(this,si(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),lh(this,si(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ft(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Zr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Zr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=ui,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ai(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Ft(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ea(a,a===It&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(It._ts&&(Bd(It,pl(i,It)),Nd=Kn.frame),Kn.frame>=rh){rh+=ei.autoSleep||120;var s=It._first;if((!s||!s._ts)&&ei.autoSleep&&Kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Kn.sleep()}}},e})(eo);ni(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var US=function(e,t,n,i,s,a,o){var l=new On(this._pt,e,t,0,1,hp,null,s),c=0,u=0,f,h,d,g,_,m,p,T;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ja(i)),a&&(T=[n,i],a(T,e,t),n=T[0],i=T[1]),h=n.match(gc)||[];f=gc.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Vs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=gc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ld.test(i)||p)&&(l.e=0),this._pt=l,l},ku=function(e,t,n,i,s,a,o,l,c,u){kt(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:kt(f)?c?e[t.indexOf("set")||!kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=kt(f)?c?zS:up:Gu,g;if(an(i)&&(~i.indexOf("random(")&&(i=Ja(i)),i.charAt(1)==="="&&(g=Vs(h,i)+(mn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||eu)return!isNaN(h*i)&&i!==""?(g=new On(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?VS:fp,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&Iu(t,i),US.call(this,e,t,h,i,d,l||ei.stringFilter,c))},NS=function(e,t,n,i,s){if(kt(e)&&(e=Fa(e,s,t,n,i)),!Ui(e)||e.style&&e.nodeType||vn(e)||Pd(e))return an(e)?Fa(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Fa(e[o],s,t,n,i);return a},op=function(e,t,n,i,s,a){var o,l,c,u;if(Yn[e]&&(o=new Yn[e]).init(s,o.rawVars?t[e]:NS(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new On(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ns))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},vr,eu,zu=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,T=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!Pu,y=e.timeline,E,A,b,P,v,x,D,R,F,N,O,z,k;if(y&&(!h||!s)&&(s="none"),e._ease=Jr(s,Zs.ease),e._yEase=f?ip(Jr(f===!0?s:f,Zs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!i.runBackwards,!y||h&&!i.stagger){if(R=m[0]?jr(m[0]).harness:0,z=R&&i[R.prop],E=dl(i,Uu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?el:uS),_._lazy=0),a){if(Ar(e._startAt=qt.set(m,ni({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Un(l),startAt:null,delay:0,onUpdate:c&&function(){return Zn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn||!o&&!d)&&e._startAt.revert(el),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),b=ni({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Un(l),immediateRender:o,stagger:0,parent:p},E),z&&(b[R.prop]=z),Ar(e._startAt=qt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn?e._startAt.revert(el):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Un(l)||l&&!g,A=0;A<m.length;A++){if(v=m[A],D=v._gsap||Ou(m)[A]._gsap,e._ptLookup[A]=N={},$c[D.id]&&Er.length&&hl(),O=T===m?A:T.indexOf(v),R&&(F=new R).init(v,z||E,e,O,T)!==!1&&(e._pt=P=new On(e._pt,v,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(Y){N[Y]=P}),F.priority&&(x=1)),!R||z)for(b in E)Yn[b]&&(F=op(b,E,e,O,v,T))?F.priority&&(x=1):N[b]=P=ku.call(e,v,b,"get",E[b],O,T,0,i.stringFilter);e._op&&e._op[A]&&e.kill(v,e._op[A]),M&&e._pt&&(vr=e,It.killTweensOf(v,N,e.globalTime(t)),k=!e.parent,vr=0),e._pt&&l&&($c[D.id]=1)}x&&dp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,h&&t<=0&&y.render(ui,!0,!0)},OS=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return eu=1,e.vars[t]="+=0",zu(e,o),eu=0,l?ja(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Gt(n)+mn(f.e)),f.b&&(f.b=u.s+mn(f.b))},BS=function(e,t){var n=e[0]?jr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Js({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},kS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(vn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Fa=function(e,t,n,i,s){return kt(e)?e.call(t,n,i,s):an(e)&&~e.indexOf("random(")?Ja(e):e},lp=Nu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",cp={};Nn(lp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return cp[r]=1});var qt=(function(r){Cd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Da(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,T=i.parent||It,M=(vn(n)||Pd(n)?er(n[0]):"length"in i)?[n]:fi(n),y,E,A,b,P,v,x,D;if(o._targets=M.length?Ou(M):ja("GSAP target "+n+" not found. https://gsap.com",!ei.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||h||No(c)||No(u)){if(i=o.vars,y=o.timeline=new Cn({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:M}),y.kill(),y.parent=y._dp=Wi(o),y._start=0,h||No(c)||No(u)){if(b=M.length,x=h&&Yd(h),Ui(h))for(P in h)~lp.indexOf(P)&&(D||(D={}),D[P]=h[P]);for(E=0;E<b;E++)A=dl(i,cp),A.stagger=0,p&&(A.yoyoEase=p),D&&Js(A,D),v=M[E],A.duration=+Fa(c,Wi(o),E,v,M),A.delay=(+Fa(u,Wi(o),E,v,M)||0)-o._delay,!h&&b===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),y.to(v,A,x?x(E,v,M):0),y._ease=ut.none;y.duration()?c=u=0:o.timeline=0}else if(g){Da(ni(y.vars.defaults,{ease:"none"})),y._ease=Jr(g.ease||i.ease||"none");var R=0,F,N,O;if(vn(g))g.forEach(function(z){return y.to(M,z,">")}),y.duration();else{A={};for(P in g)P==="ease"||P==="easeEach"||kS(P,g[P],A,g.easeEach);for(P in A)for(F=A[P].sort(function(z,k){return z.t-k.t}),R=0,E=0;E<F.length;E++)N=F[E],O={ease:N.e,duration:(N.t-(E?F[E-1].t:0))/100*c},O[P]=N.v,y.to(M,O,R),R+=O.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!Pu&&(vr=Wi(o),It.killTweensOf(M),vr=0),Ai(T,Wi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===Ft(T._time)&&Un(f)&&_S(Wi(o))&&T.data!=="nested")&&(o._tTime=-wt,o.render(Math.max(0,-u)||0)),m&&Hd(Wi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-wt&&!u?l:i<wt?0:i,h,d,g,_,m,p,T,M,y;if(!c)vS(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=Ft(f%_),f===l?(g=this._repeat,h=c):(m=Ft(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(y=this._yEase,h=c-h),m=Qs(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(M&&this._yEase&&rp(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Ft(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Wd(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(y||this._ease)(h/c),this._from&&(this.ratio=T=1-T),!o&&f&&!s&&!m&&(Zn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Kc(this,i,s,a),Zn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Zn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Kc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ar(this,1),!s&&!(u&&!o)&&(f||o||p)&&(Zn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Qa||Kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||zu(this,c),u=this._ease(c/this._dur),OS(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Fl(this,0),this.parent||Gd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ma(this):this.scrollTrigger&&this.scrollTrigger.kill(!!cn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,vr&&vr.vars.overwrite!==!0)._first||Ma(this),this.parent&&a!==this.timeline.totalDuration()&&ea(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?fi(i):o,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&pS(o,l))return s==="all"&&(this._pt=0),Ma(this);for(f=this._op=this._op||[],s!=="all"&&(an(s)&&(_={},Nn(s,function(T){return _[T]=1}),s=_),s=BS(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Dl(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Ma(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return La(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return La(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return It.killTweensOf(i,s,a)},e})(eo);ni(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Nn("staggerTo,staggerFrom,staggerFromTo",function(r){qt[r]=function(){var e=new Cn,t=Zc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Gu=function(e,t,n){return e[t]=n},up=function(e,t,n){return e[t](n)},zS=function(e,t,n,i){return e[t](i.fp,n)},GS=function(e,t,n){return e.setAttribute(t,n)},Vu=function(e,t){return kt(e[t])?up:Du(e[t])&&e.setAttribute?GS:Gu},fp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},VS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Hu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},HS=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},WS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Dl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},XS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},dp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},On=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||fp,this.d=l||this,this.set=c||Gu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=XS,this.m=n,this.mt=s,this.tween=i},r})();Nn(Nu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Uu[r]=1});ti.TweenMax=ti.TweenLite=qt;ti.TimelineLite=ti.TimelineMax=Cn;It=new Cn({sortChildren:!1,defaults:Zs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ei.stringFilter=np;var Qr=[],nl={},qS=[],uh=0,YS=0,Mc=function(e){return(nl[e]||qS).map(function(t){return t()})},tu=function(){var e=Date.now(),t=[];e-uh>2&&(Mc("matchMediaInit"),Qr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Mi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Mc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),uh=e,Mc("matchMedia"))},pp=(function(){function r(t,n){this.selector=n&&Jc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=YS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){kt(n)&&(s=i,i=n,n=kt);var a=this,o=function(){var c=Lt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Jc(s)),Lt=a,f=i.apply(a,arguments),kt(f)&&a._r.push(f),Lt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===kt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Lt;Lt=null,n(this),Lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Qr.length;a--;)Qr[a].id===this.id&&Qr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),$S=(function(){function r(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ui(n)||(n={matches:n});var a=new pp(0,s||this.scope),o=a.conditions={},l,c,u;Lt&&!a.selector&&(a.selector=Lt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Mi.matchMedia(n[c]),l&&(Qr.indexOf(a)<0&&Qr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(tu):l.addEventListener("change",tu)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),ml={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Qd(i)})},timeline:function(e){return new Cn(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,n,i){an(e)&&(e=fi(e)[0]);var s=jr(e||{}).get,a=n?zd:kd;return n==="native"&&(n=""),e&&(t?a((Yn[t]&&Yn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Yn[o]&&Yn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=fi(e),e.length>1){var i=e.map(function(u){return kn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=Yn[t],o=jr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Ns._pt=0,f.init(e,n?u+n:u,Ns,0,[e]),f.render(1,f),Ns._pt&&Hu(1,Ns)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=kn.to(e,ni((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Jr(e.ease,Zs.ease)),sh(Zs,e||{})},config:function(e){return sh(ei,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Yn[o]&&!ti[o]&&ja(t+" effect requires "+o+" plugin.")}),vc[t]=function(o,l,c){return n(fi(o),ni(l||{},s),c)},a&&(Cn.prototype[t]=function(o,l,c){return this.add(vc[t](o,Ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=Jr(t)},parseEase:function(e,t){return arguments.length?Jr(e,t):ut},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Cn(e),i,s;for(n.smoothChildTiming=Un(e.smoothChildTiming),It.remove(n),n._dp=0,n._time=n._tTime=It._time,i=It._first;i;)s=i._next,(t||!(!i._dur&&i instanceof qt&&i.vars.onComplete===i._targets[0]))&&Ai(n,i,i._start-i._delay),i=s;return Ai(It,n,0),n},context:function(e,t){return e?new pp(e,t):Lt},matchMedia:function(e){return new $S(e)},matchMediaRefresh:function(){return Qr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||tu()},addEventListener:function(e,t){var n=nl[e]||(nl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=nl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:AS,wrapYoyo:wS,distribute:Yd,random:Kd,snap:$d,normalize:bS,getUnit:mn,clamp:yS,splitColor:ep,toArray:fi,selector:Jc,mapRange:Zd,pipe:ES,unitize:TS,interpolate:CS,shuffle:qd},install:Id,effects:vc,ticker:Kn,updateRoot:Cn.updateRoot,plugins:Yn,globalTimeline:It,core:{PropTween:On,globals:Ud,Tween:qt,Timeline:Cn,Animation:eo,getCache:jr,_removeLinkedListItem:Dl,reverting:function(){return cn},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return Pu=e}}};Nn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ml[r]=qt[r]});Kn.add(Cn.updateRoot);Ns=ml.to({},{duration:0});var KS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},jS=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=KS(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ec=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(an(s)&&(l={},Nn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}jS(o,s)}}}},kn=ml.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ec("roundProps",Qc),Ec("modifiers"),Ec("snap",$d))||ml;qt.version=Cn.version=kn.version="3.14.2";Fd=1;Lu()&&ta();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fh,xr,Hs,Wu,qr,hh,Xu,ZS=function(){return typeof window<"u"},tr={},Gr=180/Math.PI,Ws=Math.PI/180,ws=Math.atan2,dh=1e8,qu=/([A-Z])/g,JS=/(left|right|width|margin|padding|x)/i,QS=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ey=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ty=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ny=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},iy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},mp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_p=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ry=function(e,t,n){return e.style[t]=n},sy=function(e,t,n){return e.style.setProperty(t,n)},ay=function(e,t,n){return e._gsap[t]=n},oy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ly=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},cy=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ut="transform",Bn=Ut+"Origin",uy=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Xi(i,o)}):this.tfm[e]=a.x?a[e]:Xi(i,e),e===Bn&&(this.tfm.zOrigin=a.zOrigin);else return wi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ut)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Bn,t,"")),e=Ut}(s||t)&&this.props.push(e,t,s[e])},gp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},fy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(qu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Xu(),(!s||!s.isStart)&&!n[Ut]&&(gp(n),i.zOrigin&&n[Bn]&&(n[Bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},vp=function(e,t){var n={target:e,props:[],revert:fy,save:uy};return e._gsap||kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},xp,iu=function(e,t){var n=xr.createElementNS?xr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xr.createElement(e);return n&&n.style?n:xr.createElement(e)},Jn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(qu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,na(t)||t,1)||""},ph="O,Moz,ms,Ms,Webkit".split(","),na=function(e,t,n){var i=t||qr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ph[a]+e in s););return a<0?null:(a===3?"ms":a>=0?ph[a]:"")+e},ru=function(){ZS()&&window.document&&(fh=window,xr=fh.document,Hs=xr.documentElement,qr=iu("div")||{style:{}},iu("div"),Ut=na(Ut),Bn=Ut+"Origin",qr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xp=!!na("perspective"),Xu=kn.core.reverting,Wu=1)},mh=function(e){var t=e.ownerSVGElement,n=iu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Hs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Hs.removeChild(n),s},_h=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Sp=function(e){var t,n;try{t=e.getBBox()}catch{t=mh(e),n=1}return t&&(t.width||t.height)||n||(t=mh(e)),t&&!t.width&&!t.x&&!t.y?{x:+_h(e,["x","cx","x1"])||0,y:+_h(e,["y","cy","y1"])||0,width:0,height:0}:t},yp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Sp(e))},wr=function(e,t){if(t){var n=e.style,i;t in tr&&t!==Bn&&(t=Ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(qu,"-$1").toLowerCase())):n.removeAttribute(t)}},Sr=function(e,t,n,i,s,a){var o=new On(e._pt,t,n,0,1,a?_p:mp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},gh={deg:1,rad:1,turn:1},hy={grid:1,flex:1},Cr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=qr.style,l=JS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,m,p;if(i===a||!s||gh[i]||gh[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&yp(e),(d||a==="%")&&(tr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Gt(d?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===xr||!_.appendChild)&&(_=xr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Kn.time&&!m.uncache)return Gt(s/m.width*f);if(d&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=f+i,g=e[u],T?e.style[t]=T:wr(e,t)}else(d||a==="%")&&!hy[Jn(_,"display")]&&(o.position=Jn(e,"position")),_===e&&(o.position="static"),_.appendChild(qr),g=qr[u],_.removeChild(qr),o.position="absolute";return l&&d&&(m=jr(_),m.time=Kn.time,m.width=_[u]),Gt(h?g*s/f:g&&s?f/g*s:0)},Xi=function(e,t,n,i){var s;return Wu||ru(),t in wi&&t!=="transform"&&(t=wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),tr[t]&&t!=="transform"?(s=no(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:gl(Jn(e,Bn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=_l[t]&&_l[t](e,t,n)||Jn(e,t)||Od(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Cr(e,t,s,n)+n:s},dy=function(e,t,n,i){if(!n||n==="none"){var s=na(t,e,1),a=s&&Jn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Jn(e,"borderTopColor"))}var o=new On(this._pt,e.style,t,0,1,hp),l=0,c=0,u,f,h,d,g,_,m,p,T,M,y,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Jn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Jn(e,t)||i,_?e.style[t]=_:wr(e,t)),u=[n,i],np(u),n=u[0],i=u[1],h=n.match(Us)||[],E=i.match(Us)||[],E.length){for(;f=Us.exec(i);)m=f[0],T=i.substring(l,f.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=Vs(d,m)+y),p=parseFloat(m),M=m.substr((p+"").length),l=Us.lastIndex-M.length,M||(M=M||ei.units[t]||y,l===i.length&&(i+=M,o.e+=M)),y!==M&&(d=Cr(e,t,_,M)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?_p:mp;return Ld.test(i)&&(o.e=0),this._pt=o,o},vh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},py=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=vh[n]||n,t[1]=vh[i]||i,t.join(" ")},my=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],tr[o]&&(l=1,o=o==="transformOrigin"?Bn:Ut),wr(n,o);l&&(wr(n,Ut),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",no(n,1),a.uncache=1,gp(i)))}},_l={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new On(e._pt,t,n,0,0,my);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},to=[1,0,0,1,0,0],Mp={},Ep=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},xh=function(e){var t=Jn(e,Ut);return Ep(t)?to:t.substr(7).match(Dd).map(Gt)},Yu=function(e,t){var n=e._gsap||jr(e),i=e.style,s=xh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?to:s):(s===to&&!e.offsetParent&&e!==Hs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Hs.appendChild(e)),s=xh(e),l?i.display=l:wr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Hs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},su=function(e,t,n,i,s,a){var o=e._gsap,l=s||Yu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],T=l[5],M=t.split(" "),y=parseFloat(M[0])||0,E=parseFloat(M[1])||0,A,b,P,v;n?l!==to&&(b=d*m-g*_)&&(P=y*(m/b)+E*(-_/b)+(_*T-m*p)/b,v=y*(-g/b)+E*(d/b)-(d*T-g*p)/b,y=P,E=v):(A=Sp(e),y=A.x+(~M[0].indexOf("%")?y/100*A.width:y),E=A.y+(~(M[1]||M[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&o.smooth?(p=y-c,T=E-u,o.xOffset=f+(p*d+T*_)-p,o.yOffset=h+(p*g+T*m)-T):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Bn]="0px 0px",a&&(Sr(a,o,"xOrigin",c,y),Sr(a,o,"yOrigin",u,E),Sr(a,o,"xOffset",f,o.xOffset),Sr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},no=function(e,t){var n=e._gsap||new ap(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Jn(e,Bn)||"0",u,f,h,d,g,_,m,p,T,M,y,E,A,b,P,v,x,D,R,F,N,O,z,k,Y,K,L,ne,ce,Ie,Fe,Ae;return u=f=h=_=m=p=T=M=y=0,d=g=1,n.svg=!!(e.getCTM&&yp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ut]!=="none"?l[Ut]:"")),i.scale=i.rotate=i.translate="none"),b=Yu(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),su(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,b)),E=n.xOrigin||0,A=n.yOrigin||0,b!==to&&(D=b[0],R=b[1],F=b[2],N=b[3],u=O=b[4],f=z=b[5],b.length===6?(d=Math.sqrt(D*D+R*R),g=Math.sqrt(N*N+F*F),_=D||R?ws(R,D)*Gr:0,T=F||N?ws(F,N)*Gr+_:0,T&&(g*=Math.abs(Math.cos(T*Ws))),n.svg&&(u-=E-(E*D+A*F),f-=A-(E*R+A*N))):(Ae=b[6],Ie=b[7],L=b[8],ne=b[9],ce=b[10],Fe=b[11],u=b[12],f=b[13],h=b[14],P=ws(Ae,ce),m=P*Gr,P&&(v=Math.cos(-P),x=Math.sin(-P),k=O*v+L*x,Y=z*v+ne*x,K=Ae*v+ce*x,L=O*-x+L*v,ne=z*-x+ne*v,ce=Ae*-x+ce*v,Fe=Ie*-x+Fe*v,O=k,z=Y,Ae=K),P=ws(-F,ce),p=P*Gr,P&&(v=Math.cos(-P),x=Math.sin(-P),k=D*v-L*x,Y=R*v-ne*x,K=F*v-ce*x,Fe=N*x+Fe*v,D=k,R=Y,F=K),P=ws(R,D),_=P*Gr,P&&(v=Math.cos(P),x=Math.sin(P),k=D*v+R*x,Y=O*v+z*x,R=R*v-D*x,z=z*v-O*x,D=k,O=Y),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Gt(Math.sqrt(D*D+R*R+F*F)),g=Gt(Math.sqrt(z*z+Ae*Ae)),P=ws(O,z),T=Math.abs(P)>2e-4?P*Gr:0,y=Fe?1/(Fe<0?-Fe:Fe):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ep(Jn(e,Ut)),k&&e.setAttribute("transform",k))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(d*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Gt(d),n.scaleY=Gt(g),n.rotation=Gt(_)+o,n.rotationX=Gt(m)+o,n.rotationY=Gt(p)+o,n.skewX=T+o,n.skewY=M+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Bn]=gl(c)),n.xOffset=n.yOffset=0,n.force3D=ei.force3D,n.renderTransform=n.svg?gy:xp?Tp:_y,n.uncache=0,n},gl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Tc=function(e,t,n){var i=mn(t);return Gt(parseFloat(t)+parseFloat(Cr(e,"x",n+"px",i)))+i},_y=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tp(e,t)},Br="0deg",_a="0px",kr=") ",Tp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,M=n.zOrigin,y="",E=p==="auto"&&e&&e!==1||p===!0;if(M&&(f!==Br||u!==Br)){var A=parseFloat(u)*Ws,b=Math.sin(A),P=Math.cos(A),v;A=parseFloat(f)*Ws,v=Math.cos(A),a=Tc(T,a,b*v*-M),o=Tc(T,o,-Math.sin(A)*-M),l=Tc(T,l,P*v*-M+M)}m!==_a&&(y+="perspective("+m+kr),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(E||a!==_a||o!==_a||l!==_a)&&(y+=l!==_a||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+kr),c!==Br&&(y+="rotate("+c+kr),u!==Br&&(y+="rotateY("+u+kr),f!==Br&&(y+="rotateX("+f+kr),(h!==Br||d!==Br)&&(y+="skew("+h+", "+d+kr),(g!==1||_!==1)&&(y+="scale("+g+", "+_+kr),T.style[Ut]=y||"translate(0, 0)"},gy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,M=parseFloat(a),y=parseFloat(o),E,A,b,P,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ws,c*=Ws,E=Math.cos(l)*f,A=Math.sin(l)*f,b=Math.sin(l-c)*-h,P=Math.cos(l-c)*h,c&&(u*=Ws,v=Math.tan(c-u),v=Math.sqrt(1+v*v),b*=v,P*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),E*=v,A*=v)),E=Gt(E),A=Gt(A),b=Gt(b),P=Gt(P)):(E=f,P=h,A=b=0),(M&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(M=Cr(d,"x",a,"px"),y=Cr(d,"y",o,"px")),(g||_||m||p)&&(M=Gt(M+g-(g*E+_*b)+m),y=Gt(y+_-(g*A+_*P)+p)),(i||s)&&(v=d.getBBox(),M=Gt(M+i/100*v.width),y=Gt(y+s/100*v.height)),v="matrix("+E+","+A+","+b+","+P+","+M+","+y+")",d.setAttribute("transform",v),T&&(d.style[Ut]=v)},vy=function(e,t,n,i,s){var a=360,o=an(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Gr:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*dh)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*dh)%a-~~(c/a)*a)),e._pt=h=new On(e._pt,t,n,i,c,ey),h.e=u,h.u="deg",e._props.push(n),h},Sh=function(e,t){for(var n in t)e[n]=t[n];return e},xy=function(e,t,n){var i=Sh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ut]=t,o=no(n,1),wr(n,Ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ut],a[Ut]=t,o=no(n,1),a[Ut]=c);for(l in tr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=mn(c),g=mn(u),f=d!==g?Cr(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new On(e._pt,o,l,f,h-f,nu),e._pt.u=g||0,e._props.push(l));Sh(o,i)};Nn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});_l[e>1?"border"+r:r]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(g){return Xi(o,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var bp={name:"css",register:ru,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,T,M,y,E,A,b,P,v;Wu||ru(),this.styles=this.styles||vp(e),P=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Yn[_]&&op(_,t,n,i,e,s)))){if(d=typeof u,g=_l[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ja(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Tr.lastIndex=0,Tr.test(c)||(m=mn(c),p=mn(u),p?m!==p&&(c=Cr(e,_,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],an(c)&&~c.indexOf("random(")&&(c=Ja(c)),mn(c+"")||c==="auto"||(c+=ei.units[_]||mn(Xi(e,_))||""),(c+"").charAt(1)==="="&&(c=Xi(e,_))):c=Xi(e,_),h=parseFloat(c),T=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),f=parseFloat(u),_ in wi&&(_==="autoAlpha"&&(h===1&&Xi(e,"visibility")==="hidden"&&f&&(h=0),P.push("visibility",0,o.visibility),Sr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=wi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in tr,M){if(this.styles.save(_),v=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Jn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=Jn(e,"perspective"),x?e.style.perspective=x:wr(e,"perspective")}f=parseFloat(u)}if(y||(E=e._gsap,E.renderTransform&&!t.parseTransform||no(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new On(this._pt,o,Ut,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new On(this._pt,E,"scaleY",E.scaleY,(T?Vs(E.scaleY,T+f):f)-E.scaleY||0,nu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Bn,0,o[Bn]),u=py(u),E.svg?su(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&Sr(this,E,"zOrigin",E.zOrigin,p),Sr(this,o,_,gl(c),gl(u)));continue}else if(_==="svgOrigin"){su(e,u,1,A,0,this);continue}else if(_ in Mp){vy(this,E,_,h,T?Vs(h,T+u):u);continue}else if(_==="smoothOrigin"){Sr(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){xy(this,u,e);continue}}else _ in o||(_=na(_)||_);if(M||(f||f===0)&&(h||h===0)&&!QS.test(u)&&_ in o)m=(c+"").substr((h+"").length),f||(f=0),p=mn(u)||(_ in ei.units?ei.units[_]:m),m!==p&&(h=Cr(e,_,c,p)),this._pt=new On(this._pt,M?E:o,_,h,(T?Vs(h,T+f):f)-h,!M&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?iy:nu),this._pt.u=p||0,M&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=ny):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=ty);else if(_ in o)dy.call(this,e,_,c,T?T+u:u);else if(_ in e)this.add(e,_,c||e[_],T?T+u:u,i,s);else if(_!=="parseTransform"){Iu(_,u);continue}M||(_ in o?P.push(_,0,o[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,c||e[_])),a.push(_)}}b&&dp(this)},render:function(e,t){if(t.tween._time||!Xu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xi,aliases:wi,getSetter:function(e,t,n){var i=wi[t];return i&&i.indexOf(",")<0&&(t=i),t in tr&&t!==Bn&&(e._gsap.x||Xi(e,"x"))?n&&hh===n?t==="scale"?oy:ay:(hh=n||{})&&(t==="scale"?ly:cy):e.style&&!Du(e.style[t])?ry:~t.indexOf("-")?sy:Vu(e,t)},core:{_removeProperty:wr,_getMatrix:Yu}};kn.utils.checkPrefix=na;kn.core.getStyleSaver=vp;(function(r,e,t,n){var i=Nn(r+","+e+","+t,function(s){tr[s]=1});Nn(e,function(s){ei.units[s]="deg",Mp[s]=1}),wi[i[13]]=r+","+e,Nn(n,function(s){var a=s.split(":");wi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ei.units[r]="px"});kn.registerPlugin(bp);var wn=kn.registerPlugin(bp)||kn;wn.core.Tween;var Sy=`varying vec2 vUv;

void main()\r
{ \r
    vUv=uv;

    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);

}`,yy=`uniform sampler2D uTexture;\r
varying vec2 vUv;

uniform vec2 uResolution;\r
uniform float uProgress;\r
uniform vec3 uColor;

uniform vec2 uContainerRes;\r
uniform float uGridSize;

float random (vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))*\r
        43758.5453123);\r
}

vec2 squaresGrid(vec2 vUv)\r
{\r
    float imageAspectX = 1.;\r
    float imageAspectY = 1.;

    float containerAspectX = uResolution.x/uResolution.y;\r
    float containerAspectY = uResolution.y/uResolution.x;

    vec2 ratio = vec2(\r
        min(containerAspectX / imageAspectX, 1.0),\r
        min(containerAspectY / imageAspectY, 1.0)\r
    );

    vec2 squareUvs = vec2(\r
        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\r
        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\r
    );

    return squareUvs;\r
}\r

void main()\r
{\r
            \r
    vec2 newUvs = vUv;            

    float imageAspectX = uResolution.x/uResolution.y;\r
    float imageAspectY = uResolution.y/uResolution.x;\r
    \r
    float containerAspectX = uContainerRes.x/uContainerRes.y;\r
    float containerAspectY = uContainerRes.y/uContainerRes.x;

    vec2 ratio = vec2(\r
        min(containerAspectX / imageAspectX, 1.0),\r
        min(containerAspectY / imageAspectY, 1.0)\r
    );

    vec2 coverUvs = vec2(\r
        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\r
        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\r
    );\r

    
    vec2 squareUvs = squaresGrid(coverUvs);\r
    float gridSize = floor(uContainerRes.x/20.);\r
    vec2 grid = vec2(floor(squareUvs.x*gridSize)/gridSize,floor(squareUvs.y*gridSize)/gridSize);\r
    vec4 gridTexture = vec4(uColor,0.);\r
    

    
    vec4 texture = texture2D(uTexture,coverUvs);\r
    float height = 0.2;

    float progress = (1.+height)-(uProgress*(1.+height+height)); \r

    float dist = 1.-distance(grid.y,progress);

    float clampedDist = smoothstep(height,0.,distance(grid.y,progress));

    float randDist=step(1.-height*random(grid),dist);\r
    dist=step(1.-height,dist);\r
    \r
    float rand = random(grid); 

    float alpha = dist*(clampedDist+rand-0.5*(1.-randDist));\r
    alpha=max(0.,alpha);\r
    gridTexture.a = alpha;\r

    texture.rgba *= step(progress,grid.y);\r
    \r
    gl_FragColor = vec4(mix(texture,gridTexture,gridTexture.a));\r
}`;class My{element;anchorElement;scene;sizes;material;geometry;mesh;nodeDimensions;meshDimensions;meshPostion;elementBounds;currentScroll;lastScroll;scrollSpeed;scrollTrigger;onClickHandler;constructor({element:e,scene:t,sizes:n}){this.element=e,this.anchorElement=this.element.closest("a"),this.scene=t,this.sizes=n,this.currentScroll=0,this.lastScroll=0,this.scrollSpeed=0,this.createGeometry(),this.createMaterial(),this.createMesh(),this.setNodeBounds(),this.setMeshDimensions(),this.setMeshPosition(),this.setTexture(),this.onClickHandler=this.onClickLink.bind(this),this.anchorElement?.addEventListener("click",this.onClickHandler),this.scene.add(this.mesh)}onClickLink(e){e.currentTarget.setAttribute("data-home-link-active","true")}createGeometry(){this.geometry=new po(1,1,1,1)}createMaterial(){this.material=new Si({vertexShader:Sy,fragmentShader:yy,uniforms:{uTexture:new fr(new Bt),uResolution:new fr(new ht(0,0)),uContainerRes:new fr(new ht(0,0)),uProgress:new fr(0),uGridSize:new fr(20),uColor:new fr(new yt("#242424"))}})}createMesh(){this.mesh=new Ii(this.geometry,this.material)}setNodeBounds(){this.elementBounds=this.element.getBoundingClientRect(),this.nodeDimensions={width:this.elementBounds.width,height:this.elementBounds.height}}setMeshDimensions(){this.meshDimensions={width:this.nodeDimensions.width*this.sizes.width/window.innerWidth,height:this.nodeDimensions.height*this.sizes.height/window.innerHeight},this.mesh.scale.x=this.meshDimensions.width,this.mesh.scale.y=this.meshDimensions.height}setMeshPosition(){this.meshPostion={x:this.elementBounds.left*this.sizes.width/window.innerWidth,y:-this.elementBounds.top*this.sizes.height/window.innerHeight},this.meshPostion.x-=this.sizes.width/2,this.meshPostion.x+=this.meshDimensions.width/2,this.meshPostion.y-=this.meshDimensions.height/2,this.meshPostion.y+=this.sizes.height/2,this.mesh.position.x=this.meshPostion.x,this.mesh.position.y=this.meshPostion.y}setTexture(){this.material.uniforms.uTexture.value=new r_().load(this.element.src,({image:e})=>{const{naturalWidth:t,naturalHeight:n}=e;this.material.uniforms.uResolution.value=new ht(t,n),this.material.uniforms.uContainerRes.value=new ht(this.nodeDimensions.width,this.nodeDimensions.height)})}updateScroll(e){this.currentScroll=-e*this.sizes.height/window.innerHeight;const t=this.currentScroll-this.lastScroll;this.lastScroll=this.currentScroll,this.updateY(t)}updateY(e){this.meshPostion.y-=e,this.mesh.position.y=this.meshPostion.y}observe(){this.scrollTrigger=wn.to(this.material.uniforms.uProgress,{value:1,scrollTrigger:{trigger:this.element,start:"top bottom",end:"bottom top",toggleActions:"play reset restart reset"},duration:1.6,ease:"linear"})}destroy(){this.scene.remove(this.mesh),this.scrollTrigger.scrollTrigger?.kill(),this.scrollTrigger?.kill(),this.anchorElement?.removeEventListener("click",this.onClickHandler),this.anchorElement?.removeAttribute("data-home-link-active"),this.geometry.dispose(),this.material.dispose()}onResize(e){this.sizes=e,this.setNodeBounds(),this.setMeshDimensions(),this.setMeshPosition(),this.material.uniforms.uContainerRes.value=new ht(this.nodeDimensions.width,this.nodeDimensions.height)}}class Ey{element;scene;camera;renderer;sizes;dimensions;medias;constructor(){this.element=document.getElementById("webgl"),this.medias=[],this.createScene(),this.createCamera(),this.createRenderer(),this.setSizes()}createScene(){this.scene=new qm}createCamera(){this.camera=new oi(75,window.innerWidth/window.innerHeight,.1,100),this.scene.add(this.camera),this.camera.position.z=10}createRenderer(){this.dimensions={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(2,window.devicePixelRatio)},this.renderer=new tS({canvas:this.element,alpha:!0}),this.renderer.setSize(this.dimensions.width,this.dimensions.height),this.renderer.render(this.scene,this.camera),this.renderer.setPixelRatio(this.dimensions.pixelRatio)}setSizes(){let e=this.camera.fov*(Math.PI/180),t=this.camera.position.z*Math.tan(e/2)*2,n=t*this.camera.aspect;this.sizes={width:n,height:t}}onResize(){this.dimensions={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(2,window.devicePixelRatio)},this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.setSizes(),this.renderer.setPixelRatio(this.dimensions.pixelRatio),this.renderer.setSize(this.dimensions.width,this.dimensions.height),this.medias?.forEach(e=>{e?.onResize(this.sizes)})}createMedias(e){document.querySelectorAll("img").forEach(n=>{if(n!==e){const i=new My({element:n,scene:this.scene,sizes:this.sizes});this.medias?.push(i)}}),this.medias?.forEach(n=>{n?.observe()})}render(e,t=!0){this.medias?.forEach(n=>{t&&n?.updateScroll(e)}),this.renderer.render(this.scene,this.camera)}}function Ty(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function by(r,e,t){return e&&Ty(r.prototype,e),r}/*!
 * ScrollSmoother 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _t,Oo,En,hr,Ta,Hi,Vr,yh,Qe,bi,Bo,Mh,Eh,Th,bh,Ap=function(){return typeof window<"u"},wp=function(){return _t||Ap()&&(_t=window.gsap)&&_t.registerPlugin&&_t},Ay=function(e){return Math.round(e*1e5)/1e5||0},cr=function(e){return Qe.maxScroll(e||En)},wy=function(e,t){var n=e.parentNode||Ta,i=e.getBoundingClientRect(),s=n.getBoundingClientRect(),a=s.top-i.top,o=s.bottom-i.bottom,l=(Math.abs(a)>Math.abs(o)?a:o)/(1-t),c=-l*t,u,f;return l>0&&(u=s.height/(En.innerHeight+s.height),f=u===.5?s.height*2:Math.min(s.height,Math.abs(-l*u/(2*u-1)))*2*(t||1),c+=t?-f*t:-f/2,l+=f),{change:l,offset:c}},Cy=function(e){var t=hr.querySelector(".ScrollSmoother-wrapper");return t||(t=hr.createElement("div"),t.classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t},rs=(function(){function r(e){var t=this;Oo||r.register(_t)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},bi&&bi.kill(),bi=this,Th(this);var n=e,i=n.smoothTouch,s=n.onUpdate,a=n.onStop,o=n.smooth,l=n.onFocusIn,c=n.normalizeScroll,u=n.wholePixels,f,h,d,g,_,m,p,T,M,y,E,A,b,P,v=this,x=e.effectsPrefix||"",D=Qe.getScrollFunc(En),R=Qe.isTouch===1?i===!0?.8:parseFloat(i)||0:o===0||o===!1?0:parseFloat(o)||.8,F=R&&+e.speed||1,N=0,O=0,z=1,k=Mh(0),Y=function(){return k.update(-N)},K={y:0},L=function(){return f.style.overflow="visible"},ne,ce=function(G){G.update();var ie=G.getTween();ie&&(ie.pause(),ie._time=ie._dur,ie._tTime=ie._tDur),ne=!1,G.animation.progress(G.progress,!0)},Ie=function(G,ie){(G!==N&&!y||ie)&&(u&&(G=Math.round(G)),R&&(f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+G+", 0, 1)",f._gsap.y=G+"px"),O=G-N,N=G,Qe.isUpdating||r.isRefreshing||Qe.update())},Fe=function(G){return arguments.length?(G<0&&(G=0),K.y=-G,ne=!0,y?N=-G:Ie(-G),Qe.isRefreshing?g.update():D(G/F),this):-N},Ae=typeof ResizeObserver<"u"&&e.autoResize!==!1&&new ResizeObserver(function(){if(!Qe.isRefreshing){var oe=cr(h)*F;oe<-N&&Fe(oe),bh.restart(!0)}}),X,te=function(G){h.scrollTop=0,!(G.target.contains&&G.target.contains(h)||l&&l(t,G)===!1)&&(Qe.isInViewport(G.target)||G.target===X||t.scrollTo(G.target,!1,"center center"),X=G.target)},de=function(G,ie){if(G<ie.start)return G;var q=isNaN(ie.ratio)?1:ie.ratio,C=ie.end-ie.start,S=G-ie.start,B=ie.offset||0,ee=ie.pins||[],j=ee.offset||0,$=ie._startClamp&&ie.start<=0||ie.pins&&ie.pins.offset?0:ie._endClamp&&ie.end===cr()?1:.5;return ee.forEach(function(ve){C-=ve.distance,ve.nativeStart<=G&&(S-=ve.distance)}),j&&(S*=(C-j/q)/C),G+(S-B*$)/q-S},Oe=function oe(G,ie,q){q||(G.pins.length=G.pins.offset=0);var C=G.pins,S=G.markers,B,ee,j,$,ve,ae,Me,le;for(Me=0;Me<ie.length;Me++)if(le=ie[Me],G.trigger&&le.trigger&&G!==le&&(le.trigger===G.trigger||le.pinnedContainer===G.trigger||G.trigger.contains(le.trigger))&&(ve=le._startNative||le._startClamp||le.start,ae=le._endNative||le._endClamp||le.end,j=de(ve,G),$=le.pin&&ae>0?j+(ae-ve):de(ae,G),le.setPositions(j,$,!0,(le._startClamp?Math.max(0,j):j)-ve),le.markerStart&&S.push(_t.quickSetter([le.markerStart,le.markerEnd],"y","px")),le.pin&&le.end>0&&!q)){if(B=le.end-le.start,ee=G._startClamp&&le.start<0,ee){if(G.start>0){G.setPositions(0,G.end+(G._startNative-G.start),!0),oe(G,ie);return}B+=le.start,C.offset=-le.start}C.push({start:le.start,nativeStart:ve,end:le.end,distance:B,trig:le}),G.setPositions(G.start,G.end+(ee?-le.start:B),!0)}},ye=function(G,ie){_.forEach(function(q){return Oe(q,G,ie)})},ke=function(){Ta=hr.documentElement,Hi=hr.body,L(),requestAnimationFrame(L),_&&(Qe.getAll().forEach(function(G){G._startNative=G.start,G._endNative=G.end}),_.forEach(function(G){var ie=G._startClamp||G.start,q=G.autoSpeed?Math.min(cr(),G.end):ie+Math.abs((G.end-ie)/G.ratio),C=q-G.end;if(ie-=C/2,q-=C/2,ie>q){var S=ie;ie=q,q=S}G._startClamp&&ie<0?(q=G.ratio<0?cr():G.end/G.ratio,C=q-G.end,ie=0):(G.ratio<0||G._endClamp&&q>=cr())&&(q=cr(),ie=G.ratio<0||G.ratio>1?0:q-(q-G.start)/G.ratio,C=(q-ie)*G.ratio-(G.end-G.start)),G.offset=C||1e-4,G.pins.length=G.pins.offset=0,G.setPositions(ie,q,!0)}),ye(Qe.sort())),k.reset()},Ze=function(){return Qe.addEventListener("refresh",ke)},me=function(){return _&&_.forEach(function(G){return G.vars.onRefresh(G)})},De=function(){return _&&_.forEach(function(G){return G.vars.onRefreshInit(G)}),me},qe=function(G,ie,q,C){return function(){var S=typeof ie=="function"?ie(q,C):ie;S||S===0||(S=C.getAttribute("data-"+x+G)||(G==="speed"?1:0)),C.setAttribute("data-"+x+G,S);var B=(S+"").substr(0,6)==="clamp(";return{clamp:B,value:B?S.substr(6,S.length-7):S}}},ze=function(G,ie,q,C,S){S=(typeof S=="function"?S(C,G):S)||0;var B=qe("speed",ie,C,G),ee=qe("lag",q,C,G),j=_t.getProperty(G,"y"),$=G._gsap,ve,ae,Me,le,fe,pe,Te=[],Le=function(){ie=B(),q=parseFloat(ee().value),ve=parseFloat(ie.value)||1,Me=ie.value==="auto",fe=Me||ae&&ae._startClamp&&ae.start<=0||Te.offset?0:ae&&ae._endClamp&&ae.end===cr()?1:.5,le&&le.kill(),le=q&&_t.to(G,{ease:Bo,overwrite:!1,y:"+=0",duration:q}),ae&&(ae.ratio=ve,ae.autoSpeed=Me)},_e=function(){$.y=j+"px",$.renderTransform(1),Le()},Xe=[],I=0,Se=function(he){if(Me){_e();var se=wy(G,yh(0,1,-he.start/(he.end-he.start)));I=se.change,pe=se.offset}else pe=Te.offset||0,I=(he.end-he.start-pe)*(1-ve);Te.forEach(function(re){return I-=re.distance*(1-ve)}),he.offset=I||.001,he.vars.onUpdate(he),le&&le.progress(1)};return Le(),(ve!==1||Me||le)&&(ae=Qe.create({trigger:Me?G.parentNode:G,start:function(){return ie.clamp?"clamp(top bottom+="+S+")":"top bottom+="+S},end:function(){return ie.value<0?"max":ie.clamp?"clamp(bottom top-="+S+")":"bottom top-="+S},scroller:h,scrub:!0,refreshPriority:-999,onRefreshInit:_e,onRefresh:Se,onKill:function(he){var se=_.indexOf(he);se>=0&&_.splice(se,1),_e()},onUpdate:function(he){var se=j+I*(he.progress-fe),re=Te.length,ge=0,Ue,rt,be;if(he.offset){if(re){for(rt=-N,be=he.end;re--;){if(Ue=Te[re],Ue.trig.isActive||rt>=Ue.start&&rt<=Ue.end){le&&(Ue.trig.progress+=Ue.trig.direction<0?.001:-.001,Ue.trig.update(0,0,1),le.resetTo("y",parseFloat($.y),-O,!0),z&&le.progress(1));return}rt>Ue.end&&(ge+=Ue.distance),be-=Ue.distance}se=j+ge+I*((_t.utils.clamp(he.start,he.end,rt)-he.start-ge)/(be-he.start)-fe)}Xe.length&&!Me&&Xe.forEach(function(Be){return Be(se-ge)}),se=Ay(se+pe),le?(le.resetTo("y",se,-O,!0),z&&le.progress(1)):($.y=se+"px",$.renderTransform(1))}}}),Se(ae),_t.core.getCache(ae.trigger).stRevert=De,ae.startY=j,ae.pins=Te,ae.markers=Xe,ae.ratio=ve,ae.autoSpeed=Me,G.style.willChange="transform"),ae};Ze(),Qe.addEventListener("killAll",Ze),_t.delayedCall(.5,function(){return z=0}),this.scrollTop=Fe,this.scrollTo=function(oe,G,ie){var q=_t.utils.clamp(0,cr(),isNaN(oe)?t.offset(oe,ie,!!G&&!y):+oe);G?y?_t.to(t,{duration:R,scrollTop:q,overwrite:"auto",ease:Bo}):D(q):Fe(q)},this.offset=function(oe,G,ie){oe=Vr(oe)[0];var q=oe.style.cssText,C=Qe.create({trigger:oe,start:G||"top top"}),S;return _&&(z?Qe.refresh():ye([C],!0)),S=C.start/(ie?F:1),C.kill(!1),oe.style.cssText=q,_t.core.getCache(oe).uncache=1,S};function H(){return d=f.clientHeight,f.style.overflow="visible",Hi.style.height=En.innerHeight+(d-En.innerHeight)/F+"px",d-En.innerHeight}this.content=function(oe){if(arguments.length){var G=Vr(oe||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||Hi.children[0];return G!==f&&(f=G,M=f.getAttribute("style")||"",Ae&&Ae.observe(f),_t.set(f,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),R||_t.set(f,{clearProps:"transform"})),this}return f},this.wrapper=function(oe){return arguments.length?(h=Vr(oe||"#smooth-wrapper")[0]||Cy(f),T=h.getAttribute("style")||"",H(),_t.set(h,R?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):h},this.effects=function(oe,G){var ie;if(_||(_=[]),!oe)return _.slice(0);oe=Vr(oe),oe.forEach(function(ve){for(var ae=_.length;ae--;)_[ae].trigger===ve&&_[ae].kill()}),G=G||{};var q=G,C=q.speed,S=q.lag,B=q.effectsPadding,ee=[],j,$;for(j=0;j<oe.length;j++)$=ze(oe[j],C,S,j,B),$&&ee.push($);return(ie=_).push.apply(ie,ee),G.refresh!==!1&&Qe.refresh(),ee},this.sections=function(oe,G){var ie;if(m||(m=[]),!oe)return m.slice(0);var q=Vr(oe).map(function(C){return Qe.create({trigger:C,start:"top 120%",end:"bottom -20%",onToggle:function(B){C.style.opacity=B.isActive?"1":"0",C.style.pointerEvents=B.isActive?"all":"none"}})});return G&&G.add?(ie=m).push.apply(ie,q):m=q.slice(0),q},this.content(e.content),this.wrapper(e.wrapper),this.render=function(oe){return Ie(oe||oe===0?oe:N)},this.getVelocity=function(){return k.getVelocity(-N)},Qe.scrollerProxy(h,{scrollTop:Fe,scrollHeight:function(){return H()&&Hi.scrollHeight},fixedMarkers:e.fixedMarkers!==!1&&!!R,content:f,getBoundingClientRect:function(){return{top:0,left:0,width:En.innerWidth,height:En.innerHeight}}}),Qe.defaults({scroller:h});var U=Qe.getAll().filter(function(oe){return oe.scroller===En||oe.scroller===h});U.forEach(function(oe){return oe.revert(!0,!0)}),g=Qe.create({animation:_t.fromTo(K,{y:function(){return P=0,0}},{y:function(){return P=1,-H()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(P){var G=ne;G&&(ce(g),K.y=N),Ie(K.y,G),Y(),s&&!y&&s(v)}}}),onRefreshInit:function(G){if(!r.isRefreshing){if(r.isRefreshing=!0,_){var ie=Qe.getAll().filter(function(C){return!!C.pin});_.forEach(function(C){C.vars.pinnedContainer||ie.forEach(function(S){if(S.pin.contains(C.trigger)){var B=C.vars;B.pinnedContainer=S.pin,C.vars=null,C.init(B,C.animation)}})})}var q=G.getTween();b=q&&q._end>q._dp._time,A=N,K.y=0,R&&(Qe.isTouch===1&&(h.style.position="absolute"),h.scrollTop=0,Qe.isTouch===1&&(h.style.position="fixed"))}},onRefresh:function(G){G.animation.invalidate(),K.y=0,G.setPositions(G.start,H()/F),b||ce(G),K.y=-D()*F,Ie(K.y),z||(b&&(ne=!1),G.animation.progress(_t.utils.clamp(0,1,A/F/-G.end))),b&&(G.progress-=.001,G.update()),r.isRefreshing=!1},id:"ScrollSmoother",scroller:En,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function(){return H()/F},onScrubComplete:function(){k.reset(),a&&a(t)},scrub:R||!0}),this.smooth=function(oe){return arguments.length&&(R=oe||0,F=R&&+e.speed||1,g.scrubDuration(oe)),g.getTween()?g.getTween().duration():0},g.getTween()&&(g.getTween().vars.ease=e.ease||Bo),this.scrollTrigger=g,e.effects&&this.effects(e.effects===!0?"[data-"+x+"speed], [data-"+x+"lag]":e.effects,{effectsPadding:e.effectsPadding,refresh:!1}),e.sections&&this.sections(e.sections===!0?"[data-section]":e.sections),U.forEach(function(oe){oe.vars.scroller=h,oe.revert(!1,!0),oe.init(oe.vars,oe.animation)}),this.paused=function(oe,G){return arguments.length?(!!y!==oe&&(oe?(g.getTween()&&g.getTween().pause(),D(-N/F),k.reset(),E=Qe.normalizeScroll(),E&&E.disable(),y=Qe.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return Fe(-N)}}),y.nested=Eh(Ta,"wheel,touch,scroll",!0,G!==!1)):(y.nested.kill(),y.kill(),y=0,E&&E.enable(),g.progress=(-N/F-g.start)/(g.end-g.start),ce(g))),this):!!y},this.kill=this.revert=function(){t.paused(!1),ce(g),g.kill();for(var oe=(_||[]).concat(m||[]),G=oe.length;G--;)oe[G].kill();Qe.scrollerProxy(h),Qe.removeEventListener("killAll",Ze),Qe.removeEventListener("refresh",ke),h.style.cssText=T,f.style.cssText=M;var ie=Qe.defaults({});ie&&ie.scroller===h&&Qe.defaults({scroller:En}),t.normalizer&&Qe.normalizeScroll(!1),clearInterval(p),bi=null,Ae&&Ae.disconnect(),Hi.style.removeProperty("height"),En.removeEventListener("focusin",te)},this.refresh=function(oe,G){return g.refresh(oe,G)},c&&(this.normalizer=Qe.normalizeScroll(c===!0?{debounce:!0,content:!R&&f}:c)),Qe.config(e),"scrollBehavior"in En.getComputedStyle(Hi)&&_t.set([Hi,Ta],{scrollBehavior:"auto"}),En.addEventListener("focusin",te),p=setInterval(Y,250),hr.readyState==="loading"||requestAnimationFrame(function(){return Qe.refresh()})}return r.register=function(t){return Oo||(_t=t||wp(),Ap()&&window.document&&(En=window,hr=document,Ta=hr.documentElement,Hi=hr.body),_t&&(Vr=_t.utils.toArray,yh=_t.utils.clamp,Bo=_t.parseEase("expo"),Th=_t.core.context||function(){},Qe=_t.core.globals().ScrollTrigger,_t.core.globals("ScrollSmoother",r),Hi&&Qe&&(bh=_t.delayedCall(.2,function(){return Qe.isRefreshing||bi&&bi.refresh()}).pause(),Mh=Qe.core._getVelocityProp,Eh=Qe.core._inputObserver,r.refresh=Qe.refresh,Oo=1))),Oo},by(r,[{key:"progress",get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),r})();rs.version="3.14.2";rs.create=function(r){return bi&&r&&bi.content()===Vr(r.content)[0]?bi:new rs(r)};rs.get=function(){return bi};wp()&&_t.registerPlugin(rs);function Ry(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Py(r,e,t){return e&&Ry(r.prototype,e),r}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ln,il,jn,yr,Mr,Xs,Cp,Hr,Ia,Rp,Yi,_i,Pp,Dp=function(){return ln||typeof window<"u"&&(ln=window.gsap)&&ln.registerPlugin&&ln},Lp=1,Os=[],lt=[],Li=[],Ua=Date.now,au=function(e,t){return t},Dy=function(){var e=Ia.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,Li),lt=n,Li=i,au=function(a,o){return t[a](o)}},br=function(e,t){return~Li.indexOf(e)&&Li[Li.indexOf(e)+1][t]},Na=function(e){return!!~Rp.indexOf(e)},yn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ko="scrollLeft",zo="scrollTop",ou=function(){return Yi&&Yi.isPressed||lt.cache++},vl=function(e,t){var n=function i(s){if(s||s===0){Lp&&(jn.history.scrollRestoration="manual");var a=Yi&&Yi.isPressed;s=i.v=Math.round(s)||(Yi&&Yi.iOS?1:0),e(s),i.cacheID=lt.cache,a&&au("ss",s)}else(t||lt.cache!==i.cacheID||au("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Rn={s:ko,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:vl(function(r){return arguments.length?jn.scrollTo(r,Zt.sc()):jn.pageXOffset||yr[ko]||Mr[ko]||Xs[ko]||0})},Zt={s:zo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:vl(function(r){return arguments.length?jn.scrollTo(Rn.sc(),r):jn.pageYOffset||yr[zo]||Mr[zo]||Xs[zo]||0})},In=function(e,t){return(t&&t._ctx&&t._ctx.selector||ln.utils.toArray)(e)[0]||(typeof e=="string"&&ln.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ly=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Rr=function(e,t){var n=t.s,i=t.sc;Na(e)&&(e=yr.scrollingElement||Mr);var s=lt.indexOf(e),a=i===Zt.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+a]||yn(e,"scroll",ou);var o=lt[s+a],l=o||(lt[s+a]=vl(br(e,n),!0)||(Na(e)?i:vl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=ln.getProperty(e,"scrollBehavior")==="smooth"),l},lu=function(e,t,n){var i=e,s=e,a=Ua(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Ua();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},h=function(g){var _=o,m=s,p=Ua();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:f,getVelocity:h}},ga=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Ah=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Fp=function(){Ia=ln.core.globals().ScrollTrigger,Ia&&Ia.core&&Dy()},Ip=function(e){return ln=e||Dp(),!il&&ln&&typeof document<"u"&&document.body&&(jn=window,yr=document,Mr=yr.documentElement,Xs=yr.body,Rp=[jn,yr,Mr,Xs],ln.utils.clamp,Pp=ln.core.context||function(){},Hr="onpointerenter"in Xs?"pointer":"mouse",Cp=Vt.isTouch=jn.matchMedia&&jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,_i=Vt.eventTypes=("ontouchstart"in Mr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Mr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Lp=0},500),Fp(),il=1),il};Rn.op=Zt;lt.cache=0;var Vt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){il||Ip(ln)||console.warn("Please gsap.registerPlugin(Observer)"),Ia||Fp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,T=n.onDrag,M=n.onPress,y=n.onRelease,E=n.onRight,A=n.onLeft,b=n.onUp,P=n.onDown,v=n.onChangeX,x=n.onChangeY,D=n.onChange,R=n.onToggleX,F=n.onToggleY,N=n.onHover,O=n.onHoverEnd,z=n.onMove,k=n.ignoreCheck,Y=n.isNormalizer,K=n.onGestureStart,L=n.onGestureEnd,ne=n.onWheel,ce=n.onEnable,Ie=n.onDisable,Fe=n.onClick,Ae=n.scrollSpeed,X=n.capture,te=n.allowClicks,de=n.lockAxis,Oe=n.onLockAxis;this.target=o=In(o)||Mr,this.vars=n,d&&(d=ln.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,Ae=Ae||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(jn.getComputedStyle(Xs).lineHeight)||22);var ye,ke,Ze,me,De,qe,ze,H=this,U=0,oe=0,G=n.passive||!u&&n.passive!==!1,ie=Rr(o,Rn),q=Rr(o,Zt),C=ie(),S=q(),B=~a.indexOf("touch")&&!~a.indexOf("pointer")&&_i[0]==="pointerdown",ee=Na(o),j=o.ownerDocument||yr,$=[0,0,0],ve=[0,0,0],ae=0,Me=function(){return ae=Ua()},le=function(Be,Je){return(H.event=Be)&&d&&Ly(Be.target,d)||Je&&B&&Be.pointerType!=="touch"||k&&k(Be,Je)},fe=function(){H._vx.reset(),H._vy.reset(),ke.pause(),f&&f(H)},pe=function(){var Be=H.deltaX=Ah($),Je=H.deltaY=Ah(ve),we=Math.abs(Be)>=i,$e=Math.abs(Je)>=i;D&&(we||$e)&&D(H,Be,Je,$,ve),we&&(E&&H.deltaX>0&&E(H),A&&H.deltaX<0&&A(H),v&&v(H),R&&H.deltaX<0!=U<0&&R(H),U=H.deltaX,$[0]=$[1]=$[2]=0),$e&&(P&&H.deltaY>0&&P(H),b&&H.deltaY<0&&b(H),x&&x(H),F&&H.deltaY<0!=oe<0&&F(H),oe=H.deltaY,ve[0]=ve[1]=ve[2]=0),(me||Ze)&&(z&&z(H),Ze&&(m&&Ze===1&&m(H),T&&T(H),Ze=0),me=!1),qe&&!(qe=!1)&&Oe&&Oe(H),De&&(ne(H),De=!1),ye=0},Te=function(Be,Je,we){$[we]+=Be,ve[we]+=Je,H._vx.update(Be),H._vy.update(Je),c?ye||(ye=requestAnimationFrame(pe)):pe()},Le=function(Be,Je){de&&!ze&&(H.axis=ze=Math.abs(Be)>Math.abs(Je)?"x":"y",qe=!0),ze!=="y"&&($[2]+=Be,H._vx.update(Be,!0)),ze!=="x"&&(ve[2]+=Je,H._vy.update(Je,!0)),c?ye||(ye=requestAnimationFrame(pe)):pe()},_e=function(Be){if(!le(Be,1)){Be=ga(Be,u);var Je=Be.clientX,we=Be.clientY,$e=Je-H.x,Ve=we-H.y,Ke=H.isDragging;H.x=Je,H.y=we,(Ke||($e||Ve)&&(Math.abs(H.startX-Je)>=s||Math.abs(H.startY-we)>=s))&&(Ze||(Ze=Ke?2:1),Ke||(H.isDragging=!0),Le($e,Ve))}},Xe=H.onPress=function(be){le(be,1)||be&&be.button||(H.axis=ze=null,ke.pause(),H.isPressed=!0,be=ga(be),U=oe=0,H.startX=H.x=be.clientX,H.startY=H.y=be.clientY,H._vx.reset(),H._vy.reset(),yn(Y?o:j,_i[1],_e,G,!0),H.deltaX=H.deltaY=0,M&&M(H))},I=H.onRelease=function(be){if(!le(be,1)){Sn(Y?o:j,_i[1],_e,!0);var Be=!isNaN(H.y-H.startY),Je=H.isDragging,we=Je&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),$e=ga(be);!we&&Be&&(H._vx.reset(),H._vy.reset(),u&&te&&ln.delayedCall(.08,function(){if(Ua()-ae>300&&!be.defaultPrevented){if(be.target.click)be.target.click();else if(j.createEvent){var Ve=j.createEvent("MouseEvents");Ve.initMouseEvent("click",!0,!0,jn,1,$e.screenX,$e.screenY,$e.clientX,$e.clientY,!1,!1,!1,!1,0,null),be.target.dispatchEvent(Ve)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,f&&Je&&!Y&&ke.restart(!0),Ze&&pe(),p&&Je&&p(H),y&&y(H,we)}},Se=function(Be){return Be.touches&&Be.touches.length>1&&(H.isGesturing=!0)&&K(Be,H.isDragging)},ue=function(){return(H.isGesturing=!1)||L(H)},he=function(Be){if(!le(Be)){var Je=ie(),we=q();Te((Je-C)*Ae,(we-S)*Ae,1),C=Je,S=we,f&&ke.restart(!0)}},se=function(Be){if(!le(Be)){Be=ga(Be,u),ne&&(De=!0);var Je=(Be.deltaMode===1?l:Be.deltaMode===2?jn.innerHeight:1)*g;Te(Be.deltaX*Je,Be.deltaY*Je,0),f&&!Y&&ke.restart(!0)}},re=function(Be){if(!le(Be)){var Je=Be.clientX,we=Be.clientY,$e=Je-H.x,Ve=we-H.y;H.x=Je,H.y=we,me=!0,f&&ke.restart(!0),($e||Ve)&&Le($e,Ve)}},ge=function(Be){H.event=Be,N(H)},Ue=function(Be){H.event=Be,O(H)},rt=function(Be){return le(Be)||ga(Be,u)&&Fe(H)};ke=H._dc=ln.delayedCall(h||.25,fe).pause(),H.deltaX=H.deltaY=0,H._vx=lu(0,50,!0),H._vy=lu(0,50,!0),H.scrollX=ie,H.scrollY=q,H.isDragging=H.isGesturing=H.isPressed=!1,Pp(this),H.enable=function(be){return H.isEnabled||(yn(ee?j:o,"scroll",ou),a.indexOf("scroll")>=0&&yn(ee?j:o,"scroll",he,G,X),a.indexOf("wheel")>=0&&yn(o,"wheel",se,G,X),(a.indexOf("touch")>=0&&Cp||a.indexOf("pointer")>=0)&&(yn(o,_i[0],Xe,G,X),yn(j,_i[2],I),yn(j,_i[3],I),te&&yn(o,"click",Me,!0,!0),Fe&&yn(o,"click",rt),K&&yn(j,"gesturestart",Se),L&&yn(j,"gestureend",ue),N&&yn(o,Hr+"enter",ge),O&&yn(o,Hr+"leave",Ue),z&&yn(o,Hr+"move",re)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=me=Ze=!1,H._vx.reset(),H._vy.reset(),C=ie(),S=q(),be&&be.type&&Xe(be),ce&&ce(H)),H},H.disable=function(){H.isEnabled&&(Os.filter(function(be){return be!==H&&Na(be.target)}).length||Sn(ee?j:o,"scroll",ou),H.isPressed&&(H._vx.reset(),H._vy.reset(),Sn(Y?o:j,_i[1],_e,!0)),Sn(ee?j:o,"scroll",he,X),Sn(o,"wheel",se,X),Sn(o,_i[0],Xe,X),Sn(j,_i[2],I),Sn(j,_i[3],I),Sn(o,"click",Me,!0),Sn(o,"click",rt),Sn(j,"gesturestart",Se),Sn(j,"gestureend",ue),Sn(o,Hr+"enter",ge),Sn(o,Hr+"leave",Ue),Sn(o,Hr+"move",re),H.isEnabled=H.isPressed=H.isDragging=!1,Ie&&Ie(H))},H.kill=H.revert=function(){H.disable();var be=Os.indexOf(H);be>=0&&Os.splice(be,1),Yi===H&&(Yi=0)},Os.push(H),Y&&Na(o)&&(Yi=H),H.enable(_)},Py(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Vt.version="3.14.2";Vt.create=function(r){return new Vt(r)};Vt.register=Ip;Vt.getAll=function(){return Os.slice()};Vt.getById=function(r){return Os.filter(function(e){return e.vars.id===r})[0]};Dp()&&ln.registerPlugin(Vt);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ne,Fs,ot,Rt,$n,gt,$u,xl,io,Oa,ba,Go,dn,Il,cu,bn,wh,Ch,Is,Up,bc,Np,Tn,uu,Op,Bp,ur,fu,Ku,qs,ju,Ba,hu,Ac,Vo=1,pn=Date.now,wc=pn(),hi=0,Aa=0,Rh=function(e,t,n){var i=qn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ph=function(e,t){return t&&(!qn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Fy=function r(){return Aa&&requestAnimationFrame(r)},Dh=function(){return Il=1},Lh=function(){return Il=0},Ei=function(e){return e},wa=function(e){return Math.round(e*1e5)/1e5||0},kp=function(){return typeof window<"u"},zp=function(){return Ne||kp()&&(Ne=window.gsap)&&Ne.registerPlugin&&Ne},ss=function(e){return!!~$u.indexOf(e)},Gp=function(e){return(e==="Height"?ju:ot["inner"+e])||$n["client"+e]||gt["client"+e]},Vp=function(e){return br(e,"getBoundingClientRect")||(ss(e)?function(){return ll.width=ot.innerWidth,ll.height=ju,ll}:function(){return qi(e)})},Iy=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=br(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Gp(s):e["client"+s])||0}},Uy=function(e,t){return!t||~Li.indexOf(e)?Vp(e):function(){return ll}},Ci=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=br(e,n))?a()-Vp(e)()[s]:ss(e)?($n[n]||gt[n])-Gp(i):e[n]-e["offset"+i])},Ho=function(e,t){for(var n=0;n<Is.length;n+=3)(!t||~t.indexOf(Is[n+1]))&&e(Is[n],Is[n+1],Is[n+2])},qn=function(e){return typeof e=="string"},_n=function(e){return typeof e=="function"},Ca=function(e){return typeof e=="number"},Wr=function(e){return typeof e=="object"},va=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Cc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Cs=Math.abs,Hp="left",Wp="top",Zu="right",Ju="bottom",es="width",ts="height",ka="Right",za="Left",Ga="Top",Va="Bottom",Xt="padding",li="margin",ia="Width",Qu="Height",jt="px",ci=function(e){return ot.getComputedStyle(e)},Ny=function(e){var t=ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Fh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qi=function(e,t){var n=t&&ci(e)[cu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ne.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Sl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Xp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Oy=function(e){return function(t){return Ne.utils.snap(Xp(e),t)}},ef=function(e){var t=Ne.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},By=function(e){return function(t,n){return ef(Xp(e))(t,n.direction)}},Wo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Xo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ih={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},qo={toggleActions:"play",anticipatePin:0},yl={top:0,left:0,center:.5,bottom:1,right:1},rl=function(e,t){if(qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in yl?yl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Yo=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=Rt.createElement("div"),_=ss(n)||br(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?gt:n,T=e.indexOf("start")!==-1,M=T?c:u,y="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(i===Zt?Zu:Ju)+":"+(a+parseFloat(h))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=T,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],sl(g,0,i,T),g},sl=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+ia]=1,s["border"+o+ia]=0,s[n.p]=t+"px",Ne.set(e,s)},nt=[],du={},ro,Uh=function(){return pn()-hi>34&&(ro||(ro=requestAnimationFrame(Ji)))},Rs=function(){(!Tn||!Tn.isPressed||Tn.startX>gt.clientWidth)&&(lt.cache++,Tn?ro||(ro=requestAnimationFrame(Ji)):Ji(),hi||os("scrollStart"),hi=pn())},Rc=function(){Bp=ot.innerWidth,Op=ot.innerHeight},Ra=function(e){lt.cache++,(e===!0||!dn&&!Np&&!Rt.fullscreenElement&&!Rt.webkitFullscreenElement&&(!uu||Bp!==ot.innerWidth||Math.abs(ot.innerHeight-Op)>ot.innerHeight*.25))&&xl.restart(!0)},as={},ky=[],qp=function r(){return rn(it,"scrollEnd",r)||Yr(!0)},os=function(e){return as[e]&&as[e].map(function(t){return t()})||ky},Xn=[],Yp=function(e){for(var t=0;t<Xn.length;t+=5)(!e||Xn[t+4]&&Xn[t+4].query===e)&&(Xn[t].style.cssText=Xn[t+1],Xn[t].getBBox&&Xn[t].setAttribute("transform",Xn[t+2]||""),Xn[t+3].uncache=1)},$p=function(){return lt.forEach(function(e){return _n(e)&&++e.cacheID&&(e.rec=e())})},tf=function(e,t){var n;for(bn=0;bn<nt.length;bn++)n=nt[bn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ba=!0,t&&Yp(t),t||os("revert")},Kp=function(e,t){lt.cache++,(t||!An)&&lt.forEach(function(n){return _n(n)&&n.cacheID++&&(n.rec=0)}),qn(e)&&(ot.history.scrollRestoration=Ku=e)},An,ns=0,Nh,zy=function(){if(Nh!==ns){var e=Nh=ns;requestAnimationFrame(function(){return e===ns&&Yr(!0)})}},jp=function(){gt.appendChild(qs),ju=!Tn&&qs.offsetHeight||ot.innerHeight,gt.removeChild(qs)},Oh=function(e){return io(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Yr=function(e,t){if($n=Rt.documentElement,gt=Rt.body,$u=[ot,Rt,$n,gt],hi&&!e&&!Ba){sn(it,"scrollEnd",qp);return}jp(),An=it.isRefreshing=!0,Ba||$p();var n=os("refreshInit");Up&&it.sort(),t||tf(),lt.forEach(function(i){_n(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),nt.slice(0).forEach(function(i){return i.refresh()}),Ba=!1,nt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),hu=1,Oh(!0),nt.forEach(function(i){var s=Ci(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Oh(!1),hu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){_n(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Kp(Ku,1),xl.pause(),ns++,An=2,Ji(2),nt.forEach(function(i){return _n(i.vars.onRefresh)&&i.vars.onRefresh(i)}),An=it.isRefreshing=!1,os("refresh")},pu=0,al=1,Ha,Ji=function(e){if(e===2||!An&&!Ba){it.isUpdating=!0,Ha&&Ha.update(0);var t=nt.length,n=pn(),i=n-wc>=50,s=t&&nt[0].scroll();if(al=pu>s?-1:1,An||(pu=s),i&&(hi&&!Il&&n-hi>200&&(hi=0,os("scrollEnd")),ba=wc,wc=n),al<0){for(bn=t;bn-- >0;)nt[bn]&&nt[bn].update(0,i);al=1}else for(bn=0;bn<t;bn++)nt[bn]&&nt[bn].update(0,i);it.isUpdating=!1}ro=0},mu=[Hp,Wp,Ju,Zu,li+Va,li+ka,li+Ga,li+za,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ol=mu.concat([es,ts,"boxSizing","max"+ia,"max"+Qu,"position",li,Xt,Xt+Ga,Xt+ka,Xt+Va,Xt+za]),Gy=function(e,t,n){Ys(n);var i=e._gsap;if(i.spacerIsNative)Ys(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Pc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=mu.length,a=t.style,o=e.style,l;s--;)l=mu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Ju]=o[Zu]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[es]=Sl(e,Rn)+jt,a[ts]=Sl(e,Zt)+jt,a[Xt]=o[li]=o[Wp]=o[Hp]="0",Ys(i),o[es]=o["max"+ia]=n[es],o[ts]=o["max"+Qu]=n[ts],o[Xt]=n[Xt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Vy=/([A-Z])/g,Ys=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ne.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Vy,"-$1").toLowerCase())}},$o=function(e){for(var t=ol.length,n=e.style,i=[],s=0;s<t;s++)i.push(ol[s],n[ol[s]]);return i.t=e,i},Hy=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},ll={left:0,top:0},Bh=function(e,t,n,i,s,a,o,l,c,u,f,h,d,g){_n(e)&&(e=e(l)),qn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?rl("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,T;if(d&&d.seek(0),isNaN(e)||(e=+e),Ca(e))d&&(e=Ne.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&sl(o,n,i,!0);else{_n(t)&&(t=t(l));var M=(e||"0").split(" "),y,E,A,b;T=In(t,l)||gt,y=qi(T)||{},(!y||!y.left&&!y.top)&&ci(T).display==="none"&&(b=T.style.display,T.style.display="block",y=qi(T),b?T.style.display=b:T.style.removeProperty("display")),E=rl(M[0],y[i.d]),A=rl(M[1]||"0",n),e=y[i.p]-c[i.p]-u+E+s-A,o&&sl(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var P=e+n,v=a._isStart;m="scroll"+i.d2,sl(a,P,i,v&&P>20||!v&&(f?Math.max(gt[m],$n[m]):a.parentNode[m])<=P+1),f&&(c=qi(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+jt))}return d&&T&&(m=qi(T),d.seek(h),p=qi(T),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},Wy=/(webkit|moz|length|cssText|inset)/i,kh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===gt){e._stOrig=s.cssText,o=ci(e);for(a in o)!+a&&!Wy.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ne.core.getCache(e).uncache=1,t.appendChild(e)}},Zp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Ko=function(e,t,n){var i={};i[t.p]="+="+n,Ne.set(e,i)},zh=function(e,t){var n=Rr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,g={};c=c||n();var _=Zp(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){lt.cache++,a.tween&&Ji()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Ne.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},sn(e,"wheel",n.wheelHandler),it.isTouch&&sn(e,"touchmove",n.wheelHandler),s},it=(function(){function r(t,n){Fs||r.register(Ne)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),fu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Aa){this.update=this.refresh=this.kill=Ei;return}n=Fh(qn(n)||Ca(n)||n.nodeType?{trigger:n}:n,qo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,T=s.onSnapComplete,M=s.once,y=s.snap,E=s.pinReparent,A=s.pinSpacer,b=s.containerAnimation,P=s.fastScrollEnd,v=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:Zt,D=!f&&f!==0,R=In(n.scroller||ot),F=Ne.core.getCache(R),N=ss(R),O=("pinType"in n?n.pinType:br(R,"pinType")||N&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=D&&n.toggleActions.split(" "),Y="markers"in n?n.markers:qo.markers,K=N?0:parseFloat(ci(R)["border"+x.p2+ia])||0,L=this,ne=n.onRefreshInit&&function(){return n.onRefreshInit(L)},ce=Iy(R,N,x),Ie=Uy(R,N),Fe=0,Ae=0,X=0,te=Rr(R,x),de,Oe,ye,ke,Ze,me,De,qe,ze,H,U,oe,G,ie,q,C,S,B,ee,j,$,ve,ae,Me,le,fe,pe,Te,Le,_e,Xe,I,Se,ue,he,se,re,ge,Ue;if(L._startClamp=L._endClamp=!1,L._dir=x,m*=45,L.scroller=R,L.scroll=b?b.time.bind(b):te,ke=te(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Up=1,n.refreshPriority===-9999&&(Ha=L)),F.tweenScroll=F.tweenScroll||{top:zh(R,Zt),left:zh(R,Rn)},L.tweenTo=de=F.tweenScroll[x.p],L.scrubDuration=function(we){Se=Ca(we)&&we,Se?I?I.duration(we):I=Ne.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Se,paused:!0,onComplete:function(){return p&&p(L)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(f),_e=0,l||(l=i.vars.id)),y&&((!Wr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in gt.style&&Ne.set(N?[gt,$n]:R,{scrollBehavior:"auto"}),lt.forEach(function(we){return _n(we)&&we.target===(N?Rt.scrollingElement||$n:R)&&(we.smooth=!1)}),ye=_n(y.snapTo)?y.snapTo:y.snapTo==="labels"?Oy(i):y.snapTo==="labelsDirectional"?By(i):y.directional!==!1?function(we,$e){return ef(y.snapTo)(we,pn()-Ae<500?0:$e.direction)}:Ne.utils.snap(y.snapTo),ue=y.duration||{min:.1,max:2},ue=Wr(ue)?Oa(ue.min,ue.max):Oa(ue,ue),he=Ne.delayedCall(y.delay||Se/2||.1,function(){var we=te(),$e=pn()-Ae<500,Ve=de.tween;if(($e||Math.abs(L.getVelocity())<10)&&!Ve&&!Il&&Fe!==we){var Ke=(we-me)/ie,zt=i&&!D?i.totalProgress():Ke,st=$e?0:(zt-Xe)/(pn()-ba)*1e3||0,vt=Ne.utils.clamp(-Ke,1-Ke,Cs(st/2)*st/.185),Ht=Ke+(y.inertia===!1?0:vt),Pt,Tt,dt=y,Pn=dt.onStart,Mt=dt.onInterrupt,un=dt.onComplete;if(Pt=ye(Ht,L),Ca(Pt)||(Pt=Ht),Tt=Math.max(0,Math.round(me+Pt*ie)),we<=De&&we>=me&&Tt!==we){if(Ve&&!Ve._initted&&Ve.data<=Cs(Tt-we))return;y.inertia===!1&&(vt=Pt-Ke),de(Tt,{duration:ue(Cs(Math.max(Cs(Ht-zt),Cs(Pt-zt))*.185/st/.05||0)),ease:y.ease||"power3",data:Cs(Tt-we),onInterrupt:function(){return he.restart(!0)&&Mt&&Mt(L)},onComplete:function(){L.update(),Fe=te(),i&&!D&&(I?I.resetTo("totalProgress",Pt,i._tTime/i._tDur):i.progress(Pt)),_e=Xe=i&&!D?i.totalProgress():L.progress,T&&T(L),un&&un(L)}},we,vt*ie,Tt-we-vt*ie),Pn&&Pn(L,de.tween)}}else L.isActive&&Fe!==we&&he.restart(!0)}).pause()),l&&(du[l]=L),h=L.trigger=In(h||d!==!0&&d),Ue=h&&h._gsap&&h._gsap.stRevert,Ue&&(Ue=Ue(L)),d=d===!0?h:In(d),qn(o)&&(o={targets:h,className:o}),d&&(g===!1||g===li||(g=!g&&d.parentNode&&d.parentNode.style&&ci(d.parentNode).display==="flex"?!1:Xt),L.pin=d,Oe=Ne.core.getCache(d),Oe.spacer?q=Oe.pinState:(A&&(A=In(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Oe.spacerIsNative=!!A,A&&(Oe.spacerState=$o(A))),Oe.spacer=B=A||Rt.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Oe.pinState=q=$o(d)),n.force3D!==!1&&Ne.set(d,{force3D:!0}),L.spacer=B=Oe.spacer,Le=ci(d),Me=Le[g+x.os2],j=Ne.getProperty(d),$=Ne.quickSetter(d,x.a,jt),Pc(d,B,Le),S=$o(d)),Y){oe=Wr(Y)?Fh(Y,Ih):Ih,H=Yo("scroller-start",l,R,x,oe,0),U=Yo("scroller-end",l,R,x,oe,0,H),ee=H["offset"+x.op.d2];var rt=In(br(R,"content")||R);qe=this.markerStart=Yo("start",l,rt,x,oe,ee,0,b),ze=this.markerEnd=Yo("end",l,rt,x,oe,ee,0,b),b&&(ge=Ne.quickSetter([qe,ze],x.a,jt)),!O&&!(Li.length&&br(R,"fixedMarkers")===!0)&&(Ny(N?gt:R),Ne.set([H,U],{force3D:!0}),fe=Ne.quickSetter(H,x.a,jt),Te=Ne.quickSetter(U,x.a,jt))}if(b){var be=b.vars.onUpdate,Be=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){L.update(0,0,1),be&&be.apply(b,Be||[])})}if(L.previous=function(){return nt[nt.indexOf(L)-1]},L.next=function(){return nt[nt.indexOf(L)+1]},L.revert=function(we,$e){if(!$e)return L.kill(!0);var Ve=we!==!1||!L.enabled,Ke=dn;Ve!==L.isReverted&&(Ve&&(se=Math.max(te(),L.scroll.rec||0),X=L.progress,re=i&&i.progress()),qe&&[qe,ze,H,U].forEach(function(zt){return zt.style.display=Ve?"none":"block"}),Ve&&(dn=L,L.update(Ve)),d&&(!E||!L.isActive)&&(Ve?Gy(d,B,q):Pc(d,B,ci(d),le)),Ve||L.update(Ve),dn=Ke,L.isReverted=Ve)},L.refresh=function(we,$e,Ve,Ke){if(!((dn||!L.enabled)&&!$e)){if(d&&we&&hi){sn(r,"scrollEnd",qp);return}!An&&ne&&ne(L),dn=L,de.tween&&!Ve&&(de.tween.kill(),de.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Pe){return Pe.vars.immediateRender&&Pe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var zt=ce(),st=Ie(),vt=b?b.duration():Ci(R,x),Ht=ie<=.01||!ie,Pt=0,Tt=Ke||0,dt=Wr(Ve)?Ve.end:n.end,Pn=n.endTrigger||h,Mt=Wr(Ve)?Ve.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),un=L.pinnedContainer=n.pinnedContainer&&In(n.pinnedContainer,L),zn=h&&Math.max(0,nt.indexOf(L))||0,$t=zn,Kt,en,Oi,fs,tn,w,V,J,Z,W,xe,Re,Ee;for(Y&&Wr(Ve)&&(Re=Ne.getProperty(H,x.p),Ee=Ne.getProperty(U,x.p));$t-- >0;)w=nt[$t],w.end||w.refresh(0,1)||(dn=L),V=w.pin,V&&(V===h||V===d||V===un)&&!w.isReverted&&(W||(W=[]),W.unshift(w),w.revert(!0,!0)),w!==nt[$t]&&(zn--,$t--);for(_n(Mt)&&(Mt=Mt(L)),Mt=Rh(Mt,"start",L),me=Bh(Mt,h,zt,x,te(),qe,H,L,st,K,O,vt,b,L._startClamp&&"_startClamp")||(d?-.001:0),_n(dt)&&(dt=dt(L)),qn(dt)&&!dt.indexOf("+=")&&(~dt.indexOf(" ")?dt=(qn(Mt)?Mt.split(" ")[0]:"")+dt:(Pt=rl(dt.substr(2),zt),dt=qn(Mt)?Mt:(b?Ne.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,me):me)+Pt,Pn=h)),dt=Rh(dt,"end",L),De=Math.max(me,Bh(dt||(Pn?"100% 0":vt),Pn,zt,x,te()+Pt,ze,U,L,st,K,O,vt,b,L._endClamp&&"_endClamp"))||-.001,Pt=0,$t=zn;$t--;)w=nt[$t]||{},V=w.pin,V&&w.start-w._pinPush<=me&&!b&&w.end>0&&(Kt=w.end-(L._startClamp?Math.max(0,w.start):w.start),(V===h&&w.start-w._pinPush<me||V===un)&&isNaN(Mt)&&(Pt+=Kt*(1-w.progress)),V===d&&(Tt+=Kt));if(me+=Pt,De+=Pt,L._startClamp&&(L._startClamp+=Pt),L._endClamp&&!An&&(L._endClamp=De||-.001,De=Math.min(De,Ci(R,x))),ie=De-me||(me-=.01)&&.001,Ht&&(X=Ne.utils.clamp(0,1,Ne.utils.normalize(me,De,se))),L._pinPush=Tt,qe&&Pt&&(Kt={},Kt[x.a]="+="+Pt,un&&(Kt[x.p]="-="+te()),Ne.set([qe,ze],Kt)),d&&!(hu&&L.end>=Ci(R,x)))Kt=ci(d),fs=x===Zt,Oi=te(),ve=parseFloat(j(x.a))+Tt,!vt&&De>1&&(xe=(N?Rt.scrollingElement||$n:R).style,xe={style:xe,value:xe["overflow"+x.a.toUpperCase()]},N&&ci(gt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(xe.style["overflow"+x.a.toUpperCase()]="scroll")),Pc(d,B,Kt),S=$o(d),en=qi(d,!0),J=O&&Rr(R,fs?Rn:Zt)(),g?(le=[g+x.os2,ie+Tt+jt],le.t=B,$t=g===Xt?Sl(d,x)+ie+Tt:0,$t&&(le.push(x.d,$t+jt),B.style.flexBasis!=="auto"&&(B.style.flexBasis=$t+jt)),Ys(le),un&&nt.forEach(function(Pe){Pe.pin===un&&Pe.vars.pinSpacing!==!1&&(Pe._subPinOffset=!0)}),O&&te(se)):($t=Sl(d,x),$t&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=$t+jt)),O&&(tn={top:en.top+(fs?Oi-me:J)+jt,left:en.left+(fs?J:Oi-me)+jt,boxSizing:"border-box",position:"fixed"},tn[es]=tn["max"+ia]=Math.ceil(en.width)+jt,tn[ts]=tn["max"+Qu]=Math.ceil(en.height)+jt,tn[li]=tn[li+Ga]=tn[li+ka]=tn[li+Va]=tn[li+za]="0",tn[Xt]=Kt[Xt],tn[Xt+Ga]=Kt[Xt+Ga],tn[Xt+ka]=Kt[Xt+ka],tn[Xt+Va]=Kt[Xt+Va],tn[Xt+za]=Kt[Xt+za],C=Hy(q,tn,E),An&&te(0)),i?(Z=i._initted,bc(1),i.render(i.duration(),!0,!0),ae=j(x.a)-ve+ie+Tt,pe=Math.abs(ie-ae)>1,O&&pe&&C.splice(C.length-2,2),i.render(0,!0,!0),Z||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),bc(0)):ae=ie,xe&&(xe.value?xe.style["overflow"+x.a.toUpperCase()]=xe.value:xe.style.removeProperty("overflow-"+x.a));else if(h&&te()&&!b)for(en=h.parentNode;en&&en!==gt;)en._pinOffset&&(me-=en._pinOffset,De-=en._pinOffset),en=en.parentNode;W&&W.forEach(function(Pe){return Pe.revert(!1,!0)}),L.start=me,L.end=De,ke=Ze=An?se:te(),!b&&!An&&(ke<se&&te(se),L.scroll.rec=0),L.revert(!1,!0),Ae=pn(),he&&(Fe=-1,he.restart(!0)),dn=0,i&&D&&(i._initted||re)&&i.progress()!==re&&i.progress(re||0,!0).render(i.time(),!0,!0),(Ht||X!==L.progress||b||_||i&&!i._initted)&&(i&&!D&&(i._initted||X||i.vars.immediateRender!==!1)&&i.totalProgress(b&&me<-.001&&!X?Ne.utils.normalize(me,De,0):X,!0),L.progress=Ht||(ke-me)/ie===X?0:X),d&&g&&(B._pinOffset=Math.round(L.progress*ae)),I&&I.invalidate(),isNaN(Re)||(Re-=Ne.getProperty(H,x.p),Ee-=Ne.getProperty(U,x.p),Ko(H,x,Re),Ko(qe,x,Re-(Ke||0)),Ko(U,x,Ee),Ko(ze,x,Ee-(Ke||0))),Ht&&!An&&L.update(),u&&!An&&!G&&(G=!0,u(L),G=!1)}},L.getVelocity=function(){return(te()-Ze)/(pn()-ba)*1e3||0},L.endAnimation=function(){va(L.callbackAnimation),i&&(I?I.progress(1):i.paused()?D||va(i,L.direction<0,1):va(i,i.reversed()))},L.labelToScroll=function(we){return i&&i.labels&&(me||L.refresh()||me)+i.labels[we]/i.duration()*ie||0},L.getTrailing=function(we){var $e=nt.indexOf(L),Ve=L.direction>0?nt.slice(0,$e).reverse():nt.slice($e+1);return(qn(we)?Ve.filter(function(Ke){return Ke.vars.preventOverlaps===we}):Ve).filter(function(Ke){return L.direction>0?Ke.end<=me:Ke.start>=De})},L.update=function(we,$e,Ve){if(!(b&&!Ve&&!we)){var Ke=An===!0?se:L.scroll(),zt=we?0:(Ke-me)/ie,st=zt<0?0:zt>1?1:zt||0,vt=L.progress,Ht,Pt,Tt,dt,Pn,Mt,un,zn;if($e&&(Ze=ke,ke=b?te():Ke,y&&(Xe=_e,_e=i&&!D?i.totalProgress():st)),m&&d&&!dn&&!Vo&&hi&&(!st&&me<Ke+(Ke-Ze)/(pn()-ba)*m?st=1e-4:st===1&&De>Ke+(Ke-Ze)/(pn()-ba)*m&&(st=.9999)),st!==vt&&L.enabled){if(Ht=L.isActive=!!st&&st<1,Pt=!!vt&&vt<1,Mt=Ht!==Pt,Pn=Mt||!!st!=!!vt,L.direction=st>vt?1:-1,L.progress=st,Pn&&!dn&&(Tt=st&&!vt?0:st===1?1:vt===1?2:3,D&&(dt=!Mt&&k[Tt+1]!=="none"&&k[Tt+1]||k[Tt],zn=i&&(dt==="complete"||dt==="reset"||dt in i))),v&&(Mt||zn)&&(zn||f||!i)&&(_n(v)?v(L):L.getTrailing(v).forEach(function(Oi){return Oi.endAnimation()})),D||(I&&!dn&&!Vo?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",st,i._tTime/i._tDur):(I.vars.totalProgress=st,I.invalidate().restart())):i&&i.totalProgress(st,!!(dn&&(Ae||we)))),d){if(we&&g&&(B.style[g+x.os2]=Me),!O)$(wa(ve+ae*st));else if(Pn){if(un=!we&&st>vt&&De+1>Ke&&Ke+1>=Ci(R,x),E)if(!we&&(Ht||un)){var $t=qi(d,!0),Kt=Ke-me;kh(d,gt,$t.top+(x===Zt?Kt:0)+jt,$t.left+(x===Zt?0:Kt)+jt)}else kh(d,B);Ys(Ht||un?C:S),pe&&st<1&&Ht||$(ve+(st===1&&!un?ae:0))}}y&&!de.tween&&!dn&&!Vo&&he.restart(!0),o&&(Mt||M&&st&&(st<1||!Ac))&&io(o.targets).forEach(function(Oi){return Oi.classList[Ht||M?"add":"remove"](o.className)}),a&&!D&&!we&&a(L),Pn&&!dn?(D&&(zn&&(dt==="complete"?i.pause().totalProgress(1):dt==="reset"?i.restart(!0).pause():dt==="restart"?i.restart(!0):i[dt]()),a&&a(L)),(Mt||!Ac)&&(c&&Mt&&Cc(L,c),z[Tt]&&Cc(L,z[Tt]),M&&(st===1?L.kill(!1,1):z[Tt]=0),Mt||(Tt=st===1?1:3,z[Tt]&&Cc(L,z[Tt]))),P&&!Ht&&Math.abs(L.getVelocity())>(Ca(P)?P:2500)&&(va(L.callbackAnimation),I?I.progress(1):va(i,dt==="reverse"?1:!st,1))):D&&a&&!dn&&a(L)}if(Te){var en=b?Ke/b.duration()*(b._caScrollDist||0):Ke;fe(en+(H._isFlipped?1:0)),Te(en)}ge&&ge(-Ke/b.duration()*(b._caScrollDist||0))}},L.enable=function(we,$e){L.enabled||(L.enabled=!0,sn(R,"resize",Ra),N||sn(R,"scroll",Rs),ne&&sn(r,"refreshInit",ne),we!==!1&&(L.progress=X=0,ke=Ze=Fe=te()),$e!==!1&&L.refresh())},L.getTween=function(we){return we&&de?de.tween:I},L.setPositions=function(we,$e,Ve,Ke){if(b){var zt=b.scrollTrigger,st=b.duration(),vt=zt.end-zt.start;we=zt.start+vt*we/st,$e=zt.start+vt*$e/st}L.refresh(!1,!1,{start:Ph(we,Ve&&!!L._startClamp),end:Ph($e,Ve&&!!L._endClamp)},Ke),L.update()},L.adjustPinSpacing=function(we){if(le&&we){var $e=le.indexOf(x.d)+1;le[$e]=parseFloat(le[$e])+we+jt,le[1]=parseFloat(le[1])+we+jt,Ys(le)}},L.disable=function(we,$e){if(we!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,$e||I&&I.pause(),se=0,Oe&&(Oe.uncache=1),ne&&rn(r,"refreshInit",ne),he&&(he.pause(),de.tween&&de.tween.kill()&&(de.tween=0)),!N)){for(var Ve=nt.length;Ve--;)if(nt[Ve].scroller===R&&nt[Ve]!==L)return;rn(R,"resize",Ra),N||rn(R,"scroll",Rs)}},L.kill=function(we,$e){L.disable(we,$e),I&&!$e&&I.kill(),l&&delete du[l];var Ve=nt.indexOf(L);Ve>=0&&nt.splice(Ve,1),Ve===bn&&al>0&&bn--,Ve=0,nt.forEach(function(Ke){return Ke.scroller===L.scroller&&(Ve=1)}),Ve||An||(L.scroll.rec=0),i&&(i.scrollTrigger=null,we&&i.revert({kill:!1}),$e||i.kill()),qe&&[qe,ze,H,U].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),Ha===L&&(Ha=0),d&&(Oe&&(Oe.uncache=1),Ve=0,nt.forEach(function(Ke){return Ke.pin===d&&Ve++}),Ve||(Oe.spacer=0)),n.onKill&&n.onKill(L)},nt.push(L),L.enable(!1,!1),Ue&&Ue(L),i&&i.add&&!ie){var Je=L.update;L.update=function(){L.update=Je,lt.cache++,me||De||L.refresh()},Ne.delayedCall(.01,L.update),ie=.01,me=De=0}else L.refresh();d&&zy()},r.register=function(n){return Fs||(Ne=n||zp(),kp()&&window.document&&r.enable(),Fs=Aa),Fs},r.defaults=function(n){if(n)for(var i in n)qo[i]=n[i];return qo},r.disable=function(n,i){Aa=0,nt.forEach(function(a){return a[i?"kill":"disable"](n)}),rn(ot,"wheel",Rs),rn(Rt,"scroll",Rs),clearInterval(Go),rn(Rt,"touchcancel",Ei),rn(gt,"touchstart",Ei),Wo(rn,Rt,"pointerdown,touchstart,mousedown",Dh),Wo(rn,Rt,"pointerup,touchend,mouseup",Lh),xl.kill(),Ho(rn);for(var s=0;s<lt.length;s+=3)Xo(rn,lt[s],lt[s+1]),Xo(rn,lt[s],lt[s+2])},r.enable=function(){if(ot=window,Rt=document,$n=Rt.documentElement,gt=Rt.body,Ne&&(io=Ne.utils.toArray,Oa=Ne.utils.clamp,fu=Ne.core.context||Ei,bc=Ne.core.suppressOverwrites||Ei,Ku=ot.history.scrollRestoration||"auto",pu=ot.pageYOffset||0,Ne.core.globals("ScrollTrigger",r),gt)){Aa=1,qs=document.createElement("div"),qs.style.height="100vh",qs.style.position="absolute",jp(),Fy(),Vt.register(Ne),r.isTouch=Vt.isTouch,ur=Vt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),uu=Vt.isTouch===1,sn(ot,"wheel",Rs),$u=[ot,Rt,$n,gt],Ne.matchMedia?(r.matchMedia=function(c){var u=Ne.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Ne.addEventListener("matchMediaInit",function(){$p(),tf()}),Ne.addEventListener("matchMediaRevert",function(){return Yp()}),Ne.addEventListener("matchMedia",function(){Yr(0,1),os("matchMedia")}),Ne.matchMedia().add("(orientation: portrait)",function(){return Rc(),Rc})):console.warn("Requires GSAP 3.11.0 or later"),Rc(),sn(Rt,"scroll",Rs);var n=gt.hasAttribute("style"),i=gt.style,s=i.borderTopStyle,a=Ne.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=qi(gt),Zt.m=Math.round(o.top+Zt.sc())||0,Rn.m=Math.round(o.left+Rn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(gt.setAttribute("style",""),gt.removeAttribute("style")),Go=setInterval(Uh,250),Ne.delayedCall(.5,function(){return Vo=0}),sn(Rt,"touchcancel",Ei),sn(gt,"touchstart",Ei),Wo(sn,Rt,"pointerdown,touchstart,mousedown",Dh),Wo(sn,Rt,"pointerup,touchend,mouseup",Lh),cu=Ne.utils.checkPrefix("transform"),ol.push(cu),Fs=pn(),xl=Ne.delayedCall(.2,Yr).pause(),Is=[Rt,"visibilitychange",function(){var c=ot.innerWidth,u=ot.innerHeight;Rt.hidden?(wh=c,Ch=u):(wh!==c||Ch!==u)&&Ra()},Rt,"DOMContentLoaded",Yr,ot,"load",Yr,ot,"resize",Ra],Ho(sn),nt.forEach(function(c){return c.enable(0,1)}),l=0;l<lt.length;l+=3)Xo(rn,lt[l],lt[l+1]),Xo(rn,lt[l],lt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Ac=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Go)||(Go=i)&&setInterval(Uh,i),"ignoreMobileResize"in n&&(uu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ho(rn)||Ho(sn,n.autoRefreshEvents||"none"),Np=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=In(n),a=lt.indexOf(s),o=ss(s);~a&&lt.splice(a,o?6:2),i&&(o?Li.unshift(ot,i,gt,i,$n,i):Li.unshift(s,i))},r.clearMatchMedia=function(n){nt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(qn(n)?In(n):n).getBoundingClientRect(),o=a[s?es:ts]*i||0;return s?a.right-o>0&&a.left+o<ot.innerWidth:a.bottom-o>0&&a.top+o<ot.innerHeight},r.positionInViewport=function(n,i,s){qn(n)&&(n=In(n));var a=n.getBoundingClientRect(),o=a[s?es:ts],l=i==null?o/2:i in yl?yl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ot.innerWidth:(a.top+l)/ot.innerHeight},r.killAll=function(n){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=as.killAll||[];as={},i.forEach(function(s){return s()})}},r})();it.version="3.14.2";it.saveStyles=function(r){return r?io(r).forEach(function(e){if(e&&e.style){var t=Xn.indexOf(e);t>=0&&Xn.splice(t,5),Xn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ne.core.getCache(e),fu())}}):Xn};it.revert=function(r,e){return tf(!r,e)};it.create=function(r,e){return new it(r,e)};it.refresh=function(r){return r?Ra(!0):(Fs||it.register())&&Yr(!0)};it.update=function(r){return++lt.cache&&Ji(r===!0?2:0)};it.clearScrollMemory=Kp;it.maxScroll=function(r,e){return Ci(r,e?Rn:Zt)};it.getScrollFunc=function(r,e){return Rr(In(r),e?Rn:Zt)};it.getById=function(r){return du[r]};it.getAll=function(){return nt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!hi};it.snapDirectional=ef;it.addEventListener=function(r,e){var t=as[r]||(as[r]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(r,e){var t=as[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};it.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Ne.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&_n(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return _n(s)&&(s=s(),sn(it,"refresh",function(){return s=e.batchMax()})),io(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(it.create(c))}),t};var Gh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Dc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Vt.isTouch?" pinch-zoom":""):"none",e===$n&&r(gt,t)},jo={auto:1,scroll:1},Xy=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ne.core.getCache(s),o=pn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(jo[(l=ci(s)).overflowY]||jo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ss(s)&&(jo[(l=ci(s)).overflowY]||jo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Jp=function(e,t,n,i){return Vt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Xy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&sn(Rt,Vt.eventTypes[0],Hh,!1,!0)},onDisable:function(){return rn(Rt,Vt.eventTypes[0],Hh,!0)}})},qy=/(input|label|select|textarea)/i,Vh,Hh=function(e){var t=qy.test(e.target.tagName);(t||Vh)&&(e._gsapAllow=!0,Vh=t)},Yy=function(e){Wr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=In(e.target)||$n,u=Ne.core.globals().ScrollSmoother,f=u&&u.get(),h=ur&&(e.content&&In(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Rr(c,Zt),g=Rr(c,Rn),_=1,m=(Vt.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,p=0,T=_n(i)?function(){return i(o)}:function(){return i||2.8},M,y,E=Jp(c,e.type,!0,s),A=function(){return y=!1},b=Ei,P=Ei,v=function(){l=Ci(c,Zt),P=Oa(ur?1:0,l),n&&(b=Oa(0,Ci(c,Rn))),M=ns},x=function(){h._gsap.y=wa(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(y){requestAnimationFrame(A);var Y=wa(o.deltaY/2),K=P(d.v-Y);if(h&&K!==d.v+d.offset){d.offset=K-d.v;var L=wa((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",h._gsap.y=L+"px",d.cacheID=lt.cache,Ji()}return!0}d.offset&&x(),y=!0},R,F,N,O,z=function(){v(),R.isActive()&&R.vars.scrollY>l&&(d()>l?R.progress(1)&&d(l):R.resetTo("scrollY",l))};return h&&Ne.set(h,{y:"+=0"}),e.ignoreCheck=function(k){return ur&&k.type==="touchmove"&&D()||_>1.05&&k.type!=="touchstart"||o.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){y=!1;var k=_;_=wa((ot.visualViewport&&ot.visualViewport.scale||1)/m),R.pause(),k!==_&&Dc(c,_>1.01?!0:n?!1:"x"),F=g(),N=d(),v(),M=ns},e.onRelease=e.onGestureStart=function(k,Y){if(d.offset&&x(),!Y)O.restart(!0);else{lt.cache++;var K=T(),L,ne;n&&(L=g(),ne=L+K*.05*-k.velocityX/.227,K*=Gh(g,L,ne,Ci(c,Rn)),R.vars.scrollX=b(ne)),L=d(),ne=L+K*.05*-k.velocityY/.227,K*=Gh(d,L,ne,Ci(c,Zt)),R.vars.scrollY=P(ne),R.invalidate().duration(K).play(.01),(ur&&R.vars.scrollY>=l||L>=l-1)&&Ne.to({},{onUpdate:z,duration:K})}a&&a(k)},e.onWheel=function(){R._ts&&R.pause(),pn()-p>1e3&&(M=0,p=pn())},e.onChange=function(k,Y,K,L,ne){if(ns!==M&&v(),Y&&n&&g(b(L[2]===Y?F+(k.startX-k.x):g()+Y-L[1])),K){d.offset&&x();var ce=ne[2]===K,Ie=ce?N+k.startY-k.y:d()+K-ne[1],Fe=P(Ie);ce&&Ie!==Fe&&(N+=Fe-Ie),d(Fe)}(K||Y)&&Ji()},e.onEnable=function(){Dc(c,n?!1:"x"),it.addEventListener("refresh",z),sn(ot,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),E.enable()},e.onDisable=function(){Dc(c,!0),rn(ot,"resize",z),it.removeEventListener("refresh",z),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new Vt(e),o.iOS=ur,ur&&!d()&&d(1),ur&&Ne.ticker.add(Ei),O=o._dc,R=Ne.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Zp(d,d(),function(){return R.pause()})},onUpdate:Ji,onComplete:O.vars.onComplete}),o};it.sort=function(r){if(_n(r))return nt.sort(r);var e=ot.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ot.innerHeight}),nt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};it.observe=function(r){return new Vt(r)};it.normalizeScroll=function(r){if(typeof r>"u")return Tn;if(r===!0&&Tn)return Tn.enable();if(r===!1){Tn&&Tn.kill(),Tn=r;return}var e=r instanceof Vt?r:Yy(r);return Tn&&Tn.target===e.target&&Tn.kill(),ss(e.target)&&(Tn=e),e};it.core={_getVelocityProp:lu,_inputObserver:Jp,_scrollers:lt,_proxies:Li,bridge:{ss:function(){hi||os("scrollStart"),hi=pn()},ref:function(){return dn}}};zp()&&Ne.registerPlugin(it);class $y{scroll;s;constructor(){window.scrollTo(0,0),this.init()}init(){this.scroll=0,this.s=rs.create({smooth:1,normalizeScroll:!0,wrapper:document.getElementById("app"),content:document.getElementById("smooth-content")}),it.refresh()}reset(e){e?this.s?.scrollTo(0,!1,"top top"):this.s?.scrollTop(0)}destroy(){this.s?.kill(),this.s=null}getScroll(){return this.scroll=this.s?.scrollTop()||0,this.scroll}}function Ky(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,typeof(i=(function(s,a){if(typeof s!="object"||s===null)return s;var o=s[Symbol.toPrimitive];if(o!==void 0){var l=o.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)})(n.key))=="symbol"?i:String(i),n)}var i}function nf(r,e,t){return e&&Ky(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Ri(){return Ri=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Ri.apply(this,arguments)}function Ul(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,so(r,e)}function _u(r){return _u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_u(r)}function so(r,e){return so=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},so(r,e)}function jy(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function gu(r,e,t){return gu=jy()?Reflect.construct.bind():function(n,i,s){var a=[null];a.push.apply(a,i);var o=new(Function.bind.apply(n,a));return s&&so(o,s.prototype),o},gu.apply(null,arguments)}function vu(r){var e=typeof Map=="function"?new Map:void 0;return vu=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return gu(t,arguments,_u(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),so(n,t)},vu(r)}function Zy(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var pr,Jy=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(pr||(pr={}));var Wh=pr.off,$r=(function(){function r(t){this.t=void 0,this.t=t}r.getLevel=function(){return Wh},r.setLevel=function(t){return Wh=pr[t]};var e=r.prototype;return e.error=function(){this.i(console.error,pr.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,pr.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,pr.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,pr.debug,[].slice.call(arguments))},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r})();function Ps(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Xh(r){return r&&r.sensitive?"":"i"}var Fi={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},Kr=new((function(){function r(){this.o=Fi,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,n){var i=this.getContainer()||this.h.before;i?this.l(t,i):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],t===1)return n.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild);for(var s,a=document.createElement("a"),o=1;o<t;o++)a.href=arguments[o],n.href=s=a.href;return i.removeChild(n),s},e.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},r})()),Qy=(function(){function r(){this.p=void 0,this.m=[],this.P=-1}var e=r.prototype;return e.init=function(t,n){this.p="barba";var i={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(i);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,a=s.index;n=this.g(this.P-a),this.replace(s.states),this.P=a}else this.add(t,n);return n},e.add=function(t,n,i,s){var a=i??this.R(n),o={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(a){case"push":this.P=this.size,this.m.push(o);break;case"replace":this.set(this.P,o)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(a){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,n){var i=n||this.P,s=this.get(i);s.data=Ri({},s.data,t),this.set(i,s);var a={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(a,"")},e.update=function(t,n){var i=n||this.P,s=Ri({},this.get(i),t);this.set(i,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,n){return this.m[t]=n},e.R=function(t){var n="push",i=t,s=Fi.prefix+"-"+Fi.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},nf(r,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),r})(),Qp=new Qy,Ml=function(r,e){try{var t=(function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=Kr.toElement(n.html);i.namespace=Kr.getNamespace(s),i.container=Kr.getContainer(s),i.url=n.url,i.html=n.html,Qp.update({ns:i.namespace});var a=Kr.toDocument(n.html);document.title=a.title}})})();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},em=function r(e,t,n){return e instanceof RegExp?(function(i,s){if(!s)return i;for(var a=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,l=a.exec(i.source);l;)s.push({name:l[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),l=a.exec(i.source);return i})(e,t):Array.isArray(e)?(function(i,s,a){var o=i.map(function(l){return r(l,s,a).source});return new RegExp("(?:".concat(o.join("|"),")"),Xh(a))})(e,t,n):(function(i,s,a){return(function(o,l,c){c===void 0&&(c={});for(var u=c.strict,f=u!==void 0&&u,h=c.start,d=h===void 0||h,g=c.end,_=g===void 0||g,m=c.encode,p=m===void 0?function(z){return z}:m,T=c.delimiter,M=T===void 0?"/#?":T,y=c.endsWith,E="[".concat(Ps(y===void 0?"":y),"]|$"),A="[".concat(Ps(M),"]"),b=d?"^":"",P=0,v=o;P<v.length;P++){var x=v[P];if(typeof x=="string")b+=Ps(p(x));else{var D=Ps(p(x.prefix)),R=Ps(p(x.suffix));if(x.pattern)if(l&&l.push(x),D||R)if(x.modifier==="+"||x.modifier==="*"){var F=x.modifier==="*"?"?":"";b+="(?:".concat(D,"((?:").concat(x.pattern,")(?:").concat(R).concat(D,"(?:").concat(x.pattern,"))*)").concat(R,")").concat(F)}else b+="(?:".concat(D,"(").concat(x.pattern,")").concat(R,")").concat(x.modifier);else b+=x.modifier==="+"||x.modifier==="*"?"((?:".concat(x.pattern,")").concat(x.modifier,")"):"(".concat(x.pattern,")").concat(x.modifier);else b+="(?:".concat(D).concat(R,")").concat(x.modifier)}}if(_)f||(b+="".concat(A,"?")),b+=c.endsWith?"(?=".concat(E,")"):"$";else{var N=o[o.length-1],O=typeof N=="string"?A.indexOf(N[N.length-1])>-1:N===void 0;f||(b+="(?:".concat(A,"(?=").concat(E,"))?")),O||(b+="(?=".concat(A,"|").concat(E,")"))}return new RegExp(b,Xh(c))})((function(o,l){l===void 0&&(l={});for(var c=(function(R){for(var F=[],N=0;N<R.length;){var O=R[N];if(O!=="*"&&O!=="+"&&O!=="?")if(O!=="\\")if(O!=="{")if(O!=="}")if(O!==":")if(O!=="(")F.push({type:"CHAR",index:N,value:R[N++]});else{var z=1,k="";if(R[K=N+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(K));for(;K<R.length;)if(R[K]!=="\\"){if(R[K]===")"){if(--z==0){K++;break}}else if(R[K]==="("&&(z++,R[K+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(K));k+=R[K++]}else k+=R[K++]+R[K++];if(z)throw new TypeError("Unbalanced pattern at ".concat(N));if(!k)throw new TypeError("Missing pattern at ".concat(N));F.push({type:"PATTERN",index:N,value:k}),N=K}else{for(var Y="",K=N+1;K<R.length;){var L=R.charCodeAt(K);if(!(L>=48&&L<=57||L>=65&&L<=90||L>=97&&L<=122||L===95))break;Y+=R[K++]}if(!Y)throw new TypeError("Missing parameter name at ".concat(N));F.push({type:"NAME",index:N,value:Y}),N=K}else F.push({type:"CLOSE",index:N,value:R[N++]});else F.push({type:"OPEN",index:N,value:R[N++]});else F.push({type:"ESCAPED_CHAR",index:N++,value:R[N++]});else F.push({type:"MODIFIER",index:N,value:R[N++]})}return F.push({type:"END",index:N,value:""}),F})(o),u=l.prefixes,f=u===void 0?"./":u,h="[^".concat(Ps(l.delimiter||"/#?"),"]+?"),d=[],g=0,_=0,m="",p=function(R){if(_<c.length&&c[_].type===R)return c[_++].value},T=function(R){var F=p(R);if(F!==void 0)return F;var N=c[_],O=N.index;throw new TypeError("Unexpected ".concat(N.type," at ").concat(O,", expected ").concat(R))},M=function(){for(var R,F="";R=p("CHAR")||p("ESCAPED_CHAR");)F+=R;return F};_<c.length;){var y=p("CHAR"),E=p("NAME"),A=p("PATTERN");if(E||A)f.indexOf(P=y||"")===-1&&(m+=P,P=""),m&&(d.push(m),m=""),d.push({name:E||g++,prefix:P,suffix:"",pattern:A||h,modifier:p("MODIFIER")||""});else{var b=y||p("ESCAPED_CHAR");if(b)m+=b;else if(m&&(d.push(m),m=""),p("OPEN")){var P=M(),v=p("NAME")||"",x=p("PATTERN")||"",D=M();T("CLOSE"),d.push({name:v||(x?g++:""),pattern:v&&!x?h:x,prefix:P,suffix:D,modifier:p("MODIFIER")||""})}else T("END")}}return d})(i,a),s,a)})(e,t,n)},eM={__proto__:null,update:Ml,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:em},tm=function(){return window.location.origin},ao=function(r){return r===void 0&&(r=window.location.href),mr(r).port},mr=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(tm(),""),a={},o=s.indexOf("#");o>=0&&(i=s.slice(o+1),s=s.slice(0,o));var l=s.indexOf("?");return l>=0&&(a=nm(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:a}},nm=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},xu=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},tM={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(r,e){return e===void 0&&(e=document.baseURI),new URL(r,e).href},getOrigin:tm,getPort:ao,getPath:function(r){return r===void 0&&(r=window.location.href),mr(r).path},getQuery:function(r,e){return e===void 0&&(e=!1),e?JSON.stringify(mr(r).query):mr(r).query},getHash:function(r){return mr(r).hash},parse:mr,parseQuery:nm,clean:xu};function nM(r,e,t,n,i){return e===void 0&&(e=2e3),new Promise(function(s,a){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE){if(o.status===200){var l=o.responseURL!==""&&o.responseURL!==r?o.responseURL:r;s({html:o.responseText,url:Ri({href:l},mr(l))}),n.update(r,{status:"fulfilled",target:l})}else if(o.status){var c={status:o.status,statusText:o.statusText};t(r,c),a(c),n.update(r,{status:"rejected"})}}},o.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(r,l),a(l),n.update(r,{status:"rejected"})},o.onerror=function(){var l=new Error("Fetch error");t(r,l),a(l),n.update(r,{status:"rejected"})},o.open("GET",r),o.timeout=e,o.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),o.setRequestHeader("x-barba","yes"),i.all().forEach(function(l,c){o.setRequestHeader(c,l)}),o.send()})}function iM(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}function Bs(r,e){return e===void 0&&(e={}),function(){var t=arguments,n=!1,i=new Promise(function(s,a){e.async=function(){return n=!0,function(l,c){l?a(l):s(c)}};var o=r.apply(e,[].slice.call(t));n||(iM(o)?o.then(s,a):s(o))});return i}}var dr=new((function(r){function e(){var n;return(n=r.call(this)||this).logger=new $r("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}Ul(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,a){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:a||{},fn:s})})})},t.do=function(n){var i=arguments,s=this;if(this.registered.has(n)){var a=Promise.resolve();return this.registered.get(n).forEach(function(o){a=a.then(function(){return Bs(o.fn,o.ctx).apply(void 0,[].slice.call(i,1))})}),a.catch(function(o){s.logger.debug("Hook error ["+n+"]"),s.logger.error(o)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e})(Jy)),im=(function(){function r(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(n){return em(n)})}}return r.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=mr(e).path;return this.O.some(function(n){return n.exec(t)!==null})},r})(),rM=(function(r){function e(n){var i;return(i=r.call(this,n)||this).T=new Map,i}Ul(e,r);var t=e.prototype;return t.set=function(n,i,s,a,o){return this.T.set(n,{action:s,request:i,status:a,target:o??n}),{action:s,request:i,status:a,target:o}},t.get=function(n){return this.T.get(n)},t.getRequest=function(n){return this.T.get(n).request},t.getAction=function(n){return this.T.get(n).action},t.getStatus=function(n){return this.T.get(n).status},t.getTarget=function(n){return this.T.get(n).target},t.has=function(n){return!this.checkHref(n)&&this.T.has(n)},t.delete=function(n){return this.T.delete(n)},t.update=function(n,i){var s=Ri({},this.T.get(n),i);return this.T.set(n,s),s},e})(im),sM=(function(){function r(){this.A=new Map}var e=r.prototype;return e.set=function(t,n){return this.A.set(t,n),{name:n}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},r})(),aM=function(){return!window.history.pushState},oM=function(r){return!r.el||!r.href},lM=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},cM=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},uM=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},fM=function(r){var e=r.el;return e.port!==void 0&&ao()!==ao(e.href)},hM=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},dM=function(r){return r.el.hasAttribute(Fi.prefix+"-"+Fi.prevent)},pM=function(r){return!!r.el.closest("["+Fi.prefix+"-"+Fi.prevent+'="all"]')},mM=function(r){var e=r.href;return xu(e)===xu()&&ao(e)===ao()},_M=(function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}Ul(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",aM),this.add("exists",oM),this.add("newTab",lM),this.add("blank",cM),this.add("corsDomain",uM),this.add("corsPort",fM),this.add("download",hM),this.add("preventSelf",dM),this.add("preventAll",pM),this.add("sameUrl",mM,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,a){return this.tests.get(n)({el:i,event:s,href:a})},t.checkLink=function(n,i,s){var a=this;return this.suite.some(function(o){return a.run(o,n,i,s)})},e})(im),Lc=(function(r){function e(t,n){var i;return n===void 0&&(n="Barba error"),(i=r.call.apply(r,[this].concat([].slice.call(arguments,2)))||this).error=void 0,i.label=void 0,i.error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(Zy(i),e),i.name="BarbaError",i}return Ul(e,r),e})(vu(Error)),gM=(function(){function r(t){t===void 0&&(t=[]),this.logger=new $r("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){t==="rule"?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(h){return h.name&&h.name==="self"}:function(h){return!h.name||h.name!=="self"});var a=new Map,o=s.find(function(h){var d=!0,g={};return n.self&&h.name==="self"?(a.set(h,g),!0):(i.j.reverse().forEach(function(_){d&&(d=i.M(h,_,t,g),h.from&&h.to&&(d=i.M(h,_,t,g,"from")&&i.M(h,_,t,g,"to")),h.from&&!h.to&&(d=i.M(h,_,t,g,"from")),!h.from&&h.to&&(d=i.M(h,_,t,g,"to")))}),a.set(h,g),d)}),l=a.get(o),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var u,f=[o];Object.keys(l).length>0&&f.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(f))}else this.logger.info("No transition found ["+c.join(",")+"]");return o},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.M=function(t,n,i,s,a){var o=!0,l=!1,c=t,u=n.name,f=u,h=u,d=u,g=a?c[a]:c,_=a==="to"?i.next:i.current;if(a?g&&g[u]:g[u]){switch(n.type){case"strings":default:var m=Array.isArray(g[f])?g[f]:[g[f]];_[f]&&m.indexOf(_[f])!==-1&&(l=!0),m.indexOf(_[f])===-1&&(o=!1);break;case"object":var p=Array.isArray(g[h])?g[h]:[g[h]];_[h]?(_[h].name&&p.indexOf(_[h].name)!==-1&&(l=!0),p.indexOf(_[h].name)===-1&&(o=!1)):o=!1;break;case"function":g[d](i)?l=!0:o=!1}l&&(a?(s[a]=s[a]||{},s[a][u]=c[a][u]):s[u]=c[u])}return o},e.S=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.N=function(t){var n=this;t.priority=0;var i=0;return this.j.forEach(function(s,a){i+=n.S(t,s.name,a+1)}),t.priority=i,t},r})();function xa(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}var vM=(function(){function r(t){t===void 0&&(t=[]),this.logger=new $r("@barba/core"),this.store=void 0,this.C=!1,this.store=new gM(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){a.C=!1},a=this,o=i||{};a.C=!0;var l=xa(function(){return Promise.resolve(a.L("beforeOnce",n,o)).then(function(){return Promise.resolve(a.once(n,o)).then(function(){return Promise.resolve(a.L("afterOnce",n,o)).then(function(){})})})},function(c){a.C=!1,a.logger.debug("Transition error [before/after/once]"),a.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,a=t.wrapper;try{var o=function(h){l.C=!1},l=this,c=i||{},u=c.sync===!0||!1;l.C=!0;var f=xa(function(){function h(){return Promise.resolve(l.L("before",n,c)).then(function(){function g(m){return Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.L("after",n,c)).then(function(){})})}var _=(function(){if(u)return xa(function(){return Promise.resolve(l.add(n,a)).then(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),l.enter(n,c)])).then(function(){return Promise.resolve(l.L("afterLeave",n,c)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})})},function(M){if(l.H(M))throw new Lc(M,"Transition error [sync]")});var m=function(M){return xa(function(){var y=(function(){if(p!==!1)return Promise.resolve(l.add(n,a)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(l.enter(n,c,p)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})();if(y&&y.then)return y.then(function(){})},function(y){if(l.H(y))throw new Lc(y,"Transition error [before/after/enter]")})},p=!1,T=xa(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),Ml(s,n)]).then(function(M){return M[0]})).then(function(M){return p=M,Promise.resolve(l.L("afterLeave",n,c)).then(function(){})})})},function(M){if(l.H(M))throw new Lc(M,"Transition error [before/after/leave]")});return T&&T.then?T.then(m):m()})();return _&&_.then?_.then(g):g()})}var d=(function(){if(u)return Promise.resolve(Ml(s,n)).then(function(){})})();return d&&d.then?d.then(h):h()},function(h){throw l.C=!1,h.name&&h.name==="BarbaError"?(l.logger.debug(h.label),l.logger.error(h.error),h):(l.logger.debug("Transition error [page]"),l.logger.error(h),h)});return Promise.resolve(f&&f.then?f.then(o):o())}catch(h){return Promise.reject(h)}},e.once=function(t,n){try{return Promise.resolve(dr.do("once",t,n)).then(function(){return n.once?Bs(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(dr.do("leave",t,n)).then(function(){return n.leave?Bs(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(dr.do("enter",t,n)).then(function(){return n.enter?Bs(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return Kr.addContainer(t.next.container,n),dr.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return Kr.removeContainer(t.current.container),dr.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,n,i){try{return Promise.resolve(dr.do(t,n,i)).then(function(){return i[t]?Bs(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},nf(r,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r})(),xM=(function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){dr[n](t._(n))}))}return r.prototype._=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?Bs(s[e],s)(n):Promise.resolve()}},r})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var SM={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},yM=new((function(){function r(){this.version="2.10.3",this.schemaPage=SM,this.Logger=$r,this.logger=new $r("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=dr,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=Kr,this.helpers=eM,this.history=Qp,this.request=nM,this.url=tM,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,a=n.views,o=a===void 0?[]:a,l=n.schema,c=l===void 0?Fi:l,u=n.requestError,f=n.timeout,h=f===void 0?2e3:f,d=n.cacheIgnore,g=d!==void 0&&d,_=n.cacheFirstPage,m=_!==void 0&&_,p=n.prefetchIgnore,T=p!==void 0&&p,M=n.preventRunning,y=M!==void 0&&M,E=n.prevent,A=E===void 0?null:E,b=n.debug,P=n.logLevel;if($r.setLevel((b!==void 0&&b)===!0?"debug":P===void 0?"off":P),this.logger.info(this.version),Object.keys(c).forEach(function(D){Fi[D]&&(Fi[D]=c[D])}),this.B=u,this.timeout=h,this.cacheIgnore=g,this.cacheFirstPage=m,this.prefetchIgnore=T,this.preventRunning=y,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var v=this.data.current;if(!v.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new rM(g),this.headers=new sM,this.prevent=new _M(T),this.transitions=new vM(s),this.views=new xM(o),A!==null){if(typeof A!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",A)}this.history.init(v.url.href,v.namespace),m&&this.cache.set(v.url.href,Promise.resolve({html:v.html,url:v.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(D){return D.init()});var x=this.data;x.trigger="barba",x.next=x.current,x.current=Ri({},this.schemaPage),this.hooks.do("ready",x),this.once(x),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,i??void 0,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=(function(){if(n.transitions.hasOnce){var a=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:a,data:t})).then(function(){})}})();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i,s){try{var a,o=function(){var f=l.data;return Promise.resolve(l.hooks.do("page",f)).then(function(){var h=(function(d,g){try{var _=(m=l.transitions.get(f,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:f,page:a,transition:m,wrapper:l.q})).then(function(){l.I()}))}catch{return g()}var m;return _&&_.then?_.then(void 0,g):_})(0,function(){$r.getLevel()===0&&l.force(f.next.url.href)});if(h&&h.then)return h.then(function(){})})},l=this;if(l.data.next.url=Ri({href:t},l.url.parse(t)),l.data.trigger=n,l.data.event=i,l.cache.has(t))a=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,n),l.cache,l.headers);c.then(function(f){f.url.href!==t&&l.history.add(f.url.href,n,"replace")}),a=l.cache.set(t,c,"click","pending").request}var u=(function(){if(l.transitions.shouldWait)return Promise.resolve(Ml(a,l.data)).then(function(){})})();return Promise.resolve(u&&u.then?u.then(o):o())}catch(f){return Promise.reject(f)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),i=n[0],s=n[1],a=this.cache.getAction(i);return this.cache.delete(i),this.B&&this.B(t,a,i,s)===!1||a==="click"&&this.force(i),!1},e.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(i){n.logger.error(i)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var n=this,i=this.W(t);if(i){var s=this.url.getAbsoluteHref(this.dom.getHref(i));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i),this.cache,this.headers).catch(function(a){n.logger.error(a)}),"enter","pending")}},e.$=function(t){var n=this.W(t);if(n){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)}},e.X=function(t){this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:Ri({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:Ri({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},nf(r,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),r})());/*!
 * matrix 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $i,is,rf,Nl,Pa,cl,El,Wa,vi="transform",Su=vi+"Origin",rm,sf=function(e){var t=e.ownerDocument||e;for(!(vi in e.style)&&("msTransform"in e.style)&&(vi="msTransform",Su=vi+"Origin");t.parentNode&&(t=t.parentNode););if(is=window,El=new ls,t){$i=t,rf=t.documentElement,Nl=t.body,Wa=$i.createElementNS("http://www.w3.org/2000/svg","g"),Wa.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.style.position="static",n.style.transform="translate3d(0,0,1px)",rm=i.offsetParent!==n,s.removeChild(n))}return t},MM=function(e){for(var t,n;e&&e!==Nl;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},sm=[],am=[],af=function(){return is.pageYOffset||$i.scrollTop||rf.scrollTop||Nl.scrollTop||0},of=function(){return is.pageXOffset||$i.scrollLeft||rf.scrollLeft||Nl.scrollLeft||0},lf=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},EM=function r(e){if(is.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},Fc=function r(e,t){if(e.parentNode&&($i||sf(e))){var n=lf(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?t?"rect":"g":"div",a=t!==2?0:100,o=t===3?100:0,l={position:"absolute",display:"block",pointerEvents:"none",margin:"0",padding:"0"},c=$i.createElementNS?$i.createElementNS(i.replace(/^https/,"http"),s):$i.createElement(s);return t&&(n?(cl||(cl=r(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+a+","+o+")"),c.setAttribute("fill","transparent"),cl.appendChild(c)):(Pa||(Pa=r(e),Object.assign(Pa.style,l)),Object.assign(c.style,l,{width:"0.1px",height:"0.1px",top:o+"px",left:a+"px"}),Pa.appendChild(c))),c}throw"Need document and parent."},TM=function(e){for(var t=new ls,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},om=function(e){var t=e.getCTM(),n;return t||(n=e.style[vi],e.style[vi]="none",e.appendChild(Wa),t=Wa.getCTM(),e.removeChild(Wa),n?e.style[vi]=n:e.style.removeProperty(vi.replace(/([A-Z])/g,"-$1").toLowerCase())),t||El.clone()},bM=function(e,t){var n=lf(e),i=e===n,s=n?sm:am,a=e.parentNode,o=a&&!n&&a.shadowRoot&&a.shadowRoot.appendChild?a.shadowRoot:a,l,c,u,f,h,d;if(e===is)return e;if(s.length||s.push(Fc(e,1),Fc(e,2),Fc(e,3)),l=n?cl:Pa,n)i?(u=om(e),f=-u.e/u.a,h=-u.f/u.d,c=El):e.getBBox?(u=e.getBBox(),c=e.transform?e.transform.baseVal:{},c=c.numberOfItems?c.numberOfItems>1?TM(c):c.getItem(0).matrix:El,f=c.a*u.x+c.c*u.y,h=c.b*u.x+c.d*u.y):(c=new ls,f=h=0),t&&e.tagName.toLowerCase()==="g"&&(f=h=0),(i||!e.getBoundingClientRect().width?n:a).appendChild(l),l.setAttribute("transform","matrix("+c.a+","+c.b+","+c.c+","+c.d+","+(c.e+f)+","+(c.f+h)+")");else{if(f=h=0,rm)for(c=e.offsetParent,u=e;u&&(u=u.parentNode)&&u!==c&&u.parentNode;)(is.getComputedStyle(u)[vi]+"").length>4&&(f=u.offsetLeft,h=u.offsetTop,u=0);if(d=is.getComputedStyle(e),d.position!=="absolute"&&d.position!=="fixed")for(c=e.offsetParent;a&&a!==c;)f+=a.scrollLeft||0,h+=a.scrollTop||0,a=a.parentNode;u=l.style,u.top=e.offsetTop-h+"px",u.left=e.offsetLeft-f+"px",u[vi]=d[vi],u[Su]=d[Su],u.position=d.position==="fixed"?"fixed":"absolute",o.appendChild(l)}return l},Ic=function(e,t,n,i,s,a,o){return e.a=t,e.b=n,e.c=i,e.d=s,e.e=a,e.f=o,e},ls=(function(){function r(t,n,i,s,a,o){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),a===void 0&&(a=0),o===void 0&&(o=0),Ic(this,t,n,i,s,a,o)}var e=r.prototype;return e.inverse=function(){var n=this.a,i=this.b,s=this.c,a=this.d,o=this.e,l=this.f,c=n*a-i*s||1e-10;return Ic(this,a/c,-i/c,-s/c,n/c,(s*l-a*o)/c,-(n*l-i*o)/c)},e.multiply=function(n){var i=this.a,s=this.b,a=this.c,o=this.d,l=this.e,c=this.f,u=n.a,f=n.c,h=n.b,d=n.d,g=n.e,_=n.f;return Ic(this,u*i+h*a,u*s+h*o,f*i+d*a,f*s+d*o,l+g*i+_*a,c+g*s+_*o)},e.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,s=this.b,a=this.c,o=this.d,l=this.e,c=this.f;return i===n.a&&s===n.b&&a===n.c&&o===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var s=n.x,a=n.y,o=this.a,l=this.b,c=this.c,u=this.d,f=this.e,h=this.f;return i.x=s*o+a*c+f||0,i.y=s*l+a*u+h||0,i},r})();function Ni(r,e,t,n){if(!r||!r.parentNode||($i||sf(r)).documentElement===r)return new ls;var i=MM(r),s=lf(r),a=s?sm:am,o=bM(r,t),l=a[0].getBoundingClientRect(),c=a[1].getBoundingClientRect(),u=a[2].getBoundingClientRect(),f=o.parentNode,h=!n&&EM(r),d=new ls((c.left-l.left)/100,(c.top-l.top)/100,(u.left-l.left)/100,(u.top-l.top)/100,l.left+(h?0:of()),l.top+(h?0:af()));if(f.removeChild(o),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?d.inverse():d}/*!
 * Flip 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var AM=1,ra,on,Dt,Xa,_r,Ki,yu,qh=function(e,t){return e.actions.forEach(function(n){return n.vars[t]&&n.vars[t](n)})},Mu={},Yh=180/Math.PI,wM=Math.PI/180,Tl={},$h={},Ol={},cf=function(e){return typeof e=="string"?e.split(" ").join("").split(","):e},CM=cf("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),Bl=cf("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),qa=function(e){return ra(e)[0]||console.warn("Element not found:",e)},ks=function(e){return Math.round(e*1e4)/1e4||0},Uc=function(e,t,n){return e.forEach(function(i){return i.classList[n](t)})},Kh={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},lm={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},cm=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},zs=function(e,t){var n={},i;for(i in e)t[i]||(n[i]=e[i]);return n},uf={},um=function(e){var t=uf[e]=cf(e);return Ol[e]=t.concat(Bl),t},RM=function(e){var t=e._gsap||on.core.getCache(e);return t.gmCache===on.ticker.frame?t.gMatrix:(t.gmCache=on.ticker.frame,t.gMatrix=Ni(e,!0,!1,!0))},PM=function r(e,t,n){n===void 0&&(n=0);for(var i=e.parentNode,s=1e3*Math.pow(10,n)*(t?-1:1),a=t?-s*900:0;e;)a+=s,e=e.previousSibling;return i?a+r(i,t,n+1):a},bl=function(e,t,n){return e.forEach(function(i){return i.d=PM(n?i.element:i.t,t)}),e.sort(function(i,s){return i.d-s.d}),e},oo=function(e,t){for(var n=e.element.style,i=e.css=e.css||[],s=t.length,a,o;s--;)a=t[s],o=n[a]||n.getPropertyValue(a),i.push(o?a:$h[a]||($h[a]=cm(a)),o);return n},Al=function(e){var t=e.css,n=e.element.style,i=0;for(e.cache.uncache=1;i<t.length;i+=2)t[i+1]?n[t[i]]=t[i+1]:n.removeProperty(t[i]);!t[t.indexOf("transform")+1]&&n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},jh=function(e,t){e.forEach(function(n){return n.a.cache.uncache=1}),t||e.finalStates.forEach(Al)},Nc="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),ff=function(e,t,n){var i=e.element,s=e.width,a=e.height,o=e.uncache,l=e.getProp,c=i.style,u=4,f,h,d;if(typeof t!="object"&&(t=e),Dt&&n!==1)return Dt._abs.push({t:i,b:e,a:e,sd:0}),Dt._final.push(function(){return(e.cache.uncache=1)&&Al(e)}),i;for(h=l("display")==="none",(!e.isVisible||h)&&(h&&(oo(e,["display"]).display=t.display),e.matrix=t.matrix,e.width=s=e.width||t.width,e.height=a=e.height||t.height),oo(e,Nc),d=window.getComputedStyle(i);u--;)c[Nc[u]]=d[Nc[u]];if(c.gridArea="1 / 1 / 1 / 1",c.transition="none",c.position="absolute",c.width=s+"px",c.height=a+"px",c.top||(c.top="0px"),c.left||(c.left="0px"),o)f=new cs(i);else if(f=zs(e,Tl),f.position="absolute",e.simple){var g=i.getBoundingClientRect();f.matrix=new ls(1,0,0,1,g.left+of(),g.top+af())}else f.matrix=Ni(i,!1,!1,!0);return f=$s(f,e,!0),e.x=Ki(f.x,.01),e.y=Ki(f.y,.01),i},Zh=function(e,t){return t!==!0&&(t=ra(t),e=e.filter(function(n){if(t.indexOf((n.sd<0?n.b:n.a).element)!==-1)return!0;n.t._gsap.renderTransform(1),n.b.isVisible&&(n.t.style.width=n.b.width+"px",n.t.style.height=n.b.height+"px")})),e},fm=function(e){return bl(e,!0).forEach(function(t){return(t.a.isVisible||t.b.isVisible)&&ff(t.sd<0?t.b:t.a,t.b,1)})},DM=function(e,t){return t&&e.idLookup[Eu(t).id]||e.elementStates[0]},Eu=function(e,t,n,i){return e instanceof cs?e:e instanceof xi?DM(e,i):new cs(typeof e=="string"?qa(e)||console.warn(e+" not found"):e,t,n)},LM=function(e,t){for(var n=on.getProperty(e.element,null,"native"),i=e.props={},s=t.length;s--;)i[t[s]]=(n(t[s])+"").trim();return i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0),e},hm=function(e,t){var n=e.style||e,i;for(i in t)n[i]=t[i]},FM=function(e){var t=e.getAttribute("data-flip-id");return t||e.setAttribute("data-flip-id",t="auto-"+AM++),t},dm=function(e){return e.map(function(t){return t.element})},Jh=function(e,t,n){return e&&t.length&&n.add(e(dm(t),n,new xi(t,0,!0)),0)},$s=function(e,t,n,i,s,a){var o=e.element,l=e.cache,c=e.parent,u=e.x,f=e.y,h=t.width,d=t.height,g=t.scaleX,_=t.scaleY,m=t.rotation,p=t.bounds,T=a&&yu&&yu(o,"transform,width,height"),M=e,y=t.matrix,E=y.e,A=y.f,b=e.bounds.width!==p.width||e.bounds.height!==p.height||e.scaleX!==g||e.scaleY!==_||e.rotation!==m,P=!b&&e.simple&&t.simple&&!s,v,x,D,R,F,N,O;return P||!c?(g=_=1,m=v=0):(F=RM(c),N=F.clone().multiply(t.ctm?t.matrix.clone().multiply(t.ctm):t.matrix),m=ks(Math.atan2(N.b,N.a)*Yh),v=ks(Math.atan2(N.c,N.d)*Yh+m)%360,g=Math.sqrt(Math.pow(N.a,2)+Math.pow(N.b,2)),_=Math.sqrt(Math.pow(N.c,2)+Math.pow(N.d,2))*Math.cos(v*wM),s&&(s=ra(s)[0],R=on.getProperty(s),O=s.getBBox&&typeof s.getBBox=="function"&&s.getBBox(),M={scaleX:R("scaleX"),scaleY:R("scaleY"),width:O?O.width:Math.ceil(parseFloat(R("width","px"))),height:O?O.height:parseFloat(R("height","px"))}),l.rotation=m+"deg",l.skewX=v+"deg"),n?(g*=h===M.width||!M.width?1:h/M.width,_*=d===M.height||!M.height?1:d/M.height,l.scaleX=g,l.scaleY=_):(h=Ki(h*g/M.scaleX,0),d=Ki(d*_/M.scaleY,0),o.style.width=h+"px",o.style.height=d+"px"),i&&hm(o,t.props),P||!c?(u+=E-e.matrix.e,f+=A-e.matrix.f):b||c!==t.parent?(l.x=u+"px",l.y=f+"px",l.renderTransform(1,l),N=Ni(s||o,!1,!1,!0),x=F.apply({x:N.e,y:N.f}),D=F.apply({x:E,y:A}),u+=D.x-x.x,f+=D.y-x.y):(F.e=F.f=0,D=F.apply({x:E-e.matrix.e,y:A-e.matrix.f}),u+=D.x,f+=D.y),u=Ki(u,.02),f=Ki(f,.02),a&&!(a instanceof cs)?T&&T.revert():(l.x=u+"px",l.y=f+"px",l.renderTransform(1,l)),a&&(a.x=u,a.y=f,a.rotation=m,a.skewX=v,n?(a.scaleX=g,a.scaleY=_):(a.width=h,a.height=d)),a||l},Oc=function(e,t){return e instanceof xi?e:new xi(e,t)},pm=function(e,t,n){var i=e.idLookup[n],s=e.alt[n];return s.isVisible&&(!(t.getElementState(s.element)||s).isVisible||!i.isVisible)?s:i},Bc=[],kc="width,height,overflowX,overflowY".split(","),Zo,Qh=function(e){if(e!==Zo){var t=_r.style,n=_r.clientWidth===window.outerWidth,i=_r.clientHeight===window.outerHeight,s=4;if(e&&(n||i)){for(;s--;)Bc[s]=t[kc[s]];n&&(t.width=_r.clientWidth+"px",t.overflowY="hidden"),i&&(t.height=_r.clientHeight+"px",t.overflowX="hidden"),Zo=e}else if(Zo){for(;s--;)Bc[s]?t[kc[s]]=Bc[s]:t.removeProperty(cm(kc[s]));Zo=e}}},ed=function(e,t){for(var n=0;n<e.length;n+=3)on.set(e[n],{clearProps:!0}),e[n].setAttribute("style",e[n+t]),e[n]._gsap.gmCache=-1},zc=function(e,t,n,i){e instanceof xi&&t instanceof xi||console.warn("Not a valid state object."),n=n||{};var s=n,a=s.clearProps,o=s.onEnter,l=s.onLeave,c=s.absolute,u=s.absoluteOnLeave,f=s.custom,h=s.delay,d=s.paused,g=s.repeat,_=s.repeatDelay,m=s.yoyo,p=s.toggleClass,T=s.nested,M=s.zIndex,y=s.scale,E=s.fade,A=s.stagger,b=s.spin,P=s.prune,v=("props"in n?n:e).props,x=zs(n,Kh),D=on.timeline({delay:h,paused:d,repeat:g,repeatDelay:_,yoyo:m,data:"isFlip"}),R=x,F=[],N=[],O=[],z=[],k=b===!0?1:b||0,Y=typeof b=="function"?b:function(){return k},K=e.interrupted||t.interrupted,L=D[i!==1?"to":"from"],ne,ce,Ie,Fe,Ae,X,te,de,Oe,ye,ke,Ze,me,De;for(ce in t.idLookup)ke=t.alt[ce]?pm(t,e,ce):t.idLookup[ce],Ae=ke.element,ye=e.idLookup[ce],e.alt[ce]&&Ae===ye.element&&(e.alt[ce].isVisible||!ke.isVisible)&&(ye=e.alt[ce]),ye?(X={t:Ae,b:ye,a:ke,sd:ye.element===Ae?0:ke.isVisible?1:-1},O.push(X),X.sd&&(X.sd<0&&(X.b=ke,X.a=ye),K&&oo(X.b,v?Ol[v]:Bl),E&&O.push(X.swap={t:ye.element,b:X.b,a:X.a,sd:-X.sd,swap:X})),Ae._flip=ye.element._flip=Dt?Dt.timeline:D):ke.isVisible&&(O.push({t:Ae,b:zs(ke,{isVisible:1}),a:ke,sd:0,entering:1}),Ae._flip=Dt?Dt.timeline:D);if(v&&(uf[v]||um(v)).forEach(function(H){return x[H]=function(U){return O[U].a.props[H]}}),O.finalStates=Oe=[],Ze=function(){bl(O),Qh(!0);var U=[];for(Fe=0;Fe<O.length;Fe++)X=O[Fe],me=X.a,De=X.b,P&&!me.isDifferent(De)&&!X.entering?O.splice(Fe--,1):(Ae=X.t,T&&!(X.sd<0)&&Fe&&(me=X.a=me.clone({matrix:Ni(Ae,!1,!1,!0)})),De.isVisible&&me.isVisible?(X.sd<0?(T&&ed(U,1),te=new cs(Ae,v,e.simple),$s(te,me,y,0,0,te),te.matrix=Ni(Ae,!1,!1,!0),te.bounds=Ae.getBoundingClientRect(),te.css=X.b.css,X.a=me=te,E&&(Ae.style.opacity=K?De.opacity:me.opacity),A&&z.push(Ae),T&&(ed(U,2),U.push(Ae,Ae.getAttribute("style")))):X.sd>0&&E&&(Ae.style.opacity=K?me.opacity-De.opacity:"0"),$s(me,De,y,v),T&&X.sd<0&&U.push(Ae.getAttribute("style"))):De.isVisible!==me.isVisible&&(De.isVisible?me.isVisible||(De.css=me.css,N.push(De),O.splice(Fe--,1),c&&T&&$s(me,De,y,v)):(me.isVisible&&F.push(me),O.splice(Fe--,1))),y||(Ae.style.maxWidth=Math.max(me.width,De.width)+"px",Ae.style.maxHeight=Math.max(me.height,De.height)+"px",Ae.style.minWidth=Math.min(me.width,De.width)+"px",Ae.style.minHeight=Math.min(me.height,De.height)+"px"),T&&p&&Ae.classList.add(p)),Oe.push(me);var oe;if(p&&(oe=Oe.map(function(q){return q.element}),T&&oe.forEach(function(q){return q.classList.remove(p)})),Qh(!1),y?(x.scaleX=function(q){return O[q].a.scaleX},x.scaleY=function(q){return O[q].a.scaleY}):(x.width=function(q){return O[q].a.width+"px"},x.height=function(q){return O[q].a.height+"px"},x.autoRound=n.autoRound||!1),x.x=function(q){return O[q].a.x+"px"},x.y=function(q){return O[q].a.y+"px"},x.rotation=function(q){return O[q].a.rotation+(b?Y(q,de[q],de)*360:0)},x.skewX=function(q){return O[q].a.skewX},de=O.map(function(q){return q.t}),(M||M===0)&&(x.modifiers={zIndex:function(){return M}},x.zIndex=M,x.immediateRender=n.immediateRender!==!1),E&&(x.opacity=function(q){return O[q].sd<0?0:O[q].sd>0?O[q].a.opacity:"+=0"}),z.length){A=on.utils.distribute(A);var G=de.slice(z.length);x.stagger=function(q,C){return A(~z.indexOf(C)?de.indexOf(O[q].swap.t):q,C,G)}}if(CM.forEach(function(q){return n[q]&&D.eventCallback(q,n[q],n[q+"Params"])}),f&&de.length){R=zs(x,Kh),"scale"in f&&(f.scaleX=f.scaleY=f.scale,delete f.scale);for(ce in f)ne=zs(f[ce],lm),ne[ce]=x[ce],!("duration"in ne)&&"duration"in x&&(ne.duration=x.duration),ne.stagger=x.stagger,L.call(D,de,ne,0),delete R[ce]}(de.length||N.length||F.length)&&(p&&D.add(function(){return Uc(oe,p,D._zTime<0?"remove":"add")},0)&&!d&&Uc(oe,p,"add"),de.length&&L.call(D,de,R,0)),Jh(o,F,D),Jh(l,N,D);var ie=Dt&&Dt.timeline;ie&&(ie.add(D,0),Dt._final.push(function(){return jh(O,!a)})),Ie=D.duration(),D.call(function(){var q=D.time()>=Ie;q&&!ie&&jh(O,!a),p&&Uc(oe,p,q?"remove":"add")})},u&&(c=O.filter(function(H){return!H.sd&&!H.a.isVisible&&H.b.isVisible}).map(function(H){return H.a.element})),Dt){var qe;c&&(qe=Dt._abs).push.apply(qe,Zh(O,c)),Dt._run.push(Ze)}else c&&fm(Zh(O,c)),Ze();var ze=Dt?Dt.timeline:D;return ze.revert=function(){return hf(ze,1,1)},ze},IM=function r(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(r)},hf=function(e,t,n){if(e&&e.progress()<1&&(!e.paused()||n))return t&&(IM(e),t<2&&e.progress(1),e.kill()),!0},Jo=function(e){for(var t=e.idLookup={},n=e.alt={},i=e.elementStates,s=i.length,a;s--;)a=i[s],t[a.id]?n[a.id]=a:t[a.id]=a},xi=(function(){function r(t,n,i){if(this.props=n&&n.props,this.simple=!!(n&&n.simple),i)this.targets=dm(t),this.elementStates=t,Jo(this);else{this.targets=ra(t);var s=n&&(n.kill===!1||n.batch&&!n.kill);Dt&&!s&&Dt._kill.push(this),this.update(s||!!Dt)}}var e=r.prototype;return e.update=function(n){var i=this;return this.elementStates=this.targets.map(function(s){return new cs(s,i.props,i.simple)}),Jo(this),this.interrupt(n),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,Jo(this),this},e.fit=function(n,i,s){for(var a=bl(this.elementStates.slice(0),!1,!0),o=(n||this).idLookup,l=0,c,u;l<a.length;l++)c=a[l],s&&(c.matrix=Ni(c.element,!1,!1,!0)),u=o[c.id],u&&$s(c,u,i,!0,0,c),c.matrix=Ni(c.element,!1,!1,!0);return this},e.getProperty=function(n,i){var s=this.getElementState(n)||Tl;return(i in s?s:s.props||Tl)[i]},e.add=function(n){for(var i=n.targets.length,s=this.idLookup,a=this.alt,o,l,c;i--;)l=n.elementStates[i],c=s[l.id],c&&(l.element===c.element||a[l.id]&&a[l.id].element===l.element)?(o=this.elementStates.indexOf(l.element===c.element?c:a[l.id]),this.targets.splice(o,1,n.targets[i]),this.elementStates.splice(o,1,l)):(this.targets.push(n.targets[i]),this.elementStates.push(l));return n.interrupted&&(this.interrupted=!0),n.simple||(this.simple=!1),Jo(this),this},e.compare=function(n){var i=n.idLookup,s=this.idLookup,a=[],o=[],l=[],c=[],u=[],f=n.alt,h=this.alt,d=function(P,v,x){return(P.isVisible!==v.isVisible?P.isVisible?l:c:P.isVisible?o:a).push(x)&&u.push(x)},g=function(P,v,x){return u.indexOf(x)<0&&d(P,v,x)},_,m,p,T,M,y,E,A;for(p in i)M=f[p],y=h[p],_=M?pm(n,this,p):i[p],T=_.element,m=s[p],y?(A=m.isVisible||!y.isVisible&&T===m.element?m:y,E=M&&!_.isVisible&&!M.isVisible&&A.element===M.element?M:_,E.isVisible&&A.isVisible&&E.element!==A.element?((E.isDifferent(A)?o:a).push(E.element,A.element),u.push(E.element,A.element)):d(E,A,E.element),M&&E.element===M.element&&(M=i[p]),g(E.element!==m.element&&M?M:E,m,m.element),g(M&&M.element===y.element?M:E,y,y.element),M&&g(M,y.element===M.element?y:m,M.element)):(m?m.isDifferent(_)?d(_,m,T):a.push(T):l.push(T),M&&g(M,m,M.element));for(p in s)i[p]||(c.push(s[p].element),h[p]&&c.push(h[p].element));return{changed:o,unchanged:a,enter:l,leave:c}},e.recordInlineStyles=function(){for(var n=Ol[this.props]||Bl,i=this.elementStates.length;i--;)oo(this.elementStates[i],n)},e.interrupt=function(n){var i=this,s=[];this.targets.forEach(function(a){var o=a._flip,l=hf(o,n?0:1);n&&l&&s.indexOf(o)<0&&o.add(function(){return i.updateVisibility()}),l&&s.push(o)}),!n&&s.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!s.length)},e.updateVisibility=function(){this.elementStates.forEach(function(n){var i=n.element.getBoundingClientRect();n.isVisible=!!(i.width||i.height||i.top||i.left),n.uncache=1})},e.getElementState=function(n){return this.elementStates[this.targets.indexOf(qa(n))]},e.makeAbsolute=function(){return bl(this.elementStates.slice(0),!0,!0).map(ff)},r})(),cs=(function(){function r(t,n,i){t instanceof r?Object.assign(this,t,n||{}):(this.element=t,this.update(n,i))}var e=r.prototype;return e.isDifferent=function(n){var i=this.bounds,s=n.bounds;return i.top!==s.top||i.left!==s.left||i.width!==s.width||i.height!==s.height||!this.matrix.equals(n.matrix)||this.opacity!==n.opacity||this.props&&n.props&&JSON.stringify(this.props)!==JSON.stringify(n.props)},e.clone=function(n){return new r(this,n)},e.update=function(n,i){var s=this,a=s.element,o=on.getProperty(a),l=on.core.getCache(a),c=a.getBoundingClientRect(),u=a.getBBox&&typeof a.getBBox=="function"&&a.nodeName.toLowerCase()!=="svg"&&a.getBBox(),f=i?new ls(1,0,0,1,c.left+of(),c.top+af()):Ni(a,!1,!1,!0);l.uncache=1,s.getProp=o,s.element=a,s.id=FM(a),s.matrix=f,s.cache=l,s.bounds=c,s.isVisible=!!(c.width||c.height||c.left||c.top),s.display=o("display"),s.position=o("position"),s.parent=a.parentNode,s.x=o("x","px"),s.y=o("y","px"),s.scaleX=l.scaleX,s.scaleY=l.scaleY,s.rotation=o("rotation"),s.skewX=o("skewX"),s.opacity=o("opacity"),s.width=u?u.width:Ki(o("width","px"),.04),s.height=u?u.height:Ki(o("height","px"),.04),n&&LM(s,uf[n]||um(n)),s.ctm=a.getCTM&&a.nodeName.toLowerCase()==="svg"&&om(a).inverse(),s.simple=i||ks(f.a)===1&&!ks(f.b)&&!ks(f.c)&&ks(f.d)===1,s.uncache=0},r})(),UM=(function(){function r(t,n){this.vars=t,this.batch=n,this.states=[],this.timeline=n.timeline}var e=r.prototype;return e.getStateById=function(n){for(var i=this.states.length;i--;)if(this.states[i].idLookup[n])return this.states[i]},e.kill=function(){this.batch.remove(this)},r})(),NM=(function(){function r(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new xi,this.timeline=on.timeline()}var e=r.prototype;return e.add=function(n){var i=this.actions.filter(function(s){return s.vars===n});return i.length?i[0]:(i=new UM(typeof n=="function"?{animate:n}:n,this),this.actions.push(i),i)},e.remove=function(n){var i=this.actions.indexOf(n);return i>=0&&this.actions.splice(i,1),this},e.getState=function(n){var i=this,s=Dt,a=Xa;return Dt=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(o){o.vars.getState&&(o.states.length=0,Xa=o,o.state=o.vars.getState(o)),n&&o.states.forEach(function(l){return i.state.add(l)})}),Xa=a,Dt=s,this.killConflicts(),this},e.animate=function(){var n=this,i=Dt,s=this.timeline,a=this.actions.length,o,l;for(Dt=this,s.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(c){c.vars.animate&&c.vars.animate(c);var u=c.vars.onEnter,f=c.vars.onLeave,h=c.targets,d,g;h&&h.length&&(u||f)&&(d=new xi,c.states.forEach(function(_){return d.add(_)}),g=d.compare(sa.getState(h)),g.enter.length&&u&&u(g.enter),g.leave.length&&f&&f(g.leave))}),fm(this._abs),this._run.forEach(function(c){return c()}),l=s.duration(),o=this._final.slice(0),s.add(function(){l<=s.time()&&(o.forEach(function(c){return c()}),qh(n,"onComplete"))}),Dt=i;a--;)this.actions[a].vars.once&&this.actions[a].kill();return qh(this,"onStart"),s.restart(),this},e.loadState=function(n){n||(n=function(){return 0});var i=[];return this.actions.forEach(function(s){if(s.vars.loadState){var a,o=function l(c){c&&(s.targets=c),a=i.indexOf(l),~a&&(i.splice(a,1),i.length||n())};i.push(o),s.vars.loadState(o)}}),i.length||n(),this},e.setState=function(){return this.actions.forEach(function(n){return n.targets=n.vars.setState&&n.vars.setState(n)}),this},e.killConflicts=function(n){return this.state.interrupt(n),this._kill.forEach(function(i){return i.interrupt(n)}),this},e.run=function(n,i){var s=this;return this!==Dt&&(n||this.getState(i),this.loadState(function(){s._killed||(s.setState(),s.animate())})),this},e.clear=function(n){this.state.clear(),n||(this.actions.length=0)},e.getStateById=function(n){for(var i=this.actions.length,s;i--;)if(s=this.actions[i].getStateById(n),s)return s;return this.state.idLookup[n]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete Mu[this.id]},r})(),sa=(function(){function r(){}return r.getState=function(t,n){var i=Oc(t,n);return Xa&&Xa.states.push(i),n&&n.batch&&r.batch(n.batch).state.add(i),i},r.from=function(t,n){return n=n||{},"clearProps"in n||(n.clearProps=!0),zc(t,Oc(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,-1)},r.to=function(t,n){return zc(t,Oc(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,1)},r.fromTo=function(t,n,i){return zc(t,n,i)},r.fit=function(t,n,i){var s=i?zs(i,lm):{},a=i||s,o=a.absolute,l=a.scale,c=a.getVars,u=a.props,f=a.runBackwards,h=a.onComplete,d=a.simple,g=i&&i.fitChild&&qa(i.fitChild),_=Eu(n,u,d,t),m=Eu(t,0,d,_),p=u?Ol[u]:Bl,T=on.context();return u&&hm(s,_.props),oo(m,p),f&&("immediateRender"in s||(s.immediateRender=!0),s.onComplete=function(){Al(m),h&&h.apply(this,arguments)}),o&&ff(m,_),s=$s(m,_,l||g,!s.duration&&u,g,s.duration||c?s:0),typeof i=="object"&&"zIndex"in i&&(s.zIndex=i.zIndex),T&&!c&&T.add(function(){return function(){return Al(m)}}),c?s:s.duration?on.to(m.element,s):null},r.makeAbsolute=function(t,n){return(t instanceof xi?t:new xi(t,n)).makeAbsolute()},r.batch=function(t){return t||(t="default"),Mu[t]||(Mu[t]=new NM(t))},r.killFlipsOf=function(t,n){(t instanceof xi?t.targets:ra(t)).forEach(function(i){return i&&hf(i._flip,n!==!1?1:2)})},r.isFlipping=function(t){var n=r.getByTarget(t);return!!n&&n.isActive()},r.getByTarget=function(t){return(qa(t)||Tl)._flip},r.getElementState=function(t,n){return new cs(qa(t),n)},r.convertCoordinates=function(t,n,i){var s=Ni(n,!0,!0).multiply(Ni(t));return i?s.apply(i):s},r.register=function(t){if(_r=typeof document<"u"&&document.body,_r){on=t,sf(_r),ra=on.utils.toArray,yu=on.core.getStyleSaver;var n=on.utils.snap(.1);Ki=function(s,a){return n(parseFloat(s)+a)}}},r})();sa.version="3.14.2";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(sa);/*!
 * SplitText 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let Sa,Ds,td=typeof Symbol=="function"?Symbol():"_split",Tu,OM=()=>Tu||df.register(window.gsap),nd=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,lo=r=>typeof r=="string"?lo(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...lo(t)):e.push(t),e),[]):[r],id=r=>lo(r).filter(e=>e instanceof HTMLElement),bu=[],Gc=function(){},BM={add:r=>r()},kM=/\s+/g,rd=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),wl={left:0,top:0,width:0,height:0},zM=(r,e)=>{for(;++e<r.length&&r[e]===wl;);return r[e]||wl},sd=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},ad=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||bu),n=r.length,i,s,a,o;if(t.size)for(;--n>-1;){s=r[n];for(a of t)if(a.startsWith(s)&&a.length>s.length){for(i=0,o=s;a.startsWith(o+=r[n+ ++i])&&o.length<a.length;);if(i&&o.length===a.length){r[n]=a,r.splice(n+1,i);break}}}}return r},od=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Ls=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),Au=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:a=!1}=e,o=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let f=document.createElement(i),h=t.length+1;return n&&(f.className=n+(l?" "+n+h:"")),a&&f.style.setProperty("--"+r,h+""),s!=="none"&&f.setAttribute("aria-hidden","true"),i!=="span"&&(f.style.position="relative",f.style.display=o),f.textContent=u,t.push(f),f};return l&&(n=n.replace("++","")),c.collection=t,c},GM=(r,e,t,n)=>{let i=Au("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(a,o)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[a]);a<o;a++)l.appendChild(e[a]);l.normalize()}},mm=(r,e,t,n,i,s,a,o,l,c)=>{var u;let f=Array.from(r.childNodes),h=0,{wordDelimiter:d,reduceWhiteSpace:g=!0,prepareText:_}=e,m=r.getBoundingClientRect(),p=m,T=!g&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",M=0,y=t.collection,E,A,b,P,v,x,D,R,F,N,O,z,k,Y,K,L,ne,ce;for(typeof d=="object"?(b=d.delimiter||d,A=d.replaceWith||""):A=d===""?"":d||" ",E=A!==" ";h<f.length;h++)if(P=f[h],P.nodeType===3){for(K=P.textContent||"",g?K=K.replace(kM," "):T&&(K=K.replace(/\n/g,A+`
`)),_&&(K=_(K,r)),P.textContent=K,v=A||b?K.split(b||A):K.match(o)||bu,ne=v[v.length-1],R=E?ne.slice(-1)===" ":!ne,ne||v.pop(),p=m,D=E?v[0].charAt(0)===" ":!v[0],D&&Ls(" ",r,P),v[0]||v.shift(),ad(v,l),s&&c||(P.textContent=""),F=1;F<=v.length;F++)if(L=v[F-1],!g&&T&&L.charAt(0)===`
`&&((u=P.previousSibling)==null||u.remove(),Ls(document.createElement("br"),r,P),L=L.slice(1)),!g&&L==="")Ls(A,r,P);else if(L===" ")r.insertBefore(document.createTextNode(" "),P);else{if(E&&L.charAt(0)===" "&&Ls(" ",r,P),M&&F===1&&!D&&y.indexOf(M.parentNode)>-1?(x=y[y.length-1],x.appendChild(document.createTextNode(n?"":L))):(x=t(n?"":L),Ls(x,r,P),M&&F===1&&!D&&x.insertBefore(M,x.firstChild)),n)for(O=nd?ad([...nd.segment(L)].map(Ie=>Ie.segment),l):L.match(o)||bu,ce=0;ce<O.length;ce++)x.appendChild(O[ce]===" "?document.createTextNode(" "):n(O[ce]));if(s&&c){if(K=P.textContent=K.substring(L.length+1,K.length),N=x.getBoundingClientRect(),N.top>p.top&&N.left<=p.left){for(z=r.cloneNode(),k=r.childNodes[0];k&&k!==x;)Y=k,k=k.nextSibling,z.appendChild(Y);r.parentNode.insertBefore(z,r),i&&od(z)}p=N}(F<v.length||R)&&Ls(F>=v.length?" ":E&&L.slice(-1)===" "?" "+A:A,r,P)}r.removeChild(P),M=0}else P.nodeType===1&&(a&&a.indexOf(P)>-1?(y.indexOf(P.previousSibling)>-1&&y[y.length-1].appendChild(P),M=P):(mm(P,e,t,n,i,s,a,o,l,!0),M=0),i&&od(P))};const _m=class gm{constructor(e,t){this.isSplit=!1,OM(),this.elements=id(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(a=>{var o;t.overwrite!==!1&&((o=a[td])==null||o._data.orig.filter(({element:l})=>l===a).forEach(sd)),a[td]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let a=n.length,o;for(;a--;){o=n[a];let l=o.element.offsetWidth;if(l!==o.width){o.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Gc(this),this.split(t)}split(e){return(this._ctx||BM).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:a,autoSplit:o=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,f=t.indexOf("chars")>-1,h=t.indexOf("words")>-1,d=f&&!h&&!u,g=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=g?new RegExp(g.source+"|"+rd.source,"gu"):rd,m=!!e.ignore&&id(e.ignore),{orig:p,animTime:T,obs:M}=this._data,y;(f||h||u)&&(this.elements.forEach((E,A)=>{p[A]={element:E,html:E.innerHTML,ariaL:E.getAttribute("aria-label"),ariaH:E.getAttribute("aria-hidden")},n==="auto"?E.setAttribute("aria-label",(E.textContent||"").trim()):n==="hidden"&&E.setAttribute("aria-hidden","true");let b=[],P=[],v=[],x=f?Au("char",e,b):null,D=Au("word",e,P),R,F,N,O;if(mm(E,e,D,x,d,i&&(u||d),m,_,g,!1),u){let z=lo(E.childNodes),k=GM(E,z,e,v),Y,K=[],L=0,ne=z.map(Fe=>Fe.nodeType===1?Fe.getBoundingClientRect():wl),ce=wl,Ie;for(R=0;R<z.length;R++)Y=z[R],Y.nodeType===1&&(Y.nodeName==="BR"?((!R||z[R-1].nodeName!=="BR")&&(K.push(Y),k(L,R+1)),L=R+1,ce=zM(ne,R)):(Ie=ne[R],R&&Ie.top>ce.top&&Ie.left<ce.left+ce.width-1&&(k(L,R),L=R),ce=Ie));L<R&&k(L,R),K.forEach(Fe=>{var Ae;return(Ae=Fe.parentNode)==null?void 0:Ae.removeChild(Fe)})}if(!h){for(R=0;R<P.length;R++)if(F=P[R],f||!F.nextSibling||F.nextSibling.nodeType!==3)if(s&&!u){for(N=document.createElement("span"),N.style.whiteSpace="nowrap";F.firstChild;)N.appendChild(F.firstChild);F.replaceWith(N)}else F.replaceWith(...F.childNodes);else O=F.nextSibling,O&&O.nodeType===3&&(O.textContent=(F.textContent||"")+(O.textContent||""),F.remove());P.length=0,E.normalize()}this.lines.push(...v),this.words.push(...P),this.chars.push(...b)}),c&&this[c]&&this.masks.push(...this[c].map(E=>{let A=E.cloneNode();return E.replaceWith(A),A.appendChild(E),E.className&&(A.className=E.className.trim()+"-mask"),A.style.overflow="clip",A}))),this.isSplit=!0,Ds&&u&&(o?Ds.addEventListener("loadingdone",this._split):Ds.status==="loading"&&console.warn("SplitText called before fonts loaded")),(y=a&&a(this))&&y.totalTime&&(this._data.anim=T?y.totalTime(T):y),u&&o&&this.elements.forEach((E,A)=>{p[A].width=E.offsetWidth,M&&M.observe(E)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),Ds?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(sd),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new gm(e,t)}static register(e){Sa=Sa||e||window.gsap,Sa&&(lo=Sa.utils.toArray,Gc=Sa.core.context||Gc),!Tu&&window.innerWidth>0&&(Ds=document.fonts,Tu=!0)}};_m.version="3.14.2";let df=_m;class VM{elements;splitAnimations=[];fadeAnimations=[];splitTweens=[];fadeTweens=[];ready=!1;constructor(){}init(){this.ready=!0,this.splitAnimations=[],this.fadeAnimations=[],this.elements=document.querySelectorAll("[data-text-animation]"),this.elements.forEach(e=>{const t=parseFloat(e.getAttribute("data-text-animation-in-duration")||"0.6"),n=parseFloat(e.getAttribute("data-text-animation-out-duration")||"0.3"),i=parseFloat(e.getAttribute("data-text-animation-in-delay")||"0");if(e.hasAttribute("data-text-animation-split")){const s=df.create(e,{type:"lines",mask:"lines"}),a=parseFloat(e.getAttribute("data-text-animation-in-stagger")||"0.06"),o=parseFloat(e.getAttribute("data-text-animation-out-stagger")||"0.06");s.lines.forEach(l=>{wn.set(l,{yPercent:100})}),wn.set(e,{autoAlpha:1,visibility:"visible"}),this.splitAnimations.push({element:e,split:s,inDuration:t,outDuration:n,inStagger:a,outStagger:o,inDelay:i})}else wn.set(e,{autoAlpha:0,visibility:"hidden"}),this.fadeAnimations.push({element:e,inDuration:t,outDuration:n,inDelay:i})})}animateIn({delay:e=0}={}){return this.splitAnimations.forEach(({element:t,split:n,inDuration:i,inStagger:s,inDelay:a})=>{const o=wn.to(n.lines,{yPercent:0,stagger:s,scrollTrigger:{trigger:t,start:"top bottom",end:"bottom top",toggleActions:"play reset restart reset"},ease:"expo",duration:i,delay:a+e});this.splitTweens.push(o)}),this.fadeAnimations.forEach(({element:t,inDuration:n,inDelay:i})=>{const s=wn.to(t,{autoAlpha:1,scrollTrigger:{trigger:t,start:"top bottom",end:"bottom top",toggleActions:"play reset restart reset"},ease:"power2.out",duration:n,delay:i+e});this.fadeTweens.push(s)}),wn.timeline()}animateOut(){const e=wn.timeline();return this.splitAnimations.forEach(({split:t,outDuration:n,outStagger:i})=>{e.to(t.lines,{yPercent:100,stagger:i,ease:"power2.out",duration:n},0)}),this.fadeAnimations.forEach(({element:t,outDuration:n})=>{e.to(t,{autoAlpha:0,ease:"power2.out",duration:n},0)}),e}onResize(){this.ready&&(this.destroy(),this.init(),this.animateIn())}destroy(){this.splitTweens.forEach(e=>{e.scrollTrigger?.kill(),e.kill()}),this.fadeTweens.forEach(e=>{e.scrollTrigger?.kill(),e.kill()}),this.splitAnimations.forEach(({split:e})=>{e.revert()}),this.splitTweens=[],this.fadeTweens=[]}}function HM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Vc={exports:{}},ld;function WM(){return ld||(ld=1,(function(r){(function(){function e(_,m){document.addEventListener?_.addEventListener("scroll",m,!1):_.attachEvent("scroll",m)}function t(_){document.body?_():document.addEventListener?document.addEventListener("DOMContentLoaded",function m(){document.removeEventListener("DOMContentLoaded",m),_()}):document.attachEvent("onreadystatechange",function m(){(document.readyState=="interactive"||document.readyState=="complete")&&(document.detachEvent("onreadystatechange",m),_())})}function n(_){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(_)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function i(_,m){_.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+m+";"}function s(_){var m=_.g.offsetWidth,p=m+100;return _.j.style.width=p+"px",_.i.scrollLeft=p,_.h.scrollLeft=_.h.scrollWidth+100,_.l!==m?(_.l=m,!0):!1}function a(_,m){function p(){var M=T;s(M)&&M.g.parentNode!==null&&m(M.l)}var T=_;e(_.h,p),e(_.i,p),s(_)}function o(_,m,p){m=m||{},p=p||window,this.family=_,this.style=m.style||"normal",this.weight=m.weight||"normal",this.stretch=m.stretch||"normal",this.context=p}var l=null,c=null,u=null,f=null;function h(_){return c===null&&(d(_)&&/Apple/.test(window.navigator.vendor)?(_=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!_&&603>parseInt(_[1],10)):c=!1),c}function d(_){return f===null&&(f=!!_.document.fonts),f}function g(_,m){var p=_.style,T=_.weight;if(u===null){var M=document.createElement("div");try{M.style.font="condensed 100px sans-serif"}catch{}u=M.style.font!==""}return[p,T,u?_.stretch:"","100px",m].join(" ")}o.prototype.load=function(_,m){var p=this,T=_||"BESbswy",M=0,y=m||3e3,E=new Date().getTime();return new Promise(function(A,b){if(d(p.context)&&!h(p.context)){var P=new Promise(function(x,D){function R(){new Date().getTime()-E>=y?D(Error(""+y+"ms timeout exceeded")):p.context.document.fonts.load(g(p,'"'+p.family+'"'),T).then(function(F){1<=F.length?x():setTimeout(R,25)},D)}R()}),v=new Promise(function(x,D){M=setTimeout(function(){D(Error(""+y+"ms timeout exceeded"))},y)});Promise.race([v,P]).then(function(){clearTimeout(M),A(p)},b)}else t(function(){function x(){var ce;(ce=O!=-1&&z!=-1||O!=-1&&k!=-1||z!=-1&&k!=-1)&&((ce=O!=z&&O!=k&&z!=k)||(l===null&&(ce=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),l=!!ce&&(536>parseInt(ce[1],10)||parseInt(ce[1],10)===536&&11>=parseInt(ce[2],10))),ce=l&&(O==Y&&z==Y&&k==Y||O==K&&z==K&&k==K||O==L&&z==L&&k==L)),ce=!ce),ce&&(ne.parentNode!==null&&ne.parentNode.removeChild(ne),clearTimeout(M),A(p))}function D(){if(new Date().getTime()-E>=y)ne.parentNode!==null&&ne.parentNode.removeChild(ne),b(Error(""+y+"ms timeout exceeded"));else{var ce=p.context.document.hidden;(ce===!0||ce===void 0)&&(O=R.g.offsetWidth,z=F.g.offsetWidth,k=N.g.offsetWidth,x()),M=setTimeout(D,50)}}var R=new n(T),F=new n(T),N=new n(T),O=-1,z=-1,k=-1,Y=-1,K=-1,L=-1,ne=document.createElement("div");ne.dir="ltr",i(R,g(p,"sans-serif")),i(F,g(p,"serif")),i(N,g(p,"monospace")),ne.appendChild(R.g),ne.appendChild(F.g),ne.appendChild(N.g),p.context.document.body.appendChild(ne),Y=R.g.offsetWidth,K=F.g.offsetWidth,L=N.g.offsetWidth,D(),a(R,function(ce){O=ce,x()}),i(R,g(p,'"'+p.family+'",sans-serif')),a(F,function(ce){z=ce,x()}),i(F,g(p,'"'+p.family+'",serif')),a(N,function(ce){k=ce,x()}),i(N,g(p,'"'+p.family+'",monospace'))})})},r.exports=o})()})(Vc)),Vc.exports}var XM=WM();const qM=HM(XM);wn.registerPlugin(it,rs,sa,df);class YM{canvas;scroll;template;mediaHomeState;scrollBlocked=!1;scrollTop;textAnimation;fontLoaded=!1;constructor(){typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.scroll=new $y,this.canvas=new Ey,this.textAnimation=new VM,this.loadFont(()=>{this.textAnimation.init()}),this.template=this.getCurrentTemplate(),this.loadImages(()=>{this.canvas.createMedias(),this.fontLoaded?(this.textAnimation.init(),this.textAnimation.animateIn()):window.addEventListener("fontLoaded",()=>{wn.delayedCall(0,()=>{wn.delayedCall(0,()=>{this.textAnimation.init(),this.textAnimation.animateIn({delay:.3})})})})});let e,t;yM.init({prefetchIgnore:!0,transitions:[{name:"default-transition",before:()=>{this.scrollBlocked=!0,this.scroll.s?.paused(!0)},leave:()=>((this.canvas.medias&&this.canvas.medias)?.forEach(i=>{i&&(i.onResize(this.canvas.sizes),wn.set(i.element,{visibility:"hidden",opacity:0}))}),new Promise(i=>{const s=this.textAnimation.animateOut();this.canvas.medias?.forEach(a=>{a&&s.fromTo(a.material.uniforms.uProgress,{value:1},{duration:1,ease:"linear",value:0},0)}),s.call(()=>{this.textAnimation.destroy(),i()})})),beforeEnter:()=>{this.canvas.medias?.forEach(n=>{n?.destroy(),n=null}),this.scrollBlocked=!1,this.scroll.reset(),this.scroll.destroy()},after:()=>{this.scroll.init(),this.textAnimation.init();const n=this.getCurrentTemplate();this.setTemplate(n),this.loadImages(()=>{this.canvas.medias=[],this.canvas.createMedias(),this.textAnimation.animateIn({delay:.3})})}},{name:"home-detail",from:{custom:()=>!!document.querySelector('a[data-home-link-active="true"]')},before:()=>{this.scrollBlocked=!0,this.scroll.s?.paused(!0);const n=this.textAnimation.animateOut();return e=document.querySelector('a[data-home-link-active="true"] img'),this.canvas.medias?.forEach(i=>{if(!i)return;i.scrollTrigger.kill();const s=i.material.uniforms.uProgress.value,a=1.2;if(i.element!==e){const o=a*s;n.to(i.material.uniforms.uProgress,{duration:o,value:0,ease:"linear"},0)}else{const o=a*(1-s);n.to(i.material.uniforms.uProgress,{value:1,duration:o,ease:"linear",onComplete:()=>{i.element.style.opacity="1",i.element.style.visibility="visible",wn.set(i.material.uniforms.uProgress,{value:0})}},0)}}),new Promise(i=>{n.call(()=>{i()})})},leave:()=>{t=this.scroll.getScroll();const n=document.querySelector(".container");n.style.position="fixed",n.style.top=`-${t}px`,n.style.width="100%",n.style.zIndex="1000",this.mediaHomeState=sa.getState(e),this.textAnimation.destroy()},beforeEnter:()=>{this.scroll.reset(),this.scroll.destroy()},after:()=>{this.scroll.init(),this.textAnimation.init();const n=document.querySelector(".details-container");n.innerHTML="",n.append(e);const i=this.getCurrentTemplate();return this.setTemplate(i),new Promise(s=>{let a=null;this.textAnimation.animateIn({delay:.3}),sa.from(this.mediaHomeState,{absolute:!0,duration:1,ease:"power3.inOut",onComplete:()=>{this.scrollBlocked=!1,this.canvas.medias?.forEach(o=>{o&&(o.element!==e?(o.destroy(),o=null):a=o)}),this.canvas.medias=[a],s()}})})}}]}),window.addEventListener("resize",this.onResize.bind(this)),this.render=this.render.bind(this),wn.ticker.add(this.render)}getCurrentTemplate(){return document.querySelector("[data-page-template]")?.getAttribute("data-page-template")}setTemplate(e){this.template=e}loadImages(e){const t=document.querySelectorAll("img");let n=0;const i=t.length;t.forEach(s=>{s.complete?n++:s.addEventListener("load",()=>{n++,n===i&&this.onReady(e)})}),n===i&&this.onReady(e)}onReady(e){e&&e(),it.refresh()}loadFont(e){new qM("Satoshi").load().then(()=>{e(),this.fontLoaded=!0,window.dispatchEvent(new Event("fontLoaded"))})}onResize(){this.textAnimation?.onResize(),this.canvas?.onResize()}render(){this.scrollTop=this.scroll?.getScroll()||0,this.canvas?.render(this.scrollTop,!this.scrollBlocked)}}function vm(){return window.__lumioGalleryApp||(window.__lumioGalleryApp=new YM),window.__lumioGalleryApp}window.bootstrapGalleryApp=vm;document.querySelector('[data-barba-namespace="lumio"]')||vm();
