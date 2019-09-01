const voted = {};

function checkVoter(name) {
    if (voted[name]) {
        console.log(name + ' уже проголосовал!');
    } else {
        voted[name] = true;
        console.log(name + ' голосуй...');
    }
}

checkVoter('Tom');
checkVoter('Mike');
checkVoter('Tom');