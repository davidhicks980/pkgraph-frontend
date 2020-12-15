"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AsciiMathParser =
/*#__PURE__*/
function () {
  function AsciiMathParser() {
    _classCallCheck(this, AsciiMathParser);

    this.decimalsign = "\\.";
    this.setup_symbols();
    this.sort_symbols();
  }

  _createClass(AsciiMathParser, [{
    key: "setup_symbols",
    value: function setup_symbols() {
      this.greek_letters = ["alpha", "beta", "gamma", "Gamma", "delta", "Delta", "epsilon", "varepsilon", "zeta", "eta", "theta", "Theta", "vartheta", "iota", "kappa", "lambda", "Lambda", "mu", "nu", "xi", "Xi", "pi", "Pi", "rho", "sigma", "Sigma", "tau", "upsilon", "phi", "Phi", "varphi", "chi", "psi", "Psi", "omega", "Omega"];
      this.relations = [{
        asciimath: ":=",
        tex: ":="
      }, {
        asciimath: ":|:",
        tex: "\\|"
      }, {
        asciimath: "=>",
        tex: "\\Rightarrow"
      }, {
        asciimath: "approx",
        tex: "\\approx"
      }, {
        asciimath: "~~",
        tex: "\\approx"
      }, {
        asciimath: "cong",
        tex: "\\cong"
      }, {
        asciimath: "~=",
        tex: "\\cong"
      }, {
        asciimath: "equiv",
        tex: "\\equiv"
      }, {
        asciimath: "-=",
        tex: "\\equiv"
      }, {
        asciimath: "exists",
        tex: "\\exists"
      }, {
        asciimath: "EE",
        tex: "\\exists"
      }, {
        asciimath: "forall",
        tex: "\\forall"
      }, {
        asciimath: "AA",
        tex: "\\forall"
      }, {
        asciimath: ">=",
        tex: "\\ge"
      }, {
        asciimath: "ge",
        tex: "\\ge"
      }, {
        asciimath: "gt=",
        tex: "\\geq"
      }, {
        asciimath: "geq",
        tex: "\\geq"
      }, {
        asciimath: "gt",
        tex: "\\gt"
      }, {
        asciimath: "in",
        tex: "\\in"
      }, {
        asciimath: "<=",
        tex: "\\le"
      }, {
        asciimath: "le",
        tex: "\\le"
      }, {
        asciimath: "lt=",
        tex: "\\leq"
      }, {
        asciimath: "leq",
        tex: "\\leq"
      }, {
        asciimath: "lt",
        tex: "\\lt"
      }, {
        asciimath: "models",
        tex: "\\models"
      }, {
        asciimath: "|==",
        tex: "\\models"
      }, {
        asciimath: "!=",
        tex: "\\ne"
      }, {
        asciimath: "ne",
        tex: "\\ne"
      }, {
        asciimath: "notin",
        tex: "\\notin"
      }, {
        asciimath: "!in",
        tex: "\\notin"
      }, {
        asciimath: "prec",
        tex: "\\prec"
      }, {
        asciimath: "-lt",
        tex: "\\prec"
      }, {
        asciimath: "-<",
        tex: "\\prec"
      }, {
        asciimath: "preceq",
        tex: "\\preceq"
      }, {
        asciimath: "-<=",
        tex: "\\preceq"
      }, {
        asciimath: "propto",
        tex: "\\propto"
      }, {
        asciimath: "prop",
        tex: "\\propto"
      }, {
        asciimath: "subset",
        tex: "\\subset"
      }, {
        asciimath: "sub",
        tex: "\\subset"
      }, {
        asciimath: "subseteq",
        tex: "\\subseteq"
      }, {
        asciimath: "sube",
        tex: "\\subseteq"
      }, {
        asciimath: "succ",
        tex: "\\succ"
      }, {
        asciimath: ">-",
        tex: "\\succ"
      }, {
        asciimath: "succeq",
        tex: "\\succeq"
      }, {
        asciimath: ">-=",
        tex: "\\succeq"
      }, {
        asciimath: "supset",
        tex: "\\supset"
      }, {
        asciimath: "sup",
        tex: "\\supset"
      }, {
        asciimath: "supseteq",
        tex: "\\supseteq"
      }, {
        asciimath: "supe",
        tex: "\\supseteq"
      }, {
        asciimath: "vdash",
        tex: "\\vdash"
      }, {
        asciimath: "|--",
        tex: "\\vdash"
      }];
      this.constants = [{
        asciimath: "dt",
        tex: "dt"
      }, {
        asciimath: "dx",
        tex: "dx"
      }, {
        asciimath: "dy",
        tex: "dy"
      }, {
        asciimath: "dz",
        tex: "dz"
      }, {
        asciimath: "prime",
        tex: "'"
      }, {
        asciimath: "implies",
        tex: "\\implies"
      }, {
        asciimath: "epsi",
        tex: "\\epsilon"
      }, {
        asciimath: "leftrightarrow",
        tex: "\\leftrightarrow"
      }, {
        asciimath: "Leftrightarrow",
        tex: "\\Leftrightarrow"
      }, {
        asciimath: "rightarrow",
        tex: "\\rightarrow"
      }, {
        asciimath: "Rightarrow",
        tex: "\\Rightarrow"
      }, {
        asciimath: "backslash",
        tex: "\\backslash"
      }, {
        asciimath: "leftarrow",
        tex: "\\leftarrow"
      }, {
        asciimath: "Leftarrow",
        tex: "\\Leftarrow"
      }, {
        asciimath: "setminus",
        tex: "\\setminus"
      }, {
        asciimath: "bigwedge",
        tex: "\\bigwedge"
      }, {
        asciimath: "diamond",
        tex: "\\diamond"
      }, {
        asciimath: "bowtie",
        tex: "\\bowtie"
      }, {
        asciimath: "bigvee",
        tex: "\\bigvee"
      }, {
        asciimath: "bigcap",
        tex: "\\bigcap"
      }, {
        asciimath: "bigcup",
        tex: "\\bigcup"
      }, {
        asciimath: "square",
        tex: "\\square"
      }, {
        asciimath: "lamda",
        tex: "\\lambda"
      }, {
        asciimath: "Lamda",
        tex: "\\Lambda"
      }, {
        asciimath: "aleph",
        tex: "\\aleph"
      }, {
        asciimath: "angle",
        tex: "\\angle"
      }, {
        asciimath: "frown",
        tex: "\\frown"
      }, {
        asciimath: "qquad",
        tex: "\\qquad"
      }, {
        asciimath: "cdots",
        tex: "\\cdots"
      }, {
        asciimath: "vdots",
        tex: "\\vdots"
      }, {
        asciimath: "ddots",
        tex: "\\ddots"
      }, {
        asciimath: "cdot",
        tex: "\\cdot"
      }, {
        asciimath: "star",
        tex: "\\star"
      }, {
        asciimath: "|><|",
        tex: "\\bowtie"
      }, {
        asciimath: "circ",
        tex: "\\circ"
      }, {
        asciimath: "oint",
        tex: "\\oint"
      }, {
        asciimath: "grad",
        tex: "\\nabla"
      }, {
        asciimath: "quad",
        tex: "\\quad"
      }, {
        asciimath: "uarr",
        tex: "\\uparrow"
      }, {
        asciimath: "darr",
        tex: "\\downarrow"
      }, {
        asciimath: "downarrow",
        tex: "\\downarrow"
      }, {
        asciimath: "rarr",
        tex: "\\rightarrow"
      }, {
        asciimath: ">->>",
        tex: "\\twoheadrightarrowtail"
      }, {
        asciimath: "larr",
        tex: "\\leftarrow"
      }, {
        asciimath: "harr",
        tex: "\\leftrightarrow"
      }, {
        asciimath: "rArr",
        tex: "\\Rightarrow"
      }, {
        asciimath: "lArr",
        tex: "\\Leftarrow"
      }, {
        asciimath: "hArr",
        tex: "\\Leftrightarrow"
      }, {
        asciimath: "ast",
        tex: "\\ast"
      }, {
        asciimath: "***",
        tex: "\\star"
      }, {
        asciimath: "|><",
        tex: "\\ltimes"
      }, {
        asciimath: "><|",
        tex: "\\rtimes"
      }, {
        asciimath: "^^^",
        tex: "\\bigwedge"
      }, {
        asciimath: "vvv",
        tex: "\\bigvee"
      }, {
        asciimath: "cap",
        tex: "\\cap"
      }, {
        asciimath: "nnn",
        tex: "\\bigcap"
      }, {
        asciimath: "cup",
        tex: "\\cup"
      }, {
        asciimath: "uuu",
        tex: "\\bigcup"
      }, {
        asciimath: "not",
        tex: "\\neg"
      }, {
        asciimath: "<=>",
        tex: "\\Leftrightarrow"
      }, {
        asciimath: "_|_",
        tex: "\\bot"
      }, {
        asciimath: "bot",
        tex: "\\bot"
      }, {
        asciimath: "int",
        tex: "\\int"
      }, {
        asciimath: "del",
        tex: "\\partial"
      }, {
        asciimath: "...",
        tex: "\\ldots"
      }, {
        asciimath: "/_\\",
        tex: "\\triangle"
      }, {
        asciimath: "|__",
        tex: "\\lfloor"
      }, {
        asciimath: "__|",
        tex: "\\rfloor"
      }, {
        asciimath: "dim",
        tex: "\\dim"
      }, {
        asciimath: "mod",
        tex: "\\operatorname{mod}"
      }, {
        asciimath: "lub",
        tex: "\\operatorname{lub}"
      }, {
        asciimath: "glb",
        tex: "\\operatorname{glb}"
      }, {
        asciimath: ">->",
        tex: "\\rightarrowtail"
      }, {
        asciimath: "->>",
        tex: "\\twoheadrightarrow"
      }, {
        asciimath: "|->",
        tex: "\\mapsto"
      }, {
        asciimath: "lim",
        tex: "\\lim"
      }, {
        asciimath: "Lim",
        tex: "\\operatorname{Lim}"
      }, {
        asciimath: "and",
        tex: "\\quad\\text{and}\\quad"
      }, {
        asciimath: "**",
        tex: "\\ast"
      }, {
        asciimath: "//",
        tex: "/"
      }, {
        asciimath: "\\",
        tex: "\\,"
      }, {
        asciimath: "\\\\",
        tex: "\\backslash"
      }, {
        asciimath: "xx",
        tex: "\\times"
      }, {
        asciimath: "-:",
        tex: "\\div"
      }, {
        asciimath: "o+",
        tex: "\\oplus"
      }, {
        asciimath: "ox",
        tex: "\\otimes"
      }, {
        asciimath: "o.",
        tex: "\\odot"
      }, {
        asciimath: "^",
        tex: "\\hat{}"
      }, {
        asciimath: "_",
        tex: "\\_"
      }, {
        asciimath: "^^",
        tex: "\\wedge"
      }, {
        asciimath: "vv",
        tex: "\\vee"
      }, {
        asciimath: "nn",
        tex: "\\cap"
      }, {
        asciimath: "uu",
        tex: "\\cup"
      }, {
        asciimath: "TT",
        tex: "\\top"
      }, {
        asciimath: "+-",
        tex: "\\pm"
      }, {
        asciimath: "O/",
        tex: "\\emptyset"
      }, {
        asciimath: "oo",
        tex: "\\infty"
      }, {
        asciimath: ":.",
        tex: "\\therefore"
      }, {
        asciimath: ":'",
        tex: "\\because"
      }, {
        asciimath: "/_",
        tex: "\\angle"
      }, {
        asciimath: "|~",
        tex: "\\lceil"
      }, {
        asciimath: "~|",
        tex: "\\rceil"
      }, {
        asciimath: "CC",
        tex: "\\mathbb{C}"
      }, {
        asciimath: "NN",
        tex: "\\mathbb{N}"
      }, {
        asciimath: "QQ",
        tex: "\\mathbb{Q}"
      }, {
        asciimath: "RR",
        tex: "\\mathbb{R}"
      }, {
        asciimath: "ZZ",
        tex: "\\mathbb{Z}"
      }, {
        asciimath: "->",
        tex: "\\to"
      }, {
        asciimath: "or",
        tex: "\\quad\\text{or}\\quad"
      }, {
        asciimath: "if",
        tex: "\\quad\\text{if}\\quad"
      }, {
        asciimath: "iff",
        tex: "\\iff"
      }, {
        asciimath: "*",
        tex: "\\cdot"
      }, {
        asciimath: "@",
        tex: "\\circ"
      }, {
        asciimath: "%",
        tex: "\\%"
      }, {
        asciimath: "boxempty",
        tex: "\\square"
      }, {
        asciimath: "lambda",
        tex: "\\lambda"
      }, {
        asciimath: "Lambda",
        tex: "\\Lambda"
      }, {
        asciimath: "nabla",
        tex: "\\nabla"
      }, {
        asciimath: "uparrow",
        tex: "\\uparrow"
      }, {
        asciimath: "downarrow",
        tex: "\\downarrow"
      }, {
        asciimath: "twoheadrightarrowtail",
        tex: "\\twoheadrightarrowtail"
      }, {
        asciimath: "ltimes",
        tex: "\\ltimes"
      }, {
        asciimath: "rtimes",
        tex: "\\rtimes"
      }, {
        asciimath: "neg",
        tex: "\\neg"
      }, {
        asciimath: "partial",
        tex: "\\partial"
      }, {
        asciimath: "ldots",
        tex: "\\ldots"
      }, {
        asciimath: "triangle",
        tex: "\\triangle"
      }, {
        asciimath: "lfloor",
        tex: "\\lfloor"
      }, {
        asciimath: "rfloor",
        tex: "\\rfloor"
      }, {
        asciimath: "rightarrowtail",
        tex: "\\rightarrowtail"
      }, {
        asciimath: "twoheadrightarrow",
        tex: "\\twoheadrightarrow"
      }, {
        asciimath: "mapsto",
        tex: "\\mapsto"
      }, {
        asciimath: "times",
        tex: "\\times"
      }, {
        asciimath: "div",
        tex: "\\div"
      }, {
        asciimath: "divide",
        tex: "\\div"
      }, {
        asciimath: "oplus",
        tex: "\\oplus"
      }, {
        asciimath: "otimes",
        tex: "\\otimes"
      }, {
        asciimath: "odot",
        tex: "\\odot"
      }, {
        asciimath: "wedge",
        tex: "\\wedge"
      }, {
        asciimath: "vee",
        tex: "\\vee"
      }, {
        asciimath: "top",
        tex: "\\top"
      }, {
        asciimath: "pm",
        tex: "\\pm"
      }, {
        asciimath: "emptyset",
        tex: "\\emptyset"
      }, {
        asciimath: "infty",
        tex: "\\infty"
      }, {
        asciimath: "therefore",
        tex: "\\therefore"
      }, {
        asciimath: "because",
        tex: "\\because"
      }, {
        asciimath: "lceil",
        tex: "\\lceil"
      }, {
        asciimath: "rceil",
        tex: "\\rceil"
      }, {
        asciimath: "to",
        tex: "\\to"
      }, {
        asciimath: "langle",
        tex: "\\langle"
      }, {
        asciimath: "lceiling",
        tex: "\\lceil"
      }, {
        asciimath: "rceiling",
        tex: "\\rceil"
      }, {
        asciimath: "max",
        tex: "\\max"
      }, {
        asciimath: "min",
        tex: "\\min"
      }, {
        asciimath: "prod",
        tex: "\\prod"
      }, {
        asciimath: "sum",
        tex: "\\sum"
      }];
      this.constants = this.constants.concat(this.relations);
      this.left_brackets = [{
        asciimath: "langle",
        tex: "\\langle"
      }, {
        asciimath: "(:",
        tex: "\\langle"
      }, {
        asciimath: "<<",
        tex: "\\langle"
      }, {
        asciimath: "{:",
        tex: "."
      }, {
        asciimath: "(",
        tex: "("
      }, {
        asciimath: "[",
        tex: "["
      }, {
        asciimath: "{",
        tex: "\\lbrace"
      }, {
        asciimath: "lbrace",
        tex: "\\lbrace"
      }];
      this.right_brackets = [{
        asciimath: "rangle",
        tex: "\\rangle"
      }, {
        asciimath: ":)",
        tex: "\\rangle"
      }, {
        asciimath: ">>",
        tex: "\\rangle"
      }, {
        asciimath: ":}",
        tex: ".",
        free_tex: ":\\}"
      }, {
        asciimath: ")",
        tex: ")"
      }, {
        asciimath: "]",
        tex: "]"
      }, {
        asciimath: "}",
        tex: "\\rbrace"
      }, {
        asciimath: "rbrace",
        tex: "\\rbrace"
      }];
      this.leftright_brackets = [{
        asciimath: "|",
        left_tex: "\\lvert",
        right_tex: "\\rvert",
        free_tex: "|"
      }];
      this.unary_symbols = [{
        asciimath: "sqrt",
        tex: "\\sqrt"
      }, {
        asciimath: "f",
        tex: "f",
        func: true
      }, {
        asciimath: "g",
        tex: "g",
        func: true
      }, {
        asciimath: "sin",
        tex: "\\sin",
        func: true
      }, {
        asciimath: "cos",
        tex: "\\cos",
        func: true
      }, {
        asciimath: "tan",
        tex: "\\tan",
        func: true
      }, {
        asciimath: "arcsin",
        tex: "\\arcsin",
        func: true
      }, {
        asciimath: "arccos",
        tex: "\\arccos",
        func: true
      }, {
        asciimath: "arctan",
        tex: "\\arctan",
        func: true
      }, {
        asciimath: "sinh",
        tex: "\\sinh",
        func: true
      }, {
        asciimath: "cosh",
        tex: "\\cosh",
        func: true
      }, {
        asciimath: "tanh",
        tex: "\\tanh",
        func: true
      }, {
        asciimath: "cot",
        tex: "\\cot",
        func: true
      }, {
        asciimath: "coth",
        tex: "\\coth",
        func: true
      }, {
        asciimath: "sech",
        tex: "\\operatorname{sech}",
        func: true
      }, {
        asciimath: "csch",
        tex: "\\operatorname{csch}",
        func: true
      }, {
        asciimath: "sec",
        tex: "\\sec",
        func: true
      }, {
        asciimath: "csc",
        tex: "\\csc",
        func: true
      }, {
        asciimath: "log",
        tex: "\\log",
        func: true
      }, {
        asciimath: "ln",
        tex: "\\ln",
        func: true
      }, {
        asciimath: "abs",
        rewriteleftright: ["|", "|"]
      }, {
        asciimath: "norm",
        rewriteleftright: ["\\|", "\\|"]
      }, {
        asciimath: "floor",
        rewriteleftright: ["\\lfloor", "\\rfloor"]
      }, {
        asciimath: "ceil",
        rewriteleftright: ["\\lceil", "\\rceil"]
      }, {
        asciimath: "Sin",
        tex: "\\Sin",
        func: true
      }, {
        asciimath: "Cos",
        tex: "\\Cos",
        func: true
      }, {
        asciimath: "Tan",
        tex: "\\Tan",
        func: true
      }, {
        asciimath: "Arcsin",
        tex: "\\Arcsin",
        func: true
      }, {
        asciimath: "Arccos",
        tex: "\\Arccos",
        func: true
      }, {
        asciimath: "Arctan",
        tex: "\\Arctan",
        func: true
      }, {
        asciimath: "Sinh",
        tex: "\\Sinh",
        func: true
      }, {
        asciimath: "Cosh",
        tex: "\\Cosh",
        func: true
      }, {
        asciimath: "Tanh",
        tex: "\\Tanh",
        func: true
      }, {
        asciimath: "Cot",
        tex: "\\Cot",
        func: true
      }, {
        asciimath: "Sec",
        tex: "\\Sec",
        func: true
      }, {
        asciimath: "Csc",
        tex: "\\Csc",
        func: true
      }, {
        asciimath: "Log",
        tex: "\\Log",
        func: true
      }, {
        asciimath: "Ln",
        tex: "\\Ln",
        func: true
      }, {
        asciimath: "Abs",
        tex: "\\Abs",
        rewriteleftright: ["|", "|"]
      }, {
        asciimath: "det",
        tex: "\\det",
        func: true
      }, {
        asciimath: "exp",
        tex: "\\exp",
        func: true
      }, {
        asciimath: "gcd",
        tex: "\\gcd",
        func: true
      }, {
        asciimath: "lcm",
        tex: "\\operatorname{lcm}",
        func: true
      }, {
        asciimath: "cancel",
        tex: "\\cancel"
      }, {
        asciimath: "Sqrt",
        tex: "\\Sqrt"
      }, {
        asciimath: "hat",
        tex: "\\hat",
        acc: true
      }, {
        asciimath: "bar",
        tex: "\\overline",
        acc: true
      }, {
        asciimath: "overline",
        tex: "\\overline",
        acc: true
      }, {
        asciimath: "vec",
        tex: "\\vec",
        acc: true
      }, {
        asciimath: "tilde",
        tex: "\\tilde",
        acc: true
      }, {
        asciimath: "dot",
        tex: "\\dot",
        acc: true
      }, {
        asciimath: "ddot",
        tex: "\\ddot",
        acc: true
      }, {
        asciimath: "ul",
        tex: "\\underline",
        acc: true
      }, {
        asciimath: "underline",
        tex: "\\underline",
        acc: true
      }, {
        asciimath: "ubrace",
        tex: "\\underbrace",
        acc: true
      }, {
        asciimath: "underbrace",
        tex: "\\underbrace",
        acc: true
      }, {
        asciimath: "obrace",
        tex: "\\overbrace",
        acc: true
      }, {
        asciimath: "overbrace",
        tex: "\\overbrace",
        acc: true
      }, {
        asciimath: "bb",
        atname: "mathvariant",
        atval: "bold",
        tex: "\\mathbf"
      }, {
        asciimath: "mathbf",
        atname: "mathvariant",
        atval: "bold",
        tex: "mathbf"
      }, {
        asciimath: "sf",
        atname: "mathvariant",
        atval: "sans-serif",
        tex: "\\mathsf"
      }, {
        asciimath: "mathsf",
        atname: "mathvariant",
        atval: "sans-serif",
        tex: "mathsf"
      }, {
        asciimath: "bbb",
        atname: "mathvariant",
        atval: "double-struck",
        tex: "\\mathbb"
      }, {
        asciimath: "mathbb",
        atname: "mathvariant",
        atval: "double-struck",
        tex: "\\mathbb"
      }, {
        asciimath: "cc",
        atname: "mathvariant",
        atval: "script",
        tex: "\\mathcal"
      }, {
        asciimath: "mathcal",
        atname: "mathvariant",
        atval: "script",
        tex: "\\mathcal"
      }, {
        asciimath: "tt",
        atname: "mathvariant",
        atval: "monospace",
        tex: "\\mathtt"
      }, {
        asciimath: "mathtt",
        atname: "mathvariant",
        atval: "monospace",
        tex: "\\mathtt"
      }, {
        asciimath: "fr",
        atname: "mathvariant",
        atval: "fraktur",
        tex: "\\mathfrak"
      }, {
        asciimath: "mathfrak",
        atname: "mathvariant",
        atval: "fraktur",
        tex: "\\mathfrak"
      }];
      this.binary_symbols = [{
        asciimath: "root",
        tex: "\\sqrt",
        option: true
      }, {
        asciimath: "frac",
        tex: "\\frac"
      }, {
        asciimath: "stackrel",
        tex: "\\stackrel"
      }, {
        asciimath: "overset",
        tex: "\\overset"
      }, {
        asciimath: "underset",
        tex: "\\underset"
      }, {
        asciimath: "color",
        tex: "\\color",
        rawfirst: true
      }];
      this.non_constant_symbols = ["_", "^", "/"];
    }
  }, {
    key: "sort_symbols",
    value: function sort_symbols() {
      var by_asciimath = function by_asciimath(a, b) {
        a = a.asciimath.length, b = b.asciimath.length;
        return a > b ? -1 : a < b ? 1 : 0;
      };

      this.constants.sort(by_asciimath);
      this.relations.sort(by_asciimath);
      this.left_brackets.sort(by_asciimath);
      this.right_brackets.sort(by_asciimath);
      this.leftright_brackets.sort(by_asciimath);
      this.unary_symbols.sort(by_asciimath);
      this.binary_symbols.sort(by_asciimath);
    }
  }, {
    key: "error",
    value: function error(message, pos) {
      var neighbourhood = this.source(pos).slice(0, 5);
      throw new Error("Error at character ".concat(pos, " near \"").concat(neighbourhood, "\": ").concat(message));
    }
  }, {
    key: "literal",
    value: function literal(token) {
      if (token) {
        return {
          tex: token.token,
          pos: token.pos,
          end: token.end,
          ttype: "literal"
        };
      }
    }
  }, {
    key: "longest",
    value: function longest(matches) {
      matches = matches.filter(function (x) {
        return !!x;
      });
      matches.sort(function (x, y) {
        x = x.end;
        y = y.end;
        return x > y ? -1 : x < y ? 1 : 0;
      });
      return matches[0];
    }
  }, {
    key: "escape_text",
    value: function escape_text(str) {
      return str.replace(/\{/g, "\\{").replace(/\}/g, "\\}");
    }
  }, {
    key: "input",
    value: function input(str) {
      this._source = str;
      this.brackets = [];
    }
  }, {
    key: "source",
    value: function source() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var end = arguments.length > 1 ? arguments[1] : undefined;

      if (arguments.length > 1) {
        return this._source.slice(pos, end);
      } else {
        return this._source.slice(pos);
      }
    }
  }, {
    key: "eof",
    value: function eof() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      pos = this.strip_space(pos);
      return pos == this._source.length;
    }
  }, {
    key: "unbracket",
    value: function unbracket(tok) {
      if (!tok) {
        return;
      }

      if (!tok.bracket) {
        return tok;
      }

      var skip_brackets = ["(", ")", "[", "]", "{", "}"];
      var skipleft = skip_brackets.includes(tok.left.asciimath);
      var skipright = skip_brackets.includes(tok.right.asciimath);
      var pos = skipleft ? tok.left.end : tok.pos;
      var end = skipright ? tok.right.pos : tok.end;
      var left = skipleft ? "" : tok.left.tex;
      var right = skipright ? "" : tok.right.tex;
      var middle = tok.middle ? tok.middle.tex : "";

      if (left || right) {
        left = left || ".";
        right = right || ".";
        return {
          tex: "\\left ".concat(left, " ").concat(middle, " \\right ").concat(right),
          pos: tok.pos,
          end: tok.end
        };
      } else {
        return {
          tex: middle,
          pos: tok.pos,
          end: tok.end,
          middle_asciimath: this.source(pos, end)
        };
      }
    }
  }, {
    key: "parse",
    value: function parse(str) {
      this.input(str);
      var result = this.consume();
      return result.tex;
    }
  }, {
    key: "consume",
    value: function consume() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var tex = "";
      var exprs = [];

      while (!this.eof(pos)) {
        var expr = this.expression_list(pos);

        if (!expr) {
          var rb = this.right_bracket(pos);

          if (rb) {
            if (rb.def.free_tex) {
              rb.tex = rb.def.free_tex;
            }

            expr = rb;
          }

          var lr = this.leftright_bracket(pos);

          if (lr) {
            expr = lr;
            var ss = this.subsup(lr.end);

            if (ss) {
              expr = {
                tex: "".concat(expr.tex).concat(ss.tex),
                pos: pos,
                end: ss.end,
                ttype: "expression"
              };
            }
          }
        }

        if (expr) {
          if (tex) {
            tex += " ";
          }

          tex += expr.tex;
          pos = expr.end;
          exprs.push(expr);
        } else if (!this.eof(pos)) {
          var chr = this.source(pos, pos + 1);
          exprs.push({
            tex: chr,
            pos: pos,
            ttype: "character"
          });
          tex += chr;
          pos += 1;
        }
      }

      return {
        tex: tex,
        exprs: exprs
      };
    }
  }, {
    key: "strip_space",
    value: function strip_space() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var osource = this.source(pos);
      var reduced = osource.replace(/^(\s|\\(?!\\))*/, "");
      return pos + osource.length - reduced.length;
    }
    /* Does the given regex match next?
     */

  }, {
    key: "match",
    value: function match(re, pos) {
      pos = this.strip_space(pos);
      var m = re.exec(this.source(pos));

      if (m) {
        var token = m[0];
        return {
          token: token,
          pos: pos,
          match: m,
          end: pos + token.length,
          ttype: "regex"
        };
      }
    }
    /* Does the exact given string occur next?
     */

  }, {
    key: "exact",
    value: function exact(str, pos) {
      pos = this.strip_space(pos);

      if (this.source(pos).slice(0, str.length) == str) {
        return {
          token: str,
          pos: pos,
          end: pos + str.length,
          ttype: "exact"
        };
      }
    }
  }, {
    key: "expression_list",
    value: function expression_list() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var expr = this.expression(pos);

      if (!expr) {
        return;
      }

      var end = expr.end;
      var tex = expr.tex;
      var exprs = [expr];

      while (!this.eof(end)) {
        var comma = this.exact(",", end);

        if (!comma) {
          break;
        }

        tex += " ,";
        end = comma.end;
        expr = this.expression(end);

        if (!expr) {
          break;
        }

        tex += " " + expr.tex;
        exprs.push(expr);
        end = expr.end;
      }

      return {
        tex: tex,
        pos: pos,
        end: end,
        exprs: exprs,
        ttype: "expression_list"
      };
    } // E ::= IE | I/I                       Expression

  }, {
    key: "expression",
    value: function expression() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var negative = this.negative_expression(pos);

      if (negative) {
        return negative;
      }

      var first = this.intermediate_or_fraction(pos);

      if (!first) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.non_constant_symbols[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var c = _step.value;
            var m = this.exact(c, pos);

            if (m) {
              return {
                tex: c,
                pos: pos,
                end: m.end,
                ttype: "constant"
              };
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return;
      }

      if (this.eof(first.end)) {
        return first;
      }

      var second = this.expression(first.end);

      if (second) {
        return {
          tex: first.tex + " " + second.tex,
          pos: first.pos,
          end: second.end,
          ttype: "expression",
          exprs: [first, second]
        };
      } else {
        return first;
      }
    }
  }, {
    key: "negative_expression",
    value: function negative_expression() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var dash = this.exact("-", pos);

      if (dash && !this.other_constant(pos)) {
        var expr = this.expression(dash.end);

        if (expr) {
          return {
            tex: "- ".concat(expr.tex),
            pos: pos,
            end: expr.end,
            ttype: "negative_expression",
            dash: dash,
            expression: expr
          };
        } else {
          return {
            tex: "-",
            pos: pos,
            end: dash.end,
            ttype: "constant"
          };
        }
      }
    }
  }, {
    key: "intermediate_or_fraction",
    value: function intermediate_or_fraction() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var first = this.intermediate(pos);

      if (!first) {
        return;
      }

      var frac = this.match(/^\/(?!\/)/, first.end);

      if (frac) {
        var second = this.intermediate(frac.end);

        if (second) {
          var ufirst = this.unbracket(first);
          var usecond = this.unbracket(second);
          return {
            tex: "\\frac{".concat(ufirst.tex, "}{").concat(usecond.tex, "}"),
            pos: first.pos,
            end: second.end,
            ttype: "fraction",
            numerator: ufirst,
            denominator: usecond
          };
        } else {
          var _ufirst = this.unbracket(first);

          return {
            tex: "\\frac{".concat(_ufirst.tex, "}{}"),
            pos: first.pos,
            end: frac.end,
            ttype: "fraction",
            numerator: _ufirst,
            denominator: null
          };
        }
      } else {
        return first;
      }
    } // I ::= S_S | S^S | S_S^S | S          Intermediate expression

  }, {
    key: "intermediate",
    value: function intermediate() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var first = this.simple(pos);

      if (!first) {
        return;
      }

      var ss = this.subsup(first.end);

      if (ss) {
        return {
          tex: "".concat(first.tex).concat(ss.tex),
          pos: pos,
          end: ss.end,
          ttype: "intermediate",
          expression: first,
          subsup: ss
        };
      } else {
        return first;
      }
    }
  }, {
    key: "subsup",
    value: function subsup() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var tex = "";
      var end = pos;
      var sub = this.exact("_", pos);
      var sub_expr, sup_expr;

      if (sub) {
        sub_expr = this.unbracket(this.simple(sub.end));

        if (sub_expr) {
          tex = "".concat(tex, "_{").concat(sub_expr.tex, "}");
          end = sub_expr.end;
        } else {
          tex = "".concat(tex, "_{}");
          end = sub.end;
        }
      }

      var sup = this.match(/^\^(?!\^)/, end);

      if (sup) {
        sup_expr = this.unbracket(this.simple(sup.end));

        if (sup_expr) {
          tex = "".concat(tex, "^{").concat(sup_expr.tex, "}");
          end = sup_expr.end;
        } else {
          tex = "".concat(tex, "^{}");
          end = sup.end;
        }
      }

      if (sub || sup) {
        return {
          tex: tex,
          pos: pos,
          end: end,
          ttype: "subsup",
          sub: sub_expr,
          sup: sup_expr
        };
      }
    } // S ::= v | lEr | uS | bSS             Simple expression

  }, {
    key: "simple",
    value: function simple() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.longest([this.matrix(pos), this.bracketed_expression(pos), this.binary(pos), this.constant(pos), this.text(pos), this.unary(pos), this.negative_simple(pos)]);
    }
  }, {
    key: "negative_simple",
    value: function negative_simple() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var dash = this.exact("-", pos);

      if (dash && !this.other_constant(pos)) {
        var expr = this.simple(dash.end);

        if (expr) {
          return {
            tex: "- ".concat(expr.tex),
            pos: pos,
            end: expr.end,
            ttype: "negative_simple",
            dash: dash,
            expr: expr
          };
        } else {
          return {
            tex: "-",
            pos: pos,
            end: dash.end,
            ttype: "constant"
          };
        }
      }
    } // matrix: leftbracket "(" expr ")" ("," "(" expr ")")* rightbracket
    // each row must have the same number of elements

  }, {
    key: "matrix",
    value: function matrix() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var left = this.left_bracket(pos);
      var lr = false;

      if (!left) {
        left = this.leftright_bracket(pos, "left");

        if (!left) {
          return;
        }

        lr = true;
      }

      var contents = this.matrix_contents(left.end, lr);

      if (!contents) {
        return;
      }

      var right = lr ? this.leftright_bracket(contents.end, "right") : this.right_bracket(contents.end);

      if (!right) {
        return;
      }

      var contents_tex = contents.rows.map(function (r) {
        return r.tex;
      }).join(" \\\\ ");
      var matrix_tex = contents.is_array ? "\\begin{array}{".concat(contents.column_desc, "} ").concat(contents_tex, " \\end{array}") : "\\begin{matrix} ".concat(contents_tex, " \\end{matrix}");
      return {
        tex: "\\left ".concat(left.tex, " ").concat(matrix_tex, " \\right ").concat(right.tex),
        pos: pos,
        end: right.end,
        ttype: "matrix",
        rows: contents.rows,
        left: left,
        right: right
      };
    }
  }, {
    key: "matrix_contents",
    value: function matrix_contents() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var leftright = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var rows = [];
      var end = pos;
      var row_length = undefined;
      var column_desc = undefined;
      var is_array = false;

      while (!this.eof(end) && !(leftright ? this.leftright_bracket(end) : this.right_bracket(end))) {
        if (rows.length) {
          var comma = this.exact(",", end);

          if (!comma) {
            return;
          }

          end = comma.end;
        }

        var lb = this.match(/^[(\[]/, end);

        if (!lb) {
          return;
        }

        var cells = [];
        var columns = [];
        end = lb.end;

        while (!this.eof(end)) {
          if (cells.length) {
            var _comma = this.exact(",", end);

            if (!_comma) {
              break;
            }

            end = _comma.end;
          }

          var cell = this.matrix_cell(end);

          if (!cell) {
            break;
          }

          if (cell.ttype == "column") {
            columns.push("|");
            is_array = true;

            if (cell.expr !== null) {
              columns.push("r");
              cells.push(cell.expr);
            }
          } else {
            columns.push("r");
            cells.push(cell);
          }

          end = cell.end;
        }

        if (!cells.length) {
          return;
        }

        if (row_length === undefined) {
          row_length = cells.length;
        } else if (cells.length != row_length) {
          return;
        }

        var rb = this.match(/^[)\]]/, end);

        if (!rb) {
          return;
        }

        var row_column_desc = columns.join("");

        if (column_desc === undefined) {
          column_desc = row_column_desc;
        } else if (row_column_desc != column_desc) {
          return;
        }

        rows.push({
          ttype: "row",
          tex: cells.map(function (c) {
            return c.tex;
          }).join(" & "),
          pos: lb.end,
          end: end,
          cells: cells
        });
        end = rb.end;
      }

      if (row_length === undefined || row_length <= 1 && rows.length <= 1) {
        return;
      }

      return {
        rows: rows,
        end: end,
        column_desc: column_desc,
        is_array: is_array
      };
    }
  }, {
    key: "matrix_cell",
    value: function matrix_cell() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var lvert = this.exact("|", pos);

      if (lvert) {
        var middle = this.expression(lvert.end);

        if (middle) {
          var rvert = this.exact("|", middle.end);

          if (rvert) {
            var second = this.expression(rvert.end);

            if (second) {
              return {
                tex: "\\left \\lvert ".concat(middle.tex, " \\right \\rvert ").concat(second.text),
                pos: lvert.pos,
                end: second.end,
                ttype: "expression",
                exprs: [middle, second]
              };
            }
          } else {
            return {
              ttype: "column",
              expr: middle,
              pos: lvert.pos,
              end: middle.end
            };
          }
        } else {
          return {
            ttype: "column",
            expr: null,
            pos: lvert.pos,
            end: lvert.end
          };
        }
      }

      return this.expression(pos);
    }
  }, {
    key: "bracketed_expression",
    value: function bracketed_expression() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var l = this.left_bracket(pos);

      if (l) {
        var middle = this.expression_list(l.end);

        if (middle) {
          var r = this.right_bracket(middle.end) || this.leftright_bracket(middle.end, "right");

          if (r) {
            return {
              tex: "\\left".concat(l.tex, " ").concat(middle.tex, " \\right ").concat(r.tex),
              pos: pos,
              end: r.end,
              bracket: true,
              left: l,
              right: r,
              middle: middle,
              ttype: "bracket"
            };
          } else if (this.eof(middle.end)) {
            return {
              tex: "\\left".concat(l.tex, " ").concat(middle.tex, " \\right."),
              pos: pos,
              end: middle.end,
              ttype: "bracket",
              left: l,
              right: null,
              middle: middle
            };
          } else {
            return {
              tex: "".concat(l.tex, " ").concat(middle.tex),
              pos: pos,
              end: middle.end,
              ttype: "expression",
              exprs: [l, middle]
            };
          }
        } else {
          var _r = this.right_bracket(l.end) || this.leftright_bracket(l.end, "right");

          if (_r) {
            return {
              tex: "\\left ".concat(l.tex, " \\right ").concat(_r.tex),
              pos: pos,
              end: _r.end,
              bracket: true,
              left: l,
              right: _r,
              middle: null,
              ttype: "bracket"
            };
          } else {
            return {
              tex: l.tex,
              pos: pos,
              end: l.end,
              ttype: "constant"
            };
          }
        }
      }

      if (this.other_constant(pos)) {
        return;
      }

      var left = this.leftright_bracket(pos, "left");

      if (left) {
        var _middle = this.expression_list(left.end);

        if (_middle) {
          var right = this.leftright_bracket(_middle.end, "right") || this.right_bracket(_middle.end);

          if (right) {
            return {
              tex: "\\left ".concat(left.tex, " ").concat(_middle.tex, " \\right ").concat(right.tex),
              pos: pos,
              end: right.end,
              bracket: true,
              left: left,
              right: right,
              middle: _middle,
              ttype: "bracket"
            };
          }
        }
      }
    } // r ::= ) | ] | } | :) | :} | other right brackets

  }, {
    key: "right_bracket",
    value: function right_bracket() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.right_brackets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var bracket = _step2.value;
          var m = this.exact(bracket.asciimath, pos);

          if (m) {
            return {
              tex: bracket.tex,
              pos: pos,
              end: m.end,
              asciimath: bracket.asciimath,
              def: bracket,
              ttype: "right_bracket"
            };
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    } // l ::= ( | [ | { | (: | {: | other left brackets

  }, {
    key: "left_bracket",
    value: function left_bracket() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.left_brackets[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var bracket = _step3.value;
          var m = this.exact(bracket.asciimath, pos);

          if (m) {
            return {
              tex: bracket.tex,
              pos: pos,
              end: m.end,
              asciimath: bracket.asciimath,
              ttype: "left_bracket"
            };
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "leftright_bracket",
    value: function leftright_bracket() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var position = arguments.length > 1 ? arguments[1] : undefined;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.leftright_brackets[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var lr = _step4.value;
          var b = this.exact(lr.asciimath, pos);

          if (b) {
            return {
              tex: position == "left" ? lr.left_tex : position == "right" ? lr.right_tex : lr.free_tex,
              pos: pos,
              end: b.end,
              ttype: "leftright_bracket"
            };
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: "text",
    value: function text() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var quoted = this.match(/^"([^"]*)"/, pos);

      if (quoted) {
        var text = this.escape_text(quoted.match[1]);
        return {
          tex: "\\text{".concat(text, "}"),
          pos: pos,
          end: quoted.end,
          ttype: "text",
          text: text
        };
      }

      var textfn = this.match(/^(?:mbox|text)\s*(\([^)]*\)?|\{[^}]*\}?|\[[^\]]*\]?)/, pos);

      if (textfn) {
        var _text = this.escape_text(textfn.match[1].slice(1, textfn.match[1].length - 1));

        return {
          tex: "\\text{".concat(_text, "}"),
          pos: pos,
          end: textfn.end,
          ttype: "text",
          text: _text
        };
      }
    } // b ::= frac | root | stackrel | other binary symbols

  }, {
    key: "binary",
    value: function binary() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this.binary_symbols[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var binary = _step5.value;
          var m = this.exact(binary.asciimath, pos);

          var _ref = binary.option ? ["[", "]"] : ["{", "}"],
              _ref2 = _slicedToArray(_ref, 2),
              lb1 = _ref2[0],
              rb1 = _ref2[1];

          if (m) {
            var a = this.unbracket(this.simple(m.end));

            if (a) {
              var atex = binary.rawfirst ? a.middle_asciimath : a.tex;
              var b = this.unbracket(this.simple(a.end));

              if (b) {
                return {
                  tex: "".concat(binary.tex).concat(lb1).concat(atex).concat(rb1, "{").concat(b.tex, "}"),
                  pos: pos,
                  end: b.end,
                  ttype: "binary",
                  op: binary,
                  arg1: a,
                  arg2: b
                };
              } else {
                return {
                  tex: "".concat(binary.tex).concat(lb1).concat(atex).concat(rb1, "{}"),
                  pos: pos,
                  end: a.end,
                  ttype: "binary",
                  op: binary,
                  arg1: a,
                  arg2: null
                };
              }
            } else {
              return {
                tex: "".concat(binary.tex).concat(lb1).concat(rb1, "{}"),
                pos: pos,
                end: m.end,
                ttype: "binary",
                op: binary,
                arg1: null,
                arg2: null
              };
            }
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    } // u ::= sqrt | text | bb | other unary symbols for font commands

  }, {
    key: "unary",
    value: function unary() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = this.unary_symbols[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var u = _step6.value;
          var m = this.exact(u.asciimath, pos);

          if (m) {
            var ss = this.subsup(m.end);
            var sstex = ss ? ss.tex : "";
            var end = ss ? ss.end : m.end;
            var barg = this.simple(end);
            var arg = u.func ? barg : this.unbracket(barg);
            var argtex = arg && (u.raw ? arg.middle_asciimath : arg.tex);

            if (u.rewriteleftright) {
              var _u$rewriteleftright = _slicedToArray(u.rewriteleftright, 2),
                  left = _u$rewriteleftright[0],
                  right = _u$rewriteleftright[1];

              if (arg) {
                return {
                  tex: "\\left ".concat(left, " ").concat(argtex, " \\right ").concat(right, " ").concat(sstex),
                  pos: pos,
                  end: arg.end,
                  ttype: "unary",
                  op: m,
                  subsup: ss,
                  arg: arg
                };
              } else {
                return {
                  tex: "\\left ".concat(left, " \\right ").concat(right, " ").concat(sstex),
                  pos: pos,
                  end: m.end,
                  ttype: "unary",
                  op: m,
                  subsup: ss,
                  arg: null
                };
              }
            } else {
              if (arg) {
                return {
                  tex: "".concat(u.tex).concat(sstex, "{").concat(argtex, "}"),
                  pos: pos,
                  end: arg.end,
                  ttype: "unary",
                  op: m,
                  subsup: ss,
                  arg: arg
                };
              } else {
                return {
                  tex: "".concat(u.tex).concat(sstex, "{}"),
                  pos: pos,
                  end: m.end,
                  ttype: "unary",
                  op: m,
                  subsup: ss,
                  arg: null
                };
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
            _iterator6["return"]();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    } // v ::= [A-Za-z] | greek letters | numbers | other constant symbols

  }, {
    key: "constant",
    value: function constant() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.right_bracket(pos)) {
        return;
      }

      return this.longest([this.other_constant(pos), this.greek(pos), this.name(pos), this.number(pos), this.arbitrary_constant(pos)]);
    }
  }, {
    key: "name",
    value: function name() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.literal(this.match(/^[A-Za-z]/, pos));
    }
  }, {
    key: "greek",
    value: function greek() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var re_greek = new RegExp("^(" + this.greek_letters.join("|") + ")");
      var m = this.match(re_greek, pos);

      if (m) {
        return {
          tex: "\\" + m.token,
          pos: pos,
          end: m.end,
          ttype: "greek"
        };
      }
    }
  }, {
    key: "number",
    value: function number() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var re_number = new RegExp("^\\d+(" + this.decimalsign + "\\d+)?");
      return this.literal(this.match(re_number, pos));
    }
  }, {
    key: "other_constant",
    value: function other_constant() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = this.constants[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var sym = _step7.value;
          var m = this.exact(sym.asciimath, pos);

          if (m) {
            return {
              tex: "".concat(sym.tex),
              pos: m.pos,
              end: m.end,
              ttype: "other_constant"
            };
          }
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
            _iterator7["return"]();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = this.relations[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var _sym = _step8.value;

          if (!_sym.asciimath.match(/^!/)) {
            var notm = this.exact("!" + _sym.asciimath, pos);

            if (notm) {
              return {
                tex: "\\not ".concat(_sym.tex),
                pos: notm.pos,
                end: notm.end,
                ttype: "other_constant"
              };
            }
          }
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
            _iterator8["return"]();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }
    }
  }, {
    key: "arbitrary_constant",
    value: function arbitrary_constant() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!this.eof(pos)) {
        if (this.exact(",", pos)) {
          return;
        }

        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = this.non_constant_symbols.concat(this.left_brackets.map(function (x) {
            return x.asciimath;
          }), this.right_brackets.map(function (x) {
            return x.asciimath;
          }), this.leftright_brackets.map(function (x) {
            return x.asciimath;
          }))[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var nc = _step9.value;

            if (this.exact(nc, pos)) {
              return;
            }
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
              _iterator9["return"]();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        var spos = this.strip_space(pos);
        var symbol = this.source(spos).slice(0, 1);
        return {
          tex: symbol,
          pos: pos,
          end: spos + 1,
          ttype: "arbitrary_constant"
        };
      }
    }
  }]);

  return AsciiMathParser;
}();

exports["default"] = AsciiMathParser;