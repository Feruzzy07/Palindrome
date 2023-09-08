var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index',{
    phrase: "taco Cat"
  });
});

/*POST the form data*/
router.post('/', function(req, res, next) {
  res.render('index', {
    phrase: req.body.userText,
    message: getResultDescriptions(req.body.userText)
  })
})

module.exports = router;
function checkPalindrome(phrase){
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("")
  if (phrase.toLowerCase().replace(":","") === temp.toLowerCase().replace(":","")){
    return true
  }
  if (phrase.toLowerCase().replace(".","") === temp.toLowerCase().replace(".","")){
    return true
  }
  if (phrase.toLowerCase().replace(";","") === temp.toLowerCase().replace(";","")){
    return true
  }
  if (phrase.toLowerCase().replace("!","") === temp.toLowerCase().replace("!","")){
    return true
  }
  if (phrase.toLowerCase().replace("?","") === temp.toLowerCase().replace("?","")){
    return true
  }
  if (phrase.toLowerCase().replace(" ","") === temp.toLowerCase().replace(" ","")){
    return true
  }
  else {
    return false
  }
}

function getResultDescriptions (phrase){
  if(checkPalindrome(phrase)) {
    let temp = phrase.split("");
    temp = temp.reverse();
    return `${phrase} is a palindrome. ${temp} here it is spelt backwards.`
  }
  let temp = phrase.split("");
  temp = temp.reverse();
  return `${phrase} is not a palindrome. ${temp} here it is spelt backwards.`
}