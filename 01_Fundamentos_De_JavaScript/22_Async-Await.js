//babel
// code pen
//Codigo anterior

'use strict';
function get(URL){
  return new Promise((resolve, reject) =>{
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
        const DONE = 4;
        const OK = 200;
        if(this.readyState === DONE){
           if(this.status === OK){
              resolve(JSON.parse(this.responseText));
           }
           else{
              reject(new Error(`Se produjo un error al realizar el request: ${this.status}`));
           }
        }

      }

     xhr.open('GET', URL);
     xhr.send(null);
 });
}

function handleError(err){
  return console.log('Request Failed: ' + err);
}

let luke;
fetch('https://swapi.co/api/people/1/')
.then(response => response.json())
.then((json)=>{
  luke = json;
  return fetch(luke.homeworld);
})
.then(response => response.json())
.then((json)=>{
  luke.homeworld = json;
  console.log(`${luke.name} nacio en ${luke.homeworld.name}`);
})
.catch((err) => handleError(err));

////codigo nuevo

'use strict';

var getLuke = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, luke, responseHomeWorld;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch('https://swapi.co/api/people/1/');

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            luke = _context.sent;
            _context.next = 9;
            return fetch(luke.homeworld);

          case 9:
            responseHomeWorld = _context.sent;
            _context.next = 12;
            return responseHomeWorld.json();

          case 12:
            luke.homeworld = _context.sent;

            console.log(luke.name + ' nacio en ' + luke.homeworld.name);
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context['catch'](0);

            handleError(_context.t0);

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 16]]);
  }));

  return function getLuke() {
    return _ref.apply(this, arguments);
  };
}();


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function handleError(err) {
  return console.log('Request Failed: ' + err);
}

getLuke()