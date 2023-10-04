function showDefaultTopic() {
    var defaultTopic = document.getElementById('topic2');
    if (defaultTopic) {
        defaultTopic.style.display = 'block';
    }
}


function showContent(topic, event) {
    event.preventDefault(); // Prevent the default behavior (scrolling)

    var allContent = document.querySelectorAll('.topic-content');
    allContent.forEach(function (element) {
        element.style.display = 'none';
    });

    var selectedContent = document.getElementById(topic);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

showDefaultTopic();
