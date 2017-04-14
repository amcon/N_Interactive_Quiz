$(function() {

  FB.init({appId: '274978829611159', status: true, cookie:true, xfbml: true});

  let quiz_pic = $('#quiz-pic').attr('src');
  let quiz_title = $('#quiz-title').text();
  let quiz_description = $('#quiz-description').text();

  let quiz_result = $('.result-title').text().toString();


  let questionOneTop = $('#q1').position();
  let questionTwoTop = $('#q2').position();
  let questionThreeTop = $('#q3').position();
  let questionFourTop = $('#q4').position();
  let questionFiveTop = $('#q5').position();
  let questionSixTop = $('#q6').position();
  // let questionSevenTop = $('#q7').position();
  // let questionEightTop = $('#q8').position();
  let answerTop = $('.result').position();

  let q1clickedOnce = false;
  let q2clickedOnce = false;
  let q3clickedOnce = false;
  let q4clickedOnce = false;
  let q5clickedOnce = false;
  let q6clickedOnce = false;
  // let q7clickedOnce = false;
  // let q8clickedOnce = false;

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
      $("html, body").animate({ scrollTop: (questionTwoTop.top) - 100}, "slow");
      updateCounter();
      q1clickedOnce = true;
      answerArr.push($(this).attr("value"));
      console.log(answerArr);
    } else {
      $('.q1').removeClass('q1chosen');
      $(this).addClass('q1chosen');
      $("html, body").animate({ scrollTop: (questionTwoTop.top) - 100}, "slow");
      answerArr.pop();
      answerArr.push($(this).attr("value"));
      console.log(answerArr);
    }
  });

  $('.q2').click(function() {
    if (q2clickedOnce === false) {
      $('.q2').removeClass('q2chosen');
      $(this).addClass('q2chosen');
      $("html, body").animate({ scrollTop: (questionThreeTop.top) - 100}, "slow");
      updateCounter();
      q2clickedOnce = true;
      if ($(this).attr("value") === "36") {
        answerArr.push("3");
        answerArr.push("6");
        console.log(answerArr);
      } else if ($(this).attr("value") === "25") {
        answerArr.push("2");
        answerArr.push("5");
        console.log(answerArr);
      } else if ($(this).attr("value") === "14") {
        answerArr.push("1");
        answerArr.push("4");
        console.log(answerArr);
      } else if ($(this).attr("value") === "16") {
        answerArr.push("1");
        answerArr.push("6");
        console.log(answerArr);
      } else {
        answerArr.push("1");
        answerArr.push("2");
        answerArr.push("4");
        answerArr.push("5");
        console.log(answerArr);
      }
    } else {
      $('.q2').removeClass('q2chosen');
      $(this).addClass('q2chosen');
      $("html, body").animate({ scrollTop: (questionThreeTop.top) - 100}, "slow");
      if ($(this).attr("value") === "36") {
        if (answerArr[answerArr.length -1] === "2") {
          answerArr.pop();
          answerArr.pop();
          answerArr.pop();
          answerArr.push("3");
          answerArr.push("6");
          console.log(answerArr);
        } else {
          answerArr.pop();
          answerArr.pop();
          answerArr.push("3");
          answerArr.push("6");
          console.log(answerArr);
        }
      } else if ($(this).attr("value") === "25") {
        if (answerArr[answerArr.length -1] === "2") {
          answerArr.pop();
          answerArr.pop();
          answerArr.pop();
          answerArr.push("2");
          answerArr.push("5");
          console.log(answerArr);
        } else {
          answerArr.pop();
          answerArr.pop();
          answerArr.push("2");
          answerArr.push("5");
          console.log(answerArr);
        }
      } else if ($(this).attr("value") === "14") {
        if (answerArr[answerArr.length -1] === "2") {
          answerArr.pop();
          answerArr.pop();
          answerArr.pop();
          answerArr.push("1");
          answerArr.push("4");
          console.log(answerArr);
        } else {
          answerArr.pop();
          answerArr.pop();
          answerArr.push("1");
          answerArr.push("4");
          console.log(answerArr);
        }
      } else if ($(this).attr("value") === "16") {
        if (answerArr[answerArr.length -1] === "2") {
          answerArr.pop();
          answerArr.pop();
          answerArr.pop();
          answerArr.push("1");
          answerArr.push("6");
          console.log(answerArr);
        } else {
          answerArr.pop();
          answerArr.pop();
          answerArr.push("1");
          answerArr.push("6");
          console.log(answerArr);
        }
      } else if ($(this).attr("value") === "462") {
        if (answerArr[answerArr.length -1] === "2") {
          answerArr.pop();
          answerArr.pop();
          answerArr.pop();
          answerArr.push("4");
          answerArr.push("6");
          answerArr.push("2");
          console.log(answerArr);
        } else {
          answerArr.pop();
          answerArr.pop();
          answerArr.push("4");
          answerArr.push("6");
          answerArr.push("2");
          console.log(answerArr);
        }
      }
    }
  });

  $('.q3').click(function() {
    if (q3clickedOnce === false) {
      $('.q3').removeClass('q3chosen');
      $(this).addClass('q3chosen');
      $("html, body").animate({ scrollTop: (questionFourTop.top) - 100}, "slow");
      updateCounter();
      q3clickedOnce = true;
      if ($(this).attr("value") === "14") {
        answerArr.push("1");
        answerArr.push("4");
        console.log(answerArr);
      } else {
        answerArr.push($(this).attr("value"));
        console.log(answerArr);
      }
    } else {
      $('.q3').removeClass('q3chosen');
      $(this).addClass('q3chosen');
      $("html, body").animate({ scrollTop: (questionFourTop.top) - 100}, "slow");
      if (answerArr[answerArr.length-1] === "4") {
        answerArr.pop();
        answerArr.pop();
        answerArr.push($(this).attr("value"));
        console.log(answerArr);
      } else {
        if ($(this).attr("value") === "14") {
          answerArr.pop();
          answerArr.push("1");
          answerArr.push("4");
          console.log(answerArr);
        } else {
          answerArr.pop();
          answerArr.push($(this).attr("value"));
          console.log(answerArr);
        }
      }
    }
  });

  $('.q4').click(function() {
    if (q4clickedOnce === false) {
      $('.q4').removeClass('q4chosen');
      $(this).addClass('q4chosen');
      $("html, body").animate({ scrollTop: (questionFiveTop.top) - 100}, "slow");
      updateCounter();
      q4clickedOnce = true;
      answerArr.push($(this).attr("value"));
    } else {
      $('.q4').removeClass('q4chosen');
      $(this).addClass('q4chosen');
      $("html, body").animate({ scrollTop: (questionFiveTop.top) - 100}, "slow");
      answerArr.pop();
      answerArr.push($(this).attr("value"));
    }
  });

  $('.q5').click(function() {
    if (q5clickedOnce === false) {
      $('.q5').removeClass('q5chosen');
      $(this).addClass('q5chosen');
      $("html, body").animate({ scrollTop: (questionSixTop.top) - 100}, "slow");
      updateCounter();
      q5clickedOnce = true;
      answerArr.push($(this).attr("value"));
      console.log(answerArr);
    } else {
      $('.q5').removeClass('q5chosen');
      $(this).addClass('q5chosen');
      $("html, body").animate({ scrollTop: (questionSixTop.top) - 100}, "slow");
      answerArr.pop();
      answerArr.push($(this).attr("value"));
      console.log(answerArr);
    }
  });

  $('.q6').click(function() {
    if (q6clickedOnce === false) {
      $('.q6').removeClass('q6chosen');
      $(this).addClass('q6chosen');
      console.log(answerArr);
      updateCounter();
      q6clickedOnce = true;
      answerArr.push($(this).attr("value"));
      console.log(answerArr);
      runLogic();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    } else {
      $('.q6').removeClass('q6chosen');
      $(this).addClass('q6chosen');
      console.log(answerArr);
      answerArr.pop();
      answerArr.push($(this).attr("value"));
      console.log(answerArr);
      runLogic();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    }
  });

  // $('.q7').click(function() {
  //   if (q7clickedOnce === false) {
  //     $('.q7').removeClass('q7chosen');
  //     $(this).addClass('q7chosen');
  //     $("html, body").animate({ scrollTop: (questionEightTop.top) - 100}, "slow");
  //     updateCounter();
  //     q7clickedOnce = true;
  //     answerArr.push($(this).attr("value"));
  //   } else {
  //     $('.q7').removeClass('q7chosen');
  //     $(this).addClass('q7chosen');
  //     $("html, body").animate({ scrollTop: (questionEightTop.top) - 100}, "slow");
  //     answerArr.pop();
  //     answerArr.push($(this).attr("value"));
  //   }
  // });

  // $('.q8').click(function() {
  //   if (q8clickedOnce === false) {
  //     $('.q8').removeClass('q8chosen');
  //     $(this).addClass('q8chosen');
  //     $("html, body").animate({ scrollTop: 0 }, "slow");
  //     updateCounter();
  //     q8clickedOnce = true;
  //     answerArr.push($(this).attr("value"));
  //     runLogic();
  //   } else {
  //     $('.q8').removeClass('q8chosen');
  //     $(this).addClass('q8chosen');
  //     $("html, body").animate({ scrollTop: 0 }, "slow");
  //     answerArr.pop();
  //     answerArr.push($(this).attr("value"));
  //   }
  // });

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
    if (completedCounter >= 6 && max === 1) {
      $('.result').addClass('finished');
      $('.result-image').addClass('leaf-image');
      $('.result-title').append('<h1>Nissan LEAF is for you</h1>');
      $('.result-description').append("<p>You love polar bears. You love the environment and want to make a difference being as green as possible. The Nissan LEAF is designed just for you. It’s perfect for city living and will cover your daily commute. Thanks to its 100% electric powertrain, you are protecting your city by emitting zero emissions. With its full-electric drive system, you get the best torque in stop-and-go situations. Drivers can enjoy the powerful, responsive acceleration and excellent quietness in the cabin while taking a respite from the city noises. You are making a smart choice!</p>");
      $('#share-results-twitter').click(function() {
        window.open("https://twitter.com/intent/tweet?url=https://amcon.github.io/N_Interactive_Quiz&text=Do this quiz! I got the NISSAN LEAF: ");
      });
      $('#share-results-facebook').click(function() {
        FB.ui({
          method: 'feed',
          link: 'https://amcon.github.io/N_Interactive_quiz',
          name: 'I got the Nissan LEAF! Try it yourself: ',
          description: quiz_description,
          picture: 'http://i.imgur.com/rT83ixU.jpg'
        }, function(response){});
      });
    } else if (completedCounter >= 6 && max === 2) {
      $('.result').addClass('finished');
      $('.result-image').addClass('note-image');
      $('.result-title').append('<h1>Nissan NOTE e-POWER is for you</h1>');
      $('.result-description').append("<p>You care about the environment and also your wallet. This is 2017 and you don’t have to compromise anymore! <br>The Nissan NOTE e-POWER series hybrid features a full electric-motor that drives the wheels and the gasoline engine simply charges the batteries. With the electric motor drivetrain, you get the best torque in stop-and-go situation and a strong, smooth acceleration. Whether you’re going to work, to school or on a cross-country road trip, Nissan’s got you covered. Prepare for compliments, because everyone is going to want your new snazzy car!</p>");
      $('#share-results-twitter').click(function() {
        window.open("https://twitter.com/intent/tweet?url=https://amcon.github.io/N_Interactive_Quiz&text=Do this quiz! I got the NISSAN NOTE e-POWER: ");
      });
      $('#share-results-facebook').click(function() {
        FB.ui({
          method: 'feed',
          link: 'https://amcon.github.io/N_Interactive_quiz',
          name: 'I got the Nissan NOTE e-Power! Try it yourself: ',
          description: quiz_description,
          picture: 'http://i.imgur.com/rT83ixU.jpg'
        }, function(response){});
      });
    } else if (completedCounter >= 6 && max === 3) {
      $('.result').addClass('finished');
      $('.result-image').addClass('gtr-image');
      $('.result-title').append('<h1>Nissan GT-R is for you</h1>');
      $('.result-description').append("<p>Did someone say speed? You are a fan of the fast and furious. Every inch of your senses needs to be pushed to the limits. That’s why the Nissan GT-R is for you. It’s one of the most iconic supercars in the world and is legendary among its fans. Its sleek exterior is sure to turn heads, and its luxurious interior is going to become your new happy place. <br>Get ready for a sea of compliments, because anyone who meets your GT-R is going to want one of their own.</p>");
      $('#share-results-twitter').click(function() {
        window.open("https://twitter.com/intent/tweet?url=https://amcon.github.io/N_Interactive_Quiz&text=Do this quiz! I got the NISSAN G-T-R: ");
      });
      $('#share-results-facebook').click(function() {
        FB.ui({
          method: 'feed',
          link: 'https://amcon.github.io/N_Interactive_quiz',
          name: 'I got the Nissan GT-R! Try it yourself: ',
          description: quiz_description,
          picture: 'http://i.imgur.com/rT83ixU.jpg'
        }, function(response){});
      });
   } else if (completedCounter >= 6 && max === 4) {
      $('.result').addClass('finished');
      $('.result-image').addClass('sofc-image');
      $('.result-title').append('<h1>SOFC is for you</h1>');
      $('.result-description').append("<p>You are a world warrior! You’ve watched Al Gore’s documentary and you are on the front lines of fighting against that inconvenient truth. <br>The SOFC is the world's first Solid-Oxide Fuel Cell powered prototype vehicle that runs on bio-ethanol fuel. The SOFC offers eco-friendly transportation and creates opportunities for regional energy production…all the while supporting existing infrastructure. What does that mean? That your carbon footprint is smaller than most people. Thanks for the changing the world, now hit the road!</p>");
      $('#share-results-twitter').click(function() {
        window.open("https://twitter.com/intent/tweet?url=https://amcon.github.io/N_Interactive_Quiz&text=Do this quiz! I got the NISSAN SOFC: ");
      });
      $('#share-results-facebook').click(function() {
        FB.ui({
          method: 'feed',
          link: 'https://amcon.github.io/N_Interactive_quiz',
          name: 'I got the Nissan SOFC! Try it yourself: ',
          description: quiz_description,
          picture: 'http://i.imgur.com/rT83ixU.jpg'
        }, function(response){});
      });
    } else if (completedCounter >= 6 && max === 5) {
      $('.result').addClass('finished');
      $('.result-image').addClass('xtrail-image');
      $('.result-title').append("<h1>Nissan X-TRAIL is for you</h1>");
      $('.result-description').append("<p>For you, it’s family and friends first. The Nissan X-Trail is made just for you and your adventures. <br>A hybrid SUV that will keep you on the go, while being surrounded by the people you care about. Not to mention, the X-Trail is fully equipped with all the Nissan Intelligent Mobility safety features to give you peace of mind when you are sending your kids to school or driving to your next ski-trip in the mountains. We know it’s hard to do-it-all, but the X-Trail makes it a little easier. Ready with your next adventure?</p>");
      $('#share-results-twitter').click(function() {
        window.open("https://twitter.com/intent/tweet?url=https://amcon.github.io/N_Interactive_Quiz&text=Do this quiz! I got the NISSAN X-TRAIL HYBRID: ");
      });
      $('#share-results-facebook').click(function() {
        FB.ui({
          method: 'feed',
          link: 'https://amcon.github.io/N_Interactive_quiz',
          name: 'I got the Nissan X-Trail! Try it yourself: ',
          description: quiz_description,
          picture: 'http://i.imgur.com/rT83ixU.jpg'
        }, function(response){});
      });
    } else if (completedCounter >= 6 && max === 6) {
      $('.result').addClass('finished');
      $('.result-image').addClass('bladeglider-image');
      $('.result-title').append('<h1>BLADEGLIDER is for you</h1>');
      $('.result-description').append("<p>You’re a different breed than most exotic sports car drivers! You want the best of both worlds, you care about speed but also emissions. Who’d have thought you could have it all? <br>The Nissan BladeGlider is a driving prototype that combines zero-emissions with high-performance in a revolutionary sports car design. Its innovative exterior design allows you to test the limits of speed and acceleration, providing the exhilaration of an open-topped race car with a safety of a coupe. It's the electric vehicle for car lovers! So what do you say Mr. Bond, how do you like your new ride?</p>");
      $('#share-results-twitter').click(function() {
        window.open("https://twitter.com/intent/tweet?url=https://amcon.github.io/N_Interactive_Quiz&text=Do this quiz! I got the NISSAN BLADEGLIDER: ");
      });
      $('#share-results-facebook').click(function() {
        FB.ui({
          method: 'feed',
          link: 'https://amcon.github.io/N_Interactive_quiz',
          name: 'I got the Nissan Bladeglider! Try it yourself: ',
          description: quiz_description,
          picture: 'http://i.imgur.com/rT83ixU.jpg'
        }, function(response){});
      });
    }
  };


  $('#take-again').click(function() {
    location.reload();
  });

  $('#share-quiz-email').click(function() {
    window.open("mailto:?subject=What new Nissan is designed to fit your personality?&body=Take this quiz:%0D%0Ahttps://amcon.github.io/N_Interactive_Quiz", "_blank");
  });


  // FB.init({appId: '274978829611159', status: true, cookie:true, xfbml: true});
  $('#share-quiz-facebook').click(function() {
    FB.ui({
      method: 'feed',
      link: 'https://amcon.github.io/N_Interactive_quiz',
      name: quiz_title,
      description: quiz_description,
      picture: 'http://i.imgur.com/rT83ixU.jpg'
    }, function(response){});
  });

  $('#share-quiz-twitter').click(function() {
    window.open("https://twitter.com/intent/tweet?url=https://amcon.github.io/N_Interactive_Quiz&text=What new Nissan is designed to fit your personality?");
  })

  $('#share-quiz-pinterest').click(function() {
    window.open("https://www.pinterest.com/pin/create/button/?url=https://amcon.github.io/N_Interactive_Quiz&media=http://i.imgur.com/rT83ixU.jpg&description=Nissan Intelligent Mobility is not about removing humans from the driving experience. Instead, it’s about building a better future for our customers where cars are their partners, helping drivers to become more confident and more connected. We believe that that people would still love to drive by themselves, so our task is to make their driving experience MORE, not less, exciting.");
  })

});
