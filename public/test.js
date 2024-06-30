console.log('Server is starting...');

class Course {
  constructor(name, title, credit, prerequisite, curriculum) {
      this._name = name;
      this._title = title;
      this._credit = credit;
      this._prerequisite = prerequisite;
      this._curriculum = curriculum;
  }

    // Getter for name
    get name() {
      return this._name;
    }
  
    // Getter for title
    get title() {
      return this._title;
    }
  
    // Getter for credit
    get credit() {
      return this._credit;
    }
  
    // Getter for prerequisite
    get prerequisite() {
      if (this._prerequisite == null ) {
        return 'No prerequisites'
      }
      return this._prerequisite;
    }
  
    // Getter for curriculum
    get curriculum() {
      if (this._curriculum == 'NOTSBC') {
        return ''
      }
      return this._curriculum;
    }

    getDetails() {
      return  this._name + ': ' + this._title + ' | ' + this._credit + ' credits ';
    }
}

const courseList = [];
courseList.push(new Course('CSE101', 'Computer Science Principles', 3, null, 'CS'));
courseList.push(new Course('CSE102', 'Introduction to Web Design and Programming', 4, 'CSE101', 'CS'));
courseList.push(new Course('CSE114', 'Introduction to Object-Oriented Programming', 4, 'CSE101', 'CS'));
courseList.push(new Course('CSE214', 'Data Structures', 3, 'CSE114', 'CS'));
courseList.push(new Course('CSE215', 'Foundations of Computer Science', 3, 'CSE114', 'CS'));
courseList.push(new Course('CSE216', 'Programming Abstractions', 4, 'CSE214', 'CS'));
courseList.push(new Course('CSE220', 'System Fundamentals I', 4, 'CSE215', 'CS'));
courseList.push(new Course('CSE300', 'Technical Communications', 3, 'CSE220', 'ENG'));
courseList.push(new Course('CSE301', 'History of Computing', 3, 'CSE220', 'ARTS'));
courseList.push(new Course('CSE303', 'Introduction to the Theory of Computation', 4, 'CSE220', 'CS'));
courseList.push(new Course('CSE304', 'Compiler Design', 4, 'CSE303', 'CS'));
courseList.push(new Course('CSE305', 'Principles of Database Systems', 4, 'CSE303', 'CS'));

function initializeSentences() {
    // 초기 문장 배열
    const sentences = courseList;
    const selectedIndices = [];
  
    // 문장 컨테이너 요소 가져오기
    const sentenceContainer = document.getElementById('sentenceContainer');
    const selectedIndicesDisplay = document.getElementById('selectedIndices');
  
    // 문장과 버튼 생성 및 화면에 표시
    sentences.forEach((sentence, index) => {
      const sentenceDiv = document.createElement('div');
      sentenceDiv.className = 'sentence';

      // Assuming you have the sentenceText element as described
      const sentenceText = document.createElement('span');
      sentenceText.className = 'courseName';
      sentenceText.textContent = sentence.name;
      // Create an element to show additional information
      const additionalInfo = document.createElement('span');
      additionalInfo.textContent = sentence.getDetails();
      additionalInfo.style.color = 'red';
      additionalInfo.style.display = 'none'; // Hide initially
      sentenceText.appendChild(additionalInfo);
      // Add event listeners to show/hide the additional information
      sentenceText.addEventListener('mouseover', () => {
        additionalInfo.style.display = 'inline';
      });
      sentenceText.addEventListener('mouseout', () => {
        additionalInfo.style.display = 'none';
      });

      const button = document.createElement('button');
      button.textContent = 'Select';
      button.onclick = () => {
        selectedIndices.push(index);
        selectedIndicesDisplay.textContent = 'Selected Indices: [' + selectedIndices.join(', ') + ']';
      };
      sentenceDiv.appendChild(button);
      sentenceDiv.appendChild(sentenceText);
      sentenceContainer.appendChild(sentenceDiv);
    });
  }
  
// Append the sentenceText element to the document (e.g., to a specific div)
document.body.appendChild(sentenceText);
  // 서버에서 데이터 가져오기 (옵션)
  fetch('/api/data')
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
    });
  