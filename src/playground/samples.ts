
const address1 = { city: 'Dorsten', zip: 46282 };
const cloneAdd1 = { ...address1 };
const cloneAdd2 = { ...address1, zip: 444444 };
const city = 'dorsten';
const zip = 12345;
const address2 = { city, zip };
const cloneAdd3 = { ...address1, zip };

const list1 = [1, 2, 3, 4];
const cloneList1 = [...list1];
const extList1 = [...list1, 5, 6, 7];
const extList2 = [0, ...list1, 5, 6, 7];

const obj = { param1: 23, param2: 45 };
const { param2 } = obj;


// <button id='btn' onclick="fct()">...</button>


class NavBtn {
  constructor(private btn: HTMLButtonElement) {
    this.initEvents();
  }

  private initEvents() {
    this.btn.addEventListener('click', () => {
      console.log(this);
    })
  }
}



function func1(param1, param2) {
  console.log ( param1, param2 )
}

const func2 = () => 123;
const func3 = param => param + 123;
const func4 = (p1, p2) => {
  console.log ( p1, p2 )
};

let user = 'saban';
let user2: string = 'saban';

interface IHuman {
  age: number;
}

class Human implements IHuman {

  age = 44;

  private _address = 'dorsten';

  get address(): string {
    return this._address;
  }

  set address( value: string ) {
    this._address = value;
  }

  constructor( public name: string ) {

  }
  sayHello() {
    console.log(this.name);
  }


}

class Man extends Human {
  constructor( name: string ) {
    super( name );
  }
  sayHello() {
    super.sayHello();
  }
  sleep(params: { p1: number, p2?: number, p3?: number }  ) {
    console.log( params );
  }
  sleep2( p1: number, p2?: number, p3?: number, ...rest: number[]  ) {
    console.log( p1, p2, p3 );
  }
}

const saban: Man = new Man( 'saban' );
saban.sleep( { p1: 123 , p3: 456 } );
saban.sleep2( 123, undefined, 456, 3 , 4 ,5   );
// saban.address
console.log(saban.address);
saban.address = 'Dorsten';

for (let i = 0; i < 10; i++) {
  console.log(i);
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

const user3 = 'saban';
// user3 = 'peter';

const user4 = { name: 'JSON' };
user4.name = 'erlaubt';

const user5: any = 123;

