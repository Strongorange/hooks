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
