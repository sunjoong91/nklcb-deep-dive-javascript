// 동작을 나타내는 메서드는 자신이 속한 객체 상태인 프로퍼티를 참조하고 변경할 수 있어야한다.
// 이 때 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.

// 자기 자신이 속한 객체를 재귀적으로 참조할 수 있지만 일반적이지 않고, 바람직하지도 않다.

// 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수가 존재해야 하는데
// 아직 인스턴스를 생성하기 이전이므로 생성자 함수가 생성할 인스턴스를 가리키는 식별자를 알수 없다.
// 이를 위해 자바스크립트는 this라는 특수한 식별자를 제공한다.

// this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다.
// this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
// this가 가리키는 값, this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.

function Circle(radius){
    this.radius = radius; // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
}

Circle.prototype.getDiameter = function() {
    return 2 * this.radius; // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
}

const circle = new Circle(5);
console.log(circle.getDiameter()); // 10

// 자바스크립트의 this는 함수가 호출되는 방식에 따라 this에 바인딩 될 값,
// 즉, this 바인딩이 동적으로 결정된다.

// this 바인딩은 함수 호출 방식, 즉 함수가 호출되었는지에 따라 동적으로 결정된다.

// 렉시컬 스코프는 함수 정의가 평가되어 객체가 생성되는 시점에 상위스코프를 결정하지만,
// this 바인딩은 함수 호출시에 결정된다.

// 주의 할 것은 동일한 함수도 다양한 방식으로 호출할 수있다.
// 1. 일반 함수 호출
// 2. 메서드 호출
// 3. 생성자 함수 호출
// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출

const foo = function(){
    console.dir(this);
}

foo(); // window (1. 일반 함수 호출 : foo 함수 내부의 this는 전역 객체 window를 가리킨다)

const obj = {foo};
obj.foo(); // obj (2. 메서드 호출 : foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킨다.)

new foo(); // foo{} (3. 생성자 함수 호출 : foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다.)

const bar = {name: 'bar'}; //4. 메서드에 의한 간접 호출 : foo 함수 내부의 this는 인수에 의해 결정된다.

// 기본적으로 this에는 전역객체가 바인딩된다.

// 일반 함수로 호출된 모든 함수(중첩 함수, 콜백함수 포함) 내부의 this에는 전역 객체가 바인딩된다.

// apply와 call 메서드의 본질적인 기능은 함수를 호출하는 것이다. 첫 번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다.

// 결론
// this 키워드는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다.
// this를 통해 자신이 속한 객체 또는 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
// this 바인딩은 함수 호출방식에 의해 동적으로 결정된다.
// 자바스크립트의 this는 함수가 호출되는 방식(어떻게 호출되었는지)에 따라 this 바인딩이 동적으로 결정된다.
// 일반함수로 호출된 모든 함수(중첩함수, 콜백함수 포함) 내부의 this에는 전역 객체가 바인딩된다.

// 일반 함수 호출 : 전역 객체(this 바인딩)
// 메서드 호출 : 메서드를 호출한 객체(this 바인딩)
// 생성자 함수 호출 : 생성자 함수가(미래에) 생성할 인스턴스
// Function.prototype.apply/call/bind 메서드에 의한 간접 호출 : 메서드에 첫 번째 인수로 전달한 객체
