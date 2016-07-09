<h1>GIT command summary</h1> 
<h5>계속 추가 부탁!</h5>

<h4>주의 : 명령어 입력시 '\<'또는 '\>'는 빼고 입력해야 함.</h4>

*Remote Repository 복사해오기(폴더 자동으로 생성)<br>
 \>\>git clone https://github.com/FutureGadget/2016-Summer-Web-Study.git

*gh-pages Branch로 변경 (해당 repository 내 (.git폴더가 위치한 곳) 에서 실행)<br>
 \>\>git checkout gh-pages

*작업 폴더 생성<br>
 \>\>mkdir \<FOLDER_NAME\>

*Directory 또는 File 이름 변경<br>
 \>\>git mv \<ORIGINAL_NAME\> \<NEW_NAME\>

*Branch 삭제
 -Local Repository의 브랜치 삭제 (삭제 위치는 삭제하려는 branch가 아닌 곳에서 해야함)<br>
  \>\>git branch -d \<BRANCH_NAME\>
 -Remote Repository의 브랜치 삭제<br>
  \>\>git push origin :\<BRANCH_NAME\>