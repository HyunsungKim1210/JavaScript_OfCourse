# 프로젝트 제목
OfCourse

최초 작성일:2024-06-01
최근 수정일:2024-06-24
최근 작성자(수정자): 김현성

## 목차
1. [소개]
2. [설치]
3. [사용 방법]
4. [기여 방법]
5. [개발 계획]
6. [라이선스]
7. [연락처 정보]

## 소개

OfCourse는 학생과 coordinator를 대상으로 SUNY Korea의 졸업 요건을 계산해 주는 웹페이지입니다. 
본 웹페이지는 각 학과의 졸업 요건을 정리하고, 현재 진행 상황에 맞추어 향후 계획을 수립하는 데 도움을 주는 것이 목표입니다.
이를 위해 OfCourse는 총 네 가지의 기능을 제공합니다.

1. 학과 졸업 요건을 정리하여 제공.
2. 현재 만족/불만족한 요건을 표시.
3. 현재 상황에 따른 향후 들어야 하는/들을 수 있는 강의 목록 제공.
4. 시간표 짜는 것을 돕는 기능.




## 설치

참고: 본래라면 프로젝트 파일을 git을 통해 공유하는 것이 맞지만, 현재는 git 없이 구글 드라이브에 압축 파일을 올려 공유합니다. Git을 통한 공유는 추후 진행바랍니다.

1) 개발 환경 설치.
  1-1)Visual Studio Code 개발 환경.
    가능하면 Google Apps Script 개발 환경으로 개발하는 것을 권장합니다. 
    이는 프로젝트가 Google Sheets와 연동하는 기능을 Google Apps Script에서 제공하는 기능으로 구현하고 있기 때문입니다. 

    1. Visual Studio Code를 설치합니다.
    2. Node.js를 설치합니다. 
      2-1. https://nodejs.org/en에서 LTS(Long Term Support) 버전을 다운로드하고 설치합니다.
      2-2. 터미널이나 명령 프롬프트에서 
          node -v
          npm -v
          를 입력하여 Node.js와 npm이 올바르게 설치되었는 지 확인합니다.(버전 번호가 출력된다면 올바르게 설치된 것입니다.)
    3. Visual Studio Code의 확장프로그램을 설치합니다. 설치하는 목록은 다음과 같습니다.
      ESLint
      Prettier - Code formatter
      Node.js Modules Intellisense
      npm Intellisense
      Path Intellisense
      JavaScript Debugger(Night 버전이 아님.)
    4. 프로젝트 폴더를 만듭니다. 제목은 OfCourse로 합니다.
      4-1. 터미널이나 명령 프롬프트에서 프로젝트 폴더로 이동합니다. (cd 명령어로 이동하거나, OfCourse폴더를 Visual Studio Code로 열어 터미널을 엽니다.)
      4-2. 터미널/명령 프롬프트에 다음을 입력합니다.
          npm init -y
          npm install express
  
  1-2)Google Apps Script 개발 환경.

  1. 개발용 계정으로 구글에 로그인합니다. 개발용 계정은 프로젝트 전용 계정과 개발자 본인의 계정이 있습니다.
    1-1) 프로젝트 전용 계정
      아이디:ofcourse.stonybrook@gmail.com
      비밀번호:OFsb1234*
    1-2)개발자 본인의 계정
      개발자 본인의 구글 계정으로 로그인합니다. 먼저 관리자가 해당 프로젝트를 공유해야 접속할 수 있으며, 
      만일 공유받지 못한 상태라면 관리자에게 연락하십시오. 또한, 현재 edu 계정으로는 오류가 발생하는 상황이 확인되었습니다.
      가능하면 @stonybrook.edu 계정이 아닌 @gmail.com 계정을 사용하십시오.
  2. OfCourse 프로젝트에 접속합니다.


2) Google Drive를 통한 프로젝트 압축 파일 다운로드.  
  1. Google Drive를 열어 공유받은 OfCourseZip 폴더에 이동합니다. 만일 공유받지 못했다면 6번 항목 ##[연락처 정보]를 통해 관리자에게 공유를 요청하십시오.
  2. OfCourseZip 폴더에서 가장 최신 압축 파일을 다운로드합니다.
  3. OfCourse 폴더에서 해당 압축 파일의 압축을 풉니다.


만일 질문 사항이 생긴다면 6번 항목 ##[연락처 정보]를 통해 관리자에게 연락하십시오.




## 사용 방법

1)일반

  1-1)Visual Studio Code 사용 방법
    1. Visual Studio Code를 실행하여 OfCourse 폴더를 엽니다.
    2. 디버그 버튼을 누릅니다.
    3. 터미널에 나타난 주소를 열어 정상적으로 웹페이지가 보이는 지 확인합니다.

  1-2)Google Apps Scirpt 사용 방법
    0. 해당 계정으로 처음 사용하는 경우 
      0-1. Code.gs 파일을 선택합니다.
      0-2. doGet 함수를 Run 합니다. 이는 Files 탭 오른쪽에서 확인 할 수 있습니다.
      0-3. 만일 권한을 요청한다면 허용해주십시오.
    1. 우 상단의 파란색 Deploy/배포 버튼의 역삼각형 버튼을 누릅니다.
    2. Test Deploy/테스트 배포를 선택합니다.
    3. 제공된 URL을 복사합니다.
    4. 인터넷 브라우저의 새 탭을 열어 복사한 URL을 붙여넣습니다. 이후 정상적으로 웹페이지가 보이는 지 확인합니다. 

2)관리자용
이 항목은 프로젝트를 관리하기 위해 관리자에게 필요한 지식을 안내합니다.

 2-1)Google Apps Script 권한 부여
  현재 OfCourse 프로젝트의 Google Cloud Platform 프로젝트는 In Production 상태입니다. 따라서 OAuth 권한 부여를 위해 별도의 조치를 취할 필요는 없습니다.
  새 사용자에게 권한을 부여하고 싶다면 Google Apps Script 프로젝트를 공유하는 것으로 끝납니다.
  Share 버튼을 눌러 공유할 사용자의 이메일 계정을 입력하여 공유하십시오.
  현재 @edu 계정으로는 오류가 발생하는 상황이 확인되었습니다.
  가능하면 @stonybrook.edu 계정이 아닌 @gmail.com 계정을 사용하도록 해주십시오.
 2-2)Google Cloud Platform(GCP)/Google Cloud Console/OAuth 관련
  Google Apps Script 프로젝트의 OAuth 권환 부여 관리를 위해서는 GCP를 사용해야 합니다. 
  현재 OfCourse 프로젝트는 GCP와 연동이 완료된 상태이고, 해당 GCP 프로젝트는 ofcourse.stonybrook@gmail.com 계정으로 Google Cloud Console에 접속하시면 확인할 수 있습니다.
  필요하다면 사용하십시오.
  현재 프로젝트는 테스트 상태가 아닌 In Production 상태입니다. 

## 개발 계획

구현해야 하는 기능은 다음과 같습니다.

1. 학과 졸업 요건을 정리하여 제공.
2. 현재 만족/불만족한 요건을 표시.
3. 현재 상황에 따른 향후 들어야 하는/들을 수 있는 강의 목록 제공.
4. 시간표 짜는 것을 돕는 기능.

다음은 디자인에 대한 설명이 아닌, 각 기능을 어떻게 구현할 지에 대한 설명입니다.
예를 들어, 다음 기능들이 한 페이지에 있어야 하는 지에 대한 설명은 없습니다.


1) 학과 졸업 요건 정리 및 제공


각 학과의 졸업 요건은 시간에 따라 바뀔 수 있습니다. 따라서 해당 정보는 코드에 정적으로 적혀 있는 것이 아닌, 별도의 저장소에 저장되어 웹페이지가 사용될 때마다 정보를 받아와야 합니다.
OfCourse는 Google App Script를 이용해 배포하기에, 졸업 요건은 Google Sheets에 저장하여 Google App Script의 기능으로 해당 정보를 끌어옵니다.

어떤 학과의 정보를 끌어올지 정하기 위해 사용자의 학과 정보를 입력받아야 합니다. SUNY Korea의 학과 수는 정해져 있기에, 이 정보는 사용자가 드롭다운 메뉴를 선택하므로써 입력합니다.

SUNY Korea의 졸업 요건은 다음과 같이 이루어져 있습니다. 졸업 요건의 이름과 들을 수 있는/들어야 하는 강의의 이름들. 
따라서 majorRequirement(requirementName,requireCourseList)라는 함수로 졸업 요건을 표시합니다.
requirementName은 졸업 요건의 이름을 저장하는 변수고, requireCourseList는 들을 수 있는/들어야 하는 강의들의 배열입니다.

따라서 학과 졸업 요건 정리 및 제공은 majorRequirement 함수의 나열로 표현됩니다.


2) 현재 만족/불만족한 요건을 표시


현 상황을 표시하기 위해선 사용자가 지금까지 어떤 강의들을 들었는 지 알아야 합니다.
따라서 이 기능은 
1. 사용자가 어떤 강의를 들었는 지 입력합니다.
2. 해당하는 강의의 isTaken field를 true로 바꿉니다.
3. majorRequirement 함수는 requireCourseList에 isTaken==true인 course가 있으면, 해당 요건이 fulfilled 되었음을 표시합니다. credit 관련 요건도 유사한 원리를 따라 fulfilled 되었음을 표시합니다.


3) 현재 상황에 따른 향후 들어야 하는 강의 목록 제공


2번 기능에서 사용자가 어떤 강의를 들었는 지 입력 받았으므로, 졸업 요건에서 fulfilled 안된 요건들이 사용자가 들어야하는 강의 목록입니다.
이때, prerequisite를 요구하는 강의들도 있으므로 해당 목록에서 듣지 못하는 강의들은 제외해야 합니다.

따라서 현재 상황에 따른 향후 들어야 하는 강의 목록 제공은 [들을 수 없는 강의들을 제외한, 들어야하는 강의 목록]을 표시하는 것으로 표현됩니다.


4) 시간표 기능


SUNY Korea에서 제공하는 강의 목록에는 해당 강의의 시간대를 제공합니다. 이 기능은 시간표에 사용자가 선택한 강의를 표시하는 것을 목표로 합니다.
이 기능은
1. 커다란 하얀 공간을 만들고, 상단에는 요일을, 왼쪽에는 9시부터 20시까지의 시간을 1시간 단위로 표시합니다. 각 영역은 검은 선으로 구분합니다. 이 선들로 구분지어진 칸들을 block이라 부르겠습니다.
2. 선택한 course에서 시간대 정보를 받아와 해당 block의 색을 바꿉니다. 
예를 들어, 어떤 강의가 금요일 9시 30분부터 11시 30분까지 진행될 경우, 금요일 9시 칸의 절반부터 11시 칸의 절반까지의 칸을 녹색으로 바꿉니다.
   2-1. 분단위의 조정은 시간 당 분의 비율로 조정합니다.
        예를 들어, 어떤 강의가 9시 50분부터 시작한다면, 9시 block은 10분에 해당하는만큼 색이 변해야합니다. 
        10분은 1시간인 60분으로 나눴을 때, 약 17%이므로 해당 9시 block의 끝에서부터 17%만큼의 색을 변화시킵니다.

시간표 기능은 이 기능의 반복으로 이루어집니다.  

## 기여 방법

1. OfCourseZip에서 가장 최신 버전의 압축 파일을 다운받고 OfCourse 폴더에 압축 해제합니다. 가장 최신 버전이란 v 뒤의 숫자가 가장 높은 압축 파일을 의미합니다.
2. 수정 전, Update.txt를 확인하여 변경사항을 확인합니다.
3. 프로젝트 파일을 수정합니다.
4. 변경 사항을 압축 파일로 만들어 저장합니다.
  4-1. 파일 이름에 관하여.
    OfCourse 내부 파일을 압축했을 때, 압축 파일 이름은 OfCourse_vA.B.C로 합니다. 이는 각 압축 파일들의 시간적 순서를 구분짓기 위함입니다. vA.B.C의 각 숫자가 의미하는 바는 다음과 같습니다.

    A: 프로젝트에 거대한 변화가 일어났을 때 숫자가 1씩 증가합니다. 
    예를 들어, v0.3.13이 학과 졸업 요건만 관련하여 다룰 때. 강의 시간표 계획을 돕는 기능이 새로이 추가되었다면, 해당 압축 파일은 v1.3.13이 됩니다.

    B: 프로젝트에 작은 기능 추가가 일어났을 때 숫자가 1씩 증가합니다. 
    예를 들어, v0.2.5가 학과 졸업 요건만 관련하여 다룰 때. 졸업 요건을 필터링하여 보여주는 기능이 새로이 추가되었다면, 해당 압축 파일은 v0.3.5가 됩니다.

    C: 프로젝트에 자잘한 수정이 일어났을 때 숫자가 1씩 증가합니다.
    예를 들어, v0.0.1의 버그를 수정하였다면, 해당 압축 파일은 v0.0.2가 됩니다.
  4-2. Update.txt에 관하여
    각 버전마다 어떤 수정이 일어났는 지 알리기 위해, 각 업로드 전에 Update.txt에 변경 사항을 입력해야합니다.
    최근의 변경사항일수록 해당 파일의 최상단에 위치해야합니다.
    양식은 다음과 같습니다.
    ---------------------------------(추후 추가될 변경사항과 구분을 위함)
    [업로드할 버전 이름][업로드 날짜 및 시간][파일을 수정한 사람 이름]
    [변경 사항 목록]
    [추가로 알려야 할 내용](필요시)
    날짜의 경우, 년도-월-일-시간(24시 기준)으로 표시합니다. 예를 들어, 2024-06-02-17:57.
5. 압축된 파일은 Google Drive의 OfCourseZip 폴더에 업로드합니다.


## 라이선스

MIT License

Copyright (c) 2024 OfCourse

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 기여자

김현성
강준구

## 연락처 정보
김현성 - kim.hyunsung@stonybrook.edu
강준구 - jungu.kang@stonybrook.edu