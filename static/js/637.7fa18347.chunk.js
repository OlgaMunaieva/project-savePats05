"use strict";(self.webpackChunkproject_savePets05=self.webpackChunkproject_savePets05||[]).push([[637],{9910:function(n,o,r){r.d(o,{Z:function(){return en}});var e,i,a,s,t,d,l,c,p,m,u,x,h,f,w,g,b=r(4942),Z=r(1413),v=r(9439),P=r(2791),j=r(5705),C=r(8007),y=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,16}$/,k=r(1087),S=r(168),z=r(5867),B=r(71),F=r(9126),N=r(8820),q=r(8156).Z.colors,R=q.simpleBlack,_=q.buttonsHoverBg,I=q.placeHolderColor,A=q.accentInputInvalidValue,H=q.cardBgColor,L=q.accentAddPetCard,V=q.accentHeaderButton,M=(0,z.F4)(e||(e=(0,S.Z)(["\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n"]))),T=z.ZP.div(i||(i=(0,S.Z)(["\n  position: relative;\n  z-index: 10;\n  padding: 40px 0;\n\n  @media (min-width: 479px) {\n    padding-top: 80px;\n    padding-bottom: 140px;\n  }\n"]))),U=(0,z.ZP)(N.kyg)(a||(a=(0,S.Z)(["\n  position: absolute;\n  left: 20px;\n  top: 40px;\n  width: 26px;\n  height: 26px;\n  color: ",";\n  animation: "," 1.5s infinite;\n\n  &:hover {\n    width: 40px;\n  }\n\n  @media (min-width: 1279px) {\n    display: none;\n  }\n"])),V,M),D=(0,z.ZP)(j.l0)(s||(s=(0,S.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  max-width: 280px;\n  margin: 0 auto;\n  padding: 40px 12px;\n  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  box-sizing: border-box;\n  background-color: ",";\n\n  @media (min-width: 479px) {\n    max-width: 610px;\n    padding: 60px 75px;\n    border-radius: 40px;\n  }\n"])),H),E=z.ZP.h1(t||(t=(0,S.Z)(["\n  color: ",";\n  text-align: center;\n  font-size: 24px;\n  font-weight: 500;\n  margin-bottom: 20px;\n\n  @media (min-width: 479px) {\n    font-size: 36px;\n    margin-bottom: 40px;\n  }\n"])),R),J=z.ZP.div(d||(d=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 40px;\n\n  @media (min-width: 479px) {\n    gap: 32px;\n    margin-bottom: 50px;\n  }\n"]))),O=z.ZP.div(l||(l=(0,S.Z)(["\n  position: relative;\n"]))),Q=(0,z.ZP)(j.gN)(c||(c=(0,S.Z)(["\n  font-family: 'Manrope', sans-serif;\n  font-size: 16px;\n  width: 250px;\n  padding: 12px 16px;\n  border-radius: 40px;\n  border: 1px solid ",";\n  color: ",";\n  cursor: pointer;\n  transform: scale(1);\n  transition: transform 0.5s ease;\n\n  @media (min-width: 479px) {\n    width: 430px;\n  }\n  &:focus {\n    outline: transparent;\n    border-color: ",";\n  }\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  &::placeholder {\n    color: ",";\n    line-height: 1.5;\n  }\n\n  ","\n"])),_,I,_,I,(function(n){return n.touched&&(0,z.iv)(p||(p=(0,S.Z)(["\n      &.error {\n        border: 1px solid ",";\n      }\n      &.success {\n        border: 1px solid ",";\n      }\n\n      &.initial {\n        border-color: 1px solid ",";\n      }\n    "])),A,L,_)})),$=(0,z.ZP)(B.bjh)(m||(m=(0,S.Z)(["\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  right: 16px;\n  top: 8px;\n  color: ",";\n  cursor: pointer;\n\n  transform: scale(1);\n  transition: transform 0.5s ease;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  ",".initial + & {\n    display: none;\n  }\n"])),A,Q),G=(0,z.ZP)(F.IQF)(u||(u=(0,S.Z)(["\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  right: 16px;\n  top: 8px;\n  color: ",";\n\n  ",".initial + & {\n    display: none;\n  }\n"])),L,Q),K=(0,z.ZP)(j.Bc)(x||(x=(0,S.Z)(["\n  color: ",";\n\n  margin-left: 16px;\n  font-size: 12px;\n  display: block;\n  margin-top: 5px;\n"])),A),W=(0,z.ZP)(N.I0d)(h||(h=(0,S.Z)(["\n  position: absolute;\n  right: 16px;\n  top: 8px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n\n  transform: scale(1);\n  transition: transform 0.5s ease;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  color: ",";\n  margin-right: ",";\n"])),(function(n){return n.showFields?"".concat(I):"".concat(_)}),(function(n){return n.touched&&!n.errors||n.touched&&n.errors?"30px":"0"})),X=z.ZP.button(f||(f=(0,S.Z)(["\n  font-family: 'Manrope', sans-serif;\n  max-width: 250px;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 10px 28px;\n  text-align: center;\n  border-radius: 40px;\n  background-color: ",";\n  border: transparent;\n  color: ",";\n  margin-bottom: 8px;\n  cursor: pointer;\n  transition: all 0.5s ease;\n\n  @media (min-width: 479px) {\n    max-width: 460px;\n    margin-bottom: 16px;\n  }\n\n  &:hover {\n    background-color: ",";\n    box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.2);\n  }\n"])),_,H,V),Y=z.ZP.p(w||(w=(0,S.Z)(["\n  font-size: 12px;\n  text-align: center;\n  color: ",";\n"])),I),nn=(0,z.ZP)(k.rU)(g||(g=(0,S.Z)(["\n  color: ",";\n  text-decoration: underline;\n"])),_),on=r(184),rn=function(n,o){n(o,"")};var en=function(n){var o=n.formType,r=n.onSubmit,e=n.showNameField,i=n.showConfirmPassword,a=(0,P.useState)({password:!1,confirmPassword:!1}),s=(0,v.Z)(a,2),t=s[0],d=s[1],l=function(n){d((function(o){return(0,Z.Z)((0,Z.Z)({},o),{},(0,b.Z)({},n,!o[n]))}))},c="register"===o,p=function(n){return C.Ry().shape({name:n?C.Z_().min(2,"Name must be at least 2 characters").max(16,"Name must be at most 16 characters").trim().required("Required"):C.Z_().trim(),email:C.Z_().email("Invalid email address").required("Required"),password:C.Z_().test("password","Password must contain minimum 6 characters, maximum 16, at least 1 uppercase letter, 1 lowercase letter and 1 digit with no symbols.",(function(n){return y.test(n)})).required("Required"),confirmPassword:n?C.Z_().oneOf([C.iH("password"),null],"Password must match").required("Required"):C.Z_()})}(c);return(0,on.jsx)(T,{children:(0,on.jsx)(j.J9,{initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:p,onSubmit:function(n){r({name:n.name.trim(),email:n.email.trim(),password:n.password.trim()})},children:function(n){var o,r,a,s,d,p,m=n.values,u=n.handleChange,x=n.handleBlur,h=n.handleSubmit,f=n.touched,w=n.errors,g=n.setFieldValue;return(0,on.jsxs)(D,{onSubmit:h,autoComplete:"off",children:[(0,on.jsx)(k.rU,{to:"/",children:(0,on.jsx)(U,{})}),(0,on.jsx)(E,{children:c?"Registration":"Login"}),(0,on.jsxs)(J,{children:[e&&c&&(0,on.jsx)(on.Fragment,{children:(0,on.jsxs)(O,{children:[(0,on.jsx)(Q,{className:"input ".concat(f.name?w.name?"error":"success":"initial"),touched:null===(o=f.name)||void 0===o?void 0:o.toString(),type:"name",name:"name",onChange:u,onBlur:x,value:m.name,placeholder:"Name"}),f.name&&w.name?(0,on.jsx)($,{onClick:function(){return rn(g,"name")}}):(0,on.jsx)(G,{}),(0,on.jsx)(K,{component:"label",name:"name"})]})}),(0,on.jsxs)(O,{children:[(0,on.jsx)(Q,{className:"input ".concat(f.email?w.email?"error":"success":"initial"),touched:null===(r=f.email)||void 0===r?void 0:r.toString(),type:"email",name:"email",onChange:u,onBlur:x,value:m.email,placeholder:"Email"}),f.email&&w.email?(0,on.jsx)($,{onClick:function(){return rn(g,"email")}}):(0,on.jsx)(G,{}),(0,on.jsx)(K,{component:"label",name:"email"})]}),(0,on.jsxs)(O,{children:[(0,on.jsx)(Q,{className:"input ".concat(f.password?w.password?"error":"success":"initial"),touched:null===(a=f.password)||void 0===a?void 0:a.toString(),type:t.password?"text":"password",name:"password",onChange:u,onBlur:x,value:m.password,placeholder:"Password"}),(0,on.jsx)(W,{showFields:t.password,touched:null===(s=f.password)||void 0===s?void 0:s.toString(),errors:w.password,onClick:function(){return l("password")}}),f.password&&!w.password&&(0,on.jsx)(G,{}),f.password&&w.password&&(0,on.jsx)($,{onClick:function(){return rn(g,"password")}}),(0,on.jsx)(K,{component:"label",name:"password"})]}),i&&c&&(0,on.jsx)(on.Fragment,{children:(0,on.jsxs)(O,{children:[(0,on.jsx)(Q,{className:"input ".concat(f.confirmPassword?w.confirmPassword?"error":"success":"initial"),touched:null===(d=f.confirmPassword)||void 0===d?void 0:d.toString(),type:t.confirmPassword?"text":"password",name:"confirmPassword",onChange:u,onBlur:x,value:m.confirmPassword,placeholder:"Confirm password"}),(0,on.jsx)(W,{showFields:t.confirmPassword,touched:null===(p=f.confirmPassword)||void 0===p?void 0:p.toString(),errors:w.confirmPassword,onClick:function(){return l("confirmPassword")}}),f.confirmPassword&&!w.confirmPassword&&(0,on.jsx)(G,{}),f.confirmPassword&&w.confirmPassword&&(0,on.jsx)($,{onClick:function(){return rn(g,"confirmPassword")}}),(0,on.jsx)(K,{component:"label",name:"confirmPassword"})]})})]}),(0,on.jsx)(X,{type:"submit",children:c?"Registration":"Login"}),(0,on.jsxs)(Y,{children:[c?"Already have an account? ":"Don't have an account yet? ",(0,on.jsx)(nn,{to:c?"/login":"/register",children:c?"Login":"Register"})]})]})}})})}},3637:function(n,o,r){r.r(o);var e=r(9910),i=r(9920),a=r(9434),s=r(2218),t=r(184);o.default=function(){var n=(0,a.I0)();return(0,t.jsx)(i.Z.PawContainer,{children:(0,t.jsx)(e.Z,{onSubmit:function(o){var r=o.email,e=o.password;n((0,s.Ib)({email:r,password:e}))},formType:"login",showNameField:!1,showConfirmPassword:!1})})}}}]);
//# sourceMappingURL=637.7fa18347.chunk.js.map