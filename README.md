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
