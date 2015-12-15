var app = {
	createElement: function(params) {
		var element = document.createElement(params.tagName)

		if (params.className) {
			element.className = params.className;
		}


		if (params.content) {
			element.innerHTML = params.content;
		}

		return element;
	}
};

var $header = app.createElement({
	tagName: 'header',
	content: 'Тест по программированию'
});

document.body.appendChild($header);

var $questionBlock = app.createElement({
	tagName: 'ol'
});

document.body.appendChild($questionBlock);

for (var i = 1; i <= 3; i++) {
	var $question = app.createElement({
		tagName: 'li',
		className: 'question',
		content: 'Вопрос №' + i
	});

	$questionBlock.appendChild($question);

		for (var j = 1; j <= 3; j++) {
		var $answer = app.createElement({
			tagName: 'label',
			className: 'answer',
			content: '<input type="checkbox"> Вариант ответа №' + j
		});

		$question.appendChild($answer);
	};
};

var $button = app.createElement({
	tagName: 'button',
	className: 'btn btn-default center-block',
	content: 'Проверить мои результаты',
});

document.body.appendChild($button);
$button.setAttribute('type', 'submit');
