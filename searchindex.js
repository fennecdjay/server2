Object.assign(window.search, {"doc_urls":["hello_world.html#a-gwion-hello-world","Variable.html#declaring-a-variable"],"index":{"documentStore":{"docInfo":{"0":{"body":29,"breadcrumbs":5,"title":3},"1":{"body":68,"breadcrumbs":4,"title":2}},"docs":{"0":{"body":"Let's get started using gwion! Here is a simple example #! request needed plugin\n#require Modules #! print 'Hello, World'\n<<< \"Hello, World!\" >>>; #! create a Sinusoidal oscillator\n#! and connect it to the speakers\nnew SinOsc ~> dac; #! let time pass\n5::second => now;","breadcrumbs":"Hello, World! » A Gwion 'Hello, World'","id":"0","title":"A Gwion 'Hello, World'"},"1":{"body":"In the former example, we just created a sinusoidal oscillator, without a way to access it later. This time, let's declare it (so it has a name we can use), and change a few things (like it's volume and frequency) #require Modules <<< \"Hello, World!\" >>>; #! create a Sinusoidal oscillator, named sine\n#! and connect it to the speakers\nvar SinOsc sine ~> dac; #! let some time pass\n1::second => now; #! change the frequency\n220 => sine.freq; #! let some time pass\n1::second => now; #! change the volume\n0.1 => sine.amp;\n.5::second => now; #! change the volume, again\n0.6 => sine.amp;\n.5::second => now; #! change the frequency\n440 => sine.freq; #! let some time pass\n2::second => now;","breadcrumbs":"Declaring a variable » Declaring a Variable","id":"1","title":"Declaring a Variable"}},"length":2,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{".":{"1":{"df":1,"docs":{"1":{"tf":1.0}}},"6":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"2":{"0":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"4":{"0":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":2.23606797749979}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"d":{"a":{"c":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}}}}},"g":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"'":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"w":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":2.23606797749979}}}}},"o":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"e":{".":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"o":{"df":0,"docs":{},"s":{"c":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":2.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}},"w":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"breadcrumbs":{"root":{"0":{".":{"1":{"df":1,"docs":{"1":{"tf":1.0}}},"6":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"2":{"0":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"4":{"0":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":2.23606797749979}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"d":{"a":{"c":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":2.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}}}}},"g":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":2,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"'":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"w":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":2.23606797749979}}}}},"o":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"e":{".":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"o":{"df":0,"docs":{},"s":{"c":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":2.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}},"w":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":2,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"title":{"root":{"d":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});