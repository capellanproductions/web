(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6633FF").s().p("AuDOEIAA8HIcHAAIAAcHg");
	this.shape.setTransform(90,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(0,0,180,180), null);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AuDOEIAA8HIcHAAIAAcHg");
	this.shape.setTransform(90,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(0,0,180,180), null);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.numero = new cjs.Text("", "bold 96px 'Arial Black'", "#FFFFFF");
	this.numero.name = "numero";
	this.numero.textAlign = "center";
	this.numero.lineHeight = 137;
	this.numero.lineWidth = 157;
	this.numero.parent = this;
	this.numero.setTransform(88.9,22.55);

	this.timeline.addTween(cjs.Tween.get(this.numero).wait(1));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AuDOEIAA8HIcHAAIAAcHg");
	this.shape.setTransform(90,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,180,180), null);


(lib.Símbolo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.foto = new lib.Símbolo5();
	this.foto.name = "foto";
	this.foto.setTransform(90,90,1,1,0,0,0,90,90);

	this.timeline.addTween(cjs.Tween.get(this.foto).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,180,180), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.tapa2.addEventListener("click", fl_ClickToShowImageInModala1);
		
		function fl_ClickToShowImageInModala1() {
		
			this.play();
		}
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Capa_4
	this.tapa2 = new lib.Símbolo6();
	this.tapa2.name = "tapa2";
	this.tapa2.setTransform(90,90,1,1,0,0,0,90,90);

	this.timeline.addTween(cjs.Tween.get(this.tapa2).to({_off:true},1).wait(39));

	// Capa_2
	this.tapa = new lib.Símbolo3();
	this.tapa.name = "tapa";
	this.tapa.setTransform(90,90,1,1,0,0,0,90,90);

	this.timeline.addTween(cjs.Tween.get(this.tapa).to({regX:91,scaleX:0.0011},8).to({alpha:0},1).wait(19).to({alpha:1},1).to({regX:90,scaleX:1},10).wait(1));

	// Capa_1
	this.foto = new lib.Símbolo4();
	this.foto.name = "foto";
	this.foto.setTransform(90,90,1,1,0,0,0,90,90);
	this.foto.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.foto).wait(8).to({regX:97.4,scaleX:0.0015,x:90.05,alpha:1},1).to({regX:90,scaleX:1,x:90},10).to({regX:97.4,scaleX:0.0015,x:90.05},9).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,180);


// stage content:
(lib.juegodememoriatv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/////////////fotos a//////
		var randomNumber = Math.random(); // Generar un número aleatorio único
		////a
		var afoto1 = new createjs.Bitmap("data/a1.jpg?" + randomNumber);
		var afoto2 = new createjs.Bitmap("data/a2.jpg?" + randomNumber);
		var afoto3 = new createjs.Bitmap("data/a3.jpg?" + randomNumber);
		
		
		exportRoot.op1.foto.foto.addChild(afoto1);
		exportRoot.op2.foto.foto.addChild(afoto2);
		exportRoot.op3.foto.foto.addChild(afoto3);
		
		
		/////////////fotos b//////
		var randomNumber = Math.random(); // Generar un número aleatorio único
		////a
		var bfoto1 = new createjs.Bitmap("data/b1.jpg?" + randomNumber);
		var bfoto2 = new createjs.Bitmap("data/b2.jpg?" + randomNumber);
		var bfoto3 = new createjs.Bitmap("data/b3.jpg?" + randomNumber);
		
		
		exportRoot.op4.foto.foto.addChild(bfoto1);
		exportRoot.op5.foto.foto.addChild(bfoto2);
		exportRoot.op6.foto.foto.addChild(bfoto3);
		
		
		/////////////fotos c//////
		var randomNumber = Math.random(); // Generar un número aleatorio único
		////a
		var cfoto1 = new createjs.Bitmap("data/c1.jpg?" + randomNumber);
		var cfoto2 = new createjs.Bitmap("data/c2.jpg?" + randomNumber);
		var cfoto3 = new createjs.Bitmap("data/c3.jpg?" + randomNumber);
		
		
		exportRoot.op7.foto.foto.addChild(cfoto1);
		exportRoot.op8.foto.foto.addChild(cfoto2);
		exportRoot.op9.foto.foto.addChild(cfoto3);
		
		
		/////////////fotos d//////
		var randomNumber = Math.random(); // Generar un número aleatorio único
		////a
		var dfoto1 = new createjs.Bitmap("data/d1.jpg?" + randomNumber);
		var dfoto2 = new createjs.Bitmap("data/d2.jpg?" + randomNumber);
		var dfoto3 = new createjs.Bitmap("data/d3.jpg?" + randomNumber);
		
		
		exportRoot.op10.foto.foto.addChild(dfoto1);
		exportRoot.op11.foto.foto.addChild(dfoto2);
		exportRoot.op12.foto.foto.addChild(dfoto3);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.op12 = new lib.Símbolo2();
	this.op12.name = "op12";
	this.op12.setTransform(1145.05,513.15,1,1,0,0,0,90,90);

	this.op11 = new lib.Símbolo2();
	this.op11.name = "op11";
	this.op11.setTransform(957.35,513.15,1,1,0,0,0,90,90);

	this.op10 = new lib.Símbolo2();
	this.op10.name = "op10";
	this.op10.setTransform(769.65,513.15,1,1,0,0,0,90,90);

	this.op9 = new lib.Símbolo2();
	this.op9.name = "op9";
	this.op9.setTransform(581.95,513.15,1,1,0,0,0,90,90);

	this.op8 = new lib.Símbolo2();
	this.op8.name = "op8";
	this.op8.setTransform(1145.05,324.75,1,1,0,0,0,90,90);

	this.op7 = new lib.Símbolo2();
	this.op7.name = "op7";
	this.op7.setTransform(957.35,324.75,1,1,0,0,0,90,90);

	this.op6 = new lib.Símbolo2();
	this.op6.name = "op6";
	this.op6.setTransform(769.65,324.75,1,1,0,0,0,90,90);

	this.op5 = new lib.Símbolo2();
	this.op5.name = "op5";
	this.op5.setTransform(581.95,324.75,1,1,0,0,0,90,90);

	this.op4 = new lib.Símbolo2();
	this.op4.name = "op4";
	this.op4.setTransform(1145.05,137.05,1,1,0,0,0,90,90);

	this.op3 = new lib.Símbolo2();
	this.op3.name = "op3";
	this.op3.setTransform(957.35,137.05,1,1,0,0,0,90,90);

	this.op2 = new lib.Símbolo2();
	this.op2.name = "op2";
	this.op2.setTransform(769.65,137.05,1,1,0,0,0,90,90);

	this.op1 = new lib.Símbolo2();
	this.op1.name = "op1";
	this.op1.setTransform(581.95,137.05,1,1,0,0,0,90,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.op1},{t:this.op2},{t:this.op3},{t:this.op4},{t:this.op5},{t:this.op6},{t:this.op7},{t:this.op8},{t:this.op9},{t:this.op10},{t:this.op11},{t:this.op12}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1132,407.1,103.09999999999991,196.10000000000002);
// library properties:
lib.properties = {
	id: 'F517E0EE69A14149B5BDBF2A2B6BBB07',
	width: 1280,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F517E0EE69A14149B5BDBF2A2B6BBB07'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;