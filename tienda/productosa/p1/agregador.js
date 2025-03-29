(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"agregador_atlas_1", frames: [[0,268,282,82],[0,184,504,82],[0,125,812,57],[506,184,210,75],[284,268,288,75],[0,0,856,123]]}
];


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



(lib.CachedBmp_6copia = function() {
	this.initialize(ss["agregador_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5copia = function() {
	this.initialize(ss["agregador_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["agregador_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["agregador_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["agregador_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["agregador_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
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


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("EgdrAj7QkMgKjxgfQg8gHgkgsQgigqgVg2IAAqKIAA79QAmh1B4glQACgBAAgFIMWAAIAKAAQB2AmAkB5QABABAFAAQAAN+AKN/QAFF3gyFDQgGAugoAXQh6BIjPAAIgygBgA+IX8QhIASgxApQAAAFgCAFQgJAegTAUIAAAKQgBA5ALArQAFAAABACQAhA7A9AdIAKAAIBaAAQAAgFABAAQBRghAchSIAAgKQgDisidgSIgJABgEgL6AgAQjOghiNhUQgRjaACjyQAFt/AAt+QH7mEEQppQB/kgAgmLQADgyAagwQCDj9FbBLQBVASBAA1QFREYhKJ4QgfEHhHDmQgFASAJAKQC/AjDvgJQI/gUIMAvQBVAIA+AoQC/B6A1EBIAACMIAAAKQgFAAAAABQg2ESjTByQAUAtAHAvQBDGZkmCfQADAgAEAVQBWGwk5CRQBdC/hbDDQhMChjQAUQk3AelRALQizAFitAAQrdAApphgg");
	this.shape.setTransform(256,230.0177);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo18, new cjs.Rectangle(0,0,512,460.1), null);


(lib.Símbolo16 = function(mode,startPosition,loop,reversed) {
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
	this.unidades = new cjs.Text("", "20px 'Arial'");
	this.unidades.name = "unidades";
	this.unidades.lineHeight = 24;
	this.unidades.lineWidth = 56;
	this.unidades.parent = this;
	this.unidades.setTransform(2,74.7);

	this.precio = new cjs.Text("", "20px 'Arial'");
	this.precio.name = "precio";
	this.precio.lineHeight = 24;
	this.precio.lineWidth = 56;
	this.precio.parent = this;
	this.precio.setTransform(2,38.45);

	this.nota = new cjs.Text("", "20px 'Arial'");
	this.nota.name = "nota";
	this.nota.lineHeight = 24;
	this.nota.lineWidth = 54;
	this.nota.parent = this;
	this.nota.setTransform(2,110.95);

	this.producto = new cjs.Text("", "20px 'Arial'");
	this.producto.name = "producto";
	this.producto.lineHeight = 24;
	this.producto.lineWidth = 57;
	this.producto.parent = this;
	this.producto.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.producto},{t:this.nota},{t:this.precio},{t:this.unidades}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo16, new cjs.Rectangle(0,0,61,135.7), null);


(lib.Símbolo13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#66FF66").s().p("AjLDLQhUhUAAh3QAAh2BUhVQBVhUB2AAQB3AABUBUQBUBVABB2QgBB3hUBUQhUBUh3ABQh2gBhVhUg");
	this.shape.setTransform(28.75,28.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo13, new cjs.Rectangle(0,0,57.5,57.5), null);


(lib.Símbolo12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ApdJeQj7j7AAljQAAliD7j7QD7j7FiAAQFjAAD7D7QD7D7AAFiQAAFjj7D7Qj7D7ljAAQliAAj7j7g");
	this.shape.setTransform(85.7,85.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo12, new cjs.Rectangle(0,0,171.4,171.4), null);


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

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALlOKQAAgBgFAAIAAhkIAAgKQAcg0AxggQADgBAAgFQA0gNBEADIAKAAQBXArAWBrIABAKQgWCFiAAaIgKABQh3gMgkhhgAoaOKQAAgBgFAAIAAhkIAAgKQAcg0AxggQADgBAAgFQA0gNBEADIAKAAQBXArAWBrIABAKQgWCFiAAaIgKABQh3gMgkhhgAmTJJIgKAAQi0qtipq2IgBgKQiuAOh/ghIgJgBQgnglAIhTIABgKQAagiAqgUQACgBAAgFIGkAAIAKAAQAeBkAcBlQACAEAAAFIZnAAIAKAAIAAL4IAAAKI1sEIQgBAAAAAFQAMBDARBAIABAJITXAAIAKAAIAADIIAAAKI13AAgAnso/QBJEuBWEgIAKgBQJohqJbh6IAAgKIAAloIgKAAI1jAAIABAJg");
	this.shape.setTransform(110.6062,101.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(0,0,221.2,203), null);


(lib.Símbolo9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AvIGcQiqAAh5h5Qh5h4AAirIAAAAQAAiqB5h4QB5h5CqAAIeRAAQCqAAB5B5QB5B4AACqIAAAAQAACrh5B4Qh5B5iqAAg");
	this.shape.setTransform(138.05,41.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(0,0,276.1,82.4), null);


(lib.Símbolo8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00CCFF").s().p("AvIGcQiqAAh5h5Qh5h4AAirIAAAAQAAiqB5h4QB5h5CqAAIeRAAQCqAAB5B5QB5B4AACqIAAAAQAACrh5B4Qh5B5iqAAg");
	this.shape.setTransform(138.05,41.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(0,0,276.1,82.4), null);


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

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5FFFF").s().p("Aj4EfQhkAAAAhkIAAl1QAAhkBkAAIHxAAQBkAAAABkIAAF1QAABkhkAAg");
	this.shape.setTransform(34.925,28.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(0,0,69.9,57.4), null);


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
	this.shape.graphics.f("#000000").s().p("AiVCWQg/g+AAhYQAAhXA/g+QA+g/BXAAQBYAAA+A/QA+A+AABXQAABYg+A+Qg+A+hYAAQhXAAg+g+g");
	this.shape.setTransform(21.25,21.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,42.5,42.5), null);


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

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiNAXIAAgtIEbAAIAAAtg");
	this.shape.setTransform(14.2,2.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,28.4,4.7), null);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgWCOIAAkbIAtAAIAAEbg");
	this.shape.setTransform(2.325,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,4.7,28.4), null);


(lib.Símbolo17 = function(mode,startPosition,loop,reversed) {
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(82));

	// Capa_1
	this.instance = new lib.Símbolo18();
	this.instance.setTransform(256.1,230.05,1,1,14.9992,0,0,256.1,230);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:256,rotation:-10.2201,x:256.05,y:-259.1},29,cjs.Ease.get(1)).wait(19).to({regX:256.1,rotation:14.9992,x:256.1,y:230.05},33,cjs.Ease.get(-1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.8,-530.9,613.5999999999999,1049.4);


(lib.Símbolo15 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(212.55,42.2,0.199,0.199,0,0,0,110.8,101.8);

	this.instance_1 = new lib.CachedBmp_6copia();
	this.instance_1.setTransform(49.45,20.15,0.5,0.5);

	this.instance_2 = new lib.Símbolo8();
	this.instance_2.setTransform(138.1,41.1,1,1,0,0,0,138.1,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo15, new cjs.Rectangle(0,0,276.1,82.4), null);


(lib.Símbolo14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_5copia();
	this.instance.setTransform(11.4,19.8,0.5,0.5);

	this.instance_1 = new lib.Símbolo9();
	this.instance_1.setTransform(138.1,41.1,1,1,0,0,0,138.1,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo14, new cjs.Rectangle(0,0,276.1,82.4), null);


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
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(28.7,28.8,1.3506,1.3506,0,0,0,14.2,2.4);

	this.instance_1 = new lib.Símbolo3();
	this.instance_1.setTransform(28.65,28.65,1.3506,1.3506,0,0,0,21.2,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(0,0,57.4,57.4), null);


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
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(14.2,14.2,1,1,0,0,0,14.2,2.3);

	this.instance_1 = new lib.Símbolo1();
	this.instance_1.setTransform(14.2,14.2,1,1,0,0,0,2.3,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,28.4,28.4), null);


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
	this.instance = new lib.Símbolo4();
	this.instance.setTransform(28.7,28.7,1.3506,1.3506,0,0,0,14.2,14.2);

	this.instance_1 = new lib.Símbolo3();
	this.instance_1.setTransform(28.65,28.65,1.3506,1.3506,0,0,0,21.2,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(0,0,57.4,57.4), null);


// stage content:
(lib.agregador = function(mode,startPosition,loop,reversed) {
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
		////// Suma de unidades //////
		this.unidades.text = 1; // Valor inicial
		
		
		// Evento para aumentar unidades
		this.btmas.addEventListener("click", () => {
		    this.unidades.text = parseInt(this.unidades.text) + 1;
		});
		
		// Evento para disminuir unidades
		this.btmenos.addEventListener("click", () => {
		    let valorActual = parseInt(this.unidades.text);
		    if (valorActual > 1) {  // Ahora el mínimo es 1
		        this.unidades.text = valorActual - 1;
		    }
		});
		
		/////////////// Carga el precio //////
		fetch("precio.txt")
		    .then(response => response.text())  // Leer el contenido del archivo
		    .then(data => {
		        this.precio.text = data; // Asignar el contenido al campo de texto
		    })
		    .catch(error => console.error("Error al cargar precio.txt:", error));
		
		/////////////// Carga el titulo //////
		fetch("titulo.txt")
		    .then(response => response.text())  // Leer el contenido del archivo
		    .then(data => {
		        this.producto.text = data; // Asignar el contenido al campo de texto
		    })
		    .catch(error => console.error("Error al cargar titulo.txt:", error));
		
		
		/////////////// Agregar unidades al carrito y actualizar el total //////
		this.agregar.addEventListener("click", () => {
		    let unidades = parseInt(this.unidades.text);  // Obtener el valor de unidades
		    let unidadesCarrito = parseInt(this.unidadescarrito.text);  // Obtener el valor actual del carrito
		    this.unidadescarrito.text = unidades + unidadesCarrito;  // Sumar las unidades al carrito
			//nota igual a notaadicional//
			this.nota.text = document.getElementById("notaadicional").value;
		    // Obtener el precio y el total
		    let precio = parseFloat(this.precio.text);  // Obtener el valor del precio (asegúrate de que sea un número)
		    let total = parseFloat(this.total.text);    // Obtener el valor actual del total
			this.like.play();
		    // Sumar el precio multiplicado por las unidades al total
		    this.total.text = (precio * unidades) + total;  // Actualiza el total
		});
		
		
		//////////////////////////////
		// Al abrir la página, obtener el número de pedido desde localStorage
		var numeroPedidoGuardado = localStorage.getItem('datos1');
		var tiempoGuardado = localStorage.getItem('tiempoGuardado');
		
		
		// Verifica si 'total' existe en localStorage, si no, asigna "0"
		this.total.text = localStorage.getItem('total') ? localStorage.getItem('total') : "0";
		
		// Verifica si 'unidadescarrito' existe en localStorage, si no, asigna "0"
		this.unidadescarrito.text = localStorage.getItem('unidadescarrito') ? localStorage.getItem('unidadescarrito') : "0";
		
		
		
		
		
		// Si no existe el número de pedido o el tiempo guardado, inicializar todo
		if (!numeroPedidoGuardado || !tiempoGuardado) {
		    this.numerodepedido.text = "1";  // Establecer a 0 si no hay valor guardado
		} else {
		    // Calcular el tiempo transcurrido
		    var tiempoTranscurrido = Date.now() - parseInt(tiempoGuardado);
		    if (tiempoTranscurrido > 60000) { // Si han pasado más de 1 minuto (60000 ms)
				this.numerodepedido.text = "1"; 
				this.total.text = "0"; 
				this.unidadescarrito.text = "0"; 
				
				this.numerodepedido.text = "1"; 
		        localStorage.removeItem('datos1');  // Borrar datos del pedido
		        localStorage.removeItem('tiempoGuardado');  // Borrar tiempo guardado
				localStorage.clear();
		         // Restablecer número de pedido
		    } else {
		        this.numerodepedido.text = numeroPedidoGuardado;  // Asignar el valor guardado
		    }
		}
		
		// Evento para incrementar el número de pedido al hacer clic en el botón "pedirya"
		this.agregar.addEventListener("click", () => {
		    // Incrementar el valor de numerodepedido
		    this.numerodepedido.text = parseInt(this.numerodepedido.text) + 1;
		
		    // Guardar el nuevo valor en localStorage
		    localStorage.setItem('datos1', this.numerodepedido.text);
			localStorage.setItem('total', this.total.text);
			localStorage.setItem('unidadescarrito', this.unidadescarrito.text);
		
		    // Actualizar el tiempo guardado en localStorage
		    localStorage.setItem('tiempoGuardado', Date.now().toString());
		});
		for (let i = 1; i <= 6; i++) {
		        // Obtener los valores desde localStorage para cada campo
		        let producto = localStorage.getItem('producto' + i);
		        let precio = localStorage.getItem('precio' + i);
		        let nota = localStorage.getItem('nota' + i);
		        let unidades = localStorage.getItem('unidades' + i);
		
		        // Comprobar si los valores existen en localStorage
		        if (producto && this['pedido' + i]) {
		            this['pedido' + i].producto.text = producto;  // Asigna el valor al campo correspondiente
		        }
		        if (precio && this['pedido' + i]) {
		            this['pedido' + i].precio.text = precio;
		        }
		        if (nota && this['pedido' + i]) {
		            this['pedido' + i].nota.text = nota;
		        }
		        if (unidades && this['pedido' + i]) {
		            this['pedido' + i].unidades.text = unidades;
		        }
		    }
		
		
		// Evento para agregar los datos al hacer clic en el botón "agregar"
		this.agregar.addEventListener("click", () => {
		    var numeroPedido = parseInt(this.numerodepedido.text);
		
		    // Verificar si el número de pedido está dentro del rango (1 a 6)
		    if (numeroPedido >= 1 && numeroPedido <= 6) {
		        // Guardar la información en localStorage con claves dinámicas basadas en el número de pedido
		        localStorage.setItem('producto' + numeroPedido, this.producto.text);
		        localStorage.setItem('precio' + numeroPedido, this.precio.text);
		        localStorage.setItem('nota' + numeroPedido, this.nota.text);
		        localStorage.setItem('unidades' + numeroPedido, this.unidades.text);
		        
		        console.log('Datos guardados para el pedido ' + numeroPedido);
		    } else {
		        console.log('Número de pedido fuera de rango');
		    }
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.pedido6 = new lib.Símbolo16();
	this.pedido6.name = "pedido6";
	this.pedido6.setTransform(835.55,332.8,0.8526,0.8526,0,0,0,74.2,67.8);

	this.pedido5 = new lib.Símbolo16();
	this.pedido5.name = "pedido5";
	this.pedido5.setTransform(775.9,332.8,0.8526,0.8526,0,0,0,74.2,67.8);

	this.pedido4 = new lib.Símbolo16();
	this.pedido4.name = "pedido4";
	this.pedido4.setTransform(717.05,332.8,0.8526,0.8526,0,0,0,74.2,67.8);

	this.pedido3 = new lib.Símbolo16();
	this.pedido3.name = "pedido3";
	this.pedido3.setTransform(656.65,332.8,0.8526,0.8526,0,0,0,74.2,67.8);

	this.numerodepedido = new cjs.Text("", "20px 'Arial'");
	this.numerodepedido.name = "numerodepedido";
	this.numerodepedido.textAlign = "center";
	this.numerodepedido.lineHeight = 24;
	this.numerodepedido.lineWidth = 35;
	this.numerodepedido.parent = this;
	this.numerodepedido.setTransform(648.75,230.5);

	this.pedido2 = new lib.Símbolo16();
	this.pedido2.name = "pedido2";
	this.pedido2.setTransform(597.7,332.8,0.8526,0.8526,0,0,0,74.2,67.8);

	this.pedido1 = new lib.Símbolo16();
	this.pedido1.name = "pedido1";
	this.pedido1.setTransform(538.15,332.8,0.8526,0.8526,0,0,0,74.2,67.8);

	this.nota = new cjs.Text("", "20px 'Arial'");
	this.nota.name = "nota";
	this.nota.lineHeight = 24;
	this.nota.lineWidth = 532;
	this.nota.parent = this;
	this.nota.setTransform(328.5,73.4);

	this.producto = new cjs.Text("", "20px 'Arial'");
	this.producto.name = "producto";
	this.producto.lineHeight = 24;
	this.producto.lineWidth = 532;
	this.producto.parent = this;
	this.producto.setTransform(328.5,8);

	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(12.5,297.5,0.5,0.5);

	this.notaadicional = new lib.an_TextInput({'id': 'notaadicional', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.notaadicional.name = "notaadicional";
	this.notaadicional.setTransform(13.35,327.35,4.198,2.4503,0,0,0,0.2,0.1);

	this.agregar = new lib.Símbolo15();
	this.agregar.name = "agregar";
	this.agregar.setTransform(351.9,169.15,1,1,0,0,0,138.1,41.1);

	this.pedirya = new lib.Símbolo14();
	this.pedirya.name = "pedirya";
	this.pedirya.setTransform(655.3,169.15,1,1,0,0,0,138.1,41.1);

	this.unidadescarrito = new cjs.Text("0", "40px 'Arial'");
	this.unidadescarrito.name = "unidadescarrito";
	this.unidadescarrito.textAlign = "center";
	this.unidadescarrito.lineHeight = 47;
	this.unidadescarrito.lineWidth = 56;
	this.unidadescarrito.parent = this;
	this.unidadescarrito.setTransform(983.7,24);

	this.instance_1 = new lib.Símbolo13();
	this.instance_1.setTransform(984.05,43.25,1,1,0,0,0,28.8,28.8);

	this.instance_2 = new lib.Símbolo11();
	this.instance_2.setTransform(941.9,87.5,0.3107,0.3107,0,0,0,110.5,101.7);

	this.instance_3 = new lib.Símbolo12();
	this.instance_3.setTransform(945.95,84.8,0.6739,0.6739,0,0,0,85.7,85.8);

	this.instance_4 = new lib.CachedBmp_3();
	this.instance_4.setTransform(899.35,154.4,0.5,0.5);

	this.total = new cjs.Text("00", "bold 60px 'Arial'", "#FF0000");
	this.total.name = "total";
	this.total.textAlign = "center";
	this.total.lineHeight = 69;
	this.total.lineWidth = 208;
	this.total.parent = this;
	this.total.setTransform(944.2,193.9);

	this.precio = new cjs.Text("", "20px 'Arial'");
	this.precio.name = "precio";
	this.precio.lineHeight = 24;
	this.precio.lineWidth = 90;
	this.precio.parent = this;
	this.precio.setTransform(770.9,41.2);

	this.btmenos = new lib.Símbolo6();
	this.btmenos.name = "btmenos";
	this.btmenos.setTransform(31.95,74.8,1,1,0,0,0,28.7,28.7);

	this.btmas = new lib.Símbolo5();
	this.btmas.name = "btmas";
	this.btmas.setTransform(167.2,74.8,1,1,0,0,0,28.7,28.7);

	this.unidades = new cjs.Text("", "bold 38px 'Arial'", "#666666");
	this.unidades.name = "unidades";
	this.unidades.textAlign = "center";
	this.unidades.lineHeight = 44;
	this.unidades.lineWidth = 50;
	this.unidades.parent = this;
	this.unidades.setTransform(99.55,54.5);

	this.instance_5 = new lib.CachedBmp_2();
	this.instance_5.setTransform(34.75,2.3,0.5,0.5);

	this.instance_6 = new lib.Símbolo7();
	this.instance_6.setTransform(99.55,74.8,1,1,0,0,0,34.9,28.7);

	this.instance_7 = new lib.CachedBmp_1();
	this.instance_7.setTransform(8.5,323.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.unidades},{t:this.btmas},{t:this.btmenos},{t:this.precio},{t:this.total},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.unidadescarrito},{t:this.pedirya},{t:this.agregar},{t:this.notaadicional},{t:this.instance},{t:this.producto},{t:this.nota},{t:this.pedido1},{t:this.pedido2},{t:this.numerodepedido},{t:this.pedido3},{t:this.pedido4},{t:this.pedido5},{t:this.pedido6}]}).wait(1));

	// Capa_2
	this.like = new lib.Símbolo17();
	this.like.name = "like";
	this.like.setTransform(351.85,169.45,0.1655,0.1655,0,0,180,255.7,230);

	this.timeline.addTween(cjs.Tween.get(this.like).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(528.3,202.3,521.7,188.39999999999998);
// library properties:
lib.properties = {
	id: '9F15C8B2AD83954C8BE150CA09864886',
	width: 1050,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/agregador_atlas_1.png?1743251146757", id:"agregador_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1743251146803", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1743251146803", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1743251146803", id:"an.TextInput"}
	],
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
an.compositions['9F15C8B2AD83954C8BE150CA09864886'] = {
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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