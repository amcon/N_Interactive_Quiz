console.log("we're runnin...")

$(function() {

  let questionOneTop = $('#q1').position();
  let questionTwoTop = $('#q2').position();
  let questionThreeTop = $('#q3').position();
  let questionFourTop = $('#q4').position();
  let questionFiveTop = $('#q5').position();
  let questionSixTop = $('#q6').position();
  let questionSevenTop = $('#q7').position();
  let questionEightTop = $('#q8').position();
  let answerTop = $('.result').position();

  let q1clickedOnce = false;
  let q2clickedOnce = false;
  let q3clickedOnce = false;
  let q4clickedOnce = false;
  let q5clickedOnce = false;
  let q6clickedOnce = false;
  let q7clickedOnce = false;
  let q8clickedOnce = false;

  let completedCounter = 0;

  let answerArr = [];
  let parsedArr = [];
  let max = 0;

  function updateCounter() {
    completedCounter++;
  }

  $('.q1').click(function() {
    if (q1clickedOnce === false) {
      $('.q1').removeClass('q1chosen');
      $(this).addClass('q1chosen');
      $("html, body").animate({ scrollTop: (questionTwoTop.top + 50 )}, "slow");
      updateCounter();
      q1clickedOnce = true;
      answerArr.push($(this).attr("value"));
    } else {
      $('.q1').removeClass('q1chosen');
      $(this).addClass('q1chosen');
      $("html, body").animate({ scrollTop: (questionTwoTop.top + 50 )}, "slow");
    }
  });

  $('.q2').click(function() {
    if (q2clickedOnce === false) {
      $('.q2').removeClass('q2chosen');
      $(this).addClass('q2chosen');
      $("html, body").animate({ scrollTop: (questionThreeTop.top + 50 )}, "slow");
      updateCounter();
      q2clickedOnce = true;
      answerArr.push($(this).attr("value"));
    } else {
      $('.q2').removeClass('q2chosen');
      $(this).addClass('q2chosen');
      $("html, body").animate({ scrollTop: (questionThreeTop.top + 50 )}, "slow");
    }
  });

  $('.q3').click(function() {
    if (q3clickedOnce === false) {
      $('.q3').removeClass('q3chosen');
      $(this).addClass('q3chosen');
      $("html, body").animate({ scrollTop: (questionFourTop.top + 50 )}, "slow");
      updateCounter();
      q3clickedOnce = true;
      answerArr.push($(this).attr("value"));
    } else {
      $('.q3').removeClass('q3chosen');
      $(this).addClass('q3chosen');
      $("html, body").animate({ scrollTop: (questionFourTop.top + 50 )}, "slow");
    }
  });

  $('.q4').click(function() {
    if (q4clickedOnce === false) {
      $('.q4').removeClass('q4chosen');
      $(this).addClass('q4chosen');
      $("html, body").animate({ scrollTop: (questionFiveTop.top + 50 )}, "slow");
      updateCounter();
      q4clickedOnce = true;
      answerArr.push($(this).attr("value"));
    } else {
      $('.q4').removeClass('q4chosen');
      $(this).addClass('q4chosen');
      $("html, body").animate({ scrollTop: (questionFiveTop.top + 50 )}, "slow");
    }
  });

  $('.q5').click(function() {
    if (q5clickedOnce === false) {
      $('.q5').removeClass('q5chosen');
      $(this).addClass('q5chosen');
      $("html, body").animate({ scrollTop: (questionSixTop.top + 50 )}, "slow");
      updateCounter();
      q5clickedOnce = true;
      answerArr.push($(this).attr("value"));
    } else {
      $('.q5').removeClass('q5chosen');
      $(this).addClass('q5chosen');
      $("html, body").animate({ scrollTop: (questionSixTop.top + 50 )}, "slow");
    }
  });

  $('.q6').click(function() {
    if (q6clickedOnce === false) {
      $('.q6').removeClass('q6chosen');
      $(this).addClass('q6chosen');
      $("html, body").animate({ scrollTop: (questionSevenTop.top + 50 )}, "slow");
      updateCounter();
      q6clickedOnce = true;
      answerArr.push($(this).attr("value"));
    } else {
      $('.q6').removeClass('q6chosen');
      $(this).addClass('q6chosen');
      $("html, body").animate({ scrollTop: (questionSevenTop.top + 50 )}, "slow");
    }
  });

  $('.q7').click(function() {
    if (q7clickedOnce === false) {
      $('.q7').removeClass('q7chosen');
      $(this).addClass('q7chosen');
      $("html, body").animate({ scrollTop: (questionEightTop.top + 50 )}, "slow");
      updateCounter();
      q7clickedOnce = true;
      answerArr.push($(this).attr("value"));
    } else {
      $('.q7').removeClass('q7chosen');
      $(this).addClass('q7chosen');
      $("html, body").animate({ scrollTop: (questionEightTop.top + 50 )}, "slow");
    }
  });

  $('.q8').click(function() {
    if (q8clickedOnce === false) {
      $('.q8').removeClass('q8chosen');
      $(this).addClass('q8chosen');
      $("html, body").animate({ scrollTop: (answerTop.top + 50 )}, "slow");
      updateCounter();
      q8clickedOnce = true;
      answerArr.push($(this).attr("value"));
      runLogic();
    } else {
      $('.q8').removeClass('q8chosen');
      $(this).addClass('q8chosen');
      $("html, body").animate({ scrollTop: (answerTop.top + 50 )}, "slow");
    }
  });

  function runLogic() {
    answerArr.forEach(function(x) {
      parsedArr.push(parseInt(x));
    });

    let oneArr = [];
    let twoArr = [];
    let threeArr = [];
    let fourArr = [];
    let fiveArr = [];
    let sixArr = [];
    let resultArr = [];

    parsedArr.forEach(function(x) {
      if (x === 1) {
        oneArr.push(x);
      } else if (x === 2) {
        twoArr.push(x);
      } else if (x === 3) {
        threeArr.push(x);
      } else if (x === 4) {
        fourArr.push(x);
      } else if (x === 5) {
        fiveArr.push(x);
      } else if (x === 6) {
        sixArr.push(x);
      }
    });

    resultArr.push(oneArr.length);
    resultArr.push(twoArr.length);
    resultArr.push(threeArr.length);
    resultArr.push(fourArr.length);
    resultArr.push(fiveArr.length);
    resultArr.push(sixArr.length);

    max = (resultArr.indexOf(Math.max(...resultArr)) + 1);

    appendResult();
  }

  function appendResult() {
    if (completedCounter === 8 && max === 1) {
      $('.result').addClass('finished');
      $('.result-title').append('<h1>NISSAN NUMBER 1</h1>');
    } else if (completedCounter === 8 && max === 2) {
      $('.result').addClass('finished');
      $('.result-title').append('<h1>NISSAN NUMBER 2</h1>');
    } else if (completedCounter === 8 && max === 3) {
      $('.result').addClass('finished');
      $('.result-title').append('<h1>NISSAN NUMBER 3</h1>');
    } else if (completedCounter === 8 && max === 4) {
      $('.result').addClass('finished');
      $('.result-title').append('<h1>NISSAN NUMBER 4</h1>');
    } else if (completedCounter === 8 && max === 5) {
      $('.result').addClass('finished');
      $('.result-title').append('<h1>NISSAN NUMBER 5</h1>');
    } else if (completedCounter === 8 && max === 6) {
      $('.result').addClass('finished');
      $('.result-title').append('<h1>NISSAN NUMBER 6</h1>');
    }
  };


  $('#take-again').click(function() {
    location.reload();
  });

});
