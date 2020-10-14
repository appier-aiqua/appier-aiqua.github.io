//============================================================

// -- Greensock

//============================================================

/*!
 * VERSION: 1.19.0
 * DATE: 2016-07-14
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.19.0",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,c){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var d,e,f,i,j,k,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._totalTime,q=this._cycle,r=this._duration,s=this._rawPrevTime;if(a>=n-1e-7?(this._totalTime=n,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=r,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===r&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>s||0>=a&&a>=-1e-7||s===g&&"isPause"!==this.data)&&s!==a&&(c=!0,s>g&&(e="onReverseComplete")),this._rawPrevTime=m=!b||a||s===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==p||0===r&&s>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===r&&(this._initted||!this.vars.lazy||c)&&(s>=0&&(c=!0),this._rawPrevTime=m=!b||a||s===a?a:g)),this._initted||(c=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(i=r+this._repeatDelay,this._cycle=this._totalTime/i>>0,0!==this._cycle&&this._cycle===this._totalTime/i&&a>=p&&this._cycle--,this._time=this._totalTime-this._cycle*i,this._yoyo&&0!==(1&this._cycle)&&(this._time=r-this._time),this._time>r?this._time=r:this._time<0&&(this._time=0)),this._easeType?(j=this._time/r,k=this._easeType,l=this._easePower,(1===k||3===k&&j>=.5)&&(j=1-j),3===k&&(j*=2),1===l?j*=j:2===l?j*=j*j:3===l?j*=j*j*j:4===l&&(j*=j*j*j*j),1===k?this.ratio=1-j:2===k?this.ratio=j:this._time/r<.5?this.ratio=j/2:this.ratio=1-j/2):this.ratio=this._ease.getRatio(this._time/r)),o===this._time&&!c&&q===this._cycle)return void(p!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=o,this._totalTime=p,this._rawPrevTime=s,this._cycle=q,h.lazyTweens.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/r):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&a>=0&&(this._active=!0),0===p&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===r)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,b,c),b||(this._totalTime!==p||e)&&this._callback("onUpdate")),this._cycle!==q&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===r&&this._rawPrevTime===g&&m!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e.call(b[c],c):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.19.0",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g=new d(a),h=g._timeline;for(null==b&&(b=!0),h._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=h._time,e=h._first;e;)f=e._next,b&&e instanceof c&&e.target===e.vars.onComplete||g.add(e,e._startTime-e._delay),e=f;return h.add(g,0),g},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>d._startTime+d._totalDuration/d._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused?this.add(e,e._startTime-e._delay):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.19.0",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&f._callback("onStart")},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a>=o-1e-7)this._locked||(this._totalTime=o,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=p,a=p+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==q||0===p&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=p||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===p&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=p+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,a=p+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=q)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*p,this._cycle<w?x=!x:this._totalTime+=p,this._time=q,this._rawPrevTime=0===p?u-1e-4:u,this._cycle=w,this._locked=!0,q=x?0:p,this.render(q,b,0===p),b||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),q!==this._time)return;if(y&&(q=x?p+1e-4:-1e-4,this.render(q,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==q&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=q)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[-1>h?0:1][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,
segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.7",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.19.0",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N=document,O=function(a){return N.createElementNS?N.createElementNS("http://www.w3.org/1999/xhtml",a):N.createElement(a)},P=O("div"),Q=O("img"),R=g._internals={_specialProps:i},S=navigator.userAgent,T=function(){var a=S.indexOf("Android"),b=O("a");return m=-1!==S.indexOf("Safari")&&-1===S.indexOf("Chrome")&&(-1===a||Number(S.substr(a+8,1))>3),o=m&&Number(S.substr(S.indexOf("Version/")+8,1))<6,n=-1!==S.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(S)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(S))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),U=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},V=function(a){window.console&&console.log(a)},W="",X="",Y=function(a,b){b=b||P;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(X=3===d?"ms":c[d],W="-"+X.toLowerCase()+"-",X+a):null},Z=N.defaultView?N.defaultView.getComputedStyle:function(){},$=g.getStyle=function(a,b,c,d,e){var f;return T||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||Z(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):U(a)},_=R.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=P.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+$(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||N.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(P),h=parseFloat(P[k?"offsetWidth":"offsetHeight"]),l.removeChild(P),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=_(a,c,d,e,!0))}return o&&(h/=100),n?-h:h},aa=R.calculateOffset=function(a,b,c){if("absolute"!==$(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=$(a,"margin"+d,c);return a["offset"+d]-(_(a,b,parseFloat(e),e.replace(w,""))||0)},ba=function(a,b){var c,d,e,f={};if(b=b||Z(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Ca===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ba===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return T||(f.opacity=U(a)),d=Pa(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Ea&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},ca=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:aa(a,g),void 0!==j[g]&&(h=new ra(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},da={width:["Left","Right"],height:["Top","Bottom"]},ea=["marginLeft","marginRight","marginTop","marginBottom"],fa=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||Z(a))[b]||0;if(a.getBBox&&Ma(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=da[b],f=e.length;for(c=c||Z(a,null);--f>-1;)d-=parseFloat($(a,"padding"+e[f],c,!0))||0,d-=parseFloat($(a,"border"+e[f]+"Width",c,!0))||0;return d},ga=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ga(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ha=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ja=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},ka={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},la=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},ma=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),ka[a])c=ka[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=la(g+1/3,d,e),c[1]=la(g,d,e),c[2]=la(g-1/3,d,e);else c=a.match(s)||ka.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=ka.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},na=function(a,b){var c,d,e,f=a.match(oa)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=ma(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},oa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in ka)oa+="|"+j+"\\b";oa=new RegExp(oa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];oa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=na(a[0],b),a[1]=na(a[1],b)),oa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var pa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(oa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(oa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},qa=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},ra=(R._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),sa=(R._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new ra(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new ra(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},R.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof sa||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ta=function(a,b,c,d,e,f){var g=new sa(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},ua=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new sa(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&oa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" "),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,oa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ha(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&oa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&T,p=ma(p,C),u=ma(u,C),y=p.length+u.length>6,y&&!T&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(T||(y=!1),C?h.appendXtra(y?"hsla(":"hsl(",p[0],ha(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ha(u[1],p[1]),"%,",!1).appendXtra("",p[2],ha(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(y?"rgba(":"rgb(",p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),oa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ha(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},va=9;for(j=sa.prototype,j.l=j.pr=0;--va>0;)j["xn"+va]=0,j["xs"+va]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new sa(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var wa=function(a,b){b=b||{},this.p=b.prefix?Y(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||pa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},xa=R._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new wa(f[d],b)},ya=R._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";xa(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(V("Error: "+b+" js file not loaded."),f)}})}};j=wa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return ua(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format($(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){xa(a,{parser:function(a,d,e,f,g,h,i){var j=new sa(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=m||n;var za,Aa="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ba=Y("transform"),Ca=W+"transform",Da=Y("transformOrigin"),Ea=null!==Y("perspective"),Fa=R.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Ea?g.defaultForce3D||"auto":!1},Ga=window.SVGElement,Ha=function(a,b,c){var d,e=N.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ia=N.documentElement,Ja=function(){var a,b,c,d=p||/Android/i.test(S)&&!window.chrome;return N.createElementNS&&!d&&(a=Ha("svg",Ia),b=Ha("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Da]="50% 50%",b.style[Ba]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Ea),Ia.removeChild(a)),d}(),Ka=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Oa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),b=ga(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Na&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},La=function(a){try{return a.getBBox()}catch(a){}},Ma=function(a){return!!(Ga&&a.getBBox&&a.getCTM&&La(a)&&(!a.parentNode||a.parentNode.getBBox&&a.parentNode.getCTM))},Na=[1,0,0,1,0,0],Oa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Fa,j=1e5,k=a.style;if(Ba?d=$(a,Ca,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,c&&Ba&&((h="none"===Z(a).display)||!a.parentNode)&&(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ia.appendChild(a)),d=$(a,Ca,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Ta(k,"display"),g&&Ia.removeChild(a)),(i.svg||a.getBBox&&Ma(a))&&(c&&-1!==(k[Ba]+"").indexOf("matrix")&&(d=k[Ba],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Na;for(e=(d||"").match(s)||[],va=e.length;--va>-1;)f=Number(e[va]),e[va]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Pa=R.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Fa:new Fa,n=m.scaleX<0,o=2e-5,p=1e5,q=Ea?parseFloat($(a,Da,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getBBox||!Ma(a)),m.svg&&(Ka(a,$(a,Da,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),za=g.useSVGTransformAttr||Ja),f=Oa(a),f!==Na){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),x=x*v+B*w,t=y*v+C*w,C=y*-w+C*v,D=z*-w+D*v,y=t),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),m.scaleX=(Math.sqrt(x*x+y*y)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+G*G)*p+.5|0)/p,m.scaleZ=(Math.sqrt(D*D+H*H)*p+.5|0)/p,m.rotationX||m.rotationY?m.skewX=0:(m.skewX=B||C?Math.atan2(B,C)*L+m.rotation:m.skewX||0,Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180))),m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Ea||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,Math.abs(l)>90&&Math.abs(l)<270&&(n?(i*=-1,l+=0>=k?180:-180,k+=0>=k?180:-180):(j*=-1,l+=0>=l?180:-180)),m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Ea&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(za&&a.style[Ba]?b.delayedCall(.001,function(){Ta(a.style,Ba)}):!za&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Qa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),va=0;4>va;va++)z=ea[va],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):_(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>va?-d.ieOffsetX:-d.ieOffsetY:2>va?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===va||2===va?1:B)))+"px"}}},Ra=R.set3DTransformRatio=R.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D;if(((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||za&&L||!Ea)return void(B||z.skewX||L?(B*=K,x=z.skewX*K,y=1e5,b=Math.cos(B)*E,e=Math.sin(B)*E,c=Math.sin(B-x)*-F,f=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(s=Math.tan(x-z.skewY*K),s=Math.sqrt(1+s*s),c*=s,f*=s,z.skewY&&(s=Math.tan(z.skewY*K),s=Math.sqrt(1+s*s),b*=s,e*=s)),L&&(H+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,I+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset,za&&(z.xPercent||z.yPercent)&&(p=this.t.getBBox(),H+=.01*z.xPercent*p.width,I+=.01*z.yPercent*p.height),p=1e-6,p>H&&H>-p&&(H=0),p>I&&I>-p&&(I=0)),u=(b*y|0)/y+","+(e*y|0)/y+","+(c*y|0)/y+","+(f*y|0)/y+","+H+","+I+")",L&&za?this.t.setAttribute("transform","matrix("+u):A[Ba]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ba]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(p=1e-4,p>E&&E>-p&&(E=G=2e-5),p>F&&F>-p&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||z.skewX)B*=K,q=b=Math.cos(B),r=e=Math.sin(B),z.skewX&&(B-=z.skewX*K,q=Math.cos(B),r=Math.sin(B),"simple"===z.skewType&&(s=Math.tan((z.skewX-z.skewY)*K),s=Math.sqrt(1+s*s),q*=s,r*=s,z.skewY&&(s=Math.tan(z.skewY*K),s=Math.sqrt(1+s*s),b*=s,e*=s))),c=-r,f=q;else{if(!(D||C||1!==G||M||L))return void(A[Ba]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));b=f=1,c=e=0}j=1,d=g=h=i=k=l=0,m=M?-1/M:0,o=z.zOrigin,p=1e-6,v=",",w="0",B=D*K,B&&(q=Math.cos(B),r=Math.sin(B),h=-r,k=m*-r,d=b*r,g=e*r,j=q,m*=q,b*=q,e*=q),B=C*K,B&&(q=Math.cos(B),r=Math.sin(B),s=c*q+d*r,t=f*q+g*r,i=j*r,l=m*r,d=c*-r+d*q,g=f*-r+g*q,j*=q,m*=q,c=s,f=t),1!==G&&(d*=G,g*=G,j*=G,m*=G),1!==F&&(c*=F,f*=F,i*=F,l*=F),1!==E&&(b*=E,e*=E,h*=E,k*=E),(o||L)&&(o&&(H+=d*-o,I+=g*-o,J+=j*-o+o),L&&(H+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,I+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset),p>H&&H>-p&&(H=w),p>I&&I>-p&&(I=w),p>J&&J>-p&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(p>b&&b>-p?w:b)+v+(p>e&&e>-p?w:e)+v+(p>h&&h>-p?w:h),u+=v+(p>k&&k>-p?w:k)+v+(p>c&&c>-p?w:c)+v+(p>f&&f>-p?w:f),C||D||1!==G?(u+=v+(p>i&&i>-p?w:i)+v+(p>l&&l>-p?w:l)+v+(p>d&&d>-p?w:d),u+=v+(p>g&&g>-p?w:g)+v+(p>j&&j>-p?w:j)+v+(p>m&&m>-p?w:m)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ba]=u};j=Fa.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,xa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j;"function"==typeof i[c]&&(j=i[c],i[c]=b);var k,l,m,n,o,p,s,t,u,v=a._gsTransform,w=a.style,x=1e-6,y=Aa.length,z=i,A={},B="transformOrigin",C=Pa(a,e,!0,z.parseTransform),D=z.transform&&("function"==typeof z.transform?z.transform(r,q):z.transform);if(d._transform=C,D&&"string"==typeof D&&Ba)l=P.style,l[Ba]=D,l.display="block",l.position="absolute",N.body.appendChild(P),k=Pa(P,null,!1),C.svg&&(p=C.xOrigin,s=C.yOrigin,k.x-=C.xOffset,k.y-=C.yOffset,(z.transformOrigin||z.svgOrigin)&&(D={},Ka(a,ga(z.transformOrigin),D,z.svgOrigin,z.smoothOrigin,!0),p=D.xOrigin,s=D.yOrigin,k.x-=D.xOffset-C.xOffset,k.y-=D.yOffset-C.yOffset),(p||s)&&(t=Oa(P,!0),k.x-=p-(p*t[0]+s*t[2]),k.y-=s-(p*t[1]+s*t[3]))),N.body.removeChild(P),k.perspective||(k.perspective=C.perspective),null!=z.xPercent&&(k.xPercent=ia(z.xPercent,C.xPercent)),null!=z.yPercent&&(k.yPercent=ia(z.yPercent,C.yPercent));else if("object"==typeof z){if(k={scaleX:ia(null!=z.scaleX?z.scaleX:z.scale,C.scaleX),scaleY:ia(null!=z.scaleY?z.scaleY:z.scale,C.scaleY),scaleZ:ia(z.scaleZ,C.scaleZ),x:ia(z.x,C.x),y:ia(z.y,C.y),z:ia(z.z,C.z),xPercent:ia(z.xPercent,C.xPercent),yPercent:ia(z.yPercent,C.yPercent),perspective:ia(z.transformPerspective,C.perspective)},o=z.directionalRotation,null!=o)if("object"==typeof o)for(l in o)z[l]=o[l];else z.rotation=o;"string"==typeof z.x&&-1!==z.x.indexOf("%")&&(k.x=0,k.xPercent=ia(z.x,C.xPercent)),"string"==typeof z.y&&-1!==z.y.indexOf("%")&&(k.y=0,k.yPercent=ia(z.y,C.yPercent)),k.rotation=ja("rotation"in z?z.rotation:"shortRotation"in z?z.shortRotation+"_short":"rotationZ"in z?z.rotationZ:C.rotation-C.skewY,C.rotation-C.skewY,"rotation",A),Ea&&(k.rotationX=ja("rotationX"in z?z.rotationX:"shortRotationX"in z?z.shortRotationX+"_short":C.rotationX||0,C.rotationX,"rotationX",A),k.rotationY=ja("rotationY"in z?z.rotationY:"shortRotationY"in z?z.shortRotationY+"_short":C.rotationY||0,C.rotationY,"rotationY",A)),k.skewX=ja(z.skewX,C.skewX-C.skewY),(k.skewY=ja(z.skewY,C.skewY))&&(k.skewX+=k.skewY,k.rotation+=k.skewY)}for(Ea&&null!=z.force3D&&(C.force3D=z.force3D,n=!0),C.skewType=z.skewType||C.skewType||g.defaultSkewType,m=C.force3D||C.z||C.rotationX||C.rotationY||k.z||k.rotationX||k.rotationY||k.perspective,m||null==z.scale||(k.scaleZ=1);--y>-1;)u=Aa[y],D=k[u]-C[u],(D>x||-x>D||null!=z[u]||null!=M[u])&&(n=!0,
f=new sa(C,u,C[u],D,f),u in A&&(f.e=A[u]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return D=z.transformOrigin,C.svg&&(D||z.svgOrigin)&&(p=C.xOffset,s=C.yOffset,Ka(a,ga(D),k,z.svgOrigin,z.smoothOrigin),f=ta(C,"xOrigin",(v?C:k).xOrigin,k.xOrigin,f,B),f=ta(C,"yOrigin",(v?C:k).yOrigin,k.yOrigin,f,B),(p!==C.xOffset||s!==C.yOffset)&&(f=ta(C,"xOffset",v?p:C.xOffset,C.xOffset,f,B),f=ta(C,"yOffset",v?s:C.yOffset,C.yOffset,f,B)),D=za?null:"0px 0px"),(D||Ea&&m&&C.zOrigin)&&(Ba?(n=!0,u=Da,D=(D||$(a,u,e,!1,"50% 50%"))+"",f=new sa(w,u,0,0,f,-1,B),f.b=w[u],f.plugin=h,Ea?(l=C.zOrigin,D=D.split(" "),C.zOrigin=(D.length>2&&(0===l||"0px"!==D[2])?parseFloat(D[2]):l)||0,f.xs0=f.e=D[0]+" "+(D[1]||"50%")+" 0px",f=new sa(C,"zOrigin",0,0,f,-1,f.n),f.b=l,f.xs0=f.e=C.zOrigin):f.xs0=f.e=D):ga(D+"",C)),n&&(d._transformType=C.svg&&za||!m&&3!==this._transformType?2:3),j&&(i[c]=j),f},prefix:!0}),xa("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),xa("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Y(y[j])),m=l=$(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=_(a,"borderLeft",o,t),w=_(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=_(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=ua(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:pa("0px 0px 0px 0px",!1,!0)}),xa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return ua(a.style,c,this.format($(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:pa("0px 0px",!1,!0)}),xa("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||Z(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=$(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),Q.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-Q.width:a.offsetHeight-Q.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ga}),xa("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ga(-1===a.indexOf(" ")?a+" "+a:a)}}),xa("perspective",{defaultValue:"0px",prefix:!0}),xa("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),xa("transformStyle",{prefix:!0}),xa("backfaceVisibility",{prefix:!0}),xa("userSelect",{prefix:!0}),xa("margin",{parser:qa("marginTop,marginRight,marginBottom,marginLeft")}),xa("padding",{parser:qa("paddingTop,paddingRight,paddingBottom,paddingLeft")}),xa("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format($(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),xa("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),xa("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),xa("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=$(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/_(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+$(a,"borderTopStyle",e,!1,"solid")+" "+$(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(oa)||["#000"])[0]}}),xa("borderWidth",{parser:qa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),xa("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new sa(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Sa=function(a){var b,c=this.t,d=c.filter||$(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!$(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};xa("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat($(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===$(a,"visibility",e)&&0!==b&&(h=0),T?f=new sa(i,"opacity",h,b-h,f):(f=new sa(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Sa),j&&(f=new sa(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Ta=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Ua=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Ta(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};xa("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new sa(a,d,0,0,g,2),g.setRatio=Ua,g.pr=-11,c=!0,g.b=o,k=ba(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=ca(a,k,ba(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Va=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Da:i[c].p),Ta(g,c);e&&(Ta(g,Ba),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(xa("clearProps",{parser:function(a,b,d,e,f){return f=new sa(a,d,0,0,f,2),f.setRatio=Va,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),va=j.length;va--;)ya(j[va]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=Z(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=$(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ba(a,e),A.cssText=t+";"+b,n=ca(a,n,ba(a)).difs,!T&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ba?m&&(l=!0,""===A.zIndex&&(w=$(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new sa(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ba?Ra:Qa,x.data=this._transform||Pa(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b)n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=$(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=ma(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=ua(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=ua(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=fa(a,g,e),o="px"):"left"===g||"top"===g?(j=aa(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=_(a,g,j,o),"%"===p?(j/=_(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=_(a,g,1,p):"px"!==p&&(l=_(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new sa(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):V("invalid "+g+" tween value: "+b[g]):(c=new sa(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Pa(this._target,e,!0),this._transformType=this._transform.svg&&za||!a&&3!==this._transformType?2:3};var Wa=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new sa(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Wa,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Xa=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Xa(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ba(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Xa(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Xa(a,k,m),i.render(c,!0,!0),Xa(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=ca(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.m=Math.round),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=Math.round;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._mod(h):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.0",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.0",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},q.config=b.config=function(a){return new b(a)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!d.TweenLite){var e,f,g,h,i,j=function(a){var b,c=a.split("."),e=d;for(b=0;b<c.length;b++)e[c[b]]=e=e[c[b]]||{};return e},k=j("com.greensock"),l=1e-10,m=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},n=function(){},o=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),p={},q=function(e,f,g,h){this.sc=p[e]?p[e].sc:[],p[e]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(k){for(var l,m,n,o,r,s=f.length,t=s;--s>-1;)(l=p[f[s]]||new q(f[s],[])).gsClass?(i[s]=l.gsClass,t--):k&&l.sc.push(this);if(0===t&&g){if(m=("com.greensock."+e).split("."),n=m.pop(),o=j(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(d[n]=c[n]=o,r="undefined"!=typeof module&&module.exports,!r&&"function"==typeof define&&define.amd)define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+e.split(".").pop(),[],function(){return o});else if(r)if(e===b){module.exports=c[b]=o;for(s in c)o[s]=c[s]}else c[b]&&(c[b][n]=o);for(s=0;s<this.sc.length;s++)this.sc[s].check()}},this.check(!0)},r=a._gsDefine=function(a,b,c,d){return new q(a,b,c,d)},s=k._class=function(a,b,c){return b=b||function(){},r(a,[],function(){return b},c),b};r.globals=d;var t=[0,0,1,1],u=s("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?t.concat(b):t},!0),v=u.map={},w=u.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,l=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?s("easing."+f,null,!0):k.easing[f]||{},g=l.length;--g>-1;)h=l[g],v[f+"."+h]=v[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(g=u.prototype,g._calcEnd=!1,g.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},e=["Linear","Quad","Cubic","Quart","Quint,Strong"],f=e.length;--f>-1;)g=e[f]+",Power"+f,w(new u(null,null,1,f),g,"easeOut",!0),w(new u(null,null,2,f),g,"easeIn"+(0===f?",easeNone":"")),w(new u(null,null,3,f),g,"easeInOut");v.linear=k.easing.Linear.easeIn,v.swing=k.easing.Quad.easeInOut;var x=s("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});g=x.prototype,g.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,j=this._listeners[a],k=0;for(this!==h||i||h.wake(),null==j&&(this._listeners[a]=j=[]),g=j.length;--g>-1;)f=j[g],f.c===b&&f.s===c?j.splice(g,1):0===k&&f.pr<e&&(k=g+1);j.splice(k,0,{c:b,s:c,up:d,pr:e})},g.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},g.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var y=a.requestAnimationFrame,z=a.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},B=A();for(e=["ms","moz","webkit","o"],f=e.length;--f>-1&&!y;)y=a[e[f]+"RequestAnimationFrame"],z=a[e[f]+"CancelAnimationFrame"]||a[e[f]+"CancelRequestAnimationFrame"];s("Ticker",function(a,b){var c,d,e,f,g,j=this,k=A(),m=b!==!1&&y?"auto":!1,o=500,p=33,q="tick",r=function(a){var b,h,i=A()-B;i>o&&(k+=i-p),B+=i,j.time=(B-k)/1e3,b=j.time-g,(!c||b>0||a===!0)&&(j.frame++,g+=b+(b>=f?.004:f-b),h=!0),a!==!0&&(e=d(r)),h&&j.dispatchEvent(q)};x.call(j),j.time=j.frame=0,j.tick=function(){r(!0)},j.lagSmoothing=function(a,b){o=a||1/l,p=Math.min(b,o,0)},j.sleep=function(){null!=e&&(m&&z?z(e):clearTimeout(e),d=n,e=null,j===h&&(i=!1))},j.wake=function(a){null!==e?j.sleep():a?k+=-B+(B=A()):j.frame>10&&(B=A()-o+5),d=0===c?n:m&&y?y:function(a){return setTimeout(a,1e3*(g-j.time)+1|0)},j===h&&(i=!0),r(2)},j.fps=function(a){return arguments.length?(c=a,f=1/(c||60),g=this.time+f,void j.wake()):c},j.useRAF=function(a){return arguments.length?(j.sleep(),m=a,void j.fps(c)):m},j.fps(a),setTimeout(function(){"auto"===m&&j.frame<5&&"hidden"!==document.visibilityState&&j.useRAF(!1)},1500)}),g=k.Ticker.prototype=new k.events.EventDispatcher,g.constructor=k.Ticker;var C=s("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,V){i||h.wake();var c=this.vars.useFrames?U:V;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});h=C.ticker=new k.Ticker,g=C.prototype,g._dirty=g._gc=g._initted=g._paused=!1,g._totalTime=g._time=0,g._rawPrevTime=-1,g._next=g._last=g._onUpdate=g._timeline=g.timeline=null,g._paused=!1;var D=function(){i&&A()-B>2e3&&h.wake(),setTimeout(D,2e3)};D(),g.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},g.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},g.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},g.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},g.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},g.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},g.render=function(a,b,c){},g.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},g.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime())>=c&&a<c+this.totalDuration()/this._timeScale},g._enabled=function(a,b){return i||h.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},g._kill=function(a,b){return this._enabled(!1,!1)},g.kill=function(a,b){return this._kill(a,b),this},g._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},g._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},g._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},g.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=o(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},g.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},g.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},g.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},g.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},g.totalTime=function(a,b,c){if(i||h.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(I.length&&X(),this.render(a,b,!1),I.length&&X())}return this},g.progress=g.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},g.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},g.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},g.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||l,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},g.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},g.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(i||a||h.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var E=s("core.SimpleTimeline",function(a){C.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});g=E.prototype=new C,g.constructor=E,g.kill()._gc=!1,g._first=g._last=g._recent=null,g._sortChildren=!1,g.add=g.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},g._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},g.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},g.rawTime=function(){return i||h.wake(),this._totalTime};var F=s("TweenLite",function(b,c,d){if(C.call(this,c,d),this.render=F.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:F.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?T[F.defaultOverwrite]:"number"==typeof i?i>>0:T[i],(h||b instanceof Array||b.push&&o(b))&&"number"!=typeof b[0])for(this._targets=g=m(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(m(f))):(this._siblings[e]=Y(f,this,!1),1===i&&this._siblings[e].length>1&&$(f,this,null,1,this._siblings[e])):(f=g[e--]=F.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Y(b,this,!1),1===i&&this._siblings.length>1&&$(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-l,this.render(Math.min(0,-this._delay)))},!0),G=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType);
},H=function(a,b){var c,d={};for(c in a)S[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!P[c]||P[c]&&P[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};g=F.prototype=new C,g.constructor=F,g.kill()._gc=!1,g.ratio=0,g._firstPT=g._targets=g._overwrittenProps=g._startAt=null,g._notifyPluginsOfEnabled=g._lazy=!1,F.version="1.19.0",F.defaultEase=g._ease=new u(null,null,1,1),F.defaultOverwrite="auto",F.ticker=h,F.autoSleep=120,F.lagSmoothing=function(a,b){h.lagSmoothing(a,b)},F.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(F.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)};var I=[],J={},K=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},M=function(a,b,c,d){var e,f,g,h,i,j,k,l=[a,b],m=0,n="",o=0;for(l.start=a,c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(K)||[],f=b.match(K)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=L,l},N=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k,l="get"===c?a[b]:c,m=typeof a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:l,f:"function"===m,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-l||0};return"number"!==m&&("function"===m&&"get"===c&&(k=b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),o.s=l=g?a[k](g):a[k]()),"string"==typeof l&&(g||isNaN(l))?(o.fp=g,j=M(l,d,h||F.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):n||(o.s=parseFloat(l),o.c=parseFloat(d)-o.s||0)),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},O=F._internals={isArray:o,isSelector:G,lazyTweens:I,blobDif:M},P=F._plugins={},Q=O.tweenLookup={},R=0,S=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},T={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},U=C._rootFramesTimeline=new E,V=C._rootTimeline=new E,W=30,X=O.lazyRender=function(){var a,b=I.length;for(J={};--b>-1;)a=I[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);I.length=0};V._startTime=h.time,U._startTime=h.frame,V._active=U._active=!0,setTimeout(X,1),C._updateRoot=F.render=function(){var a,b,c;if(I.length&&X(),V.render((h.time-V._startTime)*V._timeScale,!1,!1),U.render((h.frame-U._startTime)*U._timeScale,!1,!1),I.length&&X(),h.frame>=W){W=h.frame+(parseInt(F.autoSleep,10)||120);for(c in Q){for(b=Q[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete Q[c]}if(c=V._first,(!c||c._paused)&&F.autoSleep&&!U._first&&1===h._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||h.sleep()}}},h.addEventListener("tick",C._updateRoot);var Y=function(a,b,c){var d,e,f=a._gsTweenID;if(Q[f||(a._gsTweenID=f="t"+R++)]||(Q[f]={target:a,tweens:[]}),b&&(d=Q[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return Q[f].tweens},Z=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=F.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},$=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+l,m=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||_(b,0,o),0===_(h,j,o)&&(m[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(m[n++]=h)));for(f=n;--f>-1;)if(h=m[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!Z(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},_=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*l>f-b?l:(f+=a.totalDuration()/a._timeScale/e)>b+l?0:f-b-l};g._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,this._startAt=F.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)S[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=F.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof u?k:"function"==typeof k?new u(k,g.easeParams):v[k]||F.defaultEase:F.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&F._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},g._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;J[b._gsTweenID]&&X(),this.vars.css||b.style&&b!==a&&b.nodeType&&P.css&&this.vars.autoCSS!==!1&&H(this.vars,b);for(g in this.vars)if(l=this.vars[g],S[g])l&&(l instanceof Array||l.push&&o(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(P[g]&&(j=new P[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=N.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&$(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(J[b._gsTweenID]=!0),i)},g.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===l&&"isPause"!==this.data)&&j!==a&&(c=!0,j>l&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:l);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==l||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:l)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,m=this._easeType,n=this._easePower;(1===m||3===m&&k>=.5)&&(k=1-k),3===m&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===m?this.ratio=1-k:2===m?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,I.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===l&&g!==l&&(this._rawPrevTime=0))}},g._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:F.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((o(b)||G(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(F.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!Z(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},g.invalidate=function(){return this._notifyPluginsOfEnabled&&F._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],C.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-l,this.render(Math.min(0,-this._delay))),this},g._enabled=function(a,b){if(i||h.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Y(d[c],this,!0);else this._siblings=Y(this.target,this,!0)}return C.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?F._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},F.to=function(a,b,c){return new F(a,b,c)},F.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new F(a,b,c)},F.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new F(a,b,d)},F.delayedCall=function(a,b,c,d,e){return new F(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},F.set=function(a,b){return new F(a,0,b)},F.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:F.selector(a)||a;var c,d,e,f;if((o(a)||G(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(F.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Y(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},F.killTweensOf=F.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=F.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var aa=s("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=aa.prototype},!0);if(g=aa.prototype,aa.version="1.19.0",aa.API=2,g._firstPT=null,g._addTween=N,g.setRatio=L,g._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},g._mod=g._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},F._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},aa.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===aa.API&&(P[(new a[b])._propName]=a[b]);return!0},r.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=s("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){aa.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new aa(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,aa.activate([g]),g},e=a._gsQueue){for(f=0;f<e.length;f++)e[f]();for(g in p)p[g].func||a.console.log("GSAP encountered missing dependency: "+g)}i=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");

/*!
 * VERSION: 0.1.1
 * DATE: 2016-08-16
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * DrawSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";function a(a,b,c,d,e,f){return c=(parseFloat(c)-parseFloat(a))*e,d=(parseFloat(d)-parseFloat(b))*f,Math.sqrt(c*c+d*d)}function b(a){return"string"!=typeof a&&a.nodeType||(a=_gsScope.TweenLite.selector(a),a.length&&(a=a[0])),a}function c(a,b,c){var d,e,f=a.indexOf(" ");return-1===f?(d=void 0!==c?c+"":a,e=a):(d=a.substr(0,f),e=a.substr(f+1)),d=-1!==d.indexOf("%")?parseFloat(d)/100*b:parseFloat(d),e=-1!==e.indexOf("%")?parseFloat(e)/100*b:parseFloat(e),d>e?[e,d]:[d,e]}function d(c){if(!c)return 0;c=b(c);var d,e,f,g,i,j,k,l=c.tagName.toLowerCase(),m=1,n=1;if("non-scaling-stroke"===c.getAttribute("vector-effect")&&(n=c.getScreenCTM(),m=n.a,n=n.d),"path"===l){g=c.style.strokeDasharray,c.style.strokeDasharray="none",d=c.getTotalLength()||0,m!==n&&console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),d*=(m+n)/2;try{e=c.getBBox()}catch(o){}c.style.strokeDasharray=g}else if("rect"===l)d=2*c.getAttribute("width")*m+2*c.getAttribute("height")*n;else if("line"===l)d=a(c.getAttribute("x1"),c.getAttribute("y1"),c.getAttribute("x2"),c.getAttribute("y2"),m,n);else if("polyline"===l||"polygon"===l)for(f=c.getAttribute("points").match(h)||[],"polygon"===l&&f.push(f[0],f[1]),d=0,i=2;i<f.length;i+=2)d+=a(f[i-2],f[i-1],f[i],f[i+1],m,n)||0;else("circle"===l||"ellipse"===l)&&(j=parseFloat(c.getAttribute("circle"===l?"r":"rx"))*m,k=parseFloat(c.getAttribute("circle"===l?"r":"ry"))*n,d=Math.PI*(3*(j+k)-Math.sqrt((3*j+k)*(j+3*k))));return d||0}function e(a,c){if(!a)return[0,0];a=b(a),c=c||d(a)+1;var e=g(a),f=e.strokeDasharray||"",h=parseFloat(e.strokeDashoffset),i=f.indexOf(",");return 0>i&&(i=f.indexOf(" ")),f=0>i?c:parseFloat(f.substr(0,i))||1e-5,f>c&&(f=c),[Math.max(0,-h),Math.max(0,f-h)]}var f,g=document.defaultView?document.defaultView.getComputedStyle:function(){},h=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;f=_gsScope._gsDefine.plugin({propName:"drawSVG",API:2,version:"0.1.1",global:!0,overwriteProps:["drawSVG"],init:function(a,b,f,g){if(!a.getBBox)return!1;var h,i,j,k=d(a)+1;return this._style=a.style,"function"==typeof b&&(b=b(g,a)),b===!0||"true"===b?b="0 100%":b?-1===(b+"").indexOf(" ")&&(b="0 "+b):b="0 0",h=e(a,k),i=c(b,k,h[0]),this._length=k+10,0===h[0]&&0===i[0]?(j=Math.max(1e-5,i[1]-k),this._dash=k+j,this._offset=k-h[1]+j,this._addTween(this,"_offset",this._offset,k-i[1]+j,"drawSVG")):(this._dash=h[1]-h[0]||1e-6,this._offset=-h[0],this._addTween(this,"_dash",this._dash,i[1]-i[0]||1e-5,"drawSVG"),this._addTween(this,"_offset",this._offset,-i[0],"drawSVG")),!0},set:function(a){this._firstPT&&(this._super.setRatio.call(this,a),this._style.strokeDashoffset=this._offset,1===a||0===a?this._style.strokeDasharray=this._offset<.001&&this._length-this._dash<=10?"none":this._offset===this._dash?"0px, 999999px":this._dash+"px,"+this._length+"px":this._style.strokeDasharray=this._dash+"px,"+this._length+"px")}}),f.getLength=d,f.getPosition=e}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())}("DrawSVGPlugin");

/*!
 * VERSION: 0.5.2
 * DATE: 2016-06-22
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var a=function(b){var c=b.nodeType,d="";if(1===c||9===c||11===c){if("string"==typeof b.textContent)return b.textContent;for(b=b.firstChild;b;b=b.nextSibling)d+=a(b)}else if(3===c||4===c)return b.nodeValue;return d},b=_gsScope._gsDefine.plugin({propName:"text",API:2,version:"0.5.2",init:function(b,c,d,e){var f,g=b.nodeName.toUpperCase();if("function"==typeof c&&(c=c(e,b)),this._svg=b.getBBox&&("TEXT"===g||"TSPAN"===g),!("innerHTML"in b||this._svg))return!1;if(this._target=b,"object"!=typeof c&&(c={value:c}),void 0===c.value)return this._text=this._original=[""],!0;for(this._delimiter=c.delimiter||"",this._original=a(b).replace(/\s+/g," ").split(this._delimiter),this._text=c.value.replace(/\s+/g," ").split(this._delimiter),this._runBackwards=d.vars.runBackwards===!0,this._runBackwards&&(g=this._original,this._original=this._text,this._text=g),"string"==typeof c.newClass&&(this._newClass=c.newClass,this._hasClass=!0),"string"==typeof c.oldClass&&(this._oldClass=c.oldClass,this._hasClass=!0),g=this._original.length-this._text.length,f=0>g?this._original:this._text,this._fillChar=c.fillChar||(c.padSpace?"&nbsp;":""),0>g&&(g=-g);--g>-1;)f.push(this._fillChar);return!0},set:function(a){a>1?a=1:0>a&&(a=0),this._runBackwards&&(a=1-a);var b,c,d,e=this._text.length,f=a*e+.5|0;this._hasClass?(b=this._newClass&&0!==f,c=this._oldClass&&f!==e,d=(b?"<span class='"+this._newClass+"'>":"")+this._text.slice(0,f).join(this._delimiter)+(b?"</span>":"")+(c?"<span class='"+this._oldClass+"'>":"")+this._delimiter+this._original.slice(f).join(this._delimiter)+(c?"</span>":"")):d=this._text.slice(0,f).join(this._delimiter)+this._delimiter+this._original.slice(f).join(this._delimiter),this._svg?this._target.textContent=d:this._target.innerHTML="&nbsp;"===this._fillChar&&-1!==d.indexOf("  ")?d.split("  ").join("&nbsp;&nbsp;"):d}}),c=b.prototype;c._newClass=c._oldClass=c._delimiter=""}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();

/*!
 * VERSION: 0.14.8
 * DATE: 2016-07-18
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("utils.Draggable",["events.EventDispatcher","TweenLite","plugins.CSSPlugin"],function(a,b,c){var d,e,f,g,h,i,j,k,l,m={css:{}},n={css:{}},o={css:{}},p={css:{}},q=_gsScope._gsDefine.globals,r={},s=document,t=s.documentElement||{},u=function(a){return s.createElementNS?s.createElementNS("http://www.w3.org/1999/xhtml",a):s.createElement(a)},v=u("div"),w=[],x=function(){return!1},y=180/Math.PI,z=999999999999999,A=Date.now||function(){return(new Date).getTime()},B=!(s.addEventListener||!s.all),C=s.createElement("div"),D=[],E={},F=0,G=/^(?:a|input|textarea|button|select)$/i,H=0,I=-1!==navigator.userAgent.toLowerCase().indexOf("android"),J=0,K={},L={},M=function(a){if("string"==typeof a&&(a=b.selector(a)),!a||a.nodeType)return[a];var c,d=[],e=a.length;for(c=0;c!==e;d.push(a[c++]));return d},N=function(a){var b,c={};for(b in a)c[b]=a[b];return c},O=function(){for(var a=D.length;--a>-1;)D[a]()},P=function(a){D.push(a),1===D.length&&b.ticker.addEventListener("tick",O,this,!1,1)},Q=function(a){for(var c=D.length;--c>-1;)D[c]===a&&D.splice(c,1);b.to(R,0,{overwrite:"all",delay:15,onComplete:R})},R=function(){D.length||b.ticker.removeEventListener("tick",O)},S=function(a,b){var c;for(c in b)void 0===a[c]&&(a[c]=b[c]);return a},T=function(){return null!=window.pageYOffset?window.pageYOffset:null!=s.scrollTop?s.scrollTop:t.scrollTop||s.body.scrollTop||0},U=function(){return null!=window.pageXOffset?window.pageXOffset:null!=s.scrollLeft?s.scrollLeft:t.scrollLeft||s.body.scrollLeft||0},V=function(a,b){Ia(a,"scroll",b),X(a.parentNode)||V(a.parentNode,b)},W=function(a,b){Ja(a,"scroll",b),X(a.parentNode)||W(a.parentNode,b)},X=function(a){return!(a&&a!==t&&a!==s&&a!==s.body&&a!==window&&a.nodeType&&a.parentNode)},Y=function(a,b){var c="x"===b?"Width":"Height",d="scroll"+c,e="client"+c,f=s.body;return Math.max(0,X(a)?Math.max(t[d],f[d])-(window["inner"+c]||t[e]||f[e]):a[d]-a[e])},Z=function(a){var b=X(a),c=Y(a,"x"),d=Y(a,"y");b?a=L:Z(a.parentNode),a._gsMaxScrollX=c,a._gsMaxScrollY=d,a._gsScrollX=a.scrollLeft||0,a._gsScrollY=a.scrollTop||0},$=function(a,b){return a=a||window.event,r.pageX=a.clientX+s.body.scrollLeft+t.scrollLeft,r.pageY=a.clientY+s.body.scrollTop+t.scrollTop,b&&(a.returnValue=!1),r},_=function(a){return a?("string"==typeof a&&(a=b.selector(a)),a.length&&a!==window&&a[0]&&a[0].style&&!a.nodeType&&(a=a[0]),a===window||a.nodeType&&a.style?a:null):a},aa=function(a,b){var c,e,f,g=a.style;if(void 0===g[b]){for(f=["O","Moz","ms","Ms","Webkit"],e=5,c=b.charAt(0).toUpperCase()+b.substr(1);--e>-1&&void 0===g[f[e]+c];);if(0>e)return"";d=3===e?"ms":f[e],b=d+c}return b},ba=function(a,b,c){var d=a.style;d&&(void 0===d[b]&&(b=aa(a,b)),null==c?d.removeProperty?d.removeProperty(b.replace(/([A-Z])/g,"-$1").toLowerCase()):d.removeAttribute(b):void 0!==d[b]&&(d[b]=c))},ca=s.defaultView?s.defaultView.getComputedStyle:x,da=/(?:Left|Right|Width)/i,ea=/(?:\d|\-|\+|=|#|\.)*/g,fa=function(a,b,c,d,e){if("px"===d||!d)return c;if("auto"===d||!c)return 0;var f,g=da.test(b),h=a,i=v.style,j=0>c;return j&&(c=-c),"%"===d&&-1!==b.indexOf("border")?f=c/100*(g?a.clientWidth:a.clientHeight):(i.cssText="border:0 solid red;position:"+ha(a,"position",!0)+";line-height:0;","%"!==d&&h.appendChild?i[g?"borderLeftWidth":"borderTopWidth"]=c+d:(h=a.parentNode||s.body,i[g?"width":"height"]=c+d),h.appendChild(v),f=parseFloat(v[g?"offsetWidth":"offsetHeight"]),h.removeChild(v),0!==f||e||(f=fa(a,b,c,d,!0))),j?-f:f},ga=function(a,b){if("absolute"!==ha(a,"position",!0))return 0;var c="left"===b?"Left":"Top",d=ha(a,"margin"+c,!0);return a["offset"+c]-(fa(a,b,parseFloat(d),(d+"").replace(ea,""))||0)},ha=function(a,b,c){var d,e=(a._gsTransform||{})[b];return e||0===e?e:(a.style[b]?e=a.style[b]:(d=ca(a))?(e=d.getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase()),e=e||d.length?e:d[b]):a.currentStyle&&(e=a.currentStyle[b]),"auto"!==e||"top"!==b&&"left"!==b||(e=ga(a,b)),c?e:parseFloat(e)||0)},ia=function(a,b,c){var d=a.vars,e=d[c],f=a._listeners[b];"function"==typeof e&&e.apply(d[c+"Scope"]||d.callbackScope||a,d[c+"Params"]||[a.pointerEvent]),f&&a.dispatchEvent(b)},ja=function(a,b){var c,d,e,f=_(a);return f?Da(f,b):void 0!==a.left?(e=xa(b),{left:a.left-e.x,top:a.top-e.y,width:a.width,height:a.height}):(d=a.min||a.minX||a.minRotation||0,c=a.min||a.minY||0,{left:d,top:c,width:(a.max||a.maxX||a.maxRotation||0)-d,height:(a.max||a.maxY||0)-c})},ka=function(){if(!s.createElementNS)return g=0,void(h=!1);var a,b,c,d,e=u("div"),f=s.createElementNS("http://www.w3.org/2000/svg","svg"),l=u("div"),m=e.style,n=s.body||t;s.body&&na&&(m.position="absolute",n.appendChild(l),l.appendChild(e),d=e.offsetParent,l.style[na]="rotate(1deg)",k=e.offsetParent===d,l.style.position="absolute",m.height="10px",d=e.offsetTop,l.style.border="5px solid red",j=d!==e.offsetTop,n.removeChild(l)),m=f.style,f.setAttributeNS(null,"width","400px"),f.setAttributeNS(null,"height","400px"),f.setAttributeNS(null,"viewBox","0 0 400 400"),m.display="block",m.boxSizing="border-box",m.border="0px solid red",m.transform="none",e.style.cssText="width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;",n.appendChild(e),e.appendChild(f),c=f.createSVGPoint().matrixTransform(f.getScreenCTM()),b=c.y,e.scrollTop=100,c.x=c.y=0,c=c.matrixTransform(f.getScreenCTM()),i=b-c.y<100.1?0:b-c.y-150,e.removeChild(f),n.removeChild(e),n.appendChild(f),a=f.getScreenCTM(),b=a.e,m.border="50px solid red",a=f.getScreenCTM(),0===b&&0===a.e&&0===a.f&&1===a.a?(g=1,h=!0):(g=b!==a.e?1:0,h=1!==a.a),n.removeChild(f)},la=""!==aa(v,"perspective"),ma=aa(v,"transformOrigin").replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),na=aa(v,"transform"),oa=na.replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),pa={},qa={},ra=window.SVGElement,sa=function(a){return!!(ra&&"function"==typeof a.getBBox&&a.getCTM&&(!a.parentNode||a.parentNode.getBBox&&a.parentNode.getCTM))},ta=(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent))&&parseFloat(RegExp.$1)<11,ua=[],va=[],wa=function(a){if(!a.getBoundingClientRect||!a.parentNode||!na)return{offsetTop:0,offsetLeft:0,scaleX:1,scaleY:1,offsetParent:t};if(Sa.cacheSVGData!==!1&&a._gsCache&&a._gsCache.lastUpdate===b.ticker.frame)return a._gsCache;var c,d,e,f,j,k,l,m,n,o,p,q,r=a,u=ya(a);if(u.lastUpdate=b.ticker.frame,a.getBBox&&!u.isSVGRoot){for(r=a.parentNode,c=a.getBBox();r&&"svg"!==(r.nodeName+"").toLowerCase();)r=r.parentNode;return f=wa(r),u.offsetTop=c.y*f.scaleY,u.offsetLeft=c.x*f.scaleX,u.scaleX=f.scaleX,u.scaleY=f.scaleY,u.offsetParent=r||t,u}for(e=u.offsetParent,e===s.body&&(e=t),va.length=ua.length=0;r&&(j=ha(r,na,!0),"matrix(1, 0, 0, 1, 0, 0)"!==j&&"none"!==j&&"translate3d(0px, 0px, 0px)"!==j&&(va.push(r),ua.push(r.style[na]),r.style[na]="none"),r!==e);)r=r.parentNode;for(d=e.getBoundingClientRect(),j=a.getScreenCTM(),m=a.createSVGPoint(),l=m.matrixTransform(j),m.x=m.y=10,m=m.matrixTransform(j),u.scaleX=(m.x-l.x)/10,u.scaleY=(m.y-l.y)/10,void 0===g&&ka(),u.borderBox&&!h&&a.getAttribute("width")&&(f=ca(a)||{},n=parseFloat(f.borderLeftWidth)+parseFloat(f.borderRightWidth)||0,o=parseFloat(f.borderTopWidth)+parseFloat(f.borderBottomWidth)||0,p=parseFloat(f.width)||0,q=parseFloat(f.height)||0,u.scaleX*=(p-n)/p,u.scaleY*=(q-o)/q),i?(c=a.getBoundingClientRect(),u.offsetLeft=c.left-d.left,u.offsetTop=c.top-d.top):(u.offsetLeft=l.x-d.left,u.offsetTop=l.y-d.top),u.offsetParent=e,k=va.length;--k>-1;)va[k].style[na]=ua[k];return u},xa=function(a,c){if(c=c||{},!a||a===t||!a.parentNode||a===window)return{x:0,y:0};var d=ca(a),e=ma&&d?d.getPropertyValue(ma):"50% 50%",f=e.split(" "),g=-1!==e.indexOf("left")?"0%":-1!==e.indexOf("right")?"100%":f[0],h=-1!==e.indexOf("top")?"0%":-1!==e.indexOf("bottom")?"100%":f[1];return("center"===h||null==h)&&(h="50%"),("center"===g||isNaN(parseFloat(g)))&&(g="50%"),a.getBBox&&sa(a)?(a._gsTransform||(b.set(a,{x:"+=0",overwrite:!1}),void 0===a._gsTransform.xOrigin&&console.log("Draggable requires at least GSAP 1.17.0")),e=a.getBBox(),c.x=a._gsTransform.xOrigin-e.x,c.y=a._gsTransform.yOrigin-e.y):(a.getBBox&&-1!==(g+h).indexOf("%")&&(a=a.getBBox(),a={offsetWidth:a.width,offsetHeight:a.height}),c.x=-1!==g.indexOf("%")?a.offsetWidth*parseFloat(g)/100:parseFloat(g),c.y=-1!==h.indexOf("%")?a.offsetHeight*parseFloat(h)/100:parseFloat(h)),c},ya=function(a){if(Sa.cacheSVGData!==!1&&a._gsCache&&a._gsCache.lastUpdate===b.ticker.frame)return a._gsCache;var c,d=a._gsCache=a._gsCache||{},e=ca(a),f=a.getBBox&&sa(a),g="svg"===(a.nodeName+"").toLowerCase();if(d.isSVG=f,d.isSVGRoot=g,d.borderBox="border-box"===e.boxSizing,d.computedStyle=e,g)c=a.parentNode||t,c.insertBefore(v,a),d.offsetParent=v.offsetParent||t,c.removeChild(v);else if(f){for(c=a.parentNode;c&&"svg"!==(c.nodeName+"").toLowerCase();)c=c.parentNode;d.offsetParent=c}else d.offsetParent=a.offsetParent;return d},za=function(a,b,c,d){if(a===window||!a||!a.style||!a.parentNode)return[1,0,0,1,0,0];var e,f,h,i,l,m,n,o,p,q,r,u,v,w,x=a._gsCache||ya(a),y=a.parentNode,z=y._gsCache||ya(y),A=x.computedStyle,B=x.isSVG?z.offsetParent:y.offsetParent;return e=x.isSVG&&-1!==(a.style[na]+"").indexOf("matrix")?a.style[na]:A?A.getPropertyValue(oa):a.currentStyle?a.currentStyle[na]:"1,0,0,1,0,0",a.getBBox&&-1!==(a.getAttribute("transform")+"").indexOf("matrix")&&(e=a.getAttribute("transform")),e=(e+"").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g)||[1,0,0,1,0,0],e.length>6&&(e=[e[0],e[1],e[4],e[5],e[12],e[13]]),d?e[4]=e[5]=0:x.isSVG&&(l=a._gsTransform)&&(l.xOrigin||l.yOrigin)&&(e[0]=parseFloat(e[0]),e[1]=parseFloat(e[1]),e[2]=parseFloat(e[2]),e[3]=parseFloat(e[3]),e[4]=parseFloat(e[4])-(l.xOrigin-(l.xOrigin*e[0]+l.yOrigin*e[2])),e[5]=parseFloat(e[5])-(l.yOrigin-(l.xOrigin*e[1]+l.yOrigin*e[3]))),b&&(void 0===g&&ka(),h=x.isSVG||x.isSVGRoot?wa(a):a,x.isSVG?(i=a.getBBox(),q=z.isSVGRoot?{x:0,y:0}:y.getBBox(),h={offsetLeft:i.x-q.x,offsetTop:i.y-q.y,offsetParent:x.offsetParent}):x.isSVGRoot?(r=parseInt(A.borderTopWidth,10)||0,u=parseInt(A.borderLeftWidth,10)||0,v=(e[0]-g)*u+e[2]*r,w=e[1]*u+(e[3]-g)*r,m=b.x,n=b.y,o=m-(m*e[0]+n*e[2]),p=n-(m*e[1]+n*e[3]),e[4]=parseFloat(e[4])+o,e[5]=parseFloat(e[5])+p,b.x-=o,b.y-=p,m=h.scaleX,n=h.scaleY,b.x*=m,b.y*=n,e[0]*=m,e[1]*=n,e[2]*=m,e[3]*=n,ta||(b.x+=v,b.y+=w)):!j&&a.offsetParent&&(b.x+=parseInt(ha(a.offsetParent,"borderLeftWidth"),10)||0,b.y+=parseInt(ha(a.offsetParent,"borderTopWidth"),10)||0),f=y===t||y===s.body,e[4]=Number(e[4])+b.x+(h.offsetLeft||0)-c.x-(f?0:y.scrollLeft||0),e[5]=Number(e[5])+b.y+(h.offsetTop||0)-c.y-(f?0:y.scrollTop||0),y&&"fixed"===ha(a,"position",A)&&(e[4]+=U(),e[5]+=T()),!y||y===t||B!==h.offsetParent||z.isSVG||k&&"100100"!==za(y).join("")||(h=z.isSVGRoot?wa(y):y,e[4]-=h.offsetLeft||0,e[5]-=h.offsetTop||0,j||!z.offsetParent||x.isSVG||x.isSVGRoot||(e[4]-=parseInt(ha(z.offsetParent,"borderLeftWidth"),10)||0,e[5]-=parseInt(ha(z.offsetParent,"borderTopWidth"),10)||0))),e},Aa=function(a,b){if(!a||a===window||!a.parentNode)return[1,0,0,1,0,0];for(var c,d,e,f,g,h,i,j,k=xa(a,pa),l=xa(a.parentNode,qa),m=za(a,k,l);(a=a.parentNode)&&a.parentNode&&a!==t;)k=l,l=xa(a.parentNode,k===pa?qa:pa),i=za(a,k,l),c=m[0],d=m[1],e=m[2],f=m[3],g=m[4],h=m[5],m[0]=c*i[0]+d*i[2],m[1]=c*i[1]+d*i[3],m[2]=e*i[0]+f*i[2],m[3]=e*i[1]+f*i[3],m[4]=g*i[0]+h*i[2]+i[4],m[5]=g*i[1]+h*i[3]+i[5];return b&&(c=m[0],d=m[1],e=m[2],f=m[3],g=m[4],h=m[5],j=c*f-d*e,m[0]=f/j,m[1]=-d/j,m[2]=-e/j,m[3]=c/j,m[4]=(e*h-f*g)/j,m[5]=-(c*h-d*g)/j),m},Ba=function(a,b,c,d,e){a=_(a);var f=Aa(a,!1,e),g=b.x,h=b.y;return c&&(xa(a,b),g-=b.x,h-=b.y),d=d===!0?b:d||{},d.x=g*f[0]+h*f[2]+f[4],d.y=g*f[1]+h*f[3]+f[5],d},Ca=function(a,b,c){var d=a.x*b[0]+a.y*b[2]+b[4],e=a.x*b[1]+a.y*b[3]+b[5];return a.x=d*c[0]+e*c[2]+c[4],a.y=d*c[1]+e*c[3]+c[5],a},Da=function(a,b,c){if(!(a=_(a)))return null;b=_(b);var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,u,v,w,x,y,z,A,C=a.getBBox&&sa(a);if(a===window)g=T(),e=U(),f=e+(t.clientWidth||a.innerWidth||s.body.clientWidth||0),h=g+((a.innerHeight||0)-20<t.clientHeight?t.clientHeight:a.innerHeight||s.body.clientHeight||0);else{if(void 0===b||b===window)return a.getBoundingClientRect();d=xa(a),e=-d.x,g=-d.y,C?(o=a.getBBox(),p=o.width,q=o.height):"svg"!==(a.nodeName+"").toLowerCase()&&a.offsetWidth?(p=a.offsetWidth,q=a.offsetHeight):(z=ca(a),p=parseFloat(z.width),q=parseFloat(z.height)),f=e+p,h=g+q,"svg"!==a.nodeName.toLowerCase()||B||(r=wa(a),A=r.computedStyle||{},w=(a.getAttribute("viewBox")||"0 0").split(" "),x=parseFloat(w[0]),y=parseFloat(w[1]),u=parseFloat(A.borderLeftWidth)||0,v=parseFloat(A.borderTopWidth)||0,f-=p-(p-u)/r.scaleX-x,h-=q-(q-v)/r.scaleY-y,e-=u/r.scaleX-x,g-=v/r.scaleY-y,z&&(f+=(parseFloat(A.borderRightWidth)+u)/r.scaleX,h+=(v+parseFloat(A.borderBottomWidth))/r.scaleY))}return a===b?{left:e,top:g,width:f-e,height:h-g}:(i=Aa(a),j=Aa(b,!0),k=Ca({x:e,y:g},i,j),l=Ca({x:f,y:g},i,j),m=Ca({x:f,y:h},i,j),n=Ca({x:e,y:h},i,j),e=Math.min(k.x,l.x,m.x,n.x),g=Math.min(k.y,l.y,m.y,n.y),K.x=K.y=0,c&&xa(b,K),{left:e+K.x,top:g+K.y,width:Math.max(k.x,l.x,m.x,n.x)-e,height:Math.max(k.y,l.y,m.y,n.y)-g})},Ea=function(a){return a&&a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},Fa=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],Ea(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else c&&0!==c.length&&e.push(c);return e},Ga="ontouchstart"in t&&"orientation"in window,Ha=function(a){for(var b=a.split(","),c=(void 0!==v.onpointerdown?"pointerdown,pointermove,pointerup,pointercancel":void 0!==v.onmspointerdown?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":a).split(","),d={},e=8;--e>-1;)d[b[e]]=c[e],d[c[e]]=b[e];return d}("touchstart,touchmove,touchend,touchcancel"),Ia=function(a,b,c,d){a.addEventListener?a.addEventListener(Ha[b]||b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},Ja=function(a,b,c){a.removeEventListener?a.removeEventListener(Ha[b]||b,c):a.detachEvent&&a.detachEvent("on"+b,c)},Ka=function(a,b){for(var c=a.length;--c>-1;)if(a[c].identifier===b)return!0;return!1},La=function(a){e=a.touches&&H<a.touches.length,Ja(a.target,"touchend",La)},Ma=function(a){e=a.touches&&H<a.touches.length,Ia(a.target,"touchend",La)},Na=function(a,b,c,d,e,f){var g,h,i,j={};if(b)if(1!==e&&b instanceof Array){for(j.end=g=[],i=b.length,h=0;i>h;h++)g[h]=b[h]*e;c+=1.1,d-=1.1}else"function"==typeof b?j.end=function(c){return b.call(a,c)*e}:j.end=b;return(c||0===c)&&(j.max=c),(d||0===d)&&(j.min=d),f&&(j.velocity=0),j},Oa=function(a){var b;return a&&a.getAttribute&&"BODY"!==a.nodeName?"true"===(b=a.getAttribute("data-clickable"))||"false"!==b&&(a.onclick||G.test(a.nodeName+"")||"true"===a.getAttribute("contentEditable"))?!0:Oa(a.parentNode):!1},Pa=function(a,b){for(var c,d=a.length;--d>-1;)c=a[d],c.ondragstart=c.onselectstart=b?null:x,ba(c,"userSelect",b?"text":"none")},Qa=function(){var a,b=s.createElement("div"),c=s.createElement("div"),d=c.style,e=s.body||v;return d.display="inline-block",d.position="relative",b.style.cssText=c.innerHTML="width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",b.appendChild(c),e.appendChild(b),l=c.offsetHeight+18>b.scrollHeight,d.width="100%",na||(d.paddingRight="500px",a=b.scrollLeft=b.scrollWidth-b.clientWidth,d.left="-90px",a=a!==b.scrollLeft),e.removeChild(b),a}(),Ra=function(a,c){a=_(a),c=c||{};var d,e,f,g,h,i,j=s.createElement("div"),k=j.style,m=a.firstChild,n=0,o=0,p=a.scrollTop,q=a.scrollLeft,r=a.scrollWidth,t=a.scrollHeight,u=0,v=0,w=0;la&&c.force3D!==!1?(h="translate3d(",i="px,0px)"):na&&(h="translate(",i="px)"),this.scrollTop=function(a,b){return arguments.length?void this.top(-a,b):-this.top()},this.scrollLeft=function(a,b){return arguments.length?void this.left(-a,b):-this.left()},this.left=function(d,e){if(!arguments.length)return-(a.scrollLeft+o);var f=a.scrollLeft-q,g=o;return(f>2||-2>f)&&!e?(q=a.scrollLeft,b.killTweensOf(this,!0,{left:1,scrollLeft:1}),this.left(-q),void(c.onKill&&c.onKill())):(d=-d,0>d?(o=d-.5|0,d=0):d>v?(o=d-v|0,d=v):o=0,(o||g)&&(h?this._suspendTransforms||(k[na]=h+-o+"px,"+-n+i):k.left=-o+"px",Qa&&o+u>=0&&(k.paddingRight=o+u+"px")),a.scrollLeft=0|d,void(q=a.scrollLeft))},this.top=function(d,e){if(!arguments.length)return-(a.scrollTop+n);var f=a.scrollTop-p,g=n;return(f>2||-2>f)&&!e?(p=a.scrollTop,b.killTweensOf(this,!0,{top:1,scrollTop:1}),this.top(-p),void(c.onKill&&c.onKill())):(d=-d,0>d?(n=d-.5|0,d=0):d>w?(n=d-w|0,d=w):n=0,(n||g)&&(h?this._suspendTransforms||(k[na]=h+-o+"px,"+-n+i):k.top=-n+"px"),a.scrollTop=0|d,void(p=a.scrollTop))},this.maxScrollTop=function(){return w},this.maxScrollLeft=function(){return v},this.disable=function(){for(m=j.firstChild;m;)g=m.nextSibling,a.appendChild(m),m=g;a===j.parentNode&&a.removeChild(j)},this.enable=function(){if(m=a.firstChild,m!==j){for(;m;)g=m.nextSibling,j.appendChild(m),m=g;a.appendChild(j),this.calibrate()}},this.calibrate=function(b){var c,g,h=a.clientWidth===d;p=a.scrollTop,q=a.scrollLeft,(!h||a.clientHeight!==e||j.offsetHeight!==f||r!==a.scrollWidth||t!==a.scrollHeight||b)&&((n||o)&&(c=this.left(),g=this.top(),this.left(-a.scrollLeft),this.top(-a.scrollTop)),(!h||b)&&(k.display="block",k.width="auto",k.paddingRight="0px",u=Math.max(0,a.scrollWidth-a.clientWidth),u&&(u+=ha(a,"paddingLeft")+(l?ha(a,"paddingRight"):0))),k.display="inline-block",k.position="relative",k.overflow="visible",k.verticalAlign="top",k.width="100%",k.paddingRight=u+"px",l&&(k.paddingBottom=ha(a,"paddingBottom",!0)),B&&(k.zoom="1"),d=a.clientWidth,e=a.clientHeight,r=a.scrollWidth,t=a.scrollHeight,v=a.scrollWidth-d,w=a.scrollHeight-e,f=j.offsetHeight,k.display="block",(c||g)&&(this.left(c),this.top(g)))},this.content=j,this.element=a,this._suspendTransforms=!1,this.enable()},Sa=function(d,g){a.call(this,d),d=_(d),f||(f=q.com.greensock.plugins.ThrowPropsPlugin),this.vars=g=N(g||{}),this.target=d,this.x=this.y=this.rotation=0,this.dragResistance=parseFloat(g.dragResistance)||0,this.edgeResistance=isNaN(g.edgeResistance)?1:parseFloat(g.edgeResistance)||0,this.lockAxis=g.lockAxis,this.autoScroll=g.autoScroll||0,this.lockedAxis=null,this.allowEventDefault=!!g.allowEventDefault;var h,i,j,k,l,r,u,v,x,D,G,K,O,R,T,U,Y,aa,ca,da,ea,fa,ga,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua=(g.type||(B?"top,left":"x,y")).toLowerCase(),va=-1!==ua.indexOf("x")||-1!==ua.indexOf("y"),wa=-1!==ua.indexOf("rotation"),xa=wa?"rotation":va?"x":"left",ya=va?"y":"top",za=-1!==ua.indexOf("x")||-1!==ua.indexOf("left")||"scroll"===ua,Ca=-1!==ua.indexOf("y")||-1!==ua.indexOf("top")||"scroll"===ua,Da=g.minimumMovement||2,Ea=this,Fa=M(g.trigger||g.handle||d),La={},Qa=0,Ta=!1,Ua=g.clickableTest||Oa,Va=0,Xa=function(a){if(Ea.autoScroll&&Ea.isDragging&&(Ta||aa)){var b,c,e,f,g,h,j,k,l=d,m=15*Ea.autoScroll;for(Ta=!1,L.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=t.scrollTop?t.scrollTop:s.body.scrollTop,L.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=t.scrollLeft?t.scrollLeft:s.body.scrollLeft,f=Ea.pointerX-L.scrollLeft,g=Ea.pointerY-L.scrollTop;l&&!c;)c=X(l.parentNode),b=c?L:l.parentNode,e=c?{bottom:Math.max(t.clientHeight,window.innerHeight||0),right:Math.max(t.clientWidth,window.innerWidth||0),left:0,top:0}:b.getBoundingClientRect(),h=j=0,Ca&&(k=b._gsMaxScrollY-b.scrollTop,0>k?j=k:g>e.bottom-40&&k?(Ta=!0,j=Math.min(k,m*(1-Math.max(0,e.bottom-g)/40)|0)):g<e.top+40&&b.scrollTop&&(Ta=!0,j=-Math.min(b.scrollTop,m*(1-Math.max(0,g-e.top)/40)|0)),j&&(b.scrollTop+=j)),za&&(k=b._gsMaxScrollX-b.scrollLeft,0>k?h=k:f>e.right-40&&k?(Ta=!0,h=Math.min(k,m*(1-Math.max(0,e.right-f)/40)|0)):f<e.left+40&&b.scrollLeft&&(Ta=!0,h=-Math.min(b.scrollLeft,m*(1-Math.max(0,f-e.left)/40)|0)),h&&(b.scrollLeft+=h)),c&&(h||j)&&(window.scrollTo(b.scrollLeft,b.scrollTop),ib(Ea.pointerX+h,Ea.pointerY+j)),l=b}if(aa){var n=Ea.x,o=Ea.y,p=1e-6;p>n&&n>-p&&(n=0),p>o&&o>-p&&(o=0),wa?(oa.data.rotation=Ea.rotation=n,oa.setRatio(1)):i?(Ca&&i.top(o),za&&i.left(n)):va?(Ca&&(oa.data.y=o),za&&(oa.data.x=n),oa.setRatio(1)):(Ca&&(d.style.top=o+"px"),za&&(d.style.left=n+"px")),!v||a||ra||(ra=!0,ia(Ea,"drag","onDrag"),ra=!1)}aa=!1},Ya=function(a,c){var e;Ea.x,Ea.y;d._gsTransform||!va&&!wa||b.set(d,{x:"+=0",overwrite:!1}),va?(Ea.y=d._gsTransform.y,Ea.x=d._gsTransform.x):wa?Ea.x=Ea.rotation=d._gsTransform.rotation:i?(Ea.y=i.top(),Ea.x=i.left()):(Ea.y=parseInt(d.style.top,10)||0,Ea.x=parseInt(d.style.left,10)||0),!da&&!ea||c||(da&&(e=da(Ea.x),e!==Ea.x&&(Ea.x=e,wa&&(Ea.rotation=e),aa=!0)),ea&&(e=ea(Ea.y),e!==Ea.y&&(Ea.y=e),aa=!0)),aa&&Xa(!0),a||ia(Ea,"throwupdate","onThrowUpdate")},Za=function(){var a,b,c,e;u=!1,i?(i.calibrate(),Ea.minX=D=-i.maxScrollLeft(),Ea.minY=K=-i.maxScrollTop(),Ea.maxX=x=Ea.maxY=G=0,u=!0):g.bounds&&(a=ja(g.bounds,d.parentNode),wa?(Ea.minX=D=a.left,Ea.maxX=x=a.left+a.width,Ea.minY=K=Ea.maxY=G=0):void 0!==g.bounds.maxX||void 0!==g.bounds.maxY?(a=g.bounds,Ea.minX=D=a.minX,Ea.minY=K=a.minY,Ea.maxX=x=a.maxX,Ea.maxY=G=a.maxY):(b=ja(d,d.parentNode),Ea.minX=D=ha(d,xa)+a.left-b.left,Ea.minY=K=ha(d,ya)+a.top-b.top,Ea.maxX=x=D+(a.width-b.width),Ea.maxY=G=K+(a.height-b.height)),D>x&&(Ea.minX=x,Ea.maxX=x=D,D=Ea.minX),K>G&&(Ea.minY=G,Ea.maxY=G=K,K=Ea.minY),wa&&(Ea.minRotation=D,Ea.maxRotation=x),u=!0),g.liveSnap&&(c=g.liveSnap===!0?g.snap||{}:g.liveSnap,e=c instanceof Array||"function"==typeof c,wa?(da=fb(e?c:c.rotation,D,x,1),ea=null):(za&&(da=fb(e?c:c.x||c.left||c.scrollLeft,D,x,i?-1:1)),Ca&&(ea=fb(e?c:c.y||c.top||c.scrollTop,K,G,i?-1:1))))},$a=function(){Ea.isThrowing=!1,ia(Ea,"throwcomplete","onThrowComplete")},_a=function(){Ea.isThrowing=!1},ab=function(a,b){var c,e,h,j;a&&f?(a===!0&&(c=g.snap||{},e=c instanceof Array||"function"==typeof c,a={resistance:(g.throwResistance||g.resistance||1e3)/(wa?10:1)},wa?a.rotation=Na(Ea,e?c:c.rotation,x,D,1,b):(za&&(a[xa]=Na(Ea,e?c:c.x||c.left||c.scrollLeft,x,D,i?-1:1,b||"x"===Ea.lockedAxis)),Ca&&(a[ya]=Na(Ea,e?c:c.y||c.top||c.scrollTop,G,K,i?-1:1,b||"y"===Ea.lockedAxis)))),Ea.isThrowing=!0,j=isNaN(g.overshootTolerance)?1===g.edgeResistance?0:1-Ea.edgeResistance+.2:g.overshootTolerance,Ea.tween=h=f.to(i||d,{throwProps:a,ease:g.ease||q.Power3.easeOut,onComplete:$a,onOverwrite:_a,onUpdate:g.fastMode?ia:Ya,onUpdateParams:g.fastMode?[Ea,"onthrowupdate","onThrowUpdate"]:w},isNaN(g.maxDuration)?2:g.maxDuration,isNaN(g.minDuration)?0===j?0:.5:g.minDuration,j),g.fastMode||(i&&(i._suspendTransforms=!0),h.render(h.duration(),!0,!0),Ya(!0,!0),Ea.endX=Ea.x,Ea.endY=Ea.y,wa&&(Ea.endRotation=Ea.x),h.play(0),Ya(!0,!0),i&&(i._suspendTransforms=!1))):u&&Ea.applyBounds()},bb=function(a){var b,c,e,f,g,h,i,l,m,n=ka||[1,0,0,1,0,0];ka=Aa(d.parentNode,!0),a&&Ea.isPressed&&n.join(",")!==ka.join(",")&&(b=n[0],c=n[1],e=n[2],f=n[3],g=n[4],h=n[5],i=b*f-c*e,l=j*(f/i)+k*(-e/i)+(e*h-f*g)/i,m=j*(-c/i)+k*(b/i)+-(b*h-c*g)/i,k=l*ka[1]+m*ka[3]+ka[5],j=l*ka[0]+m*ka[2]+ka[4]),ka[1]||ka[2]||1!=ka[0]||1!=ka[3]||0!=ka[4]||0!=ka[5]||(ka=null)},cb=function(){var a=1-Ea.edgeResistance;bb(!1),ka&&(j=Ea.pointerX*ka[0]+Ea.pointerY*ka[2]+ka[4],k=Ea.pointerX*ka[1]+Ea.pointerY*ka[3]+ka[5]),aa&&(ib(Ea.pointerX,Ea.pointerY),Xa(!0)),i?(Za(),r=i.top(),l=i.left()):(db()?(Ya(!0,!0),Za()):Ea.applyBounds(),wa?(Y=Ba(d,{x:0,y:0}),Ya(!0,!0),l=Ea.x,r=Ea.y=Math.atan2(Y.y-Ea.pointerY,Ea.pointerX-Y.x)*y):(ma=d.parentNode?d.parentNode.scrollTop||0:0,na=d.parentNode?d.parentNode.scrollLeft||0:0,r=ha(d,ya),l=ha(d,xa))),u&&a&&(l>x?l=x+(l-x)/a:D>l&&(l=D-(D-l)/a),wa||(r>G?r=G+(r-G)/a:K>r&&(r=K-(K-r)/a)))},db=function(){return Ea.tween&&Ea.tween.isActive()},eb=function(){!C.parentNode||db()||Ea.isDragging||C.parentNode.removeChild(C)},fb=function(a,b,c,d){return"function"==typeof a?function(e){var f=Ea.isPressed?1-Ea.edgeResistance:1;return a.call(Ea,e>c?c+(e-c)*f:b>e?b+(e-b)*f:e)*d}:a instanceof Array?function(d){for(var e,f,g=a.length,h=0,i=z;--g>-1;)e=a[g],f=e-d,0>f&&(f=-f),i>f&&e>=b&&c>=e&&(h=g,i=f);return a[h]}:isNaN(a)?function(a){return a}:function(){return a*d}},gb=function(a){var c;if(!(!h||Ea.isPressed||!a||("mousedown"===a.type||"pointerdown"===a.type)&&A()-Va<30&&Ha[Ea.pointerEvent.type])){if(la=db(),Ea.pointerEvent=a,Ha[a.type]?(ga=-1!==a.type.indexOf("touch")?a.currentTarget||a.target:s,Ia(ga,"touchend",jb),Ia(ga,"touchmove",hb),Ia(ga,"touchcancel",jb),Ia(s,"touchstart",Ma)):(ga=null,Ia(s,"mousemove",hb)),qa=null,Ia(s,"mouseup",jb),a&&a.target&&Ia(a.target,"mouseup",jb),fa=Ua.call(Ea,a.target)&&!g.dragClickables)return Ia(a.target,"change",jb),ia(Ea,"press","onPress"),void Pa(Fa,!0);if(pa=!ga||za===Ca||i||Ea.vars.allowNativeTouchScrolling===!1?!1:za?"y":"x",B?a=$(a,!0):pa||Ea.allowEventDefault||(a.preventDefault(),a.preventManipulation&&a.preventManipulation()),a.changedTouches?(a=T=a.changedTouches[0],U=a.identifier):a.pointerId?U=a.pointerId:T=U=null,H++,P(Xa),k=Ea.pointerY=a.pageY,j=Ea.pointerX=a.pageX,(pa||Ea.autoScroll)&&Z(d.parentNode),d.parentNode&&(i||Ea.autoScroll&&!wa&&d.parentNode._gsMaxScrollX&&!C.parentNode)&&!d.getBBox&&(C.style.width=d.parentNode.scrollWidth+"px",d.parentNode.appendChild(C)),cb(),Ea.tween&&Ea.tween.kill(),Ea.isThrowing=!1,b.killTweensOf(i||d,!0,La),i&&b.killTweensOf(d,!0,{scrollTo:1}),Ea.tween=Ea.lockedAxis=null,(g.zIndexBoost||!wa&&!i&&g.zIndexBoost!==!1)&&(d.style.zIndex=Sa.zIndex++),Ea.isPressed=!0,v=!(!g.onDrag&&!Ea._listeners.drag),!wa)for(c=Fa.length;--c>-1;)ba(Fa[c],"cursor",g.cursor||"move");ia(Ea,"press","onPress")}},hb=function(a){var b,c,d,f,g=a;if(h&&!e&&Ea.isPressed&&a){if(Ea.pointerEvent=a,b=a.changedTouches){if(a=b[0],a!==T&&a.identifier!==U){for(f=b.length;--f>-1&&(a=b[f]).identifier!==U;);if(0>f)return}}else if(a.pointerId&&U&&a.pointerId!==U)return;if(B)a=$(a,!0);else{if(ga&&pa&&!qa&&(c=a.pageX,d=a.pageY,ka&&(f=c*ka[0]+d*ka[2]+ka[4],d=c*ka[1]+d*ka[3]+ka[5],c=f),qa=Math.abs(c-j)>Math.abs(d-k)&&za?"x":"y",Ea.vars.lockAxisOnTouchScroll!==!1&&(Ea.lockedAxis="x"===qa?"y":"x","function"==typeof Ea.vars.onLockAxis&&Ea.vars.onLockAxis.call(Ea,g)),I&&pa===qa))return void jb(g);Ea.allowEventDefault||pa&&(!qa||pa===qa)||g.cancelable===!1||(g.preventDefault(),g.preventManipulation&&g.preventManipulation())}Ea.autoScroll&&(Ta=!0),ib(a.pageX,a.pageY)}},ib=function(a,b){var c,d,e,f,g,h,i=1-Ea.dragResistance,m=1-Ea.edgeResistance;Ea.pointerX=a,Ea.pointerY=b,wa?(f=Math.atan2(Y.y-b,a-Y.x)*y,g=Ea.y-f,Ea.y=f,g>180?r-=360:-180>g&&(r+=360),e=l+(r-f)*i):(ka&&(h=a*ka[0]+b*ka[2]+ka[4],b=a*ka[1]+b*ka[3]+ka[5],a=h),d=b-k,c=a-j,Da>d&&d>-Da&&(d=0),Da>c&&c>-Da&&(c=0),(Ea.lockAxis||Ea.lockedAxis)&&(c||d)&&(h=Ea.lockedAxis,h||(Ea.lockedAxis=h=za&&Math.abs(c)>Math.abs(d)?"y":Ca?"x":null,h&&"function"==typeof Ea.vars.onLockAxis&&Ea.vars.onLockAxis.call(Ea,Ea.pointerEvent)),"y"===h?d=0:"x"===h&&(c=0)),e=l+c*i,f=r+d*i),da||ea?(da&&(e=da(e)),ea&&(f=ea(f))):u&&(e>x?e=x+(e-x)*m:D>e&&(e=D+(e-D)*m),wa||(f>G?f=G+(f-G)*m:K>f&&(f=K+(f-K)*m))),wa||(e=Math.round(e),f=Math.round(f)),(Ea.x!==e||Ea.y!==f&&!wa)&&(wa?Ea.endRotation=Ea.x=Ea.endX=e:(Ca&&(Ea.y=Ea.endY=f),za&&(Ea.x=Ea.endX=e)),aa=!0,!Ea.isDragging&&Ea.isPressed&&(Ea.isDragging=!0,ia(Ea,"dragstart","onDragStart")))},jb=function(a,c){if(h&&Ea.isPressed&&(!a||null==U||c||!(a.pointerId&&a.pointerId!==U||a.changedTouches&&!Ka(a.changedTouches,U)))){Ea.isPressed=!1;var e,f,i,j,k,l=a,m=Ea.isDragging,n=b.delayedCall(.001,eb);if(ga?(Ja(ga,"touchend",jb),Ja(ga,"touchmove",hb),Ja(ga,"touchcancel",jb),Ja(s,"touchstart",Ma)):Ja(s,"mousemove",hb),Ja(s,"mouseup",jb),a&&a.target&&Ja(a.target,"mouseup",jb),aa=!1,fa)return a&&Ja(a.target,"change",jb),Pa(Fa,!1),ia(Ea,"release","onRelease"),ia(Ea,"click","onClick"),void(fa=!1);if(Q(Xa),!wa)for(f=Fa.length;--f>-1;)ba(Fa[f],"cursor",g.cursor||"move");if(m&&(Qa=J=A(),Ea.isDragging=!1),H--,a){if(B&&(a=$(a,!1)),e=a.changedTouches,e&&(a=e[0],a!==T&&a.identifier!==U)){for(f=e.length;--f>-1&&(a=e[f]).identifier!==U;);if(0>f)return}Ea.pointerEvent=l,Ea.pointerX=a.pageX,Ea.pointerY=a.pageY}return l&&!m?(la&&(g.snap||g.bounds)&&ab(g.throwProps),ia(Ea,"release","onRelease"),I&&"touchmove"===l.type||(ia(Ea,"click","onClick"),j=l.target||l.srcElement||d,Va=A(),k=function(){Va!==sa&&Ea.enabled()&&!Ea.isPressed&&(j.click?j.click():s.createEvent&&(i=s.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!0,window,1,Ea.pointerEvent.screenX,Ea.pointerEvent.screenY,Ea.pointerX,Ea.pointerY,!1,!1,!1,!1,0,null),j.dispatchEvent(i)))},I||b.delayedCall(1e-5,k))):(ab(g.throwProps),B||Ea.allowEventDefault||!l||!g.dragClickables&&Ua.call(Ea,l.target)||!m||pa&&(!qa||pa!==qa)||l.cancelable===!1||(l.preventDefault(),l.preventManipulation&&l.preventManipulation()),ia(Ea,"release","onRelease")),db()&&n.duration(Ea.tween.duration()),m&&ia(Ea,"dragend","onDragEnd"),!0}},kb=function(a){if(a&&Ea.isDragging){var b=a.target||a.srcElement||d.parentNode,c=b.scrollLeft-b._gsScrollX,e=b.scrollTop-b._gsScrollY;(c||e)&&(ka?(j-=c*ka[0]+e*ka[2],k-=e*ka[3]+c*ka[1]):(j-=c,k-=e),b._gsScrollX+=c,b._gsScrollY+=e,ib(Ea.pointerX,Ea.pointerY))}},lb=function(a){var b=A(),c=40>b-Va,d=40>b-Qa,e=c&&sa===Va,f=!!a.preventDefault,g=c&&ta===Va,h=a.isTrusted||null==a.isTrusted&&c&&e;return f&&(e||d&&Ea.vars.suppressClickOnDrag!==!1)&&a.stopImmediatePropagation(),!c||e&&h===g?void((Ea.isPressed||d||c)&&(f?h&&a.detail&&c||(a.preventDefault(),a.preventManipulation&&a.preventManipulation()):a.returnValue=!1)):(h&&e&&(ta=Va),void(sa=Va))};ca=Sa.get(this.target),ca&&ca.kill(),this.startDrag=function(a){gb(a),Ea.isDragging||(Ea.isDragging=!0,ia(Ea,"dragstart","onDragStart"))},this.drag=hb,this.endDrag=function(a){jb(a,!0)},this.timeSinceDrag=function(){return Ea.isDragging?0:(A()-Qa)/1e3},this.hitTest=function(a,b){return Sa.hitTest(Ea.target,a,b)},this.getDirection=function(a,b){var c,d,e,g,h,i,j="velocity"===a&&f?a:"object"!=typeof a||wa?"start":"element";return"element"===j&&(h=Wa(Ea.target),i=Wa(a)),c="start"===j?Ea.x-l:"velocity"===j?f.getVelocity(this.target,xa):h.left+h.width/2-(i.left+i.width/2),wa?0>c?"counter-clockwise":"clockwise":(b=b||2,d="start"===j?Ea.y-r:"velocity"===j?f.getVelocity(this.target,ya):h.top+h.height/2-(i.top+i.height/2),e=Math.abs(c/d),g=1/b>e?"":0>c?"left":"right",b>e&&(""!==g&&(g+="-"),g+=0>d?"up":"down"),g)},this.applyBounds=function(a){var b,c,e,f,h,i;if(a&&g.bounds!==a)return g.bounds=a,Ea.update(!0);if(Ya(!0),Za(),u){if(b=Ea.x,c=Ea.y,b>x?b=x:D>b&&(b=D),c>G?c=G:K>c&&(c=K),(Ea.x!==b||Ea.y!==c)&&(e=!0,Ea.x=Ea.endX=b,wa?Ea.endRotation=b:Ea.y=Ea.endY=c,aa=!0,Xa(!0),Ea.autoScroll&&!Ea.isDragging))for(Z(d.parentNode),f=d,L.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=t.scrollTop?t.scrollTop:s.body.scrollTop,L.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=t.scrollLeft?t.scrollLeft:s.body.scrollLeft;f&&!i;)i=X(f.parentNode),h=i?L:f.parentNode,Ca&&h.scrollTop>h._gsMaxScrollY&&(h.scrollTop=h._gsMaxScrollY),za&&h.scrollLeft>h._gsMaxScrollX&&(h.scrollLeft=h._gsMaxScrollX),f=h;Ea.isThrowing&&(e||Ea.endX>x||Ea.endX<D||Ea.endY>G||Ea.endY<K)&&ab(g.throwProps,e)}return Ea},this.update=function(a,b,c){var e=Ea.x,f=Ea.y;return bb(!b),a?Ea.applyBounds():(aa&&c&&Xa(!0),Ya(!0)),b&&(ib(Ea.pointerX,Ea.pointerY),aa&&Xa(!0)),Ea.isPressed&&!b&&(za&&Math.abs(e-Ea.x)>.01||Ca&&Math.abs(f-Ea.y)>.01&&!wa)&&cb(),Ea.autoScroll&&(Z(d.parentNode),Ta=Ea.isDragging,Xa(!0)),Ea.autoScroll&&(W(d,kb),V(d,kb)),Ea},this.enable=function(a){var e,j,k;if("soft"!==a){for(j=Fa.length;--j>-1;)k=Fa[j],Ia(k,"mousedown",gb),Ia(k,"touchstart",gb),Ia(k,"click",lb,!0),wa||ba(k,"cursor",g.cursor||"move"),ba(k,"touchCallout","none"),ba(k,"touchAction",za===Ca||i?"none":za?"pan-y":"pan-x");Pa(Fa,!1)}return V(d,kb),h=!0,f&&"soft"!==a&&f.track(i||d,va?"x,y":wa?"rotation":"top,left"),i&&i.enable(),d._gsDragID=e="d"+F++,E[e]=this,i&&(i.element._gsDragID=e),b.set(d,{x:"+=0",overwrite:!1}),oa={t:d,data:B?R:d._gsTransform,tween:{},setRatio:B?function(){b.set(d,O)}:c._internals.setTransformRatio||c._internals.set3DTransformRatio},cb(),Ea.update(!0),Ea},this.disable=function(a){var b,c,e=Ea.isDragging;if(!wa)for(b=Fa.length;--b>-1;)ba(Fa[b],"cursor",null);if("soft"!==a){for(b=Fa.length;--b>-1;)c=Fa[b],ba(c,"touchCallout",null),ba(c,"touchAction",null),Ja(c,"mousedown",gb),Ja(c,"touchstart",gb),
Ja(c,"click",lb);Pa(Fa,!0),ga&&(Ja(ga,"touchcancel",jb),Ja(ga,"touchend",jb),Ja(ga,"touchmove",hb)),Ja(s,"mouseup",jb),Ja(s,"mousemove",hb)}return W(d,kb),h=!1,f&&"soft"!==a&&f.untrack(i||d,va?"x,y":wa?"rotation":"top,left"),i&&i.disable(),Q(Xa),Ea.isDragging=Ea.isPressed=fa=!1,e&&ia(Ea,"dragend","onDragEnd"),Ea},this.enabled=function(a,b){return arguments.length?a?Ea.enable(b):Ea.disable(b):h},this.kill=function(){return Ea.isThrowing=!1,b.killTweensOf(i||d,!0,La),Ea.disable(),delete E[d._gsDragID],Ea},-1!==ua.indexOf("scroll")&&(i=this.scrollProxy=new Ra(d,S({onKill:function(){Ea.isPressed&&jb(null)}},g)),d.style.overflowY=Ca&&!Ga?"auto":"hidden",d.style.overflowX=za&&!Ga?"auto":"hidden",d=i.content),g.force3D!==!1&&b.set(d,{force3D:!0}),wa?La.rotation=1:(za&&(La[xa]=1),Ca&&(La[ya]=1)),wa?(O=p,R=O.css,O.overwrite=!1):va&&(O=za&&Ca?m:za?n:o,R=O.css,O.overwrite=!1),this.enable()},Ta=Sa.prototype=new a;Ta.constructor=Sa,Ta.pointerX=Ta.pointerY=0,Ta.isDragging=Ta.isPressed=!1,Sa.version="0.14.8",Sa.zIndex=1e3,Ia(s,"touchcancel",function(){}),Ia(s,"contextmenu",function(a){var b;for(b in E)E[b].isPressed&&E[b].endDrag()}),Sa.create=function(a,c){"string"==typeof a&&(a=b.selector(a));for(var d=a&&0!==a.length?Ea(a)?Fa(a):[a]:[],e=d.length;--e>-1;)d[e]=new Sa(d[e],c);return d},Sa.get=function(a){return E[(_(a)||{})._gsDragID]},Sa.timeSinceDrag=function(){return(A()-J)/1e3};var Ua={},Va=function(a){var b,c,d=0,e=0;for(a=_(a),b=a.offsetWidth,c=a.offsetHeight;a;)d+=a.offsetTop,e+=a.offsetLeft,a=a.offsetParent;return{top:d,left:e,width:b,height:c}},Wa=function(a,b){if(a===window)return Ua.left=Ua.top=0,Ua.width=Ua.right=t.clientWidth||a.innerWidth||s.body.clientWidth||0,Ua.height=Ua.bottom=(a.innerHeight||0)-20<t.clientHeight?t.clientHeight:a.innerHeight||s.body.clientHeight||0,Ua;var c=a.pageX!==b?{left:a.pageX-U(),top:a.pageY-T(),right:a.pageX-U()+1,bottom:a.pageY-T()+1}:a.nodeType||a.left===b||a.top===b?B?Va(a):_(a).getBoundingClientRect():a;return c.right===b&&c.width!==b?(c.right=c.left+c.width,c.bottom=c.top+c.height):c.width===b&&(c={width:c.right-c.left,height:c.bottom-c.top,right:c.right,left:c.left,bottom:c.bottom,top:c.top}),c};return Sa.hitTest=function(a,b,c){if(a===b)return!1;var d,e,f,g=Wa(a),h=Wa(b),i=h.left>g.right||h.right<g.left||h.top>g.bottom||h.bottom<g.top;return i||!c?!i:(f=-1!==(c+"").indexOf("%"),c=parseFloat(c)||0,d={left:Math.max(g.left,h.left),top:Math.max(g.top,h.top)},d.width=Math.min(g.right,h.right)-d.left,d.height=Math.min(g.bottom,h.bottom)-d.top,d.width<0||d.height<0?!1:f?(c*=.01,e=d.width*d.height,e>=g.width*g.height*c||e>=h.width*h.height*c):d.width>c&&d.height>c)},C.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",Sa},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite","CSSPlugin"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),require("../plugins/CSSPlugin.js"),module.exports=b())}("Draggable");

/*!
 * VERSION: 0.5.6
 * DATE: 2016-10-28
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(a){"use strict";var b=a.GreenSockGlobals||a,c=function(a){var c,d=a.split("."),e=b;for(c=0;c<d.length;c++)e[d[c]]=e=e[d[c]]||{};return e},d=c("com.greensock.utils"),e=function(a){var b=a.nodeType,c="";if(1===b||9===b||11===b){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===b||4===b)return a.nodeValue;return c},f=document,g=f.defaultView?f.defaultView.getComputedStyle:function(){},h=/([A-Z])/g,i=function(a,b,c,d){var e;return(c=c||g(a,null))?(a=c.getPropertyValue(b.replace(h,"-$1").toLowerCase()),e=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,e=c[b]),d?e:parseInt(e,10)||0},j=function(a){return a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},k=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],j(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else e.push(c);return e},l=/(?:\r|\n|\t\t)/g,m=/(?:\s\s+)/g,n=55296,o=56319,p=56320,q=127462,r=127487,s=127995,t=127999,u=function(a){return(a.charCodeAt(0)-n<<10)+(a.charCodeAt(1)-p)+65536},v=f.all&&!f.addEventListener,w=" style='position:relative;display:inline-block;"+(v?"*display:inline;*zoom:1;'":"'"),x=function(a,b){a=a||"";var c=-1!==a.indexOf("++"),d=1;return c&&(a=a.split("++").join("")),function(){return"<"+b+w+(a?" class='"+a+(c?d++:"")+"'>":">")}},y=d.SplitText=b.SplitText=function(a,b){if("string"==typeof a&&(a=y.selector(a)),!a)throw"cannot split a null element.";this.elements=j(a)?k(a):[a],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=b||{},this.split(b)},z=function(a,b,c){var d=a.nodeType;if(1===d||9===d||11===d)for(a=a.firstChild;a;a=a.nextSibling)z(a,b,c);else(3===d||4===d)&&(a.nodeValue=a.nodeValue.split(b).join(c))},A=function(a,b){for(var c=b.length;--c>-1;)a.push(b[c])},B=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},C=function(a,b,c){for(var d;a&&a!==b;){if(d=a._next||a.nextSibling)return d.textContent.charAt(0)===c;a=a.parentNode||a._parent}return!1},D=function(a){var b,c,d=B(a.childNodes),e=d.length;for(b=0;e>b;b++)c=d[b],c._isSplit?D(c):(b&&3===c.previousSibling.nodeType?c.previousSibling.nodeValue+=3===c.nodeType?c.nodeValue:c.firstChild.nodeValue:3!==c.nodeType&&a.insertBefore(c.firstChild,c),a.removeChild(c))},E=function(a,b,c,d,e,h,j){var k,l,m,n,o,p,q,r,s,t,u,v,w=g(a),x=i(a,"paddingLeft",w),y=-999,B=i(a,"borderBottomWidth",w)+i(a,"borderTopWidth",w),E=i(a,"borderLeftWidth",w)+i(a,"borderRightWidth",w),F=i(a,"paddingTop",w)+i(a,"paddingBottom",w),G=i(a,"paddingLeft",w)+i(a,"paddingRight",w),H=.2*i(a,"fontSize"),I=i(a,"textAlign",w,!0),J=[],K=[],L=[],M=b.wordDelimiter||" ",N=b.span?"span":"div",O=b.type||b.split||"chars,words,lines",P=e&&-1!==O.indexOf("lines")?[]:null,Q=-1!==O.indexOf("words"),R=-1!==O.indexOf("chars"),S="absolute"===b.position||b.absolute===!0,T=b.linesClass,U=-1!==(T||"").indexOf("++");for(P&&1===a.children.length&&(a=a.children[0]),U&&(T=T.split("++").join("")),l=a.getElementsByTagName("*"),m=l.length,o=[],k=0;m>k;k++)o[k]=l[k];if(P||S)for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,(p||S||R&&!Q)&&(v=n.offsetTop,P&&p&&Math.abs(v-y)>H&&"BR"!==n.nodeName&&(q=[],P.push(q),y=v),S&&(n._x=n.offsetLeft,n._y=v,n._w=n.offsetWidth,n._h=n.offsetHeight),P&&((n._isSplit&&p||!R&&p||Q&&p||!Q&&n.parentNode.parentNode===a&&!n.parentNode._isSplit)&&(q.push(n),n._x-=x,C(n,a,M)&&(n._wordEnd=!0)),"BR"===n.nodeName&&n.nextSibling&&"BR"===n.nextSibling.nodeName&&P.push([])));for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,"BR"!==n.nodeName?(S&&(s=n.style,Q||p||(n._x+=n.parentNode._x,n._y+=n.parentNode._y),s.left=n._x+"px",s.top=n._y+"px",s.position="absolute",s.display="block",s.width=n._w+1+"px",s.height=n._h+"px"),!Q&&R?n._isSplit?(n._next=n.nextSibling,n.parentNode.appendChild(n)):n.parentNode._isSplit?(n._parent=n.parentNode,!n.previousSibling&&n.firstChild&&(n.firstChild._isFirst=!0),n._next=n.nextSibling&&n.nextSibling._isFirst?null:n.nextSibling,n.parentNode.removeChild(n),o.splice(k--,1),m--):p||(v=!n.nextSibling&&C(n.parentNode,a,M),n.parentNode._parent&&n.parentNode._parent.appendChild(n),v&&n.parentNode.appendChild(f.createTextNode(" ")),b.span&&(n.style.display="inline"),J.push(n)):n.parentNode._isSplit&&!n._isSplit&&""!==n.innerHTML?K.push(n):R&&!n._isSplit&&(b.span&&(n.style.display="inline"),J.push(n))):P||S?(a.removeChild(n),o.splice(k--,1),m--):Q||a.appendChild(n);if(P){for(S&&(t=f.createElement(N),a.appendChild(t),u=t.offsetWidth+"px",v=t.offsetParent===a?0:a.offsetLeft,a.removeChild(t)),s=a.style.cssText,a.style.cssText="display:none;";a.firstChild;)a.removeChild(a.firstChild);for(r=" "===M&&(!S||!Q&&!R),k=0;k<P.length;k++){for(q=P[k],t=f.createElement(N),t.style.cssText="display:block;text-align:"+I+";position:"+(S?"absolute;":"relative;"),T&&(t.className=T+(U?k+1:"")),L.push(t),m=q.length,l=0;m>l;l++)"BR"!==q[l].nodeName&&(n=q[l],t.appendChild(n),r&&n._wordEnd&&t.appendChild(f.createTextNode(" ")),S&&(0===l&&(t.style.top=n._y+"px",t.style.left=x+v+"px"),n.style.top="0px",v&&(n.style.left=n._x-v+"px")));0===m?t.innerHTML="&nbsp;":Q||R||(D(t),z(t,String.fromCharCode(160)," ")),S&&(t.style.width=u,t.style.height=n._h+"px"),a.appendChild(t)}a.style.cssText=s}S&&(j>a.clientHeight&&(a.style.height=j-F+"px",a.clientHeight<j&&(a.style.height=j+B+"px")),h>a.clientWidth&&(a.style.width=h-G+"px",a.clientWidth<h&&(a.style.width=h+E+"px"))),A(c,J),A(d,K),A(e,L)},F=function(a,b,c,d){var g,h,i,j,k,p,v,w,x,y=b.span?"span":"div",A=b.type||b.split||"chars,words,lines",B=(-1!==A.indexOf("words"),-1!==A.indexOf("chars")),C="absolute"===b.position||b.absolute===!0,D=b.wordDelimiter||" ",E=" "!==D?"":C?"&#173; ":" ",F=b.span?"</span>":"</div>",G=!0,H=f.createElement("div"),I=a.parentNode;for(I.insertBefore(H,a),H.textContent=a.nodeValue,I.removeChild(a),a=H,g=e(a),v=-1!==g.indexOf("<"),b.reduceWhiteSpace!==!1&&(g=g.replace(m," ").replace(l,"")),v&&(g=g.split("<").join("{{LT}}")),k=g.length,h=(" "===g.charAt(0)?E:"")+c(),i=0;k>i;i++)if(p=g.charAt(i),p===D&&g.charAt(i-1)!==D&&i){for(h+=G?F:"",G=!1;g.charAt(i+1)===D;)h+=E,i++;i===k-1?h+=E:")"!==g.charAt(i+1)&&(h+=E+c(),G=!0)}else"{"===p&&"{{LT}}"===g.substr(i,6)?(h+=B?d()+"{{LT}}</"+y+">":"{{LT}}",i+=5):p.charCodeAt(0)>=n&&p.charCodeAt(0)<=o||g.charCodeAt(i+1)>=65024&&g.charCodeAt(i+1)<=65039?(w=u(g.substr(i,2)),x=u(g.substr(i+2,2)),j=w>=q&&r>=w&&x>=q&&r>=x||x>=s&&t>=x?4:2,h+=B&&" "!==p?d()+g.substr(i,j)+"</"+y+">":g.substr(i,j),i+=j-1):h+=B&&" "!==p?d()+p+"</"+y+">":p;a.outerHTML=h+(G?F:""),v&&z(I,"{{LT}}","<")},G=function(a,b,c,d){var e,f,g=B(a.childNodes),h=g.length,j="absolute"===b.position||b.absolute===!0;if(3!==a.nodeType||h>1){for(b.absolute=!1,e=0;h>e;e++)f=g[e],(3!==f.nodeType||/\S+/.test(f.nodeValue))&&(j&&3!==f.nodeType&&"inline"===i(f,"display",null,!0)&&(f.style.display="inline-block",f.style.position="relative"),f._isSplit=!0,G(f,b,c,d));return b.absolute=j,void(a._isSplit=!0)}F(a,b,c,d)},H=y.prototype;H.split=function(a){this.isSplit&&this.revert(),this.vars=a=a||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var b,c,d,e=this.elements.length,f=a.span?"span":"div",g=("absolute"===a.position||a.absolute===!0,x(a.wordsClass,f)),h=x(a.charsClass,f);--e>-1;)d=this.elements[e],this._originals[e]=d.innerHTML,b=d.clientHeight,c=d.clientWidth,G(d,a,g,h),E(d,a,this.chars,this.words,this.lines,c,b);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},H.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var a=this._originals.length;--a>-1;)this.elements[a].innerHTML=this._originals[a];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},y.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(y.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)},y.version="0.5.6"}(_gsScope),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define([],b):"undefined"!=typeof module&&module.exports&&(module.exports=b())}("SplitText");

/*!
 * VERSION: 0.3.0
 * DATE: 2016-07-14
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * ScrambleTextPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var a=function(b){var c=b.nodeType,d="";if(1===c||9===c||11===c){if("string"==typeof b.textContent)return b.textContent;for(b=b.firstChild;b;b=b.nextSibling)d+=a(b)}else if(3===c||4===c)return b.nodeValue;return d},b=function(a,b){for(var c=b.length,d="";--a>-1;)d+=b[Math.random()*c|0];return d},c=function(a){this.chars=a.split(""),this.sets=[],this.length=50;var c;for(c=0;20>c;c++)this.sets[c]=b(80,this.chars);this.grow=function(a){for(c=0;20>c;c++)this.sets[c]+=b(a-this.length,this.chars);this.length=a}},d="ABCDEFGHIJKLMNOPQRSTUVWXYZ",e=d.toLowerCase(),f={upperCase:new c(d),lowerCase:new c(e),upperAndLowerCase:new c(d+e)},g=_gsScope._gsDefine.plugin({propName:"scrambleText",version:"0.3.0",API:2,overwriteProps:["scrambleText","text"],init:function(b,d,e,g){if(this._prop="innerHTML"in b?"innerHTML":"textContent"in b?"textContent":0,!this._prop)return!1;"function"==typeof d&&(d=d(g,b)),this._target=b,"object"!=typeof d&&(d={text:d});var h,i,j,k;return this._delimiter=h=d.delimiter||"",this._original=a(b).replace(/\s+/g," ").split("&nbsp;").join("").split(h),this._text=(d.text||d.value||"").replace(/\s+/g," ").split(h),this._hasClass=!1,"string"==typeof d.newClass&&(this._newClass=d.newClass,this._hasClass=!0),"string"==typeof d.oldClass&&(this._oldClass=d.oldClass,this._hasClass=!0),i=this._text.length-this._original.length,this._length=this._original.join(h).length,this._lengthDif=this._text.join(h).length-this._length,this._fillChar=d.fillChar||d.chars&&-1!==d.chars.indexOf(" ")?"&nbsp;":"",this._charSet=k=f[d.chars||"upperCase"]||new c(d.chars),this._speed=.016/(d.speed||1),this._prevScrambleTime=0,this._setIndex=20*Math.random()|0,j=this._length+Math.max(this._lengthDif,0),j>k.length&&k.grow(j),this._chars=k.sets[this._setIndex],this._revealDelay=d.revealDelay||0,this._tweenLength=d.tweenLength!==!1,this._tween=e,!0},set:function(a){var b,c,d,e,f,g,h=this._text.length,i=this._delimiter,j=this._tween._time,k=j-this._prevScrambleTime;this._revealDelay&&(this._tween.vars.runBackwards&&(j=this._tween._duration-j),a=0===j?0:j<this._revealDelay?1e-6:j===this._tween._duration?1:this._tween._ease.getRatio((j-this._revealDelay)/(this._tween._duration-this._revealDelay))),0>a?a=0:a>1&&(a=1),b=a*h+.5|0,c=this._text.slice(0,b).join(i),d=this._original.slice(b).join(i),a&&((k>this._speed||k<-this._speed)&&(this._setIndex=(this._setIndex+(19*Math.random()|0))%20,this._chars=this._charSet.sets[this._setIndex],this._prevScrambleTime+=k),d=this._chars.substr(c.length,this._length+(this._tweenLength?1-(a=1-a)*a*a*a:1)*this._lengthDif-c.length+.5|0)),this._hasClass?(e=this._newClass&&0!==b,f=this._oldClass&&b!==h,g=(e?"<span class='"+this._newClass+"'>":"")+c+(e?"</span>":"")+(f?"<span class='"+this._oldClass+"'>":"")+i+d+(f?"</span>":"")):g=c+i+d,this._target[this._prop]="&nbsp;"===this._fillChar&&-1!==g.indexOf("  ")?g.split("  ").join("&nbsp;&nbsp;"):g}}),h=g.prototype;h._newClass=h._oldClass="";for(h in f)f[h.toLowerCase()]=f[h],f[h.toUpperCase()]=f[h]}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();


/*!
 * VERSION: 0.2.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomEase",["easing.Ease"],function(a){var b=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,c=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,d=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,e=/[cLlsS]/g,f="CustomEase only accepts Cubic Bezier data.",g=function(a,b,c,d,e,f,h,i,j,k,l){var m,n=(a+c)/2,o=(b+d)/2,p=(c+e)/2,q=(d+f)/2,r=(e+h)/2,s=(f+i)/2,t=(n+p)/2,u=(o+q)/2,v=(p+r)/2,w=(q+s)/2,x=(t+v)/2,y=(u+w)/2,z=h-a,A=i-b,B=Math.abs((c-h)*A-(d-i)*z),C=Math.abs((e-h)*A-(f-i)*z);return k||(k=[{x:a,y:b},{x:h,y:i}],l=1),k.splice(l||k.length-1,0,{x:x,y:y}),(B+C)*(B+C)>j*(z*z+A*A)&&(m=k.length,g(a,b,n,o,t,u,x,y,j,k,l),g(x,y,v,w,r,s,h,i,j,k,l+1+(k.length-m))),k},h=function(a){var b,e,g,h,i,j,k,l,m,n,o,p=(a+"").replace(d,function(a){var b=+a;return 1e-4>b&&b>-1e-4?0:b}).match(c)||[],q=[],r=0,s=0,t=p.length,u=2;for(b=0;t>b;b++)if(m=h,isNaN(p[b])?(h=p[b].toUpperCase(),i=h!==p[b]):b--,e=+p[b+1],g=+p[b+2],i&&(e+=r,g+=s),b||(k=e,l=g),"M"===h)j&&j.length<8&&(q.length-=1,u=0),r=k=e,s=l=g,j=[e,g],u=2,q.push(j),b+=2,h="L";else if("C"===h)j||(j=[0,0]),j[u++]=e,j[u++]=g,i||(r=s=0),j[u++]=r+1*p[b+3],j[u++]=s+1*p[b+4],j[u++]=r+=1*p[b+5],j[u++]=s+=1*p[b+6],b+=6;else if("S"===h)"C"===m||"S"===m?(n=r-j[u-4],o=s-j[u-3],j[u++]=r+n,j[u++]=s+o):(j[u++]=r,j[u++]=s),j[u++]=e,j[u++]=g,i||(r=s=0),j[u++]=r+=1*p[b+3],j[u++]=s+=1*p[b+4],b+=4;else{if("L"!==h&&"Z"!==h)throw f;"Z"===h&&(e=k,g=l,j.closed=!0),("L"===h||Math.abs(r-e)>.5||Math.abs(s-g)>.5)&&(j[u++]=r+(e-r)/3,j[u++]=s+(g-s)/3,j[u++]=r+2*(e-r)/3,j[u++]=s+2*(g-s)/3,j[u++]=e,j[u++]=g,"L"===h&&(b+=2)),r=e,s=g}return q[0]},i=function(a){var b,c=a.length,d=999999999999;for(b=1;c>b;b+=6)+a[b]<d&&(d=+a[b]);return d},j=function(a,b,c){c||0===c||(c=Math.max(+a[a.length-1],+a[1]));var d,e=-1*+a[0],f=-c,g=a.length,h=1/(+a[g-2]+e),j=-b||(Math.abs(+a[g-1]-+a[1])<.01*(+a[g-2]-+a[0])?i(a)+f:+a[g-1]+f);for(j=j?1/j:-h,d=0;g>d;d+=2)a[d]=(+a[d]+e)*h,a[d+1]=(+a[d+1]+f)*j},k=function(a){var b=this.lookup[a*this.l|0]||this.lookup[this.l-1];return b.nx<a&&(b=b.n),b.y+(a-b.x)/b.cx*b.cy},l=function(b,c,d){this._calcEnd=!0,this.id=b,b&&(a.map[b]=this),this.getRatio=k,this.setData(c,d)},m=l.prototype=new a;return m.constructor=l,m.setData=function(a,c){a=a||"0,0,1,1";var d,i,k,l,m,n,o,p,q,r,s=a.match(b),t=1,u=[];if(c=c||{},r=c.precision||1,this.data=a,this.lookup=[],this.points=u,this.fast=1>=r,(e.test(a)||-1!==a.indexOf("M")&&-1===a.indexOf("C"))&&(s=h(a)),d=s.length,4===d)s.unshift(0,0),s.push(1,1),d=8;else if((d-2)%6)throw f;for((0!==+s[0]||1!==+s[d-2])&&j(s,c.height,c.originY),this.rawBezier=s,l=2;d>l;l+=6)i={x:+s[l-2],y:+s[l-1]},k={x:+s[l+4],y:+s[l+5]},u.push(i,k),g(i.x,i.y,+s[l],+s[l+1],+s[l+2],+s[l+3],k.x,k.y,1/(2e5*r),u,u.length-1);for(d=u.length,l=0;d>l;l++)o=u[l],p=u[l-1]||o,o.x>p.x||p.y!==o.y&&p.x===o.x||o===p?(p.cx=o.x-p.x,p.cy=o.y-p.y,p.n=o,p.nx=o.x,this.fast&&l>1&&Math.abs(p.cy/p.cx-u[l-2].cy/u[l-2].cx)>2&&(this.fast=!1),p.cx<t&&(p.cx?t=p.cx:(p.cx=.001,l===d-1&&(p.x-=.001,t=Math.min(t,.001),this.fast=!1)))):(u.splice(l--,1),d--);if(d=1/t+1|0,this.l=d,m=1/d,n=0,o=u[0],this.fast){for(l=0;d>l;l++)q=l*m,o.nx<q&&(o=u[++n]),i=o.y+(q-o.x)/o.cx*o.cy,this.lookup[l]={x:q,cx:m,y:i,cy:0,nx:9},l&&(this.lookup[l-1].cy=i-this.lookup[l-1].y);this.lookup[d-1].cy=u[u.length-1].y-i}else{for(l=0;d>l;l++)o.nx<l*m&&(o=u[++n]),this.lookup[l]=o;n<u.length-1&&(this.lookup[l-1]=u[u.length-2])}return this._calcEnd=1!==u[u.length-1].y||0!==u[0].y,this},m.getRatio=k,m.getSVGData=function(a){return l.getSVGData(this,a)},l.create=function(a,b,c){return new l(a,b,c)},l.version="0.2.1",l.bezierToPoints=g,l.get=function(b){return a.map[b]},l.getSVGData=function(b,c){c=c||{};var d,e,f,g,h,i,j,k,l,m,n=1e3,o=c.width||100,p=c.height||100,q=c.x||0,r=(c.y||0)+p,s=c.path;if(c.invert&&(p=-p,r=0),b=b.getRatio?b:a.map[b]||console.log("No ease found: ",b),b.rawBezier){for(d=[],j=b.rawBezier.length,f=0;j>f;f+=2)d.push(((q+b.rawBezier[f]*o)*n|0)/n+","+((r+b.rawBezier[f+1]*-p)*n|0)/n);d[0]="M"+d[0],d[1]="C"+d[1]}else for(d=["M"+q+","+r],j=Math.max(5,200*(c.precision||1)),g=1/j,j+=2,k=5/j,l=((q+g*o)*n|0)/n,m=((r+b.getRatio(g)*-p)*n|0)/n,e=(m-r)/(l-q),f=2;j>f;f++)h=((q+f*g*o)*n|0)/n,i=((r+b.getRatio(f*g)*-p)*n|0)/n,(Math.abs((i-m)/(h-l)-e)>k||f===j-1)&&(d.push(l+","+m),e=(i-m)/(h-l)),l=h,m=i;return s&&("string"==typeof s?document.querySelector(s):s).setAttribute("d",d.join(" ")),d.join(" ")},l},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())}("CustomEase");

// stats.js - http://github.com/mrdoob/stats.js
(function(f,e){"object"===typeof exports&&"undefined"!==typeof module?module.exports=e():"function"===typeof define&&define.amd?define(e):f.Stats=e()})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();
    u(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel("FPS","#0ff","#002")),h=e(new f.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var t=e(new f.Panel("MB","#f08","#201"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/
        1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=h;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);
    b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+" "+e+" ("+g(c)+"-"+g(k)+")",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});

/*!
 * VERSION: 0.8.11
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var a=Math.PI/180,b=180/Math.PI,c=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,d=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,e=/(^[#\.][a-z]|[a-y][a-z])/gi,f=/[achlmqstvz]/gi,g=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,h=_gsScope._gsDefine.globals.TweenLite,i=function(a){_gsScope.console&&console.log(a)},j=function(b,c){var d,e,f,g,h,i,j=Math.ceil(Math.abs(c)/90),k=0,l=[];for(b*=a,c*=a,d=c/j,e=4/3*Math.sin(d/2)/(1+Math.cos(d/2)),i=0;j>i;i++)f=b+i*d,g=Math.cos(f),h=Math.sin(f),l[k++]=g-e*h,l[k++]=h+e*g,f+=d,g=Math.cos(f),h=Math.sin(f),l[k++]=g+e*h,l[k++]=h-e*g,l[k++]=g,l[k++]=h;return l},k=function(c,d,e,f,g,h,i,k,l){if(c!==k||d!==l){e=Math.abs(e),f=Math.abs(f);var m=g%360*a,n=Math.cos(m),o=Math.sin(m),p=(c-k)/2,q=(d-l)/2,r=n*p+o*q,s=-o*p+n*q,t=e*e,u=f*f,v=r*r,w=s*s,x=v/t+w/u;x>1&&(e=Math.sqrt(x)*e,f=Math.sqrt(x)*f,t=e*e,u=f*f);var y=h===i?-1:1,z=(t*u-t*w-u*v)/(t*w+u*v);0>z&&(z=0);var A=y*Math.sqrt(z),B=A*(e*s/f),C=A*-(f*r/e),D=(c+k)/2,E=(d+l)/2,F=D+(n*B-o*C),G=E+(o*B+n*C),H=(r-B)/e,I=(s-C)/f,J=(-r-B)/e,K=(-s-C)/f,L=Math.sqrt(H*H+I*I),M=H;y=0>I?-1:1;var N=y*Math.acos(M/L)*b;L=Math.sqrt((H*H+I*I)*(J*J+K*K)),M=H*J+I*K,y=0>H*K-I*J?-1:1;var O=y*Math.acos(M/L)*b;!i&&O>0?O-=360:i&&0>O&&(O+=360),O%=360,N%=360;var P,Q,R,S=j(N,O),T=n*e,U=o*e,V=o*-f,W=n*f,X=S.length-2;for(P=0;X>P;P+=2)Q=S[P],R=S[P+1],S[P]=Q*T+R*V+F,S[P+1]=Q*U+R*W+G;return S[S.length-2]=k,S[S.length-1]=l,S}},l=function(a){var b,d,e,f,h,j,l,m,n,o,p,q,r,s=(a+"").replace(g,function(a){var b=+a;return 1e-4>b&&b>-1e-4?0:b}).match(c)||[],t=[],u=0,v=0,w=s.length,x=2,y=0;if(!a||!isNaN(s[0])||isNaN(s[1]))return i("ERROR: malformed path data: "+a),t;for(b=0;w>b;b++)if(r=h,isNaN(s[b])?(h=s[b].toUpperCase(),j=h!==s[b]):b--,e=+s[b+1],f=+s[b+2],j&&(e+=u,f+=v),0===b&&(m=e,n=f),"M"===h)l&&l.length<8&&(t.length-=1,x=0),u=m=e,v=n=f,l=[e,f],y+=x,x=2,t.push(l),b+=2,h="L";else if("C"===h)l||(l=[0,0]),l[x++]=e,l[x++]=f,j||(u=v=0),l[x++]=u+1*s[b+3],l[x++]=v+1*s[b+4],l[x++]=u+=1*s[b+5],l[x++]=v+=1*s[b+6],b+=6;else if("S"===h)"C"===r||"S"===r?(o=u-l[x-4],p=v-l[x-3],l[x++]=u+o,l[x++]=v+p):(l[x++]=u,l[x++]=v),l[x++]=e,l[x++]=f,j||(u=v=0),l[x++]=u+=1*s[b+3],l[x++]=v+=1*s[b+4],b+=4;else if("Q"===h)o=e-u,p=f-v,l[x++]=u+2*o/3,l[x++]=v+2*p/3,j||(u=v=0),u+=1*s[b+3],v+=1*s[b+4],o=e-u,p=f-v,l[x++]=u+2*o/3,l[x++]=v+2*p/3,l[x++]=u,l[x++]=v,b+=4;else if("T"===h)o=u-l[x-4],p=v-l[x-3],l[x++]=u+o,l[x++]=v+p,o=u+1.5*o-e,p=v+1.5*p-f,l[x++]=e+2*o/3,l[x++]=f+2*p/3,l[x++]=u=e,l[x++]=v=f,b+=2;else if("H"===h)f=v,l[x++]=u+(e-u)/3,l[x++]=v+(f-v)/3,l[x++]=u+2*(e-u)/3,l[x++]=v+2*(f-v)/3,l[x++]=u=e,l[x++]=f,b+=1;else if("V"===h)f=e,e=u,j&&(f+=v-u),l[x++]=e,l[x++]=v+(f-v)/3,l[x++]=e,l[x++]=v+2*(f-v)/3,l[x++]=e,l[x++]=v=f,b+=1;else if("L"===h||"Z"===h)"Z"===h&&(e=m,f=n,l.closed=!0),("L"===h||Math.abs(u-e)>.5||Math.abs(v-f)>.5)&&(l[x++]=u+(e-u)/3,l[x++]=v+(f-v)/3,l[x++]=u+2*(e-u)/3,l[x++]=v+2*(f-v)/3,l[x++]=e,l[x++]=f,"L"===h&&(b+=2)),u=e,v=f;else if("A"===h){if(q=k(u,v,1*s[b+1],1*s[b+2],1*s[b+3],1*s[b+4],1*s[b+5],(j?u:0)+1*s[b+6],(j?v:0)+1*s[b+7]))for(d=0;d<q.length;d++)l[x++]=q[d];u=l[x-2],v=l[x-1],b+=7}else i("Error: malformed path data: "+a);return t.totalPoints=y+x,t},m=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q=0,r=.999999,s=a.length,t=b/((s-2)/6);for(o=2;s>o;o+=6)for(q+=t;q>r;)c=a[o-2],d=a[o-1],e=a[o],f=a[o+1],g=a[o+2],h=a[o+3],i=a[o+4],j=a[o+5],p=1/(Math.floor(q)+1),k=c+(e-c)*p,m=e+(g-e)*p,k+=(m-k)*p,m+=(g+(i-g)*p-m)*p,l=d+(f-d)*p,n=f+(h-f)*p,l+=(n-l)*p,n+=(h+(j-h)*p-n)*p,a.splice(o,4,c+(e-c)*p,d+(f-d)*p,k,l,k+(m-k)*p,l+(n-l)*p,m,n,g+(i-g)*p,h+(j-h)*p),o+=6,s+=6,q--;return a},n=function(a){var b,c,d,e,f="",g=a.length,h=100;for(c=0;g>c;c++){for(e=a[c],f+="M"+e[0]+","+e[1]+" C",b=e.length,d=2;b>d;d++)f+=(e[d++]*h|0)/h+","+(e[d++]*h|0)/h+" "+(e[d++]*h|0)/h+","+(e[d++]*h|0)/h+" "+(e[d++]*h|0)/h+","+(e[d]*h|0)/h+" ";e.closed&&(f+="z")}return f},o=function(a){for(var b=[],c=a.length-1,d=0;--c>-1;)b[d++]=a[c],b[d++]=a[c+1],c--;for(c=0;d>c;c++)a[c]=b[c];a.reversed=a.reversed?!1:!0},p=function(a){var b,c=a.length,d=0,e=0;for(b=0;c>b;b++)d+=a[b++],e+=a[b];return[d/(c/2),e/(c/2)]},q=function(a){var b,c,d,e=a.length,f=a[0],g=f,h=a[1],i=h;for(d=6;e>d;d+=6)b=a[d],c=a[d+1],b>f?f=b:g>b&&(g=b),c>h?h=c:i>c&&(i=c);return a.centerX=(f+g)/2,a.centerY=(h+i)/2,a.size=(f-g)*(h-i)},r=function(a){for(var b,c,d,e,f,g=a.length,h=a[0][0],i=h,j=a[0][1],k=j;--g>-1;)for(f=a[g],b=f.length,e=6;b>e;e+=6)c=f[e],d=f[e+1],c>h?h=c:i>c&&(i=c),d>j?j=d:k>d&&(k=d);return a.centerX=(h+i)/2,a.centerY=(j+k)/2,a.size=(h-i)*(j-k)},s=function(a,b){return b.length-a.length},t=function(a,b){var c=a.size||q(a),d=b.size||q(b);return Math.abs(d-c)<(c+d)/20?b.centerX-a.centerX||b.centerY-a.centerY:d-c},u=function(a,b){var c,d,e=a.slice(0),f=a.length,g=f-2;for(b=0|b,c=0;f>c;c++)d=(c+b)%g,a[c++]=e[d],a[c]=e[d+1]},v=function(a,b,c,d,e){var f,g,h,i,j=a.length,k=0,l=j-2;for(c*=6,g=0;j>g;g+=6)f=(g+c)%l,i=a[f]-(b[g]-d),h=a[f+1]-(b[g+1]-e),k+=Math.sqrt(h*h+i*i);return k},w=function(a,b,c){var d,e,f,g=a.length,h=p(a),i=p(b),j=i[0]-h[0],k=i[1]-h[1],l=v(a,b,0,j,k),m=0;for(f=6;g>f;f+=6)e=v(a,b,f/6,j,k),l>e&&(l=e,m=f);if(c)for(d=a.slice(0),o(d),f=6;g>f;f+=6)e=v(d,b,f/6,j,k),l>e&&(l=e,m=-f);return m/6},x=function(a,b,c){for(var d,e,f,g,h,i,j=a.length,k=99999999999,l=0,m=0;--j>-1;)for(d=a[j],i=d.length,h=0;i>h;h+=6)e=d[h]-b,f=d[h+1]-c,g=Math.sqrt(e*e+f*f),k>g&&(k=g,l=d[h],m=d[h+1]);return[l,m]},y=function(a,b,c,d,e,f){var g,h,i,j,k,l=b.length,m=0,n=Math.min(a.size||q(a),b[c].size||q(b[c]))*d,o=999999999999,p=a.centerX+e,r=a.centerY+f;for(h=c;l>h&&(g=b[h].size||q(b[h]),!(n>g));h++)i=b[h].centerX-p,j=b[h].centerY-r,k=Math.sqrt(i*i+j*j),o>k&&(m=h,o=k);return k=b[m],b.splice(m,1),k},z=function(a,b,c,d){var e,f,g,h,j,k,l,n=b.length-a.length,p=n>0?b:a,v=n>0?a:b,z=0,A="complexity"===d?s:t,B="position"===d?0:"number"==typeof d?d:.8,C=v.length,D="object"==typeof c&&c.push?c.slice(0):[c],E="reverse"===D[0]||D[0]<0,F="log"===c;if(v[0]){if(p.length>1&&(a.sort(A),b.sort(A),k=p.size||r(p),k=v.size||r(v),k=p.centerX-v.centerX,l=p.centerY-v.centerY,A===t))for(C=0;C<v.length;C++)p.splice(C,0,y(v[C],p,C,B,k,l));if(n)for(0>n&&(n=-n),p[0].length>v[0].length&&m(v[0],(p[0].length-v[0].length)/6|0),C=v.length;n>z;)h=p[C].size||q(p[C]),g=x(v,p[C].centerX,p[C].centerY),h=g[0],j=g[1],v[C++]=[h,j,h,j,h,j,h,j],v.totalPoints+=8,z++;for(C=0;C<a.length;C++)e=b[C],f=a[C],n=e.length-f.length,0>n?m(e,-n/6|0):n>0&&m(f,n/6|0),E&&!f.reversed&&o(f),c=D[C]||0===D[C]?D[C]:"auto",c&&(f.closed||Math.abs(f[0]-f[f.length-2])<.5&&Math.abs(f[1]-f[f.length-1])<.5?"auto"===c||"log"===c?(D[C]=c=w(f,e,0===C),0>c&&(E=!0,o(f),c=-c),u(f,6*c)):"reverse"!==c&&(C&&0>c&&o(f),u(f,6*(0>c?-c:c))):!E&&("auto"===c&&Math.abs(e[0]-f[0])+Math.abs(e[1]-f[1])+Math.abs(e[e.length-2]-f[f.length-2])+Math.abs(e[e.length-1]-f[f.length-1])>Math.abs(e[0]-f[f.length-2])+Math.abs(e[1]-f[f.length-1])+Math.abs(e[e.length-2]-f[0])+Math.abs(e[e.length-1]-f[1])||c%2)?(o(f),D[C]=-1,E=!0):"auto"===c?D[C]=0:"reverse"===c&&(D[C]=-1),f.closed!==e.closed&&(f.closed=e.closed=!1));return F&&i("shapeIndex:["+D.join(",")+"]"),D}},A=function(a,b,c,d){var e=l(a[0]),f=l(a[1]);z(e,f,b||0===b?b:"auto",c)&&(a[0]=n(e),a[1]=n(f),("log"===d||d===!0)&&i('precompile:["'+a[0]+'","'+a[1]+'"]'))},B=function(a,b,c){return b||c||a||0===a?function(d){A(d,a,b,c)}:A},C=function(a,b){if(!b)return a;var c,e,f,g=a.match(d)||[],h=g.length,i="";for("reverse"===b?(e=h-1,c=-2):(e=(2*(parseInt(b,10)||0)+1+100*h)%h,c=2),f=0;h>f;f+=2)i+=g[e-1]+","+g[e]+" ",e=(e+c)%h;return i},D=function(a,b){var c,d,e,f,g,h,i,j=0,k=parseFloat(a[0]),l=parseFloat(a[1]),m=k+","+l+" ",n=.999999;for(e=a.length,c=.5*b/(.5*e-1),d=0;e-2>d;d+=2){if(j+=c,h=parseFloat(a[d+2]),i=parseFloat(a[d+3]),j>n)for(g=1/(Math.floor(j)+1),f=1;j>n;)m+=(k+(h-k)*g*f).toFixed(2)+","+(l+(i-l)*g*f).toFixed(2)+" ",j--,f++;m+=h+","+i+" ",k=h,l=i}return m},E=function(a){var b=a[0].match(d)||[],c=a[1].match(d)||[],e=c.length-b.length;e>0?a[0]=D(b,e):a[1]=D(c,-e)},F=function(a){return isNaN(a)?E:function(b){E(b),b[1]=C(b[1],parseInt(a,10))}},G=function(a,b){var c,d=_gsScope.document.createElementNS("http://www.w3.org/2000/svg","path"),e=Array.prototype.slice.call(a.attributes),f=e.length;for(b=","+b+",";--f>-1;)c=e[f].nodeName.toLowerCase(),-1===b.indexOf(","+c+",")&&d.setAttributeNS(null,c,e[f].nodeValue);return d},H=function(a,b){var c,e,f,g,h,i,j,k,m,o,p,q,r,s,t,u,v,w,x,y,z,A=a.tagName.toLowerCase(),B=.552284749831;return"path"!==A&&a.getBBox?(i=G(a,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),"rect"===A?(g=+a.getAttribute("rx")||0,h=+a.getAttribute("ry")||0,e=+a.getAttribute("x")||0,f=+a.getAttribute("y")||0,o=(+a.getAttribute("width")||0)-2*g,p=(+a.getAttribute("height")||0)-2*h,g||h?(q=e+g*(1-B),r=e+g,s=r+o,t=s+g*B,u=s+g,v=f+h*(1-B),w=f+h,x=w+p,y=x+h*B,z=x+h,c="M"+u+","+w+" V"+x+" C"+[u,y,t,z,s,z,s-(s-r)/3,z,r+(s-r)/3,z,r,z,q,z,e,y,e,x,e,x-(x-w)/3,e,w+(x-w)/3,e,w,e,v,q,f,r,f,r+(s-r)/3,f,s-(s-r)/3,f,s,f,t,f,u,v,u,w].join(",")+"z"):c="M"+(e+o)+","+f+" v"+p+" h"+-o+" v"+-p+" h"+o+"z"):"circle"===A||"ellipse"===A?("circle"===A?(g=h=+a.getAttribute("r")||0,k=g*B):(g=+a.getAttribute("rx")||0,h=+a.getAttribute("ry")||0,k=h*B),e=+a.getAttribute("cx")||0,f=+a.getAttribute("cy")||0,j=g*B,c="M"+(e+g)+","+f+" C"+[e+g,f+k,e+j,f+h,e,f+h,e-j,f+h,e-g,f+k,e-g,f,e-g,f-k,e-j,f-h,e,f-h,e+j,f-h,e+g,f-k,e+g,f].join(",")+"z"):"line"===A?c=n(l("M"+(a.getAttribute("x1")||0)+","+(a.getAttribute("y1")||0)+" L"+(a.getAttribute("x2")||0)+","+(a.getAttribute("y2")||0))):("polyline"===A||"polygon"===A)&&(m=(a.getAttribute("points")+"").match(d)||[],e=m.shift(),f=m.shift(),c="M"+e+","+f+" L"+m.join(","),"polygon"===A&&(c+=","+e+","+f+"z")),i.setAttribute("d",c),b&&a.parentNode&&(a.parentNode.insertBefore(i,a),a.parentNode.removeChild(a)),i):a},I=function(a,b,c){var f,g,j="string"==typeof a;return(!j||e.test(a)||(a.match(d)||[]).length<3)&&(f=j?h.selector(a):a&&a[0]?a:[a],f&&f[0]?(f=f[0],g=f.nodeName.toUpperCase(),b&&"PATH"!==g&&(f=H(f,!1),g="PATH"),a=f.getAttribute("PATH"===g?"d":"points")||"",f===c&&(a=f.getAttributeNS(null,"data-original")||a)):(i("WARNING: invalid morph to: "+a),a=!1)),a},J="Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",K=_gsScope._gsDefine.plugin({propName:"morphSVG",API:2,global:!0,version:"0.8.11",init:function(a,b,c,d){var e,g,h,j,k;return"function"!=typeof a.setAttribute?!1:("function"==typeof b&&(b=b(d,a)),e=a.nodeName.toUpperCase(),k="POLYLINE"===e||"POLYGON"===e,"PATH"===e||k?(g="PATH"===e?"d":"points",("string"==typeof b||b.getBBox||b[0])&&(b={shape:b}),j=I(b.shape||b.d||b.points||"","d"===g,a),k&&f.test(j)?(i("WARNING: a <"+e+"> cannot accept path data. "+J),!1):(j&&(this._target=a,a.getAttributeNS(null,"data-original")||a.setAttributeNS(null,"data-original",a.getAttribute(g)),h=this._addTween(a,"setAttribute",a.getAttribute(g)+"",j+"","morphSVG",!1,g,"object"==typeof b.precompile?function(a){a[0]=b.precompile[0],a[1]=b.precompile[1]}:"d"===g?B(b.shapeIndex,b.map||K.defaultMap,b.precompile):F(b.shapeIndex)),h&&(this._overwriteProps.push("morphSVG"),h.end=j,h.endProp=g)),!0)):(i("WARNING: cannot morph a <"+e+"> SVG element. "+J),!1))},set:function(a){var b;if(this._super.setRatio.call(this,a),1===a)for(b=this._firstPT;b;)b.end&&this._target.setAttribute(b.endProp,b.end),b=b._next}});K.pathFilter=A,K.pointsFilter=E,K.subdivideRawBezier=m,K.defaultMap="size",K.pathDataToRawBezier=function(a){return l(I(a,!0))},K.equalizeSegmentQuantity=z,K.convertToPath=function(a,b){"string"==typeof a&&(a=h.selector(a));for(var c=a&&0!==a.length?a.length&&a[0]&&a[0].nodeType?Array.prototype.slice.call(a,0):[a]:[],d=c.length;--d>-1;)c[d]=H(c[d],b!==!1);return c},K.pathDataToBezier=function(a,b){var c,d,e,f,g,i,j,k,m=l(I(a,!0))[0]||[],n=0;if(b=b||{},k=b.align||b.relative,f=b.matrix||[1,0,0,1,0,0],g=b.offsetX||0,i=b.offsetY||0,"relative"===k||k===!0?(g-=m[0]*f[0]+m[1]*f[2],i-=m[0]*f[1]+m[1]*f[3],n="+="):(g+=f[4],i+=f[5],k&&(k="string"==typeof k?h.selector(k):k&&k[0]?k:[k],k&&k[0]&&(j=k[0].getBBox()||{x:0,y:0},g-=j.x,i-=j.y))),c=[],e=m.length,f&&"1,0,0,1,0,0"!==f.join(","))for(d=0;e>d;d+=2)c.push({x:n+(m[d]*f[0]+m[d+1]*f[2]+g),y:n+(m[d]*f[1]+m[d+1]*f[3]+i)});else for(d=0;e>d;d+=2)c.push({x:n+(m[d]+g),y:n+(m[d+1]+i)});return c}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("MorphSVGPlugin");
/* barbajs */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Barba",[],e):"object"==typeof exports?exports.Barba=e():t.Barba=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="http://localhost:8080/dist",e(0)}([function(t,e,n){"function"!=typeof Promise&&(window.Promise=n(1));var r={version:"1.0.0",BaseTransition:n(4),BaseView:n(6),BaseCache:n(8),Dispatcher:n(7),HistoryManager:n(9),Pjax:n(10),Prefetch:n(13),Utils:n(5)};t.exports=r},function(t,e,n){(function(e){!function(n){function r(){}function i(t,e){return function(){t.apply(e,arguments)}}function o(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(t,this)}function s(t,e){for(;3===t._state;)t=t._value;return 0===t._state?void t._deferreds.push(e):(t._handled=!0,void l(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?a:c)(e.promise,t._value);var r;try{r=n(t._value)}catch(t){return void c(e.promise,t)}a(e.promise,r)}))}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof o)return t._state=3,t._value=e,void u(t);if("function"==typeof n)return void h(i(n,e),t)}t._state=1,t._value=e,u(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,u(t)}function u(t){2===t._state&&0===t._deferreds.length&&l(function(){t._handled||p(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)s(t,t._deferreds[e]);t._deferreds=null}function f(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function h(t,e){var n=!1;try{t(function(t){n||(n=!0,a(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout,l="function"==typeof e&&e||function(t){d(t,0)},p=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,e){var n=new this.constructor(r);return s(this,new f(t,e,n)),n},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function r(o,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){r(o,t)},n)}e[o]=s,0===--i&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var i=e.length,o=0;o<e.length;o++)r(o,e[o])})},o.resolve=function(t){return t&&"object"==typeof t&&t.constructor===o?t:new o(function(e){e(t)})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){for(var r=0,i=t.length;r<i;r++)t[r].then(e,n)})},o._setImmediateFn=function(t){l=t},o._setUnhandledRejectionFn=function(t){p=t},"undefined"!=typeof t&&t.exports?t.exports=o:n.Promise||(n.Promise=o)}(this)}).call(e,n(2).setImmediate)},function(t,e,n){(function(t,r){function i(t,e){this._id=t,this._clearFn=e}var o=n(3).nextTick,s=Function.prototype.apply,a=Array.prototype.slice,c={},u=0;e.setTimeout=function(){return new i(s.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new i(s.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},e.setImmediate="function"==typeof t?t:function(t){var n=u++,r=!(arguments.length<2)&&a.call(arguments,1);return c[n]=!0,o(function(){c[n]&&(r?t.apply(null,r):t.call(null),e.clearImmediate(n))}),n},e.clearImmediate="function"==typeof r?r:function(t){delete c[t]}}).call(e,n(2).setImmediate,n(2).clearImmediate)},function(t,e){function n(){h&&u&&(h=!1,u.length?f=u.concat(f):d=-1,f.length&&r())}function r(){if(!h){var t=s(n);h=!0;for(var e=f.length;e;){for(u=f,f=[];++d<e;)u&&u[d].run();d=-1,e=f.length}u=null,h=!1,a(t)}}function i(t,e){this.fun=t,this.array=e}function o(){}var s,a,c=t.exports={};!function(){try{s=setTimeout}catch(t){s=function(){throw new Error("setTimeout is not defined")}}try{a=clearTimeout}catch(t){a=function(){throw new Error("clearTimeout is not defined")}}}();var u,f=[],h=!1,d=-1;c.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new i(t,e)),1!==f.length||h||s(r,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=o,c.addListener=o,c.once=o,c.off=o,c.removeListener=o,c.removeAllListeners=o,c.emit=o,c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(t,e,n){var r=n(5),i={oldContainer:void 0,newContainer:void 0,newContainerLoading:void 0,extend:function(t){return r.extend(this,t)},init:function(t,e){var n=this;return this.oldContainer=t,this._newContainerPromise=e,this.deferred=r.deferred(),this.newContainerReady=r.deferred(),this.newContainerLoading=this.newContainerReady.promise,this.start(),this._newContainerPromise.then(function(t){n.newContainer=t,n.newContainerReady.resolve()}),this.deferred.promise},done:function(){this.oldContainer.parentNode.removeChild(this.oldContainer),this.newContainer.style.visibility="visible",this.deferred.resolve()},start:function(){}};t.exports=i},function(t,e){var n={getCurrentUrl:function(){return window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search},cleanLink:function(t){return t.replace(/#.*/,"")},xhrTimeout:5e3,xhr:function(t){var e=this.deferred(),n=new XMLHttpRequest;return n.onreadystatechange=function(){if(4===n.readyState)return 200===n.status?e.resolve(n.responseText):e.reject(new Error("xhr: HTTP code is not 200"))},n.ontimeout=function(){return e.reject(new Error("xhr: Timeout exceeded"))},n.open("GET",t),n.timeout=this.xhrTimeout,n.setRequestHeader("x-barba","yes"),n.send(),e.promise},extend:function(t,e){var n=Object.create(t);for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);return n},deferred:function(){return new function(){this.resolve=null,this.reject=null,this.promise=new Promise(function(t,e){this.resolve=t,this.reject=e}.bind(this))}},getPort:function(t){var e="undefined"!=typeof t?t:window.location.port,n=window.location.protocol;return""!=e?parseInt(e):"http:"===n?80:"https:"===n?443:void 0}};t.exports=n},function(t,e,n){var r=n(7),i=n(5),o={namespace:null,extend:function(t){return i.extend(this,t)},init:function(){var t=this;r.on("initStateChange",function(e,n){n&&n.namespace===t.namespace&&t.onLeave()}),r.on("newPageReady",function(e,n,r){t.container=r,e.namespace===t.namespace&&t.onEnter()}),r.on("transitionCompleted",function(e,n){e.namespace===t.namespace&&t.onEnterCompleted(),n&&n.namespace===t.namespace&&t.onLeaveCompleted()})},onEnter:function(){},onEnterCompleted:function(){},onLeave:function(){},onLeaveCompleted:function(){}};t.exports=o},function(t,e){var n={events:{},on:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},off:function(t,e){t in this.events!=!1&&this.events[t].splice(this.events[t].indexOf(e),1)},trigger:function(t){if(t in this.events!=!1)for(var e=0;e<this.events[t].length;e++)this.events[t][e].apply(this,Array.prototype.slice.call(arguments,1))}};t.exports=n},function(t,e,n){var r=n(5),i={data:{},extend:function(t){return r.extend(this,t)},set:function(t,e){this.data[t]=e},get:function(t){return this.data[t]},reset:function(){this.data={}}};t.exports=i},function(t,e){var n={history:[],add:function(t,e){e||(e=void 0),this.history.push({url:t,namespace:e})},currentStatus:function(){return this.history[this.history.length-1]},prevStatus:function(){var t=this.history;return t.length<2?null:t[t.length-2]}};t.exports=n},function(t,e,n){var r=n(5),i=n(7),o=n(11),s=n(8),a=n(9),c=n(12),u={Dom:c,History:a,Cache:s,cacheEnabled:!0,transitionProgress:!1,ignoreClassLink:"no-barba",start:function(){this.init()},init:function(){var t=this.Dom.getContainer(),e=this.Dom.getWrapper();e.setAttribute("aria-live","polite"),this.History.add(this.getCurrentUrl(),this.Dom.getNamespace(t)),i.trigger("initStateChange",this.History.currentStatus()),i.trigger("newPageReady",this.History.currentStatus(),{},t,this.Dom.currentHTML),i.trigger("transitionCompleted",this.History.currentStatus()),this.bindEvents()},bindEvents:function(){document.addEventListener("click",this.onLinkClick.bind(this)),window.addEventListener("popstate",this.onStateChange.bind(this))},getCurrentUrl:function(){return r.cleanLink(r.getCurrentUrl())},goTo:function(t){window.history.pushState(null,null,t),this.onStateChange()},forceGoTo:function(t){window.location=t},load:function(t){var e,n=r.deferred(),i=this;return e=this.Cache.get(t),e||(e=r.xhr(t),this.Cache.set(t,e)),e.then(function(t){var e=i.Dom.parseResponse(t);i.Dom.putContainer(e),i.cacheEnabled||i.Cache.reset(),n.resolve(e)},function(){i.forceGoTo(t),n.reject()}),n.promise},getHref:function(t){if(t)return t.getAttribute&&"string"==typeof t.getAttribute("xlink:href")?t.getAttribute("xlink:href"):"string"==typeof t.href?t.href:void 0},onLinkClick:function(t){for(var e=t.target;e&&!this.getHref(e);)e=e.parentNode;if(this.preventCheck(t,e)){t.stopPropagation(),t.preventDefault(),i.trigger("linkClicked",e,t);var n=this.getHref(e);this.goTo(n)}},preventCheck:function(t,e){if(!window.history.pushState)return!1;var n=this.getHref(e);return!(!e||!n)&&(!(t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)&&((!e.target||"_blank"!==e.target)&&(window.location.protocol===e.protocol&&window.location.hostname===e.hostname&&(r.getPort()===r.getPort(e.port)&&(!(n.indexOf("#")>-1)&&((!e.getAttribute||"string"!=typeof e.getAttribute("download"))&&(r.cleanLink(n)!=r.cleanLink(location.href)&&!e.classList.contains(this.ignoreClassLink))))))))},getTransition:function(){return o},onStateChange:function(){var t=this.getCurrentUrl();if(this.transitionProgress&&this.forceGoTo(t),this.History.currentStatus().url===t)return!1;this.History.add(t);var e=this.load(t),n=Object.create(this.getTransition());this.transitionProgress=!0,i.trigger("initStateChange",this.History.currentStatus(),this.History.prevStatus());var r=n.init(this.Dom.getContainer(),e);e.then(this.onNewContainerLoaded.bind(this)),r.then(this.onTransitionEnd.bind(this))},onNewContainerLoaded:function(t){var e=this.History.currentStatus();e.namespace=this.Dom.getNamespace(t),i.trigger("newPageReady",this.History.currentStatus(),this.History.prevStatus(),t,this.Dom.currentHTML)},onTransitionEnd:function(){this.transitionProgress=!1,i.trigger("transitionCompleted",this.History.currentStatus(),this.History.prevStatus())}};t.exports=u},function(t,e,n){var r=n(4),i=r.extend({start:function(){this.newContainerLoading.then(this.finish.bind(this))},finish:function(){document.body.scrollTop=0,this.done()}});t.exports=i},function(t,e){var n={dataNamespace:"namespace",wrapperId:"l-load",containerClass:"l-load-contents",currentHTML:document.documentElement.innerHTML,parseResponse:function(t){this.currentHTML=t;var e=document.createElement("div");e.innerHTML=t;var n=e.querySelector("title");return n&&(document.title=n.textContent),this.getContainer(e)},getWrapper:function(){var t=document.getElementById(this.wrapperId);if(!t)throw new Error("Barba.js: wrapper not found!");return t},getContainer:function(t){if(t||(t=document.body),!t)throw new Error("Barba.js: DOM not ready!");var e=this.parseContainer(t);if(e&&e.jquery&&(e=e[0]),!e)throw new Error("Barba.js: no container found");return e},getNamespace:function(t){return t&&t.dataset?t.dataset[this.dataNamespace]:t?t.getAttribute("data-"+this.dataNamespace):null},putContainer:function(t){t.style.visibility="hidden";var e=this.getWrapper();e.appendChild(t)},parseContainer:function(t){return t.querySelector("."+this.containerClass)}};t.exports=n},function(t,e,n){var r=n(5),i=n(10),o={ignoreClassLink:"no-barba-prefetch",init:function(){return!!window.history.pushState&&(document.body.addEventListener("mouseover",this.onLinkEnter.bind(this)),void document.body.addEventListener("touchstart",this.onLinkEnter.bind(this)))},onLinkEnter:function(t){for(var e=t.target;e&&!i.getHref(e);)e=e.parentNode;if(e&&!e.classList.contains(this.ignoreClassLink)){var n=i.getHref(e);if(i.preventCheck(t,e)&&!i.Cache.get(n)){var o=r.xhr(n);i.Cache.set(n,o)}}}};t.exports=o}])});

/*!
 * VERSION: 1.9.1
 * DATE: 2018-05-21
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var a=(_gsScope.document||{}).documentElement,b=_gsScope,c=function(c,d){var e="x"===d?"Width":"Height",f="scroll"+e,g="client"+e,h=document.body;return c===b||c===a||c===h?Math.max(a[f],h[f])-(b["inner"+e]||a[g]||h[g]):c[f]-c["offset"+e]},d=function(a){return"string"==typeof a&&(a=TweenLite.selector(a)),a.length&&a!==b&&a[0]&&a[0].style&&!a.nodeType&&(a=a[0]),a===b||a.nodeType&&a.style?a:null},e=function(c,d){var e="scroll"+("x"===d?"Left":"Top");return c===b&&(null!=c.pageXOffset?e="page"+d.toUpperCase()+"Offset":c=null!=a[e]?a:document.body),function(){return c[e]}},f=function(c,f){var g=d(c).getBoundingClientRect(),h=document.body,i=!f||f===b||f===h,j=i?{top:a.clientTop-(window.pageYOffset||a.scrollTop||h.scrollTop||0),left:a.clientLeft-(window.pageXOffset||a.scrollLeft||h.scrollLeft||0)}:f.getBoundingClientRect(),k={x:g.left-j.left,y:g.top-j.top};return!i&&f&&(k.x+=e(f,"x")(),k.y+=e(f,"y")()),k},g=function(a,b,d){var e=typeof a;return isNaN(a)?"number"===e||"string"===e&&"="===a.charAt(1)?a:"max"===a?c(b,d):Math.min(c(b,d),f(a,b)[d]):parseFloat(a)},h=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,global:!0,version:"1.9.1",init:function(a,c,d){return this._wdw=a===b,this._target=a,this._tween=d,"object"!=typeof c?(c={y:c},"string"==typeof c.y&&"max"!==c.y&&"="!==c.y.charAt(1)&&(c.x=c.y)):c.nodeType&&(c={y:c,x:c}),this.vars=c,this._autoKill=c.autoKill!==!1,this.getX=e(a,"x"),this.getY=e(a,"y"),this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=c.x?(this._addTween(this,"x",this.x,g(c.x,a,"x")-(c.offsetX||0),"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=c.y?(this._addTween(this,"y",this.y,g(c.y,a,"y")-(c.offsetY||0),"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(a){this._super.setRatio.call(this,a);var d=this._wdw||!this.skipX?this.getX():this.xPrev,e=this._wdw||!this.skipY?this.getY():this.yPrev,f=e-this.yPrev,g=d-this.xPrev,i=h.autoKillThreshold;this.x<0&&(this.x=0),this.y<0&&(this.y=0),this._autoKill&&(!this.skipX&&(g>i||-i>g)&&d<c(this._target,"x")&&(this.skipX=!0),!this.skipY&&(f>i||-i>f)&&e<c(this._target,"y")&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?b.scrollTo(this.skipX?d:this.x,this.skipY?e:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),i=h.prototype;h.max=c,h.getOffset=f,h.buildGetter=e,h.autoKillThreshold=7,i._kill=function(a){return a.scrollTo_x&&(this.skipX=!0),a.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,a)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("ScrollToPlugin");

/**
 * Swiper 4.5.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 13, 2019
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,function(){"use strict";var f="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,ee="undefined"==typeof window?{document:f,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,l=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function I(e,t){var a=[],i=0;if(e&&!t&&e instanceof l)return e;if(e)if("string"==typeof e){var s,r,n=e.trim();if(0<=n.indexOf("<")&&0<=n.indexOf(">")){var o="div";for(0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select"),(r=f.createElement(o)).innerHTML=n,i=0;i<r.childNodes.length;i+=1)a.push(r.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||f).querySelectorAll(e.trim()):[f.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===ee||e===f)a.push(e);else if(0<e.length&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new l(a)}function r(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}I.fn=l.prototype,I.Class=l,I.Dom7=l;var t={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.add(t[a]);return this},removeClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.remove(t[a]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.toggle(t[a]);return this},attr:function(e,t){var a=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var i=0;i<this.length;i+=1)if(2===a.length)this[i].setAttribute(e,t);else for(var s in e)this[i][s]=e[s],this[i].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var a;if(void 0!==t){for(var i=0;i<this.length;i+=1)(a=this[i]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var s=a.getAttribute("data-"+e);return s||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransform=e,a.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransitionDuration=e,a.transitionDuration=e}return this},on:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],r=t[1],n=t[2],s=t[3];function o(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),I(t).is(r))n.apply(t,a);else for(var i=I(t).parents(),s=0;s<i.length;s+=1)I(i[s]).is(r)&&n.apply(i[s],a)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(i=(e=t)[0],n=e[1],s=e[2],r=void 0),s=s||!1;for(var d,p=i.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(d=0;d<p.length;d+=1){var h=p[d];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[h]||(u.dom7LiveListeners[h]=[]),u.dom7LiveListeners[h].push({listener:n,proxyListener:o}),u.addEventListener(h,o,s)}else for(d=0;d<p.length;d+=1){var v=p[d];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[v]||(u.dom7Listeners[v]=[]),u.dom7Listeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,s)}}return this},off:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(i=(e=t)[0],r=e[1],n=e[2],s=void 0),n=n||!1;for(var o=i.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],p=0;p<this.length;p+=1){var c=this[p],u=void 0;if(!s&&c.dom7Listeners?u=c.dom7Listeners[d]:s&&c.dom7LiveListeners&&(u=c.dom7LiveListeners[d]),u&&u.length)for(var h=u.length-1;0<=h;h-=1){var v=u[h];r&&v.listener===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r||(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1))}}return this},trigger:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=e[0].split(" "),i=e[1],s=0;s<a.length;s+=1)for(var r=a[s],n=0;n<this.length;n+=1){var o=this[n],l=void 0;try{l=new ee.CustomEvent(r,{detail:i,bubbles:!0,cancelable:!0})}catch(e){(l=f.createEvent("Event")).initEvent(r,!0,!0),l.detail=i}o.dom7EventData=e.filter(function(e,t){return 0<t}),o.dispatchEvent(l),o.dom7EventData=[],delete o.dom7EventData}return this},transitionEnd:function(t){var a,i=["webkitTransitionEnd","transitionend"],s=this;function r(e){if(e.target===this)for(t.call(this,e),a=0;a<i.length;a+=1)s.off(i[a],r)}if(t)for(a=0;a<i.length;a+=1)s.on(i[a],r);return this},outerWidth:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(0<this.length){var e=this[0],t=e.getBoundingClientRect(),a=f.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===ee?ee.scrollY:e.scrollTop,n=e===ee?ee.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var i in e)this[a].style[i]=e[i];return this}if(this[0])return ee.getComputedStyle(this[0],null).getPropertyValue(e)}if(2!==arguments.length||"string"!=typeof e)return this;for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=this[0];if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(t=I(e),a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}if(e===f)return i===f;if(e===ee)return i===ee;if(e.nodeType||e instanceof l){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return new l(a-1<e?[]:e<0?(t=a+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=0;i<t.length;i+=1){e=t[i];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var r=f.createElement("div");for(r.innerHTML=e;r.firstChild;)this[s].appendChild(r.firstChild)}else if(e instanceof l)for(var n=0;n<e.length;n+=1)this[s].appendChild(e[n]);else this[s].appendChild(e)}return this},prepend:function(e){var t,a;for(t=0;t<this.length;t+=1)if("string"==typeof e){var i=f.createElement("div");for(i.innerHTML=e,a=i.childNodes.length-1;0<=a;a-=1)this[t].insertBefore(i.childNodes[a],this[t].childNodes[0])}else if(e instanceof l)for(a=0;a<e.length;a+=1)this[t].insertBefore(e[a],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return 0<this.length?e?this[0].nextElementSibling&&I(this[0].nextElementSibling).is(e)?new l([this[0].nextElementSibling]):new l([]):this[0].nextElementSibling?new l([this[0].nextElementSibling]):new l([]):new l([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?I(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},prev:function(e){if(0<this.length){var t=this[0];return e?t.previousElementSibling&&I(t.previousElementSibling).is(e)?new l([t.previousElementSibling]):new l([]):t.previousElementSibling?new l([t.previousElementSibling]):new l([])}return new l([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?I(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?I(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return I(r(t))},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?I(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return I(r(t))},closest:function(e){var t=this;return void 0===e?new l([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].querySelectorAll(e),s=0;s<i.length;s+=1)t.push(i[s]);return new l(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].childNodes,s=0;s<i.length;s+=1)e?1===i[s].nodeType&&I(i[s]).is(e)&&t.push(i[s]):1===i[s].nodeType&&t.push(i[s]);return new l(r(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i;for(a=0;a<e.length;a+=1){var s=I(e[a]);for(i=0;i<s.length;i+=1)this[this.length]=s[i],this.length+=1}return this},styles:function(){return this[0]?ee.getComputedStyle(this[0],null):{}}};Object.keys(t).forEach(function(e){I.fn[e]=I.fn[e]||t[e]});function e(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})}var a,i,s,n,te={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){var a,i,s;void 0===t&&(t="x");var r=ee.getComputedStyle(e,null);return ee.WebKitCSSMatrix?(6<(i=r.transform||r.webkitTransform).split(",").length&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new ee.WebKitCSSMatrix("none"===i?"":i)):a=(s=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=ee.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=ee.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,s,r={},n=e||ee.location.href;if("string"==typeof n&&n.length)for(s=(a=(n=-1<n.indexOf("?")?n.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<s;t+=1)i=a[t].replace(/#\S+/g,"").split("="),r[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return r},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(null!=s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var l=r[n],d=Object.getOwnPropertyDescriptor(s,l);void 0!==d&&d.enumerable&&(te.isObject(a[l])&&te.isObject(s[l])?te.extend(a[l],s[l]):!te.isObject(a[l])&&te.isObject(s[l])?(a[l]={},te.extend(a[l],s[l])):a[l]=s[l])}}return a}},ae=(s=f.createElement("div"),{touch:ee.Modernizr&&!0===ee.Modernizr.touch||!!(0<ee.navigator.maxTouchPoints||"ontouchstart"in ee||ee.DocumentTouch&&f instanceof ee.DocumentTouch),pointerEvents:!!(ee.navigator.pointerEnabled||ee.PointerEvent||"maxTouchPoints"in ee.navigator&&0<ee.navigator.maxTouchPoints),prefixedPointerEvents:!!ee.navigator.msPointerEnabled,transition:(i=s.style,"transition"in i||"webkitTransition"in i||"MozTransition"in i),transforms3d:ee.Modernizr&&!0===ee.Modernizr.csstransforms3d||(a=s.style,"webkitPerspective"in a||"MozPerspective"in a||"OPerspective"in a||"MsPerspective"in a||"perspective"in a),flexbox:function(){for(var e=s.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in ee||"WebkitMutationObserver"in ee,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});ee.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in ee}),ie={isIE:!!ee.navigator.userAgent.match(/Trident/g)||!!ee.navigator.userAgent.match(/MSIE/g),isEdge:!!ee.navigator.userAgent.match(/Edge/g),isSafari:(n=ee.navigator.userAgent.toLowerCase(),0<=n.indexOf("safari")&&n.indexOf("chrome")<0&&n.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ee.navigator.userAgent)},o={components:{configurable:!0}};e.prototype.on=function(e,t,a){var i=this;if("function"!=typeof t)return i;var s=a?"unshift":"push";return e.split(" ").forEach(function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)}),i},e.prototype.once=function(a,i,e){var s=this;if("function"!=typeof i)return s;function r(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];i.apply(s,e),s.off(a,r),r.f7proxy&&delete r.f7proxy}return r.f7proxy=i,s.on(a,r,e)},e.prototype.off=function(e,i){var s=this;return s.eventsListeners&&e.split(" ").forEach(function(a){void 0===i?s.eventsListeners[a]=[]:s.eventsListeners[a]&&s.eventsListeners[a].length&&s.eventsListeners[a].forEach(function(e,t){(e===i||e.f7proxy&&e.f7proxy===i)&&s.eventsListeners[a].splice(t,1)})}),s},e.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i,s,r=this;return r.eventsListeners&&(s="string"==typeof e[0]||Array.isArray(e[0])?(a=e[0],i=e.slice(1,e.length),r):(a=e[0].events,i=e[0].data,e[0].context||r),(Array.isArray(a)?a:a.split(" ")).forEach(function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(s,i)})}})),r},e.prototype.useModulesParams=function(a){var i=this;i.modules&&Object.keys(i.modules).forEach(function(e){var t=i.modules[e];t.params&&te.extend(a,t.params)})},e.prototype.useModules=function(i){void 0===i&&(i={});var s=this;s.modules&&Object.keys(s.modules).forEach(function(e){var a=s.modules[e],t=i[e]||{};a.instance&&Object.keys(a.instance).forEach(function(e){var t=a.instance[e];s[e]="function"==typeof t?t.bind(s):t}),a.on&&s.on&&Object.keys(a.on).forEach(function(e){s.on(e,a.on[e])}),a.create&&a.create.bind(s)(t)})},o.components.set=function(e){this.use&&this.use(e)},e.installModule=function(t){for(var e=[],a=arguments.length-1;0<a--;)e[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=t.name||Object.keys(i.prototype.modules).length+"_"+te.now();return(i.prototype.modules[s]=t).proto&&Object.keys(t.proto).forEach(function(e){i.prototype[e]=t.proto[e]}),t.static&&Object.keys(t.static).forEach(function(e){i[e]=t.static[e]}),t.install&&t.install.apply(i,e),i},e.use=function(e){for(var t=[],a=arguments.length-1;0<a--;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(e,o);var d={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),te.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtlTranslate,r=e.wrongRTL,n=e.virtual&&t.virtual.enabled,o=n?e.virtual.slides.length:e.slides.length,l=a.children("."+e.params.slideClass),d=n?e.virtual.slides.length:l.length,p=[],c=[],u=[],h=t.slidesOffsetBefore;"function"==typeof h&&(h=t.slidesOffsetBefore.call(e));var v=t.slidesOffsetAfter;"function"==typeof v&&(v=t.slidesOffsetAfter.call(e));var f=e.snapGrid.length,m=e.snapGrid.length,g=t.spaceBetween,b=-h,w=0,y=0;if(void 0!==i){var x,T;"string"==typeof g&&0<=g.indexOf("%")&&(g=parseFloat(g.replace("%",""))/100*i),e.virtualSize=-g,s?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),1<t.slidesPerColumn&&(x=Math.floor(d/t.slidesPerColumn)===d/e.params.slidesPerColumn?d:Math.ceil(d/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(x=Math.max(x,t.slidesPerView*t.slidesPerColumn)));for(var E,S=t.slidesPerColumn,C=x/S,M=Math.floor(d/t.slidesPerColumn),P=0;P<d;P+=1){T=0;var k=l.eq(P);if(1<t.slidesPerColumn){var z=void 0,$=void 0,I=void 0;if("column"===t.slidesPerColumnFill||"row"===t.slidesPerColumnFill&&1<t.slidesPerGroup){if("column"===t.slidesPerColumnFill)I=P-($=Math.floor(P/S))*S,(M<$||$===M&&I===S-1)&&S<=(I+=1)&&(I=0,$+=1);else{var L=Math.floor(P/t.slidesPerGroup);$=P-(I=Math.floor(P/t.slidesPerView)-L*t.slidesPerColumn)*t.slidesPerView-L*t.slidesPerView}z=$+I*x/S,k.css({"-webkit-box-ordinal-group":z,"-moz-box-ordinal-group":z,"-ms-flex-order":z,"-webkit-order":z,order:z})}else $=P-(I=Math.floor(P/C))*C;k.css("margin-"+(e.isHorizontal()?"top":"left"),0!==I&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",I)}if("none"!==k.css("display")){if("auto"===t.slidesPerView){var D=ee.getComputedStyle(k[0],null),O=k[0].style.transform,A=k[0].style.webkitTransform;if(O&&(k[0].style.transform="none"),A&&(k[0].style.webkitTransform="none"),t.roundLengths)T=e.isHorizontal()?k.outerWidth(!0):k.outerHeight(!0);else if(e.isHorizontal()){var H=parseFloat(D.getPropertyValue("width")),G=parseFloat(D.getPropertyValue("padding-left")),N=parseFloat(D.getPropertyValue("padding-right")),B=parseFloat(D.getPropertyValue("margin-left")),X=parseFloat(D.getPropertyValue("margin-right")),V=D.getPropertyValue("box-sizing");T=V&&"border-box"===V&&!ie.isIE?H+B+X:H+G+N+B+X}else{var Y=parseFloat(D.getPropertyValue("height")),F=parseFloat(D.getPropertyValue("padding-top")),R=parseFloat(D.getPropertyValue("padding-bottom")),q=parseFloat(D.getPropertyValue("margin-top")),W=parseFloat(D.getPropertyValue("margin-bottom")),j=D.getPropertyValue("box-sizing");T=j&&"border-box"===j&&!ie.isIE?Y+q+W:Y+F+R+q+W}O&&(k[0].style.transform=O),A&&(k[0].style.webkitTransform=A),t.roundLengths&&(T=Math.floor(T))}else T=(i-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(T=Math.floor(T)),l[P]&&(e.isHorizontal()?l[P].style.width=T+"px":l[P].style.height=T+"px");l[P]&&(l[P].swiperSlideSize=T),u.push(T),t.centeredSlides?(b=b+T/2+w/2+g,0===w&&0!==P&&(b=b-i/2-g),0===P&&(b=b-i/2-g),Math.abs(b)<.001&&(b=0),t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b)):(t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b),b=b+T+g),e.virtualSize+=T+g,w=T,y+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+v,s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),ae.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),1<t.slidesPerColumn&&(e.virtualSize=(T+t.spaceBetween)*x,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){E=[];for(var U=0;U<p.length;U+=1){var K=p[U];t.roundLengths&&(K=Math.floor(K)),p[U]<e.virtualSize+p[0]&&E.push(K)}p=E}if(!t.centeredSlides){E=[];for(var _=0;_<p.length;_+=1){var Z=p[_];t.roundLengths&&(Z=Math.floor(Z)),p[_]<=e.virtualSize-i&&E.push(Z)}p=E,1<Math.floor(e.virtualSize-i)-Math.floor(p[p.length-1])&&p.push(e.virtualSize-i)}if(0===p.length&&(p=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?l.css({marginLeft:g+"px"}):l.css({marginRight:g+"px"}):l.css({marginBottom:g+"px"})),t.centerInsufficientSlides){var Q=0;if(u.forEach(function(e){Q+=e+(t.spaceBetween?t.spaceBetween:0)}),(Q-=t.spaceBetween)<i){var J=(i-Q)/2;p.forEach(function(e,t){p[t]=e-J}),c.forEach(function(e,t){c[t]=e+J})}}te.extend(e,{slides:l,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),d!==o&&e.emit("slidesLengthChange"),p.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),c.length!==m&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,a=this,i=[],s=0;if("number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed),"auto"!==a.params.slidesPerView&&1<a.params.slidesPerView)for(t=0;t<Math.ceil(a.params.slidesPerView);t+=1){var r=a.activeIndex+t;if(r>a.slides.length)break;i.push(a.slides.eq(r)[0])}else i.push(a.slides.eq(a.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var n=i[t].offsetHeight;s=s<n?n:s}s&&a.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(0<=d&&d<t.size-1||1<p&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(n),i.eq(n).addClass(a.slideVisibleClass))}o.progress=s?-l:l}t.visibleSlides=I(t.visibleSlides)}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,l=n;n=0==i?r=!(s=0):(r=(s=(e-t.minTranslate())/i)<=0,1<=s),te.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!l&&t.emit("reachEnd toEdge"),(o&&!r||l&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,o=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=o?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,l=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var c=0;c<s.length;c+=1)void 0!==s[c+1]?i>=s[c]&&i<s[c+1]-(s[c+1]-s[c])/2?p=c:i>=s[c]&&i<s[c+1]&&(p=c+1):i>=s[c]&&(p=c);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if((t=0<=r.indexOf(i)?r.indexOf(i):Math.floor(p/n.slidesPerGroup))>=r.length&&(t=r.length-1),p!==o){var u=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);te.extend(a,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),l!==u&&a.emit("realIndexChange"),(a.initialized||a.runCallbacksOnInit)&&a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this,a=t.params,i=I(e.target).closest("."+a.slideClass)[0],s=!1;if(i)for(var r=0;r<t.slides.length;r+=1)t.slides[r]===i&&(s=!0);if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(I(i).attr("data-swiper-slide-index"),10):t.clickedIndex=I(i).index(),a.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var p={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,a=this.rtlTranslate,i=this.translate,s=this.$wrapperEl;if(t.virtualTranslate)return a?-i:i;var r=te.getTranslate(s[0],e);return a&&(r=-r),r||0},setTranslate:function(e,t){var a=this,i=a.rtlTranslate,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(ae.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0==d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}};var c={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.params,r=a.previousIndex;s.autoHeight&&a.updateAutoHeight();var n=t;if(n=n||(r<i?"next":i<r?"prev":"reset"),a.emit("transitionStart"),e&&i!==r){if("reset"===n)return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"),"next"===n?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.previousIndex;a.animating=!1,a.setTransition(0);var r=t;if(r=r||(s<i?"next":i<s?"prev":"reset"),a.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"),"next"===r?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")}}};var u={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtlTranslate;if(s.animating&&n.preventInteractionOnTransition)return!1;var u=Math.floor(r/n.slidesPerGroup);u>=o.length&&(u=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var h,v=-o[u];if(s.updateProgress(v),n.normalizeSlideIndex)for(var f=0;f<l.length;f+=1)-Math.floor(100*v)>=Math.floor(100*l[f])&&(r=f);if(s.initialized&&r!==p){if(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate())return!1;if(!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(p||0)!==r)return!1}return h=p<r?"next":r<p?"prev":"reset",c&&-v===s.translate||!c&&v===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(v),"reset"!==h&&(s.transitionStart(a,h),s.transitionEnd(a,h)),!1):(0!==t&&ae.transition?(s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(a,h))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd))):(s.setTransition(0),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.transitionEnd(a,h)),!0)},slideToLoop:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=e;return this.params.loop&&(s+=this.loopedSlides),this.slideTo(s,t,a,i)},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.snapGrid,o=i.slidesGrid,l=i.rtlTranslate;if(s.loop){if(r)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var p,c=d(l?i.translate:-i.translate),u=n.map(function(e){return d(e)}),h=(o.map(function(e){return d(e)}),n[u.indexOf(c)],n[u.indexOf(c)-1]);return void 0!==h&&(p=o.indexOf(h))<0&&(p=i.activeIndex-1),i.slideTo(p,e,t,a)},slideReset:function(e,t,a){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,a)},slideToClosest:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.activeIndex,r=Math.floor(s/i.params.slidesPerGroup);if(r<i.snapGrid.length-1){var n=i.rtlTranslate?i.translate:-i.translate,o=i.snapGrid[r];(i.snapGrid[r+1]-o)/2<n-o&&(s=i.params.slidesPerGroup)}return i.slideTo(s,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(I(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),te.nextTick(function(){t.slideTo(r)})):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),te.nextTick(function(){t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}};var h={loopCreate:function(){var i=this,e=i.params,t=i.$wrapperEl;t.children("."+e.slideClass+"."+e.slideDuplicateClass).remove();var s=t.children("."+e.slideClass);if(e.loopFillGroupWithBlank){var a=e.slidesPerGroup-s.length%e.slidesPerGroup;if(a!==e.slidesPerGroup){for(var r=0;r<a;r+=1){var n=I(f.createElement("div")).addClass(e.slideClass+" "+e.slideBlankClass);t.append(n)}s=t.children("."+e.slideClass)}}"auto"!==e.slidesPerView||e.loopedSlides||(e.loopedSlides=s.length),i.loopedSlides=parseInt(e.loopedSlides||e.slidesPerView,10),i.loopedSlides+=e.loopAdditionalSlides,i.loopedSlides>s.length&&(i.loopedSlides=s.length);var o=[],l=[];s.each(function(e,t){var a=I(t);e<i.loopedSlides&&l.push(t),e<s.length&&e>=s.length-i.loopedSlides&&o.push(t),a.attr("data-swiper-slide-index",e)});for(var d=0;d<l.length;d+=1)t.append(I(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));for(var p=o.length-1;0<=p;p-=1)t.prepend(I(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext,l=t.snapGrid,d=t.rtlTranslate;t.allowSlidePrev=!0,t.allowSlideNext=!0;var p=-l[i]-t.getTranslate();if(i<r)e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)&&0!=p&&t.setTranslate((d?-t.translate:t.translate)-p);else if("auto"===a.slidesPerView&&2*r<=i||i>=s.length-r){e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)&&0!=p&&t.setTranslate((d?-t.translate:t.translate)-p)}t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,a=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),a.removeAttr("data-swiper-slide-index")}};var v={setGrabCursor:function(e){if(!(ae.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){ae.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}};var m={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&ae.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&ae.observer||t.update(),t.slideTo(r,0,!1)},addSlide:function(e,t){var a=this,i=a.$wrapperEl,s=a.params,r=a.activeIndex;s.loop&&(r-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+s.slideClass));var n=a.slides.length;if(e<=0)a.prependSlide(t);else if(n<=e)a.appendSlide(t);else{for(var o=e<r?r+1:r,l=[],d=n-1;e<=d;d-=1){var p=a.slides.eq(d);p.remove(),l.unshift(p)}if("object"==typeof t&&"length"in t){for(var c=0;c<t.length;c+=1)t[c]&&i.append(t[c]);o=e<r?r+t.length:r}else i.append(t);for(var u=0;u<l.length;u+=1)i.append(l[u]);s.loop&&a.loopCreate(),s.observer&&ae.observer||a.update(),s.loop?a.slideTo(o+a.loopedSlides,0,!1):a.slideTo(o,0,!1)}},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&ae.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},g=function(){var e=ee.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:ee.cordova||ee.phonegap,phonegap:ee.cordova||ee.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),s=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),n=!s&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=0<=e.toLowerCase().indexOf("chrome")),(s||n||r)&&(t.os="ios",t.ios=!0),n&&!r&&(t.osVersion=n[2].replace(/_/g,"."),t.iphone=!0),s&&(t.osVersion=s[2].replace(/_/g,"."),t.ipad=!0),r&&(t.osVersion=r[3]?r[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&0<=e.indexOf("Version/")&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(n||s||r)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var o=t.osVersion.split("."),l=f.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(r||n)&&(1*o[0]==7?1<=1*o[1]:7<1*o[0])&&l&&0<=l.getAttribute("content").indexOf("minimal-ui")}return t.pixelRatio=ee.devicePixelRatio||1,t}();function b(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev,r=e.snapGrid;if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var n=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||1<t.slidesPerView)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}}var w={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsInverse:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},y={update:d,translate:p,transition:c,slide:u,loop:h,grabCursor:v,manipulation:m,events:{attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches;if(!t.animating||!i.preventInteractionOnTransition){var r=e;if(r.originalEvent&&(r=r.originalEvent),a.isTouchEvent="touchstart"===r.type,(a.isTouchEvent||!("which"in r)||3!==r.which)&&!(!a.isTouchEvent&&"button"in r&&0<r.button||a.isTouched&&a.isMoved))if(i.noSwiping&&I(r.target).closest(i.noSwipingSelector?i.noSwipingSelector:"."+i.noSwipingClass)[0])t.allowClick=!0;else if(!i.swipeHandler||I(r).closest(i.swipeHandler)[0]){s.currentX="touchstart"===r.type?r.targetTouches[0].pageX:r.pageX,s.currentY="touchstart"===r.type?r.targetTouches[0].pageY:r.pageY;var n=s.currentX,o=s.currentY,l=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,d=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(!l||!(n<=d||n>=ee.screen.width-d)){if(te.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=n,s.startY=o,a.touchStartTime=te.now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,0<i.threshold&&(a.allowThresholdMove=!1),"touchstart"!==r.type){var p=!0;I(r.target).is(a.formElements)&&(p=!1),f.activeElement&&I(f.activeElement).is(a.formElements)&&f.activeElement!==r.target&&f.activeElement.blur();var c=p&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||c)&&r.preventDefault()}t.emit("touchStart",r)}}}}.bind(e),e.onTouchMove=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=e;if(n.originalEvent&&(n=n.originalEvent),a.isTouched){if(!a.isTouchEvent||"mousemove"!==n.type){var o="touchmove"===n.type?n.targetTouches[0].pageX:n.pageX,l="touchmove"===n.type?n.targetTouches[0].pageY:n.pageY;if(n.preventedByNestedSwiper)return s.startX=o,void(s.startY=l);if(!t.allowTouchMove)return t.allowClick=!1,void(a.isTouched&&(te.extend(s,{startX:o,startY:l,currentX:o,currentY:l}),a.touchStartTime=te.now()));if(a.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(t.isVertical()){if(l<s.startY&&t.translate<=t.maxTranslate()||l>s.startY&&t.translate>=t.minTranslate())return a.isTouched=!1,void(a.isMoved=!1)}else if(o<s.startX&&t.translate<=t.maxTranslate()||o>s.startX&&t.translate>=t.minTranslate())return;if(a.isTouchEvent&&f.activeElement&&n.target===f.activeElement&&I(n.target).is(a.formElements))return a.isMoved=!0,void(t.allowClick=!1);if(a.allowTouchCallbacks&&t.emit("touchMove",n),!(n.targetTouches&&1<n.targetTouches.length)){s.currentX=o,s.currentY=l;var d=s.currentX-s.startX,p=s.currentY-s.startY;if(!(t.params.threshold&&Math.sqrt(Math.pow(d,2)+Math.pow(p,2))<t.params.threshold)){var c;if(void 0===a.isScrolling)t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?a.isScrolling=!1:25<=d*d+p*p&&(c=180*Math.atan2(Math.abs(p),Math.abs(d))/Math.PI,a.isScrolling=t.isHorizontal()?c>i.touchAngle:90-c>i.touchAngle);if(a.isScrolling&&t.emit("touchMoveOpposite",n),void 0===a.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(a.startMoving=!0)),a.isScrolling)a.isTouched=!1;else if(a.startMoving){t.allowClick=!1,n.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&n.stopPropagation(),a.isMoved||(i.loop&&t.loopFix(),a.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),a.allowMomentumBounce=!1,!i.grabCursor||!0!==t.allowSlideNext&&!0!==t.allowSlidePrev||t.setGrabCursor(!0),t.emit("sliderFirstMove",n)),t.emit("sliderMove",n),a.isMoved=!0;var u=t.isHorizontal()?d:p;s.diff=u,u*=i.touchRatio,r&&(u=-u),t.swipeDirection=0<u?"prev":"next",a.currentTranslate=u+a.startTranslate;var h=!0,v=i.resistanceRatio;if(i.touchReleaseOnEdges&&(v=0),0<u&&a.currentTranslate>t.minTranslate()?(h=!1,i.resistance&&(a.currentTranslate=t.minTranslate()-1+Math.pow(-t.minTranslate()+a.startTranslate+u,v))):u<0&&a.currentTranslate<t.maxTranslate()&&(h=!1,i.resistance&&(a.currentTranslate=t.maxTranslate()+1-Math.pow(t.maxTranslate()-a.startTranslate-u,v))),h&&(n.preventedByNestedSwiper=!0),!t.allowSlideNext&&"next"===t.swipeDirection&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&"prev"===t.swipeDirection&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),0<i.threshold){if(!(Math.abs(u)>i.threshold||a.allowThresholdMove))return void(a.currentTranslate=a.startTranslate);if(!a.allowThresholdMove)return a.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,a.currentTranslate=a.startTranslate,void(s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&((i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&(0===a.velocities.length&&a.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:te.now()})),t.updateProgress(a.currentTranslate),t.setTranslate(a.currentTranslate))}}}}}else a.startMoving&&a.isScrolling&&t.emit("touchMoveOpposite",n)}.bind(e),e.onTouchEnd=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=te.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap",d),u<300&&300<c-a.lastClickTime&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=te.nextTick(function(){t&&!t.destroyed&&t.emit("click",d)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",d))),a.lastClickTime=te.now(),te.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);if(a.isTouched=!1,a.isMoved=!1,a.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(1<a.velocities.length){var h=a.velocities.pop(),v=a.velocities.pop(),f=h.position-v.position,m=h.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(150<m||300<te.now()-h.time)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,b=t.velocity*g,w=t.translate+b;r&&(w=-w);var y,x,T=!1,E=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(w<t.maxTranslate())i.freeModeMomentumBounce?(w+t.maxTranslate()<-E&&(w=t.maxTranslate()-E),y=t.maxTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.maxTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(w>t.minTranslate())i.freeModeMomentumBounce?(w-t.minTranslate()>E&&(w=t.minTranslate()+E),y=t.minTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.minTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(i.freeModeSticky){for(var S,C=0;C<l.length;C+=1)if(l[C]>-w){S=C;break}w=-(w=Math.abs(l[S]-w)<Math.abs(l[S-1]-w)||"next"===t.swipeDirection?l[S]:l[S-1])}if(x&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)g=r?Math.abs((-w-t.translate)/t.velocity):Math.abs((w-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&T?(t.updateProgress(y),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(y),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(w),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(w),t.updateActiveIndex(),t.updateSlidesClasses()}else if(i.freeModeSticky)return void t.slideToClosest();(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,P=t.slidesSizesGrid[0],k=0;k<o.length;k+=i.slidesPerGroup)void 0!==o[k+i.slidesPerGroup]?p>=o[k]&&p<o[k+i.slidesPerGroup]&&(P=o[(M=k)+i.slidesPerGroup]-o[k]):p>=o[k]&&(M=k,P=o[o.length-1]-o[o.length-2]);var z=(p-o[M])/P;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(z>=i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(z>1-i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}}.bind(e),e.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(ae.touch||!ae.pointerEvents&&!ae.prefixedPointerEvents){if(ae.touch){var o=!("touchstart"!==a.start||!ae.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,ae.passiveListener?{passive:!1,capture:n}:n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!g.ios&&!g.android||t.simulateTouch&&!ae.touch&&g.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),f.addEventListener("mousemove",e.onTouchMove,n),f.addEventListener("mouseup",e.onTouchEnd,!1))}else r.addEventListener(a.start,e.onTouchStart,!1),f.addEventListener(a.move,e.onTouchMove,n),f.addEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on(g.ios||g.android?"resize orientationchange observerUpdate":"resize observerUpdate",b,!0)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(ae.touch||!ae.pointerEvents&&!ae.prefixedPointerEvents){if(ae.touch){var o=!("onTouchStart"!==a.start||!ae.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!g.ios&&!g.android||t.simulateTouch&&!ae.touch&&g.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),f.removeEventListener("mousemove",e.onTouchMove,n),f.removeEventListener("mouseup",e.onTouchEnd,!1))}else r.removeEventListener(a.start,e.onTouchStart,!1),f.removeEventListener(a.move,e.onTouchMove,n),f.removeEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off(g.ios||g.android?"resize orientationchange observerUpdate":"resize observerUpdate",b)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides;void 0===i&&(i=0);var s=e.params,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var n=e.getBreakpoint(r);if(n&&e.currentBreakpoint!==n){var o=n in r?r[n]:void 0;o&&["slidesPerView","spaceBetween","slidesPerGroup"].forEach(function(e){var t=o[e];void 0!==t&&(o[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")});var l=o||e.originalParams,d=l.direction&&l.direction!==s.direction,p=s.loop&&(l.slidesPerView!==s.slidesPerView||d);d&&a&&e.changeDirection(),te.extend(e.params,l),te.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=n,p&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",l)}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var i=0;i<a.length;i+=1){var s=a[i];this.params.breakpointsInverse?s<=ee.innerWidth&&(t=s):s>=ee.innerWidth&&!t&&(t=s)}return t||"max"}}},checkOverflow:{checkOverflow:function(){var e=this,t=e.isLocked;e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),t&&t!==e.isLocked&&(e.isEnd=!1,e.navigation.update())}},classes:{addClasses:function(){var t=this.classNames,a=this.params,e=this.rtl,i=this.$el,s=[];s.push("initialized"),s.push(a.direction),a.freeMode&&s.push("free-mode"),ae.flexbox||s.push("no-flexbox"),a.autoHeight&&s.push("autoheight"),e&&s.push("rtl"),1<a.slidesPerColumn&&s.push("multirow"),g.android&&s.push("android"),g.ios&&s.push("ios"),(ie.isIE||ie.isEdge)&&(ae.pointerEvents||ae.prefixedPointerEvents)&&s.push("wp8-"+a.direction),s.forEach(function(e){t.push(a.containerModifierClass+e)}),i.addClass(t.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,t,a,i,s,r){var n;function o(){r&&r()}e.complete&&s?o():t?((n=new ee.Image).onload=o,n.onerror=o,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):o()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},x={},T=function(u){function h(){for(var e,t,s,a=[],i=arguments.length;i--;)a[i]=arguments[i];s=(s=1===a.length&&a[0].constructor&&a[0].constructor===Object?a[0]:(t=(e=a)[0],e[1]))||{},s=te.extend({},s),t&&!s.el&&(s.el=t),u.call(this,s),Object.keys(y).forEach(function(t){Object.keys(y[t]).forEach(function(e){h.prototype[e]||(h.prototype[e]=y[t][e])})});var r=this;void 0===r.modules&&(r.modules={}),Object.keys(r.modules).forEach(function(e){var t=r.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i||null===i)return;if(!(a in s&&"enabled"in i))return;!0===s[a]&&(s[a]={enabled:!0}),"object"!=typeof s[a]||"enabled"in s[a]||(s[a].enabled=!0),s[a]||(s[a]={enabled:!1})}});var n=te.extend({},w);r.useModulesParams(n),r.params=te.extend({},n,x,s),r.originalParams=te.extend({},r.params),r.passedParams=te.extend({},s);var o=(r.$=I)(r.params.el);if(t=o[0]){if(1<o.length){var l=[];return o.each(function(e,t){var a=te.extend({},s,{el:t});l.push(new h(a))}),l}t.swiper=r,o.data("swiper",r);var d,p,c=o.children("."+r.params.wrapperClass);return te.extend(r,{$el:o,el:t,$wrapperEl:c,wrapperEl:c[0],classNames:[],slides:I(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===r.params.direction},isVertical:function(){return"vertical"===r.params.direction},rtl:"rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction"),rtlTranslate:"horizontal"===r.params.direction&&("rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction")),wrongRTL:"-webkit-box"===c.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:(d=["touchstart","touchmove","touchend"],p=["mousedown","mousemove","mouseup"],ae.pointerEvents?p=["pointerdown","pointermove","pointerup"]:ae.prefixedPointerEvents&&(p=["MSPointerDown","MSPointerMove","MSPointerUp"]),r.touchEventsTouch={start:d[0],move:d[1],end:d[2]},r.touchEventsDesktop={start:p[0],move:p[1],end:p[2]},ae.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:te.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.useModules(),r.params.init&&r.init(),r}}u&&(h.__proto__=u);var e={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return((h.prototype=Object.create(u&&u.prototype)).constructor=h).prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,s<(l+=a[d].swiperSlideSize)&&(o=!0));for(var p=r-1;0<=p;p-=1)a[p]&&!o&&(n+=1,s<(l+=a[p].swiperSlideSize)&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},h.prototype.update=function(){var a=this;if(a&&!a.destroyed){var e=a.snapGrid,t=a.params;t.breakpoints&&a.setBreakpoint(),a.updateSize(),a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.params.freeMode?(i(),a.params.autoHeight&&a.updateAutoHeight()):(("auto"===a.params.slidesPerView||1<a.params.slidesPerView)&&a.isEnd&&!a.params.centeredSlides?a.slideTo(a.slides.length-1,0,!1,!0):a.slideTo(a.activeIndex,0,!1,!0))||i(),t.watchOverflow&&e!==a.snapGrid&&a.checkOverflow(),a.emit("update")}function i(){var e=a.rtlTranslate?-1*a.translate:a.translate,t=Math.min(Math.max(e,a.maxTranslate()),a.minTranslate());a.setTranslate(t),a.updateActiveIndex(),a.updateSlidesClasses()}},h.prototype.changeDirection=function(a,e){void 0===e&&(e=!0);var t=this,i=t.params.direction;return(a=a||("horizontal"===i?"vertical":"horizontal"))===i||"horizontal"!==a&&"vertical"!==a||(t.$el.removeClass(""+t.params.containerModifierClass+i+" wp8-"+i).addClass(""+t.params.containerModifierClass+a),(ie.isIE||ie.isEdge)&&(ae.pointerEvents||ae.prefixedPointerEvents)&&t.$el.addClass(t.params.containerModifierClass+"wp8-"+a),t.params.direction=a,t.slides.each(function(e,t){"vertical"===a?t.style.width="":t.style.height=""}),t.emit("changeDirection"),e&&t.update()),t},h.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},h.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;return void 0===a.params||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),te.deleteProps(a)),a.destroyed=!0),null},h.extendDefaults=function(e){te.extend(x,e)},e.extendedDefaults.get=function(){return x},e.defaults.get=function(){return w},e.Class.get=function(){return u},e.$.get=function(){return I},Object.defineProperties(h,e),h}(e),E={name:"device",proto:{device:g},static:{device:g}},S={name:"support",proto:{support:ae},static:{support:ae}},C={name:"browser",proto:{browser:ie},static:{browser:ie}},M={name:"resize",create:function(){var e=this;te.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){ee.addEventListener("resize",this.resize.resizeHandler),ee.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){ee.removeEventListener("resize",this.resize.resizeHandler),ee.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},P={func:ee.MutationObserver||ee.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new P.func(function(e){if(1!==e.length){var t=function(){a.emit("observerUpdate",e[0])};ee.requestAnimationFrame?ee.requestAnimationFrame(t):ee.setTimeout(t,0)}else a.emit("observerUpdate",e[0])});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(ae.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},k={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){te.extend(this,{observer:{init:P.init.bind(this),attach:P.attach.bind(this),destroy:P.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},z={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.params.virtual,o=n.addSlidesBefore,l=n.addSlidesAfter,d=t.virtual,p=d.from,c=d.to,u=d.slides,h=d.slidesGrid,v=d.renderSlide,f=d.offset;t.updateActiveIndex();var m,g,b,w=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",b=r?(g=Math.floor(i/2)+s+o,Math.floor(i/2)+s+l):(g=i+(s-1)+o,s+l);var y=Math.max((w||0)-b,0),x=Math.min((w||0)+g,u.length-1),T=(t.slidesGrid[y]||0)-(t.slidesGrid[0]||0);function E(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(te.extend(t.virtual,{from:y,to:x,offset:T,slidesGrid:t.slidesGrid}),p===y&&c===x&&!e)return t.slidesGrid!==h&&T!==f&&t.slides.css(m,T+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:T,from:y,to:x,slides:function(){for(var e=[],t=y;t<=x;t+=1)e.push(u[t]);return e}()}),void E();var S=[],C=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var M=p;M<=c;M+=1)(M<y||x<M)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+M+'"]').remove();for(var P=0;P<u.length;P+=1)y<=P&&P<=x&&(void 0===c||e?C.push(P):(c<P&&C.push(P),P<p&&S.push(P)));C.forEach(function(e){t.$wrapperEl.append(v(u[e],e))}),S.sort(function(e,t){return t-e}).forEach(function(e){t.$wrapperEl.prepend(v(u[e],e))}),t.$wrapperEl.children(".swiper-slide").css(m,T+"px"),E()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?I(i.renderSlide.call(a,e,t)):I('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this,a=t.activeIndex,i=a+1,s=1;if(Array.isArray(e)){for(var r=0;r<e.length;r+=1)e[r]&&t.virtual.slides.unshift(e[r]);i=a+e.length,s=e.length}else t.virtual.slides.unshift(e);if(t.params.virtual.cache){var n=t.virtual.cache,o={};Object.keys(n).forEach(function(e){o[parseInt(e,10)+s]=n[e]}),t.virtual.cache=o}t.virtual.update(!0),t.slideTo(i,0)},removeSlide:function(e){var t=this;if(null!=e){var a=t.activeIndex;if(Array.isArray(e))for(var i=e.length-1;0<=i;i-=1)t.virtual.slides.splice(e[i],1),t.params.virtual.cache&&delete t.virtual.cache[e[i]],e[i]<a&&(a-=1),a=Math.max(a,0);else t.virtual.slides.splice(e,1),t.params.virtual.cache&&delete t.virtual.cache[e],e<a&&(a-=1),a=Math.max(a,0);t.virtual.update(!0),t.slideTo(a,0)}},removeAllSlides:function(){var e=this;e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),e.virtual.update(!0),e.slideTo(0,0)}},$={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){var e=this;te.extend(e,{virtual:{update:z.update.bind(e),appendSlide:z.appendSlide.bind(e),prependSlide:z.prependSlide.bind(e),removeSlide:z.removeSlide.bind(e),removeAllSlides:z.removeAllSlides.bind(e),renderSlide:z.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};te.extend(e.params,t),te.extend(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},L={handle:function(e){var t=this,a=t.rtlTranslate,i=e;i.originalEvent&&(i=i.originalEvent);var s=i.keyCode||i.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===s||t.isVertical()&&40===s||34===s))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===s||t.isVertical()&&38===s||33===s))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey||f.activeElement&&f.activeElement.nodeName&&("input"===f.activeElement.nodeName.toLowerCase()||"textarea"===f.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(33===s||34===s||37===s||39===s||38===s||40===s)){var r=!1;if(0<t.$el.parents("."+t.params.slideClass).length&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var n=ee.innerWidth,o=ee.innerHeight,l=t.$el.offset();a&&(l.left-=t.$el[0].scrollLeft);for(var d=[[l.left,l.top],[l.left+t.width,l.top],[l.left,l.top+t.height],[l.left+t.width,l.top+t.height]],p=0;p<d.length;p+=1){var c=d[p];0<=c[0]&&c[0]<=n&&0<=c[1]&&c[1]<=o&&(r=!0)}if(!r)return}t.isHorizontal()?(33!==s&&34!==s&&37!==s&&39!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),(34!==s&&39!==s||a)&&(33!==s&&37!==s||!a)||t.slideNext(),(33!==s&&37!==s||a)&&(34!==s&&39!==s||!a)||t.slidePrev()):(33!==s&&34!==s&&38!==s&&40!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),34!==s&&40!==s||t.slideNext(),33!==s&&38!==s||t.slidePrev()),t.emit("keyPress",s)}},enable:function(){this.keyboard.enabled||(I(f).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(I(f).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},D={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){te.extend(this,{keyboard:{enabled:!1,enable:L.enable.bind(this),disable:L.disable.bind(this),handle:L.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var O={lastScrollTime:te.now(),event:-1<ee.navigator.userAgent.indexOf("firefox")?"DOMMouseScroll":function(){var e="onwheel",t=e in f;if(!t){var a=f.createElement("div");a.setAttribute(e,"return;"),t="function"==typeof a[e]}return!t&&f.implementation&&f.implementation.hasFeature&&!0!==f.implementation.hasFeature("","")&&(t=f.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,a=this,i=a.params.mousewheel;if(!a.mouseEntered&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var s=0,r=a.rtlTranslate?-1:1,n=O.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(n.pixelX)>Math.abs(n.pixelY)))return!0;s=n.pixelX*r}else{if(!(Math.abs(n.pixelY)>Math.abs(n.pixelX)))return!0;s=n.pixelY}else s=Math.abs(n.pixelX)>Math.abs(n.pixelY)?-n.pixelX*r:-n.pixelY;if(0===s)return!0;if(i.invert&&(s=-s),a.params.freeMode){a.params.loop&&a.loopFix();var o=a.getTranslate()+s*i.sensitivity,l=a.isBeginning,d=a.isEnd;if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),a.setTransition(0),a.setTranslate(o),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!l&&a.isBeginning||!d&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=te.nextTick(function(){a.slideToClosest()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),o===a.minTranslate()||o===a.maxTranslate())return!0}else{if(60<te.now()-a.mousewheel.lastScrollTime)if(s<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new ee.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var e=this;if(!O.event)return!1;if(e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=I(e.params.mousewheel.eventsTarged)),t.on("mouseenter",e.mousewheel.handleMouseEnter),t.on("mouseleave",e.mousewheel.handleMouseLeave),t.on(O.event,e.mousewheel.handle),e.mousewheel.enabled=!0},disable:function(){var e=this;if(!O.event)return!1;if(!e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=I(e.params.mousewheel.eventsTarged)),t.off(O.event,e.mousewheel.handle),!(e.mousewheel.enabled=!1)}},A={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&0<s.length&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass),s[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)),i&&0<i.length&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,a=this,i=a.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=I(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&1<e.length&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=I(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&1<t.length&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&0<e.length&&e.on("click",a.navigation.onNextClick),t&&0<t.length&&t.on("click",a.navigation.onPrevClick),te.extend(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click",e.navigation.onNextClick),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}},H={update:function(){var e=this,t=e.rtl,s=e.params.pagination;if(s.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var r,a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,n=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((r=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>a-1-2*e.loopedSlides&&(r-=a-2*e.loopedSlides),n-1<r&&(r-=n),r<0&&"bullets"!==e.params.paginationType&&(r=n+r)):r=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&0<e.pagination.bullets.length){var o,l,d,p=e.pagination.bullets;if(s.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),i.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(s.dynamicMainBullets+4)+"px"),1<s.dynamicMainBullets&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=r-e.previousIndex,e.pagination.dynamicBulletIndex>s.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=s.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),o=r-e.pagination.dynamicBulletIndex,d=((l=o+(Math.min(p.length,s.dynamicMainBullets)-1))+o)/2),p.removeClass(s.bulletActiveClass+" "+s.bulletActiveClass+"-next "+s.bulletActiveClass+"-next-next "+s.bulletActiveClass+"-prev "+s.bulletActiveClass+"-prev-prev "+s.bulletActiveClass+"-main"),1<i.length)p.each(function(e,t){var a=I(t),i=a.index();i===r&&a.addClass(s.bulletActiveClass),s.dynamicBullets&&(o<=i&&i<=l&&a.addClass(s.bulletActiveClass+"-main"),i===o&&a.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),i===l&&a.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next"))});else if(p.eq(r).addClass(s.bulletActiveClass),s.dynamicBullets){for(var c=p.eq(o),u=p.eq(l),h=o;h<=l;h+=1)p.eq(h).addClass(s.bulletActiveClass+"-main");c.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),u.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next")}if(s.dynamicBullets){var v=Math.min(p.length,s.dynamicMainBullets+4),f=(e.pagination.bulletSize*v-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,m=t?"right":"left";p.css(e.isHorizontal()?m:"top",f+"px")}}if("fraction"===s.type&&(i.find("."+s.currentClass).text(s.formatFractionCurrent(r+1)),i.find("."+s.totalClass).text(s.formatFractionTotal(n))),"progressbar"===s.type){var g;g=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var b=(r+1)/n,w=1,y=1;"horizontal"===g?w=b:y=b,i.find("."+s.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+y+")").transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(i.html(s.renderCustom(e,r+1,n)),e.emit("paginationRender",e,i[0])):e.emit("paginationUpdate",e,i[0]),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](s.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var a=this,e=a.params.pagination;if(e.el){var t=I(e.el);0!==t.length&&(a.params.uniqueNavElements&&"string"==typeof e.el&&1<t.length&&1===a.$el.find(e.el).length&&(t=a.$el.find(e.el)),"bullets"===e.type&&e.clickable&&t.addClass(e.clickableClass),t.addClass(e.modifierClass+e.type),"bullets"===e.type&&e.dynamicBullets&&(t.addClass(""+e.modifierClass+e.type+"-dynamic"),a.pagination.dynamicBulletIndex=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.addClass(e.progressbarOppositeClass),e.clickable&&t.on("click","."+e.bulletClass,function(e){e.preventDefault();var t=I(this).index()*a.params.slidesPerGroup;a.params.loop&&(t+=a.loopedSlides),a.slideTo(t)}),te.extend(a.pagination,{$el:t,el:t[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},G={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,p=(r-s)*i;a?0<(p=-p)?(d=s-p,p=0):r<-p+s&&(d=r+p):p<0?(d=s+p,p=0):r<p+s&&(d=r-p),e.isHorizontal()?(ae.transforms3d?n.transform("translate3d("+p+"px, 0, 0)"):n.transform("translateX("+p+"px)"),n[0].style.width=d+"px"):(ae.transforms3d?n.transform("translate3d(0px, "+p+"px, 0)"):n.transform("translateY("+p+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=1<=n?"none":"",e.params.scrollbar.hide&&(i[0].style.opacity=0),te.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s}),t.$el[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=a.rtlTranslate,r=i.$el,n=i.dragSize,o=i.trackSize,l=i.dragStartPos;t=(i.getPointerPosition(e)-r.offset()[a.isHorizontal()?"left":"top"]-(null!==l?l:n/2))/(o-n),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var d=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(d),a.setTranslate(d),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,t.scrollbar.dragStartPos=e.target===n[0]||e.target===n?i.getPointerPosition(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,a=this.$wrapperEl,i=t.$el,s=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),a.transition(0),i.transition(0),s.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=te.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!ae.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!ae.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};ae.touch?(r.addEventListener(a.start,e.scrollbar.onDragStart,n),r.addEventListener(a.move,e.scrollbar.onDragMove,n),r.addEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.addEventListener(i.start,e.scrollbar.onDragStart,n),f.addEventListener(i.move,e.scrollbar.onDragMove,n),f.addEventListener(i.end,e.scrollbar.onDragEnd,o))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!ae.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!ae.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};ae.touch?(r.removeEventListener(a.start,e.scrollbar.onDragStart,n),r.removeEventListener(a.move,e.scrollbar.onDragMove,n),r.removeEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.removeEventListener(i.start,e.scrollbar.onDragStart,n),f.removeEventListener(i.move,e.scrollbar.onDragMove,n),f.removeEventListener(i.end,e.scrollbar.onDragEnd,o))}},init:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.$el,i=e.params.scrollbar,s=I(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&1<s.length&&1===a.find(i.el).length&&(s=a.find(i.el));var r=s.find("."+e.params.scrollbar.dragClass);0===r.length&&(r=I('<div class="'+e.params.scrollbar.dragClass+'"></div>'),s.append(r)),te.extend(t,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},N={setTransform:function(e,t){var a=this.rtl,i=I(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y"),l=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||o?(n=n||"0",o=o||"0"):this.isHorizontal()?(n=r,o="0"):(o=r,n="0"),n=0<=n.indexOf("%")?parseInt(n,10)*t*s+"%":n*t*s+"px",o=0<=o.indexOf("%")?parseInt(o,10)*t+"%":o*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==l)i.transform("translate3d("+n+", "+o+", 0px)");else{var c=l-(l-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+o+", 0px) scale("+c+")")}},setTranslate:function(){var i=this,e=i.$el,t=i.slides,s=i.progress,r=i.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e,t){i.parallax.setTransform(t,s)}),t.each(function(e,t){var a=t.progress;1<i.params.slidesPerGroup&&"auto"!==i.params.slidesPerView&&(a+=Math.ceil(e/2)-s*(r.length-1)),a=Math.min(Math.max(a,-1),1),I(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e,t){i.parallax.setTransform(t,a)})})},setTransition:function(s){void 0===s&&(s=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e,t){var a=I(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||s;0===s&&(i=0),a.transition(i)})}},B={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!ae.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,s.scaleStart=B.getDistanceBetweenTouches(e)}s.$slideEl&&s.$slideEl.length||(s.$slideEl=I(e.target).closest(".swiper-slide"),0===s.$slideEl.length&&(s.$slideEl=t.slides.eq(t.activeIndex)),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+a.containerClass),s.maxRatio=s.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==s.$imageWrapEl.length)?(s.$imageEl.transition(0),t.zoom.isScaling=!0):s.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!ae.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.fakeGestureMoved=!0,i.scaleMove=B.getDistanceBetweenTouches(e)}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=ae.gestures?e.scale*a.currentScale:i.scaleMove/i.scaleStart*a.currentScale,a.scale>i.maxRatio&&(a.scale=i.maxRatio-1+Math.pow(a.scale-i.maxRatio+1,.5)),a.scale<t.minRatio&&(a.scale=t.minRatio+1-Math.pow(t.minRatio-a.scale+1,.5)),i.$imageEl.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!ae.gestures){if(!a.fakeGestureTouched||!a.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!g.android)return;a.fakeGestureTouched=!1,a.fakeGestureMoved=!1}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=Math.max(Math.min(a.scale,i.maxRatio),t.minRatio),i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(i.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(g.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=te.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=te.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,o,l,d,p,c,u,h,v,f,m,g=this,b=g.zoom,w=g.params.zoom,y=b.gesture,x=b.image;y.$slideEl||(y.$slideEl=g.clickedSlide?I(g.clickedSlide):g.slides.eq(g.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length&&(y.$slideEl.addClass(""+w.zoomedSlideClass),a=void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,"touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(f=y.$slideEl[0].offsetWidth,m=y.$slideEl[0].offsetHeight,i=y.$slideEl.offset().left+f/2-t,s=y.$slideEl.offset().top+m/2-a,o=y.$imageEl[0].offsetWidth,l=y.$imageEl[0].offsetHeight,d=o*b.scale,p=l*b.scale,h=-(c=Math.min(f/2-d/2,0)),v=-(u=Math.min(m/2-p/2,0)),(r=i*b.scale)<c&&(r=c),h<r&&(r=h),(n=s*b.scale)<u&&(n=u),v<n&&(n=v)):n=r=0,y.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(i.$slideEl=e.clickedSlide?I(e.clickedSlide):e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this,t=e.zoom;if(!t.enabled){t.enabled=!0;var a=!("touchstart"!==e.touchEvents.start||!ae.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};ae.gestures?(e.$wrapperEl.on("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){e.zoom.enabled=!1;var a=!("touchstart"!==e.touchEvents.start||!ae.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};ae.gestures?(e.$wrapperEl.off("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}}},X={loadInSlide:function(e,l){void 0===l&&(l=!0);var d=this,p=d.params.lazy;if(void 0!==e&&0!==d.slides.length){var c=d.virtual&&d.params.virtual.enabled?d.$wrapperEl.children("."+d.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):d.slides.eq(e),t=c.find("."+p.elementClass+":not(."+p.loadedClass+"):not(."+p.loadingClass+")");!c.hasClass(p.elementClass)||c.hasClass(p.loadedClass)||c.hasClass(p.loadingClass)||(t=t.add(c[0])),0!==t.length&&t.each(function(e,t){var i=I(t);i.addClass(p.loadingClass);var s=i.attr("data-background"),r=i.attr("data-src"),n=i.attr("data-srcset"),o=i.attr("data-sizes");d.loadImage(i[0],r||s,n,o,!1,function(){if(null!=d&&d&&(!d||d.params)&&!d.destroyed){if(s?(i.css("background-image",'url("'+s+'")'),i.removeAttr("data-background")):(n&&(i.attr("srcset",n),i.removeAttr("data-srcset")),o&&(i.attr("sizes",o),i.removeAttr("data-sizes")),r&&(i.attr("src",r),i.removeAttr("data-src"))),i.addClass(p.loadedClass).removeClass(p.loadingClass),c.find("."+p.preloaderClass).remove(),d.params.loop&&l){var e=c.attr("data-swiper-slide-index");if(c.hasClass(d.params.slideDuplicateClass)){var t=d.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+d.params.slideDuplicateClass+")");d.lazy.loadInSlide(t.index(),!1)}else{var a=d.$wrapperEl.children("."+d.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');d.lazy.loadInSlide(a.index(),!1)}}d.emit("lazyImageReady",c[0],i[0])}}),d.emit("lazyImageLoad",c[0],i[0])})}},load:function(){var i=this,t=i.$wrapperEl,a=i.params,s=i.slides,e=i.activeIndex,r=i.virtual&&a.virtual.enabled,n=a.lazy,o=a.slidesPerView;function l(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function d(e){return r?I(e).attr("data-swiper-slide-index"):I(e).index()}if("auto"===o&&(o=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each(function(e,t){var a=r?I(t).attr("data-swiper-slide-index"):I(t).index();i.lazy.loadInSlide(a)});else if(1<o)for(var p=e;p<e+o;p+=1)l(p)&&i.lazy.loadInSlide(p);else i.lazy.loadInSlide(e);if(n.loadPrevNext)if(1<o||n.loadPrevNextAmount&&1<n.loadPrevNextAmount){for(var c=n.loadPrevNextAmount,u=o,h=Math.min(e+u+Math.max(c,u),s.length),v=Math.max(e-Math.max(u,c),0),f=e+o;f<h;f+=1)l(f)&&i.lazy.loadInSlide(f);for(var m=v;m<e;m+=1)l(m)&&i.lazy.loadInSlide(m)}else{var g=t.children("."+a.slideNextClass);0<g.length&&i.lazy.loadInSlide(d(g));var b=t.children("."+a.slidePrevClass);0<b.length&&i.lazy.loadInSlide(d(b))}}},V={LinearSpline:function(e,t){var a,i,s,r,n,o=function(e,t){for(i=-1,a=e.length;1<a-i;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new V.LinearSpline(t.slidesGrid,e.slidesGrid):new V.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control;function n(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof T&&n(r[o]);else r instanceof T&&t!==r&&n(r)},setTransition:function(t,e){var a,i=this,s=i.controller.control;function r(e){e.setTransition(t,i),0!==t&&(e.transitionStart(),e.params.autoHeight&&te.nextTick(function(){e.updateAutoHeight()}),e.$wrapperEl.transitionEnd(function(){s&&(e.params.loop&&"slide"===i.params.controller.by&&e.loopFix(),e.transitionEnd())}))}if(Array.isArray(s))for(a=0;a<s.length;a+=1)s[a]!==e&&s[a]instanceof T&&r(s[a]);else s instanceof T&&e!==s&&r(s)}},Y={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this,a=t.params.a11y;if(13===e.keyCode){var i=I(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is("."+t.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&0<i.length&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&0<a.length&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var i=this,s=i.params.a11y;i.pagination&&i.params.pagination.clickable&&i.pagination.bullets&&i.pagination.bullets.length&&i.pagination.bullets.each(function(e,t){var a=I(t);i.a11y.makeElFocusable(a),i.a11y.addElRole(a,"button"),i.a11y.addElLabel(a,s.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&0<a.a11y.liveRegion.length&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterKey),t&&t.off("keydown",a.a11y.onEnterKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown","."+a.params.pagination.bulletClass,a.a11y.onEnterKey)}},F={init:function(){var e=this;if(e.params.history){if(!ee.history||!ee.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=F.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||ee.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||ee.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=F.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=ee.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){if(this.history.initialized&&this.params.history.enabled){var a=this.slides.eq(t),i=F.slugify(a.attr("data-history"));ee.location.pathname.includes(e)||(i=e+"/"+i);var s=ee.history.state;s&&s.value===i||(this.params.history.replaceState?ee.history.replaceState({value:i},null,i):ee.history.pushState({value:i},null,i))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(F.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},R={onHashCange:function(){var e=this,t=f.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){var a=e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===a)return;e.slideTo(a)}},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&ee.history&&ee.history.replaceState)ee.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");f.location.hash=a||""}},init:function(){var e=this;if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var t=f.location.hash.replace("#","");if(t)for(var a=0,i=e.slides.length;a<i;a+=1){var s=e.slides.eq(a);if((s.attr("data-hash")||s.attr("data-history"))===t&&!s.hasClass(e.params.slideDuplicateClass)){var r=s.index();e.slideTo(r,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&I(ee).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&I(ee).off("hashchange",this.hashNavigation.onHashCange)}},q={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=te.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?(t.$wrapperEl[0].addEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd)):(t.autoplay.paused=!1,t.autoplay.run())))}},W={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var a=this,t=a.slides,i=a.$wrapperEl;if(t.transition(e),a.params.virtualTranslate&&0!==e){var s=!1;t.transitionEnd(function(){if(!s&&a&&!a.destroyed){s=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)i.trigger(e[t])}})}}},j={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,o=t.rtlTranslate,l=t.size,d=t.params.cubeEffect,p=t.isHorizontal(),c=t.virtual&&t.params.virtual.enabled,u=0;d.shadow&&(p?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=I('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=I('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var h=0;h<s.length;h+=1){var v=s.eq(h),f=h;c&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),p||(y=w,w=0);var T="rotateX("+(p?0:-m)+"deg) rotateY("+(p?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&-1<b&&(u=90*f+90*b,o&&(u=90*-f-90*b)),v.transform(T),d.slideShadows){var E=p?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=p?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=I('<div class="swiper-slide js__tab-animation-shadow-'+(p?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=I('<div class="swiper-slide js__tab-animation-shadow-'+(p?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(p)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(u)-90*Math.floor(Math.abs(u)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),P=d.shadowScale,k=d.shadowScale/M,z=d.shadowOffset;e.transform("scale3d("+P+", 1, "+k+") translate3d(0px, "+(n/2+z)+"px, "+-n/2/k+"px) rotateX(-90deg)")}var $=ie.isSafari||ie.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(t.isHorizontal()?0:u)+"deg) rotateY("+(t.isHorizontal()?-u:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},U={setTranslate:function(){for(var e=this,t=e.slides,a=e.rtlTranslate,i=0;i<t.length;i+=1){var s=t.eq(i),r=s[0].progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(e.isHorizontal()?a&&(n=-n):(d=l,o=-n,n=l=0),s[0].style.zIndex=-Math.abs(Math.round(r))+t.length,e.params.flipEffect.slideShadows){var p=e.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=e.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=I('<div class="swiper-slide js__tab-animation-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=I('<div class="swiper-slide js__tab-animation-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var a=this,t=a.slides,i=a.activeIndex,s=a.$wrapperEl;if(t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),a.params.virtualTranslate&&0!==e){var r=!1;t.eq(i).transitionEnd(function(){if(!r&&a&&!a.destroyed){r=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)s.trigger(e[t])}})}}},K={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.$wrapperEl,r=e.slidesSizesGrid,n=e.params.coverflowEffect,o=e.isHorizontal(),l=e.translate,d=o?t/2-l:a/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,h=i.length;u<h;u+=1){var v=i.eq(u),f=r[u],m=(d-v[0].swiperSlideOffset-f/2)/f*n.modifier,g=o?p*m:0,b=o?0:p*m,w=-c*Math.abs(m),y=o?0:n.stretch*m,x=o?n.stretch*m:0;Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0),Math.abs(b)<.001&&(b=0);var T="translate3d("+x+"px,"+y+"px,"+w+"px)  rotateX("+b+"deg) rotateY("+g+"deg)";if(v.transform(T),v[0].style.zIndex=1-Math.abs(Math.round(m)),n.slideShadows){var E=o?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=o?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=I('<div class="swiper-slide js__tab-animation-shadow-'+(o?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=I('<div class="swiper-slide js__tab-animation-shadow-'+(o?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=0<m?m:0),S.length&&(S[0].style.opacity=0<-m?-m:0)}}(ae.pointerEvents||ae.prefixedPointerEvents)&&(s[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},_={init:function(){var e=this,t=e.params.thumbs,a=e.constructor;t.swiper instanceof a?(e.thumbs.swiper=t.swiper,te.extend(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),te.extend(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):te.isObject(t.swiper)&&(e.thumbs.swiper=new a(te.extend({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick)},onThumbClick:function(){var e=this,t=e.thumbs.swiper;if(t){var a=t.clickedIndex,i=t.clickedSlide;if(!(i&&I(i).hasClass(e.params.thumbs.slideThumbActiveClass)||null==a)){var s;if(s=t.params.loop?parseInt(I(t.clickedSlide).attr("data-swiper-slide-index"),10):a,e.params.loop){var r=e.activeIndex;e.slides.eq(r).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,r=e.activeIndex);var n=e.slides.eq(r).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),o=e.slides.eq(r).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r<r-n?o:n}e.slideTo(s)}}},update:function(e){var t=this,a=t.thumbs.swiper;if(a){var i="auto"===a.params.slidesPerView?a.slidesPerViewDynamic():a.params.slidesPerView;if(t.realIndex!==a.realIndex){var s,r=a.activeIndex;if(a.params.loop){a.slides.eq(r).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,r=a.activeIndex);var n=a.slides.eq(r).prevAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index(),o=a.slides.eq(r).nextAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r==r-n?r:o-r<r-n?o:n}else s=t.realIndex;a.visibleSlidesIndexes&&a.visibleSlidesIndexes.indexOf(s)<0&&(a.params.centeredSlides?s=r<s?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:r<s&&(s=s-i+1),a.slideTo(s,e?0:void 0))}var l=1,d=t.params.thumbs.slideThumbActiveClass;if(1<t.params.slidesPerView&&!t.params.centeredSlides&&(l=t.params.slidesPerView),a.slides.removeClass(d),a.params.loop||a.params.virtual)for(var p=0;p<l;p+=1)a.$wrapperEl.children('[data-swiper-slide-index="'+(t.realIndex+p)+'"]').addClass(d);else for(var c=0;c<l;c+=1)a.slides.eq(t.realIndex+c).addClass(d)}}},Z=[E,S,C,M,k,$,D,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;te.extend(e,{mousewheel:{enabled:!1,enable:O.enable.bind(e),disable:O.disable.bind(e),handle:O.handle.bind(e),handleMouseEnter:O.handleMouseEnter.bind(e),handleMouseLeave:O.handleMouseLeave.bind(e),lastScrollTime:te.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){var e=this;te.extend(e,{navigation:{init:A.init.bind(e),update:A.update.bind(e),destroy:A.destroy.bind(e),onNextClick:A.onNextClick.bind(e),onPrevClick:A.onPrevClick.bind(e)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,a=this,i=a.navigation,s=i.$nextEl,r=i.$prevEl;!a.params.navigation.hideOnClick||I(e.target).is(r)||I(e.target).is(s)||(s?t=s.hasClass(a.params.navigation.hiddenClass):r&&(t=r.hasClass(a.params.navigation.hiddenClass)),!0===t?a.emit("navigationShow",a):a.emit("navigationHide",a),s&&s.toggleClass(a.params.navigation.hiddenClass),r&&r.toggleClass(a.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){var e=this;te.extend(e,{pagination:{init:H.init.bind(e),render:H.render.bind(e),update:H.update.bind(e),destroy:H.destroy.bind(e),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){var t=this;t.params.pagination.el&&t.params.pagination.hideOnClick&&0<t.pagination.$el.length&&!I(e.target).hasClass(t.params.pagination.bulletClass)&&(!0===t.pagination.$el.hasClass(t.params.pagination.hiddenClass)?t.emit("paginationShow",t):t.emit("paginationHide",t),t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){var e=this;te.extend(e,{scrollbar:{init:G.init.bind(e),destroy:G.destroy.bind(e),updateSize:G.updateSize.bind(e),setTranslate:G.setTranslate.bind(e),setTransition:G.setTransition.bind(e),enableDraggable:G.enableDraggable.bind(e),disableDraggable:G.disableDraggable.bind(e),setDragPosition:G.setDragPosition.bind(e),getPointerPosition:G.getPointerPosition.bind(e),onDragStart:G.onDragStart.bind(e),onDragMove:G.onDragMove.bind(e),onDragEnd:G.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){te.extend(this,{parallax:{setTransform:N.setTransform.bind(this),setTranslate:N.setTranslate.bind(this),setTransition:N.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var i=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e){t[e]=B[e].bind(i)}),te.extend(i,{zoom:t});var s=1;Object.defineProperty(i.zoom,"scale",{get:function(){return s},set:function(e){if(s!==e){var t=i.zoom.gesture.$imageEl?i.zoom.gesture.$imageEl[0]:void 0,a=i.zoom.gesture.$slideEl?i.zoom.gesture.$slideEl[0]:void 0;i.emit("zoomChange",e,t,a)}s=e}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){te.extend(this,{lazy:{initialImageLoaded:!1,load:X.load.bind(this),loadInSlide:X.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.loadOnTransitionStart||e.lazy.initialImageLoaded)||e.lazy.load())},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;te.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:V.getInterpolateFunction.bind(e),setTranslate:V.setTranslate.bind(e),setTransition:V.setTransition.bind(e)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;te.extend(t,{a11y:{liveRegion:I('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(Y).forEach(function(e){t.a11y[e]=Y[e].bind(t)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;te.extend(e,{history:{init:F.init.bind(e),setHistory:F.setHistory.bind(e),setHistoryPopState:F.setHistoryPopState.bind(e),scrollToSlide:F.scrollToSlide.bind(e),destroy:F.destroy.bind(e)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;te.extend(e,{hashNavigation:{initialized:!1,init:R.init.bind(e),destroy:R.destroy.bind(e),setHash:R.setHash.bind(e),onHashCange:R.onHashCange.bind(e)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var t=this;te.extend(t,{autoplay:{running:!1,paused:!1,run:q.run.bind(t),start:q.start.bind(t),stop:q.stop.bind(t),pause:q.pause.bind(t),onTransitionEnd:function(e){t&&!t.destroyed&&t.$wrapperEl&&e.target===this&&(t.$wrapperEl[0].removeEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].removeEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){te.extend(this,{fadeEffect:{setTranslate:W.setTranslate.bind(this),setTransition:W.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};te.extend(e.params,t),te.extend(e.originalParams,t)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){te.extend(this,{cubeEffect:{setTranslate:j.setTranslate.bind(this),setTransition:j.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};te.extend(e.params,t),te.extend(e.originalParams,t)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){te.extend(this,{flipEffect:{setTranslate:U.setTranslate.bind(this),setTransition:U.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};te.extend(e.params,t),te.extend(e.originalParams,t)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){te.extend(this,{coverflowEffect:{setTranslate:K.setTranslate.bind(this),setTransition:K.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){te.extend(this,{thumbs:{swiper:null,init:_.init.bind(this),update:_.update.bind(this),onThumbClick:_.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===T.use&&(T.use=T.Class.use,T.installModule=T.Class.installModule),T.use(Z),T});
//# sourceMappingURL=swiper.min.js.map

/**!
 * Sortable 1.10.0-rc3
 * @author  RubaXa   <trash@rubaxa.org>
 * @author  owenm    <owen23355@gmail.com>
 * @license MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = global || self, global.Sortable = factory());
}(this, function () { 'use strict';

    function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function (obj) {
                return typeof obj;
            };
        } else {
            _typeof = function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }

        return _typeof(obj);
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    function _extends() {
        _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }

            return target;
        };

        return _extends.apply(this, arguments);
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);

            if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                }));
            }

            ownKeys.forEach(function (key) {
                _defineProperty(target, key, source[key]);
            });
        }

        return target;
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;

        for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }

        return target;
    }

    function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};

        var target = _objectWithoutPropertiesLoose(source, excluded);

        var key, i;

        if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

            for (i = 0; i < sourceSymbolKeys.length; i++) {
                key = sourceSymbolKeys[i];
                if (excluded.indexOf(key) >= 0) continue;
                if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
                target[key] = source[key];
            }
        }

        return target;
    }

    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

            return arr2;
        }
    }

    function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    var version = "1.10.0-rc3";

    function userAgent(pattern) {
        return !!
            /*@__PURE__*/
            navigator.userAgent.match(pattern);
    }

    var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
    var Edge = userAgent(/Edge/i);
    var FireFox = userAgent(/firefox/i);
    var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
    var IOS = userAgent(/iP(ad|od|hone)/i);
    var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

    var captureMode = {
        capture: false,
        passive: false
    };

    function on(el, event, fn) {
        el.addEventListener(event, fn, !IE11OrLess && captureMode);
    }

    function off(el, event, fn) {
        el.removeEventListener(event, fn, !IE11OrLess && captureMode);
    }

    function matches(
        /**HTMLElement*/
        el,
        /**String*/
        selector) {
        if (!selector) return;
        selector[0] === '>' && (selector = selector.substring(1));

        if (el) {
            try {
                if (el.matches) {
                    return el.matches(selector);
                } else if (el.msMatchesSelector) {
                    return el.msMatchesSelector(selector);
                } else if (el.webkitMatchesSelector) {
                    return el.webkitMatchesSelector(selector);
                }
            } catch (_) {
                return false;
            }
        }

        return false;
    }

    function getParentOrHost(el) {
        return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
    }

    function closest(
        /**HTMLElement*/
        el,
        /**String*/
        selector,
        /**HTMLElement*/
        ctx, includeCTX) {
        if (el) {
            ctx = ctx || document;

            do {
                if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
                    return el;
                }

                if (el === ctx) break;
                /* jshint boss:true */
            } while (el = getParentOrHost(el));
        }

        return null;
    }

    var R_SPACE = /\s+/g;

    function toggleClass(el, name, state) {
        if (el && name) {
            if (el.classList) {
                el.classList[state ? 'add' : 'remove'](name);
            } else {
                var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
                el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
            }
        }
    }

    function css(el, prop, val) {
        var style = el && el.style;

        if (style) {
            if (val === void 0) {
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    val = document.defaultView.getComputedStyle(el, '');
                } else if (el.currentStyle) {
                    val = el.currentStyle;
                }

                return prop === void 0 ? val : val[prop];
            } else {
                if (!(prop in style) && prop.indexOf('webkit') === -1) {
                    prop = '-webkit-' + prop;
                }

                style[prop] = val + (typeof val === 'string' ? '' : 'px');
            }
        }
    }

    function matrix(el, selfOnly) {
        var appliedTransforms = '';

        do {
            var transform = css(el, 'transform');

            if (transform && transform !== 'none') {
                appliedTransforms = transform + ' ' + appliedTransforms;
            }
            /* jshint boss:true */

        } while (!selfOnly && (el = el.parentNode));

        var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix;
        /*jshint -W056 */

        return matrixFn && new matrixFn(appliedTransforms);
    }

    function find(ctx, tagName, iterator) {
        if (ctx) {
            var list = ctx.getElementsByTagName(tagName),
                i = 0,
                n = list.length;

            if (iterator) {
                for (; i < n; i++) {
                    iterator(list[i], i);
                }
            }

            return list;
        }

        return [];
    }

    function getWindowScrollingElement() {
        if (IE11OrLess) {
            return document.documentElement;
        } else {
            return document.scrollingElement;
        }
    }
    /**
     * Returns the "bounding client rect" of given element
     * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
     * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
     * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
     * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
     * @param  {[HTMLElement]} container              The parent the element will be placed in
     * @return {Object}                               The boundingClientRect of el, with specified adjustments
     */


    function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
        if (!el.getBoundingClientRect && el !== window) return;
        var elRect, top, left, bottom, right, height, width;

        if (el !== window && el !== getWindowScrollingElement()) {
            elRect = el.getBoundingClientRect();
            top = elRect.top;
            left = elRect.left;
            bottom = elRect.bottom;
            right = elRect.right;
            height = elRect.height;
            width = elRect.width;
        } else {
            top = 0;
            left = 0;
            bottom = window.innerHeight;
            right = window.innerWidth;
            height = window.innerHeight;
            width = window.innerWidth;
        }

        if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
            // Adjust for translate()
            container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
            // Not needed on <= IE11

            if (!IE11OrLess) {
                do {
                    if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
                        var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

                        top -= containerRect.top + parseInt(css(container, 'border-top-width'));
                        left -= containerRect.left + parseInt(css(container, 'border-left-width'));
                        bottom = top + elRect.height;
                        right = left + elRect.width;
                        break;
                    }
                    /* jshint boss:true */

                } while (container = container.parentNode);
            }
        }

        if (undoScale && el !== window) {
            // Adjust for scale()
            var elMatrix = matrix(container || el),
                scaleX = elMatrix && elMatrix.a,
                scaleY = elMatrix && elMatrix.d;

            if (elMatrix) {
                top /= scaleY;
                left /= scaleX;
                width /= scaleX;
                height /= scaleY;
                bottom = top + height;
                right = left + width;
            }
        }

        return {
            top: top,
            left: left,
            bottom: bottom,
            right: right,
            width: width,
            height: height
        };
    }
    /**
     * Checks if a side of an element is scrolled past a side of its parents
     * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
     * @param  {[DOMRect]}    rect         Optional rect of `el` to use
     * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
     * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
     * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
     */


    function isScrolledPast(el, rect, elSide, parentSide) {
        var parent = getParentAutoScrollElement(el, true),
            elSideVal = (rect ? rect : getRect(el))[elSide];
        /* jshint boss:true */

        while (parent) {
            var parentSideVal = getRect(parent)[parentSide],
                visible = void 0;

            if (parentSide === 'top' || parentSide === 'left') {
                visible = elSideVal >= parentSideVal;
            } else {
                visible = elSideVal <= parentSideVal;
            }

            if (!visible) return parent;
            if (parent === getWindowScrollingElement()) break;
            parent = getParentAutoScrollElement(parent, false);
        }

        return false;
    }
    /**
     * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
     * and non-draggable elements
     * @param  {HTMLElement} el       The parent element
     * @param  {Number} childNum      The index of the child
     * @param  {Object} options       Parent Sortable's options
     * @return {HTMLElement}          The child at index childNum, or null if not found
     */


    function getChild(el, childNum, options) {
        var currentChild = 0,
            i = 0,
            children = el.children;

        while (i < children.length) {
            if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
                if (currentChild === childNum) {
                    return children[i];
                }

                currentChild++;
            }

            i++;
        }

        return null;
    }
    /**
     * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
     * @param  {HTMLElement} el       Parent element
     * @param  {selector} selector    Any other elements that should be ignored
     * @return {HTMLElement}          The last child, ignoring ghostEl
     */


    function lastChild(el, selector) {
        var last = el.lastElementChild;

        while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
            last = last.previousElementSibling;
        }

        return last || null;
    }
    /**
     * Returns the index of an element within its parent for a selected set of
     * elements
     * @param  {HTMLElement} el
     * @param  {selector} selector
     * @return {number}
     */


    function index(el, selector) {
        var index = 0;

        if (!el || !el.parentNode) {
            return -1;
        }
        /* jshint boss:true */


        while (el = el.previousElementSibling) {
            if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
                index++;
            }
        }

        return index;
    }
    /**
     * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
     * The value is returned in real pixels.
     * @param  {HTMLElement} el
     * @return {Array}             Offsets in the format of [left, top]
     */


    function getRelativeScrollOffset(el) {
        var offsetLeft = 0,
            offsetTop = 0,
            winScroller = getWindowScrollingElement();

        if (el) {
            do {
                var elMatrix = matrix(el),
                    scaleX = elMatrix.a,
                    scaleY = elMatrix.d;
                offsetLeft += el.scrollLeft * scaleX;
                offsetTop += el.scrollTop * scaleY;
            } while (el !== winScroller && (el = el.parentNode));
        }

        return [offsetLeft, offsetTop];
    }
    /**
     * Returns the index of the object within the given array
     * @param  {Array} arr   Array that may or may not hold the object
     * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
     * @return {Number}      The index of the object in the array, or -1
     */


    function indexOfObject(arr, obj) {
        for (var i in arr) {
            if (!arr.hasOwnProperty(i)) continue;

            for (var key in obj) {
                if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
            }
        }

        return -1;
    }

    function getParentAutoScrollElement(el, includeSelf) {
        // skip to window
        if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
        var elem = el;
        var gotSelf = false;

        do {
            // we don't need to get elem css if it isn't even overflowing in the first place (performance)
            if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
                var elemCSS = css(elem);

                if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
                    if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
                    if (gotSelf || includeSelf) return elem;
                    gotSelf = true;
                }
            }
            /* jshint boss:true */

        } while (elem = elem.parentNode);

        return getWindowScrollingElement();
    }

    function extend(dst, src) {
        if (dst && src) {
            for (var key in src) {
                if (src.hasOwnProperty(key)) {
                    dst[key] = src[key];
                }
            }
        }

        return dst;
    }

    function isRectEqual(rect1, rect2) {
        return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
    }

    var _throttleTimeout;

    function throttle(callback, ms) {
        return function () {
            if (!_throttleTimeout) {
                var args = arguments,
                    _this = this;

                if (args.length === 1) {
                    callback.call(_this, args[0]);
                } else {
                    callback.apply(_this, args);
                }

                _throttleTimeout = setTimeout(function () {
                    _throttleTimeout = void 0;
                }, ms);
            }
        };
    }

    function cancelThrottle() {
        clearTimeout(_throttleTimeout);
        _throttleTimeout = void 0;
    }

    function scrollBy(el, x, y) {
        el.scrollLeft += x;
        el.scrollTop += y;
    }

    function clone(el) {
        var Polymer = window.Polymer;
        var $ = window.jQuery || window.Zepto;

        if (Polymer && Polymer.dom) {
            return Polymer.dom(el).cloneNode(true);
        } else if ($) {
            return $(el).clone(true)[0];
        } else {
            return el.cloneNode(true);
        }
    }

    function setRect(el, rect) {
        css(el, 'position', 'absolute');
        css(el, 'top', rect.top);
        css(el, 'left', rect.left);
        css(el, 'width', rect.width);
        css(el, 'height', rect.height);
    }

    function unsetRect(el) {
        css(el, 'position', '');
        css(el, 'top', '');
        css(el, 'left', '');
        css(el, 'width', '');
        css(el, 'height', '');
    }

    var expando = 'Sortable' + new Date().getTime();

    function AnimationStateManager() {
        var animationStates = [],
            animationCallbackId;
        return {
            captureAnimationState: function captureAnimationState() {
                animationStates = [];
                if (!this.options.animation) return;
                var children = [].slice.call(this.el.children);
                children.forEach(function (child) {
                    if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
                    animationStates.push({
                        target: child,
                        rect: getRect(child)
                    });
                    var fromRect = getRect(child); // If animating: compensate for current animation

                    if (child.thisAnimationDuration) {
                        var childMatrix = matrix(child, true);

                        if (childMatrix) {
                            fromRect.top -= childMatrix.f;
                            fromRect.left -= childMatrix.e;
                        }
                    }

                    child.fromRect = fromRect;
                });
            },
            addAnimationState: function addAnimationState(state) {
                animationStates.push(state);
            },
            removeAnimationState: function removeAnimationState(target) {
                animationStates.splice(indexOfObject(animationStates, {
                    target: target
                }), 1);
            },
            animateAll: function animateAll(callback) {
                var _this = this;

                if (!this.options.animation) {
                    clearTimeout(animationCallbackId);
                    if (typeof callback === 'function') callback();
                    return;
                }

                var animating = false,
                    animationTime = 0;
                animationStates.forEach(function (state) {
                    var time = 0,
                        target = state.target,
                        fromRect = target.fromRect,
                        toRect = getRect(target),
                        prevFromRect = target.prevFromRect,
                        prevToRect = target.prevToRect,
                        animatingRect = state.rect,
                        targetMatrix = matrix(target, true);

                    if (targetMatrix) {
                        // Compensate for current animation
                        toRect.top -= targetMatrix.f;
                        toRect.left -= targetMatrix.e;
                    }

                    target.toRect = toRect; // If element is scrolled out of view: Do not animate

                    if ((isScrolledPast(target, toRect, 'bottom', 'top') || isScrolledPast(target, toRect, 'top', 'bottom') || isScrolledPast(target, toRect, 'right', 'left') || isScrolledPast(target, toRect, 'left', 'right')) && (isScrolledPast(target, animatingRect, 'bottom', 'top') || isScrolledPast(target, animatingRect, 'top', 'bottom') || isScrolledPast(target, animatingRect, 'right', 'left') || isScrolledPast(target, animatingRect, 'left', 'right')) && (isScrolledPast(target, fromRect, 'bottom', 'top') || isScrolledPast(target, fromRect, 'top', 'bottom') || isScrolledPast(target, fromRect, 'right', 'left') || isScrolledPast(target, fromRect, 'left', 'right'))) return;

                    if (target.thisAnimationDuration) {
                        // Could also check if animatingRect is between fromRect and toRect
                        if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
                            (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
                            // If returning to same place as started from animation and on same axis
                            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
                        }
                    } // if fromRect != toRect: animate


                    if (!isRectEqual(toRect, fromRect)) {
                        target.prevFromRect = fromRect;
                        target.prevToRect = toRect;

                        if (!time) {
                            time = _this.options.animation;
                        }

                        _this.animate(target, animatingRect, time);
                    }

                    if (time) {
                        animating = true;
                        animationTime = Math.max(animationTime, time);
                        clearTimeout(target.animationResetTimer);
                        target.animationResetTimer = setTimeout(function () {
                            target.animationTime = 0;
                            target.prevFromRect = null;
                            target.fromRect = null;
                            target.prevToRect = null;
                            target.thisAnimationDuration = null;
                        }, time);
                        target.thisAnimationDuration = time;
                    }
                });
                clearTimeout(animationCallbackId);

                if (!animating) {
                    if (typeof callback === 'function') callback();
                } else {
                    animationCallbackId = setTimeout(function () {
                        if (typeof callback === 'function') callback();
                    }, animationTime);
                }

                animationStates = [];
            },
            animate: function animate(target, prev, duration) {
                if (duration) {
                    css(target, 'transition', '');
                    css(target, 'transform', '');
                    var currentRect = getRect(target),
                        elMatrix = matrix(this.el),
                        scaleX = elMatrix && elMatrix.a,
                        scaleY = elMatrix && elMatrix.d,
                        translateX = (prev.left - currentRect.left) / (scaleX || 1),
                        translateY = (prev.top - currentRect.top) / (scaleY || 1);
                    target.animatingX = !!translateX;
                    target.animatingY = !!translateY;
                    css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
                    repaint(target); // repaint

                    css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
                    css(target, 'transform', 'translate3d(0,0,0)');
                    typeof target.animated === 'number' && clearTimeout(target.animated);
                    target.animated = setTimeout(function () {
                        css(target, 'transition', '');
                        css(target, 'transform', '');
                        target.animated = false;
                        target.animatingX = false;
                        target.animatingY = false;
                    }, duration);
                }
            }
        };
    }

    function repaint(target) {
        return target.offsetWidth;
    }

    function calculateRealTime(animatingRect, fromRect, toRect, options) {
        return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
    }

    var plugins = [];
    var defaults = {
        initializeByDefault: true
    };
    var PluginManager = {
        mount: function mount(plugin) {
            // Set default static properties
            for (var option in defaults) {
                if (defaults.hasOwnProperty(option) && !(option in plugin)) {
                    plugin[option] = defaults[option];
                }
            }

            plugins.push(plugin);
        },
        pluginEvent: function pluginEvent(eventName, sortable, evt) {
            var _this = this;

            this.eventCanceled = false;
            var eventNameGlobal = eventName + 'Global';
            plugins.forEach(function (plugin) {
                if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

                if (sortable[plugin.pluginName][eventNameGlobal]) {
                    _this.eventCanceled = !!sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
                        sortable: sortable
                    }, evt));
                } // Only fire plugin event if plugin is enabled in this sortable,
                // and plugin has event defined


                if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
                    _this.eventCanceled = _this.eventCanceled || !!sortable[plugin.pluginName][eventName](_objectSpread({
                        sortable: sortable
                    }, evt));
                }
            });
        },
        initializePlugins: function initializePlugins(sortable, el, defaults) {
            plugins.forEach(function (plugin) {
                var pluginName = plugin.pluginName;
                if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
                var initialized = new plugin(sortable, el);
                initialized.sortable = sortable;
                sortable[pluginName] = initialized; // Add default options from plugin

                _extends(defaults, initialized.options);
            });

            for (var option in sortable.options) {
                if (!sortable.options.hasOwnProperty(option)) continue;
                var modified = this.modifyOption(sortable, option, sortable.options[option]);

                if (typeof modified !== 'undefined') {
                    sortable.options[option] = modified;
                }
            }
        },
        getEventOptions: function getEventOptions(name, sortable) {
            var eventOptions = {};
            plugins.forEach(function (plugin) {
                if (typeof plugin.eventOptions !== 'function') return;

                _extends(eventOptions, plugin.eventOptions.call(sortable, name));
            });
            return eventOptions;
        },
        modifyOption: function modifyOption(sortable, name, value) {
            var modifiedValue;
            plugins.forEach(function (plugin) {
                // Plugin must exist on the Sortable
                if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

                if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
                    modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
                }
            });
            return modifiedValue;
        }
    };

    function dispatchEvent(_ref) {
        var sortable = _ref.sortable,
            rootEl = _ref.rootEl,
            name = _ref.name,
            targetEl = _ref.targetEl,
            cloneEl = _ref.cloneEl,
            toEl = _ref.toEl,
            fromEl = _ref.fromEl,
            oldIndex = _ref.oldIndex,
            newIndex = _ref.newIndex,
            oldDraggableIndex = _ref.oldDraggableIndex,
            newDraggableIndex = _ref.newDraggableIndex,
            originalEvent = _ref.originalEvent,
            putSortable = _ref.putSortable,
            eventOptions = _ref.eventOptions;
        sortable = sortable || rootEl[expando];
        var evt,
            options = sortable.options,
            onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

        if (window.CustomEvent && !IE11OrLess && !Edge) {
            evt = new CustomEvent(name, {
                bubbles: true,
                cancelable: true
            });
        } else {
            evt = document.createEvent('Event');
            evt.initEvent(name, true, true);
        }

        evt.to = toEl || rootEl;
        evt.from = fromEl || rootEl;
        evt.item = targetEl || rootEl;
        evt.clone = cloneEl;
        evt.oldIndex = oldIndex;
        evt.newIndex = newIndex;
        evt.oldDraggableIndex = oldDraggableIndex;
        evt.newDraggableIndex = newDraggableIndex;
        evt.originalEvent = originalEvent;
        evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

        var allEventOptions = _objectSpread({}, eventOptions, PluginManager.getEventOptions(name, sortable));

        for (var option in allEventOptions) {
            evt[option] = allEventOptions[option];
        }

        if (rootEl) {
            rootEl.dispatchEvent(evt);
        }

        if (options[onName]) {
            options[onName].call(sortable, evt);
        }
    }

    var pluginEvent = function pluginEvent(eventName, sortable) {
        var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            originalEvent = _ref.evt,
            data = _objectWithoutProperties(_ref, ["evt"]);

        PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
            dragEl: dragEl,
            parentEl: parentEl,
            ghostEl: ghostEl,
            rootEl: rootEl,
            nextEl: nextEl,
            lastDownEl: lastDownEl,
            cloneEl: cloneEl,
            cloneHidden: cloneHidden,
            dragStarted: moved,
            putSortable: putSortable,
            activeSortable: Sortable.active,
            originalEvent: originalEvent,
            oldIndex: oldIndex,
            oldDraggableIndex: oldDraggableIndex,
            newIndex: newIndex,
            newDraggableIndex: newDraggableIndex,
            hideGhostForTarget: _hideGhostForTarget,
            unhideGhostForTarget: _unhideGhostForTarget,
            cloneNowHidden: function cloneNowHidden() {
                cloneHidden = true;
            },
            cloneNowShown: function cloneNowShown() {
                cloneHidden = false;
            },
            dispatchSortableEvent: function dispatchSortableEvent(name) {
                _dispatchEvent({
                    sortable: sortable,
                    name: name,
                    originalEvent: originalEvent
                });
            }
        }, data));
    };

    function _dispatchEvent(info) {
        dispatchEvent(_objectSpread({
            putSortable: putSortable,
            cloneEl: cloneEl,
            targetEl: dragEl,
            rootEl: rootEl,
            oldIndex: oldIndex,
            oldDraggableIndex: oldDraggableIndex,
            newIndex: newIndex,
            newDraggableIndex: newDraggableIndex
        }, info));
    }

    if (typeof window === "undefined" || !window.document) {
        throw new Error("Sortable.js requires a window with a document");
    }

    var dragEl,
        parentEl,
        ghostEl,
        rootEl,
        nextEl,
        lastDownEl,
        cloneEl,
        cloneHidden,
        oldIndex,
        newIndex,
        oldDraggableIndex,
        newDraggableIndex,
        activeGroup,
        putSortable,
        awaitingDragStarted = false,
        ignoreNextClick = false,
        sortables = [],
        tapEvt,
        touchEvt,
        moved,
        lastTarget,
        lastDirection,
        pastFirstInvertThresh = false,
        isCircumstantialInvert = false,
        targetMoveDistance,
        // For positioning ghost absolutely
        ghostRelativeParent,
        ghostRelativeParentInitialScroll = [],
        // (left, top)
        _silent = false,
        savedInputChecked = [];
    /** @const */

    var PositionGhostAbsolutely = IOS,
        CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
        // This will not pass for IE9, because IE9 DnD only works on anchors
        supportDraggable = !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
        supportCssPointerEvents = function () {
            // false when <= IE11
            if (IE11OrLess) {
                return false;
            }

            var el = document.createElement('x');
            el.style.cssText = 'pointer-events:auto';
            return el.style.pointerEvents === 'auto';
        }(),
        _detectDirection = function _detectDirection(el, options) {
            var elCSS = css(el),
                elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
                child1 = getChild(el, 0, options),
                child2 = getChild(el, 1, options),
                firstChildCSS = child1 && css(child1),
                secondChildCSS = child2 && css(child2),
                firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
                secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

            if (elCSS.display === 'flex') {
                return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
            }

            if (elCSS.display === 'grid') {
                return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
            }

            if (child1 && firstChildCSS["float"] !== 'none') {
                var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
                return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
            }

            return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
        },
        _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
            var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
                dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
                dragElOppLength = vertical ? dragRect.width : dragRect.height,
                targetS1Opp = vertical ? targetRect.left : targetRect.top,
                targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
                targetOppLength = vertical ? targetRect.width : targetRect.height;
            return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
        },

        /**
         * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
         * @param  {Number} x      X position
         * @param  {Number} y      Y position
         * @return {HTMLElement}   Element of the first found nearest Sortable
         */
        _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
            var ret;
            sortables.some(function (sortable) {
                if (lastChild(sortable)) return;
                var rect = getRect(sortable),
                    threshold = sortable[expando].options.emptyInsertThreshold,
                    insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
                    insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

                if (threshold && insideHorizontally && insideVertically) {
                    return ret = sortable;
                }
            });
            return ret;
        },
        _prepareGroup = function _prepareGroup(options) {
            function toFn(value, pull) {
                return function (to, from, dragEl, evt) {
                    var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

                    if (value == null && (pull || sameGroup)) {
                        // Default pull value
                        // Default pull and put value if same group
                        return true;
                    } else if (value == null || value === false) {
                        return false;
                    } else if (pull && value === 'clone') {
                        return value;
                    } else if (typeof value === 'function') {
                        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
                    } else {
                        var otherGroup = (pull ? to : from).options.group.name;
                        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
                    }
                };
            }

            var group = {};
            var originalGroup = options.group;

            if (!originalGroup || _typeof(originalGroup) != 'object') {
                originalGroup = {
                    name: originalGroup
                };
            }

            group.name = originalGroup.name;
            group.checkPull = toFn(originalGroup.pull, true);
            group.checkPut = toFn(originalGroup.put);
            group.revertClone = originalGroup.revertClone;
            options.group = group;
        },
        _hideGhostForTarget = function _hideGhostForTarget() {
            if (!supportCssPointerEvents && ghostEl) {
                css(ghostEl, 'display', 'none');
            }
        },
        _unhideGhostForTarget = function _unhideGhostForTarget() {
            if (!supportCssPointerEvents && ghostEl) {
                css(ghostEl, 'display', '');
            }
        }; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


    document.addEventListener('click', function (evt) {
        if (ignoreNextClick) {
            evt.preventDefault();
            evt.stopPropagation && evt.stopPropagation();
            evt.stopImmediatePropagation && evt.stopImmediatePropagation();
            ignoreNextClick = false;
            return false;
        }
    }, true);

    var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
        if (dragEl) {
            evt = evt.touches ? evt.touches[0] : evt;

            var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

            if (nearest) {
                // Create imitation event
                var event = {};

                for (var i in evt) {
                    if (evt.hasOwnProperty(i)) {
                        event[i] = evt[i];
                    }
                }

                event.target = event.rootEl = nearest;
                event.preventDefault = void 0;
                event.stopPropagation = void 0;

                nearest[expando]._onDragOver(event);
            }
        }
    };

    var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
        if (dragEl) {
            dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
        }
    };
    /**
     * @class  Sortable
     * @param  {HTMLElement}  el
     * @param  {Object}       [options]
     */


    function Sortable(el, options) {
        if (!(el && el.nodeType && el.nodeType === 1)) {
            throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
        }

        this.el = el; // root element

        this.options = options = _extends({}, options); // Export instance

        el[expando] = this;
        var defaults = {
            group: null,
            sort: true,
            disabled: false,
            store: null,
            handle: null,
            draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
            swapThreshold: 1,
            // percentage; 0 <= x <= 1
            invertSwap: false,
            // invert always
            invertedSwapThreshold: null,
            // will be set to same as swapThreshold if default
            removeCloneOnHide: true,
            direction: function direction() {
                return _detectDirection(el, this.options);
            },
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            ignore: 'a, img',
            filter: null,
            preventOnFilter: true,
            animation: 0,
            easing: null,
            setData: function setData(dataTransfer, dragEl) {
                dataTransfer.setData('Text', dragEl.textContent);
            },
            dropBubble: false,
            dragoverBubble: false,
            dataIdAttr: 'data-id',
            delay: 0,
            delayOnTouchOnly: false,
            touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
            forceFallback: false,
            fallbackClass: 'sortable-fallback',
            fallbackOnBody: false,
            fallbackTolerance: 0,
            fallbackOffset: {
                x: 0,
                y: 0
            },
            supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
            emptyInsertThreshold: 5
        };
        PluginManager.initializePlugins(this, el, defaults); // Set default options

        for (var name in defaults) {
            !(name in options) && (options[name] = defaults[name]);
        }

        _prepareGroup(options); // Bind all private methods


        for (var fn in this) {
            if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
                this[fn] = this[fn].bind(this);
            }
        } // Setup drag mode


        this.nativeDraggable = options.forceFallback ? false : supportDraggable;

        if (this.nativeDraggable) {
            // Touch start threshold cannot be greater than the native dragstart threshold
            this.options.touchStartThreshold = 1;
        } // Bind events


        if (options.supportPointer) {
            on(el, 'pointerdown', this._onTapStart);
        } else {
            on(el, 'mousedown', this._onTapStart);
            on(el, 'touchstart', this._onTapStart);
        }

        if (this.nativeDraggable) {
            on(el, 'dragover', this);
            on(el, 'dragenter', this);
        }

        sortables.push(this.el); // Restore sorting

        options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

        _extends(this, AnimationStateManager());
    }

    Sortable.prototype =
        /** @lends Sortable.prototype */
        {
            constructor: Sortable,
            _isOutsideThisEl: function _isOutsideThisEl(target) {
                if (!this.el.contains(target) && target !== this.el) {
                    lastTarget = null;
                }
            },
            _getDirection: function _getDirection(evt, target) {
                return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
            },
            _onTapStart: function _onTapStart(
                /** Event|TouchEvent */
                evt) {
                if (!evt.cancelable) return;

                var _this = this,
                    el = this.el,
                    options = this.options,
                    preventOnFilter = options.preventOnFilter,
                    type = evt.type,
                    touch = evt.touches && evt.touches[0],
                    target = (touch || evt).target,
                    originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
                    filter = options.filter;

                _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


                if (dragEl) {
                    return;
                }

                if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
                    return; // only left button and enabled
                } // cancel dnd if original target is content editable


                if (originalTarget.isContentEditable) {
                    return;
                }

                target = closest(target, options.draggable, el, false);

                if (target && target.animated) {
                    return;
                }

                if (lastDownEl === target) {
                    // Ignoring duplicate `down`
                    return;
                } // Get the index of the dragged element within its parent


                oldIndex = index(target);
                oldDraggableIndex = index(target, options.draggable); // Check filter

                if (typeof filter === 'function') {
                    if (filter.call(this, evt, target, this)) {
                        _dispatchEvent({
                            sortable: _this,
                            rootEl: originalTarget,
                            name: 'filter',
                            targetEl: target,
                            toEl: el,
                            fromEl: el
                        });

                        pluginEvent('filter', _this, {
                            evt: evt
                        });
                        preventOnFilter && evt.cancelable && evt.preventDefault();
                        return; // cancel dnd
                    }
                } else if (filter) {
                    filter = filter.split(',').some(function (criteria) {
                        criteria = closest(originalTarget, criteria.trim(), el, false);

                        if (criteria) {
                            _dispatchEvent({
                                sortable: _this,
                                rootEl: criteria,
                                name: 'filter',
                                targetEl: target,
                                fromEl: el,
                                toEl: el
                            });

                            pluginEvent('filter', _this, {
                                evt: evt
                            });
                            return true;
                        }
                    });

                    if (filter) {
                        preventOnFilter && evt.cancelable && evt.preventDefault();
                        return; // cancel dnd
                    }
                }

                if (options.handle && !closest(originalTarget, options.handle, el, false)) {
                    return;
                } // Prepare `dragstart`


                this._prepareDragStart(evt, touch, target);
            },
            _prepareDragStart: function _prepareDragStart(
                /** Event */
                evt,
                /** Touch */
                touch,
                /** HTMLElement */
                target) {
                var _this = this,
                    el = _this.el,
                    options = _this.options,
                    ownerDocument = el.ownerDocument,
                    dragStartFn;

                if (target && !dragEl && target.parentNode === el) {
                    rootEl = el;
                    dragEl = target;
                    parentEl = dragEl.parentNode;
                    nextEl = dragEl.nextSibling;
                    lastDownEl = target;
                    activeGroup = options.group;
                    Sortable.dragged = dragEl;
                    tapEvt = {
                        target: dragEl,
                        clientX: (touch || evt).clientX,
                        clientY: (touch || evt).clientY
                    };
                    this._lastX = (touch || evt).clientX;
                    this._lastY = (touch || evt).clientY;
                    dragEl.style['will-change'] = 'all';

                    dragStartFn = function dragStartFn() {
                        pluginEvent('delayEnded', _this, {
                            evt: evt
                        });

                        if (Sortable.eventCanceled) {
                            _this._onDrop();

                            return;
                        } // Delayed drag has been triggered
                        // we can re-enable the events: touchmove/mousemove


                        _this._disableDelayedDragEvents();

                        if (!FireFox && _this.nativeDraggable) {
                            dragEl.draggable = true;
                        } // Bind the events: dragstart/dragend


                        _this._triggerDragStart(evt, touch); // Drag start event


                        _dispatchEvent({
                            sortable: _this,
                            name: 'choose',
                            originalEvent: evt
                        }); // Chosen item


                        toggleClass(dragEl, options.chosenClass, true);
                    }; // Disable "draggable"


                    options.ignore.split(',').forEach(function (criteria) {
                        find(dragEl, criteria.trim(), _disableDraggable);
                    });
                    on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
                    on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
                    on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
                    on(ownerDocument, 'mouseup', _this._onDrop);
                    on(ownerDocument, 'touchend', _this._onDrop);
                    on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

                    if (FireFox && this.nativeDraggable) {
                        this.options.touchStartThreshold = 4;
                        dragEl.draggable = true;
                    }

                    pluginEvent('delayStart', this, {
                        evt: evt
                    }); // Delay is impossible for native DnD in Edge or IE

                    if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
                        if (Sortable.eventCanceled) {
                            this._onDrop();

                            return;
                        } // If the user moves the pointer or let go the click or touch
                        // before the delay has been reached:
                        // disable the delayed drag


                        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
                        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
                        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
                        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
                        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
                        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
                        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
                    } else {
                        dragStartFn();
                    }
                }
            },
            _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
                /** TouchEvent|PointerEvent **/
                e) {
                var touch = e.touches ? e.touches[0] : e;

                if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
                    this._disableDelayedDrag();
                }
            },
            _disableDelayedDrag: function _disableDelayedDrag() {
                dragEl && _disableDraggable(dragEl);
                clearTimeout(this._dragStartTimer);

                this._disableDelayedDragEvents();
            },
            _disableDelayedDragEvents: function _disableDelayedDragEvents() {
                var ownerDocument = this.el.ownerDocument;
                off(ownerDocument, 'mouseup', this._disableDelayedDrag);
                off(ownerDocument, 'touchend', this._disableDelayedDrag);
                off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
                off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
                off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
                off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
            },
            _triggerDragStart: function _triggerDragStart(
                /** Event */
                evt,
                /** Touch */
                touch) {
                touch = touch || evt.pointerType == 'touch' && evt;

                if (!this.nativeDraggable || touch) {
                    if (this.options.supportPointer) {
                        on(document, 'pointermove', this._onTouchMove);
                    } else if (touch) {
                        on(document, 'touchmove', this._onTouchMove);
                    } else {
                        on(document, 'mousemove', this._onTouchMove);
                    }
                } else {
                    on(dragEl, 'dragend', this);
                    on(rootEl, 'dragstart', this._onDragStart);
                }

                try {
                    if (document.selection) {
                        // Timeout neccessary for IE9
                        _nextTick(function () {
                            document.selection.empty();
                        });
                    } else {
                        window.getSelection().removeAllRanges();
                    }
                } catch (err) {}
            },
            _dragStarted: function _dragStarted(fallback, evt) {

                awaitingDragStarted = false;

                if (rootEl && dragEl) {
                    pluginEvent('dragStarted', this, {
                        evt: evt
                    });

                    if (this.nativeDraggable) {
                        on(document, 'dragover', _checkOutsideTargetEl);
                    }

                    var options = this.options; // Apply effect

                    !fallback && toggleClass(dragEl, options.dragClass, false);
                    toggleClass(dragEl, options.ghostClass, true);
                    Sortable.active = this;
                    fallback && this._appendGhost(); // Drag start event

                    _dispatchEvent({
                        sortable: this,
                        name: 'start',
                        originalEvent: evt
                    });
                } else {
                    this._nulling();
                }
            },
            _emulateDragOver: function _emulateDragOver() {
                if (touchEvt) {
                    this._lastX = touchEvt.clientX;
                    this._lastY = touchEvt.clientY;

                    _hideGhostForTarget();

                    var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
                    var parent = target;

                    while (target && target.shadowRoot) {
                        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
                        if (target === parent) break;
                        parent = target;
                    }

                    dragEl.parentNode[expando]._isOutsideThisEl(target);

                    if (parent) {
                        do {
                            if (parent[expando]) {
                                var inserted = void 0;
                                inserted = parent[expando]._onDragOver({
                                    clientX: touchEvt.clientX,
                                    clientY: touchEvt.clientY,
                                    target: target,
                                    rootEl: parent
                                });

                                if (inserted && !this.options.dragoverBubble) {
                                    break;
                                }
                            }

                            target = parent; // store last element
                        }
                            /* jshint boss:true */
                        while (parent = parent.parentNode);
                    }

                    _unhideGhostForTarget();
                }
            },
            _onTouchMove: function _onTouchMove(
                /**TouchEvent*/
                evt) {
                if (tapEvt) {
                    var options = this.options,
                        fallbackTolerance = options.fallbackTolerance,
                        fallbackOffset = options.fallbackOffset,
                        touch = evt.touches ? evt.touches[0] : evt,
                        ghostMatrix = ghostEl && matrix(ghostEl),
                        scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
                        scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
                        relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
                        dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
                        dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1),
                        translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)'; // only set the status to dragging, when we are actually dragging

                    if (!Sortable.active && !awaitingDragStarted) {
                        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
                            return;
                        }

                        this._onDragStart(evt, true);
                    }

                    touchEvt = touch;
                    css(ghostEl, 'webkitTransform', translate3d);
                    css(ghostEl, 'mozTransform', translate3d);
                    css(ghostEl, 'msTransform', translate3d);
                    css(ghostEl, 'transform', translate3d);
                    evt.cancelable && evt.preventDefault();
                }
            },
            _appendGhost: function _appendGhost() {
                // Bug if using scale(): https://stackoverflow.com/questions/2637058
                // Not being adjusted for
                if (!ghostEl) {
                    var container = this.options.fallbackOnBody ? document.body : rootEl,
                        rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
                        options = this.options; // Position absolutely

                    if (PositionGhostAbsolutely) {
                        // Get relatively positioned parent
                        ghostRelativeParent = container;

                        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
                            ghostRelativeParent = ghostRelativeParent.parentNode;
                        }

                        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
                            if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
                            rect.top += ghostRelativeParent.scrollTop;
                            rect.left += ghostRelativeParent.scrollLeft;
                        } else {
                            ghostRelativeParent = getWindowScrollingElement();
                        }

                        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
                    }

                    ghostEl = dragEl.cloneNode(true);
                    toggleClass(ghostEl, options.ghostClass, false);
                    toggleClass(ghostEl, options.fallbackClass, true);
                    toggleClass(ghostEl, options.dragClass, true);
                    css(ghostEl, 'transition', '');
                    css(ghostEl, 'transform', '');
                    css(ghostEl, 'box-sizing', 'border-box');
                    css(ghostEl, 'margin', 0);
                    css(ghostEl, 'top', rect.top);
                    css(ghostEl, 'left', rect.left);
                    css(ghostEl, 'width', rect.width);
                    css(ghostEl, 'height', rect.height);
                    css(ghostEl, 'opacity', '0.8');
                    css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
                    css(ghostEl, 'zIndex', '100000');
                    css(ghostEl, 'pointerEvents', 'none');
                    Sortable.ghost = ghostEl;
                    container.appendChild(ghostEl);
                }
            },
            _onDragStart: function _onDragStart(
                /**Event*/
                evt,
                /**boolean*/
                fallback) {
                var _this = this;

                var dataTransfer = evt.dataTransfer;
                var options = _this.options;
                pluginEvent('dragStart', this, {
                    evt: evt
                });

                if (Sortable.eventCanceled) {
                    this._onDrop();

                    return;
                }

                pluginEvent('setupClone', this);

                if (!Sortable.eventCanceled) {
                    cloneEl = clone(dragEl);
                    cloneEl.draggable = false;
                    cloneEl.style['will-change'] = '';

                    this._hideClone();

                    toggleClass(cloneEl, this.options.chosenClass, false);
                    Sortable.clone = cloneEl;
                } // #1143: IFrame support workaround


                _this.cloneId = _nextTick(function () {
                    pluginEvent('clone', _this);
                    if (Sortable.eventCanceled) return;

                    if (!_this.options.removeCloneOnHide) {
                        rootEl.insertBefore(cloneEl, dragEl);
                    }

                    _this._hideClone();

                    _dispatchEvent({
                        sortable: _this,
                        name: 'clone'
                    });
                });
                !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

                if (fallback) {
                    ignoreNextClick = true;
                    _this._loopId = setInterval(_this._emulateDragOver, 50);
                } else {
                    // Undo what was set in _prepareDragStart before drag started
                    off(document, 'mouseup', _this._onDrop);
                    off(document, 'touchend', _this._onDrop);
                    off(document, 'touchcancel', _this._onDrop);

                    if (dataTransfer) {
                        dataTransfer.effectAllowed = 'move';
                        options.setData && options.setData.call(_this, dataTransfer, dragEl);
                    }

                    on(document, 'drop', _this); // #1276 fix:

                    css(dragEl, 'transform', 'translateZ(0)');
                }

                awaitingDragStarted = true;
                _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
                on(document, 'selectstart', _this);
                moved = true;

                if (Safari) {
                    css(document.body, 'user-select', 'none');
                }
            },
            // Returns true - if no further action is needed (either inserted or another condition)
            _onDragOver: function _onDragOver(
                /**Event*/
                evt) {
                var el = this.el,
                    target = evt.target,
                    dragRect,
                    targetRect,
                    revert,
                    options = this.options,
                    group = options.group,
                    activeSortable = Sortable.active,
                    isOwner = activeGroup === group,
                    canSort = options.sort,
                    fromSortable = putSortable || activeSortable,
                    vertical,
                    _this = this,
                    completedFired = false;

                if (_silent) return;

                function dragOverEvent(name, extra) {
                    pluginEvent(name, _this, _objectSpread({
                        evt: evt,
                        isOwner: isOwner,
                        axis: vertical ? 'vertical' : 'horizontal',
                        revert: revert,
                        dragRect: dragRect,
                        targetRect: targetRect,
                        canSort: canSort,
                        fromSortable: fromSortable,
                        target: target,
                        completed: completed,
                        onMove: function onMove(target, after) {
                            return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
                        },
                        changed: changed
                    }, extra));
                } // Capture animation state


                function capture() {
                    dragOverEvent('dragOverAnimationCapture');

                    _this.captureAnimationState();

                    if (_this !== fromSortable) {
                        fromSortable.captureAnimationState();
                    }
                } // Return invocation when dragEl is inserted (or completed)


                function completed(insertion) {
                    dragOverEvent('dragOverCompleted', {
                        insertion: insertion
                    });

                    if (insertion) {
                        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                        if (isOwner) {
                            activeSortable._hideClone();
                        } else {
                            activeSortable._showClone(_this);
                        }

                        if (_this !== fromSortable) {
                            // Set ghost class to new sortable's ghost class
                            toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
                            toggleClass(dragEl, options.ghostClass, true);
                        }

                        if (putSortable !== _this && _this !== Sortable.active) {
                            putSortable = _this;
                        } else if (_this === Sortable.active && putSortable) {
                            putSortable = null;
                        } // Animation


                        if (fromSortable === _this) {
                            _this._ignoreWhileAnimating = target;
                        }

                        _this.animateAll(function () {
                            dragOverEvent('dragOverAnimationComplete');
                            _this._ignoreWhileAnimating = null;
                        });

                        if (_this !== fromSortable) {
                            fromSortable.animateAll();
                            fromSortable._ignoreWhileAnimating = null;
                        }
                    } // Null lastTarget if it is not inside a previously swapped element


                    if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
                        lastTarget = null;
                    } // no bubbling and not fallback


                    if (!options.dragoverBubble && !evt.rootEl && target !== document) {
                        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


                        !insertion && nearestEmptyInsertDetectEvent(evt);
                    }

                    !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
                    return completedFired = true;
                } // Call when dragEl has been inserted


                function changed() {
                    newIndex = index(dragEl);
                    newDraggableIndex = index(dragEl, options.draggable);

                    _dispatchEvent({
                        sortable: _this,
                        name: 'change',
                        toEl: el,
                        newIndex: newIndex,
                        newDraggableIndex: newDraggableIndex,
                        originalEvent: evt
                    });
                }

                if (evt.preventDefault !== void 0) {
                    evt.cancelable && evt.preventDefault();
                }

                target = closest(target, options.draggable, el, true);
                dragOverEvent('dragOver');
                if (Sortable.eventCanceled) return completedFired;

                if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
                    return completed(false);
                }

                ignoreNextClick = false;

                if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
                    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
                    vertical = this._getDirection(evt, target) === 'vertical';
                    dragRect = getRect(dragEl);
                    dragOverEvent('dragOverValid');
                    if (Sortable.eventCanceled) return completedFired;

                    if (revert) {
                        parentEl = rootEl; // actualization

                        capture();

                        this._hideClone();

                        dragOverEvent('revert');

                        if (!Sortable.eventCanceled) {
                            if (nextEl) {
                                rootEl.insertBefore(dragEl, nextEl);
                            } else {
                                rootEl.appendChild(dragEl);
                            }
                        }

                        return completed(true);
                    }

                    var elLastChild = lastChild(el, options.draggable);

                    if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
                        // If already at end of list: Do not insert
                        if (elLastChild === dragEl) {
                            return completed(false);
                        } // assign target only if condition is true


                        if (elLastChild && el === evt.target) {
                            target = elLastChild;
                        }

                        if (target) {
                            targetRect = getRect(target);
                        }

                        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
                            capture();
                            el.appendChild(dragEl);
                            parentEl = el; // actualization

                            changed();
                            return completed(true);
                        }
                    } else if (target.parentNode === el) {
                        targetRect = getRect(target);
                        var direction = 0,
                            targetBeforeFirstSwap,
                            differentLevel = dragEl.parentNode !== el,
                            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
                            side1 = vertical ? 'top' : 'left',
                            scrolledPastTop = isScrolledPast(target, null, 'top', 'top') || isScrolledPast(dragEl, null, 'top', 'top'),
                            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

                        if (lastTarget !== target) {
                            targetBeforeFirstSwap = targetRect[side1];
                            pastFirstInvertThresh = false;
                            isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
                        }

                        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
                        var sibling;

                        if (direction !== 0) {
                            // Check if target is beside dragEl in respective direction (ignoring hidden elements)
                            var dragIndex = index(dragEl);

                            do {
                                dragIndex -= direction;
                                sibling = parentEl.children[dragIndex];
                            } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
                        } // If dragEl is already beside target: Do not insert


                        if (direction === 0 || sibling === target) {
                            return completed(false);
                        }

                        lastTarget = target;
                        lastDirection = direction;
                        var nextSibling = target.nextElementSibling,
                            after = false;
                        after = direction === 1;

                        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

                        if (moveVector !== false) {
                            if (moveVector === 1 || moveVector === -1) {
                                after = moveVector === 1;
                            }

                            _silent = true;
                            setTimeout(_unsilent, 30);
                            capture();

                            if (after && !nextSibling) {
                                el.appendChild(dragEl);
                            } else {
                                target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
                            } // Undo chrome's scroll adjustment (has no effect on other browsers)


                            if (scrolledPastTop) {
                                scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
                            }

                            parentEl = dragEl.parentNode; // actualization
                            // must be done before animation

                            if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
                                targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
                            }

                            changed();
                            return completed(true);
                        }
                    }

                    if (el.contains(dragEl)) {
                        return completed(false);
                    }
                }

                return false;
            },
            _ignoreWhileAnimating: null,
            _offMoveEvents: function _offMoveEvents() {
                off(document, 'mousemove', this._onTouchMove);
                off(document, 'touchmove', this._onTouchMove);
                off(document, 'pointermove', this._onTouchMove);
                off(document, 'dragover', nearestEmptyInsertDetectEvent);
                off(document, 'mousemove', nearestEmptyInsertDetectEvent);
                off(document, 'touchmove', nearestEmptyInsertDetectEvent);
            },
            _offUpEvents: function _offUpEvents() {
                var ownerDocument = this.el.ownerDocument;
                off(ownerDocument, 'mouseup', this._onDrop);
                off(ownerDocument, 'touchend', this._onDrop);
                off(ownerDocument, 'pointerup', this._onDrop);
                off(ownerDocument, 'touchcancel', this._onDrop);
                off(document, 'selectstart', this);
            },
            _onDrop: function _onDrop(
                /**Event*/
                evt) {
                var el = this.el,
                    options = this.options; // Get the index of the dragged element within its parent

                newIndex = index(dragEl);
                newDraggableIndex = index(dragEl, options.draggable);
                pluginEvent('drop', this, {
                    evt: evt
                }); // Get again after plugin event

                newIndex = index(dragEl);
                newDraggableIndex = index(dragEl, options.draggable);

                if (Sortable.eventCanceled) {
                    this._nulling();

                    return;
                }

                awaitingDragStarted = false;
                isCircumstantialInvert = false;
                pastFirstInvertThresh = false;
                clearInterval(this._loopId);
                clearTimeout(this._dragStartTimer);

                _cancelNextTick(this.cloneId);

                _cancelNextTick(this._dragStartId); // Unbind events


                if (this.nativeDraggable) {
                    off(document, 'drop', this);
                    off(el, 'dragstart', this._onDragStart);
                }

                this._offMoveEvents();

                this._offUpEvents();

                if (Safari) {
                    css(document.body, 'user-select', '');
                }

                if (evt) {
                    if (moved) {
                        evt.cancelable && evt.preventDefault();
                        !options.dropBubble && evt.stopPropagation();
                    }

                    ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

                    if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
                        // Remove clone(s)
                        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
                    }

                    if (dragEl) {
                        if (this.nativeDraggable) {
                            off(dragEl, 'dragend', this);
                        }

                        _disableDraggable(dragEl);

                        dragEl.style['will-change'] = ''; // Remove classes
                        // ghostClass is added in dragStarted

                        if (moved && !awaitingDragStarted) {
                            toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
                        }

                        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

                        _dispatchEvent({
                            sortable: this,
                            name: 'unchoose',
                            toEl: parentEl,
                            newIndex: null,
                            newDraggableIndex: null,
                            originalEvent: evt
                        });

                        if (rootEl !== parentEl) {
                            if (newIndex >= 0) {
                                // Add event
                                _dispatchEvent({
                                    rootEl: parentEl,
                                    name: 'add',
                                    toEl: parentEl,
                                    fromEl: rootEl,
                                    originalEvent: evt
                                }); // Remove event


                                _dispatchEvent({
                                    sortable: this,
                                    name: 'remove',
                                    toEl: parentEl,
                                    originalEvent: evt
                                }); // drag from one list and drop into another


                                _dispatchEvent({
                                    rootEl: parentEl,
                                    name: 'sort',
                                    toEl: parentEl,
                                    fromEl: rootEl,
                                    originalEvent: evt
                                });

                                _dispatchEvent({
                                    sortable: this,
                                    name: 'sort',
                                    toEl: parentEl,
                                    originalEvent: evt
                                });
                            }

                            putSortable && putSortable.save();
                        } else {
                            if (newIndex !== oldIndex) {
                                if (newIndex >= 0) {
                                    // drag & drop within the same list
                                    _dispatchEvent({
                                        sortable: this,
                                        name: 'update',
                                        toEl: parentEl,
                                        originalEvent: evt
                                    });

                                    _dispatchEvent({
                                        sortable: this,
                                        name: 'sort',
                                        toEl: parentEl,
                                        originalEvent: evt
                                    });
                                }
                            }
                        }

                        if (Sortable.active) {
                            /* jshint eqnull:true */
                            if (newIndex == null || newIndex === -1) {
                                newIndex = oldIndex;
                                newDraggableIndex = oldDraggableIndex;
                            }

                            _dispatchEvent({
                                sortable: this,
                                name: 'end',
                                toEl: parentEl,
                                originalEvent: evt
                            }); // Save sorting


                            this.save();
                        }
                    }
                }

                this._nulling();
            },
            _nulling: function _nulling() {
                pluginEvent('nulling', this);
                rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
                savedInputChecked.forEach(function (el) {
                    el.checked = true;
                });
                savedInputChecked.length = 0;
            },
            handleEvent: function handleEvent(
                /**Event*/
                evt) {
                switch (evt.type) {
                    case 'drop':
                    case 'dragend':
                        this._onDrop(evt);

                        break;

                    case 'dragenter':
                    case 'dragover':
                        if (dragEl) {
                            this._onDragOver(evt);

                            _globalDragOver(evt);
                        }

                        break;

                    case 'selectstart':
                        evt.preventDefault();
                        break;
                }
            },

            /**
             * Serializes the item into an array of string.
             * @returns {String[]}
             */
            toArray: function toArray() {
                var order = [],
                    el,
                    children = this.el.children,
                    i = 0,
                    n = children.length,
                    options = this.options;

                for (; i < n; i++) {
                    el = children[i];

                    if (closest(el, options.draggable, this.el, false)) {
                        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
                    }
                }

                return order;
            },

            /**
             * Sorts the elements according to the array.
             * @param  {String[]}  order  order of the items
             */
            sort: function sort(order) {
                var items = {},
                    rootEl = this.el;
                this.toArray().forEach(function (id, i) {
                    var el = rootEl.children[i];

                    if (closest(el, this.options.draggable, rootEl, false)) {
                        items[id] = el;
                    }
                }, this);
                order.forEach(function (id) {
                    if (items[id]) {
                        rootEl.removeChild(items[id]);
                        rootEl.appendChild(items[id]);
                    }
                });
            },

            /**
             * Save the current sorting
             */
            save: function save() {
                var store = this.options.store;
                store && store.set && store.set(this);
            },

            /**
             * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
             * @param   {HTMLElement}  el
             * @param   {String}       [selector]  default: `options.draggable`
             * @returns {HTMLElement|null}
             */
            closest: function closest$1(el, selector) {
                return closest(el, selector || this.options.draggable, this.el, false);
            },

            /**
             * Set/get option
             * @param   {string} name
             * @param   {*}      [value]
             * @returns {*}
             */
            option: function option(name, value) {
                var options = this.options;

                if (value === void 0) {
                    return options[name];
                } else {
                    var modifiedValue = PluginManager.modifyOption(this, name, value);

                    if (typeof modifiedValue !== 'undefined') {
                        options[name] = modifiedValue;
                    } else {
                        options[name] = value;
                    }

                    if (name === 'group') {
                        _prepareGroup(options);
                    }
                }
            },

            /**
             * Destroy
             */
            destroy: function destroy() {
                pluginEvent('destroy', this);
                var el = this.el;
                el[expando] = null;
                off(el, 'mousedown', this._onTapStart);
                off(el, 'touchstart', this._onTapStart);
                off(el, 'pointerdown', this._onTapStart);

                if (this.nativeDraggable) {
                    off(el, 'dragover', this);
                    off(el, 'dragenter', this);
                } // Remove draggable attributes


                Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
                    el.removeAttribute('draggable');
                });

                this._onDrop();

                sortables.splice(sortables.indexOf(this.el), 1);
                this.el = el = null;
            },
            _hideClone: function _hideClone() {
                if (!cloneHidden) {
                    pluginEvent('hideClone', this);
                    if (Sortable.eventCanceled) return;
                    css(cloneEl, 'display', 'none');

                    if (this.options.removeCloneOnHide && cloneEl.parentNode) {
                        cloneEl.parentNode.removeChild(cloneEl);
                    }

                    cloneHidden = true;
                }
            },
            _showClone: function _showClone(putSortable) {
                if (putSortable.lastPutMode !== 'clone') {
                    this._hideClone();

                    return;
                }

                if (cloneHidden) {
                    pluginEvent('showClone', this);
                    if (Sortable.eventCanceled) return; // show clone at dragEl or original position

                    if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
                        rootEl.insertBefore(cloneEl, dragEl);
                    } else if (nextEl) {
                        rootEl.insertBefore(cloneEl, nextEl);
                    } else {
                        rootEl.appendChild(cloneEl);
                    }

                    if (this.options.group.revertClone) {
                        this._animate(dragEl, cloneEl);
                    }

                    css(cloneEl, 'display', '');
                    cloneHidden = false;
                }
            }
        };

    function _globalDragOver(
        /**Event*/
        evt) {
        if (evt.dataTransfer) {
            evt.dataTransfer.dropEffect = 'move';
        }

        evt.cancelable && evt.preventDefault();
    }

    function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
        var evt,
            sortable = fromEl[expando],
            onMoveFn = sortable.options.onMove,
            retVal; // Support for new CustomEvent feature

        if (window.CustomEvent && !IE11OrLess && !Edge) {
            evt = new CustomEvent('move', {
                bubbles: true,
                cancelable: true
            });
        } else {
            evt = document.createEvent('Event');
            evt.initEvent('move', true, true);
        }

        evt.to = toEl;
        evt.from = fromEl;
        evt.dragged = dragEl;
        evt.draggedRect = dragRect;
        evt.related = targetEl || toEl;
        evt.relatedRect = targetRect || getRect(toEl);
        evt.willInsertAfter = willInsertAfter;
        evt.originalEvent = originalEvent;
        fromEl.dispatchEvent(evt);

        if (onMoveFn) {
            retVal = onMoveFn.call(sortable, evt, originalEvent);
        }

        return retVal;
    }

    function _disableDraggable(el) {
        el.draggable = false;
    }

    function _unsilent() {
        _silent = false;
    }

    function _ghostIsLast(evt, vertical, sortable) {
        var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
        var spacer = 10;
        return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
    }

    function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
        var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
            targetLength = vertical ? targetRect.height : targetRect.width,
            targetS1 = vertical ? targetRect.top : targetRect.left,
            targetS2 = vertical ? targetRect.bottom : targetRect.right,
            invert = false;

        if (!invertSwap) {
            // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
            if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
                // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
                // check if past first invert threshold on side opposite of lastDirection
                if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
                    // past first invert threshold, do not restrict inverted threshold to dragEl shadow
                    pastFirstInvertThresh = true;
                }

                if (!pastFirstInvertThresh) {
                    // dragEl shadow (target move distance shadow)
                    if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
                        : mouseOnAxis > targetS2 - targetMoveDistance) {
                        return -lastDirection;
                    }
                } else {
                    invert = true;
                }
            } else {
                // Regular
                if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
                    return _getInsertDirection(target);
                }
            }
        }

        invert = invert || invertSwap;

        if (invert) {
            // Invert of regular
            if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
                return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
            }
        }

        return 0;
    }
    /**
     * Gets the direction dragEl must be swapped relative to target in order to make it
     * seem that dragEl has been "inserted" into that element's position
     * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
     * @return {Number}                   Direction dragEl must be swapped
     */


    function _getInsertDirection(target) {
        if (index(dragEl) < index(target)) {
            return 1;
        } else {
            return -1;
        }
    }
    /**
     * Generate id
     * @param   {HTMLElement} el
     * @returns {String}
     * @private
     */


    function _generateId(el) {
        var str = el.tagName + el.className + el.src + el.href + el.textContent,
            i = str.length,
            sum = 0;

        while (i--) {
            sum += str.charCodeAt(i);
        }

        return sum.toString(36);
    }

    function _saveInputCheckedState(root) {
        savedInputChecked.length = 0;
        var inputs = root.getElementsByTagName('input');
        var idx = inputs.length;

        while (idx--) {
            var _el = inputs[idx];
            _el.checked && savedInputChecked.push(_el);
        }
    }

    function _nextTick(fn) {
        return setTimeout(fn, 0);
    }

    function _cancelNextTick(id) {
        return clearTimeout(id);
    } // Fixed #973:


    on(document, 'touchmove', function (evt) {
        if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
            evt.preventDefault();
        }
    }); // Export utils

    Sortable.utils = {
        on: on,
        off: off,
        css: css,
        find: find,
        is: function is(el, selector) {
            return !!closest(el, selector, el, false);
        },
        extend: extend,
        throttle: throttle,
        closest: closest,
        toggleClass: toggleClass,
        clone: clone,
        index: index,
        nextTick: _nextTick,
        cancelNextTick: _cancelNextTick,
        detectDirection: _detectDirection,
        getChild: getChild
    };
    /**
     * Mount a plugin to Sortable
     * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
     */

    Sortable.mount = function () {
        for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
            plugins[_key] = arguments[_key];
        }

        if (plugins[0].constructor === Array) plugins = plugins[0];
        plugins.forEach(function (plugin) {
            if (!plugin.prototype || !plugin.prototype.constructor) {
                throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(el));
            }

            if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
            PluginManager.mount(plugin);
        });
    };
    /**
     * Create sortable instance
     * @param {HTMLElement}  el
     * @param {Object}      [options]
     */


    Sortable.create = function (el, options) {
        return new Sortable(el, options);
    }; // Export


    Sortable.version = version;

    var autoScrolls = [],
        scrollEl,
        scrollRootEl,
        scrolling = false,
        lastAutoScrollX,
        lastAutoScrollY,
        touchEvt$1,
        pointerElemChangedInterval;

    function AutoScrollPlugin() {
        function AutoScroll() {
            this.options = {
                scroll: true,
                scrollSensitivity: 30,
                scrollSpeed: 10,
                bubbleScroll: true
            }; // Bind all private methods

            for (var fn in this) {
                if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
                    this[fn] = this[fn].bind(this);
                }
            }
        }

        AutoScroll.prototype = {
            dragStarted: function dragStarted(_ref) {
                var originalEvent = _ref.originalEvent;

                if (this.sortable.nativeDraggable) {
                    on(document, 'dragover', this._handleAutoScroll);
                } else {
                    if (this.sortable.options.supportPointer) {
                        on(document, 'pointermove', this._handleFallbackAutoScroll);
                    } else if (originalEvent.touches) {
                        on(document, 'touchmove', this._handleFallbackAutoScroll);
                    } else {
                        on(document, 'mousemove', this._handleFallbackAutoScroll);
                    }
                }
            },
            dragOverCompleted: function dragOverCompleted(_ref2) {
                var originalEvent = _ref2.originalEvent;

                // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
                if (!this.sortable.options.dragOverBubble && !originalEvent.rootEl) {
                    this._handleAutoScroll(originalEvent);
                }
            },
            drop: function drop() {
                if (this.sortable.nativeDraggable) {
                    off(document, 'dragover', this._handleAutoScroll);
                } else {
                    off(document, 'pointermove', this._handleFallbackAutoScroll);
                    off(document, 'touchmove', this._handleFallbackAutoScroll);
                    off(document, 'mousemove', this._handleFallbackAutoScroll);
                }

                clearPointerElemChangedInterval();
                clearAutoScrolls();
                cancelThrottle();
            },
            nulling: function nulling() {
                touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
                autoScrolls.length = 0;
            },
            _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
                this._handleAutoScroll(evt, true);
            },
            _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
                var _this = this;

                var x = evt.clientX,
                    y = evt.clientY,
                    elem = document.elementFromPoint(x, y);
                touchEvt$1 = evt; // IE does not seem to have native autoscroll,
                // Edge's autoscroll seems too conditional,
                // MACOS Safari does not have autoscroll,
                // Firefox and Chrome are good

                if (fallback || Edge || IE11OrLess || Safari) {
                    autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

                    var ogElemScroller = getParentAutoScrollElement(elem, true);

                    if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
                        pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

                        pointerElemChangedInterval = setInterval(function () {
                            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

                            if (newElem !== ogElemScroller) {
                                ogElemScroller = newElem;
                                clearAutoScrolls();
                            }

                            autoScroll(evt, _this.options, newElem, fallback);
                        }, 10);
                        lastAutoScrollX = x;
                        lastAutoScrollY = y;
                    }
                } else {
                    // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
                    if (!this.sortable.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
                        clearAutoScrolls();
                        return;
                    }

                    autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
                }
            }
        };
        return _extends(AutoScroll, {
            pluginName: 'scroll',
            initializeByDefault: true
        });
    }

    function clearAutoScrolls() {
        autoScrolls.forEach(function (autoScroll) {
            clearInterval(autoScroll.pid);
        });
        autoScrolls = [];
    }

    function clearPointerElemChangedInterval() {
        clearInterval(pointerElemChangedInterval);
    }

    var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
        // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
        if (!options.scroll) return;
        var sens = options.scrollSensitivity,
            speed = options.scrollSpeed,
            winScroller = getWindowScrollingElement();
        var scrollThisInstance = false,
            scrollCustomFn; // New scroll root, set scrollEl

        if (scrollRootEl !== rootEl) {
            scrollRootEl = rootEl;
            clearAutoScrolls();
            scrollEl = options.scroll;
            scrollCustomFn = options.scrollFn;

            if (scrollEl === true) {
                scrollEl = getParentAutoScrollElement(rootEl, true);
            }
        }

        var layersOut = 0;
        var currentParent = scrollEl;

        do {
            var el = currentParent,
                rect = getRect(el),
                top = rect.top,
                bottom = rect.bottom,
                left = rect.left,
                right = rect.right,
                width = rect.width,
                height = rect.height,
                canScrollX = void 0,
                canScrollY = void 0,
                scrollWidth = el.scrollWidth,
                scrollHeight = el.scrollHeight,
                elCSS = css(el),
                scrollPosX = el.scrollLeft,
                scrollPosY = el.scrollTop;

            if (el === winScroller) {
                canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
                canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
            } else {
                canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
                canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
            }

            var vx = canScrollX && (Math.abs(right - evt.clientX) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - evt.clientX) <= sens && !!scrollPosX);
            var vy = canScrollY && (Math.abs(bottom - evt.clientY) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - evt.clientY) <= sens && !!scrollPosY);

            if (!autoScrolls[layersOut]) {
                for (var i = 0; i <= layersOut; i++) {
                    if (!autoScrolls[i]) {
                        autoScrolls[i] = {};
                    }
                }
            }

            if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
                autoScrolls[layersOut].el = el;
                autoScrolls[layersOut].vx = vx;
                autoScrolls[layersOut].vy = vy;
                clearInterval(autoScrolls[layersOut].pid);

                if (vx != 0 || vy != 0) {
                    scrollThisInstance = true;
                    /* jshint loopfunc:true */

                    autoScrolls[layersOut].pid = setInterval(function () {
                        // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
                        if (isFallback && this.layer === 0) {
                            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

                        }

                        var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
                        var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

                        if (typeof scrollCustomFn === 'function') {
                            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
                                return;
                            }
                        }

                        scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
                    }.bind({
                        layer: layersOut
                    }), 24);
                }
            }

            layersOut++;
        } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

        scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
    }, 30);

    var drop = function drop(_ref) {
        var originalEvent = _ref.originalEvent,
            putSortable = _ref.putSortable,
            dragEl = _ref.dragEl,
            activeSortable = _ref.activeSortable,
            dispatchSortableEvent = _ref.dispatchSortableEvent,
            hideGhostForTarget = _ref.hideGhostForTarget,
            unhideGhostForTarget = _ref.unhideGhostForTarget;
        var toSortable = putSortable || activeSortable;
        hideGhostForTarget();
        var target = document.elementFromPoint(originalEvent.clientX, originalEvent.clientY);
        unhideGhostForTarget();

        if (toSortable && !toSortable.el.contains(target)) {
            dispatchSortableEvent('spill');
            this.onSpill(dragEl);
        }
    };

    function Revert() {}

    Revert.prototype = {
        startIndex: null,
        dragStart: function dragStart(_ref2) {
            var oldDraggableIndex = _ref2.oldDraggableIndex;
            this.startIndex = oldDraggableIndex;
        },
        onSpill: function onSpill(dragEl) {
            this.sortable.captureAnimationState();
            var nextSibling = getChild(this.sortable.el, this.startIndex, this.sortable.options);

            if (nextSibling) {
                this.sortable.el.insertBefore(dragEl, nextSibling);
            } else {
                this.sortable.el.appendChild(dragEl);
            }

            this.sortable.animateAll();
        },
        drop: drop
    };

    _extends(Revert, {
        pluginName: 'revertOnSpill'
    });

    function Remove() {}

    Remove.prototype = {
        onSpill: function onSpill(dragEl) {
            this.sortable.captureAnimationState();
            dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
            this.sortable.animateAll();
        },
        drop: drop
    };

    _extends(Remove, {
        pluginName: 'removeOnSpill'
    });

    var lastSwapEl;

    function SwapPlugin() {
        function Swap() {
            this.options = {
                swapClass: 'sortable-swap-highlight'
            };
        }

        Swap.prototype = {
            dragStart: function dragStart(_ref) {
                var dragEl = _ref.dragEl;
                lastSwapEl = dragEl;
            },
            dragOverValid: function dragOverValid(_ref2) {
                var completed = _ref2.completed,
                    target = _ref2.target,
                    onMove = _ref2.onMove,
                    activeSortable = _ref2.activeSortable,
                    changed = _ref2.changed;
                if (!activeSortable.options.swap) return;
                var el = this.sortable.el,
                    options = this.sortable.options;

                if (target && target !== el) {
                    var prevSwapEl = lastSwapEl;

                    if (onMove(target) !== false) {
                        toggleClass(target, options.swapClass, true);
                        lastSwapEl = target;
                    } else {
                        lastSwapEl = null;
                    }

                    if (prevSwapEl && prevSwapEl !== lastSwapEl) {
                        toggleClass(prevSwapEl, options.swapClass, false);
                    }
                }

                changed();
                return completed(true);
            },
            drop: function drop(_ref3) {
                var activeSortable = _ref3.activeSortable,
                    putSortable = _ref3.putSortable,
                    dragEl = _ref3.dragEl;
                var toSortable = putSortable || this.sortable;
                var options = this.sortable.options;
                lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

                if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
                    if (dragEl !== lastSwapEl) {
                        toSortable.captureAnimationState();
                        if (toSortable !== activeSortable) activeSortable.captureAnimationState();
                        swapNodes(dragEl, lastSwapEl);
                        toSortable.animateAll();
                        if (toSortable !== activeSortable) activeSortable.animateAll();
                    }
                }
            },
            nulling: function nulling() {
                lastSwapEl = null;
            }
        };
        return _extends(Swap, {
            pluginName: 'swap',
            eventOptions: function eventOptions() {
                return {
                    swapItem: lastSwapEl
                };
            }
        });
    }

    function swapNodes(n1, n2) {
        var p1 = n1.parentNode,
            p2 = n2.parentNode,
            i1,
            i2;
        if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
        i1 = index(n1);
        i2 = index(n2);

        if (p1.isEqualNode(p2) && i1 < i2) {
            i2++;
        }

        p1.insertBefore(n2, p1.children[i1]);
        p2.insertBefore(n1, p2.children[i2]);
    }

    var multiDragElements = [],
        multiDragClones = [],
        lastMultiDragSelect,
        // for selection with modifier key down (SHIFT)
        multiDragSortable,
        initialFolding = false,
        // Initial multi-drag fold when drag started
        folding = false,
        // Folding any other time
        dragStarted = false,
        dragEl$1,
        clonesFromRect,
        clonesHidden;

    function MultiDragPlugin() {
        function MultiDrag(sortable) {
            // Bind all private methods
            for (var fn in this) {
                if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
                    this[fn] = this[fn].bind(this);
                }
            }

            if (sortable.options.supportPointer) {
                on(document, 'pointerup', this._deselectMultiDrag);
            } else {
                on(document, 'mouseup', this._deselectMultiDrag);
                on(document, 'touchend', this._deselectMultiDrag);
            }

            on(document, 'keydown', this._checkKeyDown);
            on(document, 'keyup', this._checkKeyUp);
            this.options = {
                selectedClass: 'sortable-selected',
                multiDragKey: null,
                setData: function setData(dataTransfer, dragEl) {
                    var data = '';

                    if (multiDragElements.length && multiDragSortable === sortable) {
                        multiDragElements.forEach(function (multiDragElement, i) {
                            data += (!i ? '' : ', ') + multiDragElement.textContent;
                        });
                    } else {
                        data = dragEl.textContent;
                    }

                    dataTransfer.setData('Text', data);
                }
            };
        }

        MultiDrag.prototype = {
            multiDragKeyDown: false,
            isMultiDrag: false,
            delayStartGlobal: function delayStartGlobal(_ref) {
                var dragged = _ref.dragEl;
                dragEl$1 = dragged;
            },
            delayEnded: function delayEnded() {
                this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
            },
            setupClone: function setupClone(_ref2) {
                var sortable = _ref2.sortable;
                if (!this.isMultiDrag) return;

                for (var _i = 0; _i < multiDragElements.length; _i++) {
                    multiDragClones.push(clone(multiDragElements[_i]));
                    multiDragClones[_i].sortableIndex = multiDragElements[_i].sortableIndex;
                    multiDragClones[_i].draggable = false;
                    multiDragClones[_i].style['will-change'] = '';
                    toggleClass(multiDragClones[_i], sortable.options.selectedClass, false);
                    multiDragElements[_i] === dragEl$1 && toggleClass(multiDragClones[_i], sortable.options.chosenClass, false);
                }

                sortable._hideClone();

                return true;
            },
            clone: function clone(_ref3) {
                var sortable = _ref3.sortable,
                    rootEl = _ref3.rootEl,
                    dispatchSortableEvent = _ref3.dispatchSortableEvent;
                if (!this.isMultiDrag) return;

                if (!sortable.options.removeCloneOnHide) {
                    if (multiDragElements.length && multiDragSortable === sortable) {
                        insertMultiDragClones(true, rootEl);
                        dispatchSortableEvent('clone');
                        return true;
                    }
                }
            },
            showClone: function showClone(_ref4) {
                var cloneNowShown = _ref4.cloneNowShown,
                    rootEl = _ref4.rootEl;
                if (!this.isMultiDrag) return;
                insertMultiDragClones(false, rootEl);
                multiDragClones.forEach(function (clone) {
                    css(clone, 'display', '');
                });
                cloneNowShown();
                clonesHidden = false;
                return true;
            },
            hideClone: function hideClone(_ref5) {
                var sortable = _ref5.sortable,
                    cloneNowHidden = _ref5.cloneNowHidden;
                if (!this.isMultiDrag) return;
                multiDragClones.forEach(function (clone) {
                    css(clone, 'display', 'none');

                    if (sortable.options.removeCloneOnHide && clone.parentNode) {
                        clone.parentNode.removeChild(clone);
                    }
                });
                cloneNowHidden();
                clonesHidden = true;
                return true;
            },
            dragStartGlobal: function dragStartGlobal(_ref6) {
                var sortable = _ref6.sortable;

                if (!this.isMultiDrag && multiDragSortable) {
                    multiDragSortable.multiDrag._deselectMultiDrag();
                }

                multiDragElements.forEach(function (multiDragElement) {
                    multiDragElement.sortableIndex = index(multiDragElement);
                }); // Sort multi-drag elements

                multiDragElements = multiDragElements.sort(function (a, b) {
                    return a.sortableIndex - b.sortableIndex;
                });
                dragStarted = true;
            },
            dragStarted: function dragStarted(_ref7) {
                var sortable = _ref7.sortable;
                if (!this.isMultiDrag) return;

                if (sortable.options.sort) {
                    // Capture rects,
                    // hide multi drag elements (by positioning them absolute),
                    // set multi drag elements rects to dragRect,
                    // show multi drag elements,
                    // animate to rects,
                    // unset rects & remove from DOM
                    sortable.captureAnimationState();

                    if (sortable.options.animation) {
                        multiDragElements.forEach(function (multiDragElement) {
                            if (multiDragElement === dragEl$1) return;
                            css(multiDragElement, 'position', 'absolute');
                        });
                        var dragRect = getRect(dragEl$1, false, true, true);
                        multiDragElements.forEach(function (multiDragElement) {
                            if (multiDragElement === dragEl$1) return;
                            setRect(multiDragElement, dragRect);
                        });
                        folding = true;
                        initialFolding = true;
                    }
                }

                sortable.animateAll(function () {
                    folding = false;
                    initialFolding = false;

                    if (sortable.options.animation) {
                        multiDragElements.forEach(function (multiDragElement) {
                            unsetRect(multiDragElement);
                        });
                    } // Remove all auxiliary multidrag items from el, if sorting enabled


                    if (sortable.options.sort) {
                        removeMultiDragElements();
                    }
                });
            },
            dragOver: function dragOver(_ref8) {
                var target = _ref8.target,
                    completed = _ref8.completed;

                if (folding && ~multiDragElements.indexOf(target)) {
                    return completed(false);
                }
            },
            revert: function revert(_ref9) {
                var fromSortable = _ref9.fromSortable,
                    rootEl = _ref9.rootEl,
                    sortable = _ref9.sortable,
                    dragRect = _ref9.dragRect;

                if (multiDragElements.length > 1) {
                    // Setup unfold animation
                    multiDragElements.forEach(function (multiDragElement) {
                        sortable.addAnimationState({
                            target: multiDragElement,
                            rect: folding ? getRect(multiDragElement) : dragRect
                        });
                        unsetRect(multiDragElement);
                        multiDragElement.fromRect = dragRect;
                        fromSortable.removeAnimationState(multiDragElement);
                    });
                    folding = false;
                    insertMultiDragElements(!sortable.options.removeCloneOnHide, rootEl);
                }
            },
            dragOverCompleted: function dragOverCompleted(_ref10) {
                var sortable = _ref10.sortable,
                    isOwner = _ref10.isOwner,
                    insertion = _ref10.insertion,
                    activeSortable = _ref10.activeSortable,
                    parentEl = _ref10.parentEl,
                    putSortable = _ref10.putSortable;
                var options = sortable.options;

                if (insertion) {
                    // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                    if (isOwner) {
                        activeSortable._hideClone();
                    }

                    initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

                    if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
                        // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
                        var dragRectAbsolute = getRect(dragEl$1, false, true, true);
                        multiDragElements.forEach(function (multiDragElement) {
                            if (multiDragElement === dragEl$1) return;
                            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
                            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

                            parentEl.appendChild(multiDragElement);
                        });
                        folding = true;
                    } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


                    if (!isOwner) {
                        // Only remove if not folding (folding will remove them anyways)
                        if (!folding) {
                            removeMultiDragElements();
                        }

                        if (multiDragElements.length > 1) {
                            var clonesHiddenBefore = clonesHidden;

                            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


                            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
                                multiDragClones.forEach(function (clone) {
                                    activeSortable.addAnimationState({
                                        target: clone,
                                        rect: clonesFromRect
                                    });
                                    clone.fromRect = clonesFromRect;
                                    clone.thisAnimationDuration = null;
                                });
                            }
                        } else {
                            activeSortable._showClone(sortable);
                        }
                    }
                }
            },
            dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
                var dragRect = _ref11.dragRect,
                    isOwner = _ref11.isOwner,
                    activeSortable = _ref11.activeSortable;
                multiDragElements.forEach(function (multiDragElement) {
                    multiDragElement.thisAnimationDuration = null;
                });

                if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
                    clonesFromRect = _extends({}, dragRect);
                    var dragMatrix = matrix(dragEl$1, true);
                    clonesFromRect.top -= dragMatrix.f;
                    clonesFromRect.left -= dragMatrix.e;
                }
            },
            dragOverAnimationComplete: function dragOverAnimationComplete() {
                if (folding) {
                    folding = false;
                    removeMultiDragElements();
                }
            },
            drop: function drop(_ref12) {
                var evt = _ref12.originalEvent,
                    rootEl = _ref12.rootEl,
                    parentEl = _ref12.parentEl,
                    sortable = _ref12.sortable,
                    dispatchSortableEvent = _ref12.dispatchSortableEvent,
                    oldIndex = _ref12.oldIndex,
                    putSortable = _ref12.putSortable;
                var toSortable = putSortable || this.sortable;
                if (!evt) return;
                var options = sortable.options,
                    children = parentEl.children; // Multi-drag selection

                if (!dragStarted) {
                    if (options.multiDragKey && !this.multiDragKeyDown) {
                        this._deselectMultiDrag();
                    }

                    toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

                    if (!~multiDragElements.indexOf(dragEl$1)) {
                        multiDragElements.push(dragEl$1);
                        dispatchEvent({
                            sortable: sortable,
                            rootEl: rootEl,
                            name: 'select',
                            targetEl: dragEl$1,
                            originalEvt: evt
                        }); // Modifier activated, select from last to dragEl

                        if ((!options.multiDragKey || this.multiDragKeyDown) && evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
                            var lastIndex = index(lastMultiDragSelect),
                                currentIndex = index(dragEl$1);

                            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
                                // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                                // (but previous selection existed)
                                var n, _i2;

                                if (currentIndex > lastIndex) {
                                    _i2 = lastIndex;
                                    n = currentIndex;
                                } else {
                                    _i2 = currentIndex;
                                    n = lastIndex + 1;
                                }

                                for (; _i2 < n; _i2++) {
                                    if (~multiDragElements.indexOf(children[_i2])) continue;
                                    toggleClass(children[_i2], options.selectedClass, true);
                                    multiDragElements.push(children[_i2]);
                                    dispatchEvent({
                                        sortable: sortable,
                                        rootEl: rootEl,
                                        name: 'select',
                                        targetEl: children[_i2],
                                        originalEvt: evt
                                    });
                                }
                            }
                        } else {
                            lastMultiDragSelect = dragEl$1;
                        }

                        multiDragSortable = toSortable;
                    } else {
                        multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
                        lastMultiDragSelect = null;
                        dispatchEvent({
                            sortable: sortable,
                            rootEl: rootEl,
                            name: 'deselect',
                            targetEl: dragEl$1,
                            originalEvt: evt
                        });
                    }
                } // Multi-drag drop


                if (dragStarted && this.isMultiDrag) {
                    // Do not "unfold" after around dragEl if reverted
                    if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
                        var dragRect = getRect(dragEl$1),
                            multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
                        if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
                        toSortable.captureAnimationState();

                        if (!initialFolding) {
                            if (options.animation) {
                                dragEl$1.fromRect = dragRect;
                                multiDragElements.forEach(function (multiDragElement) {
                                    multiDragElement.thisAnimationDuration = null;

                                    if (multiDragElement !== dragEl$1) {
                                        var rect = folding ? getRect(multiDragElement) : dragRect;
                                        multiDragElement.fromRect = rect; // Prepare unfold animation

                                        toSortable.addAnimationState({
                                            target: multiDragElement,
                                            rect: rect
                                        });
                                    }
                                });
                            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
                            // properly they must all be removed


                            removeMultiDragElements();
                            multiDragElements.forEach(function (multiDragElement) {
                                if (children[multiDragIndex]) {
                                    parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
                                } else {
                                    parentEl.appendChild(multiDragElement);
                                }

                                multiDragIndex++;
                            }); // If initial folding is done, the elements may have changed position because they are now
                            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
                            // must be fired here as Sortable will not.

                            if (oldIndex === index(dragEl$1)) {
                                var update = false;
                                multiDragElements.forEach(function (multiDragElement) {
                                    if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                                        update = true;
                                        return;
                                    }
                                });

                                if (update) {
                                    dispatchSortableEvent('update');
                                }
                            }
                        } // Must be done after capturing individual rects (scroll bar)


                        multiDragElements.forEach(function (multiDragElement) {
                            unsetRect(multiDragElement);
                        });
                        toSortable.animateAll();
                    }

                    multiDragSortable = toSortable;
                } // Remove clones if necessary


                if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
                    multiDragClones.forEach(function (clone) {
                        clone.parentNode && clone.parentNode.removeChild(clone);
                    });
                }
            },
            nullingGlobal: function nullingGlobal() {
                this.isMultiDrag = dragStarted = false;
                multiDragClones.length = 0;
            },
            destroy: function destroy() {
                this._deselectMultiDrag();

                off(document, 'pointerup', this._deselectMultiDrag);
                off(document, 'mouseup', this._deselectMultiDrag);
                off(document, 'touchend', this._deselectMultiDrag);
                off(document, 'keydown', this._checkKeyDown);
                off(document, 'keyup', this._checkKeyUp);
            },
            _deselectMultiDrag: function _deselectMultiDrag(evt) {
                if (dragStarted) return; // Only deselect if selection is in this sortable

                if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

                if (evt && closest(evt.target, this.sortable.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

                if (evt && evt.button !== 0) return;

                while (multiDragElements.length) {
                    var el = multiDragElements[0];
                    toggleClass(el, this.sortable.options.selectedClass, false);
                    multiDragElements.shift();
                    dispatchEvent({
                        sortable: this.sortable,
                        rootEl: this.sortable.el,
                        name: 'deselect',
                        targetEl: el,
                        originalEvt: evt
                    });
                }
            },
            _checkKeyDown: function _checkKeyDown(evt) {
                if (evt.key === this.sortable.options.multiDragKey) {
                    this.multiDragKeyDown = true;
                }
            },
            _checkKeyUp: function _checkKeyUp(evt) {
                if (evt.key === this.sortable.options.multiDragKey) {
                    this.multiDragKeyDown = false;
                }
            }
        };
        return _extends(MultiDrag, {
            // Static methods & properties
            pluginName: 'multiDrag',
            utils: {
                /**
                 * Selects the provided multi-drag item
                 * @param  {HTMLElement} el    The element to be selected
                 */
                select: function select(el) {
                    var sortable = el.parentNode[expando];
                    if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

                    if (multiDragSortable && multiDragSortable !== sortable) {
                        multiDragSortable.multiDrag._deselectMultiDrag();

                        multiDragSortable = sortable;
                    }

                    toggleClass(el, sortable.options.selectedClass, true);
                    multiDragElements.push(el);
                },

                /**
                 * Deselects the provided multi-drag item
                 * @param  {HTMLElement} el    The element to be deselected
                 */
                deselect: function deselect(el) {
                    var sortable = el.parentNode[expando],
                        index = multiDragElements.indexOf(el);
                    if (!sortable || !sortable.options.multiDrag || !~index) return;
                    toggleClass(el, sortable.options.selectedClass, false);
                    multiDragElements.splice(index, 1);
                }
            },
            eventOptions: function eventOptions() {
                var _this = this;

                var oldIndicies = [],
                    newIndicies = [];
                multiDragElements.forEach(function (multiDragElement) {
                    oldIndicies.push({
                        multiDragElement: multiDragElement,
                        index: multiDragElement.sortableIndex
                    }); // multiDragElements will already be sorted if folding

                    var newIndex;

                    if (folding && multiDragElement !== dragEl$1) {
                        newIndex = -1;
                    } else if (folding) {
                        newIndex = index(multiDragElement, ':not(.' + _this.options.selectedClass + ')');
                    } else {
                        newIndex = index(multiDragElement);
                    }

                    newIndicies.push({
                        multiDragElement: multiDragElement,
                        index: newIndex
                    });
                });
                return {
                    items: _toConsumableArray(multiDragElements),
                    clones: [].concat(multiDragClones),
                    oldIndicies: oldIndicies,
                    newIndicies: newIndicies
                };
            },
            optionListeners: {
                multiDragKey: function multiDragKey(key) {
                    key = key.toLowerCase();

                    if (key === 'ctrl') {
                        key = 'Control';
                    } else if (key.length > 1) {
                        key = key.charAt(0).toUpperCase() + key.substr(1);
                    }

                    return key;
                }
            }
        });
    }

    function insertMultiDragElements(clonesInserted, rootEl) {
        multiDragElements.forEach(function (multiDragElement) {
            var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

            if (target) {
                rootEl.insertBefore(multiDragElement, target);
            } else {
                rootEl.appendChild(multiDragElement);
            }
        });
    }
    /**
     * Insert multi-drag clones
     * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
     * @param  {HTMLElement} rootEl
     */


    function insertMultiDragClones(elementsInserted, rootEl) {
        multiDragClones.forEach(function (clone) {
            var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

            if (target) {
                rootEl.insertBefore(clone, target);
            } else {
                rootEl.appendChild(clone);
            }
        });
    }

    function removeMultiDragElements() {
        multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
        });
    }

    Sortable.mount(new AutoScrollPlugin());
    Sortable.mount(Remove, Revert);

    Sortable.mount(new SwapPlugin());
    Sortable.mount(new MultiDragPlugin());

    return Sortable;

}));

/*!
 * truncator v1.2.0
 * https://github.com/ktsn/truncator
 *
 * @license
 * Copyright (c) 2015-2018 katashin
 * Released under the MIT license
 * https://github.com/ktsn/truncator/blob/master/LICENSE
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.Truncator={})}(this,function(t){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e){n(this,t),this.el=e,this.style=window.getComputedStyle(e,"")}return i(t,[{key:"text",set:function(t){if("textContent"in this.el)this.el.textContent=t;else{if(!("innerText"in this.el))throw new Error("The browser does not support text insertion for DOM");this.el.innerText=t}}},{key:"height",get:function(){return parseFloat(this.style.getPropertyValue("height"))||0}},{key:"lineHeight",get:function(){var t=this.el.innerHTML;this.el.innerHTML="X";var e=this.height;return this.el.innerHTML=t,e}}]),t}();var r={ellipsis:"..."},u=function(){function t(e,i,o,r,u){n(this,t),this.el=e,this.text=i,this.boundary=o,this.options=r,this.truncate=u,this.recalc()}return i(t,[{key:"recalc",value:function(){var t=this;!function(t,e){var n=t.style,i=n.height,o=n.maxHeight,r=n.minHeight;try{t.style.height="auto",t.style.maxHeight="none",t.style.minHeight="0",e()}finally{t.style.height=i,t.style.maxHeight=o,t.style.minHeight=r}}(this.el.el,function(){t.truncate(t.el,t.text,t.boundary,t.options)})}},{key:"restoreText",value:function(){this.el.text=this.text}}]),t}();function l(t,e,n,i){s(t,e,t.lineHeight*n,i)}function s(t,e,n,i){t.text=e,t.height<=n||function t(e,n,i,o,r,u){var l=Math.floor((r+u)/2);var s=n.substring(0,l)+o.ellipsis;e.text=s;if(r>=u-1)return;var h=e.height;h>i?t(e,n,i,o,r,l):t(e,n,i,o,l,u)}(t,e,n,i,0,e.length)}function h(t,e,n,i){e.length<=n?t.text=e:t.text=e.substring(0,n)+i.ellipsis}t.truncate=function(t,n,i){if(null===i||"object"!==(void 0===i?"undefined":e(i)))throw new Error("options must be an object");var f=new o(t),c=(a=i,y=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return n.forEach(function(e){Object.keys(e).forEach(function(n){void 0!==e[n]&&(t[n]=e[n])})}),t}({},r,a),null===y.ellipsis&&(y.ellipsis=""),y);var a,y;if("number"==typeof c.height)return new u(f,n,c.height,c,s);if("number"==typeof c.line)return new u(f,n,Math.floor(c.line),c,l);if("number"==typeof c.count)return new u(f,n,Math.floor(c.count),c,h);throw new Error("options must have height, line or count as number")},Object.defineProperty(t,"__esModule",{value:!0})});