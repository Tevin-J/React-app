(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[3],{298:function(e,t,a){e.exports={profileInfo:"ProfileInfo_profileInfo__2bMjf",profileInfoBlock:"ProfileInfo_profileInfoBlock__HBBSN",contact:"ProfileInfo_contact__2j3Go"}},300:function(e,t,a){},301:function(e,t,a){e.exports={myPosts:"MyPosts_myPosts__3a84W"}},302:function(e,t,a){e.exports={post:"Post_post__3oQRI",avatar:"Post_avatar__145dF",postText:"Post_postText__28n2w",likeBlock:"Post_likeBlock__3aVTb"}},303:function(e,t,a){e.exports=a.p+"static/media/like.f2610513.svg"},304:function(e,t,a){"use strict";a.r(t);var n=a(33),l=a(34),o=a(36),r=a(35),c=a(37),s=a(0),i=a.n(s),u=(a(300),a(94)),m=a(298),p=a.n(m),f=a(38),d=a(105),E=a.n(d),b=function(e){var t=Object(s.useState)(!1),a=Object(u.a)(t,2),n=a[0],l=a[1],o=Object(s.useState)(e.status),r=Object(u.a)(o,2),c=r[0],m=r[1];Object(s.useEffect)((function(){m(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){l(!0)}},e.status||"- - - - -")),n&&i.a.createElement("div",null,i.a.createElement("input",{onBlur:function(){l(!1),e.updateStatus(c)},autoFocus:!0,value:c,onChange:function(e){m(e.currentTarget.value)}})))},v=a(40),h=a.n(v),P=a(22),g=a(127),O=Object(g.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",{className:p.a.profileInfoBlock},i.a.createElement("div",null,i.a.createElement("button",null,"\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),n&&i.a.createElement("div",{className:h.a.formSummaryError},n),i.a.createElement("div",null,i.a.createElement("b",null,"\u0418\u043c\u044f"))," ",Object(P.c)("\u041c\u043e\u0435 \u0438\u043c\u044f","fullName",P.a,[]),i.a.createElement("div",null,i.a.createElement("b",null,"\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b: "),Object(P.c)("","lookingForAJob",P.a,[],{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438: ")," ",Object(P.c)("\u041c\u043e\u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438","lookingForAJobDescription",P.b,[])),i.a.createElement("div",null,i.a.createElement("b",null,"\u041e\u0431\u043e \u043c\u043d\u0435: ")," ",Object(P.c)("\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0431\u043e \u043c\u043d\u0435","aboutMe",P.b,[])),i.a.createElement("div",null,i.a.createElement("b",null,"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: ")," ",Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{key:e,className:p.a.contact},i.a.createElement("b",null,e,": ")," ",Object(P.c)(e,"contacts."+e.toLocaleLowerCase(),P.a,[]))})))))})),k=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:p.a.contact},i.a.createElement("b",null,t),":",a)},j=function(e){var t=e.profile,a=e.isOwner,n=e.activateEditMode;return i.a.createElement("div",{className:p.a.profileInfoBlock},a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),i.a.createElement("div",null,i.a.createElement("b",null,t.fullName)),i.a.createElement("div",null,i.a.createElement("b",null,"\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b: ")," ",t.lookingForAJob?"\u0414\u0430":"\u041d\u0435\u0442"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438: ")," ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"\u041e\u0431\u043e \u043c\u043d\u0435 :")," ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b :")," ",Object.keys(t.contacts).map((function(e){return i.a.createElement(k,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},_=function(e){var t=e.profile,a=e.status,n=e.updateStatus,l=e.isOwner,o=e.savePhoto,r=e.saveProfile,c=Object(s.useState)(!1),m=Object(u.a)(c,2),d=m[0],v=m[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("div",{className:p.a.profileInfo},t.photos.large?i.a.createElement("img",{src:t.photos.large}):i.a.createElement("img",{src:E.a}),l&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),i.a.createElement(b,{status:a,updateStatus:n}),d?i.a.createElement(O,{profile:t,onSubmit:function(e){r(e).then((function(){return v(!1)}))},initialValues:t}):i.a.createElement(j,{profile:t,isOwner:l,activateEditMode:function(){return v(!0)}}))))},y=a(93),S=a(39),w=a(301),I=a.n(w),N=a(302),B=a.n(N),A=a(303),T=a.n(A),x=function(e){return i.a.createElement("div",{className:B.a.post},i.a.createElement("div",{className:B.a.avatar},i.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Kj6cPQDCYYnGSFWl729oSTFLzKA2WWQII5Mzj_eYAwB88T_E&s"})),i.a.createElement("div",{className:B.a.postText},e.message),i.a.createElement("div",{className:B.a.likeBlock},i.a.createElement("img",{src:T.a}),e.likesCount))},C=a(84),D=a(61),F=Object(D.a)(10),M=Object(g.a)({form:"newPostBody"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(C.a,{component:P.b,name:"newPostBody",placeholder:"What's new?",validate:[D.b,F]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),J=i.a.memo((function(e){var t=Object(S.a)(e.postData).reverse().map((function(e){return i.a.createElement(x,{key:e.id,message:e.message,likesCount:e.likesCount})}));return i.a.createElement("div",{className:I.a.myPosts},i.a.createElement("h3",null,"My posts"),i.a.createElement(M,{onSubmit:function(t){e.addPost(t.newPostBody)}}),t)})),U=a(9),W=Object(U.b)((function(e){return{postData:e.profilePage.postData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(y.a)(t))}}}))(J),z=function(e){return i.a.createElement("div",null,i.a.createElement(_,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),i.a.createElement(W,null))},Q=a(27),V=a(6),G=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){e.match.params.userId!==this.props.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(z,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),t}(i.a.Component);t.default=Object(V.d)(Object(U.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:y.d,getStatus:y.c,updateStatus:y.g,savePhoto:y.e,saveProfile:y.f}),Q.g)(G)}}]);
//# sourceMappingURL=3.7eb1ef6e.chunk.js.map