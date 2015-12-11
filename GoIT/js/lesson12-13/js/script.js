var body = document.querySelector('body');
body.style.fontFamily = 'Arial';
body.style.fontSize = '18px';


var app = {
	createElement: function(params) {
		var element = document.createElement(params.tagName)

		if (params.inputType) {
			element.setAttribute('type', params.inputType);
		}

		if (params.className) {
			element.className = params.className;
		}

		if (params.content) {
			element.innerHTML = params.content;
		}

		if (params.parentElement) {
			params.parentElement.appendChild(element);
		}
		return element;
	},

	generateQuestions: function (questionsAmount, answersAmount) {
		
		for (var i = 1; i <= questionsAmount; i++) {

			var li = this.createElement({
				tagName: 'li',
	      content: 'Вопрос №' + i,
	      parentElement: ol
			});
			li.style.padding = '10px';

			for (var j = 1; j <= answersAmount; j++) {

        var label = this.createElement({
          tagName: 'label',
          content: '<input type="checkbox"> Вариант ответа №' + j,
          parentElement: ol
        });
        label.style.display = 'block';
        label.style.fontSize = '15px';
        label.style.fontWeight = 'normal';
        label.style.paddingLeft = '11px';
      }
    }
  }
}

var header = app.createElement({
	tagName: 'header',
	content: 'Тест по программированию',
	parentElement: body
});

header.style.textAlign = 'center';

var ol = app.createElement({
	tagName: 'ol',
	parentElement: body
});

app.generateQuestions(3, 3);

var button = app.createElement({
	tagName: 'button',
	inputType: 'button',
	className: 'btn btn-default center-block',
	content: 'Проверить мои результаты',
	parentElement: body
});
