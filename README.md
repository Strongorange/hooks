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

2-1 useTitle
useTile 에 인자로initialTitle 을 받고 useState 를 사용해서 initialTitle 을 useState 의 초기값으로 설정해줌
useState 는 title, 과 title 을 변경해주는 setTitle 을 배열으로 반환
updataTitle 이라는 함수 => 문서에서 title 을 잡고 title 값을 setState 가 주는 title 로 수정해주는 함수
useEffect 를 사용해서 컴포넌트가 마운트 되었을때, dependency 로 title 을 입력해 title 이 바뀌는 경우 다시 updateTitle 을 실행하기로 함
useTitle 의 return 은 setState 의 title 을 바꿔주는 setTitle 을 return

App 에서 titleUpdator 는 초기값으로 "Loading..." 을 가지는 useTitle
useTitle 은 setTitle 을 return 하므로 titleUpdator 는 title 을 바꿀 수 있는 함수가 됨
2초의 시간지연 후에 titleUpdater 를 사용해서 title 값을 "Home" 으로 바꿔줌

2-2 useClick
Reference 에 관해서 설명
Reference 는 우리의 컴포넌트이 어떤 부분을 선택할 수 있는 방법 (getElementbyId 처럼)
리액트의 모든 엘리멘트들은 reference 속성을 지님

const potato = useRef();
<input ref={potato} />

potato 는 input 엘리먼트를 지칭함
setTimeout 을 통해서 3초 뒤에 focus 되게 해주었는데 potato.current 가 undefined 이라는 오류가떠서
setEffect 를 사용해서 컴포넌트가 마운트 된 후에 동작하게 해서 해결!

--
App 의 title 은 useClick 을 사용 useRef() 는 element 에 발생하고 element.current 가 있으면 클릭 이벤트에서 onClick 함수 탐재
그런데 컴포넌트가 UnMount 되면 이벤트를 삭제할 필요가 있음
함수를 return 함으로 컴포넌트가 언마운트시에 이벤트를 제거해 줌

sayHello 를 가진 useClick 이 mount 되었을때 click 이벤트를 추가해주고
unmount 시에 이벤트를 제거해 줌
useEffect 에서 function 을 리턴받으면 componentWillUnMount 에서 호출

2-3 useConfirm & usePreventLeave
useConfirm 은 확인창을 띄우고 한번 다시 생각해보게 하는 역할
useConfirm 이라는 함수를 만들고 빈 message, callback, rejection 함수를 인자로 전달
callback 과 rejection 의 유효성 검사를 함
confirmAction 이라는 함수로 window.confirm(message) 를 띄우면 브라우저 자체에서 창이떠서 확인, 취소를 물어 봄 확인을 누르면 true 취소를 누르면 false 가되고
true, false 에 따라서 callback, rejection 을 실행함

usePreventLeave
주로 웹사이트에서 글쓰다가 뒤로갈때 한번 경고를 띄워주는 것과 같음
useProtectLeave 라는 함수를 만드록 안에 event 를 인자로 받는 listener 함수를 생성 listener 는 event의 기본 기능을 막고 returnValue 를 지정해주는데 returnValue 를 지정해주어야 제대로 작동

enablePrevent 는 윈도우에 beforeunload 이벤트와 listner 콜백을 추가해줌
disablePrevent 는 위의 이벤트를 제거해 줌
return 으로 두 함수를 반환하고 App 에서 각각 버튼에 onClick 으로 함수실행

이벤트 beforeunload 가 확인창을 띄어주는 역할을 함!

2-4 useBeforeLeave
마우스가 창을 떠날때 기능을 실행하는 훅
useBeforeLeave 함수에 handleMouseLeave 라는 콜백 함수를 만듬 해당 콜백함수는
마우스가 떠날때 clientY 라는 마우스의 Y 축 값을 받아서 마우스가 위로 창을 벗어날때 useBeforeLeave 의 인자 함수인 onBefore 함수를 실행시켜 콘솔에 출력

useEffect 는 컴포넌트가 마운트된 후 mouseleave 이벤트와 콜백을 엮고 컴포넌트가 언마운트일시 이벤트를 삭제 dependency 는 공백으로 둬 오직 DidMount 와 WillUnMount 에서만 동작하게 설정

App 에서 useBeforeLeave 의 인자로 begForLife 를 전달해 콘솔출력!

2-5 useFadeIn && useNetwork
페이드인 효과를 주기위해 css 를 할 수 도 있지만 리액트 자체에서도 가능
useFadeIn 함수를 만들고 useRef 에서 사용한 것 처럼 element 에 useRef() 를 줌
element 는 App 에서 HTML 엘리먼트에서 Ref를 지정해주는 녀석들 자체가 됨
setEffect 훅에서 element.current 를 확인하고 element.current 로 HTML 엘리먼트를 지정선택
해당 엘리먼트에 .style.transition 으로 애니메이션과 opacity 를 줌!
useFadeIn 은 return 으로 객체를 반환하는데 객체에는 ref 하는 element 와 opacity 0을 제공하는 값이 들어있고 이걸 App 의 HTML 엘리먼트에서 {...} 형태로 풀어서 HTML 엘리먼트들의 속성으로 지정해 줌

useNetwork
네트워크의 상태가 바뀔때마다 기능을 하는 함수를 생성 ex) 온라인에서 오프라인으로 갈 시 감지하고 메세지를 띄움

useNetwork 라는 함수 안에서 setState 를 사용해 현재 status 에 navigator.onLine 으로 true, false 를 지정하고 setStatus 생성
useEffect 를 사용해 온라인과 오프라인 될 시 handleChange 를 실행하는 이벤트생성
handleChange 에서 useNetwork 의 인자가 함수이면 navigator.onLine 의 true, false 값을 인자로 인자 함수 실행하고 setStatus 로 현재의 상태를 변환함

App 에서 useNetwork 의 return 값인 status (true, false) 를 onLine 이라는 변수로 저장하고 useNetwork 의 인자 함수인 handleNetworkChange 를 보냄
이렇게 리턴받은 true, false 가지고 true 면 온라인 false 면 offline 을 출력!

2-6 useScroll & useFullscreen
useScroll
useScroll 을 만들고 useState의 초기값으로 {x,y} 로 설정
useEffect() 의 dependency 를 [] 로 해서 추가 업데이트는 없고 컴포넌트 마운트 이후 스크롤 이벤트를 언마운트일때 이벤트 제거를 추가해줌
이벤트 콜백 onScroll 에서는 현재 window.scrollX,Y 로 현재 스크롤값을 출력하고 setState 사용해 현재 state 에 스크롤 x,y 값 저장
useScroll 은 현재 state 를 리턴하고

App 에서 리턴받은 state 의 y 값을 받아 y 로 선언
HTML 엘리멘트에서 전체 스크롤길이를 1000vh 로 하고 hi 글자의 스타일을 지정해
y 스크롤 값이 400 이상 넘어가면 색깔을 바꿈

useFullscreen

useFullScreen 을 생성하고 element reference 를 지정
triggerFull 이라는 함수로 풀스크린에 진입하는데 element.current 가 존재하면 해당 엘리먼트에서 풀스크린을 요청하고 인자함수인 onFullScreen 에 true 를 넣어실행
exitFull 에서는 풀스크린에서 나가는데 풀스크린에 진입할때는 element 에서 진입하는데 빠져나올때는 document 에서 빠져나옴!!!!!! onFullScreen 에 false 제공
리턴값으로는 {element, triggerFUll, exitFull } 을 리턴함

App 에서는 useFullscreen 의 리턴을 {} 을 사용하여 꺼내주고 useFullscreen 에 onFullscreen 이라는 함수를 인자로 전달
div 에 ref 를 사용하여 div 에서 풀스크린 진입을 하게 해줌

2-7 useNotification good!!!!
https://developer.mozilla.org/ko/docs/Web/API/notification
알람을 주는 방법 앱 만들때도 유용할 듯

useNotification 는 title, options 를 전달받음
window 에 Notification 이 없다면 알람을 줄 수 없으므로 여기서 바로 함수를 종료
fireNoti 이 실제 알람을 생성하는 부분인데 Notification.permission 은 granted,denied, default 를 반환하며 사용자가 알람설정 수신 여부를 알려줌
수신상태가 granted 가 아니라면 첫번째로 requestPermission 을 통해서 알람수신을 요청함
https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission
requestPermission 은 promise 로 permission 을 리턴하는데 granted, denied, default 3가지를 리턴
permission 이 허가를 뜻하는 granted 일대 new Notification(title, options) 로 알람을 생성하게 하고 granted 가 아닐경우 알람 수신을 거부한 상태이니 함수를 멈추고 알람 생성을 중단

App 에서 triggerNoti 에서 인자를 전달함
https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
options 에는 여러가지 옵션을 넣어서 알람을 꾸밀 수 있음 여기서는 간단하게
서브텍스트 역할인 body 에 텍스트를 넣어서 보냄!
