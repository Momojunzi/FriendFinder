var questions = [
  "Say, when the next meal? I know I just ate a minute ago but I'm starving!",
  "Hmm, this bathtub looks like a fine place to take a nap!",
  "I'm not Feeling well! Human food makes me feel better!",
  "It's nighttime, please let me in. I won't let you sleep until you do.",
  "Oh no Vacuum!",
  "Pet me! Please please please please!",
  "Don't touch me! Don't even come near me!",
  "Is that chicken I smell? Can I have some?!",
  "I'm the boss! The rest of you better do what I say or else!",
  "Children, I'm the mother! It's time for your bath.",
];

(function createQuestions(){
  var form = $("#form");
  for(var i=0; i<questions.length; i++){
    var newQuestion = $(
      "<div class='form-group'>"+
        "<h4 class='question-number'>Question "+(i+1)+"</h4>"+
         "<label for='question'"+(i+1)+">"+questions[i]+"</label>"+
         "<select class='form-control survey-question' id='question'"+(i+1)+">"+
           "<option>1 strongly disagree</option>"+
           "<option>2</option>"+
           "<option>3</option>"+
           "<option>4</option>"+
           "<option>5 strongly agree</option>"+
         "</select>"+
     "</div>"
   );
   form.append(newQuestion);
  }
  form.append('<button type="button" class="btn btn-primary btn-lg btn-block survey-submit" data-toggle="modal" data-target="#friendModal">Submit</button>');
})();
