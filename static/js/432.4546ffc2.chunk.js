"use strict";(self.webpackChunkproject_savePets05=self.webpackChunkproject_savePets05||[]).push([[432],{9910:function(n,o,r){r.d(o,{Z:function(){return en}});var e,t,i,a,s,p,l,d,x,c,m,u,f,h,g,w,b=r(4942),Z=r(1413),v=r(9439),P=r(2791),j=r(5705),k=r(8007),y=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,16}$/,C=r(1087),z=r(168),F=r(5867),S=r(71),N=r(9126),B=r(8820),R=r(8156).Z.colors,q=R.simpleBlack,_=R.buttonsHoverBg,A=R.placeHolderColor,I=R.accentInputInvalidValue,H=R.cardBgColor,L=R.accentAddPetCard,M=R.accentHeaderButton,U=(0,F.F4)(e||(e=(0,z.Z)(["\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n"]))),V=F.ZP.div(t||(t=(0,z.Z)(["\n  position: relative;\n  z-index: 10;\n  padding: 40px 0;\n\n  @media (min-width: 479px) {\n    padding-top: 80px;\n    padding-bottom: 140px;\n  }\n"]))),D=(0,F.ZP)(B.kyg)(i||(i=(0,z.Z)(["\n  position: absolute;\n  left: 20px;\n  top: 40px;\n  width: 26px;\n  height: 26px;\n  color: ",";\n  animation: "," 1.5s infinite;\n\n  &:hover {\n    width: 40px;\n  }\n\n  @media (min-width: 1279px) {\n    display: none;\n  }\n"])),M,U),E=(0,F.ZP)(j.l0)(a||(a=(0,z.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  max-width: 280px;\n  margin: 0 auto;\n  padding: 40px 12px;\n  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  box-sizing: border-box;\n  background-color: ",";\n\n  @media (min-width: 479px) {\n    max-width: 610px;\n    padding: 60px 75px;\n    border-radius: 40px;\n  }\n"])),H),T=F.ZP.h1(s||(s=(0,z.Z)(["\n  color: ",";\n  text-align: center;\n  font-size: 24px;\n  font-weight: 500;\n  margin-bottom: 20px;\n\n  @media (min-width: 479px) {\n    font-size: 36px;\n    margin-bottom: 40px;\n  }\n"])),q),J=F.ZP.div(p||(p=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 40px;\n\n  @media (min-width: 479px) {\n    gap: 32px;\n    margin-bottom: 50px;\n  }\n"]))),O=F.ZP.div(l||(l=(0,z.Z)(["\n  position: relative;\n"]))),Q=(0,F.ZP)(j.gN)(d||(d=(0,z.Z)(["\n  font-family: 'Manrope', sans-serif;\n  font-size: 16px;\n  width: 250px;\n  padding: 12px 16px;\n  border-radius: 40px;\n  border: 1px solid ",";\n  color: ",";\n  cursor: pointer;\n  transform: scale(1);\n  transition: transform 0.5s ease;\n\n  @media (min-width: 479px) {\n    width: 430px;\n  }\n  &:focus {\n    outline: transparent;\n    border-color: ",";\n  }\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  &::placeholder {\n    color: ",";\n    line-height: 1.5;\n  }\n\n  ","\n"])),_,A,_,A,(function(n){return n.touched&&(0,F.iv)(x||(x=(0,z.Z)(["\n      &.error {\n        border: 1px solid ",";\n      }\n      &.success {\n        border: 1px solid ",";\n      }\n\n      &.initial {\n        border-color: 1px solid ",";\n      }\n    "])),I,L,_)})),W=(0,F.ZP)(S.bjh)(c||(c=(0,z.Z)(["\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  right: 16px;\n  top: 8px;\n  color: ",";\n  cursor: pointer;\n\n  transform: scale(1);\n  transition: transform 0.5s ease;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  ",".initial + & {\n    display: none;\n  }\n"])),I,Q),$=(0,F.ZP)(N.IQF)(m||(m=(0,z.Z)(["\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  right: 16px;\n  top: 8px;\n  color: ",";\n\n  ",".initial + & {\n    display: none;\n  }\n"])),L,Q),G=(0,F.ZP)(j.Bc)(u||(u=(0,z.Z)(["\n  color: ",";\n\n  margin-left: 16px;\n  font-size: 12px;\n  display: block;\n  margin-top: 5px;\n"])),I),K=(0,F.ZP)(B.I0d)(f||(f=(0,z.Z)(["\n  position: absolute;\n  right: 16px;\n  top: 8px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n\n  transform: scale(1);\n  transition: transform 0.5s ease;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  color: ",";\n  margin-right: ",";\n"])),(function(n){return n.showFields?"".concat(A):"".concat(_)}),(function(n){return n.touched&&!n.errors||n.touched&&n.errors?"30px":"0"})),X=F.ZP.button(h||(h=(0,z.Z)(["\n  font-family: 'Manrope', sans-serif;\n  max-width: 250px;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 10px 28px;\n  text-align: center;\n  border-radius: 40px;\n  background-color: ",";\n  border: transparent;\n  color: ",";\n  margin-bottom: 8px;\n  cursor: pointer;\n  transition: all 0.5s ease;\n\n  @media (min-width: 479px) {\n    max-width: 460px;\n    margin-bottom: 16px;\n  }\n\n  &:hover {\n    background-color: ",";\n    box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.2);\n  }\n"])),_,H,M),Y=F.ZP.p(g||(g=(0,z.Z)(["\n  font-size: 12px;\n  text-align: center;\n  color: ",";\n"])),A),nn=(0,F.ZP)(C.rU)(w||(w=(0,z.Z)(["\n  color: ",";\n  text-decoration: underline;\n"])),_),on=r(184),rn=function(n,o){n(o,"")};var en=function(n){var o=n.formType,r=n.onSubmit,e=n.showNameField,t=n.showConfirmPassword,i=(0,P.useState)({password:!1,confirmPassword:!1}),a=(0,v.Z)(i,2),s=a[0],p=a[1],l=function(n){p((function(o){return(0,Z.Z)((0,Z.Z)({},o),{},(0,b.Z)({},n,!o[n]))}))},d="register"===o,x=function(n){return k.Ry().shape({name:n?k.Z_().min(2,"Name must be at least 2 characters").max(16,"Name must be at most 16 characters").trim().required("Required").matches(/^[A-Z].*/,"Name must start with an uppercase letter"):k.Z_().trim(),email:k.Z_().email("Invalid email address").required("Required"),password:k.Z_().test("password","Password must contain minimum 6 characters, maximum 16, at least 1 uppercase letter, 1 lowercase letter and 1 digit with no symbols.",(function(n){return y.test(n)})).required("Required"),confirmPassword:n?k.Z_().oneOf([k.iH("password"),null],"Password must match").required("Required"):k.Z_()})}(d);return(0,on.jsx)(V,{children:(0,on.jsx)(j.J9,{initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:x,onSubmit:function(n){r({name:n.name.trim(),email:n.email.trim(),password:n.password.trim()})},children:function(n){var o,r,i,a,p,x,c=n.values,m=n.handleChange,u=n.handleBlur,f=n.handleSubmit,h=n.touched,g=n.errors,w=n.setFieldValue;return(0,on.jsxs)(E,{onSubmit:f,autoComplete:"off",children:[(0,on.jsx)(C.rU,{to:"/",children:(0,on.jsx)(D,{})}),(0,on.jsx)(T,{children:d?"Registration":"Login"}),(0,on.jsxs)(J,{children:[e&&d&&(0,on.jsx)(on.Fragment,{children:(0,on.jsxs)(O,{children:[(0,on.jsx)(Q,{className:"input ".concat(h.name?g.name?"error":"success":"initial"),touched:null===(o=h.name)||void 0===o?void 0:o.toString(),type:"name",name:"name",onChange:m,onBlur:u,value:c.name,placeholder:"Name"}),h.name&&g.name?(0,on.jsx)(W,{onClick:function(){return rn(w,"name")}}):(0,on.jsx)($,{}),(0,on.jsx)(G,{component:"label",name:"name"})]})}),(0,on.jsxs)(O,{children:[(0,on.jsx)(Q,{className:"input ".concat(h.email?g.email?"error":"success":"initial"),touched:null===(r=h.email)||void 0===r?void 0:r.toString(),type:"email",name:"email",onChange:m,onBlur:u,value:c.email,placeholder:"Email"}),h.email&&g.email?(0,on.jsx)(W,{onClick:function(){return rn(w,"email")}}):(0,on.jsx)($,{}),(0,on.jsx)(G,{component:"label",name:"email"})]}),(0,on.jsxs)(O,{children:[(0,on.jsx)(Q,{className:"input ".concat(h.password?g.password?"error":"success":"initial"),touched:null===(i=h.password)||void 0===i?void 0:i.toString(),type:s.password?"text":"password",name:"password",onChange:m,onBlur:u,value:c.password,placeholder:"Password"}),(0,on.jsx)(K,{showFields:s.password,touched:null===(a=h.password)||void 0===a?void 0:a.toString(),errors:g.password,onClick:function(){return l("password")}}),h.password&&!g.password&&(0,on.jsx)($,{}),h.password&&g.password&&(0,on.jsx)(W,{onClick:function(){return rn(w,"password")}}),(0,on.jsx)(G,{component:"label",name:"password"})]}),t&&d&&(0,on.jsx)(on.Fragment,{children:(0,on.jsxs)(O,{children:[(0,on.jsx)(Q,{className:"input ".concat(h.confirmPassword?g.confirmPassword?"error":"success":"initial"),touched:null===(p=h.confirmPassword)||void 0===p?void 0:p.toString(),type:s.confirmPassword?"text":"password",name:"confirmPassword",onChange:m,onBlur:u,value:c.confirmPassword,placeholder:"Confirm password"}),(0,on.jsx)(K,{showFields:s.confirmPassword,touched:null===(x=h.confirmPassword)||void 0===x?void 0:x.toString(),errors:g.confirmPassword,onClick:function(){return l("confirmPassword")}}),h.confirmPassword&&!g.confirmPassword&&(0,on.jsx)($,{}),h.confirmPassword&&g.confirmPassword&&(0,on.jsx)(W,{onClick:function(){return rn(w,"confirmPassword")}}),(0,on.jsx)(G,{component:"label",name:"confirmPassword"})]})})]}),(0,on.jsx)(X,{type:"submit",children:d?"Registration":"Login"}),(0,on.jsxs)(Y,{children:[d?"Already have an account? ":"Don't have an account yet? ",(0,on.jsx)(nn,{to:d?"/login":"/register",children:d?"Login":"Register"})]})]})}})})}},2577:function(n,o,r){var e,t,i=r(168),a=r(5867),s=r(8156),p=r(88),l=r(889),d=r(2857),x=r(6331),c=r(7882),m=r(4262),u=r(9184),f=r(2156),h=r(2464),g=r(2653),w=r(2549),b=r(4180),Z=r(2720),v=r(1881),P=r(1462),j=r(181),k=r(4428),y=r(1895),C=r(8136),z=r(4852),F=r(581),S=r(5243),N=r(710),B={RelativeContainer:a.zo.div(e||(e=(0,i.Z)(["\n  position: relative;\n  /* margin: 0 auto; */\n  /* max-width: 320px; */\n  /* height: 601px; */\n\n  "," {\n    /* max-width: 768px; */\n    /* height: 1193px; */\n  }\n  "," {\n    /* max-width: 1280px; */\n    /* height: 770px; */\n  }\n"])),s.Z.breakPoints.tablet,s.Z.breakPoints.desktop),PawContainer:a.zo.div(t||(t=(0,i.Z)(["\n  /* position: absolute; */\n  /* width: 100%; */\n  margin-left: -20px;\n  margin-right: -20px;\n  /* opacity: 0.1; */\n  background-image: url(","), url(","),\n    url(","), url(","), url(","),\n    url(","), url(","), url(",");\n  background-size: 79px, 79px, 79px, 29px, 29px, 28px, 28px, 28px, cover;\n  background-repeat: no-repeat;\n  background-position: top 338px left 98px, top 519px left 289px,\n    top 314px left 326px, top 89px left 332px, top 143px left 12px,\n    top 378px left 12px, top 208px left 213px, top 508px left 60px, center;\n\n  "," {\n    margin-left: -32px;\n    margin-right: -32px;\n    background-image: url(","), url(","),\n      url(","), url(","), url(","),\n      url(","), url(","), url(",");\n    background-size: 157px, 157px, 157px, 58px, 58px, 56px, 56px, 56px, cover;\n    background-repeat: no-repeat;\n    background-position: top 671px left 235px, top 1032px left 613px,\n      top 624px left 688px, top 178px left 699px, top 285px left 64px,\n      top 750px left 64px, top 413px left 464px, top 1009px left 160px, left;\n  }\n  "," {\n    margin-left: -16px;\n    margin-right: -16px;\n    background-image: url(","), url(","),\n      url(","), url(","),\n      url(","), url(","),\n      url(",");\n    background-position: top 671px left 235px, top 515px left 1268px,\n      top 114px left 1213px, top 178px left 699px, top 285px left 64px,\n      top 750px left 64px, top 413px left 464px, center;\n  }\n"])),p,x,u,g,Z,j,C,S,s.Z.breakPoints.tablet,l,c,f,w,v,k,z,N,s.Z.breakPoints.desktop,d,m,h,b,P,y,F)};o.Z=B},8432:function(n,o,r){r.r(o);var e=r(9910),t=r(9434),i=r(2218),a=r(5218),s=r(2791),p=r(4289),l=r(2577),d=r(184);o.default=function(){var n=(0,t.I0)(),o=(0,t.v9)(p.zh);return(0,s.useEffect)((function(){o&&a.ZP.error("User with the same email already exists",{duration:2e3,position:"top-center",style:{backgroundColor:"#54ADFF",borderRadius:"20px",color:"#fef9f9",fontFamily:"Manrope, sans-serif",fontWeight:"700"}})}),[o]),(0,d.jsx)(l.Z.PawContainer,{children:(0,d.jsx)(e.Z,{onSubmit:function(o){n((0,i.z2)(o))},formType:"register",showNameField:!0,showConfirmPassword:!0})})}}}]);
//# sourceMappingURL=432.4546ffc2.chunk.js.map