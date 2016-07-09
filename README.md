<h1>GIT command summary</h1> 
<h4>계속 추가 부탁!</h4>

<ul>
<li>
	<h5>Remote Repository 복사해오기(폴더 자동으로 생성)</h5>
	<ul>
		<li>git clone https://github.com/FutureGadget/2016-Summer-Web-Study.git</li>
	</ul>
</li>
<li>
	<h5>gh-pages Branch로 변경 (해당 repository 내 (.git폴더가 위치한 곳) 에서 실행)</h5>
	<ul>
		<li>git checkout gh-pages</li>
	</ul>
</li>
<li>
	<h5>Directory 또는 File 이름 변경</h5>
 	<ul>
 		<li>git mv 'ORIGINAL_NAME' 'NEW_NAME'</li>
 	</ul>
</li>
<li>
	<h5>Branch 삭제</h5>
	<ul>
		<li>
			<h6>Local Repository의 브랜치 삭제</h6>
			<ul>
				<li>(삭제 위치는 삭제하려는 branch가 아닌 곳에서 해야함)</li>
				<li>git branch -d 'BRANCH_NAME'</li>
			</ul>
		</li>
		<li>
			<h6>Remote Repository의 브랜치 삭제</h6>
			<ul>
				<li>git push origin :'BRANCH_NAME'</li>
			</ul>
		</li>
	</ul>
</li>
</ul>
<br>