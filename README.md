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

▶ 버전 0.3 : bar 버튼으로 생성된 메뉴들에 커서 위치 시 background-color 변경 → color 변경 및 transition 추가하여 자연스럽게 변경, 사진 용량 Down
 * Workout Information 창 추가하여 Concept 작성, 세부적인 내용 및 Design은 변경 예정.

### Source code
메인 : https://github.com/Junhyeong-B/Junhyeong-B.github.io/blob/main/fitmanager.html
Workout Information : https://github.com/Junhyeong-B/Junhyeong-B.github.io/blob/main/workoutinfo.html
