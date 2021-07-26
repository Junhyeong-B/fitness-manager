# 버전 0.1 ~
## 개요
웨이트 트레이닝을 하면서 운동한 내용을 무게, 횟수, 세트수, 쉬는시간(Optional) 등을 기록하고, 사이클을 돌아 다시 운동할 때 이전의 데이터를 보기좋게 정리하여 보여줘서 점진적 과부하를 달성하기 수월하도록 하고 싶습니다.
최초 목적은 운동 기록을 작성하는 것에서 기회가 된다면 근육 부위별 운동 정보를 보여주어 운동할 때마다 찾아서 하는게 아니라 한 페이지 내에서 정리된 운동정보를 보고 싶어서 웹페이지 제작을 시작했습니다.

## 사용한 기술
* 언어 : HTML / CSS / Javascript

## 동작
▶ 버전 0.1 : 메인 페이지를 만들고 메인페이지에서 운동정보, 운동기록 등으로 이동할 수 있는 링크를 추가하여 마우스 포인트 이동 시 밑줄을 그어 사용자가 링크임을 알 수 있게 하였습니다.(차 후 업데이트로 각 링크를 통해 페이지 이동이 가능하게 하고, 각 링크로 이동 시 필요한 정보를 얻거나 기록이 가능하게 하는 내용을 추가)
* 아직 구현가능한 HTML / CSS 및 Javascript 기술이 부족하여 Website를 선 제작 후 공부하며 개선해나갈 예정입니다.

▶ 버전 0.2 : 메인 페이지 하단부에 메뉴에 커서가 닿기도 전에 효과가 나타다 수정, background 이미지 align 센터로 수정.  
+) Javascript, Media query를 이용하여 550px 미만일 때 아래 메뉴가 사라지고, bar 버튼을 통해 상단에 메뉴가 나타나게 추가하였습니다.  
<p align="center"><img src="https://user-images.githubusercontent.com/85148549/122865604-a0eb5d80-d361-11eb-841f-49db9e7d5cb8.JPG" height="300px">
 <img src="https://user-images.githubusercontent.com/85148549/122865610-a2b52100-d361-11eb-9251-4ce0d000b5f9.JPG" height="300px"></p>  
<p align="center">[PC 화면 / 모바일 화면]</p>  
  
  

▶ 버전 0.3 : bar 버튼으로 생성된 메뉴들에 커서 위치 시 background-color 변경 → color 변경 및 transition 추가하여 자연스럽게 변경, 사진 용량 Down
 * Workout Information 창 추가하여 Concept 작성, 세부적인 내용 및 Design은 변경 예정.
 * 버전 0.3.1 : Workout Information 창에 사진 및 사진에 hover 시 div transform을 통해 아래쪽에서 클릭 가능한 창 올라오고, 글자에 따로 hover 시 색깔 변화를 줘서 클릭 가능한지 구분 가능하게 변경.
 * 버전 0.3.2 : 사진에 hover로 나타나는 글씨를 클릭하면 해당 운동 정보가 나타나는 popup 창 추가하였습니다.(해당 버전에선 운동 1개만 적용 중)
 * 버전 0.3.3 : 각 사진에 해당하는 운동 정보를 추가하였고, 화면 좌측에 sideBar 를 추가하여 추후 해당 부위별 운동 정보를 사용자가 쉽게 접근할 수 있도록 만들었습니다.
 * 버전 0.3.4 : PC 화면으로 보면 의도한대로 나오지만, 일정 PX 미만의 Mobile 등으로 확인하면 사진이 잘리고 sideBar도 잘려 일정 PX 미만일 때 sideBar를 Toggle 버튼을 만들어 없애고 나타날 수 있게 수정하였고, 운동정보 확인할 때 화면이 잘려 JS를 이용해 일정 PX 미만일 때 크기가 알맞게 줄어들도록 수정하였습니다.
 * 버전 0.3.5 : 현재 화면이 어떤 화면인지 알 수 없어 현재 페이지를 중앙부에 표시하였고, 화면이 작아졌을 때 나타나는 bar icon이 직관적이지 않아 아래, 위 화살표를 삽입하여 화살표 클릭 시 toggle 메뉴가 나오고, bar 클릭 시 main link가 나오도록 수정하였습니다.
 * 버전 0.4 : 화면이 일정 px 이상일 때 main link는 항상 표시되도록 수정하였고, 넓을 때도 현재 페이지를 색깔로 표시하여 사용자가 인식 가능하게 함. +) JS를 이용해 운동 분류 tap click 시 title을 바뀌게하여 사용자가 현재 페이지를 인식할 수 있게 함.

<p align="center"><img src="https://user-images.githubusercontent.com/85148549/122865931-1eaf6900-d362-11eb-8b56-cfb35e2972dd.JPG" height="300px">
<img src="https://user-images.githubusercontent.com/85148549/122865838-fde71380-d361-11eb-83d3-6b32758e3510.JPG" height="300px"></p>
<p align="center">[PC 화면(Pop up 창 나타나기 전) / 모바일 화면(Pop up 창 나타난 후)]</p>
  
  
▶ 버전 0.4 : Workout Log Page 추가. 최초 아이디어로 이전 운동 기록 확인 링크와 운동 기록 입력 링크 두가지로 나뉘어 표시함. 직관적으로 알아볼 수 있는 아이콘 이미지를 활용하였고, 이미지에 커서 이동 시 link 이동 정보를 translate 하여 보여줌.
 * 버전 0.4.1 : Workout Log Page에서 당일 운동 계획 메뉴를 추가하였고, 해당 메뉴는 차후 진입 시 당일 날짜, 시간 등이 표시되고, 해야할 운동의 종목을 입력하여 버튼을 클릭하면 List가 형성되어 Check 또는 Delete가 가능하도록 추가할 예정.
 * 버전 0.4.2 : 당일 운동 계획 메뉴에 들어가면 Date 객체를 이용해 접속했을 때의 날짜, 요일, 시간 등을 표현했고, 아래 Text 타입 input을 추가하여 사용자가 운동 계획을 추가할 수 있도록 하였음.
 * 버전 0.4.3 : Input에 값을 입력하면 Input 창 아래에 입력한 list가 나오게 되고, check 버튼, delete 버튼을 추가해서 check 버튼 클릭하면 line through가 되어 사용자가 check한 것을 눈으로 인식할 수 있게 하고, delete 버튼을 누르면 transform 후 지워지는 애니메이션을 추가 / filter 할 수 있는 select를 추가.(아직 기능은 미구현)
 * 버전 0.4.3.1 : filter 기능을 수행하는 select를 추가하여 complete 시 check 되어있는 list만 보여주고, uncomplete 시 check가 되어있는 list를 제외한 나머지 list들을 보여주도록 추가.
 * 버전 0.4.3.2 : Workout Log 창 들어갔을 때 나타나는 아이콘 3개의 배경색을 파스텔 톤으로 변경해서 보기 편안하게 수정.
+)Workout Log 창에서 Select를 추가하여 가슴~팔 등 5가지의 분할을 선택할 수 있게했고, 선택함에 따라 나타나는 radio type input에 따라 클릭하면 자동으로 input text 칸에 입력되도록 수정(현재 radio 체크박스는 가슴 운동만 표시되며 기능 추가 예정)
 * 버전 0.4.3.3 : Set 수, 무게(kg)을 간단하게 설정할 수 있는 Select를 만들었고, 해당 Select를 설정하면 Input Text값에 자동으로 입력되게 기능 추가함, 초기화 버튼을 생성하여 입력한 내용을 모두 지울 수 있도록 설정, CSS를 수정해서 좀 더 보기 좋은 색상, 모양으로 변경.
<p align="center"><img src="https://user-images.githubusercontent.com/85148549/122866487-fc6a1b00-d362-11eb-8e73-e9764068579d.JPG" height="300px">
<img src="https://user-images.githubusercontent.com/85148549/122866433-e4929700-d362-11eb-9f22-c638922f87de.JPG" height="300px"></p>
<p align="center">[Workout Log 페이지 / Workout Log 당일 운동 계획 페이지]</p>


▶ 버전 0.5 : 최초 홈페이지 접속 시 이동 가능했던 메뉴 중 main page 추가. 해당 페이지에서는 Fitness Manager에서 제공할 수 있는 정보를 한눈에 볼 수 있도록 근성장의 3요소를 사진과 함께 추가하여 사용자가 직관적으로 이해할 수 있게 했고, CSS를 이용해 사진을 클릭하기 전에 Transform 효과를 추가함.
 * 버전 0.5.1 : 당일 운동 계획 페이지에서 "운동 종목 선택" 셀렉트를 선택하면 해당 부위에 맞는 대표 운동 6가지가 나타나게 하고, 다른 부위 선택 시 해당 부위만 표시되도록 기능 추가.
main 페이지에서 그림에 나타나는 글씨가 작아 크기 수정.
 * 버전 0.5.1.1 : 당일 운동 계획 페이지를 mobile 화면(작은 화면)으로 접속했을 때 크기나 위치가 어긋나 media query 를 이용하여 위치 조정.
 * 버전 0.5.2 : workout information 페이지에 가슴 운동 항목을 추가. 변수 명 first, second 등으로 변경
 * 버전 0.5.2.1 : workout information 등 운동 페이지 추가.
 * 버전 0.5.2.2 : my own workout log 페이지, main menu 페이지를 작은 화면(모바일)으로 접속했을 때 이용이 적합하도록 크기 및 배치 조절.
<p align="center"><img src="https://user-images.githubusercontent.com/85148549/122868231-a64aa700-d365-11eb-90d4-a449284926ec.JPG" height="300px"></p>
  
 * 버전 0.5.2.3 : main 페이지에서 stretching 클릭했을 때 이동할 수 있는 스트레칭 정보 페이지 추가. 스트레칭 종류, 해야하는 방법 등 정보를 제공.(내용 및 영상 내용 추가 예정)
 * 버전 0.5.3 : stretching 페이지 접속 시 keyframes, animation을 이용해 순서대로 내용이 나타나는 기능을 추가했고, 아래에 사진들을 이용해 각 스트레칭의 차이 및 정보를 알 수 있게 추가. → 해당 내용은 사용자가 한가지 정보에 집중할 수 있게 slide 되는 효과를 이용하여 한가지만 나타나게 함.
<p align="center"><img src="https://user-images.githubusercontent.com/85148549/123504717-cba52100-d695-11eb-9d12-7654312b911a.JPG" height="200px">
<img src="https://user-images.githubusercontent.com/85148549/124704420-0416eb80-df2f-11eb-8757-1101c61e6c01.JPG" height="200px">
<img src="https://user-images.githubusercontent.com/85148549/124704465-155ff800-df2f-11eb-91b8-baae3929f0c0.JPG" height="200px"></p>
<p align="center">[사이트에 접속했을 때 순서대로 글씨 표시 / 사이트가 모두 Load 되었을 때 / 화살표 label을 클릭했을 때 sliding]</p>

 * 버전 0.5.3.1 : stretching 화면에서 첫 번째로 보이는 ? 이미지를 클릭했을 때 동적 스트레칭의 중요성에 대한 영상과 내용들이 modal Popup 형태로 나타나게 함.
 * 버전 0.5.3.2 : stretching 사이트에서 의도한 3가지 정보의 이미지를 클릭하면 해당 내용이 popup 되는 모달 추가.
 * 버전 0.5.3.3 : stretching 페이지의 이미지를 a 태그 → div 태그로 변경, 이미지에 마우스 hover 시 아래에서 글자가 올라오게 추가, 최초 이미지 클릭 시 나타나는 popup 창은 글씨를 클릭해야 나타나게 수정. 
 * 버전 0.5.4 : main 페이지에서 nutrition 이미지를 클릭하면 접속할 수 있는 영양 정보 사이트 추가.
 * 버전 0.5.4.1 : nutrition 페이지 사진 추가 및 keyframe 적용하여 페이지 로딩 후 하나 씩 표시되도록 추가.
 * 버전 0.5.4.2 : workout information 하체 운동 페이지 추가.
 * 버전 0.5.4.3 : nutrition 페이지에서 체중 감량, 체중 증량 박스를 클릭하면 해당 컨텐츠가 나타나도록 기능 추가.
 * 버전 0.5.4.4 : stretching 페이지 media query를 이용해 모바일 화면에 최적화.
 * 버전 0.5.4.5 : shoulder workout 페이지 추가, nutrition page에서 영양 정보에 transform 효과 추가되도록 javascript 수정.
 * 버전 0.5.4.6 : Main Page에서 접속할 수 있는 Training Page 추가(컨텐츠 없는 초기 단계), Main Page 접속 시 애니메이션 추가하여 동적 로딩 효과 추가.
 * 버전 0.5.4.7 : Training 페이지에 Main 내용 추가 및 왼쪽의 글씨 클릭 시 해당 내용 표시되도록 추가(내용 업데이트 예정)
<p align="center"><img src="https://user-images.githubusercontent.com/85148549/125027162-c944bd00-e0c0-11eb-962e-4a6a72661653.JPG" height="300px"></p>
<p align="center">[Training 페이지]</p>
 
 * 버전 0.5.4.8 : Training Page 내용(Content) 추가, Animation 추가하여 로딩 후 동작.
 * 버전 0.5.4.9 : Training Page 창 크기에 맞게 중앙에 Content 표시되도록 수정, Media Query를 추가하여 모바일 화면 최적화.
 * 버전 0.5.5 : My Own Workout Log 페이지에 표현한 색이 복잡하고 어울리지 않아 전체적으로 모노톤으로 수정, 추가로 해당 페이지가 이미지만 나타나있어 설명란 추가.
 * 버전 0.5.5.1 : Workout Log 페이지에서 이동 가능한 사이트 이미지를 아이콘으로 바꾸고 호버 효과 추가, Training 페이지 내용 문단 나누기 추가.
 <p align="center"><img src="https://user-images.githubusercontent.com/85148549/122866487-fc6a1b00-d362-11eb-8e73-e9764068579d.JPG" height="250px"> →
 <img src="https://user-images.githubusercontent.com/85148549/125311659-8740a300-e36e-11eb-9f0c-78c216308ee4.JPG" height="250px">
  <p align="center">[기존 Workout Log 페이지 / 수정 후 Workout Log 페이지]</p>
  
 * 버전 0.5.5.2 : Workout Log 페이지에 불필요한 html 내용 삭제, Media Query를 이용하여 모바일 화면 최적화.
 * 버전 0.5.5.3 : Fitness Manager 첫 메인 페이지가 메뉴 이동 링크만 있어 페이지 전체적으로 수정, 이후 아래로 스크롤하면 Fitness Manager에 대한 정보가 나타나도록 컨텐츠 추가 예정
 * 버전 0.5.5.4 : 첫 화면에서 스크롤 했을 때 변형 효과 추가 및 타 페이지에서 첫 화면으로 돌아갈 수 있도록 전 html 문서 수정
<p align="center"><img src="https://user-images.githubusercontent.com/85148549/122865604-a0eb5d80-d361-11eb-841f-49db9e7d5cb8.JPG" height="200px"> → 
 <img src="https://user-images.githubusercontent.com/85148549/125893797-99660368-c08f-4729-8343-5b7e4655e36f.JPG" height="200px"> → 
 <img src="https://user-images.githubusercontent.com/85148549/125893804-e28809a3-1039-4611-8401-02d7cfee4971.JPG" height="200px"></p>
<p align="center">[최초 첫 화면 / 수정 후 첫 화면 / Scroll 했을 때 화면]</p>
  
 * 버전 0.5.6 : Fitness Manager 사이트 이용간 궁금한 사항에 대한 FAQ 사이트 제작
 * 버전 0.5.6.1 : FAQ 페이지에서 Answer 부분 들여쓰기 및 Answer부분은 안보이게 처리 후 Question 클릭 시 나타날 수 있도록 기능 추가, 전 html 문서 FAQ 페이지 이동 href 수정.
<p align="center"><img src="https://user-images.githubusercontent.com/85148549/126194130-066d6752-8392-4a8d-ac36-080cdfaf9f3a.png" height="300px"></p>
<p align="center">[FAQ 페이지(더미 텍스트, 차후 수정 예정)]</p>
 
 * 버전 0.5.6.2 : 상단에 위치한 메뉴 이동 시 현재 위치하고 있는 페이지가 표시되도록 수정.
 * 버전 0.5.6.3 : Stretching 페이지에서 Label을 이용한 CSS 슬라이드 에서 Javascript + Button 을 이용한 Slide로 수정(Stretching_ver2)하여 유지보수에 더 용이하게 변경(차후 Prev, Next 버튼 생성 및 Animation 효과 추가 예정)
 * 버전 0.5.6.4 : Stretching 페이지 버튼 클릭 시 버튼에 해당 위치 표시 및 Animation 효과 추가.
 * 버전 0.5.6.5 : Stretching 페이지에서 이미지 커서 오버 시 글씨 나타나게 한 후 해당 정보에 맞는 동영상이 나오도록 모달 Pop up 추가, 이미지 크기 조절.
 * 버전 0.5.6.6 : Stretching 페이지에 다음, 이전으로 넘어가는 버튼 추가.(기존 버튼은 이미지 따라 움직였으나 Javascript를 이용하는 방법으로 변경하여 고정)
 * 버전 0.5.6.7 : Stretching 페이지 Media Query 적용하여 모바일 화면 최적화.
<p align="center"><img src="https://user-images.githubusercontent.com/85148549/126889009-73f85a72-880f-4356-9472-9c609a1b8de5.JPG" height="250px">
<img src="https://user-images.githubusercontent.com/85148549/126889011-b25e4db3-6a65-48ad-a3a7-b0fe8aa696f9.JPG" height="250px">
<p align="center">[Stretching 페이지 : Javascript 적용 후 화면 / Mobile 화면]</p>

 * 버전 0.5.6.8 : Fitness Manager 첫 화면에서 768px 이하일 때 토글 메뉴가 나타나게 수정, Animation 효과를 이용하여 순서대로 메뉴가 나타나도록 추가.


### Source code
###### 사이트 이동(메인) : https://junhyeong-b.github.io/html/fitmanager_ver2.html
###### HTML Folder : https://github.com/Junhyeong-B/Junhyeong-B.github.io/tree/main/html
###### CSS Folder : https://github.com/Junhyeong-B/Junhyeong-B.github.io/tree/main/css
###### Javascript Folder : https://github.com/Junhyeong-B/Junhyeong-B.github.io/tree/main/javascript
