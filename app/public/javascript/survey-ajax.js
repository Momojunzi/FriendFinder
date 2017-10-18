$('.survey-submit').on('click', function(){

  var newFriend = {
    name: $('#name-input').val().trim(),
    photo: $('#photo-link').val().trim(),
    scores: []
  };
  var surveyAnswers = $('.survey-question');
  for(var i=0; i<surveyAnswers.length; i++){
    newFriend.scores.push(Number(surveyAnswers[i].value[0]));
  }
  $.post('api/friends', newFriend, function(data) {
    if(data){
      console.log('new friend posted');
      $.get('api/bestfriend', function(data){
        $('#best-friend-name').html(data[0].name);
        $('#best-friend-img').attr('src', data[0].photo);
      });
      clearSurvey(surveyAnswers);
    }
    else{
      console.log('Something went wrong refresh the page and try again!');
    }
  });
});

function clearSurvey(answers){
  $('#name-input').val('');
  $('#photo-link').val('');
  for(var i=0; i< answers.length; i++){
    answers[i].value[0] = '';
  }
}
