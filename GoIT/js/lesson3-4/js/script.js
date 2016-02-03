var $wrapper;
var $header;
var $questionBlock;
var $question;
var questions = ['Question #1', 'Question #2', 'Question #3'];
var answers = [['Answer #1.1', 'Answer #1.2', 'Answer #1.3'], ['Answer #2.1', 'Answer #2.2', 'Answer #2.3'], ['Answer #3.1', 'Answer #3.2', 'Answer #3.3']];

var app = {

	createWrapper: function() {
		$wrapper = document.createElement('div');
		$wrapper.classList.add('wrapper');
		return $wrapper;
	},

	createHeader: function() {
		$header = document.createElement('header');
		$header.innerHTML = 'Тест по программированию';
		return $header;
	},

	insertHeader: function() {
		$wrapper.appendChild($header);
	},

	createQuestionBlock: function() {
		$questionBlock = document.createElement('ol');
		},

	insertQuestionBlock: function() {
		$wrapper.appendChild($questionBlock);
	},

	createQuestion: function() {
		for (var i = 0; i < questions.length; i++) {
			$question = document.createElement('li');
			$question.innerHTML = questions[i];
			$questionBlock.appendChild($question);
				
			for (var j = 0; j < answers.length; j++) {
				var $answer = document.createElement('label');
				var $input = document.createElement('input');
				$input.type = 'checkbox';
				$answer.appendChild($input);
				$answer.innerHTML += answers[i][j];
				$question.appendChild($answer);
			}				
		}
	},

	createButton: function() {
		var $button = document.createElement('button');
		$button.innerHTML = 'Проверить мои результаты';
		$button.classList.add('btn');
		$button.classList.add('btn-default');
		$button.classList.add('center-block');
		$questionBlock.appendChild($button);
	}
};

app.createWrapper();
app.createHeader();
app.createQuestionBlock();
app.createQuestion();
app.insertHeader();
app.insertQuestionBlock();
app.createButton();

document.body.appendChild($wrapper);