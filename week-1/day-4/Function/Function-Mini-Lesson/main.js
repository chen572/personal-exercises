const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."

function getWordCount(story) {
    
    const storyWithoutSC = removeSpecialChars(story);
    const storyWordArray = storySplit(storyWithoutSC);
    
    return wordCounter(storyWordArray);
}


function removeSpecialChars(story) {
    const specialChars = [",", ".", "'", '"', "?", "!", ";"]
    
    for (let i of specialChars) {
        story.split(i).join(" ");
    }
    return story
}

function storySplit(story) {
    return story.split(" ");
}

function wordCounter(story) {
    const wordCounts = {}
    
    for (let word of story) {
        if (word in wordCounts) {
            wordCounts[word]++;
        }
        else {
            wordCounts[word] = 1;
        }
    }

    return wordCounts;
}

console.log(getWordCount(story));