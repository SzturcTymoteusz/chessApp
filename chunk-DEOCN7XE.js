import{J as n,O as h,R as S,h as v,ha as T,ma as j,na as k,oa as y,qa as M,ta as z}from"./chunk-SMKUO2FG.js";var g=(()=>{let e=class e{get context(){return this._context}get canvas(){return this._canvas}get width(){return this.canvas.width}get height(){return this.canvas.height}setUpCanvas(s){let i=s.getContext("2d");this._canvas=s,i&&(this._context=i)}clearCanvas(){this.context.clearRect(0,0,this.width,this.height)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=n({token:e,factory:e.\u0275fac});let t=e;return t})();var d=function(t){return t.Vertical="vertical",t.Horizontal="horizontal",t}(d||{});var f=function(t){return t.Classic="classic",t.Glass="glass",t}(f||{});var B=(()=>{let e=class e{constructor(){this._themes={[f.Classic]:{lightSquareColor:"rgb(237, 238, 209)",darkSquareColor:"rgb(119, 152, 83)"},[f.Glass]:{lightSquareColor:"rgb(104, 113, 129)",darkSquareColor:"rgb(40, 47, 59)"}},this._currentTheme=new v(this._themes[f.Classic]),this.currentTheme$=this._currentTheme.asObservable()}get currentTheme(){return this._currentTheme.getValue()}set currentTheme(s){this._currentTheme.next(this._themes[s])}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=n({token:e,factory:e.\u0275fac});let t=e;return t})();var C=(()=>{let e=class e{constructor(){this.verticalCoordinates=["1","2","3","4","5","6","7","8"],this.horizontalCoordinates=["a","b","c","d","e","f","g","h"],this._isWhiteOnBottom=new v(!1),this.isWhiteOnBottom$=this._isWhiteOnBottom.asObservable()}get isWhiteOnBottom(){return this._isWhiteOnBottom.getValue()}set isWhiteOnBottom(s){this._isWhiteOnBottom.next(s)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=n({token:e,factory:e.\u0275fac});let t=e;return t})();var w=(()=>{let e=class e{constructor(s){this.chessBoardConfig=s}getCoordinatesOrder(s){return s===d.Horizontal?this.chessBoardConfig.isWhiteOnBottom?[...this.chessBoardConfig.horizontalCoordinates]:[...this.chessBoardConfig.horizontalCoordinates].reverse():this.chessBoardConfig.isWhiteOnBottom?[...this.chessBoardConfig.verticalCoordinates].reverse():[...this.chessBoardConfig.verticalCoordinates]}};e.\u0275fac=function(i){return new(i||e)(h(C))},e.\u0275prov=n({token:e,factory:e.\u0275fac});let t=e;return t})();var I=(()=>{let e=class e{constructor(s,i,r){this.chessBoardCanvas=s,this.chessBoardThemes=i,this.coordinatesHelper=r,this.getVerticalCoordinateDrawConfig=c=>{let o=this.chessBoardCanvas.width/8;return{textBaseline:"top",textAlign:"left",startPointX:c.horizontal*o+o/16,startPointY:c.vertical*o+o/16}},this.getHorizontalCoordinateDrawConfig=c=>{let o=this.chessBoardCanvas.width/8;return{textBaseline:"alphabetic",textAlign:"right",startPointX:c.horizontal*o+o-o/16,startPointY:c.vertical*o+o-o/16}}}execute(){this.verticalCoordinates=this.coordinatesHelper.getCoordinatesOrder(d.Vertical),this.horizontalCoordinates=this.coordinatesHelper.getCoordinatesOrder(d.Horizontal),this.verticalCoordinates.forEach(s=>{this.horizontalCoordinates.forEach(i=>{this.drawSquare({vertical:s,horizontal:i}),this.drawCoordinates({vertical:s,horizontal:i})})})}drawSquare({vertical:s,horizontal:i}){let r=this.chessBoardThemes.currentTheme,c=this.getCoordinatesIndex({vertical:s,horizontal:i}),m=this.isDarkSquare(c.sum)?r.lightSquareColor:r.darkSquareColor,o=this.chessBoardCanvas.context,u=this.chessBoardCanvas.width/8;o.fillStyle=m,o.textBaseline="top",o.fillRect(c.horizontal*u,c.vertical*u,u,u)}isDarkSquare(s){return s%2===0}drawCoordinates({vertical:s,horizontal:i}){let r=this.getCoordinatesIndex({vertical:s,horizontal:i}),c=r.horizontal===0,m=r.vertical===7;c&&this.drawBoardCoordinates(s,r,this.getVerticalCoordinateDrawConfig),m&&this.drawBoardCoordinates(i,r,this.getHorizontalCoordinateDrawConfig)}drawBoardCoordinates(s,i,r){let{textBaseline:c,textAlign:m,startPointX:o,startPointY:p}=r(i),u=this.chessBoardThemes.currentTheme,b=this.chessBoardCanvas.context,E=this.chessBoardCanvas.width,F=this.isDarkSquare(i.sum)?u.darkSquareColor:u.lightSquareColor,G=E/8/4.5;b.font=`bold ${G}px Arial`,b.fillStyle=F,b.textBaseline=c,b.textAlign=m,b.fillText(s,o,p)}getCoordinatesIndex({vertical:s,horizontal:i}){let r=this.verticalCoordinates.indexOf(s),c=this.horizontalCoordinates.indexOf(i),m=r+c;return{vertical:r,horizontal:c,sum:m}}};e.\u0275fac=function(i){return new(i||e)(h(g),h(B),h(w))},e.\u0275prov=n({token:e,factory:e.\u0275fac});let t=e;return t})();var q=(()=>{let e=class e{constructor(s,i){this.chessBoardCanvas=s,this.drawChessBoard=i}execute(s){this.chessBoardCanvas.setUpCanvas(s),this.chessBoardCanvas.clearCanvas(),this.drawChessBoard.execute()}};e.\u0275fac=function(i){return new(i||e)(h(g),h(I))},e.\u0275prov=n({token:e,factory:e.\u0275fac});let t=e;return t})();var x=function(t){return t.Classic="classic",t.Metal="metal",t}(x||{});var a=function(t){return t.R="R",t.N="N",t.B="B",t.Q="Q",t.K="K",t.P="P",t.r="r",t.n="n",t.b="b",t.q="q",t.k="k",t.p="p",t}(a||{});var _=(()=>{let e=class e{constructor(){this._themes={[x.Classic]:{[a.R]:"assets/chess-pieces-themes/classic/classic_piece_r_light.svg",[a.N]:"assets/chess-pieces-themes/classic/classic_piece_n_light.svg",[a.B]:"assets/chess-pieces-themes/classic/classic_piece_b_light.svg",[a.Q]:"assets/chess-pieces-themes/classic/classic_piece_q_light.svg",[a.K]:"assets/chess-pieces-themes/classic/classic_piece_k_light.svg",[a.P]:"assets/chess-pieces-themes/classic/classic_piece_p_light.svg",[a.r]:"assets/chess-pieces-themes/classic/classic_piece_r_dark.svg",[a.n]:"assets/chess-pieces-themes/classic/classic_piece_n_dark.svg",[a.b]:"assets/chess-pieces-themes/classic/classic_piece_b_dark.svg",[a.q]:"assets/chess-pieces-themes/classic/classic_piece_q_dark.svg",[a.k]:"assets/chess-pieces-themes/classic/classic_piece_k_dark.svg",[a.p]:"assets/chess-pieces-themes/classic/classic_piece_p_dark.svg"},[x.Metal]:{[a.R]:"assets/chess-pieces-themes/metal/metal_piece_r_light.png",[a.N]:"assets/chess-pieces-themes/metal/metal_piece_n_light.png",[a.B]:"assets/chess-pieces-themes/metal/metal_piece_b_light.png",[a.Q]:"assets/chess-pieces-themes/metal/metal_piece_q_light.png",[a.K]:"assets/chess-pieces-themes/metal/metal_piece_k_light.png",[a.P]:"assets/chess-pieces-themes/metal/metal_piece_p_light.png",[a.r]:"assets/chess-pieces-themes/metal/metal_piece_r_dark.png",[a.n]:"assets/chess-pieces-themes/metal/metal_piece_n_dark.png",[a.b]:"assets/chess-pieces-themes/metal/metal_piece_b_dark.png",[a.q]:"assets/chess-pieces-themes/metal/metal_piece_q_dark.png",[a.k]:"assets/chess-pieces-themes/metal/metal_piece_k_dark.png",[a.p]:"assets/chess-pieces-themes/metal/metal_piece_p_dark.png"}},this._currentTheme=new v(this._themes[f.Classic]),this.currentTheme$=this._currentTheme.asObservable()}get currentTheme(){return this._currentTheme.getValue()}set currentTheme(s){this._currentTheme.next(this._themes[s])}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=n({token:e,factory:e.\u0275fac});let t=e;return t})();var O=(()=>{let e=class e{constructor(s){this.chessBoardConfig=s}getPiecesRow(s,i){let r=s.split(" ")[0];return this.chessBoardConfig.isWhiteOnBottom||(r=r.split("").reverse().join("")),r.split("/")[i].split("").reduce((o,p)=>!isNaN(Number(p))?[...o,...Array(Number(p)).fill(null)]:[...o,p],[])}};e.\u0275fac=function(i){return new(i||e)(h(C))},e.\u0275prov=n({token:e,factory:e.\u0275fac});let t=e;return t})();var P=(()=>{let e=class e{constructor(s,i,r,c){this.chessBoardCanvas=s,this.chessPiecesTheme=i,this.coordinatesHelper=r,this.fenStringHelper=c}execute(s){this.verticalCoordinates=this.coordinatesHelper.getCoordinatesOrder(d.Vertical),this.horizontalCoordinates=this.coordinatesHelper.getCoordinatesOrder(d.Horizontal),this.verticalCoordinates.forEach((i,r)=>{let c=this.fenStringHelper.getPiecesRow(s,r);this.horizontalCoordinates.forEach((m,o)=>{let p=c[o];p&&this.drawPiece(p,{vertical:r,horizontal:o})})})}drawPiece(s,{vertical:i,horizontal:r}){let m=this.chessBoardCanvas.width/8,o=new Image(m,m);o.onload=()=>{this.chessBoardCanvas.context.drawImage(o,r*m,i*m,m,m)},o.src=this.chessPiecesTheme.currentTheme[s]}};e.\u0275fac=function(i){return new(i||e)(h(g),h(_),h(w),h(O))},e.\u0275prov=n({token:e,factory:e.\u0275fac});let t=e;return t})();var H=(()=>{let e=class e{constructor(s,i,r){this.chessBoardConfig=s,this.chessPiecesTheme=i,this.chessBoardThemes=r}execute(s){this.chessBoardConfig.isWhiteOnBottom=s.isWhiteOnBottom,this.chessPiecesTheme.currentTheme=s.chessPiecesTheme,this.chessBoardThemes.currentTheme=s.chessBoardTheme}};e.\u0275fac=function(i){return new(i||e)(h(C),h(_),h(B))},e.\u0275prov=n({token:e,factory:e.\u0275fac});let t=e;return t})();var N=(()=>{let e=class e{constructor(s,i,r){this.setUpAccount=s,this.initializeCanvasView=i,this.initializeChessGame=r,this.initialFenString="rnbq4/ppp1k1pp/3b4/3ppp2/2PPPPP1/5N2/PP5P/RNBQKB1R b KQ c3 0 6"}ngOnInit(){this.setUpAccount.execute({isWhiteOnBottom:!0,chessPiecesTheme:x.Metal,chessBoardTheme:f.Glass})}ngAfterViewInit(){let s=document.getElementById("chess-board-canvas");this.initializeCanvasView.execute(s),this.initializeChessGame.execute(this.initialFenString)}};e.\u0275fac=function(i){return new(i||e)(T(H),T(q),T(P))},e.\u0275cmp=S({type:e,selectors:[["ca-chess-board"]],standalone:!0,features:[M([g,q,I,C,P,O,w,H,_,B]),z],decls:2,vars:0,consts:[[1,"canvas-container"],["id","chess-board-canvas","width","600","height","600"]],template:function(i,r){i&1&&(j(0,"div",0),y(1,"canvas",1),k())},styles:[".canvas-container[_ngcontent-%COMP%]{width:100%;height:100%}.canvas-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%;height:100%}"]});let t=e;return t})();var Te=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=S({type:e,selectors:[["app-game"]],standalone:!0,features:[z],decls:3,vars:0,consts:[[1,"game-screen"],[1,"chess-board-container"]],template:function(i,r){i&1&&(j(0,"div",0)(1,"div",1),y(2,"ca-chess-board"),k()())},dependencies:[N],styles:[".game-screen[_ngcontent-%COMP%]{width:100%;height:100%;min-height:100vh;display:flex;align-items:center;justify-content:center}.game-screen[_ngcontent-%COMP%]   .chess-board-container[_ngcontent-%COMP%]{width:600px;height:600px}"]});let t=e;return t})();export{Te as GameComponent};
