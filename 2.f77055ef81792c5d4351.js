(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{42:function(n,o,e){},59:function(n,o,e){},60:function(n,o,e){},61:function(n,o,e){"use strict";e.r(o);var s={};e.r(s),e.d(s,"Row",function(){return W}),e.d(s,"Col",function(){return K});var t,l=e(6),i=e.n(l),a=e(7),r=e.n(a),c=e(8),d=e.n(c),v=e(9),m=e.n(v),p=e(10),u=e.n(p),x=(e(42),e(1)),g=e.n(x),f=e(43),b=e(45),C=e.n(b),N=e(46),w=e.n(N),h=e(47),y=e.n(h),R=e(48),j=e(49),O=e.n(j),E=e(33),k=e.n(E),S=e(35),L=e.n(S),P=e(36),M=e.n(P),_=e(37),$=e.n(_),D=e(38),H=e.n(D),I=e(39),T=e.n(I),q=e(34),B=e(40),G=e.n(B),J=q.createContext({gutter:0}),A={xxl:"(min-width: 1600px)",xl:"(min-width: 1200px)",lg:"(min-width: 992px)",md:"(min-width: 768px)",sm:"(min-width: 576px)",xs:"(max-width: 575px)"},F=Object.keys(A),U=function(n,o){var e={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&o.indexOf(l)<0&&(e[l]=n[l]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(l=Object.getOwnPropertySymbols(n);i<l.length;i++)o.indexOf(l[i])<0&&(e[l[i]]=n[l[i]])}return e};if("undefined"!=typeof window){window.matchMedia=window.matchMedia||function(n){return{media:n,matches:!1,addListener:function(){},removeListener:function(){},onchange:null,addEventListener:function(){},removeEventListener:function(){},dispatchEvent:function(){return!0}}},t=e(54)}var W=function(n){function o(){var n;return L()(this,o),(n=$()(this,H()(o).apply(this,arguments))).state={media:{}},n}return T()(o,n),M()(o,[{key:"componentDidMount",value:function(){var n=this,o=!0,e=!1,l=void 0;try{for(var i,a=function(){var o=i.value;t.register(A[o],{match:function(){"object"===k()(n.props.gutter)&&n.setState(function(n){return{media:Object.assign({},n.media,O()({},o,!0))}})},unmatch:function(){"object"===k()(n.props.gutter)&&n.setState(function(n){return{media:Object.assign({},n.media,O()({},o,!1))}})},destroy:function(){}})},r=F[Symbol.iterator]();!(o=(i=r.next()).done);o=!0)a()}catch(n){e=!0,l=n}finally{try{o||null==r.return||r.return()}finally{if(e)throw l}}}},{key:"componentWillUnmount",value:function(){var n=!0,o=!1,e=void 0;try{for(var l,i=F[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var a=l.value;t.unregister(A[a])}}catch(n){o=!0,e=n}finally{try{n||null==i.return||i.return()}finally{if(o)throw e}}}},{key:"getGutter",value:function(){var n=this.props.gutter;if(!n)return 0;if("number"==typeof n)return n;if("object"===k()(n)){var o=!0,e=!1,l=void 0;try{for(var i,a=F[Symbol.iterator]();!(o=(i=a.next()).done);o=!0){var r=i.value;if(this.state.media[r]&&void 0!==n[r])return n[r]}}catch(n){e=!0,l=n}finally{try{o||null==a.return||a.return()}finally{if(e)throw l}}}return 0}},{key:"render",value:function(){var n,o=this.props,e=o.type,l=o.justify,i=o.align,a=o.className,r=o.style,t=o.children,s=U(o,["type","justify","align","className","style","children"]),c=this.getGutter(),d="".concat("xl","-row"),v=G()((n={},O()(n,d,!e),O()(n,"".concat(d,"-").concat(e),e),O()(n,"".concat(d,"-").concat(e,"--").concat(l),e&&l),O()(n,"".concat(d,"-").concat(e,"--").concat(i),e&&i),n),a),m=0<c?Object.assign({marginLeft:c/-2,marginRight:c/-2},r):r;return delete s.gutter,q.createElement(J.Provider,{value:{gutter:c}},q.createElement("div",Object.assign({},s,{className:v,style:m}),t))}}]),o}(q.Component),z=function(n,o){var e={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&o.indexOf(l)<0&&(e[l]=n[l]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(l=Object.getOwnPropertySymbols(n);i<l.length;i++)o.indexOf(l[i])<0&&(e[l[i]]=n[l[i]])}return e},K=function(n){function o(){return L()(this,o),$()(this,H()(o).apply(this,arguments))}return T()(o,n),M()(o,[{key:"render",value:function(){for(var n=this.props,o=n.className,l=n.children,i=n.style,a=z(n,["className","children","style"]),e=[],r=["span","order","offset","push","pull"],t="".concat("xl","-col"),s=0;s<r.length;s++){var c=r[s],d=a[c];if("number"==typeof d)e.push("".concat(t,"-").concat(c,"-").concat(d));else if("object"===k()(d))for(var v in d){var m=d[v];e.push("".concat(t,"-").concat(c,"-").concat(v,"-").concat(m))}delete a[c]}var p=G()(t,e,o);return q.createElement(J.Consumer,null,function(n){var o=n.gutter,e=0<o?Object.assign({paddingLeft:o/2,paddingRight:o/2},i):i;return q.createElement("div",Object.assign({},a,{style:e,className:p}),l)})}}]),o}(q.Component);function Q(n){var o,e,l=n;(!(1<arguments.length&&void 0!==arguments[1])||arguments[1])&&(o=l,e=R.transform(o,{presets:["es2015","react"]}).code,l="var exports = {}\n".concat(e,"\nreturn exports.default"));var i=["React"],a=[x];for(var r in s)i.push(r),a.push(s[r]);i.push(l);var t=y()(Function,i).apply(void 0,a);return x.createElement(t)}e(58),e(59);C.a.registerLanguage("jsx",w.a);var V=function(n){function o(){return i()(this,o),d()(this,m()(o).apply(this,arguments))}return u()(o,n),r()(o,[{key:"render",value:function(){var n=this.props,o=n.title,e=n.description,l=n.children,i=o.replace(/`([^`\n]+)`/g,'<code class="md-code-inline">$1</code>'),a=e.replace(/`([^`\n]+)`/g,'<code class="md-code-inline">$1</code>').replace(/\n/g,"<br/>"),r=l.replace(/\\n/g,"\n").replace(/\\\\n/g,"\\n"),t=Q(r),s=C.a.highlightAuto(r);return x.createElement("div",{className:"demo-box"},x.createElement("div",{className:"view"},t),x.createElement("div",{className:"info-wrapper"},x.createElement("div",{className:"title",dangerouslySetInnerHTML:{__html:i}}),x.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}})),x.createElement("div",{className:"code-wrapper"},x.createElement("pre",null,x.createElement("code",{className:"hljs jsx",dangerouslySetInnerHTML:{__html:s.value}}))))}}]),o}(x.PureComponent),X=(e(60),function(n){function o(){return i()(this,o),d()(this,m()(o).apply(this,arguments))}return u()(o,n),r()(o,[{key:"render",value:function(){for(var n=/ *::: *demo *(.+)\n(((?!```).*\n)+).+\n(((?!```).*\n)+).+\s+:::/,o=this.props.children;;){var e=o.match(n);if(!e)break;var l=e[1],i=e[2].replace(/\n+$/,""),a=e[4].replace(/\n+$/,"");o=o.replace(n,'<DemoBox title="'.concat(l,'" description="').concat(i,'" children="').concat(a.replace(/\\n/g,"\\\\n").replace(/\n/g,"\\n"),'"/>\n'))}return x.createElement(f.a,{className:"md",options:Y},o)}}]),o}(x.PureComponent)),Y={overrides:{DemoBox:{component:V},code:{props:{className:"md-code-inline"}},ol:{props:{className:"md-ol"}},ul:{props:{className:"md-ul"}},blockquote:{props:{className:"md-blockquote"}},table:{props:{className:"md-table"}}}};e.d(o,"default",function(){return Z});var Z=function(n){function o(){return i()(this,o),d()(this,m()(o).apply(this,arguments))}return u()(o,n),r()(o,[{key:"render",value:function(){return g.a.createElement(X,{children:"\n\n# 栅格系统\n\n参考 bootstrap 的栅格系统\n\n::: demo 基础用法\n使用`span`,`gutter`实现基本的布局（`span`设置为 0 可以实现内容块的隐藏)。\n\n```jsx\nexport default function() {\n  return (\n    <div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={4}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={5}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={7}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n          <Col span={8}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={8}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={0}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={8}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n          <Col span={8}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n    </div>\n  )\n}\n```\n\n:::\n\n::: demo 偏移布局\n使用`offset`,`push`,`pull`实现内容的偏移\n\n```jsx\nexport default function() {\n  return (\n    <div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6} offset={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6} push={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6} pull={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={6} offset={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6} pull={12}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n    </div>\n  )\n}\n```\n\n:::\n\n::: demo 响应式布局\n`span`可以传入对象的形式实现不同尺寸下的布局\n可以设置的参数有:`xs`,`sm`,`md`,`lg`,`xl`,`xxl`\n\n```jsx\nexport default function() {\n  return (\n    <div className='grid-row-box'>\n      <Row\n        gutter={{\n          xs: 8,\n          sm: 10,\n          md: 15,\n          lg: 20,\n          xl: 25,\n          xxl: 30\n        }}\n      >\n        <Col\n          span={{\n            xs: 8,\n            sm: 6,\n            md: 4,\n            lg: 6\n          }}\n        >\n          <div className='grid-col-box'>col1</div>\n        </Col>\n        <Col\n          span={{\n            xs: 8,\n            sm: 6,\n            md: 5,\n            lg: 10,\n            xxl: 6\n          }}\n        >\n          <div className='grid-col-box'>col2</div>\n        </Col>\n        <Col\n          span={{\n            xs: 8,\n            sm: 6,\n            md: 7,\n            lg: 4,\n            xl: 0,\n            xxl: 6\n          }}\n        >\n          <div className='grid-col-box'>col3</div>\n        </Col>\n        <Col\n          span={{\n            xs: 0,\n            sm: 6,\n            md: 8,\n            lg: 4,\n            xl: 8,\n            xxl: 6\n          }}\n        >\n          <div className='grid-col-box'>col4</div>\n        </Col>\n      </Row>\n    </div>\n  )\n}\n```\n\n:::\n\n::: demo 响应式偏移\n`offset`,`push`,`pull`也是支持响应式的。\n可以设置的参数有:`xs`,`sm`,`md`,`lg`,`xl`,`xxl`\n\n```jsx\nexport default function() {\n  return (\n    <div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col\n            span={6}\n            offset={{\n              xs: 1,\n              sm: 2,\n              md: 3,\n              lg: 4,\n              xl: 5,\n              xxl: 6\n            }}\n          >\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col\n            span={6}\n            push={{\n              xs: 1,\n              sm: 2,\n              md: 3,\n              lg: 4,\n              xl: 5,\n              xxl: 6\n            }}\n          >\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col\n            span={6}\n            pull={{\n              xs: 1,\n              sm: 2,\n              md: 3,\n              lg: 4,\n              xl: 5,\n              xxl: 6\n            }}\n            offset={6}\n          >\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n    </div>\n  )\n}\n```\n\n:::\n\n::: demo flex 布局\n在现代浏览器中可以指定`type={'flex'}`,\n然后可以使用`align`和`justify`实现水平和垂直方向的不同方式的对齐,\n也可以使用`order`改变内容块的前后顺序(order 也是支持响应式的)。\n\n```jsx\nexport default function() {\n  return (\n    <div>\n      <div className='grid-row-box grid-row-box--flex'>\n        <Row gutter={10} type={'flex'} align={'top'}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box grid-row-box--flex'>\n        <Row gutter={10} type={'flex'} align={'middle'}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box grid-row-box--flex'>\n        <Row gutter={10} type={'flex'} align={'bottom'}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box grid-row-box--flex'>\n        <Row gutter={10} type={'flex'} justify={'start'}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box grid-row-box--flex'>\n        <Row gutter={10} type={'flex'} justify={'center'}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box grid-row-box--flex'>\n        <Row gutter={10} type={'flex'} justify={'end'}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box grid-row-box--flex'>\n        <Row gutter={10} type={'flex'}>\n          <Col span={6} order={3}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6} order={1}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6} order={2}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n    </div>\n  )\n}\n```\n\n:::\n\n## Row 属性\n\n| 参数    | 说明                                  | 类型            | 可选值                                              | 默认值 |\n| ------- | ------------------------------------- | --------------- | --------------------------------------------------- | ------ |\n| gutter  | 内容块间隙(支持响应式)                | number / object | >=0                                                 | 0      |\n| type    | 布局类型                              | flex            | -                                                   | -      |\n| justify | 栅格左右对齐方式(在`type=flex`下有效) | string          | start / end / center / space-around / space-between | —      |\n| align   | 栅格上下对齐方式(在`type=flex`下有效) | string          | top / middle / bottom                               | —      |\n\n## Col 属性\n\n| 参数   | 说明                                       | 类型            | 可选值 | 默认值 |\n| ------ | ------------------------------------------ | --------------- | ------ | ------ |\n| span   | 栅格占据的列数(支持响应式)(**0 表示隐藏**) | number / object | 0-24   | —      |\n| offset | 栅格左侧的间隔列数(支持响应式)             | number / object | 1-24   | —      |\n| push   | 栅格向右移动的列数(支持响应式)             | number / object | 1-24   | —      |\n| pull   | 栅格向左移动的列数(支持响应式)             | number / object | 1-24   | —      |\n| order  | 栅格顺序，flex 布局模式下有效(支持响应式)  | number / object | 1-24   | —      |\n"})}}]),o}(g.a.Component)}}]);