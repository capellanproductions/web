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


(lib.Símbolo44 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("APPStQn7lGsPgzIgKAAIiWAAIgKAAIhGAAIgKAAIhQAAIgBAFQgnAFgoAAIgKAAQlhAwlbA0QAAgFgCAAQhygnAGicQBoiSDrgZQDZgXDqgQIAAgKIBGAAIAKAAIBaAAIAKAAIAAgKIBaAAIAKAAQBLAABKAFIABAFQNaAkIcFeQAwAgANA+QARAcgMAzQAAABgFAAIgBAJQgbBsh6ANQgFAAgEgDgAUOH+IhGAAQhFgag5gjQo1lNtGg4IgKAAIleAAQjhAPjKAxQi5AsjaAWQAAgFgCAAQhDgVgpgsQAAgFgCgEQgNgfgPgeIAAgKIAAhPQBOi1DxgdQCQgQCSgdQCLgbCsACIAAgKIBkAAIAKAAIDmAAIAKAAQA8AAA7AFIABAFQNIA2JJEuQCJBGBoBhQAaAXAHArQARAcgMAzQAAABgFAAQAAAFgCAEQgmBvhuAoIgKAAgAYfkcQiygoiWhLQpbkqtdggIgKAAQhEAIgqgSIgKAAIiqAAIgBAFQhAAFhBAAQnCAKlhBkQkTBPhSjbIAAgKIAAhkQBzjrFXgYQBEgFBTgMQDeghD5gLIAAgKIBGAAIAKAAIGuAAIAKAAQAoAAAnAFIABAFQHnAWGUBjQFvBaE8B9QD1BiCCDOQATDWiUAxQgbAJgeAAQgdAAgggHg");
	this.shape.setTransform(261.6132,258);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF00E9","#660099"],[0,1],-256,0,256,0).s().p("EAC0AoAIkrAAIAAgFQgogFgoAAQoHgul4i4QpakpmCoBQl/n9hUsrIABgKQAGgwgRgWIAAgKIAAjlQBPswF2oIQF3oKJOkyQGLjLIjg1QAoAAAogFIAAgFIErAAIAKAAQMdBjICF8QIDF8EqJXQC9F8AvIKQAAAtAFAtIAFAAIAADRIAAAKIgKAAIAABQIAAAKQgsIJi5F2QkqJaoBGCQn9F/srBUIAAAKIgKAAgAn9NIIAKAAIBGAAIAKAAICWAAIAKAAQMQAzH7FGQADADAFAAQB7gNAahsIABgJQAFAAABgBQAMgzgSgcQgNg+gwggQocletagkIAAgFQhLgFhLAAIgKAAIhaAAIAAAKIgKAAIhaAAIgKAAIhGAAIAAAKQjqAQjZAXQjqAZhpCSQgGCcByAnQACAAAAAFQFcg0FggwIAKAAQAoAAAngFIABgFIBQAAgAkDBQIAKAAQNGA4I1FNQA5AjBFAaIBGAAIAKAAQBugoAnhvQABgEAAgFQAFAAAAgBQAMgzgRgcQgHgrgagXQhohhiJhGQpJkutIg2IAAgFQg8gFg8AAIgKAAIjmAAIgKAAIhkAAIAAAKQisgCiLAbQiRAdiRAQQjwAdhPC1IAABPIAAAKQAPAeANAfQACAEAAAFQApAsBEAVQABAAAAAFQDbgWC5gsQDJgxDhgPIFeAAgAUPl7QCWBLCyAoQBDAQAzgSQCVgxgUjWQiBjOj2hiQk8h9lvhaQmThjnogWIgBgFQgngFgoAAIgKAAImuAAIgKAAIhGAAIAAAKQj5ALjeAhQhTAMhEAFQlXAYhzDrIAABkIAAAKQBSDbEThPQFhhkHCgKQBBAABBgFIAAgFICqAAIAKAAQAqASBEgIIAKAAQNdAgJbEqg");
	this.shape_1.setTransform(256,256);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo44, new cjs.Rectangle(0,0,512,512), null);


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
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ao/Q5IgIAAQjngdgmjgIgEAAQgEgtAAgsIAIAAIAAgJIAAgQQA5jtEFggIAIAAIAAgIQAxAAAxAEIAAAEQBmAMBMAoQACABAAAEQAOphgGp3IAAgIQG/kMJ+hLIAIAAQAOLMgKLgQAAAEgEAEIAAAIQgGGGlxAbQAAABAAABQAAAAgBABQAAAAAAABQAAAAAAAAQg7AKgmgOIgJgBQkegkARlTQBHjfEAgmIAIAAIAAgIQAwAAAxAEIABAEQBhAJBDAmQADACAEAAQAOmFgGmaIAAgIIgIAAIg5AAIgIAAQmpBFk9CwIAAPjIAAAIIAAAIQAGAqgOAXIgBAIQgmFJlZAWQAAACAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgUAEgRAAQgZAAgTgJg");
	this.shape.setTransform(199.6333,209.4041);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF00E9","#660099"],[0,1],-209,0,209,0).s().p("EACCAgqIkMAAQm6gwlJimQnjjyk3mjQk3mkhLqRIAAgIIAAjSQAPgTgHgnIAAgIIAAgIIAAhSQBjp5FBmXQFDmaH1jhQEwiIGLgqIEMAAIAJAAQKQBLGkE3QGjE3DzHjQClFJAwG6IAAEMIAAAIQguG5igFGQjxHpmiE7QmgE5qeA7IAAAJIgJAAgAu2NAIAEAAQAmDgDnAdIAIAAQAgAPAxgKQABAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgCQFZgVAnlKIAAgIQAOgWgGgrIAAgIIAAgIIAAvjQE9iwGphEIAIgBIA6AAIAIAAIAAAIQAFGagNGFQgFAAgDgCQhDgmhhgJIAAgEQgxgEgxAAIAAAIIgIABQj/AlhHDgQgRFSEeAlIAIAAQAmAOA7gKQAAAAAAAAQABAAAAgBQAAgBAAAAQAAgBAAgBQFxgbAGmGIAAgIQAEgDABgEQAJrggOrNIgIAAQp+BMm+ELIAAAIQAFJ3gOJhQAAgEgCgBQhMgohlgMIgBgEQgxgEgwAAIAAAIIgIABQkGAfg5DuIAAAPIAAAJIgIAAQAAAsAEAtg");
	this.shape_1.setTransform(209,209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(0,0,418,418), null);


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
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvQSaQgfgdgJgnQhOlTAXmsIAAgKIAAhQIAKAAQgJjqCFhZQAxghA6gEQKMgzK4gBQEHAACaBiQBFAsAPBUQBCFwgIG2QgFDlh5BpQg9A2hdAEQqNAiqjAJIgSAAQkeAAiNiCgAIGG7IAAAeIAAAKIAAGGIAAAKIAAAKQATB+BvAiIAKAAIBkAAQAAgFABAAQA/gQAkgnQAAgFACgDQArhIgFh4IgBgFQhBgFhAAAIgFAAQAYCLhjALQgFAAgCgCQgyhRARiTIAKAAIDwAAIAAgKQAPjDg3h9QgXgRgcgLQg9gXgzAAQh0AAg9B5gAC5PkQA1BHBugiQAfgTAHghQA6kkgukoQgFAAgBgBQgPg1g7gGIAAgFQhfgEgtAxIAAAFQgSiEAIijIgKAAIh4AAIAAAKIAAOsIAKABQBqAUAYg9QAFAAACADgAnNFXIAAJ2QAFAAAAACQAOAsAfAYIAKAAQCCAFAohVIAFAAQgMBhBrgbQAPAAAAgBQAgk8gHlXIgBgKQgLgwhOASQgPAAAAACQghD2AIEQQAAAFgCAEQgSAlgoAOQgUAAgBgCQglkTAIkvIgKAAIh4AAIAAAKgAsIDgQAPGFAAGGQAAAFACADQAiAkBUgOQAKAAAAgBQAbkjgQk9QgGh9AjhMIAJABQCSAjgZiIQAAgPgCgBQjTgfjtAHIAAAKIAABkQAAAFACADQAiAkBUgOIAIAAIAHABgAk3laIgKAAQhrghgNh/IAAgKIgFAAQgFjNAAjNIAKAAIAAgKIAAgeQAihQBfgYQABgBAAgFIBkAAIAKAAQBgAdAcBkQABABAFAAIAAHMIAAAKQgQAcgNAhQgBAEAAAFQgjAjg2AUQgBAAAAAFIh4AAgAk3ueIAAAKIAAGQIAAAKQAHAwA/gIQAPgKADgMQAdh+AIiXQAKiyhOAAQgYAAghARgAERmqIgFAAQg3BRhfgKIgKgBQg+gIgDhIIgFAAIAApiIAAgKIB4AAIAKAAQgIEqAdEPQACANAbgCQAlgSAVghQACgEAAgFQgIkQAhj2QAAgCAPAAQBOgSALAwIABAKQAHFXggE8QAAABgPAAQgWAFgQAAQhBAAAIhLgAr3l6QgCgDAAgFQAUkihAjRQhAjQg+jVICMAAIAKAAQAqC8AvC3IABAJQA3i+A7i8QABgCAFAAQBhgHAUAUQADACAAAFQhdEVg0EyQgPBcAJBeQAMB1gzAsQgXAEgSAAQg0AAgZgag");
	this.shape.setTransform(210.2454,209.6633);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF00E9","#660099"],[0,1],-100.5,-190.2,100.1,178.5).s().p("AKXPnIgKAAQhugjgTh9IgBgKIAAgKIAAmGIAAgKIAAgeQBZiwDJBOQAcAKAWASQA4B8gPDEIgBAKIjwAAIgKAAQgRCTAzBQQABADAFAAQBjgLgYiLIAFAAQBBAABBAFIAAAFQAGB4gsBHQgCAEAAAFQgjAnhAAPQgBABAAAFIhkAAgAMFHzQgBibh3BBIgBAJQgeB6BbgBQA9AOgBg2gAC+OtQgCgCgFAAQgYA9hqgUIgKgBIAAusIAAgKIB4AAIAKAAQgHCiARCFIAAgFQAugxBeAEIAAAFQA7AGAQA0QAAACAFAAQAvEng6EkQgHAiggATQgjALgeAAQg+AAgkgxgACtGZIAAAKIAAGQIABAKQAIAuAzAEQAcACADgOQAah+ANiXQAPi/hgAAQgWAAgbAKgAmMPdIgKAAQgfgYgNgtQgBgBgFAAIAAp2IAAgKIB4AAIAKAAQgHEuAlETQAAADAUAAQApgPARgkQACgEAAgFQgHkRAgj1QABgDAOABQBPgTAKAxIABAKQAIFWggE8QAAABgQABQhqAaALhgIgFAAQgmBQh2AAIgOAAgArxO8QgDgCAAgFQAAmGgOmGQAAgBgQABQhUAOghglQgDgCAAgFIAAhkIAAgKQDugIDSAgQADAAgBAQQAZCHiRgiIgKgBQgjBLAHB9QAQE9gcEkQAAABgKAAQgXAEgUAAQgyAAgYgbgAkxowIgBgKIAAmQIAAgKQCLhKgNDrQgJCXgdB9QgCANgQAKIgRABQgvAAgFgpg");
	this.shape_1.setTransform(209.6846,215.1139);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF00E9","#660099"],[0,1],-209.4,0,209.4,0).s().p("EgAhAgqQmmgIkth9QopjnlhmtQmUnqgbtiQASgcgIg0IAAgKIAAgKIAAhaQCDr8G5nGQG5nGLriRQCEgZCeACIBFAAIAKAAQNKA1HbGjQFkE6DYHLQDdHYhWKeQgyGCigElQk7JBpFE5QlzDIojAXIgKAAIgjAAIgiAAgAwnFUIAAAKQgXGrBOFTQAJAoAfAcQCSCHErgEQKjgJKNgiQBdgFA9g1QB5hpAFjlQAIm2hClxQgPhUhFgsQiahikHABQq4ABqMAyQg6AFgxAhQiFBZAJDqIgKAAIAABQgAm2n9IAFAAIAAAKQANB+BrAiIAKAAIB4AAQAAgFABgBQA2gTAjgjQAAgFABgFQANggAQgcIAAgKIAAnMQgFAAgBgCQgchkhggcIgKAAIhkAAQAAAFgBAAQhfAYgiBRIAAAeIAAAKIgKAAQAADNAFDNgAEZmjQgJBeBogYQAPgBAAgBQAgk8gHlWIgBgKQgLgxhOATQgPgBAAADQghD1AIERQAAAFgCADQgVAiglASQgbACgCgOQgdkPAIkpIgKAAIh4AAIAAAKIAAJiIAFAAQADBHA+AJIAKAAQBfAKA3hQgAsdtuQBADQgUEjQAAAFACACQAjAkBTgNQAzgsgMh1QgJheAPhdQA0kxBdkVQAAgFgDgDQgUgThhAHQgFAAgBABQg7C9g3C+IgBgKQgvi3gqi7IgKAAIiMAAQA+DVBADQg");
	this.shape_2.setTransform(209.4147,209.0052);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(0,0,418.9,418), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("ABoCUQh5gQg4AFQh7ARhGABQiAABgvg5IgKgNQgng7AqgzQAngxBHgDQANAAAuACQAmACAVgDQAfgGAegWQApgeANgGQA1gbArAOQAXAIBAAuQA9ArApARQAwAUBBADQBDAEAkAJQBGASAFAqQAFAohPAdQguAQhDAKQgbAEgiAAQgzAAhEgJg");
	this.shape.setTransform(522.1708,128.5196,1.3626,1.3626);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("ApFCRQg0gYgUgmIgDgHQgchBBFgjQA3geBEAEIBRAEQAuABAigKQAkgLA2giQA+gnAbgLQBLggBhAhQBHAYBXA9QBIAyBXATQA4ANB0AIQBDAFAuAVQBFAfgpA1QgZAehIgDQhQgKgbgCIhOgIQgvgGgeAFIhIAMQgqAHggAAQgfAAhogEQhTgDg0ACQjnALiDAAQgwgBgugVg");
	this.shape_1.setTransform(457.9152,22.6836,1.3626,1.3626);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33FFFF").s().p("AqvEgQhagFhfggQh5gpglhBQgjg/A0hPQAlg2BSgkQBJggBLgGQAqgCBpAQQBdAOA4gKQBFgNB+hOQB7hKBHgKQCUgVCuA/QCqA+BuBuQAeAeA2A4QAxAsA3APQAlAKBOAGQBNAFAnAMQA2AQAUAYQAbAhgpAsQgYAag5AEIhZAAQhEAAiGgEQiHgEhDAAQgaAAioAIQhwAFhRgJQh7gTg/gJQhxgPhMAIQgxAGiIAkQhmAchGAAIgOAAg");
	this.shape_2.setTransform(142.3742,153.3208,1.3626,1.3626);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,586.4,192.6), null);


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

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7800A1").s().p("AgRAWIAAgqIAjAAIAAAqg");
	this.shape.setTransform(517.9,215.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7800A1").s().p("AAmBXIAAhfIgBgWQgBgKgDgGQgEgGgGgEQgGgDgLAAQgJABgMAFQgLAGgLAJIAAB9IgcAAIAAioIAcAAIAAATQANgMAMgFQAMgHAOAAQAZAAAOARQAOAQAAAfIAABtg");
	this.shape_1.setTransform(504.6,208.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7800A1").s().p("AgNByIAAipIAbAAIAACpgAgPhTIAAgdIAfAAIAAAdg");
	this.shape_2.setTransform(492.325,206.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7800A1").s().p("ABSBXIAAhhIgBgWQgBgKgDgFQgDgGgGgDQgFgCgKgBQgIABgKAFQgLAFgKAKIAAAGIAAAJIAABuIgbAAIAAhhIgBgWQgBgKgDgFQgDgGgGgDQgFgCgKgBQgJABgKAFQgKAGgKAJIAAB9IgcAAIAAioIAcAAIAAATQALgMAMgFQAKgHAOAAQAPAAALAHQALAHAGAPQANgOAMgHQAMgIAPAAQAKAAAJADQAJAEAHAIQAHAHAEAMQADAMAAARIAABug");
	this.shape_3.setTransform(475.825,208.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7800A1").s().p("AgjBVQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgRAHgNQAHgLAQgHQAPgHATgCIApgEIAAgFQAAgKgDgGQgDgHgGgDQgFgEgIgBIgPgBQgKAAgNADQgOADgNAGIgCAAIAAgdIAXgFQAPgDAOAAQAQAAAMADQAMADAKAHQAJAHAFALQAEALAAAQIAAByIgcAAIAAgSIgJAIIgMAHQgHAEgHACQgGACgNAAQgLAAgJgEgAANgBQgOABgKADQgLADgIAHQgHAIAAAMQAAAPAIAHQAIAIAQAAQAMAAALgGQALgGAKgIIAAguIgaACg");
	this.shape_4.setTransform(454.125,209.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7800A1").s().p("AgsB0IAehHIg9igIAeAAIAuB8IAuh8IAdAAIhaDng");
	this.shape_5.setTransform(439.375,212.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7800A1").s().p("AgjBVQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgRAHgNQAHgLAQgHQAPgHATgCIApgEIAAgFQAAgKgDgGQgDgHgGgDQgFgEgIgBIgPgBQgKAAgNADQgOADgNAGIgCAAIAAgdIAXgFQAPgDAOAAQAQAAAMADQAMADAKAHQAJAHAFALQAEALAAAQIAAByIgcAAIAAgSIgJAIIgMAHQgHAEgHACQgGACgNAAQgLAAgJgEgAANgBQgOABgKADQgLADgIAHQgHAIAAAMQAAAPAIAHQAIAIAQAAQAMAAALgGQALgGAKgIIAAguIgaACg");
	this.shape_6.setTransform(423.225,209.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7800A1").s().p("AhGBxIAAjhIA4AAQAUAAANAEQAOADAMAHQAMAJAHANQAHAOAAASQAAAPgFANQgGANgIAIQgMAMgQAGQgQAGgXAAIgZAAIAABUgAgoADIAVAAQARAAALgDQALgCAHgHQAHgHADgIQADgIAAgLQAAgMgEgIQgEgJgIgFQgHgFgJgCQgKgCgOAAIgYAAg");
	this.shape_7.setTransform(408.65,206.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7800A1").s().p("AgyBCQgWgXAAgpQAAgpAVgYQAWgZAiAAQAQAAAMAFQAMAEAJAKQAKAJAEAPQAFANAAAVIAAAOIh0AAQAAAeAPAPQAPAQAYAAQAKAAAJgCQAJgCAIgEIAMgGIAJgGIACAAIAAAeIgNAGIgNAEIgPAEQgHABgKAAQgnAAgXgXgAgPg9QgHAEgHAGQgGAHgEAIQgDAIgBALIBZAAQgBgMgCgIQgDgJgEgGQgGgFgHgEQgIgDgMAAQgKAAgIADg");
	this.shape_8.setTransform(381.45,209.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7800A1").s().p("AghBzQgMgHgIgKQgIgMgEgQQgFgQAAgWQAAgWAGgPQAFgQALgNQAJgLANgGQANgHANAAQANABAKADQAJADALAFIAAhJIAcAAIAADrIgcAAIAAgSIgMAKIgMAGQgFADgHABQgGACgJAAQgNAAgMgFgAgcgPQgNAPAAAfQAAAeAKARQAJAPAWAAQAKAAALgFQAMgFAKgJIAAhgQgMgGgHgBQgJgCgKAAQgVAAgMAQg");
	this.shape_9.setTransform(364.1,206.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7800A1").s().p("AgkBUQgOgEgKgFIAAghIABAAIAJAHQAFAEAIADQAHAEAJACQAJADAJAAIAOgCQAHgBAEgDQAFgEADgEQACgEAAgHQAAgLgFgFQgGgEgOgEIgNgDIgQgFQgUgFgJgLQgIgLAAgRQAAgXARgPQARgNAcAAQAOAAAOADQAOAEAKAFIAAAeIgCAAQgKgJgOgEQgNgGgOAAQgNAAgKAHQgJAFAAAMQAAALAFAFQAGAFANAEIANADIARADQASAFAKAKQAJALAAATQAAALgEAKQgEAJgJAHQgJAHgLAFQgMADgQAAQgRABgPgFg");
	this.shape_10.setTransform(339.675,209.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7800A1").s().p("AgxBCQgXgXAAgpQAAgpAWgYQAVgZAiAAQAQAAAMAFQAMAEAJAKQAJAJAFAPQAFANAAAVIAAAOIh0AAQAAAeAOAPQAPAQAaAAQAJAAAJgCQAJgCAIgEIAMgGIAJgGIACAAIAAAeIgMAGIgOAEIgPAEQgGABgLAAQgnAAgWgXgAgOg9QgJAEgGAGQgHAHgDAIQgDAIgBALIBZAAQgBgMgDgIQgCgJgFgGQgFgFgHgEQgIgDgLAAQgLAAgHADg");
	this.shape_11.setTransform(324.45,209.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7800A1").s().p("AAmBXIAAhfIgBgWQgBgKgEgGQgDgGgGgEQgHgDgKAAQgKABgLAFQgLAGgLAJIAAB9IgdAAIAAioIAdAAIAAATQANgMAMgFQAMgHANAAQAaAAAOARQAOAQgBAfIAABtg");
	this.shape_12.setTransform(307.65,208.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7800A1").s().p("Ag2BCQgVgZABgpQAAgpAUgYQAWgXAgAAQAiAAAVAXQAUAYABApQgBArgUAXQgVAXgiAAQgiAAgUgXgAghgvQgMAPAAAgQAAAgAMARQAMAQAVAAQAWAAAMgQQAMgQAAghQAAgggMgPQgMgQgWAAQgVAAgMAQg");
	this.shape_13.setTransform(290.5,209.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7800A1").s().p("AgNByIAAipIAbAAIAACpgAgPhTIAAgdIAfAAIAAAdg");
	this.shape_14.setTransform(278.525,206.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7800A1").s().p("AgQBTQgPgFgKgLQgLgMgGgQQgFgQAAgXQAAgVAGgRQAGgPAKgMQAKgKAPgHQAOgFARAAQANAAANADQANAFAKAEIAAAhIgBAAIgIgGIgMgIQgFgCgIgCQgIgDgIAAQgVAAgNARQgOARAAAdQAAAeANARQANAQAWAAQAOABANgGQAMgGAKgJIABAAIAAAgIgKAFIgMAEIgNADQgFACgJgBQgRABgOgGg");
	this.shape_15.setTransform(268.025,209.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7800A1").s().p("AAmBXIAAhfIgBgWQgBgKgEgGQgDgGgGgEQgGgDgLAAQgKABgLAFQgLAGgLAJIAAB9IgdAAIAAioIAdAAIAAATQANgMAMgFQAMgHANAAQAZAAAOARQAOAQABAfIAABtg");
	this.shape_16.setTransform(252.1,208.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7800A1").s().p("AgjBVQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgRAHgNQAHgLAQgHQAPgHATgCIApgEIAAgFQAAgKgDgGQgDgHgGgDQgFgEgIgBIgPgBQgKAAgNADQgOADgNAGIgCAAIAAgdIAXgFQAPgDAOAAQAQAAAMADQAMADAKAHQAJAHAFALQAEALAAAQIAAByIgcAAIAAgSIgJAIIgMAHQgHAEgHACQgGACgNAAQgLAAgJgEgAANgBQgOABgKADQgLADgIAHQgHAIAAAMQAAAPAIAHQAIAIAQAAQAMAAALgGQALgGAKgIIAAguIgaACg");
	this.shape_17.setTransform(234.775,209.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7800A1").s().p("AgQBTQgPgFgKgLQgLgMgGgQQgFgQAAgXQAAgVAGgRQAGgPAKgMQAKgKAPgHQAOgFARAAQANAAANADQANAFAKAEIAAAhIgBAAIgIgGIgMgIQgFgCgIgCQgIgDgIAAQgVAAgNARQgOARAAAdQAAAeANARQANAQAWAAQAOABANgGQAMgGAKgJIABAAIAAAgIgKAFIgMAEIgNADQgFACgJgBQgRABgOgGg");
	this.shape_18.setTransform(220.175,209.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7800A1").s().p("AgkBUQgOgFgKgEIAAghIABAAIAJAHQAFAEAIADQAHADAJADQAJADAJAAIAOgCQAHgBAEgDQAFgDADgFQACgEAAgHQAAgKgFgGQgGgEgOgEIgNgDIgQgFQgUgFgJgKQgIgMAAgRQAAgXARgPQARgNAcAAQAOgBAOAEQAOAEAKAEIAAAfIgCAAQgKgJgOgEQgNgFgOgBQgNABgKAGQgJAFAAAMQAAALAFAFQAGAFANAEIANADIARADQASAFAKAKQAJALAAATQAAALgEAKQgEAJgJAHQgJAIgLAEQgMADgQAAQgRABgPgFg");
	this.shape_19.setTransform(487.025,167.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7800A1").s().p("AgjBVQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgRAHgNQAHgLAQgHQAPgHATgCIApgEIAAgFQAAgKgDgGQgDgHgGgDQgFgEgIgBIgPgBQgKAAgNADQgOADgNAGIgCAAIAAgdIAXgFQAPgDAOAAQAQAAAMADQAMADAKAHQAJAHAFALQAEALAAAQIAAByIgcAAIAAgSIgJAIIgMAHQgHAEgHACQgGACgNAAQgLAAgJgEgAANgBQgOABgKADQgLADgIAHQgHAIAAAMQAAAPAIAHQAIAIAQAAQAMAAALgGQALgGAKgIIAAguIgaACg");
	this.shape_20.setTransform(471.275,167.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7800A1").s().p("AgNB2IAAjrIAbAAIAADrg");
	this.shape_21.setTransform(460.075,164.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7800A1").s().p("AgkBUQgOgFgKgEIAAghIABAAIAJAHQAFAEAIADQAHADAJADQAJADAJAAIAOgCQAHgBAEgDQAFgDADgFQACgEAAgHQAAgKgFgGQgGgEgOgEIgNgDIgQgFQgUgFgJgKQgIgMAAgRQAAgXARgPQARgNAcAAQAOgBAOAEQAOAEAKAEIAAAfIgCAAQgKgJgOgEQgNgFgOgBQgNABgKAGQgJAFAAAMQAAALAFAFQAGAFANAEIANADIARADQASAFAKAKQAJALAAATQAAALgEAKQgEAJgJAHQgJAIgLAEQgMADgQAAQgRABgPgFg");
	this.shape_22.setTransform(440.125,167.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7800A1").s().p("AgjBVQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgRAHgNQAHgLAQgHQAPgHATgCIApgEIAAgFQAAgKgDgGQgDgHgGgDQgFgEgIgBIgPgBQgKAAgNADQgOADgNAGIgCAAIAAgdIAXgFQAPgDAOAAQAQAAAMADQAMADAKAHQAJAHAFALQAEALAAAQIAAByIgcAAIAAgSIgJAIIgMAHQgHAEgHACQgGACgNAAQgLAAgJgEgAANgBQgOABgKADQgLADgIAHQgHAIAAAMQAAAPAIAHQAIAIAQAAQAMAAALgGQALgGAKgIIAAguIgaACg");
	this.shape_23.setTransform(424.375,167.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7800A1").s().p("AggBzQgMgHgJgKQgIgLgFgRQgEgQAAgWQAAgWAFgPQAHgQAKgNQAJgLANgGQANgHANABQANAAAKADQAJADAKAFIAAhJIAdAAIAADrIgdAAIAAgSIgLAKIgLAGQgHADgGABQgHACgIAAQgNAAgLgFgAgdgPQgMAQABAfQAAAdAJARQAKAPAUAAQAKAAAMgFQALgFAKgJIAAhgQgKgFgJgCQgIgCgKAAQgVAAgNAQg");
	this.shape_24.setTransform(407.6,164.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7800A1").s().p("Ag2BCQgVgZAAgpQAAgpAWgYQAUgXAiAAQAiAAAUAXQAVAYgBApQABArgVAXQgUAXgiAAQgjAAgUgXgAghgvQgMAPAAAgQAAAgAMARQAMAQAWAAQAWAAALgQQAMgQABghQgBgggMgPQgLgQgWAAQgWAAgMAQg");
	this.shape_25.setTransform(391.15,167.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7800A1").s().p("AgRBhQgNgNABgdIAAhdIgUAAIAAgXIAUAAIAAgxIAcAAIAAAxIAzAAIAAAXIgzAAIAABQIAAATQABAIACAGQACAFAGADQAGACAKAAQAGAAAHgBIAKgEIABAAIAAAZIgQAEIgQACQgVAAgOgOg");
	this.shape_26.setTransform(377.7,165.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7800A1").s().p("AgxBCQgXgXAAgqQAAgoAWgYQAVgZAiAAQAQAAAMAFQAMAEAJAKQAJAJAFAPQAFAOAAAUIAAAOIh0AAQAAAeAOAPQAPAQAaAAQAJAAAJgCQAJgCAIgEIAMgGIAJgGIACAAIAAAeIgMAGIgOAEIgPAEQgGABgLAAQgnAAgWgXgAgOg9QgJADgGAHQgHAHgDAIQgDAIgBALIBZAAQgBgMgDgIQgCgIgFgHQgFgFgHgEQgIgEgLABQgLgBgHAEg");
	this.shape_27.setTransform(354.6,167.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7800A1").s().p("AghBzQgMgHgHgKQgJgLgFgRQgEgQAAgWQAAgWAFgPQAGgQAKgNQAKgLANgGQANgHAOABQAMAAAJADQAKADAKAFIAAhJIAdAAIAADrIgdAAIAAgSIgLAKIgLAGQgHADgGABQgHACgHAAQgOAAgMgFgAgdgPQgLAQgBAfQAAAdAKARQAJAPAWAAQAJAAAMgFQALgFAKgJIAAhgQgKgFgJgCQgIgCgKAAQgVAAgNAQg");
	this.shape_28.setTransform(337.25,164.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7800A1").s().p("AgjBVQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgRAHgNQAHgLAQgHQAPgHATgCIApgEIAAgFQAAgKgDgGQgDgHgGgDQgFgEgIgBIgPgBQgKAAgNADQgOADgNAGIgCAAIAAgdIAXgFQAPgDAOAAQAQAAAMADQAMADAKAHQAJAHAFALQAEALAAAQIAAByIgcAAIAAgSIgJAIIgMAHQgHAEgHACQgGACgNAAQgLAAgJgEgAANgBQgOABgKADQgLADgIAHQgHAIAAAMQAAAPAIAHQAIAIAQAAQAMAAALgGQALgGAKgIIAAguIgaACg");
	this.shape_29.setTransform(310.925,167.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7800A1").s().p("AgRBhQgNgNAAgdIAAhdIgTAAIAAgXIATAAIAAgxIAdAAIAAAxIAzAAIAAAXIgzAAIAABQIAAATQABAIACAGQADAFAFADQAGACAJAAQAIAAAGgBIAKgEIABAAIAAAZIgQAEIgQACQgVAAgOgOg");
	this.shape_30.setTransform(298.25,165.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7800A1").s().p("AghBTQgKgDgIgIQgGgIgEgMQgEgMgBgRIAAhtIAdAAIAABfIABAXQABAJADAGQAEAHAGADQAFADAMAAQAJAAAMgGQAMgGAKgJIAAh9IAcAAIAACoIgcAAIAAgTQgNAMgMAGQgMAGgOAAQgLAAgJgEg");
	this.shape_31.setTransform(284.25,167.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7800A1").s().p("AgsBVIAAipIAdAAIAAAaQAPgOALgGQAMgFAKgBIAHAAIAFABIAAAeIgCAAIgGgBIgJgBQgLABgMAFQgKAEgKALIAAB3g");
	this.shape_32.setTransform(271.025,167.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7800A1").s().p("AghB3IAAiRIgTAAIAAgYIATAAIAAgFQABgfAPgQQAOgPAbAAIAPABIAOABIAAAaIgCAAIgLgDIgMgBQgTABgHAHQgHAJAAAUIAAAGIAuAAIAAAYIgtAAIAACRg");
	this.shape_33.setTransform(260.5,164);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7800A1").s().p("AgkBUQgOgFgKgEIAAghIABAAIAJAHQAFAEAIADQAHADAJADQAJADAJAAIAOgCQAHgBAEgDQAFgDADgFQACgEAAgHQAAgKgFgGQgGgEgOgEIgNgDIgQgFQgUgFgJgKQgIgMAAgRQAAgXARgPQARgNAcAAQAOgBAOAEQAOAEAKAEIAAAfIgCAAQgKgJgOgEQgNgFgOgBQgNABgKAGQgJAFAAAMQAAALAFAFQAGAFANAEIANADIARADQASAFAKAKQAJALAAATQAAALgEAKQgEAJgJAHQgJAIgLAEQgMADgQAAQgRABgPgFg");
	this.shape_34.setTransform(248.075,167.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7800A1").s().p("AgNByIAAipIAbAAIAACpgAgPhTIAAgdIAfAAIAAAdg");
	this.shape_35.setTransform(237.375,164.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7800A1").s().p("AhYBxIAAjhIAzAAQAgAAARAFQASAFANAIQAWAPAMAYQAMAXAAAgQAAAfgNAZQgMAZgVAOQgRAKgSAEQgRAEgbAAgAg6BXIAXAAQAUAAAPgDQAOgDAMgJQAQgLAIgRQAIgSAAgaQAAgZgJgTQgJgSgRgKQgMgIgMgDQgOgDgUAAIgXAAg");
	this.shape_36.setTransform(224.025,164.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B900C3").s().p("AA/D7IgEg7QghAQghAIQgiAJggAAQgzgBgpgWQgpgWgXgwQgYgvAAhKQABhGAbgwQAZgvAvgXQAugYA9AAQAVAAAWADQAVADAXAGIgCg3IDXgMIgRIBgAhSgpQgTAOAAAdQAAAdANAPQAOAOAaAAQATAAAagHQAYgIAggOIgFhGQgXgHgVgFQgUgEgTAAQgeAAgRAOg");
	this.shape_37.setTransform(508.35,75.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B900C3").s().p("AhjDYQgugdgag1Qgcg2gChLQgChUAhg3QAhg4A3gbQA2gbA9AAQAuAAArAOQAsANAlAcIhDCDQgVgMgUgFQgVgFgSAAQgmAAgWAUQgXAUgBAlQABAgAOAQQAOAQAZgBQASAAAUgGQAUgHAWgNIBeB4QgzAugyAXQgyAWgwAAQg3AAgtgdg");
	this.shape_38.setTransform(457.6967,74.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B900C3").s().p("AhJE+IghmbIDVgEIgIG1gAhEi1QgbgagBgnQABgnAbgaQAagbApgBQAnABAbAbQAaAaACAnQgCAngaAaQgbAagnAAQgpAAgagag");
	this.shape_39.setTransform(420.85,65.35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B900C3").s().p("AALEkQg2gBg9gRQg8gRg6gbIBMiqIAmAUQAXANAZAKQAZALATAAQAHAAAGgDQAEgDADgGQADgKgRgOQgSgNgegRQgegRgfgYQgegWgUgfQgVgfABgnQAAgoAfgyQAdgpAwgWQAugWA3AAQA3AAA0AVQA1AVAqArIhaCJQgYgWgbgPQgbgQgYAAQgKAAgHAEQgHAEgFAJQgGAOAOAOQAOANAbAQQAcAPAeAUQAeASAZAbQAYAZAIAjQAJAjgQAvQgZBAguAbQgsAbg6AAIgEAAg");
	this.shape_40.setTransform(384.05,73.2268);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B900C3").s().p("AjRC+Qg8g9gDhwQgDhwApicIC1ATQgTBagEA/QgEBAAPAfQAQAgAngFQAtgGATglQAUgjACg5QACg3gGg/IC8ggQAQBegDBYQgEBWgdBHQgeBGg/ArQg/AphlABQiDgBg9g9g");
	this.shape_41.setTransform(329.1704,74.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B900C3").s().p("AC9FHIAIlcIirCoIhsACIh3ikIASFEIjhAOIAMqMIC/gIIDBDhID2jfICsALIADKWg");
	this.shape_42.setTransform(253.8,65.325);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B900C3").s().p("AhcBLIBLjDIBuBDIiBCug");
	this.shape_43.setTransform(336.7,37.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,746.4,226), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhTUMAAAgmnMAnDAAAMAAAAmng");
	mask.setTransform(125,123.575);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D0ABEB").s().p("AgpAqQgYgYhDgSQBDgSAYgXQAYgYARhDQATBDAYAYQAXAXBDASQhCASgYAYQgYAYgTBDQgRhDgYgYg");
	this.shape.setTransform(31.375,50.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqAqQgYgYhCgSQBCgRAYgYQAZgYARhDQATBDAYAYQAXAYBDARQhDASgXAYQgYAYgTBDQgRhDgZgYg");
	this.shape_1.setTransform(181.2,193.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0ABEB").s().p("AgZAaQgOgPgpgLQApgKAOgPQAPgOAKgpQALApAPAOQAOAPApAKQgpALgOAPQgPAOgLApQgKgpgPgOg");
	this.shape_2.setTransform(18.325,177.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0ABEB").s().p("AgZAaQgPgPgogLQAogKAPgPQAPgPAKgnQAMAnAOAPQAOAPAoAKQgoALgOAPQgOAOgMApQgKgpgPgOg");
	this.shape_3.setTransform(196,30.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAaQgPgPgogLQAogKAPgPQAOgOAKgpQALApAPAOQAPAPAoAKQgoALgPAPQgPAOgLApQgKgpgOgOg");
	this.shape_4.setTransform(156.8,172.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcA6QgMgYAAgiQAAghAMgYQAMgYAQABQARgBAMAYQAMAYAAAhQAAAigMAYQgMAYgRAAQgQAAgMgYg");
	this.shape_5.setTransform(111.125,118);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDE6EC").s().p("Ag5AVQgYgJAAgMQAAgLAYgJQAYgJAhAAQAiAAAYAJQAYAJAAALQAAAMgYAJQgYAJgiAAQghAAgYgJg");
	this.shape_6.setTransform(65.125,129.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5ABBD").s().p("AANAsQgRgHgQgSQgQgSgFgRQgGgSAJgIQAJgIARAHQARAHAQASQAQASAFARQAFASgIAIQgFAEgHAAQgGAAgIgDg");
	this.shape_7.setTransform(213.65,65.7569);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5ABBD").s().p("AgXBdQgYgfgKgyQgKgxAJgmQAKgnAYgFQAYgFAYAgQAYAgAKAxQAKAxgKAnQgKAmgYAFIgGABQgUAAgVgcg");
	this.shape_8.setTransform(222.4186,86.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5A287F").s().p("AmeFtQgVgXABhXQAAhHA4huQA1hoBWhnQBahsBZhBQBjhIBLAAQC+AABKBmQA6BPgBCnIAADVQgDBMgYAbQgXAahGAFQgTABi2AAQiSAAiJAYQiAAbgnAHQgUADgPAAQgfAAgMgOg");
	this.shape_9.setTransform(96.7,224.9223);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5A287F").s().p("AhbB3QgmgxAAhGQAAhEAmgyQAngxA0gBQA1ABAnAxQAmAyAABEQAABGgmAxQgnAxg1ABQg0gBgngxg");
	this.shape_10.setTransform(127.7,121.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCCE7").s().p("AiUDCQg/hQABhyQgBhwA/hRQA9hRBXAAQBXAAA+BRQA/BRAABwQAAByg/BQQg+BQhXAAQhXAAg9hQg");
	this.shape_11.setTransform(127.7,121.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5A287F").s().p("AhVA7QgMAAgIgJQgJgIAAgNIAAg5QAAgMAJgJQAIgIAMAAICrAAQAMAAAIAIQAJAJAAAMIAAA5QAAANgJAIQgIAJgMAAg");
	this.shape_12.setTransform(125,90.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5A287F").s().p("AiUDCQg+hQAAhyQAAhwA+hRQA9hRBXAAQBXAAA+BRQA+BRAABwQAAByg+BQQg+BQhXAAQhXAAg9hQg");
	this.shape_13.setTransform(120.275,121.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCCE7").s().p("AgzDhQgPAAgJgMQgJgMAEgOQAfh9g8iaQgTgwgaguIgWgkQDigSBUCyQAzBrgJCXQAAAMgJAJQgJAIgMAAg");
	this.shape_14.setTransform(120.7425,63.3881);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DE2A8A").s().p("ACUHtQgOiYBTg/QgEiugkiPQgHgmgXguQgshQhEhAQhCg9hTgmQhpguh2AJQh/AKhZBHQA9iKCMhUQCPhXCwAAQEegBCWCVQB7B6AWDRQAXDZhDDLQhcEXjpBVQgYg/gHhMg");
	this.shape_15.setTransform(110.0673,109.3999);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DE2A8A").s().p("ACrIrQhygjhYhOQhchSgohrQgehSAPhyIANhdQAGg3gCgrQgEg7glAFQg4ATgmAJQg+AOg1gUQg+gXADg6QADg0A+hBQAhgjBHg4QBwhZBwgUQB3gVB/A3QDpBlA1DHQApCbhBEOQgJAngNBqQgKBdgPAqQgVBAgtAVQgYALghAAQgnAAgzgQg");
	this.shape_16.setTransform(187.1148,104.3858);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DE2A8A").s().p("ABLEgQhBgSAJhpQABgLAEgYQg1Clh9geQijgoCIkCQglA+gqAhQgyAnhBACQgvABgmgiQgoglgBg3QgBhFBXgwQAhgTBvgmIBtgoQBBgYArgLQB8giBnAZQCBAfBVBGQBkBSAMB1QAIBQgRAoQgdBEhoAZQg7AOgjhEQgghYgQgiQAGBTgcBJQgfBPg7AAQgNAAgPgEg");
	this.shape_17.setTransform(82.2517,80.4404);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DE2A8A").s().p("AhYFGQg8gQAEg+QADglAehFQgsArgvgFQgzgGgChDQgBg3A3geQBFgaAdgTQAfgUAfgyIAzhhQBCh9BDgLQB3gUgGDNQgCA7gOBkQgMBbABAQQACAugUAyQgTAxgeAZQgfAcgagPQgdgRgNhGQgWAyglAeQghAcgjAAQgMAAgMgDg");
	this.shape_18.setTransform(105.0386,131.0786);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DE2A8A").s().p("AhBAsQgDgEABgFQABgFAEgDIBvhJQAEgDAFABQAFABADAEQADAEgBAFQgBAFgFADIhuBJQgDACgEAAQgHAAgDgFg");
	this.shape_19.setTransform(59.5732,147.9125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5A287F").s().p("AgMBMQgFgFAAgIIAAh9QAAgIAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAIIAAB9QAAAIgFAFQgFAGgIAAQgHAAgFgGg");
	this.shape_20.setTransform(60.8,115.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDCFDA").s().p("AhfAlIC4jAIAHE3g");
	this.shape_21.setTransform(47.075,123.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDCFDA").s().p("Ah2IbQh1gEg2g3Qg/hBgZitQgaisAAlkQAAhaAkhRQBahHB+gJQB3gKBnAvQBTAlBDA+QBFA/ArBQQAYAvAGAlQAiCJAGBkQADBCgICrQAAAUgJAZIgTAsQgWAIhPBJQhFBAgvAAQiYAGhNAAIgqgBg");
	this.shape_22.setTransform(91.426,122.8742);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F5ABBD").s().p("AhXgbICvhXQgaCAhNBAQgmAggiAFg");
	this.shape_23.setTransform(94.425,175.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FDCFDA").s().p("AhFElQg6AAgpgmQgpgmAAg2IAAlFQAAg1ApgnQApgmA6AAICLAAQA6AAApAmQApAnAAA1IAAFFQAAA2gpAmQgpAmg6AAg");
	this.shape_24.setTransform(106.675,183.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5A287F").s().p("AirDfQgQh3AjhzQBGjnEDAVQgpA7gfBVQg9CpAzCDg");
	this.shape_25.setTransform(91.0607,63.5125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D0ABEB").s().p("Aj/EaIgegeQgYgZAAgkQAAgjAYgZIGkmcQAZgZAjAAQAjAAAZAZIAeAeQAZAZAAAjQAAAkgZAYImjGdQgZAZgjAAQgkAAgZgZg");
	this.shape_26.setTransform(188.575,201.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D0ABEB").s().p("AmqHJIgegeQgZgZAAgjQAAgjAZgZIL7r8QAZgYAjAAQAkAAAYAYIAeAeQAZAZAAAkQAAAjgZAZIr7L7QgZAZgjAAQgjAAgZgZg");
	this.shape_27.setTransform(176.375,184.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D0ABEB").s().p("AmrHJIgegeQgYgZAAgjQAAgjAYgZIL8r7QAZgZAjAAQAjAAAZAZIAeAeQAZAZAAAjQAAAjgZAZIr7L7QgZAZgjAAQgkAAgZgZg");
	this.shape_28.setTransform(60.275,68.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D0ABEB").s().p("ApVJ0IgegeQgZgZAAgjQAAgkAZgZIRRxQQAZgZAjAAQAjAAAZAZIAeAeQAZAZAAAjQAAAkgZAYIxRRRQgYAZgkAAQgjAAgZgZg");
	this.shape_29.setTransform(74.525,83.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D0ABEB").s().p("ApVJ0IgegeQgZgZAAgjQAAgkAZgZIRQxQQAZgZAkAAQAjAAAZAZIAeAeQAZAZAAAjQAAAjgZAZIxRRRQgYAZgkAAQgjAAgZgZg");
	this.shape_30.setTransform(104.625,83.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D0ABEB").s().p("ApVJ0IgegeQgZgZAAgjQAAgkAZgZIRRxQQAZgZAiAAQAkAAAZAZIAeAeQAZAZAAAjQAAAkgZAYIxQRRQgZAZgkAAQgjAAgZgZg");
	this.shape_31.setTransform(104.05,112.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D0ABEB").s().p("ApVJ0IgegeQgZgZAAgjQAAgkAZgZIRQxQQAZgZAkAAQAjAAAZAZIAeAeQAZAZAAAjQAAAkgZAYIxRRRQgZAZgjAAQgjAAgZgZg");
	this.shape_32.setTransform(98.225,147.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D0ABEB").s().p("ApVJ0IgegeQgZgZAAgkQAAgjAZgZIRRxQQAZgZAjAAQAjAAAZAZIAeAeQAZAZAAAjQAAAjgZAZIxRRRQgYAZgkAAQgjAAgZgZg");
	this.shape_33.setTransform(132.975,141.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D0ABEB").s().p("ApVJ0IgegeQgZgZAAgjQAAgjAZgZIRQxRQAZgZAkAAQAjAAAYAZIAfAeQAZAZAAAjQAAAkgZAYIxRRRQgZAZgjAAQgjAAgZgZg");
	this.shape_34.setTransform(162.5,140.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D0ABEB").s().p("ApVJ0IgegfQgZgYAAgjQAAgjAZgZIRQxRQAZgZAkAAQAjAAAZAZIAeAeQAZAZAAAjQAAAjgZAaIxRRQQgYAZgkAAQgjAAgZgZg");
	this.shape_35.setTransform(161.925,170.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(9.3,17.8,224.89999999999998,229.39999999999998), null);


(lib.Símbolo11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.bt.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://music.apple.com/us/artist/payamin/1753389457", "_blank");
		}
		
		
		var frequency = 10;
		stage.enableMouseOver(frequency);
		
		// Evento para aumentar la escala al pasar el mouse
		this.bt.addEventListener("mouseover", aumentarEscala.bind(this));
		
		// Evento para volver a la escala original al quitar el mouse
		this.bt.addEventListener("mouseout", restaurarEscala.bind(this));
		
		// Función para aumentar la escala
		function aumentarEscala() {
		    createjs.Tween.get(this.bt).to({ scaleX: 1.2, scaleY: 1.2 }, 300, createjs.Ease.quadOut);
		}
		
		// Función para restaurar la escala original
		function restaurarEscala() {
		    createjs.Tween.get(this.bt).to({ scaleX: 1, scaleY: 1 }, 300, createjs.Ease.quadOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.bt = new lib.Símbolo6();
	this.bt.name = "bt";
	this.bt.setTransform(209,209,1,1,0,0,0,209,209);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(0,0,418,418), null);


(lib.Símbolo7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.bt.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://music.youtube.com/channel/UCpdJh5WzKsYtdAuXx8rNmMQ", "_blank");
		}
		
		
		var frequency = 10;
		stage.enableMouseOver(frequency);
		
		// Evento para aumentar la escala al pasar el mouse
		this.bt.addEventListener("mouseover", aumentarEscala.bind(this));
		
		// Evento para volver a la escala original al quitar el mouse
		this.bt.addEventListener("mouseout", restaurarEscala.bind(this));
		
		// Función para aumentar la escala
		function aumentarEscala() {
		    createjs.Tween.get(this.bt).to({ scaleX: 1.2, scaleY: 1.2 }, 300, createjs.Ease.quadOut);
		}
		
		// Función para restaurar la escala original
		function restaurarEscala() {
		    createjs.Tween.get(this.bt).to({ scaleX: 1, scaleY: 1 }, 300, createjs.Ease.quadOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.bt = new lib.Símbolo5();
	this.bt.name = "bt";
	this.bt.setTransform(209.4,209,1,1,0,0,0,209.4,209);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(0,0,418.9,418), null);


(lib.Símbolo5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.bt.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://open.spotify.com/intl-es/artist/3IlMBQ2Bpg3wQqiBw10mbb?si=2lEN-FV9Qey3jf07Eg5RIg", "_blank");
		}
		
		
		var frequency = 10;
		stage.enableMouseOver(frequency);
		
		// Evento para aumentar la escala al pasar el mouse
		this.bt.addEventListener("mouseover", aumentarEscala.bind(this));
		
		// Evento para volver a la escala original al quitar el mouse
		this.bt.addEventListener("mouseout", restaurarEscala.bind(this));
		
		// Función para aumentar la escala
		function aumentarEscala() {
		    createjs.Tween.get(this.bt).to({ scaleX: 1.2, scaleY: 1.2 }, 300, createjs.Ease.quadOut);
		}
		
		// Función para restaurar la escala original
		function restaurarEscala() {
		    createjs.Tween.get(this.bt).to({ scaleX: 1, scaleY: 1 }, 300, createjs.Ease.quadOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.bt = new lib.Símbolo44();
	this.bt.name = "bt";
	this.bt.setTransform(256,256,1,1,0,0,0,256,256);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5_1, new cjs.Rectangle(0,0,512,512), null);


(lib.Símbolo18 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Símbolo11();
	this.instance.setTransform(166.35,27.7,0.1324,0.1324,0,0,0,208.8,209.2);

	this.bt = new lib.Símbolo7();
	this.bt.name = "bt";
	this.bt.setTransform(36.3,27.8,0.1321,0.1324,0,0,0,210.1,210);

	this.instance_1 = new lib.Símbolo5_1();
	this.instance_1.setTransform(101,27.8,0.1081,0.1081,0,0,0,256.8,257.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.bt},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo18, new cjs.Rectangle(8.6,0,185.5,55.4), null);


// stage content:
(lib.bot = function(mode,startPosition,loop,reversed) {
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
		createjs.Tween.get(this.elem1)
		    .to({ y: this.elem1.y - 100, x: this.elem1.x - 0 }, 1000, createjs.Ease.quadOut)
		    
		createjs.Tween.get(this.elem2)
		    .to({ y: this.elem2.y - 120, x: this.elem2.x - 0 }, 1300, createjs.Ease.quadOut)
		    
		createjs.Tween.get(this.elem3)
		    .to({ y: this.elem3.y - 100, x: this.elem3.x - 0 }, 1200, createjs.Ease.quadOut)
		
		createjs.Tween.get(this.elem4)
		    .to({ y: this.elem4.y - 100, x: this.elem4.x - 0 }, 4000, createjs.Ease.quadOut)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.elem2 = new lib.Símbolo3();
	this.elem2.name = "elem2";
	this.elem2.setTransform(774.25,310.7,1,1,0,0,0,373.2,113);

	this.elem1 = new lib.ClipGroup();
	this.elem1.name = "elem1";
	this.elem1.setTransform(198.55,513.95,2.6415,2.6415,0,0,180,124.9,131.4);

	this.elem3 = new lib.Símbolo18();
	this.elem3.name = "elem3";
	this.elem3.setTransform(762.1,547.65,1.8783,1.8783,0,0,0,88.5,27.9);

	this.elem4 = new lib.Símbolo4();
	this.elem4.name = "elem4";
	this.elem4.setTransform(686.35,430.6,1,1,0,0,0,293.2,96.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.elem4},{t:this.elem3},{t:this.elem1},{t:this.elem2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(393.1,526.9,754.3000000000001,334.30000000000007);
// library properties:
lib.properties = {
	id: '6FF2618289C9C244BB1CA270BC66A74C',
	width: 1050,
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
an.compositions['6FF2618289C9C244BB1CA270BC66A74C'] = {
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