"use strict";(self.webpackChunkproject_savePets05=self.webpackChunkproject_savePets05||[]).push([[718],{2718:function(u,n,e){e.r(n),e.d(n,{default:function(){return kn}});var E,A=e(9439),D=e(168),t=e(5867),C=e(8156),i=C.Z.colors.placeHolderColor,o=C.Z.shadow.shadowHover,r=C.Z.transition.transitionShadow,a=t.default.button(E||(E=(0,D.Z)(["\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.38;\n  letter-spacing: 0.04em;\n  color: ",";\n\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n    border-radius: 40px;\n  }\n"])),i,r,o),F=e(7609),s=e(184);function l(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a,{children:[(0,s.jsx)("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("use",{href:F.Z+"#icon-logout"})}),(0,s.jsx)("p",{children:"Log Out"})]})})}var d,c,B,p,h,x,f,m,g,b,y=e(7689),v=e(2791),j=e(3855),w=C.Z.colors.simpleWhite,Z=t.default.p(d||(d=(0,D.Z)(["\n  font-size: 28px;\n  font-weight: 500;\n  color: ",";\n  line-height: 1.36;\n  letter-spacing: 0em;\n  margin-bottom: 24px;\n"])),w),k=t.default.div(c||(c=(0,D.Z)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  /* align-items: center; */\n  justify-content: space-between;\n"]))),z=t.default.div(B||(B=(0,D.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  width: 821px;\n"]))),O=function(u){return u.user.user},M=function(u){return u.user.isLoading},S=function(u){return u.user.error},P=function(u){return u.user.user.pets},I=e(6004),T=e(5667),Y=C.Z.colors.cardBgColor,$=C.Z.shadow,U=$.shadowHover,H=$.shadowDefault,N=C.Z.transition.transitionShadow,R=t.default.li(p||(p=(0,D.Z)(["\n  position: relative;\n  display: flex;\n\n  /* flex-direction: column; */\n  padding: 20px;\n  width: 821px;\n  border-radius: 40px;\n  background-color: ",";\n  box-shadow: ",";\n"])),Y,H),L=t.default.img(h||(h=(0,D.Z)(["\n  height: 161px;\n  width: 161px;\n  object-fit: cover;\n  border-radius: 40px;\n"]))),q=t.default.div(x||(x=(0,D.Z)(["\n  padding-left: 32px;\n"]))),W=t.default.span(f||(f=(0,D.Z)(["\n  font-weight: 600;\n"]))),_=t.default.p(m||(m=(0,D.Z)(["\n  font-weight: 400;\n  line-height: 1.4;\n  letter-spacing: 0.04em;\n  &:not(:last-child) {\n    margin-bottom: 12px;\n  }\n"]))),X=t.default.button(g||(g=(0,D.Z)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n  transition: ",";\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n    border-radius: 50%;\n  }\n"])),N,U);function G(u){var n=u.name,e=u.birthday,E=u.photoUrl,A=u.type,D=u.comments,t=u.id,C=(0,j.I0)();return(0,s.jsxs)(R,{children:[(0,s.jsx)(L,{src:(0,I.W)("https://res.cloudinary.com/dfvviqdic/image/upload/",E),alt:"Pets avatar ".concat(n),loading:"lazy"}),(0,s.jsxs)(q,{children:[(0,s.jsxs)(_,{children:[(0,s.jsx)(W,{children:" Name: "}),n]}),(0,s.jsxs)(_,{children:[(0,s.jsx)(W,{children:"Date of birth: "}),e]}),(0,s.jsxs)(_,{children:[(0,s.jsx)(W,{children:"Type:"}),A]}),D&&(0,s.jsxs)(_,{children:[(0,s.jsx)(W,{children:"Comments: "}),D]})]}),(0,s.jsx)(X,{type:"button",onClick:function(){console.log("deletPet"),console.log("key",t),C((0,T.PO)(t))},children:(0,s.jsx)("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("use",{href:F.Z+"#icon-trash-2"})})})]})}function V(u){var n=u.name,e=u.birthday,E=u.photoUrl,A=u.type,D=u.comments;u.id;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(R,{style:{position:"relative"},children:[(0,s.jsx)("div",{style:{position:"absolute",bottom:0,left:0,height:"100%",width:"100%",borderRadius:"40px",backgroundColor:"rgba(186, 186, 204, 0.3)",zIndex:"10"}}),(0,s.jsx)(L,{src:E,alt:"Pets avatar ".concat(n),loading:"lazy"}),(0,s.jsxs)(q,{children:[(0,s.jsx)(_,{children:"Please add you own pet"}),(0,s.jsxs)(_,{children:[(0,s.jsx)(W,{children:" Name: "}),n]}),(0,s.jsxs)(_,{children:[(0,s.jsx)(W,{children:"Date of birth: "}),e]}),(0,s.jsxs)(_,{children:[(0,s.jsx)(W,{children:"Type:"}),A]}),D&&(0,s.jsxs)(_,{children:[(0,s.jsx)(W,{children:"Comments: "}),D]})]})]})})}var J=t.default.ul(b||(b=(0,D.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"])));var Q=e.p+"static/media/user-default-avatar.2c9afb5dfcbe695b9150f927616a01aa.svg";function K(){var u=(0,j.v9)(P),n=[{id:1,name:"Your pet name",birthday:"DD-MM-YYYY",photoUrl:Q,type:"Type of your pet",comments:"We like pets"}];return(0,s.jsx)(s.Fragment,{children:0===(null===u||void 0===u?void 0:u.length)?(0,s.jsx)(J,{style:{position:"relative"},children:n.map((function(u){return(0,s.jsx)(V,{name:u.name,birthday:u.birthday,photoUrl:u.photoUrl,type:u.type,comments:u.comments,id:u.id},u.id)}))}):(0,s.jsx)(J,{children:u.map((function(u){var n=u.id,e=u.name,E=u.birthday,A=u.photoUrl,D=u.type,t=u.comments;return(0,s.jsx)(G,{name:e,birthday:E,photoUrl:A,type:D,comments:t,id:n},n)}))})})}var uu=e(8565);function nu(){var u=(0,y.s0)(),n=(0,j.I0)();return(0,v.useEffect)((function(){n((0,T.sM)())}),[n]),(0,s.jsxs)(z,{children:[(0,s.jsxs)(k,{children:[(0,s.jsx)(Z,{children:"My pets:"}),(0,s.jsx)(uu.Z,{onClick:function(n){u("/add-pet?source=".concat(n))}})]}),(0,s.jsx)(K,{})]})}var eu,Eu,Au,Du,tu,Cu,iu,ou,ru,au,Fu,su,lu,du,cu=e(4637),Bu=e(5218),pu=e(5705),hu=e(8007),xu=/^\+380\d{9}$/,fu=/^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])-(19[0-9]\d|20[0-6]\d)$/,mu=/^(?:[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7D0\uA7D6\uA7D8\uA7F5\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]){1}(?:['`-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E\uDF25-\uDF2A]|\uD83A[\uDD22-\uDD43]){1,16}$/,gu=/^(?:[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7D0\uA7D6\uA7D8\uA7F5\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]){1}(?:['`-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E\uDF25-\uDF2A]|\uD83A[\uDD22-\uDD43]){1,31}$/,bu=C.Z.colors,yu=bu.cardBgColor,vu=bu.buttonsHoverBg,ju=bu.secondaryText,wu=bu.buttonsGr,Zu=C.Z.transition.transitionColor,ku=t.default.button(eu||(eu=(0,D.Z)(["\n  display: inline-block;\n  padding-top: 9px;\n  padding-bottom: 9px;\n  width: 129px;\n  /* border: 1px solid ","; */\n  border-radius: 40px;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.4;\n  letter-spacing: 0.04em;\n  color: ",";\n  background-color: ",";\n  border: ",";\n  cursor: pointer;\n  transition: ",";\n  &:hover,\n  &:focus {\n    background-image: ",";\n    color: ",";\n    place-content: center;\n  }\n"])),vu,(function(u){return u.$darkType?ju:vu}),(function(u){return u.$darkType?vu:yu}),(function(u){return u.$darkType?"none":"2px solid ".concat(vu)}),Zu,wu,ju);function zu(u){var n=u.type,e=u.$content,E=u.$darkType,A=u.style,D=void 0===A?{}:A,t=u.onClick;return(0,s.jsx)(ku,{type:n,$darkType:E,style:D,onClick:t,children:e})}var Ou=C.Z.colors,Mu=Ou.buttonsHoverBg,Su=Ou.simpleWhite,Pu=Ou.accentInputInvalidValue,Iu=C.Z.shadow.shadowHover,Tu=C.Z.transition.transitionShadow,Yu=(0,t.default)(pu.l0)(Eu||(Eu=(0,D.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]))),$u=t.default.div(Au||(Au=(0,D.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  /* align-items: center; */\n"]))),Uu=(0,t.default)(pu.gN)(Du||(Du=(0,D.Z)(["\n  padding: 4px 12px;\n  width: 255px;\n  border: 1px solid ",";\n  border-radius: 20px;\n  font-family: inherit;\n  font-size: 16px;\n  line-height: 1.36;\n  letter-spacing: 0.04em;\n  color: ",";\n  &:disabled {\n    background-color: inherit;\n  }\n"])),Mu,Su),Hu=t.default.label(tu||(tu=(0,D.Z)(["\n  font-family: inherit;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.36;\n  letter-spacing: 0.04em;\n  padding: 4px 0px;\n  color: ",";\n"])),Su),Nu=t.default.img(Cu||(Cu=(0,D.Z)(["\n  height: 182px;\n  width: 182px;\n  object-fit: cover;\n"]))),Ru=t.default.div(iu||(iu=(0,D.Z)(["\n  border-radius: 40px;\n  width: 182px;\n  margin: 0 auto 9px auto;\n  overflow: hidden;\n"]))),Lu=t.default.button(ou||(ou=(0,D.Z)(["\n  margin: 0 auto 20px auto;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: inherit;\n  font-size: 12px;\n  line-height: 1.83;\n  letter-spacing: 0.04em;\n  color: ",";\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n  transition: ",";\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n    border-radius: 5px;\n  }\n"])),Su,Tu,Iu),qu=t.default.button(ru||(ru=(0,D.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n  transition: ",";\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n    border-radius: 50%;\n  }\n"])),Tu,Iu),Wu=t.default.button(au||(au=(0,D.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n  transition: ",";\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n    border-radius: 50%;\n  }\n"])),Tu,Iu),_u=t.default.div(Fu||(Fu=(0,D.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n  margin-bottom: 20px;\n  gap: 8px;\n  font-family: inherit;\n  font-size: 12px;\n  line-height: 1.83;\n  letter-spacing: 0.04em;\n  color: ",";\n"])),Su),Xu=(0,t.default)(pu.Bc)(su||(su=(0,D.Z)(["\n  color: ",";\n  font-size: 12px;\n  padding-left: 5px;\n  padding-right: 5px;\n"])),Pu),Gu=t.default.div(lu||(lu=(0,D.Z)(["\n  display: flex;\n  gap: 5px;\n  flex-direction: column;\n  max-width: 255px;\n"]))),Vu=t.default.p(du||(du=(0,D.Z)(["\n  color: ",";\n  font-family: inherit;\n  font-size: 12px;\n  line-height: 1.83;\n  letter-spacing: 0.04em;\n  margin-top: 5px;\n  margin: 5px auto;\n"])),Pu);function Ju(u){var n,e=u.user,E=u.isFormDisabled,D=u.closeModal,t=e.userInfo,i=t.name,o=t.email,r=t.birthday,a=t.phone,l=t.city,d=e.avatar,c=(0,v.useRef)(null),B=(0,v.useState)(null),p=(0,A.Z)(B,2),h=p[0],x=p[1],f=(0,v.useState)(d),m=(0,A.Z)(f,2),g=m[0],b=m[1],y=(0,v.useState)(!1),w=(0,A.Z)(y,2),Z=w[0],k=w[1],z=(0,v.useState)(""),O=(0,A.Z)(z,2),M=O[0],S=O[1],P=(0,j.I0)(),I=function(u){return"Invalid date"===u?u=null:u},Y=hu.Ry().shape({name:hu.Z_().min(2,"Name must be at least 2 characters").max(16,"Name must be at most 16 characters").matches(mu,"Field Name must contain only unicode letter and begin with a capital letter.").required("Name is a required field"),email:hu.Z_().email().required("Email is a required field"),birthday:hu.Z_().matches(fu,"Birthday has invalid date format. The format should be DD-MM-YYYY.").required("Birthday is a required field"),phone:hu.Z_().matches(xu,"Phone has invalid phone number format. The format should be +380XXXYYZZ."),city:hu.Z_().min(2,"City must be at least 2 characters").max(32,"City must be at most 32 characters").matches(gu,"City must contain only unicode letter and begin with a capital letter.")}),$={name:null!==i&&void 0!==i?i:"",email:null!==o&&void 0!==o?o:"",birthday:null!==(n=I(r))&&void 0!==n?n:"",phone:null!==a&&void 0!==a?a:"",city:null!==l&&void 0!==l?l:"",file:""};return(0,s.jsx)(pu.J9,{initialValues:$,validationSchema:Y,onSubmit:function(u,n){n.resetForm;var e=u.name,E=u.email,A=u.birthday,t=u.phone,C=u.city;P((0,T.iN)({name:e,email:E,birthday:A,phone:t,city:C})),D()},children:(0,s.jsxs)(Yu,{autoComplete:"off",children:[(0,s.jsx)(Ru,{children:(0,s.jsx)(Nu,{src:g||Q,width:"182",height:"182",alt:"User avatar",loading:"lazy"})}),M&&(0,s.jsxs)(Vu,{children:[" ",M]}),E?(0,s.jsx)("div",{style:{height:"54px"}}):Z?(0,s.jsxs)(_u,{children:[(0,s.jsx)(qu,{type:"button",onClick:function(){h?(h.size>3145728?S("Image is too big please select image below 3 MB"):P((0,T.cj)(h)),k(!1)):alert("Please select a file!")},children:(0,s.jsx)("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("use",{href:F.Z+"#icon-check"})})}),(0,s.jsx)("p",{children:"Confirm"}),(0,s.jsx)(Wu,{type:"button",onClick:function(){b(""),k(!1)},children:(0,s.jsx)("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("use",{href:F.Z+"#icon-x"})})})]}):(0,s.jsxs)(Lu,{type:"button",onClick:function(u){c.current.click()},children:[(0,s.jsx)("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("use",{href:F.Z+"#icon-camera"})}),"Edit photo"]}),(0,s.jsx)("input",{style:C.Z.visualHidden,id:"file",name:"file",type:"file",ref:c,accept:"image/jpeg, image/jpg, image/png",onChange:function(u){S(""),x(u.target.files[0]),b(URL.createObjectURL(u.target.files[0])),k(!0)}}),(0,s.jsxs)($u,{children:[(0,s.jsx)(Hu,{htmlFor:"name",children:"Name:"}),(0,s.jsxs)(Gu,{children:[(0,s.jsx)(Uu,{name:"name",type:"text",disabled:E}),(0,s.jsx)(Xu,{component:"div",name:"name"})]})]}),(0,s.jsxs)($u,{children:[(0,s.jsx)(Hu,{htmlFor:"email",children:"Email:"}),(0,s.jsxs)(Gu,{children:[(0,s.jsx)(Uu,{name:"email",type:"email",disabled:E}),(0,s.jsx)(Xu,{component:"div",name:"email"})]})]}),!I(r)&&E?null:(0,s.jsxs)($u,{children:[(0,s.jsx)(Hu,{htmlFor:"birthday",children:"Birthday:"}),(0,s.jsxs)(Gu,{children:[(0,s.jsx)(Uu,{name:"birthday",type:"text",disabled:E,placeholder:"00-00-0000"}),(0,s.jsx)(Xu,{component:"div",name:"birthday"})]})]}),!a&&E?null:(0,s.jsxs)($u,{children:[(0,s.jsx)(Hu,{htmlFor:"phone",children:"Phone:"}),(0,s.jsxs)(Gu,{children:[(0,s.jsx)(Uu,{name:"phone",type:"tel",disabled:E,placeholder:"+380000000000"}),(0,s.jsx)(Xu,{component:"div",name:"phone"})]})]}),!l&&E?null:(0,s.jsxs)($u,{children:[(0,s.jsx)(Hu,{htmlFor:"city",children:"City:"}),(0,s.jsxs)(Gu,{children:[(0,s.jsx)(Uu,{name:"city",type:"text",disabled:E,placeholder:"City"}),(0,s.jsx)(Xu,{component:"p",name:"city"})]})]}),!E&&(0,s.jsx)(zu,{style:{marginLeft:"auto",width:"255px"},type:"submit",$content:"Save",$darkType:!0})]})})}var Qu,Ku,un=e(6677),nn=C.Z.colors.cardBgColor,en=C.Z.shadow,En=en.shadowDefault,An=en.shadowHover,Dn=C.Z.transition.transitionShadow,tn=t.default.div(Qu||(Qu=(0,D.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-top: 20px;\n  padding-right: 24px;\n  padding-bottom: 20px;\n  padding-left: 16px;\n  width: 395px;\n  border-radius: 40px;\n  background-color: ",";\n  box-shadow: ",";\n"])),nn,En),Cn=t.default.button(Ku||(Ku=(0,D.Z)(["\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n  transition: ",";\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n    border-radius: 50%;\n  }\n"])),Dn,An);function on(){var u=(0,j.v9)(O),n=(0,j.v9)(M),e=(0,j.v9)(S),E=(0,v.useState)(!1),D=(0,A.Z)(E,2),t=D[0],C=D[1],i=(0,v.useState)(!0),o=(0,A.Z)(i,2),r=o[0],a=o[1],l=(0,j.I0)();(0,v.useEffect)((function(){l((0,T.NY)())}),[l]);var d=function(){C(!1),a(!0)};return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)(un.Z,{closeModal:d,isOpenedModal:t,width:"395px",padding:"20px 24px 20px 16px",children:(0,s.jsx)(Ju,{user:u,isFormDisabled:r,closeModal:d})}),Object.keys(u.userInfo).length>0&&(0,s.jsxs)(tn,{children:[(0,s.jsx)(Ju,{user:u,isFormDisabled:r}),(0,s.jsx)(Cn,{type:"button",onClick:function(){a(!1),C(!0)},children:(0,s.jsx)("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("use",{href:F.Z+"#icon-edit-2"})})})]}),(0,s.jsx)(cu.Z,{loading:n,color:"#CCE4FB",cssOverride:{position:"absolute",top:"50%",left:"50%",transform:" translate(-50%, -50%)"},size:100,"aria-label":"Loading Spinner"}),e&&Bu.Am.error("User not found",{duration:2e3,position:"top-center",style:{textAlign:"center",backgroundColor:"#54ADFF",borderRadius:"20px",color:"#fef9f9",fontFamily:"Manrope, sans-serif",fontWeight:"700"}})]})}var rn,an,Fn,sn,ln,dn,cn=e(4289),Bn=e(8560),pn=C.Z.colors,hn=pn.simpleWhite,xn=pn.buttonsHoverBg,fn=pn.accentHeaderButton,mn=t.default.h2(rn||(rn=(0,D.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1.36;\n  color: ",";\n  text-align: center;\n  margin-bottom: 24px;\n\n  @media (min-width: 767px) {\n    font-size: 36px;\n    margin-bottom: 52px;\n  }\n"])),hn),gn=t.default.div(an||(an=(0,D.Z)(["\n  text-align: center;\n"]))),bn=t.default.p(Fn||(Fn=(0,D.Z)(["\n  font-weight: 500;\n  line-height: 1.36;\n  margin-bottom: 40px;\n\n  @media (min-width: 767px) {\n    font-size: 24px;\n    margin-bottom: 60px;\n  }\n"]))),yn=t.default.button(sn||(sn=(0,D.Z)(["\n  margin: 0 auto;\n  padding: 9px 54.5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  text-align: center;\n  color: #fef9f9;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 700;\n  background-color: ",";\n  border-radius: 40px;\n  border: transparent;\n  width: 250px;\n  cursor: pointer;\n\n  transition: all 0.5s ease;\n\n  &:hover {\n    background-color: ",";\n    box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.2);\n  }\n"])),xn,fn),vn=function(u){var n=u.closeModal,e=u.openModal;return(0,s.jsx)(un.Z,{closeModal:n,isOpenedModal:e,children:(0,s.jsxs)(gn,{children:[(0,s.jsx)(mn,{children:"Congrats"}),(0,s.jsx)(bn,{children:"You're registration is success"}),(0,s.jsxs)(yn,{onClick:function(){n()},children:["Go to profile",(0,s.jsx)("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("use",{href:F.Z+"#icon-pawprint-1"})})]})]})})},jn=C.Z.colors.simpleWhite,wn=t.default.div(ln||(ln=(0,D.Z)(["\n  width: 100%;\n\n  margin: 24px auto;\n  margin-bottom: 40px;\n\n  "," {\n    width: 768px;\n  }\n  "," {\n    margin-top: 62px;\n    width: 1248px;\n    display: flex;\n    gap: 32px;\n  }\n"])),C.Z.breakPoints.tablet,C.Z.breakPoints.desktop),Zn=t.default.p(dn||(dn=(0,D.Z)(["\n  font-size: 28px;\n  font-weight: 500;\n  color: ",";\n  line-height: 1.36;\n  letter-spacing: 0em;\n  margin-bottom: 24px;\n"])),jn);function kn(){var u=(0,v.useState)(!1),n=(0,A.Z)(u,2),e=n[0],E=n[1],D=(0,Bn.v9)(cn.Qb);(0,v.useEffect)((function(){"/register"===localStorage.getItem("redirectPath")&&E(!0)}),[]);return(0,s.jsxs)("main",{children:[(0,s.jsx)("h1",{style:C.Z.visualHidden,children:"User Page"}),(0,s.jsxs)(wn,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(s.Fragment,{}),(0,s.jsx)(Zn,{children:"My information:"}),(0,s.jsx)(on,{}),(0,s.jsx)(l,{})]}),(0,s.jsx)(nu,{})]}),D&&e&&(0,s.jsx)(vn,{closeModal:function(){E(!1)},isOpenedModal:e})]})}},4637:function(u,n,e){e.d(n,{Z:function(){return r}});var E=e(2791),A={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function D(u){if("number"===typeof u)return{value:u,unit:"px"};var n,e=(u.match(/^[0-9.]*/)||"").toString();n=e.includes(".")?parseFloat(e):parseInt(e,10);var E=(u.match(/[^0-9]*$/)||"").toString();return A[E]?{value:n,unit:E}:(console.warn("React Spinners: ".concat(u," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}function t(u){var n=D(u);return"".concat(n.value).concat(n.unit)}var C=function(){return C=Object.assign||function(u){for(var n,e=1,E=arguments.length;e<E;e++)for(var A in n=arguments[e])Object.prototype.hasOwnProperty.call(n,A)&&(u[A]=n[A]);return u},C.apply(this,arguments)},i=function(u,n){var e={};for(var E in u)Object.prototype.hasOwnProperty.call(u,E)&&n.indexOf(E)<0&&(e[E]=u[E]);if(null!=u&&"function"===typeof Object.getOwnPropertySymbols){var A=0;for(E=Object.getOwnPropertySymbols(u);A<E.length;A++)n.indexOf(E[A])<0&&Object.prototype.propertyIsEnumerable.call(u,E[A])&&(e[E[A]]=u[E[A]])}return e},o=function(u,n,e){var E="react-spinners-".concat(u,"-").concat(e);if("undefined"==typeof window||!window.document)return E;var A=document.createElement("style");document.head.appendChild(A);var D=A.sheet,t="\n    @keyframes ".concat(E," {\n      ").concat(n,"\n    }\n  ");return D&&D.insertRule(t,0),E}("CircleLoader","0% {transform: rotate(0deg)} 50% {transform: rotate(180deg)} 100% {transform: rotate(360deg)}","circle");var r=function(u){var n=u.loading,e=void 0===n||n,A=u.color,r=void 0===A?"#000000":A,a=u.speedMultiplier,F=void 0===a?1:a,s=u.cssOverride,l=void 0===s?{}:s,d=u.size,c=void 0===d?50:d,B=i(u,["loading","color","speedMultiplier","cssOverride","size"]),p=C({display:"inherit",position:"relative",width:t(c),height:t(c)},l),h=function(u){var n=D(c),e=n.value,E=n.unit;return{position:"absolute",height:"".concat(e*(1-u/10)).concat(E),width:"".concat(e*(1-u/10)).concat(E),borderTop:"1px solid ".concat(r),borderBottom:"none",borderLeft:"1px solid ".concat(r),borderRight:"none",borderRadius:"100%",transition:"2s",top:"".concat(.7*u*2.5,"%"),left:"".concat(.35*u*2.5,"%"),animation:"".concat(o," ").concat(1/F,"s ").concat(.2*u/F,"s infinite linear")}};return e?E.createElement("span",C({style:p},B),E.createElement("span",{style:h(0)}),E.createElement("span",{style:h(1)}),E.createElement("span",{style:h(2)}),E.createElement("span",{style:h(3)}),E.createElement("span",{style:h(4)})):null}}}]);
//# sourceMappingURL=718.5deac57e.chunk.js.map