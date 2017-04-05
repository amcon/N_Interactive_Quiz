$(function() {

  let quiz_pic = $('#quiz-pic').getAttribute('src');
  let quiz_title = $('#quiz-title').text();
  let quiz_description = $('#quiz-description').text();

  console.log(quiz_pic);

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
      answerArr.pop();
      answerArr.push($(this).attr("value"));
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
      answerArr.pop();
      answerArr.push($(this).attr("value"));
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
      answerArr.pop();
      answerArr.push($(this).attr("value"));
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
      answerArr.pop();
      answerArr.push($(this).attr("value"));
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
      answerArr.pop();
      answerArr.push($(this).attr("value"));
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
      answerArr.pop();
      answerArr.push($(this).attr("value"));
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
      answerArr.pop();
      answerArr.push($(this).attr("value"));
    }
  });

  $('.q8').click(function() {
    if (q8clickedOnce === false) {
      $('.q8').removeClass('q8chosen');
      $(this).addClass('q8chosen');
      $("html, body").animate({ scrollTop: 0 }, "slow");
      updateCounter();
      q8clickedOnce = true;
      answerArr.push($(this).attr("value"));
      runLogic();
    } else {
      $('.q8').removeClass('q8chosen');
      $(this).addClass('q8chosen');
      $("html, body").animate({ scrollTop: 0 }, "slow");
      answerArr.pop();
      answerArr.push($(this).attr("value"));
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
    if (completedCounter >= 8 && max === 1) {
      $('.result').addClass('finished');
      $('.result-image').addClass('leaf-image');
      $('.result-title').append('<h1>NISSAN LEAF</h1>');
      $('.result-description').append("<p>It'll now go up to 107 miles on a single charge. Thanks to constantly advancing technology and development of a newly standard 30 KWH battery, America's Best-Selling electric vehicle now has it's best range ever.</p>");
    } else if (completedCounter >= 8 && max === 2) {
      $('.result').addClass('finished');
      $('.result-image').addClass('note-image');
      $('.result-title').append('<h1>NISSAN NOTE e-POWER</h1>');
      $('.result-description').append("<p>The new drive system, e-POWER, is a 100% electric powertrain, making a clear distinction compared with conventional power units. The wheels of the Note e-Power are completely driven by the electric motor powered by the gasoline engine. Thanks to this full-electric motor drive system, drivers can enjoy the powerful, responsive acceleration and excellent quietness in various scenes and driving environments.</p>");
    } else if (completedCounter >= 8 && max === 3) {
      $('.result').addClass('finished');
      $('.result-image').addClass('gtr-image');
      $('.result-title').append('<h1>NISSAN G-T-R</h1>');
      $('.result-description').append("<p>Nissan unveiled the new 2017 GT-R, highlighted by a fresh look inside and out, as well as major driving performance enhancements and key new features. All told, this is the most significant change to Nissan's flagship super sports car since it was introduced in 2007. The 2017 GT-R's exterior receives a thorough makeover. The new 'V-motion' grille, one of Nissan's latest design signatures, has been slightly enlarged to provide better engine cooling.</p>");
    } else if (completedCounter >= 8 && max === 4) {
      $('.result').addClass('finished');
      $('.result-image').addClass('sofc-image');
      $('.result-title').append('<h1>NISSAN SOFC</h1>');
      $('.result-description').append("<p>Research and development of the e-Bio Fuel-Cell was announced by Nissan in June in Yokohama. The powertrain is clean, highly efficient, easy to supply, and it runs on 100-percent ethanol or ethanol-blended water. Its carbon-neutral emissions are as clean as the atmosphere, which will be the part of natural carbon cycle. Also, the e-Bio Fuel-Cell offers the brisk acceleration and silent driving of an EV, along with its low-running costs, while boasting the driving range of a gasoline-engine vehicle.</p>");
    } else if (completedCounter >= 8 && max === 5) {
      $('.result').addClass('finished');
      $('.result-image').addClass('xtrail-image');
      $('.result-title').append("<h1>NISSAN X-TRAIL HYBRID</h1>");
      $('.result-description').append("<p>Equipped with the 2.0-liter MR20DD hybrid engine that enables both driving and environmental performance, the new X-Trail Hybrid delivers a comfortable driving experience with its powerful acceleration and remarkable quietness, which eclipse those of typical 2.5-liter gasoline engines. In addition, all the grades achieve tax exemptions. In addition, the new X-Trail Hybrid will have Forward Emergency Braking as standard equipment, expanding its safety technology features.</p>");
    } else if (completedCounter >= 8 && max === 6) {
      $('.result').addClass('finished');
      $('.result-image').addClass('bladeglider-image');
      $('.result-title').append('<h1>NISSAN BLADEGLIDER</h1>');
      $('.result-description').append("<p>The debut of the Nissan Bladeglider prototypes forms part of Nissan's on-going commitment to the development of zero-emission vehicles and new automotive technologies including autonomous drive systems and connectivity. Nissan already sells the world's highest-volume zero-emission car, the LEAF, and is pioneering Intelligent Mobility systems that will be deployed in a range of vehicles over coming years.</p>");
    }
  };


  $('#take-again').click(function() {
    location.reload();
  });

  $('#share-quiz-email').click(function() {
    window.open("mailto:?subject=Based on Your Personality, We'll Tell You Your Perfect Nissan&body=Take this quiz:%0D%0Ahttps://amcon.github.io/N_Interactive_Quiz", "_blank");
  });


  FB.init({appId: '274978829611159', status: true, cookie:true, xfbml: true});
  $('#share-quiz-facebook').click(function() {
    FB.ui({
      method: 'feed',
      link: 'https://amcon.github.io/N_Interactive_quiz',
      name: quiz_title,
      description: quiz_description,
      image: quiz_pic
    }, function(response){});
  });

  $('#share-quiz-twitter').click(function() {
    window.open("https://twitter.com/intent/tweet?url=https://amcon.github.io/N_Interactive_Quiz&text=Check out this quiz!");
  })

  $('#share-quiz-pinterest').click(function() {
    window.open("https://www.pinterest.com/pin/create/button/?url=https://amcon.github.io/N_Interactive_Quiz&media=http://images.hgmsites.net/med/2014-nissan-rogue_100439768_m.jpg&description=Check out this quiz!")
  })

});
