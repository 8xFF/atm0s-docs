"use strict";(self.webpackChunkatm_0_s_docs=self.webpackChunkatm_0_s_docs||[]).push([[6976],{5403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(3010),s=t(1421),o=t(6159),a=t(9640);const i={title:"Connecting to Session"},l="Connecting to Session",c={id:"client/connect",title:"Connecting to Session",description:"Overview",source:"@site/docs/client/connect.mdx",sourceDirName:"client",slug:"/client/connect",permalink:"/atm0s-docs/docs/client/connect",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/client/connect.mdx",tags:[],version:"current",frontMatter:{title:"Connecting to Session"},sidebar:"tutorialSidebar",previous:{title:"Client",permalink:"/atm0s-docs/docs/category/client"},next:{title:"Consume a stream",permalink:"/atm0s-docs/docs/client/consuming"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Connect to a session",id:"connect-to-a-session",level:2},{value:"Disconnect from a session",id:"disconnect-from-a-session",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"connecting-to-session",children:"Connecting to Session"}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"Session"})," is the main construct in Atm0s. Session is tie to a pair of room and peer, which are identified by an unique string."]}),"\n",(0,r.jsx)(n.h2,{id:"connect-to-a-session",children:"Connect to a session"}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{value:"js",label:"Javascript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const session = createSession("gateway_url",{\n  room: "my-room",\n  peer: "my-peer",\n  token: "some-token"\n});\nawait session.connect();\n'})})}),(0,r.jsx)(a.Z,{value:"react",label:"React",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'<SessionProvider\n  gateways={["gateway_url"]}\n  room="my-room"\n  peer="my-peer"\n  token="some-token"\n>\n  ... streaming stuffs\n</SessionProvider>\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"createSession"})," takes three arguments:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"room"}),": the room name, this should be unique for each session to identify the room for the user to join."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"peer"}),": the peer id, this is also an unique string for each user to identify themselves in the room."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"token"}),": is an access token each peer needs to connect to the room. This token is generated by the server and should be kept secret. You can read more about token ",(0,r.jsx)(n.a,{href:"../server/token",children:"here"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"disconnect-from-a-session",children:"Disconnect from a session"}),"\n",(0,r.jsxs)(n.p,{children:["You should call ",(0,r.jsx)(n.code,{children:"session.disconnect()"})," to disconnect from a session. This will also stop all the tracks and close the connection to the server."]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9640:(e,n,t)=>{t.d(n,{Z:()=>a});t(5170);var r=t(5341);const s={tabItem:"tabItem_Cv44"};var o=t(3010);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},6159:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(5170),s=t(5341),o=t(3360),a=t(1148),i=t(300),l=t(8372),c=t(4961),u=t(1107);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=p({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,u.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),v=(()=>{const e=c??f;return m({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(1974);const v={tabList:"tabList_AyC3",tabItem:"tabItem_MOMj"};var g=t(3010);function x(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(c(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function k(e){const n=(0,b.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},1421:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(5170);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);