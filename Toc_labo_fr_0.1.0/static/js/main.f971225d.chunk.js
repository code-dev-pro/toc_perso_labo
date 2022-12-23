(this.webpackJsonpcustomtoc_labo_fr=this.webpackJsonpcustomtoc_labo_fr||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"a":"0.1.0"}')},18:function(e,t,i){},21:function(e,t,i){},22:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),c=i(7),a=i.n(c),r=(i(18),i(2));function o(){this.top=window.top.window,this.initialized=!1,this.calledInit=!1,this.eventsListeners=[],this.evCallback=null}o.prototype.EVENTS_MAP={HANDSHAKE:"HANDSHAKE",REQUEST_USER_DATA:"REQUEST_USER_DATA",REQUEST_COLLECTIONS_DATA:"REQUEST_COLLECTIONS_DATA",REQUEST_COLLECTION_ID:"REQUEST_COLLECTION_ID",REQUEST_COLLECTION_DATA:"REQUEST_COLLECTION_DATA",REQUEST_COLLECTION_DATA_WITH_FLAGS:"REQUEST_COLLECTION_DATA_WITH_FLAGS",REQUEST_COLLECTION_EXTERNAL_RESOURCES:"REQUEST_COLLECTION_EXTERNAL_RESOURCES",REQUEST_COLLECTION_CUSTOM_TOC_FIRST_VISIT_DATE_DATA:"REQUEST_COLLECTION_CUSTOM_TOC_FIRST_VISIT_DATE_DATA",POST_COLLECTION_CUSTOM_TOC_FIRST_VISIT_DATE_DATA:"POST_COLLECTION_CUSTOM_TOC_FIRST_VISIT_DATE_DATA",REQUEST_COLLECTION_CUSTOM_TOC_AND_ANY_LESSON_LAST_VISITS_DATES_DATA:"REQUEST_COLLECTION_CUSTOM_TOC_AND_ANY_LESSON_LAST_VISITS_DATES_DATA",POST_COLLECTION_CUSTOM_TOC_LAST_VISIT_DATE_DATA:"POST_COLLECTION_CUSTOM_TOC_LAST_VISIT_DATE_DATA",REQUEST_COLLECTION_CUSTOM_TOC_STATE_DATA:"REQUEST_COLLECTION_CUSTOM_TOC_STATE_DATA",POST_COLLECTION_CUSTOM_TOC_STATE_DATA:"POST_COLLECTION_CUSTOM_TOC_STATE_DATA",REQUEST_COLLECTION_CODE_ACTION_AND_MARKET:"REQUEST_COLLECTION_CODE_ACTION_AND_MARKET",COLLECTIONS_DATA:"COLLECTIONS_DATA",COLLECTION_ID:"COLLECTION_ID",COLLECTION_DATA:"COLLECTION_DATA",COLLECTION_DATA_WITH_FLAGS:"COLLECTION_DATA_WITH_FLAGS",COLLECTION_EXTERNAL_RESOURCES:"COLLECTION_EXTERNAL_RESOURCES",COLLECTION_CUSTOM_TOC_FIRST_VISIT_DATE_DATA:"COLLECTION_CUSTOM_TOC_FIRST_VISIT_DATE_DATA",COLLECTION_CUSTOM_TOC_AND_ANY_LESSON_LAST_VISITS_DATES_DATA:"COLLECTION_CUSTOM_TOC_AND_ANY_LESSON_LAST_VISITS_DATES_DATA",COLLECTION_CUSTOM_TOC_STATE_DATA:"COLLECTION_CUSTOM_TOC_STATE_DATA",COLLECTION_CODE_ACTION_AND_MARKET:"COLLECTION_CODE_ACTION_AND_MARKET",COLLECTION_LESSONS_PAGINATED_RESULTS_DATA:"COLLECTION_LESSONS_PAGINATED_RESULTS_DATA",REQUEST_CROSS_RESOURCE:"REQUEST_CROSS_RESOURCE",REQUEST_LESSON:"REQUEST_LESSON",REQUEST_COLLECTION_DATA_BY_URL:"REQUEST_COLLECTION_DATA_BY_URL",REQUEST_COLLECTION_LESSONS_PAGINATED_RESULTS_DATA:"REQUEST_COLLECTION_LESSONS_PAGINATED_RESULTS_DATA",COLLECTION_DATA_BY_URL:"COLLECTION_DATA_BY_URL",REQUEST_FIRESTORE_CUSTOM_TOKEN:"REQUEST_FIRESTORE_CUSTOM_TOKEN",FIRESTORE_CUSTOM_TOKEN:"FIRESTORE_CUSTOM_TOKEN",REQUEST_LOGIN_VIEW:"REQUEST_LOGIN_VIEW"},o.prototype.init=function(){if(this.calledInit)throw new Error("This communication was initialized!");this.calledInit=!0,this._runMessagesListener();var e=new Promise(function(e,t){this._connectIntoEvent(this.EVENTS_MAP.HANDSHAKE).then(function(t){this.initialized=!0,e(t.isAuthenticated)}.bind(this))}.bind(this));return this._sendEvent(this.EVENTS_MAP.HANDSHAKE,{}),e},o.prototype.destroy=function(){this.initialized&&(window.removeEventListener("message",this.evCallback),this.initialized=!1,this.eventsListeners.forEach((function(e){e.promise.reject(new Error("Destroyed communication"))})),this.eventsListeners=[],this.evCallback=null)},o.prototype.updateIFrameHeight=function(e){if(!this.initialized)throw new Error("This communication is not initialized!");this.top.postMessage("mCurriculum_RESIZE:0:"+e,"*")},o.prototype.requestCollectionsData=function(){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.REQUEST_COLLECTIONS_DATA,{}),this._connectIntoEvent(this.EVENTS_MAP.COLLECTIONS_DATA)},o.prototype.requestCollectionId=function(){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.REQUEST_COLLECTION_ID,{}),this._connectIntoEvent(this.EVENTS_MAP.COLLECTION_ID)},o.prototype.requestCollectionData=function(e){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.REQUEST_COLLECTION_DATA,{id:e}),this._connectIntoEvent(this.EVENTS_MAP.COLLECTION_DATA,(function(t){var i=t.data;return!!i&&i.id===e}))},o.prototype.requestCollectionDataWithFlags=function(e){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.REQUEST_COLLECTION_DATA_WITH_FLAGS,{id:e}),this._connectIntoEvent(this.EVENTS_MAP.COLLECTION_DATA_WITH_FLAGS,(function(t){var i=t.data;return!!i&&i.id===e}))},o.prototype.requestCollectionExternalResources=function(){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.REQUEST_COLLECTION_EXTERNAL_RESOURCES,{}),this._connectIntoEvent(this.EVENTS_MAP.COLLECTION_EXTERNAL_RESOURCES)},o.prototype.requestCollectionLessonsPaginatedResults=function(e){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.REQUEST_COLLECTION_LESSONS_PAGINATED_RESULTS_DATA,{id:e}),this._connectIntoEvent(this.EVENTS_MAP.COLLECTION_LESSONS_PAGINATED_RESULTS_DATA,(function(t){var i=t.data;return!!i&&i.id===e}))},o.prototype.requestCollectionDataByURL=function(e,t){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.REQUEST_COLLECTION_DATA_BY_URL,{publisherURL:e,collectionURL:t}),this._connectIntoEvent(this.EVENTS_MAP.COLLECTION_DATA_BY_URL,(function(i){var s=i.data;return!!s&&(s.collectionURL===t&&e===e)}))},o.prototype.requestCollectionCustomTOCFirstVisitDate=function(e){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.REQUEST_COLLECTION_CUSTOM_TOC_FIRST_VISIT_DATE_DATA,{id:e}),this._connectIntoEvent(this.EVENTS_MAP.COLLECTION_CUSTOM_TOC_FIRST_VISIT_DATE_DATA,(function(t){var i=t.data;return!!i&&i.id===e}))},o.prototype.postCollectionCustomTOCFirstVisitDate=function(e){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.POST_COLLECTION_CUSTOM_TOC_FIRST_VISIT_DATE_DATA,{id:e}),this._connectIntoEvent(this.EVENTS_MAP.COLLECTION_CUSTOM_TOC_FIRST_VISIT_DATE_DATA,(function(t){var i=t.data;return!!i&&i.id===e}))},o.prototype.requestCollectionCustomTOCAndAnyLessonLastVisitsDates=function(e){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.REQUEST_COLLECTION_CUSTOM_TOC_AND_ANY_LESSON_LAST_VISITS_DATES_DATA,{id:e}),this._connectIntoEvent(this.EVENTS_MAP.COLLECTION_CUSTOM_TOC_AND_ANY_LESSON_LAST_VISITS_DATES_DATA,(function(t){var i=t.data;return!!i&&i.id===e}))},o.prototype.postCollectionCustomTOCLastVisitDate=function(e){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.POST_COLLECTION_CUSTOM_TOC_LAST_VISIT_DATE_DATA,{id:e}),this._connectIntoEvent(this.EVENTS_MAP.COLLECTION_CUSTOM_TOC_AND_ANY_LESSON_LAST_VISITS_DATES_DATA,(function(t){var i=t.data;return!!i&&i.id===e}))},o.prototype.requestCollectionCustomTOCState=function(e,t){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.REQUEST_COLLECTION_CUSTOM_TOC_STATE_DATA,{id:e,state:t}),this._connectIntoEvent(this.EVENTS_MAP.COLLECTION_CUSTOM_TOC_STATE_DATA,(function(t){var i=t.data;return!!i&&i.id===e}))},o.prototype.postCollectionCustomTOCState=function(e,t){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.POST_COLLECTION_CUSTOM_TOC_STATE_DATA,{id:e,state:t}),this._connectIntoEvent(this.EVENTS_MAP.COLLECTION_CUSTOM_TOC_STATE_DATA,(function(t){var i=t.data;return!!i&&i.id===e}))},o.prototype.requestCollectionCodeActionAndMarket=function(e){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.REQUEST_COLLECTION_CODE_ACTION_AND_MARKET,{id:e}),this._connectIntoEvent(this.EVENTS_MAP.COLLECTION_CODE_ACTION_AND_MARKET,(function(t){var i=t.data;return!!i&&i.id===e}))},o.prototype.requestCrossResource=function(e,t,i,s,n){if(!this.initialized)throw new Error("This communication is not initialized!");this._sendEvent(this.EVENTS_MAP.REQUEST_CROSS_RESOURCE,{resourceId:e,lessonId:t,courseId:i,pageId:s,lessonType:n})},o.prototype.requestOpenLesson=function(e){if(!this.initialized)throw new Error("This communication is not initialized!");this._sendEvent(this.EVENTS_MAP.REQUEST_LESSON,{lessonId:e})},o.prototype.requestFirestoreToken=function(){if(!this.initialized)throw new Error("This communication is not initialized!");return this._sendEvent(this.EVENTS_MAP.REQUEST_FIRESTORE_CUSTOM_TOKEN),this._connectIntoEvent(this.EVENTS_MAP.FIRESTORE_CUSTOM_TOKEN)},o.prototype.requestLoginView=function(){if(!this.initialized)throw new Error("This communication is not initialized!");this._sendEvent(this.EVENTS_MAP.REQUEST_LOGIN_VIEW)},o.prototype._connectIntoEvent=function(e,t){var i,s,n=new Promise(function(e,t){i=e,s=t}.bind(this)),c={name:e,promise:{resolve:i,reject:s},matchEvent:t||function(){return!0}};return this.eventsListeners.push(c),n},o.prototype._sendEvent=function(e,t){var i={};Object.assign(i,t),i.type=e,this.top.postMessage(i,"*")},o.prototype._runMessagesListener=function(){var e=function(e){if(e.data&&e.data.type){var t=e.data.type,i=!1;this.eventsListeners=this.eventsListeners.filter((function(s){if(i)return!0;if(s.name!==t)return!0;try{if(!s.matchEvent(e.data))return!0}catch(n){return!0}i=!0;try{s.promise.resolve(e.data)}finally{return!1}}))}}.bind(this);window.addEventListener("message",e),this.evCallback=e};var l=new o,d=720,_=[{id:"key_01",name:"Natures",icon:"natures"},{id:"key_02",name:"Fonctions",icon:"fonctions"},{id:"key_03",name:"Conjugaison",icon:"conjugaison"},{id:"key_04",name:"Th\xe8me 1",icon:"accords"},{id:"key_05",name:"Th\xe8me 2",icon:"verbes"},{id:"key_06",name:"Th\xe8me 3",icon:"phrasecomplexe"},{id:"key_07",name:"Th\xe8me 4",icon:"relatives"},{id:"key_08",name:"Th\xe8me 5",icon:"subordonneescirconstancielles"},{id:"key_09",name:"Th\xe8me 6",icon:"interrogation"},{id:"key_10",name:"Th\xe8me 7",icon:"negation"}];function O(e){var t=Math.floor(e/864e5);e-=864e5*t;var i=Math.floor(e/36e5);return e-=36e5*i,{days:t,hours:i,minutes:Math.floor(e/6e4)}}var u=function(e){for(var t=null===e||void 0===e?void 0:e.chapters,i=null===e||void 0===e?void 0:e.lessons,s=[],n=t.length,c=0;c<n;c++){s=[];for(var a=0;a<i.length;a++)i[a].chapter===t[c].id&&s.push(i[a]),t[c].lessons=s}return t},j=function(e){for(var t=[],i=[],s=0;s<e.length;s++)null===e[s].parent&&(i.push(e[s]),t.push({level_1:[],level_2:[],level_3:[],level_4:[],level_5:[]}));for(var n=0;n<e.length;n++)null!==e[n].parent&&i.push(e[n]);var c=i,a=0;return c.forEach((function(e,i){if(null===e.parent){var s=e;t[a=i].level_1=s,c.forEach((function(e,i){if(s.id===e.parent){var n=e;t[a].level_2[i]=e,c.forEach((function(e,i){if(n.id===e.parent){var s=e;t[a].level_3[i]=e,c.forEach((function(e,i){s.id===e.parent&&(t[a].level_4[i]=e)}))}}))}}))}t[a].level_2=t[a].level_2.filter((function(e){return e})),t[a].level_3=t[a].level_3.filter((function(e){return e})),t[a].level_4=t[a].level_4.filter((function(e){return e}))})),t},h=function(e){var t=0;e.lessons.forEach((function(e){e.time>0&&(t+=1)}));var i=e.lessons.length;return Math.round(Math.round(t/i*100))},E=function(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}},T=i(0),m=function(e){var t=e.progress;return Object(T.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-1 -1 48 48",children:[Object(T.jsx)("circle",{cx:"24",cy:"24",r:"15.9155",className:"rating-progress-background"}),Object(T.jsx)("circle",{cx:"24",cy:"24",r:"15.9155",className:"rating-progress js-rating-progress under-50",style:{strokeDashoffset:t||0}})]})},v=function(e){var t=e.part,i=e.section,s=e.level;return Object(T.jsxs)(T.Fragment,{children:["primaire"===s?Object(T.jsx)("span",{className:"toc--sidebar-zone-title__icon--left",children:Object(T.jsx)("img",{width:30,height:35,alt:"",src:"./assets/images/primaire/".concat("badge"===t?"star":"ressources"===t?"plane":"fusee_purple",".svg")})}):Object(T.jsx)(T.Fragment,{}),Object(T.jsx)("p",{className:"toc--sidebar-zone-title",children:i}),"primaire"===s?Object(T.jsx)("span",{className:"toc--sidebar-zone-title__icon--right",children:Object(T.jsx)("img",{width:30,height:35,alt:"",src:"./assets/images/primaire/".concat("badge"===t?"star":"fusee_purple",".svg")})}):Object(T.jsx)(T.Fragment,{})]})},b=function(e){var t=e.val;return Object(T.jsx)("div",{className:"toc--sidebar-progression",children:Object(T.jsx)("div",{className:"toc--sidebar-content-progression",children:Object(T.jsx)("div",{style:{width:t+"%"},className:"toc--sidebar-content-progression-val"})})})},p=function(e){var t=e.datas,i=e.level,s=e.isAdaptive,n=function(e){var t=0;return e.lessons.forEach((function(e){t+=Number(e.time)})),O(t)}(t),c=function(e){var t=0;if(s){var i=j(u(e)),n=0;return i.forEach((function(e){e.level_2.forEach((function(e){e.lessons.length&&(n+=1,t+=h(e))})),e.level_3.forEach((function(e){e.lessons.length&&(n+=1,t+=h(e))})),e.level_4.forEach((function(e){e.lessons.length&&(n+=1,t+=h(e))}))})),Math.round(t/n)}return e.lessons.forEach((function(e){e.time>0&&(t+=1)})),Math.round(t/e.lessons.length*100)}(t);!function(e){var t=0;e.lessons.forEach((function(e){t+=e.score})),Math.round(t/e.lessons.length)}(t);return Object(T.jsxs)("div",{className:"toc--sidebar-zone",children:[Object(T.jsx)("div",{className:"toc--sidebar-content-title",children:Object(T.jsx)("img",{height:40,alt:"",src:"./assets/images/resultat.svg"})}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{className:"toc--sidebar-content-score",children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{width:200,alt:"",src:"./assets/images/great.svg"})}),Object(T.jsx)("div",{className:"toc--sidebar-content-score-result",children:"primaire"===i&&Object(T.jsxs)("div",{className:" ".concat("primaire"===i?"primaire_score":""),children:[Object(T.jsx)("div",{children:"Ma progression :"}),Object(T.jsxs)("div",{className:"score",children:["".concat(Math.round(c)),Object(T.jsx)("span",{style:{fontSize:11},children:"%"})]})]})}),"primaire"===i&&Object(T.jsxs)("div",{className:" ".concat("primaire"===i?"primaire_score":""),children:[Object(T.jsx)("div",{children:"Mon temps pass\xe9 sur le parcours :"}),Object(T.jsx)("div",{className:"score time"})]})]}),"primaire"!==i&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"toc--sidebar-container-progression__title",children:"Ma progression :"}),Object(T.jsxs)("div",{className:"toc--sidebar-container-progression__container",children:[Object(T.jsx)("div",{className:"toc--sidebar-container-progression",children:Object(T.jsx)(b,{val:c})}),Object(T.jsxs)("div",{children:[" ",c,"%"]})]})]}),"primaire"!==i&&Object(T.jsxs)("div",{className:"toc--sidebar-container-progression-totalTime",children:[Object(T.jsx)("span",{children:"Temps pass\xe9 sur le parcours :"}),Object(T.jsx)("span",{className:"toc--time total--time",children:n.days+"j "+n.hours+"h "+n.minutes+"m"})]})]})]})},C=function(e){var t=e.datas,i=e.level,s=function(e){var t=0;return e.lessons.forEach((function(e){t+=Number(e.time)})),O(t)}(t);return Object(T.jsxs)("div",{className:"toc--sidebar-zone",children:[Object(T.jsx)(v,{part:"time",level:i,section:"Temps pass\xe9 sur le parcours"}),Object(T.jsxs)("div",{className:"toc--sidebar-content-time",children:[Object(T.jsx)("img",{alt:"",src:"./assets/images/temps.svg"}),Object(T.jsx)("div",{className:"toc--sidebar-content-time-result",style:{backgroundImage:"url(./assets/images/fond2.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(T.jsx)("div",{children:s.days+"j "+s.hours+"h "+s.minutes+"m"})})]})]})},S=function(e){e.subject;var t=e.datas,i=e.level,s=(e.grade,e.isAdaptive,function(e,t){var i=0,s=j(u(t));return s[1].level_2.forEach((function(t){var n=[];s[1].level_3.forEach((function(s){s.parent===t.id&&(n.push(s.lessons),s.lessons.forEach((function(s){t.title.includes(e)&&s.name.includes("Palier 3")&&s.score>=75&&(i+=1)})))}))})),s[2].level_2.forEach((function(t){var n=[];s[2].level_3.forEach((function(s){s.parent===t.id&&(n.push(s.lessons),s.lessons.forEach((function(s){t.title.includes(e)&&s.name.includes("S\xe9rie 2")&&s.score>=75&&(i+=1)})))}))})),i});return Object(T.jsxs)("div",{className:"toc--sidebar-zone",children:[Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"toc--sidebar-content-title",children:Object(T.jsx)("img",{className:"toc--sidebar-zone--containerBadges--title title--1",height:40,alt:"",src:"./assets/images/reussite.svg"})}),Object(T.jsx)("div",{className:"toc--sidebar-zone--containerBadges_1",children:Object(T.jsx)("div",{className:"toc--sidebar-zone--containerBadges",children:"primaire"!==i?_.map((function(e,i){return Object(T.jsxs)("div",{className:"item",children:[Object(T.jsx)("img",{style:{opacity:1},width:100,height:"auto",alt:"",src:"./assets/images/".concat(null===e||void 0===e?void 0:e.icon,".svg")}),Object(T.jsx)("p",{className:"score",children:s(e.name,t)})]},"badge_500_".concat(i))})):Object(T.jsx)(T.Fragment,{})})})]}),Object(T.jsx)(T.Fragment,{})]})},A=function(e){e.subject;var t=e.level;return Object(T.jsxs)("div",{className:"toc--sidebar-zone",children:[Object(T.jsx)(v,{part:"ressources",level:t,section:"primaire"===t?"Ma bo\xeete \xe0 outils":"Ressources compl\xe9mentaires"}),"primaire"===t&&Object(T.jsx)("div",{children:Object(T.jsx)("img",{style:{opacity:1},width:78,height:102,alt:"",src:"./assets/images/primaire/malle.svg"})}),"primaire"===t?Object(T.jsx)("div",{className:"toc--sidebar-zone--containerRessources--buttons",children:Object(T.jsxs)("div",{className:"toc--sidebar-zone--containerRessources--button",children:[Object(T.jsx)("img",{width:"24",height:"24",src:"./assets/images/primaire/podcast.svg",alt:""}),Object(T.jsx)("span",{children:"PODCASTS"})]})}):Object(T.jsx)("div",{onClick:function(){window.open("https://capeezy.directplateforme.com/courses/5386402111946752/next/~courses~list","_top")},className:"toc--sidebar-content-ressource",children:Object(T.jsxs)("div",{className:"toc--sidebar-content-ressource-item",children:[Object(T.jsx)("img",{alt:"",src:"./assets/images/podcast.svg"}),Object(T.jsx)("p",{children:"Podcasts"})]})})]})},f=function(e){var t=e.datas,i=e.width,n=(e.setVisible,e.subject),c=e.level,a=e.grade,o=e.isAdaptive,l=Object(s.useState)(0),_=Object(r.a)(l,2),O=_[0],u=_[1];return Object(T.jsxs)(T.Fragment,{children:[i<d?Object(T.jsx)("div",{className:"toc--mobile__menu__wrapper",children:Object(T.jsxs)("ul",{className:"toc--mobile__menu",children:[Object(T.jsx)("li",{onClick:function(){u(1)},children:Object(T.jsx)("div",{className:"toc--mobile__menu__item ".concat(1===O?"isActive":""),children:Object(T.jsx)("img",{height:40,alt:"",src:"./assets/images/menu/menu_resultat.svg"})})}),Object(T.jsx)("li",{onClick:function(){u(2)},children:Object(T.jsx)("div",{className:"toc--mobile__menu__item ".concat(2===O?"isActive":""),children:Object(T.jsx)("img",{alt:"",src:"./assets/images/menu/menu_badge.svg"})})}),"primaire"===c||"college"===c&&"3"!==a?Object(T.jsx)(T.Fragment,{}):Object(T.jsx)("li",{onClick:function(){u(3)},children:Object(T.jsx)("div",{className:"toc--mobile__menu__item ".concat(3===O?"isActive":""),children:Object(T.jsx)("img",{alt:"",src:"./assets/images/menu/menu_badge2.svg"})})})]})}):Object(T.jsx)(T.Fragment,{}),Object(T.jsx)("div",{className:"toc--sidebar ".concat(1===O?"block_1":"block_2"),children:i<d?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{style:{display:1===O?"block":"none"},children:[Object(T.jsx)(p,{isAdaptive:o,datas:t,level:c}),"primaire"===c&&Object(T.jsx)(C,{datas:t,level:c})]}),Object(T.jsx)("div",{style:{display:2===O?"block":"none"},children:Object(T.jsx)(S,{grade:a,subject:n,datas:t,level:c,isAdaptive:o})})]}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(p,{isAdaptive:o,datas:t,level:c}),Object(T.jsx)(S,{grade:a,subject:n,datas:t,level:c,isAdaptive:o}),function(e){return"francais"===e||"svt"===e||"histoire"===e||"geographie"===e||"pc"===e||"techno"===e}(n)&&Object(T.jsx)(A,{subject:n,level:c})]})})]})},x=i(3),N=function(e){var t=e.lesson,i=e.isAdaptive;return Object(T.jsxs)("div",{className:"toc--layout-main--toc_title_chapters_type",children:[Object(T.jsx)("div",{className:"toc--layout-main--toc_title_chapter_notion",children:Object(T.jsx)("p",{style:{backgroundImage:"url(./assets/images/header.svg)"},className:"".concat("avant de commencer"===t.title.toLowerCase()?"toc--layout-main--toc_title_chapter_notion_title part big":"toc--layout-main--toc_title_chapter_notion_title part"),children:Object(T.jsx)("span",{children:t.title})})}),"ressources"===t.title.toLowerCase()||"prise en main de la plateforme"===t.title.toLowerCase()?Object(T.jsx)(T.Fragment,{}):Object(T.jsx)(L,{isAdaptive:i,lesson:t})]})},L=function(e){var t=e.lesson,i=e.isAdaptive,s=function(e){if(i)return h(e);var t=0;e.lessons.forEach((function(e){e.time>1&&((null===e||void 0===e?void 0:e.isUnlocked)||null===(null===e||void 0===e?void 0:e.isUnlocked))&&(t+=1)}));var s=e.lessons.length;return Math.round(t/s*100)}(t),n=function(e){var t=0,i=0;e.lessons.forEach((function(e){e.isUnlocked&&(i+=1,t+=e.score)}));var s=i;return Math.round(t/s)}(t);return t.lessons.length>0?Object(T.jsxs)("div",{className:"toc--layout-main_progress",children:[Object(T.jsxs)("div",{style:{position:"relative",marginTop:5},children:[Object(T.jsx)("p",{className:"toc--layout-main--toc_progress_notion",children:s+"%"}),Object(T.jsx)(m,{progress:100-s})]}),Object(T.jsx)("div",{style:{backgroundImage:"url(./assets/images/lab.svg)"},className:"toc--layout-main--indicator--score",children:"".concat(Math.round(n/5),"/20")})]}):Object(T.jsx)(T.Fragment,{})},g=function(e){var t,i=e.part,s=e.level,n=e.title,c=e.lgt,a=window.location!==window.parent.location?document.location.ancestorOrigins?document.location.ancestorOrigins[0]:document.referrer:document.location.href;return Object(T.jsx)("div",{className:"toc--layout-main--toc_title_chapters_type wheel",children:i.lessons.length>0?null===(t=i.lessons)||void 0===t?void 0:t.map((function(e){return Object(T.jsxs)("div",{onClick:function(){l.requestOpenLesson(e.id)},className:"toc--layout-main--toc_title_chapter_name ".concat((null===e||void 0===e?void 0:e.isUnlocked)||null===(null===e||void 0===e?void 0:e.isUnlocked)?"":"filterGray"),children:[Object(T.jsx)("img",{width:"primaire"===s?110:98,height:"primaire"===s?85:"auto",alt:"",src:a+e.icon}),Object(T.jsx)("p",{className:"toc--layout-main--toc_title_chapter_notion_title",children:e.name})]},e.id)})):"Je manipule pour mieux comprendre"===n?Object(T.jsx)("p",{style:{padding:20},children:"Tu dois commencer par J'observe et je comprends pour d\xe9bloquer le reste du parcours."}):"Je mets en \u0153uvre"===n&&0===c?Object(T.jsx)("p",{style:{padding:20},children:"Tu n'as pas fait toutes les le\xe7ons n\xe9cessaires pour d\xe9bloquer cette partie."}):Object(T.jsx)(T.Fragment,{})})},I=function(e){var t=e.datasChapters,i=e.level,c=e.isAdaptive,a=(e.id,Object(s.useRef)("-1")),o=Object(s.useState)([]),l=Object(r.a)(o,2),d=l[0],_=l[1],O=Object(s.useCallback)((function(e){if(d.includes(e)){var t,i=Object(x.a)(d);if(i.forEach((function(t,s){t===e&&i.splice(s,1)})),E())null===(t=localStorage)||void 0===t||t.setItem("state",i[i.length-1]);_(i)}else{var s,n=[].concat(Object(x.a)(d),[e]);if(E())null===(s=localStorage)||void 0===s||s.setItem("state",n[n.length-1]);_([].concat(Object(x.a)(d),[e]))}}),[d]);return Object(s.useEffect)((function(){if(0===d.length){var e=null;if(E()&&(e=localStorage.getItem("state")),e&&""!==e){var t=e;t.length?_([t]):_([])}}}),[]),Object(T.jsx)(T.Fragment,{children:j(t).map((function(e,t){var s,r=t;return Object(T.jsxs)("div",{className:"toc--bloc-toc-content",children:[Object(T.jsx)("p",{className:"toc--sidebar-zone-title",children:Object(T.jsx)("span",{children:e.level_1.title})}),e.level_2.length>0?null===(s=e.level_2)||void 0===s?void 0:s.map((function(t,s){var o,l=t.id;return d.includes("".concat(r,"_").concat(s))?Object(T.jsxs)(n.a.Fragment,{children:[Object(T.jsxs)("p",{onClick:function(){a.current="".concat(r,"_").concat(s),O("".concat(r,"_").concat(s))},className:"toc--layout-main--toc_title_chapter",children:[Object(T.jsx)("span",{children:t.title}),Object(T.jsx)("span",{className:"toc--layout-main--toc_container_arrow",children:Object(T.jsx)("img",{className:"arrow",alt:"",width:8,height:14,src:"./assets/images/icon/arrow.svg"})})]}),Object(T.jsxs)("div",{className:"borderLight ".concat(d.includes("".concat(r,"_").concat(s))?"open":""),children:[Object(T.jsx)("div",{className:"toc--layout-main--toc_title_chapters_type",children:Object(T.jsx)(L,{isAdaptive:c,lesson:t})}),Object(T.jsx)(g,{title:t.title,part:t,level:i,lgt:-1}),e.level_3.length>0?null===(o=e.level_3)||void 0===o?void 0:o.map((function(t){var s,a=t.id;return t.parent===l&&Object(T.jsx)("div",{className:"borderLight open",children:Object(T.jsxs)(n.a.Fragment,{children:[Object(T.jsx)(N,{isAdaptive:c,lesson:t}),Object(T.jsx)(g,{part:t,level:i,title:t.title,lgt:e.level_3.length}),e.level_4.length>0?null===(s=e.level_4)||void 0===s?void 0:s.map((function(e){return e.parent===a&&Object(T.jsxs)(n.a.Fragment,{children:[Object(T.jsx)(N,{lesson:e,isAdaptive:c}),Object(T.jsx)(g,{part:e,level:i,title:"title",lgt:-1})]},"CHAPTER_LEVEL_4_".concat(e.id))})):Object(T.jsx)(T.Fragment,{})]})},"CHAPTER_LEVEL_3_".concat(t.id))})):Object(T.jsx)(T.Fragment,{})]})]},"CHAPTER_LEVEL_2_".concat(l)):Object(T.jsxs)("p",{onClick:function(){a.current="".concat(r,"_").concat(s),O("".concat(r,"_").concat(s))},className:" ".concat((e.level_3.length,"toc--layout-main--toc_title_chapter")),children:[Object(T.jsx)("span",{children:t.title}),Object(T.jsx)("span",{className:"toc--layout-main--toc_container_arrow active",children:Object(T.jsx)("img",{className:"arrow",alt:"",width:8,height:14,src:"./assets/images/icon/arrow.svg"})})]},"CHAPTER_LEVEL_17530_".concat(l))})):Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"borderLight open",children:[Object(T.jsx)(N,{isAdaptive:c,lesson:e.level_1}),Object(T.jsx)(g,{part:e.level_1,level:i,title:"",lgt:-1})]})})]},"CHAPTER_LEVEL_1_".concat(t))}))})},y=function(e,t){return e.datasChapters===t.datasChapters&&e.level===t.level&&e.id===t.id&&e.isAdaptive===t.isAdaptive},R=n.a.memo(I,y),w=function(e){var t=e.datas,i=e.level,n=e.isAdaptive,c=e.id;return Object(s.useEffect)((function(){}),[t]),Object(T.jsx)("div",{className:"toc--bloc-toc",style:{display:"flex",flexDirection:"column",height:"100%"},children:Object(T.jsx)(R,{id:c,isAdaptive:n,level:i,datasChapters:u(t)})})},D=n.a.memo(w);var U=function(e){var t=Object(s.useState)(-1),i=Object(r.a)(t,2),n=i[0],c=i[1];return Object(s.useEffect)((function(){var t=e.getBoundingClientRect();(Math.abs(n-t.height)>20||n<t.height)&&c(t.height)}),[]),function(e,t){var i=Object(s.useRef)();Object(s.useEffect)((function(){i.current=e}),[e]),Object(s.useEffect)((function(){if(null!==t){var e=setInterval((function(){i&&"function"===typeof i.current&&i.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){var t=e.getBoundingClientRect();(Math.abs(n-t.height)>20||n<t.height)&&c(t.height)}),500),n},M=function(){var e=Object(s.useState)({width:0,height:0}),t=Object(r.a)(e,2),i=t[0],n=t[1];return Object(s.useEffect)((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),i},V=i(13),P=i(12),z=(i(21),function(e){var t=e.type;return Object(T.jsx)("div",{className:"skeleton",children:Object(T.jsx)("div",{className:t,children:" "})})}),F=function(){return Object(T.jsxs)("div",{style:{width:"auto",marginBottom:10,marginLeft:10,marginRight:10},className:"skeleton-wrapper",children:[Object(T.jsx)(z,{type:"thumbnail"}),Object(T.jsx)(z,{type:"text-md"}),Object(T.jsx)(z,{type:"text-sm"}),Object(T.jsx)("div",{className:"shimmer-wrapper",children:Object(T.jsx)("div",{className:"shimmer"})})]})},Q=function(e){var t=e.toc,i=e.width;return Object(T.jsxs)("div",{style:{display:"flex",width:"100%",height:1500,flexDirection:"".concat(i<d?"column-reverse":"row")},className:"App w1200",children:[Object(T.jsxs)("div",{className:"toc--layout-main loader",role:"main",style:{width:"".concat((i<d||t.level,"100%"))},children:[Object(T.jsxs)("div",{className:"toc--layout-main-header",children:[Object(T.jsx)("div",{className:"toc--layout-main-header__item"}),Object(T.jsx)("div",{className:"toc--layout-main-header__item"}),Object(T.jsx)("div",{className:"toc--layout-main-header__item"})]}),Object(T.jsxs)("div",{className:"toc--bloc-toc__loader",children:[Object(T.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},children:Object(T.jsx)(z,{type:"text-lg"})}),Object(T.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginLeft:20,marginRight:20},children:[Object(T.jsx)(z,{type:"text-xl"}),Object(T.jsx)(z,{type:"text-smm"})]}),Object(T.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},children:[Object(T.jsx)(F,{}),Object(T.jsx)(F,{}),Object(T.jsx)(F,{}),Object(T.jsx)(F,{}),Object(T.jsx)(F,{}),Object(T.jsx)(F,{})]}),Object(T.jsx)(z,{type:"text-lg"}),Object(T.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginLeft:20,marginRight:20},children:[Object(T.jsx)(z,{type:"text-xl"}),Object(T.jsx)(z,{type:"text-smm"})]}),Object(T.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},children:[Object(T.jsx)(F,{}),Object(T.jsx)(F,{}),Object(T.jsx)(F,{}),Object(T.jsx)(F,{}),Object(T.jsx)(F,{}),Object(T.jsx)(F,{})]}),Object(T.jsx)(z,{type:"text-lg"}),Object(T.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginLeft:20,marginRight:20},children:[Object(T.jsx)(z,{type:"text-xl"}),Object(T.jsx)(z,{type:"text-smm"})]}),Object(T.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},children:[Object(T.jsx)(F,{}),Object(T.jsx)(F,{}),Object(T.jsx)(F,{}),Object(T.jsx)(F,{})]})]})]}),Object(T.jsx)("div",{className:"toc--layout-sidebar loader",style:{width:"".concat(i<d?"100%":(t.level,"280px"))},children:Object(T.jsx)("div",{className:"toc--layout-sidebar-container",style:{backgroundColor:"#ffffff",maxWidth:"".concat(i<d?"100%":(t.level,"280px"))},children:Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{style:{position:"relative"},className:"toc--layout-sidebar-container__content",children:[Object(T.jsx)(z,{type:"text-lg"}),Object(T.jsxs)("div",{style:{position:"relative",top:30,left:30,width:"100%"},children:[Object(T.jsx)(z,{type:"text-md"}),Object(T.jsx)(z,{type:"text-sm"})]}),Object(T.jsx)("div",{className:"shimmer-wrapper",children:Object(T.jsx)("div",{className:"shimmer"})})]}),Object(T.jsxs)("div",{className:"toc--layout-sidebar-container__content",children:[Object(T.jsx)(z,{type:"text-lg"}),Object(T.jsxs)("div",{style:{position:"relative",top:30,left:30,width:"100%"},children:[Object(T.jsx)(z,{type:"text-md"}),Object(T.jsx)(z,{type:"text-sm"})]}),Object(T.jsx)("div",{className:"shimmer-wrapper",children:Object(T.jsx)("div",{className:"shimmer"})})]}),Object(T.jsxs)("div",{className:"toc--layout-sidebar-container__content",children:[Object(T.jsx)(z,{type:"text-lg"}),Object(T.jsxs)("div",{style:{position:"relative",top:30,left:30,width:"100%"},children:[Object(T.jsx)(z,{type:"text-md"}),Object(T.jsx)(z,{type:"text-sm"})]}),Object(T.jsx)("div",{className:"shimmer-wrapper",children:Object(T.jsx)("div",{className:"shimmer"})})]})]})})})]})};var k=function(){var e=U(document.documentElement),t=M().width,i=Object(s.useState)(!1),n=Object(r.a)(i,2),c=n[0],a=n[1],o=Object(s.useState)(!0),_=Object(r.a)(o,2),O=_[0],u=_[1],j=Object(s.useState)({level:"",grade:"",subject:""}),h=Object(r.a)(j,2),E=h[0],m=h[1],v=Object(s.useState)({type:"",data:{chapters:[],id:0,lessons:[],mAuthorId:0,userId:0,userName:"",isAdaptive:!1}}),b=Object(r.a)(v,2),p=b[0],C=b[1],S=window,A=S.level?S.level:"",x=S.subject?S.subject:"",N=S.grade?S.grade:"",L=Object(s.useState)(0),g=Object(r.a)(L,2),I=g[0],y=g[1];return Object(s.useEffect)((function(){document.body.classList.add(S.level),l.init().then((function(e){e&&l.requestCollectionId().then((function(e){var t,i;y(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.collectionId),l.requestCollectionDataWithFlags(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.collectionId).then((function(e){var t,i;C(e),console.log("communication",e),a(!0),null===(t=document)||void 0===t||null===(i=t.body)||void 0===i||i.classList.remove("loader"),u(!1)})).catch((function(e){console.error("ERROR",e)}))})).catch((function(e){console.error("ERROR",e)}))}))}),[]),Object(s.useEffect)((function(){c&&l.updateIFrameHeight(e)}),[e,c]),Object(s.useEffect)((function(){m({grade:N,subject:x,level:A})}),[]),O?Object(T.jsx)(Q,{toc:E,width:t}):Object(T.jsxs)(V.a,{children:[Object(T.jsxs)("div",{style:{fontSize:8,padding:5,opacity:.5,position:"fixed",bottom:0,right:0,color:"black"},children:["Version ",P.a]}),Object(T.jsxs)("div",{style:{display:"flex",height:"100%",width:"100%",flexDirection:"".concat(t<d?"column-reverse":"row")},className:"App w1200",children:[Object(T.jsx)("div",{className:"toc--layout-main",role:"main",style:{width:"".concat((t<d||E.level,"100%"))},children:Object(T.jsx)(D,{id:I,isAdaptive:p.data.isAdaptive,level:E.level,datas:p.data})}),Object(T.jsx)("div",{className:"toc--layout-sidebar",style:{width:"".concat(t<d?"100%":(E.level,"280px"))},children:Object(T.jsx)("div",{className:"toc--layout-sidebar-container",style:{maxWidth:"".concat(t<d?"100%":(E.level,"280px"))},children:Object(T.jsx)(f,{datas:p.data,setVisible:function(){},width:t,subject:E.subject,level:E.level,grade:E.grade,isAdaptive:p.data.isAdaptive})})})]})]})},H=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,23)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;i(e),s(e),n(e),c(e),a(e)}))};a.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(k,{})}),document.getElementById("root")),H()}},[[22,1,2]]]);