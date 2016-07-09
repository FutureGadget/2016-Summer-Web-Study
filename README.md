<h1>GIT command summary</h1> 
<h5>계속 추가 부탁!</h5>

<h4>주의 : 명령어 입력시 '\<'또는 '\>'는 빼고 입력해야 함.</h4>
<ul>
<li>
	Remote Repository 복사해오기(폴더 자동으로 생성)
	<ul>
		<li>\>\>git clone https://github.com/FutureGadget/2016-Summer-Web-Study.git</li>
	</ul>
</li>
<li>
	gh-pages Branch로 변경 (해당 repository 내 (.git폴더가 위치한 곳) 에서 실행)
	<ul>
		<li>\>\>git checkout gh-pages</li>
	</ul>
</li>
<li>
	Directory 또는 File 이름 변경
 	<ul>
 		<li>\>\>git mv \<ORIGINAL_NAME\> \<NEW_NAME\></li>
 	</ul>
</li>
<li>
	Branch 삭제
	<ul>
		<li>
			Local Repository의 브랜치 삭제
			<ul>
				<li>(삭제 위치는 삭제하려는 branch가 아닌 곳에서 해야함)</li>
				<li>\>\>git branch -d \<BRANCH_NAME\></li>
			</ul>
		</li>
		<li>
			Remote Repository의 브랜치 삭제
			<ul>
				<li>\>\>git push origin :\<BRANCH_NAME\></li>
			</ul>
		</li>
	</ul>
</li>
<li></li>
</ul>
<br>