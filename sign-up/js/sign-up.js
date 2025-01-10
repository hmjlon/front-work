
    function check(){
      //입력한 내용을 사라지지 않게 유지하는 함수 
      event.preventDefault();
      const userId = document.querySelector("#uid");
      const email = document.querySelector("#email");
      const password = document.querySelector('#pwd1');
      const confirmPassword = document.querySelector('#pwd2');
      const path = document.querySelector('#path');
      const memo = document.querySelector('#memo');
      const mail_y = document.querySelector('#mail_y');
      const mail_n = document.querySelector('#mail_n');
      const mailling = document.getElementsByName('mailling');


      //1.아이디가 4~10자  사이인지 확인

      if(userId.value.length < 4 || userId.value.length > 10 ) {
        alert('아이디가 4~10자 사이인지 확인하세요.');
        userId.focus();
        
      }
      //2.이메일이 비었는지 확인
      if(email.value.length ==0){
        alert('이메일이 비었습니다. 입력해주세요.');
        //비우고 
        email.value = '';
        //포커스 주기 
        email.focus();
      }
      //3.비밀번호와 비밀번호 확인 두 값이 같은 지 확인 
      if(password.value !== confirmPassword.value){
      alert('비밀번호와 비밀번호 확인 두 값이 같은 지 확인하세요.');
        confirmPassword.value='';
        confirmPassword.focus();
      }


      //메일 수신 여부 검사 -> 리턴 값 결정 
      let mailReceive;
      

      mailling.forEach((x) => {
        if(x.checked){
          mailReceive = x.value;
          
        }
      });


      console.log('User-ID : ' + userId.value);
      console.log('Email : ' + email.value);
      console.log('password : ' + password.value);
      console.log('가입경로 :' +path.value);
      console.log('메모:' + memo.value);
      console.log('mail_y:' + mail_y.value);
      console.log('mail_n:' + mail_n.value);
      console.log('mailReceive :' + mailReceive.value);
    }
  