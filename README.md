1-0 UseState
useState 는 Array 를 리턴하고 첫번째 요소는 item, 두번쨰 요소는 setItem, 이 친구는 item 의 값을 변경해주는 기능을 함
함수에서 setItem(item + 1) 형식으로 item 값을 바꿔줄 수 있음

1-1 UseInput
const useInput = (initialValue) => {
const [value, setValue] = useState(initialValue);
return { value };
};

return { value } =>> { value : value } 객체를 return!!!!!!!

const name = useInput("Mr.");
name 은 {value: "Mr."} 이라는 객체가 되어 꺼내쓸때 name.value = "Mr." 이 된다.

useInput 에 validator 를 추가해주었는데 willUpdate 가 true 이고
App 에서 넣어줄 validator 부분 인자가 function 이면 true, false 를 받아 willUpdate 를 true or false 로 설정해주고 willUpdate 가 true 인경우 setValue 를 통해 입력값을 value 로 설정해 줌

App 에서 maxLen 이라는 validator function 을 만들고 useInput 인자로 전달해 검증기능을 사용한다

1-3 useTabs

content 라는 배열에 객체로 섹션1, 2 에 해당하는 콘텐츠들을 넣어 생성함
useTabs 함수는 인자로 초기탭의 인덱스와, 전체탭(위에서 생성한 content) 를 받음
배열을 반환하는 useState 의 첫번째는 현재값인 초기 인덱스, 두번째 setCurrentIndex 는 currentIndex 를 바꿔주는 역할을 하고
useState 의 값으로 initialIndex 를 받아서 currentIndex 로 지정해줌
이후 currentItem 객체에 전체탭인 content의 현재 인덱스 값을 반환함 ex) content[1] 은 section 2를 반환하고
changeItem 은 useState 에서 값을 바꿔주는 setCurrentIndex 를 담아반환

App 에서 useTabs 의 초기인덱스를 0으로 전체 배열은 content 배열을 지정해주고 리턴값의 currentItem 과 changeItem 을 뺴내서 const 로 저장
.map 을 사용하여 버튼을 만들어주고 onClick 이벤트를 사용해서 changeItem 으로 인덱스번호를 인자로 주어 currentItem 을 바꿔줌

2-0 useEffect
useEffect 는 componentWillUnmount 와 componentDIdMount, componentDidUpdate 와 비슷

useState 를 사용해서 버튼을 누를때마다 각각 number 와 aNumber 를 증가시키는 버튼생성, 각각 버튼을 누를때마다 console.log 가 출력됨

useEffect 는 componentDidMount, componentDidUpdate 의 역할을 함
useEffect 는 두가지 인자를 받는데 하나는 함수로서의 effect ex) 첫번째 인자로 sayHello 를 적으면 componentDidMount 시 콘솔 출력
두번째 인자는 바꿀값의 목록, dependency ex) [number] 로 지정하면 aNumber 가 바뀔때는 콘솔출력하지 않음

만약 component 가 Mount 되었을때 실행시키고 이외의 경우에는 실행시키고 싶지 않다면 빈 [] 를 전달해주면 componentDidMount 처럼 동장
dependency 에따라 동작이 달라짐
