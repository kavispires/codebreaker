(this.webpackJsonpcodebreaker=this.webpackJsonpcodebreaker||[]).push([[0],{45:function(e,t,a){e.exports=a.p+"static/media/rule-goal-4.fd7a6494.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/rule-goal-5.dd6c7c31.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/codebreaker-logo.619b899a.svg"},60:function(e,t,a){e.exports=a.p+"static/media/rule-setup-4.5dd2fa92.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/rule-setup-5.3ea055bb.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/rule-setup-reveal.f55b24cb.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/rule-turn.2a46b951.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/rule-question.6c34c973.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/rule-example-1.8a19287f.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/rule-example-2.c7066c3e.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/rule-example-3.5215b145.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/rule-example-4.02f95d58.jpg"},77:function(e,t,a){e.exports=a(87)},82:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(82);var s=a(7),c=a(41),i=a(134),u=a(54),m=a(52),d=a(53),h=a(69),p="HOME",E="GAME",b="RULES",f="#23941b",v=["0B","0W","1B","1W","2B","2W","3B","3W","4B","4W","5G","5G","6B","6W","7B","7W","8B","8W","9B","9W"],g={B:"black",G:"green",W:"white"},y={0:"a",1:"b",2:"c",3:"d",4:"e"},q={0:"A",1:"B",2:"C",3:"D",4:"E",5:"F"},w={2:5,3:5,4:4},N=function(e){var t=Object(h.a)(e);return t.sort((function(){return Math.random()-.5})),t},k=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=[],n=0,r=0;r<e.length;r++)void 0===a[n]&&(a[n]=[]),a[n].push(e[r]),n=n===t-1?0:n+1;return a},j=[{id:"q1",question:"How many odd tiles do you have?"},{id:"q2",question:"Which neighboring tiles have consecutive numbers?"},{id:"q3",question:"Where are your #0 tiles?"},{id:"q4",question:"How many of your tiles have a white number?"},{id:"q5",question:"What is the sum of your white numbers?"},{id:"q6",question:"How many of your tiles have the same number?"},{id:"q7",question:"How many even tiles do you have? (0 is considered an even number)"},{id:"q8",question:"What is the sum of your 3 left-most tiles?"},{id:"q9",question:"What is the sum of your central tiles? (3 or 2 center tiles)"},{id:"q10",question:"What is the sum of your 3 right-most tiles?"},{id:"q11",question:"Where are your #1 or #2 tiles? (choose one number when asking the question)"},{id:"q12",question:"Where are your #3 or #4 tiles?\xa0(choose one number when asking the question)"},{id:"q13",question:"Where are your #6 or #7 tiles?\xa0(choose one number when asking the question)"},{id:"q14",question:"Where are your #8 or #9 tiles?\xa0(choose one number when asking the question)"},{id:"q15",question:"Which neighboring tiles have the same color?"},{id:"q16",question:"Where are your #5 tiles?"},{id:"q17",question:"What is the sum of your black numbers?"},{id:"q18",question:"How many of your tiles have a black number?"},{id:"q19",question:"What is the different between your highest\xa0and lowest number?"},{id:"q20",question:"Is your C tile greater than 4?"},{id:"q21",question:"What is the sum of your tiles?"}],O=new(function(){function e(){Object(m.a)(this,e),this.playerCount=0,this.code=null,this.hands={},this.questions=[],this.activeQuestions=[],this.usedQuestions=[]}return Object(d.a)(e,[{key:"setup",value:function(e){this.playerCount=e;var t=N(v),a=null;for(a=k(t,e<4?4:5),e>2&&(this.code=a.pop().sort()),this.hands=a.reduce((function(t,a,n){return n<e&&(t[n+1]={player:n+1,hand:a.sort()}),t}),{}),this.questions=N(j);this.activeQuestions.length<6;)this.activeQuestions.push(this.questions.pop());return this.state}},{key:"confirmQuestion",value:function(e){var t=this;return this.activeQuestions=this.activeQuestions.reduce((function(a,n){return e===n.id?(t.usedQuestions.push(n),t.questions.length>0&&a.push(t.questions.pop())):a.push(n),a}),[]),this.state}},{key:"reset",value:function(){this.playerCount=0,this.code=null,this.hands={},this.questions=[],this.activeQuestions=[],this.usedQuestions=[]}},{key:"state",get:function(){return{code:this.code,hands:this.hands,questionsLeft:this.questionsLeft,activeQuestions:this.activeQuestions,playerCount:this.playerCount}}},{key:"questionsLeft",get:function(){return this.questions.length+this.activeQuestions.length}}]),e}()),C={game:O.state,screen:p,selectedQuestion:null,playerModal:null},W=Object(u.createGlobalState)(C).useGlobalState,S=a(89),x=a(130),Q=function(e){var t=e.numberCode,a=e.position,n=e.isHidden,l=void 0===n||n,o=function(e){var t=e.split(""),a=Object(s.a)(t,2),n=a[0],r=a[1];return{number:+n,color:g[r],className:"number number--".concat(g[r])}}(t);return r.a.createElement("div",{className:"number-tile"},r.a.createElement("span",{className:"letter"},y[a]),l?r.a.createElement("span",{className:"number number--hidden"},"?"):r.a.createElement("span",{className:o.className},o.number))},B=function(e){var t=e.code,a=e.isHidden,n=void 0===a||a;return r.a.createElement("div",{className:"code-result"},t.map((function(e,t){return r.a.createElement(Q,{key:e,numberCode:e,position:t,isHidden:n})})))},G=a(125),R=a(55),A=a.n(R),H=a(58),I=a.n(H),L=a(57),M=a.n(L),P=function(){var e=W("screen"),t=Object(s.a)(e,2),a=t[0],n=t[1],l=a===b?r.a.createElement(A.a,null):r.a.createElement(M.a,null);return r.a.createElement(G.a,{position:"static",className:"header"},r.a.createElement(S.a,{className:"header__btn",onClick:function(){n(a===b?E:b)},startIcon:l},a===b?"Game":"Rules"),r.a.createElement("h3",null,"Codebreaker"),r.a.createElement(S.a,{className:"header__btn",onClick:function(){O.reset(),n(p)},startIcon:r.a.createElement(I.a,null)},"Reset"))},T=a(135),_=a(129),D=a(127),Y=a(126),F=a(143),J=a(128);var U,$=function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])},z=r.a.forwardRef((function(e,t){return r.a.createElement(F.a,Object.assign({direction:"up",ref:t},e))})),K=function(){var e=W("game"),t=Object(s.a)(e,1)[0],a=W("playerModal"),l=Object(s.a)(a,2),o=l[0],c=l[1],i=Object(n.useState)(!1),u=Object(s.a)(i,2),m=u[0],d=u[1],h=Object(n.useState)(3),p=Object(s.a)(h,2),E=p[0],b=p[1],f=Object(n.useState)(!0),v=Object(s.a)(f,2),g=v[0],y=v[1],q=Object(n.useState)(20),w=Object(s.a)(q,2),N=w[0],k=w[1],j=Object(n.useState)(!1),O=Object(s.a)(j,2),C=O[0],x=O[1],Q="code"===o?t.code:t.hands[o].hand,G="code"===o?"Code Result":"Player ".concat(o," Code");$((function(){var e=E-1;e>=0?b(e):(d(!0),y(!1),x(!0))}),g?1e3:null),$((function(){var e=N-1;e>=0?k(e):R()}),C?1e3:null);var R=function(){y(!1),x(!1),c(null)},A=100*N/20;return r.a.createElement(T.a,{open:Boolean(o),TransitionComponent:z,keepMounted:!0,onClose:R,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(Y.a,null,m?G:"".concat(G," will be revealed in...")),r.a.createElement(D.a,null,m?r.a.createElement(n.Fragment,null,r.a.createElement(B,{code:Q,isHidden:!m}),r.a.createElement(J.a,{variant:"determinate",value:A})):r.a.createElement("div",{className:"countdown"},E)),r.a.createElement(_.a,null,r.a.createElement(S.a,{onClick:R,color:"primary"},m?"Auto-close in ".concat(N):"Close")))},V=function(e){var t=e.question,a=e.position,n=W("selectedQuestion"),l=Object(s.a)(n,2),o=l[0],c=l[1],i=o===t.id?"question-card--selected":"";return r.a.createElement("button",{className:"btn question-card ".concat(i),id:t.id,onClick:function(e){var t=e.target.id;c(o===t?null:t)}},r.a.createElement("span",{className:"question-letter"},q[a]),t.question)},X=function(){var e=W("game"),t=Object(s.a)(e,2),a=t[0],n=t[1],l=W("selectedQuestion"),o=Object(s.a)(l,2),c=o[0],i=o[1],u=W("playerModal"),m=Object(s.a)(u,2),d=m[0],h=m[1],p=function(e){h(e)};return console.log(a),r.a.createElement("div",{className:"game"},r.a.createElement(P,null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"code-reveal"},r.a.createElement("p",null,"Reveal each code for each player to take note while others close their eyes."),r.a.createElement(x.a,{color:"primary","aria-label":"outlined primary button group"},Object.values(a.hands).map((function(e){return r.a.createElement(S.a,{className:"btn btn--group",key:e.player,onClick:function(){return p(e.player)}},"Player ",e.player)}))),d&&r.a.createElement(K,null)),r.a.createElement("h3",null,"On your turn:"),r.a.createElement("h2",null,"Ask a Question ",r.a.createElement("span",{className:"text-green"},"OR")," Guess the Code"),a.code&&r.a.createElement("button",{className:"btn btn--invisible",onClick:function(){return p("code")}},r.a.createElement(B,{code:a.code,isHidden:!0})),r.a.createElement("p",null,"Questions Left: ",a.questionsLeft," (including the visible ones)"),r.a.createElement("div",{className:"questions-list"},a.activeQuestions.map((function(e,t){return r.a.createElement(V,{key:e.id,question:e,position:t})}))),c&&r.a.createElement(S.a,{className:"btn btn--solid",variant:"contained",onClick:function(){n(O.confirmQuestion(c)),i(null)}},"Confirm Question")))},Z=a(138),ee=a(132),te=a(131),ae=a(141),ne=a(136),re=a(140),le=a(59),oe=a.n(le),se=function(){var e=W("game"),t=Object(s.a)(e,2)[1],a=W("screen"),l=Object(s.a)(a,2)[1],o=Object(n.useState)(3),c=Object(s.a)(o,2),i=c[0],u=c[1];return r.a.createElement("div",{className:"home"},r.a.createElement("img",{className:"logo",src:oe.a,alt:"Carto logo"}),r.a.createElement("h1",null,"Carto"),r.a.createElement(te.a,null,r.a.createElement(Z.a,{component:"fieldset"},r.a.createElement(ae.a,{component:"legend",style:{color:f}},"Player Count"),r.a.createElement(re.a,{"aria-label":"mode",name:"mode",value:i,onChange:function(e){return u(+e.target.value)}},r.a.createElement(ee.a,{value:1,control:r.a.createElement(ne.a,null),label:"Solo",disabled:!0}),r.a.createElement(ee.a,{value:2,control:r.a.createElement(ne.a,null),label:"2 players"}),r.a.createElement(ee.a,{value:3,control:r.a.createElement(ne.a,null),label:"3 players"}),r.a.createElement(ee.a,{value:4,control:r.a.createElement(ne.a,null),label:"4 players"})))),r.a.createElement("div",{className:"home__actions"},r.a.createElement(S.a,{variant:"outlined",className:"btn btn--outline",onClick:function(){t(O.setup(i)),l(b)}},"Start Game")))},ce=a(139),ie=a(133),ue=a(137),me=a(45),de=a.n(me),he=a(46),pe=a.n(he),Ee=a(60),be=a.n(Ee),fe=a(61),ve=a.n(fe),ge=a(62),ye=a.n(ge),qe=a(63),we=a.n(qe),Ne=a(64),ke=a.n(Ne),je=a(65),Oe=a.n(je),Ce=a(66),We=a.n(Ce),Se=a(67),xe=a.n(Se),Qe=a(68),Be=a.n(Qe),Ge=["Goal","Setup","Turn","Answering","Guess","End Game"],Re=function(e){var t=e.ruleSet,a=w[t],n=4===a?de.a:pe.a;return r.a.createElement("div",{className:"rule"},r.a.createElement("p",null,"Discover your opponents ",a,"-digit code (number, color, position)"),r.a.createElement("div",{className:"rule-image"},r.a.createElement("img",{src:n,alt:"rule goal"})))},Ae=function(e){var t=e.ruleSet,a=w[t],n=4===a?be.a:ve.a;return r.a.createElement("div",{className:"rule"},r.a.createElement("p",null,"Each player will get a set of ",a," numbers.\xa0"),r.a.createElement("div",{className:"rule-image"},r.a.createElement("img",{src:n,alt:"rule setup"})),r.a.createElement("p",null,"Each code is always sorted by ascending order with black numbers coming before white numbers.",r.a.createElement("br",null),"Both 5's in the game are green.",r.a.createElement("br",null),"Take turns revealing each player code and take note while other players close their eyes."),r.a.createElement("div",{className:"rule-image"},r.a.createElement("img",{src:ye.a,alt:"rule setup"})))},He=function(){return r.a.createElement("div",{className:"rule"},r.a.createElement("p",null,"On your turn, you can do one of two options: Ask a question card or Guess the code."),r.a.createElement("div",{className:"rule-image"},r.a.createElement("img",{src:we.a,alt:"rule turn"})))},Ie=function(e){var t=e.ruleSet;return r.a.createElement("div",{className:"rule"},r.a.createElement("p",null,"Select an available question, ask it and then press confirm."),r.a.createElement("div",{className:"rule-image"},r.a.createElement("img",{src:ke.a,alt:"rule question"})),r.a.createElement("p",null,{2:"Your opponent must answer honestly.",3:"Both your opponents\xa0must answer honestly.",4:"Everybody (including you) must answer honestly."}[t]))},Le=function(){return r.a.createElement("div",{className:"rule"},r.a.createElement("p",null,"Here are some examples of how to answer."),r.a.createElement("div",{className:"rule-image"},r.a.createElement("img",{src:Oe.a,alt:"rule answer"})),r.a.createElement("p",null,'Example 1: "I have a 5 on C and a 5 on D"'),r.a.createElement("div",{className:"rule-image"},r.a.createElement("img",{src:We.a,alt:"rule answer"})),r.a.createElement("p",null,'Example 2: "I have a 1 on B" (if asked about number 1)'),r.a.createElement("div",{className:"rule-image"},r.a.createElement("img",{src:xe.a,alt:"rule answer"})),r.a.createElement("p",null,'Example 3: "A and B have the same color and D and E have the same color"'),r.a.createElement("div",{className:"rule-image"},r.a.createElement("img",{src:Be.a,alt:"rule answer"})),r.a.createElement("p",null,'Example 4: "A and B are consecutive and D and E are also consecutive"'))},Me=function(e){var t=e.ruleSet;return r.a.createElement("div",{className:"rule"},2===t?r.a.createElement("p",null,"Ask your opponent out loud! ",r.a.createElement("br",null),"If you are correct, your opponent has the chance to guess yours as well. If the opponent is also correct, the game ends on a tie, else, you win!"):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"rule-image"},r.a.createElement("img",{src:3===t?pe.a:de.a,alt:"rule question"})),r.a.createElement("p",null,r.a.createElement("b",null,"You can only guess once!")," ",r.a.createElement("br",null),"Announce that you are guessing, write down your guess. Everybody close their eyes and click on the center code to reveal it. After the window auto-closes, announce if you got it right or not. ",r.a.createElement("br",null),"If you got it, everybody else who hasn't had a turn this round can attempt to guess it too. ",r.a.createElement("br",null),"If you got it wrong, sit back and let other players continue the game. ",r.a.createElement("br",null),"You still have to answer any questions, but you are out of the game")))},Pe=function(e){return 2===e.ruleSet?r.a.createElement("div",{className:"rule"},r.a.createElement("p",null,"When one of you tries to guess the code the game ends."),r.a.createElement("p",null,"The game also ends when there are no question cards left. Each player may try guessing the code now.")):r.a.createElement("div",{className:"rule"},r.a.createElement("p",null,"When a player guessed and got the code right, whoever hasn't gone this round yet may make a final guess. Reveal the code and see who wins."),r.a.createElement("p",null,"The game also ends when there are no question cards left. Everybody can try one time guessing the code if they haven't done so yet."))},Te=function(){var e=W("game"),t=Object(s.a)(e,1)[0],a=W("screen"),l=Object(s.a)(a,2)[1],o=Object(n.useState)(t.playerCount),c=Object(s.a)(o,2),i=c[0],u=c[1],m=Object(n.useState)(0),d=Object(s.a)(m,2),h=d[0],p=d[1],b=function(e){return console.log(e),{Goal:r.a.createElement(Re,{ruleSet:e}),Setup:r.a.createElement(Ae,{ruleSet:e}),Turn:r.a.createElement(He,null),Question:r.a.createElement(Ie,{ruleSet:e}),Answering:r.a.createElement(Le,null),Guess:r.a.createElement(Me,{ruleSet:e}),"End Game":r.a.createElement(Pe,{ruleSet:e})}}(i)[Ge[h]];return r.a.createElement("div",{className:"rules"},r.a.createElement(P,null),r.a.createElement("div",{className:"content"},r.a.createElement(x.a,{color:"primary","aria-label":"outlined primary button group"},r.a.createElement(S.a,{className:"btn btn--group",onClick:function(){return u(2)}},"2 Player Rules"),r.a.createElement(S.a,{className:"btn btn--group",onClick:function(){return u(3)}},"3 Player Rules"),r.a.createElement(S.a,{className:"btn btn--group",onClick:function(){return u(4)}},"4 Player Rules")),r.a.createElement("h1",null,"Rules for ",i," players"),r.a.createElement(ce.a,{activeStep:h,alternativeLabel:!0},Ge.map((function(e){return r.a.createElement(ie.a,{key:e},r.a.createElement(ue.a,null,e))}))),r.a.createElement("div",{className:"rule-container"},b),h===Ge.length?r.a.createElement("div",{className:"action-buttons"},r.a.createElement("p",null,"Your done with the rules! Good Luck"),r.a.createElement(S.a,{onClick:function(){p(0)}},"Restart")):r.a.createElement("div",{className:"action-buttons"},r.a.createElement(S.a,{variant:"outlined",className:"btn btn--outline",disabled:0===h,onClick:function(){p((function(e){return e-1}))}},"Back"),r.a.createElement(S.a,{variant:"outlined",className:"btn btn--outline",onClick:function(){h===Ge.length-1?l(E):p((function(e){return e+1}))}},h===Ge.length-1?"Start Game":"Next"))))},_e=(U={},Object(c.a)(U,E,r.a.createElement(X,null)),Object(c.a)(U,p,r.a.createElement(se,null)),Object(c.a)(U,b,r.a.createElement(Te,null)),U),De=function(){var e=W("screen"),t=Object(s.a)(e,1)[0];return r.a.createElement(i.a,{maxWidth:"lg",className:"app-container"},_e[t])};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.f0f92b49.chunk.js.map