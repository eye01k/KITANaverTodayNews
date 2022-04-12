// 제이쿼리 기본 JS - main.js 


$(() => {
    // console.log("로딩완료");

    /* 
        1. 대상선정 변수 할당
    */

    // 대상1: 버튼들 - .btns>button
    let btns = $(".btns>button");
    // console.log(btns.length);

    // 대상2: 미니언즈 - .mi
    let mi = $(".mi");

    // 대상3: 빌딩 각 방 - .building li
    let bd = $(".building li");
    // console.log(bd.length);

    // 대상4: 메시지박스 - .msg
    let msg = $(".msg");

    // 삽입 이미지 변수 셋팅
    // 좀비 이미지 태그
    let mz1 = `<img src="images/mz1.png" alt="좀비1" class="mz">`;
    let mz2 = `<img src="images/mz2.png" alt="좀비2" class="mz">`;
    let zom = `<img src="images/zom.png" alt="좀비들" class="mz">`;

    // 주사기 이미지
    let inj = `<img src="images/inj.png" alt="주사기" class="inj">`;

    // 미니언즈 가로위치 보정값
    // 윈도우 가로크기의 5%
    let win5 = $(window).width()*.05;
    console.log("윈도우 가로크기의 5%",win5);
    // width() 가로크기, height() 세로크기
    // -> 단위없는 px 숫자값 리턴

    /* 
         2. 초기화 셋팅
    */

    // 2-1. 버튼 셋팅: 모든 버튼 숨기고 첫번째 버튼만 보이게 함
    // 버튼들.숨겨().첫번째().보여()
    // btns.hide().first().show();

    // 중간 테스트를 위한 버튼 보이기 셋팅
    btns.hide().eq(0).show();

    // 2-2. 빌딩 숫자 셋팅: 
    // -> 모든 빌딩 li를 순서대로 돌면서 순번 넣기 + 좀비 넣기
    // 대상: 빌딩 li -> bd
    bd.each((idx, ele) => {
        // console.log(idx,ele);

        // 1. 각 li 요소에 글자 넣기(순번)
        $(ele).text(idx);

        // 2. 좀비+주사기 이미지 넣기
        // append(요소) - 선택요소 내부에 맨 뒤 추가
        if (idx === 9) $(ele).append(mz1);
        else if (idx === 7) $(ele).append(mz2);
        else if (idx === 1) $(ele).append(zom);
        else if (idx === 2) $(ele).append(inj);
    }); //////// each

    /* 
        [for문을 사용하지 않고 돌게 해주는 제이쿼리 메서드]
        -> each(function(idx, ele){구현부});
        -> each((idx, ele)=>{구현부});

        - 선택요소를 순서대로 돌면서 구현부를 실행
        - idx(첫번째 전달변수)는 순번이 전달됨(0부터)
        - ele(두번째 전달변수)는 요소 자신(this키워드와 동일)
        - 전달변수는 순서와 개수가 중요
        - 이 메서드를 사용하면 for문을 안 써도 됨
    */

    // 2-3 모든 좀비 숨기기
    $(".mz").hide();
    // for문을 돌리지 않아도 여러 개의 선택요소를 돌 수 있음

    /* 
        3. 버튼별 클릭 이벤트 함수 만들기
    */

    // 3-1. "들어가기" 버튼 클릭 이벤트 시작
    $(btns).first() // 버튼들 중 첫번째
        .click(function () {
            // 1. 클릭된 버튼 자신 없애기
            $(this).slideUp();
            // slideUp(시간,이징,함수) -> height 값이 0이 되면서 애니메이션 후 display none
            // <-> slideDown(시간,이징,함수)

            // 2. 메시지 지우기
            msg.fadeOut(200);
            // fadeOut(시간,이징,함수)
            // opacity 가 0이 되면서 애니메이션 후 display none
            // <-> fadeIn(시간,이징,함수)

            // 3. 미니언 위치 이동: 이동할 빌딩 li의 위치를 알아내기
            // 이동할 li 타겟 -> bd
            let tg = bd.eq(8); // 8번방
            // eq(순번) -> 선택요소들 중 몇번째 요소를 선택
            // eq는 sequence로부터 나옴

            // 화면에서의 top값
            let tgtop = tg.offset().top;
            // 화면에서의 left값
            let tgleft = tg.offset().left+win5;
            // console.log(tgtop,tgleft);
            /* 
                offset() 메서드
                - 기준: 윈도우 화면
                - 요소의 위치나 크기 정보를 담고 있음
                - offset().top -> 요소의 top값
                - offset().left -> 요소의 left값
                
                ____________________________________________
                position() 메서드
                - 기준: 포지션이 있는 부모박스
                - 요소의 위치나 크기 정보를 담고 있음
                - position().top -> 요소의 top값
                - position().left -> 요소의 left값

            */

            // 4. 미니언즈 이동하기
            // 대상: .mi
            mi.animate({
                top: tgtop+"px",
                left: tgleft+"px"
            },2000, // 시간
            "easeInOutBack", // 이징
            ()=>{ // 함수

            }); ////// animate

        }); /////// click
        // 3-1. "들어가기" 버튼 클릭 이벤트 끝


    // 3-2. "옆방으로" 버튼 클릭 이벤트 시작

    // 3-2. "옆방으로" 버튼 클릭 이벤트 끝

}); ////////////////// JQB