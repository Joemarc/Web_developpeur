if (self.CavalryLogger) { CavalryLogger.start_js(["+PQZX"]); }

__d("XPymkFunnelLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pymk\/funnel_logging\/",{event_ts:{type:"Int",required:true},query_id:{type:"Int"},candidate_id:{type:"Int"},signature:{type:"Int"},loc:{type:"String",required:true},ref:{type:"String"},action:{type:"Enum",required:true,enumType:1}});}),null);
__d('PymkFunnelLogger',['AsyncRequest','DOMQuery','XPymkFunnelLoggingController'],(function a(b,c,d,e,f,g){var h={setupListeners:function i(j,k,l,m,n){this._setupForSingleElement(j,k,l,'add');this._setupForSingleElement(j,k,m,'click');this._setupForSingleElement(j,k,n,'click');},logImpression:function i(j,k,l){this._logEvent(j,'impression',k,l);},logXOut:function i(j,k,l){this._logEvent(j,'hide',k,l);},_logEvent:function i(j,event,k,l){var m=c('XPymkFunnelLoggingController').getURIBuilder().setInt('candidate_id',j).setInt('signature',k).setInt('event_ts',Math.floor(Date.now()/1000)).setEnum('action',event).setString('loc',l).getURI();new (c('AsyncRequest'))(m).setMethod('POST').send();},_setupForSingleElement:function i(j,k,l,m){Event.listen(l,'click',function(event){var n=j.getAttribute('data-signature'),o=c('DOMQuery').find(j,'input.friendBrowserID'),p=parseInt(o.value,10);this._logEvent(p,m,n,k);}.bind(this));}};f.exports=h;}),null);
__d("XFriendRequestIHEventLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/requests\/interaction_history_logging\/",{target_id:{type:"FBID",required:true},log_event:{type:"String",required:true}});}),null);
__d('FriendRequestIHEventLogger',['Event','AsyncRequest','XFriendRequestIHEventLoggingController'],(function a(b,c,d,e,f,g){var h={setupJewelListeners:function i(j,k,l){this._setupForJewelSingleElement(j,k,'click');if(l)this._setupForJewelSingleElement(j,l,'click');},logImpression:function i(j){this._logEvent(j,'impression');},_logEvent:function i(j,event){if(isNaN(j))return;var k=c('XFriendRequestIHEventLoggingController').getURIBuilder().setFBID('target_id',j).setString('log_event',event).getURI();new (c('AsyncRequest'))(k).setMethod('POST').send();},_setupForJewelSingleElement:function i(j,k,l){c('Event').listen(k,'click',function(event){var m=j.getAttribute('id');if(!m)return;var n=m.substring(0,m.length-6);this._logEvent(n,l);}.bind(this));}};f.exports=h;}),null);
__d('TickerController',['invariant','Arbiter','AsyncSignal','Bootloader','CSS','DOM','Parent','UIPagelet','Vector','$','emptyFunction','ge'],(function a(b,c,d,e,f,g,h){var i=1,j=2,k=3,l=4,m=15000,n=null,o={},p={},q={setActiveInstance:function r(s){n=s;},getActiveInstance:function r(){return n;},clearRHCplaceholder:function r(){o.pagelet_rhc_ticker=null;},registerInstance:function r(s,t){s||h(0);p[s]=t;q.setActiveInstance(t);},getInstance:function r(s){if(!s)return null;var t=c('Parent').byClass(c('$')(s),'fbFeedTicker');return p[t.id]||null;},isLoaded:function r(s){var t=o[s.id];return !t||t.status==k;},show:function r(s,t){t=t||c('emptyFunction');for(var u in p){var v=c('ge')(u);if(!v||v.parentNode.id==s.id)continue;q.hide(v.parentNode);}q._doPositionChange(s);c('CSS').show(s);var w=o[s.id];if(w&&w.status==i){var x=(c('Vector').getElementDimensions(s).y||0)>0,y=s.id==='pagelet_rhc_ticker'&&!c('CSS').hasClass(s,'hidden_rhc_ticker');if(x||y){var z=c('DOM').scry(s,'.tickerPlaceholderSpinner')[0];z&&c('CSS').show(z);q._fetchTickerForPlaceholder(s,t);}else c('Arbiter').subscribe('Ticker/resized',function(){if(w.status==i)q._fetchTickerForPlaceholder(s,t);});}else{var aa=c('DOM').scry(s,'.fbFeedTicker')[0],ba=q.getInstance(aa);n=ba;ba&&ba._poll();o[s.id]={status:l,callback:t};t();}c('Arbiter').inform('ticker/show',{node:s,callback:t});},_doPositionChange:function r(s){if(c('CSS').shown(s))return;new (c('AsyncSignal'))('/common/ods_endpoint.php',{k:'ticker.render.switch.'+s.id}).send();},hide:function r(s){var t=c('DOM').scry(s,'.fbFeedTicker')[0],u=q.getInstance(t);u&&u.hideActiveStory();c('CSS').hide(s);},hideStoriesByClass:function r(s){for(var t in p)c('DOM').scry(c('$')(t),s).forEach(c('CSS').hide);},hideStory:function r(s){var t=q.getInstance(s);t&&t.hideStory(s);},replaceStory:function r(s,t){var u=c('DOM').scry(document.body,'div.fbFeedTickerStory'),v=q.getInstance(u[0]);if(!v)return;var w=v._findStoryById(s);v.handleRemoveStory();c('CSS').hide(w);c('DOM').insertAfter(w,t);t.setAttribute('data-story-id',w.getAttribute('id'));var x=setTimeout(function(){return q.removeMarkup(t,w);},m);t.setAttribute('data-timeout-token',x);},removeMarkup:function r(s,t){c('Bootloader').loadModules(["Animation"],function(u){c('CSS').addClass(s,'removedStoryMarkup');new u(s).to('height',0).duration(500).ondone(function(){c('DOM').remove(s);}).go();},'TickerController');},undoHideStory:function r(s){var t=q.getInstance(s);t&&t.undoHideStory(s);},insertStoriesAtBottom:function r(s){n.insertStoriesAtBottom(s);},_fetchTickerForPlaceholder:function r(s,t){var u={handler:function v(){o[s.id].status=k;t();}};c('UIPagelet').loadFromEndpoint('TickerEntStoryPagelet',s.id,o[s.id].pageletData,u);o[s.id].status=j;},registerStoryDialog:function r(s,t){c('Arbiter').subscribe('ticker/init',function(){var u=c('ge')(s),v=q.getInstance(u);v&&v.registerStoryDialog(u,t);},c('Arbiter').SUBSCRIBE_ALL);},registerPlaceholder:function r(s,t){var u=o[s];o[s]={status:i,pageletData:t};if(u&&u.status==l){q.show(c('$')(s));u.callback();}}};f.exports=q;}),null);
__d('TickerRightColumnController',['csx','cx','Arbiter','CSS','DOM','Event','NavigationMessage','Parent','Run','Style','SubscriptionsHandler','TickerController','Vector','ge','throttle'],(function a(b,c,d,e,f,g,h,i){var j;function k(){var p=c('ge')('pagelet_rhc_ticker');p&&c('TickerController').show(p,m);}function l(){var p=c('ge')('pagelet_rhc_ticker');p&&c('TickerController').hide(p);}function m(){var p=c('ge')('pagelet_rhc_ticker'),q=c('DOM').scry(p,'.ticker_container')[0],r=c('DOM').scry(p,'.ticker_stream')[0],s=c('ge')('rightCol');if(!p||!q||!r||!s)return;c('Style').set(q,'height','0');var t=75,u=c('Vector').getViewportDimensions().y,v=c('Vector').getElementDimensions(s).y,w=u-v-t,x=c('Vector').getElementDimensions(r).y,y=Math.max(Math.min(w,x,j.tickerMaxHeight||425),j.tickerMinHeight||225);c('Style').set(q,'height',y+'px');}function n(p){var q=c('ge')('pagelet_rhc_ticker'),r=q&&c('Parent').bySelector(q,"._5zcc");if(r)c('CSS').conditionClass(r,"_5zcb",p);q&&c('CSS').conditionClass(q,'hidden_rhc_ticker',!p);if(p){m();var s=c('ge')('fbTickerClosedEd');s&&c('CSS').hide(s);}}var o={init:function p(q){j=q;var r=new (c('SubscriptionsHandler'))();if(j.enableSidebar)r.addSubscriptions(c('Arbiter').subscribe('sidebar/visibility',function(t,u){if(u){l();}else k();}),c('Arbiter').subscribe('minisidebar/show',k),c('Arbiter').subscribe('LitestandClassicRHC/loaded',m),c('Event').listen(window,'scroll',c('throttle')(function(){var t=c('DOM').scry(c('ge')('pagelet_rhc_ticker'),'.fbFeedTicker')[0],u=c('TickerController').getInstance(t);u&&u.handleRemoveStory();})));if(!c('CSS').hasClass(document.documentElement,'sidebarMode')){k();}else if(j.enableSidebar)l();var s=function t(){r.release();};c('Arbiter').subscribeOnce(c('NavigationMessage').NAVIGATION_BEGIN,s);c('Run').onLeave(s);},initRHCTickerHider:function p(q){c('Event').listen(q,'click',this.hideRHCTicker);},showRHCTicker:function p(){n(true);},hideRHCTicker:function p(){n(false);}};f.exports=o;}),null);
__d('QPRenderer',['CSS','XAsyncRequest','XQuickPromotionSimpleLoggingController','$'],(function a(b,c,d,e,f,g){var h=function m(n,event,o){var p=c('XQuickPromotionSimpleLoggingController').getURIBuilder().setInt('qp_id',n).setString('qp_event',event).setStringToStringMap('qp_instance_log_data',o).getURI();new (c('XAsyncRequest'))(p).send();},i=function m(n,o,p){var q=c('XQuickPromotionSimpleLoggingController').getURIBuilder().setInt('qp_id',n).setEnum('qp_action',o).setStringToStringMap('qp_instance_log_data',p).getURI();new (c('XAsyncRequest'))(q).send();},j=function m(n,o,p,q,r,s){l(n,p,c('$')(q),s,function(){if(r)c('CSS').hide(o);});},k=function m(n,o,p){o.show();h(n,'view',{});o.subscribe('cancel',function(){h(n,'dialog_cancel',{});});for(var q=0;q<p.length;q++){var r=p[q],s=c('$')(r.element_id);l(n,r.action,s,r.extra_log_data,r.should_close?function(){o.hide();}:function(){});if(r.action=='primary')s.focus();}},l=function m(n,o,p,q,r){p.addEventListener('click',function(){var s=c('XQuickPromotionSimpleLoggingController').getURIBuilder().setInt('qp_id',n).setEnum('qp_action',o).setStringToStringMap('qp_instance_log_data',q).getURI();new (c('XAsyncRequest'))(s).send();r();});};g.setAction=j;g.setDialogActionsAndShow=k;g.logAction=i;g.logEvent=h;}),null);
__d('JewelQPLogging',['QPRenderer'],(function a(b,c,d,e,f,g){var h=false,i=null,j=false;function k(){if(j)return;if(h&&i){j=true;c('QPRenderer').logEvent(i.promotion_id,'view',i.instance_log_data?i.instance_log_data:{});}}var l={onJewelOpened:function m(){h=true;k();},updateQPLogData:function m(n){i=n;k();}};f.exports=l;}),null);
__d('RequestsJewelStore',['Arbiter','ArbiterMixin','ChannelConstants'],(function a(b,c,d,e,f,g){var h=babelHelpers['extends']({},c('ArbiterMixin'),{_initialized:false,_count:0,_requestList:{},addFriendRequests:function i(j){Object.assign(this._requestList,j);},getRequestListKeys:function i(){return Object.keys(this._requestList);},removeRequest:function i(j){delete this._requestList[j];},getRequestCount:function i(j){return this.getRequestListKeys().length;},decrementCount:function i(){this.setCount(Math.max(0,this._count-1));},setCount:function i(j){c('Arbiter').inform('jewel/count-updated',{jewel:'requests',count:j},c('Arbiter').BEHAVIOR_STATE);},setupListeners:function i(){if(this._initialized)return;this._initialized=true;c('Arbiter').subscribe('jewel/count-updated',function(j,k){k.jewel==='requests'&&this._updateCount(k.count);}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('jewel_requests_add'),function(j,k){return this._addRequest(k);}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('jewel_friending_notifs'),function(j,k){return this._addNotification(k);}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('jewel_requests_remove_old'),function(j,k){return this._removeOldRequest(k);}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('friend_requests_seen'),function(j,k){return this.setCount(0);}.bind(this));},_updateCount:function i(j){var k=this._count!==j;this._count=j;if(k)this.inform('countUpdated',j);},_addRequest:function i(j){if(!j)return;var k=j.obj,l=k.from,m=k.suggester,n=this._requestList[l];if(!n)this.setCount(this._count+1);var o=n?n.type:null,p=o===19&&!m;this.inform('addRequest',{shouldReplace:p,previousType:o});},_addNotification:function i(j){if(!j||j.obj.notif_type!=='friend_confirmed')return;this.inform('addNotification');},_removeOldRequest:function i(j){if(!j)return;var k=this._requestList[j.obj.from];if(!k)return;this.inform('removeOldRequest',k);}});f.exports=h;}),null);
__d("XWebGigaboxxUpdateSeenTimeAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ajax\/gigaboxx\/endpoint\/update_last_seen_time\/",{folder:{type:"String",required:true}});}),null);
__d('RequestsJewelController',['invariant','Promise','Arbiter','AsyncRequest','AsyncSignal','CSS','DOM','DOMQuery','Event','FriendRequestIHEventLogger','JewelQPLogging','MarauderLogger','Parent','PymkFunnelLogger','RequestsJewelStore','ScrollableArea','XWebGigaboxxUpdateSeenTimeAsyncController','ge','getElementPosition','getViewportDimensions','requireWeak','throttle'],(function a(b,c,d,e,f,g,h){var i=null;c('requireWeak')('FriendBrowserCheckboxController',function(o){return i=o;});var j=31,k=600,l=30,m=160;n.getInstance=function(){'use strict';return this.$RequestsJewelController11;};n.updateFromDOM=function(){'use strict';var o=this.getInstance();if(o)o.fromDom();};n.setupScroll=function(){'use strict';var o=this.getInstance();if(o)o.setupScroll();};n.setInitialHeight=function(){'use strict';var o=this.getInstance();if(o)o.updateHeight();};n.maybeLoadJewel=function(){'use strict';var o=this.getInstance();if(o)o.maybeLoadJewel();};n.isOpen=function(){'use strict';var o=this.getInstance();if(o)return o.$RequestsJewelController3();return false;};n.create=function(o,p,q){'use strict';!this.$RequestsJewelController11||h(0);return this.$RequestsJewelController11=new n(o,p,q);};function n(o,p,q){'use strict';this.$RequestsJewelController3=p;this.$RequestsJewelController2=q;this.$RequestsJewelController1=o;this.$RequestsJewelController5=-1;this.$RequestsJewelController6=-1;this.$RequestsJewelController10=c('Promise').resolve(true);this.$RequestsJewelController8=c('throttle').acrossTransitionsWithBlocking(function(){return this.$RequestsJewelController12({log_impressions:true});}.bind(this),5000);c('RequestsJewelStore').subscribe('addRequest',this.$RequestsJewelController13.bind(this));c('RequestsJewelStore').subscribe('addNotification',function(){return this.$RequestsJewelController14();}.bind(this));c('RequestsJewelStore').subscribe('removeOldRequest',this.$RequestsJewelController15.bind(this));c('RequestsJewelStore').setupListeners();this.setupScroll();this.$RequestsJewelController16();this.$RequestsJewelController17();this.$RequestsJewelController18();}n.prototype.fromDom=function(){'use strict';var o={};c('DOMQuery').scry(this.$RequestsJewelController1,'li.objectListItem').forEach(function(p){var q=p.getAttribute('id');if(q){var r=this.$RequestsJewelController19(q);if(r&&r.requester)o[r.requester]=r;}}.bind(this));c('RequestsJewelStore').addFriendRequests(o);this.$RequestsJewelController20();};n.prototype.maybeLoadJewel=function(){'use strict';if(this.$RequestsJewelController9){this.$RequestsJewelController9=false;this.openHandler();}};n.prototype.updateHeight=function(){'use strict';var o=this.$RequestsJewelController21();if(o)o.style.height=this.$RequestsJewelController22()+'px';};n.prototype.markSeen=function(){'use strict';this.$RequestsJewelController10.done(function(){var o=c('DOMQuery').scry(this.$RequestsJewelController1,'li[id]')[0];new (c('AsyncSignal'))(c('XWebGigaboxxUpdateSeenTimeAsyncController').getURIBuilder().setString('folder',this.$RequestsJewelController2).getURI()).send();}.bind(this));};n.prototype.openHandler=function(){'use strict';c('Arbiter').inform('requestsJewel/opened');var o=c('ge')('fbRequestsJewelLoading'),p=this.$RequestsJewelController21();if(!o&&!p){this.$RequestsJewelController9=true;}else if(o){this.$RequestsJewelController8();}else{var q=c('RequestsJewelStore').getRequestListKeys();if(q.length>0)new (c('AsyncRequest'))().setAllowCrossPageTransition(true).setURI('/friends/requests/log_impressions').setData({ids:q.join(','),ref:'jewel'}).send();}p&&c('ScrollableArea').poke(p);c('JewelQPLogging').onJewelOpened();};n.prototype.closeHandler=function(){'use strict';c('Arbiter').inform('requestsJewel/closed');c('DOMQuery').scry(this.$RequestsJewelController1,'li.jewelItemNew').forEach(function(o){c('CSS').removeClass(o,'jewelItemNew');});};n.prototype.setupScroll=function(){'use strict';var o=this.$RequestsJewelController21();if(o){this.$RequestsJewelController7=this.$RequestsJewelController23();this.$RequestsJewelController4=0;c('ScrollableArea').getInstance(o).subscribe('scroll',this.$RequestsJewelController24.bind(this));this.$RequestsJewelController25();this.$RequestsJewelController26();}};n.prototype.$RequestsJewelController16=function(){'use strict';c('Event').listen(this.$RequestsJewelController1,'submit',function(o){var p=c('Parent').byClass(o.getTarget(),'objectListItem');if(p){c('CSS').removeClass(p,'jewelItemNew');c('CSS').addClass(p,'jewelItemResponded');}});};n.prototype.$RequestsJewelController17=function(){'use strict';c('Event').listen(window,'resize',c('throttle').acrossTransitions(function(){this.updateHeight();}.bind(this)));};n.prototype.$RequestsJewelController18=function(){'use strict';c('Arbiter').subscribe('pymk-x-out',function(o,p){var q=p.location;if(q==='pymk_jewel_first_page'||q==='pymk_jewel')this.$RequestsJewelController25();}.bind(this));};n.prototype.$RequestsJewelController27=function(o){'use strict';var p=parseInt(o,10);return !isNaN(p)?p:null;};n.prototype.$RequestsJewelController19=function(o){'use strict';var p=o.match(/^(\d+)_(\d+)/);if(!p)return null;return {requester:this.$RequestsJewelController27(p[1]),type:this.$RequestsJewelController27(p[2])};};n.prototype.$RequestsJewelController28=function(o,p){'use strict';if(o==null||p==null)return null;return o+'_'+p;};n.prototype.$RequestsJewelController21=function(){'use strict';return c('DOMQuery').scry(this.$RequestsJewelController1,'.uiScrollableArea')[0];};n.prototype.$RequestsJewelController23=function(){'use strict';return c('DOMQuery').scry(this.$RequestsJewelController1,'.uiScrollableAreaWrap')[0];};n.prototype.$RequestsJewelController24=function(){'use strict';var o=c('DOMQuery').scry(this.$RequestsJewelController7,'.uiMorePager').pop();if(o){var p=c('getElementPosition')(o).y,q=this.$RequestsJewelController21();if(p>0&&q)c('CSS').addClass(q,'contentAfter');var r=c('DOMQuery').find(o,'a');if(!r)return;var s=c('getElementPosition')(r).y;if(s===this.$RequestsJewelController4)return;var t=c('getElementPosition')(this.$RequestsJewelController7),u=t.y+t.height;if(s-300<u&&s>0){this.$RequestsJewelController4=s;var v=r.getAttribute('ajaxify');if(v){new (c('AsyncRequest'))(v).setRelativeTo(r).setStatusElement(c('Parent').byClass(r,'stat_elem')).send();}else if(i)i.getInstance('jewel').showMore();}}this.$RequestsJewelController25();this.$RequestsJewelController26();};n.prototype.$RequestsJewelController25=function(){'use strict';if(!this.$RequestsJewelController7)return;var o=c('getElementPosition')(this.$RequestsJewelController7),p=o.y+o.height,q=c('DOMQuery').scry(this.$RequestsJewelController1,'li.friendBrowserListUnit'),r=q.length-1;while(r>this.$RequestsJewelController5){var s=c('getElementPosition')(q[r]),t=s.y,u=t+s.height;if(t>0&&u<=p)break;r-=1;}var v=r;while(r>this.$RequestsJewelController5){var w=c('DOMQuery').find(q[r],'input.friendBrowserID'),x=parseInt(w.value,10),y=parseInt(q[r].getAttribute('data-signature'),10);c('PymkFunnelLogger').logImpression(x,y,'pymk_jewel');r--;}this.$RequestsJewelController5=Math.max(this.$RequestsJewelController5,v);};n.prototype.$RequestsJewelController26=function(){'use strict';if(!this.$RequestsJewelController7)return;var o=c('getElementPosition')(this.$RequestsJewelController7),p=o.y+o.height,q=c('DOMQuery').scry(this.$RequestsJewelController1,'li.objectListItem'),r=q.length-1;while(r>this.$RequestsJewelController6){var s=c('getElementPosition')(q[r]),t=s.y,u=t+s.height;if(t>0&&u<=p)break;r-=1;}var v=r;while(r>this.$RequestsJewelController6){var w=q[r].getAttribute('id');w=w.substring(0,w.length-6);c('MarauderLogger').log('request_seen','friend_request_waterfall',{request_id:w,request_location:'requests_jewel'});c('FriendRequestIHEventLogger').logImpression(w);r-=1;}this.$RequestsJewelController6=Math.max(this.$RequestsJewelController6,v);};n.prototype.$RequestsJewelController12=function(){var o=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];'use strict';this.$RequestsJewelController10=new (c('Promise'))(function(p,q){var r=!c('ge')('fbRequestsJewelLoading');new (c('AsyncRequest'))().setURI('/ajax/requests/loader/').setData(babelHelpers['extends']({},o,{reloadcontent:r})).setFinallyHandler(function(s){if(!s.getError()){p(true);}else q();}).send();});};n.prototype.$RequestsJewelController14=function(){'use strict';if(this.$RequestsJewelController3())return;this.$RequestsJewelController12();};n.prototype.$RequestsJewelController13=function(o,p){var q=p.shouldReplace,r=p.previousType;'use strict';if(!q&&(r||this.$RequestsJewelController3()))return;this.$RequestsJewelController12();};n.prototype.$RequestsJewelController15=function(o,p){var q=p.requester,r=p.type;'use strict';if(this.$RequestsJewelController3()||c('ge')('fbRequestsJewelLoading')!=null)return;var s=this.$RequestsJewelController28(q,r),t=s&&c('ge')(s);if(t){if(c('CSS').hasClass(t,'jewelItemNew'))c('RequestsJewelStore').decrementCount();if(!c('CSS').hasClass(t,'jewelItemResponded')){c('DOM').remove(t);c('RequestsJewelStore').removeRequest(q);this.$RequestsJewelController20();}}};n.prototype.$RequestsJewelController20=function(){'use strict';c('DOMQuery').scry(this.$RequestsJewelController1,'li.empty').forEach(function(o){c('CSS').conditionShow(o,c('RequestsJewelStore').getRequestCount()<=0);});};n.prototype.$RequestsJewelController22=function(){'use strict';return Math.min(Math.max(c('getViewportDimensions')().height-m,l),k)+j;};n.$RequestsJewelController11=null;f.exports=n;}),null);
__d('createEmojiElement',['cx','JSXDOM'],(function a(b,c,d,e,f,g,h){function i(j,k,l){l=l||16;return c('JSXDOM').span({className:"_5mfr _47e3"},[c('JSXDOM').img({'aria-hidden':true,className:'img',height:l,src:k,width:l}),c('JSXDOM').span({className:"_7oe"},j)]);}f.exports=i;}),null);
__d('DOMEmoji',['cx','EmojiImageURL','EmojiRenderer','FBEmojiUtils','JSXDOM','SupportedFBEmoji','Utf16','createEmojiElement','flattenArray','isElementNode'],(function a(b,c,d,e,f,g,h){'use strict';var i={MAX_ITEMS:40,transform:function j(k,l){l=l||{};var m=l.size||16;return c('flattenArray')(k.map(function(n){if(!c('isElementNode')(n)){return c('EmojiRenderer').render(n,function(o){if(l.isSupportedEmoji){var p=c('FBEmojiUtils').getKeyFromCodepoints(o);if(l.isSupportedEmoji(p))return c('createEmojiElement')(o.join(''),c('EmojiImageURL').getMessengerURL(p,m),m);}else{var q=c('FBEmojiUtils').getSupportedKey(o);if(q)return c('createEmojiElement')(o.join(''),c('EmojiImageURL').getFBEmojiURL(q,m),m);}return c('JSXDOM').span({className:"_4ay8"+(m===16?' '+"_3kkw":'')},o.join(''));},this.MAX_ITEMS);}else return n;}.bind(this)));},params:function j(k){if(!k)return this;var l=this;return {__params:true,obj:l,params:k};}};f.exports=i;}),null);
__d('TransformTextToDOMMixin',['flattenArray','isElementNode'],(function a(b,c,d,e,f,g){var h=3,i={transform:function j(k,l){return c('flattenArray')(k.map(function(m){if(!c('isElementNode')(m)){var n=m,o=[],p=this.MAX_ITEMS||h;while(p--){var q=l?[n].concat(l):[n],r=this.match.apply(this,q);if(!r)break;o.push(n.substring(0,r.startIndex));o.push(r.element);n=n.substring(r.endIndex);}n&&o.push(n);return o;}return m;}.bind(this)));},params:function j(){for(var k=arguments.length,l=Array(k),m=0;m<k;m++)l[m]=arguments[m];var n=this;return {__params:true,obj:n,params:l};}};f.exports=i;}),null);
__d('DOMEmote',['cx','fbt','EmojiImageURL','EmoticonEmojiList','EmoticonsList','JSXDOM','SupportedFBEmoji','TransformTextToDOMMixin'],(function a(b,c,d,e,f,g,h,i){'use strict';var j={MAX_ITEMS:40,match:function k(l,m){var n=m&&m.getMessengerEmote,o=n?c('EmoticonEmojiList').regexp.exec(l):c('EmoticonsList').regexp.exec(l);if(!o||!o.length)return false;var p=o[2],q=o.index+o[1].length,r=n?c('EmoticonEmojiList').names[p]:c('EmoticonsList').emotes[p];return {startIndex:q,endIndex:q+p.length,element:this._element(p,r,m)};},_element:function k(l,m,n){var o=n&&n.getMessengerEmote,p=o?o(m):c('EmoticonsList').emoji[m],q=null;if(o&&p){q=c('JSXDOM').img({'aria-hidden':true,className:'img',height:16,src:c('EmojiImageURL').getMessengerURL(p,16),width:16});}else if(p){q=c('JSXDOM').img({'aria-hidden':true,className:'img',height:16,src:c('SupportedFBEmoji')[p]?c('EmojiImageURL').getFBEmojiURL(p):c('EmojiImageURL').getFBEmojiExtendedURL(p),width:16});}else q=c('JSXDOM').span({'aria-hidden':true,className:'emoticon emoticon_'+m});var r=i._("\u00e9motic\u00f4ne {emoticonName}",[i.param('emoticonName',m)]);return c('JSXDOM').span({className:"_47e3 _5mfr",title:r},[q,c('JSXDOM').span({'aria-hidden':true,className:"_7oe"},l)]);}};f.exports=Object.assign(j,c('TransformTextToDOMMixin'));}),null);
__d('transformTextToDOM',['createArrayFromMixed'],(function a(b,c,d,e,f,g){function h(i,j){var k=[i];j=c('createArrayFromMixed')(j);j.forEach(function(l){var m,n=l;if(l.__params){m=l.params;n=l.obj;}k=n.transform(k,m);});return k;}f.exports=h;}),null);
__d('emojiAndEmote',['DOMEmoji','DOMEmote','FbtResultBase','transformTextToDOM'],(function a(b,c,d,e,f,g){'use strict';var h=function i(j,k){if(j instanceof c('FbtResultBase'))return [j];var l=k?{isSupportedEmoji:k.isSupportedEmoji}:null,m=k?{getMessengerEmote:k.getMessengerEmote}:null,n=[c('DOMEmoji').params(l),c('DOMEmote').params(m)];return c('transformTextToDOM')(j,n);};f.exports=h;}),null);
__d('CompactTypeaheadRenderer',['BadgeHelper','DOM','emojiAndEmote','TypeaheadFacepile','isSocialPlugin'],(function a(b,c,d,e,f,g){function h(i,j){var k=[];if(i.xhp)return c('DOM').create('li',{className:'raw'},i.xhp);var l=i.photos||i.photo;if(l){if(l instanceof Array){l=c('TypeaheadFacepile').render(l);}else l=c('DOM').create('img',{alt:'',src:l});k.push(l);}var m=i.iconClass;if(m){var n=c('DOM').create('span',{className:m});k.push(n);}var o=i.debug_info;if(o)k.push(c('DOM').create('span',{className:'debugInfo'},o));if(i.text){var p=[i.text];if(!c('isSocialPlugin')())p=c('emojiAndEmote')(i.text);if(i.is_verified){p.push(c('BadgeHelper').renderBadge('xsmall','verified'));}else if(i.is_work_user){p.push(c('BadgeHelper').renderBadge('xsmall','work'));}else if(i.is_trending_hashtag)p.push(c('BadgeHelper').renderBadge('xsmall','trending'));k.push(c('DOM').create('span',{className:'text'},p));}var q=i.subtext,r=i.category;if(q||r){var s=[];q&&s.push(q);q&&r&&s.push(" \u00b7 ");r&&s.push(r);k.push(c('DOM').create('span',{className:'subtext'},s));}var t=c('DOM').create('li',{className:i.type||''},k);if(i.text){t.setAttribute('title',i.text);t.setAttribute('aria-label',i.text);}return t;}h.className='compact';f.exports=h;}),null);
__d('legacy:CompactTypeaheadRenderer',['CompactTypeaheadRenderer'],(function a(b,c,d,e,f,g){if(!b.TypeaheadRenderers)b.TypeaheadRenderers={};b.TypeaheadRenderers.compact=c('CompactTypeaheadRenderer');}),3);