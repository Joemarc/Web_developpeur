if (self.CavalryLogger) { CavalryLogger.start_js(["NS8PI"]); }

__d('TabBarItem.react',['cx','React','ReactDOM','Focus','Event','Keys','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$TabBarItem1=function(r,s){var t=this.props,u=t.className,v=t.href,w=t.ajaxify,x=t.tabIndex,y=t.rel,z=t.target,aa=t.selected,ba=t.wrapper,ca=t.mockSpacebarClick;v=v||'#';var da={};if(ca)da.onKeyDown=this.onKeyDown;var ea=c('React').createElement('a',{ref:'tab',ajaxify:w,href:v,role:'tab',rel:y,target:z,tabIndex:x,className:s,'aria-selected':aa},this.props.children);return c('React').createElement(ba,babelHelpers['extends']({},this.props,{tabIndex:null,className:c('joinClasses')(u,r),role:'presentation'}),c('React').cloneElement(ea,da));}.bind(this),this.$TabBarItem2=function(r){var s=this.props,t=s.className,u=s.href,v=s.selected,w=s.mockSpacebarClick;u=u||'#';var x={};if(w)x.onKeyDown=this.onKeyDown;var y=Object.assign({},this.props);delete y.menuAlignh;delete y.menuClassName;delete y.tabComponent;delete y.maxDropdownHeight;var z=c('React').createElement('a',babelHelpers['extends']({},y,{href:u,ref:'tab',role:'tab',className:c('joinClasses')(t,r),'aria-selected':v}),this.props.children);return c('React').cloneElement(z,x);}.bind(this),this.focus=function(){if(this.props.focused)c('Focus').set(this.refs.tab);}.bind(this),this.onKeyDown=function(event){var r=c('Event').getKeyCode(event);if(r===c('Keys').SPACE&&this.refs.tab){c('ReactDOM').findDOMNode(this.refs.tab).click();c('Event').prevent(event);}}.bind(this),n;}l.prototype.render=function(){'use strict';var m=this.props,n=m.selected,o=m.focused,p=m.hideFocusRing,q=m.shouldWrapTab,r="_45hc"+(n?' '+"_1hqh":''),s="_3m1v"+(o&&p?' '+"_468f":'');if(q)return this.$TabBarItem1(r,s);return this.$TabBarItem2(c('joinClasses')(r,s));};l.prototype.componentDidMount=function(){'use strict';this.focus();};l.prototype.componentDidUpdate=function(){'use strict';this.focus();};l.propTypes={wrapper:k.func.isRequired,shouldWrapTab:k.bool,tabIndex:k.oneOf([-1,0]),selected:k.bool,focused:k.bool,hideFocusRing:k.bool,mockSpacebarClick:k.bool};l.defaultProps={wrapper:function(){var m,n;m=babelHelpers.inherits(o,c('React').Component);n=m&&m.prototype;o.prototype.render=function(){'use strict';return c('React').createElement('li',this.props,this.props.children);};function o(){'use strict';m.apply(this,arguments);}return o;}(),shouldWrapTab:true,tabIndex:-1,selected:false,focused:false,hideFocusRing:false,mockSpacebarClick:true};f.exports=l;}),null);
__d('TabBarItemWrapper.react',['React'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.getComponent=function(k){return k.component;};j.prototype.render=function(){return this.props.component;};function j(){h.apply(this,arguments);}f.exports=j;}),null);
__d('TabBar.react',['cx','fbt','invariant','React','ReactDOM','TabBarItem.react','Event','RTLKeys','BootloadedComponent.react','JSResource','TabBarItemWrapper.react','joinClasses','setTimeout','clearTimeout','emptyFunction'],(function a(b,c,d,e,f,g,h,i,j){var k=c('React').PropTypes,l=i._("Plus"),m=c('React').createClass({displayName:'TabBar',_blurTimeout:null,propTypes:{activeTabKey:k.string,alwaysShowActive:k.bool,defaultActiveTabKey:k.string,dropdownMenuAlignh:k.string,dropdownMenuClassName:k.string,maxTabsVisible:k.number.isRequired,moreLabel:k.node,onTabClick:k.func.isRequired,dropdownTabComponent:k.func.isRequired,onWidthCalculated:k.func.isRequired,shouldCalculateVisibleTabs:k.bool,maxDropdownHeight:k.number},getDefaultProps:function n(){return {alwaysShowActive:true,dropdownTabComponent:c('TabBarItem.react'),maxTabsVisible:Infinity,moreLabel:l,onTabClick:c('emptyFunction').thatReturnsTrue,onWidthCalculated:c('emptyFunction'),shouldCalculateVisibleTabs:true};},getInitialState:function n(){return {activeTabKey:this.props.activeTabKey||this.props.defaultActiveTabKey,focusedTabKey:null,previousFocusedTabKey:null,visibleTabsCount:0,shouldCalculateVisibleTabs:true,hideFocusRing:true};},setWidth:function n(o){c('ReactDOM').findDOMNode(this).style.width=o;this.setState({shouldCalculateVisibleTabs:true});},render:function n(){var o=this.getTabs(),p=o.length,q=this.getActiveTabIndex(),r=o[q],s=this.getActiveTabIndex(true),t,u,v;if(r)t=r.key;var w=this.props.dropdownTabComponent,x=c('React').createElement(w,{key:'_dropdown',ref:'more',className:"_45hd _2pik"},c('React').createElement('span',{className:"_1b0"},this.props.moreLabel));if(this.state.shouldCalculateVisibleTabs){u=o.map(function(ha,ia){return this._wrapTab(ha,ia,t,null,s,false,false);}.bind(this));if(p>2)u.push(x);}else{var y=this._groupTabsByVisibility();u=y.visibleTabs;v=y.extraTabs;var z=this._isDropdownSelected(),aa=this.state.visibleTabsCount,ba=this.state.focusedTabKey;ba=ba&&this.getFocusedTabIndex()===-1?m.MORE_TAB_KEY:ba;u=u.map(function(ha,ia){return this._wrapTab(ha,ia,t,ba,s,true,true);}.bind(this));v=v.map(function(ha,ia){return this._wrapTab(ha,ia,t,null,s,true,false);}.bind(this));if(v.length){var ca;if(aa===0&&r)ca=r;var da=ca&&ca.props.children||this.props.moreLabel,ea='_dropdown',fa=c('React').createElement(c('BootloadedComponent.react'),{bootloadLoader:c('JSResource')('TabBarDropdownItem.react').__setRef('TabBar.react'),bootloadPlaceholder:x,menuAlignh:this.props.dropdownMenuAlignh,menuClassName:this.props.dropdownMenuClassName,selected:z,focused:ba===m.MORE_TAB_KEY,hideFocusRing:this.state.hideFocusRing,onMouseDown:this.onMouseDown,onFocus:this.onFocus.bind(this,ea),onBlur:this.onBlur,key:ea,ref:'more',label:da,tabComponent:this.props.dropdownTabComponent,maxDropdownHeight:this.props.maxDropdownHeight},v);if(aa===0){u=fa;}else u.push(fa);}}var ga=Object.assign({},this.props);delete ga.moreLabel;delete ga.maxTabsVisible;delete ga.onTabClick;delete ga.activeTabKey;delete ga.onWidthCalculated;delete ga.alwaysShowActive;delete ga.dropdownTabComponent;delete ga.shouldCalculateVisibleTabs;return c('React').createElement('ul',babelHelpers['extends']({},ga,{className:c('joinClasses')(this.props.className,"_43o4"),role:'tablist',onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp}),u);},componentDidMount:function n(){this.calculateVisibleTabs();this.calculateWidth();},componentWillUnmount:function n(){c('clearTimeout')(this._blurTimeout);},componentWillReceiveProps:function n(o){this.setState({shouldCalculateVisibleTabs:true,activeTabKey:o.activeTabKey||this.state.activeTabKey});},shouldComponentUpdate:function n(o,p){if(this.state.focusedTabKey&&!p.focusedTabKey)return false;if(!this.state.focusedTabKey&&!p.focusedTabKey&&this.state.previousFocusedTabKey&&!p.previousFocusedTabKey)return false;return true;},componentDidUpdate:function n(){if(this.state.shouldCalculateVisibleTabs)this.calculateVisibleTabs();this.calculateWidth();},calculateWidth:function n(){this.props.onWidthCalculated(c('ReactDOM').findDOMNode(this).clientWidth);},calculateVisibleTabs:function n(){var o=this.getTabs(),p=o.length,q=Math.min(p,this.props.maxTabsVisible);if(!this.props.shouldCalculateVisibleTabs){this.setState({visibleTabsCount:q,shouldCalculateVisibleTabs:false});return;}var r=[];for(var s=0;s<p;s++)r.push(c('ReactDOM').findDOMNode(this.refs[s]).offsetWidth);var t=this.getActiveTabIndex();if(this.props.alwaysShowActive&&t!==-1){o.unshift(o.splice(t,1)[0]);r.unshift(r.splice(t,1)[0]);}var u=c('ReactDOM').findDOMNode(this).offsetWidth;q=0;var v=0;for(s=0;s<p;s++){var w=r[s];if(v+w>u){if(q>0&&p>2){var x=c('ReactDOM').findDOMNode(this.refs.more).offsetWidth;while(q>0&&(v+x>u||p-q<2)){q--;v-=r[q];}}else q=0;break;}q++;v+=w;}this.setState({visibleTabsCount:Math.min(q,this.props.maxTabsVisible),shouldCalculateVisibleTabs:false});},getActiveTabIndex:function n(){var o=arguments.length<=0||arguments[0]===undefined?false:arguments[0],p=this.state.activeTabKey,q=[];if(o){var r=this._groupTabsByVisibility(),s=r.visibleTabs;q=s;}else q=this.getTabs();return q.findIndex(function(t){return p!=null&&t&&t.key===p;});},getFocusedTabIndex:function n(){var o=this.state.focusedTabKey||this.state.previousFocusedTabKey,p=this._groupTabsByVisibility(),q=p.visibleTabs;return q.findIndex(function(r){return o!=null&&r&&r.key===o;});},getFocusedTab:function n(){var o=this.state.focusedTabKey,p=this._groupTabsByVisibility(),q=p.visibleTabs,r=q.findIndex(function(s){return o!=null&&s&&s.key===o;});return q[r];},onClick:function n(o,event){var p=this.props.onTabClick(o,event);if(p!==false&&this.isMounted())this.activateTab(o);},onMouseDown:function n(){this.setState({hideFocusRing:true});},onKeyDown:function n(event){var o=c('Event').getKeyCode(event);switch(o){case c('RTLKeys').UP:case c('RTLKeys').getRight():case c('RTLKeys').DOWN:case c('RTLKeys').getLeft():var p,q,r,s=this._groupTabsByVisibility(),t=s.visibleTabs,u=o===c('RTLKeys').UP||o===c('RTLKeys').getLeft(),v=u?-1:1,w=u?0:t.length-1,x=this.getFocusedTabIndex();if(x===-1&&v===-1)x=t.length;if(x===-1){r=null;}else if(x===w&&v===1){r=m.MORE_TAB_KEY;}else{p=u?Math.max:Math.min;q=p(x+v,w);r=t[q].key;}if(r)this.setState({focusedTabKey:r,hideFocusRing:false});break;case c('RTLKeys').RETURN:var y=this.getFocusedTab();if(y){var z=y.key,aa=this.props.onTabClick(z,event);if(aa!==false&&this.isMounted())this.activateTab(z);}break;}},onKeyUp:function n(event){if(c('Event').getKeyCode(event)===c('RTLKeys').TAB&&this.state.hideFocusRing)this.setState({hideFocusRing:false});},onFocus:function n(o,event){c('clearTimeout')(this._blurTimeout);if(o!==this.state.focusedTabKey){this.setState({focusedTabKey:o,previousFocusedTabKey:null});event.preventDefault();event.stopPropagation();}},onBlur:function n(){this.setState({previousFocusedTabKey:this.state.focusedTabKey,focusedTabKey:null});this._blurTimeout=c('setTimeout')(function(){this.setState({previousFocusedTabKey:null});}.bind(this),m.BLUR_TIMEOUT);},_wrapTab:function n(o,p,q,r,s,t,u){o.key!==m.MORE_TAB_KEY||j(0);var v=q!=null&&q===o.key,w=r!=null&&r===o.key,x={selected:v,focused:w,tabIndex:v||s===-1&&p===0?0:-1,hideFocusRing:this.state.hideFocusRing};if(t){x.onClick=this.onClick.bind(this,o.key);x.onMouseDown=this.onMouseDown;}else x.mockSpacebarClick=false;if(u){x.onFocus=this.onFocus.bind(this,o.key);x.onBlur=this.onBlur;}o=c('React').cloneElement(o,x);return c('React').createElement(c('TabBarItemWrapper.react'),{key:o.key,component:o,ref:p});},activateTab:function n(o){if(o)this.setState({activeTabKey:o,focusedTabKey:o,shouldCalculateVisibleTabs:true});},getTabs:function n(){var o=[];c('React').Children.forEach(this.props.children,function(p){if(p)o.push(p);});return o;},_groupTabsByVisibility:function n(){var o=this.state.visibleTabsCount,p=this.getTabs(),q=this.getActiveTabIndex(),r,s,t;if(!this.props.alwaysShowActive||q<o||o===0){t=p.slice(o);s=p.slice(0,o);}else{r=p.splice(q,1)[0];var u=o>0?o-1:0;t=p.slice(u);s=p.slice(0,u);s.push(r);}return {visibleTabs:s,extraTabs:t};},_isDropdownSelected:function n(){var o=this.state.visibleTabsCount,p=this.getActiveTabIndex(),q=!this.props.alwaysShowActive&&p>=o||o===0&&p>-1;return q;}});m.MORE_TAB_KEY='_moreTab';m.BLUR_TIMEOUT=120;m.Tab=c('TabBarItem.react');f.exports=m;}),null);
__d('XUICardHeaderTitle.react',['cx','React','TabBarItem.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=this.props.itemComponent,n=null;if(this.props.count>0)n=c('React').createElement('span',{className:"_c1b"},this.props.count);var o=this.props.children,p=void 0;if(m===c('TabBarItem.react')&&!n){var q=typeof o==='string'?o:c('React').isValidElement(o)&&o.props.children&&o.props.children.textContent;if(q){o=c('React').createElement('div',{className:"_9hb"},o);p=c('React').createElement('div',{className:"_9hc",'aria-hidden':true},q);}}return c('React').createElement(m,babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_38my")}),o,p,n,c('React').createElement('span',{className:"_c1c"}));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={count:k.number,href:k.string,itemComponent:k.any};l.defaultProps={itemComponent:c('TabBarItem.react')};f.exports=l;}),null);
__d('XUIDialogHeaderTitle.react',['XUICardHeaderTitle.react'],(function a(b,c,d,e,f,g){f.exports=c('XUICardHeaderTitle.react');}),null);
__d('XUICardHeader.react',['cx','invariant','React','TabBar.react','XUICardHeaderTitle.react','XUICardSection.react','XUIDialogHeaderTitle.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.$XUICardHeader1=function(){'use strict';var n=0;c('React').Children.forEach(this.props.children,function(o){o.type===c('XUICardHeaderTitle.react')||o.type===c('XUIDialogHeaderTitle.react')||i(0);n++;});return n;};m.prototype.$XUICardHeader2=function(){'use strict';if(this.props.type==='primary')this.props.itemCount==null||i(0);if(this.props.itemCount!=null)return c('React').createElement('span',{className:"_5dw7"},this.props.itemCount);return null;};m.prototype.$XUICardHeader3=function(){'use strict';if(this.props.link)return c('React').createElement('span',{className:"_5dw8"},this.props.link);return null;};m.prototype.$XUICardHeader4=function(){'use strict';var n=this.$XUICardHeader1();if(n===1){return c('React').Children.map(this.props.children,function(o){return c('React').cloneElement(o,{itemComponent:'span'});});}else return c('React').createElement(c('TabBar.react'),{activeTabKey:this.props.activeTabKey,className:"_1ng1",defaultActiveTabKey:this.props.defaultActiveTabKey,onTabClick:this.props.onTabClick,shouldCalculateVisibleTabs:this.props.shouldCalculateVisibleTabs},this.props.children);};m.prototype.render=function(){'use strict';var n=(this.props.type==='primary'?"_5dw9":'')+(' '+"_5dwa")+(this.props.type==='secondary'?' '+"_5dwb":'')+(this.$XUICardHeader1()!==1?' '+"_3s3z":'');return c('React').createElement(c('XUICardSection.react'),{className:c('joinClasses')(this.props.className,n)},this.$XUICardHeader4(),this.$XUICardHeader2(),this.$XUICardHeader3(),c('React').createElement('div',{className:"_3s3-"}));};function m(){'use strict';j.apply(this,arguments);}m.propTypes={activeTabKey:l.string,defaultActiveTabKey:l.string,onTabClick:l.func,type:l.oneOf(['primary','secondary'])};m.defaultProps={onTabClick:function n(){return true;},type:'secondary'};f.exports=m;}),null);
__d('XUIPageNavigationItem.react',['cx','AsyncRequest','React','TabBarItem.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.onClick=function(r,event){if(this.props.ajaxify&&this.props.rel==='async')new (c('AsyncRequest'))(this.props.ajaxify).send();if(this.props.onClick)return this.props.onClick(r,event);return true;}.bind(this),n;}l.prototype.render=function(){'use strict';var m="_5vwz"+(this.props.selected?' '+"_5vwy":''),n=this.props;if(n.ajaxify&&n.rel==='async'){var o=n,p=o.ajaxify,q=o.rel,r=babelHelpers.objectWithoutProperties(o,['ajaxify','rel']);n=r;n.onClick=this.onClick;}var s=this.props.children,t=void 0,u=typeof s==='string'?s:c('React').isValidElement(s)&&s.props.children&&s.props.children.textContent;if(u){s=c('React').createElement('div',{className:"_4xjz"},s);t=c('React').createElement('div',{className:"_4xj-",'aria-hidden':true},u);}return c('React').createElement(c('TabBarItem.react'),babelHelpers['extends']({},n,{className:c('joinClasses')(this.props.className,m)}),c('React').createElement('div',{className:"_4jq5"},s,t),c('React').createElement('span',{className:"_13xf"}));};l.propTypes={selected:k.bool};l.defaultProps={selected:false};f.exports=l;}),null);
__d('XUIPageNavigationGroup.react',['React','TabBar.react','XUIPageNavigationItem.react'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.componentDidUpdate=function(){'use strict';this.refs.bar.setWidth(this.props.width);};k.prototype.componentDidMount=function(){'use strict';this.refs.bar.setWidth(this.props.width);};k.prototype.render=function(){'use strict';return c('React').createElement(c('TabBar.react'),babelHelpers['extends']({},this.props,{ref:'bar'}),this.props.children);};function k(){'use strict';h.apply(this,arguments);}k.propTypes={moreLabel:j.string,maxTabsVisible:function l(m,n,o){var p=m[n];if(p!=null&&!(typeof p==='number'&&p>=0))throw new Error('Invalid `'+n+'` supplied to `'+o+'`, '+'expected positive integer.');},width:j.string};k.defaultProps={maxTabsVisible:Infinity};k.Item=c('XUIPageNavigationItem.react');f.exports=k;}),null);
__d('XUIPageNavigation.react',['csx','cx','invariant','Arbiter','CSS','DOMQuery','Event','LeftRight.react','React','ReactDOM','SubscriptionsHandler','UITinyViewportAction','Vector','ViewportBounds','XUIPageNavigationGroup.react','joinClasses','throttle'],(function a(b,c,d,e,f,g,h,i,j){var k,l,m=c('React').PropTypes,n=15;k=babelHelpers.inherits(o,c('React').PureComponent);l=k&&k.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.state={activeTabKey:undefined,leftWidth:null},this.onTabClick=function(u,event){if(this.props.onTabClick){var v=this.props.onTabClick(u,event);if(!v)return v;}c('Arbiter').inform('pageNavigation/tabChanged');if(event.button===0)this.setState({activeTabKey:u});return true;}.bind(this),this.resizeNavbarGroups=function(){if(!this.refs.left)return;var u=c('ReactDOM').findDOMNode(this).clientWidth;if(isNaN(u)||u===0)return;if(!isNaN(this.$XUIPageNavigation7)&&this.refs.right){var v;v=u-this.$XUIPageNavigation7-n;if(this.$XUIPageNavigation7<v)v=this.$XUIPageNavigation7-n;this.setState({rightWidth:v+'px'});}if(!isNaN(this.$XUIPageNavigation6)){var w;w=u-this.$XUIPageNavigation6-n;if(w<this.$XUIPageNavigation6)w=this.$XUIPageNavigation6+n;this.setState({leftWidth:w+'px'});}else if(!this.refs.right)this.setState({leftWidth:u+'px'});}.bind(this),q;}o.prototype.componentDidMount=function(){'use strict';this.$XUIPageNavigation1=new (c('SubscriptionsHandler'))();this.resizeNavbarGroups();this.$XUIPageNavigation2();var p="^.fixed_elem._5vx1";this.wrapper=c('DOMQuery').scry(c('ReactDOM').findDOMNode(this),p)[0];if(this.wrapper){this.$XUIPageNavigation3();this.$XUIPageNavigation1.addSubscriptions(c('UITinyViewportAction').subscribe('change',function(){if(c('UITinyViewportAction').isTiny()){this.$XUIPageNavigation4.remove();}else this.$XUIPageNavigation3();}.bind(this)));}if(this.props.showDropShadowOnScroll&&(this.wrapper||c('DOMQuery').scry(c('ReactDOM').findDOMNode(this),"^._k").length)&&this.props.scrollThreshold!==null)this.$XUIPageNavigation5();};o.prototype.componentWillUnmount=function(){'use strict';this.$XUIPageNavigation1.release();};o.prototype.onWidthCalculated=function(p,q){'use strict';if(p){this.$XUIPageNavigation6=q;}else this.$XUIPageNavigation7=q;};o.prototype.render=function(){'use strict';var p="_5vx2 _5vx4",q=c('joinClasses')(p,this.props.className),r=[],s=this.props.activeTabKey||this.state.activeTabKey||this.props.defaultActiveTabKey;c('React').Children.forEach(this.props.children,function(t,u){if(t===null)return;var v={onTabClick:this.onTabClick,activeTabKey:s,onWidthCalculated:this.onWidthCalculated.bind(this,u),ref:u?'right':'left',key:u};if(u===0)v.width=this.state.leftWidth;r.push(c('React').cloneElement(t,v));}.bind(this));r.length===1||r.length===2||j(0);return c('React').createElement('div',{className:q},c('React').createElement(c('LeftRight.react'),{className:"_5vx7",direction:this.props.floatDirection},r));};o.prototype.$XUIPageNavigation3=function(){'use strict';var p=this.wrapper.offsetHeight,q=c('ViewportBounds').getTop();this.$XUIPageNavigation4=c('ViewportBounds').addTop(q+p);c('Arbiter').subscribe('page_transition',function(){this.$XUIPageNavigation4.remove();});};o.prototype.$XUIPageNavigation2=function(){'use strict';this.$XUIPageNavigation1.addSubscriptions(c('Event').listen(window,'resize',c('throttle')(this.resizeNavbarGroups,30)));};o.prototype.$XUIPageNavigation5=function(){'use strict';this.$XUIPageNavigation1.addSubscriptions(c('Event').listen(window,'scroll',function(){var p=c('Vector').getScrollPosition().y>this.props.scrollThreshold;if(this.$XUIPageNavigation8===p)return;this.$XUIPageNavigation8=p;c('CSS').conditionClass(c('ReactDOM').findDOMNode(this),"_51j8",p);}.bind(this)));};o.propTypes={onTabClick:m.func,showDropShadowOnScroll:m.bool,scrollThreshold:m.number,floatDirection:m.oneOf(['left','right','both'])};o.defaultProps={showDropShadowOnScroll:true,scrollThreshold:0,floatDirection:'both'};o.Group=c('XUIPageNavigationGroup.react');o.Item=c('XUIPageNavigationGroup.react').Item;f.exports=o;}),null);
__d('XUIPageNavigationShim',['DOMContainer.react','React','isNode'],(function a(b,c,d,e,f,g){var h,i,j=function(){var m=0;return function(){return 'XUIPageNavigationShim-'+m++;};}();function k(m){var n;if(m.children){n=m.children.map(function(p){if(typeof p==='object'&&typeof p.ctor==='function'){return k(p);}else if(c('isNode')(p)){return c('React').createElement(c('DOMContainer.react'),{key:j()},p);}else return p;});if(n.length===1)n=n[0];}var o=m.ctor;return c('React').createElement(o,babelHelpers['extends']({key:j()},m.props),n);}h=babelHelpers.inherits(l,c('React').Component);i=h&&h.prototype;l.prototype.render=function(){'use strict';return k(this.props);};function l(){'use strict';h.apply(this,arguments);}f.exports=l;}),null);